// TrueFloat 1.1.1: background.js, built from src/grades-file.js, src/background.js, src/prices-file.js, src/prices-bg.js, src/catalog-supply-file.js, src/catalog-file.js, src/catalog-bg.js.
(() => {
'use strict';
// ---- src/grades-file.js
const gradesKept = (() => {
const S = (max, re) => (v) => typeof v === 'string' && v.length <= max && (!re || re.test(v));
const I = (lo, hi) => (v) => Number.isInteger(v) && v >= lo && v <= hi;
const A =
(max, each, min = 1) =>
(v) =>
Array.isArray(v) && v.length >= min && v.length <= max && v.every(each);
const O = (keys) => (v) =>
v instanceof Object &&
Object.entries(keys).every(([k, ok]) =>
Object.hasOwn(v, k.replace('?', '')) ? ok(v[k.replace('?', '')]) : k.endsWith('?'),
);
const HEX = A(3, S(7, /^#[0-9a-f]{6}$/));
const SIDE = S(8, /^(playside|backside|both)$/);
const FRAME = O({ dataset_version: S(7, /^[0-9a-f]{7}$/), data: O({ schema: (v) => v === 1,
families: A(256, O({ id: S(40, /^[a-z0-9-]+$/), name: S(60), glyph: S(24), 'fallback?': S(24), colours: HEX, colours_light: HEX })),
guides: A(4096, O({ steam_id: S(12, /^\d{6,12}$/), title: S(200), authors: A(8, S(64), 0) })),
systems: A(8192, () => true) }) });
const SYSTEM = O({ guide: I(0, 4095), family: I(0, 255), kind: S(12), 'category?': S(12), 'side?': SIDE,
'definition?': S(2e3), 'colours?': HEX, 'colours_light?': HEX, items: A(64, A(2, I(1, 65535), 2)),
levels: A(512, () => true, 0) });
const LEVEL = O({ key: S(40), label: S(120), n: I(0, 1e3), 'side?': SIDE, 'definition?': S(2e3),
seeds: A(2e3, I(0, 1e3), 0), 'ranked?': A(2e3, A(2, I(0, 1e6), 2), 0), 'patterns?': A(2e3, I(0, 1e5), 0),
'range?': A(2, I(0, 1e5), 2) });
const W = ( max) => S(max, /^\P{C}+$/u);
const NAMES = ( v) =>
v instanceof Object &&
!Array.isArray(v) &&
Object.keys(v).length <= 300 &&
Object.entries(v).every(([k, x]) => /^\d{1,4}$/.test(k) && W(60)(x));
const SAYS = {
display: W(120),
display_sub: W(120),
display_note: W(120),
display_row: W(120),
names: NAMES,
names_display: NAMES,
};
const says = (o) => {
const bad = Object.keys(SAYS).filter((k) => Object.hasOwn(o, k) && !SAYS[k](o[k]));
if (bad.includes('names_display') && !bad.includes('names') && Object.hasOwn(o, 'names')) bad.push('names');
if (!bad.length) return o;
const c = { ...o };
for (const k of bad) delete c[k];
return c;
};
const gradesKept = (j) => {
if (!FRAME(j)) return null;
const { guides, families, systems } = j.data;
const [fams, gds] = [families.map(says), guides.map(says)];
const kept = systems.flatMap(( s) => {
if (!SYSTEM(s) || !guides[s.guide] || !families[s.family]) return [];
const levels = s.levels.filter(LEVEL).map(says);
const t = says(s);
if (!levels.length) return [];
return t === s &&
levels.length === s.levels.length &&
levels.every(( l, i) => l === s.levels[i])
? [s]
: [{ ...t, levels }];
});
if (!kept.length) return null;
const same = ( a, b) =>
a.length === b.length && a.every((x, i) => x === b[i]);
return same(kept, systems) && same(fams, families) && same(gds, guides)
? j
: { ...j, data: { ...j.data, families: fams, guides: gds, systems: kept } };
};
return gradesKept;
})();
// ---- src/background.js
{
const api = globalThis.browser ?? globalThis.chrome;
const [HOUR, DAY] = [36e5, 864e5];
const tagOf = ( tag, version) =>
typeof tag === 'string' && typeof version === 'string' && (tag === `"${version}"` || tag === `W/"${version}"`)
? tag
: '';
const off = async () => (await api.storage.sync.get('grades')).grades === false;
const drop = () => api.storage.local.remove(['grades', 'gradesMeta']);
const check = async () => {
const { enabled, grades } = await api.storage.sync.get();
const { gradesMeta: meta = {} } = await api.storage.local.get('gradesMeta');
const now = Date.now();
const due = !('etag' in meta) || !(now < meta.next && meta.next - now <= DAY);
if (grades === false) return void (await drop());
if (enabled === false || !due) return;
const later = ( ms) =>
api.storage.local.set({ gradesMeta: { ...meta, etag: meta.etag ?? '', next: now + ms } });
await later(HOUR);
const tag = tagOf(meta.etag, meta.version);
const res = await fetch('https://truefloat.app/api/v1/index', {
cache: 'no-store',
credentials: 'omit',
referrerPolicy: 'no-referrer',
redirect: 'error',
signal: AbortSignal.timeout(2e4),
headers: tag ? { 'If-None-Match': tag } : {},
});
if (await off()) return void (await drop());
if (res.status === 304 && tag) return void (await later(HOUR));
let size = 0;
const cap = new TransformStream({
transform: (c, out) => ((size += c.length) > 4 << 20 ? out.error() : out.enqueue(c)),
});
const text = res.ok && res.body ? await new Response(res.body.pipeThrough(cap)).text() : '';
const raw = JSON.parse(text);
const j = gradesKept(raw);
if (!j) return;
if (await off()) return void (await drop());
const etag = tagOf(res.headers.get('etag'), j.dataset_version);
const gradesMeta = { version: j.dataset_version, etag, next: now + HOUR };
const copy = j === raw ? text : JSON.stringify(j);
await api.storage.local
.set(j.dataset_version === meta.version ? { gradesMeta } : { gradesMeta, grades: copy })
.catch(() => later(DAY));
};
let busy = null;
const run = () =>
(busy ??= check()
.catch(() => {})
.finally(() => (busy = null)));
const prune = () =>
api.storage.local
.get('premiumPlain')
.then(({ premiumPlain: e }) => {
if (!Array.isArray(e)) return;
const keep = e.filter((x) => Array.isArray(x) && x[1] > Date.now() - 216e5);
if (keep.length < e.length)
return keep.length ? api.storage.local.set({ premiumPlain: keep }) : api.storage.local.remove('premiumPlain');
})
.catch(() => {});
const mark = async () => {
const { gradesMeta: m } = await api.storage.local.get('gradesMeta');
if (m) await api.storage.local.set({ gradesMeta: { ...m, next: 0 } });
};
api.runtime.onStartup.addListener(() => void (mark().catch(() => {}), prune()));
api.runtime.onInstalled.addListener(() => void api.storage.local.remove('folded').catch(() => {}));
api.runtime.onMessage.addListener((message, sender, answer) => {
if (sender.id !== api.runtime.id || (message !== 'grades' && message !== 'due')) return;
run();
prune();
if (message === 'due') return;
api.storage.local.get('grades').then(
({ grades }) => answer(typeof grades === 'string' ? grades : ''),
() => answer(''),
);
return true;
});
api.storage.onChanged.addListener((c, area) => {
if (area !== 'sync') return;
if (c.grades?.newValue === false) api.storage.local.remove(['grades', 'gradesMeta']).catch(() => {});
const reset = Object.values(c).some((v) => !!v && !('newValue' in v));
if (reset || ['enabled', 'grades', 'tierSearch', 'tierPremium'].some((k) => c[k]?.newValue === false))
api.storage.local.remove('premiumPlain').catch(() => {});
if (reset || ['prices', 'pricesDialog', 'priceNet'].some((k) => c[k]?.newValue === false))
api.storage.local.remove('priceNetOn').catch(() => {});
if (reset || ['enabled', 'prices', 'collectionWindow'].some((k) => c[k]?.newValue === false))
api.storage.local.remove('collectionPrice').catch(() => {});
});
}
// ---- src/prices-file.js
const priceFile = (() => {
const CAP = 9 << 20;
const MARKETS = ['buff', 'youpin', 'steam', 'skinport', 'csfloat'];
const NAME = /^[^\p{Cc}\p{Cf}]{1,160}$/u;
const PHASE = /^(Phase [1-4]|Ruby|Sapphire|Black Pearl|Emerald)$/;
const int = (v, lo, hi) => Number.isInteger(v) && v >= lo && v <= hi;
const obj = ( v) => v !== null && typeof v === 'object' && !Array.isArray(v);
const same = ( a, b) =>
Array.isArray(a) && a.length === b.length && b.every((x, i) => a[i] === x);
const ms = (v) =>
int(v, 1e9, 1e10)
? v * 1e3
: typeof v === 'string' && v.length <= 40 && /^\d{4}-\d\d-\d\dT[\d:.]+(Z|[+-]\d\d:\d\d)$/.test(v)
? Date.parse(v)
: NaN;
const DAY = 864e5;
const ahead = () => Math.floor((Date.now() + DAY) / 1e3);
const FIELDS = ['ask', 'bid', 'updated_at', 'count'];
const slot = (s, hi, w) =>
s === 0 ||
(Array.isArray(s) &&
s.length === w &&
int(s[0], 0, 2e8) &&
int(s[1], 0, 2e8) &&
int(s[2], 1e9, hi) &&
(w === 3 || int(s[3], 0, 1e7)));
const row = (r, w, hi = ahead()) => Array.isArray(r) && r.length === 5 && r.every((s) => slot(s, hi, w));
const width = (j) => (same(j?.fields, FIELDS) ? 4 : same(j?.fields, FIELDS.slice(0, 3)) ? 3 : 0);
const when = ( v) => v === null || (typeof v === 'number' && v >= 0) || Number.isFinite(ms(v));
const head = (j) =>
obj(j) &&
j.schema === 1 &&
j.source === 'OpenSkin' &&
j.source_url === 'https://openskin.dev' &&
j.currency === 'USD' &&
j.unit === 'cents' &&
same(j.markets, MARKETS) &&
width(j) > 0 &&
Number.isFinite(ms(j.generated_at)) &&
obj(j.items);
const valid = (j, hi = ahead()) =>
head(j) &&
ms(j.generated_at) <= hi * 1e3 &&
when(j.source_updated_at) &&
obj(j.fresh) &&
Object.entries(j.fresh).every(
([m, f]) =>
MARKETS.includes(m) && obj(f) && int(f.n, 0, 1e6) && ['newest', 'median', 'oldest'].every((k) => when(f[k])),
) &&
int(j.count, 1, 5e5) &&
Object.keys(j.items).length === j.count &&
Object.entries(j.items).every(([n, r]) => NAME.test(n) && row(r, width(j), hi));
const asks = (q) =>
Array.isArray(q) &&
q.length >= 1 &&
q.length <= 50 &&
q.every(
(p) =>
Array.isArray(p) &&
p.length === 2 &&
typeof p[0] === 'string' &&
NAME.test(p[0]) &&
(p[1] === null || (typeof p[1] === 'string' && PHASE.test(p[1]))),
);
const tagOf = ( tag, hash) =>
typeof tag === 'string' && typeof hash === 'string' && (tag === `"${hash}"` || tag === `W/"${hash}"`) ? tag : '';
const hash16 = async ( b) =>
[...new Uint8Array(await crypto.subtle.digest('SHA-256', b)).slice(0, 8)]
.map((x) => x.toString(16).padStart(2, '0'))
.join('');
const drain = async (stream) => {
let size = 0;
const cap = new TransformStream({
transform: (c, out) => ((size += c.length) > CAP ? out.error() : out.enqueue(c)),
});
return new Uint8Array(await new Response(stream.pipeThrough(cap)).arrayBuffer());
};
const pipe = ( b, how) =>
drain(new Blob([b]).stream().pipeThrough(how));
const pack = async (b) => {
const z = await pipe(b, new CompressionStream('gzip'));
let s = '';
for (let i = 0; i < z.length; i += 0x8000) s += String.fromCharCode(...z.subarray(i, i + 0x8000));
return btoa(s);
};
const unpack = async (s) => {
const bin = atob(s);
const b = new Uint8Array(bin.length);
for (let i = 0; i < bin.length; i++) b[i] = bin.charCodeAt(i);
return JSON.parse(new TextDecoder().decode(await pipe(b, new DecompressionStream('gzip'))));
};
return Object.freeze({ ms, row, width, head, valid, asks, tagOf, hash16, drain, pack, unpack });
})();
// ---- src/prices-bg.js
{
const api = globalThis.browser ?? globalThis.chrome;
const URL_PRICES = 'https://truefloat.app/api/v1/prices';
const [HOUR, DAY] = [36e5, 864e5];
const { ms, row, width, head, valid, asks, tagOf, hash16, drain, pack, unpack } = priceFile;
const settings = () => api.storage.sync.get(['enabled', 'prices']);
let [mem, gen] = [ (null), 0];
const memOf = ( hash, j) => ({
hash,
items: j.items,
w: width(j),
tu: j.tradeup && typeof j.tradeup === 'object' ? JSON.stringify(j.tradeup) : '',
});
const drop = () => ((mem = null), gen++, api.storage.local.remove(['prices', 'pricesMeta']));
const check = async () => {
const { enabled, prices } = await settings();
const { pricesMeta: meta = {} } = await api.storage.local.get('pricesMeta');
const now = Date.now();
const due = !('etag' in meta) || !(now < meta.next && meta.next - now <= DAY);
if (prices === false) return void (await drop());
if (enabled === false || !due) return;
const later = ( ms) =>
api.storage.local.set({ pricesMeta: { ...meta, etag: meta.etag ?? '', next: now + ms } });
await later(HOUR);
const tag = tagOf(meta.etag, meta.hash);
const res = await fetch(URL_PRICES, {
cache: 'no-store',
credentials: 'omit',
referrerPolicy: 'no-referrer',
redirect: 'error',
signal: AbortSignal.timeout(3e4),
headers: tag ? { 'If-None-Match': tag } : {},
});
const off = async () => (await settings()).prices === false;
if (await off()) return void (await drop());
if (res.status === 304 && tag) return;
const body = res.ok && res.body ? await drain(res.body) : new Uint8Array();
const j = JSON.parse(new TextDecoder('utf-8', { fatal: true }).decode(body));
if (!valid(j) || ms(j.generated_at) < (meta.at ?? 0)) return;
const hash = await hash16(body);
const g = gen;
if (await off()) return void (await drop());
const pricesMeta = { etag: tagOf(res.headers.get('etag'), hash), hash, at: ms(j.generated_at), next: now + HOUR };
if (g !== gen) return;
if (hash === meta.hash) return void (await api.storage.local.set({ pricesMeta }));
const stored = await pack(body);
if (g !== gen) return;
await api.storage.local.set({ prices: stored, pricesMeta }).then(
() => void (g === gen && (mem = memOf(hash, j))),
() => later(DAY),
);
};
let busy = null;
const run = () =>
(busy ??= check()
.catch(() => {})
.finally(() => (busy = null)));
let loading = null;
const load = async () => {
const { pricesMeta: meta } = (await api.storage.local.get('pricesMeta'));
if (!meta?.hash) return null;
if (mem?.hash === meta.hash) return mem;
const g = gen;
return (loading ??= (async () => {
const got = (await api.storage.local.get(['prices', 'pricesMeta']));
if (typeof got.prices !== 'string' || !got.pricesMeta?.hash) return null;
const j = await unpack(got.prices);
return head(j) && g === gen ? (mem = memOf(got.pricesMeta.hash, j)) : null;
})()
.catch(() => null)
.finally(() => (loading = null)));
};
const lookup = async ( q) => {
const s = await settings();
if (s.prices === false) await drop();
if (s.enabled === false || s.prices === false) return null;
const { pricesMeta: meta } = (await api.storage.local.get('pricesMeta'));
const due = run();
if (!meta?.hash) await due;
const data = await load();
const t = await settings();
if (!data || t.enabled === false || t.prices === false) return null;
const now = Date.now();
const age = ( at) => Math.min(1e7, Math.max(0, Math.floor((now - at * 1e3) / 6e4)));
return q.map(([name, phase]) => {
const key = phase === null ? name : `${name} - ${phase}`;
const r = Object.hasOwn(data.items, key) ? data.items[key] : null;
return row(r, data.w)
? r.map(( x) => (x === 0 ? 0 : [x[0], x[1], age(x[2]), x[3] ?? 0]))
: null;
});
};
const ours = ( s) => {
const csf = 'https://csfloat.com';
try {
const at = new URL(s.url).origin === csf && (s.origin ?? csf) === csf;
return s.id === api.runtime.id && !!s.tab && s.frameId === 0 && at;
} catch {
return false;
}
};
const mark = async () => {
const { pricesMeta: m } = (await api.storage.local.get('pricesMeta'));
if (m) await api.storage.local.set({ pricesMeta: { ...m, next: 0 } });
};
api.runtime.onStartup.addListener(() => void mark().catch(() => {}));
api.runtime.onMessage.addListener(( message, sender, answer) => {
const own = ( k) =>
message !== null && typeof message === 'object' && Object.hasOwn(message, k) ? message[k] : undefined;
if (message === 'due' && ours(sender)) return void run();
if (message === 'tradeup' && ours(sender)) {
settings()
.then((s) => (s.enabled === false || s.prices === false ? '' : load().then((d) => d?.tu ?? '')))
.then(answer, () => answer(''));
return true;
}
if (own('tf') !== 'price' || !ours(sender) || !asks(own('q'))) return;
lookup(own('q')).then(answer, () => answer(null));
return true;
});
api.storage.onChanged.addListener((c, area) => {
if (area === 'sync' && c.prices?.newValue === false) drop().catch(() => {});
});
}
// ---- src/catalog-supply-file.js
function catalogSupplyKept(raw, boxes, sets) {
if (raw === undefined) return undefined;
const obj = ( v) => v !== null && typeof v === 'object' && !Array.isArray(v);
const is = ( re, v) => typeof v === 'string' && re.test(v);
const CHANNEL = /^(weekly_drop|rare_drop|armory|operation|store|other)$/;
const [STATE, DATE, EVIDENCE] = [
/^(active|ended|unknown)$/,
/^\d{4}-(0[1-9]|1[0-2])-\d{2}$/,
/^(game_files|valve|reported|datamined)$/,
];
const entry = (v) => {
if (!Array.isArray(v) || v.length < 3 || v.length > 4) return null;
const [channel, state, since, evidence = null] = v;
if (!is(CHANNEL, channel) || !is(STATE, state) || !(since === null || is(DATE, since))) return null;
return [channel, state, since, is(EVIDENCE, evidence) ? evidence : null];
};
const kept = (m, known) => {
const out = {};
if (!obj(m) || Object.keys( (m)).length > 4096) return out;
for (const [k, v] of Object.entries( (m))) {
const e = known.has(k) ? entry(v) : null;
if (e) out[k] = e;
}
return out;
};
const own = ( k) =>
obj(raw) && Object.hasOwn( (raw), k) ? (raw)[k] : undefined;
return { containers: kept(own('containers'), boxes), collections: kept(own('collections'), sets) };
}
// ---- src/catalog-file.js
const catalogKept = (() => {
const own = (o, k) => (Object.hasOwn(o, k) ? o[k] : undefined);
const T = (max) => {
const re = RegExp(`^\\P{C}{1,${max}}$`, 'u');
return (v) => typeof v === 'string' && v.length <= 2 * max && re.test(v);
};
const K = (re) => (v) => typeof v === 'string' && re.test(v);
const I = (lo, hi) => (v) => Number.isInteger(v) && v >= lo && v <= hi;
const N = (ok) => (v) => v === null || ok(v);
const L = (max, ok) => (v) => Array.isArray(v) && v.length <= max && v.every(ok);
const tuple =
(n, ...oks) =>
(v) =>
Array.isArray(v) && v.length === n && oks.every((ok, i) => ok(v[i]));
const obj = ( v) => v !== null && typeof v === 'object' && !Array.isArray(v);
const entries = (v, max) => (obj(v) && Object.keys(v).length <= max ? Object.entries(v) : null);
const SKIN = K(/^\d{1,5}:\d{1,5}$/);
const BOX = K(/^(crate:\d{1,6}|operation:\d{1,4}:[a-z0-9_]{1,96}|armory:[a-z0-9_]{1,96}|pack:[a-z0-9_:]{1,96})$/);
const NAME = K(/^[a-z0-9_]{1,96}$/);
const TIER = I(0, 6);
const KIT = I(0, 999999);
const SKIN_OK = tuple(5, T(128), N(TIER), L(64, BOX), L(8, NAME), L(8, NAME));
const LOOT = L(7, tuple(2, TIER, L(256, SKIN)));
const GROUP = tuple(3, N(TIER), K(/^(sticker|patch|spray|charm|music|item)$/), L(4096, KIT));
const opt = (c, k, ok) => ok(own(c, k)) || (own(c, k) === undefined && L(0, SKIN)(own(c, 'loot')) && !own(c, 'pool'));
const BOX_OK = (c) =>
obj(c) &&
T(128)(own(c, 'name')) &&
opt(c, 'short', T(64)) &&
K(/^[a-z_]{1,32}$/)(own(c, 'kind')) &&
opt(c, 'market_hash_name', N(T(128))) &&
N(I(0, 99999))(own(c, 'event')) &&
N(NAME)(own(c, 'collection')) &&
N(NAME)(own(c, 'pool')) &&
LOOT(own(c, 'loot'));
const SOUVENIR = (s) =>
obj(s) &&
K(/^[a-z0-9_]{1,64}$/)(own(s, 'era')) &&
K(/^(assumed|documented)$/)(own(s, 'confidence')) &&
L(16, KIT)(own(s, 'event')) &&
L(128, tuple(2, I(0, 1e7), KIT))(own(s, 'teams')) &&
L(1024, tuple(3, I(0, 1e7), I(0, 2 ** 32), KIT))(own(s, 'players'));
const EVENT_OK = (e) =>
obj(e) && T(64)(own(e, 'name')) && I(1990, 2200)(own(e, 'year')) && N(SOUVENIR)(own(e, 'souvenir'));
const MAPS = ['skins', 'containers', 'pools', 'packages', 'collections', 'events', 'stickers'];
const CAPS = [16384, 4096, 256, 4096, 1024, 512, 32768];
const ID = /^\d{1,6}$/;
const copy = ( xs) => xs.map((x) => (Array.isArray(x) ? [...x] : x));
const known = (m, ids) => ids.filter((id) => m.has(id));
const catalogKept = (raw) => {
const d = obj(raw) ? own(raw, 'data') : null;
const version = obj(raw) ? own(raw, 'catalog_version') : null;
if (!obj(d) || !K(/^[0-9a-f]{6,16}$/)(version) || own(d, 'schema') !== 1) return null;
const tiers = own(d, 'tiers');
if (!(Array.isArray(tiers) && tiers.length === 7 && tiers.every(K(/^[a-z]{3,12}$/)))) return null;
const m = {};
for (const [i, k] of MAPS.entries()) {
const e = entries(own(d, k), CAPS[i]);
if (!e) return null;
m[k] = e;
}
const collections = new Map(m.collections.filter(([k, v]) => NAME(k) && T(120)(v)));
const stickers = m.stickers.filter(([k, v]) => ID.test(k) && T(128)(v));
const allNames = obj(own(d, 'names')) ? own(d, 'names') : {};
const named = ( kind) =>
(entries(own(allNames, kind), 4096) ?? []).filter(([k, v]) => ID.test(k) && T(128)(v));
const names = ['spray', 'charm', 'music', 'item'].map((kind) => [kind, Object.fromEntries(named(kind))]);
const shaped = new Map(m.skins.filter(([k, v]) => SKIN(k) && SKIN_OK(v)));
const pools = new Map();
for (const [k, v] of m.pools) {
const refs = NAME(k) && L(512, SKIN)(v) ? known(shaped, v) : [];
if (refs.length) pools.set(k, refs);
}
const events = (new Map());
for (const [k, e] of m.events) {
if (!/^\d{1,5}$/.test(k) || !EVENT_OK(e)) continue;
const s = own(e, 'souvenir');
const [era, confidence] = s ? [own(s, 'era'), own(s, 'confidence')] : [];
const souvenir = s && { era, confidence, event: [...s.event], teams: copy(s.teams), players: copy(s.players) };
events.set(k, { name: own(e, 'name'), year: own(e, 'year'), souvenir });
}
const boxes = (new Map());
for (const [k, c] of m.containers) {
if (!BOX(k) || !BOX_OK(c)) continue;
const loot = own(c, 'loot')
.map(( [t, refs]) => [t, known(shaped, refs)])
.filter(( [, refs]) => refs.length);
const [pool, event, set] = [own(c, 'pool'), own(c, 'event'), own(c, 'collection')];
const all = own(c, 'goods');
const goods = (Array.isArray(all) && all.length <= 64 ? all : [])
.filter(GROUP)
.flatMap(( [t, kind, ids]) => (ids.length ? [[t, kind, [...ids]]] : []));
if (!loot.length && !pools.has(pool) && !goods.length) continue;
const [name, short, mhn] = [own(c, 'name'), own(c, 'short'), own(c, 'market_hash_name')];
boxes.set(k, {
name,
short: short ?? name,
kind: own(c, 'kind'),
market_hash_name: mhn === undefined ? name : mhn,
event: events.has(`${event}`) ? event : null,
collection: collections.has(set) ? set : null,
loot,
pool: pools.has(pool) ? pool : null,
...(goods.length ? { goods } : {}),
});
}
const skins = [...shaped].map(([k, [name, tier, cs, sets, ps]]) => {
return [k, [name, tier, known(boxes, cs), known(collections, sets), known(pools, ps)]];
});
const supply = catalogSupplyKept(own(d, 'supply'), boxes, collections);
const data = { schema: 1, tiers: [...tiers], names: Object.fromEntries(names), supply };
const out = { skins, containers: boxes, pools, collections, events, stickers };
for (const [k, v] of Object.entries(out)) Object.assign(data, { [k]: Object.fromEntries(v) });
return { catalog_version: version, data };
};
return catalogKept;
})();
// ---- src/catalog-bg.js
{
const api = globalThis.browser ?? globalThis.chrome;
const URL_CATALOG = 'https://truefloat.app/api/v1/catalog/ext';
const [HOUR, DAY] = [36e5, 864e5];
const KEYS = ['catalogCards', 'catalogStickers', 'catalogWindow', 'supplyStatus'];
const settings = () => api.storage.sync.get(['enabled', ...KEYS]);
const wanted = ( s) => KEYS.some((k) => s[k] !== false);
const off = async () => !wanted(await settings());
const drop = () => api.storage.local.remove(['catalog', 'catalogMeta']);
const tagOf = ( tag, version) =>
typeof tag === 'string' && typeof version === 'string' && (tag === `"${version}"` || tag === `W/"${version}"`)
? tag
: '';
const check = async () => {
const s = await settings();
const { catalogMeta: meta = {} } = await api.storage.local.get('catalogMeta');
const now = Date.now();
const due = !(now < meta.next && meta.next - now <= DAY);
if (!wanted(s)) return void (await drop());
if (s.enabled === false || !due) return;
const later = ( ms) =>
api.storage.local.set({ catalogMeta: { ...meta, etag: meta.etag ?? '', next: now + ms } });
await later(HOUR);
const tag = tagOf(meta.etag, meta.version);
const res = await fetch(URL_CATALOG, {
cache: 'no-store',
credentials: 'omit',
referrerPolicy: 'no-referrer',
redirect: 'error',
signal: AbortSignal.timeout(2e4),
headers: tag ? { 'If-None-Match': tag } : {},
});
if (await off()) return void (await drop());
if (res.status === 304 && tag) return void (await later(DAY));
let size = 0;
const cap = new TransformStream({
transform: (c, out) => ((size += c.length) > 4 << 20 ? out.error() : out.enqueue(c)),
});
const text = res.ok && res.body ? await new Response(res.body.pipeThrough(cap)).text() : '';
const j = catalogKept(JSON.parse(text));
if (!j) return;
if (await off()) return void (await drop());
const etag = tagOf(res.headers.get('etag'), j.catalog_version);
const catalogMeta = { version: j.catalog_version, etag, next: now + DAY };
const fresh = j.catalog_version === meta.version ? {} : { catalog: JSON.stringify(j) };
await api.storage.local.set({ catalogMeta, ...fresh }).catch(() => later(DAY));
};
let busy = null;
const run = () =>
(busy ??= check()
.catch(() => {})
.finally(() => (busy = null)));
const ours = ( s) => {
const csf = 'https://csfloat.com';
try {
const at = new URL(s.url).origin === csf && (s.origin ?? csf) === csf;
return s.id === api.runtime.id && !!s.tab && s.frameId === 0 && at;
} catch {
return false;
}
};
const stored = async () => {
const s = await settings();
if (s.enabled === false || !wanted(s)) return '';
const { catalog } = await api.storage.local.get('catalog');
return typeof catalog === 'string' ? catalog : '';
};
const mark = async ( whole) => {
const { catalogMeta: m } = (await api.storage.local.get('catalogMeta'));
if (m) await api.storage.local.set({ catalogMeta: whole ? { next: 0 } : { ...m, next: 0 } });
};
api.runtime.onStartup.addListener(() => void mark(false).catch(() => {}));
api.runtime.onInstalled.addListener(
({ reason }) => void ((reason === 'install' || reason === 'update') && mark(true).catch(() => {})),
);
api.runtime.onMessage.addListener((message, sender, answer) => {
if ((message !== 'catalog' && message !== 'due') || !ours(sender)) return;
run();
if (message === 'due') return;
stored().then(answer, () => answer(''));
return true;
});
api.storage.onChanged.addListener((c, area) => {
if (area !== 'sync') return;
const reset = Object.values(c).some((v) => !!v && !('newValue' in v));
if (!reset && !KEYS.some((k) => c[k]?.newValue === false)) return;
(async () => (reset || (await off())) && (await drop()))().catch(() => {});
});
}
})();
