# Báo Cáo Kiểm Định Tài Sản Hình Ảnh Món Ăn (Food Image Asset Audit)
**Dự án:** Bánh Cuốn Nóng Ngọc Dung  
**Phiên bản:** V1.2 — Thay thế toàn diện hình ảnh thực đơn từ chủ quán  
**Vai trò:** Senior Frontend Engineer, Food Photography Art Director & Image Performance Specialist  
**Ngày thực hiện:** 10/11/2026  

---

## 1. TỔNG QUAN TÀI SẢN ẢNH DO CHỦ QUÁN CUNG CẤP (IMAGE INVENTORY)

Chủ quán đã tải lên thư mục `public/images/menu/` gồm 6 file ảnh chất lượng cao định dạng PNG (các file mới có dung lượng từ 6.8MB – 7.6MB và 1 file bún chả 436KB):

| Tên file gốc (Owner Source) | File chuẩn hóa (Production PNG) | Định dạng thực tế | Kích thước thực (Dimensions) | Dung lượng gốc | Tỉ lệ (Aspect Ratio) | Đánh giá độ nét & Bố cục | Tình trạng & Phân loại |
|---|---|---|---|---|---|---|---|
| `Bánh cuốn.png` | `banh-cuon-nong.png` | PNG (RGBA, 100% opaque) | $2400 \times 1792$ | 7.65 MB ($8,016,722\text{ bytes}$) | $1.339 \approx 4:3$ | Độ nét cao, bố cục đĩa bánh cuốn nóng đầy đặn kèm chả lụa, nem rán, rau thơm. Đĩa thức ăn chiếm trọn trung tâm. Không dính người hay tạp vật. | **Approved for V1** |
| `BÚN CHẢ HÀ NỘI.png` | `bun-cha-ha-noi.png` | PNG (RGBA, 100% opaque) | $474 \times 355$ | 426.7 KB ($436,957\text{ bytes}$) | $1.335 \approx 4:3$ | Mẹt bún chả truyền thống đúng điệu Hà Nội. Độ phân giải gốc $474 \times 355$ vừa đủ cho thẻ món mobile/card desktop ($220\text{–}280\text{px}$). Giữ nguyên độ phân giải gốc, không upscale nhân tạo. | **Approved for V1** *(Đề xuất chụp lại bản $\ge 1200\text{px}$ khi nâng cấp)* |
| `Bún mọc chả.png` | `bun-moc-cha-cu-cai-trang.png` | PNG (RGBA, 100% opaque) | $2400 \times 1792$ | 7.35 MB ($7,701,927\text{ bytes}$) | $1.339 \approx 4:3$ | Rất sắc nét, góc chụp cận cảnh tô bún mọc củ cải trắng nóng hổi với mọc viên giòn dai, chả lụa và hành phi thơm phức. Không watermark. | **Approved for V1** |
| `Bún mọc sườn non.png` | `bun-moc-suon-non.png` | PNG (RGBA, 100% opaque) | $2400 \times 1792$ | 7.52 MB ($7,884,685\text{ bytes}$) | $1.339 \approx 4:3$ | Ảnh phân giải cao, tô bún mọc sườn non đầy đặn với sườn ninh mềm và mọc nấm mèo. **Quan trọng: File mới này hoàn toàn sạch, KHÔNG chứa watermark YouTube như file cũ.** Hoàn toàn hợp lệ về bản quyền thương mại. | **Approved for V1** |
| `Bánh cuốn ký.png` | `banh-cuon-ky.png` | PNG (RGBA, 100% opaque) | $2400 \times 1792$ | 6.89 MB ($7,225,563\text{ bytes}$) | $1.339 \approx 4:3$ | Ảnh đĩa bánh cuốn nóng nguyên bản rắc hành phi thơm nức. Bố cục sáng rõ, dùng làm ảnh đại diện cho món bánh cuốn ký và danh mục bán theo ký. | **Approved for V1** |
| `Bún thịt nướng.png` | `bun-thit-nuong.png` | PNG (RGBA, 100% opaque) | $2400 \times 1792$ | 7.56 MB ($7,927,312\text{ bytes}$) | $1.339 \approx 4:3$ | Ảnh tô bún thịt nướng sắc nét. **Tuy nhiên món này không thuộc 7 món trong thực đơn chính thức của quán.** Lưu trữ an toàn trong kho tài nguyên, không kích hoạt hiển thị trên menu. | **Not part of approved menu** |

