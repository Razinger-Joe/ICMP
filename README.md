# Intelligent Construction Management Platform (ICMP)

Intelligent Construction Management Platform (ICMP) transforms complex infrastructure delivery into a data-driven, autonomous workflow. By integrating 5D BIM visualization, continuous IoT sensor telemetry, and AI-powered scheduling and forecasting, ICMP provides project managers and executives a single source of truth for portfolio health. 

The platform includes an Executive Dashboard for real-time CPI/SPI tracking, a Project Command Center for granular site monitoring, and predictive engines that surface budget overruns and schedule delays before they occur — all built with a "Safety-First" philosophy to improve safety, quality, and field-to-office coordination.

## 🚀 Key Features

- **Executive Dashboard**: High-level portfolio health overview with interactive KPI cards.
- **Performance Analytics**: Time-series visualization for Schedule (SPI) and Cost (CPI) performance using Recharts.
- **Budget Intelligence**: Planned vs. Actual spend tracking with cumulative trend analysis.
- **Project Portfolio**: Centralized management table with status tracking and completion progress.
- **Premium UI/UX**: Enterprise-grade design with dark/light mode, glassmorphism, and responsive layouts.

## 🛠 Tech Stack

- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui
- **State Management**: Zustand
- **Charts**: Recharts
- **Icons**: Lucide React

## 📦 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Razinger-Joe/ICMP.git
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:5173/](http://localhost:5173/)

## 📁 Project Structure

```text
src/
├── components/   # UI components (shadcn/ui, layout, dashboard)
├── mock/         # Realistic construction datasets
├── pages/        # Main application views
├── store/        # Zustand global state stores
├── types/        # TypeScript interfaces
└── App.tsx       # Root component & theme handling
```

---
*Developed by Antigravity*
