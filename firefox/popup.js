// TrueFloat 1.1.0: popup.js, built from src/settings.js, src/popup.js.
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
// ---- src/popup.js
const api = globalThis.browser ?? globalThis.chrome;
(document.getElementById('version')).textContent = `v${api.runtime.getManifest().version}`;
function stored(box, type) {
if (box.type === 'range') return +box.value > 1 ? +box.value : 0;
if (box.type === 'radio' || box.type === 'select-one') return typeof type === 'number' ? +box.value : box.value;
return box.checked;
}
const offers = (box) => (box instanceof HTMLSelectElement ? [...box.options].map((o) => o.value) : [box.value]);
const heads = ([...document.querySelectorAll('legend > button')]);
const section = ( head) => head.getAttribute('aria-controls') ?? '';
const fold = (head, shown) => {
head.setAttribute('aria-expanded', String(shown));
document.getElementById(section(head))?.toggleAttribute('hidden', !shown);
};
for (const head of heads)
head.addEventListener('click', () => {
fold(head, head.getAttribute('aria-expanded') === 'false');
const open = heads.filter((h) => h.getAttribute('aria-expanded') === 'true').map(section);
try {
api.storage.local.set({ open }).catch(() => {});
} catch {}
});
try {
api.storage.local.get('open').then(
({ open }) => {
if (Array.isArray(open)) for (const head of heads) fold(head, open.includes(section(head)));
},
() => {},
);
} catch {}
const TIES = [
['shots', 'shotRes'],
['grades', 'dbGrades', 'sellGrades', 'menuGems', 'charms', 'tidyNames', 'oneTier', 'seedNames', 'tierSearch'],
['tierSearch', 'tierPlace', 'tierAll', 'tierPremium', 'tierStrip'],
['tierStrip', 'patternPicker'],
['prices', 'priceRef', 'pricesCards', 'tradeUp', 'pricesDialog', 'menus', 'buyOrders'],
['pricesCards', 'plainMark'],
['pricesDialog', 'priceNet'],
['prices', 'offerAsks'],
['stickers', 'stickerCards', 'stickerPanel', 'stickerBadge', 'stickerCompact'],
['titles', 'tags', 'watchRow'],
['refresh', 'pace', 'fresh', 'tierAlert'],
['tierAlert', 'alertSound'],
['icons', 'glint'],
['salesGraph', 'salesOpen'],
];
const byId = ( id) => (document.getElementById(id));
const live = (id) => byId(id).checked && !byId(id).disabled;
function tie() {
for (const [lead, ...keys] of TIES) {
const on = live(lead);
for (const key of keys)
for (const box of (document.getElementsByName(key)))
box.disabled = !on;
}
}
api.storage.sync.get().then(
(values) => {
for (const [key, setting] of Object.entries(TF_SETTINGS)) {
const on = typeof values[key] === typeof setting.default ? values[key] : setting.default;
const boxes = ([...document.getElementsByName(key)]);
const offered = boxes.some((box) => offers(box).includes(String(on)));
const choice = String(!offered ? setting.default : on);
for (const box of boxes) {
if (box.type === 'range') {
const out = (document.getElementById(`${key}-value`));
const show = () =>
box.setAttribute('aria-valuetext', (out.textContent = stored(box, 0) ? box.value : 'Auto'));
box.value = String(on);
show();
box.addEventListener('input', show);
} else if (box.type === 'select-one') box.value = choice;
else box.checked = box.type === 'radio' ? box.value === choice : on === true;
box.disabled = false;
box.addEventListener('change', () => {
api.storage.sync.set({ [key]: stored(box, setting.default) });
tie();
});
}
}
const master = byId('enabled');
const groups = document.querySelectorAll('fieldset.group');
const fit = () => groups.forEach((group) => group.toggleAttribute('disabled', !master.checked));
master.addEventListener('change', fit);
fit();
tie();
},
() => {},
);
const dropLocal = () => api.storage.local.remove(['priceNetOn', 'premiumPlain', 'collectionPrice']).catch(() => {});
const reset = byId('reset');
const win = ( (globalThis));
let [armed, shown, pointer] = [false, 0, false];
function say(words, ms = 0, arm = false) {
clearTimeout(shown);
reset.textContent = words;
reset.classList.toggle('armed', (armed = arm));
if (ms) shown = setTimeout(() => say('Reset to defaults'), ms);
}
reset.addEventListener('pointerdown', () => (pointer = true));
reset.addEventListener('keydown', () => (pointer = false));
reset.addEventListener('blur', () => reset.classList.remove('calm'));
reset.addEventListener('click', () => {
if (armed)
return void dropLocal()
.then(() => api.storage.sync.clear())
.then(() => void (win.name = pointer ? 'tf-reset-pointer' : 'tf-reset'))
.then(
() => location.reload(),
() => {},
);
say('Click again to reset every setting', 4000, true);
});
if (/^tf-reset/.test(win.name)) {
reset.classList.toggle('calm', win.name === 'tf-reset-pointer');
win.name = '';
say('Settings reset', 3000);
reset.focus();
}
})();
