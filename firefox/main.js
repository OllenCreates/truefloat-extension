// TrueFloat 1.1.4: main.js, built from src/main-once.js, src/settings.js, src/selectors.js, src/tap-base.js, src/tap.js, src/tap-fields.js, src/tap-keys.js, src/tap-stickers.js, src/tap-history.js, src/tap-db.js, src/tap-inventory.js, src/tap-orders.js, src/rate.js, src/press.js, src/ticker.js, src/card-marks.js, src/card-hub.js, src/shot-match.js, src/shot-viewport.js, src/shot-sharp.js, src/shots.js, src/card-read.js, src/card-layout.js, src/age.js, src/attention.js, src/fresh.js, src/alert.js, src/refresh.js, src/chip-text.js, src/chip-line.js, src/chip.js, src/bargain.js, src/price-fit.js, src/dialog-about.js, src/dialog.js, src/tip-words.js, src/tip-box.js, src/grade-art-rows.js, src/grade-art.js, src/grade-art-mid.js, src/grade-panel-draw.js, src/grade-panel.js, src/csf-grades.js, src/grade-index.js, src/grade-says.js, src/grade-charm.js, src/grade-port.js, src/catalog-index.js, src/catalog-goods.js, src/catalog-images.js, src/catalog-data.js, src/catalog-supply.js, src/grade-words.js, src/grade-names.js, src/grade-read.js, src/grades.js, src/frame.js, src/sales-units.js, src/sales-smart.js, src/sales-plot.js, src/sales-table.js, src/sales-open.js, src/sales-tip.js, src/sales-graph.js, src/sales.js, src/db-draw.js, src/db-grades.js, src/tier-names.js, src/tier-pages.js, src/tier-query.js, src/tier-net.js, src/tier-page.js, src/tier-body.js, src/tier-nav.js, src/tier-pop-guide.js, src/tier-pop.js, src/tier-picker.js, src/tier-patterns.js, src/tier-row.js, src/tier-strip.js, src/premium-plain.js, src/premium-rows.js, src/premium-math.js, src/premium-words.js, src/premium-line.js, src/premium-sample.js, src/premium-books.js, src/tier-premium.js, src/sell-words.js, src/prices-window.js, src/prices-slots.js, src/prices.js, src/prices-money.js, src/prices-view.js, src/prices-fees.js, src/prices-net.js, src/prices-goods.js, src/prices-panel-parts.js, src/buy-orders-line.js, src/buy-orders-guard.js, src/buy-orders.js, src/prices-panel-draw.js, src/prices-panel.js, src/prices-chip.js, src/plain-mark.js, src/prices-pop.js, src/prices-hold.js, src/prices-want.js, src/prices-cards.js, src/offer-read.js, src/offer-draw.js, src/offer.js, src/tradeup.js, src/tradeup-cards.js, src/sticker-rule.js, src/sticker-math.js, src/sticker-pop.js, src/sticker-cards.js, src/sticker-panel-draw.js, src/sticker-panel.js, src/menu-names.js, src/menu-draw.js, src/menu-pop.js, src/menu-keep.js, src/menu-cards.js, src/tier-leave.js, src/tier-fit.js, src/tier-pick.js, src/tier-draw.js, src/tier-bar.js, src/db-merge-sort.js, src/db-tiers.js, src/db-merge.js, src/sell-queue.js, src/sell-grades.js, src/combo-tab.js, src/catalog-from.js, src/catalog-fit.js, src/catalog-cards.js, src/catalog-pop.js, src/catalog-strip.js, src/catalog-grid.js, src/catalog-rows.js, src/catalog-window.js, src/catalog-supply-line.js, src/collection-data.js, src/collection-go.js, src/collection-draw.js, src/collection-menu.js, src/collection-parts.js, src/collection-window.js, src/left-tidy.js, src/main-taps.js, src/main.js, src/main-tail.js.
(() => {
'use strict';
// ---- src/main-once.js
function mainFirst() {
const mark = Symbol.for('truefloat.main');
if (Object.hasOwn(document, mark)) return false;
return Reflect.defineProperty(document, mark, { value: true });
}
if (!mainFirst()) return;
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
dbTiers: Object.freeze({ default: true, attr: 'data-tf-dbtiers' }),
dbMerge: Object.freeze({ default: true, attr: 'data-tf-dbmerge' }),
tierPlace: Object.freeze({ default: 'both', attr: 'data-tf-tierplace' }),
tierAll: Object.freeze({ default: true, attr: 'data-tf-tierall' }),
tierPremium: Object.freeze({ default: true, attr: 'data-tf-premium' }),
tierStrip: Object.freeze({ default: true, attr: 'data-tf-tierstrip' }),
leftLow: Object.freeze({ default: true, attr: 'data-tf-leftlow' }),
patternPicker: Object.freeze({ default: true, attr: 'data-tf-picker' }),
prices: Object.freeze({ default: true, attr: 'data-tf-prices' }),
priceRef: Object.freeze({ default: 'lowest-ask', attr: 'data-tf-priceref' }),
pricesCards: Object.freeze({ default: true, attr: 'data-tf-pricescards' }),
plainMark: Object.freeze({ default: true, attr: 'data-tf-plainmark' }),
tradeUp: Object.freeze({ default: true, attr: 'data-tf-tradeup' }),
pricesDialog: Object.freeze({ default: true, attr: 'data-tf-pricesdialog' }),
priceNet: Object.freeze({ default: true, attr: 'data-tf-pricenet' }),
priceGapHide: Object.freeze({ default: true, attr: 'data-tf-pricegaphide' }),
pricesGoods: Object.freeze({ default: true, attr: 'data-tf-pricesgoods' }),
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
stickerRule: Object.freeze({ default: 'strict', attr: 'data-tf-stickerrule' }),
stickerW1: Object.freeze({ default: 20, attr: 'data-tf-stickerw1' }),
stickerW2: Object.freeze({ default: 10, attr: 'data-tf-stickerw2' }),
stickerW3: Object.freeze({ default: 0, attr: 'data-tf-stickerw3' }),
catalogCards: Object.freeze({ default: true, attr: 'data-tf-catcards' }),
catalogStickers: Object.freeze({ default: true, attr: 'data-tf-catstickers' }),
catalogWindow: Object.freeze({ default: true, attr: 'data-tf-catwindow' }),
collectionWindow: Object.freeze({ default: true, attr: 'data-tf-colwin' }),
supplyStatus: Object.freeze({ default: true, attr: 'data-tf-supply' }),
tipBoxes: Object.freeze({ default: true, attr: 'data-tf-tipboxes' }),
offerAsks: Object.freeze({ default: true, attr: 'data-tf-offerasks' }),
offerContext: Object.freeze({ default: true, attr: 'data-tf-offerctx' }),
offerGraded: Object.freeze({ default: true, attr: 'data-tf-offergrade' }),
discordBar: Object.freeze({ default: true, attr: 'data-tf-discordbar' }),
});
// ---- src/selectors.js
const TF_SELECTORS = Object.freeze({
card: 'item-card',
glow: 'item-card app-item-image-actions > div.container',
badgeRow: 'item-card app-item-image-actions > div.container > div.badge-container',
inspectLink: 'a.inspect-link',
cardImage: 'app-item-image-actions > div.container img',
nameBox: 'app-item-name .name-container',
watch: 'app-item-image-actions .top-right-container > .action',
statusWord: 'app-seller-details-widget > div.seller-details > span.text',
floatValue: 'item-float-bar .wear-value',
itemName: 'app-item-name .name-container > .item-name',
subtext: 'app-item-name .subtext',
itemImg: 'img.item-img',
bundle: 'app-item-name .amount',
paintSeed: 'item-float-bar .paint-seed',
listingOff: 'button.status-button',
refreshButton: 'app-search-bar div.refresh > button:not(.tf-chip)',
bargain: 'item-card .bargain-btn',
price: '.price-row .price',
priceRow: '.footer > .price-row',
auction: '.footer > .auction-details',
dialog: 'item-detail',
dialogGrid: 'item-detail > .container',
about: '.grid-summary > .item-schema-details',
flavour: '.flavour-text',
historyHeader: '.grid-history > .header',
buyOrders: '.grid-summary > .buy-orders',
history: '.grid-history',
salesChart: 'item-history-chart',
salesTable: 'item-latest-sales',
searchBar: 'app-search-bar > div.container',
signIn: 'app-header button.login',
searchError: 'app-item-container app-error',
signedIn: 'app-header button.user',
dbTable: 'app-float-dbtable',
dbHistoryButton: 'app-float-dbtable button.floatdb-history-btn',
dbHistoryTitle: 'app-history-dialog .t-text > .title',
dbSearch: 'app-float-db-search',
dbBar: 'app-float-dbtable div.search-container > div.bar',
dbFilterButton: ':scope > div.filter-btn',
dbResults: 'app-float-dbtable div.search-container > div.table-container',
menuCard: 'app-skin-bar-overlay app-skin-bar-item > div.item',
menuText: ':scope > .item-details > .text-container',
menuFrom: ':scope > .sub-text',
menuImage: ':scope > .image',
menuImg: ':scope > .image > img',
stickerBox: 'app-item-image-actions > div.container > .sticker-container',
stickerBadge: 'app-sticker-overpay',
charmRow: ':scope > .keychain-row',
sellPage: 'app-sell-home',
sellCard: 'app-sell-home app-item-container item-card',
sellQueue: 'app-sell-home app-sell-queue div.items',
actionRows: '.actions-container, app-sell-queue .actions, item-card .item-tmpl > .action',
overlays: 'item-detail, mat-dialog-container, .mat-mdc-menu-panel, .mat-mdc-select-panel',
offer: 'app-make-offer-dialog',
offerMin: '.details > .minimum-offer',
offerField: '.details > .inputs > .offer-price-field',
offerInput: ':scope > mat-form-field input.mat-mdc-input-element',
offerError: ':scope > mat-form-field mat-error',
offerNotice: '.details > .notice',
offerGrid: '.container > .content',
offerCard: '.container > .content > .item',
});
// ---- src/tap-base.js
const TAP_ORIGIN = 'https://csfloat.com';
const TAP_PATH =
/^\/api\/v1\/(listings(\/\d+(\/similar)?|\/\d{1,24}\/buy-orders)?|users\/\d{1,20}\/stall|me\/(watchlist|inventory)|history\/[^/]{1,400}\/(graph|sales)|floatdb\/search|meta\/(exchange-rates|location)|schema)$/;
const TAP_META = /^\/api\/v1\/meta\//;
const TAP_GET = /^get$/i;
const TAP_MAX_CHARS = 5 * 1024 * 1024;
const TAP_SEARCH = '/api/v1/listings';
const TAP_SCHEMA = '/api/v1/schema';
const tapSide = {
schema: ( text) => {},
orders: ( rate) => false,
rows: ( path, answer) => {},
open: () => null,
};
const tapApply = Reflect.apply;
const tapExec = RegExp.prototype.exec;
const tapListen = EventTarget.prototype.addEventListener;
const tapHasOwn = Object.hasOwn;
const tapDefine = Reflect.defineProperty;
const tapOpen = globalThis.open;
const tapMatches = (pattern, value) => typeof value === 'string' && tapApply(tapExec, pattern, [value]) !== null;
const tapOwn = (object, key) => (object != null && tapHasOwn(object, key) ? object[key] : undefined);
// ---- src/tap.js
function installTap(wanted, onListings, onRate, onHistory, onDb, onOpen, onHistoryStatus, onMeta, onInventory) {
const proto = XMLHttpRequest.prototype;
const original = proto.open;
const apply = tapApply;
const getter = (object, key) =>
( (Reflect.getOwnPropertyDescriptor(object, key)).get);
const unlisten = EventTarget.prototype.removeEventListener;
const later = globalThis.setTimeout;
const parse = JSON.parse;
const PageURL = URL;
const urlOrigin = getter(URL.prototype, 'origin');
const urlPath = getter(URL.prototype, 'pathname');
const urlSearch = getter(URL.prototype, 'search');
const responseURL = getter(proto, 'responseURL');
const responseType = getter(proto, 'responseType');
const responseText = getter(proto, 'responseText');
const readyState = getter(proto, 'readyState');
const status = getter(proto, 'status');
const tokens = new WeakMap();
const { get: tokenOf, set: setToken, delete: dropToken } = WeakMap.prototype;
function allowed(url) {
return apply(urlOrigin, url, []) === TAP_ORIGIN && tapMatches(TAP_PATH, apply(urlPath, url, []));
}
function wants(method, url) {
try {
const u = tapMatches(TAP_GET, method) && typeof url === 'string' ? new PageURL(url, document.baseURI) : null;
return u && allowed(u) ? u : null;
} catch {
return null;
}
}
function open(method, url) {
let args = (arguments);
try {
args = tapSide.open(this, arguments) ?? args;
} catch {}
const result = apply(original, this, args);
try {
const had = apply(dropToken, tokens, [this]);
const u = wants(method, url);
if (u) apply(setToken, tokens, [this, {}]);
if (!!u !== had) apply(u ? tapListen : unlisten, this, ['load', onLoad]);
if (u && apply(urlPath, u, []) === TAP_SEARCH) onOpen(apply(urlSearch, u, []));
} catch {}
return result;
}
function onLoad(event) {
try {
if (!event.isTrusted) return;
const xhr = this;
const token = apply(tokenOf, tokens, [xhr]);
const url = apply(responseURL, xhr, []);
const final = new PageURL(url);
if (!token || !allowed(final)) return;
const path = apply(urlPath, final, []);
const search = path === TAP_SEARCH;
let own = false;
if (search) {
try {
own = onRate(tapRate(xhr)) === true;
} catch {}
}
const history = tapMatches(TAP_HISTORY, path) ? path + apply(urlSearch, final, []) : '';
if (history) {
try {
onHistoryStatus(apply(status, xhr, []));
} catch {}
}
const db = path === TAP_DB;
const inv = path === TAP_INVENTORY;
const orders = tapMatches(TAP_ORDERS, path);
if (orders && tapSide.orders(tapRate(xhr)) !== true) return;
const meta = tapMatches(TAP_META, path) || path === TAP_SCHEMA || orders ? path : '';
const query = search ? apply(urlSearch, final, []) : '';
const go = () => read(xhr, token, url, search, own, history, db, query, meta, inv);
if (meta || wanted(!!history, db, inv)) apply(later, globalThis, [go, 0]);
} catch {}
}
function read(xhr, token, url, search, own, history, db, query, meta, inv) {
try {
if (apply(tokenOf, tokens, [xhr]) !== token) return;
if (apply(readyState, xhr, []) !== 4 || apply(responseURL, xhr, []) !== url) return;
const type = apply(responseType, xhr, []);
if (type !== '' && type !== 'text') return;
const text = apply(responseText, xhr, []);
if (typeof text !== 'string' || text.length > TAP_MAX_CHARS) return;
if (meta === TAP_SCHEMA) return void tapSide.schema(text);
let body = parse(text);
if (tapMatches(TAP_ORDERS, meta)) return void tapSide.rows(meta, tapOrders(body));
if (history) return void ((body = tapHistory(history, body)) && onHistory(body));
if (db) return void ((body = tapDb(body)).length && onDb(body));
if (meta) return void onMeta(meta, body);
if (inv) return void ((body = tapInventory(body)).length && onInventory(body));
const listings = tapPick(body);
const all = body && typeof body === 'object' ? (tapIsArray(body) ? body : tapOwn(body, 'data')) : null;
const raw = tapIsArray(all) ? all.length : 1;
if (listings.length || (search && !raw && apply(status, xhr, []) === 200))
onListings(listings, search, own, query, raw);
} catch {}
}
Reflect.defineProperty(proto, 'open', { value: open });
}
// ---- src/tap-fields.js
const TAP_MAX_LISTINGS = 200;
const TAP_INSPECT = /^steam:\/\/rungame\/730\/\d{1,20}\/\+csgo_econ_action_preview(%20| )[A-Za-z0-9]{1,512}$/;
const TAP_SHOT_ID = /^\d{1,20}$/;
const TAP_D_LINK = 'steam://rungame/730/76561202255233023/+csgo_econ_action_preview ';
const TAP_OFF = '#off';
const TAP_CREATED = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{1,9})?Z$/;
const TAP_NAME = /^\P{C}{1,128}$/u;
const TAP_HASH_NAME = /^\P{C}{1,160}$/u;
const TAP_WEAR = /^(Factory New|Minimal Wear|Field-Tested|Well-Worn|Battle-Scarred)$/;
const TAP_PHASE = /^(Ruby|Sapphire|Black Pearl|Emerald|Phase [1-4])$/;
const tapIsArray = Array.isArray;
const TAP_DIGITS = /^\d{1,10}$/;
const tapInteger = Number.isInteger;
const tapCount = (text) => (tapMatches(TAP_DIGITS, text) ? +text : null);
const tapInt = (v, max) => (typeof v === 'number' && v % 1 === 0 && v >= 0 && v <= max ? v : null);
function tapCard(item) {
const name = tapOwn(item, 'item_name');
if (tapOwn(item, 'type') !== 'skin' || !tapMatches(TAP_NAME, name)) return null;
const field = (key, missing) => {
const value = tapOwn(item, key);
return value === undefined ? missing : value;
};
const wear = field('wear_name', null);
const phase = field('phase', null);
const float = field('float_value', null);
const st = field('is_stattrak', false);
const sv = field('is_souvenir', false);
if (wear !== null && !tapMatches(TAP_WEAR, wear)) return null;
if (phase !== null && !tapMatches(TAP_PHASE, phase)) return null;
if (float !== null && !(typeof float === 'number' && float >= 0 && float <= 1)) return null;
if (typeof st !== 'boolean' || typeof sv !== 'boolean' || (st && sv)) return null;
return { name, wear, phase, float, st, sv };
}
function tapPick(body) {
if (!body || typeof body !== 'object') return [];
const inner = tapIsArray(body) ? body : tapOwn(body, 'data');
const list = tapIsArray(inner) ? inner : [body];
const listings = [];
let kept = 0;
const count = list.length < TAP_MAX_LISTINGS ? list.length : TAP_MAX_LISTINGS;
for (let i = 0; i < count; i++) {
const entry = tapOwn(list, i);
const item = tapOwn(entry, 'item');
if (!item || typeof item !== 'object') continue;
const link = tapLink(entry, item);
const hash = tapOwn(item, 'market_hash_name');
const name = tapMatches(TAP_HASH_NAME, hash) ? hash : null;
const own = tapOwn(entry, 'id');
const lid = tapMatches(TAP_SALE_ID, own) ? own : null;
const base = tapMatches(TAP_INSPECT, link) ? link : tapGoods(item, link, name, lid);
if (base === null) continue;
const state = tapOwn(entry, 'state');
const key = state === undefined || state === 'listed' ? base : base + TAP_OFF;
const id = tapOwn(item, 'cs2_screenshot_id');
const at = tapOwn(entry, 'created_at');
const shot = tapMatches(TAP_SHOT_ID, id) ? id : null;
const card = tapCard(item);
const created = tapMatches(TAP_CREATED, at) ? at : null;
const grade = tapGrade(item);
const price = tapInt(tapOwn(entry, 'price'), 1e10) || null;
const charm = tapCharm(item);
if (shot === null && card === null && created === null && grade === null && price === null && charm === null)
continue;
const value = [
key,
shot,
card,
created,
grade,
price,
premiumRow(entry),
name,
charm,
tapStickers(entry, item),
lid,
tapPlain(item),
];
const slot = ({
__proto__: null,
value,
writable: true,
enumerable: true,
configurable: true,
});
tapDefine(listings, kept++, slot);
}
return listings;
}
// ---- src/tap-keys.js
function tapGrade(item) {
const def = tapOwn(item, 'def_index');
const paint = tapOwn(item, 'paint_index');
const seed = tapOwn(item, 'paint_seed');
const ok = tapInteger(def) && tapInteger(paint) && tapInteger(seed);
return ok && def > 0 && def < 65536 && paint > 0 && paint < 65536 && seed >= 0 && seed <= 1000
? `${def}:${paint}:${seed}`
: null;
}
function tapCharm(item) {
const index = tapOwn(item, 'keychain_index');
const pattern = tapOwn(item, 'keychain_pattern');
const ok = tapOwn(item, 'type') === 'charm' && tapInteger(index) && tapInteger(pattern);
return ok && index > 0 && index < 65536 && index !== 36 && index !== 37 && pattern >= 0 && pattern <= 1e5
? `${index}:${pattern}`
: null;
}
const TAP_GOODS = '#goods:';
const TAP_GOODS_KEY = /^#goods:\d{1,24}(#off)?$/;
const TAP_GOODS_TYPE = /^(container|music_kit)$/;
function tapGoods(item, link, name, lid) {
return link === null && name !== null && lid !== null && tapMatches(TAP_GOODS_TYPE, tapOwn(item, 'type'))
? TAP_GOODS + lid
: null;
}
function tapLink(entry, item) {
const link = tapOwn(item, 'inspect_link') || tapOwn(item, 'serialized_inspect');
if (link || !tapOwn(item, 'd_param')) return link || null;
const text = (v) => (tapInteger(v) && (v) >= 0 ? `${v}` : v);
const ids = [tapOwn(tapOwn(entry, 'seller'), 'steam_id'), tapOwn(item, 'asset_id'), tapOwn(item, 'd_param')];
const [s, a, d] = ids.map(text);
return [s, a, d].every((v) => tapMatches(TAP_SHOT_ID, v)) ? `${TAP_D_LINK}S${s}A${a}D${d}` : null;
}
// ---- src/tap-stickers.js
const TAP_ST_MAX = 6;
const TAP_KC_MAX = 2;
const TAP_ST_CENTS = 2e10;
const TAP_ST_QTY = 1e7;
const tapStNum = (v, hi) =>
v === undefined || v === null
? null
: tapInteger(v) && (v) >= 0 && (v) <= hi
? (v)
: false;
function tapStPush(xs, v) {
const slot = { __proto__: null, value: v, writable: true, enumerable: true, configurable: true };
tapDefine(xs, xs.length, (slot));
}
function tapStRef(ref) {
if (ref === undefined || ref === null) return { price: null, qty: null };
if (typeof ref !== 'object') return false;
const [price, qty] = [tapStNum(tapOwn(ref, 'price'), TAP_ST_CENTS), tapStNum(tapOwn(ref, 'quantity'), TAP_ST_QTY)];
return price === false || qty === false ? false : { price, qty };
}
const tapStList = (v, max) => (v === undefined || v === null ? [] : tapIsArray(v) && v.length <= max ? v : null);
function tapSticker(s) {
const [name, wear, ref] = [tapOwn(s, 'name'), tapOwn(s, 'wear'), tapStRef(tapOwn(s, 'reference'))];
if (!tapMatches(TAP_NAME, name) || !ref) return null;
if (wear !== undefined && !(typeof wear === 'number' && wear >= 0 && wear <= 1)) return null;
return { name, wear: wear ?? 0, price: ref.price, qty: ref.qty };
}
function tapKeychain(k) {
const [name, ref] = [tapOwn(k, 'name'), tapStRef(tapOwn(k, 'reference'))];
const pattern = tapStNum(tapOwn(k, 'pattern'), 1e5);
const slab = tapStNum(tapOwn(k, 'wrapped_sticker'), 1e9);
const reel = tapStNum(tapOwn(k, 'highlight_reel'), 1e9);
if (!tapMatches(TAP_NAME, name) || !ref || pattern === false || slab === false || reel === false) return null;
if (slab && reel) return null;
return { name, kind: slab ? 'slab' : reel ? 'reel' : 'charm', pattern, price: ref.price, qty: ref.qty };
}
function tapStickers(entry, item) {
const stickers = tapStList(tapOwn(item, 'stickers'), TAP_ST_MAX);
const keychains = tapStList(tapOwn(item, 'keychains'), TAP_KC_MAX);
if (!stickers || !keychains || stickers.length + keychains.length === 0) return null;
const ref = tapOwn(entry, 'reference');
if (ref !== undefined && ref !== null && typeof ref !== 'object') return null;
const est = tapStNum(tapOwn(ref, 'predicted_price'), TAP_ST_CENTS);
const charm = tapStNum(tapOwn(ref, 'keychain_price'), TAP_ST_CENTS);
if (est === false || charm === false) return null;
const out = { est, charm, st: [], kc: [] };
for (let i = 0; i < stickers.length; i++) {
const s = tapSticker(tapOwn(stickers, i));
if (!s) return null;
tapStPush(out.st, s);
}
for (let i = 0; i < keychains.length; i++) {
const k = tapKeychain(tapOwn(keychains, i));
if (!k) return null;
tapStPush(out.kc, k);
}
return out;
}
// ---- src/tap-history.js
const TAP_HISTORY = /^\/api\/v1\/history\/[^/?#]{1,400}\/(graph|sales)$/;
const TAP_HISTORY_KEY = /^(\/api\/v1\/history\/[^/?#]{1,400}\/)(graph|sales)(\?paint_index=\d{1,5})?$/;
const TAP_DAY = /^\d{4}-\d{2}-\d{2}T00:00:00Z$/;
const TAP_SALE_ID = /^\d{1,24}$/;
const tapDate = Date.parse;
const tapTime = (at, re) => {
const t = tapMatches(re, at) ? tapApply(tapDate, null, [at]) : NaN;
return t >= 1.42e12 && t <= 2.5e12 ? t : NaN;
};
const tapNum = (v, lo, hi) => (typeof v === 'number' && v >= lo && v <= hi ? v : null);
function tapSale(row) {
const item = tapOwn(row, 'item');
const price = tapInt(tapOwn(row, 'price'), 1e10);
const sold = tapTime(tapOwn(row, 'sold_at'), TAP_CREATED);
const listed = tapTime(tapOwn(row, 'created_at'), TAP_CREATED);
const type = tapOwn(row, 'type');
const id = tapOwn(row, 'id');
if (!item || typeof item !== 'object' || !price || !(sold >= listed) || (type !== 'auction' && type !== 'buy_now'))
return null;
let extras = 0;
for (let k = 0; k < 2; k++) {
const list = tapOwn(item, k ? 'keychains' : 'stickers');
for (let i = 0, n = tapIsArray(list) ? (list.length < 10 ? list.length : 10) : 0; i < n; i++)
extras += tapInt(tapOwn(tapOwn(tapOwn(list, i), 'reference'), 'price'), 1e10) ?? 0;
}
return {
price,
sold,
listed,
auction: type === 'auction',
watchers: tapInt(tapOwn(row, 'watchers'), 1e6),
seed: tapInt(tapOwn(item, 'paint_seed'), 1e5),
float: tapNum(tapOwn(item, 'float_value'), 0, 1),
grade: tapGrade(item),
extras,
id: tapMatches(TAP_SALE_ID, id) ? id : null,
};
}
function tapPoint(row) {
const day = tapTime(tapOwn(row, 'day'), TAP_DAY);
const count = tapInt(tapOwn(row, 'count'), 1e7);
const avg = tapNum(tapOwn(row, 'avg_price'), 1, 1e12);
return day && count && avg ? { day, count, avg } : null;
}
function tapHistory(at, body) {
const m = tapApply(tapExec, TAP_HISTORY_KEY, [at]);
const sales = m?.[2] === 'sales';
if (!m || !tapIsArray(body) || body.length > (sales ? 100 : 5000)) return null;
const out = { item: m[1], query: m[3] ?? '', kind: m[2], points: [], sales: [] };
const list = sales ? out.sales : out.points;
for (let i = 0; i < body.length; i++) {
const value = (sales ? tapSale : tapPoint)(tapOwn(body, i));
if (!value) return null;
const slot = { __proto__: null, value, writable: true, enumerable: true, configurable: true };
tapDefine(list, i, (slot));
}
return out;
}
// ---- src/tap-db.js
const TAP_DB = '/api/v1/floatdb/search';
const TAP_DB_MAX = 200;
const tapFixed = Number.prototype.toFixed;
function tapDb(body) {
const list = tapOwn(body, 'results');
const rows = [];
if (!tapIsArray(list)) return rows;
let kept = 0;
const count = list.length < TAP_DB_MAX ? list.length : TAP_DB_MAX;
for (let i = 0; i < count; i++) {
const row = tapOwn(list, i);
const grade = tapGrade(row);
const float = tapNum(tapOwn(row, 'float_value'), 0, 1);
if (grade === null || float === null) continue;
const value = [`${tapApply(tapFixed, float, [14])}|${tapOwn(row, 'paint_seed')}`, grade];
const slot = { __proto__: null, value, writable: true, enumerable: true, configurable: true };
tapDefine(rows, kept++, (slot));
}
return rows;
}
// ---- src/tap-inventory.js
const TAP_INVENTORY = '/api/v1/me/inventory';
const TAP_INVENTORY_MAX = 1000;
function tapInventory(body) {
const items = [];
if (!tapIsArray(body)) return items;
let kept = 0;
const count = body.length < TAP_INVENTORY_MAX ? body.length : TAP_INVENTORY_MAX;
for (let i = 0; i < count; i++) {
const item = tapOwn(body, i);
if (!item || typeof item !== 'object') continue;
const id = tapOwn(item, 'asset_id');
const grade = tapGrade(item);
const charm = tapCharm(item);
if (!tapMatches(TAP_SHOT_ID, id) || (grade === null && charm === null)) continue;
const hash = tapOwn(item, 'market_hash_name');
const name = tapMatches(TAP_HASH_NAME, hash) ? hash : null;
const value = [id, null, tapCard(item), null, grade, null, null, name, charm, null, null, false];
const slot = { __proto__: null, value, writable: true, enumerable: true, configurable: true };
tapDefine(items, kept++, (slot));
}
return items;
}
// ---- src/tap-orders.js
const TAP_ORDERS = /^\/api\/v1\/listings\/(\d{1,24})\/buy-orders$/;
const TAP_ORDER_ROWS = 50;
const TAP_ORDER_CENTS = 2e10;
const TAP_ORDER_QTY = 1e7;
const tapXhr = XMLHttpRequest.prototype;
const tapHeader = tapXhr.getResponseHeader;
const tapStatus = (Reflect.getOwnPropertyDescriptor(tapXhr, 'status')?.get);
function tapRate(xhr) {
const n = ( k) => tapCount(tapApply(tapHeader, xhr, [`x-ratelimit-${k}`]));
return { status: tapApply(tapStatus, xhr, []), limit: n('limit'), remaining: n('remaining'), reset: n('reset') };
}
function tapPlain(item) {
const no = ( k) => tapOwn(item, k) == null;
const empty = ( k, v = tapOwn(item, k)) => v == null || (tapIsArray(v) && v.length === 0);
return no('float_value') && no('paint_seed') && no('keychain_pattern') && empty('stickers') && empty('keychains');
}
function tapOrders(body) {
if (!tapIsArray(body) || body.length > TAP_ORDER_ROWS) return null;
let top = 0;
let qty = 0;
for (let i = 0; i < body.length; i++) {
const row = tapOwn(body, i);
const price = tapOwn(row, 'price');
const n = tapOwn(row, 'qty');
if (!(tapInteger(price) && price >= 1 && price <= TAP_ORDER_CENTS)) return null;
if (!(tapInteger(n) && n >= 1 && n <= TAP_ORDER_QTY)) return null;
if (price > top) top = price;
qty += n;
}
return { top, qty, rows: body.length };
}
// ---- src/rate.js
const RATE_SLOW = 0.5;
const RATE_PAUSE = 0.3;
const RATE_CAP = 90;
const RATE_HOUR = 3600000;
function createRate() {
let last = (null);
let broken = false;
let stopUntil = 0;
let unit = 1;
let skew = 0;
const turns = ([]);
function see(r) {
const now = tickNow();
const { status, limit, remaining } = r;
const ms = r.reset === null ? NaN : r.reset * 1000;
const reset = ms > now - RATE_HOUR && ms < now + 48 * RATE_HOUR ? ms : null;
if (reset !== null && reset < now - 5000) skew = Math.max(skew, now - reset + 1000);
if (status === 429) {
const base = reset !== null ? reset + skew : last && last.reset + skew > now ? last.reset + skew : now + 600000;
stopUntil = Math.max(stopUntil, Math.max(base, now) + 60000);
}
const counts = Number.isInteger(status) && status >= 100 && status <= 599 && limit !== null && limit >= 1;
if (!counts || limit > 1e6 || remaining === null || remaining < 0 || remaining > limit || reset === null) {
broken = true;
} else if (!last || reset !== last.reset || remaining <= last.remaining) {
last = { status, limit, remaining, reset };
}
}
function gate(now) {
if (now < stopUntil) return { reason: 'limit429', until: stopUntil };
if (broken || !last) return { reason: 'nohdr', until: 0 };
while (turns.length && turns[0] <= now - RATE_HOUR) turns.shift();
if (turns.length >= RATE_CAP) return { reason: 'cap', until: turns[0] + RATE_HOUR };
if (last.reset + skew <= now) return { reason: '', until: 0 };
if (last.remaining < last.limit * RATE_PAUSE) return { reason: 'pause', until: last.reset + skew + 5000 };
return { reason: last.remaining < last.limit * RATE_SLOW ? 'slow' : '', until: 0 };
}
return {
see,
gate,
state: () => ({ last, stopUntil, turns: turns.length, skew }),
cost: () => unit,
pressed: () => void turns.push(tickNow()),
hold: (until) => void (stopUntil = Math.max(stopUntil, until)),
measure(before, after) {
if (before !== null && after !== null && before >= after) unit = Math.min(3, Math.max(1, before - after));
},
};
}
// ---- src/press.js
const onSearch = () => location.pathname === '/search';
function refreshAnchor() {
const found = document.querySelectorAll(TF_SELECTORS.refreshButton);
const button = (found[0]);
if (found.length !== 1 || button.tagName !== 'BUTTON' || button.disabled || button.form !== null) return null;
if (button.getAttribute('aria-disabled') === 'true') return null;
if (['item-card', 'mat-dialog-container', '.cdk-overlay-container'].some((c) => button.closest(c))) return null;
const icons = button.querySelectorAll('mat-icon');
if (icons.length !== 1 || icons[0].textContent?.trim() !== 'refresh') return null;
return button.textContent?.trim() === 'refresh' ? button : null;
}
const findRefresh = () => (onSearch() ? refreshAnchor() : null);
let pressUnder = /^\/item\/\d+$/.test(location.pathname) ? '' : location.pathname;
function refreshHere() {
const path = location.pathname;
if (!/^\/item\/\d+$/.test(path)) pressUnder = path;
return pressUnder === '/search' ? refreshAnchor() : null;
}
const press = (() => {
const click = HTMLElement.prototype.click;
const apply = Reflect.apply;
const now = Date.now;
const shown = (
Reflect.getOwnPropertyDescriptor(Document.prototype, 'visibilityState')?.get
);
const floor = PACES[0] * 1000;
let last = -Infinity;
return () => {
const t = now();
const button = findRefresh();
if (!button || t - last < floor || apply(shown, document, []) !== 'visible') return false;
last = t;
apply(click, button, []);
return true;
};
})();
// ---- src/ticker.js
const TICK_RETRY = 2000;
const TICK_GIVE_UP = 30000;
const TICK_ANSWER = 15000;
const TICK_MISSES = 2;
const TICK_FAILS = 3;
const tickNow = Date.now;
const tickAfter = (() => {
const later = globalThis.setTimeout;
const clear = globalThis.clearTimeout;
const apply = Reflect.apply;
return (fn, ms) => {
if (typeof fn !== 'function') return () => {};
const id = apply(later, globalThis, [fn, ms]);
return () => apply(clear, globalThis, [id]);
};
})();
const tickLock = (() => {
const locks = globalThis.navigator?.locks;
const [request, then, apply] = [locks?.request, Promise.prototype.then, Reflect.apply];
const take = (granted, lost) =>
void apply(then, apply(request, locks, ['truefloat-auto', { steal: true }, granted]), [undefined, lost]);
return locks ? take : null;
})();
function createTicker(rate, attention, on) {
let [pace, gen, misses, fails, heldSince] = [60, 0, 0, 0, 0];
let held = false;
let [release, cancel, cancelAnswer] = [() => {}, () => {}, () => {}];
let answer = null;
let state = ({ mode: 'idle', reason: '', at: 0 });
function show(mode, reason, at, next, ms) {
const fire = tickNow() + ms;
cancel = tickAfter(() => (tickNow() - fire > TICK_RETRY ? plan() : next()), ms);
if (mode === state.mode && reason === state.reason && at === state.at) return;
state = { mode, reason, at };
on.changed();
}
function plan(due = false) {
cancel();
if (!held || answer) return;
const now = tickNow();
const g = rate.gate(now);
const why = attention.paused();
if (!refreshHere()) return on.stop('');
if (g.reason === 'limit429' || g.reason === 'nohdr') return on.stop(g.reason);
if (why) return show('paused', why, 0, plan, TICK_RETRY);
if (g.until) return show('limit', g.reason, g.until, plan, g.until - now);
if (due) {
if (!attention.busy()) return turn(now);
heldSince ||= now;
if (now - heldSince < TICK_GIVE_UP) return show('running', g.reason, state.at, () => plan(true), TICK_RETRY);
}
heldSince = 0;
const wait = pace * 1000 * rate.cost() * (g.reason === 'slow' ? 2 : 1);
show('running', g.reason, now + wait, () => plan(true), wait);
}
function turn(now) {
heldSince = 0;
const before = rate.state().last?.remaining ?? null;
on.pressing(now);
answer = (record) => {
cancelAnswer();
answer = null;
misses = record ? 0 : misses + 1;
fails = record && record.status >= 200 && record.status < 300 ? 0 : fails + 1;
if (misses >= TICK_MISSES) return on.stop('gone');
if (fails >= TICK_FAILS) return on.stop('fails');
if (record) rate.measure(before, record.remaining);
plan();
};
cancelAnswer = tickAfter(() => answer?.(null), TICK_ANSWER);
if (press()) rate.pressed();
else answer(null);
}
function want(wanted) {
const mine = ++gen;
[held, answer, misses, fails] = [false, null, 0, 0];
cancel();
cancelAnswer();
release();
state = { mode: 'idle', reason: '', at: 0 };
if (!wanted) return;
if (!tickLock) return on.stop('nolock');
const granted = () => {
if (mine !== gen) return undefined;
held = true;
let [freed, free] = [false, () => {}];
release = () => ((freed = true), free());
plan();
return { then: ( done) => (freed ? done() : void (free = done)) };
};
try {
tickLock(granted, () => mine === gen && on.stop('stolen'));
} catch {
on.stop('nolock');
}
}
return {
want,
state: () => state,
setPace(s) {
if (s === pace) return;
pace = s;
plan();
},
seen(record) {
if (!answer) {
plan();
return false;
}
answer(record);
return true;
},
};
}
// ---- src/card-marks.js
const CARD_KEYS =
'span:is(.tf-title, .tf-age, .tf-gc, .tf-csf, .tf-fresh, .tf-bargain), .tf-shot[data-tf-loaded], .buy, ' +
'app-item-name .amount, .top-right-container > .action, .footer-content + .seller-details-wrapper, [data-tf-has]';
function cardQuiet(r) {
const read = `${CARD_KEYS}, .tf-csf-f`;
return [...r.addedNodes, ...r.removedNodes].every(
(n) =>
n.nodeType !== 1 || !( (n).matches(read) || (n).querySelector(read)),
);
}
function cardUnmark() {
for (const el of document.querySelectorAll('[data-tf-has]')) el.removeAttribute('data-tf-has');
}
function cardMarks(card) {
const want = (new Map([[card, new Set()]]));
const mark = (el, token) =>
el && (want.get(el) ?? want.set(el, new Set()).get(el)).add(token);
const parent = (el, sel) => (el.parentElement?.matches(sel) ? el.parentElement : null);
const around = (el, sel, token) => {
for (let n = el.parentElement; n && n !== card; n = n.parentElement) if (n.matches(sel)) mark(n, token);
};
for (const el of card.querySelectorAll(CARD_KEYS)) {
if (el.hasAttribute('data-tf-has')) mark(el, '');
const [c, ours] = [el.classList, el.localName === 'span' ? el.classList : null];
if (ours?.contains('tf-title')) {
mark(card, 'title');
mark(parent(el, '.name-container'), 'title');
around(el, 'app-item-name', 'title');
}
if (ours?.contains('tf-age')) mark(parent(el, '.name-container'), 'age');
if (ours?.contains('tf-gc')) {
mark(card, 'gc');
if (el.querySelector(':scope > button > .tf-csf-f')) mark(card, 'gcf');
}
if (ours?.contains('tf-csf')) mark(parent(el, 'div.badge-container'), 'csf');
if (el.matches(':is(img, canvas).tf-shot[data-tf-loaded]')) {
mark(el.parentElement, 'shot');
mark(el.previousElementSibling, 'under');
}
if (ours?.contains('tf-fresh')) mark(parent(el, 'app-item-image-actions > div.container'), 'fresh');
if (ours?.contains('tf-bargain')) mark(parent(el, '.bargain-btn .mdc-button__label'), 'bargain');
if (c.contains('amount') && el.matches('app-item-name .amount')) mark(card, 'bundle');
if (el.matches('.top-right-container > .action')) {
mark(card, 'watch');
if (el.querySelector(':scope > .count')) mark(card, 'count');
}
if (c.contains('buy')) {
around(el, '.actions-container', 'buy');
const row = parent(el, '.actions');
const outer = row && parent(row, '.outer-actions');
mark(row, 'buy');
mark(outer, 'buy');
if (outer) mark(card, 'buy');
}
if (c.contains('seller-details-wrapper') && el.matches('.footer-content + .seller-details-wrapper')) {
const footer = parent(el, '.footer');
mark(footer, 'seller');
if (footer && el.querySelector('div.seller-details > svg:not(.online)')) mark(footer, 'offline');
for (const svg of el.querySelectorAll('div.seller-details > svg'))
cardInside(svg, { attributeFilter: ['class'] });
}
}
const img = card.querySelector(TF_SELECTORS.cardImage);
if (
img &&
(cardInside(img, { attributeFilter: ['style'] }), (img).style.display === 'none')
)
mark(card, 'noimg');
for (const [el, tokens] of want) {
const v = [...tokens].filter(Boolean).join(' ');
if (v && el.getAttribute('data-tf-has') !== v) el.setAttribute('data-tf-has', v);
else if (!v && el.hasAttribute('data-tf-has')) el.removeAttribute('data-tf-has');
}
}
// ---- src/card-hub.js
const { get: cardWeakGet, set: cardWeakSet } = WeakMap.prototype;
const CARD_OURS = /(?:^| )tf-/;
const cardOurs = (n) =>
n.nodeType === 1 && tapMatches(CARD_OURS, (n).getAttribute('class') ?? '');
const CARD_ATTRS = ['href', 'src', 'aria-describedby', 'data-tf-loaded'];
const cardElements = (r) => [...r.addedNodes, ...r.removedNodes].some((n) => n.nodeType === 1);
function cardIn(el, card) {
for (let n = (el); n && n !== card; n = n.parentElement) if (cardOurs(n)) return true;
return false;
}
function cardOwn(r, el, card) {
if (cardIn(el, card)) return true;
const nodes = r.type === 'childList' ? [...r.addedNodes, ...r.removedNodes] : [];
return nodes.length > 0 && nodes.every(cardOurs);
}
let cardHub = null;
const cardObserver = () => new MutationObserver((records) => shotOnce(() => cardBatch(records)));
const cardLive = () => Object.values(TF_SETTINGS).some((s) => s.attr && document.documentElement.hasAttribute(s.attr));
let cardKept = true;
function cardBatch( records) {
if (!cardHub) return;
const html = document.documentElement;
const [set, changed, ticked, added, marked] = [new Set(), new Set(), new Set(), new Set(), new Set()];
const [others, cardOf] = [ ([]), new Map()];
const live = cardLive();
for (const r of records) {
if (r.target === html && r.type === 'attributes') {
set.add(r.attributeName);
continue;
}
const el = r.target.nodeType === 1 ? (r.target) : r.target.parentElement;
const card = el && (cardOf.get(el) ?? cardOf.set(el, el.closest(TF_SELECTORS.card) ?? false).get(el));
if (card && r.type === 'childList' && !cardElements(r) && el.closest(TF_SELECTORS.auction)) {
ticked.add(card);
continue;
}
if (card && (r.type === 'childList' || ['data-tf-loaded', 'class', 'style'].includes(r.attributeName ?? '')))
if (live && (r.type !== 'childList' || (cardElements(r) && !(cardIn(el, card) && cardQuiet(r)))))
marked.add(card);
if (card && el && !changed.has(card) && cardOwn(r, el, card)) continue;
if (card) (changed.add(card), ticked.add(card));
else others.push(r);
for (const n of (r.addedNodes)) {
if (n.nodeType !== 1 || cardOurs(n)) continue;
if (n.matches(TF_SELECTORS.card)) added.add(n);
if (n.firstElementChild) for (const c of n.querySelectorAll(TF_SELECTORS.card)) added.add(c);
}
}
for (const f of cardHub.features) {
try {
if (f.attrs.some((a) => set.has(a))) f.setting?.();
if (f.other) others.forEach(f.other);
f.cards( (f.clock ? ticked : changed), (added));
f.settle?.();
} catch {}
}
try {
if (!cardLive()) {
if (cardKept && set.size) cardUnmark();
cardKept = false;
} else if (!cardKept) {
for (const card of document.querySelectorAll(TF_SELECTORS.card)) cardMarks(card);
cardKept = true;
} else for (const card of new Set([...added, ...marked])) cardMarks( (card));
} catch {}
}
function cardWatch(f) {
cardHub ??= { features: [], attrs: new Set(CARD_ATTRS), mo: cardObserver(), inside: cardObserver() };
cardHub.features.push(f);
for (const a of f.attrs) cardHub.attrs.add(a);
cardHub.mo.observe(document, { subtree: true, childList: true, attributeFilter: [...cardHub.attrs] });
}
const cardInHub = (new WeakMap());
function cardInside( el, options) {
const key = JSON.stringify(options);
if (!cardHub || tapApply(cardWeakGet, cardInHub, [el]) === key) return;
tapApply(cardWeakSet, cardInHub, [el, key]);
cardHub.inside.observe(el, options);
}
function cardOver() {
const [html, attr] = [document.documentElement, 'data-tf-over'];
const grid = 'app-item-container > .content-wrapper > item-card';
let at = (null);
const sync = () => {
const on = html.hasAttribute(TF_SETTINGS.buyRow.attr) && !!at?.isConnected && !!at.closest(grid);
if (on !== html.hasAttribute(attr)) html.toggleAttribute(attr, on);
};
const opts = { capture: true, passive: true };
const over = ( e) =>
e.isTrusted && ((at = e.target instanceof Element ? e.target : null), sync());
const out = ( e) => e.isTrusted && !e.relatedTarget && ((at = null), sync());
tapApply(tapListen, document, ['pointerover', over, opts]);
tapApply(tapListen, document, ['pointerout', out, opts]);
cardWatch({ attrs: [TF_SETTINGS.buyRow.attr], setting: sync, cards() {} });
}
// ---- src/shot-match.js
const SHOT_MAX_KEYS = 1000;
const { get: shotWeakGet, set: shotWeakSet, has: shotWeakHas } = WeakMap.prototype;
function shotBounded(collection) {
if (collection.size > SHOT_MAX_KEYS) collection.delete( (collection.keys().next().value));
}
let shotPass = null;
function shotOnce(f) {
if (shotPass) return f();
shotPass = new WeakMap();
try {
f();
} finally {
shotPass = null;
}
}
function createShotMatch(field, same) {
const ids = new Map();
function keyOf(card) {
if (shotPass && tapApply(shotWeakHas, shotPass, [card]))
return (tapApply(shotWeakGet, shotPass, [card]));
const links = card.querySelectorAll(TF_SELECTORS.inspectLink);
const href = links.length === 1 ? links[0].getAttribute('href') : null;
const key = href !== null && card.querySelector(TF_SELECTORS.listingOff) ? href + TAP_OFF : href;
if (shotPass) tapApply(shotWeakSet, shotPass, [card, key]);
return key;
}
function idFor(key) {
return (key !== null && ids.get(key)) || null;
}
function learn(listings) {
const fresh = new Set();
for (const listing of listings) {
const key = listing[0];
const value = (listing[field]);
if (value === null) continue;
if (ids.has(key)) {
const had = ids.get(key);
if (had != null && !same(had, value)) {
ids.set(key, null);
fresh.add(key);
}
} else {
ids.set(key, value);
fresh.add(key);
if (ids.size > SHOT_MAX_KEYS)
for (const [k, v] of ids) {
if (v !== null) {
ids.delete(k);
fresh.add(k);
break;
}
}
}
}
return fresh;
}
const drawn = new WeakMap();
const tracked = (sync) => ( card) => {
const key = keyOf(card);
sync(card);
tapApply(shotWeakSet, drawn, [card, key]);
};
function resync(fresh, sync, rest) {
for (const card of document.querySelectorAll(TF_SELECTORS.card)) {
const key = keyOf(card);
if (tapApply(shotWeakGet, drawn, [card]) !== key || (key !== null && fresh.has(key))) sync(card);
else rest?.(card);
}
}
return { keyOf, idFor, learn, tracked, resync };
}
// ---- src/shot-viewport.js
function createShotViewport(on) {
const near = new Set();
const shown = new Set();
const watch = (margin, each) =>
new IntersectionObserver(
(entries) => {
for (const { target, isIntersecting } of entries) each(target, isIntersecting);
on.settle();
},
{ rootMargin: margin },
);
const screen = watch('0px', (card, inside) => void (inside ? shown.add(card) : shown.delete(card)));
const nearby = watch('25% 0px', (card, inside) => {
if (inside) {
near.add(card);
on.near(card);
} else {
near.delete(card);
on.leave(card);
}
});
const kept = watch('50% 0px', (card, inside) => {
if (inside) return;
near.delete(card);
shown.delete(card);
on.far(card);
if (!card.isConnected) for (const io of all) io.unobserve(card);
});
const all = [screen, nearby, kept];
function observeCards(node) {
const cards = [...node.querySelectorAll(TF_SELECTORS.card)];
if (node.matches(TF_SELECTORS.card)) cards.push(node);
for (const card of cards) for (const io of all) io.observe(card);
}
return { near, shown, observeCards };
}
// ---- src/shot-sharp.js
const SHARP_TIMES = new Map([
['full', 0],
['high', 1.5],
['balanced', 1],
]);
function sharpTimes(card) {
if (card.closest('item-detail')) return 0;
const chosen = document.documentElement.getAttribute(TF_SETTINGS.shotRes.attr) ?? '';
return (SHARP_TIMES.get(chosen) ?? SHARP_TIMES.get(TF_SETTINGS.shotRes.default) ?? 0) * devicePixelRatio;
}
function sharpOnRatio(f) {
const once = { once: true };
const next = () => (watch(), f());
const watch = () => tapApply(tapListen, matchMedia(`(resolution: ${devicePixelRatio}dppx)`), ['change', next, once]);
watch();
}
async function sharpDraw(img, box, times) {
const { naturalWidth: iw, naturalHeight: ih } = img;
const { width: bw, height: bh } = box.getBoundingClientRect();
const w = Math.round(iw * Math.min(bw / iw, bh / ih) * times);
if (!(w > 0 && w < iw)) return img;
const h = Math.max(1, Math.round((ih * w) / iw));
const bitmap = await createImageBitmap(img, { resizeWidth: w, resizeHeight: h, resizeQuality: 'high' });
const canvas = document.createElement('canvas');
canvas.width = w;
canvas.height = h;
const context = canvas.getContext('2d', { willReadFrequently: true });
context?.drawImage(bitmap, 0, 0);
bitmap.close();
if (!context) return img;
canvas.className = 'tf-shot';
return canvas;
}
const sharpIdle = globalThis.requestIdleCallback;
const sharpClock = performance.now.bind(performance);
const SHARP_CALM = 150;
const SHARP_ROOM = 45;
function sharpQueue(first) {
const jobs = (new Map());
let [armed, lazy, ticket, scrolled] = [false, false, 0, 0];
const hurry = () => lazy && ((armed = lazy = false), arm(0, true));
tapApply(tapListen, globalThis, [
'scroll',
() => ((scrolled = sharpClock()), hurry()),
{ capture: true, passive: true },
]);
const arm = ( ms = 0, soon = false) => {
if (armed || !jobs.size) return;
armed = true;
if (ms) return void tickAfter(() => ((armed = false), arm()), ms);
const mine = ++ticket;
lazy = !(soon || [...jobs.keys()].some(first));
const run = (idle) => mine === ticket && ((armed = lazy = false), step(idle ? idle.timeRemaining() : SHARP_ROOM));
if (sharpIdle) tapApply(sharpIdle, globalThis, lazy ? [run] : [run, { timeout: 500 }]);
else tickAfter(run, 50);
};
function step( room) {
const wait = scrolled + SHARP_CALM - sharpClock();
if (wait > 0) return arm(wait);
let card = [...jobs.keys()].find(first);
if (!card && room < SHARP_ROOM) return arm();
card ??= (jobs.keys().next().value);
const draw = (jobs.get(card));
jobs.delete(card);
try {
draw();
} catch {}
arm();
}
return (card, draw) => {
jobs.delete(card);
jobs.set(card, draw);
if (first(card)) hurry();
arm();
};
}
function sharpPlace(img, el) {
if (el === img) return img;
img.replaceWith(el);
return el;
}
const SHOT_MAX_LIVE = 12;
const SHOT_SPARE = 40;
const SHARP_SPARE_PX = 8 * 1024 * 1024;
const sharpPixels = (el) => (el instanceof HTMLCanvasElement ? el.width * el.height : 0);
function sharpSpare(spare, max) {
let px = 0;
for (const { el } of spare.values()) px += sharpPixels(el);
for (const [id, { el }] of spare) {
if (spare.size <= max && px <= SHARP_SPARE_PX) return;
spare.delete(id);
px -= sharpPixels(el);
}
}
// ---- src/shots.js
const SHOT_URL = (id) => `https://csfloat.pics/m/${id}/playside.png?v=3`;
const SHOT_MAX_LOADING = 4;
function createShots() {
const attr = TF_SETTINGS.shots.attr;
const { keyOf, idFor, learn } = createShotMatch(1, Object.is);
const failed = new Set();
const overlays = new Map();
const pending = (new Set());
const loading = new Set();
const spare = new Map();
const enabled = () => document.documentElement.hasAttribute(attr);
const saveData = () => navigator.connection?.saveData === true;
const kept = ( card) => spare.get(idFor(keyOf(card)) ?? '')?.times === sharpTimes(card);
function drop(card) {
const overlay = overlays.get(card);
if (!overlay) return;
overlays.delete(card);
loading.delete(overlay.el);
const loaded = overlay.el.hasAttribute('data-tf-loaded');
if (loaded) return void (overlay.el.remove(), sharpSpare(spare.set(overlay.id, overlay), SHOT_SPARE));
overlay.el.removeAttribute('src');
overlay.el.remove();
}
function sync(card) {
const o = overlays.get(card);
if (o && !enabled()) return drop(card);
if (o && (!o.el.isConnected || keyOf(card) !== o.key || idFor(o.key) !== o.id || o.times !== sharpTimes(card))) {
drop(card);
}
if (!overlays.has(card) && near.has(card)) pending.add(card);
}
function start(card) {
if (!enabled() || saveData() || !card.isConnected || overlays.has(card)) return;
const key = keyOf(card);
const id = idFor(key);
if (!tapMatches(TAP_SHOT_ID, id) || failed.has(id)) return;
const base = card.querySelector(TF_SELECTORS.cardImage);
if (!base) return;
const times = sharpTimes(card);
const had = spare.get(id);
if (had?.times === times && spare.delete(id)) return void (overlays.set(card, { ...had, key }), base.after(had.el));
const img = document.createElement('img');
img.className = 'tf-shot';
img.alt = '';
img.decoding = 'async';
img.setAttribute('fetchpriority', 'low');
img.referrerPolicy = 'no-referrer';
const current = () => overlays.get(card)?.el === img;
const show = ( el) => {
if (!current()) return;
overlays.set(card, { el: sharpPlace(img, el), key, id, times });
el.setAttribute('data-tf-loaded', '');
pump();
};
const onLoad = () => {
if (!current()) return;
loading.delete(img);
if (!times) return show(img);
later(card, () => current() && sharpDraw(img, img.parentElement ?? base, times).then(show, () => show(img)));
pump();
};
const onError = () => {
if (!current()) return;
failed.add(id);
shotBounded(failed);
drop(card);
pump();
};
tapApply(tapListen, img, ['load', onLoad]);
tapApply(tapListen, img, ['error', onError]);
overlays.set(card, { el: img, key, id, times });
loading.add(img);
base.after(img);
img.src = SHOT_URL(id);
}
function pump() {
shotOnce(() => {
for (const card of [...pending].sort((a, b) => +shown.has(b) - +shown.has(a))) {
if (overlays.size >= SHOT_MAX_LIVE && !shown.has(card)) continue;
if (loading.size >= SHOT_MAX_LOADING && !(spare.size && kept(card))) continue;
pending.delete(card);
if (near.has(card)) start(card);
}
});
}
const { near, shown, observeCards } = createShotViewport({
near: (card) => sync(card),
leave: (card) => pending.delete(card),
far: drop,
settle: pump,
});
const later = sharpQueue((card) => shown.has(card));
cardWatch({
attrs: [attr, TF_SETTINGS.shotRes.attr],
setting: () => near.forEach(sync),
cards(changed, added) {
for (const card of added) observeCards(card);
for (const card of changed) sync(card);
},
settle: pump,
});
if (document.documentElement) observeCards(document.documentElement);
sharpOnRatio(() => (near.forEach(sync), pump()));
function feed(listings) {
if (!enabled()) return;
learn(listings);
for (const card of [...overlays.keys(), ...near]) sync(card);
pump();
}
return { enabled, feed };
}
// ---- src/card-read.js
const LAYOUT_FACTS = ['name', 'wear', 'phase', 'float', 'st', 'sv'];
const layoutSame = (a, b) => LAYOUT_FACTS.every((k) => a[k] === b[k]);
const LAYOUT_BOUNDS = [
[0.07, 'Factory New'],
[0.15, 'Minimal Wear'],
[0.38, 'Field-Tested'],
[0.45, 'Well-Worn'],
[2, 'Battle-Scarred'],
];
const LAYOUT_LINE =
/^(Factory New|Minimal Wear|Field-Tested|Well-Worn|Battle-Scarred)?(?: ?\((Ruby|Sapphire|Black Pearl|Emerald|Phase [1-4])\))?$/;
const LAYOUT_FLOAT = /^(0(\.\d{1,20})?|1(\.0{1,20})?)$/;
function layoutRead(card) {
const name = card.querySelector(TF_SELECTORS.itemName)?.textContent?.trim() ?? '';
const sub = card.querySelector(TF_SELECTORS.subtext);
const text = card.querySelector(TF_SELECTORS.floatValue)?.textContent?.trim() ?? '';
if (!sub || !LAYOUT_FLOAT.test(text) || !TAP_NAME.test(name) || card.querySelector(TF_SELECTORS.bundle)) return null;
const marks = [...sub.children].map((el) => (el.localName === 'span' ? el.textContent?.trim() : null));
const quality = marks.length ? marks[0] : '';
if (marks.length > 1 || !['', 'StatTrak™', 'Souvenir'].includes(quality ?? '#')) return null;
const words = [...sub.childNodes].map((n) => (n.nodeType === 3 ? n.nodeValue : ' ')).join('');
const line = LAYOUT_LINE.exec(words.replace(/\s+/g, ' ').trim());
const float = +text;
const wear = (LAYOUT_BOUNDS.find(([below]) => float < below))[1];
if (!line || (line[1] && line[1] !== wear)) return null;
return { name, wear, phase: line[2] ?? null, float, st: quality === 'StatTrak™', sv: quality === 'Souvenir' };
}
// ---- src/card-layout.js
const LAYOUT_WEAR = {
'Factory New': 'FN',
'Minimal Wear': 'MW',
'Field-Tested': 'FT',
'Well-Worn': 'WW',
'Battle-Scarred': 'BS',
};
function layoutSpan(name, text, full) {
const span = document.createElement('span');
span.className = name;
span.textContent = text;
if (full) span.setAttribute('data-tf-full', full);
return span;
}
const layoutWorn = (c) => (c.wear && c.float ? c.wear : '');
const layoutDraws = (a, b) =>
a.name === b.name &&
a.phase === b.phase &&
a.st === b.st &&
a.sv === b.sv &&
layoutWorn(a) === layoutWorn(b) &&
!a.float === !b.float;
function layoutTitle(c) {
const star = c.name.startsWith('★ ');
const bare = star ? c.name.slice(2) : c.name;
const cut = bare.indexOf(' | ');
const quality = c.st ? 'StatTrak™ ' : c.sv ? 'Souvenir ' : '';
const worn = layoutWorn(c);
const full = `${star ? '★ ' : ''}${quality}${bare}${worn ? ` (${worn})` : ''}${c.phase ? ` · ${c.phase}` : ''}`;
const title = layoutSpan(`tf-title${c.st ? ' tf-st' : c.sv ? ' tf-sv' : ''}`, '', full);
if (star) title.append(layoutSpan('tf-star', '★'));
if (quality) title.append(layoutSpan('tf-q', c.st ? 'ST' : 'SV'));
title.append(layoutSpan('tf-skin', cut < 0 ? bare : bare.slice(cut + 3)));
if (c.phase) title.append(layoutSpan('tf-phase', c.phase.replace('Phase ', 'P')));
const weapon = cut >= 0 ? bare.slice(0, cut) : c.float ? '' : 'Vanilla';
if (weapon) title.append(layoutSpan('tf-weapon', weapon));
return title;
}
function createCardLayout() {
const READ_FROM = [TF_SELECTORS.itemName, TF_SELECTORS.subtext, TF_SELECTORS.floatValue].join(', ');
const attrs = [TF_SETTINGS.titles.attr, TF_SETTINGS.wear.attr];
const { keyOf, idFor, learn, tracked, resync } = createShotMatch(2, layoutSame);
const shows = new WeakMap();
const on = ( attr) => document.documentElement.hasAttribute(attr);
const enabled = () => attrs.some(on);
const draws = (el, facts) => {
const had = shows.get(el);
return !!had && layoutDraws(had, facts);
};
function keep(card, selector, facts, placed, make, put) {
let kept = false;
for (const el of card.querySelectorAll(selector)) {
if (!kept && facts && draws(el, facts) && placed(el)) kept = true;
else el.remove();
}
if (kept || !facts) return;
const el = make(facts);
el.setAttribute('aria-hidden', 'true');
shows.set(el, facts);
put(el);
}
const badge = (c) => layoutSpan('tf-wear', LAYOUT_WEAR[layoutWorn(c)], layoutWorn(c));
function draw(card) {
const facts = idFor(keyOf(card)) ?? layoutRead(card);
const box = card.querySelector(TF_SELECTORS.nameBox);
const value = card.querySelector(TF_SELECTORS.floatValue);
for (const el of card.querySelectorAll(READ_FROM)) cardInside(el, { subtree: true, characterData: true });
const title = box && on(attrs[0]) ? facts : null;
const wear = value && on(attrs[1]) && facts && layoutWorn(facts) ? facts : null;
const inBox = (el) => el.parentNode === box;
const beforeValue = (el) => value?.previousElementSibling === el;
keep(card, 'span.tf-title', title, inBox, layoutTitle, (el) => box?.append(el));
keep(card, 'span.tf-wear', wear, beforeValue, badge, (el) => value?.before(el));
}
const sync = tracked(draw);
const syncAll = () => {
for (const card of document.querySelectorAll(TF_SELECTORS.card)) sync(card);
};
cardWatch({
attrs,
setting: syncAll,
cards(changed, added) {
if (enabled()) for (const card of new Set([...changed, ...added])) sync(card);
},
});
function feed(listings) {
if (!enabled()) return;
resync(learn(listings), sync);
}
return { enabled, feed };
}
// ---- src/age.js
const AGE_MIN = 6e4;
const AGE_HOUR = 36e5;
const AGE_DAY = 864e5;
const AGE_FIRST = Date.UTC(2017, 0, 1);
const AGE_AHEAD = AGE_DAY / 8;
function ageLabel(ms) {
if (ms < AGE_MIN) return '<1 min';
const [per, unit] =
ms < AGE_HOUR
? [AGE_MIN, 'min']
: ms < AGE_DAY
? [AGE_HOUR, 'h']
: ms < 14 * AGE_DAY
? [AGE_DAY, 'd']
: ms < 60 * AGE_DAY
? [7 * AGE_DAY, 'w']
: [30 * AGE_DAY, 'mo'];
return `${Math.floor(ms / per)} ${unit}`;
}
function createAge() {
const html = document.documentElement;
const attr = TF_SETTINGS.age.attr;
const { keyOf, idFor, learn, tracked, resync } = createShotMatch(3, Object.is);
const enabled = () => html.hasAttribute(attr);
const time = new Intl.DateTimeFormat(undefined, { dateStyle: 'medium', timeStyle: 'short' });
const watched = new WeakSet();
const sized = new ResizeObserver((entries) => {
for (const { target, borderBoxSize } of entries) {
const age = target.isConnected && target.closest(TF_SELECTORS.card)?.querySelector('span.tf-age');
if (!(age instanceof HTMLElement)) {
sized.unobserve(target);
watched.delete(target);
continue;
}
const w = `${borderBoxSize[0].inlineSize}px`;
if (age.style.getPropertyValue('--tf-watch') !== w) age.style.setProperty('--tf-watch', w);
}
});
const placed = new WeakMap();
const titles = new WeakMap();
function draw(card) {
const row = card.querySelector(TF_SELECTORS.nameBox);
const created = idFor(keyOf(card));
const at = created ? Date.parse(`${created.slice(0, 19)}Z`) : NaN;
const now = Date.now();
let age = card.querySelector('span.tf-age');
if (!row || !(at >= AGE_FIRST && at <= now + AGE_AHEAD)) {
placed.set(card, [null, at]);
return age?.remove();
}
const made = !age;
if (!age) {
age = document.createElement('span');
age.className = 'tf-age';
}
const label = ageLabel(now - at);
const had = titles.get(card);
const title = had?.[0] === at ? had[1] : `Listed ${time.format(at)}`;
if (had?.[0] !== at) titles.set(card, [at, title]);
if (age.textContent !== label) age.textContent = label;
if (age.title !== title) age.title = title;
const word = card.querySelector(TF_SELECTORS.statusWord);
if (word ? age.previousElementSibling !== word : age.parentNode !== row) word ? word.after(age) : row.append(age);
const watch = card.querySelector(TF_SELECTORS.watch);
if (watch && (made || !watched.has(watch))) {
watched.add(watch);
sized.observe(watch);
}
placed.set(card, [age, at]);
}
const sync = tracked(draw);
function relabel(card) {
const [age, at] = placed.get(card) ?? [null, NaN];
if (age ? !card.contains(age) : !Number.isNaN(at)) return sync(card);
if (!age) return;
const label = ageLabel(Date.now() - at);
if (age.textContent !== label) age.textContent = label;
}
const syncAll = () => {
if (enabled()) for (const card of document.querySelectorAll(TF_SELECTORS.card)) sync(card);
};
cardWatch({
attrs: [attr],
clock: true,
setting: () =>
enabled() ? syncAll() : document.querySelectorAll('item-card span.tf-age').forEach((e) => e.remove()),
cards(changed, added) {
if (enabled()) for (const card of new Set([...changed, ...added])) sync(card);
},
});
const shown = () => document.visibilityState !== 'hidden';
setInterval(() => shown() && syncAll(), 6e4);
document.addEventListener('visibilitychange', (event) => event.isTrusted && shown() && syncAll());
function feed(listings) {
if (!enabled()) return;
resync(learn(listings), sync, relabel);
}
return { enabled, feed };
}
// ---- src/attention.js
const ATTEND_QUIET = 1500;
const ATTEND_IDLE = 15 * 60000;
const ATTEND_INPUT = ['pointermove', 'pointerdown', 'keydown', 'wheel', 'scroll'];
const ATTEND_OPTIONS = { capture: true, passive: true };
function createAttention() {
let last = 0;
const input = (event) => void (event.isTrusted && (last = tickNow()));
return {
listen(on) {
last = tickNow();
for (const type of ATTEND_INPUT) {
if (on) document.addEventListener(type, input, ATTEND_OPTIONS);
else document.removeEventListener(type, input, ATTEND_OPTIONS);
}
},
paused() {
const first = document.querySelector(TF_SELECTORS.card);
if (document.visibilityState === 'hidden') return 'hidden';
if (!onSearch() || document.querySelector('mat-dialog-container')) return 'dialog';
if (first && first.getBoundingClientRect().top < 0) return 'scrolled';
return tickNow() - last > ATTEND_IDLE ? 'away' : '';
},
busy() {
const focus = (document.activeElement);
return (
tickNow() - last < ATTEND_QUIET ||
document.querySelector(`${TF_SELECTORS.card}:hover`) !== null ||
(document.documentElement.hasAttribute(TF_SETTINGS.buyRow.attr) &&
document.querySelector('app-item-container:hover') !== null) ||
focus?.closest(TF_SELECTORS.card) != null ||
/^(INPUT|TEXTAREA|SELECT)$/.test(focus?.tagName ?? '') ||
focus?.isContentEditable === true ||
[...document.querySelectorAll('.cdk-overlay-pane')].some((pane) => pane.childElementCount > 0)
);
},
};
}
// ---- src/fresh.js
const FRESH_SLACK = 120000;
function createFresh() {
const { keyOf } = createShotMatch(1, Object.is);
const seen = (new Set());
const marked = (new Set());
let [since, threshold, search] = [0, Infinity, ''];
function sync(card) {
const key = keyOf(card);
const box = card.querySelector(TF_SELECTORS.glow);
let mark = card.querySelector('span.tf-fresh');
if (!box || key === null || !marked.has(key)) return mark?.remove();
if (!mark) {
mark = document.createElement('span');
mark.className = 'tf-fresh';
mark.setAttribute('aria-hidden', 'true');
}
if (mark.parentNode !== box) box.append(mark);
}
const cards = () => document.querySelectorAll(TF_SELECTORS.card);
function see(key) {
seen.add(key);
shotBounded(seen);
}
let watching = false;
cardWatch({
attrs: [],
cards(changed, added) {
if (watching) for (const card of new Set([...changed, ...added])) sync(card);
},
});
function turn(now, baseline) {
if (baseline) {
seen.clear();
search = location.search;
}
marked.clear();
watching = false;
for (const card of cards()) {
sync(card);
const key = keyOf(card);
if (key !== null) see(key);
}
[threshold, since] = [since - FRESH_SLACK, now];
}
return {
reset: (now) => turn(now, true),
pressing: (now) => turn(now, false),
learn(listings, own) {
if (location.search !== search) {
turn(since, true);
own = false;
}
const before = marked.size;
for (const [key, , , created] of listings) {
if (own && !seen.has(key) && created && Date.parse(`${created.slice(0, 19)}Z`) >= threshold) marked.add(key);
see(key);
}
if (marked.size) {
cards().forEach(sync);
watching = true;
}
return marked.size - before;
},
};
}
// ---- src/alert.js
const ALERT_TITLE = Reflect.getOwnPropertyDescriptor(Document.prototype, 'title');
const ALERT_FOCUS = Document.prototype.hasFocus;
const ALERT_SHOWN = Reflect.getOwnPropertyDescriptor(Document.prototype, 'visibilityState')?.get;
const ALERT_UNLISTEN = EventTarget.prototype.removeEventListener;
const ALERT_AUDIO = globalThis.AudioContext;
const [ALERT_STARTS, ALERT_SLICE] = [String.prototype.startsWith, String.prototype.slice];
const ALERT_BACK = ['focus', 'pointerdown', 'keydown'];
const ALERT_OPTIONS = { capture: true, passive: true };
const ALERT_MAX = 99;
function createAlert() {
const html = document.documentElement;
let [count, prefix] = [0, ''];
const title = () => tapApply( (ALERT_TITLE?.get), document, []);
const put = ( to) =>
tapApply( (ALERT_TITLE?.set), document, [to]);
const ours = ( text) => prefix !== '' && tapApply(ALERT_STARTS, text, [prefix]);
const strip = ( text) => tapApply(ALERT_SLICE, text, [prefix.length]);
const here = () =>
[TF_SETTINGS.tierAlert.attr, TF_SETTINGS.refresh.attr, TIER_ON].every((a) => html.hasAttribute(a)) && onSearch();
function show() {
const now = title();
const rest = ours(now) ? strip(now) : now;
prefix = `(${count}) `;
put(prefix + rest);
}
function clear() {
if (!count) return;
const now = title();
if (ours(now)) put(strip(now));
[count, prefix] = [0, ''];
listen(false);
}
const keep = new MutationObserver(() => {
if (!count) return;
if (!here()) clear();
else if (!ours(title())) (keep.disconnect(), show());
});
new MutationObserver(() => here() || clear()).observe(html, {
attributeFilter: [TF_SETTINGS.tierAlert.attr, TF_SETTINGS.refresh.attr, TIER_ON],
});
function back(event) {
const shown = () => tapApply( (ALERT_SHOWN), document, []) === 'visible';
if (event.isTrusted && (event.type !== 'visibilitychange' || shown())) clear();
}
function listen(on) {
const how = on ? tapListen : ALERT_UNLISTEN;
for (const type of ALERT_BACK) tapApply(how, globalThis, [type, back, ALERT_OPTIONS]);
tapApply(how, document, ['visibilitychange', back, ALERT_OPTIONS]);
if (!on) keep.disconnect();
}
function tone() {
try {
const audio = new ALERT_AUDIO();
const [osc, gain, at] = [audio.createOscillator(), audio.createGain(), audio.currentTime];
osc.frequency.value = 660;
gain.gain.setValueAtTime(0, at);
gain.gain.linearRampToValueAtTime(0.05, at + 0.02);
gain.gain.linearRampToValueAtTime(0, at + 0.18);
osc.connect(gain).connect(audio.destination);
osc.start(at);
osc.stop(at + 0.2);
tickAfter(() => void audio.close().catch(() => {}), 1000);
} catch {}
}
return {
found(n) {
if (!(n > 0) || !here() || tapApply(ALERT_FOCUS, document, [])) return;
if (html.hasAttribute(TF_SETTINGS.alertSound.attr)) tone();
if (!count) listen(true);
count = Math.min(count + n, ALERT_MAX);
show();
const head = document.querySelector('title');
if (head) keep.observe(head, { childList: true, characterData: true, subtree: true });
},
};
}
// ---- src/refresh.js
function createRefresh(rate) {
const html = () => document.documentElement;
const attention = createAttention();
const fresh = createFresh();
const alerts = createAlert();
let running = false;
let off = '';
let gone = false;
const subs = ([]);
const changed = () => subs.forEach((cb) => cb());
const enabled = () => html().hasAttribute(TF_SETTINGS.refresh.attr);
const pace = () => {
const chosen = Number(html().getAttribute(TF_SETTINGS.pace.attr));
return PACES.includes(chosen) ? chosen : TF_SETTINGS.pace.default;
};
const ticker = createTicker(rate, attention, { pressing: fresh.pressing, stop, changed });
function stop(reason) {
[running, off] = [false, reason];
gone ||= reason === 'gone';
attention.listen(false);
fresh.reset(0);
ticker.want(false);
changed();
}
function start() {
if (gone || running || !enabled() || !refreshHere()) return;
if (rate.state().last?.status === 403) return stop('signin');
[running, off] = [true, ''];
attention.listen(true);
fresh.reset(Date.now());
ticker.setPace(pace());
ticker.want(true);
changed();
}
new MutationObserver(() => {
if (running && !enabled()) stop('');
else ticker.setPace(pace());
changed();
}).observe(document, { subtree: true, attributeFilter: [TF_SETTINGS.refresh.attr, TF_SETTINGS.pace.attr] });
return {
enabled,
running: () => running,
toggle: () => (running ? stop('') : start()),
onChange: (cb) => void subs.push(cb),
seen(record) {
if (!running) return false;
if (record.status !== 403 && record.status !== 429) return ticker.seen(record);
stop(record.status === 403 ? 'signin' : 'limit429');
return false;
},
feed(listings, search, own) {
if (running && search) alerts.found(fresh.learn(listings, own));
},
view() {
const { last, stopUntil } = rate.state();
const { mode, reason, at } = ticker.state();
const base = { left: last?.remaining ?? null, cost: rate.cost(), pace: pace(), gone };
if (running) return { ...base, mode: mode === 'idle' ? 'running' : mode, reason, at };
const shown = off === 'signin' ? 'signin' : off ? 'stopped' : 'off';
return { ...base, mode: shown, reason: off, at: off === 'limit429' ? stopUntil : 0 };
},
};
}
// ---- src/chip-text.js
const CHIP_GLYPHS = Object.freeze({
auto: ['M13 8a5 5 0 1 1-1.5-3.6', 'M13 2.5v3h-3'],
pause: ['M6 4v8M10 4v8'],
clock: ['M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 1 1 11 0', 'M8 5v3l2 1.5'],
stop: ['M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 1 1 11 0', 'M5.5 8h5'],
});
const CHIP_WHY = {
hidden: 'Paused while this tab is hidden',
scrolled: "Paused while you're scrolled down",
dialog: 'Paused while a listing is open',
away: "Paused while you're away",
stolen: 'Running in another tab.',
gone: 'The refresh button did not respond.',
nohdr: "CSFloat's limit could not be read.",
fails: 'Three refreshes in a row failed.',
signin: 'CSFloat needs you to sign in for this search.',
};
const chipPad = (n) => String(n).padStart(2, '0');
function chipClock(at, seconds = false) {
const d = new Date(at);
return `${chipPad(d.getHours())}:${chipPad(d.getMinutes())}${seconds ? `:${chipPad(d.getSeconds())}` : ''}`;
}
function chipText(v, now, reduce) {
const s = v.pace * v.cost;
const every = `every ${s % 60 ? `${s} s` : `${s / 60} min`}`;
const left = v.left === null ? '' : ` (${v.left} left)`;
const at = chipClock(v.at);
const chip = { glyph: 'auto', label: 'Auto', time: '', say: '', more: '', pressed: true, disabled: false, ticks: 0 };
if (v.mode === 'running') {
const step = reduce ? 10000 : 1000;
const ms = Math.max(0, v.at - now);
const sec = (Math.ceil(ms / step) * step) / 1000;
const slow = v.reason === 'slow';
chip.say = slow ? "Slowed to save CSFloat's hourly limit" : `Refreshes ${every}`;
chip.more = slow ? left : v.at ? ` · next at ${chipClock(v.at, true)}` : '';
if (v.at)
Object.assign(chip, { time: `${Math.floor(sec / 60)}:${chipPad(sec % 60)}`, ticks: ms && (ms % step || step) });
return chip;
}
if (v.mode === 'paused') return { ...chip, glyph: 'pause', label: 'Paused', say: CHIP_WHY[v.reason] ?? 'Paused' };
if (v.mode === 'limit') {
return {
...chip,
glyph: 'clock',
label: 'Limit',
time: at,
say: `CSFloat's limit is low${left}. Resumes at ${at}.`,
};
}
if (v.mode === 'off') return { ...chip, say: `Auto-refresh this search ${every}`, pressed: false };
const why = v.reason === 'limit429' ? `CSFloat said too many requests. Start again after ${at}.` : CHIP_WHY[v.reason];
const label = v.mode === 'signin' ? 'Sign in' : 'Stopped';
return { ...chip, glyph: 'stop', label, say: why ?? 'Stopped.', pressed: false, disabled: v.gone };
}
// ---- src/chip-line.js
function createChipLine(refresh, chip, run, fill, reduce) {
let [ran, runAt] = ['', [0, 0]];
function line(host) {
const v = host ? refresh.view() : null;
const mode = v && ['running', 'paused', 'limit'].includes(v.mode) ? v.mode : '';
const key = `${mode}|${v?.at}|${chip.parentNode === host}`;
if (key === ran) return;
ran = key;
const now = Date.now();
if (v && mode === 'running' && v.at) runAt = [v.at, v.pace * v.cost * 1000];
const p = runAt[1] ? Math.min(1, Math.max(0, 1 - (runAt[0] - now) / runAt[1])) : 0;
run.toggleAttribute('data-on', !!mode);
run.toggleAttribute('data-hold', !!mode && mode !== 'running');
fill.style.transition = 'none';
fill.style.transform = `scaleX(${p})`;
if (!v || mode !== 'running' || v.at <= now || reduce.matches) return;
fill.getBoundingClientRect();
[fill.style.transition, fill.style.transform] = [`transform ${v.at - now}ms linear`, 'scaleX(1)'];
}
return { line, again: () => void (ran = '') };
}
// ---- src/chip.js
const SVG_NS = 'http://www.w3.org/2000/svg';
function createChip(refresh) {
const chip = document.createElement('button');
chip.type = 'button';
chip.className = 'tf-chip';
chip.setAttribute('aria-label', 'Auto-refresh');
const svg = document.createElementNS(SVG_NS, 'svg');
svg.setAttribute('viewBox', '0 0 16 16');
svg.setAttribute('aria-hidden', 'true');
const label = document.createElement('span');
const time = document.createElement('span');
time.className = 'tf-chip-time';
const run = document.createElement('span');
run.className = 'tf-chip-run';
run.setAttribute('aria-hidden', 'true');
const fill = document.createElement('span');
run.append(fill);
chip.append(svg, label, time, run);
const status = document.createElement('span');
status.className = 'tf-chip-status';
status.setAttribute('aria-live', 'polite');
const reduce = matchMedia('(prefers-reduced-motion: reduce)');
const { line, again } = createChipLine(refresh, chip, run, fill, reduce);
let glyph = '';
let cancel = () => {};
const watch = new MutationObserver(() => (place() ? render() : bar && !chip.isConnected && follow()));
let watching = false;
let bar = (null);
function follow() {
watch.disconnect();
watching = refresh.enabled();
bar = watching && chip.isConnected ? chip.closest('app-search-bar') : null;
if (bar) {
watch.observe(bar, { subtree: true, childList: true });
for (let up = bar.parentNode; up; up = up.parentNode) watch.observe(up, { childList: true });
} else if (watching) watch.observe(document, { subtree: true, childList: true });
}
const fits = new ResizeObserver(() => fit());
function fit() {
if (host) return void chip.toggleAttribute('data-tf-icon', small);
chip.removeAttribute('data-tf-icon');
const slot = chip.parentElement;
if (slot && slot.getBoundingClientRect().width < parseFloat(getComputedStyle(slot).flexBasis) - 0.5)
chip.setAttribute('data-tf-icon', '');
}
let [host, small] = [ (null), false];
const seen = [];
chip.addEventListener('click', (event) => {
if (!event.isTrusted) return;
event.stopPropagation();
refresh.toggle();
});
function place() {
const slot = refresh.enabled() ? (host?.isConnected ? host : refreshHere()?.parentNode) : null;
if (slot ? chip.parentNode === slot && status.parentNode === slot : !chip.isConnected) return false;
fits.disconnect();
if (slot) {
slot.append(chip, status);
if (slot.parentElement && slot !== host) fits.observe(slot.parentElement);
} else {
chip.remove();
status.remove();
}
follow();
return true;
}
function render() {
cancel();
if (watching !== refresh.enabled()) follow();
const text = chipText(refresh.view(), Date.now(), reduce.matches);
if (status.textContent !== text.say) status.textContent = text.say;
place();
if (!chip.isConnected) return;
if (glyph !== text.glyph) {
glyph = text.glyph;
const paths = CHIP_GLYPHS[text.glyph].map((d) => {
const path = document.createElementNS(SVG_NS, 'path');
path.setAttribute('d', d);
return path;
});
svg.replaceChildren(...paths);
}
label.textContent = text.label;
time.textContent = text.time;
fit();
chip.title = text.say + text.more;
chip.setAttribute('aria-pressed', String(text.pressed));
if (text.disabled) chip.setAttribute('aria-disabled', 'true');
else chip.removeAttribute('aria-disabled');
line(host);
if (text.ticks && document.visibilityState === 'visible') cancel = tickAfter(render, text.ticks);
for (const cb of seen) cb();
}
refresh.onChange(render);
document.addEventListener('visibilitychange', (event) => event.isTrusted && render());
render();
return {
dock(el) {
if (host === el && (!el || chip.parentNode === el)) return;
host = el;
again();
render();
},
docked: () => !!host && chip.parentNode === host,
small(on) {
small = on;
fit();
},
listen: (cb) => void seen.push(cb),
};
}
// ---- src/bargain.js
const bargainEsc = ( t) => t.replace(/[$()*+.?[\\\]^{|}]/g, '\\$&');
function bargainAmount(price, said) {
const [, pre, dot, post] = /^(\D{0,8})\d[\d.,]*([.,])\d\d(\D{0,8})$/.exec(price) ?? [];
const num = `\\d{1,3}(?:\\${dot === '.' ? ',' : '.'}\\d{3}){0,4}\\${dot}\\d\\d(?![.,]?\\d)`;
const found = dot && said.match(new RegExp(`(?<![\\w.,])${bargainEsc(pre)}${num}${bargainEsc(post)}`));
return found && said.match(/\d[\d.,]*/g)?.length === 1 ? found[0] : null;
}
function createBargain() {
const attr = TF_SETTINGS.bargain.attr;
const root = document.documentElement;
const costText = { subtree: true, characterData: true };
const unfit = (new Set());
function fit() {
const on = [...unfit].filter((s) => s.isConnected);
const wraps = on.map((s) => s.scrollHeight > s.clientHeight);
unfit.clear();
on.forEach((s, i) => s.toggleAttribute('hidden', wraps[i]));
}
const widths = new ResizeObserver((entries) => {
for (const { target } of entries) {
if (target.isConnected) unfit.add(target);
else widths.unobserve(target);
}
fit();
});
function sync(wrap) {
const label = wrap.querySelector('button > .mdc-button__label');
const [ours, other] = label?.children ?? [];
const ref = wrap.getAttribute('aria-describedby');
const [note, twin] = ref ? document.querySelectorAll(`#${CSS.escape(ref)}`) : [];
const cost = wrap.closest(TF_SELECTORS.card)?.querySelector(TF_SELECTORS.price);
if (cost && root.hasAttribute(attr)) cardInside(cost, costText);
const price = cost?.textContent?.trim();
const text =
root.hasAttribute(attr) &&
!other &&
(!ours || ours.matches('span.tf-bargain')) &&
price &&
!twin &&
note?.parentElement?.matches('.cdk-describedby-message-container')
? bargainAmount(price, note.textContent ?? '')
: null;
for (const el of wrap.querySelectorAll('span.tf-bargain')) if (!text || el !== ours) el.remove();
if (!text || !label) return;
let span = ours;
if (!span) {
span = label.appendChild(document.createElement('span'));
span.className = 'tf-bargain';
span.setAttribute('aria-hidden', 'true');
widths.observe(span);
}
const changed = span.textContent !== text;
if (span.textContent !== text) span.textContent = text;
if (changed && ours) unfit.add(span);
}
const notes = '.cdk-describedby-message-container';
const texts = { subtree: true, childList: true, characterData: true };
let full = false;
cardWatch({
attrs: [attr],
setting: () => (full = true),
other(r) {
for (const n of r.addedNodes) if (n instanceof Element && n.matches(notes)) cardInside(n, texts);
const el = r.target.nodeType === 1 ? (r.target) : r.target.parentElement;
if (root.hasAttribute(attr) && el?.closest(notes)) full = true;
},
cards(changed) {
const scopes = full ? [document] : root.hasAttribute(attr) ? changed : [];
full = false;
for (const scope of scopes) for (const wrap of scope.querySelectorAll(TF_SELECTORS.bargain)) sync(wrap);
fit();
},
});
const had = document.querySelector(notes);
if (had) cardInside(had, texts);
}
// ---- src/price-fit.js
const PRICE_FIT = { gap: 2, pad: 2, inner: 2, icon: 14, zoom: 0.7, eps: 0.5 };
const PRICE_PROPS = ['--tf-gap', '--tf-pad', '--tf-inner', '--tf-icon', '--tf-zoom'];
function createPriceFit() {
const html = document.documentElement;
const attr = TF_SETTINGS.priceLine.attr;
const grid = 'app-item-container > .content-wrapper > item-card';
const texts = { subtree: true, childList: true, characterData: true };
const cardOf = (new WeakMap());
const widths = (new WeakMap());
const seen = (new WeakMap());
const num = ( v) => parseFloat(v) || 0;
const width = ( e) => e?.getBoundingClientRect().width ?? 0;
const keyOf = ( row) =>
`${row.querySelector(':scope > .badge *') ? '$' : ''}${row.textContent}`;
function oneLine(row) {
const r = row.getBoundingClientRect();
const boxes = [...row.children].map((e) => e.getBoundingClientRect()).filter((b) => b.width && b.height);
const inside = boxes.every((b) => b.left >= r.left - 0.5 && b.right <= r.right + 0.5);
return inside && Math.max(...boxes.map((b) => b.top)) < Math.min(...boxes.map((b) => b.bottom));
}
function plan(row) {
const kids = [...row.children];
const price = kids.find((e) => e.matches('.price'));
const badge = kids.find((e) => e.matches('.badge')) ?? null;
const box = kids.find((e) => e.matches('.reference-widget-container')) ?? null;
const known = kids.length === 1 + (badge ? 1 : 0) + (box ? 1 : 0);
if (!row.isConnected || !html.hasAttribute(attr) || !price || !known) return null;
const fitted = row.hasAttribute('data-tf-fit');
if (!fitted && oneLine(row)) return null;
const had = ( p) => num( (row).style.getPropertyValue(p));
const pill = box?.querySelector('div.reference') ?? null;
const ps = pill && getComputedStyle(pill);
const pad = ps ? num(ps.getPropertyValue('--padding-left-right')) : 0;
const icon = ps ? num(ps.getPropertyValue('--icon-size')) : 0;
const inner = ps ? num(ps.columnGap) : 0;
const gap = num(getComputedStyle(row).columnGap);
const spacing = badge ? num(getComputedStyle(badge).marginLeft) : 0;
const text = width(price) / (had('--tf-zoom') || 1);
if (!text) return null;
const pillW = width(pill) + 2 * had('--tf-pad') + had('--tf-inner') + had('--tf-icon');
const short = text + (kids.length - 1) * gap + width(badge) + spacing + pillW - width(row);
if (fitted && short <= -PRICE_FIT.eps) return null;
let need = Math.max(short, 0) + PRICE_FIT.eps;
const f = PRICE_FIT;
const room = !box || !badge ? 0 : width(badge) ? gap - f.gap : gap;
const cuts = [room, 2 * (pad - f.pad), inner - f.inner, icon - f.icon].map((r) => {
const t = Math.min(need, Math.max(r, 0));
need -= t;
return t;
});
cuts[1] /= 2;
const zoom = need > 0 ? Math.floor(((text - need) / text) * 1000) / 1000 : 1;
return zoom < f.zoom ? null : [...cuts, zoom];
}
function apply(row, cuts) {
const style = (row).style;
if (!cuts && !row.hasAttribute('data-tf-fit')) return;
row.toggleAttribute('data-tf-fit', !!cuts);
PRICE_PROPS.forEach((prop, k) => {
const value = !cuts ? '' : k === 4 ? String(cuts[k]) : `${+cuts[k].toFixed(3)}px`;
if (style.getPropertyValue(prop) !== value) style.setProperty(prop, value);
});
}
function fit(rows) {
const cuts = rows.map(plan);
rows.forEach((row, k) => apply(row, cuts[k]));
}
const sized = new ResizeObserver((entries) => {
const rows = [];
for (const { target, contentRect } of entries) {
const card = target.isConnected ? cardOf.get(target) : null;
if (!card) sized.unobserve(target);
else if (contentRect.width && widths.get(card) !== contentRect.width) {
widths.set(card, contentRect.width);
const row = card.querySelector('.price-row');
if (!row) continue;
rows.push(row);
seen.set(row, keyOf(row));
}
}
fit(rows);
});
const pending = (new Set());
let frame = 0;
const soon = ( rows) => {
for (const row of rows) pending.add(row);
frame ||= requestAnimationFrame(() => {
frame = 0;
fit([...pending]);
pending.clear();
});
};
let full = false;
cardWatch({
attrs: [attr],
setting: () => (full = true),
cards(changed, added) {
const all = full;
full = false;
const cards = all ? document.querySelectorAll(grid) : [...added, ...changed].filter((c) => c.matches(grid));
const rows = [];
for (const card of cards) {
const box = card.querySelector('mat-card > .item-grid > .image');
if (box && !cardOf.has(box)) {
cardOf.set(box, card);
sized.observe(box);
}
const row = card.querySelector('.price-row');
if (!row) continue;
cardInside(row, texts);
const key = keyOf(row);
if (!widths.has(card) || (!all && seen.get(row) === key)) continue;
seen.set(row, key);
rows.push(row);
}
if (rows.length) soon(rows);
},
});
document.fonts?.addEventListener('loadingdone', () => soon(document.querySelectorAll(`${grid} .price-row`)));
}
// ---- src/dialog-about.js
const DIALOG_TAG_RE = /^(?:[A-Z][A-Z0-9]*_\d{1,3};\s*){1,12}$/;
const DIALOG_TAG_MAX = 32;
const DIALOG_WORDS = Object.freeze({ more: 'More', less: 'Less' });
const DIALOG_FLOAT = `${TF_SELECTORS.card} ${TF_SELECTORS.floatValue}`;
function dialogTags(text) {
const line = text.trim();
const tags = DIALOG_TAG_RE.test(line) ? line.split(/;\s*/).filter(Boolean) : [];
return tags.length && tags.every((tag) => tag.length <= DIALOG_TAG_MAX) ? tags : null;
}
function dialogMine(ours, box, sel) {
return [...box.querySelectorAll(sel)].find((el) => ours.has(el)) ?? null;
}
function createDialogAbout(ours, on) {
const made = new WeakMap();
const sized = new Set();
const fitChips = new WeakMap();
const moreOf = ( about) =>
(dialogMine(ours, about, 'button.tf-more'));
function fit(about) {
const more = moreOf(about);
const text = about.querySelector(TF_SELECTORS.flavour);
if (!more || !text) return;
const past = text.scrollHeight > text.clientHeight + 1;
more.hidden = !(more.ariaExpanded === 'true' || dialogMine(ours, about, 'span.tf-chips') || past);
}
const resize = new ResizeObserver((entries) => {
for (const { target } of entries) if (target.parentElement) fit(target.parentElement);
});
const again = (new Set());
let frame = 0;
const refit = () => ((frame = 0), again.forEach(fit), again.clear());
const soon = ( about) => ((frame ||= requestAnimationFrame(refit)), again.add(about));
function expand(more, all) {
more.ariaExpanded = String(all);
more.textContent = all ? DIALOG_WORDS.less : DIALOG_WORDS.more;
}
function toggle(event) {
const more = (event.currentTarget);
if (!event.isTrusted) return;
expand(more, more.ariaExpanded !== 'true');
if (more.parentElement) fit(more.parentElement);
}
function chipsIn(about, tags) {
const row = about.appendChild(document.createElement('span'));
row.className = 'tf-chips';
row.ariaHidden = 'true';
ours.add(row);
for (const tag of tags) {
const chip = row.appendChild(document.createElement('span'));
chip.className = 'tf-chip';
chip.textContent = tag;
}
made.set(row, tags.join());
return row;
}
function sync(about, keep) {
const text = about.querySelector(TF_SELECTORS.flavour);
if (!text || about.matches('.hidden')) return;
const lines = about.querySelectorAll(`${TF_SELECTORS.flavour} > i`);
const tags = on('chips') && lines.length === 1 ? dialogTags(lines[0].textContent ?? '') : null;
let chips = dialogMine(ours, about, 'span.tf-chips');
let more = moreOf(about);
let now = !!chips !== fitChips.get(about) || (!!chips && !tags);
if (tags) {
if (!chips || made.get(chips) !== tags.join()) {
chips?.remove();
chips = chipsIn(about, tags);
if (more) about.append(more);
now = true;
}
keep.add(chips);
}
if (!on('desc')) return;
if (!more) {
more = about.appendChild(document.createElement('button'));
more.type = 'button';
more.className = 'tf-more';
more.addEventListener('click', toggle);
ours.add(more);
now = true;
}
const float = about.closest(TF_SELECTORS.dialog)?.querySelector(DIALOG_FLOAT);
const listing = `${text.textContent}\n${float?.textContent}`;
if (made.get(more) !== listing) {
made.set(more, listing);
expand(more, false);
now = true;
}
keep.add(more);
if (!sized.has(text)) resize.observe(text);
sized.add(text);
fitChips.set(about, !!chips);
(now ? fit : soon)(about);
}
function settle() {
if (!on('desc')) {
resize.disconnect();
sized.clear();
}
for (const text of sized) {
if (text.isConnected) continue;
resize.unobserve(text);
sized.delete(text);
}
}
return { sync, settle };
}
// ---- src/dialog.js
const DIALOG_NOTE = 'Daily average of every sale, all patterns, floats and stickers';
const DIALOG_KEY = "Each dot is a sale: ● this listing's tier · ○ other tiers · grey not graded · line: daily average";
function createDialog() {
const root = document.documentElement;
const on = ( key) => root.hasAttribute(TF_SETTINGS[key].attr);
const ours = new WeakSet();
const about = createDialogAbout(ours, on);
const texts = `${TF_SELECTORS.flavour}, ${TF_SELECTORS.dialog} ${DIALOG_FLOAT}`;
function sync() {
const keep = new Set();
const grid = TF_SELECTORS.dialogGrid;
for (const box of document.querySelectorAll(`${grid} > ${TF_SELECTORS.about}`)) about.sync(box, keep);
for (const head of on('graphNote') ? document.querySelectorAll(`${grid} > ${TF_SELECTORS.historyHeader}`) : []) {
let note = dialogMine(ours, head, 'div.tf-graph-note');
if (!note) {
note = head.appendChild(document.createElement('div'));
note.className = 'tf-graph-note';
ours.add(note);
}
const k = !!head.parentElement?.querySelector('.tf-sg-dot');
if (note.textContent !== (k ? DIALOG_KEY : DIALOG_NOTE)) note.textContent = k ? DIALOG_KEY : DIALOG_NOTE;
keep.add(note);
}
for (const el of document.querySelectorAll('button.tf-more, span.tf-chips, div.tf-graph-note'))
if (ours.has(el) && !keep.has(el)) el.remove();
about.settle();
}
function holds(node) {
const el = (node);
return node.nodeType === 1 && (el.matches(TF_SELECTORS.dialog) || !!el.querySelector(TF_SELECTORS.dialog));
}
function seen(records) {
const live = on('desc') || on('chips') || on('graphNote');
for (const { target, type, addedNodes, removedNodes } of records) {
if (target === root) return sync();
if (!live) continue;
const el = target.nodeType === 1 ? (target) : target.parentElement;
const within = el?.closest(type === 'characterData' ? texts : TF_SELECTORS.dialog);
if (within || [...addedNodes, ...removedNodes].some(holds)) return sync();
}
}
const attrs = [TF_SETTINGS.desc.attr, TF_SETTINGS.chips.attr, TF_SETTINGS.graphNote.attr];
const watch = new MutationObserver((records) => {
seen(records);
dialogFollow(watch, attrs, { characterData: true });
});
dialogFollow(watch, attrs, { characterData: true });
}
function dialogFollow(mo, attrs, inside) {
mo.disconnect();
mo.observe(document.documentElement, { childList: true, attributeFilter: attrs });
if (document.body) mo.observe(document.body, { childList: true });
const box = [...(document.body?.children ?? [])].find((el) => el.matches('.cdk-overlay-container'));
if (box) mo.observe(box, { childList: true, subtree: true });
for (const dialog of box?.querySelectorAll(TF_SELECTORS.dialog) ?? [])
mo.observe(dialog, { childList: true, subtree: true, ...inside });
}
// ---- src/tip-words.js
function tipWords(s) {
const rows = (s.rows ?? []).map((r) => r.c.map((x) => (typeof x === 'string' ? x : x[0])).filter(Boolean));
const lines = [[s.head, s.aside], [s.body], ...rows, [s.note], [s.source]];
return lines
.map((l) => l.filter(Boolean).join(' · '))
.filter(Boolean)
.join('\n');
}
function tipBeside(l, a, w, full, flip = false) {
const [rr, lr] = [innerWidth - 16 - l.right, l.left - 16];
const r = (rr >= w || (lr < w && rr >= lr)) !== flip;
const fit = Math.min(w, r ? rr : lr);
const y = Math.max(8, Math.min(a.top - 8, innerHeight - 8 - Math.min(full, innerHeight - 16)));
return (r ? rr : lr) < 180 ? null : [r ? l.right + 8 : l.left - 8 - fit, y, fit, innerHeight - 16];
}
const tipOver = (l, a, full) => [l.left, Math.max(8, a.top - 6 - full), l.width, Math.max(40, a.top - 14)];
const tipBehind = (el, anchor) =>
!!anchor?.closest(TF_SELECTORS.offer) && !el.contains(anchor) && !!(el.compareDocumentPosition(anchor) & 4);
const tipUnder = (anchor) =>
!anchor.closest('[popover]') &&
[...document.querySelectorAll(TF_SELECTORS.overlays)].some((o) => !o.contains(anchor) && !tipBehind(o, anchor));
let tipFound = ([null, [], 0]);
function tipRows(anchor) {
if (tipFound[0] !== anchor || ++tipFound[2] >= 10 || tipFound[1].some((r) => !r.isConnected))
tipFound = [anchor, anchor ? [...document.querySelectorAll(TF_SELECTORS.actionRows)] : [], 0];
return tipFound[1]
.filter((r) => !r.contains(anchor) && !tipBehind(r, anchor))
.map((r) => r.getBoundingClientRect())
.filter((r) => r.width > 0 && r.height > 0);
}
function tipRoom(rows, a, x0, w) {
const cols = rows.filter((r) => x0 < r.right && x0 + w > r.left);
const lim = Math.min(innerHeight - 8, ...cols.filter((r) => r.top >= a.bottom).map((r) => r.top - 6));
const top = Math.max(8, ...cols.filter((r) => r.bottom <= a.top).map((r) => r.bottom + 6));
return [lim - 6 - a.bottom, a.top - 6 - top];
}
const tipHits = (rows, [x, y, w, h]) =>
rows.some((r) => x < r.right && x + w > r.left && y < r.bottom && y + h > r.top);
const tipCell = (x) => (typeof x === 'string' ? tierEl('span', '', x) : tierEl('span', `tf-tip-${x[1]}`, x[0]));
function tipDraw(s) {
const kids = [];
const aside = s.aside ? [tierEl('span', 'tf-tip-a', s.aside)] : [];
if (s.head || aside.length) kids.push(tierEl('div', 'tf-tip-h', tierEl('b', 'tf-tip-t', s.head ?? ''), ...aside));
if (s.body) kids.push(tierEl('p', 'tf-tip-b', s.body));
const rows = s.rows ?? [];
const n = Math.max(0, ...rows.map((r) => r.c.length));
const fill = ( r) => [...r.c, ...Array(n - r.c.length).fill('')].map(tipCell);
const tone = ( cls, t = '') => (t ? `${cls} tf-tip-${t}` : cls);
const grid = tierEl('div', 'tf-tip-g', ...rows.map((r) => tierEl('div', tone('tf-tip-r', r.tone), ...fill(r))));
if (n > 1) grid.style.setProperty('--tf-tip-n', `${n - 1}`);
if (rows.length) kids.push(grid);
if (s.note) kids.push(tierEl('p', tone('tf-tip-v', s.tone), s.note));
if (s.source) kids.push(tierEl('p', 'tf-tip-s', s.source));
return kids;
}
function tipClear(rows, [x, y0, w, h]) {
const spans = ([]);
let top = 8;
for (const r of rows.filter((r) => x < r.right && x + w > r.left).sort((p, q) => p.top - q.top)) {
spans.push([top, r.top - 6]);
top = Math.max(top, r.bottom + 6);
}
spans.push([top, innerHeight - 8]);
let best = (null);
for (const [s, e] of spans) {
const hh = Math.min(h, e - s);
const y = Math.max(s, Math.min(y0, e - hh));
if (hh >= Math.min(h, 100) && (!best || Math.abs(y - y0) < Math.abs(best[0] - y0))) best = [y, hh];
}
return best;
}
function tipAside(l, a, w, full, inner, rows) {
const first = inner ? tipOver(l, a, full) : tipBeside(l, a, w, full);
const all = ([first, ...(inner ? [] : [tipBeside(l, a, w, full, true)])].filter(Boolean));
const box = ( b) => [b[0], b[1], inner || b[2] < w ? b[2] : w, Math.min(full, b[3])];
const clear = all.find((b) => !tipHits(rows, box(b)));
if (clear || !first) return (clear ?? null);
for (const b of all) {
const c = tipClear(rows, box(b));
if (c) return [b[0], c[0], b[2], c[1]];
}
return first;
}
// ---- src/tip-box.js
const tipFrame = globalThis.requestAnimationFrame;
function createTipBox() {
const tips = new WeakMap();
let box = (null);
let [anchor, side, want] = [null, null, null];
let [by, frame, at, wide, inner, mat] = ['', 0, '', 0, false, false];
let cancel = () => {};
const stop = () => (cancel(), (want = null));
const later = (f, ms, a = null) => (stop(), (want = a), (cancel = tickAfter(f, ms)));
const tiedOf = (node) => {
for (let n = node; n && n.nodeType === 1; n = n.parentNode) if (tips.has(n)) return (n);
return null;
};
const specOf = (el) => {
const t = tips.get(el);
return typeof t === 'function' ? t() : t;
};
const boxed = () => document.documentElement.hasAttribute(TF_SETTINGS.tipBoxes.attr);
const plain = (el, s = specOf(el)) => s && el.setAttribute('title', tipWords(s));
function hide(e = (null)) {
(e && by === 'focus' && anchor?.closest(TF_SELECTORS.dialog) && e.stopPropagation(), stop());
box?.remove();
anchor?.removeAttribute('aria-describedby');
[anchor, side, by, at] = [null, null, '', ''];
tipRows(null);
}
function show(a, how) {
stop();
const s = specOf(a);
if (!s) return hide();
if (anchor !== a) (hide(), a.setAttribute('aria-describedby', 'tf-tip'));
[anchor, side, by, inner, mat] = [a, s.side ? a.closest(s.side) : null, how, !!s.over, !!s.mat];
box ??= Object.assign(tierEl('div', 'tf-tip'), { id: 'tf-tip', role: 'tooltip', popover: 'manual' });
box.classList.toggle('tf-tip-mat', mat);
box.replaceChildren(...tipDraw(s));
[wide, at, box.style.maxWidth] = [0, '', inner && side ? `${side.getBoundingClientRect().width}px` : ''];
if (!box.isConnected) (document.body.append(box), box.showPopover?.());
if (!frame) place();
}
function place() {
frame = 0;
if (!box || !anchor) return;
const a = anchor.getBoundingClientRect();
if (!anchor.isConnected || a.bottom < 0 || a.top > innerHeight || tipUnder(anchor) || !boxed()) return hide();
const rows = tipRows(anchor);
const { width: w, height: h } = box.getBoundingClientRect();
const full = box.scrollHeight || h;
const x0 = Math.max(8, Math.min(a.left, innerWidth - w - 8));
const [below, above] = tipRoom(rows, a, x0, w);
const up = full > below && above > below;
const room = Math.max(80, up ? above : below);
let [x, y, max] = [x0, up ? a.top - 6 - Math.min(full, room) : a.bottom + 6, room];
const l = side?.isConnected ? side.getBoundingClientRect() : null;
if (mat && l)
[x, y] = [Math.round(Math.max(l.left + 8, Math.min(a.left + (a.width - w) / 2, l.right - 8 - w))), a.bottom + 6];
const b = (!mat && l && tipAside(l, a, (wide ||= w), full, inner, rows)) || null;
if (b) [x, y, max] = [b[0], b[1], b[3]];
const wd = b && (inner || b[2] < wide) ? b[2] : null;
if (tipHits(rows, [x, y, wd ?? w, Math.min(full, max)])) return hide();
const now = `${x} ${y} ${max} ${b?.[2]}`;
if (now !== at) {
at = now;
Object.assign(box.style, { left: `${x}px`, top: `${y}px`, maxHeight: `${max}px` });
box.style.maxWidth = wd === null ? '' : `${wd}px`;
}
frame = tapApply(tipFrame, globalThis, [place]);
}
const keyed = (el) => {
try {
return el.matches(':focus-visible');
} catch {
return true;
}
};
const on = ( type, fn) =>
tapApply(tapListen, document, [type, fn, true]);
on('pointerover', (e) => {
if (box?.contains(e.target)) return stop();
const a = tiedOf(e.target);
if (a && !boxed()) return (plain(a), hide());
a?.removeAttribute('title');
if (a && a === anchor) return by === 'hover' && stop();
if (a) return anchor ? show(a, 'hover') : a !== want && later(() => show(a, 'hover'), 300, a);
if (!anchor) return stop();
if (by === 'hover') later(hide, 150);
});
on('pointerout', (e) => !e.relatedTarget && by === 'hover' && later(hide, 150));
on('pointerdown', (e) => !box?.contains(e.target) && hide());
on('focusin', (e) => {
const a = tiedOf(e.target);
if (a && a === e.target && keyed(a) && boxed()) show(a, 'focus');
});
on('focusout', (e) => by === 'focus' && e.target === anchor && hide());
on('keydown', (e) => e.key === 'Escape' && anchor && hide(e));
globalThis.addEventListener?.('resize', () => anchor && !frame && place());
const live = () => Object.values(TF_SETTINGS).some((s) => s.attr && document.documentElement.hasAttribute(s.attr));
new MutationObserver(() => {
if (live())
document.querySelectorAll('[data-tf-tip]').forEach((el) => (boxed() ? el.removeAttribute('title') : plain(el)));
}).observe(document.documentElement, { attributes: true, attributeFilter: [TF_SETTINGS.tipBoxes.attr] });
return {
tie(el, tip) {
el.removeAttribute('title');
el.toggleAttribute('data-tf-tip', !!tip);
if (!tip) return void (tips.delete(el), el === anchor && hide());
tips.set(el, tip);
if (!boxed()) plain(el);
else if (el === anchor) show(el, by);
},
shown: ( el) => void (boxed() && el !== anchor && show(el, keyed(el) ? 'focus' : 'hover')),
hide,
};
}
const tipBox = createTipBox();
// ---- src/grade-art-rows.js
const ART_INK = { '#': [[0]], h: [[0], ['#ffffff', 0.4]], l: [[0], ['#ffffff', 0.65]], d: [[0], ['#000000', 0.3]], e: [[0], ['#000000', 0.55]], b: [[1]], H: [[1], ['#ffffff', 0.4]], D: [[1], ['#000000', 0.3]], c: [[2]], C: [[2], ['#ffffff', 0.4]], w: [['#ffffff', 0.55]], W: [['#ffffff']], x: [['#000000']], z: [['#000000', 0.3]], p: [['#96b8f3']], q: [['#3b7be8']], r: [['#184590']], P: [['#fadc7d']], Q: [['#f7c21a']], R: [['#8a6c0c']] };
const ART_ROWS = {
medal: [1, '..bb7.bb..|3.bb5.bb3.|4.bb3.bb4.|5.bb.bb5.|5.5#5.|3.##4w3#3.|..#ww6#z#..|..#w7#z#..|.#w9#z#.|.11#z#.|.11#z#.|..9#z#..|..##z5#zz#..|3.##5z##3.|5.5#5.'],
'diamond-flat': [1, '7.#|6.##|6.##|5.3#|4.4#|3.5#|3.5#|..6#|3.5#|3.5#|4.4#|5.3#|6.##|6.##|7.#'],
'sun-rays': [1, '7.#|7.#|..##4.|..##4.|5.ll#|4.ll##|4.l3#|##..4#|4.4#|4.4#|5.3#|..##4.|..##4.|7.#|7.#'],
'star-solid': [2, '7.#|7.#|6.##|6.##|6.##|8#|.7#|3.5#|4.4#|4.4#|4.4#|4.3#.|3.3#..|3.#4.'],
'phoenix-spread': [4, '##6.|3#3.##|.3#..#l|.4#.##|..6#|3.5#|4.4#|5.3#|6.##|5.dd#|4.dd.#|3.d3.d'],
solitude: [3, '10.3P3.|9.P3QR..|9.4QR..|9.4QR..|10.3R3.|3.p12.|..pqq11.|.p3qr3.p6.|p5qr.pqq5.|7qp3qr4.|12qr3.|13qr..|16r'],
clean: [6, '5.3#|3.5#|..##ll##|.##l4#|.12#d.|.11#dd.|.11#dd.|..9#dd..|3.6#3d3.|5.3d'],
heart: [4, '..4h3.4h..|.6h.6h.|15h|8#7d|8#7d|.7#6d.|..6#5d..|3.5#4d3.|4.4#3d4.|5.3#dd5.|6.##d6.|7.#7.'],
grid: [5, '7h.7#|7h.7#|7h.7#|7h.7#|7h.7#|15.|7#.7d|7#.7d|7#.7d|7#.7d|7#.7d'],
flame: [3, '7.b7.|6.##7.|6.##b6.|5.3#b..b3.|5.3#bb.b3.|4.4#5b..|3.6#4b..|..4#7b..|..4#bH6b.|..4#3H5b.|..4#3H5b.|3.4#H5b..|4.3#5b3.'],
'web-1': [7, '.6Hb.|Hxbbxbbxb|HbxbxbxbD|Hbb3xbbD|H3xb3xD|Hbb3xbbD|HbxbxbxbD|bxbbxbbxD|.b6D.'],
'web-2': [7, '.6Hb3.6Hb.|Hxbbxbbxb.Hxbbxbbxb|HbxbxbxbD.HbxbxbxbD|Hbb3xbbD.Hbb3xbbD|H3xb3xD.H3xb3xD|Hbb3xbbD.Hbb3xbbD|HbxbxbxbD.HbxbxbxbD|bxbbxbbxD.bxbbxbbxD|.b6D3.b6D.'],
'web-3': [7, '.6Hb3.6Hb3.6Hb.|Hxbbxbbxb.Hxbbxbbxb.Hxbbxbbxb|HbxbxbxbD.HbxbxbxbD.HbxbxbxbD|Hbb3xbbD.Hbb3xbbD.Hbb3xbbD|H3xb3xD.H3xb3xD.H3xb3xD|Hbb3xbbD.Hbb3xbbD.Hbb3xbbD|HbxbxbxbD.HbxbxbxbD.HbxbxbxbD|bxbbxbbxD.bxbbxbbxD.bxbbxbbxD|.b6D3.b6D3.b6D.'],
serpent: [1, '9.3h3.|8.hhWhh..|5.3h6#.|3.hdhh.ee.dd#.|..hhbh4.edd..|..hhb6.#e..|.hdhb5.b##d.|.3h7.#ed.|.hdb7.Ddd.|.hh#7.ded.|.hd#b5.D3d.|..##eb3.Ddde..|..4#eDddedd..|3.#e#dde3d3.|5.5d5.'],
kite: [4, '4.4l3h4.|3.lW3l4h3.|..6l5h..|.7l6h.|8#7d|.7#6d.|..6#5d..|3.5#4d3.|4.4#3d4.|5.3#dd5.|6.##d6.|7.#7.'],
step: [4, '3.9l3.|..3hl7h..|.3hl9h.|8#7d|8#7d|.7d6e.|..6d5e..|3.5#4d3.|4.4#3d4.|5.3dee5.|6.dde6.'],
'step-hollow': [4, '3.9#3.|..#9.#..|.#11.#.|#13.#|#13.#|.#11.#.|..#9.#..|3.#7.#3.|4.#5.#4.|5.#3.#5.|6.3#6.'],
'tip-rim': [4, '4.4#3d4.|3.#7ld3.|..#9ld..|.#11ld.|#13ld|.#11ld.|..#9ld..|3.5#4d3.|15.|5.3#dd5.|6.##d6.|7.#7.'],
rim: [4, '4.7b4.|3.bhW5hb3.|..bhWW6hb..|.b11hb.|b7#6db|.b6#5db.|..b5#4db..|3.b4#3db3.|4.b3#ddb4.|5.b##db5.|6.b#b6.|7.b7.'],
stencil: [4, '4.4#3d4.|3.##l##4d3.|..##l3#5d..|.7#6d.|8#7d|.7#6d.|..6#5d..|3.5#4d3.|4.4#3d4.|5.3#dd5.|6.##d6.|7.#7.'],
'stencil-diamond': [4, '4.4#3d4.|3.##l##4d3.|..##l3#5d..|.7#6d.|8#7d|.7#6d.|..6#5d..|3.5#4d3.|4.4#3d4.|5.3#dd5.|6.##d6.|7.#7.'],
};
const ART_BUILT = ['brilliant', 'tip-cut', 'split', 'fade-diagonal', 'hollow', 'bands'];
const artFam = (f) =>
[f.glyph, tapOwn(f, 'fallback') ?? ''].find((g) => tapOwn(ART_ROWS, g) || ART_BUILT.includes(g)) ?? 'brilliant';
// ---- src/grade-art.js
const ART_PLAIN = { heart: 'brilliant', grid: 'brilliant', serpent: 'brilliant', flame: 'split', bands: 'split', 'web-1': 'brilliant', 'web-2': 'brilliant', 'web-3': 'brilliant',
kite: 'brilliant', step: 'brilliant', 'step-hollow': 'hollow', 'tip-rim': 'tip-cut', rim: 'brilliant', stencil: 'brilliant', 'stencil-diamond': 'diamond-flat' };
const ART_ATTRS = [
'data-tf-theme',
TF_SETTINGS.icons.attr,
TF_SETTINGS.glint.attr,
TF_SETTINGS.tidyNames.attr,
TF_SETTINGS.seedNames.attr,
];
function artLook() {
const html = document.documentElement;
const sp = html.hasAttribute(TF_SETTINGS.icons.attr);
return [sp, sp && html.hasAttribute(TF_SETTINGS.glint.attr)];
}
const artStamp = () => ART_ATTRS.map((a) => document.documentElement.getAttribute(a) ?? '-').join('|');
const ART_KEYS = '0123456789%↑↓+.∴';
const ART_B64 = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+-';
const ART_MARKS =
'sSSSSSSsoUoooooYsS6coM++Y66s666Y6euS++66+MMY666YsMMYSSSs++6ccooosSSsSSSssSSSu66sOS4cogSC8s++ssssssss++s80oo++oo0000000MM000cc0PP';
function artGlyph(g, sp = false, gl = false) {
const [y0, rle] = (tapOwn(ART_ROWS, g) ?? []);
if (rle)
return ([
y0,
rle.split('|').map((s) => {
const r = s.replace(/(\d+)(\D)/g, (_, n, ch) => ch.repeat(+n));
return r[8] ? r : r + [...r.slice(0, 7)].reverse().join('').replace(/l/g, '#');
}),
]);
if (!ART_BUILT.includes(g)) g = 'brilliant';
const rows = [];
for (let y = 4; y < 16; y++) {
let row = '';
for (let x = 0; x < 15; x++) {
const e = Math.abs(x - 7) + Math.abs(y - 8);
const c =
g[0] === 'f'
? x + y < 13
? 0
: x + y < (y < 8 ? 18 : 17)
? 1
: 2
: g === 'bands'
? +(x > 4) + +(x > 9)
: +(g === 'split' && x > 7);
const lit = y < 8 && (sp || g[0] !== 'f');
let ink =
g === 'hollow'
? '#'
: g === 'brilliant' || g === 'tip-cut'
? y < 8
? 'h'
: x > 7
? 'd'
: '#'
: (lit ? 'hHC' : '#bc')[c];
if (gl && ink === 'h' && y > 4 && (x + y === 10 || (x === 5 && y === 6))) ink = 'l';
row += e > 7 || (g === 'tip-cut' && y === 12) || (g === 'hollow' && e < 7 && y > 4) ? '.' : ink;
}
rows.push(row);
}
return ([4, rows]);
}
function artSet(el, attrs) {
for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, String(v));
return el;
}
const ART_BAND = new WeakMap();
const ART_DRAWN = new Map();
function artCopy(svg) {
const copy = (svg.cloneNode(true));
const band = ART_BAND.get(svg);
if (band) ART_BAND.set(copy, band);
return copy;
}
function artSvg(glyph, cols, marks, h) {
const [sp, gl] = artLook();
if (!sp && tapOwn(ART_PLAIN, glyph))
[glyph, cols] = [ART_PLAIN[glyph], glyph === 'bands' ? [cols[0], cols[cols.length - 1]] : cols];
const key = JSON.stringify([glyph, cols, marks, h, sp, gl]);
const drawn = ART_DRAWN.get(key);
if (drawn) return artCopy(drawn);
const [y0, rows] = glyph ? artGlyph(glyph, sp, gl) : [0, []];
const svg = document.createElementNS(SVG_NS, 'svg');
const runs = new Map();
let [top, bottom] = [Infinity, -Infinity];
const draw = (line, x0, y, ink) => {
for (let x = 0, e = 1; x < line.length; x = e++) {
while (line[e] === line[x]) e++;
for (const [fill, op = 1] of ink[line[x]] ?? []) {
const colour = typeof fill === 'number' ? (cols[fill] ?? cols[0]) : fill;
if (!/^#[0-9a-f]{6}$|^currentColor$/.test(colour)) continue;
const k = `${colour} ${op}`;
runs.set(k, `${runs.get(k) ?? ''}M${x0 + x} ${y}h${e - x}v1h${x - e}z`);
[top, bottom] = [Math.min(top, y), Math.max(bottom, y)];
}
}
};
rows.forEach((line, i) => draw(line, 0, y0 + i, ART_INK));
let at = rows[0] ? rows[0].length + 1 : 0;
for (const m of marks) {
for (let y = 0; y < 8; y++)
draw((ART_B64.indexOf(ART_MARKS[ART_KEYS.indexOf(m) * 8 + y]) + 64).toString(2).slice(1), at, y + 8, {
1: [['currentColor']],
});
at += m === '.' ? 3 : m === '∴' ? 7 : 6;
}
const opaque = ( k) => +k.endsWith(' 1');
for (const k of [...runs.keys()].sort((a, b) => opaque(b) - opaque(a))) {
const [fill, op] = k.split(' ');
svg.append(artSet(document.createElementNS(SVG_NS, 'path'), { d: runs.get(k), fill, 'fill-opacity': op }));
}
if (top <= bottom) ART_BAND.set(svg, [top, bottom]);
const w = Math.max(rows[0]?.length ?? 0, at - 1);
artSet(svg, { viewBox: `0 0 ${w} 16`, width: (w * h) / 16, height: h, 'shape-rendering': 'crispEdges' });
svg.setAttribute('aria-hidden', 'true');
if (ART_DRAWN.size >= 256) ART_DRAWN.clear();
ART_DRAWN.set(key, svg);
return artCopy(svg);
}
// ---- src/grade-art-mid.js
function artMid(el, svgs) {
const ys = [...el.querySelectorAll(svgs)].flatMap((s) => ART_BAND.get(s) ?? []);
const h = +(el.querySelector('svg')?.getAttribute('height') ?? 0);
return ((Math.min(...ys) + Math.max(...ys) + 1) / 32) * h;
}
// ---- src/grade-panel-draw.js
const PANEL_SIDES = 'Playside is the side you see in first person; backside, the other side.';
function panelRender({ rows, lit, seed, unit = 'seed' }) {
const pop = layoutSpan('tf-gp', '');
const table = layoutSpan('tf-gp-t', '');
const sides = rows.some((r) => r.side);
table.toggleAttribute('data-sides', sides);
const order = [...rows.filter((r) => lit.has(r)), ...rows];
const nicks = new Set(rows.map((r) => r.nick).filter((n) => n));
const nick = nicks.size === 1 ? [...nicks][0] : '';
let told = unit === 'pattern';
for (const fam of new Set(order.map((r) => r.fam))) {
const mine = rows.filter((r) => r.fam === fam);
const names = new Set(mine.map((r) => r.say));
const [name = ''] = unit === 'pattern' && mine[1] && names.size === 1 ? names : [];
const one = /^(?:tier|rank|level|grade|top|#)|\d/i.test(name) ? '' : name;
const head = layoutSpan('tf-gp-fam', one || fam);
if (seed != null && !table.firstChild)
head.append(layoutSpan('tf-gp-seed', `${unit} ${seed}${nick ? ` ${nick}` : ''}`));
table.append(head);
for (const r of mine) {
const row = layoutSpan('tf-gp-r', '');
const say = one ? gradeCase(r.at?.replace(/^ · /, '') ?? '') : (r.say ?? r.text);
const lv = layoutSpan('tf-gp-lv', r.nick ? '' : say);
if (r.nick) lv.append(layoutSpan('tf-gp-nick', r.nick), layoutSpan('tf-gp-in', ` · ${say}`));
if (!told && /^Tier \d/.test(say)) ((told = true), lv.append(layoutSpan('tf-gp-in', ', 1 = best')));
for (const c of r.chips ?? []) lv.append(layoutSpan('tf-gp-q', c));
if (r.at && !one) lv.append(r.nick ? layoutSpan('tf-gp-in', r.at) : r.at);
if (r.what) lv.append(layoutSpan('tf-gp-in', ` · ${r.what}`));
const [said, ...def] = (r.tip ?? '').split('\n');
const source = r.guide ? `${r.title ?? 'A Steam community guide'} · ${r.by}` : r.by;
if (!r.tip) lv.title = [r.nick ? `${seed} ${r.nick}` : '', r.text].filter((t) => t).join('\n');
else
tipBox.tie(lv, {
head: said,
aside: r.nick && `${seed} ${r.nick}`,
body: def.join('\n'),
source,
side: '.tf-gp',
});
row.toggleAttribute('data-lit', lit.has(r));
row.append(artSvg(r.glyph, r.cols, r.mark, 16), lv);
const sd = layoutSpan('tf-gp-sd', r.side);
if (r.side) tipBox.tie(sd, { head: r.side, body: PANEL_SIDES, side: '.tf-gp' });
if (sides) row.append(sd);
const link = /^\d{6,12}$/.test(r.guide ?? '');
const by = Object.assign(document.createElement(link ? 'a' : 'span'), {
className: 'tf-gp-by',
textContent: r.guide ? `guide by ${r.by}` : r.by,
});
if (link) {
const href = `https://steamcommunity.com/sharedfiles/filedetails/?id=${r.guide}`;
Object.assign(by, { href, title: r.title, target: '_blank', rel: 'noopener noreferrer' });
by.onclick = (e) => e.stopPropagation();
}
row.append(by);
table.append(row);
}
}
const from = new Set(order.map((r) => (r.guide ? 'Steam community guides' : 'CSFloat')));
pop.append(table, layoutSpan('tf-gp-src', `Source: ${[...from].join(', ')}`));
return pop;
}
// ---- src/grade-panel.js
const gradeSellCard = (card) =>
!!card.closest(TF_SELECTORS.card) &&
(!!card.closest(TF_SELECTORS.sellPage) || !card.closest(`app-item-container, ${TF_SELECTORS.dialog}`));
const gradeShared = (b) => (b.closest(TF_SELECTORS.sellPage) ? !!b.closest(TF_SELECTORS.sellCard) : gradeSellCard(b));
const panelStops = (box) => ([...box.querySelectorAll('a[href], button, input')]);
let panelIds = 0;
function panelHold(box, by, prefix) {
if (prefix) ((box.id = `${prefix}-${++panelIds}`), by?.setAttribute('aria-controls', box.id));
box.addEventListener('keydown', (e) => {
const all = panelStops(box);
const [first, last, at] = [all[0] ?? box, all[all.length - 1] ?? box, document.activeElement];
if (e.key !== 'Tab' || (at !== box && at !== (e.shiftKey ? first : last))) return;
e.preventDefault();
(e.shiftKey ? last : first).focus();
});
}
function panelKeyed(box, e, self = false) {
if (!box || !e.isTrusted || e.detail) return;
const to = (!self && panelStops(box)[0]) || Object.assign(box, { tabIndex: -1 });
to.focus({ preventScroll: true });
}
function panelDrop(box, by) {
const back = !!box?.contains(document.activeElement);
box?.remove();
by?.removeAttribute('aria-controls');
if (back) by?.focus({ preventScroll: true });
}
function createGradePanel() {
let pop = null;
let owner = null;
let pinned = false;
let timer = 0;
const later = ( f, ms) => {
clearTimeout(timer);
timer = setTimeout(f, ms);
};
function place() {
if (!pop || !owner) return;
const r = owner.getBoundingClientRect();
if (!owner.isConnected || r.bottom < 0 || r.top > innerHeight) return close();
const { width: w, height: h } = pop.getBoundingClientRect();
const y = r.bottom + h <= innerHeight - 14 ? r.bottom + 6 : r.top - 6 - h;
const x = owner.closest('.tf-gc') ? r.right + 4 - w : r.left - 4;
pop.style.left = `${Math.max(8, Math.min(x, innerWidth - w - 8))}px`;
pop.style.top = `${Math.max(8, Math.min(y, innerHeight - h - 8))}px`;
}
function close() {
clearTimeout(timer);
if (owner) owner.ariaExpanded = 'false';
panelDrop(pop, owner);
pop = owner = null;
pinned = false;
}
const inside = ( e) =>
[pop, owner, document.getElementById('tf-tip')].some((el) => el?.contains( (e.target)));
document.addEventListener('pointerdown', (e) => pop && !inside(e) && close(), true);
const escape = ( e) =>
pop && e.key === 'Escape' && (pinned && e.stopPropagation(), close());
document.addEventListener('keydown', escape, true);
document.addEventListener('scroll', place, true);
globalThis.addEventListener?.('resize', () => close());
function open(b, model) {
close();
const p = (pop = panelRender(model()));
owner = b;
p.onpointerenter = () => clearTimeout(timer);
p.onpointerleave = () => pinned || later(close, 200);
p.popover = 'manual';
[p.role, p.ariaLabel] = ['dialog', 'Grades'];
panelHold(p, b, 'tf-gp');
document.body.append(p);
p.showPopover?.();
b.ariaExpanded = 'true';
place();
setTimeout(place, 220);
}
function button(label, model) {
const b = document.createElement('button');
const show = () => model && open(b, model);
const stop = ( e) => {
if (gradeShared(b)) return;
e.stopPropagation();
e.preventDefault();
};
b.type = 'button';
b.className = 'tf-gb';
b.ariaLabel = label;
for (const t of ['pointerdown', 'mousedown', 'pointerup', 'mouseup', 'auxclick', 'click'])
b.addEventListener(t, stop);
if (!model) return b;
b.ariaExpanded = 'false';
b.onpointerenter = () =>
owner === b ? clearTimeout(timer) : pop && !pinned ? show() : later(() => b.matches(':hover') && show(), 150);
b.onpointerleave = () => (owner === b ? pinned || later(close, 200) : clearTimeout(timer));
b.onclick = (e) => {
if (gradeShared(b)) return;
if (owner === b && pinned) return close();
if (owner !== b) show();
pinned = true;
panelKeyed(pop, e);
};
return b;
}
return { button, close, holds: ( node) => !!owner && node.contains(owner) };
}
// ---- src/csf-grades.js
const CSF_BLUE = ['#3b82f6'];
const CSF_MEDAL = { gold: ['#e8b923', ''], silver: ['#c3cad3', '#2–3 '], bronze: ['#cd7f45', '#4–5 '] };
const CSF_FADES = [
['amber-fade', 'Amber Fade', ['#327a15', '#ad4d21', '#d9ae48']],
['acid-fade', 'Acid Fade', ['#3e6b2f', '#82a64a', '#c1a16c']],
['fade', 'Fade', ['#f29031', '#eb2e55', '#826ccb']],
];
let csfFamilies = [];
function csfCols(id, cols) {
const k = document.documentElement.getAttribute('data-tf-theme') === 'light' ? 'colours_light' : 'colours';
return csfFamilies.find((f) => f?.id === id)?.[k] ?? cols;
}
function csfMarksOf(row) {
const out = [];
const add = (fam, text, kind, glyph, cols, mark, side = '') =>
out.push({ fam, text, kind, side, by: 'CSFloat', glyph, cols, mark });
for (const e of row.querySelector(':scope > app-item-badge > div.container')?.children ?? []) {
const src = e.getAttribute('src') ?? '';
const v = Number.parseFloat(e.textContent ?? '');
const m = /\/badges\/(?:ch_tier_([1-3])_anim\.webp|fi_max_([1-3])\.png|(gold|silver|bronze)_float\.png)$/.exec(src);
const fade = CSF_FADES.find(([c]) => e.matches(`div.badge.${c}`));
if (m?.[1]) add('Blue Gem', `Tier ${m[1]}`, 'Tier', 'brilliant', csfCols('blue-gem', CSF_BLUE), m[1]);
else if (m?.[2]) {
const cols = csfCols('fire-and-ice', ['#ef4444', '#3b82f6']);
add('Fire & Ice', `${['1st', '2nd', '3rd'][+m[2] - 1]} Max`, 'Rank', 'flame', cols, m[2]);
} else if (m?.[3]) {
const tip = document.getElementById(e.getAttribute('aria-describedby') ?? '')?.textContent ?? '';
const high = /highest/i.test(tip);
if (!high && !/lowest/i.test(tip)) return null;
const [colour, rank] = CSF_MEDAL[m[3]];
const end = high ? 'Highest' : 'Lowest';
add('Float', `${rank}${end} float`, 'Rank', 'medal', [colour, '#5b6b8c'], high ? '↑' : '↓');
} else if (src || !(v >= 0 && v <= 100)) return null;
else if (e.matches('div.badge.blue-gem')) {
const cols = csfCols('blue-gem', CSF_BLUE);
add('Blue Gem', `Blue ${v.toFixed(1)}%`, '', 'brilliant', cols, `${Math.trunc(v)}%`, 'Playside');
} else if (fade)
add('Fade', `${fade[1]} ${v.toFixed(1)}%`, '', 'fade-diagonal', csfCols(fade[0], fade[2]), `${Math.trunc(v)}%`);
else return null;
}
return out.length ? out : null;
}
function csfBeside(ours, csf) {
const also = ours.map((g) =>
csf.find(
(c) => c.kind === 'Tier' && c.fam === 'Blue Gem' && c.fam === g.rows[0].fam && c.mark === g.mark && !g.back,
),
);
const rest = csf.filter((m) => !also.includes(m));
const pct = ( r) => r.mark.endsWith('%');
return { also, shown: rest.map((m) => [m, pct(m) && rest.some((o) => o.fam === m.fam && !pct(o))]) };
}
function csfButton(panel, m, bare, model) {
const b = panel.button(`CSFloat · ${m.text}`, model);
b.toggleAttribute('data-bare', bare);
b.append(artSvg(bare ? '' : m.glyph, m.cols, m.mark, 22), layoutSpan('tf-csf-f', 'f'));
return b;
}
// ---- src/grade-index.js
const gradeParse = JSON.parse;
const GRADE_KIND = { tier: 'Tier', sublevel: 'Tier', band: 'Band', rank: 'Rank', group: 'Group' };
const GRADE_SIDE = { playside: 'Playside', backside: 'Backside', both: 'Both sides' };
const GRADE_WORDS = ' one two three four five six seven eight nine i ii iii iv v vi vii viii ix'.split(' ');
const GRADE_HIDDEN = new Set(['2598147723']);
const GRADE_HIDDEN_SYSTEMS = new Set(['3785705023|The Relationship Between Pattern and Wear (Float)']);
const GRADE_LEAD = ['3701293527', '3699311493'];
const GRADE_WEAR = new Set(['clean']);
const gradeWorn = (d, s, shown) =>
GRADE_WEAR.has(d.families[s.family].id) && !/scratch|wear|float/i.test(shown) ? 'scratches' : '';
function gradeRank(d, si, li) {
const s = d.systems[si];
const wear = +GRADE_WEAR.has(d.families[s.family].id);
const lead = GRADE_LEAD.indexOf(`${d.guides[s.guide].steam_id}`);
const place = lead < 0 ? GRADE_LEAD.length : lead;
return (((place * 1024 + li * 2 + wear) * 1001 + s.levels[li].n) * 4096 + s.guide) * 8192 + si;
}
function gradeMark(label, key, kind) {
if (/\btop\s*(\d+|one|two|three|four|five|six|seven|eight|nine|ten)\b/i.test(label)) return '↑';
const half = /\b(tier|rank|level|grade)\s*(\d)\.5(?!\d)/i.exec(label)?.[2];
if (half) return `${half}.5`;
const num = +(/(?<![\d.,])#?(\d+)(st|nd|rd|th)?(?![\d%]|[.,]\d|\s*[-–]\s*\d)/i.exec(label)?.[1] ?? 0);
if (num) return num > 9 ? '+' : `${num}`;
const word = /\b(tier|rank|level|grade|place)\s+([a-z]+)\b/i.exec(label)?.[2].toLowerCase() ?? '-';
const n = GRADE_WORDS.indexOf(word) % 9;
return n >= 0 ? `${n || 9}` : key === 'top' ? '↑' : kind === 'group' || kind === 'tier' ? '∴' : '';
}
function gradeGems(d, sis, light) {
const gems = new Map();
for (const si of sis) {
const [glyph, cols] = gradeGem(d, d.systems[si], light);
gems.set(`${glyph}|${cols}`, [glyph, cols]);
}
return [...gems.values()];
}
const gradeAuthor = (a) => a.match(/\S*[\p{L}\p{N}]\S*/gu)?.join(' ') || a;
function gradeGem(d, s, light) {
const k = light ? 'colours_light' : 'colours';
const fam = d.families[s.family];
const g = artFam(fam);
return [g, (g === fam.glyph && (artLook()[0] || !tapOwn(ART_PLAIN, g)) && tapOwn(s, k)) || fam[k]];
}
function gradeIcons({ d, items }, grade, light, name = '') {
const seed = +grade.split(':')[2];
const found = [];
for (const si of items.get(grade.split(':', 2).join()) ?? []) {
const s = d.systems[si];
const fam = d.families[s.family];
const guide = d.guides[s.guide];
for (const [li, lv] of s.levels.entries()) {
if (!lv.seeds.includes(seed)) continue;
const side = tapOwn(lv, 'side') ?? tapOwn(s, 'side') ?? '';
const mark = gradeMark(lv.label, lv.key, s.kind);
const [[glyph, cols]] = gradeGems(d, [si], light);
const v = gradeView(s);
const shown = v.levels[li].label;
const [, text = shown, qual = ''] = /^(.*?\S)\s*[([]([^()[\]]+)[)\]]$/.exec(shown) ?? [];
const note = gradeSays(lv, '', 'display_note');
const head = gradeFam(fam);
const own = new Set([...gradeWords(name), ...gradeWords(fam.name), ...gradeWords(head)]);
const ln = gradeLine(v, v.levels[li], li, seed, text, own);
const row = {
fam: head,
text,
chips: note ? [note] : qual.trim() ? [qual.trim()] : [],
nick: gradeNick(lv, seed),
...ln,
what: [ln.what, gradeWorn(d, s, `${lv.label} ${ln.what}`)].filter((t) => t).join(' · '),
kind: tapOwn(GRADE_KIND, s.kind) ?? '',
side: tapOwn(GRADE_SIDE, side) ?? '',
by: gradeBy(guide),
guide: guide.steam_id,
title: guide.title,
glyph,
cols,
mark,
};
found.push([
gradeRank(d, si, li),
`${side}|${fam.id}|${mark}|${cols}`,
{ ...row, back: side === 'backside', rows: [row] },
]);
}
}
const icons = new Map();
for (const [, k, icon] of found.sort((a, b) => a[0] - b[0]))
icons.get(k)?.rows.push(icon.rows[0]) ?? icons.set(k, icon);
return [...icons.values()];
}
// ---- src/grade-says.js
function gradeSays(o, fallback, k = 'display') {
const v = document.documentElement.hasAttribute(TF_SETTINGS.tidyNames.attr) ? tapOwn(o, k) : undefined;
return typeof v === 'string' && v ? v : fallback;
}
const gradeFam = (fam) => gradeSays(fam, fam.id === 'overall' ? 'Overall pattern ranking' : fam.name);
const gradeBy = (g) =>
g.authors
.map(( a, i) => (i ? gradeAuthor(a) : gradeSays(g, gradeAuthor(a))))
.join(', ') || 'unknown';
function gradeNick(lv, seed) {
if (!document.documentElement.hasAttribute(TF_SETTINGS.seedNames.attr)) return '';
const v = tapOwn(tapOwn(lv, 'names_display'), `${seed}`) ?? tapOwn(tapOwn(lv, 'names'), `${seed}`);
return typeof v === 'string' ? v : '';
}
const gradeViews = new WeakMap();
function gradeView(s) {
if (!document.documentElement.hasAttribute(TF_SETTINGS.tidyNames.attr)) return s;
let v = gradeViews.get(s);
if (!v) {
const levels = s.levels.map(( l) => ({ ...l, said: l.label, label: gradeSays(l, l.label) }));
gradeViews.set(s, (v = { ...s, said: s.label, label: gradeSays(s, s.label), levels }));
}
return v;
}
// ---- src/grade-charm.js
function gradeCharmHit(lv, p) {
const [range, list] = [tapOwn(lv, 'range'), tapOwn(lv, 'patterns')];
if (Array.isArray(list) && list.includes(p)) return 'pattern';
return Array.isArray(range) && range.length === 2 && range[0] <= p && p <= range[1] ? 'range' : '';
}
function gradeCharmIcons({ d, charms }, key, light) {
const [index, p] = key.split(':');
const found = ([]);
for (const s of charms.get(index) ?? [])
for (const lv of s.levels) {
const hit = gradeCharmHit(lv, +p);
if (!hit) continue;
const fam = d.families[s.family];
const guide = d.guides[s.guide];
const [glyph, cols] = gradeGem(d, s, light);
const mark = gradeMark(lv.label, lv.key, s.kind);
const n = hit === 'range' ? 0 : lv.patterns.length;
const text = gradeSays(lv, lv.label);
const row = {
fam: gradeSays(fam, fam.name),
text,
say: text,
at:
hit === 'range'
? ` · patterns ${gradeCount(lv.range[0])}–${gradeCount(lv.range[1])} of 100,000`
: ` · ${n === 1 ? 'the only pattern' : `one of ${gradeCount(n)} patterns`}`,
tip: [lv.label, tapOwn(lv, 'definition') ?? tapOwn(s, 'definition')].filter((t) => t).join('\n'),
kind: tapOwn(GRADE_KIND, s.kind) ?? '',
side: '',
by: gradeBy(guide),
guide: guide.steam_id,
title: guide.title,
glyph,
cols,
mark,
};
const at = found.length + (hit === 'range' ? 1e4 : 0);
found.push([at, `${fam.id}|${mark}|${cols}`, { ...row, back: false, rows: [row] }]);
}
const icons = new Map();
for (const [, k, icon] of found.sort((a, b) => a[0] - b[0]))
icons.get(k)?.rows.push(icon.rows[0]) ?? icons.set(k, icon);
return [...icons.values()];
}
// ---- src/grade-port.js
const gradeEvent = Object.getOwnPropertyDescriptors(globalThis.MessageEvent?.prototype ?? {});
const gradeStart = globalThis.MessagePort?.prototype.start;
const gradeUnlisten = EventTarget.prototype.removeEventListener;
const gradePost = globalThis.MessagePort?.prototype.postMessage;
const gradeHush = Event.prototype.stopImmediatePropagation;
const gradeFire = EventTarget.prototype.dispatchEvent;
const gradeSide = { got: ( v) => {}, post: ( v) => {} };
function gradeListen(take) {
const read = (e, k) => tapApply( (gradeEvent[k]?.get), e, []);
const hello = (e) => {
if (!e.isTrusted || read(e, 'source') !== globalThis || read(e, 'data') !== 'tf-grades') return;
tapApply(gradeHush, e, []);
const port = read(e, 'ports')[0];
tapApply(gradeUnlisten, globalThis, ['message', hello, true]);
const on = ( d) => (typeof d === 'string' ? take(d) : gradeSide.got(d));
tapApply(tapListen, port, ['message', ( m) => m.isTrusted && on(read(m, 'data'))]);
gradeSide.post = (v) => tapApply(gradePost, port, [v]);
tapApply(gradeStart, port, []);
};
tapApply(tapListen, globalThis, ['message', hello, true]);
tapApply(gradeFire, globalThis, [new Event('tf-grades')]);
}
function gradeDecode(text) {
let d;
try {
d = gradeParse( (text))?.data;
} catch {
return null;
}
const arr = Array.isArray;
if (d?.schema !== 1 || ![d.families, d.guides, d.systems].every(arr)) return null;
const hide = ( s) =>
(tapOwn(s, 'category') ?? 'skin') !== 'skin' ||
GRADE_HIDDEN_SYSTEMS.has(`${d.guides[s.guide]?.steam_id}|${s.label}`);
const all = d.systems;
d.systems = d.systems.map(( s) => (tapInteger(s?.guide) && hide(s) ? null : s));
const every = [...d.systems];
d.guides = d.guides.map(( g) => (GRADE_HIDDEN.has(`${g?.steam_id}`) ? null : g));
const charms = new Map();
for (const s of all) {
const ok = tapOwn(s, 'category') === 'charm' && [s.family, s.guide].every(tapInteger) && arr(s.levels);
const g = ok && d.families[s.family] && arr(s.items) ? d.guides[s.guide] : null;
if (g && !GRADE_HIDDEN_SYSTEMS.has(`${g.steam_id}|${s.label}`))
for (const it of s.items)
if (it?.[0] === 1355 && tapInteger(it[1]) && it[1] !== 36 && it[1] !== 37)
charms.set(`${it[1]}`, [...(charms.get(`${it[1]}`) ?? []), s]);
}
d.systems = d.systems.map(( s) => (tapInteger(s?.guide) && d.guides[s.guide] ? s : null));
const items = new Map();
for (const [i, s] of d.systems.entries()) {
const ok = [s?.family, s?.guide].every(tapInteger) && d.families[s.family] && d.guides[s.guide];
if (ok && arr(s.items) && arr(s.levels) && s.levels.every(( lv) => arr(lv?.seeds)))
for (const it of s.items) items.set(`${it}`, [...(items.get(`${it}`) ?? []), i]);
}
for (const s of every)
for (const lv of arr(s?.levels) ? s.levels : []) if (arr(lv?.seeds)) lv.seeds = [...new Set(lv.seeds)];
return { d, items, every, charms };
}
// ---- src/catalog-index.js
const catParse = JSON.parse;
const catKeys = Object.keys;
const CAT_MAX = 4 << 20;
const CAT_TEXT = /^\P{C}{1,128}$/u;
const CAT_SKIN = /^\d{1,5}:\d{1,5}$/;
const CAT_BOX_ID = /^(crate:\d{1,6}|operation:\d{1,4}:[a-z0-9_]{1,96}|armory:[a-z0-9_]{1,96}|pack:[a-z0-9_:]{1,96})$/;
const CAT_NAME = /^[a-z0-9_]{1,96}$/;
const CAT_ID = /^\d{1,6}$/;
const CAT_KIND = /^(sticker|patch|spray|charm|music|item)$/;
const CAT_PACKAGE = / Souvenir Package$/;
const CAT_HIGHLIGHT = ' Souvenir Highlight Package';
const catInt = (v, hi) => tapInteger(v) && (v) >= 0 && (v) <= hi;
function catEach(o, each) {
if (!o || typeof o !== 'object' || tapIsArray(o)) return;
const ks = catKeys(o);
for (let i = 0; i < ks.length; i++) each(ks[i], tapOwn(o, ks[i]));
}
function catList(v, max, ok) {
const out = [];
if (tapIsArray(v) && v.length <= max) for (let i = 0; i < v.length; i++) if (ok(tapOwn(v, i))) out.push(tapOwn(v, i));
return out;
}
const catIs = ( re) => ( x) => tapMatches(re, x);
const catInts = (his) => ( x) =>
tapIsArray(x) && x.length === his.length && his.every((hi, i) => catInt(tapOwn(x, i), hi));
function catalogIndex(text) {
let j;
try {
j = typeof text === 'string' && text.length <= CAT_MAX ? catParse(text) : null;
} catch {
return null;
}
const d = tapOwn(j, 'data');
const tiers = tapOwn(d, 'tiers');
if (tapOwn(d, 'schema') !== 1 || !tapIsArray(tiers) || tiers.length !== 7) return null;
const [skins, boxes, pools, events] = [new Map(), new Map(), new Map(), new Map()];
const [stickers, byName, poolBoxes] = [new Map(), new Map(), new Map()];
const [kits, kitEvents, names] = [new Map(), new Map(), new Map()];
const ix = { skins, boxes, byName, pools, poolBoxes, events, stickers, kits, kitEvents, names, goods: null };
catEach(tapOwn(d, 'skins'), (ref, v) => {
const [name, tier] = [tapOwn(v, 0), tapOwn(v, 1)];
if (!tapMatches(CAT_SKIN, ref) || !tapIsArray(v) || v.length !== 5 || !tapMatches(CAT_TEXT, name)) return;
if (tier !== null && !catInt(tier, 6)) return;
const [containers, collections] = [
catList(tapOwn(v, 2), 64, catIs(CAT_BOX_ID)),
catList(tapOwn(v, 3), 8, catIs(CAT_NAME)),
];
skins.set(ref, { ref, name, tier, containers, collections, pools: catList(tapOwn(v, 4), 8, catIs(CAT_NAME)) });
});
const known = ( r) => typeof r === 'string' && skins.has(r);
catEach(tapOwn(d, 'pools'), (k, v) => void (tapMatches(CAT_NAME, k) && pools.set(k, catList(v, 512, known))));
catEach(tapOwn(d, 'events'), (k, e) => {
const [name, year, s] = [tapOwn(e, 'name'), tapOwn(e, 'year'), tapOwn(e, 'souvenir')];
if (!tapMatches(CAT_ID, k) || !tapMatches(CAT_TEXT, name) || !catInt(year, 2200)) return;
const sv = s
? {
event: catList(tapOwn(s, 'event'), 16, (x) => catInt(x, 999999)),
teams: catList(tapOwn(s, 'teams'), 128, catInts([1e7, 999999])),
players: catList(tapOwn(s, 'players'), 1024, catInts([1e7, 2 ** 32, 999999])),
}
: null;
events.set(+k, { name, year, s: sv });
const named = sv ? [...sv.event, ...sv.teams.map((t) => t[1]), ...sv.players.map((p) => p[2])] : [];
for (const kit of new Set(named)) kitEvents.set(kit, [...(kitEvents.get(kit) ?? []), +k]);
});
catEach(tapOwn(d, 'containers'), (id, c) => {
const [name, short, kind, mhn] = ['name', 'short', 'kind', 'market_hash_name'].map((f) => tapOwn(c, f));
const [event, set, pool, loot] = ['event', 'collection', 'pool', 'loot'].map((f) => tapOwn(c, f));
if (!tapMatches(CAT_BOX_ID, id) || ![name, short].every(catIs(CAT_TEXT)) || !tapMatches(/^[a-z_]{1,32}$/, kind))
return;
if (!(mhn === null || tapMatches(CAT_TEXT, mhn)) || !(event === null || catInt(event, 99999))) return;
if (![set, pool].every((x) => x === null || tapMatches(CAT_NAME, x))) return;
const tier = ( l) => tapIsArray(l) && l.length === 2 && catInt(tapOwn(l, 0), 6);
const drops = catList(loot, 7, tier).map((l) => [tapOwn(l, 0), catList(tapOwn(l, 1), 256, known)]);
const def = id.startsWith('crate:') ? +id.slice(6) : null;
const group = ( g) =>
tapIsArray(g) &&
g.length === 3 &&
(tapOwn(g, 0) === null || catInt(tapOwn(g, 0), 6)) &&
catIs(CAT_KIND)(tapOwn(g, 1));
const goods = catList(tapOwn(c, 'goods'), 64, group).map((g) => [
tapOwn(g, 0),
tapOwn(g, 1),
catList(tapOwn(g, 2), 4096, (x) => catInt(x, 999999)),
]);
const box = { id, def, name, short, kind, mhn, event, collection: set, loot: drops, pool, goods };
boxes.set(id, box);
const titles = new Set(mhn === null ? [] : [mhn, name]);
for (const n of kind === 'souvenir_package' ? [...titles] : []) titles.add(n.replace(CAT_PACKAGE, CAT_HIGHLIGHT));
for (const n of titles) byName.set(n, byName.has(n) ? null : box);
if (pool !== null) poolBoxes.set(pool, [...(poolBoxes.get(pool) ?? []), id]);
});
catEach(tapOwn(d, 'stickers'), (k, name) => {
if (!tapMatches(CAT_ID, k) || !tapMatches(CAT_TEXT, name)) return;
stickers.set(+k, name);
kits.set(name, kits.has(name) ? null : +k);
});
catGoodsIndex(ix, tapOwn(d, 'names'));
catSupplyIndex(ix, tapOwn(d, 'supply'), tapOwn(d, 'collections'));
return ix;
}
// ---- src/catalog-goods.js
const CAT_KITS = ['sticker', 'patch'];
const CAT_NAMED = ['spray', 'charm', 'music', 'item'];
const CAT_KINDS = Object.freeze({
__proto__: null,
sticker: 'Stickers',
patch: 'Patches',
spray: 'Sprays',
charm: 'Charms',
music: 'Music kits',
item: 'Pins',
});
const CAT_GOOD_KEY = Object.freeze({
__proto__: null,
sticker: 'sticker_index',
patch: 'sticker_index',
charm: 'keychain_index',
music: 'music_kit_index',
item: 'def_index',
});
const CAT_ST = 'StatTrak™ ';
function catGoodsIndex(ix, names) {
for (const kind of CAT_NAMED) {
const m = new Map();
catEach(tapOwn(names, kind), (k, v) => void (tapMatches(CAT_ID, k) && tapMatches(CAT_TEXT, v) && m.set(+k, v)));
ix.names.set(kind, m);
}
}
function catGoodName(ix, kitName, kind, id) {
if (!catInt(id, 999999) || typeof kind !== 'string') return null;
if (CAT_KITS.includes(kind)) return ix.stickers.get(id) ?? kitName(id);
return ix.names.get(kind)?.get(id) ?? null;
}
function catGoodsFrom(ix, kitOf, mhn) {
if (!ix.goods) {
const named = new Map();
for (const [kind, m] of ix.names)
for (const [id, name] of m) (named.get(name) ?? named.set(name, []).get(name))?.push([kind, id]);
ix.goods = named;
}
const st = mhn.startsWith(CAT_ST);
const name = st ? mhn.slice(CAT_ST.length) : mhn;
const kit = tapMatches(/^(Sticker|Patch) \| /, name) ? (ix.kits.get(name) ?? kitOf(name)) : null;
const keys = kit === null ? (ix.goods.get(name) ?? []) : CAT_KITS.map((k) => [k, kit]);
const out = [];
for (const box of keys.length ? ix.boxes.values() : [])
if (box.name.startsWith(CAT_ST) === st && box.mhn !== mhn)
if (box.goods.some(([, kind, ids]) => keys.some(([k, id]) => k === kind && ids.includes(id))))
out[out.length] = box;
return out;
}
function catGoodLink(kind, id) {
const key = typeof kind === 'string' ? CAT_GOOD_KEY[ (kind)] : undefined;
const ok = catInt(id, 999999) && (kind !== 'item' || (id) > 0);
return key && ok ? `${CAT_SEARCH}${key}=${id}` : null;
}
// ---- src/catalog-images.js
const CAT_STEAM = 'https://community.akamai.steamstatic.com/economy/image/';
const CAT_STEAM_RE = /^https:\/\/community\.akamai\.steamstatic\.com\/economy\/image\/([A-Za-z0-9_-]{16,400})$/;
const CAT_HASH = /^[A-Za-z0-9_-]{16,400}$/;
const CAT_WEARS = ['Factory New', 'Minimal Wear', 'Field-Tested', 'Well-Worn', 'Battle-Scarred'];
const CAT_PHASE = /^(.*Doppler) \(([^)]{1,32})\)$/;
function catSkinName(w, p) {
const [gun, skin, min] = [tapOwn(w, 'name'), tapOwn(p, 'name'), tapOwn(p, 'min')];
if (!tapMatches(CAT_TEXT, gun) || !tapMatches(CAT_TEXT, skin)) return null;
const lo = typeof min === 'number' ? min : 0;
const ph = tapApply(tapExec, CAT_PHASE, [skin]);
const star = tapOwn(w, 'type') === 'Weapons' ? '' : '★ ';
const wear = CAT_WEARS[lo < 0.07 ? 0 : lo < 0.15 ? 1 : lo < 0.38 ? 2 : lo < 0.45 ? 3 : 4];
const name = `${star}${gun} | ${ph ? ph[1] : skin} (${wear})${ph ? ` [${ph[2]}]` : ''}`;
return tapMatches(CAT_TEXT, name) ? name : null;
}
const catSchemaCopy = (() => {
try {
return globalThis.Storage.prototype.getItem.bind(globalThis.sessionStorage, 'ITEM_SCHEMA_V2');
} catch {
return null;
}
})();
function createCatalogImages() {
const html = document.documentElement;
const attrs = [TF_SETTINGS.catalogWindow.attr, TF_SETTINGS.catalogCards.attr, TF_SETTINGS.collectionWindow.attr];
let text = null;
let [wrapped, tried] = [false, false];
let hashes = null;
const names = new Map();
const charms = new Set();
let kits = null;
let missed = false;
const subs = new Set();
const sinks = new Set();
const read = () => {
const t = text;
text = null;
let j = null;
try {
j = catParse( (t));
} catch {}
if (wrapped) j = tapOwn(j, 'schema');
for (const f of sinks)
try {
f(j);
} catch {}
const m = new Map();
catEach(tapOwn(j, 'weapons'), (def, w) =>
catEach(tapOwn(w, 'paints'), (paint, p) => {
const url = tapOwn(p, 'image');
const ids = tapMatches(CAT_ID, def) && tapMatches(CAT_ID, paint);
const got = ids && typeof url === 'string' ? tapApply(tapExec, CAT_STEAM_RE, [url]) : null;
const v = got ? got[1] : ids && catSkinName(w, p);
if (v && m.size < 65536) m.set(`${+def}:${+paint}`, v);
}),
);
catEach(tapOwn(j, 'stickers'), (kit, st) => {
const name = tapOwn(st, 'market_hash_name');
if (tapMatches(CAT_ID, kit) && tapMatches(CAT_TEXT, name) && names.size < 65536) names.set(+kit, name);
});
catEach(tapOwn(j, 'keychains'), (id) => void (tapMatches(CAT_ID, id) && charms.size < 65536 && charms.add(+id)));
hashes = m;
};
const ready = () => {
if (!hashes && text === null && !tried) {
tried = true;
const t = catSchemaCopy?.();
if (typeof t === 'string' && t.length <= TAP_MAX_CHARS) [text, wrapped] = [t, true];
}
if (!hashes && text !== null) read();
if (!hashes) missed = true;
return !!hashes;
};
return {
take(t) {
if (hashes || typeof t !== 'string' || !attrs.some((a) => html.hasAttribute(a))) return;
[text, wrapped] = [t, false];
if (!missed) return;
read();
for (const f of subs)
try {
f();
} catch {}
},
get(def, paint) {
if (!catInt(def, 65535) || !catInt(paint, 65535) || !ready()) return null;
const h = hashes?.get(`${def}:${paint}`);
if (tapMatches(CAT_HASH, h)) return CAT_STEAM + h;
return tapMatches(CAT_TEXT, h) ? CAT_IMAGE_HOST + catEncode(h) : null;
},
name: (kit) => (catInt(kit, 999999) && ready() && names.get(kit)) || null,
charm: (id) => catInt(id, 999999) && ready() && charms.has(id),
kit(name) {
if (!ready()) return null;
if (!kits) {
kits = new Map();
for (const [k, n] of names) kits.set(n, kits.has(n) ? null : k);
}
return kits.get(name) ?? null;
},
parsed(fn) {
if (typeof fn === 'function') sinks.add(fn);
},
need: () => ready(),
on(fn) {
if (typeof fn === 'function') subs.add(fn);
},
};
}
// ---- src/catalog-data.js
const CAT_IMAGE_HOST = 'https://steam.static.csfloat.io/v1/images/';
const CAT_SEARCH = 'https://csfloat.com/search?';
const catEncode = encodeURIComponent;
const CAT_SEARCH_RE =
/^https:\/\/csfloat\.com\/search\?(?:def_index=\d{1,6}(?:&paint_index=\d{1,6})?|(?:sticker|keychain|music_kit)_index=\d{1,6})$/;
const CAT_IMAGE_RE = /^https:\/\/steam\.static\.csfloat\.io\/v1\/images\/(?!(?:\.|%2[eE]){1,2}$)[^/?#]+$/;
const CAT_DOTS = /^\.{1,2}$/;
function createCatalog(onIndexed) {
let ix = null;
const images = createCatalogImages();
tapSide.schema = images.take;
const prev = gradeSide.got;
gradeSide.got = (v) => {
try {
if (tapOwn(v, 'tf') !== 'catalog') return prev(v);
const next = catalogIndex(tapOwn(v, 'text'));
if (!next) return;
ix = next;
onIndexed();
} catch {}
};
const rank = (b) => {
const year = (b.event !== null && ix?.events.get(b.event)?.year) || 0;
return [b.def === null ? 1 : 0, b.kind === 'souvenir_package' ? 0 : 1, year, b.def ?? 0, b.id];
};
const order = (a, b) => {
const [x, y] = [rank(a), rank(b)];
const i = x.findIndex((v, k) => v !== y[k]);
return i < 0 ? 0 : x[i] < y[i] ? -1 : 1;
};
const str = ( v) => (typeof v === 'string' ? v : '');
const kitName = ( kit) =>
(catInt(kit, 999999) && (ix?.stickers.get(kit) ?? images.name(kit))) || null;
return {
ready: () => ix !== null,
skin: (ref) => ix?.skins.get(str(ref)) ?? null,
box: (id) => ix?.boxes.get(str(id)) ?? null,
supply: {
box: ( id) => ix?.supply?.boxes.get(str(id)) ?? null,
set: ( id) => ix?.supply?.sets.get(str(id)) ?? null,
setName: ( id) => ix?.supply?.setNames.get(str(id)) ?? null,
},
boxByName: (mhn) => ix?.byName.get(str(mhn)) ?? null,
dropsFrom(ref) {
const s = ix?.skins.get(str(ref));
if (!ix || !s) return [];
const ids = new Set(s.containers);
for (const p of s.pools) for (const id of ix.poolBoxes.get(p) ?? []) ids.add(id);
const boxes = [...ids].flatMap((id) => ix?.boxes.get(id) ?? []);
return boxes.sort(order).map((b) => b.id);
},
poolOf(id) {
const pool = ix?.boxes.get(str(id))?.pool;
return [...((pool && ix?.pools.get(pool)) || [])];
},
event(id) {
const e = catInt(id, 99999) ? ix?.events.get(id) : null;
return e ? { name: e.name, year: e.year } : null;
},
unstickered: (id) => catInt(id, 99999) && ix?.events.get(id)?.s === null,
kitOf: (name) => ix?.kits.get(str(name)) ?? null,
eventsOfKit: (kit) => [...((catInt(kit, 999999) && ix?.kitEvents.get(kit)) || [])],
possible(boxId, namedKits) {
const b = ix?.boxes.get(str(boxId));
const s = b && b.event !== null ? ix?.events.get(b.event)?.s : null;
if (!ix || !s) return [];
const named = new Set(tapIsArray(namedKits) ? namedKits : []);
const picked = new Set(s.teams.filter((t) => named.has(t[1])).map((t) => t[0]));
const has = ( team) => !picked.size || picked.has(team);
const teams = s.teams.filter((t) => has(t[0])).map((t) => t[1]);
const kits = [...s.event, ...teams, ...s.players.filter((p) => has(p[0])).map((p) => p[2])];
return [...new Set(kits)].filter((k) => kitName(k) !== null);
},
stickerName: kitName,
goodName: (kind, id) => (ix ? catGoodName(ix, images.name, kind, id) : null),
goodsFrom: (mhn) => (ix && str(mhn) ? catGoodsFrom(ix, images.kit, str(mhn)).sort(order) : []),
skinImage: images.get,
schemaParsed: images.parsed,
schemaNeed: images.need,
onImages: images.on,
imageOf: (mhn) =>
tapMatches(CAT_TEXT, mhn) && !tapMatches(CAT_DOTS, mhn) ? CAT_IMAGE_HOST + catEncode(mhn) : null,
link: {
skin: (def, paint) =>
catInt(def, 65535) && catInt(paint, 65535) ? `${CAT_SEARCH}def_index=${def}&paint_index=${paint}` : null,
box: (box) => {
const def = tapOwn(box, 'def');
return catInt(def, 999999) && def > 0 ? `${CAT_SEARCH}def_index=${def}` : null;
},
sticker: (kit) => (catInt(kit, 999999) ? `${CAT_SEARCH}sticker_index=${kit}` : null),
good: (kind, id) => (kind === 'charm' && !images.charm(id) ? null : catGoodLink(kind, id)),
},
};
}
// ---- src/catalog-supply.js
const CAT_SVG = 'http://www.w3.org/2000/svg';
const CAT_GLYPH = 'M1.5 3.5 6 1.5l4.5 2v5L6 10.5l-4.5-2zM1.5 3.5 6 5.5l4.5-2M6 5.5v5';
const CAT_CHANNEL = /^(weekly_drop|rare_drop|armory|operation|store|other)$/;
const CAT_DATE = /^(\d{4})-(0[1-9]|1[0-2])-\d{2}$/;
const CAT_MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const CAT_WORDS = new Map([
['weekly_drop', ['drops weekly', 'stopped dropping']],
['rare_drop', ['drops rarely', 'stopped dropping']],
['armory', ['in the Armory', 'left the Armory']],
['operation', ['', 'operation ended']],
['store', ['in the store', 'left the store']],
['other', ['', 'no new souvenirs since']],
]);
const CAT_NOTES = new Map([
['datamined', 'From a data-mine of the game files.'],
['reported', 'Reported, not confirmed by Valve.'],
]);
function catSupplyEntry(v) {
if (!tapIsArray(v) || (v).length < 3 || (v).length > 4) return null;
const [ch, st, since, ev] = [0, 1, 2, 3].map((i) => tapOwn(v, i));
if (!tapMatches(CAT_CHANNEL, ch) || !tapMatches(/^(active|ended|unknown)$/, st)) return null;
if (!(since === null || tapMatches(CAT_DATE, since))) return null;
return [ch, st, since, CAT_NOTES.has(ev) ? ev : null];
}
function catSupplyIndex(ix, raw, names) {
const read = ( m) => {
const out = new Map();
catEach(m, (k, v) => {
const e = tapMatches(CAT_BOX_ID, k) || tapMatches(CAT_NAME, k) ? catSupplyEntry(v) : null;
if (e) out.set(k, e);
});
return out;
};
const setNames = new Map();
catEach(names, (k, v) => void (tapMatches(CAT_NAME, k) && tapMatches(CAT_TEXT, v) && setNames.set(k, v)));
ix.supply = { boxes: read(tapOwn(raw, 'containers')), sets: read(tapOwn(raw, 'collections')), setNames };
}
function catalogSupplyWords(s) {
if (!s || s[1] === 'unknown') return '';
const w = CAT_WORDS.get(s[0])?.[s[1] === 'active' ? 0 : 1] ?? '';
if (!w || s[1] === 'active') return w;
const m = s[2] === null ? null : tapApply(tapExec, CAT_DATE, [s[2]]);
if (m) return `${w} ${CAT_MONTHS[+m[2] - 1]} ${m[1]}`;
return w === 'no new souvenirs since' ? 'no new souvenirs' : w;
}
function catalogSupplyTip(name, s) {
const words = catalogSupplyWords(s);
if (!s || !words) return null;
const note = s[3] === null ? undefined : CAT_NOTES.get(s[3]);
return note ? { body: `${name} · ${words}`, source: note } : { body: `${name} · ${words}` };
}
function catalogSupplyBest(catalog, from) {
const all = [from.first, ...from.rest];
const said = all.map((b) => {
const s = catalog.supply.box(b.id);
return catalogSupplyWords(s) ? s : null;
});
const at = said.findIndex((s) => s?.[1] === 'active');
if (at < 0) return [from, said.every((s) => s?.[1] === 'ended') ? said[0] : null];
return [{ ...from, first: all[at], rest: all.filter((_, i) => i !== at) }, said[at]];
}
const catalogSupplyOn = () => document.documentElement.hasAttribute(TF_SETTINGS.supplyStatus.attr);
function catGlyph(into, s) {
const svg = document.createElementNS(CAT_SVG, 'svg');
svg.setAttribute('class', 'tf-cf-g');
svg.setAttribute('viewBox', '0 0 12 12');
svg.setAttribute('aria-hidden', 'true');
if (catalogSupplyWords(s ?? null)) svg.setAttribute('data-tf-s', s?.[1] === 'active' ? 'on' : 'off');
svg.appendChild(document.createElementNS(CAT_SVG, 'path')).setAttribute('d', CAT_GLYPH);
into.append(svg);
return svg;
}
// ---- src/grade-words.js
const GRADE_VAGUE = new Set(
(
'tier tiers tierlist tierlists list lists ranking rankings rank ranks ranked pattern patterns guide guides the ' +
'complete comprehensive ultimate and or a of to best worst cs2 csgo knife knives'
).split(' '),
);
const GRADE_NUM =
/(?<![\p{L}\p{N}])(?:(tier|tire|ter|rank|level|grade)[\s-]*(\d+(?:\.5)?|one|two|three|four|five|six|seven|eight|nine|[ivx]+)|t(\d+))(?![\p{L}\p{N}])/iu;
const GRADE_ORDER =
/\b(?:(?:best|worst) to (?:best|worst)|top\s*(?:\d+|one|two|three|four|five|ten)|tier\s*list|list|ranking|ranked|rank)\b/gi;
const GRADE_TRIM = /^[\s|:–—\-/·,.]+|[\s|:–—\-/·,]+$/g;
const GRADE_META = /\b(?:below|above|following|showcased|pictured|shown|lists?)\b/i;
const GRADE_TH = ['th', 'st', 'nd', 'rd'];
const gradeWords = (a) => a.toLowerCase().match(/[\p{L}\p{N}]+(?:['’]\p{L}+)?/gu) ?? [];
const gradeNth = (n) => `${n}${GRADE_TH[((n % 100) - 20) % 10] || GRADE_TH[n % 100] || 'th'}`;
const gradeCount = (n) => `${n}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
const gradeCase = (a) =>
a.replace(/(?<=\S\s+)\p{Lu}\p{Ll}+/gu, (w) => w.toLowerCase()).replace(/^\p{Ll}/u, (c) => c.toUpperCase());
const gradeNew = (a, own) =>
gradeWords(a).some(
(w) => !GRADE_VAGUE.has(w) && !/^\d/.test(w) && ![w, w.replace(/s$/, ''), `${w}s`].some((v) => own.has(v)),
);
function gradeName(a) {
const b = a.replace(GRADE_ORDER, ' ').replace(/\s+/g, ' ').replace(GRADE_TRIM, '');
return b === a.trim() ? b : gradeCase(b);
}
function gradeTier(a) {
const m = GRADE_NUM.exec(a);
const said = m?.[3] ?? m?.[2] ?? '';
const w = GRADE_WORDS.indexOf(said.toLowerCase());
const num = /\d/.test(said) ? +said : w > 0 ? w % 9 || 9 : 0;
if (!m || !num) return null;
const word = !m[1] || /^t/i.test(m[1]) ? 'Tier' : m[1][0].toUpperCase() + m[1].slice(1).toLowerCase();
const rest = `${a.slice(0, m.index)} ${a.slice(m.index + m[0].length)}`.replace(/\(\s*\)|\[\s*\]/g, '');
return { word, num, rest: rest.replace(/\s+([.,;:])/g, '$1').replace(/\s+/g, ' ').replace(GRADE_TRIM, '') };
}
function gradeDef(def, level) {
const at = level ? def.toLowerCase().indexOf(level.toLowerCase()) : -1;
const after = def.slice(at + level.length);
const opens = at === 0 || (at > 0 && at <= 40 && /^\s*:|^['’]s\s/.test(after));
const s = (opens && !/^\.?\d/.test(after) ? after : def)
.replace(/^(?:['’]s\s+(?:have|has|are|is|show|shows|feature|features)\b)?[\s:.,;–—\-”"’]*/i, '')
.trim();
return s && s[0].toUpperCase() + s.slice(1);
}
function gradeWhat(s, lv, text, own) {
const name = gradeName(s.label);
const [gist = ''] = gradeDef(tapOwn(lv, 'definition') ?? '', text).match(/^.*?[.!?](?=\s|$)|^.+/) ?? [];
const meta = /^(?:this|these|that|those|here|it|many|some|beware|important)\b/i.test(gist) || GRADE_META.test(gist);
const what = gradeNew(name, own) ? name : meta ? '' : gist;
return lv.label.toLowerCase().includes(what.toLowerCase()) ? '' : what;
}
function gradeLine(s, lv, li, seed, text, own) {
const ranked = tapOwn(lv, 'ranked') ?? [];
const mine = ranked.find((p) => p[0] === seed)?.[1];
const ranks = new Set(ranked.map((p) => p[1]));
const once = [...new Set(lv.seeds)];
const whole = mine != null && ranks.size === 1 && new Set(ranked.map((p) => p[0])).size >= once.length;
const place = tapOwn(lv, 'ordered') === true && once.length > 1 ? once.indexOf(seed) + 1 : 0;
const r = mine ?? place;
const all = s.levels.flatMap(( l) => tapOwn(l, 'ranked') ?? []).map(( p) => p[1]);
const of = gradeCount(whole ? Math.max(...all) : once.length);
const [sl, ll] = [tapOwn(s, 'said') ?? s.label, tapOwn(lv, 'said') ?? lv.label];
const said = [ll, sl !== ll && sl, mine != null && `#${mine}`].filter((t) => t).join(' · ');
const tip = [said, tapOwn(lv, 'definition') ?? tapOwn(s, 'definition')].filter((t) => t).join('\n');
const line = ( say, at = '', what = gradeWhat(s, lv, text, own)) => ({ say, at, what, tip });
const pct = /^[\d.]+%$/.test(text) && !/\s/.test(s.label);
if (s.kind === 'band') return line(pct ? `${text} ${s.label.toLowerCase()}` : text);
if (s.kind === 'rank' || s.kind === 'group') {
let name =
r && (text.replace(GRADE_ORDER, '').match(/\d+/g) ?? []).includes(`${r}`)
? ''
: gradeName(text);
const bare = /^(at|in|on|by|for|with|from)\s/i.test(name);
if (bare) name = gradeCase(`${s.label.replace(/\([^)]*\)|\[[^\]]*\]/g, ' ').trim().split(/\s+/).pop()} ${name}`);
if (!gradeNew(name, own)) name = '';
if (r && (whole || s.levels.length < 2)) return line(`Rank ${r} of ${of}`, '', name || undefined);
if (s.kind === 'rank' && !r) return line(text);
const seeds = once.length === 1 ? 'the only seed' : `one of ${gradeCount(once.length)} seeds`;
const one = r ? `${gradeNth(r)} of ${of} in group` : seeds;
return name ? line(name, ` · ${one}`, bare ? '' : undefined) : line(gradeCase(one));
}
const t = gradeTier(text);
const nums = s.levels
.map(( l) => gradeTier(l.label))
.filter(( x) => x && x.word === t?.word);
const max = Math.max(0, ...nums.map(( x) => x?.num ?? 0));
const n = s.levels.length;
const say = t ? `${t.word} ${t.num}${max > 1 ? ` of ${max}` : ''}` : text;
const by = t || /^#\d+$/.test(text) || n < 2 ? '' : ` · ${gradeNth(li + 1)} of ${n}`;
const within = r && !whole ? ` · ${gradeNth(r)} of ${of} in tier` : '';
return line(say, `${by}${within}`, t && gradeNew(t.rest, own) ? t.rest : undefined);
}
// ---- src/grade-names.js
const GRADE_NAMES_SRC = [
'7 AK-47|Aphrodite=1397|Case Hardened=44',
'8 AUG|Amber Fade=246|Flame Jörmungandr=758|Snake Pit=1249',
'9 AWP|Arsenic Spill=1324|Electric Hive=227|Exothermic=1378|Fade=1026|PAW=718|POP AWP=1058|Silk Tiger=1029',
'1 Desert Eagle|Emerald Jörmungandr=757|Heat Treated=1054|Sputnik=1056',
'3 Five-SeveN|Case Hardened=44|Heat Treated=831|Kami=265',
'13 Galil AR|Phoenix Blacklight=1013|Rainbow Spoon=1178|Sandstorm=264',
'4 Glock-18|Coral Bloom=1312|Fade=38|Gamma Doppler=1119 Emerald,1120 Phase 1,1121 Phase 2,1122 Phase 3,1123 Phase 4|Moonrise=694|Trace Lock=1357',
'60 M4A1-S|Blue Phosphor=1017|Fade=1177|Icarus Fell=440|Party Animal=1376|Solitude=1338',
'16 M4A4|Daybreak=471',
'17 MAC-10|Arabesque Mosaic=1454|Case Hardened=44|Fade=38',
'23 MP5-SD|Snow Splash=1366',
'33 MP7|Amberline=1436',
'35 Nova|Turquoise Pour=1261',
'32 P2000|Acid Etched=951',
'36 P250|Bengal Tiger=1030|Plum Netting=1273',
'19 P90|Aeolian Light=1361',
'40 SSG 08|Acid Fade=253',
'29 Sawed-Off|Runoff=1272',
'30 Tec-9|Ice Cap=599',
'24 UMP-45|Fade=879',
'61 USP-S|Alpine Camo=830|Sleeping Potion=1377',
'25 XM1014|Seasons=654|Solitude=1215|XOXO=1046',
'500 ★ Bayonet|Case Hardened=44|Doppler=415 Ruby,416 Sapphire,417 Black Pearl,418 Phase 1,419 Phase 2,420 Phase 3,421 Phase 4|Fade=38|Marble Fade=413|Gamma Doppler=568 Emerald,569 Phase 1,570 Phase 2,571 Phase 3,572 Phase 4|Scorched=175|Slaughter=59',
'514 ★ Bowie Knife|Case Hardened=44|Doppler=415 Ruby,416 Sapphire,417 Black Pearl,418 Phase 1,419 Phase 2,420 Phase 3,421 Phase 4|Fade=38|Gamma Doppler=568 Emerald,569 Phase 1,570 Phase 2,571 Phase 3,572 Phase 4|Marble Fade=413|Scorched=175',
'515 ★ Butterfly Knife|Case Hardened=44|Crimson Web=12|Doppler=415 Ruby,418 Phase 1,420 Phase 3,421 Phase 4,617 Black Pearl,618 Phase 2,619 Sapphire|Fade=38|Gamma Doppler=568 Emerald,569 Phase 1,570 Phase 2,571 Phase 3,572 Phase 4|Marble Fade=413|Scorched=175',
'503 ★ Classic Knife|Case Hardened=44|Fade=38|Scorched=175',
'5031 ★ Driver Gloves|Brocade Flowers=1400|Queen Jaguar=10071|Snow Leopard=10070|Wave Chaser=1398',
'512 ★ Falchion Knife|Case Hardened=44|Doppler=415 Ruby,416 Sapphire,417 Black Pearl,418 Phase 1,419 Phase 2,420 Phase 3,421 Phase 4|Fade=38|Gamma Doppler=568 Emerald,569 Phase 1,570 Phase 2,571 Phase 3,572 Phase 4|Marble Fade=413|Scorched=175',
'505 ★ Flip Knife|Case Hardened=44|Doppler=415 Ruby,416 Sapphire,417 Black Pearl,418 Phase 1,419 Phase 2,420 Phase 3,421 Phase 4|Fade=38|Marble Fade=413|Gamma Doppler=568 Emerald,569 Phase 1,570 Phase 2,571 Phase 3,572 Phase 4|Scorched=175|Slaughter=59',
'506 ★ Gut Knife|Case Hardened=44|Doppler=415 Ruby,416 Sapphire,417 Black Pearl,418 Phase 1,419 Phase 2,420 Phase 3,421 Phase 4|Fade=38|Marble Fade=413|Gamma Doppler=568 Emerald,569 Phase 1,570 Phase 2,571 Phase 3,572 Phase 4|Scorched=175',
'5032 ★ Hand Wraps|Overprint=10054',
'509 ★ Huntsman Knife|Case Hardened=44|Doppler=415 Ruby,416 Sapphire,417 Black Pearl,418 Phase 1,419 Phase 2,420 Phase 3,421 Phase 4|Fade=38|Gamma Doppler=568 Emerald,569 Phase 1,570 Phase 2,571 Phase 3,572 Phase 4|Marble Fade=413|Scorched=175',
'5035 ★ Hydra Gloves|Case Hardened=10060',
'507 ★ Karambit|Case Hardened=44|Crimson Web=12|Doppler=415 Ruby,416 Sapphire,417 Black Pearl,418 Phase 1,419 Phase 2,420 Phase 3,421 Phase 4|Fade=38|Marble Fade=413|Gamma Doppler=568 Emerald,569 Phase 1,570 Phase 2,571 Phase 3,572 Phase 4|Scorched=175|Slaughter=59',
'526 ★ Kukri Knife|Case Hardened=44|Fade=38|Scorched=175',
'508 ★ M9 Bayonet|Case Hardened=44|Crimson Web=12|Doppler=415 Ruby,416 Sapphire,417 Black Pearl,418 Phase 1,419 Phase 2,420 Phase 3,421 Phase 4|Fade=38|Gamma Doppler=568 Emerald,569 Phase 1,570 Phase 2,571 Phase 3,572 Phase 4|Marble Fade=413|Scorched=175',
'5033 ★ Moto Gloves|Cool Mint=10028|Spearmint=10026',
'520 ★ Navaja Knife|Case Hardened=44|Doppler=415 Ruby,416 Sapphire,417 Black Pearl,418 Phase 1,419 Phase 2,420 Phase 3,421 Phase 4|Fade=38|Marble Fade=413|Scorched=175',
'521 ★ Nomad Knife|Case Hardened=44|Crimson Web=12|Doppler=415 Ruby,416 Sapphire,417 Black Pearl,418 Phase 1,419 Phase 2,420 Phase 3,421 Phase 4|Fade=38|Marble Fade=413|Scorched=175|Slaughter=59',
'517 ★ Paracord Knife|Case Hardened=44|Doppler=415 Ruby,416 Sapphire,417 Black Pearl,418 Phase 1,419 Phase 2,420 Phase 3,421 Phase 4|Fade=38|Marble Fade=413|Scorched=175',
'516 ★ Shadow Daggers|Case Hardened=44|Doppler=415 Ruby,418 Phase 1,420 Phase 3,421 Phase 4,617 Black Pearl,618 Phase 2,619 Sapphire|Fade=38|Gamma Doppler=568 Emerald,569 Phase 1,570 Phase 2,571 Phase 3,572 Phase 4|Scorched=175',
'525 ★ Skeleton Knife|Case Hardened=44|Doppler=415 Ruby,416 Sapphire,417 Black Pearl,418 Phase 1,419 Phase 2,420 Phase 3,421 Phase 4|Fade=38|Marble Fade=413|Scorched=175|Urban Masked=143',
'5034 ★ Specialist Gloves|Big Swell=1437|Blackbook=1414|Cloud Chaser=1440|Crimson Kimono=10033|Crimson Web=10061|Emerald Web=10034|Fade=10063|Lime Polycam=1413|Pillow Punchers=1438',
"5030 ★ Sport Gloves|Amphibious=10045|Arid=10019|Bronze Morph=10046|Hedge Maze=10038|Nocts=10076|Occult=1417|Omega=10047|Pandora's Box=10037|Ultra Violent=1410|Vice=10048|Violet Beadwork=1405",
'522 ★ Stiletto Knife|Case Hardened=44|Doppler=415 Ruby,416 Sapphire,417 Black Pearl,418 Phase 1,419 Phase 2,420 Phase 3,421 Phase 4|Fade=38|Marble Fade=413|Scorched=175',
'518 ★ Survival Knife|Case Hardened=44|Doppler=415 Ruby,416 Sapphire,417 Black Pearl,418 Phase 1,419 Phase 2,420 Phase 3,421 Phase 4|Fade=38|Marble Fade=413|Scorched=175',
'523 ★ Talon Knife|Case Hardened=44|Crimson Web=12|Doppler=415 Ruby,416 Sapphire,417 Black Pearl,852 Phase 1,853 Phase 2,854 Phase 3,855 Phase 4|Fade=38|Marble Fade=856|Scorched=175',
'519 ★ Ursus Knife|Case Hardened=44|Doppler=415 Ruby,416 Sapphire,417 Black Pearl,418 Phase 1,419 Phase 2,420 Phase 3,421 Phase 4|Fade=38|Marble Fade=413|Scorched=175',
];
const GRADE_CHARMS_SRC = [
'78 Charm | 8 Ball IGL',
'21 Charm | Baby Karat CT',
'30 Charm | Baby Karat T',
'8 Charm | Big Kev',
'81 Charm | Butane Buddy',
"5 Charm | Chicken Lil'",
'11 Charm | Diamond Dog',
'18 Charm | Die-cast AK',
'13 Charm | Diner Dog',
'25 Charm | Disco MAC',
'79 Charm | Flash Bomb',
'73 Charm | Glitter Bomb',
'7 Charm | Hot Howl',
'10 Charm | Hot Sauce',
'16 Charm | Hot Wurst',
'75 Charm | Hungry Eyes',
"1 Charm | Lil' Ava",
"59 Charm | Lil' Boo",
"6 Charm | Lil' Crass",
"45 Charm | Lil' Eldritch",
"80 Charm | Lil' Ferno",
"9 Charm | Lil' Monster",
"4 Charm | Lil' Sandy",
"15 Charm | Lil' SAS",
"14 Charm | Lil' Teacup",
"54 Charm | Lil' Tusk",
"3 Charm | Lil' Whiskers",
"77 Charm | Lil' Yeti",
'47 Charm | Magmatude',
'49 Charm | Quick Silver',
'29 Charm | Semi-Precious',
'32 Charm | Stitch-Loaded',
"2 Charm | That's Bananas",
'20 Charm | Titeenium AWP',
];
// ---- src/grade-read.js
const GRADE_SEED = /^\d{1,4}$/;
let gradeNames = null;
function gradeNamed() {
if (gradeNames) return gradeNames;
const named = new Map();
for (const line of GRADE_NAMES_SRC) {
const [head, ...finishes] = line.split('|');
const cut = head.indexOf(' ');
for (const f of finishes) {
const [finish, paints] = f.split('=');
for (const p of paints.split(',')) {
const [paint, ...phase] = p.split(' ');
const key = `${head.slice(cut + 1)} | ${finish}\n${phase.join(' ')}`;
named.set(key, named.has(key) ? null : `${head.slice(0, cut)},${paint}`);
}
}
}
return (gradeNames = named);
}
function gradeRead(card) {
const seeds = card.querySelectorAll(TF_SELECTORS.paintSeed);
const seed = seeds.length === 1 ? (seeds[0].textContent?.trim() ?? '') : '';
if (!GRADE_SEED.test(seed) || +seed > 1000) return null;
const facts = layoutRead(card);
const pair = facts && gradeNamed().get(`${facts.name}\n${facts.phase ?? ''}`);
return facts && pair ? [`${pair.replace(',', ':')}:${+seed}`, facts.name] : null;
}
// ---- src/grades.js
let gradeSellCharm = () => null;
function createGrades(indexed) {
const html = document.documentElement;
const csfAttr = TF_SETTINGS.csfGrades.attr;
const ourAttr = TF_SETTINGS.grades.attr;
const cardSel = TF_SELECTORS.card;
const { itemName, subtext, floatValue, paintSeed } = TF_SELECTORS;
const readFrom = [itemName, subtext, floatValue, paintSeed].join(', ');
const { keyOf, idFor, learn, tracked, resync } = createShotMatch(4, Object.is);
const charms = createShotMatch(8, Object.is);
const charmAttr = TF_SETTINGS.charms.attr;
const sellAttr = TF_SETTINGS.sellGrades.attr;
const names = createShotMatch(2, ( a, b) => a.name === b.name);
const panel = createGradePanel();
const enabled = () => html.hasAttribute(ourAttr);
const drawn = new WeakMap();
let ix = (null);
let version = 0;
gradeListen((t) => {
version++;
ix = gradeDecode(t);
csfFamilies = ix?.d.families ?? [];
syncAll();
indexed();
});
const drawTracked = tracked(draw);
const sync = (card) => {
try {
drawTracked(card);
} catch {}
};
function draw(card) {
const row = card.querySelector(TF_SELECTORS.badgeRow);
const box = card.querySelector(TF_SELECTORS.glow);
if (row)
cardInside(row, { subtree: true, characterData: true, attributeFilter: ['src', 'class', 'aria-describedby'] });
const want = (!!row && html.hasAttribute(csfAttr)) || (!!ix && !!box && enabled());
const held = want && gradeSellCard(card) && !html.hasAttribute(sellAttr);
const csf = row && !held && html.hasAttribute(csfAttr) ? csfMarksOf(row) : null;
const on = !!ix && !!box && enabled() && !held;
const tapped = on ? idFor(keyOf(card)) : null;
const charmOn = on && !tapped && html.hasAttribute(charmAttr);
const charm = charmOn ? (charms.idFor(keyOf(card)) ?? gradeSellCharm(card)) : null;
if (on && !tapped && !charm)
for (const el of card.querySelectorAll(readFrom)) cardInside(el, { characterData: true, subtree: true });
const own = on && !tapped && !charm ? gradeRead(card) : null;
const grade = tapped ?? own?.[0] ?? null;
const name = (tapped && names.idFor(keyOf(card))?.name) || own?.[1] || '';
const light = html.getAttribute('data-tf-theme') === 'light';
const key = JSON.stringify([csf, grade, charm, name, version, artStamp()]);
const had = drawn.get(card);
if (had?.[0] === key && had[1].every((el) => card.contains(el))) return;
for (const el of card.querySelectorAll('span.tf-csf, span.tf-gc')) {
if (panel.holds(el)) panel.close();
el.remove();
}
const els = ([]);
drawn.set(card, [key, els]);
const icons =
ix && charm ? gradeCharmIcons(ix, charm, light) : ix && grade ? gradeIcons(ix, grade, light, name) : [];
const seed = grade ? +grade.split(':')[2] : charm ? +charm.split(':')[1] : undefined;
const unit = charm ? 'pattern' : 'seed';
const theirs = csf ?? [];
let line = 13;
const rows = [...icons.flatMap((g) => g.rows), ...theirs];
const model = (lit) => () => ({ rows, lit: new Set(lit), seed, unit });
const { also, shown } = csfBeside(icons, theirs);
if (row && csf) {
const span = layoutSpan('tf-csf', '');
for (const [m, bare] of shown) span.append(csfButton(panel, m, bare, model([m])));
line = shown[0] ? artMid(span, 'svg') : 11;
row.prepend(span);
els.push(span);
}
if (!box || !icons.length) return;
const corner = layoutSpan('tf-gc', '');
const rest = layoutSpan('tf-gr', '');
icons.forEach((g, i) => {
const f = also[i];
const { side, fam, text } = g.rows[0];
const b = panel.button(
`${side && `${side} · `}${fam} · ${text} · ${unit} ${seed}`,
model(f ? [...g.rows, f] : g.rows),
);
b.append(artSvg(g.glyph, g.cols, g.mark, 22));
if (f) b.append(layoutSpan('tf-csf-f', 'f'));
b.toggleAttribute('data-back', g.back);
(i ? rest : corner).append(b);
});
const n = icons.length - 1;
if (n) {
const chip = panel.button(`${n} more grade${n > 1 ? 's' : ''}`);
chip.classList.add('tf-gm');
chip.textContent = `+${n}`;
corner.append(chip, rest);
}
corner.style.translate = `0 ${line - artMid(corner, ':scope > button > svg')}px`;
(box.querySelector(':scope > .top-right-container') ?? box).prepend(corner);
els.push(corner);
}
const syncAll = () => document.querySelectorAll(cardSel).forEach(sync);
cardWatch({
attrs: [csfAttr, ourAttr, charmAttr, sellAttr, ...ART_ATTRS],
setting: syncAll,
cards: (changed, added) => new Set([...changed, ...added]).forEach(sync),
});
return {
enabled,
feed(listings) {
if (!enabled()) return;
const fresh = learn(listings);
for (const key of names.learn(listings)) fresh.add(key);
for (const key of charms.learn(listings)) fresh.add(key);
resync(fresh, sync);
},
icons: (g) => (ix && g && enabled() ? gradeIcons(ix, g, html.getAttribute('data-tf-theme') === 'light') : []),
index: () => (enabled() ? ix : null),
redraw: () => syncAll(),
};
}
// ---- src/frame.js
function frameLater(run, frame) {
let queued = 0;
return () =>
(queued ||= frame(() => {
queued = 0;
try {
run();
} catch {}
}));
}
// ---- src/sales-units.js
const DAY_MS = 864e5;
const SALES_NUM = /^(\D*?)(\d{1,3}(?:,\d{3})*\.\d{2})(\D*)$/;
function createSalesMoney() {
let [lo, hi, pre, post] = [0, Infinity, '', ''];
const text = (units, dp = 2) =>
pre + units.toLocaleString('en-US', { minimumFractionDigits: dp, maximumFractionDigits: dp }) + post;
return {
learn(t, cents) {
if (priceCurrency.fmt) {
[lo, hi] = [priceCurrency.fmt.rate, priceCurrency.fmt.rate];
[pre, post] = [priceCurrency.fmt.pre, priceCurrency.fmt.post];
return;
}
const m = SALES_NUM.exec((t ?? '').trim());
if (!m) return;
const v = Math.round(+m[2].replaceAll(',', '') * 100);
const [a, b] = [(v - 1) / cents, v / cents];
[pre, post] = [m[1], m[3]];
[lo, hi] = a < hi && b > lo ? [Math.max(lo, a), Math.min(hi, b)] : [a, b];
},
known: () => hi < Infinity,
local: ( c) => (c * hi) / 100,
text,
cents: ( c) => text(Math.ceil(c * hi) / 100),
};
}
const salesMedian = (xs) => [...xs].sort((a, b) => a - b)[(xs.length - 1) >> 1];
function salesSpan(ms) {
const m = ms / 6e4;
const [unit, per] = m < 60 ? ['m', 1] : m < 2880 ? ['h', 60] : m < 20160 ? ['d', 1440] : ['w', 10080];
return `${Math.max(1, Math.round(m / per))} ${unit}`;
}
// ---- src/sales-smart.js
function salesMean(pts, from, to) {
let [sum, n] = [0, 0];
for (const p of pts) if (p.day > from && p.day <= to) [sum, n] = [sum + p.avg * p.count, n + p.count];
return n ? { mean: sum / n, n } : null;
}
function salesKeptMean(pts) {
const band = salesBand(pts.map((p) => p.avg));
const kept = band ? pts.filter((p) => p.avg >= band[0] && p.avg <= band[1]) : [];
return salesMean(kept, 0, Infinity);
}
function salesMeanChips(pts) {
const end = pts[pts.length - 1].day;
return [7, 30, 90].map((d) => {
const [a, b] = [salesMean(pts, end - d * DAY_MS, end), salesMean(pts, end - 2 * d * DAY_MS, end - d * DAY_MS)];
return [`${d} d`, a && b ? Math.round((a.mean / b.mean - 1) * 1000) / 10 : null];
});
}
const SMART_RANGES = {
'1M': [
30,
'1-month',
[
['7 d', 7, 3],
['30 d', 30, 7],
],
],
'3M': [
90,
'3-month',
[
['7 d', 7, 3],
['30 d', 30, 7],
['90 d', 90, 14],
],
],
'1Y': [
365,
'1-year',
[
['30 d', 30, 7],
['90 d', 90, 14],
['6 mo', 182, 30],
['1 y', 365, 30],
],
],
ALL: [
0,
'All-time',
[
['90 d', 90, 14],
['1 y', 365, 30],
['all time', 0, 30],
],
],
};
const SMART_MIN = 3;
function salesWindow(pts, from, to) {
const days = pts.filter((p) => p.day > from && p.day <= to).sort((a, b) => a.avg - b.avg);
const n = days.reduce((s, p) => s + p.count, 0);
let k = (n - 1) >> 1;
for (const p of days) if (n && (k -= p.count) < 0) return { mid: p.avg, n };
return null;
}
function salesChips(name, pts) {
const chips = [];
if (!pts.length) return chips;
const end = pts[pts.length - 1].day;
let last = -Infinity;
for (const [label, days, w] of SMART_RANGES[name]?.[2] ?? []) {
const back = days || Math.round((end - pts[0].day) / DAY_MS) - w + 1;
const now = salesWindow(pts, end - w * DAY_MS, end);
const then = salesWindow(pts, end - (back + w) * DAY_MS, end - back * DAY_MS);
if (back < w || back - last < w || !now || !then || Math.min(now.n, then.n) < SMART_MIN) continue;
chips.push([label, Math.round((now.mid / then.mid - 1) * 1000) / 10]);
last = back;
}
return chips;
}
function salesBand(ys, keep = null) {
const s = [...ys].sort((a, b) => a - b);
if (!s.length) return null;
const q = ( f, i = (s.length - 1) * f, j = Math.floor(i)) =>
s[j] + ((s[j + 1] ?? s[j]) - s[j]) * (i - j);
const reach = Math.max(3 * (q(0.75) - q(0.25)), q(0.5) / 4);
let [lo, hi] = [Math.max(q(0.01), q(0.25) - reach), Math.min(q(0.99), q(0.75) + reach)];
if (keep !== null) [lo, hi] = [Math.min(lo, keep), Math.max(hi, keep)];
const pad = (hi - lo) * 0.1 || hi * 0.1;
return [Math.max(0, lo - pad), hi + pad];
}
// ---- src/sales-plot.js
const plotEl = (tag, attrs, parent) => parent.appendChild(artSet(document.createElementNS(SVG_NS, tag), attrs));
function salesStrip(stats) {
const strip = layoutSpan('tf-ss', '');
for (const [k, v, q] of stats) {
const [s, val] = [layoutSpan('tf-ss-s', ''), layoutSpan('tf-ss-v', '')];
val.append(v, ...(q ? [layoutSpan('tf-ss-q', q)] : []));
s.append(layoutSpan('tf-ss-k', k), val);
strip.append(s);
}
return strip;
}
function salesPlot(svg, w, h, all, dots, listing, fmt, fit = null) {
svg.replaceChildren();
artSet(svg, { width: w, height: h, viewBox: `0 0 ${w} ${h}` });
const [B, T] = [20, 12];
const log = dots.length > 0;
const pts = log ? dots : all;
const xs = [...all, ...dots].map((p) => p.x);
const ys = [...pts.map((p) => p.y), listing?.y ?? pts[0].y];
const [x0, x1] = [Math.min(...xs) - DAY_MS / 2, Math.max(...xs) + DAY_MS / 2];
let [lo, hi] = [Math.min(...ys), Math.max(...ys)];
const pad = (hi - lo) * 0.05 || hi * 0.05;
[lo, hi] = log ? [lo / 1.08, hi * 1.08] : (fit ?? [Math.max(0, lo - pad), hi + pad]);
const keep = ( p) => log || (p.y >= lo && p.y <= hi);
const [line, off] = [all.filter(keep), all.filter((p) => !keep(p))];
const Y = ( v) =>
T + (1 - (log ? Math.log(v / lo) / Math.log(hi / lo) : (v - lo) / (hi - lo))) * (h - B - T);
const grad = plotEl('linearGradient', { id: 'tf-sg-fill', x1: 0, y1: 0, x2: 0, y2: 1 }, plotEl('defs', {}, svg));
for (const i of [0, 1]) plotEl('stop', { offset: i, 'stop-color': '#3e98ff', 'stop-opacity': i ? 0 : 0.25 }, grad);
const g = plotEl('g', { class: 'tf-sg-grid' }, svg);
const gap = ( a, b) => Math.abs(Y(a) - Y(b));
let ticks = ([]);
for (let e = Math.floor(Math.log10(lo)); log && e <= Math.log10(hi) && ticks.length < 12; e++)
for (const m of [1, 2, 5]) if (m * 10 ** e >= lo && m * 10 ** e <= hi) ticks.push(+(m * 10 ** e).toPrecision(6));
if (ticks.length < 3) ticks = [];
for (let i = 0, k = Math.max(0.01, 10 ** Math.floor(Math.log10((hi - lo) / 10))); !ticks.length && i < 12; i++) {
const step = k * [1, 2, 2.5, 5][i % 4] * 10 ** Math.floor(i / 4);
const vs = ([]);
for (let v = Math.ceil(lo / step) * step; v <= hi && vs.length < 6; v += step) vs.push(+v.toPrecision(12));
if (vs.length < 6 && vs.every((v, j) => !j || gap(v, vs[j - 1]) >= 30)) ticks = vs;
}
ticks = ticks.filter((v) => !(listing && gap(v, listing.y) < 15));
const labels = ticks.map((v) => plotEl('text', { y: Y(v) + 4 }, g));
labels.forEach((t, i) => (t.textContent = fmt(ticks[i])));
const tag = listing && plotEl('g', { class: 'tf-sg-tag' }, svg);
const tagText = tag && plotEl('text', { x: 6, y: 4 }, tag);
if (tagText && listing) tagText.textContent = listing.text;
const texts = ([...labels, ...(tagText ? [tagText] : [])]);
const R = Math.max(48, ...texts.map((t) => t.getComputedTextLength())) + 16;
for (const t of labels) t.setAttribute('x', `${w - R + 8}`);
const X = ( t) => ((t - x0) / (x1 - x0)) * (w - R);
for (const v of ticks) plotEl('line', { x1: 0, x2: w - R, y1: Y(v), y2: Y(v) }, g);
const when = x1 - x0 > 2e10 ? { month: 'short', year: 'numeric' } : { month: 'short', day: 'numeric' };
const days = [1, 2, 3, 4].map((i) => x0 + ((x1 - x0) * i) / 5);
const dates = days.map((t) => new Date(t).toLocaleDateString('en-US', { ...when, timeZone: 'UTC' }));
dates.forEach((d, i) => {
if (dates.indexOf(d) !== i) return;
const x = X((days[i] + days[dates.lastIndexOf(d)]) / 2);
plotEl('line', { x1: x, x2: x, y1: T, y2: h - B }, g);
plotEl('text', { x, y: h - 5, 'text-anchor': 'middle' }, g).textContent = d;
});
if (line.length) {
const d = line.map((p, i) => `${i ? 'L' : 'M'}${X(p.x).toFixed(1)} ${Y(p.y).toFixed(1)}`).join('');
if (!log) {
const maxN = Math.max(...all.map((p) => p.n ?? 0));
const bw = Math.max(1, Math.min(8, (X(DAY_MS) - X(0)) * 0.7));
const vol = plotEl('g', { class: 'tf-sg-vol' }, svg);
for (const p of all) {
const bh = ((p.n ?? 0) / maxN) * (h - B - T) * 0.28;
plotEl('rect', { x: X(p.x) - bw / 2, y: h - B - bh, width: bw, height: bh }, vol);
}
plotEl('path', { fill: 'url(#tf-sg-fill)', d: `${d}V${h - B}H${X(line[0].x)}Z` }, svg);
}
plotEl('path', { class: `tf-sg-line${log ? ' tf-sg-faint' : ''}`, d }, svg);
}
for (const [x, y, s] of off.map((p) => (p.y > hi ? [X(p.x), T, 1] : [X(p.x), h - B, -1])))
plotEl('path', { class: 'tf-sg-out', d: `M${x - 4} ${y + 5 * s}L${x} ${y - s}L${x + 4} ${y + 5 * s}Z` }, svg);
if (listing) plotEl('line', { class: 'tf-sg-lst', x1: 0, x2: w - R + 2, y1: Y(listing.y), y2: Y(listing.y) }, svg);
for (const p of dots) {
const says = `${p.tip.filter((t) => t).join(', ')}; opens its listing`;
const go = p.id ? { tabindex: 0, role: 'link', 'aria-label': says } : {};
const dot = plotEl('circle', { class: `tf-sg-dot ${p.cls}`, cx: X(p.x), cy: Y(p.y), r: 4, ...go }, svg);
const c = p.colour ?? '';
if (/^#[0-9a-f]{6}$|^currentColor$/.test(c)) (dot).style.setProperty('--tf-dot', c);
}
const hair = plotEl('line', { class: 'tf-sg-hair', y1: T, y2: h - B }, svg);
const mark = plotEl('circle', { class: `tf-sg-mark${log ? ' ring' : ''}`, r: log ? 7 : 4 }, svg);
if (tag && tagText && listing) {
const tw = (tagText).getComputedTextLength() + 12;
plotEl('rect', { x: 0, y: -8, width: tw, height: 16, rx: 2 }, tag).after(tagText);
artSet(tag, { transform: `translate(${w - R + 2} ${Y(listing.y)})` });
svg.append(tag);
}
const put = (el, on, move) => {
el.toggleAttribute('data-on', !!on && el.getAttribute('visibility') === 'visible');
el.setAttribute('visibility', on ? 'visible' : 'hidden');
if (on) (el).style.transform = move;
};
const near = (px, py = 0) => {
let best = null;
let far = log ? 400 : Infinity;
if (px !== null)
for (const p of pts) {
const dd = (X(p.x) - px) ** 2 + (log ? (Y(p.y) - py) ** 2 : 0);
if (dd < far) [best, far] = [p, dd];
}
const at = best && { p: best, x: X(best.x), y: Math.min(Math.max(Y(best.y), T), h - B) };
put(hair, at && !log, `translateX(${at?.x}px)`);
put(mark, at, `translate(${at?.x}px, ${at?.y}px)`);
return at;
};
near(null);
return near;
}
// ---- src/sales-table.js
function salesButton(on, act) {
const b = document.createElement('button');
b.type = 'button';
b.setAttribute('aria-pressed', String(on));
const press = ( e) => e.isTrusted && act();
tapApply(tapListen, b, ['click', press]);
return b;
}
function createSalesTable(money, gradeOf) {
const panel = createGradePanel();
let [filter, filterFor] = ['all', ''];
const drawn = new WeakMap();
const cell = ( row, c) => row.querySelector(`td.mat-column-${c}`);
const own = ( c, row) =>
cell(row, c)?.querySelector(':scope > span:not(.tf-sl)')?.textContent ?? '';
const mine = (tag, cls, ...kids) => {
const el = document.createElement(tag);
el.className = `tf-sl ${cls}`;
el.append(...kids);
return el;
};
const aligned = (row, s) =>
(!cell(row, 'seed') || (parseInt(own('seed', row), 10) === s.seed && !!cell(row, 'age'))) &&
(!cell(row, 'wear') || Math.abs(parseFloat(own('wear', row)) - (s.float ?? -1)) < 1e-9);
function marks({ ours, csf }) {
const box = mine('span', 'tf-sl-g');
const rows = [...ours.flatMap((o) => o.rows), ...csf];
const model = ( lit) => () => ({ rows, lit: new Set(lit) });
const { also, shown } = csfBeside(ours, csf);
const [g, f] = [ours[0], also[0]];
if (g) {
const b = panel.button(`${g.rows[0].by} · ${g.rows[0].text}`, model(f ? [...g.rows, f] : g.rows));
b.append(artSvg(g.glyph, g.cols, g.mark, 22));
if (f) b.append(layoutSpan('tf-csf-f', 'f'));
box.append(b);
}
for (const [m, bare] of shown) box.append(csfButton(panel, m, bare, model([m])));
if (ours[1]) box.append(mine('span', 'tf-sl-more', `+${ours.length - 1}`));
return box;
}
function sync(host, hist, facts, ver) {
const rows = [...host.querySelectorAll('tr.sale-row')];
const sales = hist?.sales ?? [];
const ok =
document.documentElement.hasAttribute(TF_SETTINGS.salesTable.attr) &&
!!rows.length &&
rows.length === sales.length &&
rows.every((r, i) => aligned(r, sales[i]));
if (hist && `${hist.item}|${ver}` !== filterFor) [filter, filterFor] = ['all', `${hist.item}|${ver}`];
const key = ok ? `${hist?.item}|${filter}|${facts?.key}|${facts?.seed}|${money.known()}|${ver}` : '';
if (drawn.get(host) === key && (!ok || rows.every((r) => r.querySelector('.tf-sl-m')))) return;
for (const el of host.querySelectorAll('.tf-sl')) el.remove();
drawn.set(host, key);
if (!ok || !hist) return;
const pattern = rows.some((r) => cell(r, 'seed'));
const quality = /StatTrak/.test(hist.item) ? 'ST' : /Souvenir/.test(hist.item) ? 'SV' : '';
const inside = (s, g) => filter === 'all' || (filter === 'seed' ? s.seed === facts?.seed : g.key === filter);
const now = Date.now();
const got = rows.map((row, i) => {
const s = sales[i];
const badges = cell(row, 'badges');
const g = gradeOf(s.grade, badges && csfMarksOf(badges));
const took = s.auction ? (pattern ? 'Auction' : '–') : salesSpan(s.sold - s.listed);
const t = mine('span', 'tf-sl-t tf-sl-m', took);
t.toggleAttribute('data-out', !inside(s, g));
t.toggleAttribute('data-hl', filter === 'all' && !!facts?.g && g.key === facts.key);
const extra = pattern ? [t] : [t, s.auction ? 'Auction' : 'Buy Now', `${s.watchers ?? '–'}`];
row.append(...extra.map((x) => mine('td', 'tf-sl-c', x)));
cell(row, 'age')?.append(mine('span', 'tf-sl-a', `${salesSpan(now - s.sold)} ago`));
if (!pattern) return g;
const box = badges ?? row.appendChild(mine('td', 'tf-sl-c tf-sl-gc'));
if (g.ours[0] || g.csf[0]) box.prepend(marks(g));
const f = s.float ?? -1;
const wear = f < 0 ? '' : f < 0.07 ? 'FN' : f < 0.15 ? 'MW' : f < 0.38 ? 'FT' : f < 0.45 ? 'WW' : 'BS';
cell(row, 'wear')?.prepend(...[wear, quality].filter((q) => q).map((q) => mine('span', `tf-sl-w tf-sl-${q}`, q)));
if (s.extras && money.known()) cell(row, 'stickers')?.append(mine('span', 'tf-sl-v', money.cents(s.extras)));
return g;
});
const th = host.querySelector('th.mat-column-badges');
th?.append(mine('span', '', 'Grade'));
const heads = pattern ? ['Time to sell', ...(th ? [] : ['Grade'])] : ['Time to sell', 'Sale', 'Watchers'];
host
.querySelector('tr.mat-mdc-header-row')
?.append(...heads.map((text) => mine('th', `tf-sl-c${text === 'Grade' ? ' tf-sl-gc' : ''}`, text)));
const bar = mine('div', 'tf-sl-bar');
const found = new Map();
for (const { g, key } of got) if (g) found.set(key, [g, (found.get(key)?.[1] ?? 0) + 1]);
if (facts?.g && !found.has(facts.key)) found.set(facts.key, [facts.g, 0]);
const seedN = facts?.seed == null ? -1 : sales.filter((s) => s.seed === facts.seed).length;
if (pattern && (found.size || seedN >= 0)) {
const chips = mine('div', 'tf-sl-chips');
const chip = (f, n, ...label) => {
const b = salesButton(filter === f, () => ((filter = f), sync(host, hist, facts, ver)));
b.disabled = !n;
b.append(...label, mine('span', 'tf-sl-n', `${n}`));
chips.append(b);
};
chip('all', rows.length, 'All');
const lit = ( k) => +(k === facts?.key);
for (const [k, [g, n]] of [...found].sort(([a], [b]) => lit(b) - lit(a) || a.localeCompare(b)))
chip(k, n, artSvg(g.glyph, g.cols, g.mark, 16), g.text);
if (seedN >= 0) chip('seed', seedN, `Seed ${facts?.seed}`);
bar.append(chips);
}
const shown = sales.flatMap((s, i) => (inside(s, got[i]) ? [i] : []));
const mid = salesMedian(shown.map((i) => sales[i].price));
const at = shown.find((i) => sales[i].price === mid) ?? -1;
const med = rows[at]?.querySelector('td.mat-column-price .price')?.textContent?.trim() || '–';
const times = sales.map((s) => s.sold);
const days = Math.max((Math.max(...times) - Math.min(...times)) / DAY_MS, 1 / 24);
const quick = shown.flatMap((i) => (sales[i].auction ? [] : [sales[i].sold - sales[i].listed]));
const what = filter === 'seed' ? `Seed ${facts?.seed}` : found.get(filter)?.[0].text;
const stats = [
[filter === 'all' ? 'Median' : `${what} median`, med],
['Sold / day', (shown.length / days).toFixed(1)],
['Time to sell', quick.length ? salesSpan(salesMedian(quick)) : '–', quick.length ? 'median' : ''],
];
if (filter !== 'all') stats.push(['Sales', `${shown.length} of ${sales.length}`]);
bar.append(salesStrip(stats));
host.querySelector('.table-container')?.before(bar);
}
return { sync };
}
// ---- src/sales-open.js
function salesOpen(svg, at, near, show) {
const go = ( p) => {
if (tapMatches(TAP_SALE_ID, p?.id))
tapApply(tapOpen, globalThis, [`https://csfloat.com/item/${p.id}`, '_blank', 'noopener,noreferrer']);
};
const dot = (e) => {
const c = e.target;
return c instanceof SVGCircleElement ? near(+(c.getAttribute('cx') ?? 0), +(c.getAttribute('cy') ?? 0)) : null;
};
const links = [...svg.querySelectorAll('circle')]
.filter((c) => c.getAttribute('role') === 'link')
.sort((a, b) => a.cx.baseVal.value - b.cx.baseVal.value);
const stop = (on) => links.forEach((c) => c.setAttribute('tabindex', c === on ? '0' : '-1'));
stop(links.at(-1));
if (links.length)
artSet(svg, { role: 'group', 'aria-label': `Last ${links.length} sales, use the Left and Right arrow keys` });
const press = ( e) => e.isTrusted && go(at(e)?.p);
const key = ( e) => {
if (!e.isTrusted) return;
if (!e.repeat && e.key === 'Enter') go(dot(e)?.p);
const [i, k] = [links.findIndex((c) => c === e.target), ['Home', 'ArrowLeft', 'ArrowRight', 'End'].indexOf(e.key)];
if (i < 0 || k < 0 || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
e.preventDefault();
links[Math.min(Math.max([0, i - 1, i + 1, links.length - 1][k], 0), links.length - 1)].focus();
};
tapApply(tapListen, svg, ['click', press]);
tapApply(tapListen, svg, ['keydown', key]);
svg.setAttribute('tabindex', '-1');
svg.addEventListener('focusin', (e) => e.target !== svg && (stop(e.target), show(dot(e))));
svg.addEventListener('focusout', (e) => e.target !== svg && show(null));
}
// ---- src/sales-tip.js
function salesTipLines(tip, want, make) {
const kids = tip.children;
if (kids.length !== want.length || want.some(([c], i) => kids[i].className !== c))
return void tip.replaceChildren(...want.map(([c, t]) => make(c, t)));
want.forEach(([, t], i) => {
const n = (kids[i].firstChild);
if (n?.nodeType === 3 && !n.nextSibling) n.nodeValue !== t && (n.nodeValue = t);
else if (kids[i].textContent !== t) kids[i].textContent = t;
});
}
const salesBoxes = new WeakMap();
let salesSized = null;
function salesWidths(dialog, again) {
for (const box of [...(dialog?.querySelectorAll('.tf-sg[data-full]') ?? [])].map((g) => g.parentElement)) {
salesSized ??= new ResizeObserver((entries) => {
for (const { target: t } of entries) t.isConnected ? salesBoxes.get(t)?.() : salesSized?.unobserve(t);
});
if (box && !salesBoxes.has(box)) (salesBoxes.set(box, again), salesSized.observe(box));
}
}
// ---- src/sales-graph.js
const GRAPH_RANGES = { '1M': [30, '30-day'], '3M': [90, '90-day'], '1Y': [365, '1-year'], ALL: [0, 'All-time'] };
function createSalesGraph(money, ask, gradeOf) {
let [range, rangeFor] = ['1M', ''];
const drawn = new WeakMap();
const span = ( c, t = '') => layoutSpan(`tf-sg-${c}`, t);
const day = ( t) => new Date(t).toUTCString().slice(5, 16);
function sync(host, graph, sales, facts, ver) {
const html = document.documentElement;
const full = html.hasAttribute(TF_SETTINGS.salesGraph.attr);
const stat = html.hasAttribute(TF_SETTINGS.salesStats.attr);
const smart = html.hasAttribute(TF_SETTINGS.salesSmart.attr);
const opens = html.hasAttribute(TF_SETTINGS.salesOpen.attr);
const on = full || (stat && html.hasAttribute(TF_SETTINGS.salesTable.attr));
const box = host.querySelector(':scope > .container');
const pts = [...(graph?.points ?? [])].reverse();
const csf = host.querySelector('.range-selector .mat-button-toggle-checked')?.textContent?.trim() ?? '';
if (graph && graph.item !== rangeFor) [range, rangeFor] = ['1M', graph.item];
const want = full ? range : tapHasOwn(GRAPH_RANGES, csf) ? csf : '1M';
const r = want === '40 sales' && !sales?.sales && !(graph && ask(graph)) ? '1M' : want;
const how = [on, full, stat, opens, smart, r].join();
const key = [how, graph?.item, !!sales, box?.clientWidth, facts?.price, facts?.key, ver].join();
const old = box?.querySelector(':scope > .tf-sg');
if (drawn.get(host) === key && old) return;
old?.remove();
drawn.set(host, key);
if (!on || !box || !graph || pts.length < 2 || !money.known()) return;
const root = layoutSpan('tf-sg', '');
const head = span('head');
root.toggleAttribute('data-full', full);
root.append(head);
box.append(root);
const end = pts[pts.length - 1].day;
const dots = r === '40 sales';
const [days, word] = (smart ? SMART_RANGES : GRAPH_RANGES)[dots ? '1M' : r];
const inRange = pts.filter((p) => !days || p.day > end - days * DAY_MS);
const all = salesMean(inRange, 0, Infinity);
const mean = smart ? salesKeptMean(inRange) : all;
const got = sales?.sales;
const list = got?.length ? got : null;
const median = list ? salesMedian(list.map((s) => s.price)) : 0;
const stats = [];
if (dots && list) stats.push([`Last ${list.length} median`, money.cents(median)]);
else if (mean) {
const change = layoutSpan('tf-ss-c', '');
const chips = smart ? salesChips(dots ? '1M' : r, pts) : salesMeanChips(pts);
for (const [d, x] of chips) {
const pct = x === null ? '–' : `${x < 0 ? '−' : '+'}${Math.abs(x).toFixed(1)}%`;
change.append(layoutSpan('tf-ss-q', d), layoutSpan(x ? `tf-ss-${x < 0 ? 'dn' : 'up'}` : '', pct));
}
stats.push([`${word} average`, money.cents(mean.mean)]);
if (chips.length) stats.push(['Change', change]);
}
const rate =
dots && list
? list.length / Math.max((list[0].sold - list[list.length - 1].sold) / DAY_MS, 1 / 24)
: (all?.n ?? 0) / Math.max(1, days || (end - pts[0].day) / DAY_MS);
stats.push(['Sold / day', rate.toFixed(1)]);
const ref = dots ? median : mean?.mean;
if (full && facts) {
const x = ref ? `${(facts.price / ref).toFixed(2)}× ${dots ? 'median' : 'avg'}` : '';
stats.push(['This listing', money.cents(facts.price), x]);
}
if (stat) head.append(salesStrip(stats));
if (!full) return;
const tabs = span('range');
for (const name of [...Object.keys(GRAPH_RANGES), '40 sales']) {
const b = salesButton(name === r, () => {
if (name === '40 sales' && !got && !ask(graph, true)) return;
range = name;
sync(host, graph, sales, facts, ver);
});
b.textContent = name;
tabs.append(b);
}
head.append(tabs);
const svg = document.createElementNS(SVG_NS, 'svg');
const tip = span('tip');
root.append(svg, tip);
if (dots && !list) return void root.append(span('wait', got ? 'No sales yet' : 'Loading the last 40 sales…'));
const from = dots && list ? list[list.length - 1].sold - DAY_MS : 0;
const line = (dots ? pts.filter((p) => p.day + DAY_MS > from) : inRange).map((p) => {
const tip = [money.cents(p.avg), `${p.count} sold`, day(p.day)];
return { x: p.day + DAY_MS / 2, y: money.local(p.avg), n: p.count, tip };
});
const listing = facts && { y: money.local(facts.price), text: money.cents(facts.price) };
const marks = (dots && list ? list : []).map((s) => {
const { g, key } = gradeOf(s.grade, null);
const fl = opens && s.float !== null ? `Float ${s.float.toFixed(6)}` : '';
const about = [fl, s.seed === null ? '' : `Seed ${s.seed}`, g?.text ?? ''].filter((t) => t).join(' · ');
const cls = !g ? 'none' : key === facts?.key ? 'same' : 'other';
return {
x: s.sold,
y: money.local(s.price),
tip: [money.cents(s.price), about, day(s.sold)],
cls,
colour: g?.cols[0],
id: opens ? s.id : null,
};
});
const hgt = Math.max(80, root.clientHeight - head.offsetHeight - 6);
const ys = smart && !dots ? line.map((p) => p.y) : [];
const fit = salesBand(ys, listing?.y);
const near = salesPlot(svg, root.clientWidth, hgt, line, marks, listing, (v) => money.text(v), fit);
const show = (at) => {
tip.toggleAttribute('data-on', !!at);
svg.toggleAttribute('data-go', !!at?.p.id);
if (!at) return void near(null);
const [s, o] = [svg.getBoundingClientRect(), root.getBoundingClientRect()];
const hint = at.p.id ? [['tf-sg-tl tf-sg-tk', 'Click or press Enter to view the sold listing']] : [];
const said = at.p.tip.filter((t) => t).map((t, i) => [`tf-sg-${i ? 'tl' : 'tv'}`, t]);
salesTipLines(tip, [...said, ...hint], layoutSpan);
const [w, up, y] = [tip.offsetWidth, tip.offsetHeight + 12, at.y + s.top - o.top];
const x = Math.min(dots ? Math.max(0, at.x - w / 2) : at.x + 14, root.clientWidth - w - 70);
tip.style.transform = `translate(${x}px, ${dots ? (at.y < up ? y + 12 : y - up) : Math.max(0, y - 20)}px)`;
};
const at = ( e, s = svg.getBoundingClientRect()) =>
near(e.clientX - s.left, e.clientY - s.top);
svg.addEventListener('pointermove', (e) => show(at(e)));
svg.addEventListener('pointerleave', () => show(null));
if (opens) salesOpen(svg, at, near, show);
}
return { sync };
}
// ---- src/sales.js
function createSales(grades) {
const html = document.documentElement;
const attrs = [TF_SETTINGS.salesGraph.attr, TF_SETTINGS.salesTable.attr];
const on = () => attrs.some((a) => html.hasAttribute(a));
const money = createSalesMoney();
const byGrade = createShotMatch(4, Object.is);
const byPrice = createShotMatch(5, Object.is);
let graph = null;
let sales = null;
const asked = new Set();
const kept = new Map();
const lost = new Set();
let halted = false;
let ver = 0;
function gradeOf(grade, csf) {
const ours = grades.icons(grade);
const g = ours[0]?.rows[0] ?? csf?.find((r) => r.fam !== 'Float' && /Tier|Rank/.test(r.kind)) ?? null;
return { ours, csf: csf ?? [], g, key: g ? `${g.by}|${g.side}|${g.fam}|${g.text}` : '' };
}
function ask(h, send = false) {
if (kept.has(h.item)) return true;
if (asked.has(h.item)) return !halted && !lost.has(h.item);
if (!send || !on() || halted || asked.size >= 20) return false;
asked.add(h.item);
const xhr = new XMLHttpRequest();
xhr.open('GET', `${TAP_ORIGIN}${h.item}sales${h.query}`);
xhr.addEventListener('loadend', () => {
if (!(xhr.status >= 200 && xhr.status < 300)) halted = true;
tickAfter(() => {
if (!kept.has(h.item)) lost.add(h.item);
later();
}, 0);
});
xhr.send();
return true;
}
const table = createSalesTable(money, gradeOf);
const chart = createSalesGraph(money, ask, gradeOf);
function sync() {
const dialog = document.querySelector(TF_SELECTORS.dialog);
const card = dialog?.querySelector(TF_SELECTORS.card);
const key = card ? byPrice.keyOf(card) : null;
const [price, grade] = [byPrice.idFor(key), byGrade.idFor(key)];
const row = dialog?.querySelector(TF_SELECTORS.badgeRow);
const seed = grade ? +grade.split(':')[2] : null;
const facts = price ? { price, seed, ...gradeOf(grade, row ? csfMarksOf(row) : null) } : null;
if (price) money.learn(card?.querySelector(TF_SELECTORS.price)?.textContent, price);
const mine = graph && sales?.item === graph.item ? sales : null;
const ours = mine ?? (graph ? (kept.get(graph.item) ?? null) : null);
const v = `${ver}|${grades.enabled()}|${artStamp()}`;
for (const host of dialog?.querySelectorAll(TF_SELECTORS.salesTable) ?? []) table.sync(host, mine, facts, v);
for (const host of dialog?.querySelectorAll(TF_SELECTORS.salesChart) ?? []) chart.sync(host, graph, ours, facts, v);
salesWidths(dialog, later);
}
const later = frameLater(sync, (f) => requestAnimationFrame(f));
const look = [
...attrs,
TF_SETTINGS.salesStats.attr,
TF_SETTINGS.salesOpen.attr,
TF_SETTINGS.salesSmart.attr,
TF_SETTINGS.grades.attr,
...ART_ATTRS,
];
let left;
function follow() {
if (!on()) {
if (left === undefined) left = document.querySelector(TF_SELECTORS.dialog);
watch.disconnect();
return watch.observe(html, { attributeFilter: attrs });
}
if (left !== undefined && document.querySelector(TF_SELECTORS.dialog) !== left) graph = sales = null;
left = undefined;
dialogFollow(watch, look, { attributeFilter: ['class'] });
}
const watch = new MutationObserver((records) => {
for (const { addedNodes, removedNodes } of records)
for (const n of [...addedNodes, ...removedNodes])
if (n instanceof Element && (n.matches(TF_SELECTORS.dialog) || n.querySelector(TF_SELECTORS.dialog)))
graph = sales = null;
follow();
later();
});
follow();
addEventListener('resize', later);
return {
enabled: on,
feed(listings) {
byGrade.learn(listings);
byPrice.learn(listings);
later();
},
indexed: () => void (ver++, later()),
graph: () => (on() ? graph : null),
history(h) {
if (h.kind === 'graph') graph = h;
else {
sales = h;
kept.delete(h.item);
kept.set(h.item, h);
const old = kept.size > 20 ? (kept.keys().next().value ?? '') : null;
if (old !== null) (kept.delete(old), asked.has(old) && lost.add(old));
}
later();
},
status(code) {
if (code >= 200 && code < 300) return;
halted = true;
later();
},
};
}
// ---- src/db-draw.js
const DB_FLOAT = /\b[01]\.\d{14}\b/;
function createDbDraw(grades, on, ver, histKey) {
const sel = TF_SELECTORS;
const panel = createGradePanel();
const known = new Map();
const drawn = new WeakMap();
function keyOf(tr) {
const f = DB_FLOAT.exec(tr.querySelector(':scope > td.mat-column-float')?.textContent ?? '')?.[0];
const s = tr.querySelector(':scope > td.mat-column-seed')?.textContent?.trim() ?? '';
return f && /^\d{1,4}$/.test(s) ? `${f}|${s}` : '';
}
const iconsOf = (key) => (key && known.has(key) ? grades.icons(known.get(key) ?? null) : []);
function marks(icons, key) {
const box = layoutSpan('tf-db-g', '');
const g = icons[0];
const rows = icons.flatMap((i) => i.rows);
const seed = +key.split('|')[1];
const { side, fam, text } = g.rows[0];
const b = panel.button(`${side && `${side} · `}${fam} · ${text} · seed ${seed}`, () => ({
rows,
lit: new Set(g.rows),
seed,
}));
b.append(artSvg(g.glyph, g.cols, g.mark, 22));
b.toggleAttribute('data-back', g.back);
box.append(b);
if (icons[1]) box.append(layoutSpan('tf-db-more', `+${icons.length - 1}`));
return box;
}
function cellLike(like) {
const c = (like.cloneNode(false));
c.classList.remove(...[...c.classList].filter((n) => n.endsWith('column-seed')));
c.classList.add('tf-db-gc');
return c;
}
function drawRow(tr) {
const seedCell = tr.querySelector(':scope > td.mat-column-seed');
if (!seedCell) return;
const ok = on();
const key = ok ? keyOf(tr) : '';
const icons = iconsOf(key);
const state = `${ver()}|${ok}|${key}|${icons.length}`;
let cell = tr.querySelector(':scope > td.tf-db-gc');
if (drawn.get(tr) === state && !ok === !cell) return;
drawn.set(tr, state);
if (cell && panel.holds(cell)) panel.close();
if (!ok) return void cell?.remove();
if (!cell) seedCell.after((cell = cellLike(seedCell)));
cell.replaceChildren(...(icons.length ? [marks(icons, key)] : []));
}
function drawHead(table) {
const ours = table.querySelector(':scope > thead th.tf-db-gc');
const seed = table.querySelector(':scope > thead th.mat-column-seed');
if (!on()) return void ours?.remove();
if (ours || !seed) return;
const th = cellLike(seed);
th.textContent = 'Grade';
seed.after(th);
}
function drawDialog() {
const title = document.querySelector(sel.dbHistoryTitle);
if (!title) return false;
const had = title.querySelector(':scope > .tf-db-g');
if (had && panel.holds(had)) panel.close();
had?.remove();
const icons = on() ? iconsOf(histKey()) : [];
if (icons.length) title.append(marks(icons, histKey()));
return true;
}
return { known, keyOf, drawRow, drawHead, drawDialog };
}
// ---- src/db-grades.js
const DB_KEEP = 20000;
function createDbGrades(grades) {
const html = document.documentElement;
const attr = TF_SETTINGS.dbGrades.attr;
const sel = TF_SELECTORS;
const on = () => html.hasAttribute(attr) && grades.enabled();
let ver = 0;
let host = null;
let histKey = '';
const { known, keyOf, drawRow, drawHead, drawDialog } = createDbDraw(
grades,
on,
() => ver,
() => histKey,
);
function syncAll() {
const table = host?.isConnected ? host.querySelector('table') : null;
if (table) {
drawHead(table);
for (const tr of table.querySelectorAll(':scope > tbody > tr')) drawRow(tr);
}
if (histKey) drawDialog();
}
const later = frameLater(syncAll, (f) => requestAnimationFrame(f));
const ours = '.tf-db-gc, .tf-db-g';
const seen = new MutationObserver((records) => {
if (!on()) return;
try {
const table = host?.querySelector('table');
if (table) drawHead(table);
const rows = new Set();
for (const { target, addedNodes } of records) {
const el = target instanceof Element ? target : target.parentElement;
if (!el || el.closest(ours)) continue;
const tr = el.closest('tbody > tr');
if (tr) rows.add(tr);
for (const n of addedNodes)
if (n instanceof Element && !n.closest(ours))
for (const r of n.matches('tr') ? [n] : n.querySelectorAll('tbody > tr')) rows.add(r);
}
rows.forEach(drawRow);
} catch {}
});
function find() {
const h = document.querySelector(sel.dbTable);
if (h === host) return;
seen.disconnect();
host = h;
if (h) seen.observe(h, { childList: true, subtree: true, characterData: true });
}
new MutationObserver(() => {
ver++;
later();
}).observe(html, { attributeFilter: [attr, TF_SETTINGS.grades.attr, ...ART_ATTRS] });
let dialog = null;
let stop = 0;
const done = () => {
dialog?.disconnect();
dialog = null;
clearTimeout(stop);
};
const pick = ( e) => {
const b = e.isTrusted && host && e.target instanceof Element ? e.target.closest(sel.dbHistoryButton) : null;
const tr = b?.closest('tr');
if (!tr || !on()) return;
histKey = keyOf(tr);
done();
dialog = new MutationObserver(() => {
try {
if (drawDialog()) done();
} catch {}
});
dialog.observe(document.body, { childList: true, subtree: true });
stop = setTimeout(done, 10000);
};
document.addEventListener('click', pick, true);
return {
enabled: on,
feed(rows) {
if (!on()) return;
for (const [key, grade] of rows) {
known.delete(key);
known.set(key, grade);
}
for (const k of known.keys()) {
if (known.size <= DB_KEEP) break;
known.delete(k);
}
find();
syncAll();
later();
},
indexed() {
ver++;
later();
},
};
}
// ---- src/tier-names.js
function tierEl(tag, cls, ...kids) {
const el = document.createElement(tag);
el.className = cls;
el.append(...kids);
return el;
}
function tierButton(cls, act, ...kids) {
const b = (tierEl('button', cls, ...kids));
b.type = 'button';
const on = ( e) => e.isTrusted && act();
const held = ( e) => e.repeat && e.key === 'Enter' && e.preventDefault();
tapApply(tapListen, b, ['click', on]);
tapApply(tapListen, b, ['keydown', held]);
return b;
}
const TIER_TAIL = /\s*\b(?:patterns?|guide|list|tier\s*list|tiers|rankings?|collection)\s*$/i;
const TIER_EDGE = /^[\s|:–\-·,]+|[\s|:–\-·,]+$/g;
const tierSystemName = (label, fam) =>
label.toLowerCase().endsWith(fam.toLowerCase()) ? fam : label.replace(TIER_TAIL, '') || label;
function tierRowName(words, n, named, aria) {
const count = `${n} ${named ? 'pattern' : 'seed'}${n === 1 ? '' : 's'}`;
return `${words.filter(Boolean).join(' ')}, ${count}${aria}`;
}
function tierGuideName(title) {
const s = title
.replace(/【[^】]*】|\[[^\]]*\]|\([^)]*\)|\b(?:the\s+complete|cs2|csgo|cs:go)\b|\b(?:patterns?\s+)?guide\b/gi, ' ')
.replace(/\s+/g, ' ')
.replace(TIER_EDGE, '')
.replace(/\s*\bpatterns?$/i, '');
return s || title;
}
const tierBy = (authors) =>
(authors[0]?.match(/\S*[\p{L}\p{N}]\S*/gu)?.join(' ') ?? '') + (authors.length > 1 ? ` +${authors.length - 1}` : '');
function tierGuideSays(item, g) {
if (!document.documentElement.hasAttribute(TF_SETTINGS.tidyNames.attr)) return null;
const say = ( x) => {
const { authors } = item.ix.d.guides[x.guide];
return gradeSays(item.ix.d.guides[x.guide], tierBy(authors.slice(0, 1))) + tierBy(['', ...authors.slice(1)]);
};
const own = say(g);
const twin = item.guides.some(( x) => x !== g && say(x) === own);
return { say: own, sub: twin ? gradeSays(item.ix.d.guides[g.guide], '', 'display_sub') : '' };
}
function tierLevels(s) {
const lv = s.levels.filter(( l) => l.seeds.length);
if (lv.length <= 12 || lv.some(( l) => l.seeds.length > 2))
return lv.map(( l) => {
const label = l.label.replace(/\s*[([][^()[\]]+[)\]]$/, '') || l.label;
const kind = tapOwn(GRADE_KIND, s.kind) ?? 'All';
const whole = label === s.label;
const tidy = document.documentElement.hasAttribute(TF_SETTINGS.tidyNames.attr);
const shown = whole ? kind : tidy ? gradeSays(l, l.label) : label;
return {
label: shown,
whole,
seeds: l.seeds,
mark: gradeMark(l.label, l.key, s.kind),
note: whole ? '' : gradeSays(l, '', 'display_note'),
raw: l,
};
});
const top = [3, 5, 10, 25, 50, 100].filter((n) => n < lv.length);
const seeds = ( n) => lv.slice(0, n).flatMap(( l) => l.seeds);
return [
...top.map((n) => ({ label: `Top ${n}`, seeds: seeds(n), mark: '↑' })),
{ label: 'All', seeds: seeds(lv.length), mark: '' },
];
}
function tierPath(item, g, system, level) {
const one = !item.guides[1];
const t = tierGuideSays(item, g);
const parts = [
...(one ? [] : [t ? t.sub || t.say : g.head]),
...(g.systems[1] || one || !level ? [system] : []),
...(level ? [level] : []),
];
return parts.filter((p, i) => !parts[i + 1]?.toLowerCase().startsWith(p.toLowerCase()));
}
function tierItem(ix, search, page = TIER_PAGES.search) {
const q = new URLSearchParams(search);
const [d, p] = [q.getAll(page.def), q.getAll(page.paint)];
const key = d.length === 1 && p.length === 1 ? `${+d[0]},${+p[0]}` : '';
const sys = ix.items.get(key);
if (!sys) return null;
const guides = [];
for (const si of [...sys].sort((a, b) => gradeRank(ix.d, a, 0) - gradeRank(ix.d, b, 0))) {
const { guide } = ix.d.systems[si];
const { title, authors } = ix.d.guides[guide];
let g = guides.find((x) => x.guide === guide);
if (!g) guides.push((g = { guide, title, name: tierGuideName(title), by: tierBy(authors), systems: [] }));
g.systems.push(si);
}
const differ = new Set(guides.map((g) => g.by)).size > 1;
for (const g of guides) [g.head, g.aside] = differ ? [g.by, g.name] : [g.name, g.by];
const [def, paint] = ix.d.systems[sys[0]].items.find(( it) => `${it}` === key);
return { key, ix, def, paint, guides };
}
// ---- src/tier-pages.js
const DB_STEP = 'tfStep';
const TIER_PAGES = Object.freeze({
search: Object.freeze({
path: '/search',
seed: 'paint_seed',
def: 'def_index',
paint: 'paint_index',
ask: TAP_SEARCH,
wait: 4000,
}),
db: Object.freeze({ path: '/db', seed: 'paintSeed', def: 'defIndex', paint: 'paintIndex', ask: TAP_DB, wait: 0 }),
});
function tierNativeAt(q, list, page, enc) {
const parts = [];
let [at, had] = [-1, -1];
for (const [k, v] of q) {
if (k === page.seed || k === DB_STEP) {
if (had < 0) had = parts.length;
continue;
}
parts.push(`${enc(k)}=${enc(v)}`);
if (k === page.paint) at = parts.length;
}
const where = had >= 0 ? had : at >= 0 ? at : parts.length;
if (list) parts.splice(where, 0, `${page.seed}=${list}`);
return `${page.path}${parts.length ? `?${parts.join('&')}` : ''}`;
}
// ---- src/tier-query.js
const TIER_C = 35;
const TIER_CAP = 40;
const TIER_CURSOR = /^[A-Za-z0-9._~+/=-]{1,512}$/;
const TIER_ORDER = ['paint_seed', 'category', 'rarity', 'sort_by', 'min_float', 'max_float', 'collection',
'min_price', 'max_price', 'type', 'market_hash_name', 'def_index', 'paint_index', 'sticker_index', 'keychain_index',
'keychain_highlight_reel', 'music_kit_index', 'filter', 'state', 'min_ref_qty', 'item_type', 'min_keychain_pattern',
'max_keychain_pattern', 'min_blue', 'max_blue', 'min_fade', 'max_fade', 'sticker_option', 'stickers', 'keychains'];
const tierEnc = encodeURIComponent;
const TierParams = URLSearchParams;
const tierInt = (v, lo, hi) => typeof v === 'number' && tapInteger(v) && v >= lo && v <= hi;
function tierList(seeds, max) {
const n = seeds.length;
if (!tierInt(n, 1, max)) return null;
let list = '';
for (let i = 0; i < n; i++) {
const v = seeds[i];
if (!tierInt(v, 0, 1000)) return null;
list += `${i ? ',' : ''}${v}`;
}
return list;
}
function tierProbeUrl(def, paint, seeds, cursor) {
const list = tierList(seeds, TIER_C);
if (!list || !tierInt(def, 1, 65535) || !tierInt(paint, 1, 65535)) return null;
if (cursor !== null && !tapMatches(TIER_CURSOR, cursor)) return null;
const page = cursor === null ? '' : `&cursor=${tierEnc(cursor)}`;
return `${TAP_ORIGIN}${TAP_SEARCH}?limit=50&sort_by=lowest_price&def_index=${def}&paint_index=${paint}&paint_seed=${list}${page}`;
}
function tierSeen(text, def, paint, chunk) {
let body;
try {
body = text.length <= TAP_MAX_CHARS ? gradeParse(text) : null;
} catch {}
const list = tapOwn(body, 'data');
if (!tapIsArray(list) || list.length > 50) return undefined;
const seeds = [];
const rows = [];
for (const e of list) {
const item = tapOwn(e, 'item');
const seed = tapOwn(item, 'paint_seed');
if (!item || typeof item !== 'object' || !tierInt(seed, 0, 1000)) return undefined;
if (tapOwn(item, 'def_index') !== def || tapOwn(item, 'paint_index') !== paint || !chunk.includes(seed))
return null;
if (!seeds.includes(seed)) seeds.push(seed);
const row = premiumRow(e);
if (row) rows.push(row);
}
const next = tapOwn(body, 'cursor');
return { seeds, rows, n: list.length, next: list.length === 50 && tapMatches(TIER_CURSOR, next) ? next : null };
}
function tierKey(search, seed = 'paint_seed') {
const all = new TierParams(search).getAll(seed);
const seeds = all.length === 1 ? all[0].split(',').map(Number) : [];
return [...new Set(seeds)].sort((a, b) => a - b).join(',');
}
const tierKeyOf = (seeds) => [...new Set(seeds)].sort((a, b) => a - b).join(',');
function tierSeedsOf(search, seed = 'paint_seed') {
const all = new TierParams(search).getAll(seed);
const seeds = all.length === 1 && all[0] ? all[0].split(',').map(Number) : [];
return seeds.length <= TIER_CAP && seeds.every((v) => tierInt(v, 0, 1000)) ? seeds : [];
}
function tierNative(search, seeds, page = TIER_PAGES.search, max = TIER_CAP) {
const q = new TierParams(search);
const list = seeds ? tierList(seeds, max) : '';
if (list === null) return null;
const enc = ( v) =>
tierEnc(v)
.replace(/%40/g, '@')
.replace(/%3A/gi, ':')
.replace(/%24/g, '$')
.replace(/%2C/gi, ',')
.replace(/%3B/gi, ';');
if (page !== TIER_PAGES.search) return tierNativeAt(q, list, page, enc);
const parts = list ? [`paint_seed=${list}`] : [];
const keys = [...TIER_ORDER.slice(1), ...[...q.keys()].filter((k) => !TIER_ORDER.includes(k))];
for (const k of new Set(keys)) {
if (k === 'cursor' || k === 'paintSeed') continue;
for (const v of q.getAll(k)) parts.push(`${enc(k)}=${enc(v)}`);
}
return `/search${parts.length ? `?${parts.join('&')}` : ''}`;
}
function tierParts(seeds, listed) {
const on = listed ? seeds.filter((s) => listed.has(s)) : seeds;
const off = listed ? seeds.filter((s) => !listed.has(s)) : [];
const parts = [];
for (let i = 0; i < on.length; i += TIER_CAP) parts.push(on.slice(i, i + TIER_CAP));
if (!parts.length) parts.push([]);
const last = parts[parts.length - 1];
last.push(...off.slice(0, TIER_CAP - last.length));
return parts.filter((p) => p.length);
}
// ---- src/tier-net.js
const tierFetch = globalThis.fetch;
const tierLater = globalThis.setTimeout;
const TIER_PROBE = 10;
const TIER_RESERVE = 2;
const [TIER_POOL, TIER_GAP, TIER_FRESH, TIER_KEEP] = [3, 200, 12e4, 6e5];
const tierSignedIn = () =>
!document.querySelector(TF_SELECTORS.signIn) && document.querySelector(TF_SELECTORS.signedIn) !== null;
function createTierNet(rate) {
const probes = new Map();
const probeKey = ( def, paint, seeds) =>
`${def},${paint}|${tierKeyOf(seeds)}`;
const refreshing = new Map();
let gen = 0;
let ctl = new AbortController();
const { page, until, count, ours } = createTierPage(rate, () => gen);
async function pool(items, one) {
let [i, stop] = [0, ''];
const worker = async () => {
while (!stop && i < items.length) stop = (await one(items[i++])) || stop;
};
await Promise.all(Array.from({ length: Math.min(TIER_POOL, items.length) }, worker));
return stop;
}
async function probe(def, paint, seeds, step = () => {}, again = false) {
if (!again) return ask(def, paint, seeds, step, false);
const k = probeKey(def, paint, seeds);
const got = refreshing.get(k);
if (got?.[0] === gen) return got[1];
const p = ask(def, paint, seeds, step, true).finally(() => refreshing.get(k)?.[1] === p && refreshing.delete(k));
refreshing.set(k, [gen, p]);
return p;
}
async function ask(def, paint, seeds, step, again) {
const my = again ? gen : ++gen;
if (!again) ctl.abort();
const { signal } = again ? ctl : (ctl = new AbortController());
if (Math.ceil(seeds.length / TIER_C) > TIER_PROBE) return { listed: null, stop: 'big', rows: [], complete: false };
let asked = 0;
const room = () => asked < TIER_PROBE && ++asked > 0;
const chunks = [];
for (let i = 0; i < seeds.length; i += TIER_C)
chunks.push({ chunk: seeds.slice(i, i + TIER_C).sort((a, b) => a - b), next: null });
const listed = (new Set());
const rows = ([]);
let [done, total] = [0, chunks.length];
const tell = () => {
try {
step(done, total);
} catch {}
};
tell();
let n = 0;
const one = async (c, cursor) => {
const url = tierProbeUrl(def, paint, c.chunk, cursor);
const p = await page(url, (t) => tierSeen(t, def, paint, c.chunk), signal, my, room, again);
if (typeof p === 'string') return p;
if (my === gen) (done++, tell());
p.seeds.forEach((s) => listed.add(s));
rows.push(...p.rows);
n += p.n;
[c.next, c.seen] = [p.next, true];
return '';
};
let stop = await pool(chunks, (c) => one(c, null));
if (stop && (stop !== 'limit' || !chunks.some((c) => c.seen)))
return { listed: null, stop, rows: [], complete: false };
const full = chunks.filter((c) => c.next);
total = done + (stop ? 0 : Math.min(full.length, TIER_PROBE - asked));
tell();
const two = stop ? '' : await pool(full, (c) => one(c, c.next));
stop ||= two === 'max' ? '' : two;
if (my !== gen) return { listed: null, stop: 'error', rows: [], complete: false };
const whole = chunks.filter((c) => c.seen && !c.next);
const [complete, found] = [whole.length === chunks.length, listed.size];
const searched = whole.reduce((a, c) => a + c.chunk.length, 0);
for (const c of chunks) if (!c.seen || c.next) c.chunk.forEach((s) => listed.add(s));
const r = { listed, stop, rows, complete, n, searched, found };
if (stop) return r;
const k = probeKey(def, paint, seeds);
probes.delete(k);
probes.set(k, [tickNow(), r]);
if (probes.size > 24) probes.delete(probes.keys().next().value ?? '');
return r;
}
function known(def, paint, seeds) {
const got = probes.get(probeKey(def, paint, seeds));
const age = got ? tickNow() - got[0] : Infinity;
return got && age < TIER_KEEP ? { r: got[1], stale: age >= TIER_FRESH } : null;
}
function plains() {
if (ctl.signal.aborted) ctl = new AbortController();
const [my, { signal }] = [gen, ctl];
return ( def, paint, cat, w) =>
page(tierPlainUrl(def, paint, cat, w), (t) => tierPlainSeen(t, def, paint), signal, my, () => true);
}
const one = (url, parse, signal) => page(url, parse, signal, gen, () => true, true);
return { probe, known, plains, one, until, left: count, cancel: () => (gen++, ctl.abort()), ours };
}
// ---- src/tier-page.js
const tierGet = ( o, k) =>
(Reflect.getOwnPropertyDescriptor(o, k)?.get);
const [tierStatus, tierHeads] = [tierGet(Response.prototype, 'status'), tierGet(Response.prototype, 'headers')];
const tierHead = Headers.prototype.get;
function createTierPage(rate, gen) {
const cache = new Map();
let [places, flying] = [0, 0];
const queue = [];
const sent = new Set();
let [left, of, resetAt, raw, stopUntil, lastAt, out, sentAt] = [-1, 0, 0, 0, 0, 0, false, 0];
let [skew, asks, readAt] = [0, 0, 0];
const fresh = ( k) => (cache.get(k)?.[0] ?? 0) >= tickNow() - 3e5;
function readings(now) {
const { last: g, skew: gs } = rate.state();
const w = g?.reset ?? 0;
const grid = [g?.remaining ?? -1, g?.limit ?? 0, w + gs, w];
return [[left, of, resetAt, raw], grid].filter(([n, , end, at]) => n >= 0 && end > now && at >= Math.max(raw, w));
}
function gate(now) {
if (out || !tierSignedIn()) return 'signin';
if (now < Math.max(stopUntil, rate.state().stopUntil)) return 'limit';
return readings(now).some(([n]) => n - flying <= TIER_RESERVE) ? 'limit' : '';
}
async function page(url, parse, signal, my, room, again = false) {
const key = url ?? '';
const hit = !again && fresh(key) ? cache.get(key)?.[1] : undefined;
if (hit) return hit;
if (!room()) return 'max';
while (places >= TIER_POOL) await new Promise((ok) => queue.push(() => ok(0)));
places++;
try {
return await send(key, url, parse, signal, my, again);
} finally {
places--;
queue.shift()?.();
}
}
async function send(key, url, parse, signal, my, again) {
for (let at = (lastAt = Math.max(tickNow(), lastAt + TIER_GAP)); at > tickNow(); at = sentAt + TIER_GAP)
await new Promise((ok) => tapApply(tierLater, globalThis, [() => ok(0), at - tickNow()]));
if (my !== gen() || signal.aborted) return 'error';
const had = !again && fresh(key) ? cache.get(key)?.[1] : undefined;
if (had) return had;
const no = gate(tickNow());
if (no || !url) return no || 'error';
[lastAt, sentAt, asks, flying] = [Math.max(lastAt, tickNow()), tickNow(), asks + 1, flying + 1];
sent.delete(url);
sent.add(url);
if (sent.size > 64) sent.delete(sent.values().next().value ?? '');
const ask = asks;
const init = {
__proto__: null,
method: 'GET',
credentials: 'same-origin',
redirect: 'error',
mode: 'same-origin',
signal,
};
let r = (null);
try {
const res = await tapApply(tierFetch, globalThis, [url, init]);
const [heads, status] = [tapApply(tierHeads, res, []), tapApply(tierStatus, res, [])];
const head = ( k) => tapCount(tapApply(tierHead, heads, [`x-ratelimit-${k}`]));
const text = status === 200 ? await tierCapped(res) : '';
r = { status, left: head('remaining'), of: head('limit') ?? 0, at: (head('reset') ?? 0) * 1000, text };
} catch {}
const now = tickNow();
flying--;
const at = r && r.at > now - 36e5 && r.at < now + 1728e5 ? r.at : 0;
if (at && at < now - 5000) skew = Math.max(skew, now - at + 1000);
const ahead = at + Math.max(skew, rate.state().skew);
const reset = at < now - 5000 ? now + 36e5 : ahead;
const has = r?.left != null && at > 0 && reset > now;
if (has && ask > readAt && (at !== raw || (r?.left ?? 0) <= left))
[left, of, resetAt, raw, readAt] = [r?.left ?? 0, r?.of ?? 0, reset, at, ask];
else if (!has && left > 0) left--;
if (r?.status === 429) rate.hold((stopUntil = Math.max(has ? ahead : 0, now + 6e5)));
out ||= r?.status === 403 || r?.status === 401;
const seen = r?.status === 200 ? parse(r.text) : undefined;
if (seen && !has) stopUntil = now + 6e5;
if (my !== gen()) return 'error';
if (!seen) return out ? 'signin' : r?.status === 429 ? 'limit' : seen === null ? 'filter' : 'error';
cache.delete(key);
cache.set(key, [now, seen]);
if (cache.size > 120) cache.delete(cache.keys().next().value ?? '');
return seen;
}
function until(keep = 0) {
const none = readings(tickNow()).filter(([n]) => n <= keep);
return Math.max(stopUntil, rate.state().stopUntil, ...none.map(([, , at]) => at), 0);
}
function count() {
const [r] = readings(tickNow()).sort((a, b) => a[0] - b[0]);
return r ? { n: r[0], of: r[1], at: r[2] } : null;
}
const ours = ( url) => sent.has(url);
return { page, until, count, ours };
}
// ---- src/tier-body.js
const tierBody = tierGet(Response.prototype, 'body');
const tierReader = ReadableStream.prototype.getReader;
const { read: tierRead, cancel: tierCancel } = ReadableStreamDefaultReader.prototype;
const [TierDecoder, tierDecode] = [TextDecoder, TextDecoder.prototype.decode];
async function tierCapped(res) {
const [reader, dec] = [tapApply(tierReader, tapApply(tierBody, res, []), []), new TierDecoder()];
let text = '';
for (let c = await tapApply(tierRead, reader, []); !c.done; c = await tapApply(tierRead, reader, [])) {
text += tapApply(tierDecode, dec, [c.value, { stream: true }]);
if (text.length > TAP_MAX_CHARS) {
await tapApply(tierCancel, reader, []);
return '';
}
}
return text + tapApply(tierDecode, dec, []);
}
// ---- src/tier-nav.js
const tierPush = History.prototype.pushState;
const tierSwap = History.prototype.replaceState;
const tierFire = EventTarget.prototype.dispatchEvent;
const TierPop = PopStateEvent;
const tierPerf = globalThis.performance;
const tierEntries = Performance.prototype.getEntriesByType;
const tierPerfNow = Performance.prototype.now;
const TierURL = URL;
const TIER_WAIT = 4000;
const TIER_ANSWER = 10000;
const TIER_FAIL = 'CSFloat did not apply the seed filter';
const tierSearch = () => location.search;
const tierAt = (page = TIER_PAGES.search) => location.pathname === page.path;
function createTierNav(ours, lost, page = TIER_PAGES.search) {
let [want, n, waits, no, gone] = [ (null), 0, '', 0, ''];
return {
go(to, key, replace = false) {
const [at, seed] = [page.path, page.seed];
if ((to !== at && !to.startsWith(`${at}?`)) || !tierAt(page) || tierKey(tierSearch(), seed) === key) return;
const my = ++n;
want = key;
const since = tapApply(tierPerfNow, tierPerf, []);
tapApply(replace ? tierSwap : tierPush, history, [null, '', TAP_ORIGIN + to]);
tapApply(tierFire, globalThis, [new TierPop('popstate', { state: null })]);
const here = () => my === n && want === key && tierAt(page) && tierKey(tierSearch(), seed) === key;
const asked = () => {
try {
for (const e of tapApply(tierEntries, tierPerf, ['resource'])) {
if (e.startTime < since || ours(e.name)) continue;
const u = new TierURL(e.name);
if (u.origin === TAP_ORIGIN && u.pathname === page.ask && tierKey(u.search, seed) === key) return true;
}
} catch {}
return false;
};
const load = () => (replace ? location.replace(TAP_ORIGIN + to) : location.assign(TAP_ORIGIN + to));
const check = () => !!page.wait && here() && !asked() && ((want = null), load());
tapApply(tierLater, globalThis, [check, page.wait]);
},
opened(query) {
const [k, my] = [tierKey(query), ++no];
if (want !== null && k === want) want = null;
waits = k;
if (k && k === gone) lost((gone = ''));
const late = () => my === no && waits === k && !document.querySelector(TF_SELECTORS.card) && lost((gone = k));
if (k) tickAfter(late, TIER_ANSWER);
},
answered(query) {
const k = tierKey(query);
if (k === waits) waits = '';
if (k && k === gone) lost((gone = ''));
},
};
}
function tierApplied(listings, query, def, paint) {
const seeds = new Set(tierKey(query).split(','));
for (const l of listings) {
if (!l[4]) continue;
const [d, p, s] = l[4].split(':');
if (!seeds.has(`${+s}`) || +d !== def || +p !== paint) return false;
}
return true;
}
// ---- src/tier-pop-guide.js
function tierGuideLine(it, g, gems) {
const guide = it.ix.d.guides[g.guide];
const id = `${guide?.steam_id ?? ''}`;
const t = tierGuideSays(it, g);
const [head, aside, tip] = t
? [t.say, t.sub, `${guide.authors.join(', ')} · ${g.title}`]
: [g.by, g.name, `${g.by} · ${g.title}`];
const el = tierLine('tf-ts-gd', gems, head, aside, tip);
if (!/^\d{6,12}$/.test(id)) return el;
const a = Object.assign(document.createElement('a'), {
className: el.className,
href: `https://steamcommunity.com/sharedfiles/filedetails/?id=${id}`,
target: '_blank',
rel: 'noopener noreferrer',
title: `${tip}\nOpen the guide on Steam`,
});
const svg = document.createElementNS(SVG_NS, 'svg');
svg.setAttribute('viewBox', '0 0 12 12');
svg.setAttribute('aria-hidden', 'true');
const path = document.createElementNS(SVG_NS, 'path');
path.setAttribute('d', 'M4.5 2.5h5v5M9.5 2.5 3 9');
svg.append(path);
a.append(...el.childNodes, tierEl('span', 'tf-ts-out', svg));
return a;
}
function tierLevelTip(l, v, named) {
const p = v && !v.none ? premiumTip(v) : null;
const cleaned = l.raw && !l.whole ? gradeSays(l.raw, '') : '';
const [head, body] = [cleaned || (l.raw?.label ?? l.label), l.raw?.definition ?? ''];
if (!p && !body && head === l.label) return null;
const n = l.seeds.length;
const source = [p?.body, p?.source, tierRowAct(n, named)].filter(Boolean).join('\n');
const aside = `${n} ${named ? 'pattern' : 'seed'}${n === 1 ? '' : 's'}`;
return { head, aside, body, rows: p?.rows, source, side: '.tf-ts-pop' };
}
const tierRowAct = (n, named) =>
`Search ${n === 1 ? '' : 'all '}${n} ${named ? 'pattern' : 'seed'}${n === 1 ? '' : 's'}`;
function tierBrowse(row, n, act) {
const b = tierButton('tf-ts-bw', act, 'Browse ›');
b.title = b.ariaLabel = `Browse ${n} pattern${n === 1 ? '' : 's'}`;
return tierEl('div', 'tf-ts-lv', row, b);
}
function tierNamed(lv) {
const [html, names] = [document.documentElement, tapOwn(lv.raw, 'names')];
const on = [TF_SETTINGS.patternPicker.attr, TF_SETTINGS.tierStrip.attr].every((a) => html.hasAttribute(a));
return on && !!names && typeof names === 'object';
}
function tierLine(cls, gems, a, b = '', tip = '') {
const el = tierEl('div', cls, gems, tierEl('span', 'tf-ts-t', a), ...(b ? [tierEl('span', 'tf-ts-by', b)] : []));
el.title = tip || a;
return el;
}
function tierOneRow(s, levels, name) {
const html = document.documentElement;
const one = levels.length === 1 && html.hasAttribute(TF_SETTINGS.oneTier.attr);
const tidy = html.hasAttribute(TF_SETTINGS.tidyNames.attr);
const only = one ? s.levels.find(( x) => x.seeds.length) : null;
const row = one && tidy ? gradeSays(only, name, 'display_row') : name;
const lt =
one &&
!tidy &&
!levels[0].whole &&
!['Group', 'Tier', 'All'].includes(levels[0].label) &&
levels[0].label.toLowerCase() !== name.toLowerCase()
? levels[0].label
: '';
return { one, row, lt };
}
// ---- src/tier-pop.js
function createTierPop(item, on, chose, clear, worth, browse = true) {
const html = document.documentElement;
let [pop, anchor] = [null, null];
const sys = ( si) => item().ix.d.systems[si];
const fam = ( si) => item().ix.d.families[sys(si).family];
const sysName = ( si) =>
html.hasAttribute(TF_SETTINGS.tidyNames.attr)
? gradeSays(sys(si), sys(si).label)
: tierSystemName(sys(si).label, fam(si).name);
const glyph = (si, mark, h) => {
const gems = gradeGems(item().ix.d, [si].flat(), html.getAttribute('data-tf-theme') === 'light');
return tierEl('span', 'tf-ts-g', ...gems.map(([g, c]) => artSvg(g, c, mark, h)));
};
function list() {
const now = on();
const rows = [];
if (now) rows.push(tierButton('tf-ts-c tf-ts-clr', () => (close(true), clear()), tierEl('span', 'tf-ts-g', '×'),
tierEl('span', 'tf-ts-t', 'Clear tier')));
item().guides.forEach(( g, gi) => {
rows.push(tierGuideLine(item(), g, glyph(g.systems, '', 18)));
for (const si of g.systems) {
const [name, worn] = [sysName(si), gradeWorn(item().ix.d, sys(si), sysName(si))];
const note = gradeSays(sys(si), '', 'display_note');
const levels = tierLevels(sys(si));
const { one, row, lt } = tierOneRow(sys(si), levels, name);
const nt = ( t) => (t ? [tierEl('span', 'tf-ts-nt', t)] : []);
if (!one)
rows.push(
tierLine('tf-ts-sy', glyph(si, '', 16), name, worn && `· ${worn}`, worn ? `${name} · ${worn}` : ''),
);
if (!one && note) rows[rows.length - 1].append(...nt(note));
levels.forEach((l, li) => {
const [gem, n] = [glyph(si, l.mark, 16), tierEl('span', 'tf-ts-n', `${l.seeds.length}`)];
const v = worth(si, li);
const val = v && !v.none ? [tierEl('span', 'tf-ts-pv', v.chip)] : [];
const said = one ? row : l.label;
const words = [
tierEl('span', 'tf-ts-t', said),
...(one && worn ? [tierEl('span', 'tf-ts-by', `· ${worn}`)] : []),
];
const cls = one ? 'tf-ts-c tf-ts-one' : 'tf-ts-c';
const quiet = one ? [lt, note || l.note || ''].filter(Boolean).join(' ') : (l.note ?? '');
const named = browse && tierNamed(l);
const b = tierButton(cls, () => chose(gi, si, li, false), gem, ...words, ...nt(quiet), ...val, n);
b.ariaPressed = `${now?.g === gi && now.si === si && now.li === li}`;
const tip = tierLevelTip(l, v, named);
tipBox.tie(b, tip);
if (!tip) b.title = tierRowAct(l.seeds.length, named);
const shown = [said, one && worn ? `· ${worn}` : '', quiet];
b.ariaLabel = tierRowName(shown, l.seeds.length, named, v && !v.none ? v.aria : '');
rows.push(named ? tierBrowse(b, l.seeds.length, () => chose(gi, si, li, true)) : b);
});
}
});
return rows;
}
function close(focus) {
(pop?.remove(), (pop = null), anchor?.setAttribute('aria-expanded', 'false'));
if (focus) anchor?.focus();
}
const place = () => {
if (!pop) return;
const a = anchor?.isConnected ? anchor.getBoundingClientRect() : null;
if (!a) return close();
const [below, above, full] = [innerHeight - a.bottom - 16, a.top - 16, pop.scrollHeight];
const up = full > below && above > below;
const room = Math.max(120, up ? above : below);
pop.style.maxHeight = `${room}px`;
const y = up ? a.top - 6 - Math.min(full, room) : a.bottom + 6;
pop.style.translate = `${Math.max(8, Math.min(a.left, innerWidth - 376)) + scrollX}px ${y + scrollY}px`;
};
function toggle(a) {
if (pop && anchor === a) return close(true);
close();
if (!item()) return;
[anchor, pop] = [a, document.body.appendChild(tierEl('div', 'tf-ts-pop', ...list()))];
[pop.role, pop.ariaLabel] = ['dialog', 'Pattern tiers'];
a.setAttribute('aria-expanded', 'true');
place();
(
pop.querySelector('.tf-ts-c:not(.tf-ts-clr)[aria-pressed="true"]') ??
pop.querySelector('.tf-ts-c:not(.tf-ts-clr)')
)?.focus();
}
const away = ( e) =>
pop && ![pop, anchor, document.getElementById('tf-tip')].some((x) => x?.contains( (e.target)));
document.addEventListener('pointerdown', (e) => away(e) && close(), true);
const step = { __proto__: null, ArrowDown: 1, ArrowUp: -1, Home: -1e4, End: 1e4 };
document.addEventListener(
'keydown',
(e) => {
if (!pop) return;
if (e.key === 'Escape') return void (e.stopPropagation(), close(true));
const [d, lv] = [step[e.key], document.activeElement?.closest('.tf-ts-lv')];
if (!pop.contains(document.activeElement) || e.altKey || e.ctrlKey || e.metaKey) return;
const side = ['ArrowLeft', 'ArrowRight'].indexOf(e.key);
if (lv && side >= 0) return void (e.preventDefault(), (lv.children[side]).focus());
if (!d) return;
e.preventDefault();
const all = [...pop.querySelectorAll('button.tf-ts-c')];
const at = all.indexOf( (lv?.firstElementChild ?? document.activeElement));
(all[Math.max(0, Math.min(all.length - 1, at + d))])?.focus();
},
true,
);
addEventListener('resize', place);
addEventListener('scroll', place, { capture: true, passive: true });
return {
toggle,
close,
reset: () => close(),
glyph,
sysName,
sys,
under: (a) => !!pop && anchor === a,
};
}
// ---- src/tier-picker.js
function createTierPicker(pick) {
const ROW = 24;
let pop = null;
let anchor = null;
let model = null;
let shown = [];
let rows = 1;
const cells = () => ([...(pop?.querySelectorAll('button.tf-pk-r') ?? [])]);
const box = () => anchor?.getBoundingClientRect() ?? null;
function close(focus = false) {
pop?.remove();
pop = null;
if (anchor) anchor.ariaExpanded = 'false';
if (focus && anchor instanceof HTMLElement && anchor.isConnected) anchor.focus();
anchor = null;
}
const choose = ( s) => pick(s) !== false && close(true);
function fill(list, q) {
if (!model) return;
const m = model;
const t = q.trim().toLowerCase();
const hits = m.seeds.filter(([s, n]) => !t || `${s}`.startsWith(t) || n.toLowerCase().includes(t));
shown = hits.map(([s]) => s);
const bare = m.seeds.every(([, n]) => !n);
const a = box();
const fit = Math.max(4, Math.floor(((a ? innerHeight - a.bottom : 480) - 110) / ROW));
const w = bare ? 56 : 176;
const most = Math.max(1, Math.floor((innerWidth - 30) / (w + 2)));
const cols = Math.min(most, Math.max(1, Math.ceil(hits.length / fit)));
rows = Math.max(1, Math.ceil(hits.length / cols));
list.style.gridTemplateColumns = `repeat(${cols}, ${w}px)`;
list.style.gridTemplateRows = `repeat(${rows}, ${ROW}px)`;
list.replaceChildren(
...hits.map(([s, n]) => {
const kids = [tierEl('span', 'tf-pk-s', `${s}`), ...(n ? [tierEl('span', 'tf-pk-n', n)] : [])];
const b = tierButton('tf-pk-r', () => choose(s), ...kids);
b.title = n ? `${s} ${n}` : `${s}`;
b.ariaPressed = `${s === m.picked}`;
return b;
}),
);
const none = !m.seeds.length ? 'None of these patterns is listed now' : !hits.length ? 'No pattern matches' : '';
if (none) list.append(tierEl('span', 'tf-pk-none', none));
}
function place() {
if (!pop) return;
if (!anchor?.isConnected) return close();
const a = anchor.getBoundingClientRect();
const w = pop.getBoundingClientRect().width;
const end = (anchor.closest('.tf-tstrip') ?? anchor).getBoundingClientRect().right;
const x = a.left + w <= end ? a.left : end - w;
pop.style.maxHeight = `${Math.max(160, innerHeight - a.bottom - 14)}px`;
pop.style.translate = `${Math.max(8, Math.min(x, innerWidth - w - 8)) + scrollX}px ${a.bottom + 6 + scrollY}px`;
}
function toggle(a, m) {
if (pop && anchor === a) return close(true);
close();
[anchor, model] = [a, m];
a.ariaExpanded = 'true';
const bare = m.seeds.every(([, n]) => !n);
const input = (tierEl('input', 'tf-pk-f'));
Object.assign(input, { type: 'search', placeholder: bare ? 'Seed' : 'Seed or name', autocomplete: 'off' });
[input.ariaLabel, input.spellcheck] = ['Filter patterns', false];
const list = tierEl('div', 'tf-pk-l');
const n = m.seeds.length;
const word = m.listed ? (/^all listed$/i.test(m.title) ? 'Listed' : 'All listed') : 'All';
const all = tierButton('tf-pk-all', () => choose(null), word, tierEl('span', 'tf-pk-c', `${n}`));
all.ariaPressed = `${m.picked === null}`;
const what = m.listed ? ' listed now' : n < m.of ? ' listed or not checked' : '';
all.title = what ? `The ${n} of ${m.of} patterns${what}` : `All ${m.of} patterns`;
const [gem, by] = [tierEl('span', 'tf-ts-g', ...(m.gem ? [m.gem] : [])), tierEl('span', 'tf-pk-by', m.by)];
const head = tierEl('div', 'tf-pk-h', gem, tierEl('span', 'tf-pk-t', m.title), by, all);
pop = tierEl('div', 'tf-ts-pop tf-pk', head, input, list);
[pop.role, pop.ariaLabel] = ['dialog', 'Patterns'];
panelHold(pop, null);
document.body.append(pop);
fill(list, '');
tapApply(tapListen, input, ['input', () => fill(list, input.value)]);
place();
pop.style.minWidth = `${pop.getBoundingClientRect().width}px`;
if (m.focus !== false) input.focus({ preventScroll: true });
}
function follow(b) {
if (!pop || anchor === b) return;
if (!b) return close();
[anchor, b.ariaExpanded] = [b, 'true'];
place();
}
const away = (e) => pop && ![pop, anchor].some((x) => x?.contains( (e.target)));
document.addEventListener('pointerdown', (e) => away(e) && close(), true);
document.addEventListener(
'keydown',
(e) => {
if (!e.isTrusted || !pop || !pop.contains(document.activeElement) || e.altKey || e.ctrlKey || e.metaKey) return;
if (e.key === 'Escape') return void (e.stopPropagation(), close(true));
const all = cells();
const at = all.indexOf( (document.activeElement));
const inInput = document.activeElement?.classList.contains('tf-pk-f');
if (inInput && e.key === 'Enter' && shown.length && !e.repeat) return void (e.preventDefault(), choose(shown[0]));
if (inInput && e.key === 'ArrowDown') return void (e.preventDefault(), all[0]?.focus());
const step = {
__proto__: null,
ArrowDown: 1,
ArrowUp: -1,
ArrowRight: rows,
ArrowLeft: -rows,
Home: -1e4,
End: 1e4,
};
const d = step[e.key];
if (at < 0 || !d) return;
e.preventDefault();
if (at === 0 && e.key === 'ArrowUp') return void pop.querySelector('input')?.focus();
all[Math.max(0, Math.min(all.length - 1, at + d))]?.focus();
},
true,
);
addEventListener('resize', place);
addEventListener('scroll', place, { capture: true, passive: true });
return { toggle, follow, close, isOpen: () => !!pop };
}
// ---- src/tier-patterns.js
function createTierPatterns(t, { mem, show, part, pop, tick, until, pace }) {
const html = document.documentElement;
const paced = tierPaced((seed) => pattern(seed < 0 ? null : seed), until, pace);
const picker = createTierPicker((seed) => paced(seed ?? -1));
let ones = (new WeakMap());
let grid = (null);
const heard = (new WeakSet());
const learnt = (new WeakMap());
let since = 0;
const idle = () => !(t.out || t.failed || t.busy);
const named = (s) => {
const base = s?.base ?? s;
return base && tierNamed(base.lv) ? base : null;
};
const seedsOf = (base) => base.lv.seeds.filter((s) => !base.listed || base.listed.has(s));
const words = (s, i) => {
const seed = s.parts?.[i]?.[0] ?? 0;
const n = s.pat ? gradeNick(s.lv.raw, seed) : '';
return s.pat ? [`${seed}${n ? ` ${n}` : ''}`, false] : [s.lv.label, !!s.lv.whole];
};
const under = (q) => `${[...q].filter(([k]) => k !== 'paint_seed' && k !== 'cursor').sort()}`;
const calm = (a = document.activeElement) =>
!a || a === document.body || !!a.closest('.tf-tstrip,.tf-ts-slot,.tf-tr');
function toggle(a, focus = true) {
grid = null;
const [sel, i, base] = [t.sel, part(), named(t.sel)];
if (!base || !t.item) return;
const g = t.item.guides[base.g];
picker.toggle(a, {
title: base.lv.whole ? pop.sysName(base.si) : base.lv.label,
by: tierGuideSays(t.item, g)?.say ?? g.by,
gem: pop.glyph(base.si, base.lv.mark, 16),
seeds: seedsOf(base).map((s) => [s, gradeNick(base.lv.raw, s)]),
of: base.lv.seeds.length,
listed: !!base.listed && base.complete !== false,
picked: sel?.pat && i >= 0 ? sel.parts[i][0] : null,
focus,
});
}
const known = (s) => !!s.listed || s.parts.length > 1 || heard.has(s) || Date.now() - since > 1500;
const put = (s) =>
mem.keep(t.item, (t.sel = s), mem.ours(tierKey(tierSearch()), t.item?.key)?.before ?? tierSeedsOf(tierSearch()));
function pattern(seed) {
const base = named(t.sel);
if (!base || !t.item || !idle()) return;
if (seed === null) return void (put(base), show(0));
const was = !!t.sel?.pat && part() >= 0;
let one = ones.get(base);
if (!one) {
const seeds = seedsOf(base);
one = { ...base, parts: seeds.map((s) => [s]), keys: seeds.map((s) => `~${s}`), base, pat: true };
ones.set(base, one);
}
const at = one.parts.findIndex(([s]) => s === seed);
if (at >= 0) (put(one), show(at, was));
}
function reset(s) {
[grid, ones] = [null, new WeakMap()];
picker.close();
mem.forget((x) => !!x.pat);
return s?.base ?? s;
}
return {
words,
level: (s, i) => (s.pat || !s.lv.whole ? words(s, i)[0] : ''),
strip: (on) => ({ pat: !!on?.pat, grid: on && idle() && named(on) ? toggle : null }),
picked(s, browse) {
picker.close();
[grid, since] = [browse && named(s) ? s : null, Date.now()];
if (grid) tapApply(tierLater, globalThis, [tick, 1600]);
},
browse() {
const [b, base] = [document.querySelector('.tf-tstrip-grid'), named(t.sel)];
const f = (document.querySelector('.tf-pk .tf-pk-f'));
if (!b || !base) return false;
if (f) f.focus();
else ((grid = base), tick(), tapApply(tierLater, globalThis, [tick, 1600]));
return true;
},
seen(listings, query, raw) {
const [s, q] = [t.sel, new TierParams(query)];
const [base, k, was] = [s?.base ?? s, under(q), (s?.base ?? s)?.listed];
if (!s || !base || q.has('cursor') || (was && !learnt.has(base))) return false;
const seeds = listings.map((l) => Number(l[4]?.split(':')[2] ?? NaN));
const whole = raw < Number(q.get('limit') ?? 40) && listings.length === raw && seeds.every((x) => x >= 0);
if (!s.pat && base.parts.length === 1 && whole) (learnt.set(base, k), (base.listed = new Set(seeds)));
else if (!s.pat || learnt.get(base) !== k) (learnt.delete(base), (base.listed = null));
if (base.listed !== was) ones.delete(base);
heard.add(base);
return true;
},
leave() {
const s = t.sel;
if (!s?.pat || !s.base || named(s) || part() < 0) return;
const before = mem.ours(tierKey(tierSearch()), t.item?.key)?.before ?? [];
(reset(s), mem.keep(t.item, (t.sel = s.base), before));
show(0, true);
},
drawn(on) {
if (grid && !named(grid)) grid = null;
if (!grid && !picker.isOpen()) return;
const b = document.querySelector('.tf-tstrip-grid');
if (b && grid && on && grid === (on.base ?? on) && known(grid)) return void (picker.close(), toggle(b, calm()));
picker.follow(b);
},
reset,
};
}
// ---- src/tier-row.js
const TIER_ON = 'data-tf-tier';
const tierPartsWhy = (n) => `CSFloat searches ${TIER_CAP} patterns at a time, so this tier comes in ${n} parts`;
function createTierRow(pick, clear, show, host = 'app-advanced-search', onAttr = TIER_ON) {
const html = document.documentElement;
let drawn = '';
function make(s) {
const path = s.path.length ? s.path.map((p) => tierEl('span', '', p)) : ['Choose a tier'];
const mark = s.mark();
const act = () => (s.off ? tipBox.shown(b) : pick(b));
const b = tierButton('tf-tr-pick', act, ...(mark ? [mark] : []), tierEl('span', 'tf-tr-path', ...path));
[b.ariaHasPopup, b.ariaExpanded, b.ariaDisabled] = s.off ? [null, null, 'true'] : ['dialog', 'false', null];
if (s.off) tipBox.tie(b, TIER_SIGNIN_TIP);
const head = tierEl('div', 'tf-tr-head', tierEl('span', 'tf-tr-name', 'Tier'));
if (s.on) {
const x = tierButton('tf-tr-reset', clear, 'Reset');
x.ariaLabel = 'Clear tier';
head.append(x);
}
const kids = [head, b];
const prem = s.on && s.prem ? premiumEl('tf-tr-prem', s.prem, s.prem.text) : null;
if (prem && !(s.parts > 1)) kids.push(tierEl('div', 'tf-tr-part', prem));
if (s.on && s.parts > 1) {
const to = ( d, t, label) => {
const a = tierButton('tf-tr-go', () => show((s.part + d + s.parts) % s.parts), t);
[a.ariaLabel, a.title] = [label, label];
return a;
};
const [one, word] = s.pat ? ['Pattern ', 'pattern'] : ['Part ', 'part'];
const words = tierEl('span', '', `${one}${s.part + 1} of ${s.parts}`);
if (!s.pat) words.title = tierPartsWhy(s.parts);
const go = [to(-1, '‹', `Previous ${word}`), to(1, '›', `Next ${word}`)];
kids.push(tierEl('div', 'tf-tr-part', words, ...(prem ? [prem] : []), ...go));
}
if (s.note) kids.push(tierSaid(tierEl('div', 'tf-tr-note', s.note), s.prem));
else if (s.hold && !s.on)
kids.push(Object.assign(tierEl('div', 'tf-tr-part tf-tr-hold', '–'), { ariaHidden: 'true' }));
const row = tierEl('div', 'tf-tr', ...kids);
row.toggleAttribute('data-busy', s.busy);
return row;
}
return {
draw(s) {
html.toggleAttribute(onAttr, !!s?.on);
const [rowsAt, ours] = [`${host} .tf-tr`, `${host} .tf-tr, ${host} .tf-tr-chip`];
const stamp = s ? `${s.stamp}|${artStamp()}|${s.prem?.text}|${s.prem?.title}` : '';
let had = (null);
if (stamp !== drawn) {
drawn = stamp;
const [act, rows] = [document.activeElement, [...document.querySelectorAll(rowsAt)]];
const ri = act ? rows.findIndex((r) => r.contains(act)) : -1;
const cls = ri >= 0 ? (act?.classList[0] ?? '') : '';
if (cls) had = [ri, cls, [...rows[ri].getElementsByClassName(cls)].indexOf( (act))];
for (const el of document.querySelectorAll(ours)) el.remove();
}
if (!s) return;
for (const input of document.querySelectorAll(`${host} search-paint-seed-input`)) {
const at = input.closest('app-search-row');
if (at && !at.previousElementSibling?.matches('.tf-tr')) at.before(make(s));
if (s.on && !input.previousElementSibling?.matches('.tf-tr-chip'))
input.before(tierEl('span', 'tf-tr-chip', s.chip));
}
if (!had) return;
const row = document.querySelectorAll(rowsAt)[had[0]];
const to = row?.getElementsByClassName(had[1])[had[2]] ?? row?.querySelector('.tf-tr-pick');
if (to instanceof HTMLElement) to.focus({ preventScroll: true });
},
};
}
// ---- src/tier-strip.js
function createTierStrip(clear, show, anchor = 'app-search-bar', before = false) {
let [el, drawn] = [ (null), ''];
const bar = tierEl('span', 'tf-tstrip-bar', tierEl('span', ''));
const seg = (text, lead = '', title = '', cls = '') => {
const s = tierEl('span', `tf-tstrip-s${cls ? ` ${cls}` : ''}`, ...(lead ? [tierEl('b', '', lead)] : []), text);
if (typeof title !== 'string') tipBox.tie(s, title);
else s.title = title || `${lead}${text}`.trim();
return s;
};
function make(s) {
const mark = s.mark();
const path = s.path.map((p, i) => tierEl(i === s.path.length - 1 ? 'b' : 'span', '', p));
const kids = [tierEl('span', 'tf-tstrip-lead', ...(mark ? [mark] : []), tierEl('span', 'tf-tstrip-path', ...path))];
const p = s.prem;
const tip = p && !p.none ? premiumTip(p) : (p?.title ?? '');
if (s.line) kids.push(tierSaid(seg(s.line.text, '', s.line.title), s.line));
if (!s.step && s.note) kids.push(seg(s.note, '', '', 'tf-tstrip-warn'));
else if (!s.step && s.on) {
const b = s.book;
if (b && (b.whole || b.why === 'more'))
kids.push(
seg(
`${b.count}${b.whole ? '' : '+'} listed`,
'',
b.whole ? 'Listings of this tier on CSFloat now, every part' : 'Scroll to load the rest',
),
);
if (s.wait) kids.push(seg(s.wait, '', '', 'tf-tstrip-faint'));
else if (p?.none) kids.push(seg(p.title, '', '', 'tf-tstrip-faint'));
else if (p?.short)
kids.push(seg(p.text, '', tip));
else if (p) {
for (const c of p.cells ?? []) {
const one = seg(
c.x ? ` ${c.x}× plain` : ` ${c.why}`,
c.w,
tip,
`tf-tstrip-cell${c.x ? '' : ' tf-tstrip-faint'}`,
);
if (c.x) one.append(tierEl('span', 'tf-tstrip-n', ` (${c.nt} vs ${c.np})`));
kids.push(one);
}
if (p.ago) kids.push(seg(`plain sampled ${p.ago}`, '', tip, 'tf-tstrip-faint'));
}
}
const end = tierEl('span', 'tf-tstrip-end');
const [one, word] = s.pat ? ['Pattern ', 'pattern'] : ['Part ', 'part'];
if (s.on && s.parts > 1) {
const step = ( d) => () => show((s.part + d + s.parts) % s.parts);
const go = ( d, t, label) =>
Object.assign(tierButton(`tf-tstrip-${d < 0 ? 'prev' : 'next'} tf-tstrip-go`, step(d), t), {
ariaLabel: label,
title: label,
});
const at = tierEl('span', 'tf-tstrip-part', `${one}${s.part + 1} of ${s.parts}`);
if (!s.pat) at.title = tierPartsWhy(s.parts);
end.append(at, go(-1, '‹', `Previous ${word}`), go(1, '›', `Next ${word}`));
}
if (s.grid) {
const grid = s.grid;
const b = tierButton('tf-tstrip-grid tf-tstrip-go', () => grid(b), tierGridSvg());
[b.ariaLabel, b.title, b.ariaHasPopup, b.ariaExpanded] = ['Patterns', 'Patterns', 'dialog', 'false'];
end.append(b);
}
if (s.x)
end.append(
Object.assign(tierButton('tf-tstrip-x', clear, '×'), { ariaLabel: 'Clear tier', title: 'Clear tier' }),
);
return [tierEl('span', 'tf-tstrip-body', ...kids), end];
}
return {
draw(s) {
const host = document.querySelector(anchor);
if (!s || !host) return void (el?.remove(), ([el, drawn] = [null, '']));
if (el && (before ? el.nextElementSibling : el.previousElementSibling) !== host)
(el.remove(), ([el, drawn] = [null, '']));
if (!el) {
el = tierEl('div', 'tf-tstrip');
[el.role, el.ariaLabel] = ['group', 'Tier search'];
before ? host.before(el) : host.after(el);
}
if (drawn !== s.stamp) {
const act = document.activeElement;
const had = act && el.contains(act) ? (act.classList[0] ?? '') : '';
el.replaceChildren(...make(s), bar);
drawn = s.stamp;
if (had) (el.querySelector(`.${had}`))?.focus({ preventScroll: true });
}
el.toggleAttribute('data-busy', !!s.step || !!s.wait);
el.toggleAttribute('data-step', !!s.step);
if (s.step) el.style.setProperty('--tf-tstrip-p', `${Math.max(0.06, s.step.done / s.step.total)}`);
},
};
}
function tierGridSvg() {
const svg = document.createElementNS(SVG_NS, 'svg');
svg.setAttribute('viewBox', '0 0 12 12');
svg.setAttribute('aria-hidden', 'true');
const path = document.createElementNS(SVG_NS, 'path');
path.setAttribute('d', 'M1.5 1.5h3.5v3.5H1.5zM7 1.5h3.5v3.5H7zM1.5 7h3.5v3.5H1.5zM7 7h3.5v3.5H7z');
svg.append(path);
return svg;
}
function tierPaced(fn, hold = () => 0, pace = { at: -Infinity }, ms = 300) {
return ( i) => {
const now = tickNow();
const go = now - pace.at >= ms && now >= hold();
if (go) ((pace.at = now), fn(i));
return go;
};
}
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
// ---- src/premium-rows.js
const PREMIUM_WEARS = ['fn', 'mw', 'ft', 'ww', 'bs'];
const PREMIUM_BANDS = [
[0, 0.07],
[0.07, 0.15],
[0.15, 0.38],
[0.38, 0.45],
[0.45, 1],
];
const PREMIUM_ID = /^\d{1,20}$/;
const premiumCents = (v) => typeof v === 'number' && tapInteger(v) && v > 0 && v < 1e10;
const premiumWear = (f) =>
PREMIUM_WEARS[PREMIUM_BANDS.findIndex(([a, b]) => f >= a && (f < b || (f === b && b === 1)))] ?? '';
function premiumRow(entry) {
const [item, ref, id, price] = ['item', 'reference', 'id', 'price'].map((k) => tapOwn(entry, k));
const est = [tapOwn(ref, 'predicted_price'), tapOwn(ref, 'base_price')].find(premiumCents);
const [float, st = false, sv = false, seed] = ['float_value', 'is_stattrak', 'is_souvenir', 'paint_seed'].map((k) =>
tapOwn(item, k),
);
if (tapOwn(entry, 'type') !== 'buy_now' || !est || !premiumCents(price) || !tapMatches(PREMIUM_ID, id)) return null;
if (typeof float !== 'number' || typeof st !== 'boolean' || typeof sv !== 'boolean' || (st && sv)) return null;
if (!(typeof seed === 'number' && tapInteger(seed) && seed >= 0 && seed <= 1000)) return null;
let add = 0;
for (const k of ['stickers', 'keychains']) {
const list = tapOwn(item, k) ?? [];
if (!tapIsArray(list) || list.length > 16) return null;
for (let i = 0; i < list.length; i++) {
const p = tapOwn(tapOwn(tapOwn(list, i), 'reference'), 'price');
add += typeof p === 'number' && p > 0 && p < 1e10 ? p : 0;
}
}
const wear = premiumWear(float);
return add > est / 10 || !wear ? null : { id, r: price / est, cat: sv ? 'sv-' : st ? 'st-' : '', wear, seed };
}
function tierPlainUrl(def, paint, cat, wear) {
const [band, c] = [PREMIUM_BANDS[PREMIUM_WEARS.indexOf(wear)], ['', 'st-', 'sv-'].indexOf(cat) + 1];
if (!band || !c || !tierInt(def, 1, 65535) || !tierInt(paint, 1, 65535)) return null;
const q = `def_index=${def}&paint_index=${paint}&category=${c}&min_float=${band[0]}&max_float=${band[1]}`;
return `${TAP_ORIGIN}${TAP_SEARCH}?limit=50&sort_by=most_recent&type=buy_now&${q}`;
}
function tierPlainSeen(text, def, paint) {
let body;
try {
body = text.length <= TAP_MAX_CHARS ? gradeParse(text) : null;
} catch {}
const list = tapOwn(body, 'data');
if (!tapIsArray(list) || list.length > 50) return undefined;
const rows = [];
for (const e of list) {
const item = tapOwn(e, 'item');
if (tapOwn(item, 'def_index') !== def || tapOwn(item, 'paint_index') !== paint) return null;
const row = premiumRow(e);
if (row) rows.push(row);
}
return rows;
}
const PREMIUM_KEYS = [
'limit',
'cursor',
'paint_seed',
'def_index',
'paint_index',
'category',
'min_float',
'max_float',
'sort_by',
'type',
];
function premiumCells(search) {
const q = new URLSearchParams(search);
const cat = q.getAll('category');
const pre = cat.length > 1 ? null : (tapOwn({ '': '', 0: '', 1: '', 2: 'st-', 3: 'sv-' }, cat[0] ?? '') ?? null);
const [lo, hi] = ['min_float', 'max_float'].map((k, i) => (q.get(k) ? Number(q.get(k)) : i));
const band = PREMIUM_BANDS.findIndex(([a, b]) => lo >= a && hi <= b && lo < b);
return { pre, wear: band >= 0 ? PREMIUM_WEARS[band] : null };
}
function premiumBook(q) {
if ([...q.keys()].some((k) => !PREMIUM_KEYS.includes(k)) || (q.get('type') ?? 'buy_now') !== 'buy_now')
return 'filters';
const [lo, hi] = [q.get('min_float'), q.get('max_float')];
const whole = (lo ?? hi) === null || PREMIUM_BANDS.some(([a, b]) => Number(lo ?? 0) === a && Number(hi ?? 1) === b);
return whole ? '' : 'wear';
}
let premiumSeen = {};
function premiumGraded(it) {
const [k, arr] = [`${it.def},${it.paint}`, tapIsArray];
if (premiumSeen.set && premiumSeen.ix === it.ix && premiumSeen.k === k) return premiumSeen.set;
const set = new Set();
for (const s of it.ix.every)
if (arr(s?.items) && arr(s.levels) && s.items.some(( i) => arr(i) && `${i}` === k))
for (const l of s.levels) if (arr(l?.seeds)) for (const x of l.seeds) if (tapInteger(x)) set.add(x);
premiumSeen = { ix: it.ix, k, set };
return set;
}
// ---- src/premium-math.js
const PREMIUM_LANCZOS = [
0.99999999999980993, 676.5203681218851, -1259.1392167224028, 771.32342877765313, -176.61502916214059,
12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7,
];
const PREMIUM_HD_WEIGHTS = (new Map());
function premiumLnGamma(x) {
const s = PREMIUM_LANCZOS.reduce((sum, c, i) => sum + (i ? c / (x - 1 + i) : c), 0);
const t = x + 6.5;
return 0.5 * Math.log(2 * Math.PI) + (x - 0.5) * Math.log(t) - t + Math.log(s);
}
function premiumBetacf(a, b, x) {
const fix = ( v) => (Math.abs(v) < 1e-300 ? 1e-300 : v);
let c = 1;
let d = 1 / fix(1 - ((a + b) * x) / (a + 1));
let h = d;
for (let j = 2; j < 602; j++) {
const m = j >> 1;
const aa = ((j % 2 ? -(a + m) * (a + b + m) : m * (b - m)) * x) / ((a + j - 1) * (a + j));
d = 1 / fix(1 + aa * d);
c = fix(1 + aa / c);
h *= d * c;
if (j % 2 && Math.abs(d * c - 1) < 3e-14) break;
}
return h;
}
function premiumIbeta(a, b, x) {
if (x <= 0 || x >= 1) return x > 0 ? 1 : 0;
const ln = premiumLnGamma(a + b) - premiumLnGamma(a) - premiumLnGamma(b) + a * Math.log(x) + b * Math.log1p(-x);
if (x < (a + 1) / (a + b + 2)) return (Math.exp(ln) * premiumBetacf(a, b, x)) / a;
return 1 - (Math.exp(ln) * premiumBetacf(b, a, 1 - x)) / b;
}
function premiumHdWeights(n) {
const hit = PREMIUM_HD_WEIGHTS.get(n);
if (hit) return hit;
if (PREMIUM_HD_WEIGHTS.size >= 512) PREMIUM_HD_WEIGHTS.clear();
const cdf = Array.from({ length: n + 1 }, (_, i) => premiumIbeta((n + 1) / 4, (3 * (n + 1)) / 4, i / n));
const w = Float64Array.from({ length: n }, (_, i) => cdf[i + 1] - cdf[i]);
PREMIUM_HD_WEIGHTS.set(n, w);
return w;
}
function premiumHd25(xs) {
return premiumHdWeights(xs.length).reduce((q, w, i) => q + w * xs[i], 0);
}
function premiumTrim(rs) {
const xs = [...rs].sort((a, b) => a - b);
if (xs.length < 3) return xs;
const median = ( v) => (v[(v.length - 1) >> 1] + v[v.length >> 1]) / 2;
const logs = xs.map(Math.log);
const mid = median(logs);
const mad = median(logs.map((v) => Math.abs(v - mid)).sort((a, b) => a - b));
const floor = mid - Math.max(4 * 1.4826 * mad, Math.LN2);
return xs.filter((_, i) => logs[i] >= floor);
}
function premiumRandom(seed) {
let h = 0x811c9dc5;
for (let i = 0; i < seed.length; i++) h = Math.imul(h ^ seed.charCodeAt(i), 0x01000193);
return () => {
h = (h + 0x6d2b79f5) | 0;
let t = Math.imul(h ^ (h >>> 15), h | 1);
t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};
}
function premiumCell(t, p, seed) {
const rand = premiumRandom(seed);
const hd = ( xs) =>
premiumHd25(Float64Array.from(xs, () => xs[Math.floor(rand() * xs.length)]).sort());
const draws = Float64Array.from({ length: 1000 }, () => hd(t) / hd(p)).sort();
return { m: premiumHd25(t) / premiumHd25(p), lo: draws[49], hi: draws[949] };
}
// ---- src/premium-words.js
const PREMIUM_WHY = {
thin_tier: 'too few listings',
thin_plain: 'too few plain listings',
none: 'no plain sample',
stale: 'plain sample too old',
wide: 'too uncertain',
few: 'too few listings',
};
const PREMIUM_HIDE = {
repick: 'Pick this tier to compare',
loading: 'Still loading this tier',
more: 'Not all listings loaded; scroll to load the rest',
many: 'Too many listings to compare',
filters: 'Clear the other filters to compare',
wear: 'Set the float filter to one whole wear to compare',
category: 'Pick one category to compare',
signin: 'Signed out',
limit: "CSFloat's rate limit reached; try after it resets",
error: 'Listings did not load; pick the tier again',
filter: 'Listings did not load; pick the tier again',
stale: 'Plain listings too old; pick the tier again',
wide: 'Estimate too uncertain',
thin: 'Too few listings to compare',
off: 'Turn on Search every seed to compare',
};
function premiumTip(v) {
const [what, , from] = v.title.split('\n');
const rows = [];
for (const c of v.short ? [] : (v.cells ?? []))
rows[rows.length] = c.x
? { c: [c.w, `${c.nt} tier asks vs ${c.np} plain`, `${c.x}× plain`] }
: { c: [c.w, '', c.why], tone: 'dim' };
return { head: 'Tier premium', aside: v.chip, body: what, rows, source: from };
}
// ---- src/premium-line.js
const PREMIUM_AGE = 216e5;
function premiumName(def, paint) {
for (const [k, v] of gradeNamed())
if (v === `${def},${paint}`) {
const [name, phase] = k.split('\n');
return `${name.replace(/^★\s*/, '')}${phase ? ` (${phase})` : ''}`;
}
return '';
}
const premiumX = (m) => (m < 1.15 ? '1' : m < 9.95 ? m.toFixed(1) : `${Math.round(m)}`);
function premiumNone(why) {
const title = tapOwn(PREMIUM_HIDE, why) ?? PREMIUM_HIDE.thin;
return { text: '–', chip: '–', title, aria: `, premium hidden: ${title}`, none: true };
}
const premiumTierRs = (s, pre, w) =>
[...s.rows.values()].filter(( x) => x.cat === pre && x.wear === w).map((x) => x.r);
const premiumKey = (it, pre, w) => `${it.def}:${it.paint}:${pre}:${w}`;
function premiumLine(it, s, plain, memo, at = premiumCells(location.search)) {
const { pre, wear } = at;
if (pre === null) return premiumNone('category');
const cells = [];
for (const w of PREMIUM_WEARS) {
const t = premiumTrim(premiumTierRs(s, pre, w));
const got = plain.get(premiumKey(it, pre, w));
const q = got ? premiumTrim(got.rs) : [];
if (!t.length) continue;
const old = got && Date.now() - got.at > PREMIUM_AGE;
const why = t.length < 2 ? 'thin_tier' : !got ? 'none' : old ? 'stale' : q.length < 10 ? 'thin_plain' : '';
const few = !why && t.length < 5 ? t.map((x) => x / premiumHd25(q)) : [];
const k = `${s.n}|${s.ver}|${pre}${w}|${got?.at}`;
const c = why || few.length ? null : (memo.get(k) ?? premiumCell(t, q, `${it.key}|${s.sel.keys[0]}|${pre}${w}`));
if (c && !memo.has(k)) (memo.set(k, c), memo.size > 100 && memo.delete(memo.keys().next().value ?? ''));
const ok = !!c && c.hi / c.lo <= 1.6;
const r = why || (few.length ? 'few' : ok ? '' : 'wide');
cells.push([w.toUpperCase(), ok && c ? c.m : NaN, t.length, q.length, r, got?.at ?? 0, few]);
}
const shown = cells.filter(([, m]) => m > 0);
const head = shown.filter(([w]) => !wear || w === wear.toUpperCase());
const view = cells.map(([w, m, nt, np, r]) => ({
w,
x: m > 0 ? premiumX(m) : '',
nt,
np,
why: r ? PREMIUM_WHY[r] : '',
}));
const used = (shown.length ? shown : cells).map((c) => c[5]).filter((t) => t > 0);
const min = used.length ? Math.floor((Date.now() - Math.min(...used)) / 6e4) : -1;
const ago = min < 0 ? '' : min < 1 ? 'just now' : min < 60 ? `${min} min ago` : `${Math.floor(min / 60)} h ago`;
const fin = ( v) => ({ ...v, cells: view, ago });
if (!head.length) {
const here = cells.filter(([w]) => !wear || w === wear.toUpperCase());
const rs = here.map((c) => c[4]);
const few = here.filter((c) => c[4] === 'few');
if (!rs.includes('none') && few.length) return fin(premiumFew(few));
const why = rs.includes('none') ? s.stop || 'loading' : ['stale', 'wide'].find((r) => rs.includes(r));
return fin(premiumNone(why ?? 'thin'));
}
const ms = head.map(([, m]) => m);
const [lo, hi] = [premiumX(Math.min(...ms)), premiumX(Math.max(...ms))];
const range = `≈${lo}${lo === hi ? '' : `–${hi}`}×`;
const why = new Map();
for (const [w, , , , r] of cells) if (r) why.set(PREMIUM_WHY[r], [...(why.get(PREMIUM_WHY[r]) ?? []), w]);
const each = shown.map(([w, m, nt, np]) => `${w} ${premiumX(m)}× (${nt} tier asks vs ${np} plain)`);
return fin({
text: head[1] ? `${range} plain` : `${range} plain ${head[0][0]}`,
chip: range,
title: [
`The ask a quarter of the way up, low outliers dropped: tier vs plain ${premiumName(it.def, it.paint) || 'listings of this item'}, same wear and StatTrak.`,
`${[...each, ...[...why].map(([r, ws]) => `${ws.join(', ')}: ${r}`)].join(' · ')}.`,
`Plain: 50 most recent CSFloat listings per wear, sampled ${ago}.`,
].join('\n'),
aria: `, about ${lo}${lo === hi ? '' : ` to ${hi}`} times plain`,
none: false,
});
}
function premiumFew(few) {
const xs = few.flatMap((c) => c[6]);
const [lo, hi] = [premiumX(Math.min(...xs)), premiumX(Math.max(...xs))];
const chip = `${xs.length} listed · ${lo}${lo === hi ? '' : `–${hi}`}×`;
return {
text: `${chip} plain${few[1] ? '' : ` ${few[0][0]}`}`,
chip,
short: `${xs.length} listed`,
title: `Only ${xs.length} listed: the range of their prices against plain ones, not an estimate.`,
aria: `, ${xs.length} listed, ${lo}${lo === hi ? '' : ` to ${hi}`} times plain`,
none: false,
};
}
function premiumEl(cls, v, ...kids) {
const el = tierEl('span', cls, ...kids);
if (v.none) el.title = v.title;
else tipBox.tie(el, premiumTip(v));
el.toggleAttribute('data-none', v.none);
return el;
}
// ---- src/premium-sample.js
function createPremiumPlain(p, changed, html, attr) {
const plain = new Map();
gradeSide.got = (v) => {
try {
const t = { own: tapOwn, arr: tapIsArray, match: tapMatches };
if (tapOwn(v, 'tf') !== 'plain') return;
for (const [k, at, rs] of premiumPlainList(tapOwn(v, 'e'), t, Date.now()))
if (!((plain.get(k)?.at ?? -1) >= at)) plain.set(k, { rs, at });
changed();
} catch {}
};
function keepPlain(it, pre, w, got, seeds) {
const rs = got.filter((x) => x.cat === pre && x.wear === w && !seeds.has(x.seed));
const [k, at, r] = [premiumKey(it, pre, w), Date.now(), rs.map((x) => x.r).filter((x) => x > 0 && x < 1000)];
plain.delete(k);
plain.set(k, { rs: r, at });
gradeSide.post({ tf: 'plain', e: [k, at, r] });
if (plain.size > 60) plain.delete(plain.keys().next().value ?? '');
}
async function sample() {
const [my, { pre }] = [p(), premiumCells(location.search)];
if (!my?.whole || !my.count || my.asked || !html.hasAttribute(attr) || pre === null) return;
my.asked = true;
const seeds = premiumGraded(my.item);
const want = PREMIUM_WEARS.filter(
(w) =>
premiumTrim(premiumTierRs(my, pre, w)).length >= 2 &&
Date.now() - (plain.get(premiumKey(my.item, pre, w))?.at ?? 0) > PREMIUM_AGE,
);
my.pending = want.length;
await Promise.all(
want.map(async (w) => {
try {
if (p() !== my || !html.hasAttribute(attr)) return void (my.asked = false);
const got = await my.ask(my.item.def, my.item.paint, pre, w);
if (typeof got === 'string') return void (my.stop ||= got);
keepPlain(my.item, pre, w, got, seeds);
} finally {
my.pending--;
changed();
}
}),
);
}
return { plain, sample, keepPlain };
}
// ---- src/premium-books.js
function createPremiumBooks() {
const books = new Map();
let n = 0;
return {
next: () => ++n,
key: (it, seeds) => `${it.key}|${tierKeyOf(seeds)}`,
get: (k) => books.get(k),
put(k, rows, count) {
books.delete(k);
books.set(k, { rows, count, at: Date.now(), n: ++n });
if (books.size > 24) books.delete(books.keys().next().value ?? '');
},
};
}
// ---- src/tier-premium.js
function createPremium() {
const html = document.documentElement;
const attr = TF_SETTINGS.tierPremium.attr;
let changed = () => {};
const { plain, sample, keepPlain } = createPremiumPlain(
() => p,
() => changed(),
html,
attr,
);
const memo = new Map();
const books = createPremiumBooks();
const bookKey = books.key;
const keepBook = () => p?.whole && books.put(bookKey(p.item, p.sel.lv.seeds), new Map(p.rows), p.count);
let p = null;
return {
async compare(it, seeds, r, net, c) {
if (r.stop || !r.complete || !html.hasAttribute(attr)) return r.stop || 'many';
books.put(bookKey(it, seeds), new Map(r.rows.map((x) => [x.id, x])), r.n ?? 0);
const t = premiumTrim(r.rows.filter((x) => x.cat === c.pre && x.wear === c.wear).map((x) => x.r));
if (t.length >= 2 && Date.now() - (plain.get(premiumKey(it, c.pre, c.wear))?.at ?? 0) > PREMIUM_AGE) {
const got = await net.plains()(it.def, it.paint, c.pre, c.wear);
if (typeof got === 'string') return got;
keepPlain(it, c.pre, c.wear, got, premiumGraded(it));
}
changed();
return '';
},
on: (fn) => void (changed = fn),
pick(it, sel, r, net) {
p = {
item: it,
sel,
ask: net.plains(),
rows: new Map(),
n: books.next(),
ver: 0,
asked: false,
probe: !!r,
base: '',
count: r?.n ?? 0,
pending: 0,
};
for (const x of r?.rows ?? []) p.rows.set(x.id, x);
p.why = !r ? 'loading' : r.stop || (r.complete ? '' : 'many');
const b = r ? null : books.get(bookKey(it, sel.lv.seeds));
if (b && Date.now() - b.at < 6e5) [p.rows, p.count, p.why] = [new Map(b.rows), b.count, ''];
[p.whole, p.stop] = [!p.why, ''];
if (!b) keepBook();
sample().catch(() => {});
changed();
},
update(sel, r) {
if (!p || p.sel !== sel || r.stop) return;
p.rows = new Map(r.rows.map((x) => [x.id, x]));
p.count = r.n ?? p.count;
p.why = r.complete ? '' : 'many';
[p.whole, p.ver] = [!p.why, p.ver + 1];
keepBook();
sample().catch(() => {});
changed();
},
grid(listings, query, raw) {
const q = new TierParams(query);
if (!p || p.probe || p.sel.keys.length !== 1 || tierKey(query) !== p.sel.keys[0]) return;
if (Number(q.get('def_index')) !== p.item.def || Number(q.get('paint_index')) !== p.item.paint) return;
const more = q.has('cursor');
q.delete('cursor');
if (!more) [p.rows, p.base, p.count] = [new Map(), `${q}`, 0];
else if (p.base !== `${q}`) return;
for (const l of listings) if (l[6]) p.rows.set(l[6].id, l[6]);
p.count += raw;
p.why = premiumBook(q) || (raw < Number(q.get('limit') ?? 40) ? '' : 'more');
[p.ver, p.whole] = [p.ver + 1, !p.why];
keepBook();
if (p.whole) sample().catch(() => {});
changed();
},
at(it, seeds, cells) {
try {
if (!html.hasAttribute(attr)) return null;
const k = bookKey(it, seeds);
if (p?.whole && bookKey(p.item, p.sel.lv.seeds) === k) return premiumLine(it, p, plain, memo, cells);
const b = books.get(k);
if (!b || Date.now() - b.at > 6e5) return null;
const s = { rows: b.rows, n: b.n, ver: 0, sel: { keys: [tierKeyOf(seeds)] }, stop: '' };
return premiumLine(it, s, plain, memo, cells);
} catch {
return null;
}
},
book(on) {
return p && on === p.sel ? { count: p.count, whole: p.whole, why: p.why, sampling: p.pending > 0 } : null;
},
of(it, on) {
try {
if (!html.hasAttribute(attr)) return null;
if (!p || on !== p.sel) return premiumNone('repick');
if (!p.whole) return premiumNone(p.why || 'loading');
if (!p.asked) sample().catch(() => {});
return premiumLine(it, p, plain, memo);
} catch {
return null;
}
},
};
}
// ---- src/sell-words.js
const SELL_STOP = { error: 'Asks did not load', filter: "Seed filter ignored by CSFloat; asks can't be compared" };
function sellName(r) {
const words = r.text.toLowerCase().includes(r.fam.toLowerCase()) ? r.text : `${r.text} ${r.fam}`;
return r.side ? `${words} (${r.side.toLowerCase()})` : words;
}
const sellSource = (r) => (r.guide ? `Grade: ${r.title ?? 'a Steam community guide'}, by ${r.by}.` : 'Grade: CSFloat.');
function sellLevels(ix, grade, card) {
const [def, paint, seed] = grade.split(':').map(Number);
const wear = card.float ? premiumWear(card.float) : '';
const it = wear ? tierItem(ix, `?def_index=${def}&paint_index=${paint}`) : null;
const cells = { pre: card.sv ? 'sv-' : card.st ? 'st-' : '', wear };
const out = [];
for (const g of it?.guides ?? [])
for (const si of g.systems) {
const lv = tierLevels(ix.d.systems[si]).find((l) => l.seeds.includes(seed));
if (lv)
out.push({
it,
lv,
cells,
key: `${ (it).key}|${tierKeyOf(lv.seeds)}|${cells.pre}${wear}`,
});
}
return out;
}
function sellWords(ix, premium, x, light, asked, may) {
const [, , card, , grade, , , , charm] = x;
const icons = charm ? gradeCharmIcons(ix, charm, light) : grade ? gradeIcons(ix, grade, light, card?.name ?? '') : [];
const icon = icons[0];
if (!icon) return null;
const best = icon.rows[0];
const name = sellName(best);
const levels = !charm && grade && card && may ? sellLevels(ix, grade, card) : [];
const vals = levels.map((l) => ({ l, v: premium.at(l.it, l.lv.seeds, l.cells) }));
const got = vals.find((g) => g.v && !g.v.none);
const done = vals.find((g) => asked(g.l.key) !== undefined);
const state = done ? asked(done.l.key) : undefined;
const again = !!done && state === 'error';
const hide = state ? (tapOwn(SELL_STOP, state) ?? tapOwn(PREMIUM_HIDE, state)) : done?.v?.none ? done.v.title : '';
const why = done && state !== '…' ? hide : '';
const offer = got ? null : !done ? (levels.find((l) => l.lv.seeds.length <= TIER_C) ?? null) : again ? done.l : null;
const p = got?.v ? premiumTip(got.v) : null;
const tier = got && got.l.lv.label !== best.text ? `${got.l.lv.label}: ` : '';
const more = icons.length > 2 ? `${icons.length - 1} more grades` : icons.length > 1 ? '1 more grade' : '';
const ask = offer ? `Compare asks CSFloat for ${offer.lv.label}'s listings and plain ones: up to 3 requests.` : '';
const body = [p ? `${tier}${p.body}` : ask, more && `${more} on the gem's hover.`].filter(Boolean).join('\n');
const source = [sellSource(best), p?.source].filter(Boolean).join('\n');
const tip = { head: name, aside: p?.aside, body, rows: p?.rows, source };
const tail = got?.v
? ` · ${got.v.short ? '' : 'tier asks '}${got.v.text}`
: state === '…'
? ' · comparing…'
: why
? ` · ${why.charAt(0).toLowerCase()}${why.slice(1)}`
: '';
return {
text: `${name}${tail}`,
tip,
aria: `${name}${got?.v ? `, tier asks${got.v.aria}` : ''}`,
icon,
rows: icons.flatMap((i) => i.rows),
seed: Number((charm ?? grade ?? '').split(':').pop()),
unit: charm ? 'pattern' : 'seed',
offer,
again,
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
// ---- src/prices-slots.js
const priceAged = ( [at, r]) => {
if (r === null) return null;
const m = Math.floor((tickNow() - at) / 6e4);
const out = [];
for (let i = 0; i < 5; i++) {
const s = r[i];
out[i] = s === 0 ? 0 : [s[0], s[1], s[2] + m, s[3]];
}
return out;
};
const priceWhole = (v, hi) => tapInteger(v) && v >= 0 && v <= hi;
const priceRowOf = ( r) => {
if (r === null) return null;
if (!tapIsArray(r) || (r).length !== 5) return undefined;
const out = [];
for (let i = 0; i < 5; i++) {
const s = tapOwn(r, i);
if (s === 0) out[i] = 0;
else if (!tapIsArray(s) || s.length !== 4) return undefined;
else {
const [a, b, m, c] = [tapOwn(s, 0), tapOwn(s, 1), tapOwn(s, 2), tapOwn(s, 3)];
if (!(priceWhole(a, 2e8) && priceWhole(b, 2e8) && priceWhole(m, 1e7) && priceWhole(c, 1e7))) return undefined;
out[i] = [a, b, m, c];
}
}
return out;
};
// ---- src/prices.js
const PRICE_NAME = /^[^\p{Cc}\p{Cf}]{1,160}$/u;
const PRICE_KEEP = 9e5;
const PRICE_KEPT = 2000;
const PRICE_WAIT = 3e4;
const pricePromise = Promise;
const [priceGet, priceSet, priceDel, priceClear] = (['get', 'set', 'delete', 'clear']).map(
(k) => Map.prototype[k],
);
const priceSize = (Object.getOwnPropertyDescriptor(Map.prototype, 'size')?.get);
const priceIdle = gradeSide.post;
function createPrices() {
const html = document.documentElement;
const attr = TF_SETTINGS.prices.attr;
const get = (m, k) => tapApply(priceGet, m, [k]);
const set = (m, k, v) => void tapApply(priceSet, m, [k, v]);
const del = ( m, k) => void tapApply(priceDel, m, [k]);
const kept = new Map();
const waits = new Map();
const sent = new Map();
let queue = [];
let [id, armed, tries, state, told, stale] = [0, false, 0, 0, () => {}, 0];
const mark = ( s) => s !== state && ((state = s), told());
const room = priceWindow(tickNow);
const settle = (key, r, keep) => {
const rs = get(waits, key);
del(waits, key);
const hit = ([tickNow(), r]);
if (keep && tapApply(priceSize, kept, []) >= PRICE_KEPT) tapApply(priceClear, kept, []);
if (keep) set(kept, key, hit);
for (let i = 0; rs && i < rs.length; i++) rs[i](priceAged(hit));
};
const take = (v) => {
const at = tapOwn(v, 'id');
const keys = tapInteger(at) ? get(sent, at) : undefined;
if (!keys) return;
del(sent, at);
const r = tapOwn(v, 'r');
const whole = tapIsArray(r) && r.length === keys.length;
mark(whole ? 1 : -1);
for (let i = 0; i < keys.length; i++) {
const row = whole ? priceRowOf(tapOwn(r, i)) : undefined;
settle(keys[i], row ?? null, row !== undefined && at > stale);
}
};
const renew = () => (tapApply(priceClear, kept, []), (stale = id), told());
const prev = gradeSide.got;
gradeSide.got = (v) => {
try {
const tf = tapOwn(v, 'tf');
if (tf === 'price') take(v);
else if (tf === 'price-new') renew();
else prev(v);
} catch {}
};
function flush() {
armed = false;
if (gradeSide.post === priceIdle && ++tries <= 25) return void ((armed = true), tickAfter(flush, 200));
const all = queue;
queue = [];
for (let i = 0; i < all.length; i += PRICE_CAP.pairs) {
const [keys, q] = [ ([]), ([])];
for (let j = i; j < all.length && j < i + PRICE_CAP.pairs; j++) {
keys[keys.length] = all[j][2];
q[q.length] = [all[j][0], all[j][1]];
}
if (gradeSide.post === priceIdle || !room(keys.length)) {
mark(-1);
for (let j = 0; j < keys.length; j++) settle(keys[j], null, false);
continue;
}
const at = ++id;
set(sent, at, keys);
gradeSide.post({ tf: 'price', id: at, q });
tickAfter(() => take({ id: at, r: null }), PRICE_WAIT);
}
}
function lookup(name, phase = null) {
return new pricePromise((resolve) => {
if (!html.hasAttribute(attr)) return void (tapApply(priceClear, kept, []), resolve(null));
if (!tapMatches(PRICE_NAME, name) || !(phase === null || tapMatches(TAP_PHASE, phase))) return resolve(null);
const key = phase === null ? name : `${name} - ${phase}`;
const hit = get(kept, key);
if (hit && tickNow() - hit[0] < PRICE_KEEP) return resolve(priceAged(hit));
const rs = get(waits, key);
if (rs) return void (rs[rs.length] = resolve);
set(waits, key, [resolve]);
queue[queue.length] = [name, phase, key];
if (armed) return;
armed = true;
tickAfter(flush, 20);
});
}
return { lookup, answers: () => state === 1, watch: ( f) => void (told = f) };
}
// ---- src/prices-money.js
const PRICE_CODE = /^[a-z][a-z_]{2,9}$/;
const PRICE_PICK = /^"?([A-Za-z]{3})"?$/;
const PRICE_SHOWN = /^(\D{0,8}?)(\d{1,3}(?:,\d{3})*)\.(\d\d)(\D{0,8})$/;
const [priceCeil, priceRound, priceFloor, priceKeys, priceFinite, PriceMap] = [
Math.ceil,
Math.round,
Math.floor,
Object.keys,
Number.isFinite,
Map,
];
const [priceLower, priceTrim, priceEach] = [String.prototype.toLowerCase, String.prototype.trim, Map.prototype.forEach];
const pricePick = (() => {
try {
return globalThis.Storage.prototype.getItem.bind(globalThis.localStorage, 'selected_currency');
} catch {
return null;
}
})();
const priceCurrency = { rates: null, place: '', fmt: null };
function priceMeta(path, body) {
if (path === '/api/v1/meta/exchange-rates') {
const data = tapOwn(body, 'data');
if (!data || typeof data !== 'object') return;
const [rates, keys] = [new PriceMap(), priceKeys(data)];
for (let i = 0; i < keys.length && i < 400; i++) {
const v = tapOwn(data, keys[i]);
if (tapMatches(PRICE_CODE, keys[i]) && typeof v === 'number' && priceFinite(v) && v > 0 && v < 1e7)
tapApply(priceSet, rates, [keys[i], v]);
}
priceCurrency.rates = rates;
} else if (path === '/api/v1/meta/location') {
const code = tapOwn(tapOwn(body, 'inferred_location'), 'currency');
if (tapMatches(/^[A-Z]{3}$/, code)) priceCurrency.place = tapApply(priceLower, code, []);
}
}
function pricePicked() {
try {
const v = pricePick?.();
const m = typeof v === 'string' ? tapApply(tapExec, PRICE_PICK, [v]) : null;
return m ? tapApply(priceLower, m[1], []) : '';
} catch {
return '';
}
}
function priceDrawn(m) {
const drawn = `${m[2]}${m[3]}`;
let shown = 0;
for (let i = 0; i < drawn.length; i++) if (drawn[i] !== ',') shown = shown * 10 + +drawn[i];
return shown;
}
function priceDraws(cents, text) {
const f = priceCurrency.fmt;
if (!f || typeof text !== 'string' || text.length > 40) return false;
const m = tapApply(tapExec, PRICE_SHOWN, [tapApply(priceTrim, text, [])]);
return !!m && m[1] === f.pre && m[4] === f.post && priceCeil(cents * f.rate) === priceDrawn(m);
}
function priceSeen(cents, text, exact = false) {
if (
!( (tapInteger)(cents)) ||
cents <= 0 ||
typeof text !== 'string' ||
text.length > 40
)
return false;
const m = tapApply(tapExec, PRICE_SHOWN, [tapApply(priceTrim, text, [])]);
if (!m) return false;
const shown = priceDrawn(m);
const fits = ( rate) => priceCeil(cents * rate) === shown;
const [had, rates] = [priceCurrency.fmt, priceCurrency.rates];
if (had && fits(had.rate) && had.pre === m[1] && had.post === m[4]) return true;
const small = cents < 1000;
if (small && !exact) return false;
let rate = NaN;
for (const code of [pricePicked(), priceCurrency.place]) {
const r = code && rates ? tapApply(priceGet, rates, [code]) : undefined;
if (!(rate > 0) && typeof r === 'number' && fits(r)) rate = r;
}
if (!(rate > 0) && fits(1)) rate = 1;
if (!(rate > 0) && rates && !small) {
let [one, many] = [NaN, false];
tapApply(priceEach, rates, [
( r) => fits(r) && (one > 0 && one !== r ? (many = true) : (one = r)),
]);
if (!many) rate = one;
}
if (!(rate > 0)) return false;
priceCurrency.fmt = { rate, pre: m[1], post: m[4] };
return true;
}
function priceNumber(cents, round = false) {
if (!(typeof cents === 'number' && priceFinite(cents) && cents >= 0 && cents <= 2e8)) return '';
const f = priceCurrency.fmt;
const local = f ? priceCeil(cents * f.rate) : priceRound(cents);
const whole = round && local >= 1000;
const units = whole ? priceRound(local / 100) : priceFloor(local / 100);
const digits = `${units}`;
let out = '';
for (let i = 0; i < digits.length; i++) out += (i && (digits.length - i) % 3 === 0 ? ',' : '') + digits[i];
const frac = local - units * 100;
return whole ? out : `${out}.${frac < 10 ? '0' : ''}${frac}`;
}
function priceUnit() {
const f = priceCurrency.fmt;
return f ? tapApply(priceTrim, `${f.pre}${f.post}`, []) || 'US$' : 'US$';
}
// ---- src/prices-view.js
const PRICE_CREDIT = Object.freeze({ text: 'Prices by OpenSkin', href: 'https://openskin.dev' });
const PRICE_STALE = 120;
const PRICE_GONE = 2880;
const PRICE_MARKETS = Object.freeze([
Object.freeze(['buff', 'Buff', 'https://buff.163.com/market/csgo#tab=selling&page_num=1&search=']),
Object.freeze(['youpin', 'YouPin', 'https://www.youpin898.com/market/goods-list?listType=10&gameId=730&keyWords=']),
Object.freeze(['steam', 'Steam', 'https://steamcommunity.com/market/listings/730/']),
Object.freeze(['skinport', 'Skinport', 'https://skinport.com/market?search=']),
Object.freeze(['csfloat', 'CSFloat', 'https://csfloat.com/search?market_hash_name=']),
]);
const PRICE_HOSTS = /^(buff\.163\.com|(www\.)?youpin898\.com|steamcommunity\.com|skinport\.com|csfloat\.com)$/;
const PRICE_REF = /^(lowest(?=-ask$)|buff|youpin|steam|skinport|csfloat)-(ask|bid)$/;
const [priceEncode, PriceURL, priceFixed] = [encodeURIComponent, URL, Number.prototype.toFixed];
const [priceHost, priceProtocol] = ['hostname', 'protocol'].map(
(k) => (Reflect.getOwnPropertyDescriptor(URL.prototype, k)?.get),
);
const priceOk = (v, hi) => typeof v === 'number' && priceFinite(v) && v >= 0 && v <= hi;
function priceLink( template, name) {
try {
if (!tapMatches(PRICE_NAME, name)) return null;
const href = `${template}${priceEncode(name)}`;
const u = new PriceURL(href);
return tapApply(priceProtocol, u, []) === 'https:' && tapMatches(PRICE_HOSTS, tapApply(priceHost, u, []))
? href
: null;
} catch {
return null;
}
}
function priceRows(slots, listingCents, name, phase = null) {
const rows = [];
if (!tapIsArray(slots) || slots.length !== 5) return rows;
const own = priceOk(listingCents, 2e10) && listingCents > 0 ? listingCents : 0;
for (let i = 0; i < 5; i++) {
const s = tapOwn(slots, i);
if (!tapIsArray(s) || s.length !== 4) continue;
const [ask, bid, age, count] = [tapOwn(s, 0), tapOwn(s, 1), tapOwn(s, 2), tapOwn(s, 3)];
if (!(priceOk(ask, 2e8) && priceOk(bid, 2e8) && priceOk(age, 1e7) && priceOk(count, 1e7))) continue;
if ((ask <= 0 && bid <= 0) || age > PRICE_GONE) continue;
const [key, label, template] = PRICE_MARKETS[i];
rows[rows.length] = {
key,
name: label,
ask: ask > 0 ? ask : null,
bid: bid > 0 ? bid : null,
count: count > 0 ? count : null,
age,
stale: age > PRICE_STALE,
delta: own && ask > 0 ? ((own - ask) / ask) * 100 : null,
lowest: false,
url: priceLink(template, name),
};
}
let low = null;
for (let i = 0; i < rows.length; i++)
if (rows[i].ask !== null && !(low && (low.ask) <= (rows[i].ask)))
low = rows[i];
if (low) low.lowest = true;
return rows;
}
function priceMoney(cents, whole = false) {
const n = priceNumber(cents, whole);
const f = priceCurrency.fmt;
return !n ? '' : f ? `${f.pre}${n}${f.post}` : `US$ ${n}`;
}
function priceDelta(pct, short = false) {
if (!(typeof pct === 'number' && priceFinite(pct) && pct > -1e6 && pct < 1e6)) return '—';
if (pct >= 999.5) return document.documentElement.hasAttribute(TF_SETTINGS.priceGapHide.attr) ? '' : '>999%';
const abs = pct < 0 ? -pct : pct;
const [digits, cap] = short && abs >= 9.95 ? [0, 99] : [1, 99.9];
const text = tapApply(priceFixed, pct < 0 && abs > cap ? cap : abs, [digits]);
const zero = text === '0' || text === '0.0';
return `${zero ? '' : pct < 0 ? '−' : '+'}${text}%`;
}
function priceAge(min) {
if (!priceOk(min, 1e7)) return '';
if (min < 1) return '<1 min';
return min < 60 ? `${priceFloor(min)} min` : min < 1440 ? `${priceFloor(min / 60)} h` : `${priceFloor(min / 1440)} d`;
}
function priceRefRow(rows, listingCents) {
const ref = document.documentElement.getAttribute(TF_SETTINGS.priceRef.attr) ?? TF_SETTINGS.priceRef.default;
const m = tapMatches(PRICE_REF, ref) ? tapApply(tapExec, PRICE_REF, [ref]) : null;
if (!m || !tapIsArray(rows)) return null;
for (let i = 0; i < rows.length; i++) {
const row = rows[i];
if (m[1] === 'lowest' ? !row?.lowest : row?.key !== m[1]) continue;
const side = m[2] === 'bid' ? 'bid' : 'ask';
const cents = side === 'bid' ? row.bid : row.ask;
if (!priceOk(cents, 2e8) || cents <= 0) return null;
const own = priceOk(listingCents, 2e10) && listingCents > 0 ? listingCents : 0;
return { row, side, cents, delta: own ? ((own - cents) / cents) * 100 : null };
}
return null;
}
function priceEl(tag, cls, text = '', into) {
const el = document.createElement(tag);
el.className = cls;
if (text) el.textContent = text;
into?.append(el);
return el;
}
// ---- src/prices-fees.js
const PRICE_FEES_AT = '30 Sep 2026';
const PRICE_FEES = Object.freeze({
buff: Object.freeze({
bp: 150,
hi: 0,
hiBp: 0,
note: '1.5% fee',
fee: 'Buff163 keeps 1.5% of a sale (2.5% until 14 Apr 2026).',
src: 'buff.163.com/news/87397, 14 Apr 2026',
sure: 'high',
not: 'the 1% cash-out (Alipay, WeChat), CNY conversion',
}),
youpin: Object.freeze({
bp: 0,
hi: 0,
hiBp: 0,
note: '0% fee',
fee: 'YouPin charges no sale fee on CS2 items, per its fee page; third parties say 1–2%.',
src: "YouPin's fee standard, youpin898.com, undated, read 30 Sep 2026",
sure: 'medium',
not: 'the 1% cash-out (at least ¥2), CNY conversion',
}),
steam: Object.freeze({
bp: 0,
hi: 0,
hiBp: 0,
note: '15% fee',
fee: 'Steam keeps 15% inside the buyer price: 5% Steam and 10% CS2, each at least $0.01. Paid in Steam credit, not cash.',
src: "Steam's fee rule as public fee calculators mirror it, unchanged in 2025–26",
sure: 'high',
not: '',
}),
skinport: Object.freeze({
bp: 800,
hi: 100000,
hiBp: 600,
note: '8% fee',
fee: 'Skinport keeps 8% of a sale (12% until 17 Jul 2025), 6% from $1,000.',
src: 'skinport.com blog, 18 Jul 2025; the 6% tier, 29 Aug 2025',
sure: 'high',
not: 'the 2% on private sales',
}),
csfloat: Object.freeze({
bp: 200,
hi: 0,
hiBp: 0,
note: '2% fee',
fee: 'CSFloat keeps 2% of a sale (since 22 Aug 2021).',
src: 'blog.csfloat.com, 22 Aug 2021',
sure: 'high; its cash-out fees, 0.5–2.5% by sales volume, medium',
not: 'cash-out fees, volume tiers',
}),
});
const priceFeeOf = (key) => (tapHasOwn(PRICE_FEES, key) ? PRICE_FEES[key] : null);
const priceCents = (v) => tapInteger(v) && (v) >= 1 && (v) <= 2e8;
function priceNetOf(key, ask) {
const f = priceFeeOf(key);
if (!f || !priceCents(ask)) return null;
if (key === 'steam') {
const buyer = ( r) => r + (priceFloor(r / 20) || 1) + (priceFloor(r / 10) || 1);
let [lo, hi] = [0, ask];
while (lo < hi) {
const m = priceCeil((lo + hi) / 2);
if (buyer(m) <= ask) lo = m;
else hi = m - 1;
}
return lo;
}
return priceRound((ask * (10000 - (f.hi && ask >= f.hi ? f.hiBp : f.bp))) / 10000);
}
function priceFeeNote(key, ask) {
const f = priceFeeOf(key);
if (!f) return null;
const tier = f.hi > 0 && priceCents(ask) && ask >= f.hi;
const not = f.not ? `\nNot counted: ${f.not}.` : '';
const note = tier ? `${f.hiBp / 100}% fee` : f.note;
const source = `Source: ${f.src}. Confidence: ${f.sure}.\nFees as of ${PRICE_FEES_AT}.`;
return { note, credit: key === 'steam', tip: { head: note, body: `${f.fee}${not}`, source } };
}
// ---- src/prices-net.js
const NET_WORDS = Object.freeze({
group: 'Market prices as',
ask: 'Ask',
net: 'Net',
askTip: "Each market's lowest ask; each % is this listing against it.",
netTip: `What a seller keeps of each market's lowest ask after its sale fee. Each % is this listing against that: + costs more than you would keep reselling there (a loss on a flip), − costs less (a gain, in green). Fees as of ${PRICE_FEES_AT}.`,
credit: 'Steam credit',
});
function createPriceNet() {
const html = document.documentElement;
let on = false;
let box = null;
const show = () => {
if (!box) return;
box.classList.toggle('tf-pw-net', on);
const bs = box.querySelectorAll('.tf-pw-mode > button');
for (let i = 0; i < bs.length; i++) bs[i].setAttribute('aria-pressed', i === 1 ? `${on}` : `${!on}`);
};
const prev = gradeSide.got;
gradeSide.got = (v) => {
try {
if (tapOwn(v, 'tf') !== 'net') return prev(v);
on = tapOwn(v, 'on') === true;
show();
} catch {}
};
const word = ( group, text, tip, want = false) => {
const b = (priceEl('button', 'tf-pw-word', text, group));
b.type = 'button';
tipBox.tie(b, { head: text, body: tip, side: '.tf-pw' });
const press = ( e) => {
if (!e.isTrusted || on === want) return;
on = want;
show();
gradeSide.post({ tf: 'net', on });
};
tapApply(tapListen, b, ['click', press]);
};
return {
wanted: () => html.hasAttribute(TF_SETTINGS.priceNet.attr),
head(section, head) {
box = section;
const group = priceEl('span', 'tf-pw-mode', undefined, head);
group.setAttribute('role', 'group');
group.ariaLabel = NET_WORDS.group;
word(group, NET_WORDS.ask, NET_WORDS.askTip);
word(group, NET_WORDS.net, NET_WORDS.netTip, true);
show();
},
row(row, key, ask, cents) {
const a = row.querySelector(':scope > .tf-pw-top > .tf-pw-ask');
const d = row.querySelector(':scope > .tf-pw-top > .tf-pw-delta');
const b = row.querySelector(':scope > .tf-pw-sub > .tf-pw-bit');
const fee = priceFeeNote(key, ask);
if (!a || !d || !b || !fee) return;
const net = priceNetOf(key, ask);
const own = typeof cents === 'number' && priceFinite(cents) && cents > 0 ? cents : 0;
(a.classList.add('tf-pw-a'), d.classList.add('tf-pw-a'), b.classList.add('tf-pw-a'));
a.after(priceEl('span', 'tf-pw-ask tf-pw-n', net !== null ? priceNumber(net) : ''));
const pct = net && own ? priceDelta(((own - net) / net) * 100) : '';
const nd = priceEl('span', 'tf-pw-delta tf-pw-n', pct);
d.after((nd.toggleAttribute('data-gain', pct[0] === '−'), nd));
const note = priceEl('span', 'tf-pw-bit tf-pw-n', fee.note);
tipBox.tie(note, fee.tip);
b.after(note);
if (!fee.credit) return;
const sep = priceEl('span', 'tf-pw-sep tf-pw-n');
sep.ariaHidden = 'true';
const credit = priceEl('span', 'tf-pw-bit tf-pw-n', NET_WORDS.credit);
tipBox.tie(credit, fee.tip);
note.after(sep, credit);
},
};
}
// ---- src/prices-goods.js
const GOODS_ITEM = /^\/item\/(\d{1,24})$/;
const [goodsDecode, goodsSlice, goodsEnds, goodsTrim] = [
decodeURIComponent,
String.prototype.slice,
String.prototype.endsWith,
String.prototype.trim,
];
function createPriceGoods() {
const html = document.documentElement;
const attr = TF_SETTINGS.pricesGoods.attr;
const on = () => html.hasAttribute(attr);
const names = new Map();
const ids = new Map();
const subs = [];
function nameOf(card) {
if (card.querySelector(TF_SELECTORS.inspectLink)) return null;
const pic = card.querySelector(TF_SELECTORS.itemImg)?.getAttribute('src');
const title = card.querySelector(TF_SELECTORS.itemName)?.textContent;
const short = typeof title === 'string' ? tapApply(goodsTrim, title, []) : '';
if (typeof pic !== 'string' || pic.length > 2000 || !short) return null;
if (tapApply(goodsSlice, pic, [0, CAT_IMAGE_HOST.length]) !== CAT_IMAGE_HOST) return null;
let name;
try {
name = goodsDecode(tapApply(goodsSlice, pic, [CAT_IMAGE_HOST.length]));
} catch {
return null;
}
const ok = tapMatches(TAP_HASH_NAME, name) && tapMatches(PRICE_NAME, name) && tapApply(goodsEnds, name, [short]);
return ok && names.has(name) ? name : null;
}
function confirm() {
const rows = [];
for (const card of document.querySelectorAll(TF_SELECTORS.card)) {
const name = card.querySelector(TF_SELECTORS.auction) ? null : nameOf(card);
const text = name && card.querySelector(TF_SELECTORS.price)?.textContent;
const sane = typeof text === 'string' && text.length <= 40;
const m = sane ? tapApply(tapExec, PRICE_SHOWN, [tapApply(goodsTrim, text, [])]) : null;
const cents = [...(names.get( (name))?.values() ?? [])];
if (m) rows.push({ cents, shown: priceDrawn(m), m });
}
if (rows.length < 3 || rows.some((r) => r.m[1] !== rows[0].m[1] || r.m[4] !== rows[0].m[4])) return false;
const rates = priceCurrency.rates;
const asked = [pricePicked(), priceCurrency.place].map((c) => (c && rates ? tapApply(priceGet, rates, [c]) : 0));
const fit = ( r) =>
rows.every((x) => x.cents.some((c) => c !== null && priceCeil(c * r) === x.shown));
const ok = new Set([...asked, 1].filter((r) => typeof r === 'number' && r > 0 && fit(r)));
if (ok.size !== 1) return false;
priceCurrency.fmt = { rate: ([...ok][0]), pre: rows[0].m[1], post: rows[0].m[4] };
return true;
}
let pass = (null);
const tell = ( fed) => {
for (const f of subs)
try {
f(fed);
} catch {}
};
return {
attr,
card(card) {
const name = on() ? nameOf(card) : null;
if (name === null) return null;
if (!priceCurrency.fmt && (shotPass === null || shotPass !== pass) && ((pass = shotPass), confirm()))
tickAfter(() => tell([]), 0);
const price = card.querySelector(TF_SELECTORS.price);
if (price) cardInside(price, { subtree: true, characterData: true });
const text = price?.textContent;
const all = new Set( (names.get(name)).values());
all.delete(null);
if (all.size === 1 && !card.querySelector(TF_SELECTORS.auction)) priceSeen(all.values().next().value, text, true);
const fits = [...all].filter((c) => priceDraws( (c), text));
return [name, fits.length === 1 ? (fits[0]) : null, null];
},
window(card) {
const m = on() ? tapApply(tapExec, GOODS_ITEM, [location.pathname]) : null;
const kept = m ? ids.get(m[1]) : undefined;
if (!kept || nameOf(card) !== kept[0]) return null;
const text = card.querySelector(TF_SELECTORS.price)?.textContent;
if (kept[1] !== null && !card.querySelector(TF_SELECTORS.auction)) priceSeen(kept[1], text, true);
return [kept[0], kept[1] !== null && priceDraws(kept[1], text) ? kept[1] : null, null];
},
feed(listings) {
if (!on() || !html.hasAttribute(TF_SETTINGS.prices.attr)) return;
const fed = new Set();
for (const l of listings) {
const [key, name, cents, id] = [l[0], l[7], l[5], l[10]];
if (!tapMatches(TAP_GOODS_KEY, key) || typeof name !== 'string' || id === null) continue;
let byKey = names.get(name);
if (!byKey) (names.set(name, (byKey = new Map())), shotBounded(names));
byKey.set(key, cents);
shotBounded(byKey);
ids.set(id, [name, cents]);
shotBounded(ids);
fed.add(name);
}
if (fed.size) tell([...fed]);
},
watch: (f) => void subs.push(f),
};
}
// ---- src/prices-panel-parts.js
const PANEL_WORDS = Object.freeze({
title: 'Market prices',
me: 'This listing',
noBid: 'No bid',
low: 'Lowest ask',
bid: 'Auction: the current bid is not compared.',
});
const PANEL_WEAR = Object.freeze({
'Factory New': 'FN',
'Minimal Wear': 'MW',
'Field-Tested': 'FT',
'Well-Worn': 'WW',
'Battle-Scarred': 'BS',
});
const panelQuote = ( s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const PANEL_ORDER = Object.freeze(PRICE_MARKETS.map((m) => m[1]));
const PANEL_LINK = Object.freeze(
PRICE_MARKETS.map((m) => new RegExp(`^${panelQuote(m[2])}(?:[\\w.!~*'()-]|%[0-9A-F]{2})+$`)),
);
const PANEL_DOPPLER = /\| (?:Gamma )?Doppler \(/;
const PANEL_SVG = 'http://www.w3.org/2000/svg';
const panelFinite = Number.isFinite;
const panelCount = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format;
const panelNum = (v) => (typeof v === 'number' && panelFinite(v) && v >= 0 ? v : null);
function panelPush(xs, v) {
const slot = { __proto__: null, value: v, writable: true, enumerable: true, configurable: true };
tapDefine(xs, xs.length, (slot));
}
function panelMarket(name) {
for (let i = 0; i < PANEL_ORDER.length; i++) if (PANEL_ORDER[i] === name) return i;
return -1;
}
function panelList(xs, last) {
let s = '';
for (let i = 0; i < xs.length; i++) s += `${i === 0 ? '' : i === xs.length - 1 ? ` ${last} ` : ', '}${xs[i]}`;
return s;
}
function panelIcon(clock) {
const svg = document.createElementNS(PANEL_SVG, 'svg');
svg.setAttribute('viewBox', clock ? '0 0 10 10' : '0 0 11 11');
svg.setAttribute('aria-hidden', 'true');
const shapes = clock
? [
['circle', 'cx', '5', 'cy', '5', 'r', '4.1'],
['path', 'd', 'M5 2.8V5l1.5 1'],
]
: [['path', 'd', 'M4 1.5h5.5V7M9.3 1.7L1.5 9.5']];
for (let n = 0; n < shapes.length; n++) {
const kv = shapes[n];
const s = svg.appendChild(document.createElementNS(PANEL_SVG, kv[0]));
for (let i = 1; i < kv.length; i += 2) s.setAttribute(kv[i], kv[i + 1]);
}
return svg;
}
function panelLink(url, market, cls, label) {
if (market ? !tapMatches(market, url) : url !== PRICE_CREDIT.href) return null;
const a = (priceEl('a', cls));
a.href = (url);
a.target = '_blank';
a.rel = 'noopener noreferrer';
a.referrerPolicy = 'no-referrer';
a.ariaLabel = label;
return a;
}
// ---- src/buy-orders-line.js
const ORDER_TOP = 'Top buy order';
const ORDER_NONE = 'No buy orders';
const ORDER_LIMIT = 10;
const orderJoin = (p) => p.map((s) => s.replaceAll(' ', '\u00a0')).join(' · ');
function orderWords(answer, wait, pop, ref) {
if (!answer) return wait ? orderJoin([`${ORDER_TOP} …`]) : '';
if (!answer.rows) return pop ? orderJoin([ORDER_NONE]) : '';
const pct = ref ? Math.round((answer.top / ref.cents) * 100) : 0;
const of = ref ? [`${pct < 1 ? '<1' : panelCount(pct)}% of ${ref.row.name}${ref.side === 'bid' ? ' bid' : ''}`] : [];
const n = `${panelCount(answer.qty)}${answer.rows >= ORDER_LIMIT ? '+' : ''}`;
return orderJoin([`${ORDER_TOP} ${priceMoney(answer.top)}`, ...of, `${n} wanted`]);
}
function orderPut(box, words, pop) {
const had = box.querySelector('.tf-bo');
if ((had ? had.textContent : '') === words) return box;
had?.remove();
const foot = box.querySelector(pop ? '.tf-pp-ft' : '.tf-pw-foot');
if (words && foot)
foot.before(pop ? priceEl('div', 'tf-pp-q tf-bo', words) : priceEl('p', 'tf-pw-note tf-bo', words));
return box;
}
// ---- src/buy-orders-guard.js
const [ORDER_MINUTE, ORDER_TEN, ORDER_HOUR] = [3, 10, 30];
const ORDER_RESERVE = 10;
const ORDER_WAIT = 65e3;
const ORDER_SPAN = 120;
const orderShown = (
Reflect.getOwnPropertyDescriptor(Document.prototype, 'visibilityState')?.get
);
const orderSound = (r) => !!r.limit && r.remaining !== null && r.remaining <= r.limit && !!r.reset;
function createOrderGuard(running) {
const times = Array(ORDER_HOUR).fill(-Infinity);
let [stopped, hold, sent] = [false, 0, 0];
let last = null;
return {
may(now, busy) {
const n = ( ms) => {
let c = 0;
for (let i = 0; i < ORDER_HOUR; i++) if (times[i] > now - ms) c++;
return c;
};
if (stopped || busy || now < hold || running() || tapApply(orderShown, document, []) === 'hidden') return false;
return tierSignedIn() && n(6e4) < ORDER_MINUTE && n(6e5) < ORDER_TEN && n(36e5) < ORDER_HOUR;
},
took(now) {
times[sent++ % ORDER_HOUR] = now;
},
seen(r) {
if (r.status === 401 || r.status === 403 || r.status === 429) stopped = true;
if (!((r.status >= 200 && r.status < 300) || r.status === 429) || !orderSound(r)) return;
const s = tickNow() / 1e3;
const reset = Math.min(Math.max(r.reset, s - ORDER_SPAN), s + ORDER_SPAN);
if (last && (reset < last[0] || (reset === last[0] && r.remaining >= last[1]))) return;
last = [reset, r.remaining];
if (r.remaining < ORDER_RESERVE) hold = tickNow() + ORDER_WAIT;
},
stop() {
stopped = true;
},
};
}
// ---- src/buy-orders.js
const ORDER_KEEP = 3e5;
const ORDER_KEYS = 300;
const ORDER_HOLD = 300;
const ORDER_ACCEPT = 'application/json, text/plain, */*';
function orderKey(l) {
return l[11] === true && l[7] !== null ? `n:${l[7]}` : l[10] && `l:${l[10]}`;
}
function createBuyOrders(running) {
const html = document.documentElement;
const attrs = [TF_SETTINGS.prices.attr, TF_SETTINGS.buyOrders.attr];
const on = () => html.hasAttribute(attrs[0]) && html.hasAttribute(attrs[1]);
const guard = createOrderGuard(running);
const byId = createShotMatch(10, Object.is);
const keys = (new Map());
const kept = (new Map());
const subs = ([]);
let out = '';
const told = () => {
for (const f of subs)
try {
f();
} catch {}
};
function of(card) {
const id = card ? byId.idFor(byId.keyOf(card)) : null;
const key = id === null ? undefined : keys.get(id);
return key === undefined ? null : [ (id), key];
}
function held(k) {
for (const key of [k[1], `l:${k[0]}`]) {
const v = kept.get(key);
if (v && tickNow() - v[0] < ORDER_KEEP) return v;
}
return null;
}
const got = ( k) => held(k)?.[1] ?? null;
function ask(k) {
const path = `/api/v1/listings/${k[0]}/buy-orders`;
const now = tickNow();
if (!on() || !tapMatches(TAP_ORDERS, path) || !guard.may(now, out !== '')) return;
guard.took(now);
const xhr = new XMLHttpRequest();
xhr.open('GET', `${TAP_ORIGIN}${path}?limit=10`);
xhr.setRequestHeader('Accept', ORDER_ACCEPT);
xhr.addEventListener('loadend', () => {
const r = tapRate(xhr);
tickAfter(() => {
out = '';
if (!(r.status >= 200 && r.status < 300 && orderSound(r)) || !got(k)) guard.stop();
told();
}, 0);
});
xhr.send();
out = k[1];
told();
}
tapSide.orders = (r) => {
guard.seen(r);
return r.status >= 200 && r.status < 300 && on();
};
tapSide.rows = (path, answer) => {
const id = tapApply(tapExec, TAP_ORDERS, [path])?.[1];
if (!answer || !id) return;
const key = keys.get(id) ?? `l:${id}`;
kept.delete(key);
kept.set(key, [tickNow(), answer]);
if (kept.size > ORDER_KEYS) kept.delete( (kept.keys().next().value));
told();
};
new MutationObserver(told).observe(html, { attributeFilter: attrs });
function words(card, pop, ref) {
const k = on() ? of(card) : null;
return k ? orderWords(got(k), pop && out === k[1], pop, ref) : '';
}
return {
feed(listings) {
try {
if (!on()) return;
byId.learn(listings);
for (const l of listings) {
const key = orderKey(l);
if (l[10] === null || key === null) continue;
keys.delete(l[10]);
keys.set(l[10], key);
shotBounded(keys);
}
} catch {}
},
dwell(card, still) {
tickAfter(() => {
try {
const k = still() ? of(card) : null;
if (k && !got(k)) ask(k);
} catch {}
}, ORDER_HOLD);
},
pop: (box, chip, m) => orderPut(box, words(chip.closest(TF_SELECTORS.card), true, m.ref), true),
panel: (box, card, ref) => orderPut(box, words(card, false, ref), false),
top(card) {
const k = on() ? of(card) : null;
const a = k ? held(k) : null;
return a && a[1].rows > 0 ? [a[1].top, a[0] + ORDER_KEEP] : null;
},
watch: (f) => void subs.push(f),
};
}
// ---- src/prices-panel-draw.js
function panelDraw(slots, cents, name, phase, wear, net = null, bid = false) {
const rows = priceRows(slots, cents, name, phase);
const ref = priceRefRow(rows, cents)?.row;
const list = [];
for (let i = 0; i < rows.length; i++) {
const r = rows[i];
const m = panelMarket(tapOwn(r, 'name'));
const ask = panelNum(tapOwn(r, 'ask')) ?? 0;
const bid = panelNum(tapOwn(r, 'bid')) ?? 0;
if ((ask || bid) && m >= 0) panelPush(list, { r, ask, label: PANEL_ORDER[m], m });
}
if (!list.length) return null;
const me = cents !== null && panelNum(cents) ? { r: null, ask: cents, label: PANEL_WORDS.me, m: -1 } : null;
const asks = [];
if (me) panelPush(asks, me);
for (let i = 0; i < list.length; i++) if (list[i].ask) panelPush(asks, list[i]);
for (let i = 1; i < asks.length; i++)
for (let j = i; j > 0 && asks[j - 1].ask > asks[j].ask; j--) {
const x = asks[j];
asks[j] = asks[j - 1];
asks[j - 1] = x;
}
const order = [];
for (let i = 0; i < asks.length; i++) panelPush(order, asks[i]);
for (let i = 0; i < list.length; i++) if (!list[i].ask) panelPush(order, list[i]);
const low = asks.length ? asks[0].ask : 0;
const box = priceEl('section', 'tf-pw');
box.ariaLabel = PANEL_WORDS.title;
const head = priceEl('div', 'tf-pw-head', undefined, box);
priceEl('span', 'tf-pw-title', PANEL_WORDS.title, head);
net?.head(box, head);
const what = priceEl('span', 'tf-pw-what', undefined, head);
const short = typeof wear === 'string' && wear ? tapOwn(PANEL_WEAR, wear) : null;
const w = typeof wear === 'string' && wear ? priceEl('span', 'tf-pw-wear', `${wear} · `, what) : null;
if (w && typeof short === 'string') w.setAttribute('data-short', `${short} · `);
priceEl('span', '', `${phase ? `${phase} · ` : ''}${priceUnit()}`, what);
const body = priceEl('div', 'tf-pw-list', undefined, box);
for (let i = 0; i < order.length; i++) {
const x = order[i];
const row = priceEl(
'div',
`tf-pw-row${x === me ? ' tf-pw-me' : ''}${x.ask === low && low ? ' tf-pw-low' : ''}`,
undefined,
body,
);
const top = priceEl('div', 'tf-pw-top', undefined, row);
const who = priceEl('span', 'tf-pw-who', undefined, top);
priceEl('span', 'tf-pw-dot', undefined, who).ariaHidden = 'true';
priceEl('span', 'tf-pw-name', x.label, who);
if (x.r && ref && tapOwn(ref, 'key') === tapOwn(x.r, 'key')) priceEl('span', 'tf-pw-ref', 'ref', who);
priceEl('span', 'tf-pw-ask', x.ask ? priceNumber(x.ask) : '', top);
const sub = priceEl('div', 'tf-pw-sub', undefined, row);
const bit = ( text, cls = 'tf-pw-bit') => {
if (sub.childElementCount) priceEl('span', 'tf-pw-sep', undefined, sub).ariaHidden = 'true';
return priceEl('span', cls, text, sub);
};
if (x === me) {
let n = 1;
let at = 1;
for (let k = 0; k < asks.length; k++) {
const a = asks[k];
const self = a.m >= 0 && PRICE_MARKETS[a.m][0] === 'csfloat' && a.ask === x.ask && tapOwn(a.r, 'count') === 1;
if (a === x || self) continue;
n++;
if (a.ask < x.ask) at++;
}
const nth =
at === 1 ? 'lowest' : at === n ? 'highest' : `${at}${at === 2 ? 'nd' : at === 3 ? 'rd' : 'th'} lowest`;
bit(n > 1 ? `${nth} of ${n} asks` : 'the only ask');
continue;
}
const delta = tapOwn(x.r, 'delta');
const bid = tapOwn(x.r, 'bid');
const count = tapOwn(x.r, 'count');
const age = tapOwn(x.r, 'age');
priceEl('span', 'tf-pw-delta', typeof delta === 'number' && panelFinite(delta) ? priceDelta(delta) : '', top);
bit(panelNum(bid) ? `Bid ${priceNumber(bid)}` : PANEL_WORDS.noBid);
if (panelNum(count)) bit(`${panelCount(count)} listing${count === 1 ? '' : 's'}`);
if (panelNum(age) !== null) {
const stale = tapOwn(x.r, 'stale') === true;
const el = bit(priceAge(age), stale ? 'tf-pw-age tf-pw-old' : 'tf-pw-age');
if (stale) (row.classList.add('tf-pw-stale'), el.prepend(panelIcon(true)));
}
const out = panelLink(tapOwn(x.r, 'url'), PANEL_LINK[x.m], 'tf-pw-out', `Open on ${x.label}`);
if (out) sub.append((out.append(panelIcon(false)), out));
net?.row(row, PRICE_MARKETS[x.m][0], x.ask, cents);
}
if (phase) {
const have = [];
for (let i = 0; i < order.length; i++) if (order[i] !== me) panelPush(have, order[i].label);
const none = [];
for (let m = 0; m < PANEL_ORDER.length; m++) {
let shown = false;
for (let i = 0; i < have.length; i++) if (have[i] === PANEL_ORDER[m]) shown = true;
if (!shown) panelPush(none, PANEL_ORDER[m]);
}
for (let i = 0; i < none.length; i++) {
const row = priceEl('div', 'tf-pw-row tf-pw-none', undefined, body);
const who = priceEl('span', 'tf-pw-who', undefined, row);
priceEl('span', 'tf-pw-dot', undefined, who).ariaHidden = 'true';
priceEl('span', 'tf-pw-name', none[i], who);
priceEl('span', 'tf-pw-no', `no ${phase} price`, row);
}
const from = `${phase} prices from ${have.length === PANEL_ORDER.length ? 'every market' : panelList(have, 'and')}`;
priceEl(
'p',
'tf-pw-note',
none.length ? `${from}; OpenSkin has no ${phase} price for ${panelList(none, 'or')}.` : `${from}.`,
box,
);
}
if (bid) priceEl('p', 'tf-pw-note', PANEL_WORDS.bid, box);
const foot = priceEl('div', 'tf-pw-foot', undefined, box);
const key = priceEl('span', 'tf-pw-key', undefined, foot);
priceEl('span', 'tf-pw-dot', undefined, key).ariaHidden = 'true';
key.append(PANEL_WORDS.low);
const credit = panelLink(PRICE_CREDIT.href, null, 'tf-pw-credit', PRICE_CREDIT.text);
if (credit) foot.append(((credit.textContent = PRICE_CREDIT.text), credit));
return box;
}
// ---- src/prices-panel.js
const [panelThen, panelFrame] = [Promise.prototype.then, globalThis.requestAnimationFrame];
function panelFit(box) {
const what = box.querySelector('.tf-pw-head > .tf-pw-what');
const wear = what?.querySelector('.tf-pw-wear');
const steps = [wear?.getAttribute('data-short') ?? null, ''];
for (let i = 0; what && wear && i < 2 && what.scrollWidth > what.clientWidth; i++)
if (steps[i] !== null) wear.textContent = steps[i];
}
function createPricePanel(prices, buyOrders, goods) {
const html = document.documentElement;
const attrs = [TF_SETTINGS.prices.attr, TF_SETTINGS.pricesDialog.attr];
const on = () => html.hasAttribute(attrs[0]) && html.hasAttribute(attrs[1]);
const byName = createShotMatch(7, Object.is);
const byPrice = createShotMatch(5, Object.is);
const net = createPriceNet();
const byCard = createShotMatch(
2,
( a, b) => a.phase === b.phase && a.wear === b.wear,
);
const orders = `${TF_SELECTORS.dialogGrid} > ${TF_SELECTORS.buyOrders}`;
let shown = null;
let [want, turn] = ['', 0];
let drawnRef = (null);
function sync() {
const dialog = on() ? document.querySelector(TF_SELECTORS.dialog) : null;
const below = dialog?.querySelector(orders);
const card = dialog?.querySelector(TF_SELECTORS.card);
const key = card ? byName.keyOf(card) : null;
const kit = card && key === null ? goods.window(card) : null;
const [name, cents, facts] = kit ?? [byName.idFor(key), byPrice.idFor(key), byCard.idFor(key)];
const [phase, wear] = [facts?.phase ?? null, facts?.wear ?? null];
const ok = !!below && typeof name === 'string' && !(phase === null && tapMatches(PANEL_DOPPLER, name));
if (ok && cents) priceSeen(cents, card?.querySelector(TF_SELECTORS.price)?.textContent);
const bid = !!card?.querySelector(TF_SELECTORS.auction);
const own = bid ? null : cents;
const ref = html.getAttribute(TF_SETTINGS.priceRef.attr);
const withNet = net.wanted();
const now = ok ? `${name}\n${phase}\n${wear}\n${own}\n${ref}\n${priceUnit()}\n${withNet}` : '';
if (now === want) {
if (shown) buyOrders.panel(shown, card, drawnRef);
if (shown && below && shown.nextElementSibling !== below) (below.before(shown), panelFit(shown));
return;
}
[want, turn] = [now, turn + 1];
shown?.remove();
shown = null;
if (!ok) return;
const at = turn;
tapApply(panelThen, prices.lookup(name, phase), [
( slots) => {
if (at !== turn || !slots) return;
try {
shown = panelDraw(slots, own, name, phase, wear, withNet ? net : null, bid);
drawnRef = priceRefRow(priceRows(slots, own, name, phase));
} catch {
shown = null;
}
later();
},
]);
}
const later = frameLater(sync, (f) => tapApply(panelFrame, globalThis, [f]));
const look = [...attrs, TF_SETTINGS.priceRef.attr, TF_SETTINGS.priceNet.attr, goods.attr];
const follow = () =>
dialogFollow(watch, look, { attributeFilter: html.hasAttribute(goods.attr) ? ['href', 'src'] : ['href'] });
const watch = new MutationObserver(() => {
follow();
later();
});
follow();
buyOrders.watch(later);
goods.watch(() => later());
return {
wanted: on,
feed(listings) {
byName.learn(listings);
byPrice.learn(listings);
byCard.learn(listings);
later();
},
};
}
// ---- src/prices-chip.js
const PRICE_SVG = 'http://www.w3.org/2000/svg';
const PRICE_WORDS = Object.freeze({
every: 'Every market',
me: 'This listing',
low: 'Lowest ask',
ref: 'ref',
heads: Object.freeze(['Market', 'Ask', 'Bid', 'Listing', 'Age']),
cny: 'Converted from CNY by OpenSkin',
bid: 'Auction: the current bid is not compared',
});
const PRICE_CNY = /^(buff|youpin)$/;
function priceIcon(clock) {
const svg = document.createElementNS(PRICE_SVG, 'svg');
svg.setAttribute('class', clock ? 'tf-pc-i' : 'tf-pc-v');
svg.setAttribute('viewBox', clock ? '0 0 10 10' : '0 0 10 6');
svg.setAttribute('aria-hidden', 'true');
const d = clock ? 'M5 .9a4.1 4.1 0 1 1 0 8.2a4.1 4.1 0 1 1 0-8.2M5 2.8V5l1.5 1' : 'M1 5l4-4 4 4';
svg.appendChild(document.createElementNS(PRICE_SVG, 'path')).setAttribute('d', d);
return svg;
}
function priceAgeEl(cls, row) {
const el = priceEl('span', cls, priceAge(row.age));
if (row.stale) el.prepend(priceIcon(true));
el.toggleAttribute('data-stale', row.stale);
return el;
}
function priceAgeWords(min) {
const [n, unit] = priceAge(min).split(' ');
return n === '<1' ? 'under a minute' : `${n} ${unit === 'min' ? 'minutes' : unit === 'h' ? 'hours' : 'days'}`;
}
function priceChipParts(m) {
const [, name, side] = m.want;
const label = `${name}${side === 'bid' ? ' bid' : ''}`;
const dot = () => priceEl('span', 'tf-pc-s');
const parts = [priceEl('span', 'tf-pc-m', label)];
if (!m.ref) {
const none = m.phase ? `no ${m.phase} price` : 'no price';
parts.push(priceEl('span', 'tf-pc-n', none), priceIcon(false));
return [parts, `${label}: ${none}. Show every market`];
}
const { row, cents, delta } = m.ref;
parts.push(priceEl('span', 'tf-pc-a', priceMoney(cents, true)));
let say = `${name}${m.phase ? ` ${m.phase}` : ''} ${side} ${priceMoney(cents)}, ${priceAgeWords(row.age)} old.`;
if (delta !== null) {
const x = priceEl('span', 'tf-pc-x', priceDelta(delta, true));
const pct = priceDelta(delta, true).replace(/^[+−]/, '');
const same = pct === '0%' || pct === '0.0%';
x.toggleAttribute('data-good', delta < 0 && !same && !row.stale);
if (x.textContent) parts.push(dot(), x), say += same ? ' This listing is the same price.' : ` This listing is ${pct} ${delta < 0 ? 'cheaper' : 'dearer'}.`;
}
const age = priceAgeEl('tf-pc-t', row);
if (row.stale) age.title = `Price ${priceAge(row.age)} old`;
parts.push(dot(), age, priceIcon(false));
return [parts, `${say} Show every market`];
}
function pricePopRow(name, low, ref, cells) {
const row = priceEl('div', 'tf-pp-r');
const cell = priceEl('span', 'tf-pp-n');
const text = priceEl('span', 'tf-pp-l', name);
cell.append(priceEl('span', 'tf-pp-o'), text);
if (ref) cell.append(priceEl('span', 'tf-pp-f', PRICE_WORDS.ref));
row.toggleAttribute('data-low', low);
row.append(cell, ...cells);
[row, cell, ...cells].forEach((el, i) => el.setAttribute('role', ['row', 'rowheader'][i] ?? 'cell'));
row.setAttribute('aria-label', name);
if (cells.length === 1) cells[0].setAttribute('aria-colspan', '4');
return row;
}
function pricePopDraw(m) {
const pop = priceEl('div', 'tf-pp');
const title = m.phase ? `${m.phase} prices` : PRICE_WORDS.every;
pop.setAttribute('role', 'dialog');
pop.setAttribute('aria-label', title);
const head = priceEl('div', 'tf-pp-h');
head.append(priceEl('span', '', title), priceEl('span', '', [m.wear, priceUnit()].filter((t) => t).join(' · ')));
const grid = priceEl('div', 'tf-pp-g');
const heads = priceEl('div', 'tf-pp-r tf-pp-hd');
for (const t of PRICE_WORDS.heads) priceEl('span', '', t, heads).setAttribute('role', 'columnheader');
[grid.role, grid.ariaLabel, heads.role] = ['table', title, 'row'];
grid.append(heads);
const rows = [...m.rows].sort((a, b) => (a.ask ?? Infinity) - (b.ask ?? Infinity));
const all = [m.cents, ...rows.flatMap((r) => [r.ask, r.bid])];
const whole = all.some((c) => priceNumber(c).length > 6);
const low = rows.find((r) => r.lowest)?.ask ?? null;
const meLow = m.cents !== null && (low === null || m.cents <= low);
const me = () => {
const cells = ['tf-pp-a', '', '', ''].map((c, i) => priceEl('span', c, i ? '' : priceNumber(m.cents, whole)));
const r = pricePopRow(PRICE_WORDS.me, meLow, false, cells);
r.setAttribute('data-me', '');
return r;
};
let placed = m.cents === null;
for (const r of rows) {
if (!placed && r.ask !== null && (m.cents) <= r.ask) {
grid.append(me());
placed = true;
}
const cells = [
priceEl('span', 'tf-pp-a', r.ask === null ? '—' : priceNumber(r.ask, whole)),
priceEl('span', 'tf-pp-b', r.bid === null ? '—' : priceNumber(r.bid, whole)),
priceEl('span', 'tf-pp-d', r.delta === null ? '—' : priceDelta(r.delta)),
priceAgeEl('tf-pp-t', r),
];
const row = pricePopRow(r.name, r.lowest && !meLow, r.key === m.want[0], cells);
row.toggleAttribute('data-stale', r.stale);
if (tapMatches(PRICE_CNY, r.key)) row.title = PRICE_WORDS.cny;
grid.append(row);
}
if (!placed) grid.append(me());
for (const name of m.none)
grid.append(pricePopRow(name, false, name === m.want[1], [priceEl('span', 'tf-pp-z', `no ${m.phase} price`)]));
const foot = priceEl('div', 'tf-pp-ft');
const legend = priceEl('span', 'tf-pp-k', PRICE_WORDS.low);
legend.prepend(priceEl('span', 'tf-pp-o'));
const credit = priceEl('a', 'tf-pp-c', PRICE_CREDIT.text);
Object.assign(credit, { href: PRICE_CREDIT.href, target: '_blank', rel: 'noopener noreferrer' });
foot.append(legend, credit);
const bid = m.bid ? [priceEl('div', 'tf-pp-q', PRICE_WORDS.bid)] : [];
pop.append(head, grid, ...bid, ...plainPop(m), foot);
return pop;
}
// ---- src/plain-mark.js
const PLAIN_RULE = Object.freeze({ marks: Object.freeze(['1', '1.5', '2']), over: 15 });
const plainSaid = new WeakMap();
const PLAIN_WORDS = Object.freeze({
chip: 'No premium',
rule: (delta, phase) =>
`Priced ${delta <= 0 ? 'under' : `within ${PLAIN_RULE.over}% of`} ${phase ? `a regular ${phase}` : 'the regular price'}`,
});
function createPlainMark(icons) {
const html = document.documentElement;
const byGrade = createShotMatch(4, Object.is);
const said = new WeakMap();
const sized = new ResizeObserver((entries) => fit(entries.map((e) => e.target)));
function fit(footers) {
const px = ( ...v) => v.reduce((sum, x) => sum + (parseFloat(x) || 0), 0);
const steps = ['', 'age', 'dot'];
const lines = [];
for (const footer of footers) {
const chip = footer.querySelector(':scope > button.tf-pc');
const mark = chip?.querySelector(':scope > .tf-pl');
if (!footer.isConnected || (chip && !mark)) sized.unobserve(footer);
else if (chip && mark) {
const [s, f] = [getComputedStyle(chip), getComputedStyle(footer)];
const end = footer.getBoundingClientRect().right - px(f.paddingRight, f.borderRightWidth, s.paddingRight) + 0.5;
lines.push({ chip, mark, end, room: px(s.columnGap) + 10, rest: 2, popped: 2 });
}
}
for (let i = 0; i < 2; i++) {
const trying = lines.filter((l) => l.popped === 2);
for (const l of trying) l.chip.setAttribute('data-tf-plain', steps[i]);
for (const l of trying) {
const right = l.mark.getBoundingClientRect().right;
if (l.rest === 2 && right <= l.end) l.rest = i;
if (l.rest <= i && right + l.room <= l.end) l.popped = i;
}
}
for (const { chip, rest, popped } of lines)
chip.setAttribute('data-tf-plain', `${steps[rest]}${popped > rest ? ` pop-${steps[popped]}` : ''}`.trim());
}
function words(card, m) {
const delta = m.ref?.delta;
if (!m.ref || typeof delta !== 'number' || !(delta <= PLAIN_RULE.over)) return null;
const grade = byGrade.idFor(byGrade.keyOf(card));
const icon = icons(grade).find((g) => PLAIN_RULE.marks.includes(g.mark));
if (!icon || !grade) return null;
const { side, fam, text } = icon.rows[0];
const [, name, refSide] = m.want;
const pct = priceDelta(delta).replace(/^[+−]/, '');
const ref = `${name}${m.phase ? ` ${m.phase}` : ''} ${refSide} ${priceMoney(m.ref.cents)}`;
return [
`${side ? `${side} · ` : ''}${fam} · ${text} · seed ${grade.split(':')[2]}`,
`${priceMoney(m.cents)}, ${pct} ${delta < 0 ? 'under' : 'over'} ${ref}`,
PLAIN_WORDS.rule(delta, m.phase),
];
}
return {
attrs: [TF_SETTINGS.plainMark.attr, TF_SETTINGS.grades.attr],
learn: (listings) => byGrade.learn(listings),
mark(card, chip, footer, m) {
const w = html.hasAttribute(TF_SETTINGS.plainMark.attr) ? words(card, m) : null;
const had = chip.querySelector(':scope > .tf-pl');
const same = (said.get(chip)?.join('|') ?? '') === (w?.join('|') ?? '');
if (same && !!had === !!w) return false;
had?.remove();
if (!w) {
said.delete(chip);
chip.removeAttribute('data-tf-plain');
chip.removeAttribute('aria-description');
if (footer) sized.unobserve(footer);
return !same;
}
said.set(chip, w);
const el = priceEl('span', 'tf-pl', PLAIN_WORDS.chip);
el.setAttribute('aria-hidden', 'true');
chip.insertBefore(el, chip.querySelector(':scope > .tf-pc-v'));
chip.setAttribute('aria-description', `${PLAIN_WORDS.chip}: ${w[0]}, ${w[1]}`);
chip.setAttribute('data-tf-plain', '');
if (footer) (sized.unobserve(footer), sized.observe(footer));
return !same;
},
model(chip, m) {
const w = said.get(chip);
if (m && w) plainSaid.set(m, w);
else if (m) plainSaid.delete(m);
return m;
},
};
}
function plainPop(m) {
const w = plainSaid.get(m);
if (!w) return [];
const box = priceEl('div', 'tf-pp-pl');
const head = priceEl('div', 'tf-pp-plh');
head.append(priceEl('span', 'tf-pl', PLAIN_WORDS.chip), priceEl('span', '', w[0]));
box.append(head, ...w.slice(1).map((t) => priceEl('div', 'tf-pp-plt', t)));
return [box];
}
// ---- src/prices-pop.js
const priceFrame = globalThis.requestAnimationFrame;
const priceClock = performance.now.bind(performance);
const PRICE_LIFT = 250;
const priceMatches = Element.prototype.matches;
const priceHover = ( e) => tapApply(priceMatches, e, [':hover']) === true;
function createPricePop(modelOf, orders) {
let pop = null;
let owner = null;
let [pinned, frame, at, sure, until] = [false, 0, '', false, 0];
let cancel = () => {};
const later = ( f, ms) => {
cancel();
cancel = tickAfter(f, ms);
};
const follow = ( ms) => {
until = Math.max(until, priceClock() + ms);
frame ||= tapApply(priceFrame, globalThis, [place]);
};
const sized = new ResizeObserver(() => pop && follow(0));
function place() {
frame = 0;
if (!pop || !owner) return;
const r = owner.getBoundingClientRect();
const hid = r.bottom < 0 || r.top > innerHeight || document.querySelector(TF_SELECTORS.dialog);
if (!owner.isConnected || hid) return close();
const card = owner.closest(TF_SELECTORS.card)?.getBoundingClientRect() ?? r;
const { width: w, height: h } = pop.getBoundingClientRect();
const full = pop.scrollHeight || h;
const tall = Math.min(full, Math.max(0, r.top - 4 - Math.max(8, card.top)));
const [x, top, cut] = [Math.max(8, Math.min(card.left, innerWidth - w - 8)), r.top - 4 - tall, full - tall > 1];
const now = `${x} ${top} ${cut && tall}`;
if (now !== at) {
at = now;
const max = cut ? `${tall}px` : '';
Object.assign(pop.style, { left: `${x}px`, top: `${top}px`, maxHeight: max, overflowY: cut ? 'auto' : '' });
}
if (priceClock() < until) frame = tapApply(priceFrame, globalThis, [place]);
}
function close() {
cancel();
sized.disconnect();
owner?.setAttribute('aria-expanded', 'false');
panelDrop(pop, owner);
[pop, owner, pinned, at, sure] = [null, null, false, '', false];
}
function open(chip) {
const m = modelOf(chip);
if (!m) return;
close();
[pop, owner] = [orders.pop(pricePopDraw(m), chip, m), chip];
pop.onpointerenter = () => cancel();
pop.onpointerleave = () => pinned || later(close, 200);
pop.popover = 'manual';
panelHold(pop, chip, 'tf-pp');
document.body.append(pop);
pop.showPopover?.();
chip.setAttribute('aria-expanded', 'true');
for (const el of [pop, chip, chip.closest(TF_SELECTORS.card)]) el && sized.observe(el);
until = priceClock() + PRICE_LIFT;
if (!frame) place();
const box = pop;
orders.dwell(chip.closest(TF_SELECTORS.card), () => pop === box && (sure || priceHover(chip) || priceHover(box)));
}
const inside = ( e) => [pop, owner].some((el) => el?.contains( (e.target)));
for (const t of ['pointerdown', 'click', 'focusin'])
document.addEventListener(t, (e) => pop && !inside(e) && close(), true);
const escape = ( e) =>
pop && e.key === 'Escape' && (pinned && e.stopPropagation(), close());
document.addEventListener('keydown', escape, true);
const move = { capture: true, passive: true };
for (const t of ['pointerover', 'pointerout']) document.addEventListener(t, () => pop && follow(PRICE_LIFT), move);
document.addEventListener('scroll', () => pop && follow(0), move);
cardWatch({ attrs: [], cards() {}, other: () => pop && follow(0) });
globalThis.addEventListener?.('resize', () => close());
function button() {
const b = (document.createElement('button'));
const stop = ( e) => gradeShared(b) || (e.stopPropagation(), e.preventDefault());
for (const t of ['pointerdown', 'mousedown', 'pointerup', 'mouseup', 'auxclick', 'click'])
b.addEventListener(t, stop);
[b.type, b.className] = ['button', 'tf-pc'];
b.setAttribute('aria-haspopup', 'dialog');
b.setAttribute('aria-expanded', 'false');
const show = () => open(b);
const enter = () => (owner === b ? cancel() : pop && !pinned ? show() : later(() => priceHover(b) && show(), 300));
const leave = () => (owner === b ? pinned || later(close, 200) : cancel());
const press = ( e) => {
if (gradeShared(b)) return;
if (owner === b && pinned) return close();
if (owner !== b) show();
[pinned, sure] = [true, e.isTrusted];
panelKeyed(pop, e, true);
};
tapApply(tapListen, b, ['pointerenter', enter]);
tapApply(tapListen, b, ['pointerleave', leave]);
tapApply(tapListen, b, ['click', press]);
return b;
}
const pops = {
button,
close,
lost: (chip) => owner === chip && close(),
redraw(chip) {
if (owner !== chip || !pop) return;
const m = modelOf(chip);
if (!m) return close();
const [next, had] = [orders.pop(pricePopDraw(m), chip, m), pop.contains(document.activeElement)];
pop.replaceChildren(...next.childNodes);
if (had) Object.assign(pop, { tabIndex: -1 }).focus({ preventScroll: true });
},
};
orders.watch(() => owner && pops.redraw(owner));
return pops;
}
// ---- src/prices-hold.js
const PRICE_HOLD = 'item-card .footer > span.tf-pcw';
const PRICE_POINTER = ['pointerover', 'pointerout'];
function createPriceHold() {
const later = (new Map());
const young = (new Set());
const since = (new WeakMap());
const timed = (new WeakSet());
let [frame, feeds] = [0, 0];
const holdOf = ( card) => card.querySelector(':scope .footer > span.tf-pcw');
const made = () => {
const h = layoutSpan('tf-pcw', '');
h.setAttribute('aria-hidden', 'true');
h.style.pointerEvents = 'none';
return h;
};
function under(card) {
const grid = card.closest('app-item-container');
if (young.has(card) || !grid?.matches(':hover')) return false;
const at = grid.querySelector(`${TF_SELECTORS.card}:hover`);
return !at || at.getBoundingClientRect().top >= card.getBoundingClientRect().top - 1;
}
function retry() {
for (const [card, f] of later) if (!card.isConnected || !under(card)) (later.delete(card), card.isConnected && f());
if (!later.size) for (const t of PRICE_POINTER) document.removeEventListener(t, retry, true);
}
function settle(card, f) {
later.delete(card);
if (!under(card)) return f();
if (!later.size)
for (const t of PRICE_POINTER) document.addEventListener(t, retry, { capture: true, passive: true });
later.set(card, f);
}
function free(card) {
const h = holdOf(card);
if (h) settle(card, () => h.remove());
else later.delete(card);
}
return {
seen(cards) {
for (const card of cards) young.add(card);
frame ||= requestAnimationFrame(() => ((frame = 0), young.clear()));
},
hold(card, row, named) {
later.delete(card);
if (named && !timed.has(card)) {
timed.add(card);
tickAfter(() => (timed.delete(card), card.isConnected && !named(card) && free(card)), 3e3);
}
if (holdOf(card) || card.querySelector('.footer > button.tf-pc')) return;
const h = made();
settle(card, () => row.isConnected && !row.nextElementSibling?.matches('.tf-pc, .tf-pcw') && row.after(h));
},
free,
early(card, key) {
const s = since.get(card);
if (s?.[0] !== key) since.set(card, [key, feeds]);
return s?.[0] !== key || s[1] === feeds;
},
fed(named) {
feeds++;
for (const h of document.querySelectorAll(PRICE_HOLD)) {
const card = h.closest(TF_SELECTORS.card);
if (card && !named(card)) free(card);
}
},
swap: (chip) => chip.replaceWith(made()),
place(card, row, chip, still) {
if (chip.previousElementSibling === row) return;
const h = holdOf(card);
if (h) return void (later.delete(card), h.replaceWith(chip));
settle(card, () => still() && row.isConnected && row.after(chip));
},
};
}
// ---- src/prices-want.js
function priceWant(ref) {
const v = document.documentElement.getAttribute(TF_SETTINGS.priceRef.attr) ?? TF_SETTINGS.priceRef.default;
const m = tapMatches(PRICE_REF, v) ? tapApply(tapExec, PRICE_REF, [v]) : ['', 'csfloat', 'ask'];
if (m?.[1] === 'lowest') return [ref?.row.key ?? '', ref?.row.name ?? PRICE_WORDS.low, 'ask'];
const i = PRICE_MARKETS.findIndex((x) => x[0] === m?.[1]);
return [PRICE_MARKETS[i][0], PRICE_MARKETS[i][1], m?.[2] === 'bid' ? 'bid' : 'ask'];
}
// ---- src/prices-cards.js
const PRICE_DOPPLER = /\| (?:Gamma )?Doppler \(/;
const priceThen = Promise.prototype.then;
const PRICE_WARM = 'AK-47 | Redline (Field-Tested)';
function createPriceCards(prices, icons, orders, goods) {
const html = document.documentElement;
const attrs = [TF_SETTINGS.prices.attr, TF_SETTINGS.pricesCards.attr];
const on = () => html.hasAttribute(attrs[0]) && html.hasAttribute(attrs[1]);
const byName = createShotMatch(7, Object.is);
const byPrice = createShotMatch(5, Object.is);
const byCard = createShotMatch(
2,
( a, b) => a.phase === b.phase && a.wear === b.wear,
);
const asked = new WeakMap();
const models = new WeakMap();
const plain = createPlainMark(icons);
const pop = createPricePop((chip) => plain.model(chip, models.get(chip)?.[0] ?? null), orders);
const hold = createPriceHold();
const named = ( card) => !!byName.idFor(byName.keyOf(card));
let warm = false;
function drop(card) {
asked.set(card, (asked.get(card) ?? 0) + 1);
for (const chip of card.querySelectorAll('button.tf-pc')) {
pop.lost(chip);
hold.swap(chip);
}
hold.free(card);
}
function sync(card) {
const key = on() && !card.closest(TF_SELECTORS.dialog) ? byName.keyOf(card) : null;
const kit = key === null && on() && !card.closest(TF_SELECTORS.dialog) ? goods.card(card) : null;
const [name, cents, facts] = kit ?? [byName.idFor(key), byPrice.idFor(key), byCard.idFor(key)];
const phase = facts?.phase ?? null;
const row = card.querySelector(TF_SELECTORS.priceRow);
const grid = !!card.closest('app-item-container');
if (row && key !== null && name === null && grid && prices.answers() && hold.early(card, key))
return (drop(card), hold.hold(card, row, named));
if (!row || typeof name !== 'string' || (phase === null && tapMatches(PRICE_DOPPLER, name))) return drop(card);
const own = card.querySelector(TF_SELECTORS.auction) ? null : cents;
const was = models.get( (card.querySelector('button.tf-pc')))?.[0];
if (was && (was.name !== name || was.cents !== own || was.phase !== phase)) drop(card);
if (cents) priceSeen(cents, card.querySelector(TF_SELECTORS.price)?.textContent);
const at = (asked.get(card) ?? 0) + 1;
asked.set(card, at);
if (prices.answers()) hold.hold(card, row);
else hold.free(card);
tapApply(priceThen, prices.lookup(name, phase), [
( slots) => {
if (asked.get(card) !== at) return;
try {
draw(card, row, slots, name, own, phase, facts?.wear ?? null, at);
} catch {}
},
]);
}
function draw(card, row, slots, name, cents, phase, wear, at) {
const rows = slots && on() && row.isConnected ? priceRows(slots, cents, name, phase) : [];
if (!rows.length) return drop(card);
const none = phase ? PRICE_MARKETS.filter((_, i) => slots?.[i] === 0).map((x) => x[1]) : [];
const bid = !!card.querySelector(TF_SELECTORS.auction);
const ref = priceRefRow(rows, cents);
const m = { rows, ref, want: priceWant(ref), name, cents, phase, wear, none, bid };
const chip = card.querySelector('button.tf-pc') ?? pop.button();
const seen = rows.map((r) => [r.key, r.ask, r.bid, r.stale, r.lowest, priceAge(r.age)]);
const sig = JSON.stringify([seen, m.ref?.side, m.want, name, cents, phase, wear, none, priceMoney(1e4)]);
if (models.get(chip)?.[1] !== sig) {
const [parts, label] = priceChipParts(m);
chip.replaceChildren(...parts);
chip.setAttribute('aria-label', label);
models.set(chip, [m, sig]);
pop.redraw(chip);
}
hold.place(card, row, chip, () => asked.get(card) === at && on());
if (plain.mark(card, chip, row.parentElement, m)) pop.redraw(chip);
}
const synced = byName.tracked(sync);
const syncAll = () => {
for (const card of document.querySelectorAll(TF_SELECTORS.card)) synced(card);
};
cardWatch({
attrs: [...attrs, TF_SETTINGS.priceRef.attr, goods.attr, ...plain.attrs],
clock: true,
setting: () => {
pop.close();
if (on() && !warm) ((warm = true), prices.lookup(PRICE_WARM));
syncAll();
},
cards(changed, added) {
hold.seen(added);
if (on()) for (const card of new Set([...changed, ...added])) synced(card);
},
});
prices.watch(() => void (on() && shotOnce(syncAll)));
const unkeyed = () => document.querySelectorAll(TF_SELECTORS.card).forEach((c) => byName.keyOf(c) ?? synced(c));
goods.watch((names) => void (on() && (names.forEach((n) => prices.lookup(n)), shotOnce(unkeyed))));
const shown = () => document.visibilityState !== 'hidden';
setInterval(() => on() && shown() && shotOnce(syncAll), 6e4);
document.addEventListener('visibilitychange', (e) => e.isTrusted && on() && shown() && shotOnce(syncAll));
return {
wanted: on,
indexed: () => void (on() && shotOnce(syncAll)),
feed(listings) {
if (!on()) return;
const fresh = new Set([...byName.learn(listings), ...byPrice.learn(listings), ...byCard.learn(listings)]);
for (const key of plain.learn(listings)) fresh.add(key);
for (const l of listings) if (typeof l[7] === 'string') prices.lookup(l[7], l[2]?.phase ?? null);
byName.resync(fresh, synced);
hold.fed(named);
},
};
}
// ---- src/offer-read.js
const OFFER_TYPED = /^(\d{1,9})(?:\.(\d{0,2}))?$/;
const OFFER_DAY = 864e5;
const OFFER_OLD = 360;
const offerDecode = decodeURIComponent;
const offerUnlisten = EventTarget.prototype.removeEventListener;
const offerLocal = (cents) => (priceCurrency.fmt ? priceCeil(cents * priceCurrency.fmt.rate) : NaN);
const offerUsd = (minor) => (priceCurrency.fmt ? priceFloor(minor / priceCurrency.fmt.rate) : NaN);
function offerAsks(slots, name, phase, amount, warns) {
const rows = priceRows(slots, null, name, phase);
const list = [];
for (let i = 0; i < rows.length; i++) {
const m = panelMarket(rows[i].name);
if (rows[i].ask && m >= 0) panelPush(list, { name: PANEL_ORDER[m], ask: rows[i].ask ?? 0, age: rows[i].age });
}
for (let i = 1; i < list.length; i++)
for (let j = i; j > 0 && list[j - 1].ask > list[j].ask; j--) {
const x = list[j];
list[j] = list[j - 1];
list[j - 1] = x;
}
const out = [];
for (let i = 0; i < list.length; i++) {
const { name: who, ask, age } = list[i];
const local = offerLocal(ask);
const pct = amount && local > 0 ? priceDelta(((amount - local) / local) * 100) : '';
const warn = warns && !!amount && amount >= local;
panelPush(out, { name: who, age: age > OFFER_OLD ? priceAge(age) : '', low: !i, ask: priceNumber(ask), pct, warn });
}
return out;
}
function offerTyped(v) {
const m = typeof v === 'string' ? tapApply(tapExec, OFFER_TYPED, [tapApply(priceTrim, v, [])]) : null;
const minor = m ? +m[1] * 100 + +`${m[2] ?? ''}00`.slice(0, 2) : 0;
return minor > 0 ? minor : null;
}
function offerMinimum(price, said) {
const text = bargainAmount(price, said);
if (!text) return null;
let minor = 0;
for (let i = 0; i < text.length; i++) if (text[i] >= '0' && text[i] <= '9') minor = minor * 10 + +text[i];
return minor > 0 ? minor : null;
}
function offerAverage(h, name, grade) {
const paint = grade?.split(':')[1];
let same = false;
try {
same = !!h && h.kind === 'graph' && offerDecode(h.item.split('/')[4] ?? '') === name;
} catch {}
same &&= h?.query === (paint ? `?paint_index=${paint}` : '');
if (!h || !same) return null;
const from = tickNow() - 30 * OFFER_DAY;
let [sum, n] = [0, 0];
for (const p of h.points) if (p.day >= from) [sum, n] = [sum + p.count * p.avg, n + p.count];
return n ? priceRound(sum / n) : null;
}
function offerTier(icons) {
const r = icons[0]?.rows[0];
if (!r) return '';
return r.text.toLowerCase().includes(r.fam.toLowerCase()) ? r.text : `${r.fam} ${r.text}`;
}
// ---- src/offer-draw.js
const OFFER_OURS = 'div.tf-of-box';
const OFFER_TAG = /(?:^| )tf-of-/;
const offerSaid = (new WeakMap());
function offerParts(m, k) {
const kids = [];
if (k > 0) {
const lead = priceEl('span', 'tf-of-t', 'Market prices');
tipBox.tie(lead, m.note ? { body: m.note, side: '.cdk-overlay-pane', mat: true } : null);
for (const el of [lead, priceEl('span', 'tf-of-h', 'Ask'), priceEl('span', 'tf-of-h', m.head)]) panelPush(kids, el);
}
for (let i = 0; i < m.rows.length && i < k; i++) {
const r = m.rows[i];
const tone = r.warn ? ' tf-of-warn' : '';
const who = priceEl('span', `tf-of-n${r.low ? ' tf-of-low' : ''}${tone}`);
for (const [cls, words] of [
['tf-of-dot', ''],
['tf-of-m', r.name],
['tf-of-age', r.age ? `· ${r.age}` : ''],
])
if (cls === 'tf-of-dot' || words) priceEl('span', cls, words, who);
for (const el of [who, priceEl('span', `tf-of-a${tone}`, r.ask), priceEl('span', `tf-of-p${tone}`, r.pct)])
panelPush(kids, el);
}
if (m.ctx.length) {
const row = priceEl('div', 'tf-of-ctx');
for (let i = 0; i < m.ctx.length; i++) {
const [cls, words, warn] = m.ctx[i];
priceEl('span', `${cls}${warn ? ' tf-of-warn' : ''}`, i ? `\u00a0·\u00a0${words}` : words, row);
}
panelPush(kids, row);
}
return kids;
}
function offerBox(d, m, n) {
const notice = d.querySelector(TF_SELECTORS.offerNotice);
const k = Math.min(n, m.rows.length);
if (!notice || n < 0 || (k <= 0 && !m.ctx.length)) return offerDrop(d);
const el = d.querySelector(OFFER_OURS) ?? priceEl('div', 'tf-of-box');
if (el.nextElementSibling !== notice) notice.before(el);
const words = JSON.stringify([m, k]);
if (offerSaid.get(el) === words) return;
offerSaid.set(el, words);
el.replaceChildren(...offerParts(m, k));
}
function offerFit(d, m, n) {
const all = m.rows.length;
const [card, grid] = [TF_SELECTORS.offerCard, TF_SELECTORS.offerGrid].map((s) => d.querySelector(s));
if (!( (card)?.offsetHeight) || !grid) return (offerBox(d, m, all), all);
const room = ( k) => {
offerBox(d, m, k);
const notice = d.querySelector(TF_SELECTORS.offerNotice);
const g = grid.getBoundingClientRect();
const scale = g.height / ( (grid).offsetHeight || 1) || 1;
return notice ? (g.bottom - notice.getBoundingClientRect().bottom) / scale : 0;
};
let k = Math.min(n, all);
let free = room(k);
while (free < 1 && k > -1) free = room(--k);
while (k < all && free >= 16) if ((free = room(++k)) < 1) return (room(--k), k);
return k;
}
function offerDrop(scope) {
for (const el of scope?.querySelectorAll(OFFER_OURS) ?? []) el.remove();
}
function offerTheirs(r) {
const el = r.target.nodeType === 1 ? (r.target) : r.target.parentElement;
const nodes = [...r.addedNodes, ...r.removedNodes];
const ours = ( n) => n.nodeType === 1 && OFFER_TAG.test(`${n.getAttribute('class')}`);
return !!el?.closest(TF_SELECTORS.offer) && !el.closest(OFFER_OURS) && !(nodes.length && nodes.every(ours));
}
function offerIn(nodes) {
const found = ([]);
for (const n of nodes) {
const el = n.nodeType === 1 ? (n) : null;
if (el?.matches(TF_SELECTORS.offer)) found.push(el);
else if (el?.firstElementChild) found.push(...el.querySelectorAll(TF_SELECTORS.offer));
}
return found;
}
function offerRecords(records, gone) {
const box = ( n) => n.nodeType === 1 && n.matches('.cdk-overlay-container');
let [moved, changed] = [false, false];
for (const r of records)
if (r.target === document.documentElement || (r.target === document.body && [...r.addedNodes].some(box)))
[moved, changed] = [true, true];
else if (r.target !== document.body) {
const went = offerIn(r.removedNodes);
went.forEach(gone);
const come = offerIn(r.addedNodes).length > 0;
moved ||= come || went.length > 0;
changed ||= come || offerTheirs(r);
}
return [moved, changed];
}
// ---- src/offer.js
function createOffer(prices, orders, graph, icons) {
const html = document.documentElement;
const mine = (['offerAsks', 'offerContext', 'offerGraded']);
const on = ( k) => html.hasAttribute(TF_SETTINGS[k].attr);
const live = () => mine.some(on);
const byName = createShotMatch(7, Object.is);
const byPrice = createShotMatch(5, Object.is);
const byCard = createShotMatch(2, ( a, b) => a.phase === b.phase);
const byGrade = createShotMatch(4, Object.is);
const bound = (new WeakMap());
const turns = (new WeakMap());
const timers = (new WeakMap());
const fits = (new WeakMap());
function draw(d) {
const card = d.querySelector(TF_SELECTORS.card);
const key = card ? byName.keyOf(card) : null;
if (bound.get(d) !== key) offerDrop(d);
bound.set(d, key);
const [name, cents, facts, grade] = [byName.idFor(key), byPrice.idFor(key), byCard.idFor(key), byGrade.idFor(key)];
const phase = facts?.phase ?? null;
const price = card?.querySelector(TF_SELECTORS.price)?.textContent?.trim() ?? '';
const any = on('offerAsks') || on('offerContext');
const sure = any && !!cents && typeof name === 'string' && priceSeen(cents, price);
const asks = sure && on('offerAsks') && !(phase === null && tapMatches(PANEL_DOPPLER, name));
const [last, out] = turns.get(d) ?? [0, false];
const at = last + 1;
turns.set(d, [at, asks]);
const seen = ([card, `${name}`, phase, grade, price, sure]);
if (!asks || out || !d.querySelector(OFFER_OURS)) paint(d, seen, null);
const took = ( s) => {
if (turns.get(d)?.[0] !== at) return;
turns.set(d, [at, false]);
paint(d, seen, s);
};
if (asks) tapApply(panelThen, prices.lookup(name, phase), [took]);
}
function paint(d, [card, name, phase, grade, price, sure], slots) {
if (!d.isConnected) return;
const field = d.querySelector(TF_SELECTORS.offerField);
const inputs = field?.querySelectorAll(TF_SELECTORS.offerInput);
const input = inputs?.length === 1 ? (inputs[0]) : null;
const typed = sure && input ? offerTyped(input.value) : null;
const told = !!field?.querySelector(TF_SELECTORS.offerError);
const valid = typed !== null && !told && !input?.matches('.ng-invalid');
const line = d.querySelector(TF_SELECTORS.offerMin);
const text = [...(line?.childNodes ?? [])].map((n) => (n.nodeType === 3 ? n.nodeValue : '')).join('');
const amount = valid ? typed : sure ? offerMinimum(price, text) : null;
const graded = offerTier(icons(grade));
const rows = slots && on('offerAsks') ? offerAsks(slots, name, phase, amount, valid && !graded) : [];
const tier = rows.length && on('offerGraded') ? graded : '';
const order = sure && on('offerContext') ? orders.top(card) : null;
const avg = sure && on('offerContext') ? offerAverage(graph(), name, grade) : null;
const under = valid && order !== null && offerUsd( (typed)) < order[0];
const ctx = [];
if (order) panelPush(ctx, ['tf-of-bo', `Top buy order ${priceMoney(order[0], true)}`, under]);
if (avg !== null) panelPush(ctx, ['tf-of-av', `30 d avg ${priceMoney(avg, true)}`, false]);
const note = tier ? `Markets ignore the pattern · ${tier}` : '';
fits.set(d, offerFit(d, { rows, head: valid ? 'Offer' : 'Min', note, ctx }, fits.get(d) ?? Infinity));
timers.get(d)?.();
if (live()) timers.set(d, tickAfter(later, Math.min(6e4, (order ? order[1] - tickNow() : 6e4) + 50)));
}
const later = frameLater(
() => document.querySelectorAll(TF_SELECTORS.offer).forEach(draw),
(f) => requestAnimationFrame(f),
);
const keys = [...mine, 'prices', 'grades', 'salesGraph', 'salesTable'];
const look = keys.map((k) => TF_SETTINGS[ (k)].attr);
let heard = false;
function follow() {
watch.disconnect();
const all = live();
watch.observe(html, { attributeFilter: all ? look : mine.map((k) => TF_SETTINGS[k].attr) });
if (all !== heard) hear((heard = all));
if (!all) return;
if (document.body) watch.observe(document.body, { childList: true });
const box = [...(document.body?.children ?? [])].find((el) => el.matches('.cdk-overlay-container'));
if (box) watch.observe(box, { childList: true, subtree: true });
for (const d of box?.querySelectorAll(TF_SELECTORS.offer) ?? [])
watch.observe(d, { childList: true, subtree: true, characterData: true, attributeFilter: ['class', 'href'] });
}
function hear(yes) {
if (yes) {
tapApply(tapListen, document, ['input', later, { capture: true, passive: true }]);
tapApply(tapListen, globalThis, ['resize', later, { passive: true }]);
} else {
tapApply(offerUnlisten, document, ['input', later, { capture: true, passive: true }]);
tapApply(offerUnlisten, globalThis, ['resize', later, { passive: true }]);
}
}
const watch = new MutationObserver((records) => {
const [moved, changed] = offerRecords(records, (d) => timers.get(d)?.());
if (moved) follow();
if (changed) later();
});
follow();
orders.watch(() => void (live() && later()));
return {
feed(l) {
for (const m of [byName, byPrice, byCard, byGrade]) m.learn(l);
if (live()) later();
},
};
}
// ---- src/tradeup.js
const TU_WEARS = ['FN', 'MW', 'FT', 'WW', 'BS'];
const TU_WEAR_NAMES = ['Factory New', 'Minimal Wear', 'Field-Tested', 'Well-Worn', 'Battle-Scarred'];
const TU_MARKETS = ['buff', 'youpin', 'steam', 'skinport', 'csfloat'];
const TU_EDGE = 0.0002;
const tuNum = ( v) => typeof v === 'number' && Number.isFinite(v);
const tuRows = ( a, n, w, nulls = false) =>
Array.isArray(a) &&
a.length === n &&
a.every((r) => Array.isArray(r) && r.length === w && r.every((v) => tuNum(v) || (nulls && v === null)));
function tradeupCheck(t) {
const o = (t);
if (!o || o.schema !== 1 || typeof o.inputs !== 'object' || typeof o.pools !== 'object') return null;
for (const p of Object.values(o.pools)) {
const n = Array.isArray(p?.x) ? p.x.length : 0;
const st =
p?.evst === null
? p.covst === null && p.medst === null
: tuRows(p?.evst, n, 10, true) && tuRows(p.covst, n, 10) && tuRows(p.medst, n, 10, true);
if (!n || p.x[0] !== 0 || !tuNum(p.n) || p.n < 1 || !['glove', 'knife'].includes(p.kind) || !st) return null;
if (!p.x.every(( v, i) => tuNum(v) && (i === 0 || v > p.x[i - 1])))
return null;
if (!tuRows(p.wear, n, 6)) return null;
if (!tuRows(p.ev, n, 10, true) || !tuRows(p.cov, n, 10) || !tuRows(p.med, n, 10, true)) return null;
if (p.r !== null && !(Array.isArray(p.r) && p.r.length === 2 && p.r.every(tuNum))) return null;
}
for (const v of Object.values(o.inputs)) {
if (!Array.isArray(v) || !tuNum(v[0]) || !tuNum(v[1]) || !(v[1] > v[0]) || !o.pools[v[2]]) return null;
}
return o;
}
const tuMajor = (c) => c.reduce((best, v, i) => (v > c[best] ? i : best), 0);
function tradeupModel(t, key, float, st, sv, market, side) {
const input = t.inputs[key];
if (sv || !input || float === null) return null;
const [smin, smax, name, col] = input;
const pool = t.pools[name];
const ev = st ? pool.evst : pool.ev;
if (!ev || float < smin || float > smax) return null;
const x = (float - smin) / (smax - smin);
let i = 0;
while (i + 1 < pool.x.length && pool.x[i + 1] <= x) i++;
let m = TU_MARKETS.indexOf(market);
if (market === 'lowest')
for (let j = 0; j < TU_MARKETS.length; j++) {
const v = ev[i][j * 2];
if (v !== null && (m < 0 || v < (ev[i][m * 2]))) m = j;
}
const k = m * 2 + (side === 'bid' ? 1 : 0);
const value = m < 0 ? null : ev[i][k];
if (value === null) return null;
const counts = pool.wear[i];
const wear = tuMajor(counts);
let start = i;
while (start > 0 && tuMajor(pool.wear[start - 1]) === wear) start--;
const better = start > 0 && tuMajor(pool.wear[start - 1]) < wear ? tuMajor(pool.wear[start - 1]) : -1;
const cut = better < 0 ? null : Math.floor((smin + pool.x[start] * (smax - smin)) * 1e4) / 1e4;
const out = pool.r ? pool.r[0] + x * (pool.r[1] - pool.r[0]) : null;
const edge = out !== null && [0.07, 0.15, 0.38, 0.45].some((e) => Math.abs(out - e) < TU_EDGE);
const cov = (st ? (pool.covst) : pool.cov)[i][k];
const med = (st ? (pool.medst) : pool.med)[i][k];
return {
market: TU_MARKETS[m],
kind: pool.kind,
n: pool.n,
counts,
wear,
mixed: counts[wear] < pool.n,
better,
cut,
x,
out,
edge,
ev: value,
cov,
med,
col,
float,
st,
};
}
function tradeupWords(m) {
const wear = m.wear < 5 ? `${m.mixed ? '~' : ''}${TU_WEARS[m.wear]} ` : '';
const cut = m.cut === null ? '' : ` · ${TU_WEARS[m.better]} below ${m.cut.toFixed(4)}`;
return `→ ${wear}${m.kind}${cut}`;
}
// ---- src/tradeup-cards.js
const TU_MAX_TEXT = 2 * 1024 * 1024;
const tuParse = JSON.parse;
function tradeupTip(m, cents, side) {
const name = PRICE_MARKETS.find((x) => x[0] === m.market)?.[1] ?? m.market;
const fifth = Math.round(m.ev / 5);
const many = m.kind === 'glove' ? 'gloves' : 'knives';
const rows = [
...(m.out !== null ? [{ c: ['Output float', m.out.toFixed(4)] }] : []),
{ c: [m.wear < 5 ? TU_WEAR_NAMES[m.wear] : 'Vanilla', `${m.counts[m.wear]} of ${m.n} ${many}`] },
{ c: [`Expected ${m.kind}`, priceMoney(m.ev)] },
{ c: ['Median outcome', priceMoney(m.med ?? 0)], tone: 'dim' },
{ c: ['One fifth', priceMoney(fifth)] },
...(cents ? [{ c: ['Against this price', `${(fifth / cents).toFixed(2)}×`] }] : []),
];
const col = m.col ? `, all from ${m.col}` : '';
const dop =
m.kind === 'knife'
? ' A Doppler counts once per knife, at its Phase 1–4 median; Ruby, Sapphire, Black Pearl and Emerald are rarer.'
: '';
return {
head: 'Trade-up',
aside: `${m.st ? 'StatTrak™ · ' : ''}${name} ${side}`,
rows,
body: `Five of this skin, all at ${m.float.toFixed(4)}${col}. Equal odds per ${m.kind}; ${m.cov} of ${m.n} priced.${dop}`,
note: m.edge ? 'Near a wear edge: the game may round either way.' : undefined,
source: 'Mixing floats or collections changes this. Before fees.',
};
}
function createTradeupCards() {
const html = document.documentElement;
const attrs = [TF_SETTINGS.prices.attr, TF_SETTINGS.tradeUp.attr];
const on = () => attrs.every((a) => html.hasAttribute(a));
let data = null;
const byCard = createShotMatch(
2,
( a, b) => a.float === b.float && a.st === b.st && a.sv === b.sv,
);
const byGrade = createShotMatch(4, Object.is);
const byPrice = createShotMatch(5, Object.is);
const drawn = new WeakMap();
const ref = () => {
const v = html.getAttribute(TF_SETTINGS.priceRef.attr) ?? TF_SETTINGS.priceRef.default;
const m = tapMatches(PRICE_REF, v) ? tapApply(tapExec, PRICE_REF, [v]) : null;
return [m?.[1] ?? 'csfloat', m?.[2] === 'bid' ? 'bid' : 'ask'];
};
function clear(card) {
for (const el of card.querySelectorAll('span.tf-tu')) (tipBox.tie(el, null), el.remove());
}
function sync(card) {
const grid = on() && !!data && !card.closest(TF_SELECTORS.dialog) && !!card.closest('app-item-container');
const key = grid ? byCard.keyOf(card) : null;
const [facts, grade, cents] = [byCard.idFor(key), byGrade.idFor(key), byPrice.idFor(key)];
const row = card.querySelector(TF_SELECTORS.priceRow);
const dp = typeof grade === 'string' ? grade.split(':').slice(0, 2).join(':') : '';
const [market, side] = ref();
const m = data && facts && dp && row ? tradeupModel(data, dp, facts.float, facts.st, facts.sv, market, side) : null;
if (!m || !row) return clear(card);
if (cents) priceSeen(cents, card.querySelector(TF_SELECTORS.price)?.textContent);
const own = card.querySelector(TF_SELECTORS.auction) ? null : cents;
const spans = card.querySelectorAll('span.tf-tu');
for (let i = 1; i < spans.length; i++) spans[i].remove();
const span = (
spans[0] ?? Object.assign(layoutSpan('tf-tu', ''), { tabIndex: 0, role: 'group' })
);
const words = tradeupWords(m);
const sig = JSON.stringify([words, m.ev, m.med, own, market, side, priceMoney(1e4)]);
if (drawn.get(span) !== sig) {
span.textContent = words;
span.ariaLabel = `Trade-up ${words.slice(2)}`;
drawn.set(span, sig);
}
tipBox.tie(span, () => tradeupTip(m, own, side));
const after = card.querySelector(':scope .footer > :is(button.tf-pc, span.tf-pcw)') ?? row;
if (span.previousElementSibling !== after) after.after(span);
}
const synced = byCard.tracked(sync);
const syncAll = () => {
for (const card of document.querySelectorAll(TF_SELECTORS.card)) synced(card);
};
const prev = gradeSide.got;
gradeSide.got = (v) => {
try {
if (tapOwn(v, 'tf') !== 'tradeup') return prev(v);
const text = tapOwn(v, 'text');
const next = typeof text === 'string' && text.length <= TU_MAX_TEXT ? tradeupCheck(tuParse(text)) : null;
if (next) ((data = next), shotOnce(syncAll));
} catch {}
};
cardWatch({
attrs: [...attrs, TF_SETTINGS.priceRef.attr],
setting: () => shotOnce(syncAll),
cards(changed, added) {
if (on() && data) for (const card of new Set([...changed, ...added])) synced(card);
},
});
return {
wanted: on,
feed(listings) {
if (!on()) return;
const fresh = new Set([...byCard.learn(listings), ...byGrade.learn(listings), ...byPrice.learn(listings)]);
byCard.resync(fresh, synced);
},
};
}
// ---- src/sticker-rule.js
const STICKER_EDGES = Object.freeze([0.1, 0.25]);
const STICKER_CHEAP = 1000;
const STICKER_PCT = /^(100|[1-9]?\d)$/;
function stickerRuleOf(id, keeps, cheap) {
const bands = [];
for (let i = 0; i <= STICKER_EDGES.length; i++)
bands[i] = Object.freeze({ below: i < STICKER_EDGES.length ? STICKER_EDGES[i] : Infinity, keep: keeps[i] });
return Object.freeze({ id, bands: Object.freeze(bands), cheap, key: `${id} ${keeps.join(' ')} ${cheap}` });
}
const STICKER_STRICT = stickerRuleOf('strict', [0.2, 0.1, 0], STICKER_CHEAP);
const STICKER_RULES = Object.freeze({
strict: STICKER_STRICT,
guides: stickerRuleOf('guides', [0.6, 0.3, 0.1], STICKER_CHEAP),
full: stickerRuleOf('full', [1, 1, 1], 0),
});
const STICKER_RULE_ATTRS = Object.freeze([
TF_SETTINGS.stickerRule.attr,
TF_SETTINGS.stickerW1.attr,
TF_SETTINGS.stickerW2.attr,
TF_SETTINGS.stickerW3.attr,
]);
function stickerRule() {
const html = document.documentElement;
const id = html.getAttribute(STICKER_RULE_ATTRS[0]);
if (id === 'guides' || id === 'full') return STICKER_RULES[id];
if (id !== 'custom') return STICKER_STRICT;
const keeps = [];
for (let i = 1; i < STICKER_RULE_ATTRS.length; i++) {
const v = html.getAttribute(STICKER_RULE_ATTRS[i]);
if (!tapMatches(STICKER_PCT, v)) return STICKER_STRICT;
keeps[i - 1] = +v / 100;
}
return stickerRuleOf('custom', keeps, STICKER_CHEAP);
}
function stickerKeep(wear, price, rule) {
if (!(wear > 0)) return 1;
if (price !== null && price < rule.cheap) return 0;
const pct = stickerRound(wear * 100);
let i = 0;
while (pct >= rule.bands[i].below * 100) i++;
return rule.bands[i].keep;
}
// ---- src/sticker-math.js
const STICKER_CRAFT = 4;
const STICKER_FREE = 100;
const STICKER_CHECK = Object.freeze({ few: 5, far: 1.5, gap: 100, steam: 2, gone: 2880 });
const [stickerFixed, stickerRound] = [Number.prototype.toFixed, Math.round];
const stickerPct = (x) => (x * 100 > 100 ? '>100%' : `${tapApply(stickerFixed, x * 100, [1])}%`);
function stickerSame(a, b) {
if (a.st.length !== b.st.length || a.kc.length !== b.kc.length) return false;
for (let i = 0; i < a.st.length; i++) {
if (a.st[i].name !== b.st[i].name || a.st[i].wear !== b.st[i].wear) return false;
}
for (let i = 0; i < a.kc.length; i++) if (a.kc[i].name !== b.kc[i].name) return false;
return true;
}
const STICKER_TYPE = /^(?:(?:Sticker|Patch|Charm|Sticker Slab|Souvenir Charm) \| )?(.+)$/;
const STICKER_REEL = /^(?:Souvenir )?Charm \| (.{1,40}?) Highlight \| (\S{1,40}) (.{1,60})$/;
const stickerLabel = (name) => tapApply(tapExec, STICKER_TYPE, [name])?.[1] ?? name;
function stickerModel(f, price, bid = false, rule = STICKER_STRICT) {
const groups = [];
let [clean, counted, scraped, craft] = [0, 0, 0, 0];
for (let i = 0; i < f.st.length; i++) {
const s = f.st[i];
const keep = stickerKeep(s.wear, s.price, rule);
if (keep < 1) scraped++;
clean += s.price ?? 0;
counted += (s.price ?? 0) * keep;
let g = null;
for (let j = 0; j < groups.length && !g; j++) {
if (groups[j].name === s.name && groups[j].wear === s.wear) g = groups[j];
}
if (g) (g.n++, (g.counted += (s.price ?? 0) * keep));
else {
const one = { name: s.name, label: stickerLabel(s.name), wear: s.wear, n: 1, each: s.price, keep, qty: s.qty };
groups[groups.length] = { ...one, counted: (s.price ?? 0) * keep, craft: 0 };
}
}
for (let i = 0; i < groups.length; i++) {
let [n, first] = [0, true];
for (let j = 0; j < f.st.length; j++) if (f.st[j].name === groups[i].name) n++;
for (let j = 0; j < i; j++) if (groups[j].name === groups[i].name) first = false;
if (n >= STICKER_CRAFT && first) ((groups[i].craft = n), (craft = n > craft ? n : craft));
}
const est = f.est;
const over = est === null ? null : price - est;
const sp = over === null || over <= 0 ? null : counted > 0 ? over / counted : Infinity;
const free = !bid && over !== null && over <= 0 && counted >= STICKER_FREE;
return { price, est, clean, counted, groups, craft, scraped, sp, free, kc: f.kc, rule };
}
function stickerReel(name) {
const m = tapApply(tapExec, STICKER_REEL, [name]);
return m ? { event: m[1], player: m[2], play: m[3] } : null;
}
function stickerCheck(ref, qty, slots) {
if (ref === null || !(ref > 0) || !(slots === null || (tapIsArray(slots) && slots.length === 5))) return null;
const asks = [];
let most = 0;
for (let i = 0; slots && i < 5; i++) {
const s = tapOwn(slots, i);
if (!tapIsArray(s) || s.length !== 4) continue;
const [ask, age, count] = [tapOwn(s, 0), tapOwn(s, 2), tapOwn(s, 3)];
if (!(tapInteger(ask) && tapInteger(age) && tapInteger(count)) || age > STICKER_CHECK.gone) continue;
if (count > most) most = count;
if (!(ask > 0) || i === STICKER_CHECK.steam) continue;
let j = asks.length;
for (; j > 0 && asks[j - 1] > ask; j--) asks[j] = asks[j - 1];
asks[j] = ask;
}
const h = asks.length >> 1;
const mid = !asks.length ? 0 : asks.length % 2 ? asks[h] : (asks[h - 1] + asks[h]) / 2;
const thin = (qty ?? 0) < STICKER_CHECK.few && most < STICKER_CHECK.few;
const apart = ref > mid ? ref - mid >= STICKER_CHECK.gap : mid - ref >= STICKER_CHECK.gap;
const far = mid > 0 && apart && (ref > mid * STICKER_CHECK.far || ref * STICKER_CHECK.far < mid);
return { thin, far, mid, most };
}
// ---- src/sticker-pop.js
function stickerAmount(c) {
const exact = stickerMoney(c, true);
const num = priceNumber(stickerRound(c), true);
const units = +num.split(',').join('');
if (!(units >= 1e3)) return exact;
const tenths = priceFloor(units / (units < 1e6 ? 100 : 1e5));
const text = `${priceFloor(tenths / 10)}${tenths % 10 ? `.${tenths % 10}` : ''}${units < 1e6 ? 'k' : 'M'}`;
return exact.replace(num, text);
}
function stickerCardParts(m, compact = false) {
if (!m.groups.length || (m.sp === null && !m.free)) return null;
const none = !m.free && !(m.counted > 0);
if (none && !m.scraped) return null;
const sp = m.free
? 'Stickers free'
: none
? `${m.scraped} scraped`
: `${stickerPct( (m.sp))} SP`;
if (compact) return [[`${m.craft ? `${m.craft}× ` : ''}${stickerAmount(m.counted)}`, sp], m.free];
const parts = [stickerMoney(m.counted, true), sp];
if (m.craft) parts[parts.length] = `${m.craft}×`;
else if (m.scraped && !none) parts[parts.length] = `${m.scraped} scraped`;
for (let i = 0; i < m.kc.length; i++) if (m.kc[i].kind === 'slab') parts[parts.length] = 'slab';
return [parts, m.free];
}
function stickerBandRows(rule, money) {
const n = ( x) => `${stickerRound(x * 100)}%`;
const rows = [['clean', '100%']];
let from = 0;
for (let i = 0; i < rule.bands.length; i++) {
const { below, keep } = rule.bands[i];
if (i + 1 < rule.bands.length && rule.bands[i + 1].keep === keep) continue;
const [lo, hi] = [from ? n(from) : '', below === Infinity ? '' : n(below)];
const what =
!lo && !hi ? 'any wear' : !lo ? `wear under ${hi}` : !hi ? `${lo} and over` : `${lo.slice(0, -1)}–${hi}`;
rows[rows.length] = [what, n(keep)];
from = below;
}
if (rule.cheap) rows[rows.length] = [`scraped under ${money(rule.cheap)}`, '0%'];
return rows;
}
function stickerBandTip(rule) {
const rows = stickerBandRows(rule, (c) => stickerMoney(c, true)).map(([a, b]) => ({
c: [`${a[0].toUpperCase()}${a.slice(1)}`, b],
}));
return { head: 'Scraped stickers count less', rows, source: "CSFloat's own SP counts them at full value." };
}
const stickerShort = (label) => label.split(' | ')[0] || label;
function stickerName(m, g) {
const short = stickerShort(g.label);
const same = m.groups.some((h) => h.label !== g.label && stickerShort(h.label) === short);
return `${g.n > 1 ? `${g.n}× ` : ''}${same ? g.label : short}`;
}
function stickerTip(m) {
const rows = [];
for (let i = 0; i < m.groups.length; i++) {
const g = m.groups[i];
const worn = g.wear > 0 ? `${stickerRound(g.wear * 100)}% scraped` : '';
const at = g.each === null ? '—' : stickerMoney(g.counted);
rows[rows.length] = { c: [stickerName(m, g), worn ? [worn, 'warn'] : '', at] };
}
for (let i = 0; i < m.kc.length; i++) {
const k = m.kc[i];
if (k.kind !== 'slab') continue;
const at = k.price === null ? '—' : stickerMoney(k.price);
rows[rows.length] = { c: [`Slab: ${stickerShort(stickerLabel(k.name))}`, 'in estimate', at], tone: 'dim' };
}
const gap = Math.abs(m.price - (m.est ?? 0));
const said = stickerMoney(gap, gap >= 1e4);
const sp = m.sp === null ? '' : stickerPct(m.sp);
const free = m.free ? ': stickers free' : '';
const why = m.counted > 0 ? `${sp} SP` : m.clean > 0 ? 'every sticker scraped' : 'no sticker prices';
const note =
said === stickerMoney(0)
? `At the estimate${free}`
: m.sp === null
? `${said} under the estimate${free}`
: `${said} over the estimate: ${why}`;
return {
head: 'Stickers',
aside: m.counted < m.clean ? `${stickerMoney(m.counted)} of ${stickerMoney(m.clean)}` : stickerMoney(m.clean),
rows,
note,
tone: m.free ? 'good' : undefined,
source:
m.rule.id === 'full'
? 'Scraped stickers count in full.'
: `Counted by wear: ${stickerBandRows(m.rule, (c) => stickerMoney(c, true))
.map(([a, b]) => `${a} ${b}`)
.join(', ')}`,
};
}
// ---- src/sticker-cards.js
const STICKER_SEP = ' · ';
function stickerEl(tag, cls, text, into) {
const el = document.createElement(tag);
el.className = cls;
if (text !== undefined) el.textContent = text;
into?.append(el);
return el;
}
const stickerMoney = (c, whole = false) => (priceFinite(c) && c >= 0 ? priceMoney(stickerRound(c), whole) : '');
function createStickerCards() {
const html = document.documentElement;
const attrs = [TF_SETTINGS.stickers.attr, TF_SETTINGS.stickerCards.attr, TF_SETTINGS.stickerBadge.attr];
const compact = TF_SETTINGS.stickerCompact.attr;
const on = () => html.hasAttribute(attrs[0]) && (html.hasAttribute(attrs[1]) || html.hasAttribute(attrs[2]));
const byFacts = createShotMatch(9, stickerSame);
const byPrice = createShotMatch(5, Object.is);
const drawn = new WeakMap();
let unit = '';
const due = (new Set());
const widths = (new WeakMap());
let frame = 0;
function fit() {
frame = 0;
const lines = [...due].filter((b) => b.isConnected);
due.clear();
const opts = lines.map((b) => [...b.querySelectorAll(':scope > .tf-sp-o')]);
for (const o of opts.flat()) o.removeAttribute('data-cut');
const keep = lines.map((b, k) => {
const m = (b.firstElementChild);
let [over, n] = [m.scrollWidth - m.clientWidth + b.scrollWidth - b.clientWidth, opts[k].length];
while (over > 0.5 && n) over -= opts[k][--n].getBoundingClientRect().width;
return n;
});
opts.forEach((os, k) => os.forEach((o, i) => i >= keep[k] && o.setAttribute('data-cut', '')));
}
const soon = ( b) => b && (due.add(b), (frame ||= requestAnimationFrame(fit)));
const sized = new ResizeObserver((entries) => {
for (const { target, contentRect } of entries) {
const b = target.isConnected ? target.querySelector('span.tf-sp > .tf-sp-b') : null;
if (!b) (sized.unobserve(target), widths.delete(target));
else if (widths.get(target) !== contentRect.width) (widths.set(target, contentRect.width), soon(b));
}
});
function clear(card) {
for (const el of card.querySelectorAll('span.tf-sp')) el.remove();
for (const el of card.querySelectorAll('app-sticker-overpay[data-tf-sp]')) el.removeAttribute('data-tf-sp');
}
function sync(card) {
const w = on() && !!card.closest(TF_SELECTORS.dialog);
const box = on() && html.hasAttribute(attrs[w ? 2 : 1]) ? card.querySelector(TF_SELECTORS.stickerBox) : null;
const key = box ? byFacts.keyOf(card) : null;
const [facts, cents] = [byFacts.idFor(key), byPrice.idFor(key)];
if (facts && cents) priceSeen(cents, card.querySelector(TF_SELECTORS.price)?.textContent);
const rule = stickerRule();
const m =
box && facts && cents
? stickerModel( (facts), cents, !!card.querySelector(TF_SELECTORS.auction), rule)
: null;
const said = m ? stickerCardParts(m, html.hasAttribute(compact)) : null;
if (!box || !m || !said) return clear(card);
const host = box.querySelector(TF_SELECTORS.stickerBadge);
const row = box.querySelector(TF_SELECTORS.charmRow);
const [into, next] = host?.parentElement
? [host.parentElement, host]
: row
? [row, null]
: [box, box.querySelector(':scope > :not(.tf-sp)')];
const spans = (card.querySelectorAll('span.tf-sp'));
for (let i = 1; i < spans.length; i++) spans[i].remove();
const span = spans[0] ?? Object.assign(stickerEl('span', 'tf-sp'), { tabIndex: 0, role: 'group' });
span.classList.toggle('tf-sp-w', w);
const sig = `${key}\n${JSON.stringify(said)}`;
if (drawn.get(span) !== sig) {
const [parts, free] = said;
const badge = stickerEl('span', 'tf-sp-b');
const main = stickerEl('span', 'tf-sp-m', undefined, badge);
main.append(`${parts[0]}${STICKER_SEP}`);
stickerEl('span', free ? 'tf-sp-free' : 'tf-sp-sp', parts[1], main);
for (let i = 2; i < parts.length; i++) stickerEl('span', 'tf-sp-o', `${STICKER_SEP}${parts[i]}`, badge);
span.replaceChildren(badge);
span.ariaLabel = `Sticker value ${parts.join(STICKER_SEP)}`;
drawn.set(span, sig);
soon(badge);
}
tipBox.tie(span, () => stickerTip(m));
const moved = span.parentElement !== into || span.nextElementSibling !== next;
if (moved) (into.insertBefore(span, next), soon(span.firstElementChild));
if (!widths.has(card)) (widths.set(card, 0), sized.observe(card));
for (const el of card.querySelectorAll('app-sticker-overpay[data-tf-sp]')) {
if (el !== host) el.removeAttribute('data-tf-sp');
}
if (host && host.getAttribute('data-tf-sp') !== (w ? 'w' : '')) host.setAttribute('data-tf-sp', w ? 'w' : '');
}
const synced = byFacts.tracked(sync);
const syncAll = () => {
for (const card of document.querySelectorAll(TF_SELECTORS.card)) synced(card);
};
cardWatch({
attrs: [...attrs, compact, ...STICKER_RULE_ATTRS],
setting: syncAll,
cards(changed, added) {
for (const card of new Set([...changed, ...added])) synced(card);
},
settle() {
if (priceUnit() !== unit && ((unit = priceUnit()), on())) syncAll();
},
});
return {
wanted: on,
feed(listings) {
const fresh = new Set([...byFacts.learn(listings), ...byPrice.learn(listings)]);
if (on()) byFacts.resync(fresh, synced);
},
};
}
// ---- src/sticker-panel-draw.js
let stickerFull = false;
function stickerRow(list, name, value, sub = '', cls = '') {
const row = stickerEl('div', `tf-pw-row${cls}`, undefined, list);
const top = stickerEl('div', 'tf-pw-top', undefined, row);
const who = stickerEl('span', 'tf-pw-who', undefined, top);
stickerEl('span', 'tf-pw-dot', undefined, who).ariaHidden = 'true';
stickerEl('span', 'tf-pw-name', name, who).title = name;
stickerEl('span', 'tf-pw-ask', value, top);
if (sub) stickerEl('div', 'tf-pw-sub tf-sw-worn', sub, row);
return row;
}
function stickerFlagBit(row, f, ref, qty) {
const ask = row.firstElementChild?.lastElementChild;
if (!f || !(f.thin || f.far) || ref === null || !ask) return;
const el = stickerEl('span', 'tf-sw-flag', f.far ? 'disputed' : 'thin');
ask.before(el);
const [at, n] = [stickerMoney(ref), qty ?? 0];
tipBox.tie(el, {
head: f.far ? 'Disputed price' : 'Thin price',
body: f.far
? `CSFloat's reference ${at} is far from the middle ask of ${stickerMoney(f.mid)} on Buff, YouPin, Skinport ` +
`and CSFloat (OpenSkin). It still counts at CSFloat's.`
: `CSFloat's reference ${at} rests on ${n} listing${n === 1 ? '' : 's'}, and OpenSkin's markets list ` +
`${f.most} at most.`,
});
}
function stickerFoot(m, full) {
if (m.est === null) return null;
const gap = stickerMoney(Math.abs(m.price - m.est), true);
const free = m.free && !full ? 'Stickers free' : '';
if (gap === stickerMoney(0, true)) return [free || 'At estimate', ''];
if (m.price < m.est) return [free, `${gap} under estimate`];
const sp = full ? (m.clean > 0 ? (m.price - m.est) / m.clean : null) : m.counted > 0 ? m.sp : null;
const none = !full && m.clean > 0 ? 'All scraped' : 'No sticker prices';
return [sp === null ? none : `${stickerPct(sp)} SP`, `${gap} over estimate`];
}
function stickerPanelDraw(m, flags) {
const box = stickerEl('section', 'tf-pw tf-sw');
const title = m.groups.length ? 'Stickers' : 'Charm';
box.ariaLabel = title;
const head = stickerEl('div', 'tf-pw-head', undefined, box);
stickerEl('span', 'tf-pw-title', title, head);
const list = stickerEl('div', 'tf-pw-list', undefined, box);
const foot = stickerEl('div', 'tf-sw-foot', undefined, box);
const fill = () => {
const full = stickerFull && m.counted < m.clean;
list.replaceChildren();
foot.replaceChildren();
for (let i = 0; i < m.groups.length; i++) {
const g = m.groups[i];
const value = g.each === null ? '—' : stickerMoney(full ? g.each * g.n : g.counted, true);
const worn = g.wear > 0 ? `${stickerRound(g.wear * 100)}% scraped` : '';
stickerFlagBit(stickerRow(list, stickerName(m, g), value, worn), flags[i], g.each, g.qty);
}
for (let i = 0; i < m.kc.length; i++) {
const k = m.kc[i];
const reel = k.kind === 'reel' ? stickerReel(k.name) : null;
const label = stickerLabel(k.name);
const name =
k.kind === 'slab' ? `Slab: ${label}` : reel ? `Highlight: ${reel.player} ${reel.play}` : `Charm: ${label}`;
const row = stickerRow(list, name, 'in estimate', '', ' tf-sw-dim');
if (k.kind === 'slab') stickerFlagBit(row, flags[m.groups.length + i], k.price, k.qty);
}
const said = m.groups.length ? stickerFoot(m, full) : null;
if (!said) return;
if (said[0]) stickerEl('span', m.free && !full ? 'tf-sw-free' : 'tf-sw-lead', said[0], foot);
if (said[1]) stickerEl('span', 'tf-sw-tail', `${said[0] ? ' · ' : ''}${said[1]}`, foot);
};
if (m.counted < m.clean) {
const group = stickerEl('span', 'tf-sw-mode', undefined, head);
group.setAttribute('role', 'group');
group.ariaLabel = 'Sticker value as';
const words = [];
for (let i = 0; i < 2; i++) {
const b = salesButton((i === 1) === stickerFull, () => {
stickerFull = i === 1;
for (let j = 0; j < 2; j++) words[j].setAttribute('aria-pressed', String(j === i));
fill();
});
b.className = 'tf-pw-word';
b.textContent = i ? 'Full' : 'Counted';
group.append(b);
words[i] = b;
tipBox.tie(
b,
i
? { head: 'Full value', body: "Every sticker at its clean price, the way CSFloat's own SP counts them." }
: stickerBandTip(m.rule),
);
}
}
fill();
return list.childElementCount ? box : null;
}
// ---- src/sticker-panel.js
const [stickerThen, stickerFrame] = [Promise.prototype.then, globalThis.requestAnimationFrame];
function createStickerPanel(prices) {
const html = document.documentElement;
const attrs = [TF_SETTINGS.stickers.attr, TF_SETTINGS.stickerPanel.attr];
const on = () => html.hasAttribute(attrs[0]) && html.hasAttribute(attrs[1]);
const byFacts = createShotMatch(9, stickerSame);
const byPrice = createShotMatch(5, Object.is);
const orders = `${TF_SELECTORS.dialogGrid} > ${TF_SELECTORS.buyOrders}`;
let shown = null;
let [want, turn, queued] = ['', 0, 0];
function place(below) {
if (!shown) return;
const grid = below.closest(TF_SELECTORS.dialogGrid);
const right = html.hasAttribute(TF_SETTINGS.stickerRight.attr)
? grid?.querySelector(':scope > .grid-similar')
: null;
if (right && right.getClientRects().length) return void (right.firstElementChild !== shown && right.prepend(shown));
const next = below.parentElement?.querySelector(':scope > .tf-pw:not(.tf-sw)') ?? below;
if (shown && shown.nextElementSibling !== next) next.before(shown);
}
function draw(m, flags, below) {
const next = stickerPanelDraw(m, flags);
const word = shown?.contains(document.activeElement) ? document.activeElement?.textContent : '';
if (shown && next) shown.replaceWith(next);
else shown?.remove();
shown = next;
place(below);
if (word) {
const same = [...(next?.querySelectorAll('button') ?? [])].find((b) => b.textContent === word);
same?.focus({ preventScroll: true });
}
}
function check( m, below, at) {
const asks = [];
for (let i = 0; i < m.groups.length; i++) asks[i] = [m.groups[i].name, m.groups[i].each, m.groups[i].qty];
for (let i = 0; i < m.kc.length; i++) {
const k = m.kc[i];
if (k.kind === 'slab') asks[m.groups.length + i] = [k.name, k.price, k.qty];
}
const flags = [];
let left = 1;
const done = () => --left === 0 && at === turn && on() && draw(m, flags, below);
for (let i = 0; i < asks.length; i++) {
const a = asks[i];
if (!a || a[1] === null) continue;
left++;
tapApply(stickerThen, prices.lookup(a[0]), [
( slots) => {
if (slots || prices.answers()) flags[i] = stickerCheck(a[1], a[2], slots);
done();
},
]);
}
done();
}
function sync() {
const dialog = on() ? document.querySelector(TF_SELECTORS.dialog) : null;
const below = dialog?.querySelector(orders);
const card = dialog?.querySelector(TF_SELECTORS.card);
const key = card ? byFacts.keyOf(card) : null;
const [facts, cents] = [byFacts.idFor(key), byPrice.idFor(key)];
if (below && facts && cents) priceSeen(cents, card?.querySelector(TF_SELECTORS.price)?.textContent);
const priced = html.hasAttribute(TF_SETTINGS.prices.attr);
const bid = !!card?.querySelector(TF_SELECTORS.auction);
const rule = stickerRule();
const now = below && facts && cents ? `${key}\n${cents}\n${priceUnit()}\n${priced}\n${bid}\n${rule.key}` : '';
if (now === want) {
if (below) place(below);
return;
}
[want, turn] = [now, turn + 1];
if (!below || !now) return void (shown?.remove(), (shown = null));
const m = stickerModel( (facts), (cents), bid, rule);
draw(m, [], below);
if (shown && priced) check(m, below, turn);
}
const later = () =>
(queued ||= tapApply(stickerFrame, globalThis, [
() => {
queued = 0;
try {
sync();
} catch {}
},
]));
const look = [...attrs, TF_SETTINGS.prices.attr, TF_SETTINGS.stickerRight.attr, ...STICKER_RULE_ATTRS];
const follow = () => dialogFollow(watch, look, { attributeFilter: ['href'] });
const watch = new MutationObserver(() => {
follow();
later();
});
follow();
return {
wanted: on,
feed(listings) {
byFacts.learn(listings);
byPrice.learn(listings);
later();
},
};
}
// ---- src/menu-names.js
const MENU_IMG = /^https:\/\/steam\.static\.csfloat\.io\/v1\/images\/([^?#]{1,480})$/;
const MENU_WEARS = Object.freeze(['Factory New', 'Minimal Wear', 'Field-Tested', 'Well-Worn', 'Battle-Scarred']);
const MENU_ITEM = RegExp(`^(.+?)(?: \\((${MENU_WEARS.join('|')})\\))?(?: \\[(${TAP_PHASE.source.slice(2, -2)})\\])?$`);
const MENU_SHORT = Object.freeze(['FN', 'MW', 'FT', 'WW', 'BS']);
const MENU_GLOVES = /^★ (?:[\w-]+ )*(?:Gloves|Wraps) \|/;
const menuDecode = decodeURIComponent;
let menuCharmNames = null;
function menuCard(item) {
if (item.classList.contains('mobile') || item.querySelector(':scope > .image.abstract')) return null;
const img = (item.querySelector(TF_SELECTORS.menuImg));
const m = img ? tapApply(tapExec, MENU_IMG, [img.src]) : null;
let full = '';
try {
full = m ? menuDecode(m[1]) : '';
} catch {}
const parts = tapMatches(PRICE_NAME, full) ? tapApply(tapExec, MENU_ITEM, [full]) : null;
if (!parts) return null;
const [, base, wear, phase = null] = parts;
const from = item.querySelector(TF_SELECTORS.menuText)?.querySelector(TF_SELECTORS.menuFrom);
const id = from?.getAttribute('aria-describedby') ?? '';
const tip = (id && document.getElementById(id)?.textContent) || '';
const listed = MENU_WEARS.filter((w) => tip.split('\n').some((line) => line.trim().startsWith(`${w} - `)));
const wears = wear ? (listed.length ? listed : [...MENU_WEARS]) : [];
const st = base.startsWith('★ ')
? MENU_GLOVES.test(base)
? ''
: `★ StatTrak™ ${base.slice(2)}`
: wear || base.startsWith('Music Kit |')
? `StatTrak™ ${base}`
: '';
const pairs = [];
for (const name of st ? [base, st] : [base])
for (const w of wears.length ? wears : ['']) pairs.push([w ? `${name} (${w})` : name, phase]);
return {
key: JSON.stringify([full, tip]),
title: phase ? `${base} (${phase})` : base,
wears: wears.map((w) => MENU_SHORT[MENU_WEARS.indexOf(w)]),
pairs,
graded: gradeNamed().get(`${base}\n${phase ?? ''}`) ?? null,
charm:
(menuCharmNames ??= new Map(GRADE_CHARMS_SRC.map((l) => [l.slice(l.indexOf(' ') + 1), l.split(' ')[0]]))).get(
full,
) ?? null,
};
}
function menuCharms(ix, index, light) {
const fams = new Map();
for (const s of ix.charms.get(index) ?? []) {
const fam = ix.d.families[s.family];
const [glyph, cols] = gradeGem(ix.d, s, light);
const blank = {
fam: gradeSays(fam, fam.name),
glyph,
cols,
level: '',
seeds: 0,
guides: 0,
of: new Set(),
says: [],
};
const had = fams.get(fam.id) ?? blank;
had.of.add(s.guide);
for (const lv of s.levels) {
const say = gradeSays(lv, lv.label);
if (!had.says.includes(say)) had.says.push(say);
}
fams.set(fam.id, had);
}
return [...fams.values()].map(({ of, says, ...t }) => ({ ...t, guides: of.size, say: says.join(', ') }));
}
function menuTiers(ix, graded, light) {
const fams = new Map();
for (const si of ix.items.get(graded) ?? []) {
const s = ix.d.systems[si];
const fam = ix.d.families[s.family];
const top = tierLevels(s)[0];
if (!top) continue;
const li = s.levels.findIndex(( l) => l.seeds.length);
const rank = gradeRank(ix.d, si, li);
const had = fams.get(fam.id);
const of = (had?.of ?? new Set()).add(s.guide);
if (had && had.rank <= rank) continue;
const [[glyph, cols]] = gradeGems(ix.d, [si], light);
const name = gradeFam(fam);
const level = top.whole ? '' : top.label;
fams.set(fam.id, { fam: name, glyph, cols, level, seeds: top.seeds.length, guides: 0, of, rank });
}
return [...fams.values()].sort((a, b) => a.rank - b.rank).map(({ of, rank, ...t }) => ({ ...t, guides: of.size }));
}
// ---- src/menu-draw.js
const MENU_WORDS = Object.freeze({
heads: Object.freeze(['Market', 'Lowest ask', 'Listed', 'Age']),
ref: 'Reference',
});
function menuWant(rows) {
const v = document.documentElement.getAttribute(TF_SETTINGS.priceRef.attr) ?? TF_SETTINGS.priceRef.default;
const m = tapMatches(PRICE_REF, v) ? tapApply(tapExec, PRICE_REF, [v]) : null;
const key = m?.[1] === 'lowest' ? rows.find((r) => r.lowest)?.key : m?.[1];
const at = PRICE_MARKETS.find((x) => x[0] === key) ?? PRICE_MARKETS[0];
return [at[0], at[1], m?.[2] === 'bid' ? 'bid' : 'ask'];
}
function menuModel(card, answers, tiers) {
const by = [null, null, null, null, null];
const priced = [false, false, false, false, false];
for (let j = 0; j < answers.length; j++) {
const slots = answers[j];
for (let i = 0; slots && i < 5; i++) if (slots[i] !== 0) priced[i] = true;
for (const r of priceRows(slots, null, card.pairs[j][0], card.pairs[j][1])) {
const i = PRICE_MARKETS.findIndex((x) => x[0] === r.key);
const a = (by[i] ??= { ...r, ask: null, bid: null, count: null, lowest: false });
if (r.ask !== null && (a.ask === null || r.ask < a.ask)) [a.ask, a.age, a.stale] = [r.ask, r.age, r.stale];
if (r.bid !== null && (a.bid === null || r.bid < a.bid)) a.bid = r.bid;
if (r.count !== null) a.count = (a.count ?? 0) + r.count;
}
}
const rows = (by.filter((r) => r));
let low = null;
for (const r of rows) if (r.ask !== null && !(low && low.ask !== null && low.ask <= r.ask)) low = r;
if (low) low.lowest = true;
const want = menuWant(rows);
const hit = rows.find((r) => r.key === want[0]);
const phase = card.pairs[0]?.[1];
const none = phase && answers.some((a) => a) ? PRICE_MARKETS.filter((_, i) => !priced[i]).map((x) => x[1]) : [];
return { card, rows, none, want, ref: (want[2] === 'bid' ? hit?.bid : hit?.ask) ?? null, tiers };
}
function menuCount(n) {
const d = `${n}`;
let out = '';
for (let i = 0; i < d.length; i++) out += (i && (d.length - i) % 3 === 0 ? ',' : '') + d[i];
return out;
}
const menuTierSay = (t) => t.say ?? `${t.level ? `${t.level} · ` : ''}${t.seeds} seed${t.seeds === 1 ? '' : 's'}`;
const menuGuides = (t) => `${t.guides} guide${t.guides === 1 ? '' : 's'}`;
function menuLine(m) {
const [, market, side] = m.want;
return m.ref ? `· ${market}${side === 'bid' ? ' bid' : ''} ${priceMoney(m.ref, true)}` : '';
}
function menuGem(gem, tiers) {
if (!gem) return;
gem.replaceChildren(artSvg(tiers[0].glyph, tiers[0].cols, '', 16));
gem.setAttribute('role', 'img');
gem.setAttribute('aria-label', tiers.map((t) => `${t.fam}: ${menuTierSay(t)}, ${menuGuides(t)}`).join('. '));
}
function menuTierRows(tiers) {
const grid = priceEl('div', 'tf-mt');
for (const t of tiers)
grid.append(
artSvg(t.glyph, t.cols, '', 16),
priceEl('span', 'tf-mt-f', t.fam),
priceEl('span', 'tf-mt-l', menuTierSay(t)),
priceEl('span', 'tf-mt-g', menuGuides(t)),
);
return grid;
}
function menuTip(tiers) {
const pop = priceEl('div', 'tf-gp tf-mp');
pop.setAttribute('role', 'tooltip');
pop.append(menuTierRows(tiers));
return pop;
}
function menuSheet(m) {
const pop = priceEl('div', 'tf-pp tf-ms');
pop.setAttribute('role', 'dialog');
pop.setAttribute('aria-label', m.card.title);
const head = priceEl('div', 'tf-pp-h');
head.append(priceEl('span', '', m.card.title), priceEl('span', '', m.card.wears.join(', ')));
const grid = priceEl('div', 'tf-pp-g');
const heads = priceEl('div', 'tf-pp-r tf-pp-hd');
for (const t of MENU_WORDS.heads) heads.append(priceEl('span', '', t));
grid.append(heads);
for (const r of m.rows) {
if (r.ask === null) continue;
const row = priceEl('div', 'tf-pp-r');
const name = priceEl('span', 'tf-pp-n');
name.append(priceEl('span', 'tf-pp-l', r.name));
row.append(name, priceEl('span', 'tf-pp-a', priceMoney(r.ask)));
row.append(priceEl('span', 'tf-pp-b', r.count === null ? '—' : menuCount(r.count)));
row.append(priceAgeEl('tf-pp-t', r));
row.toggleAttribute('data-low', r.lowest);
row.toggleAttribute('data-stale', r.stale);
grid.append(row);
}
pop.append(head, grid);
if (m.tiers.length) pop.append(menuTierRows(m.tiers));
if (m.none.length) pop.append(priceEl('div', 'tf-ms-z', `No ${m.card.pairs[0][1]} price on ${m.none.join(', ')}`));
const foot = priceEl('div', 'tf-pp-ft');
const credit = priceEl('a', 'tf-pp-c', PRICE_CREDIT.text);
Object.assign(credit, { href: PRICE_CREDIT.href, target: '_blank', rel: 'noopener noreferrer' });
const [, market, side] = m.want;
foot.append(credit, priceEl('span', '', `${MENU_WORDS.ref}: ${market} ${side}`));
pop.append(foot);
return pop;
}
// ---- src/menu-pop.js
function createMenuPop() {
let pop = null;
let owner = null;
let [frame, at, closing] = [0, '', false];
let cancel = () => {};
const later = ( f, ms) => {
cancel();
cancel = tickAfter(f, ms);
};
const cardOf = ( el) => el.closest(TF_SELECTORS.menuCard);
function place() {
frame = 0;
if (!pop || !owner) return;
const r = owner.getBoundingClientRect();
const card = cardOf(owner);
if (!owner.isConnected || !card || r.bottom < 0 || r.top > innerHeight) return close();
const tip = owner.classList.contains('tf-mg');
const box = tip ? r : card.getBoundingClientRect();
const { width: w, height: h } = pop.getBoundingClientRect();
const y = box.bottom + 6 + h <= innerHeight - 8 ? box.bottom + 6 : box.top - 6 - h;
const x = Math.max(8, Math.min(tip ? r.left - 4 : box.left, innerWidth - w - 8));
const now = `${x}px ${Math.max(8, y)}px`;
if (now !== at) [at, pop.style.left, pop.style.top] = [now, `${x}px`, `${Math.max(8, y)}px`];
frame = tapApply(priceFrame, globalThis, [place]);
}
function close() {
cancel();
pop?.remove();
[pop, owner, at, closing] = [null, null, '', false];
}
function show(anchor, draw) {
const next = anchor.isConnected ? draw() : null;
if (!next) return;
close();
[pop, owner] = [next, anchor];
pop.popover = 'manual';
document.body.append(pop);
pop.showPopover?.();
if (!frame) place();
}
const keep = ( t) =>
t instanceof Node && !!owner && (!!pop?.contains(t) || !!cardOf(owner)?.contains(t));
document.addEventListener(
'pointerover',
(e) => {
if (!pop) return;
if (keep(e.target)) return void ((closing = false), cancel());
if (!closing) ((closing = true), later(close, 200));
},
true,
);
document.addEventListener('pointerout', (e) => pop && !e.relatedTarget && later(close, 200), true);
document.addEventListener(
'pointerdown',
(e) => pop && !pop.contains( (e.target)) && close(),
true,
);
document.addEventListener('keydown', (e) => pop && e.key === 'Escape' && close(), true);
globalThis.addEventListener?.('resize', () => close());
return {
close,
hover(anchor, draw) {
anchor.onpointerenter = () =>
owner === anchor ? cancel() : later(() => anchor.matches(':hover') && show(anchor, draw), 150);
anchor.onpointerleave = () => owner !== anchor && cancel();
},
lost: (el) => !!owner && el.contains(owner) && close(),
};
}
// ---- src/menu-keep.js
function createMenuKeep(pop) {
const [gens, keys, ourOf] = [new WeakMap(), new WeakMap(), new WeakMap()];
function ours(box, cls, draw, sig = '') {
let el = (box?.querySelector(`:scope > span.${cls}`) ?? null);
if (!draw) return void (el && (pop.lost(el), el.remove()));
if (box && !el) {
el = (priceEl('span', cls));
pop.hover(el, () => ourOf.get( (el))?.[0]() ?? null);
box.append(el);
}
const had = el && ourOf.get(el)?.[1];
if (el) ourOf.set(el, [draw, sig]);
return el && had !== sig ? el : null;
}
function clear(card) {
gens.set(card, (gens.get(card) ?? 0) + 1);
keys.delete(card);
pop.lost(card);
for (const el of card.querySelectorAll('span.tf-mf, span.tf-mg')) el.remove();
card.querySelector('[data-tf-menu]')?.removeAttribute('data-tf-menu');
}
return { gens, keys, ours, clear };
}
// ---- src/menu-cards.js
const MenuSeen = globalThis.IntersectionObserver;
const [menuObserve, menuUnobserve] = (['observe', 'unobserve']).map((k) => MenuSeen?.prototype[k]);
function createMenus(prices, index) {
const html = document.documentElement;
const S = TF_SETTINGS;
const has = ( a) => html.hasAttribute(a);
const on = () => has(S.menus.attr) || has(S.menuGems.attr);
const pop = createMenuPop();
const [seen, shown, touched, waiting] = [new Set(), new Set(), new Set(), new Set()];
const { gens, keys, ours, clear } = createMenuKeep(pop);
let [dirty, cancel] = [false, () => {}];
const safe = ( card) => {
try {
sync(card);
} catch {}
};
const io = MenuSeen
? new MenuSeen((entries) => {
const opened = !shown.size;
for (const e of entries)
if (!e.isIntersecting) shown.delete(e.target);
else if (!shown.has(e.target)) (shown.add(e.target), waiting.add(e.target));
cancel();
const ask = () => {
for (const card of waiting) if (shown.has(card)) safe(card);
waiting.clear();
};
if (opened) ask();
else cancel = tickAfter(ask, 120);
})
: null;
function sync(card) {
const c = on() && card.isConnected ? menuCard(card) : null;
if (!c) return clear(card);
const at = (gens.get(card) ?? 0) + 1;
gens.set(card, at);
if (keys.get(card) !== c.key) (keys.set(card, c.key), pop.lost(card), line(card, null));
const item = c.graded || (c.charm && has(S.charms.attr));
const ix = item && has(S.menuGems.attr) && has(S.grades.attr) ? index() : null;
const light = html.getAttribute('data-tf-theme') === 'light';
const tiers = !ix ? [] : c.charm ? menuCharms(ix, c.charm, light) : menuTiers(ix, c.graded ?? '', light);
const image = card.querySelector(TF_SELECTORS.menuImage);
menuGem(
ours(image, 'tf-mg', tiers.length ? () => menuTip(tiers) : null, artStamp() + JSON.stringify(tiers)) ?? null,
tiers,
);
if (!has(S.menus.attr) || !has(S.prices.attr)) return line(card, null);
const answers = ([]);
let left = c.pairs.length;
c.pairs.forEach(([name, phase], j) =>
tapApply(priceThen, prices.lookup(name, phase), [
( r) => {
answers[j] = r;
if (--left || gens.get(card) !== at) return;
try {
line(card, menuModel(c, answers, tiers));
} catch {}
},
]),
);
}
function line(card, m) {
const box = card.querySelector(TF_SELECTORS.menuText);
const text = m && has(S.menus.attr) && box?.querySelector(TF_SELECTORS.menuFrom) ? menuLine(m) : '';
if (!text) return void (ours(box, 'tf-mf', null), box?.removeAttribute('data-tf-menu'));
const el = ours(box, 'tf-mf', () => menuSheet( (m)), text);
if (el) el.textContent = text;
if (!box?.hasAttribute('data-tf-menu')) box?.setAttribute('data-tf-menu', '');
}
function rescan() {
dirty = false;
for (const card of seen)
if (!card.isConnected || !on())
(seen.delete(card), shown.delete(card), io && tapApply(menuUnobserve, io, [card]));
if (on() && io)
for (const card of document.querySelectorAll(TF_SELECTORS.menuCard))
if (!seen.has(card)) (seen.add(card), tapApply(menuObserve, io, [card]));
}
const syncShown = () => shown.forEach(safe);
const overlays = ( n) =>
n.nodeType === 1 && (n).matches('.cdk-overlay-container');
cardWatch({
attrs: [S.menus.attr, S.menuGems.attr, S.prices.attr, S.grades.attr, S.charms.attr, S.priceRef.attr, ...ART_ATTRS],
setting() {
pop.close();
for (const card of seen) if (!on() || !shown.has(card)) clear(card);
syncShown();
rescan();
},
cards() {},
other(r) {
const el = r.target.nodeType === 1 ? (r.target) : r.target.parentElement;
if (!el || !on() || el.closest('span.tf-mf, span.tf-mg')) return;
const card = r.type === 'attributes' ? el.closest(TF_SELECTORS.menuCard) : null;
if (card) return void touched.add(card);
const nodes = [...r.addedNodes, ...r.removedNodes];
if (!dirty && !nodes.every(cardOurs)) dirty = !!el.closest('.cdk-overlay-container') || nodes.some(overlays);
},
settle() {
if (dirty) rescan();
for (const card of touched) if (shown.has(card)) safe(card);
touched.clear();
},
});
return { indexed: syncShown };
}
// ---- src/tier-leave.js
function createTierMemory() {
let mine = [];
return {
keep(it, sel, before) {
mine = [{ k: it.key, ix: it.ix, sel, before }, ...mine.filter((m) => m.sel !== sel)].slice(0, 8);
},
forget(f) {
mine = mine.filter((m) => !f(m.sel));
},
ours(key, k) {
const has = ( m) => !!key && m.sel.keys.includes(key);
return mine.find((m) => m.k === k && has(m)) ?? mine.find(has);
},
};
}
const tierClock = (at) => `${new Date(at).getHours()}:${`${new Date(at).getMinutes()}`.padStart(2, '0')}`;
function tierLeft(c) {
if (!c) return null;
const say = `${c.n}${c.of ? ` of ${c.of}` : ''} CSFloat requests left this hour, resets ${tierClock(c.at)}`;
const low = c.n < 40;
const left = low || !document.documentElement.hasAttribute(TF_SETTINGS.leftLow.attr) ? `${c.n} left` : '';
return { left, low, say };
}
const tierSaid = (el, v) => (v?.left && el.append(' · ', tierEl('span', v.low ? 'tf-tstrip-warn' : '', v.left)), el);
function tierProgress({ done, total }, left) {
const [k, n, c] = [Math.min(done + 1, total), total, tierLeft(left)];
const title = `Searching every seed of this tier: ${done} of ${n} searches back${c ? `. ${c.say}` : ''}`;
return { text: `Searching · ${k} of ${n}`, chip: `${k} of ${n}`, title, aria: `, ${title}`, none: true, ...c };
}
function tierDone(s, left) {
if (s.stop || !s.listed || s.found == null) return null;
const [n, all, c, more] = [s.found, s.lv.seeds.length, tierLeft(left), s.complete ? '' : '+'];
const of = `${more ? 'at least ' : ''}${n} of this tier's ${all} patterns listed on CSFloat`;
const head = more ? 'Some searches held more listings than were asked' : 'Every seed searched';
const title = `${head}: ${of}${c ? `. ${c.say}` : ''}`;
return {
text: `${n}${more} pattern${n === 1 && !more ? '' : 's'}`,
chip: '',
title,
aria: `, ${title}`,
none: false,
...c,
};
}
const tierProbeLine = (pend, on, left) =>
pend ? tierProgress(pend, left) : on && !on.pat ? (tierPaused(on) ?? tierDone(on, left)) : null;
function tierPaused(s) {
if (s.stop !== 'limit') return null;
const [n, all, soon] = [s.searched ?? 0, s.lv.seeds.length, s.until > Date.now()];
const part = n ? ` · ${n} of ${all} searched` : '';
const at = soon ? ` · resets ${tierClock(s.until)}` : '';
const got = n ? `${n} of ${all} seeds searched, the rest shown as they are` : 'the tier shown as it is, 40 a part';
const again = `Pick again ${soon ? `after ${tierClock(s.until)}` : 'later'} to search every seed again`;
const title = `CSFloat's rate limit reached: ${got}. ${again}`;
return { text: `Rate limit${part}${at}`, chip: 'rate limit', title, aria: `, ${title}`, none: true };
}
const TIER_SIGNIN = Object.freeze({
text: 'Sign in',
chip: 'sign in',
title: 'Sign in to CSFloat to search by tier',
aria: ', sign in to CSFloat to search by tier',
none: true,
});
const tierSignedOut = (gone) => gone || document.querySelector(TF_SELECTORS.signIn) !== null;
const TIER_SIGNIN_TIP = Object.freeze({
head: 'Tier search',
body: 'Tier search runs on your CSFloat account. Sign in to CSFloat (top right) to use it.',
});
const TIER_LOST = Object.freeze({
text: 'Did not load',
chip: 'did not load',
title: "CSFloat's search did not load",
aria: ", CSFloat's search did not load",
none: true,
});
const tierLost = (t, on, i) =>
t.lost === on.keys[i] || document.querySelector(TF_SELECTORS.searchError) !== null ? TIER_LOST : null;
// ---- src/tier-fit.js
function createTierFit(chip, after) {
let slot = (null);
let live = true;
const fits = new ResizeObserver(() => fit());
const watched = new Set();
const box = (e) => e.getBoundingClientRect();
function theirs(bar, loose = false) {
const v = [];
for (const e of bar.children) {
if (e === slot || e.matches('div.gap')) continue;
if (e.matches('div.refresh')) v.push(box(e.querySelector(':scope > button:not(.tf-chip)') ?? e).width);
else if (e.matches('div.preset')) v.push(box(e).width);
else if (loose && e.matches('div.drill-down')) v.push(box(e).left);
else v.push(box(e).left, box(e).width);
}
return v;
}
const same = (a, b) => a.length === b.length && a.every((w, i) => Math.abs(w - b[i]) < 0.5);
function lines(bar) {
const crumb = bar.querySelector(':scope > div.drill-down');
const text = crumb?.querySelector('span');
const r = text && document.createRange();
r?.selectNodeContents( (text));
const unit = r?.getClientRects()[0]?.height ?? 0;
let n = 0;
if (crumb && unit > 4)
for (const it of crumb.querySelectorAll('.item')) n = Math.max(n, Math.round(box(it).height / unit));
return n;
}
let crumb = null;
function unmark() {
crumb?.setAttribute('data-tf-crumb', 'whole');
if (crumb) getComputedStyle(crumb.querySelector('.item') ?? crumb).flexShrink;
crumb?.removeAttribute('data-tf-crumb');
crumb = null;
}
function set(shown, small, crumbs = 'whole') {
slot?.toggleAttribute('data-tf-off', !shown);
crumb?.setAttribute('data-tf-crumb', crumbs);
chip.small(small);
}
function fit() {
choose();
after();
}
function choose() {
const bar = slot?.parentElement;
if (!slot || !bar) return;
for (const e of [bar, ...bar.children]) if (e !== slot && !watched.has(e)) (watched.add(e), fits.observe(e));
const now = bar.querySelector(':scope > div.drill-down');
if (crumb !== now) (unmark(), (crumb = now));
set(false, true);
const [own, loose, base] = [theirs(bar), theirs(bar, true), lines(bar)];
const keep = () => same(theirs(bar), own) && lines(bar) <= base;
if (!live) {
set(true, false);
if (!keep()) set(false, false);
return;
}
for (const small of chip.docked() ? [false, true] : [true]) {
set(true, small);
if (keep()) return;
}
set(true, true);
if (same(theirs(bar, true), loose) && lines(bar) <= base) return;
set(true, true, 'one');
}
return {
drawn(el, usable) {
if (slot !== el) (fits.disconnect(), watched.clear());
[slot, live] = [el, usable];
fit();
},
clear() {
(fits.disconnect(), watched.clear());
unmark();
slot = null;
chip.small(false);
after();
},
};
}
// ---- src/tier-pick.js
function createTierPick(t, { html, net, premium, pop, keep, ours, show, tick, pats }) {
let missed = '';
function recognize() {
const key = tierKey(tierSearch());
if (!key || !t.item || t.sel?.keys.includes(key) || missed === `${t.item.key}|${key}`) return;
missed = `${t.item.key}|${key}`;
t.item.guides.forEach(( g, gi) => {
for (const si of g.systems)
tierLevels(pop.sys(si)).forEach((lv, li) => {
if (!t.sel?.keys.includes(key) && tierKeyOf(lv.seeds) === key && lv.seeds.length <= TIER_CAP)
keep(t.item, (t.sel = { g: gi, si, li, lv, parts: [lv.seeds], keys: [key], stop: '', until: 0 }), []);
});
});
}
async function choose( g, si, li, browse = false) {
pop.close(true);
if (browse && t.sel?.g === g && t.sel.si === si && t.sel.li === li && pats.browse()) return;
if (t.out || t.failed || t.busy) return;
const [it, lv, cl] = [t.item, tierLevels(pop.sys(si))[li], t.clears];
t.picking = true;
tick();
tapApply(tierLater, globalThis, [() => ((t.picking = false), tick()), TIER_WAIT + 1000]);
const before = ours(tierKey(tierSearch()))?.before ?? tierSeedsOf(tierSearch());
let r = (null);
const hit = lv.seeds.length > TIER_CAP ? net.known(it.def, it.paint, lv.seeds) : null;
if (lv.seeds.length > TIER_CAP && !html.hasAttribute(TF_SETTINGS.tierAll.attr))
r = { listed: null, stop: 'off', rows: [], complete: false };
else if (hit) r = hit.r;
else if (lv.seeds.length > TIER_CAP) {
[t.busy, t.drawn, t.pend] = [true, '', { g, si, lv, done: 0, total: Math.ceil(lv.seeds.length / TIER_C) }];
tick();
r = { listed: null, stop: 'error', rows: [], complete: false };
const step = ( done, total) =>
t.pend && ((t.pend = { ...t.pend, done, total }), tick());
try {
r = await net.probe(it.def, it.paint, lv.seeds, step);
} catch {
} finally {
[t.busy, t.drawn, t.pend] = [false, '', null];
tick();
}
[t.gone, t.failed] = [t.gone || r.stop === 'signin', t.failed || r.stop === 'filter'];
if (t.gone || t.failed || t.item !== it || !tierAt() || cl !== t.clears) return void (t.picking = false);
}
const parts = tierParts(lv.seeds, r?.listed ?? null);
const mine = (t.sel = {
g,
si,
li,
lv,
parts,
keys: parts.map(tierKeyOf),
stop: r?.stop ?? '',
until: net.until(TIER_RESERVE),
listed: r?.listed ?? null,
...(r && { searched: r.searched, found: r.found, complete: r.complete }),
});
keep(it, t.sel, before);
premium.pick(it, t.sel, r, net);
show(0);
pats.picked(mine, browse);
if (hit?.stale && html.hasAttribute(TF_SETTINGS.tierAll.attr))
net
.probe(it.def, it.paint, lv.seeds, () => {}, true)
.then(
(a) => premium.update(mine, a),
() => {},
);
}
return { recognize, choose };
}
// ---- src/tier-draw.js
function createTierDraw(t, { html, premium, pop, row, strip, chip, fit, part, pats, left }) {
let slot = null;
function draw() {
const i = part();
const on = i >= 0 && t.sel ? t.sel : null;
if (on) t.picking = false;
const g = t.item?.guides[on?.g ?? 0];
const [lab, whole] = on ? pats.words(on, i) : ['', false];
const path = on ? tierPath(t.item, g, pop.sysName(on.si), whole ? '' : lab) : [];
const n = on ? on.parts[i].length : 0;
const tail = on && on.parts.length > 1 ? ` · ${i + 1}/${on.parts.length}` : '';
const worth = on && !on.pat;
const known = t.out && tierSignedOut(t.gone);
const out = !!on && known;
const prem = out
? TIER_SIGNIN
: worth
? (tierLost(t, on, i) ?? tierPaused(on) ?? premium.of(t.item, on))
: !on && t.pend
? tierProgress(t.pend, left())
: null;
const stamp =
`${t.item?.key}|${on ? on.keys[i] : ''}|${t.busy}|${t.out}|${known}|${t.failed}|${artStamp()}` +
`|${prem?.text}|${prem?.chip}|${prem?.title}|${t.picking}`;
const lv = on?.lv ?? t.pend?.lv;
const si = on?.si ?? t.pend?.si ?? g?.systems[0];
const mark = (top = false) =>
t.item ? pop.glyph(si, lv?.mark ?? (top ? (tierLevels(pop.sys(si))[0]?.mark ?? '') : ''), 18) : null;
row.draw(t.item && (!t.out || known) ? { stamp, mark, path, on: !!on, part: i, parts: out ? 0 : on?.parts.length ?? 0, busy: t.busy,
pat: !!on?.pat, chip: on ? `${lab}${tail} · ${n} seed${n === 1 ? '' : 's'}` : '',
note: t.failed ? TIER_FAIL : t.pend && prem ? prem.text : '', prem, off: known,
hold: t.picking && html.hasAttribute(TF_SETTINGS.tierPremium.attr) } : null);
const shows = drawStrip(on, i, prem, mark);
pats.drawn(on);
const toolbar = html.getAttribute(TF_SETTINGS.tierPlace.attr) !== 'filters';
const bar = toolbar ? document.querySelector(TF_SELECTORS.searchBar) : null;
if (!t.item || !bar) return (slot?.remove(), (slot = null), chip.dock(null), fit.clear());
if (slot?.parentElement !== bar) {
const crumb = bar.querySelector(':scope > div.drill-down');
slot = tierEl('div', 'tf-ts-slot');
crumb ? crumb.after(slot) : bar.prepend(slot);
t.drawn = '';
}
slot.toggleAttribute('data-strip', shows);
if (t.drawn === stamp) return;
t.drawn = stamp;
const had = slot.contains(document.activeElement) || pop.under(slot.firstElementChild);
const main = tierButton('tf-ts-btn', () => (t.out ? tipBox.shown(main) : pop.toggle(main)), mark(true) ?? '');
[main.ariaHasPopup, main.ariaExpanded, main.disabled] = t.out ? [null, null, false] : ['dialog', 'false', t.failed];
main.ariaDisabled = t.out ? 'true' : null;
const said = prem?.aria ?? (known ? TIER_SIGNIN.aria : '');
main.ariaLabel = on ? `${path.join(', ')}${tail}${said}` : lv ? `${lv.label}${said}` : `Pattern tiers${said}`;
const name = on ? (whole ? pop.sysName(on.si) : lab) : (lv?.label ?? 'Tiers');
if (prem && !prem.none) tipBox.tie(main, { ...premiumTip(prem), head: name, aside: prem.text });
else if (known) tipBox.tie(main, TIER_SIGNIN_TIP);
else main.title = prem ? `${name}\n${prem.title}` : (main.ariaLabel ?? '');
pop.close();
slot.replaceChildren(main);
slot.toggleAttribute('data-busy', t.busy);
slot.toggleAttribute('data-step', !!t.pend);
if (t.pend) slot.style.setProperty('--tf-ts-p', `${Math.max(0.08, t.pend.done / t.pend.total)}`);
chip.dock(main.disabled ? null : slot);
fit.drawn(slot, !main.disabled);
if (had) main.focus();
}
function drawStrip(on, i, prem, mark) {
const [out, lost] = [prem === TIER_SIGNIN, prem === TIER_LOST];
const line = out || lost ? null : tierProbeLine(t.pend, on, left());
if (
!t.item ||
(t.out && !out) ||
!html.hasAttribute(TF_SETTINGS.tierStrip.attr) ||
!(on || t.pend || t.picking || t.failed)
) {
strip.draw(null);
return false;
}
const at = on ?? t.pend;
const g = at ? t.item.guides[at.g] : null;
const path = at && g ? tierPath(t.item, g, pop.sysName(at.si), pats.level(at, i)) : ['Tiers'];
const book = on && !on.pat && !out && !lost ? premium.book(on) : null;
const pt = pats.strip(on);
const want = html.hasAttribute(TF_SETTINGS.tierPremium.attr);
const wait = !on
? t.pend
? ''
: 'Loading…'
: book && !book.whole && book.why === 'loading'
? 'Loading listings…'
: want && book?.sampling
? 'Comparing with plain listings…'
: '';
const parts = out ? 0 : (on?.parts.length ?? 0);
const step = t.pend ? { done: t.pend.done, total: t.pend.total } : null;
const note = t.failed ? TIER_FAIL : lost ? TIER_LOST.title : '';
const x = !!on || !!t.pend || (t.failed && !!t.sel?.keys.includes(tierKey(tierSearch())));
const stamp =
`${t.item.key}|${on ? on.keys[i] : ''}|${path.join('>')}|${step?.done}/${step?.total}|${wait}|${note}` +
`|${book?.count}|${book?.whole}|${prem?.text}|${prem?.title}|${JSON.stringify(prem?.cells ?? [])}|${prem?.ago}` +
`|${parts}|${artStamp()}|${pt.pat}|${!!pt.grid}|${x}|${line?.text}|${line?.title}`;
strip.draw({
stamp,
mark: () => mark(),
path,
step,
wait,
prem: on && !line?.none ? prem : null,
line,
book,
note,
on: !!on,
x,
part: i,
parts,
...pt,
});
return true;
}
return { draw };
}
// ---- src/tier-bar.js
function createTiers(index, rate, premium, chip) {
const html = document.documentElement;
const attrs = [
TF_SETTINGS.tierSearch.attr,
...ART_ATTRS,
TF_SETTINGS.tierPremium.attr,
TF_SETTINGS.tierPlace.attr,
TF_SETTINGS.tierStrip.attr,
TF_SETTINGS.patternPicker.attr,
];
const net = createTierNet(rate);
const nav = createTierNav(net.ours, (k) => ((t.lost = k), tick()));
const fit = createTierFit(chip, () => {});
const t = {
item: null,
sel: null,
pend: null,
picking: false,
out: false,
gone: false,
failed: false,
busy: false,
drawn: '',
clears: 0,
lost: '',
};
const mem = createTierMemory();
const { keep } = mem;
const ours = ( key, k = t.item?.key) => mem.ours(key, k);
const worth = ( si, li) =>
premium.at(t.item, tierLevels(pop.sys(si))[li]?.seeds ?? []);
const pop = createTierPop(
() => t.item,
() => (part() >= 0 ? t.sel : null),
(g, si, li, browse) => void pick.choose(g, si, li, browse),
() => clear(),
worth,
);
const row = createTierRow(
(b) => pop.toggle(b),
() => clear(),
(i) => stepTo(i),
);
const strip = createTierStrip(
() => clear(),
(i) => stepTo(i),
);
const part = () => (t.sel && !t.failed ? t.sel.keys.indexOf(tierKey(tierSearch())) : -1);
const pace = { at: -Infinity };
const stepTo = tierPaced(show, net.until, pace);
const pats = createTierPatterns(t, { mem, show, part, pop, tick: () => tick(), until: net.until, pace });
function show(i, replace = !!t.sel?.pat && part() >= 0) {
const to = t.sel && tierNative(tierSearch(), t.sel.parts[i]);
if (to && t.sel) nav.go(to, (t.sel.keys[i] = tierKeyOf(t.sel.parts[i])), replace);
}
function clear() {
t.clears++;
net.cancel();
const [mine, pat] = [ours(tierKey(tierSearch())), !!t.sel?.pat && part() >= 0];
const before = mine?.before ?? [];
t.sel = pats.reset(t.sel);
const to = mine && tierNative(tierSearch(), before.length ? before : null);
if (to) nav.go(to, tierKeyOf(before), pat);
}
let [queued, rest, last, gave] = [false, false, ([null, '', null]), new Set()];
const sync = () => {
queued = false;
const [ix, { pathname, search }] = [index(), location];
if (t.item && /^\/item\/\d+$/.test(pathname)) return;
const want = ix && html.hasAttribute(attrs[0]) && pathname === '/search';
if (want && (last[0] !== ix || last[1] !== search)) last = [ix, search, tierItem(ix, search)];
const now = want ? last[2] : null;
const left = pathname === '/search' ? ours(tierKey(search), now?.key) : undefined;
if (left && left.k !== now?.key && !gave.has(search)) {
gave.add(search);
const to = tierNative(search, left.before.length ? left.before : null);
if (to) nav.go(to, tierKeyOf(left.before), true);
}
if (!now && !t.item && rest) return;
t.out = t.gone || !tierSignedIn();
if (now?.key !== t.item?.key) pats.reset(null);
if (now?.key !== t.item?.key || now?.ix !== t.item?.ix) (net.cancel(), (t.item = now), (t.sel = null), pop.reset());
const back = t.item && ours(tierKey(search));
if (back && back.k === t.item.key && back.ix === t.item.ix && t.sel !== back.sel) t.sel = back.sel;
pats.leave();
pick.recognize();
draw();
rest = !t.item;
};
const tick = () => queued || ((queued = true), requestAnimationFrame(sync));
const pick = createTierPick(t, { html, net, premium, pop, keep, ours, show, tick, pats });
const { draw } = createTierDraw(t, { html, premium, pop, row, strip, chip, fit, part, pats, left: net.left });
cardWatch({ attrs, cards: () => {}, settle: tick });
premium.on(tick);
return {
net,
opened: (query) => nav.opened(query),
wanted: () => t.sel !== null,
seen(listings, query, raw) {
nav.answered(query);
if (!t.sel || t.failed || !t.item || !t.sel.keys.includes(tierKey(query))) return;
if (!tierApplied(listings, query, t.item.def, t.item.paint)) ((t.failed = true), tick());
else if (pats.seen(listings, query, raw)) tick();
},
};
}
// ---- src/db-merge-sort.js
const DB_PAGE = 100;
const DB_ASK = 200;
const dbId = (r) => `${tapOwn(r, 'a') ?? ''}`;
function dbIdCmp(x, y) {
const [a, b] = [`${tapOwn(x, 'float_id') ?? ''}`, `${tapOwn(y, 'float_id') ?? ''}`];
return a.length - b.length || (a < b ? -1 : a > b ? 1 : 0);
}
const dbFloat = (r) => (typeof tapOwn(r, 'float_value') === 'number' ? tapOwn(r, 'float_value') : 2);
const dbUpdated = (r) => `${tapOwn(r, 'updated') ?? ''}`;
const DB_ORDERS = {
__proto__: null,
1: (x, y) => dbFloat(x) - dbFloat(y) || dbIdCmp(x, y),
'-1': (x, y) => dbFloat(y) - dbFloat(x) || dbIdCmp(x, y),
3: (x, y) => dbIdCmp(x, y),
4: (x, y) => (dbUpdated(x) < dbUpdated(y) ? 1 : dbUpdated(x) > dbUpdated(y) ? -1 : 0) || dbIdCmp(x, y),
};
const dbOrder = (q) => (DB_ORDERS[q.get('order') ?? '1'] ? (q.get('order') ?? '1') : null);
function createDbSession(seeds, cmp) {
const parts = seeds.map((s) => ({ seeds: s, rows: ([]), ids: new Set(), off: 0, n: 0 }));
const st = parts.map(() => ({ in: false, done: false, used: 0, near: false }));
const live = (i) => st[i].in && !st[i].done;
const out = [];
return {
parts,
st,
out,
add(i, body, first) {
const list = tapOwn(body, 'results');
if (!tapIsArray(list)) return false;
const p = parts[i];
p.off += list.length;
for (const r of list) if (r && typeof r === 'object' && !p.ids.has(dbId(r))) (p.ids.add(dbId(r)), p.rows.push(r));
const n = tapOwn(body, 'count');
if (first && typeof n === 'number' && n >= 0)
[p.n, st[i].near] = [n, tapOwn(body, 'count_is_approximate') === true];
st[i].in = true;
st[i].done = list.length < DB_ASK;
return true;
},
fill(to) {
while (out.length < to) {
let best = -1;
for (let i = 0; i < parts.length; i++) {
if (!st[i].in) continue;
const r = parts[i].rows[st[i].used];
if (r === undefined) {
if (!st[i].done) return out.length;
} else if (best < 0 || cmp(r, parts[best].rows[st[best].used]) < 0) best = i;
}
if (best < 0) break;
out.push(parts[best].rows[st[best].used++]);
}
return out.length;
},
reset() {
out.length = 0;
for (const s of st) s.used = 0;
},
count() {
const n = parts.reduce((t, p) => t + p.n, 0);
return [n, st.some((s) => s.near || !s.in)];
},
next() {
const last = ( j) => parts[j].rows[parts[j].rows.length - 1];
let best = -1;
for (let i = 0; i < parts.length; i++)
if (
live(i) &&
(best < 0 || last(i) === undefined || (last(best) !== undefined && cmp(last(i), last(best)) < 0))
)
best = i;
return best;
},
end: () => !st.some((_, i) => live(i)),
};
}
// ---- src/db-tiers.js
function createDbTiers(index) {
const [html, page, S, T] = [document.documentElement, TIER_PAGES.db, TF_SELECTORS, TF_SETTINGS];
const attrs = [T.dbTiers.attr, T.tierSearch.attr, T.tierStrip.attr, ...ART_ATTRS, T.dbMerge.attr];
const t = { item: null, sel: null };
const [none, quiet] = [() => false, () => {}];
const [nav, mem] = [createTierNav(none, quiet, page), createTierMemory()];
const key = () => tierKey(tierSearch(), page.seed);
const part = () => (t.sel ? t.sel.keys.indexOf(key()) : -1);
const one = () => html.hasAttribute(T.dbMerge.attr) && !!dbOrder(new URLSearchParams(tierSearch()));
const split = ( s) => (one() ? [s] : tierParts(s, null));
const shapes = ( s) => [s, ...tierParts(s, null)].map(tierKeyOf);
const pop = createTierPop(
() => t.item,
() => (part() >= 0 ? t.sel : null),
choose,
clear,
() => null,
false,
);
const step = tierPaced(show);
const row = createTierRow((b) => pop.toggle(b), clear, step, S.dbSearch, 'data-tf-dbtier-on');
const strip = createTierStrip(clear, step, S.dbResults, true);
function show(i, replace = false) {
const to = t.sel && tierNative(tierSearch(), t.sel.parts[i], page, 1000);
if (to && t.sel) nav.go(to, t.sel.keys[i], replace);
}
function choose(g, si, li) {
pop.close(true);
const [it, lv] = [t.item, tierLevels(pop.sys(si))[li]];
if (!it || !lv) return;
const before = mem.ours(key(), it.key)?.before ?? tierSeedsOf(tierSearch(), page.seed);
const parts = split(lv.seeds);
t.sel = { g, si, li, lv, parts, keys: parts.map(tierKeyOf), stop: '', until: 0 };
mem.keep(it, t.sel, before);
show(0);
tick();
}
function clear() {
const mine = mem.ours(key(), t.item?.key);
t.sel = null;
const before = mine?.before ?? [];
const to = mine && tierNative(tierSearch(), before.length ? before : null, page);
if (to) nav.go(to, tierKeyOf(before));
tick();
}
let missed = '';
function recognize( k) {
if (!k || missed === `${t.item.key}|${k}`) return;
missed = `${t.item.key}|${k}`;
t.item.guides.forEach(( g, gi) => {
for (const si of g.systems)
tierLevels(pop.sys(si)).forEach((lv, li) => {
if (t.sel || !shapes(lv.seeds).includes(k)) return;
const parts = split(lv.seeds);
mem.keep(t.item, (t.sel = { g: gi, si, li, lv, parts, keys: parts.map(tierKeyOf), stop: '', until: 0 }), []);
});
});
}
let slot = null;
let drawn = '';
function draw() {
const i = part();
const on = i >= 0 && t.sel ? t.sel : null;
const g = t.item?.guides[on?.g ?? 0];
const label = on ? on.lv.label : '';
const path = on && g ? tierPath(t.item, g, pop.sysName(on.si), on.lv.whole ? '' : label) : [];
const [n, parts] = [on ? on.parts[i].length : 0, on?.parts.length ?? 0];
const tail = parts > 1 ? ` · ${i + 1}/${parts}` : '';
const si = on?.si ?? g?.systems[0];
const mark = (top = false) =>
t.item ? pop.glyph(si, on?.lv.mark ?? (top ? (tierLevels(pop.sys(si))[0]?.mark ?? '') : ''), 18) : null;
const stamp = `${t.item?.key}|${on ? on.keys[i] : ''}|${artStamp()}`;
const chip = on ? `${label}${tail} · ${n} seed${n === 1 ? '' : 's'}` : '';
row.draw(t.item ? { stamp, mark, path, on: !!on, part: i, parts, busy: false, chip, note: '', prem: null,
hold: false } : null);
const shows = !!on && html.hasAttribute(attrs[2]);
strip.draw(shows ? { stamp: `${stamp}|${path.join('>')}`, mark: () => mark(), path, step: null, wait: '',
prem: null, book: null, note: '', on: true, x: true, part: i, parts } : null);
const filter = document.querySelector(S.dbBar)?.querySelector(S.dbFilterButton);
if (!t.item) return void (slot?.remove(), (slot = null));
if (!filter) return void slot?.remove();
if (slot?.previousElementSibling !== filter) {
if (!slot) [slot, drawn] = [tierEl('div', 'tf-ts-slot'), ''];
filter.after(slot);
}
if (drawn === stamp) return;
drawn = stamp;
const had = slot.contains(document.activeElement) || pop.under(slot.firstElementChild);
const main = tierButton('tf-ts-btn', () => pop.toggle(main), mark(true) ?? '');
[main.ariaHasPopup, main.ariaExpanded] = ['dialog', 'false'];
main.ariaLabel = main.title = on ? `${path.join(', ')}${tail}` : 'Pattern tiers';
pop.close();
slot.replaceChildren(main);
if (had) main.focus();
}
let [queued, rest, last, gave] = [false, false, ([null, '', null]), new Set()];
const sync = () => {
queued = false;
const [ix, { pathname, search }] = [index(), location];
const want = ix && html.hasAttribute(attrs[0]) && html.hasAttribute(attrs[1]) && pathname === page.path;
if (want && (last[0] !== ix || last[1] !== search)) last = [ix, search, tierItem(ix, search, page)];
const now = want ? last[2] : null;
const k = tierKey(search, page.seed);
const left = pathname === page.path ? mem.ours(k, now?.key) : undefined;
if (left && left.k !== now?.key && !gave.has(search)) {
gave.add(search);
const q = new URLSearchParams(search);
const own = `${+(q.get(page.def) ?? '')},${+(q.get(page.paint) ?? '')}` === left.k ? left.before : [];
const to = tierNative(search, own.length ? own : null, page);
if (to) return void (nav.go(to, tierKeyOf(own), true), tick());
}
if (!now && !t.item && rest) return;
if (now?.key !== t.item?.key || now?.ix !== t.item?.ix) ((t.item = now), (t.sel = null), pop.reset());
const back = t.item && mem.ours(k, t.item.key);
if (back && back.k === t.item.key && back.ix === t.item.ix && t.sel !== back.sel) t.sel = back.sel;
if (t.item && part() < 0) recognize(k);
const re = t.sel && t.sel.lv.seeds.length > TIER_CAP && shapes(t.sel.lv.seeds).includes(k) && split(t.sel.lv.seeds);
if (re && t.sel && (part() < 0 || tierKeyOf(re[0]) !== t.sel.keys[0]))
return void ((t.sel.parts = re), (t.sel.keys = re.map(tierKeyOf)), show(0, true), tick());
draw();
rest = !t.item;
};
const tick = () => queued || ((queued = true), requestAnimationFrame(sync));
cardWatch({ attrs, cards: () => {}, settle: tick });
return { indexed: tick };
}
// ---- src/db-merge.js
const dbGet = ( k) =>
(Reflect.getOwnPropertyDescriptor(XMLHttpRequest.prototype, k)?.get);
const [dbText, dbStatus, dbParse, dbWrite] = [dbGet('responseText'), dbGet('status'), JSON.parse, JSON.stringify];
const DB_WAIT = 15000;
const DB_VOLATILE = ['token', 'fid', 'limit', 'start', DB_STEP];
function createDbMerge() {
const html = document.documentElement;
let m = (null);
const baseOf = (q) =>
[...q]
.filter(([k]) => !DB_VOLATILE.includes(k))
.map(([k, v]) => `${k}=${v}`)
.sort()
.join('&');
const query = (q) => q.toString().replace(/%2C/gi, ',');
function move(q, fire) {
tapApply(tierSwap, history, [null, '', `${TAP_ORIGIN}${location.pathname}?${query(q)}`]);
if (fire) tapApply(tierFire, globalThis, [new TierPop('popstate', { state: null })]);
}
function tidy() {
const now = new URLSearchParams(location.search);
if (location.pathname === '/db' && now.has(DB_STEP)) (now.delete(DB_STEP), move(now, false));
}
function next(my) {
const q = new URLSearchParams(location.search);
q.delete(DB_STEP);
if (my !== m || my.halt || location.pathname !== '/db' || baseOf(q) !== my.base) return tidy();
q.set(DB_STEP, `${my.step + 1}`);
move(q, true);
const at = my.step;
tapApply(tierLater, globalThis, [() => my === m && my.step === at && ((my.halt = true), tidy()), DB_WAIT]);
}
function listen(xhr, answer) {
const load = ( e) => {
if (!e.isTrusted) return;
const status = tapApply(dbStatus, xhr, []);
let a;
try {
a = answer(status, status === 200 ? dbParse(tapApply(dbText, xhr, [])) : null);
} catch {}
if (!a) return;
const text = dbWrite(a);
for (const [k, v] of [
['responseText', text],
['response', text],
['status', 200],
])
tapDefine(xhr, k, { get: () => v, configurable: true });
};
tapApply(tapListen, xhr, ['load', load, { once: true }]);
}
const reopen = (args, u, q) => {
const a = [args[0], `${u.origin}${u.pathname}?${query(q)}`];
for (let i = 2; i < args.length; i++) a[i] = args[i];
return a;
};
tapSide.open = (xhr, args) => {
const [method, url] = [args[0], args[1]];
if (!tapMatches(TAP_GET, method) || typeof url !== 'string' || location.pathname !== '/db') return null;
if (!html.hasAttribute(TF_SETTINGS.dbTiers.attr)) return null;
const u = new TierURL(url, document.baseURI);
if (u.origin !== TAP_ORIGIN || u.pathname !== TAP_DB) return null;
const q = u.searchParams;
const step = q.get(DB_STEP);
q.delete(DB_STEP);
const list = (q.get('paintSeed') ?? '').split(',').map(Number);
const small = list.length <= TIER_CAP || !list.every((v) => tierInt(v, 0, 1000));
if (small) return step === null ? null : reopen(args, u, q);
const parts = [];
for (let i = 0; i < list.length; i += TIER_CAP) parts.push(list.slice(i, i + TIER_CAP));
const ask = (seeds, start, wide) => {
q.set('paintSeed', seeds.join());
if (start !== null) q.set('start', `${start}`);
if (wide) q.set('limit', `${DB_ASK}`);
return reopen(args, u, q);
};
const [order, base, start] = [dbOrder(q), baseOf(q), q.get('start')];
if (!order || !html.hasAttribute(TF_SETTINGS.dbMerge.attr)) return ask(parts[0], null, false);
if (start !== null) {
const my = m;
if (!my || my.base !== base) return ask(parts[0], +start, false);
const [K, i] = [+start, my.s.next()];
listen(xhr, (status, body) => {
if (status === 200 && i >= 0) my.s.add(i, body, false);
my.s.fill(K + DB_PAGE);
const results = my.s.out.slice(K, K + DB_PAGE);
if (status !== 200 && results.length < DB_PAGE && !my.s.end()) return false;
const [count, near] = my.s.count();
return { results, count, count_is_approximate: near };
});
const p = my.s.parts[i < 0 ? 0 : i];
return ask(p.seeds, p.off, true);
}
const go = m && m.base === base && !m.halt && step !== null && +step === m.step + 1;
const cmp = (DB_ORDERS[order]);
const my = go && m ? m : { base, s: createDbSession(parts, cmp), step: 0, halt: false };
if (go) my.step++;
m = my;
const i = my.step;
listen(xhr, (status, body) => {
const [ok, live] = [status === 200 && my.s.add(i, body, true), my === m];
if (!ok && i === 0) return void (live && tidy());
if (!ok || !live) my.halt = true;
my.s.reset();
my.s.fill(DB_PAGE);
const last = my.halt || i === my.s.parts.length - 1;
if (live) tapApply(tierLater, globalThis, [() => (last ? tidy() : next(my)), 0]);
const [count, near] = my.s.count();
return { results: my.s.out.slice(0, DB_PAGE), count, count_is_approximate: near };
});
return ask(my.s.parts[i].seeds, null, true);
};
}
// ---- src/sell-queue.js
const SELL_PRICE = /^price$/i;
function sellIsPrice(i) {
const form = i.closest('mat-form-field');
if (!form || form.querySelectorAll('input').length !== 1) return false;
const label = form.querySelector('mat-label, label')?.textContent ?? '';
return [i.getAttribute('formcontrolname') ?? '', label.trim()].some((t) => SELL_PRICE.test(t));
}
function sellRowOf(field) {
let row = field;
for (let n = field.parentElement; n && !n.matches(TF_SELECTORS.sellQueue); n = n.parentElement) {
if ([...n.querySelectorAll('input')].filter(sellIsPrice).length > 1) break;
row = n;
}
return row;
}
// ---- src/sell-grades.js
const SELL_FLOAT = /\b0\.\d{6,20}\b/;
const stopOurs = ( e) => e.stopPropagation();
function createSellGrades(grades, premium, net) {
const html = document.documentElement;
const S = TF_SETTINGS;
const attrs = [S.sellGrades.attr, S.grades.attr, S.charms.attr, S.tierSearch.attr, S.tierPremium.attr];
const on = () => html.hasAttribute(attrs[0]) && grades.enabled();
const panel = createGradePanel();
const items = new Map();
const drawn = new WeakMap();
const asks = new Map();
const asked = ( k) => {
const [v, at] = asks.get(k) ?? ['', 0];
return at > Date.now() - 6e5 ? v : undefined;
};
let [ver, dirty] = [0, false];
gradeSellCharm = (card) => {
if (!on() || !card.closest(TF_SELECTORS.sellPage)) return null;
const name = card.querySelector(TF_SELECTORS.itemName)?.textContent?.trim() ?? '';
const p = /^\D*(\d{1,6})\D*$/.exec(card.querySelector('.keychain-pattern')?.textContent ?? '')?.[1];
const hit = [...items.values()].filter((x) => x[8] && x[7] === name && x[8].split(':')[1] === p);
return hit.length === 1 ? hit[0][8] : null;
};
function itemOf(row) {
const text = row.textContent ?? '';
const f = SELL_FLOAT.exec(text)?.[0];
const named = [...items.values()].filter((x) => text.includes(x[2]?.name ?? x[7] ?? '\0'));
const near = ( x) =>
x[2]?.float != null && Math.abs(x[2].float - Number(f)) < 10 ** (2 - (f?.length ?? 0));
const hit = f ? (named.length ? named : [...items.values()]).filter(near) : named;
return hit.length === 1 ? hit[0] : null;
}
async function compare(l) {
if (asked(l.key) === '…') return;
asks.set(l.key, ['…', Date.now()]);
redraw();
let why = 'error';
try {
const r = await net.probe(l.it.def, l.it.paint, l.lv.seeds);
why = await premium.compare(l.it, l.lv.seeds, r, net, l.cells);
} catch {}
asks.delete(l.key);
asks.set(l.key, [why, Date.now()]);
if (asks.size > 50) asks.delete(asks.keys().next().value ?? '');
redraw();
}
function draw(field) {
const box = field.closest('mat-form-field');
if (!box) return;
const had = box.nextElementSibling?.matches('span.tf-sell') ? box.nextElementSibling : null;
const x = on() ? itemOf(sellRowOf(field)) : null;
const ix = x ? grades.index() : null;
const light = html.getAttribute(S.theme.attr) === 'light';
const may = html.hasAttribute(S.tierSearch.attr) && html.hasAttribute(S.tierPremium.attr);
const ok = !x?.[8] || html.hasAttribute(S.charms.attr);
const w = ix && x && ok ? sellWords(ix, premium, x, light, asked, may) : null;
const key = w ? JSON.stringify([ver, w.text, w.tip, !!w.offer, artStamp()]) : '';
if (drawn.get(field) === key && !!had === !!w) return;
drawn.set(field, key);
const back = !!had?.contains(document.activeElement);
if (had && panel.holds(had)) panel.close();
had?.remove();
if (!w) return;
const { icon, rows, seed, unit, offer } = w;
const b = panel.button(w.aria, () => ({ rows, lit: new Set(icon.rows), seed, unit }));
b.tabIndex = -1;
b.append(artSvg(icon.glyph, icon.cols, icon.mark, 16));
b.toggleAttribute('data-back', icon.back);
const hint = layoutSpan('tf-sell', '');
const words = layoutSpan('tf-sell-t', offer ? `${w.text} ·` : w.text);
tipBox.tie(words, w.tip);
hint.append(b, words);
const label = w.again ? 'try again' : 'compare tier asks';
const go = offer ? tierButton('tf-sell-go', () => void compare(offer).catch(() => {}), label) : null;
if (go) {
go.tabIndex = -1;
for (const t of ['pointerdown', 'mousedown', 'pointerup', 'mouseup', 'click']) go.addEventListener(t, stopOurs);
hint.append(go);
}
box.after(hint);
if (back) (go || b).focus({ preventScroll: true });
}
function syncAll() {
dirty = false;
for (const f of document.querySelectorAll(`${TF_SELECTORS.sellQueue} input`))
try {
if (sellIsPrice(f)) draw(f);
} catch {}
if (!on()) for (const h of document.querySelectorAll('span.tf-sell')) h.remove();
}
const redraw = () => (ver++, syncAll());
cardWatch({
attrs: [...attrs, S.theme.attr, ...ART_ATTRS],
setting: redraw,
cards() {},
other: (r) => void (dirty ||= r.type === 'childList' && r.addedNodes.length > 0 && location.pathname === '/sell'),
settle: () => dirty && syncAll(),
});
return {
enabled: on,
feed(list) {
if (!on()) return;
for (const x of list) {
items.delete(x[0]);
items.set(x[0], x);
}
while (items.size > TAP_INVENTORY_MAX) items.delete(items.keys().next().value ?? '');
grades.redraw();
syncAll();
},
indexed: redraw,
};
}
// ---- src/combo-tab.js
function comboless(search) {
const q = new URLSearchParams(search);
const defs = q
.getAll('def_index')
.flatMap((v) => v.split(','))
.map(Number);
if (defs.length) return defs.every((d) => Number.isInteger(d) && d > 64);
return ['sticker_index', 'keychain_index', 'keychain_highlight_reel', 'music_kit_index', 'item_type'].some((k) =>
q.get(k),
);
}
function createComboTab() {
const html = document.documentElement;
const MARK = 'data-tf-nocombo';
const sync = () => {
const want = html.hasAttribute(TF_SETTINGS.comboTab.attr) && location.pathname === '/search' && comboless(location.search);
if (want !== html.hasAttribute(MARK)) html.toggleAttribute(MARK, want);
};
cardWatch({ attrs: [TF_SETTINGS.comboTab.attr], cards: () => {}, settle: sync });
sync();
}
// ---- src/catalog-from.js
const CAT_SOUVENIR = 'souvenir_package';
function catalogFrom(catalog, grade, card, stickers) {
if (!grade || !card || !catalog.ready()) return null;
const ref = grade.slice(0, grade.lastIndexOf(':'));
if (!catalog.skin(ref)) return null;
const boxes = [];
for (const id of catalog.dropsFrom(ref)) {
const box = catalog.box(id);
if (box && (box.kind === CAT_SOUVENIR) === card.sv) boxes[boxes.length] = box;
}
if (!boxes.length) return null;
const pin = card.sv && stickers ? catalogPin(catalog, boxes, stickers) : null;
if (pin) return { first: pin, rest: [] };
const bare = card.sv && !stickers?.st.length ? boxes.filter((b) => catalog.unstickered(b.event)) : [];
if (bare.length === 1 && boxes.length > 1) return { first: bare[0], rest: [], bare: true };
const [rest, loot] = [boxes.slice(1), catalog.skin(ref)?.containers ?? []];
return { first: boxes[0], rest, pool: rest.length > 0 && rest.every((b) => !loot.includes(b.id)) };
}
function catalogGoodFrom(catalog, mhn) {
const boxes = mhn && catalog.ready() ? catalog.goodsFrom(mhn) : [];
return boxes.length ? { first: boxes[0], rest: boxes.slice(1) } : null;
}
function catalogPin(catalog, boxes, stickers) {
const events = new Set();
for (const s of stickers.st) {
const kit = catalog.kitOf(s.name);
if (kit !== null) for (const e of catalog.eventsOfKit(kit)) events.add(e);
}
const hits = boxes.filter((b) => b.event !== null && events.has(b.event));
return hits.length === 1 ? hits[0] : null;
}
const CAT_YEAR = /^(.+) \d\d(\d\d)$/;
function catalogLabel(catalog, box) {
const event = box.kind === CAT_SOUVENIR && box.event !== null ? catalog.event(box.event) : null;
const m = event ? tapApply(tapExec, CAT_YEAR, [event.name]) : null;
if (!m) return [event?.name || box.short || box.name, ''];
return [`${m[1]} ${m[2]}`, `${m[1].split(' ')[0].slice(0, 3)} ${m[2]}`, m[2], ''];
}
function catalogMore(rest, pool) {
if (pool) return '★ also in';
if (rest[0]?.kind === CAT_SOUVENIR) return `One of ${rest.length + 1} possible packages`;
return `Also drops from ${rest.length} other container${rest.length > 1 ? 's' : ''}`;
}
const catalogTitle = (from) => (from.bare ? `No souvenir stickers: most likely ${from.first.name}` : from.first.name);
const CAT_REF = /^(\d{1,5}):(\d{1,5})$/;
function catalogRef(ref) {
const m = tapApply(tapExec, CAT_REF, [ref]);
return m ? [+m[1], +m[2]] : null;
}
function catalogKits(catalog, box, shownImages) {
if (box.kind !== CAT_SOUVENIR) return [[], []];
const shown = catalog.possible(box.id, []).filter((kit) => {
const name = catalog.stickerName(kit);
const url = name === null ? null : catalog.imageOf(name);
return url !== null && shownImages.has(url);
});
return [shown, catalog.possible(box.id, shown)];
}
// ---- src/catalog-fit.js
function createCatalogFit() {
const named = new WeakMap();
const label = (w, n) => {
const [a, shown] = [w.parentElement, n.names[n.i]];
const name = `${shown ? `${shown}, from` : 'From'} ${n.box}, opens CSFloat's search in a new tab`;
if (a?.tagName === 'A' && a.ariaLabel !== name) a.ariaLabel = name;
};
const cut = (w, n) => w.scrollWidth > w.clientWidth && !(n.names.length < 3 && w.clientWidth > 23);
const fit = new ResizeObserver((entries) => {
let todo = [];
for (const { target, contentRect } of entries) {
const [w, n] = [target.isConnected && target.querySelector('.tf-cf-w'), named.get(target)];
if (!target.isConnected) fit.unobserve(target);
else if (w && n && contentRect.width && contentRect.width !== n.width) {
[n.width, n.i] = [contentRect.width, 0];
todo.push([w, n]);
}
}
const lines = todo;
while (todo.length) {
for (const [w, n] of todo) if (w.textContent !== n.names[n.i]) w.textContent = n.names[n.i];
todo = todo.filter(([w, n]) => n.i < n.names.length - 1 && cut(w, n));
for (const [, n] of todo) n.i++;
}
for (const [w, n] of lines) label(w, n);
});
return {
add(line, names, box) {
const n = { names, box, i: 0, width: 0 };
named.set(line, n);
const w = line.querySelector('.tf-cf-w');
if (w) label(w, n);
fit.observe(line);
},
drop: ( line) => fit.unobserve(line),
whole(line) {
const [n, w] = [named.get(line), line.querySelector('.tf-cf-w')];
return !!n && !!w && w.textContent === n.box && w.scrollWidth <= w.clientWidth;
},
};
}
// ---- src/catalog-cards.js
function catEl(tag, cls, text, into) {
const el = document.createElement(tag);
el.className = cls;
if (text !== undefined) el.textContent = text;
into?.append(el);
return el;
}
function catLink(cls, url, text, into) {
if (!url || !tapMatches(CAT_SEARCH_RE, url)) return catEl('span', cls, text, into);
const a = (catEl('a', cls, text, into));
a.href = url;
[a.target, a.rel, a.referrerPolicy] = ['_blank', 'noopener noreferrer', 'no-referrer'];
return a;
}
function catImg(cls, url, title, into) {
if (!tapMatches(CAT_IMAGE_RE, url) && !tapMatches(CAT_STEAM_RE, url)) return null;
const img = document.createElement('img');
[img.className, img.alt, img.loading, img.decoding, img.referrerPolicy] = [cls, '', 'lazy', 'async', 'no-referrer'];
if (title) img.title = title;
img.src = url;
into?.append(img);
return img;
}
const CAT_PRESSES = ['pointerdown', 'mousedown', 'pointerup', 'mouseup', 'auxclick', 'click'];
function createCatalogCards(catalog) {
const html = document.documentElement;
const attr = TF_SETTINGS.catalogCards.attr;
const clip = [TF_SETTINGS.titles.attr, TF_SETTINGS.tags.attr, TF_SETTINGS.wear.attr];
const on = () => html.hasAttribute(attr);
const byGrade = createShotMatch(4, Object.is);
const byCard = createShotMatch(2, ( a, b) => a.sv === b.sv);
const bySt = createShotMatch(9, stickerSame);
const byName = createShotMatch(7, Object.is);
const pop = createCatalogPop(catalog);
const drawn = new WeakMap();
const fit = createCatalogFit();
let gen = 0;
function clear(card) {
for (const el of card.querySelectorAll('span.tf-cf')) (fit.drop(el), el.remove());
for (const el of card.querySelectorAll('[data-tf-cf]')) el.removeAttribute('data-tf-cf');
}
function line(from, s) {
const [el, names] = [catEl('span', 'tf-cf'), catalogLabel(catalog, from.first)];
const a = catLink('tf-cf-a', catalog.link.box(from.first), undefined, el);
catGlyph(a, s);
catEl('span', 'tf-cf-w', names[0], a);
const tip = from.rest.length ? null : catalogSupplyTip(catalogTitle(from), s);
if (tip) tipBox.tie(a, tip);
else if (!from.rest.length) a.title = catalogTitle(from);
fit.add(el, names, from.first.name);
for (const t of CAT_PRESSES) a.addEventListener(t, (e) => e.stopPropagation());
if (from.rest.length) pop.more(el, (a), from, () => fit.whole(el));
return el;
}
function sync(card) {
const key = on() && catalog.ready() && !card.querySelector(TF_SELECTORS.bundle) ? byGrade.keyOf(card) : null;
const grade = (byGrade.idFor(key));
const skin = key === null ? null : catalogFrom(catalog, grade, byCard.idFor(key), bySt.idFor(key));
const from = skin ?? (key === null || grade ? null : catalogGoodFrom(catalog, byName.idFor(key)));
const name = from ? card.querySelector(TF_SELECTORS.nameBox) : null;
const row = name?.parentElement;
const clipped = clip.every((a) => html.hasAttribute(a)) && !!name?.querySelector(':scope > span.tf-title');
const spacer = clipped ? card.querySelector('app-seller-details-widget > div.seller-details > div') : null;
if (!from || !name || !row || (clipped && !spacer)) return clear(card);
const [src, best] = catalogSupplyOn() ? catalogSupplyBest(catalog, from) : [from, null];
let [el = null, ...extra] = card.querySelectorAll('span.tf-cf');
for (const x of extra) (fit.drop(x), x.remove());
const sig = `${gen}\n${src.first.id}\n${src.rest.map((b) => b.id).join(' ')}\n${from.bare ?? ''}${best?.[1]}${catalogSupplyOn()}`;
if (!el || drawn.get(el) !== sig) {
const next = line(src, best);
if (el) (fit.drop(el), el.remove());
drawn.set((el = next), sig);
}
if (spacer && el.previousElementSibling !== spacer) spacer.after(el);
else if (!spacer && el.parentElement !== row) row.append(el);
for (const r of card.querySelectorAll('[data-tf-cf]')) if (r !== row || spacer) r.removeAttribute('data-tf-cf');
if (!spacer && !row.hasAttribute('data-tf-cf')) row.setAttribute('data-tf-cf', '');
}
const synced = byGrade.tracked(sync);
const syncAll = (only) => {
for (const card of document.querySelectorAll(TF_SELECTORS.card))
if (!only || only(byGrade.keyOf(card))) synced(card);
};
cardWatch({
attrs: [attr, ...clip, TF_SETTINGS.supplyStatus.attr],
setting: syncAll,
cards(changed, added) {
if (on()) for (const card of new Set([...changed, ...added])) synced(card);
},
});
return {
wanted: on,
feed(listings) {
const fresh = new Set([byGrade, byCard, bySt, byName].flatMap((m) => [...m.learn(listings)]));
if (on()) byGrade.resync(fresh, synced);
},
indexed: () => void (gen++, on() && syncAll()),
named: () => void (on() && syncAll((key) => byName.idFor(key) !== null && byGrade.idFor(key) === null)),
};
}
// ---- src/catalog-pop.js
const [catFrame, catUnframe] = [globalThis.requestAnimationFrame, globalThis.cancelAnimationFrame];
function createCatalogPop(catalog) {
let pop = null;
let owner = null;
let [frame, at, pinned] = [0, '', false];
let cancel = () => {};
const later = ( f, ms) => {
cancel();
cancel = tickAfter(f, ms);
};
function place() {
frame = 0;
if (!pop || !owner) return;
const r = owner.getBoundingClientRect();
if (!owner.isConnected || r.bottom < 0 || r.top > innerHeight) return hide();
const card = owner.closest(TF_SELECTORS.card);
const c = card?.getBoundingClientRect() ?? r;
const under = r.top < (c.top + c.bottom) / 2;
const art = (under && card?.querySelector(TF_SELECTORS.glow)?.getBoundingClientRect().bottom) || r.bottom;
const { width: w, height: h } = pop.getBoundingClientRect();
const room = under ? Math.min(art, innerHeight - 8) - r.bottom - 4 : r.top - 4 - Math.max(8, c.top);
const one = (pop.children[1]);
if (room < (one ? one.offsetTop + one.offsetHeight + 4 : 0)) return hide();
const tall = Math.min(pop.scrollHeight || h, room);
const [x, top] = [Math.max(8, Math.min(c.left, innerWidth - w - 8)), under ? r.bottom + 4 : r.top - 4 - tall];
const now = `${x} ${top} ${tall}`;
if (now !== at) {
at = now;
Object.assign(pop.style, { left: `${x}px`, top: `${top}px`, maxHeight: `${tall}px` });
}
frame = tapApply(catFrame, globalThis, [place]);
}
const outside = ( e) =>
pop && ![pop, owner].some((el) => el?.contains( (e.target))) && hide();
const escape = ( e) => e.key === 'Escape' && (pinned && e.stopPropagation(), hide());
function hide() {
cancel();
if (frame) tapApply(catUnframe, globalThis, [frame]);
owner?.setAttribute('aria-expanded', 'false');
panelDrop(pop, owner);
[pop, owner, frame, at, pinned] = [null, null, 0, '', false];
document.removeEventListener('pointerdown', outside, true);
document.removeEventListener('keydown', escape, true);
}
function show(b, from, whole) {
hide();
const p = (pop = catEl('div', 'tf-cp'));
[p.role, p.ariaLabel, p.popover] = ['dialog', b.ariaLabel, 'manual'];
const status = ( box) =>
catalogSupplyOn() ? catalogSupplyWords(catalog.supply.box(box.id)) : '';
const row = ( box) => {
const a = catLink('tf-cp-a', catalog.link.box(box), box.name, p);
if (status(box)) catEl('span', 'tf-cp-s', ` · ${status(box)}`, a);
};
if (!whole() || status(from.first)) row(from.first);
catEl('div', 'tf-cp-h', b.ariaLabel ?? '', p);
for (const box of from.rest) row(box);
p.onpointerenter = () => cancel();
p.onpointerleave = () => pinned || later(hide, 200);
panelHold(p, b, 'tf-cp');
document.body.append(p);
p.showPopover?.();
owner = b;
b.setAttribute('aria-expanded', 'true');
document.addEventListener('pointerdown', outside, true);
document.addEventListener('keydown', escape, true);
place();
}
return {
more(line, name, from, whole) {
const b = catEl('button', 'tf-cf-n', `+${from.rest.length}`, line);
b.ariaLabel = catalogMore(from.rest, from.pool);
b.setAttribute('type', 'button');
b.setAttribute('aria-expanded', 'false');
for (const t of CAT_PRESSES) b.addEventListener(t, (e) => e.stopPropagation());
const enter = () => (owner === b ? cancel() : later(() => b.isConnected && show(b, from, whole), pop ? 0 : 120));
const leave = () => (owner === b ? pinned || later(hide, 200) : cancel());
const stay = ( e) =>
[pop, name, b].some((el) => el?.contains( (e.relatedTarget))) || leave();
for (const el of [name, b]) [el.onpointerenter, el.onpointerleave, el.onblur] = [enter, leave, stay];
name.onfocus = enter;
b.onclick = (e) => {
if (owner === b && pinned) return hide();
if (owner !== b) show(b, from, whole);
if (!pop && e.isTrusted && !e.detail) {
b.closest(TF_SELECTORS.card)?.scrollIntoView({ block: 'center', behavior: 'instant' });
show(b, from, whole);
}
pinned = true;
panelKeyed(pop, e);
};
},
};
}
// ---- src/catalog-strip.js
const CAT_STICKER_IMGS = 'app-item-image-actions > div.container > .sticker-container > .sticker-row img';
const catShown = (card) =>
new Set([...card.querySelectorAll(CAT_STICKER_IMGS)].map((i) => (i).src));
const CAT_TILE = 32;
const CAT_PILL = 36;
function createCatalogStrip(catalog) {
const html = document.documentElement;
const attr = TF_SETTINGS.catalogStickers.attr;
const on = () => html.hasAttribute(attr) && catalog.ready();
const state = new WeakMap();
let gen = 0;
function fit(strip) {
const s = state.get(strip);
if (!s) return;
const n = s.kits.length;
const shows = n * CAT_TILE - 2 <= s.width ? n : Math.max(0, Math.floor((s.width - CAT_PILL) / CAT_TILE));
if (shows === s.shows) return;
s.shows = shows;
const nodes = [];
for (let i = 0; i < shows; i++) {
const name = catalog.stickerName(s.kits[i]);
const url = name ? catalog.imageOf(name) : null;
const img = name && url ? catImg('tf-ci', url, name) : null;
if (img) nodes[nodes.length] = img;
}
if (shows < n && s.width >= CAT_PILL) nodes[nodes.length] = catEl('span', 'tf-cs-n', `+${n - shows}`);
strip.replaceChildren(...nodes);
}
const sized = new ResizeObserver((entries) => {
for (const e of entries) {
const s = state.get(e.target);
if (s && s.width !== e.contentRect.width) [s.width, s.shows] = [e.contentRect.width, -1];
fit(e.target);
}
});
function clear(card) {
for (const el of card.querySelectorAll('.tf-cs')) {
sized.unobserve(el);
el.remove();
}
}
function sync(card) {
const title = on() && !card.closest(TF_SELECTORS.dialog) ? card.querySelector(TF_SELECTORS.itemName) : null;
if (title) cardInside(title, { subtree: true, characterData: true });
const box = title ? catalog.boxByName(title.textContent?.trim() ?? '') : null;
const image = box ? card.querySelector('app-item-image-actions > div.container') : null;
const [shown, all] = box && image ? catalogKits(catalog, box, catShown(card)) : [[], []];
const kits = all.filter((kit) => !shown.includes(kit));
if (!image || !kits.length) return clear(card);
const row = image.querySelector(':scope > .sticker-container');
const host = row?.querySelector(':scope > .sticker-row') ? row : image;
const [strip = catEl('div', 'tf-cs'), ...extra] = card.querySelectorAll('.tf-cs');
for (const el of extra) {
sized.unobserve(el);
el.remove();
}
const sig = `${gen}\n${kits.join(' ')}`;
const s = state.get(strip);
if (!s || s.sig !== sig) state.set(strip, { kits, sig, width: s?.width ?? 0, shows: -1 });
if (strip.parentElement !== host) {
host.append(strip);
sized.observe(strip);
}
fit(strip);
}
const syncAll = () => {
for (const card of document.querySelectorAll(TF_SELECTORS.card)) sync(card);
};
cardWatch({
attrs: [attr],
setting: syncAll,
cards(changed, added) {
if (html.hasAttribute(attr)) for (const card of new Set([...changed, ...added])) sync(card);
},
});
return {
indexed() {
gen++;
if (html.hasAttribute(attr)) syncAll();
},
};
}
// ---- src/catalog-grid.js
const CAT_TIERS = ['#b0c3d9', '#5e98d9', '#4b69ff', '#8847ff', '#d32ce6', '#eb4b4b', '#e4ae39'];
const CAT_TIER_WORDS = ['Consumer Grade', 'Industrial Grade', 'Mil-Spec Grade', 'Restricted', 'Classified', 'Covert'];
function catHead(into, word, n) {
const head = catEl('div', 'tf-cw-h', undefined, into);
catEl('span', 'tf-cw-t', word, head);
catEl('span', 'tf-cw-n', `${n}`, head);
}
function catTip(tile, name) {
tile.ariaLabel = name;
tipBox.tie(tile, { head: name });
}
function catGroup(into, cls, tier, other) {
const group = catEl('div', cls, undefined, into);
[group.role, group.ariaLabel] = ['group', (tier !== null && CAT_TIER_WORDS[tier]) || other];
if (tier === null) return group;
group.style.setProperty('--tf-cw-c', CAT_TIERS[tier] ?? CAT_TIERS[0]);
return group;
}
function catSkins(catalog, into, refs, tier, empty, other) {
const group = catGroup(into, 'tf-cw-g', tier, other);
for (const ref of refs) {
const dp = catalogRef(ref);
if (!dp) continue;
const name = catalog.skin(ref)?.name ?? '';
const tile = catLink('tf-cw-s', catalog.link.skin(dp[0], dp[1]), undefined, group);
if (name) catTip(tile, CAT_TIER_WORDS[tier] ? `${CAT_TIER_WORDS[tier]}: ${name}` : name);
const url = catalog.skinImage(dp[0], dp[1]);
if (url) catImg('tf-cw-i', url, '', tile);
else empty[empty.length] = [tile, dp[0], dp[1]];
}
}
function catGoodsOf(catalog, box) {
const rank = ( t) => (t === null ? -1 : t);
const out = [];
for (const [t, kind, ids] of [...box.goods].sort((a, b) => rank(b[0]) - rank(a[0]))) {
const named = ids.map((id) => [id, catalog.goodName(kind, id)]);
out[out.length] = [t, kind, named.filter(([, name]) => name === null || name !== box.mhn)];
}
return out;
}
function catalogGrid(catalog, box, kits, empty) {
const panel = catEl('section', 'tf-cw');
panel.ariaLabel = box.name;
const loot = [...box.loot].sort((a, b) => b[0] - a[0]);
const goods = catGoodsOf(catalog, box);
const count = loot.reduce((n, g) => n + g[1].length, 0) + goods.reduce((n, g) => n + g[2].length, 0);
if (count) catHead(panel, 'Contains', count);
for (const [tier, refs] of loot) if (refs.length) catSkins(catalog, panel, refs, tier, empty, 'Contraband');
for (const [tier, kind, named] of goods) {
if (!named.length) continue;
const group = catGroup(
panel,
'tf-cw-g tf-cw-q',
tier,
CAT_KINDS[ (kind)] ?? 'Goods',
);
for (const [id, name] of named) {
const [url, link] = [name === null ? null : catalog.imageOf(name), catalog.link.good(kind, id)];
const tile = url || (name === null && link) ? catLink('tf-cw-s', link, undefined, group) : null;
if (!tile) catEl('span', 'tf-cw-s', undefined, group);
else if (name && url) (catTip(tile, name), catImg('tf-cw-i', url, '', tile));
else empty[empty.length] = [tile, kind, id];
}
}
const pool = catalog.poolOf(box.id);
const gloves = tapMatches(/Gloves|Wraps/, catalog.skin(pool[0])?.name);
if (pool.length) catHead(panel, '★', `${pool.length} ${gloves ? 'gloves' : 'knives'}`);
const tiers = new Map();
for (const ref of pool) {
const t = catalog.skin(ref)?.tier ?? 6;
(tiers.get(t) ?? tiers.set(t, []).get(t))?.push(ref);
}
for (const t of [...tiers.keys()].sort((a, b) => b - a))
catSkins(catalog, panel, tiers.get(t) ?? [], t, empty, gloves ? 'Gloves' : 'Knives');
const known = [];
for (const kit of kits) {
const name = catalog.stickerName(kit);
const url = name ? catalog.imageOf(name) : null;
if (name && url) known[known.length] = [kit, name, url];
}
if (known.length) {
catHead(panel, 'Possible stickers', known.length);
const group = catGroup(panel, 'tf-cw-g tf-cw-k', null, 'Possible stickers');
for (const [kit, name, url] of known) {
const tile = catLink('tf-cw-s', catalog.link.sticker(kit), undefined, group);
catTip(tile, name);
catImg('tf-cw-i', url, '', tile);
}
}
return panel.childElementCount ? panel : null;
}
function catalogFill(catalog, empty) {
return empty.filter(([tile, a, b]) => {
const name = tile.isConnected && typeof a === 'string' ? catalog.goodName(a, b) : null;
const url = !tile.isConnected ? null : name ? catalog.imageOf(name) : catalog.skinImage(a, b);
if (url && name) catTip(tile, name);
if (url) catImg('tf-cw-i', url, '', tile);
return tile.isConnected && !url;
});
}
// ---- src/catalog-rows.js
const CAT_FOLD = 560;
const CAT_STEP = Object.freeze({ ArrowLeft: -1, ArrowRight: 1, ArrowUp: -2, ArrowDown: 2, Home: -3, End: 3 });
const catKids = (el, cls) => [...el.children].filter((c) => c.classList.contains(cls));
const catReach = (panel, group) =>
(
[...group.children].filter(
(t) => t.tagName === 'A' && (panel.classList.contains('tf-cw-all') || !t.classList.contains('tf-cw-x')),
)
);
function catStops(panel) {
for (const g of catKids(panel, 'tf-cw-g')) {
const tiles = catReach(panel, g);
const keep = tiles.find((t) => t.tabIndex === 0) ?? tiles[0];
for (const t of g.children) if (t.tagName === 'A') (t).tabIndex = t === keep ? 0 : -1;
}
}
function catKey(e) {
const k = (e);
const [panel, t] = [ (k.currentTarget), (k.target)];
const step = Object.hasOwn(CAT_STEP, k.key) ? CAT_STEP[k.key] : 0;
const group = t.parentElement;
if (!step || k.altKey || k.ctrlKey || k.metaKey || k.shiftKey || t.tagName !== 'A' || group?.parentElement !== panel)
return;
const tiles = catReach(panel, group);
const i = tiles.indexOf(t);
const line = tiles.filter((x) => x.offsetTop === tiles[0].offsetTop).length;
const to = step === 3 ? tiles.length - 1 : step === -3 ? 0 : i + (step % 2 ? step : (step / 2) * line);
k.preventDefault();
k.stopPropagation();
const next = i < 0 ? undefined : tiles[to];
if (!next || next === t) return;
[t.tabIndex, next.tabIndex] = [-1, 0];
next.focus();
}
function catToggle(panel, n) {
const b = catEl('button', 'tf-cw-b', undefined, catEl('div', 'tf-cw-m', undefined, panel));
b.setAttribute('type', 'button');
const show = () => {
const all = panel.classList.contains('tf-cw-all');
b.textContent = all ? 'Show fewer' : `Show all ${n}`;
b.setAttribute('aria-expanded', `${all}`);
return all;
};
show();
b.onclick = () => {
panel.classList.toggle('tf-cw-all');
catStops(panel);
if (!show()) b.scrollIntoView({ block: 'nearest' });
};
}
function catFold(panel) {
for (const el of panel.querySelectorAll('.tf-cw-x')) el.classList.remove('tf-cw-x');
const tiles = ([...panel.querySelectorAll('.tf-cw-s')]);
const past = tiles.findIndex((t) => t.offsetTop + t.offsetHeight > CAT_FOLD);
const bar = catKids(panel, 'tf-cw-m')[0];
if (past > 0) {
for (const t of tiles.slice(past)) t.classList.add('tf-cw-x');
for (const g of catKids(panel, 'tf-cw-g'))
if ([...g.children].every((t) => t.classList.contains('tf-cw-x'))) g.classList.add('tf-cw-x');
for (const h of catKids(panel, 'tf-cw-h'))
if (h.nextElementSibling?.classList.contains('tf-cw-x')) h.classList.add('tf-cw-x');
if (!bar) catToggle(panel, tiles.length);
} else bar?.remove();
catStops(panel);
}
function catRows(panel) {
catFold(panel);
panel.addEventListener('keydown', catKey);
let width = panel.getBoundingClientRect().width;
const again = frameLater(
() => panel.isConnected && catFold(panel),
(f) => tapApply(catFrame, globalThis, [f]),
);
const sized = new ResizeObserver(() => {
if (!panel.isConnected) return sized.disconnect();
const w = panel.getBoundingClientRect().width;
if (!w || w === width) return;
width = w;
again();
});
sized.observe(panel);
}
// ---- src/catalog-window.js
function createCatalogWindow(catalog) {
const html = document.documentElement;
const attr = TF_SETTINGS.catalogWindow.attr;
const on = () => html.hasAttribute(attr) && catalog.ready();
let shown = null;
let empty = [];
let [want, gen] = ['', 0];
let charms = false;
function sync() {
const dialog = on() ? document.querySelector(TF_SELECTORS.dialog) : null;
const item = dialog?.querySelector(`:scope > .container > .grid-item`);
const card = item?.querySelector(TF_SELECTORS.card);
const title = card?.querySelector(TF_SELECTORS.itemName)?.textContent?.trim();
const box = title ? catalog.boxByName(title) : null;
const [, kits] = card && box ? catalogKits(catalog, box, catShown(card)) : [[], []];
const now = item && box ? `${gen}\n${box.id}\n${kits.join(' ')}` : '';
if (now === want) {
if (shown && item && (shown.parentElement !== item || shown.nextElementSibling)) item.append(shown);
return;
}
want = now;
shown?.remove();
[shown, empty, charms] = [null, [], false];
if (!item || !box) return;
shown = catalogGrid(catalog, box, kits, empty);
charms = !!shown && box.goods.some(([, kind]) => kind === 'charm');
if (shown) (item.append(shown), catRows(shown));
}
const later = frameLater(sync, (f) => tapApply(catFrame, globalThis, [f]));
const follow = () => dialogFollow(watch, [attr], { characterData: true });
const watch = new MutationObserver(() => {
follow();
later();
});
follow();
catalog.onImages(() => {
empty = catalogFill(catalog, empty);
if (charms) (gen++, later());
});
return {
indexed() {
gen++;
later();
},
};
}
function createCatalogViews() {
const catalog = createCatalog(() => {
for (const v of views)
try {
v.indexed();
} catch {}
});
const cards = createCatalogCards(catalog);
const supply = createSupplyLine(catalog);
const views = [cards, createCatalogStrip(catalog), createCatalogWindow(catalog), supply];
catalog.onImages(() => cards.named());
return {
catalog,
wanted: () => cards.wanted() || supply.wanted(),
feed(listings) {
for (const v of [cards, supply])
try {
v.feed(listings);
} catch {}
},
};
}
// ---- src/catalog-supply-line.js
function createSupplyLine(catalog) {
const html = document.documentElement;
const attr = TF_SETTINGS.supplyStatus.attr;
const on = () => html.hasAttribute(attr) && catalog.ready();
const byGrade = createShotMatch(4, Object.is);
const byCard = createShotMatch(2, ( a, b) => a.sv === b.sv);
const bySt = createShotMatch(9, stickerSame);
const drawn = new WeakMap();
function source(card) {
const key = byGrade.keyOf(card);
const grade = (byGrade.idFor(key));
if (!grade) return null;
const from = catalogFrom(catalog, grade, byCard.idFor(key), bySt.idFor(key));
const first = from ? catalogSupplyBest(catalog, from)[0].first : null;
if (first) return [first.name, catalog.supply.box(first.id)];
const set = catalog.skin(grade.slice(0, grade.lastIndexOf(':')))?.collections[0];
return set ? [catalog.supply.setName(set) ?? set, catalog.supply.set(set)] : null;
}
function clear(card) {
for (const el of card.querySelectorAll('div.tf-sl')) (tipBox.tie(el, null), el.remove());
}
function sync(card) {
const name = on() && card.closest(TF_SELECTORS.dialog) ? card.querySelector('app-item-name') : null;
const src = name ? source(card) : null;
const tip = src ? catalogSupplyTip(src[0], src[1]) : null;
if (!name || !tip) return clear(card);
const el = card.querySelector('div.tf-sl') ?? catEl('div', 'tf-sl');
const sig = JSON.stringify(tip);
if (drawn.get(el) !== sig) {
el.textContent = tip.body ?? '';
if (tip.source) tipBox.tie(el, { source: tip.source });
else tipBox.tie(el, null);
drawn.set(el, sig);
}
if (el.previousElementSibling !== name) name.after(el);
}
const synced = byGrade.tracked(sync);
const syncAll = () => {
for (const card of document.querySelectorAll(`${TF_SELECTORS.dialog} ${TF_SELECTORS.card}`)) synced(card);
};
cardWatch({
attrs: [attr],
setting: syncAll,
cards(changed, added) {
if (on()) for (const card of new Set([...changed, ...added])) if (card.closest(TF_SELECTORS.dialog)) synced(card);
},
});
return {
wanted: () => html.hasAttribute(attr),
feed(listings) {
const fresh = new Set([byGrade, byCard, bySt].flatMap((m) => [...m.learn(listings)]));
if (on()) byGrade.resync(fresh, synced);
},
indexed: () => void (on() && syncAll()),
};
}
// ---- src/collection-data.js
const COL_KEY = /^set_[a-z0-9_]{1,64}$/;
const COL_WEARS = ([
['FN', 'Factory New', 0, 0.07],
['MW', 'Minimal Wear', 0.07, 0.15],
['FT', 'Field-Tested', 0.15, 0.38],
['WW', 'Well-Worn', 0.38, 0.45],
['BS', 'Battle-Scarred', 0.45, 1],
]);
const colFloat = (v) => typeof v === 'number' && v >= 0 && v <= 1;
const colCents = (v) => {
const ok = tapIsArray(v) && v.length === 5 && [0, 1, 2, 3, 4].every((i) => catInt(tapOwn(v, i), 2e9));
return ok ? [0, 1, 2, 3, 4].map((i) => tapOwn(v, i)) : [0, 0, 0, 0, 0];
};
function colIndex(j) {
const sets = new Map();
const byName = new Map();
for (const c of catList(tapOwn(j, 'collections'), 4096, (x) => tapMatches(COL_KEY, tapOwn(x, 'key')))) {
const [key, name] = [tapOwn(c, 'key'), tapOwn(c, 'name')];
if (!tapMatches(CAT_TEXT, name)) continue;
sets.set(key, { key, name, souvenir: tapOwn(c, 'has_souvenir') === true, skins: [] });
byName.set(name, byName.has(name) ? null : key);
}
const seen = new Set();
catEach(tapOwn(j, 'weapons'), (def, w) => {
const [weapon, type] = [tapOwn(w, 'name'), tapOwn(w, 'type')];
if (!tapMatches(CAT_ID, def) || !tapMatches(CAT_TEXT, weapon)) return;
catEach(tapOwn(w, 'paints'), (paint, p) => {
const [name, min, max, rarity] = ['name', 'min', 'max', 'rarity'].map((f) => tapOwn(p, f));
if (!tapMatches(CAT_ID, paint) || +paint === 0 || !tapMatches(CAT_TEXT, name)) return;
if (!colFloat(min) || !colFloat(max) || min >= max || !catInt(rarity, 7)) return;
const skin = {
def: +def,
paint: +paint,
weapon,
name,
min,
max,
rarity,
star: type === 'Knives' || type === 'Gloves',
st: tapOwn(p, 'stattrak') === true,
sv: tapOwn(p, 'souvenir') === true,
normal: colCents(tapOwn(p, 'normal_prices')),
stattrak: colCents(tapOwn(p, 'stattrak_prices')),
};
for (const key of catList(tapOwn(p, 'collections'), 64, catIs(COL_KEY))) {
const set = sets.get(key);
const k = `${key}|${weapon}|${name}`;
if (!set || seen.has(k) || set.skins.length >= 512) continue;
seen.add(k);
set.skins.push(skin);
}
});
});
return { sets, byName };
}
const colMarketName = (s, wear, cat) =>
`${s.star ? '★ ' : ''}${cat === 2 ? 'StatTrak™ ' : cat === 3 ? 'Souvenir ' : ''}${s.weapon} | ${s.name} (${COL_WEARS[wear][1]})`;
function colRange(s, wear) {
const [, , lo, hi] = COL_WEARS[wear];
const [a, b] = [Math.max(lo, s.min), Math.min(hi, s.max)];
return a < b ? [a, b] : null;
}
const colWearOf = (f) => {
const i = COL_WEARS.findIndex(([, , , hi]) => f < hi);
return i < 0 ? 4 : i;
};
// ---- src/collection-go.js
const COL_ID = /^\d{1,24}$/;
const COL_FLOAT = /^(0|1|0\.\d{1,8})$/;
const COL_WAIT = 4000;
const [COL_GAP, COL_MINUTE] = [2000, 10];
const colPush = History.prototype.pushState;
const ColHashChange = HashChangeEvent;
const colDispatch = EventTarget.prototype.dispatchEvent;
function createColGuard(net) {
const sent = [];
let flying = false;
return {
take() {
const now = tickNow();
while (sent.length && sent[0] <= now - 6e4) sent.shift();
const last = sent.length ? sent[sent.length - 1] : 0;
if (flying || net.until(TIER_RESERVE) > now || now - last < COL_GAP || sent.length >= COL_MINUTE) return false;
flying = true;
sent.push(now);
return true;
},
done() {
flying = false;
},
one: net.one,
};
}
function colQuery(s, wear, cat) {
const [, , lo, hi] = COL_WEARS[wear];
const [a, b] = [`${lo}`, `${hi}`];
if (
![1, 2, 3].includes(cat) ||
!catInt(s.def, 65535) ||
!catInt(s.paint, 65535) ||
!tapMatches(COL_FLOAT, a) ||
!tapMatches(COL_FLOAT, b)
)
return null;
return `def_index=${s.def}&paint_index=${s.paint}&category=${cat}&min_float=${a}&max_float=${b}`;
}
function colSearch(s, wear, cat) {
const q = colQuery(s, wear, cat);
return q ? `https://csfloat.com/search?${q}` : null;
}
function colFirstId(text) {
let j = null;
try {
j = catParse(text);
} catch {}
const rows = tapIsArray(j) ? j : tapOwn(j, 'data');
const id = tapIsArray(rows) && rows.length ? tapOwn(tapOwn(rows, 0), 'id') : null;
return tapMatches(COL_ID, id) ? id : null;
}
async function colCheapest(s, wear, cat, guard) {
const q = colQuery(s, wear, cat);
if (!q || !tierSignedIn()) return null;
if (!guard.take()) return null;
const ctl = new AbortController();
let late = ( _) => {};
const stop = tickAfter(() => (ctl.abort(), late(null)), COL_WAIT);
try {
const url = `${TAP_ORIGIN}${TAP_SEARCH}?limit=3&sort_by=lowest_price&type=buy_now&${q}`;
const got = await Promise.race([guard.one(url, colFirstId, ctl.signal), new Promise((ok) => (late = ok))]);
return typeof got === 'string' && tapMatches(COL_ID, got) ? got : null;
} catch {
return null;
} finally {
stop();
guard.done();
}
}
function colOpenListing(id) {
if (!tapMatches(COL_ID, id)) return;
tapApply(colPush, history, [null, '', `/item/${id}`]);
tapApply(colDispatch, globalThis, [new ColHashChange('hashchange')]);
}
async function colGo(s, tile, wear, cat, guard, close) {
if (tile.ariaBusy === 'true') return;
tile.ariaBusy = 'true';
const id = await colCheapest(s, wear, cat, guard);
tile.ariaBusy = null;
if (id) return void (close(), colOpenListing(id));
const url = colSearch(s, wear, cat);
if (url) tapApply(tapOpen, globalThis, [url, '_blank', 'noopener,noreferrer']);
}
// ---- src/collection-draw.js
const COL_RARITY_WORDS = [...CAT_TIER_WORDS, 'Contraband'];
const COL_SOURCES = ([
['csfloat', 'CSFloat'],
['cheapest', 'Cheapest'],
['buff', 'Buff'],
['youpin', 'YouPin'],
['steam', 'Steam'],
['skinport', 'Skinport'],
]);
function colLines(rows, own, src) {
const asks = rows.flatMap((r) =>
r.ask !== null ? [ ([r.key, r.name, r.ask])] : [],
);
if (own !== null && !asks.some(([k]) => k === 'csfloat')) asks.push(['csfloat', 'CSFloat', own]);
asks.sort((a, b) => a[2] - b[2]);
if (src === 'cheapest') return asks[0] ? [priceMoney(asks[0][2], true), asks[0][1], true] : ['–', '', false];
const main = asks.find(([k]) => k === src);
const low = asks.find(([k]) => k !== src);
const cheaper = low && (!main || low[2] < main[2]) ? `${low[1]} ${priceMoney(low[2], true)}` : '';
return [main ? priceMoney(main[2], true) : '–', cheaper, !!main];
}
const colEl = (tag, cls, text, into) => catEl(tag, cls, text, into);
function colClick(el, fn) {
tapApply(tapListen, el, ['click', fn]);
}
function colGroups(set) {
const by = ( a, b) =>
a.weapon < b.weapon ? -1 : a.weapon > b.weapon ? 1 : a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
const out = [];
for (let r = 7; r >= 1; r--) {
const skins = set.skins.filter((s) => !s.star && s.rarity === r).sort(by);
if (skins.length) out.push([COL_RARITY_WORDS[r - 1] ?? 'Other', CAT_TIERS[r - 1] ?? CAT_TIERS[0], skins]);
}
const star = set.skins.filter((s) => s.star).sort(by);
const gloves = star.length && star.every((s) => /Gloves|Wraps/.test(s.weapon));
if (star.length) out.push([gloves ? '★ Gloves' : '★ Knives', CAT_TIERS[6], star]);
return out;
}
function colBody(set, catalog, prices, pick) {
const body = colEl('div', 'tf-col-body');
const tiles = [];
for (const [word, colour, skins] of colGroups(set)) {
const group = colEl('section', 'tf-col-g', undefined, body);
group.style.setProperty('--tf-col-c', colour);
group.ariaLabel = word;
const head = colEl('div', 'tf-col-gh', undefined, group);
colEl('span', 'tf-col-gt', word, head);
colEl('span', 'tf-col-gn', `${skins.length}`, head);
const row = colEl('div', 'tf-col-tiles', undefined, group);
for (const s of skins) {
const tile = (colEl('a', 'tf-col-tile', undefined, row));
[tile.target, tile.rel, tile.referrerPolicy] = ['_blank', 'noopener noreferrer', 'no-referrer'];
tile.title = `${s.star ? '★ ' : ''}${s.weapon} | ${s.name}`;
const box = colEl('span', 'tf-col-img', undefined, tile);
const url = catalog.skinImage(s.def, s.paint);
if (url) catImg('tf-col-i', url, '', box);
colEl('span', 'tf-col-n', s.name, tile);
colEl('span', 'tf-col-w', s.weapon, tile);
const [price, other] = [colEl('span', 'tf-col-p', '', tile), colEl('span', 'tf-col-o', '', tile)];
colClick(tile, ( e) => {
if (!e.isTrusted || e.button || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
if (!tile.href) return void e.preventDefault();
if (!tierSignedIn()) return;
e.preventDefault();
pick(s, tile);
});
tiles.push([s, tile, price, other]);
}
}
let [gen, tries] = [0, 0];
function draw(wear, cat, source, again = false) {
const my = ++gen;
if (!again) tries = 0;
const asks = [];
for (const [s, tile, price, other] of tiles) {
const range = colRange(s, wear);
const none = !range
? `no ${COL_WEARS[wear][0]}`
: cat === 2 && !s.st
? 'no StatTrak'
: cat === 3 && !s.sv
? 'no Souvenir'
: '';
const href = none ? null : colSearch(s, wear, cat);
if (href) tile.href = href;
else tile.removeAttribute('href');
tile.classList.toggle('tf-col-none', !!none);
price.classList.remove('tf-col-dash');
[price.textContent, other.textContent] = [none, ''];
tile.ariaLabel = `${tile.title}, ${none || COL_WEARS[wear][1]}`;
if (none) continue;
price.textContent = '…';
const name = colMarketName(s, wear, cat);
const own = (cat === 3 ? [] : cat === 2 ? s.stattrak : s.normal)[wear] || null;
const ask = prices.lookup(name);
asks.push(ask);
ask.then((slots) => {
if (my !== gen) return;
const [main, second, priced] = colLines(priceRows(slots, null, name), own, source);
[price.textContent, other.textContent] = [main, second];
price.classList.toggle('tf-col-dash', !priced);
tile.ariaLabel = `${tile.title}, ${COL_WEARS[wear][1]}, ${priced ? main : 'no price'}${second ? `, ${second}` : ''}`;
});
}
pricePromise.all(asks).then((all) => {
if (my === gen && all.some((s) => s === null) && !prices.answers() && ++tries <= 6)
tickAfter(() => void (my === gen && draw(wear, cat, source, true)), 2500);
});
}
return { body, draw, count: tiles.length };
}
// ---- src/collection-menu.js
function colMenu(into, current, pick) {
const wrap = colEl('span', 'tf-col-src', undefined, into);
const btn = (colEl('button', 'tf-col-sel', undefined, wrap));
[btn.type, btn.ariaHasPopup, btn.ariaExpanded] = ['button', 'listbox', 'false'];
const label = colEl('span', 'tf-col-sell', '', btn);
colEl('span', 'tf-col-caret', '', btn).ariaHidden = 'true';
const list = colEl('div', 'tf-col-menu', undefined, wrap);
[list.role, list.ariaLabel, list.hidden] = ['listbox', 'Price source', true];
const opts = COL_SOURCES.map(([key, word]) => {
const o = (colEl('div', 'tf-col-opt', undefined, list));
[o.role, o.tabIndex] = ['option', -1];
colEl('span', 'tf-col-chk', '', o).ariaHidden = 'true';
colEl('span', 'tf-col-ow', word, o);
colClick(o, ( e) => e.isTrusted && choose(key));
return o;
});
const at = () =>
Math.max(
0,
COL_SOURCES.findIndex(([k]) => k === current()),
);
function set( key) {
const i = Math.max(
0,
COL_SOURCES.findIndex(([k]) => k === key),
);
label.textContent = COL_SOURCES[i][1];
btn.ariaLabel = `Price source: ${COL_SOURCES[i][1]}`;
opts.forEach((o, j) => (o.ariaSelected = `${j === i}`));
}
function drop() {
list.hidden = false;
btn.ariaExpanded = 'true';
opts[at()].focus({ preventScroll: true });
}
function close(back = true) {
if (list.hidden) return;
list.hidden = true;
btn.ariaExpanded = 'false';
if (back) btn.focus({ preventScroll: true });
}
function choose( key) {
close();
if (key !== current()) (set(key), pick(key));
}
colClick(btn, ( e) => e.isTrusted && (list.hidden ? drop() : close()));
tapApply(tapListen, btn, [
'keydown',
( e) => {
if (!e.isTrusted || !['ArrowDown', 'ArrowUp'].includes(e.key)) return;
e.preventDefault();
drop();
},
]);
tapApply(tapListen, list, [
'keydown',
( e) => {
if (!e.isTrusted) return;
const i = opts.findIndex((o) => o === document.activeElement);
const to = { ArrowDown: i + 1, ArrowUp: i - 1, Home: 0, End: opts.length - 1 }[e.key];
if (to !== undefined) opts[Math.min(Math.max(to, 0), opts.length - 1)].focus({ preventScroll: true });
else if (e.key === 'Enter' || e.key === ' ') i >= 0 && choose(COL_SOURCES[i][0]);
else if (e.key === 'Escape') close();
else if (e.key === 'Tab') return close(false);
else return;
e.preventDefault();
e.stopPropagation();
},
]);
tapApply(tapListen, wrap, [
'focusout',
( e) => {
if (!(e.relatedTarget instanceof Node && wrap.contains(e.relatedTarget))) close(false);
},
]);
set(current());
return { set };
}
// ---- src/collection-parts.js
const COL_GRID =
'M1 1h3v3H1zM6.5 1h3v3h-3zM12 1h3v3h-3zM1 6.5h3v3H1zM6.5 6.5h3v3h-3zM12 6.5h3v3h-3zM1 12h3v3H1zM6.5 12h3v3h-3zM12 12h3v3h-3z';
function colGridIcon() {
const svg = document.createElementNS(CAT_SVG, 'svg');
svg.setAttribute('class', 'tf-col-ico');
svg.setAttribute('viewBox', '0 0 16 16');
svg.setAttribute('aria-hidden', 'true');
const path = document.createElementNS(CAT_SVG, 'path');
path.setAttribute('d', COL_GRID);
svg.append(path);
return svg;
}
function colListing() {
const t = document.title;
const wear = COL_WEARS.findIndex(([, word]) => t.includes(`(${word})`));
const f = parseFloat(document.querySelector(`${TF_SELECTORS.dialog} ${TF_SELECTORS.floatValue}`)?.textContent ?? '');
const cat = t.includes('StatTrak™') ? 2 : t.startsWith('Souvenir ') ? 3 : 1;
return { wear: wear >= 0 ? wear : colFloat(f) ? colWearOf(f) : 2, cat };
}
function colButton(text, into, fn) {
const b = (colEl('button', 'tf-col-b', text, into));
b.type = 'button';
colClick(b, ( e) => e.isTrusted && fn());
return b;
}
function colDismiss(d, close) {
tapApply(tapListen, d, [
'keydown',
( e) => {
if (e.key !== 'Escape') return;
e.preventDefault();
e.stopPropagation();
close();
},
]);
colClick(d, ( e) => {
const r = d.getBoundingClientRect();
const out = e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
if (e.target === d && out) close();
});
}
// ---- src/collection-window.js
function createCollectionWindow(catalog, prices, guard) {
const html = document.documentElement;
const attr = TF_SETTINGS.collectionWindow.attr;
let ix = null;
catalog.schemaParsed((j) => void (ix = colIndex(j)));
let link = null;
let marks = [];
let key = '';
let win = null;
let src = 'csfloat';
let redraw = () => {};
const prev = gradeSide.got;
gradeSide.got = (v) => {
try {
if (tapOwn(v, 'tf') !== 'colprice') return prev(v);
const w = tapOwn(v, 'v');
if (COL_SOURCES.some(([k]) => k === w)) ((src = w), redraw());
} catch {}
};
function close() {
if (!win) return;
const was = win;
win = null;
was.close();
was.remove();
if (link?.isConnected) link.focus({ preventScroll: true });
}
function openSet() {
const set = ix?.sets.get(key);
if (win || !set?.skins.length) return;
let { wear, cat } = colListing();
const [canSt, canSv] = [set.skins.some((s) => s.st), set.souvenir || set.skins.some((s) => s.sv)];
if ((cat === 2 && !canSt) || (cat === 3 && !canSv)) cat = 1;
const d = (colEl('dialog', 'tf-col'));
d.ariaLabel = set.name;
const head = colEl('header', 'tf-col-head', undefined, d);
const title = colEl('div', 'tf-col-title', undefined, head);
colEl('h2', 'tf-col-name', set.name, title);
const { body, draw, count } = colBody(set, catalog, prices, (s, tile) => void colGo(s, tile, wear, cat, guard, close));
colEl('span', 'tf-col-count', `${count} skins`, title);
const ctl = colEl('div', 'tf-col-ctl', undefined, head);
const menu = colMenu(
ctl,
() => src,
(k) => {
src = k;
gradeSide.post({ tf: 'colprice', v: src });
show();
},
);
const seg = colEl('div', 'tf-col-seg', undefined, ctl);
[seg.role, seg.ariaLabel] = ['group', 'Wear'];
const wears = COL_WEARS.map(([short, word], i) => {
const b = colButton(short, seg, () => ((wear = i), show()));
b.title = word;
return b;
});
const flip = ( c) => () => ((cat = cat === c ? 1 : c), show());
const stb = canSt ? colButton('StatTrak', ctl, flip(2)) : null;
const svb = canSv ? colButton('Souvenir', ctl, flip(3)) : null;
stb?.classList.add('tf-col-st');
svb?.classList.add('tf-col-st', 'tf-col-sv');
const x = colButton('×', ctl, close);
[x.className, x.ariaLabel, x.title] = ['tf-col-b tf-col-x', 'Close', 'Close (Esc)'];
d.append(body);
function show() {
wears.forEach((b, i) => (b.ariaPressed = `${i === wear}`));
if (stb) stb.ariaPressed = `${cat === 2}`;
if (svb) svb.ariaPressed = `${cat === 3}`;
menu.set(src);
draw(wear, cat, src);
}
show();
colDismiss(d, close);
tapApply(tapListen, d, ['close', () => win === d && close()]);
win = d;
redraw = () => win === d && show();
document.body.append(d);
d.showModal();
wears[wear].focus({ preventScroll: true });
}
function sync() {
const dialog = html.hasAttribute(attr) ? document.querySelector(TF_SELECTORS.dialog) : null;
const line = dialog?.querySelector(`:scope > .container > ${TF_SELECTORS.about} > .collection`);
const text = [...(line?.childNodes ?? [])].filter((n) => n.nodeType === 3).map((n) => n.nodeValue).join('').trim();
if (text && !ix) catalog.schemaNeed();
const k = (text && ix?.byName.get(text)) || '';
if (!line || !k) {
[key, link] = ['', (link?.remove(), null)];
marks = (marks.forEach((m) => m.remove()), []);
return close();
}
if (k !== key) close();
key = k;
if (link?.parentElement !== line) {
link?.remove();
marks.forEach((m) => m.remove());
const icon = colGridIcon();
line.prepend(icon);
const more = colEl('span', 'tf-col-more', '', line);
more.ariaHidden = 'true';
marks = [icon, more];
link = (colEl('button', 'tf-col-link', undefined, line));
[link.type, link.ariaHasPopup] = ['button', 'dialog'];
colClick(link, ( e) => e.isTrusted && openSet());
}
const n = ix?.sets.get(k)?.skins.length ?? 0;
const words = [` · ${n} skins ›`, `Show all skins in ${text}`];
if (marks[1].textContent !== words[0]) marks[1].textContent = words[0];
if (link.ariaLabel !== words[1]) [link.ariaLabel, link.title] = [words[1], words[1]];
}
const later = frameLater(sync, (f) => tapApply(catFrame, globalThis, [f]));
const follow = () => dialogFollow(watch, [attr], { characterData: true });
const watch = new MutationObserver(() => {
follow();
later();
});
follow();
catalog.onImages(later);
}
// ---- src/left-tidy.js
const LEFT_TAGS = /^\s*([A-Z0-9_]+;\s*)+$/;
function leftParas(f) {
const out = [];
let cur = '';
const push = () => ((cur = cur.replace(/\s+/g, ' ').trim()) && out.push(cur), (cur = ''));
for (const n of f.childNodes) {
if (n.nodeType === 3) cur += n.nodeValue ?? '';
else if (n instanceof HTMLBRElement) push();
else if (n instanceof HTMLElement && n.tagName === 'I') {
push();
const t = (n.textContent ?? '').replace(/\s+/g, ' ').trim();
if (t && !LEFT_TAGS.test(t)) out.push(`“${t}”`);
} else if (n instanceof HTMLElement && !n.className.startsWith('tf-')) cur += n.textContent ?? '';
}
push();
return out;
}
function createLeftTidy() {
const html = document.documentElement;
const attr = TF_SETTINGS.tidyTop.attr;
let mine = [];
let want = '';
function clear() {
mine.forEach((el) => (tipBox.tie(el, null), el.remove()));
[mine, want] = [[], ''];
}
function sync() {
const dialog = html.hasAttribute(attr) ? document.querySelector(TF_SELECTORS.dialog) : null;
const grid = dialog?.querySelector(':scope > .container > .grid-summary');
const flavour = grid?.querySelector(':scope > .item-schema-details:not(.hidden) > .flavour-text');
const seller = grid?.querySelector(':scope > .seller-details');
const trades = seller?.querySelector('app-user-delivery .metric.green > span > div > div');
const name = dialog?.querySelector(':scope > .container > .grid-item item-card .name-container');
const paras = flavour ? leftParas(flavour) : [];
const n = (trades?.textContent ?? '').replace(/\D/g, '');
const now = grid ? `${paras.join('\n')}|${n}|${!!name}|${!!seller}` : '';
const placed = mine.every((el) => el.isConnected);
if (now === want && placed) return;
clear();
want = now;
if (!grid) return;
const outer = trades?.parentElement;
if (outer && n && n.length < 10) {
const t = catEl('span', 'tf-trades', ` · ${(+n).toLocaleString('en-US')} trades`);
outer.after(t);
mine.push(t);
}
if (!paras.length) return;
if (!name) return;
const i = (catEl('button', 'tf-about-i', 'i'));
[i.type, i.ariaLabel] = ['button', 'Description'];
tipBox.tie(i, { head: 'Description', body: paras.join('\n\n') });
name.append(i);
mine.push(i);
}
const later = frameLater(sync, (f) => tapApply(catFrame, globalThis, [f]));
const follow = () => dialogFollow(watch, [attr], { characterData: true });
const watch = new MutationObserver((records) => {
follow();
if (records.some((r) => !mine.some((el) => el === r.target || el.contains(r.target)))) later();
});
follow();
}
// ---- src/main-taps.js
function mainTaps(rate, refresh, sales, dbGrades, tiers, sell) {
return [
(record) => {
try {
rate.see(record);
return refresh.seen(record);
} catch {
return false;
}
},
(history) => {
try {
sales.history(history);
} catch {}
},
(rows) => {
try {
dbGrades.feed(rows);
} catch {}
},
(query) => {
try {
tiers.opened(query);
} catch {}
},
(status) => {
try {
sales.status(status);
} catch {}
},
(path, body) => {
try {
priceMeta(path, body);
} catch {}
},
(items) => {
try {
sell.feed(items);
} catch {}
},
];
}
// ---- src/main.js
const shots = createShots();
const layout = createCardLayout();
const age = createAge();
const grades = createGrades(() => {
sales.indexed();
dbGrades.indexed();
dbTiers.indexed();
menus.indexed();
priceCards.indexed();
sell.indexed();
});
const rate = createRate();
const refresh = createRefresh(rate);
const sales = createSales(grades);
const dbGrades = createDbGrades(grades);
const chip = createChip(refresh);
const premium = createPremium();
const prices = createPrices();
const orders = createBuyOrders(refresh.running);
const goods = createPriceGoods();
const pricePanel = createPricePanel(prices, orders, goods);
const offer = createOffer(prices, orders, () => sales.graph(), grades.icons);
const priceCards = createPriceCards(prices, grades.icons, orders, goods);
const tradeups = createTradeupCards();
const stickerCards = createStickerCards();
const stickerPanel = createStickerPanel(prices);
const catalogViews = createCatalogViews();
createLeftTidy();
const menus = createMenus(prices, grades.index);
const tiers = createTiers(grades.index, rate, premium, chip);
const dbTiers = createDbTiers(grades.index);
createDbMerge();
createCollectionWindow(catalogViews.catalog, prices, createColGuard(tiers.net));
const sell = createSellGrades(grades, premium, tiers.net);
installTap(
(history, db, inv) =>
inv
? sell.enabled()
: db
? dbGrades.enabled()
: history
? sales.enabled()
: shots.enabled() ||
layout.enabled() ||
age.enabled() ||
grades.enabled() ||
refresh.running() ||
sales.enabled() ||
tiers.wanted() ||
pricePanel.wanted() ||
priceCards.wanted() ||
tradeups.wanted() ||
stickerCards.wanted() ||
stickerPanel.wanted() ||
catalogViews.wanted(),
(all, search, own, query, raw) => {
const listings = all.filter((l) => !tapMatches(TAP_GOODS_KEY, l[0]));
if (listings.length < all.length)
try {
goods.feed(all);
} catch {}
if (!listings.length) {
for (const f of search && !all.length ? [tiers.seen, premium.grid] : [])
try {
f(listings, query, raw);
} catch {}
return;
}
shotOnce(() => {
try {
shots.feed(listings);
} catch {}
try {
if (search) tiers.seen(listings, query, raw);
} catch {}
try {
if (search) premium.grid(listings, query, raw);
} catch {}
try {
layout.feed(listings);
} catch {}
try {
age.feed(listings);
} catch {}
try {
grades.feed(listings);
} catch {}
try {
refresh.feed(listings, search, own);
} catch {}
orders.feed(listings);
try {
priceCards.feed(listings);
} catch {}
try {
tradeups.feed(listings);
} catch {}
try {
stickerCards.feed(listings);
} catch {}
catalogViews.feed(listings);
});
try {
sales.feed(listings);
} catch {}
try {
pricePanel.feed(listings);
} catch {}
try {
offer.feed(listings);
} catch {}
try {
stickerPanel.feed(listings);
} catch {}
},
...mainTaps(rate, refresh, sales, dbGrades, tiers, sell),
);
// ---- src/main-tail.js
createBargain();
createPriceFit();
createDialog();
createComboTab();
cardOver();
})();
