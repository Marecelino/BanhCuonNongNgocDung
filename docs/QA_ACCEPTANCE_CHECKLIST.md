# QA & Acceptance Checklist

## Content correctness
- [ ] All 7 menu entries match the owner's spelling and prices.
- [ ] Per-kilogram and per-piece units are visible.
- [ ] Phone displayed as `0388 506 360` and call link uses `tel:0388506360`.
- [ ] Zalo destination verified by owner.
- [ ] Facebook destination verified by owner.
- [ ] Brand name is exactly `Bánh Cuốn Nóng Ngọc Dung`.
- [ ] Opening time is displayed as `05:00–10:30` without claiming daily operation.
- [ ] “Chỉ đường” opens the exact owner-provided Maps URL: `https://maps.app.goo.gl/RoiN2qYnvUcMYCFQ6`.
- [ ] Do not print an unverified full postal address.
- [ ] No fake reviews, ratings, awards, food claims or promotions.

## UI and responsive
- [ ] 320, 360, 390, 430, 768, 1024, 1280 and 1440 CSS px checked.
- [ ] No horizontal scrolling at any required width.
- [ ] Longest menu item wraps without colliding with price.
- [ ] Mobile hero is intentionally reordered/cropped, not merely scaled down.
- [ ] Mobile sticky contact dock does not cover menu/footer and respects safe-area inset.
- [ ] Tablet and desktop layouts use available width without stretching text too far.
- [ ] No layout shift caused by images without dimensions/aspect ratios.

## Accessibility
- [ ] Semantic landmarks and heading hierarchy.
- [ ] Keyboard navigation and visible focus.
- [ ] Links and buttons have meaningful accessible names.
- [ ] Images have useful alt text or empty alt if decorative.
- [ ] Text and controls have sufficient contrast.
- [ ] Interactive targets are comfortably tappable.
- [ ] Reduced motion is respected.
- [ ] No hover-only behavior.

## Performance
- [ ] Hero image optimized and prioritized.
- [ ] Temporary placeholder images are identified as placeholders and replaced with owner-approved real photos before launch.
- [ ] Below-the-fold images lazy-loaded.
- [ ] No unnecessary 3D/WebGL or autoplay video.
- [ ] No large unused dependencies.
- [ ] Lighthouse/PageSpeed checked on mobile if available.
- [ ] Core Web Vitals targets considered: LCP ≤ 2.5s, INP < 200ms, CLS < 0.1.

## Security and technical
- [ ] No secrets in source or Vite client env.
- [ ] No unsafe HTML injection/eval.
- [ ] External links use correct scheme and rel attributes.
- [ ] `npm audit` reviewed.
- [ ] Lint passes if configured.
- [ ] Production build passes.
- [ ] Hosting HTTPS and security headers configured/tested.

## Release gate
Do not mark complete while any business-critical contact link is a placeholder, a menu price is unverified, any temporary image placeholder remains in production, or a required build check fails. The owner-provided Maps link is usable; Zalo/Facebook remain disabled until their true destinations are verified.
