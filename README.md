# ScottsTechX Company Website

Static multi-page-style company website and PWA for ScottsTechX Enterprise (U) Ltd.

## Local preview

```text
python -m http.server 8080
```

Open `http://127.0.0.1:8080/`.

## Primary files

- `index.html` — public website and Sentinel AI reference-architecture page.
- `logo.png` — supplied master company logo.
- `brand-mark.png`, `favicon-32.png`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`, `icon-maskable-512.png` — derived delivery assets.
- `social-card.png` — Open Graph/Twitter share image.
- `manifest.json` and `sw.js` — PWA metadata and cache.
- `docs/SENTINEL-AI-SYSTEM-DESIGN.md` — target architecture and phased implementation blueprint. It is not a claim of deployed capability.
- `tests/site-smoke.mjs` — static content/route guardrail.

## Verification

```text
node tests/site-smoke.mjs
node --check sw.js
```

For browser testing, serve over HTTP rather than opening `index.html` directly so the service worker and routed assets use the same origin.

## Deployment security headers

Configure the production edge/CDN to send, at minimum:

```text
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()
Cross-Origin-Opener-Policy: same-origin
Content-Security-Policy: default-src 'self'; img-src 'self' data:; font-src 'self' https://fonts.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; script-src 'self' 'unsafe-inline' https://cdn.tailwindcss.com https://cdn.jsdelivr.net; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'
```

The current single-file build uses inline JavaScript/CSS and Tailwind/Three.js CDNs, so a stricter nonce/hash-based CSP requires a production build step that extracts and pins local assets. That hardening should happen before a high-security production launch.

## Truthful-content rule

Do not present roadmap items, sample metrics, reference integrations, certifications, clients, testimonials, or security capabilities as deployed facts unless ScottsTechX can provide evidence. The Sentinel AI page deliberately labels the system as a reference architecture.
