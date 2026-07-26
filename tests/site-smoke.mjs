import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const manifest = JSON.parse(readFileSync(new URL('../manifest.json', import.meta.url), 'utf8'));
const worker = readFileSync(new URL('../sw.js', import.meta.url), 'utf8');

assert.match(html, /id="page-sentinel"/, 'Sentinel AI must have a dedicated routed page');
assert.match(html, /href="#sentinel"[^>]*>Sentinel AI</, 'Sentinel AI must be discoverable in navigation');
assert.match(html, /Reference architecture[^<]*phased delivery/i, 'Sentinel page must disclose blueprint status');
assert.match(html, /Rules of Engagement/, 'Sentinel page must explain authorization controls');
assert.match(html, /Human approval/i, 'Sentinel page must state human approval gates');
assert.match(html, /NIST CSF/, 'Sentinel page must map to security standards');
assert.match(html, /docs\/SENTINEL-AI-SYSTEM-DESIGN\.md/, 'Sentinel page must link its technical blueprint');

for (const asset of ['brand-mark.png', 'favicon-32.png', 'apple-touch-icon.png', 'social-card.png']) {
  assert.ok(html.includes(asset), `${asset} must be referenced by the site`);
}
for (const asset of ['icon-192.png', 'icon-512.png', 'icon-maskable-512.png']) {
  assert.ok(manifest.icons.some(icon => icon.src === asset), `${asset} must be referenced by the manifest`);
  assert.ok(worker.includes(asset), `${asset} must be cached by the service worker`);
}

assert.match(html, /class="skip-link"/, 'Skip link must be present');
assert.match(html, /aria-controls="mobile-menu"/, 'Mobile menu control must be labeled');
assert.doesNotMatch(html, /bg-gradientto-br/, 'Invalid Tailwind gradient class must be removed');
assert.doesNotMatch(html, /Message Sent!/, 'Static form must not falsely claim transmission');
assert.doesNotMatch(html, /src="logo\.svg"/, 'Legacy placeholder logo must not remain in the UI');
assert.doesNotMatch(html, /^\d+\|/m, 'Generated line-number prefixes must not leak into HTML');

console.log('site-smoke: PASS');
