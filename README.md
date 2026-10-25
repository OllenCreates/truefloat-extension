<p align="center"><img src="chrome/icons/icon-128.png" width="72" alt=""></p>

<h1 align="center">TrueFloat extension</h1>

<p align="center">
  <a href="https://chromewebstore.google.com/detail/akjfcapndjmkdmnlbgafcmogaigjknmk"><img src="https://img.shields.io/chrome-web-store/v/akjfcapndjmkdmnlbgafcmogaigjknmk?label=Chrome%20Web%20Store&logo=googlechrome&logoColor=white" alt="Chrome Web Store"></a>
  <a href="https://addons.mozilla.org/firefox/addon/truefloat/"><img src="https://img.shields.io/amo/v/truefloat?label=Firefox%20Add-ons&logo=firefoxbrowser&logoColor=white" alt="Firefox Add-ons"></a>
  <a href="../../actions/workflows/sync.yml"><img src="https://img.shields.io/github/actions/workflow/status/OllenCreates/truefloat-extension/sync.yml?label=store%20check" alt="Store check"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-view%20only-lightgrey" alt="License"></a>
</p>

<p align="center">
  Every version published to the extension stores, open for anyone to audit.<br>
  Files are copied automatically from the Chrome Web Store and Firefox Add-ons, using <a href=".github/workflows/sync.yml">GitHub Actions</a>.
</p>

## Check the file fingerprint

You can check that the files published here are exactly the ones in your browser.

Each [release](../../releases/latest) lists a cryptographic hash: a unique fingerprint of a file. Change one character and the fingerprint changes completely, so a match means the files are identical. One check per browser:

<details>
<summary><b>Chrome</b></summary>

1. Go to `chrome://version` → copy Profile Path → open it in File Explorer
2. Open `Extensions` → `akjfcapndjmkdmnlbgafcmogaigjknmk` → the version folder
3. Right-click an empty spot → Open in Terminal → type `Get-FileHash main.js`
4. Same code as *Chrome (main.js)* in the release = same code

</details>

<details>
<summary><b>Firefox</b></summary>

1. Go to `about:support` → Profile Folder → Open Folder → `extensions`
2. Right-click an empty spot → Open in Terminal → type `Get-FileHash truefloat@truefloat.app.xpi`
3. Same code as *Firefox (.xpi)* in the release = same extension

</details>

Capital letters don't matter. On Mac, use `shasum -a 256` instead of `Get-FileHash`.

## What changed

Every [release](../../releases) has a *What changed* link showing the exact lines.

---

<p align="center">
  <a href="https://discord.gg/VN87NfzFEP"><img src="https://img.shields.io/badge/Discord-join-5865F2?logo=discord&logoColor=white" alt="Discord"></a>
  <a href="https://truefloat.app"><img src="https://img.shields.io/badge/truefloat.app-visit-1f2328" alt="truefloat.app"></a>
</p>
