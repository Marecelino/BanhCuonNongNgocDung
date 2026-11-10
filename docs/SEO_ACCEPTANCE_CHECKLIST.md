# SEO & Local Search Acceptance Checklist

## 1. Address & NAP Consistency
- [ ] **Address verification:** All public website address text displays `353D, đường Lã Xuân Oai, phường Long Phước, Thành phố Hồ Chí Minh`.
- [ ] **Outdated address eradication:** No public website content or metadata displays `315` as the current physical address.
- [ ] **Primary location mapping:** Primary local SEO anchor is **Phường Long Phước** (and Lã Xuân Oai corridor).
- [ ] **Legacy location cleanup:** Old "Long Trường" primary-location assumptions are removed. Long Trường is never used as the business's physical address.
- [ ] **Phone number consistency:** Phone is displayed as `0388 506 360` with tap-to-call link `tel:0388506360` (or `tel:+84388506360`).
- [ ] **Opening hours consistency:** Hours are strictly stated as `05:00–10:30` without claiming daily operation ("mở cửa hằng ngày").

## 2. Structured Data (JSON-LD Schema)
- [ ] **Type:** Schema uses `@type: "Restaurant"`.
- [ ] **Name:** Matches exact confirmed name `"Bánh Cuốn Nóng Ngọc Dung"`.
- [ ] **Telephone:** Uses formatted international format `"+84388506360"`.
- [ ] **PostalAddress:**
  - `streetAddress`: `"353D, đường Lã Xuân Oai"` (strictly 353D, never 315).
  - `addressLocality`: `"Phường Long Phước"`.
  - `addressRegion`: `"Thành phố Hồ Chí Minh"`.
  - `addressCountry`: `"VN"`.
- [ ] **No fabricated coordinates:** No made-up latitude/longitude values are included in `geo`. Geo coordinates are omitted until the storefront pin is verified on Google Maps.
- [ ] **OpeningHoursSpecification:** Set to opens `"05:00"` and closes `"10:30"` without fabricated day-of-week entries.
- [ ] **Price range:** Formatted as `"30.000đ - 60.000đ"`.
- [ ] **Valid Schema syntax:** Tested and valid under Google Structured Data Testing Tool / Schema.org validator.

## 3. Metadata & On-Page SEO
- [ ] **Title tag:** Contains brand name, address cue (353D Lã Xuân Oai, Long Phước), and hours (`05:00–10:30`). Length between 50–60 characters.
- [ ] **Meta description:** Accurate, compelling summary containing confirmed dishes, verified 353D address, phone number `0388 506 360`, and hours. Under 160 characters.
- [ ] **Open Graph:**
  - `og:type` is `"website"` (not `"restaurant"`, which is invalid for Open Graph).
  - `og:locale` is `"vi_VN"`.
- [ ] **Heading hierarchy:** Single `<h1>` for page hero; semantic `<h2>` and `<h3>` tags for sections and cards.
- [ ] **Local keywords:** Natural integration of primary keywords (`Bánh cuốn nóng Long Phước`, `Quán ăn sáng Long Phước`) and secondary keywords (`Quận 9`, `Lã Xuân Oai`) without keyword stuffing.
- [ ] **No ranking promises:** Documentation does not promise ranking positions or fabricate search volume estimates.

## 4. Google Maps & GBP Discrepancy Tracking
- [ ] **Stale address tracking:** Documented that existing Google Maps listing displays old address 315.
- [ ] **Pending owner action:** Action item recorded for the owner to update Google Business Profile address from 315 to 353D.
- [ ] **Pin verification:** Action item recorded for the owner to check and calibrate the map pin directly onto 353D storefront.
- [ ] **Iframe embed integrity:** Embedded map retains exact owner-supplied URL without fabricated alterations.
- [ ] **External directions link:** Retains `https://maps.app.goo.gl/RoiN2qYnvUcMYCFQ6` as turnkey external navigation action.

