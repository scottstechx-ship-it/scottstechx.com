# Contributing

## Local preview

    python -m http.server 8080

Then open `http://127.0.0.1:8080/`.

## Tests

    node tests/site-smoke.mjs
    node --check sw.js

The smoke test guards structural invariants: skip-link presence, mobile-menu ARIA, that fake "Message Sent!" text cannot appear, and that the Sentinel AI page continues to disclose itself as a reference architecture.

## Truthful content

This site and `docs/SENTINEL-AI-SYSTEM-DESIGN.md` describe ScottsTechX
Enterprise (U) Ltd. Do not add or change copy that presents
unverified claims (deployments, clients, testimonials, security
capabilities) as delivered facts. See `README.md` §"Truthful-content
rule".

## Deployment

Edge headers in `_headers` (Cloudflare Pages / Netlify-style) are
production-grade but in "compatibility mode" because the build uses
inline styles and Tailwind/Three.js CDNs. Tightening the CSP for
high-security deployment requires a production build step that
extracts and pins those locally.

## Branching

- `main` — what users see
- `feature/<short-name>` — anything else; PR into main

## Commit messages

Imperative mood, ≤72 chars on the subject line, body wraps at 72.

Examples:
    Fix PWA cache bust when social-card updates
    Add authorized-lab policy enforcement to dashboard
