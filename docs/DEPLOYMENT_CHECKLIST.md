# Deployment Checklist — Bánh Cuốn Nóng Ngọc Dung

> Run this checklist after every production deployment.  
> ✅ = Pass | ❌ = Fail (must fix) | ⚠️ = Warning (note and revisit)

---

## A. Pre-Deployment (Local)

- [ ] `npm run lint` exits with 0 errors
- [ ] `npm run build` completes successfully
- [ ] No `.env` or secret files committed (`git status` shows clean tree)
- [ ] `package-lock.json` is committed and up-to-date
- [ ] All new images are WebP with PNG fallbacks
- [ ] No broken image references in `src/data/menu.js`
- [ ] Menu content matches confirmed owner data in `docs/PROJECT_BRIEF.md`
- [ ] Phone number is `0388506360` / display `0388 506 360`
- [ ] Address is `353D, đường Lã Xuân Oai` (never `315`)
- [ ] Google Maps URL is `https://maps.app.goo.gl/RoiN2qYnvUcMYCFQ6`
- [ ] Zalo button is hidden (not displayed) when `zaloUrl` is `null`

---

## B. Build & Deployment

- [ ] Vercel build log shows ✅ no errors
- [ ] Vercel deployment status is **Ready** (green)
- [ ] Production URL is accessible (HTTP 200)
- [ ] No 404 errors for critical assets (CSS, JS, images)

---

## C. Visual Inspection — Mobile (360px)

- [ ] Hero section loads with correct placeholder or real food image
- [ ] Brand name `Bánh Cuốn Nóng Ngọc Dung` is visible and correctly spelled
- [ ] Opening time `05:00–10:30` is displayed (no "mở cửa hàng ngày")
- [ ] Address `353D, đường Lã Xuân Oai, phường Long Phước, TP. HCM` is correct
- [ ] All 5 menu food images load (Bánh cuốn, Bún chả HN, Bún mọc chả, Bún mọc sườn non, Bánh cuốn ký)
- [ ] `Bánh ướt ký` shows gracefully without an image (no broken icon)
- [ ] Menu prices are correct (30.000đ, 30.000đ, 30.000đ, 40.000đ, 60.000đ/ký, 50.000đ/ký, 3.000đ/miếng)
- [ ] No horizontal scrollbar / overflow at 320px
- [ ] Tap-to-call button triggers phone dialer with `0388506360`
- [ ] Google Maps link opens the correct map destination
- [ ] ContactDock is visible and docked correctly at bottom

---

## D. Visual Inspection — Desktop (1280px)

- [ ] Layout is not stretched or broken at 1280px
- [ ] Navigation links work
- [ ] Menu grid displays correctly
- [ ] Google Maps embed is visible and loads the map
- [ ] No layout overflow

---

## E. Performance (Lighthouse)

> Run Lighthouse in Chrome DevTools → Lighthouse tab → Mobile → Generate report.

- [ ] Performance score ≥ 85
- [ ] Largest Contentful Paint (LCP) < 3.0 s
- [ ] No render-blocking resources
- [ ] WebP images served (not PNG) on supported browsers
- [ ] `font-display: swap` or similar to prevent FOIT (if custom fonts used)

---

## F. Accessibility

- [ ] All images have meaningful `alt` text
- [ ] Tap-to-call link has accessible name
- [ ] Color contrast meets WCAG AA (4.5:1 for body text)
- [ ] Focus states are visible for keyboard navigation
- [ ] Google Maps iframe has a descriptive `title` attribute

---

## G. SEO & Metadata

- [ ] `<html lang="vi">` is set
- [ ] `<title>` contains brand name and location
- [ ] `<meta name="description">` is set and accurate
- [ ] Open Graph `og:title`, `og:description`, `og:image` are set
- [ ] JSON-LD structured data (`LocalBusiness`) is present
- [ ] JSON-LD `address` field shows `353D` (not `315`)
- [ ] JSON-LD `url` matches the production domain (update when custom domain is live)
- [ ] JSON-LD `telephone` is `+84388506360`

---

## H. Security Headers

> Verify at [securityheaders.com](https://securityheaders.com) or in browser DevTools → Network → response headers.

- [ ] `X-Content-Type-Options: nosniff` present
- [ ] `X-Frame-Options: DENY` present
- [ ] `Referrer-Policy: strict-origin-when-cross-origin` present
- [ ] `Permissions-Policy: camera=(), microphone=(), geolocation=()` present
- [ ] `Content-Security-Policy` present (covers `frame-src https://www.google.com`)
- [ ] HTTPS enforced (no mixed content warnings)

---

## I. Owner Actions — Pending Before Launch

> [!WARNING]
> These items must be completed by the restaurant owner before the site is shared publicly.

- [ ] **Google Business Profile**: Update address from `315` to `353D, đường Lã Xuân Oai` and verify map pin
- [ ] **Zalo verification**: Confirm `https://zalo.me/0388506360` opens the correct business Zalo account; then set `zaloUrl` in `src/data/restaurant.js`
- [ ] **Facebook URL**: Supply verified Facebook page URL; add to footer/contact
- [ ] **Real food photos**: Replace placeholder images with owner-approved photographs before launch
- [ ] **Custom domain** (optional): Purchase and configure `banhcuonngocdung.vn` per `docs/VERCEL_SETUP_GUIDE.md`
- [ ] **Unconfirmed menu items**: Confirm whether `Chả lụa` (90.000đ) and `Chả Quế Chiên` (90.000đ) belong in the menu, and whether the item name should be `Topping thêm` or `Chả thêm`
- [ ] **Days of operation**: Provide opening days so they can be displayed on the website

---

## J. Post-Launch Monitoring

- [ ] Check website after first 24 hours for any broken links or missing images
- [ ] Verify Vercel auto-deploys are working (push a minor change and confirm it goes live)
- [ ] Review Vercel Analytics (if enabled) for traffic patterns
