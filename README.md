# GoCast UI - Modern Podcast Web Dashboard

[![CI/CD Pipeline](https://github.com/QuocAnh242/GocastUI/actions/workflows/deploy.yml/badge.svg)](https://github.com/QuocAnh242/GocastUI/actions/workflows/deploy.yml)
[![GitHub Pages](https://img.shields.io/badge/Live_Demo-GitHub_Pages-6C5DD3?style=flat&logo=github)](https://quocanh242.github.io/GocastUI/)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](LICENSE)

A modern, responsive podcast dashboard web application built with **Pug (Jade)**, **Sass / SCSS (7-1 pattern)**, and **Vanilla JavaScript**.

[Live Demo](https://quocanh242.github.io/GocastUI/) · [Report Bug](https://github.com/QuocAnh242/GocastUI/issues) · [Request Feature](https://github.com/QuocAnh242/GocastUI/issues)

---

## Overview

**GoCast UI** is a front-end dashboard application designed for podcast creators and listeners. The codebase follows a modular structure inspired by the Sass 7-1 architecture and Pug template engine best practices, ensuring scalability, maintainability, and clean code standards.

The application features custom-crafted components, interactive audio player waveforms, seamless dark and light mode switching, and a mobile-first responsive layout.

---

## Key Features

- **Light and Dark Theme Switcher:**
  - Defaults to a crisp Light Theme.
  - One-click toggle in the user profile dropdown to switch to Dark Mode.
  - State persisted across sessions using `localStorage` (`gocast_theme`).

- **Fully Responsive Design:**
  - **Desktop (>= 1280px):** Two-column layout with a fixed sidebar and comprehensive top navigation bar.
  - **Tablet and Mobile (< 1280px):** Sidebar transforms into a smooth off-canvas drawer with an interactive backdrop overlay, complemented by a fixed native-style bottom navigation bar.

- **Multi-Page Architecture:**
  - **Home (`index.html`):** Popular hosts showcase, trending banner, playback feed, suggested follows, listening history, and topics grid.
  - **Trending (`trending.html`):** Featured 3-card podcast carousel, category filter tabs (`All`, `Shows`, `Episodes`), and an episode grid with interactive audio waveforms and player controls.
  - **Playlist (`playlist.html`):** Podcast management interface with episode counts, release dates, and like metrics.

- **Refined UI and Micro-interactions:**
  - Signature gradient pill for the active route with subtle glow shadow.
  - Smooth hover transitions and translations on sidebar navigation items.
  - Multi-colored medal graphics preserved across both light and dark themes.
  - Glow focus states on search inputs and interactive action buttons.

- **Automated CI/CD Pipeline:**
  - Built-in GitHub Actions workflow to compile Sass, render Pug templates, and deploy production artifacts to GitHub Pages on every push to `main`.

---

## Tech Stack

| Technology | Role |
| :--- | :--- |
| **Pug (Jade)** | Modular template engine, reusable mixins, and component partials |
| **Sass / SCSS** | 7-1 CSS architecture, CSS custom properties, Flexbox, and CSS Grid |
| **Vanilla JavaScript (ES6+)** | Theme switching, profile dropdown toggle, and mobile drawer controller |
| **GitHub Actions** | Automated Continuous Integration & Continuous Deployment pipeline |
| **GitHub Pages** | Static hosting and continuous delivery |

---

## Project Structure

```text
GocastUI/
├── .github/
│   └── workflows/
│       └── deploy.yml        # CI/CD automated build and deployment workflow
├── images/                   # Visual assets and SVG icons
├── sass/                     # Sass 7-1 architectural pattern
│   ├── abstracts/            # Variables, mixins, and helper functions
│   ├── base/                 # Reset, typography, and base elements
│   ├── components/           # Buttons, toggle switches, and card components
│   ├── layout/               # Sidebar, topbar, navigation, and structure
│   ├── pages/                # Page-specific styles (Home, Trending)
│   ├── themes/               # CSS variables for Dark and Light themes
│   ├── vendors/              # Third-party overrides and specificity references
│   ├── home.scss             # Stylesheet for Home page
│   ├── main.scss             # Global stylesheet
│   ├── playlist.scss         # Stylesheet for Playlist page
│   └── trending.scss         # Stylesheet for Trending page
├── scripts/
│   └── main.js               # Application logic (Theme, dropdown, mobile drawer)
├── views/
│   ├── icons/                # Pug SVG icon components
│   ├── layout/               # Master layouts (Dashboard, Topbar, Sidebar, Navigation)
│   ├── mixins/               # Reusable mixins (menuItem, trendingEpisodeCard, etc.)
│   └── modules/              # Sub-components for Home and Trending pages
├── index.pug                 # Home page template
├── playlist.pug              # Playlist page template
├── trending.pug              # Trending page template
├── package.json              # Project scripts and dependencies
└── README.md                 # Project documentation
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or later)
- `npm` package manager

### 1. Clone the repository

```bash
git clone https://github.com/QuocAnh242/GocastUI.git
cd GocastUI
```

### 2. Install dependencies

```bash
npm install
```

### 3. Development Mode

Run the watchers in two separate terminal windows:

- **Terminal 1: Watch and compile Sass:**
  ```bash
  npm run sass
  ```

- **Terminal 2: Watch and compile Pug templates:**
  ```bash
  npm run pug
  ```

Open `index.html`, `trending.html`, or `playlist.html` in your browser to view the application.

### 4. Production Build

To build all SCSS stylesheets and Pug templates once:

```bash
npm run build
```

---

## CI/CD Pipeline & Deployment

The repository includes a ready-to-use GitHub Actions workflow configured in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

### Workflow Process

1. **Trigger:** Fires on every `push` to the `main` branch (and validates builds on pull requests).
2. **Environment:** Runs on an `ubuntu-latest` runner with Node.js 20.
3. **Build:** Runs `npm ci` and `npm run build` to compile SCSS and Pug templates.
4. **Artifact Collection:** Gathers HTML, styles, images, and scripts into a clean `dist/` directory with a `.nojekyll` file.
5. **Deployment:** Publishes the `dist/` bundle directly to the `gh-pages` branch using GitHub Actions.

### Enabling GitHub Pages

1. Navigate to your repository settings on GitHub (**Settings > Pages**).
2. Under **Build and deployment > Branch**, select `gh-pages` and root folder `/(root)`.
3. Click **Save**.
4. The site will be live at: `https://quocanh242.github.io/GocastUI/`

---

## License

This project is licensed under the [ISC License](LICENSE).

## Author

- **Quoc Anh** - [@QuocAnh242](https://github.com/QuocAnh242)
