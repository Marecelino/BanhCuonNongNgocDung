# Frontend Security Baseline

## 1. Threat surface for V1

The first release is a public static React site with local menu data and links to phone/social/map destinations. It does not need login, customer data storage, server-side order processing, or payment. That reduces the attack surface, but does not make the site automatically secure.

## 2. Main controls

### Secrets and configuration
- Never place credentials, private API keys, tokens, or privileged keys in React source or Vite environment variables exposed to the browser.
- Public phone numbers and public social URLs are not secrets.
- Do not commit `.env*` files containing credentials. Keep `.env.example` free of real secrets if needed.

### XSS and DOM safety
- Render menu strings as React text nodes.
- Do not use `dangerouslySetInnerHTML`, `eval`, `new Function`, or direct HTML insertion for content.
- If rich text ever becomes necessary, use a maintained sanitizer and a narrowly defined allowlist; not required for V1.

### External links
- Allow only expected `https:` social/map destinations and `tel:` for the phone control.
- Verify the target belongs to the shop before release.
- Use `rel="noopener noreferrer"` for links opened in a new tab.
- Do not make placeholder links look functional.

### Third-party dependencies and embeds
- Keep package count small; commit `package-lock.json`.
- Review package ownership, release health and scripts before installation.
- Run `npm audit` and inspect findings. Do not blindly force breaking updates.
- Avoid third-party widgets or tracking scripts unless justified and reviewed.

### Privacy
- Do not collect names, phone numbers, addresses, or order details in the browser in V1.
- No analytics/cookie banner is needed unless analytics or non-essential cookies are actually added.
- If tracking is added later, document data, purpose, provider, retention, consent/legal review and privacy notice requirements.

### Hosting headers
Configure security headers at the hosting/CDN layer where supported. Example baseline to adapt and test (do not copy blindly if external fonts/images/embeds need additional allowlist entries):

```text
Content-Security-Policy: default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self'; font-src 'self' data:; connect-src 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'none'; form-action 'self'; upgrade-insecure-requests
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

If the site embeds Google Maps, loads hosted fonts, or serves images from a CDN, update the CSP allowlist narrowly and test it. Prefer a normal map/directions link over an iframe if the iframe adds little value.

## 3. Release commands

```powershell
npm audit
npm run lint
npm run build
```

Run only scripts actually defined in `package.json`. Document any missing script rather than claiming it passed.

## 4. Residual risks

- An incorrect Maps URL can send customers to the wrong place; keep the exact URL supplied by the owner. Verify Zalo/Facebook destinations before enabling those actions.
- Hosting-level security headers depend on the selected platform and deployment config.
- The site still relies on the security of its static host, DNS/domain account, and dependency supply chain.

## 5. References

- OWASP JavaScript and TypeScript Security Cheat Sheet: https://cheatsheetseries.owasp.org/cheatsheets/JavaScript_and_TypeScript_Security_Cheat_Sheet.html
- OWASP Content Security Policy Cheat Sheet: https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html
