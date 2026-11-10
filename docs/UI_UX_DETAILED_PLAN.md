# Detailed UI/UX Plan — Breakfast Restaurant Landing Page

## 1. Design objective

Build a one-page website that feels like a real Vietnamese breakfast place, not an anonymous food-delivery platform. The page should communicate menu, prices, phone contact and location quickly, with authentic food imagery and very low interaction friction.

Brand: **Bánh Cuốn Nóng Ngọc Dung**.
Primary conversion: tap to call `0388506360`.
Secondary conversion: preview location on embedded Google Maps and open the owner-provided Google Maps navigation link.
Optional conversion: tap the verified Zalo link once its destination is confirmed.

## 2. Recommended concept

### Concept name
**Bánh Cuốn Nóng Ngọc Dung — Modern Vietnamese Breakfast**

### Personality
- Honest and appetizing.
- Local, warm, welcoming.
- Clean and contemporary, but not luxury fine-dining.
- Practical and fast to scan.

### Proposed design tokens

| Token | Proposed value | Usage |
|---|---|---|
| `--color-rice` | `#FBF8F0` | Main warm background |
| `--color-paper` | `#FFFFFF` | Menu panels/cards |
| `--color-leaf` | `#315B45` | Primary brand/navigation |
| `--color-leaf-dark` | `#244535` | Hover/pressed state |
| `--color-leaf-light` | `#E8F0EB` | Category header tint |
| `--color-shallot` | `#D5A13D` | Decorative accent and small details only — **not for normal text on light backgrounds** (contrast ~2.4:1); use `--color-leaf` or `--color-ink` for price text |
| `--color-chili` | `#A94332` | Primary CTA background — white text contrast ~4.8:1 ✅ AA |
| `--color-chili-dark` | `#8B2F22` | CTA hover/pressed |
| `--color-ink` | `#282A24` | Main text — contrast ~12.5:1 on rice ✅ AAA |
| `--color-muted` | `#696960` | Supporting text — contrast ~5.1:1 on rice ✅ AA with margin |
| `--color-border` | `#E8E2D5` | Dividers |

> **Contrast note**: The original `#73756C` gives ~4.63:1 on `#FBF8F0` — passes WCAG AA but with minimal margin. `#696960` gives ~5.1:1, providing safer headroom for real-world display conditions and subpixel rendering variation.

> **Shallot gold rule**: `--color-shallot #D5A13D` is a decorative accent only. Never use it as normal text color on `--color-rice` or `--color-paper` backgrounds (contrast ~2.4:1 fails WCAG AA). Price text must use `--color-ink` or `--color-leaf`.

Typography proposal:
- Main UI/body: **Be Vietnam Pro** — self-hosted in `public/fonts/` (SIL OFL license allows this). Do not use Google Fonts CDN — self-hosting keeps CSP simple and removes the external dependency.
- Optional display accent: a restrained Vietnamese-supported display serif for a small number of headings; do not use it for price, menu descriptions or body copy.
- Body default 16–18px; menu text should be at least 16px on mobile.

Spacing: 4/8px base scale; section spacing around 64–96px desktop and 40–64px mobile; max content width around 1120–1200px.

These are initial tokens. Validate contrast and visual feel in an actual prototype before locking them.

## 3. User journeys

### Journey A — customer wants breakfast now
1. Open website from Google/social link.
2. Recognize bánh cuốn/bún and see food photography.
3. See menu and price quickly.
4. Tap "Gọi đặt món".

### Journey B — customer wants to buy by kilogram
1. Open menu section.
2. Find "Bánh cuốn ký" or "Bánh ướt ký".
3. Read per-kilogram price.
4. Tap call to confirm quantity and pickup.

### Journey C — first-time visitor wants to visit the shop
1. See the brand name and breakfast category.
2. Check opening time `05:00–10:30`.
3. Tap "Chỉ đường" to open the owner-provided Google Maps link.

The days of operation and full postal address remain unknown. Do not infer them or print an address.

## 4. One-page information architecture

