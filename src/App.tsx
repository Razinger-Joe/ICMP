import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar } from '@/components/layout/Sidebar';
import { Navbar } from '@/components/layout/Navbar';
import Dashboard from '@/pages/Dashboard';
import LandingPage from '@/pages/LandingPage';
import Projects from '@/pages/Projects';
import Costs from '@/pages/Costs';
import FieldData from '@/pages/FieldData';
import Reports from '@/pages/Reports';
import { useStore } from '@/store/useStore';
import { useEffect } from 'react';

// Layout component for authenticated pages
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans antialiased">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Navbar />
        <main className="flex-1 p-3 sm:p-6 overflow-y-auto overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  );
};

function App() {
  const { theme } = useStore();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/dashboard" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
        <Route path="/projects" element={<DashboardLayout><Projects /></DashboardLayout>} />
        <Route path="/schedule" element={<DashboardLayout><div className="p-4 bg-slate-900/50 rounded-2xl border border-slate-800 text-center py-20">
          <h2 className="text-2xl font-bold mb-2">Schedule Management</h2>
          <p className="text-slate-400">Gantt view and milestone tracking module coming soon.</p>
        </div></DashboardLayout>} />
        <Route path="/costs" element={<DashboardLayout><Costs /></DashboardLayout>} />
        <Route path="/safety" element={<DashboardLayout><div className="p-4 bg-slate-900/50 rounded-2xl border border-slate-800 text-center py-20">
          <h2 className="text-2xl font-bold mb-2">HSE Compliance</h2>
          <p className="text-slate-400">Site safety audit and incident reporting module coming soon.</p>
        </div></DashboardLayout>} />
        <Route path="/field" element={<DashboardLayout><FieldData /></DashboardLayout>} />
        <Route path="/reports" element={<DashboardLayout><Reports /></DashboardLayout>} />
        <Route path="/settings" element={<DashboardLayout><div className="p-4 bg-slate-900/50 rounded-2xl border border-slate-800 text-center py-20">
          <h2 className="text-2xl font-bold mb-2">System Settings</h2>
          <p className="text-slate-400">Enterprise configuration and user access controls module coming soon.</p>
        </div></DashboardLayout>} />

        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
