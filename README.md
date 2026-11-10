# Restaurant Landing Page — UI/UX & Agent Kit

Bộ tài liệu và cấu hình agent dành cho landing page **Bánh Cuốn Nóng Ngọc Dung**.

- Stack mục tiêu: React + Vite + JavaScript.
- Kiểu triển khai: static frontend, dữ liệu menu tĩnh trong file JS/JSON.
- Không có backend, API riêng, database, đăng nhập hay thanh toán ở phiên bản 1.
- Mục tiêu UX: khách xem món/giá, gọi đặt món, xem giờ mở cửa và mở Google Maps nhanh.
- Agent target: Google Antigravity.

## 1. Cách sử dụng

1. Giải nén bộ kit vào **root** của project React (cùng cấp `package.json`).
2. Không ghi đè file `AGENTS.md` hoặc `.agents/` đang có mà chưa kiểm tra. Nếu đã có, hãy merge các hướng dẫn.
3. Mở project bằng Antigravity và mở session mới để agent nhận diện cấu hình.
4. Cài các skill bên ngoài theo mục 2.
5. Dùng prompt trong `docs/AGENT_PROMPT_PLAN_ONLY.md` để yêu cầu agent khảo sát, lập kế hoạch và đề xuất design system. Prompt này yêu cầu **chưa code UI** cho đến khi plan được duyệt.
6. Sau khi duyệt plan, dùng `docs/AGENT_PROMPT_IMPLEMENT.md` để triển khai theo từng phase.

## 2. Skills bên ngoài nên cài

Cài từ repository nguồn, chạy lệnh trong thư mục project. Kiểm tra kỹ skill và script trước khi cho agent thực thi shell command.

### A. UI/UX Pro Max — nên cài

Có design-system generator, style/palette/type recommendations, UX guidelines và hỗ trợ React. Tác giả hiện hướng dẫn Antigravity bằng CLI riêng:

```powershell
npx ui-ux-pro-max-cli init --ai antigravity
```

Nếu muốn cài CLI global theo hướng dẫn upstream:

```powershell
npm install -g ui-ux-pro-max-cli
uipro init --ai antigravity
```

Nguồn: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill

### B. Frontend Design — nên cài

Giúp agent đưa ra định hướng thẩm mỹ có chủ đích, hạn chế giao diện template/AI đại trà.

```powershell
npx skills add https://github.com/anthropics/skills --skill frontend-design
```

Nguồn: https://github.com/anthropics/skills

### C. Vercel React Best Practices — nên cài

Hướng dẫn chất lượng component, hiệu năng render, bundle và các thực hành React. Dùng các quy tắc phù hợp với Vite; bỏ qua hướng dẫn riêng cho Next.js nếu không liên quan.

```powershell
npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-react-best-practices
```

Nguồn: https://github.com/vercel-labs/agent-skills

### D. Web Design Guidelines — nên cài

Dùng ở bước review giao diện, accessibility, interaction, typography, responsive và các lỗi UI thường gặp.

```powershell
npx skills add https://github.com/vercel-labs/agent-skills --skill web-design-guidelines
```

Nguồn: https://github.com/vercel-labs/agent-skills

### Không cần cài ở phase 1

- React Native/mobile-app skills: đây là website mobile-responsive, không phải app React Native.
- Three.js: không có nhu cầu 3D tương tác rõ ràng; ảnh thật/video ngắn đã tối ưu tốt hơn cho quán ăn sáng.
- shadcn/ui: landing page nhỏ không cần dựng một hệ thống UI component lớn.
- Redux/Zustand/React Router: không có state phức tạp hoặc nhiều route ở bản đầu.

## 3. Cấu trúc được cung cấp

```text
.agents/
├── rules/
│   ├── 01-project-context.md
│   ├── 02-react-static-architecture.md
│   ├── 03-responsive-and-accessibility.md
│   ├── 04-frontend-security.md
│   └── 05-content-and-asset-integrity.md
└── skills/
    ├── restaurant-uiux-planning/SKILL.md
    ├── responsive-web-design/SKILL.md
    ├── react-static-landing/SKILL.md
    ├── frontend-security/SKILL.md
    └── ui-quality-audit/SKILL.md

docs/
├── MARKET_RESEARCH.md
├── PROJECT_BRIEF.md
├── UI_UX_DETAILED_PLAN.md
├── RESPONSIVE_SPEC.md
├── SECURITY_BASELINE.md
├── ARCHITECTURE_PLAN.md
├── QA_ACCEPTANCE_CHECKLIST.md
├── ASSET_REPLACEMENT_GUIDE.md
├── AGENT_PROMPT_PLAN_ONLY.md
└── AGENT_PROMPT_IMPLEMENT.md

starter-data/
├── restaurant.js
└── menu.js

public/images/
├── README.md
└── *-placeholder.svg
```

## 4. Thông tin quán đã xác nhận

| Nội dung | Giá trị |
|---|---|
| Bánh cuốn / Bánh ướt nóng | 30.000đ |
| Bún chả Hà Nội | 30.000đ |
| Bún mọc chả củ cải trắng | 30.000đ |
| Bún mọc sườn non | 40.000đ |
| Bánh cuốn ký | 60.000đ / 1 ký |
| Bánh ướt ký | 50.000đ / 1 ký |
| Chả thêm | 3.000đ / 1 miếng |
| Thương hiệu | Bánh Cuốn Nóng Ngọc Dung |
| Giờ mở cửa | 05:00–10:30 (chưa rõ ngày hoạt động) |
| Google Maps | https://maps.app.goo.gl/RoiN2qYnvUcMYCFQ6 |
| Điện thoại đặt món | 0388506360 |

Chưa được cung cấp: địa chỉ đường phố đầy đủ, ngày hoạt động trong tuần, fanpage Facebook, ảnh thật, logo chính thức, xác nhận tài khoản Zalo. Agent không được tự suy đoán. Bộ kit có ảnh placeholder cục bộ; cần thay bằng ảnh thật trước khi public website.

## 5. Hình ảnh placeholder

Bộ kit có các SVG placeholder trong `public/images/`. Đây là artwork minh họa tạm thời, không phải ảnh chụp quán hoặc món ăn thật. `starter-data/restaurant.js` đã tham chiếu sẵn các file này.

Khi có ảnh thật, thay đường dẫn trong `src/data/restaurant.js` (hoặc cập nhật sang file WebP/AVIF mới), tối ưu ảnh, giữ crop desktop/mobile phù hợp và cập nhật alt text. Không public website với placeholder còn sót lại.

## 6. Lệnh cơ bản

```powershell
npm install
npm run dev
npm run lint
npm run build
npm run preview
```

Nếu project chưa có script `lint`, hãy kiểm tra `package.json` trước khi thêm script ESLint. Không được giả định script đã tồn tại.

## 7. Quy tắc quan trọng

- Chỉ lập plan trong prompt `PLAN_ONLY`; không sửa giao diện trước khi plan được duyệt.
- Thiết kế mobile là một composition riêng, không chỉ thu nhỏ desktop.
- Nội dung menu phải là text HTML có thể đọc/copy/search, không biến menu thành ảnh hoặc PDF.
- Không tạo chức năng giỏ hàng/checkout/form thu thập thông tin nếu chưa có yêu cầu vận hành.
- Không công khai secrets, token, API key hoặc dữ liệu cá nhân.
- Không dùng ảnh stock để giả làm món ăn thật của quán.
