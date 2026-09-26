// TrueFloat 0.1.0: toggles.js, built from src/settings.js, src/toggles.js.
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

// ---- src/toggles.js
// 001, 007 Toggles: mirrors each setting onto <html> as its data-tf-* attribute and follows changes live.
// Runs as the isolated content script, at document_start. No page data enters it.
const api = globalThis.browser ?? globalThis.chrome;

/** @param {Record<string, unknown>} values */
function mirror(values) {
  const root = document.documentElement;
  // Off (007) sets none; a switch sets '', the theme (006) its name; 'off' or garbage, none.
  const on = values.enabled !== false;
  for (const [key, setting] of Object.entries(TF_SETTINGS)) {
    if (!setting.attr) continue;
    const value = typeof values[key] === typeof setting.default ? values[key] : setting.default;
    if (on && (value === true || /^(dark|light)$/.test(String(value))))
      root.setAttribute(setting.attr, value === true ? '' : String(value));
    else root.removeAttribute(setting.attr);
  }
}

// Every change re-reads all settings, since the master switch decides the rest.
// If storage fails, no attribute is set and csfloat.com stays as it is.
const read = () => api.storage.sync.get().then(mirror, () => {});
read();
api.storage.onChanged.addListener((_, area) => area === 'sync' && read());
})();
