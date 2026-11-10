# QA & Acceptance Checklist

## Content correctness
- [ ] Brand name is exactly `Bánh Cuốn Nóng Ngọc Dung`.
- [ ] All 7 menu entries match the owner's spelling, prices and units exactly:
  - Bánh cuốn / Bánh ướt nóng — 30.000đ
  - Bún chả Hà Nội — 30.000đ
  - Bún mọc chả củ cải trắng — 30.000đ
  - Bún mọc sườn non — 40.000đ
  - Bánh cuốn ký — 60.000đ / 1 ký
  - Bánh ướt ký — 50.000đ / 1 ký
  - Chả thêm — 3.000đ / 1 miếng
- [ ] Phone displayed as `0388 506 360` and call link uses `tel:0388506360`.
- [ ] Opening time is displayed as `05:00–10:30` without claiming daily operation.
- [ ] Google Maps iframe embed is included in Contact & Location using exact owner-supplied embed URL.
- [ ] External “Chỉ đường” navigation link is retained and opens exact owner-provided Maps URL: `https://maps.app.goo.gl/RoiN2qYnvUcMYCFQ6`.
- [ ] All public website address text displays `353D, đường Lã Xuân Oai, phường Long Phước, Thành phố Hồ Chí Minh`.
- [ ] No public website content displays 315 as the current physical address.
- [ ] Local SEO primary location is Phường Long Phước; legacy Long Trường primary-location assumptions are removed.
- [ ] JSON-LD structured data uses confirmed 353D address without fabricated geographic coordinates.
- [ ] Google Maps pin and embed iframe location verified against the physical storefront (pending owner GBP update from 315 to 353D).
- [ ] Unverified Zalo and Facebook actions are safely hidden (no dead or placeholder buttons).
- [ ] Floating Zalo button renders conditionally ONLY when `restaurant.zaloUrl` is non-null. When null, button is completely unrendered (zero non-functional buttons).
- [ ] Once verified, Zalo button links to `https://zalo.me/0388506360` (or owner-confirmed destination) with `rel="noopener noreferrer" target="_blank"`.
- [ ] StorySection is omitted in V1; no public messages like "Thông tin sắp cập nhật".
- [ ] No fake reviews, ratings, awards, food claims or promotions.

## UI and responsive
- [ ] 320, 360, 390, 430, 768, 1024, 1280 and 1440 CSS px checked.
- [ ] No horizontal scrolling at any required viewport width.
- [ ] Header uses `position: sticky; top: 0` on desktop and mobile; no layout jumps.
- [ ] Hero and dish image aspect ratios are unified to 4:3.
- [ ] Mobile hero content order: eyebrow → heading → hours → primary call CTA → 4:3 image → secondary menu CTA.
- [ ] Longest menu item ("Bún mọc chả củ cải trắng") wraps without colliding with price.
- [ ] Contact & Location section desktop two-column layout verified: info left, embedded map right with 16–20px border radius.
- [ ] Contact & Location section mobile stacked layout verified: heading → hours → phone → call CTA → 4:3 map (100% width) → directions CTA.
- [ ] Embedded map causes no horizontal overflow and map controls are not clipped on mobile.
- [ ] Mobile sticky contact dock visibility is driven by `IntersectionObserver` (hidden on Hero, visible past Hero, hidden on Contact).
- [ ] Mobile sticky contact dock respects `env(safe-area-inset-bottom)` and `<main>` has padding-bottom compensation to prevent obscuring content.
- [ ] ContactDock external Google Maps directions action remains functional and independent.
- [ ] Floating Zalo button uses exact official asset `public/icons/zalo.png` (`https://img.icons8.com/color/48/zalo.png`), preserving original brand colors, un-distorted 48×48 aspect ratio, and circular 56–64px touch area with subtle shadow.
- [ ] Floating Zalo button sits fixed bottom-right (24px) on desktop with "Chat Zalo" tooltip.
- [ ] Floating Zalo button sits fixed bottom-right (16px) on mobile, positioned safely ABOVE `ContactDock` with safe-area support, never overlapping dock buttons.
- [ ] Tablet and desktop layouts use available width gracefully without over-stretching text lines.
- [ ] No layout shift (CLS < 0.1) caused by map or images without dimensions/aspect ratios.