1. Header / primary navigation.
2. Hero / brand proposition / primary call-to-action.
3. Full menu with three groups.
4. Gallery (placeholder SVGs during development; real photos before launch).
5. Contact & Location / opening hours / embedded Google Maps preview / external directions link.
6. Footer with phone and links.
7. Mobile fixed contact dock (IntersectionObserver-driven visibility).

> **StorySection removed from V1**: Do not render an About/Story section until the owner supplies verified content. A restaurant website with a placeholder message ("Thông tin sắp cập nhật") is unprofessional and reduces trust. The section can be added in a future release when real content is available.

## 5. Section-by-section design plan

### 5.1 Header

**Position: `sticky; top: 0` on both desktop and mobile.** Do not use `position: fixed`. Sticky keeps the header in document flow — no manual `padding-top` compensation is needed in the hero or any sibling section. Ensure `html` and `body` do not have `overflow: hidden` or `overflow: auto`, which would prevent sticky from working.

Desktop:
- Brand/logo left.
- Anchor navigation: Thực đơn, Hình ảnh, Liên hệ.
- A clear phone CTA aligned right.

Mobile:
- Compact brand mark/name left; hamburger/menu button right.
- Hamburger button must have `aria-expanded`, `aria-controls`, keyboard operation (Enter/Space to open, Escape to close), and visible focus style.
- Avoid a full desktop nav collapsed into a crowded row.
- Do not duplicate the phone CTA in the header when the mobile sticky dock already provides it.

Use the confirmed text brand name **Bánh Cuốn Nóng Ngọc Dung** as a typographic wordmark. Official logo artwork is still pending.

### 5.2 Hero

**Hero image aspect ratio: 4:3 on both desktop and mobile.** Unifying the ratio simplifies asset management — the owner can supply one photograph per dish that works at both viewports.

Desktop composition:
- Two-column editorial layout (approximately 55/45): headline, eyebrow, opening hours and CTAs on the left; one dominant 4:3 food image placeholder on the right, replaced by approved real photography before launch.
- Small eyebrow label such as "BỮA SÁNG VIỆT" (brand copy proposal, not a factual quality claim).
- H1 communicates actual product category, e.g. "Bánh cuốn nóng & món ngon buổi sáng".
- Primary CTA: "Gọi đặt món — 0388 506 360".
- Secondary CTA: "Xem thực đơn".
- **No `padding-top` needed on hero** because the sticky header does not remove content from document flow.

Mobile composition — **deliberately reordered**, not a scaled-down desktop:

1. Eyebrow label ("BỮA SÁNG VIỆT")
2. H1 heading
3. Opening hours (`Mở cửa: 05:00–10:30` — do not add days of operation)
4. Primary CTA — full-width "Gọi đặt món — 0388 506 360" (minimum 48px height)
5. Hero food image (4:3, full width)
6. Secondary CTA — "Xem thực đơn ↓"

Rationale: mobile visitors need to see the brand identity and call action before the food photograph. The image reinforces the product visually while the secondary CTA guides visitors who want to browse first.

No autoplay video. A short muted video can be considered only after the real photo version passes performance checks and the owner has a useful authentic clip.

### 5.3 Full menu

Use real text, not image-only menu. Four hot dishes have no explicit serving unit in the supplied menu, so display their prices without adding "/ phần". Three groups:

**Món nóng**
- Bánh cuốn / Bánh ướt nóng — 30.000đ
- Bún chả Hà Nội — 30.000đ
- Bún mọc chả củ cải trắng — 30.000đ
- Bún mọc sườn non — 40.000đ

**Bánh cuốn & bánh ướt bán theo ký**
- Bánh cuốn ký — 60.000đ / 1 ký
- Bánh ướt ký — 50.000đ / 1 ký

**Món thêm**
- Chả thêm — 3.000đ / 1 miếng

Desktop:
- Place category sections in a 2-column or balanced editorial layout; use one large food photo beside the menu when it supports scanability.
- Keep price column aligned, not floating randomly.
- Price text uses `--color-ink` (dark warm), not `--color-shallot` (gold accent fails contrast).

