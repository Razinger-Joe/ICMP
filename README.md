<div align="center">

# 🏗️ ICMP — Intelligent Construction Management Platform

**Transforms complex infrastructure delivery into a data-driven, autonomous workflow.**

[![Live Demo](https://img.shields.io/badge/▶_Live_Demo-dist--three--hazel.vercel.app-0066CC?style=for-the-badge&logo=vercel&logoColor=white)](https://dist-three-hazel.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-Razinger--Joe/ICMP-181717?style=for-the-badge&logo=github)](https://github.com/Razinger-Joe/ICMP)
[![React](https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite_7-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev)
[![Tailwind](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

<br />

<img src="https://img.shields.io/badge/status-Active_Development-10B981?style=flat-square" />
<img src="https://img.shields.io/badge/license-MIT-blue?style=flat-square" />
<img src="https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square" />

</div>

---

## 🌍 Overview

**ICMP** is a next-generation construction management platform designed for **African infrastructure at scale**. By integrating **5D BIM visualization**, **continuous IoT sensor telemetry**, and **AI‑powered scheduling and forecasting**, ICMP provides project managers and executives a single source of truth for portfolio health.

The platform includes an **Executive Dashboard** for real-time CPI/SPI tracking, a **Project Command Center** for granular site monitoring, and predictive engines that surface budget overruns and schedule delays before they occur — all built with a **"Safety-First"** philosophy to improve safety, quality, and field-to-office coordination.

> [!TIP]
> **Try it now →** [dist-three-hazel.vercel.app](https://dist-three-hazel.vercel.app)

---

## ✨ Key Features

### 📊 Executive Dashboard
Real-time portfolio health overview with interactive KPI cards tracking **Portfolio Health Score**, **Total Committed Budget**, **Schedule Performance Index (SPI)**, and **Safety Score** — all with period-over-period trend indicators.

### 📈 Performance Analytics
Time-series visualization for Schedule (SPI) and Cost (CPI) performance indices using interactive Recharts line charts. Identify performance patterns at a glance.

### 💰 Financial Controls
Budget intelligence center with **Planned vs. Actual** spend tracking, cumulative expenditure timelines, spend-by-category breakdowns, and ROI index monitoring.

### 🏢 Projects Portfolio
Centralized project management with card-based views featuring status badges (On Track / At Risk / Delayed / On Hold), completion progress bars, budget utilization, and manager assignments.

### 🌐 Pan-African Telemetry Map
Interactive SVG map of Africa powered by `react-simple-maps` showing the IoT sensor network with animated connection lines between infrastructure sites across the continent.

### 📡 Field Telemetry
Real-time IoT sensor data including temperature, humidity, air quality, and power draw. Live device status monitoring with signal strength and battery levels.

### 📋 Executive Reporting
Automated report generation and delivery system with searchable report archives, category filtering, and one-click exports (PDF/Excel).

### 🌓 Dark Mode & Theming
Full dark/light mode support with smooth transitions, powered by CSS custom properties and Tailwind's class-based dark mode.

### 📱 Mobile Responsive
Fully responsive design with mobile-first approach:
- Collapsible sidebar with overlay on mobile
- Hamburger navigation menu
- Touch-optimized charts and tables
- Adaptive layout breakpoints

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Framework** | React 19 + TypeScript | Component architecture & type safety |
| **Build Tool** | Vite 7 | Lightning-fast HMR & optimized builds |
| **Styling** | Tailwind CSS 3 + shadcn/ui | Utility-first CSS + accessible components |
| **State** | Zustand | Lightweight global state management |
| **Charts** | Recharts 3 | Composable data visualization |
| **Maps** | react-simple-maps | SVG-based geographic visualization |
| **Animation** | Framer Motion | Declarative animations & transitions |
| **Icons** | Lucide React | Consistent, lightweight icon system |
| **Routing** | React Router 7 | Client-side navigation & SPA routing |
| **Forms** | React Hook Form + Zod | Performant forms with schema validation |
| **Server State** | TanStack React Query | Async state management (ready for API) |
| **3D** | Three.js + React Three Fiber | BIM visualization (coming soon) |
| **Deployment** | Vercel | Edge network hosting with SPA rewrites |

---

## 📁 Project Architecture

```
ICMP/
├── public/                  # Static assets
├── src/
│   ├── components/
│   │   ├── dashboard/       # Dashboard-specific components
│   │   │   ├── KPISection.tsx       # Key Performance Indicator cards
│   │   │   ├── MainCharts.tsx       # SPI/CPI & Budget trend charts
│   │   │   └── ProjectTable.tsx     # Active projects data table
│   │   ├── landing/         # Public landing page components
│   │   │   ├── AfricaMap.tsx        # Interactive SVG map of Africa
│   │   │   ├── Features.tsx         # Feature showcase grid
│   │   │   ├── Hero.tsx             # Hero section with CTA
│   │   │   ├── LandingFooter.tsx    # Site footer
│   │   │   ├── LandingNavbar.tsx    # Transparent → sticky navbar
│   │   │   └── SocialProof.tsx      # Trusted-by section
│   │   ├── layout/          # Shared layout components
│   │   │   ├── Navbar.tsx           # Top navigation bar
│   │   │   └── Sidebar.tsx          # Collapsible side navigation
│   │   └── ui/              # shadcn/ui primitives
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       ├── progress.tsx
│   │       └── table.tsx
│   ├── lib/
│   │   └── utils.ts         # Tailwind class merge utility
│   ├── mock/
│   │   └── data.ts          # Realistic construction mock data
│   ├── pages/
│   │   ├── Costs.tsx        # Financial Controls page
│   │   ├── Dashboard.tsx    # Executive Dashboard page
│   │   ├── FieldData.tsx    # IoT Telemetry page
│   │   ├── LandingPage.tsx  # Public landing page
│   │   ├── Projects.tsx     # Projects Portfolio page
│   │   └── Reports.tsx      # Executive Reporting page
│   ├── store/
│   │   └── useStore.ts      # Zustand global state
│   ├── types/
│   │   └── index.ts         # TypeScript interfaces
│   ├── App.tsx              # Root component & routing
│   ├── index.css            # Global styles & CSS variables
│   └── main.tsx             # Application entry point
├── components.json          # shadcn/ui configuration
├── tailwind.config.js       # Tailwind theme & plugins
├── tsconfig.app.json        # TypeScript configuration
├── vite.config.ts           # Vite build configuration
├── vercel.json              # Vercel SPA rewrites
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.0
- **npm** ≥ 9.0

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Razinger-Joe/ICMP.git
cd ICMP

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Type-check & build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint across the project |

---

## 🗺️ Roadmap

- [x] Executive Dashboard with KPI cards
- [x] Performance Analytics (SPI/CPI charts)
- [x] Budget Intelligence (Planned vs Actual)
- [x] Projects Portfolio with status tracking
- [x] Pan-African Telemetry Map
- [x] Field Data & IoT Sensor Monitoring
- [x] Executive Reporting Module
- [x] Dark/Light Theme Support
- [x] Mobile Responsive Design
- [x] Vercel Production Deployment
- [ ] 3D BIM Viewer (Three.js)
- [ ] AI-Powered Schedule Predictions
- [ ] Gantt Chart Module
- [ ] HSE Compliance & Safety Audits
- [ ] Backend API Integration (Supabase)
- [ ] Role-Based Access Control (RBAC)
- [ ] Real-time WebSocket Updates
- [ ] PDF Report Generation

---

## 🎨 Design Philosophy

ICMP follows a **premium enterprise aesthetic** inspired by modern fintech and SaaS applications:

- **Dark-first design** with carefully curated HSL color palettes
- **Glassmorphism** effects with backdrop blur and translucent panels
- **Micro-animations** for hover states, transitions, and data loading
- **Consistent spacing** using an 8px grid system
- **Accessible components** via Radix UI primitives (shadcn/ui)
- **Responsive typography** scaling across breakpoints

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'feat: add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

Please use [Conventional Commits](https://www.conventionalcommits.org/) for commit messages.

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Josef Razinger**
- GitHub: [@Razinger-Joe](https://github.com/Razinger-Joe)

---

<div align="center">

**Built with ❤️ for African Infrastructure**

<sub>⭐ Star this repo if you find it useful!</sub>

</div>
