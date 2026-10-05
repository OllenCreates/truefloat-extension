// TrueFloat 1.1.0: toggles.js, built from src/settings.js, src/premium-plain.js, src/premium-store.js, src/prices-window.js, src/prices-port.js, src/prices-net-port.js, src/collection-price-port.js, src/catalog-ask.js, src/tradeup-ask.js, src/toggles.js.
(() => {
'use strict';
// ---- src/settings.js
const PACES = Object.freeze([40, 60, 120, 300, 600]);
const TF_SETTINGS = Object.freeze({
enabled: Object.freeze({ default: true, attr: '' }),
noGlow: Object.freeze({ default: true, attr: 'data-tf-noglow' }),
shots: Object.freeze({ default: true, attr: 'data-tf-shots' }),
shotRes: Object.freeze({ default: 'high', attr: 'data-tf-shotres' }),
theme: Object.freeze({ default: 'dark', attr: 'data-tf-theme' }),
cols: Object.freeze({ default: 0, attr: 'data-tf-cols' }),
titles: Object.freeze({ default: true, attr: 'data-tf-titles' }),
wear: Object.freeze({ default: true, attr: 'data-tf-wear' }),
tags: Object.freeze({ default: true, attr: 'data-tf-tags' }),
watchRow: Object.freeze({ default: true, attr: 'data-tf-watchrow' }),
buttons: Object.freeze({ default: true, attr: 'data-tf-buttons' }),
timer: Object.freeze({ default: true, attr: 'data-tf-timer' }),
buyRow: Object.freeze({ default: true, attr: 'data-tf-buyrow' }),
priceLine: Object.freeze({ default: true, attr: 'data-tf-priceline' }),
statusDot: Object.freeze({ default: true, attr: 'data-tf-statusdot' }),
age: Object.freeze({ default: true, attr: 'data-tf-age' }),
csfGrades: Object.freeze({ default: true, attr: 'data-tf-csfgrades' }),
grades: Object.freeze({ default: true, attr: 'data-tf-grades' }),
refresh: Object.freeze({ default: false, attr: 'data-tf-refresh' }),
pace: Object.freeze({ default: 60, attr: 'data-tf-pace' }),
fresh: Object.freeze({ default: false, attr: 'data-tf-fresh' }),
tierAlert: Object.freeze({ default: false, attr: 'data-tf-tieralert' }),
alertSound: Object.freeze({ default: false, attr: 'data-tf-alertsound' }),
bargain: Object.freeze({ default: true, attr: 'data-tf-bargain' }),
desc: Object.freeze({ default: true, attr: 'data-tf-desc' }),
chips: Object.freeze({ default: true, attr: 'data-tf-chips' }),
sellerRow: Object.freeze({ default: true, attr: 'data-tf-sellerrow' }),
tidyTop: Object.freeze({ default: true, attr: 'data-tf-tidytop' }),
ordersLine: Object.freeze({ default: true, attr: 'data-tf-ordersline' }),
quiet: Object.freeze({ default: true, attr: 'data-tf-quiet' }),
imageButtons: Object.freeze({ default: true, attr: 'data-tf-imagebuttons' }),
graph: Object.freeze({ default: true, attr: 'data-tf-graph' }),
graphNote: Object.freeze({ default: true, attr: 'data-tf-graphnote' }),
recs: Object.freeze({ default: true, attr: 'data-tf-recs' }),
similarList: Object.freeze({ default: true, attr: 'data-tf-similarlist' }),
salesGraph: Object.freeze({ default: true, attr: 'data-tf-salesgraph' }),
salesOpen: Object.freeze({ default: true, attr: 'data-tf-salesopen' }),
salesTable: Object.freeze({ default: true, attr: 'data-tf-salestable' }),
salesStats: Object.freeze({ default: true, attr: 'data-tf-salesstats' }),
salesSmart: Object.freeze({ default: true, attr: 'data-tf-salessmart' }),
dbGrades: Object.freeze({ default: true, attr: 'data-tf-dbgrades' }),
sellGrades: Object.freeze({ default: true, attr: 'data-tf-sellgrades' }),
tierSearch: Object.freeze({ default: true, attr: 'data-tf-tiers' }),
tierPlace: Object.freeze({ default: 'both', attr: 'data-tf-tierplace' }),
tierAll: Object.freeze({ default: true, attr: 'data-tf-tierall' }),
tierPremium: Object.freeze({ default: true, attr: 'data-tf-premium' }),
tierStrip: Object.freeze({ default: true, attr: 'data-tf-tierstrip' }),
patternPicker: Object.freeze({ default: true, attr: 'data-tf-picker' }),
prices: Object.freeze({ default: true, attr: 'data-tf-prices' }),
priceRef: Object.freeze({ default: 'csfloat-ask', attr: 'data-tf-priceref' }),
pricesCards: Object.freeze({ default: true, attr: 'data-tf-pricescards' }),
plainMark: Object.freeze({ default: true, attr: 'data-tf-plainmark' }),
tradeUp: Object.freeze({ default: true, attr: 'data-tf-tradeup' }),
pricesDialog: Object.freeze({ default: true, attr: 'data-tf-pricesdialog' }),
priceNet: Object.freeze({ default: true, attr: 'data-tf-pricenet' }),
priceGapHide: Object.freeze({ default: true, attr: 'data-tf-pricegaphide' }),
buyOrders: Object.freeze({ default: true, attr: 'data-tf-buyorders' }),
menus: Object.freeze({ default: true, attr: 'data-tf-menus' }),
menuGems: Object.freeze({ default: true, attr: 'data-tf-menugems' }),
tidyNames: Object.freeze({ default: true, attr: 'data-tf-tidynames' }),
oneTier: Object.freeze({ default: true, attr: 'data-tf-onetier' }),
seedNames: Object.freeze({ default: true, attr: 'data-tf-seednames' }),
charms: Object.freeze({ default: true, attr: 'data-tf-charms' }),
icons: Object.freeze({ default: true, attr: 'data-tf-icons' }),
glint: Object.freeze({ default: true, attr: 'data-tf-glint' }),
comboTab: Object.freeze({ default: true, attr: 'data-tf-combotab' }),
stickers: Object.freeze({ default: true, attr: 'data-tf-stickers' }),
stickerCards: Object.freeze({ default: true, attr: 'data-tf-stickercards' }),
stickerPanel: Object.freeze({ default: true, attr: 'data-tf-stickerpanel' }),
stickerRight: Object.freeze({ default: true, attr: 'data-tf-stickerright' }),
stickerBadge: Object.freeze({ default: true, attr: 'data-tf-stickerbadge' }),
stickerCompact: Object.freeze({ default: true, attr: 'data-tf-stickercompact' }),
catalogCards: Object.freeze({ default: true, attr: 'data-tf-catcards' }),
catalogStickers: Object.freeze({ default: true, attr: 'data-tf-catstickers' }),
catalogWindow: Object.freeze({ default: true, attr: 'data-tf-catwindow' }),
collectionWindow: Object.freeze({ default: true, attr: 'data-tf-colwin' }),
supplyStatus: Object.freeze({ default: true, attr: 'data-tf-supply' }),
tipBoxes: Object.freeze({ default: true, attr: 'data-tf-tipboxes' }),
offerAsks: Object.freeze({ default: true, attr: 'data-tf-offerasks' }),
offerContext: Object.freeze({ default: true, attr: 'data-tf-offerctx' }),
offerGraded: Object.freeze({ default: true, attr: 'data-tf-offergrade' }),
});
// ---- src/premium-plain.js
const PREMIUM_PLAIN = Object.freeze({
key: /^\d{1,5}:\d{1,5}:(st-|sv-)?:(fn|mw|ft|ww|bs)$/,
age: 216e5,
max: 60,
rs: 50,
});
function premiumPlainEntry(v, t, now) {
if (!t.arr(v)) return null;
const [k, at, rs] = [0, 1, 2].map((i) => t.own(v, i));
const n = t.arr(rs) ? t.own(rs, 'length') : -1;
if (!t.match(PREMIUM_PLAIN.key, k) || typeof at !== 'number' || !(at <= now && at > now - PREMIUM_PLAIN.age))
return null;
if (typeof n !== 'number' || !(n >= 0 && n <= PREMIUM_PLAIN.rs)) return null;
const out = [];
for (let i = 0; i < n; i++) {
const r = t.own(rs, i);
if (typeof r !== 'number' || !(r > 0 && r < 1000)) return null;
out.push(r);
}
return [k, at, out];
}
function premiumPlainList(v, t, now) {
const n = t.arr(v) ? t.own(v, 'length') : 0;
const by = new Map();
for (let i = 0; i < Math.min(typeof n === 'number' ? n : 0, PREMIUM_PLAIN.max); i++) {
const e = premiumPlainEntry(t.own(v, i), t, now);
if (e && !((by.get(e[0])?.[1] ?? -1) >= e[1])) by.set(e[0], e);
}
return [...by.values()].sort((a, b) => a[1] - b[1]);
}
// ---- src/premium-store.js
const PREMIUM_STORE = 'premiumPlain';
const PREMIUM_LOCAL = {
own: (o, k) => (o !== null && typeof o === 'object' && Object.hasOwn(o, k) ? o[k] : undefined),
arr: Array.isArray,
match: (re, v) => typeof v === 'string' && re.test(v),
};
async function premiumStored() {
try {
const got = await api.storage.local.get(PREMIUM_STORE);
return premiumPlainList(PREMIUM_LOCAL.own(got, PREMIUM_STORE), PREMIUM_LOCAL, Date.now());
} catch {
return [];
}
}
function createPremiumStore(port) {
const html = document.documentElement;
const on = () =>
(['grades', 'tierSearch', 'tierPremium']).every((k) => html.hasAttribute(TF_SETTINGS[k].attr));
let [sent, puts, chain] = [false, 0, Promise.resolve()];
return {
send() {
if (sent || !on() || !port) return;
sent = true;
chain = chain
.then(async () => {
const e = await premiumStored();
port.postMessage({ tf: 'plain', e });
const got = PREMIUM_LOCAL.own(await api.storage.local.get(PREMIUM_STORE), PREMIUM_STORE);
if (got === undefined || (PREMIUM_LOCAL.arr(got) && got.length === e.length)) return;
await (e.length ? api.storage.local.set({ [PREMIUM_STORE]: e }) : api.storage.local.remove(PREMIUM_STORE));
})
.catch(() => {});
},
put(data) {
if (!on() || PREMIUM_LOCAL.own(data, 'tf') !== 'plain' || ++puts > 20) return;
const e = premiumPlainEntry(PREMIUM_LOCAL.own(data, 'e'), PREMIUM_LOCAL, Date.now());
if (!e) return;
chain = chain
.then(async () => {
const keep = (await premiumStored()).filter((x) => x[0] !== e[0]);
await api.storage.local.set({ [PREMIUM_STORE]: [...keep, e].slice(-PREMIUM_PLAIN.max) });
})
.catch(() => {});
},
};
}
// ---- src/prices-window.js
const PRICE_CAP = Object.freeze({ pairs: 50, asks: 100, total: 5000, span: 6e5 });
function priceWindow(now) {
let spent = [];
return (n) => {
const t = now();
const live = [];
let pairs = n;
for (let j = 0; j < spent.length; j++)
if (t - spent[j][0] < PRICE_CAP.span) ((live[live.length] = spent[j]), (pairs += spent[j][1]));
spent = live;
if (live.length >= PRICE_CAP.asks || pairs > PRICE_CAP.total) return false;
spent[spent.length] = [t, n];
return true;
};
}
// ---- src/prices-port.js
const PORT_NAME = /^[^\p{Cc}\p{Cf}]{1,160}$/u;
const PORT_PHASE = /^(Phase [1-4]|Ruby|Sapphire|Black Pearl|Emerald)$/;
const portInt = (v, hi) => Number.isInteger(v) && (v) >= 0 && (v) <= hi;
function portPairs(q) {
if (!Array.isArray(q) || q.length < 1 || q.length > PRICE_CAP.pairs) return null;
const out = [];
for (const p of q) {
if (!Array.isArray(p) || p.length !== 2) return null;
const [name, phase] = p;
if (typeof name !== 'string' || !PORT_NAME.test(name)) return null;
if (phase !== null && !(typeof phase === 'string' && PORT_PHASE.test(phase))) return null;
out.push([name, phase]);
}
return out;
}
function portRows(r, n) {
if (!Array.isArray(r) || r.length !== n) return null;
const rows = [];
for (const row of r) {
if (row === null) {
rows.push(null);
continue;
}
if (!Array.isArray(row) || row.length !== 5) return null;
const slots = [];
for (const s of row) {
if (s === 0) slots.push(0);
else if (Array.isArray(s) && s.length === 4 && [2e8, 2e8, 1e7, 1e7].every((hi, i) => portInt(s[i], hi)))
slots.push([s[0], s[1], s[2], s[3]]);
else return null;
}
rows.push(slots);
}
return rows;
}
function createPricePort(port) {
if (!port) return;
const html = document.documentElement;
const on = () => html.hasAttribute(TF_SETTINGS.prices.attr);
const room = priceWindow(Date.now);
port.addEventListener('message', (m) => {
const d = m.data;
const own = ( k) =>
d !== null && typeof d === 'object' && Object.hasOwn(d, k) ? d[k] : undefined;
if (!on() || own('tf') !== 'price') return;
const [id, q] = [own('id'), portPairs(own('q'))];
if (!portInt(id, 1e9) || !q || !room(q.length)) return;
api.runtime
.sendMessage({ tf: 'price', q })
.then(
(r) => portRows(r, q.length),
() => null,
)
.then((r) => port.postMessage({ tf: 'price', id, r: on() ? r : null }))
.catch(() => {});
});
api.storage.onChanged.addListener(( c, area) => {
const [was, now] = [c.pricesMeta?.oldValue?.hash, c.pricesMeta?.newValue?.hash];
if (area === 'local' && typeof now === 'string' && now !== was && on()) port.postMessage({ tf: 'price-new' });
});
}
// ---- src/prices-net-port.js
const NET_KEY = 'priceNetOn';
function netPick(d) {
if (d === null || typeof d !== 'object' || Object.getPrototypeOf(d) !== Object.prototype) return null;
const keys = Object.keys(d);
const own = ( k) => (Object.hasOwn(d, k) ? (d)[k] : null);
const on = own('on');
return keys.length === 2 && own('tf') === 'net' && typeof on === 'boolean' ? on : null;
}
function createNetPort(port) {
const html = document.documentElement;
const on = () => html.hasAttribute(TF_SETTINGS.priceNet.attr);
let [sent, puts] = [false, 0];
port?.addEventListener('message', (m) => {
const pick = netPick(m.data);
if (pick === null || !on() || ++puts > 100) return;
api.storage.local.set({ [NET_KEY]: pick }).catch(() => {});
});
return {
send() {
if (!port) return;
if (!on()) {
sent = false;
api.storage.sync
.get('priceNet')
.then(
(
(v) => v.priceNet === false && api.storage.local.remove(NET_KEY)
),
)
.catch(() => {});
return;
}
if (sent) return;
sent = true;
api.storage.local.get(NET_KEY).then(
(got) => port.postMessage({ tf: 'net', on: got[NET_KEY] === true }),
() => {},
);
},
};
}
// ---- src/collection-price-port.js
const COLPRICE_KEY = 'collectionPrice';
const COLPRICE_WORDS = ['csfloat', 'cheapest', 'buff', 'youpin', 'steam', 'skinport'];
function colPricePick(d) {
if (d === null || typeof d !== 'object' || Object.getPrototypeOf(d) !== Object.prototype) return null;
const own = ( k) => (Object.hasOwn(d, k) ? (d)[k] : null);
const v = own('v');
const ok = Object.keys(d).length === 2 && own('tf') === 'colprice' && typeof v === 'string';
return ok && COLPRICE_WORDS.includes(v) ? v : null;
}
function createColPricePort(port) {
const html = document.documentElement;
const on = () => html.hasAttribute(TF_SETTINGS.collectionWindow.attr);
let [sent, puts] = [false, 0];
port?.addEventListener('message', (m) => {
const pick = colPricePick(m.data);
if (pick === null || !on() || ++puts > 100) return;
api.storage.local.set({ [COLPRICE_KEY]: pick }).catch(() => {});
});
return {
send() {
if (!port || !on()) return void (sent = false);
if (sent) return;
sent = true;
api.storage.local.get(COLPRICE_KEY).then(
(got) => {
const v = got[COLPRICE_KEY];
if (typeof v === 'string' && COLPRICE_WORDS.includes(v)) port.postMessage({ tf: 'colprice', v });
},
() => {},
);
},
};
}
// ---- src/catalog-ask.js
const CATALOG_ATTRS = [
TF_SETTINGS.catalogCards.attr,
TF_SETTINGS.catalogStickers.attr,
TF_SETTINGS.catalogWindow.attr,
TF_SETTINGS.supplyStatus.attr,
];
const catalogOn = () => CATALOG_ATTRS.some((a) => document.documentElement.hasAttribute(a));
function createCatalogAsk(port) {
let asked = false;
const ask = (again) => {
if (!catalogOn()) return void (asked = false);
if (!port || (asked && !again)) return;
asked = true;
api.runtime.sendMessage('catalog').then(
(text) => typeof text === 'string' && text && port.postMessage({ tf: 'catalog', text }),
() => {},
);
};
api.storage.onChanged.addListener((changes, area) => void (area === 'local' && changes.catalog && ask(true)));
return ask;
}
// ---- src/tradeup-ask.js
const TRADEUP_ATTRS = [TF_SETTINGS.prices.attr, TF_SETTINGS.tradeUp.attr];
const tradeupOn = () => TRADEUP_ATTRS.every((a) => document.documentElement.hasAttribute(a));
function createTradeupAsk(port) {
let [asked, had] = [false, ''];
const ask = (again) => {
if (!tradeupOn()) return void (asked = false);
if (!port || (asked && !again)) return;
asked = true;
api.runtime.sendMessage('tradeup').then(
(text) =>
typeof text === 'string' && text && text !== had && ((had = text), port.postMessage({ tf: 'tradeup', text })),
() => {},
);
};
const newer = (c) => c.pricesMeta?.newValue?.hash !== c.pricesMeta?.oldValue?.hash;
api.storage.onChanged.addListener((c, area) => void (area === 'local' && c.pricesMeta && newer(c) && ask(true)));
return ask;
}
// ---- src/toggles.js
const api = globalThis.browser ?? globalThis.chrome;
const CHOICES = {
theme: /^(dark|light)$/,
cols: /^([2-8]|10|12)$/,
pace: RegExp(`^(${PACES.join('|')})$`),
shotRes: /^(full|high|balanced)$/,
priceRef: /^(buff-ask|buff-bid|youpin-ask|youpin-bid|steam-ask|steam-bid|skinport-ask|csfloat-ask|csfloat-bid)$/,
tierPlace: /^(toolbar|filters|both)$/,
};
function mirror(values) {
const root = document.documentElement;
const on = values.enabled !== false;
for (const [key, setting] of Object.entries(TF_SETTINGS)) {
if (!setting.attr) continue;
let value = typeof values[key] === typeof setting.default ? values[key] : setting.default;
if (key === 'theme' && !/^(off|dark|light)$/.test(String(value))) value = setting.default;
const want =
on && (value === true || CHOICES[key]?.test(String(value))) ? (value === true ? '' : String(value)) : null;
if (want === root.getAttribute(setting.attr)) continue;
if (want !== null) root.setAttribute(setting.attr, want);
else root.removeAttribute(setting.attr);
}
}
let gradesPort;
try {
const doc = document;
const begun = () => !!(doc.head || doc.body);
if (doc.contentType === 'text/html' && doc.readyState === 'loading' && !begun()) {
const line = new MessageChannel();
let [heard, parsed, early] = [false, false, (undefined)];
const seen = ( r) =>
(parsed ||= begun() || r.some((m) => [...m.addedNodes].some((n) => /^(head|body)$/i.test(n.nodeName))));
const watch = new MutationObserver((r) => {
if (seen(r)) watch.disconnect();
});
watch.observe(doc.documentElement, { childList: true });
addEventListener(
'message',
(e) => {
if (heard || early || e.source !== window || e.data !== 'tf-grades') return;
early = e.ports[0];
e.stopImmediatePropagation();
},
true,
);
addEventListener('tf-grades', () => {
if (heard || seen(watch.takeRecords())) return;
heard = true;
watch.disconnect();
if (early) postMessage('tf-grades', location.origin, [early]);
});
postMessage('tf-grades', location.origin, [line.port2]);
gradesPort = line.port1;
}
} catch {}
const premiumStore = createPremiumStore(gradesPort);
const netPort = createNetPort(gradesPort);
const colPricePort = createColPricePort(gradesPort);
const catalogAsk = createCatalogAsk(gradesPort);
const tradeupAsk = createTradeupAsk(gradesPort);
try {
gradesPort?.addEventListener('message', (m) => premiumStore.put(m.data));
createPricePort(gradesPort);
gradesPort?.start();
} catch {}
let gradesAsked = false;
function gradesAsk(again) {
if (!document.documentElement.hasAttribute(TF_SETTINGS.grades.attr) || (gradesAsked && !again)) return;
gradesAsked = true;
api.runtime.sendMessage('grades').then(
(t) => typeof t === 'string' && t && gradesPort?.postMessage(t),
() => {},
);
}
const read = () =>
api.storage.sync
.get()
.then(mirror, () => {})
.then(() => (gradesAsk(), premiumStore.send(), netPort.send(), colPricePort.send(), catalogAsk(), tradeupAsk()))
.catch(() => {});
read();
api.storage.onChanged.addListener((changes, area) =>
area === 'sync' ? read() : area === 'local' && changes.grades && gradesAsk(true),
);
const dueAsk = () => {
const on = [TF_SETTINGS.grades.attr, TF_SETTINGS.prices.attr, ...CATALOG_ATTRS].some((a) =>
document.documentElement.hasAttribute(a),
);
try {
if (document.visibilityState === 'visible' && on) api.runtime.sendMessage('due').catch(() => {});
} catch {}
};
document.addEventListener('visibilitychange', (e) => void (e.isTrusted && dueAsk()));
setInterval(() => void dueAsk(), 6e5);
})();
