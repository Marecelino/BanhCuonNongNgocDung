# Frontend Architecture Plan

## 1. Architecture choice

Use React + Vite + JavaScript as a static single-page site. Do not add a backend or database for the current requirements.

## 2. Source layout

```text
src/
├── assets/
│   ├── images/
│   └── icons/
├── components/
│   ├── ButtonLink.jsx
│   ├── Container.jsx
│   ├── SectionHeading.jsx
│   ├── MenuItemRow.jsx
│   ├── MenuDishCard.jsx
│   ├── ContactActions.jsx
│   ├── FloatingZalo.jsx
│   └── GoogleMapEmbed.jsx
├── sections/
│   ├── SiteHeader.jsx
│   ├── HeroSection.jsx
│   ├── MenuSection.jsx
│   ├── GallerySection.jsx
│   ├── ContactSection.jsx
│   ├── ContactDock.jsx
│   └── SiteFooter.jsx
├── data/
│   ├── menu.js
│   └── restaurant.js
├── styles/
│   ├── tokens.css
│   ├── global.css
│   ├── components.css
│   ├── sections.css
│   └── utilities.css
├── App.jsx
└── main.jsx
public/
├── fonts/ (Be Vietnam Pro WOFF2 files for self-hosting)
├── icons/ (zalo.png)
├── images/
│   ├── menu/ (banh-cuon-nong, bun-cha-ha-noi, bun-moc-cha-cu-cai-trang, bun-moc-suon-non, banh-cuon-ky, bun-thit-nuong [WebP/PNG])
│   ├── brand-mark-placeholder.svg
│   ├── hero-food-placeholder.svg (Rule 8: Hero banner placeholder preserved until dedicated banner is provided)
│   ├── shop-front-placeholder.svg
│   └── preparation-placeholder.svg
├── favicon.svg
├── icons.svg
└── robots.txt
```

> **StorySection omitted from V1**: Do not build an empty or "updating soon" Story section. The section will be created in a future iteration when verified restaurant history and facts are supplied by the owner.

## 3. Data model — local only

`menu.js` holds the exact confirmed menu items and category metadata. For the four hot dishes, display only the supplied price because a serving unit was not explicitly provided. Preserve `1 ký` and `1 miếng` for the items where the owner specified units. `restaurant.js` holds confirmed business data and explicit `null` values for unknown facts.

Example shape:

```js
export const restaurant = {
  name: "Bánh Cuốn Nóng Ngọc Dung",
  phoneDisplay: "0388 506 360",
  phoneHref: "tel:0388506360",
  openingHoursDisplay: "05:00–10:30",
  openingDays: null, // unknown; do not imply daily opening
  address: {
    streetAddress: "353D, đường Lã Xuân Oai",
    addressLocality: "Phường Long Phước",
    addressRegion: "Thành phố Hồ Chí Minh",
    addressCountry: "VN",
    formatted: "353D, đường Lã Xuân Oai, phường Long Phước, Thành phố Hồ Chí Minh",
  },
  mapUrl: "https://maps.app.goo.gl/RoiN2qYnvUcMYCFQ6",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3918.8526469330914!2d106.8060858!3d10.8225865!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527df79abcf83%3A0xaf357b8eaed3c21e!2sQuan%20ngoc%20dung!5e0!3m2!1svi!2s!4v1794295463121!5m2!1svi!2s",
  zaloUrl: null, // Keep null until verified. Once verified: "https://zalo.me/0388506360"
  facebookUrl: null,
  logoUrl: "/images/brand-mark-placeholder.svg",
};
```

**Address Integrity & Google Maps Discrepancy:**
- Display confirmed physical address: `353D, đường Lã Xuân Oai, phường Long Phước, Thành phố Hồ Chí Minh`.
- The current Google Maps listing displays an outdated address (315 Lã Xuân Oai). Never display 315 as the physical address.
- Keep the supplied Maps URL and embedded iframe temporarily as directional preview, pending the owner's Google Business Profile update from 315 to 353D.
- Render opening time as `Mở cửa: 05:00–10:30` without adding days of operation. Do not render unavailable Zalo/Facebook actions until their real destinations are supplied and verified.

## 4. Component responsibilities

