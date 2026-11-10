# Agent Prompt — Implement Approved UI/UX Plan

Implement the restaurant landing page only after the user approves `docs/UI_UX_DETAILED_PLAN.md` and `docs/RESPONSIVE_SPEC.md`.

## Before coding
- Inspect current source and package scripts.
- Read `AGENTS.md`, all applicable `.agents/rules/`, all relevant `.agents/skills/`, and the approved design plan.
- Use confirmed brand name `Bánh Cuốn Nóng Ngọc Dung`, phone `0388506360` (display `0388 506 360`), opening time range `05:00–10:30`, owner-provided Maps navigation URL `https://maps.app.goo.gl/RoiN2qYnvUcMYCFQ6`, and exact owner-provided Google Maps embed URL `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3918.8526469330914!2d106.8060858!3d10.8225865!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527df79abcf83%3A0xaf357b8eaed3c21e!2sQuan%20ngoc%20dung!5e0!3m2!1svi!2s!4v1794295463121!5m2!1svi!2s`. Do not ask again for these details.
- Do not block implementation on missing non-critical data; keep full postal address/days/social details as null and safely hide unverified actions.
- Omit StorySection from V1; do not display placeholder messages like "Thông tin sắp cập nhật".
- Use the included image placeholders in `public/images/` until the owner replaces them. Mark them with `data-placeholder="true"` and `alt=""`.

## Implementation phases

### Phase 1 — Foundation
- Prepare `public/fonts/` for self-hosted Be Vietnam Pro WOFF2 files.
- Create `src/styles/tokens.css` with approved tokens:
  - `--color-muted: #696960` (contrast ~5.1:1 on `#FBF8F0`).
  - Price text uses `--color-ink` or `--color-leaf` (never gold `--color-shallot`).
- Create `src/styles/global.css` (reset, typography, `@font-face`, `prefers-reduced-motion`).
- Create `src/styles/utilities.css` (`.visually-hidden`, `.container`).
- Update `src/index.css` to import tokens and global styles.
- Clear `src/App.css` (template styles removed).
- Copy `starter-data/menu.js` to `src/data/menu.js` and `starter-data/restaurant.js` to `src/data/restaurant.js`.
- Update `index.html`: `lang="vi"`, title `Bánh Cuốn Nóng Ngọc Dung — Mở cửa 05:00–10:30`, meta description, `og:type="website"`.
- Create `public/robots.txt`.
- Verification: `npm run lint` + `npm run build` must pass.

### Phase 2 — Layout & Header
- Create `src/components/Container.jsx`, `src/components/ButtonLink.jsx`, `src/components/SectionHeading.jsx`.
- Create `src/sections/SiteHeader.jsx`:
  - `position: sticky; top: 0`.
  - Accessible hamburger menu on mobile (`aria-expanded`, `aria-controls`, Escape-to-close).
  - Navigation anchors: Thực đơn (`#thuc-don`), Hình ảnh (`#hinh-anh`), Liên hệ (`#lien-he`).
- Create `src/sections/SiteFooter.jsx` with confirmed brand, hours, phone, and Maps link.
- Update `src/App.jsx` with skeleton.
- Verification: `npm run lint` + `npm run build` must pass.

### Phase 3 — Hero Section
- Create `src/sections/HeroSection.jsx`:
  - 4:3 aspect ratio food image.
  - Desktop: 2-column layout (55/45).
  - Mobile order: eyebrow → heading → hours (`05:00–10:30`) → primary call CTA (`0388 506 360`, min 48px height) → 4:3 image → secondary menu CTA.
  - No `padding-top` offset hack (sticky header is in document flow).
- Verification: `npm run lint` + `npm run build` must pass.

### Phase 4 — Menu Section
- Create `src/components/MenuItemRow.jsx`:
  - Tabular numbers, aligned price column, safe wrapping for long names like "Bún mọc chả củ cải trắng".
- Create `src/sections/MenuSection.jsx`:
  - Render 3 groups from `src/data/menu.js`.
  - Exactly 7 items with confirmed names, prices, and units.
- Verification: check all 7 items and prices; `npm run lint` + `npm run build` must pass.

### Phase 5 — Gallery Section
- Create `src/sections/GallerySection.jsx`:
  - Grid 2-col mobile, 4-col desktop.
  - Use placeholder SVGs from `public/images/` with `data-placeholder="true"`, `alt=""`, and `loading="lazy"`.
  - StorySection is omitted in V1.
- Verification: `npm run lint` + `npm run build` must pass.

### Phase 6 — Contact Section, Google Maps Embed & Mobile Dock
- Create `src/components/GoogleMapEmbed.jsx`:
  - Renders official Google Maps embed iframe with exact URL `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3918.8526469330914!2d106.8060858!3d10.8225865!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527df79abcf83%3A0xaf357b8eaed3c21e!2sQuan%20ngoc%20dung!5e0!3m2!1svi!2s!4v1794295463121!5m2!1svi!2s`.
  - Attributes: `title="Bản đồ vị trí Bánh Cuốn Nóng Ngọc Dung"`, `loading="lazy"`, `referrerPolicy="strict-origin-when-cross-origin"`, `allowFullScreen`, border 0, responsive 4:3 aspect ratio.
  - No Google Maps JavaScript SDK, no API keys, no `dangerouslySetInnerHTML`.
- Create `src/components/ContactActions.jsx` (phone call button + external directions button).
- Create `src/sections/ContactSection.jsx`:
  - Section heading: "Đến với Bánh Cuốn Nóng Ngọc Dung", subtitle "Ghé quán thưởng thức bữa sáng nóng hổi."
  - Desktop: 2-column layout. Left column (info, hours `05:00–10:30`, phone `0388 506 360`, call CTA, directions CTA). Right column (`GoogleMapEmbed` with 16–20px border radius, subtle border, shadow).
  - Mobile: strict 6-step stacked order (heading → hours → phone → call CTA → 4:3 map 100% width → external directions CTA).
  - Unverified Zalo/Facebook hidden.
- Create `src/sections/ContactDock.jsx`:
  - Mobile only (< 768px).
  - Visibility controlled via native `IntersectionObserver` (hidden on Hero, visible past Hero, hidden on Contact).
  - Two buttons: "Gọi đặt món" (`tel:0388506360`) and "Chỉ đường" (`https://maps.app.goo.gl/RoiN2qYnvUcMYCFQ6`).
  - Respects `env(safe-area-inset-bottom)` with `<main>` padding-bottom compensation.
- Verification: `npm run lint` + `npm run build` must pass.

### Phase 7 — Verification & QA
- Run `npm audit`.
- Run `npm run lint` (0 errors).
- Run `npm run build` (clean production bundle).
- Test viewports: 320, 360, 390, 430, 768, 1024, 1280, 1440 CSS px.
- Verify WCAG AA contrast, keyboard accessibility, and safe areas.

## Constraints
- React + Vite + JavaScript only.
- Keep a static site. Do not add a backend/database or fake order process.
- Do not add dependencies without written justification.
- Keep mobile composition purpose-built, not desktop scaled down.
- Do not make placeholder social links clickable. The supplied Google Maps URL is a real owner-provided destination and should be linked as the “Chỉ đường” action.
- Use only true claims and exact menu data. Display `05:00–10:30` without implying daily operation.

## Verification
Run available project scripts; at minimum production build. Run lint if configured. Test the viewport matrix from `docs/RESPONSIVE_SPEC.md`. Report tests actually performed and known limitations. Do not claim success for unexecuted checks.
