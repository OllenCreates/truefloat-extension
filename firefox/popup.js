// TrueFloat 0.1.0: popup.js, built from src/settings.js, src/popup.js.
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

// ---- src/popup.js
// 001, 006, 007 Popup: a checkbox per switch, a radio per theme; the only writer of storage.sync.
// Runs in the popup; toggles.js on csfloat.com follows each change live.
const api = globalThis.browser ?? globalThis.chrome;

/** @type {HTMLElement} */ (document.getElementById('version')).textContent = `v${api.runtime.getManifest().version}`;

// Each input is named after its key. Inputs stay disabled until the
// stored values are in, and if storage fails, for good.
api.storage.sync.get().then(
  (values) => {
    for (const [key, setting] of Object.entries(TF_SETTINGS)) {
      const on = typeof values[key] === typeof setting.default ? values[key] : setting.default;
      for (const box of /** @type {HTMLInputElement[]} */ ([...document.getElementsByName(key)])) {
        const radio = box.type === 'radio';
        box.checked = radio ? box.value === on : on === true;
        box.disabled = false;
        box.addEventListener('change', () => api.storage.sync.set({ [key]: radio ? box.value : box.checked }));
      }
    }
    // Off (007) disables the fieldset, so every other input; each keeps its value.
    const master = /** @type {HTMLInputElement} */ (document.getElementById('enabled'));
    const fit = () => document.querySelector('fieldset')?.toggleAttribute('disabled', !master.checked);
    master.addEventListener('change', fit);
    fit();
  },
  () => {},
);
})();
