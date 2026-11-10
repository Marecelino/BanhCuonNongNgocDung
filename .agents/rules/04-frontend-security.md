---
trigger: model_decision
description: Apply when adding dependencies, handling links, images, external embeds, browser storage, forms, analytics, or deployment/security configuration.
---

# Frontend Security Rules

- Treat all external content and URLs as untrusted until verified.
- Never put secrets, API keys, access tokens, private credentials, or privileged service credentials in client-side source or Vite `VITE_*` variables. Vite client variables are public.
- Do not use `eval`, `new Function`, unsafe DOM injection, or `dangerouslySetInnerHTML` for normal content.
- React text interpolation is preferred for menu data; do not inject raw HTML from JSON or remote sources.
- Validate external protocols and destinations. Use `https:` for Zalo/Facebook/Maps where supported; reject `javascript:` and unknown schemes.
- For links opening a new tab, use `rel="noopener noreferrer"`.
- Do not add forms, analytics, cookies, tracking pixels, or data collection without an explicit business purpose and privacy review.
- Do not embed third-party scripts or remote widgets merely for decoration. Prefer lightweight links or consent-aware embeds.
- Keep dependencies minimal, commit the lockfile, inspect package provenance, and run `npm audit` before release. Review warnings rather than blindly applying breaking `npm audit fix` updates.
- Configure security headers (including a suitable Content-Security-Policy) at the hosting layer where possible. Do not assume a React component can enforce HTTP response headers.
- Avoid collecting or storing customer phone numbers or messages in this static site.
