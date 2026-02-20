import { Download, RefreshCcw, CalendarDays } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { KPISection } from '@/components/dashboard/KPISection';
import { MainCharts } from '@/components/dashboard/MainCharts';
import { ProjectTable } from '@/components/dashboard/ProjectTable';

const Dashboard = () => (
    <div className="space-y-6">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Executive Dashboard</h1>
                <p className="text-sm text-slate-500 mt-1">Real-time portfolio intelligence & KPI monitoring</p>
            </div>
            <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="gap-2">
                    <CalendarDays size={16} />
                    <span className="hidden sm:inline">Feb 2026</span>
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                    <RefreshCcw size={16} />
                    <span className="hidden sm:inline">Refresh</span>
                </Button>
                <Button size="sm" className="gap-2 bg-blue-600 hover:bg-blue-700">
                    <Download size={16} />
                    <span className="hidden sm:inline">Export</span>
                </Button>
            </div>
        </div>

        <KPISection />
        <MainCharts />
        <ProjectTable />
    </div>
);

export default Dashboard;
