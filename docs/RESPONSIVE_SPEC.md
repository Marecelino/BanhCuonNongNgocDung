# Responsive Specification

## 1. Responsive strategy

Mobile is the primary decision surface, not a secondary breakpoint. A breakfast visitor is likely checking the page while moving, outside, or using one hand. The design should expose menu, prices and contact without zooming or navigating through multiple pages.

## 2. Viewport matrix

| Width | Layout behavior | Header/navigation | Hero | Menu | Contact & Location |
|---:|---|---|---|---|---|
| 320–359 | Narrow phone | Sticky header; compact brand + accessible toggle; no clipped text | Single-column stack; reordered content; 4:3 image; no overflow | One column; longest names wrap naturally; aligned prices | Stacked: hours + call + 4:3 map (100% width) + directions CTA |
| 360–639 | Standard phone | Sticky header; brand + toggle; anchor drawer | Single-column stack; call CTA above image; 4:3 image | One column; prices aligned right | Stacked: hours + call CTA + 4:3 map + directions CTA below |
| 640–767 | Large phone/small tablet | Sticky header; compact/full nav | Single-column stack with generous padding; 4:3 image | One column or grouped cards | Stacked or compact split; 4:3 map; separate directions CTA |
| 768–1023 | Tablet | Sticky header; full horizontal nav | Two-column editorial hero; 4:3 image | Two columns where names remain readable | Two-column (42/58): info left, interactive 4:3 map right |
| 1024–1279 | Laptop | Sticky header; full horizontal nav | Two-column editorial hero (55/45); 4:3 image | Balanced menu grid/list | Two-column (40/60): info left, prominent map right |
| 1280–1440+ | Desktop | Sticky header; full nav and phone CTA | Constrained content width (max 1200px); 4:3 image | Two-column sections; aligned price column | Two-column spacious: info left, map right (max width framed) |

Breakpoints are starting points; adapt components when content no longer fits.

## 3. Mobile composition — deliberately different

### Header
- Position: `sticky; top: 0; z-index: 50`. Does not break out of document flow; no manual `padding-top` required in hero.
- Brand name as typographic wordmark on the left.
- Accessible menu toggle on the right: `aria-expanded`, `aria-controls="mobile-nav"`, minimum 44x44px touch target, Escape-to-close keyboard support, and visible focus outline.
- Drawer contains anchors to: Thực đơn (`#thuc-don`), Hình ảnh (`#hinh-anh`), Liên hệ (`#lien-he`).

### Hero
- Unified 4:3 aspect ratio food photography placeholder, replaced by approved real photo before launch.
- **Mobile content order (one-hand scan)**:
  1. Eyebrow label ("BỮA SÁNG VIỆT")
  2. H1 heading ("Bánh cuốn nóng & món ngon buổi sáng")
  3. Opening hours (`Mở cửa: 05:00–10:30` — do not claim daily operation)
  4. **Primary CTA** — full-width "Gọi đặt món — 0388 506 360" (minimum 48px height)
  5. Hero food image (4:3, full width, border-radius 12px)
  6. **Secondary CTA** — "Xem thực đơn ↓" (ghost/secondary button)
- Rationale: mobile visitors need to see the brand identity and the tap-to-call action immediately without having to scroll past a large image first.

### Menu
- **Món nóng (4 Flagship Hot Dishes with 4:3 Food Images)**:
  - Mobile (< 640px): 1-column stack of cards (`menu-dishes-grid`). Each card displays a prominent 4:3 photo, dish title, price formatted in VND (`formatVnd`), and ingredient description. Responsive `picture` element serves `480w` WebP thumbnail on mobile, saving bandwidth and boosting LCP.
  - Tablet (640–1023px): 2-column balanced grid ($2 \times 2$).
  - Desktop (≥ 1024px): 4-column unified horizontal row ($1 \times 4$). Hover effect includes subtle elevation (`translateY(-2px)`) and delicate image zoom (`scale(1.04)`).
