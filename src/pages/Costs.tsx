import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, TrendingUp, TrendingDown, DollarSign, Receipt } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, Cell } from 'recharts';
import { mockBudgetData } from '@/mock/data';

interface CostCategory {
    name: string;
    spent: number;
    budget: number;
    cpi: number;
}

const costCategories: CostCategory[] = [
    { name: 'Roads & Bridges', spent: 145, budget: 180, cpi: 1.05 },
    { name: 'Power Grid', spent: 98, budget: 95, cpi: 0.96 },
    { name: 'Water Systems', spent: 54, budget: 70, cpi: 1.12 },
    { name: 'Telecom', spent: 32, budget: 35, cpi: 1.02 },
];

const CATEGORY_COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6'] as const;

const tooltipStyle = {
    backgroundColor: '#0f172a',
    border: 'none',
    borderRadius: '8px',
    color: '#fff',
} as const;

const axisProps = { axisLine: false, tickLine: false, tick: { fontSize: 12 } } as const;

const Costs = () => (
    <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Financial Controls</h1>
                <p className="text-sm text-slate-500 dark:text-slate-400">Budget management, ROI analysis, and expenditure tracking</p>
            </div>
            <Button variant="outline" size="sm" className="gap-2 dark:border-slate-800 self-start sm:self-auto">
                <Download size={16} />
                <span className="hidden sm:inline">Financial Report</span>
            </Button>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <Card className="border-none shadow-lg bg-white dark:bg-slate-900 ring-1 ring-slate-200 dark:ring-slate-800">
                <CardContent className="p-5 sm:p-6">
                    <div className="flex items-center gap-4">
                        <div className="bg-blue-500/10 p-3 rounded-xl text-blue-500"><DollarSign size={24} /></div>
                        <div>
                            <p className="text-sm text-slate-500 font-medium">Total Committed</p>
                            <h3 className="text-2xl sm:text-3xl font-bold">$475.2M</h3>
                            <div className="flex items-center gap-1 mt-1 text-xs text-emerald-500 font-semibold">
                                <TrendingUp size={12} />
                                <span>+4.2% from forecast</span>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white dark:bg-slate-900 ring-1 ring-slate-200 dark:ring-slate-800">
                <CardContent className="p-5 sm:p-6">
                    <div className="flex items-center gap-4">
                        <div className="bg-emerald-500/10 p-3 rounded-xl text-emerald-500"><TrendingUp size={24} /></div>
                        <div>
                            <p className="text-sm text-slate-500 font-medium">Avg. ROI Index</p>
                            <h3 className="text-2xl sm:text-3xl font-bold">1.24x</h3>
                            <div className="flex items-center gap-1 mt-1 text-xs text-emerald-500 font-semibold">
                                <TrendingUp size={12} />
                                <span>Stable performance</span>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white dark:bg-slate-900 ring-1 ring-slate-200 dark:ring-slate-800">
                <CardContent className="p-5 sm:p-6">
                    <div className="flex items-center gap-4">
                        <div className="bg-amber-500/10 p-3 rounded-xl text-amber-500"><Receipt size={24} /></div>
                        <div>
                            <p className="text-sm text-slate-500 font-medium">Monthly Burn</p>
                            <h3 className="text-2xl sm:text-3xl font-bold">$12.4M</h3>
                            <div className="flex items-center gap-1 mt-1 text-xs text-rose-500 font-semibold">
                                <TrendingDown size={12} />
                                <span>-2.1% efficiency drop</span>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-none shadow-lg bg-white dark:bg-slate-900 ring-1 ring-slate-200 dark:ring-slate-800">
                <CardHeader>
                    <CardTitle className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Expenditure Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="h-[280px] sm:h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={mockBudgetData}>
                                <defs>
                                    <linearGradient id="gradSpent" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1} />
                                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" opacity={0.5} />
                                <XAxis dataKey="month" {...axisProps} />
                                <YAxis {...axisProps} />
                                <Tooltip contentStyle={tooltipStyle} />
                                <Area type="monotone" dataKey="actual" stroke="#3b82f6" fillOpacity={1} fill="url(#gradSpent)" strokeWidth={3} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white dark:bg-slate-900 ring-1 ring-slate-200 dark:ring-slate-800">
                <CardHeader>
                    <CardTitle className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Spend by Category ($M)</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="h-[280px] sm:h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={costCategories} layout="vertical">
                                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e2e8f0" opacity={0.5} />
                                <XAxis type="number" {...axisProps} hide />
                                <YAxis dataKey="name" type="category" {...axisProps} width={120} />
                                <Tooltip cursor={{ fill: 'transparent' }} contentStyle={tooltipStyle} />
                                <Bar dataKey="spent" radius={[0, 4, 4, 0]} barSize={20}>
                                    {costCategories.map((_, i) => (
                                        <Cell key={`cat-${i}`} fill={CATEGORY_COLORS[i % CATEGORY_COLORS.length]} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </CardContent>
            </Card>
        </div>
    </div>
);

export default Costs;