Mobile:
- Single column, full-width category groups.
- Item name left, price/unit right; long name may wrap to two lines without colliding with price.
- Use thin dividers and generous row height instead of a grid of tiny cards.
- Preserve exact units (`1 ký`, `1 miếng`).

### 5.4 Gallery

- During design and implementation, use the supplied abstract placeholder SVGs in `public/images/`; they are clearly labelled as temporary artwork, not real food photography.
- Placeholder images must use `alt=""` (empty alt = decorative). Do NOT describe a placeholder as a real dish or use a dish name as alt text.
- Mark each placeholder `<img>` with `data-placeholder="true"` to make them easy to find and replace.
- Before production, replace placeholders with 4–6 owner-approved photos: bánh cuốn/bánh ướt, bún chả, bún mọc, shop front, and preparation if the owner wants to show it.
- Keep lighting and background consistent.
- Add descriptive Vietnamese alt text based on the actual real image only after real photos are supplied.
- Never use stock/generated images as if they depict the actual shop or its dishes.

### 5.5 Contact & Location — Embedded Map & Directions

The Contact & Location section integrates both an **interactive embedded Google Maps preview** and an **external navigation action** to provide a complete, low-friction discovery experience.

**Section heading:**
- Eyebrow: "Địa điểm & Liên hệ"
- Title: "Đến với Bánh Cuốn Nóng Ngọc Dung"
- Subtitle: "Ghé quán thưởng thức bữa sáng nóng hổi."

**Two-tier conversion approach:**
1. **Embedded map preview**: Allows visitors to preview the neighborhood, recognize nearby landmarks, and understand the general location immediately without leaving the landing page.
2. **External directions action**: Opens the owner-supplied Google Maps link directly in the native Google Maps app for turnkey turn-by-turn navigation.

**Confirmed Google Maps destinations:**
- Exact iframe embed URL:
  `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3918.8526469330914!2d106.8060858!3d10.8225865!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527df79abcf83%3A0xaf357b8eaed3c21e!2sQuan%20ngoc%20dung!5e0!3m2!1svi!2s!4v1794295463121!5m2!1svi!2s`
- External navigation URL: `https://maps.app.goo.gl/RoiN2qYnvUcMYCFQ6`

**Desktop composition (768px+):**
- Two-column editorial layout:
  - **Left column (40–45%)**: Restaurant information & actions:
    - Shop name: **Bánh Cuốn Nóng Ngọc Dung**
    - Opening hours card: `Mở cửa: 05:00–10:30` (do not invent opening days)
    - Phone number: `0388 506 360` with primary call button (`tel:0388506360`)
    - External "Chỉ đường đến quán ↗" button (`https://maps.app.goo.gl/RoiN2qYnvUcMYCFQ6`)
    - Do not invent a street address; let the map speak for location.
  - **Right column (55–60%)**: Embedded Google Maps:
    - Prominent, balanced frame with 16–20px border radius (`border-radius: var(--radius-xl)`).
    - Border: `1px solid var(--color-border)` with soft shadow (`var(--shadow-md)`).
    - Responsive aspect ratio (approx. 4:3 or 16/11) to avoid excessive vertical scroll.
    - Matches the warm cream (`#FBF8F0`) and deep leaf green (`#315B45`) design tokens.

**Mobile composition (< 768px) — strictly ordered for one-hand use:**
1. Section heading ("Đến với Bánh Cuốn Nóng Ngọc Dung", subtitle "Ghé quán thưởng thức bữa sáng nóng hổi.")
2. Opening hours badge (`Mở cửa: 05:00–10:30`)
3. Phone/contact card (`0388 506 360`)
4. Prominent primary call button ("Gọi đặt món — 0388 506 360", full width, min height 48px)
5. Embedded Google Maps (100% available width, 4:3 aspect ratio, 16px border-radius, no horizontal overflow)
6. External "Chỉ đường đến quán ↗" button (full width, placed immediately below the map so mobile users do not have to pinch/zoom iframe to trigger driving directions)

