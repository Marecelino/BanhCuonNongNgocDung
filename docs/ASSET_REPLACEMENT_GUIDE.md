# Asset Replacement Guide — Bánh Cuốn Nóng Ngọc Dung

## Current State & Menu Photo Inventory (Update V1.2)

The landing page now integrates 5 dedicated food image slots mapped to the new owner-provided photographs, optimized as clean production PNGs and lightweight WebP assets in `public/images/menu/`.

### Menu Image Inventory

| Slot | Target Menu Item | Owner Source Asset | Production Asset (PNG / WebP) | Dimensions | Status | Notes & Specifications |
|---|---|---|---|---|---|---|
| **Image 01** | Bánh cuốn / Bánh ướt nóng ($30.000đ$) | `Bánh cuốn.png` | `banh-cuon-nong.png`<br>`banh-cuon-nong.webp`<br>`banh-cuon-nong-thumb.webp` | $1200 \times 900$<br>Thumb: $480 \times 360$ | ✅ **Approved for V1** | Ảnh thật từ chủ quán, độ nét cao ($2400 \times 1792$). Đĩa bánh tráng nóng trọn vẹn, rắc hành phi giòn tan kèm chả lụa, nem rán và rau thơm. |
| **Image 02** | Bún chả Hà Nội ($30.000đ$) | `BÚN CHẢ HÀ NỘI.png` | `bun-cha-ha-noi.png`<br>`bun-cha-ha-noi.webp`<br>`bun-cha-ha-noi-thumb.webp` | $474 \times 355$ | ✅ **Approved for V1** | Mẹt bún chả Hà Nội truyền thống. Giữ nguyên độ phân giải gốc $474 \times 355$ để tránh vỡ nét do upscale; hiển thị sắc nét ở kích thước card thực đơn ($220\text{–}280\text{px}$). |
| **Image 03** | Bún mọc chả củ cải trắng ($30.000đ$) | `Bún mọc chả.png` | `bun-moc-cha-cu-cai-trang.png`<br>`bun-moc-cha-cu-cai-trang.webp`<br>`bun-moc-cha-cu-cai-trang-thumb.webp` | $1200 \times 900$<br>Thumb: $480 \times 360$ | ✅ **Approved for V1** | Tô bún mọc củ cải trắng nóng hổi với mọc viên giòn dai, chả lụa và hành phi thơm phức. Không watermark. |
| **Image 04** | Bún mọc sườn non ($40.000đ$) | `Bún mọc sườn non.png` | `bun-moc-suon-non.png`<br>`bun-moc-suon-non.webp`<br>`bun-moc-suon-non-thumb.webp` | $1200 \times 900$<br>Thumb: $480 \times 360$ | ✅ **Approved for V1** | **Ảnh mới do chủ quán cung cấp ($2400 \times 1792$), hoàn toàn sạch $100\%$ watermark.** Sườn non ninh mềm béo ngậy kết hợp mọc nấm mèo. Hợp lệ bản quyền thương mại. |
| **Image 05** | Bánh cuốn ký ($60.000đ$/kg) | `Bánh cuốn ký.png` | `banh-cuon-ky.png`<br>`banh-cuon-ky.webp`<br>`banh-cuon-ky-thumb.webp` | $1200 \times 900$<br>Thumb: $480 \times 360$ | ✅ **Approved for V1** | Đĩa bánh cuốn nóng nguyên bản rắc hành phi, làm ảnh đại diện cho món bánh cuốn ký và danh mục bán theo ký. |
| **N/A** | Bánh ướt ký ($50.000đ$/kg) | *(Không có ảnh riêng)* | *(Chưa cung cấp)* | N/A | ⚠️ **Missing image** | Hiển thị dạng dòng giá văn bản (Text row) thanh lịch, không bịa đặt ảnh. |
| **N/A** | Chả thêm ($3.000đ$/miếng) | *(Không có ảnh riêng)* | *(Chưa cung cấp)* | N/A | ⚠️ **Missing image** | Hiển thị dạng dòng giá văn bản (Text row) kèm biểu tượng đĩa ăn kèm. |

### Các file lưu trữ an toàn & Loại trừ hiển thị
- `Bún thịt nướng.png` / `bun-thit-nuong.png` / `bun-thit-nuong.webp`: **Lưu trữ an toàn trong kho tài nguyên, không hiển thị trên menu công khai** vì "Bún thịt nướng" chưa thuộc danh mục 7 món ăn sáng chính thức của quán.

---

## Hero Banner Policy (Rule 8 Enforcement)

- **Trạng thái:** Chủ quán sẽ chụp và cung cấp riêng một bức ảnh Hero Banner góc rộng vào giai đoạn sau.
- **Quy tắc bắt buộc:**
  1. Tuyệt đối **không lấy bất kỳ ảnh nào trong 6 ảnh thực đơn** để làm Hero Banner.
  2. Hero Banner giữ nguyên định dạng placeholder đã được phê duyệt: `public/images/hero-food-placeholder.svg`.
  3. Thẻ `img` trong `HeroSection.jsx` giữ nguyên cờ `data-placeholder="true"`.
  4. Không thay đổi kích thước, màu sắc hay bố cục của Hero Banner.

---

## Placeholder inventory còn lại

| Current asset | Intended real photo | Suggested framing |
|---|---|---|
| `hero-food-placeholder.svg` | Dedicated Hero Banner (chủ quán cung cấp sau) | Tỉ lệ $4:3$ hoặc $16:9$, chụp toàn cảnh món điểm tâm sáng nổi bật |
| `shop-front-placeholder.svg` | Actual storefront / signage | Landscape; bao quát mặt tiền 353D Lã Xuân Oai, biển hiệu rõ nét |
| `preparation-placeholder.svg` | Actual preparation scene | Landscape; cảnh tráng bánh cuốn nóng hổi trên nồi hơi |
| `brand-mark-placeholder.svg` | Official logo | SVG or transparent PNG, if available |

## Recommended capture and export

- Capture actual dishes from the shop; do not substitute AI or stock images for the real food.
- Use consistent natural light, color temperature, plate/background and camera angle.
- Export photographs as WebP with sensible PNG/JPEG fallbacks.
- Keep high-quality originals in project storage. Do not upscale tiny photos.
- Provide explicit width/height or CSS `aspect-ratio: 4 / 3` to prevent layout shifts.
- Add Vietnamese alt text that accurately describes the specific photo.

## Content integrity

Do not use placeholder captions as customer-facing descriptions. Never describe a stock/generated image as a real dish, a real shop interior, or an actual preparation scene.
