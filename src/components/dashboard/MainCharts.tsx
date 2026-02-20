import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { mockPerformanceData, mockBudgetData } from '@/mock/data';

const CHART_COLORS = {
    spi: '#3b82f6',
    cpi: '#f59e0b',
    planned: '#3b82f6',
    actual: '#10b981',
} as const;

const tooltipStyle = {
    backgroundColor: '#0f172a',
    border: 'none',
    borderRadius: '8px',
    color: '#fff',
} as const;

const axisProps = { axisLine: false, tickLine: false, tick: { fontSize: 12 } } as const;

export const MainCharts = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        {/* Performance Index Chart */}
        <Card className="border-none shadow-lg bg-white dark:bg-slate-900 ring-1 ring-slate-200 dark:ring-slate-800">
            <CardHeader>
                <CardTitle className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                    Performance Index (SPI / CPI)
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="h-[280px] sm:h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={mockPerformanceData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                            <XAxis dataKey="month" {...axisProps} />
                            <YAxis {...axisProps} domain={[0.8, 1.2]} />
                            <Tooltip contentStyle={tooltipStyle} itemStyle={{ color: '#fff' }} />
                            <Legend />
                            <Line type="monotone" dataKey="spi" stroke={CHART_COLORS.spi} strokeWidth={3} dot={{ fill: CHART_COLORS.spi, r: 4 }} activeDot={{ r: 6 }} name="Schedule (SPI)" />
                            <Line type="monotone" dataKey="cpi" stroke={CHART_COLORS.cpi} strokeWidth={3} dot={{ fill: CHART_COLORS.cpi, r: 4 }} activeDot={{ r: 6 }} name="Cost (CPI)" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>

        {/* Budget Trend Chart */}
        <Card className="border-none shadow-lg bg-white dark:bg-slate-900 ring-1 ring-slate-200 dark:ring-slate-800">
            <CardHeader>
                <CardTitle className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                    Budget: Planned vs Actual ($M)
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="h-[280px] sm:h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={mockBudgetData}>
                            <defs>
                                <linearGradient id="gradPlanned" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor={CHART_COLORS.planned} stopOpacity={0.1} />
                                    <stop offset="95%" stopColor={CHART_COLORS.planned} stopOpacity={0} />
                                </linearGradient>
                                <linearGradient id="gradActual" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor={CHART_COLORS.actual} stopOpacity={0.1} />
                                    <stop offset="95%" stopColor={CHART_COLORS.actual} stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                            <XAxis dataKey="month" {...axisProps} />
                            <YAxis {...axisProps} />
                            <Tooltip contentStyle={tooltipStyle} />
                            <Area type="monotone" dataKey="planned" stroke={CHART_COLORS.planned} fillOpacity={1} fill="url(#gradPlanned)" strokeWidth={2} name="Planned Spend" />
                            <Area type="monotone" dataKey="actual" stroke={CHART_COLORS.actual} fillOpacity={1} fill="url(#gradActual)" strokeWidth={2} name="Actual Spend" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    </div>
);
