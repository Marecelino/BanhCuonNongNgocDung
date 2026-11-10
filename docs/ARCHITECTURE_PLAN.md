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
│   └── ContactActions.jsx
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
│   └── utilities.css
├── App.jsx
└── main.jsx
public/
├── fonts/ (Be Vietnam Pro WOFF2 files for self-hosting)
├── images/ (temporary placeholders included; replace with approved photos before launch)
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
  mapUrl: "https://maps.app.goo.gl/RoiN2qYnvUcMYCFQ6",
  address: null, // full postal address not supplied
  zaloUrl: null, // verify destination before enabling
  facebookUrl: null,
  logoUrl: "/images/brand-mark-placeholder.svg",
};
```

Keep the supplied Maps URL as a real link. Do not invent a postal address from the short URL. Render opening time as `Mở cửa: 05:00–10:30` without adding days of operation. Do not render unavailable Zalo/Facebook actions until their real destinations are supplied and verified.

## 4. Component responsibilities

- `SiteHeader`: brand and anchor navigation (Thực đơn, Hình ảnh, Liên hệ). Position `sticky; top: 0` on both desktop and mobile. Accessible hamburger toggle on mobile with `aria-expanded`, `aria-controls`, and Escape-to-close keyboard support.
- `HeroSection`: first screen, product identity, confirmed opening hours `05:00–10:30`, and primary CTA. 4:3 aspect ratio food photography. Mobile content order: eyebrow → heading → hours → primary call CTA → 4:3 food image → secondary menu CTA.
- `MenuSection`: data-driven menu groups and accessible text/prices. Price text uses `--color-ink` or `--color-leaf` for WCAG AA contrast (never gold accent).
- `MenuItemRow`: predictable name/price/unit layout; long labels like "Bún mọc chả củ cải trắng" wrap cleanly without colliding with prices.
- `GallerySection`: placeholder image assets during development with `data-placeholder="true"` and `alt=""` (decorative), replaced with owner-approved real images and descriptive alt text before launch.
- `ContactSection`: verified phone `0388 506 360`, opening time range `05:00–10:30`, owner-provided Google Maps link, and Zalo/Facebook only when their destinations are verified.
- `ContactDock`: mobile-only fixed bottom contact bar (`tel:` call and Google Maps directions). Visibility driven by native `IntersectionObserver`: hidden while `HeroSection` is visible, shown when scrolled past hero, hidden when `ContactSection` enters viewport. Respects `env(safe-area-inset-bottom)`.
- `ContactActions`: reusable call/directions links.
- `SiteFooter`: essential business details, hours, phone, Maps link, and copyright.

Avoid creating a global state store. The interactions are anchors and external links.

## 5. Dependency & font policy

- Keep existing Vite/React/ESLint dependencies. No additional external packages needed for V1.
- Use native CSS transitions for hover, focus, and drawer states; no `framer-motion` needed.
- Use SVG icons via `public/icons.svg` sprite or inline SVG; no `lucide-react` needed.
- **Font**: Self-host **Be Vietnam Pro** in `public/fonts/` (SIL Open Font License 1.1). Eliminates external Google Fonts network calls and allows strict CSP `font-src 'self'`.

Not needed in V1:
- React Router, Redux, Zustand, Axios, React Query, Three.js, charting libraries, form libraries, backend SDKs.

## 6. Deployment & security headers

Any static host can serve the Vite `dist/` output, such as Vercel, Netlify, or Cloudflare Pages. Configure HTTPS and security headers at the hosting layer:

```text
Content-Security-Policy: default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self'; font-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'none'; form-action 'self'; upgrade-insecure-requests
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

Keep the domain and business listing ownership with the restaurant owner.
