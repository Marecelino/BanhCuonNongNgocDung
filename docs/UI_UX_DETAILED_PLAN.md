# Detailed UI/UX Plan — Breakfast Restaurant Landing Page

## 1. Design objective

Build a one-page website that feels like a real Vietnamese breakfast place, not an anonymous food-delivery platform. The page should communicate menu, prices, phone contact and location quickly, with authentic food imagery and very low interaction friction.

Brand: **Bánh Cuốn Nóng Ngọc Dung**.
Primary conversion: tap to call `0388506360`.
Secondary conversion: open the owner-provided Google Maps location link.
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
| `--color-shallot` | `#D5A13D` | Price highlights and small details |
| `--color-chili` | `#A94332` | Secondary accent, used sparingly |
| `--color-ink` | `#282A24` | Main text |
| `--color-muted` | `#73756C` | Supporting text |
| `--color-border` | `#E8E2D5` | Dividers |

Typography proposal:
- Main UI/body: Be Vietnam Pro (Vietnamese diacritics, reliable weights).
- Optional display accent: a restrained Vietnamese-supported display serif for a small number of headings; do not use it for price, menu descriptions or body copy.
- Body default 16–18px; menu text should be at least 16px on mobile.

Spacing: 4/8px base scale; section spacing around 64–96px desktop and 40–64px mobile; max content width around 1120–1200px.

These are initial tokens. Validate contrast and visual feel in an actual prototype before locking them.

## 3. User journeys

### Journey A — customer wants breakfast now
1. Open website from Google/social link.
2. Recognize bánh cuốn/bún and see food photography.
3. See menu and price quickly.
4. Tap “Gọi đặt món”.

### Journey B — customer wants to buy by kilogram
1. Open menu section.
2. Find “Bánh cuốn ký” or “Bánh ướt ký”.
3. Read per-kilogram price.
4. Tap call to confirm quantity and pickup.

### Journey C — first-time visitor wants to visit the shop
1. See the brand name and breakfast category.
2. Check opening time `05:00–10:30`.
3. Tap “Chỉ đường” to open the owner-provided Google Maps link.

The days of operation and full postal address remain unknown. Do not infer them or print an address.

## 4. One-page information architecture

1. Header / primary navigation.
2. Hero / brand proposition / primary call-to-action.
3. Quick menu preview (do not label items as best sellers without owner confirmation).
4. Full menu with three groups.
5. About / preparation story (verified facts only).
6. Real food and shop gallery.
7. Contact / opening hours / map and directions.
8. Footer with phone and social links.
9. Mobile fixed contact dock (optional; show only after checking it does not cover content).

## 5. Section-by-section design plan

### 5.1 Header

Desktop:
- Brand/logo left.
- Anchor navigation: Thực đơn, Về quán, Hình ảnh, Liên hệ.
- A clear phone CTA aligned right.

Mobile:
- Compact brand mark/name and menu toggle or short anchor menu.
- Avoid a full desktop nav collapsed into a crowded row.
- Place a compact call action in the header if it remains tappable.

Use the confirmed text brand name **Bánh Cuốn Nóng Ngọc Dung** as a typographic wordmark. Official logo artwork is still pending.

### 5.2 Hero

Desktop composition:
- Two-column editorial layout: headline/copy/actions on one side, one dominant food-image placeholder during implementation, replaced by approved real photography before launch on the other.
- Small eyebrow label such as “BỮA SÁNG VIỆT” (brand copy proposal, not a factual quality claim).
- H1 communicates actual product category, e.g. “Bánh cuốn nóng & món ngon buổi sáng”.
- Primary CTA: “Gọi đặt món — 0388 506 360”.
- Secondary CTA: “Xem thực đơn”.

Mobile composition:
- Reorder for a one-hand scan: identity → short headline → call action → food photo → jump-to-menu.
- Crop hero image for vertical/square display; do not simply shrink desktop image.
- Keep the phone CTA visible without scrolling where possible. Show the opening time range `05:00–10:30` near the first contact/menu decision point without implying days of operation.

No autoplay video. A short muted video can be considered only after the real photo version passes performance checks and the owner has a useful authentic clip.

### 5.3 Quick menu preview

- Show a small preview of menu groups or 3–4 representative items selected for layout balance, not as a popularity ranking.
- Do not label items “bán chạy”, “đặc biệt” or “món tủ” without owner confirmation.
- Use concise rows/cards, prices obvious, one CTA to the full menu.

### 5.4 Full menu

Use real text, not image-only menu. Four hot dishes have no explicit serving unit in the supplied menu, so display their prices without adding “/ phần”. Three groups:

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

Mobile:
- Single column, full-width category groups.
- Item name left, price/unit right; long name may wrap to two lines without colliding with price.
- Use thin dividers and generous row height instead of a grid of tiny cards.
- Preserve exact units (`1 ký`, `1 miếng`).

### 5.5 About / food preparation

- Short story and 2–3 factual points only after the owner verifies them.
- Potential content prompts: how the shop started, what customers commonly order, how the shop prepares dishes, what time service begins.
- Do not state “tráng tại chỗ”, “nguyên liệu mỗi ngày”, “gia truyền”, “nước mắm độc quyền” unless confirmed.

### 5.6 Gallery

- During design and implementation, use the supplied abstract placeholder SVGs in `public/images/`; they are clearly labelled as temporary artwork, not real food photography.
- Before production, replace placeholders with 4–6 owner-approved photos: bánh cuốn/bánh ướt, bún chả, bún mọc, shop front, and preparation if the owner wants to show it.
- Keep lighting and background consistent.
- Add descriptive Vietnamese alt text based on the actual image; decorative images use empty alt.
- Never use stock/generated images as if they depict the actual shop or its dishes.

### 5.7 Contact / location

- Display phone `0388 506 360` and a large tap-to-call action.
- Display opening time `05:00–10:30`; do not add “hằng ngày” because operating days are unknown.
- Add a clear “Chỉ đường” action using the owner-provided URL `https://maps.app.goo.gl/RoiN2qYnvUcMYCFQ6`.
- Zalo action only after confirming that the number opens the intended shop account.
- Facebook only after the real page URL is given.
- Do not invent a street address. A map link may be shown without printing an unverified address.
- On mobile, keep actions stacked or in a fixed bottom dock with safe-area padding.

### 5.8 Footer

- Brand name, confirmed opening time range, phone, owner-provided Maps link, available verified social links, copyright.
- No invented legal/company details.

## 6. Interaction specification

- Anchor nav scrolls to the matching section with `scroll-margin-top` for sticky header.
- “Gọi đặt món” is a real `tel:` anchor.
- Zalo/Facebook links open the exact verified destination; no dead placeholder buttons.
- “Xem thực đơn” scrolls to menu.
- Do not simulate a cart or order confirmation if no order backend exists.
- Focus, hover, active and disabled states must be designed; hover is enhancement, not the only feedback.
- Honor reduced-motion preference.

## 7. Responsive layout summary

See `RESPONSIVE_SPEC.md` for detailed viewport behavior. Critical principle: change composition and prioritization, not only CSS widths.

## 8. Content and asset dependencies before final launch

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

## 9. Design and implementation gates

Gate 1 — Plan: approve sitemap, content order, design direction, color/type tokens, desktop/mobile wireframes.
Gate 2 — Visual prototype: approve hero/menu/contact desktop and phone layouts using the real content and real photos if available.
Gate 3 — Implementation: build approved design only.
Gate 4 — QA: complete responsive, accessibility, content, performance, security and link checks.