## Accessibility
- [ ] Semantic landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`) and heading hierarchy (`<h1>` to `<h3>`).
- [ ] Keyboard navigation and visible focus rings on all interactive elements.
- [ ] Mobile menu button has `aria-expanded`, `aria-controls="mobile-nav"`, and closes on `Escape`.
- [ ] Links and buttons have meaningful accessible names (e.g., Floating Zalo has `aria-label="Nhắn tin qua Zalo"`).
- [ ] Google Maps iframe has descriptive `title="Bản đồ vị trí Bánh Cuốn Nóng Ngọc Dung"`.
- [ ] External directions link is reachable and operable via keyboard without interacting with the iframe.
- [ ] Placeholder images have `alt=""` (empty = decorative) and `data-placeholder="true"`.
- [ ] Text contrast meets WCAG AA (≥ 4.5:1):
  - `--color-ink #282A24` on `#FBF8F0`: ~12.5:1 (AAA)
  - `--color-leaf #315B45` on `#FBF8F0`: ~6.2:1 (AA)
  - `--color-muted #696960` on `#FBF8F0`: ~5.1:1 (AA with safe margin)
  - Price text uses `--color-ink` or `--color-leaf` (NEVER `--color-shallot` gold on light backgrounds).
- [ ] Interactive targets meet minimum 44–48px on mobile.
- [ ] `prefers-reduced-motion` is respected (CSS transitions shortened/disabled).
- [ ] No hover-only interactions (all content accessible via tap/keyboard).

## Performance & SEO
- [ ] Document language set to `lang="vi"`.
- [ ] Open Graph `og:type` is `website` (not `restaurant`).
- [ ] JSON-LD Restaurant structured data contains verified fields only.
- [ ] Be Vietnam Pro font is self-hosted in `public/fonts/` (no Google Fonts network call).
- [ ] Google Maps iframe uses `loading="lazy"` and `referrerPolicy="strict-origin-when-cross-origin"`.
- [ ] Map container specifies CSS aspect-ratio (4:3) to eliminate CLS layout shift.
- [ ] Hero image loaded eagerly (`loading="eager"`).
- [ ] Gallery images lazy-loaded (`loading="lazy"`).
- [ ] No unnecessary 3D/WebGL or autoplay video.
- [ ] No large unused dependencies.

## Security and technical
- [ ] No secrets in source or Vite client environment variables.
- [ ] No Google Maps JavaScript SDK or API key introduced unnecessarily.
- [ ] No unsafe HTML injection, `eval`, or `dangerouslySetInnerHTML`.
- [ ] External links use `https:` and `rel="noopener noreferrer"`. Phone uses `tel:`.
- [ ] Hosting CSP allows `frame-src 'self' https://www.google.com;` for Google Maps embed.
- [ ] `npm audit` reviewed with no critical/high unaddressed vulnerabilities.
- [ ] `npm run lint` passes with 0 errors.
- [ ] `npm run build` succeeds cleanly.
- [ ] External links use `https:` and `rel="noopener noreferrer"`. Phone uses `tel:`.
- [ ] `npm audit` reviewed with no critical/high unaddressed vulnerabilities.
- [ ] `npm run lint` passes with 0 errors.
- [ ] `npm run build` succeeds cleanly.
- [ ] Hosting CSP configured with `font-src 'self'`.

## Food image assets & responsive media (Phase V1.2)
- [x] All 6 original owner-provided files (`Bánh cuốn ký.png`, `Bánh cuốn.png`, `BÚN CHẢ HÀ NỘI.png`, `Bún mọc chả.png`, `Bún mọc sườn non.png`, `Bún thịt nướng.png`) are preserved unchanged in `public/images/menu/`.
- [x] Production files use clean ASCII kebab-case: `banh-cuon-nong`, `bun-cha-ha-noi`, `bun-moc-cha-cu-cai-trang`, `bun-moc-suon-non`, `banh-cuon-ky`, `bun-thit-nuong`.
- [x] WebP assets generated with high quality (86) and thumbnails (480w) for mobile data savings.
- [x] `Bún mọc sườn non.png` is verified clean of third-party watermarks (no "Nhamtran FV" text), commercially legal.
- [x] `BÚN CHẢ HÀ NỘI.png` is served at native resolution ($474 \times 355$) without artificial upscaling.
- [x] `Bún thịt nướng.png` is stored safely but **strictly hidden** from the active menu (not in confirmed 7 items).
- [x] `Bánh ướt ký` and `Chả thêm` have no fabricated photos; rendered as clean, accessible text rows.
- [x] **Rule 8 strictly enforced**: Hero Banner preserves `public/images/hero-food-placeholder.svg` with `data-placeholder="true"`, awaiting separate dedicated hero banner.
- [x] Menu cards use unified 4:3 aspect ratio (`aspect-ratio: 4 / 3; width: 100%`) and `object-fit: cover`.
- [x] Zero layout shift (CLS = 0) during image loading via explicit intrinsic `width="600" height="450"`.
- [x] Responsive `picture` element serves `480w` WebP on mobile viewports (< 640px) and `1200w` on desktop.

## Release gate
Do not mark complete while any business-critical contact link is broken, a menu price is unverified, any temporary image placeholder remains in production without owner approval, or a required build check fails.
