import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, TrendingUp, TrendingDown, DollarSign, Receipt } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, Cell } from 'recharts';
import { mockBudgetData } from '@/mock/data';

const costPerformance = [
    { name: 'Roads & Bridges', spent: 145, budget: 180, cpi: 1.05 },
    { name: 'Power Grid', spent: 98, budget: 95, cpi: 0.96 },
    { name: 'Water Systems', spent: 54, budget: 70, cpi: 1.12 },
    { name: 'Telecom', spent: 32, budget: 35, cpi: 1.02 },
];

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6'];

const Costs = () => {
    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">Financial Controls</h1>
                    <p className="text-slate-500 dark:text-slate-400">Budget management, ROI analysis, and expenditure tracking</p>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="gap-2 dark:border-slate-800">
                        <Download size={16} />
                        Financial Report
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-none shadow-lg bg-white dark:bg-slate-900 ring-1 ring-slate-200 dark:ring-slate-800">
                    <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                            <div className="bg-blue-500/10 p-3 rounded-xl text-blue-500">
                                <DollarSign size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500 font-medium">Total Commited</p>
                                <h3 className="text-3xl font-bold">$475.2M</h3>
                                <div className="flex items-center gap-1 mt-1 text-xs text-emerald-500 font-semibold">
                                    <TrendingUp size={12} />
                                    <span>+4.2% from forecast</span>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-none shadow-lg bg-white dark:bg-slate-900 ring-1 ring-slate-200 dark:ring-slate-800">
                    <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                            <div className="bg-emerald-500/10 p-3 rounded-xl text-emerald-500">
                                <TrendingUp size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500 font-medium">Avg. ROI Index</p>
                                <h3 className="text-3xl font-bold">1.24x</h3>
                                <div className="flex items-center gap-1 mt-1 text-xs text-emerald-500 font-semibold">
                                    <TrendingUp size={12} />
                                    <span>Stable performance</span>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-none shadow-lg bg-white dark:bg-slate-900 ring-1 ring-slate-200 dark:ring-slate-800">
                    <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                            <div className="bg-amber-500/10 p-3 rounded-xl text-amber-500">
                                <Receipt size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500 font-medium">Monthly Burn</p>
                                <h3 className="text-3xl font-bold">$12.4M</h3>
                                <div className="flex items-center gap-1 mt-1 text-xs text-rose-500 font-semibold">
                                    <TrendingDown size={12} />
                                    <span>-2.1% efficiency drop</span>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="border-none shadow-lg bg-white dark:bg-slate-900 ring-1 ring-slate-200 dark:ring-slate-800">
                    <CardHeader>
                        <CardTitle className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Expenditure Timeline</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[300px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={mockBudgetData}>
                                    <defs>
                                        <linearGradient id="colorSpent" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1} />
                                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" opacity={0.5} />
                                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                                    <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '8px', color: '#fff' }} />
                                    <Area type="monotone" dataKey="actual" stroke="#3b82f6" fillOpacity={1} fill="url(#colorSpent)" strokeWidth={3} />
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
                        <div className="h-[300px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={costPerformance} layout="vertical">
                                    <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e2e8f0" opacity={0.5} />
                                    <XAxis type="number" axisLine={false} tickLine={false} hide />
                                    <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} width={120} />
                                    <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '8px', color: '#fff' }} />
                                    <Bar dataKey="spent" radius={[0, 4, 4, 0]} barSize={20}>
                                        {costPerformance.map((_, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
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
};

export default Costs;
