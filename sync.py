"""Copies TrueFloat from the Chrome and Firefox stores into chrome/ and firefox/, one commit per store version.

Reads only the public stores. Every package must pass check() before it is committed; a failed check stops the run.
"""
import hashlib
import io
import json
import os
import re
import shutil
import subprocess
import sys
import urllib.request
import zipfile
from pathlib import Path

AMO = 'https://addons.mozilla.org/api/v5/addons/addon/truefloat@truefloat.app/versions/?page_size=50'
CHROME_ID = 'akjfcapndjmkdmnlbgafcmogaigjknmk'
CRX = ('https://clients2.google.com/service/update2/crx?response=redirect&prodversion=140.0'
       f'&acceptformat=crx3&x=id%3D{CHROME_ID}%26uc')
CHROME_FROM = (1, 1, 4)  # the Chrome store serves only its latest version; copies start here

# What the extension may contain. Changing any of these is a public commit.
PERMISSIONS = ['storage']
MATCHES = ['https://csfloat.com/*']
HOSTS = {
    'csfloat.com', 'csfloat.pics', 'steam.static.csfloat.io',   # the site it runs on, its images
    'truefloat.app',                                            # grades and prices
    'openskin.dev',                                             # price source credit link
    'steamcommunity.com', 'community.akamai.steamstatic.com',   # guide links, item images
    'buff.163.com', 'skinport.com', 'www.youpin898.com',        # market links
    'discord.gg',                                               # community link
    'www.w3.org',                                               # SVG namespace
    'clients2.google.com',                                      # update address the Chrome store adds
}
BANNED = {
    'eval': r'\beval\s*\(',
    'new Function': r'\bnew\s+Function\s*\(',
    'importScripts': r'\bimportScripts\s*\(',
    'non-GET request': r'''(?:\.open\(\s*|method\s*:\s*)['"`](?:POST|PUT|PATCH|DELETE)''',
}
SKIP = ('META-INF/', '_metadata/')  # store signatures, not extension code
ROOT = Path(__file__).parent
RELEASE = ROOT / '.release'
REPO = os.environ.get('GITHUB_REPOSITORY', 'OllenCreates/truefloat-extension')


def get(url):
    req = urllib.request.Request(url, headers={'User-Agent': 'truefloat-extension-sync'})
    with urllib.request.urlopen(req, timeout=60) as res:
        return res.read()


def vt(version):
    return tuple(int(p) for p in version.split('.'))


def unzip(data):
    with zipfile.ZipFile(io.BytesIO(data)) as z:
        return {n: z.read(n) for n in z.namelist() if not n.endswith('/') and not n.startswith(SKIP)}


def crx_zip(crx):
    assert crx[:4] == b'Cr24', 'not a CRX file'
    return crx[12 + int.from_bytes(crx[8:12], 'little'):]


def check(files, label):
    m = json.loads(files['manifest.json'])
    errors = []
    if m.get('permissions') != PERMISSIONS:
        errors.append(f"permissions {m.get('permissions')}")
    for key in ('host_permissions', 'optional_permissions', 'optional_host_permissions'):
        if m.get(key):
            errors.append(f'{key} {m[key]}')
    for cs in m.get('content_scripts', []):
        if cs.get('matches') != MATCHES:
            errors.append(f"content script matches {cs.get('matches')}")
    for name, data in files.items():
        if not name.endswith(('.js', '.html', '.css', '.json')):
            continue
        text = data.decode('utf-8')
        for host in set(re.findall(r'https?://([a-z0-9.-]+)', text, re.I)) - HOSTS:
            errors.append(f'{name}: address {host}')
        for what, pattern in BANNED.items():
            if re.search(pattern, text):
                errors.append(f'{name}: {what}')
    if errors:
        sys.exit(f'{label} failed the check:\n  ' + '\n  '.join(errors))


def write(folder, files):
    shutil.rmtree(ROOT / folder, ignore_errors=True)
    sums = []
    for name, data in sorted(files.items()):
        path = ROOT / folder / name
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_bytes(data)
        sums.append(f'{hashlib.sha256(data).hexdigest()}  {name}\n')
    (ROOT / folder / 'SHA256SUMS').write_text(''.join(sums), newline='\n')


def git(*args, env=None):
    return subprocess.run(['git', *args], cwd=ROOT, check=True, capture_output=True, text=True,
                          env={**os.environ, **(env or {})}).stdout.strip()


def version_of(folder):
    path = ROOT / folder / 'manifest.json'
    return json.loads(path.read_text('utf-8'))['version'] if path.exists() else None


def main():
    amo = {v['version']: v['file'] for v in json.loads(get(AMO))['results']}
    crx = get(CRX)
    chrome = unzip(crx_zip(crx))
    chrome_v = json.loads(chrome['manifest.json'])['version']

    steps = [('firefox', v) for v in amo if not version_of('firefox') or vt(v) > vt(version_of('firefox'))]
    if vt(chrome_v) >= CHROME_FROM and (not version_of('chrome') or vt(chrome_v) > vt(version_of('chrome'))):
        steps.append(('chrome', chrome_v))
    steps.sort(key=lambda s: (vt(s[1]), s[0] == 'chrome'))

    packages, new_tags = {('chrome', chrome_v): crx}, []
    for browser, v in steps:
        if browser == 'firefox':
            data = get(amo[v]['url'])
            assert 'sha256:' + hashlib.sha256(data).hexdigest() == amo[v]['hash'], f'Firefox {v} hash mismatch'
            packages[('firefox', v)] = data
            files, date = unzip(data), amo[v]['created']
        else:
            files, date = chrome, None
        label = f'{browser.title()} {v}'
        check(files, label)
        write(browser, files)
        git('add', '-A', browser)
        git('commit', '-q', '-m', label, env={'GIT_AUTHOR_DATE': date} if date else None)
        print(label)

        tag = f'v{v}'
        complete = version_of('firefox') == v and (version_of('chrome') == v or vt(v) < CHROME_FROM)
        if complete and tag not in git('tag', '-l').split():
            prev = sorted(git('tag', '-l').split(), key=lambda t: vt(t[1:]))
            git('tag', tag)
            new_tags.append(tag)
            assets = RELEASE / tag
            assets.mkdir(parents=True, exist_ok=True)
            notes = []
            for b, ext in (('firefox', 'xpi'), ('chrome', 'crx')):
                if b == 'chrome' and vt(v) < CHROME_FROM:
                    continue
                data = packages.get((b, v)) or (get(amo[v]['url']) if b == 'firefox' else None)
                if data is None:
                    continue
                (assets / f'truefloat-{v}.{ext}').write_bytes(data)
                if b == 'firefox':  # the installed file is this exact .xpi
                    notes.append(f'Firefox (.xpi) `sha256:{hashlib.sha256(data).hexdigest()}`')
                else:  # Chrome unpacks the .crx, so match the file holding the code
                    main = unzip(crx_zip(data))['main.js']
                    notes.append(f'Chrome (main.js) `sha256:{hashlib.sha256(main).hexdigest()}`')
            if prev:
                notes.append(f'[What changed](https://github.com/{REPO}/compare/{prev[-1]}...{tag})')
            (RELEASE / f'{tag}.md').write_text('\n\n'.join(notes) + '\n')
            print(f'tagged {tag}')

    (ROOT / '.new-tags').write_text(' '.join(new_tags))


if __name__ == '__main__':
    main()
