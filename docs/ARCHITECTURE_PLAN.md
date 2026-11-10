# Frontend Architecture Plan

## 1. Architecture choice

Use React + Vite + JavaScript as a static single-page site. Do not add a backend or database for the current requirements.

## 2. Suggested source layout

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
│   ├── QuickMenuSection.jsx
│   ├── MenuSection.jsx
│   ├── StorySection.jsx
│   ├── GallerySection.jsx
│   ├── ContactSection.jsx
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
├── images/ (temporary placeholders included; replace with approved photos before launch)
├── favicon.svg
└── robots.txt
```

If the current project already has a simpler structure, preserve it unless there is a concrete reason to reorganize.

## 3. Data model — local only

`menu.js` should hold the exact confirmed menu items and category metadata. For the four hot dishes, display only the supplied price because a serving unit was not explicitly provided. Preserve `1 ký` and `1 miếng` for the items where the owner specified units. `restaurant.js` should hold confirmed business data and explicit `null` values for unknown facts.

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

- `SiteHeader`: brand and anchor navigation.
- `HeroSection`: first screen, product identity and primary CTA.
- `MenuSection`: data-driven menu groups and accessible text/prices.
- `MenuItemRow`: predictable name/price/unit layout for long labels.
- `StorySection`: approved shop story only.
- `GallerySection`: placeholder image assets during development, replaced with owner-approved real images before launch.
- `ContactSection`: verified phone, opening time range `05:00–10:30`, owner-provided Google Maps link, and Zalo/Facebook only when their destinations are verified.
- `ContactActions`: reusable call/social links.
- `SiteFooter`: essential business details and links.

Avoid creating a global state store. The interactions are anchors and external links.

## 5. Dependency policy

Keep existing Vite/React/ESLint dependencies. Add a dependency only if the current code cannot reasonably achieve the feature with native React/CSS.

Potentially useful, optional:
- `lucide-react` for consistent SVG icons.
- `framer-motion` only if a real motion need survives the performance and reduced-motion review; CSS transitions are preferred for this site.

Not needed in V1:
- React Router, Redux, Zustand, Axios, React Query, Three.js, charting libraries, form libraries, backend SDKs.

## 6. Deployment

Any static host can serve the Vite `dist/` output, such as Vercel, Netlify, or Cloudflare Pages. Configure HTTPS and security headers at the hosting layer. Keep the domain and business listing ownership with the restaurant owner.