**Technical component specification — `src/components/GoogleMapEmbed.jsx`:**
- Renders the exact supplied iframe embed URL.
- Attributes:
  - `title="Bản đồ vị trí Bánh Cuốn Nóng Ngọc Dung"` (descriptive, accessible name).
  - `loading="lazy"` (lazy-loads third-party iframe below the fold).
  - `referrerPolicy="strict-origin-when-cross-origin"`.
  - `allowFullScreen`.
  - Border set to `0` via CSS.
- CSS wrapper handles responsive sizing via `aspect-ratio: 4 / 3` with `width: 100%`.
- No Google Maps JavaScript SDK, no API keys, no `dangerouslySetInnerHTML`.
- Privacy note: As a third-party resource, Google Maps may set cookies or log visitor IPs when loaded; lazy-loading ensures the iframe is only loaded when scrolled into view.

**Desktop ASCII Wireframe:**
```text
┌─────────────────────────────────────────────────── max-width 1200px ─┐
│ CONTACT & LOCATION (Section: "Đến với Bánh Cuốn Nóng Ngọc Dung")     │
│                                                                      │
│  ┌─── Cột trái: Thông tin (42%) ───┐  ┌─── Cột phải: Bản đồ (58%) ──┐│
│  │                                 │  │                             ││
│  │  [Bánh Cuốn Nóng Ngọc Dung]     │  │  ┌───────────────────────┐  ││
│  │  Quán ăn sáng gia đình          │  │  │                       │  ││
│  │                                 │  │  │  GOOGLE MAPS EMBED    │  ││
│  │  🕐 Mở cửa: 05:00 – 10:30       │  │  │  (Interactive Iframe) │  ││
│  │                                 │  │  │  Border-radius: 18px  │  ││
│  │  📞 Hotline: 0388 506 360       │  │  │  Aspect-ratio: 4/3    │  ││
│  │                                 │  │  │                       │  ││
│  │  [🔴 Gọi đặt món ngay]          │  │  └───────────────────────┘  ││
│  │  [🗺 Chỉ đường đến quán ↗]      │  │                             ││
│  └─────────────────────────────────┘  └─────────────────────────────┘│
└──────────────────────────────────────────────────────────────────────┘
```

**Mobile ASCII Wireframe (< 768px):**
```text
┌───────────────── 390px ──────────────────┐
│ CONTACT & LOCATION                       │
│  Đến với Bánh Cuốn Nóng Ngọc Dung (H2)   │
│  Ghé quán thưởng thức bữa sáng nóng hổi  │
│                                          │
│  🕐 Mở cửa: 05:00 – 10:30                │
│  📞 Hotline: 0388 506 360                │
│                                          │
│  [🔴 Gọi đặt món — 0388 506 360] (h≥48px)│  ← Thao tác gọi nhanh
│                                          │
│  ┌─────────────────────────────────────┐ │
│  │                                     │ │
│  │  GOOGLE MAPS EMBED (100% width)     │ │
│  │  Aspect-ratio: 4/3, radius: 16px    │ │
│  │                                     │ │
│  └─────────────────────────────────────┘ │
│                                          │
│  [🗺 Chỉ đường đến quán ↗] (full width)  │  ← Mở Maps app điều hướng
└───────────────────────────────────────────┘
```

### 5.6 Footer

- Brand name, confirmed opening time range, phone, owner-provided Maps link, available verified social links, copyright.
- No invented legal/company details.

## 6. Interaction specification

- Anchor nav scrolls to the matching section with `scroll-margin-top` for sticky header.
- "Gọi đặt món" is a real `tel:` anchor.
- Zalo/Facebook links open the exact verified destination; no dead placeholder buttons.
- "Xem thực đơn" scrolls to menu.
- Do not simulate a cart or order confirmation if no order backend exists.
- Focus, hover, active and disabled states must be designed; hover is enhancement, not the only feedback.
- Honor reduced-motion preference.

## 7. Mobile Contact Dock — IntersectionObserver behavior

The mobile sticky contact dock uses **IntersectionObserver** (native browser API, no dependency) to control visibility:

| Visitor location | Dock state | Reason |
|---|---|---|
| HeroSection is in viewport | Hidden | Hero already has call CTA visible |
| Scrolled past HeroSection | Visible | Visitor needs persistent contact access |
| ContactSection is in viewport | Hidden | Contact section already shows all actions |
| Returned to HeroSection | Hidden | Hero CTA visible again |

