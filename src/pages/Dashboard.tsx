import { KPISection } from '@/components/dashboard/KPISection';
import { MainCharts } from '@/components/dashboard/MainCharts';
import { ProjectTable } from '@/components/dashboard/ProjectTable';
import { Button } from '@/components/ui/button';
import { Download, Plus, Filter } from 'lucide-react';

const Dashboard = () => {
    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">Executive Dashboard</h1>
                    <p className="text-slate-500 dark:text-slate-400">Portfolio-wide health and performance metrics</p>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="outline" size="sm" className="gap-2 border-slate-200 dark:border-slate-800">
                        <Filter size={14} />
                        Filter
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2 border-slate-200 dark:border-slate-800">
                        <Download size={14} />
                        Export
                    </Button>
                    <Button size="sm" className="gap-2 bg-blue-600 hover:bg-blue-700 text-white shadow-lg active:scale-95 transition-transform">
                        <Plus size={14} />
                        New Project
                    </Button>
                </div>
            </div>

            <KPISection />

            <div className="grid grid-cols-1 gap-6">
                <MainCharts />
                <ProjectTable />
            </div>
        </div>
    );
};

export default Dashboard;
