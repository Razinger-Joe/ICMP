import { ArrowUpRight, ArrowDownRight, Activity, DollarSign, Clock, ShieldCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const kpis = [
    {
        title: "Portfolio Health",
        value: "84.2",
        unit: "/100",
        trend: 2.4,
        icon: Activity,
        color: "text-blue-500",
        bg: "bg-blue-500/10"
    },
    {
        title: "Total Budget",
        value: "$475M",
        unit: "",
        trend: -1.2,
        icon: DollarSign,
        color: "text-emerald-500",
        bg: "bg-emerald-500/10"
    },
    {
        title: "Schedule Performance",
        value: "0.98",
        unit: "(SPI)",
        trend: 0.5,
        icon: Clock,
        color: "text-amber-500",
        bg: "bg-amber-500/10"
    },
    {
        title: "Safety Score",
        value: "96.4",
        unit: "%",
        trend: 0.8,
        icon: ShieldCheck,
        color: "text-indigo-500",
        bg: "bg-indigo-500/10"
    }
];

export const KPISection = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {kpis.map((kpi, i) => (
                <Card key={i} className="overflow-hidden border-none shadow-lg bg-white dark:bg-slate-900 ring-1 ring-slate-200 dark:ring-slate-800 transition-all hover:shadow-xl hover:translate-y-[-2px]">
                    <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{kpi.title}</p>
                                <div className="flex items-baseline gap-1 mt-2">
                                    <h3 className="text-2xl font-bold tracking-tight">{kpi.value}</h3>
                                    <span className="text-xs text-slate-500">{kpi.unit}</span>
                                </div>
                            </div>
                            <div className={cn("p-2 rounded-lg", kpi.bg)}>
                                <kpi.icon className={cn("inline-block", kpi.color)} size={20} />
                            </div>
                        </div>

                        <div className="flex items-center gap-1 mt-4">
                            <span className={cn(
                                "flex items-center text-xs font-semibold",
                                kpi.trend >= 0 ? "text-emerald-500" : "text-rose-500"
                            )}>
                                {kpi.trend >= 0 ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                                {Math.abs(kpi.trend)}%
                            </span>
                            <span className="text-xs text-slate-400">vs last period</span>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};