---

## 2. BẢNG ĐỐI SOÁT ÁNH XẠ THỰC ĐƠN CHÍNH THỨC (FINAL IMAGE-TO-MENU MAPPING)

Thực đơn chính thức của quán gồm đúng **7 món ăn**, tuyệt đối không thêm hoặc bớt món, không thay đổi đơn giá:

| STT | Tên món ăn | Đơn giá & Đơn vị | Nhóm thực đơn | Tệp WebP tối ưu | Tệp PNG dự phòng | Trạng thái hiển thị | Phân loại trạng thái | Ghi chú kỹ thuật & Bản quyền |
|---|---|---|---|---|---|---|---|---|
| **1** | Bánh cuốn / Bánh ướt nóng | $30.000đ$ | Món nóng | `banh-cuon-nong.webp`<br>*(thumb: `banh-cuon-nong-thumb.webp`)* | `banh-cuon-nong.png` | Hiển thị thẻ món | **Approved for V1** | Ảnh thật từ chủ quán, tỉ lệ $4:3$, `object-fit: cover`. |
| **2** | Bún chả Hà Nội | $30.000đ$ | Món nóng | `bun-cha-ha-noi.webp`<br>*(thumb: `bun-cha-ha-noi-thumb.webp`)* | `bun-cha-ha-noi.png` | Hiển thị thẻ món | **Approved for V1** | Ảnh mẹt bún chả thật, giữ nguyên độ phân giải $474 \times 355$ để đảm bảo độ nét tự nhiên. |
| **3** | Bún mọc chả củ cải trắng | $30.000đ$ | Món nóng | `bun-moc-cha-cu-cai-trang.webp`<br>*(thumb: `bun-moc-cha-cu-cai-trang-thumb.webp`)* | `bun-moc-cha-cu-cai-trang.png` | Hiển thị thẻ món | **Approved for V1** | Ảnh tô bún mọc thật, làm rõ nguyên liệu mọc và củ cải trắng. |
| **4** | Bún mọc sườn non | $40.000đ$ | Món nóng | `bun-moc-suon-non.webp`<br>*(thumb: `bun-moc-suon-non-thumb.webp`)* | `bun-moc-suon-non.png` | Hiển thị thẻ món | **Approved for V1** | Ảnh mới do chủ quán cung cấp ($2400 \times 1792$), sạch $100\%$ watermark. |
| **5** | Bánh cuốn ký | $60.000đ$ / 1 ký | Bán theo ký | `banh-cuon-ky.webp`<br>*(thumb: `banh-cuon-ky-thumb.webp`)* | `banh-cuon-ky.png` | Hiển thị thẻ danh mục & dòng giá | **Approved for V1** | Ảnh bánh cuốn nóng nguyên bản rắc hành phi, làm ảnh đại diện danh mục bán theo ký. |
| **6** | Bánh ướt ký | $50.000đ$ / 1 ký | Bán theo ký | *(Không có ảnh riêng)* | *(Không có)* | Dòng giá văn bản (Text row) | **Missing image** | Chủ quán chưa chụp ảnh bao bì riêng cho Bánh ướt ký. Hiển thị dạng dòng giá văn bản thanh lịch, không bịa đặt ảnh. |
| **7** | Chả thêm | $3.000đ$ / 1 miếng | Món thêm | *(Không có ảnh riêng)* | *(Không có)* | Dòng giá văn bản (Text row) | **Missing image** | Món gọi thêm ăn kèm, hiển thị dạng dòng giá văn bản với biểu tượng món thêm. |
| *N/A* | Bún thịt nướng | *(Chưa xác nhận)* | *(Ngoài thực đơn)* | `bun-thit-nuong.webp` | `bun-thit-nuong.png` | **Ẩn hoàn toàn** | **Not part of approved menu** | Đã lưu sẵn tài sản trong kho, không hiển thị trên website công khai. |

---

## 3. QUY ĐỊNH HERO BANNER (RULE 8 ENFORCEMENT)