- **Bánh cuốn & bánh ướt bán theo ký (Kilo category)**:
  - Displays category media frame ($4:3$) with `banh-cuon-ky.webp` alongside pricing rows for `Bánh cuốn ký` ($60.000đ$/1 ký) and `Bánh ướt ký` ($50.000đ$/1 ký).
  - Mobile (< 1024px): Stacked layout (image on top, price rows below).
  - Desktop (≥ 1024px): Side-by-side layout (220px media frame on left, header + items + note on right).
- **Món thêm (Extra item)**:
  - Displays `Chả thêm` ($3.000đ$/miếng) as a clean list item with an icon and tasting tip.
- **Image Performance**:
  - All cards enforce explicit intrinsic width/height (`width="600" height="450"`) and CSS `aspect-ratio: 4 / 3`, guaranteeing zero Cumulative Layout Shift (CLS = 0).
  - Images load asynchronously (`decoding="async"`) and offscreen images are lazy-loaded (`loading="lazy"`).
- Exact confirmed units preserved: `1 ký` for bulk items, `1 miếng` for chả thêm.
- No carousel for the 7 items; direct vertical scan is faster and clearer.

### Contact & Location with Embedded Map
- Mobile composition must be intentionally redesigned to prevent touch friction.
- **Strict 6-step mobile order**:
  1. Section heading ("Đến với Bánh Cuốn Nóng Ngọc Dung", subtitle "Ghé quán thưởng thức bữa sáng nóng hổi.")
  2. Opening hours badge (`05:00–10:30`)
  3. Phone/contact card (`0388 506 360`)
  4. Prominent call button ("Gọi đặt món — 0388 506 360", full width, min 48px height)
  5. Embedded Google Maps (100% available width, aspect ratio 4:3, border-radius 16px, lazy-loaded)
  6. External "Chỉ đường đến quán ↗" button (full width, placed below the map)
- **Map behavior on mobile**:
  - Full container width (100%), no horizontal scroll or viewport overflow.
  - No clipping of map controls (zoom/pin).
  - Crucial UX decision: Do not force users to interact with the iframe to get directions. Because small touchscreens capture scroll/pan events inside iframes, the standalone external "Chỉ đường đến quán ↗" button placed right below the map guarantees one-tap navigation directly into the Google Maps app.

### Sticky contact dock (Mobile only, < 768px)
- **Visibility driven by native `IntersectionObserver`** (no fixed timer delay):
  - **Hidden** while `HeroSection` is visible in viewport (`threshold: 0`).
  - **Visible** after the user scrolls beyond `HeroSection`.
  - **Hidden** when `ContactSection` enters viewport (`threshold: 0.1`).
  - **Hidden** when the user scrolls back up to `HeroSection`.
- Contains two equal-width actions:
  - "Gọi đặt món" (`tel:0388506360`)
  - "Chỉ đường" (owner-provided Google Maps URL)
- Do not render Zalo action until destination account is verified.
- Respect `env(safe-area-inset-bottom)`.
- `<main>` element must include `padding-bottom` equal to dock height (approx. 68px) + `env(safe-area-inset-bottom)` so content is never obscured.
- `box-shadow: 0 -4px 16px rgba(40,42,36,0.12)`.

### Floating Zalo button (Responsive & conditional specification)
- **Conditional display**: Renders ONLY when `restaurant.zaloUrl` is verified and non-null. When null, renders nothing (zero dead buttons).
- **Exact icon asset**: Local `public/icons/zalo.png` (source: `https://img.icons8.com/color/48/zalo.png`). Original brand colors, aspect ratio 1:1 (48×48px), sharp and un-distorted.
- **Touch target**: Circular container 56×56px with subtle shadow `0 4px 14px rgba(0,0,0,0.16)` (exceeds WCAG 48px minimum target).
- **Mobile (< 768px)**:
  - Position: `position: fixed; right: 16px; z-index: 46;`
  - Stacked vertically **ABOVE** the contact dock to prevent overlap:
    - Dock visible: `bottom: calc(var(--dock-height) + env(safe-area-inset-bottom, 0px) + 12px);`
    - Dock hidden: `bottom: calc(16px + env(safe-area-inset-bottom, 0px));`
  - Smooth vertical coordinate transition matching dock animation.