- `SiteHeader`: brand and anchor navigation (Thực đơn, Hình ảnh, Liên hệ). Position `sticky; top: 0` on both desktop and mobile. Accessible hamburger toggle on mobile with `aria-expanded`, `aria-controls`, and Escape-to-close keyboard support.
- `HeroSection`: first screen, product identity, confirmed opening hours `05:00–10:30`, and primary CTA. 4:3 aspect ratio food photography. Mobile content order: eyebrow → heading → hours → primary call CTA → 4:3 food image → secondary menu CTA.
- `MenuSection`: data-driven menu groups and accessible text/prices. Renders `MenuDishCard` grid for the 4 flagship hot dishes, `kilo-card` with category media for by-weight products, and `extra-card` for accompaniments. Price text uses `--color-ink` or `--color-leaf` for WCAG AA contrast (never gold accent).
- `MenuDishCard`: displays 4:3 dish cards with `<picture>` element (WebP with PNG fallback), `srcset` (480w thumbnail and 1200w master), dish title, formatted VND price (`formatVnd`), ingredient description, and status handling (`isPlaceholder`). Enforces explicit width/height (`600x450`) to guarantee zero CLS.
- `MenuItemRow`: predictable name/price/unit layout; long labels wrap cleanly without colliding with prices.
- `GallerySection`: placeholder image assets during development with `data-placeholder="true"` and `alt=""` (decorative), replaced with owner-approved real images and descriptive alt text before launch.
- `ContactSection`: Contact & Location section combining verified info on the left (phone `0388 506 360`, opening hours `05:00–10:30`, primary call CTA, external directions CTA) and embedded Google Maps on the right (`GoogleMapEmbed`) on desktop; vertically stacked in 6-step order on mobile.
- `GoogleMapEmbed`: renders the official Google Maps embed iframe using the exact owner-supplied URL. Attributes: `title="Bản đồ vị trí Bánh Cuốn Nóng Ngọc Dung"`, `loading="lazy"`, `referrerPolicy="strict-origin-when-cross-origin"`, `allowFullScreen`. Styled with responsive 4:3 aspect ratio, 16–20px border radius, and zero border. No Google Maps JavaScript SDK, no API keys, no `dangerouslySetInnerHTML`.
- `ContactDock`: mobile-only fixed bottom contact bar (`tel:` call and Google Maps directions). Visibility driven by native `IntersectionObserver`: hidden while `HeroSection` is visible, shown when scrolled past hero, hidden when `ContactSection` enters viewport. Respects `env(safe-area-inset-bottom)`.
- `FloatingZalo`: floating action button linking to `restaurant.zaloUrl` once verified. Conditional behavior: renders `null` when `zaloUrl` is null. Features: exact official Zalo icon (`public/icons/zalo.png`, source `https://img.icons8.com/color/48/zalo.png`), un-distorted 48×48 aspect ratio, circular 56–60px touch area with subtle shadow, desktop tooltip "Chat Zalo", mobile positioning safely above `ContactDock` with `env(safe-area-inset-bottom)` support, accessible name "Nhắn tin qua Zalo" (`rel="noopener noreferrer" target="_blank"`).
- `ContactActions`: reusable call/directions links.
- `SiteFooter`: essential business details, hours, phone, Maps link, and copyright.

Avoid creating a global state store. The interactions are anchors and external links.

## 5. Dependency & font policy

- Keep existing Vite/React/ESLint dependencies. No additional external packages needed for V1.
- Use native CSS transitions for hover, focus, and drawer states; no `framer-motion` needed.
- Use SVG icons via `public/icons.svg` sprite or inline SVG; no `lucide-react` needed.
- **Zalo icon**: Exact official asset downloaded to `public/icons/zalo.png` (source: `https://img.icons8.com/color/48/zalo.png`). Using local asset avoids third-party image latency and external tracking, complying with Icons8 attribution guidelines.
- **Font**: Self-host **Be Vietnam Pro** in `public/fonts/` (SIL Open Font License 1.1). Eliminates external Google Fonts network calls and allows strict CSP `font-src 'self'`.

Not needed in V1:
- React Router, Redux, Zustand, Axios, React Query, Three.js, charting libraries, form libraries, backend SDKs.

## 6. Deployment & security headers

Any static host can serve the Vite `dist/` output, such as Vercel, Netlify, or Cloudflare Pages. Configure HTTPS and security headers at the hosting layer:

```text
Content-Security-Policy: default-src 'self'; img-src 'self' data: https://*.google.com https://*.googleapis.com https://*.gstatic.com; style-src 'self' 'unsafe-inline'; script-src 'self'; font-src 'self'; frame-src 'self' https://www.google.com; connect-src 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'none'; form-action 'self'; upgrade-insecure-requests
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

Keep the domain and business listing ownership with the restaurant owner.