Implementation details:
- Observe `HeroSection` root element with `threshold: 0` (hide dock as soon as hero starts to leave viewport).
- Observe `ContactSection` root element with `threshold: 0.1` (hide dock when 10% of contact is visible).
- Use `useState` for dock visibility, `useRef` for observed elements, `useEffect` for observer setup/teardown in `ContactDock.jsx`.
- Dock contains two buttons: "Gọi đặt món" (`tel:0388506360`) and "Chỉ đường" (Maps link). Do not add Zalo until verified.
- `padding-bottom` on `<main>` = dock height + `env(safe-area-inset-bottom)`.
- Dock has `box-shadow: 0 -4px 16px rgba(40,42,36,0.12)` to separate from content.
- Dock only renders on viewports < 768px.

## 8. Responsive layout summary

See `RESPONSIVE_SPEC.md` for detailed viewport behavior. Critical principle: change composition and prioritization, not only CSS widths.

## 9. SEO and metadata

```html
<html lang="vi">
<head>
  <title>Bánh Cuốn Nóng Ngọc Dung — Mở cửa 05:00–10:30</title>
  <meta name="description" content="Bánh cuốn, bánh ướt nóng, bún chả Hà Nội, bún mọc từ 30.000đ. Đặt món: 0388 506 360. Mở cửa 05:00–10:30." />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Bánh Cuốn Nóng Ngọc Dung" />
  <meta property="og:description" content="Bánh cuốn, bánh ướt nóng và bún ngon buổi sáng. Gọi đặt: 0388 506 360." />
  <meta property="og:locale" content="vi_VN" />
  <!-- og:image: add after real food photography is supplied -->
  <!-- canonical: add after real domain is confirmed -->
</head>
```

> **og:type must be "website"** — `restaurant` is not a valid Open Graph type. Restaurant-specific structured data belongs in JSON-LD (`@type: "Restaurant"`), not og:type.

JSON-LD Restaurant structured data: include only verified fields. Do not invent `address`, `openingDays`, `servesCuisine` claims, reviews, or social URLs.

## 10. Font strategy

**Decision: Self-host Be Vietnam Pro.** Be Vietnam Pro is released under SIL Open Font License 1.1 which explicitly allows self-hosting.

Action items before Phase 1 coding:
1. Download Be Vietnam Pro font files (weights 400, 500, 600, 700, 800) from Google Fonts or the GitHub source.
2. Place WOFF2 files in `public/fonts/`.
3. Declare `@font-face` rules in `src/styles/tokens.css` or `src/styles/global.css`.
4. Update CSP `font-src` to `'self'` only — no Google Fonts CDN sources required.

This eliminates the external Google Fonts CDN request and simplifies the Content Security Policy.

## 11. Content and asset dependencies before final launch

Confirmed and ready to use:
- Brand name: Bánh Cuốn Nóng Ngọc Dung.
- Phone: 0388 506 360.
- Opening time range: 05:00–10:30 (operating days not yet specified).
- Google Maps link: https://maps.app.goo.gl/RoiN2qYnvUcMYCFQ6.
- Menu names and prices in `PROJECT_BRIEF.md`.

Still required before final production release:
- Real food/shop photos and permission to use them (temporary placeholders are included).
- Official logo artwork (typographic wordmark can be used meanwhile).
- Full postal address, if it should be printed separately from the map link.
- Days of operation.
- Correct Facebook URL and confirmed Zalo destination.
- Owner confirmation that every price is current.
- Be Vietnam Pro WOFF2 font files for self-hosting (OFL license permits this).

## 12. Design and implementation gates

Gate 1 — Plan: approve sitemap, content order, design direction, color/type tokens, desktop/mobile wireframes.
Gate 2 — Visual prototype: approve hero/menu/contact desktop and phone layouts using the real content and real photos if available.
Gate 3 — Implementation: build approved design only.
Gate 4 — QA: complete responsive, accessibility, content, performance, security and link checks.
