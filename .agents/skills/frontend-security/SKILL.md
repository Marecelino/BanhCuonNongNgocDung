---
name: frontend-security
description: Reviews and hardens static React/Vite frontends for safe dependencies, external links, browser-side data handling, deployment headers, and privacy. Use before adding integrations or publishing a site.
---

# Frontend Security Skill

## Review workflow
1. Inspect `package.json`, lockfile, Vite config, public assets, external links, scripts, and hosting configuration.
2. Identify whether any user input, remote HTML, analytics, embeds, or forms exist.
3. Keep V1 data-only and static where possible.
4. Review every third-party dependency and skill/script before execution.
5. Define hosting-layer response headers and document platform-specific setup.
6. Run available dependency and build checks; report unresolved findings.

## Mandatory checks
- No secrets or private credentials in client source, `VITE_*` variables, or committed files.
- No unsafe HTML injection, `eval`, `new Function`, or unsafe DOM APIs.
- Validate URL schemes and allowed destinations.
- `rel="noopener noreferrer"` on new-tab external links.
- No unneeded trackers, cookies, or collection of customer data.
- Minimal and maintained dependencies; lockfile committed; `npm audit` reviewed.
- CSP and other security headers configured at the hosting/CDN layer if supported.
- No untrusted scripts, remote widgets, or copied snippets executed without inspection.

## Output
Produce `docs/SECURITY_BASELINE.md` or update it with the threat surface, controls, deployment header requirements, and residual risks. Never claim a frontend is secure solely because it has no backend.
