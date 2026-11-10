# Vercel Setup Guide — Hướng dẫn triển khai lên Vercel

> Hướng dẫn từng bước để đưa website **Bánh Cuốn Nóng Ngọc Dung** lên mạng qua Vercel.  
> Dành cho chủ quán không có kiến thức kỹ thuật.

---

## Bước 1 — Tạo tài khoản Vercel

1. Mở trình duyệt, truy cập **[vercel.com](https://vercel.com)**.
2. Nhấn **Sign Up** (Đăng ký).
3. Chọn **Continue with GitHub** — đăng nhập bằng tài khoản GitHub `Marecelino`.
4. Vercel sẽ yêu cầu quyền truy cập GitHub — nhấn **Authorize Vercel**.

> [!NOTE]
> Nếu đã có tài khoản Vercel, nhấn **Log In** thay vì Sign Up.

---

## Bước 2 — Thêm dự án mới

1. Sau khi đăng nhập, nhấn nút **Add New…** ở góc trên bên phải.
2. Chọn **Project** từ danh sách thả xuống.

---

## Bước 3 — Kết nối repository GitHub

1. Vercel sẽ hiển thị danh sách repository GitHub của bạn.
2. Tìm và nhấn **Import** bên cạnh `BanhCuonNongNgocDung`.

> [!TIP]
> Nếu không thấy repository, nhấn **Adjust GitHub App Permissions** để cấp quyền truy cập repository đó.

---

## Bước 4 — Kiểm tra cài đặt build

Vercel sẽ tự động nhận diện đây là dự án **Vite**. Kiểm tra các thông số sau:

| Trường | Giá trị đúng |
|---|---|
| **Framework Preset** | Vite |
| **Root Directory** | *(để trống)* |
| **Build Command** | `npm run build` |
| **Output Directory** | `dist` |
| **Install Command** | `npm ci` |
| **Node.js Version** | 20.x |

> [!IMPORTANT]
> Nếu Vercel điền tự động đúng như bảng trên, không cần thay đổi gì. Chỉ chỉnh sửa nếu có giá trị sai.

---

## Bước 5 — Triển khai lần đầu

1. Nhấn nút **Deploy** (màu đen) ở cuối trang.
2. Vercel sẽ bắt đầu quá trình build — có thể mất 1–3 phút.
3. Theo dõi tiến trình build trong màn hình log.
4. Khi thấy ✅ **Congratulations!** — website đã lên mạng thành công.

---

## Bước 6 — Lấy địa chỉ website

Sau khi build thành công, Vercel cấp cho bạn một địa chỉ dạng:

```
https://banh-cuon-nong-ngoc-dung.vercel.app
```

(Tên cụ thể do Vercel tự đặt dựa trên tên repository.)

Nhấn vào địa chỉ đó để xem website thực tế.

---

## Bước 7 — Triển khai tự động sau này

Từ bây giờ, **mỗi khi bạn hoặc lập trình viên đẩy code lên GitHub (`git push`)**:

- Vercel tự động build lại
- Website được cập nhật trong vòng 1–2 phút
- Không cần làm thêm gì

---

## Bước 8 — Thêm tên miền riêng (tùy chọn)

> [!NOTE]
> Chỉ thực hiện bước này nếu bạn đã mua tên miền, ví dụ `banhcuonngocdung.vn`.

1. Vào **Dashboard** → chọn project → nhấn tab **Settings** → **Domains**.
2. Nhập tên miền của bạn, ví dụ `banhcuonngocdung.vn`, nhấn **Add**.
3. Vercel hiển thị 2 bản ghi DNS cần cài đặt tại nhà cung cấp tên miền của bạn:
   - **A record**: trỏ `@` hoặc tên miền chính đến IP của Vercel
   - **CNAME record**: trỏ `www` đến `cname.vercel-dns.com`
4. Đăng nhập vào trang quản lý tên miền của bạn và nhập 2 bản ghi trên.
5. Chờ 5–30 phút để DNS cập nhật, sau đó website sẽ hoạt động tại tên miền riêng.

> [!IMPORTANT]
> Sau khi tên miền riêng hoạt động, cần cập nhật trường `url` trong JSON-LD (`index.html`) từ địa chỉ Vercel tạm thời sang tên miền chính thức. Nhờ lập trình viên thực hiện bước này.

---

## Bước 9 — Xem lịch sử triển khai và khôi phục

Nếu có lỗi sau khi cập nhật:

1. Vào **Dashboard** → chọn project → nhấn tab **Deployments**.
2. Tìm bản triển khai trước đó (màu xanh lá = thành công).
3. Nhấn dấu ba chấm `···` bên phải → **Redeploy**.
4. Website trở về phiên bản cũ ngay lập tức, không mất dữ liệu.

---

## Câu hỏi thường gặp

**Q: Website có bị mất khi triển khai lần tiếp theo không?**  
A: Không. Mỗi lần triển khai là một phiên bản độc lập. Phiên bản cũ vẫn được lưu giữ.

**Q: Có cần trả tiền cho Vercel không?**  
A: Vercel có gói **Hobby miễn phí** phù hợp cho website cá nhân và kinh doanh nhỏ. Gói này bao gồm HTTPS, CDN toàn cầu, và tự động deploy. Đủ dùng cho website quán ăn.

**Q: Làm sao biết build thất bại?**  
A: Vercel gửi email thông báo khi build lỗi. Vào tab **Deployments** → nhấn vào deployment lỗi → xem log để tìm nguyên nhân.

**Q: Có thể dùng nhiều tên miền không?**  
A: Có. Vercel cho phép thêm nhiều tên miền cho một project. Ví dụ cả `banhcuonngocdung.vn` và `www.banhcuonngocdung.vn`.