- **Trạng thái:** Chủ quán sẽ chụp và cung cấp riêng một bức ảnh Hero Banner góc rộng vào giai đoạn sau.
- **Quy tắc bắt buộc:**
  1. Tuyệt đối **không lấy bất kỳ ảnh nào trong 6 ảnh thực đơn** để làm Hero Banner.
  2. Hero Banner giữ nguyên định dạng placeholder đã được phê duyệt: `public/images/hero-food-placeholder.svg`.
  3. Thẻ `img` trong `HeroSection.jsx` giữ nguyên cờ `data-placeholder="true"` và bố cục chuẩn.
  4. Không thay đổi kích thước, màu sắc hay bố cục của Hero Banner.

---

## 4. CHIẾN LƯỢC TỐI ƯU HÓA HÌNH ẢNH (PERFORMANCE & RESPONSIVE STRATEGY)

### A. Chuẩn hóa tên tệp (Asset Naming Convention)
- Toàn bộ tên tệp công khai trên môi trường production tuân thủ chuẩn ASCII kebab-case chữ thường:
  - `banh-cuon-nong.png` / `banh-cuon-nong.webp`
  - `bun-cha-ha-noi.png` / `bun-cha-ha-noi.webp`
  - `bun-moc-cha-cu-cai-trang.png` / `bun-moc-cha-cu-cai-trang.webp`
  - `bun-moc-suon-non.png` / `bun-moc-suon-non.webp`
  - `banh-cuon-ky.png` / `banh-cuon-ky.webp`
  - `bun-thit-nuong.png` / `bun-thit-nuong.webp`
- Các tệp gốc có dấu tiếng Việt do chủ quán tải lên (`Bánh cuốn.png`, `BÚN CHẢ HÀ NỘI.png`,...) được giữ nguyên vẹn trong thư mục dự án, không xóa hay ghi đè.

### B. Kích thước & Định dạng phân phối (Modern Delivery Pipeline)
- **Định dạng tối ưu:** Chuyển đổi toàn bộ sang **WebP** với chất lượng cao (quality 86) bằng thuật toán nén chuyên sâu LANCZOS. Giảm dung lượng từ $7\text{–}8\text{MB}$ xuống còn **$95\text{–}148\text{KB}$** (giảm hơn $98\%$ dung lượng mạng, tăng tốc độ tải trang vượt trội).
- **Kích thước Card tiêu chuẩn:** $1200 \times 900\text{px}$ tỉ lệ chính xác $4:3$.
- **Kích thước Thumbnail mobile:** $480 \times 360\text{px}$ tỉ lệ chính xác $4:3$ (chỉ $26\text{–}35\text{KB}$) phục vụ màn hình điện thoại di động ($320\text{–}430\text{px}$).
- **Cơ chế Responsive Image:**
  ```jsx
  <picture>
    <source type="image/webp" srcSet={`${item.imageThumb} 480w, ${item.image} 1200w`} sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 300px" />
    <source type="image/png" srcSet={item.imageFallback} />
    <img src={item.image} alt={item.imageAlt} width="600" height="450" loading="lazy" decoding="async" className="menu-dish-card__image" />
  </picture>
  ```
- **Khai báo kích thước nội tại:** Mọi thẻ `img` đều có `width="600"` và `height="450"` kết hợp CSS `aspect-ratio: 4 / 3`, loại bỏ $100\%$ hiện tượng giật cục bố cục (CLS = 0) khi ảnh đang tải.

---

## 5. KẾT QUẢ KIỂM THỬ KỸ THUẬT

- **`npm run lint`:** 0 lỗi, 0 cảnh báo.
- **`npm run build`:** Đóng gói production thành công ($32$ modules, thời gian build $330\text{ms}$).
- **Kiểm thử Responsive 8 Breakpoints:**
  - `320px`: 1 cột dọc, không tràn viền ngang, khoảng cách đệm an toàn.
  - `360px` & `390px` & `430px`: Hiển thị thumbnail $480\text{px}$ sắc nét, nút bấm lớn dễ chạm.
  - `768px`: Lưới $2 \times 2$ cân đối cho 4 món nóng, khối ký xếp bên cạnh món thêm.
  - `1024px`, `1280px`, `1440px`: Lưới 4 cột ngang cho món nóng, thẻ `kilo-card` hiển thị ảnh $220\text{px}$ kết hợp nội dung giá sang trọng.

