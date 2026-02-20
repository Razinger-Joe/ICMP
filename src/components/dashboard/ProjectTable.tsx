import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Progress } from '@/components/ui/progress';
import { mockProjects } from '@/mock/data';
import type { ProjectStatus } from '@/types';
import { cn } from '@/lib/utils';

const STATUS_CONFIG: Record<ProjectStatus, { label: string; color: string }> = {
    'on-track': { label: 'On Track', color: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' },
    'at-risk': { label: 'At Risk', color: 'bg-amber-500/10 text-amber-500 border-amber-500/20' },
    'delayed': { label: 'Delayed', color: 'bg-rose-500/10 text-rose-500 border-rose-500/20' },
    'on-hold': { label: 'On Hold', color: 'bg-slate-500/10 text-slate-500 border-slate-500/20' },
};

const getHealthColor = (score: number): string => {
    if (score > 85) return 'bg-emerald-500';
    if (score > 70) return 'bg-amber-500';
    return 'bg-rose-500';
};

const formatBudget = (value: number): string =>
    `${(value / 1_000_000).toFixed(1)}M`;

const formatUtilization = (spent: number, total: number): string =>
    `${((spent / total) * 100).toFixed(0)}% spent`;

export const ProjectTable = () => (
    <Card className="border-none shadow-lg bg-white dark:bg-slate-900 ring-1 ring-slate-200 dark:ring-slate-800 mt-6 overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                Active Projects Portfolio
            </CardTitle>
        </CardHeader>
        <CardContent className="p-0 overflow-x-auto">
            <Table>
                <TableHeader className="bg-slate-50 dark:bg-slate-800/50">
                    <TableRow>
                        <TableHead className="font-semibold px-6">Project Name</TableHead>
                        <TableHead className="font-semibold">Type</TableHead>
                        <TableHead className="font-semibold">Status</TableHead>
                        <TableHead className="font-semibold">Health</TableHead>
                        <TableHead className="font-semibold">Completion</TableHead>
                        <TableHead className="font-semibold text-right px-6">Budget ($)</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {mockProjects.map((project) => {
                        const status = STATUS_CONFIG[project.status];
                        return (
                            <TableRow key={project.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                                <TableCell className="px-6 py-4 font-medium">{project.name}</TableCell>
                                <TableCell>{project.type}</TableCell>
                                <TableCell>
                                    <Badge variant="outline" className={cn('font-semibold', status.color)}>
                                        {status.label}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-2">
                                        <div className={cn('h-2 w-2 rounded-full', getHealthColor(project.healthScore))} />
                                        <span className="font-bold">{project.healthScore}</span>
                                    </div>
                                </TableCell>
                                <TableCell className="min-w-[150px]">
                                    <div className="flex flex-col gap-1.5">
                                        <span className="text-[11px] text-slate-500">{project.completion}%</span>
                                        <Progress value={project.completion} className="h-1.5" />
                                    </div>
                                </TableCell>
                                <TableCell className="text-right px-6">
                                    <div className="flex flex-col">
                                        <span className="font-bold">{formatBudget(project.budget.total)}</span>
                                        <span className="text-[10px] text-slate-500">
                                            {formatUtilization(project.budget.spent, project.budget.total)}
                                        </span>
                                    </div>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </CardContent>
    </Card>
);
