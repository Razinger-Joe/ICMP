import type { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { FileText, FileSpreadsheet, Download, Search, Filter, Mail, Share2, ClipboardList } from 'lucide-react';
import { cn } from '@/lib/utils';

type ReportStatus = 'Generated' | 'Archived' | 'Pending';

interface Report {
    id: string;
    name: string;
    type: string;
    date: string;
    status: ReportStatus;
    size: string;
}

interface ReportStat {
    label: string;
    value: string;
    sub: string;
    icon: LucideIcon;
    color: string;
}

const reports: Report[] = [
    { id: 'REP-2024-001', name: 'Q4 Global Infrastructure ROI', type: 'Financial', date: '2024-12-15', status: 'Generated', size: '2.4 MB' },
    { id: 'REP-2024-002', name: 'Monthly Site Telemetry Aggregation', type: 'Technical', date: '2024-12-10', status: 'Archived', size: '15.8 MB' },
    { id: 'REP-2024-003', name: 'Safety Compliance Audit - East Africa', type: 'Compliance', date: '2024-12-05', status: 'Generated', size: '4.1 MB' },
    { id: 'REP-2024-004', name: 'Project Timeline Variance Analysis', type: 'Management', date: '2024-11-28', status: 'Pending', size: 'N/A' },
];

const reportStats: ReportStat[] = [
    { label: 'Total Reports', value: '142', sub: 'Last 12 months', icon: FileText, color: 'text-blue-500' },
    { label: 'Storage Used', value: '4.2 GB', sub: '84% of quota', icon: Share2, color: 'text-emerald-500' },
    { label: 'Scheduled', value: '12', sub: 'Automated delivery', icon: Mail, color: 'text-purple-500' },
    { label: 'Audit Ready', value: '100%', sub: 'No missing data', icon: Download, color: 'text-amber-500' },
];

const getStatusIndicator = (status: ReportStatus): string => {
    if (status === 'Generated') return 'bg-emerald-500';
    if (status === 'Pending') return 'bg-amber-500 animate-pulse';
    return 'bg-slate-400';
};

const Reports = () => (
    <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Executive Reporting</h1>
                <p className="text-sm text-slate-500 dark:text-slate-400">Data aggregation and formal stakeholder exports</p>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white gap-2 shadow-lg active:scale-95 transition-transform self-start sm:self-auto">
                <ClipboardList size={16} />
                <span className="hidden sm:inline">Request Custom Report</span>
                <span className="sm:hidden">New Report</span>
            </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {reportStats.map((stat) => (
                <Card key={stat.label} className="border-none shadow-md bg-white dark:bg-slate-900 ring-1 ring-slate-200 dark:ring-slate-800">
                    <CardContent className="p-4 sm:p-5 flex items-center gap-4">
                        <stat.icon className={stat.color} size={24} />
                        <div>
                            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">{stat.label}</p>
                            <h3 className="text-xl font-bold">{stat.value}</h3>
                            <p className="text-[10px] text-slate-400">{stat.sub}</p>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>

        {/* Reports Table */}
        <Card className="border-none shadow-lg bg-white dark:bg-slate-900 ring-1 ring-slate-200 dark:ring-slate-800 overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between p-4 sm:p-6">
                <CardTitle className="text-sm font-semibold text-slate-500 uppercase tracking-widest leading-none">
                    Recent Generated Reports
                </CardTitle>
                <div className="flex gap-2">
                    <div className="relative hidden sm:block">
                        <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                        <input
                            type="text"
                            placeholder="Search reports..."
                            className="bg-slate-50 dark:bg-slate-800 text-xs pl-8 pr-4 py-1.5 rounded-lg border-none focus:ring-1 focus:ring-blue-500 outline-none w-48"
                        />
                    </div>
                    <Button variant="outline" size="sm" className="h-8 px-2 dark:border-slate-800">
                        <Filter size={14} />
                    </Button>
                </div>
            </CardHeader>
            <CardContent className="p-0 overflow-x-auto">
                <Table>
                    <TableHeader className="bg-slate-50/50 dark:bg-slate-800/50">
                        <TableRow>
                            <TableHead className="font-bold uppercase text-[10px] tracking-wider px-6">ID</TableHead>
                            <TableHead className="font-bold uppercase text-[10px] tracking-wider">Report Name</TableHead>
                            <TableHead className="font-bold uppercase text-[10px] tracking-wider">Category</TableHead>
                            <TableHead className="font-bold uppercase text-[10px] tracking-wider">Status</TableHead>
                            <TableHead className="font-bold uppercase text-[10px] tracking-wider text-right px-6">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {reports.map((report) => (
                            <TableRow key={report.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                                <TableCell className="px-6 py-4 font-mono text-xs text-slate-500">{report.id}</TableCell>
                                <TableCell className="font-bold text-sm tracking-tight">{report.name}</TableCell>
                                <TableCell>
                                    <Badge variant="secondary" className="text-[10px] font-bold uppercase">{report.type}</Badge>
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-1.5">
                                        <div className={cn('h-1.5 w-1.5 rounded-full', getStatusIndicator(report.status))} />
                                        <span className="text-xs font-medium">{report.status}</span>
                                    </div>
                                </TableCell>
                                <TableCell className="text-right px-6">
                                    <div className="flex items-center justify-end gap-2">
                                        <Button variant="ghost" size="icon" className="h-8 w-8 text-blue-500 hover:bg-blue-500/10" title="Export to Excel">
                                            <FileSpreadsheet size={16} />
                                        </Button>
                                        <Button variant="ghost" size="icon" className="h-8 w-8 text-rose-500 hover:bg-rose-500/10" title="Export to PDF">
                                            <FileText size={16} />
                                        </Button>
                                        <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400" title="Download">
                                            <Download size={16} />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    </div>
);

export default Reports;