- **Tablet & Desktop (≥ 768px)**:
  - Position: `position: fixed; right: 24px; bottom: 24px; z-index: 46;` (contact dock is hidden on desktop).
  - Hover & focus state: Elevates subtly (`translateY(-2px)`, enhanced shadow).
  - Tooltip: "Chat Zalo" surfaced on `:hover` and `:focus-visible`.
- **Accessibility**:
  - Accessible name: `aria-label="Nhắn tin qua Zalo"`.
  - Link target: `target="_blank" rel="noopener noreferrer"`.

### Gallery
- 2 columns on mobile, 4 columns on desktop.
- Aspect ratio 4:3 or 3:2 consistent across all items.
- Placeholder images use `alt=""` (empty = decorative) and `data-placeholder="true"`.
- Do not use autoplay or carousels.

## 4. Tablet composition (768–1023px)

- Sticky header with full navigation.
- Two-column hero: text/CTA left (55%), 4:3 food image right (45%).
- Menu can become 2 columns; long names must retain full row width or wrap cleanly.
- Action buttons remain contained (do not stretch full width across 1024px).
- **Contact & Location**: Two-column layout (approx. 42% left / 58% right). Left side holds restaurant name, verified address (`353D, đường Lã Xuân Oai, phường Long Phước`), hours `05:00–10:30`, phone, and action buttons. Right side holds the interactive embedded Google Maps framed with 16–18px border radius.

## 5. Desktop composition (1024px+)

- Main content max width: 1200px.
- Sticky header with brand mark, anchor links, and call button.
- Two-column editorial hero (55/45) with 4:3 food image.
- Menu groups in a balanced editorial layout; price column strictly aligned.
- **Contact & Location**: Elegant two-column layout (approx. 40% left / 60% right). Left column holds confirmed restaurant name, verified address `353D, đường Lã Xuân Oai, phường Long Phước, TP.HCM` (never 315), hours `05:00–10:30`, hotline `0388 506 360`, primary call button, and directions button. Right column presents the embedded Google Maps in a prominent frame with 18–20px border radius, subtle border (`1px solid var(--color-border)`), and shadow (`var(--shadow-md)`), matching the warm cream and deep green aesthetic without unnecessary decorative clutter.
- No mobile dock rendered (`display: none` at ≥ 768px).

## 6. Typography and content behavior

- Body copy: 16–18px; menu rows at least 16px on mobile.
- Fluid display sizing using `clamp()`.
- Supporting text color: `--color-muted: #696960` (~5.1:1 contrast on `#FBF8F0` rice background).
- Prices use tabular numerals (`font-variant-numeric: tabular-nums`).
- Long item: "Bún mọc chả củ cải trắng" must wrap naturally without truncation or horizontal overflow.
- Avoid text inside images; all menu copy is real HTML text.

## 7. Media and performance

- Unified 4:3 aspect ratio across hero and dishes.
- Use SVGs for placeholders during development; replace with optimized WebP/AVIF before launch.
- Reserve image dimensions and aspect-ratio via CSS to eliminate layout shift (CLS < 0.1).
- Hero image loaded eagerly (`loading="eager"`).
- Below-the-fold gallery images lazy-loaded (`loading="lazy"`).
- No autoplay video, no WebGL/Three.js.

## 8. Responsive QA widths

Required test viewports: **320, 360, 390, 430, 768, 1024, 1280, 1440 CSS px**.

For each width verify:
1. No horizontal scrolling at any viewport.
2. Sticky header remains functional and does not jump.
3. Longest menu item wraps cleanly without colliding with prices.
4. Mobile hero order matches: eyebrow → H1 → hours → primary call CTA → 4:3 image → secondary menu CTA.
5. Mobile sticky dock triggers properly via IntersectionObserver and respects safe area.
6. Embedded Google Maps renders with 100% responsive width, no horizontal overflow, and map controls are not clipped.
7. External directions CTA remains prominent and accessible across all viewports.
8. Touch targets meet minimum 44–48px.
9. Text contrast meets WCAG AA across all text/background pairings.
