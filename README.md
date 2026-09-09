# 🎙️ GoCast UI - Modern Podcast Web Dashboard

<div align="center">

[![CI/CD Pipeline](https://github.com/QuocAnh242/GocastUI/actions/workflows/deploy.yml/badge.svg)](https://github.com/QuocAnh242/GocastUI/actions/workflows/deploy.yml)
[![GitHub Pages](https://img.shields.io/badge/Live_Demo-GitHub_Pages-6C5DD3?style=flat&logo=github)](https://quocanh242.github.io/GocastUI/)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](LICENSE)
[![Author](https://img.shields.io/badge/Author-QuocAnh242-7141EF)](https://github.com/QuocAnh242)

**Một giao diện Dashboard Podcast Web hiện đại, responsive mượt mà và hỗ trợ chuyển đổi Light / Dark Theme.**

[🌐 Xem Live Demo](https://quocanh242.github.io/GocastUI/) · [🐞 Báo lỗi](https://github.com/QuocAnh242/GocastUI/issues) · [✨ Đóng góp](https://github.com/QuocAnh242/GocastUI/pulls)

</div>

---

## 📖 Giới thiệu (Overview)

**GoCast UI** là dự án giao diện ứng dụng web Podcast Dashboard được xây dựng với kiến trúc module hóa chuyên nghiệp sử dụng **Pug (Jade)** và **Sass / SCSS (mô hình 7-1)** kết hợp cùng **Vanilla JavaScript**.

Giao diện được trau chuốt tỉ mỉ từng chi tiết theo xu hướng thiết kế web hiện đại, từ hiệu ứng chuyển động, màu sắc, thanh sóng âm thanh (Audio Waveform) cho đến trải nghiệm người dùng trên cả máy tính và thiết bị di động.

---

## ✨ Tính năng nổi bật (Key Features)

- 🌓 **Light / Dark Mode:**
  - Mặc định là **Light Theme** trắng sáng tinh tế.
  - Chuyển đổi sang **Dark Mode** với 1 cú click vào avatar profile.
  - Tự động lưu lựa chọn vào `localStorage` (`gocast_theme`), tải lại trang không bị mất theme.
- 📱 **Fully Responsive (100% thích ứng mọi thiết bị):**
  - **Desktop (>= 1280px):** Layout 2 cột với sidebar cố định và topbar đầy đủ tiện ích.
  - **Tablet & Mobile (< 1280px):**
    - Sidebar tự động chuyển thành **Off-canvas Drawer** trượt mượt mà từ cạnh trái với nút đóng và lớp phủ mờ (Backdrop).
    - Thanh điều hướng cố định dưới đáy màn hình (**Bottom Navigation Bar**) chuẩn phong cách ứng dụng native.
- 📄 **Hỗ trợ đa trang (Multi-Page):**
  - 🏠 **Home Page (`index.html`):** Khám phá host nổi bật, podcast thịnh hành, feed nghe lại, gợi ý theo dõi và chủ đề hot.
  - 🔥 **Trending Page (`trending.html`):** Banner 3 thẻ podcast carousel nổi bật, filter tabs (`All`, `Shows`, `Episodes`), lưới 6 tập podcast kèm **thanh sóng âm (waveform)** và trình phát audio.
  - 🎵 **Playlist Page (`playlist.html`):** Quản lý danh sách podcast, tập phát và lượt yêu thích.
- 🎨 **Hiệu ứng & Trải nghiệm cao cấp:**
  - Sidebar với trạng thái **Active pill gradient** đặc trưng và hiệu ứng hover trượt nhẹ `translateX`.
  - Icon huy chương Leaderboard giữ nguyên màu sắc rực rỡ ở cả 2 theme.
  - Thanh tìm kiếm có hiệu ứng glow tím khi nhập liệu.
  - Nút Play/Pause, thời lượng, nút Share và thả tim nổi bật.
- 🤖 **Tự động hóa CI/CD:**
  - Tích hợp **GitHub Actions** tự động build Pug và SCSS, sau đó tự động deploy lên **GitHub Pages** mỗi khi push code lên nhánh `main`.

---

## 🛠️ Công nghệ sử dụng (Tech Stack)

| Công nghệ | Mục đích |
| :--- | :--- |
| **HTML5 / Pug (Jade)** | Template engine module hóa, mixins tái sử dụng, code gọn gàng |
| **CSS3 / Sass (SCSS)** | Kiến trúc SCSS 7-1, CSS Custom Properties (Variables), Flexbox, CSS Grid |
| **Vanilla JavaScript (ES6+)** | Logic theme toggle, profile dropdown, drawer mobile sidebar |
| **GitHub Actions** | Tự động hóa quy trình CI/CD build & deploy |
| **GitHub Pages** | Lưu trữ và phân phối website trực tiếp |

---

## 📁 Cấu trúc thư mục (Project Structure)

```text
GocastUI/
├── .github/
│   └── workflows/
│       └── deploy.yml        # Workflow CI/CD tự động build & deploy
├── images/                   # Hình ảnh & icon SVG
├── sass/                     # Kiến trúc SCSS 7-1
│   ├── abstracts/            # Biến màu, mixins, functions
│   ├── base/                 # Reset, typography, general styles
│   ├── components/           # Button, toggle, card...
│   ├── layout/               # Sidebar, topbar, navigation, structure
│   ├── pages/                # Style chi tiết cho Home, Trending...
│   ├── themes/               # Cấu hình biến màu Dark / Light theme
│   ├── vendors/              # Cheatsheet & vendor overrides
│   ├── home.scss             # Stylesheet trang Home
│   ├── main.scss             # Stylesheet dùng chung toàn trang
│   ├── playlist.scss         # Stylesheet trang Playlist
│   └── trending.scss         # Stylesheet trang Trending
├── scripts/
│   └── main.js               # Logic điều khiển Theme, Dropdown & Mobile Drawer
├── views/
│   ├── icons/                # Các icon SVG dạng Pug
│   ├── layout/               # Template khung Dashboard, Sidebar, Topbar, Navigation
│   ├── mixins/               # Các mixin tái sử dụng (menuItem, trendingEpisodeCard...)
│   └── modules/              # Các khối nội dung của từng trang (home, trending...)
├── index.pug                 # Mã nguồn trang chủ
├── playlist.pug              # Mã nguồn trang Playlist
├── trending.pug              # Mã nguồn trang Trending
├── package.json              # Khai báo dependencies & build scripts
└── README.md                 # Tài liệu hướng dẫn dự án
```

---

## 🚀 Hướng dẫn cài đặt & Chạy cục bộ (Getting Started)

### Yêu cầu môi trường:
* [Node.js](https://nodejs.org/) (phiên bản 18 trở lên)
* Trình quản lý gói `npm`

### 1. Sao chép dự án về máy
```bash
git clone https://github.com/QuocAnh242/GocastUI.git
cd GocastUI
```

### 2. Cài đặt các gói phụ thuộc
```bash
npm install
```

### 3. Khởi chạy chế độ phát triển (Development)
Mở 2 cửa sổ terminal:

* **Terminal 1 - Tự động compile SCSS khi lưu:**
  ```bash
  npm run sass
  ```

* **Terminal 2 - Tự động compile tất cả các file Pug sang HTML khi lưu:**
  ```bash
  npm run pug
  ```

Mở file `index.html`, `trending.html` hoặc `playlist.html` trên trình duyệt bằng Live Server (hoặc mở trực tiếp) để trải nghiệm.

### 4. Build phiên bản phát hành (Production Build)
```bash
npm run build
```
Lệnh này sẽ tự động compile sạch sẽ toàn bộ SCSS và Pug mà không cần chạy lệnh thủ công.

---

## 🔄 Tự động hóa CI/CD với GitHub Actions

Dự án đã được tích hợp sẵn file cấu hình CI/CD tại [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml):

1. **Mỗi khi push code lên nhánh `main`:**
   * GitHub Actions sẽ tự động khởi tạo môi trường Node.js.
   * Chạy lệnh `npm ci` và `npm run build` để kiểm tra lỗi cú pháp và render mã nguồn.
   * Thu thập toàn bộ artifact thành phẩm vào thư mục `dist/`.
   * Tự động đẩy lên nhánh `gh-pages` và xuất bản website trực tiếp lên **GitHub Pages**.
2. **Kích hoạt GitHub Pages trên repository của bạn:**
   * Vào **Settings** của repository trên GitHub.
   * Chọn mục **Pages** ở cột bên trái.
   * Tại phần **Build and deployment > Branch**, chọn nhánh `gh-pages` và thư mục `/ (root)`, sau đó bấm **Save**.
   * Website sẽ sẵn sàng tại địa chỉ: `https://quocanh242.github.io/GocastUI/`

---

## 👨‍💻 Tác giả (Author)

* **Quoc Anh** - [QuocAnh242](https://github.com/QuocAnh242)

Nếu dự án này hữu ích với bạn, đừng quên bấm **⭐️ Star** để ủng hộ repository nhé!
