// TrueFloat 0.1.0: main.js, built from src/settings.js, src/selectors.js, src/tap.js, src/shot-match.js, src/shot-viewport.js, src/shots.js, src/main.js.
(() => {
'use strict';

// ---- src/settings.js
// 001, 006, 007 Settings: each storage.sync key, its default, and the <html> attribute toggles.js sets.
// Runs in the page world, the isolated content script and the popup: every bundle starts with it.
const TF_SETTINGS = Object.freeze({
  enabled: Object.freeze({ default: true, attr: '' }),
  noGlow: Object.freeze({ default: true, attr: 'data-tf-noglow' }),
  shots: Object.freeze({ default: true, attr: 'data-tf-shots' }),
  theme: Object.freeze({ default: 'off', attr: 'data-tf-theme' }),
});

// ---- src/selectors.js
// Every csfloat.com selector the extension uses; test/page-css.test.mjs checks page.css against these.
// Runs in the page world (MAIN), in main.js.
//
// A CSFloat deploy that renames one of these breaks only the feature that
// uses it, and a fix ships as a PATCH release.
const TF_SELECTORS = Object.freeze({
  // A listing card in a grid (search, item pages' similar listings).
  card: 'item-card',
  // 002: the box behind the card image that carries the inline rarity gradient.
  glow: 'item-card app-item-image-actions > div.container',
  // 004: the card's inspect link; its href is the listing's serialized_inspect.
  inspectLink: 'a.inspect-link',
  // 004: the card's own image, which the screenshot overlay goes after.
  cardImage: 'app-item-image-actions > div.container img',
});

// ---- src/tap.js
// 003 Listing tap: reads two fields from csfloat.com listing responses the page itself requested.
// Runs in the page world (MAIN) at document_start, before any page script.
//
// Wraps only XMLHttpRequest.prototype.open (send, headers and fetch stay the
// platform's): the original runs first with the same this and arguments, and
// its result or exception is the caller's; the tap's own work follows in a
// try that swallows its errors. It listens only to allowlisted GETs, reads
// after the page's own handlers, never changes a response, and stores, logs
// and sends nothing.

const TAP_ORIGIN = 'https://csfloat.com';
const TAP_PATH = /^\/api\/v1\/listings(\/\d+(\/similar)?)?$/;
const TAP_GET = /^get$/i;
const TAP_MAX_CHARS = 5 * 1024 * 1024;
const TAP_MAX_LISTINGS = 200;
// The two fields a design note names (003, 004), and the pattern each must match.
const TAP_INSPECT = /^steam:\/\/rungame\/730\/\d{1,20}\/\+csgo_econ_action_preview(%20| )[A-Za-z0-9]{1,512}$/;
const TAP_SHOT_ID = /^\d{1,20}$/;

// Captured now, so page code that later replaces a built-in cannot change
// what the tap does.
const tapApply = Reflect.apply;
const tapExec = RegExp.prototype.exec;
const tapListen = EventTarget.prototype.addEventListener;
/** @param {RegExp} pattern @param {unknown} value @returns {value is string} */
const tapMatches = (pattern, value) => typeof value === 'string' && tapApply(tapExec, pattern, [value]) !== null;

// onListings receives [serialized_inspect, cs2_screenshot_id] pairs;
// wanted() says whether any feature needs them now.
/** @param {() => boolean} wanted @param {(pairs: [string, string][]) => void} onListings */
function installTap(wanted, onListings) {
  const proto = XMLHttpRequest.prototype;
  const original = proto.open;
  const apply = tapApply;
  // Every getter named below exists, so the descriptor and its get do too.
  /** @type {(object: object, key: string) => Function} */
  const getter = (object, key) =>
    /** @type {Function} */ (/** @type {PropertyDescriptor} */ (Reflect.getOwnPropertyDescriptor(object, key)).get);
  const unlisten = EventTarget.prototype.removeEventListener;
  const later = globalThis.setTimeout;
  const parse = JSON.parse;
  const isArray = Array.isArray;
  const PageURL = URL;
  const urlOrigin = getter(URL.prototype, 'origin');
  const urlPath = getter(URL.prototype, 'pathname');
  const responseURL = getter(proto, 'responseURL');
  const responseType = getter(proto, 'responseType');
  const response = getter(proto, 'response');
  const responseText = getter(proto, 'responseText');
  const readyState = getter(proto, 'readyState');
  // A watched XHR maps to a token that every open replaces, so a read queued
  // for one request never reads the next one on the same object.
  const tokens = new WeakMap();
  const { get: tokenOf, set: setToken, delete: dropToken } = WeakMap.prototype;

  /** @param {URL} url */
  function allowed(url) {
    return apply(urlOrigin, url, []) === TAP_ORIGIN && tapMatches(TAP_PATH, apply(urlPath, url, []));
  }

  /** @param {unknown} method @param {unknown} url */
  function wants(method, url) {
    // Strings only: the tap never calls a toString the page handed in.
    try {
      return tapMatches(TAP_GET, method) && typeof url === 'string' && allowed(new PageURL(url, document.baseURI));
    } catch {
      return false;
    }
  }

  /** @this {XMLHttpRequest} @param {unknown} method @param {unknown} url */
  function open(method, url) {
    const result = apply(original, this, arguments);
    try {
      const had = apply(dropToken, tokens, [this]);
      const want = wants(method, url);
      if (want) apply(setToken, tokens, [this, {}]);
      if (want !== had) apply(want ? tapListen : unlisten, this, ['load', onLoad]);
    } catch {
      // Ours, never the page's: the original open has already returned.
    }
    return result;
  }

  /** @this {XMLHttpRequest} */
  function onLoad() {
    try {
      const xhr = this;
      const token = apply(tokenOf, tokens, [xhr]);
      const url = apply(responseURL, xhr, []);
      // The final URL, after redirects, must still be on the allowlist.
      if (token && wanted() && allowed(new PageURL(url))) {
        // After the page's own load handlers, which were added after ours.
        apply(later, globalThis, [() => read(xhr, token, url), 0]);
      }
    } catch {}
  }

  /** @param {XMLHttpRequest} xhr @param {object} token @param {string} url */
  function read(xhr, token, url) {
    try {
      // Only the request that fired load: any open since then, ours or
      // another realm's, changes the token, the state or the URL.
      if (apply(tokenOf, tokens, [xhr]) !== token) return;
      if (apply(readyState, xhr, []) !== 4 || apply(responseURL, xhr, []) !== url) return;
      const type = apply(responseType, xhr, []);
      let body;
      if (type === 'json') {
        body = apply(response, xhr, []);
      } else if (type === '' || type === 'text') {
        const text = apply(responseText, xhr, []);
        if (typeof text !== 'string' || text.length > TAP_MAX_CHARS) return;
        body = parse(text);
      } else {
        return;
      }
      const pairs = pick(body);
      if (pairs.length) onListings(pairs);
    } catch {
      // Malformed or unexpected: the page handles its own response.
    }
  }

  // {data: [listing]} for the grid, [listing] for similar, a listing by id.
  // any: parsed JSON of unknown shape; every field is checked before use.
  /** @param {any} body @returns {[string, string][]} */
  function pick(body) {
    if (!body || typeof body !== 'object') return [];
    const list = isArray(body) ? body : isArray(body.data) ? body.data : [body];
    /** @type {[string, string][]} */
    const pairs = [];
    const count = list.length < TAP_MAX_LISTINGS ? list.length : TAP_MAX_LISTINGS;
    for (let i = 0; i < count; i++) {
      const item = list[i] && list[i].item;
      if (!item || typeof item !== 'object') continue;
      const key = item.serialized_inspect;
      const id = item.cs2_screenshot_id;
      if (tapMatches(TAP_INSPECT, key) && tapMatches(TAP_SHOT_ID, id)) pairs[pairs.length] = [key, id];
    }
    return pairs;
  }

  // Keeps open's flags (writable, configurable, not enumerable).
  Reflect.defineProperty(proto, 'open', { value: open });
}

// ---- src/shot-match.js
// 004 Which screenshot a card may show: the one its single inspect link names, if exactly one id claims it.
// Runs in the page world (MAIN), in main.js before shots.js.
//
// A card's key is the href of its one inspect link; card position is never
// used. A key two different ids have claimed stays unmatched for good.

const SHOT_MAX_KEYS = 1000;

/**
 * Drops the oldest entry once a Set or Map holds more than SHOT_MAX_KEYS.
 * @param {Set<string> | Map<string, unknown>} collection
 */
function shotBounded(collection) {
  // Over the limit, so there is a first key.
  if (collection.size > SHOT_MAX_KEYS) collection.delete(/** @type {string} */ (collection.keys().next().value));
}

function createShotMatch() {
  /** @type {Map<string, string | null>} */
  const ids = new Map(); // serialized_inspect -> screenshot id, or null once two ids claim it

  /** @param {Element} card */
  function keyOf(card) {
    const links = card.querySelectorAll(TF_SELECTORS.inspectLink);
    return links.length === 1 ? links[0].getAttribute('href') : null;
  }

  /** @param {string | null} key */
  function idFor(key) {
    return (key !== null && ids.get(key)) || null;
  }

  /** @param {[string, string][]} pairs [serialized_inspect, cs2_screenshot_id] from the tap */
  function learn(pairs) {
    for (const [key, id] of pairs) {
      if (ids.has(key)) {
        if (ids.get(key) !== id) ids.set(key, null);
      } else {
        ids.set(key, id);
        shotBounded(ids);
      }
    }
  }

  return { keyOf, idFor, learn };
}

// ---- src/shot-viewport.js
// 004 Which listing cards are within one viewport (they may load) and which are over two away (they drop).
// Runs in the page world (MAIN), in main.js before shots.js.

/**
 * @typedef {object} ShotViewportEvents
 * @property {(card: Element) => void} near a card came within one viewport
 * @property {(card: Element) => void} leave a card left that band
 * @property {(card: Element) => void} far a card is more than two viewports away
 * @property {() => void} settle after each batch of the above
 */

/** @param {ShotViewportEvents} on */
function createShotViewport(on) {
  /** @type {Set<Element>} */
  const near = new Set(); // cards within one viewport

  const nearby = new IntersectionObserver(
    (entries) => {
      for (const { target, isIntersecting } of entries) {
        if (isIntersecting) {
          near.add(target);
          on.near(target);
        } else {
          near.delete(target);
          on.leave(target);
        }
      }
      on.settle();
    },
    { rootMargin: '100% 0px' },
  );

  const kept = new IntersectionObserver(
    (entries) => {
      for (const { target, isIntersecting } of entries) {
        if (isIntersecting) continue;
        // Two viewports away is not within one, whichever observer reports first.
        near.delete(target);
        on.far(target);
        if (!target.isConnected) {
          nearby.unobserve(target);
          kept.unobserve(target);
        }
      }
      on.settle();
    },
    { rootMargin: '200% 0px' },
  );

  /** Watches the node, if it is a card, and every card inside it. @param {Element} node */
  function observeCards(node) {
    const cards = node.querySelectorAll(TF_SELECTORS.card);
    if (node.matches(TF_SELECTORS.card)) {
      nearby.observe(node);
      kept.observe(node);
    }
    for (const card of cards) {
      nearby.observe(card);
      kept.observe(card);
    }
  }

  return { near, observeCards };
}

// ---- src/shots.js
// 004 Real screenshot: our own <img> overlay with a listing card's in-game screenshot from csfloat.pics.
// Runs in the page world (MAIN), in the same closure as the tap.
//
// shot-match.js decides which screenshot a card may show. The overlay goes
// after the card's image, which is never touched. Whenever a card's link,
// image or children change, its overlay is checked again in the
// MutationObserver callback, which runs before the next paint, so a reused
// card never shows the previous listing's screenshot.
//
// Loading is lazy and capped: cards within one viewport (shot-viewport.js),
// at most four at once, none while Save-Data is on, and overlays more than
// two viewports away are removed. page.css shows an overlay once it has loaded.

/** @param {string} id */
const SHOT_URL = (id) => `https://csfloat.pics/m/${id}/playside.png?v=3`;
const SHOT_MAX_LOADING = 4;

/** @typedef {{ img: HTMLImageElement, key: string | null, id: string }} ShotOverlay */

function createShots() {
  const attr = TF_SETTINGS.shots.attr;
  const { keyOf, idFor, learn } = createShotMatch();
  /** @type {Set<string>} */
  const failed = new Set(); // ids whose image failed to load; never retried
  /** @type {Map<Element, ShotOverlay>} */
  const overlays = new Map(); // card -> { img, key, id }
  /** @type {Set<Element>} */
  const pending = new Set(); // near cards waiting for a load slot
  /** @type {Set<HTMLImageElement>} */
  const loading = new Set(); // overlay images still loading

  const enabled = () => document.documentElement.hasAttribute(attr);
  const saveData = () => navigator.connection?.saveData === true;

  /** @param {Element} card */
  function drop(card) {
    const overlay = overlays.get(card);
    if (!overlay) return;
    overlays.delete(card);
    loading.delete(overlay.img);
    // Detached first, so cancelling the load is not a mutation we observe.
    overlay.img.remove();
    overlay.img.removeAttribute('src');
  }

  // Drops the card's overlay if it no longer matches the card; queues the
  // card for one if it is near and has none. A link or image that Angular
  // re-creates with the same values keeps the overlay: the key names the
  // screenshot, so an unchanged key and id need no second load.
  /** @param {Element} card */
  function sync(card) {
    const overlay = overlays.get(card);
    if (overlay && (!overlay.img.isConnected || keyOf(card) !== overlay.key || idFor(overlay.key) !== overlay.id)) {
      drop(card);
    }
    if (!overlays.has(card) && near.has(card)) pending.add(card);
  }

  /** @param {Element} card */
  function start(card) {
    if (!enabled() || saveData() || !card.isConnected || overlays.has(card)) return;
    const key = keyOf(card);
    const id = idFor(key);
    if (!tapMatches(TAP_SHOT_ID, id) || failed.has(id)) return;
    const base = card.querySelector(TF_SELECTORS.cardImage);
    if (!base) return;
    const img = document.createElement('img');
    img.className = 'tf-shot';
    img.alt = '';
    img.decoding = 'async';
    img.setAttribute('fetchpriority', 'low');
    img.referrerPolicy = 'no-referrer';
    const current = () => overlays.get(card)?.img === img;
    const onLoad = () => {
      if (!current()) return;
      loading.delete(img);
      img.setAttribute('data-tf-loaded', '');
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
    overlays.set(card, { img, key, id });
    loading.add(img);
    base.after(img);
    img.src = SHOT_URL(id);
  }

  function pump() {
    for (const card of pending) {
      if (loading.size >= SHOT_MAX_LOADING) return;
      pending.delete(card);
      if (near.has(card)) start(card);
    }
  }

  const { near, observeCards } = createShotViewport({
    near: (card) => sync(card),
    leave: (card) => pending.delete(card),
    far: drop,
    settle: pump,
  });

  new MutationObserver((records) => {
    /** @type {Set<Element>} */
    const touched = new Set(); // cards to check again
    for (const record of records) {
      const target = record.target;
      if (record.type === 'attributes') {
        if (target === document.documentElement && record.attributeName === attr) {
          for (const card of near) touched.add(card);
        } else {
          // A new link or image on the card; our own overlay's src is not.
          const card = /** @type {Element} */ (target).closest(TF_SELECTORS.card);
          if (card && overlays.get(card)?.img !== target) touched.add(card);
        }
        continue;
      }
      if (target.nodeType === 1) {
        const card = /** @type {Element} */ (target).closest(TF_SELECTORS.card);
        if (card) touched.add(card);
      }
      for (const node of record.addedNodes) if (node.nodeType === 1) observeCards(/** @type {Element} */ (node));
    }
    for (const card of touched) sync(card);
    pump();
  }).observe(document, { subtree: true, childList: true, attributeFilter: ['href', 'src', attr] });

  if (document.documentElement) observeCards(document.documentElement);

  /** @param {[string, string][]} pairs */
  function feed(pairs) {
    learn(pairs);
    for (const card of [...overlays.keys(), ...near]) sync(card);
    pump();
  }

  return { enabled, feed };
}

// ---- src/main.js
// 003, 004 entry: the tap feeds the screenshot feature and reads a response only while that feature is on.
// Runs in the page world (MAIN), last in main.js.
const shots = createShots();
installTap(shots.enabled, shots.feed);
})();
