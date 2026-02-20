import { Search, Filter, ArrowUpRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { mockProjects } from '@/mock/data';
import type { ProjectStatus } from '@/types';
import { cn } from '@/lib/utils';

const STATUS_STYLES: Record<ProjectStatus, string> = {
    'on-track': 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
    'at-risk': 'bg-amber-500/10 text-amber-500 border-amber-500/20',
    'delayed': 'bg-rose-500/10 text-rose-500 border-rose-500/20',
    'on-hold': 'bg-slate-500/10 text-slate-500 border-slate-500/20',
};

const Projects = () => (
    <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Projects Portfolio</h1>
                <p className="text-sm text-slate-500 mt-1">Manage and monitor all active infrastructure projects</p>
            </div>
            <Button size="sm" className="gap-2 bg-blue-600 hover:bg-blue-700 self-start sm:self-auto">
                + New Project
            </Button>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <Input placeholder="Search projects..." className="pl-10 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800" />
            </div>
            <Button variant="outline" className="gap-2 shrink-0">
                <Filter size={16} /> Filters
            </Button>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
            {mockProjects.map((project) => (
                <Card key={project.id} className="border-none shadow-lg bg-white dark:bg-slate-900 ring-1 ring-slate-200 dark:ring-slate-800 hover:shadow-xl transition-all hover:translate-y-[-2px] group cursor-pointer">
                    <CardContent className="p-5 sm:p-6 space-y-4">
                        {/* Top Row */}
                        <div className="flex items-start justify-between">
                            <div className="space-y-1 min-w-0">
                                <h3 className="font-bold text-lg leading-tight truncate">{project.name}</h3>
                                <p className="text-xs text-slate-500">{project.type} • {project.location.address}</p>
                            </div>
                            <ArrowUpRight size={18} className="text-slate-400 group-hover:text-blue-500 transition-colors shrink-0 ml-2" />
                        </div>

                        <p className="text-sm text-slate-500 line-clamp-2">{project.description}</p>

                        {/* Status & Health */}
                        <div className="flex items-center gap-3">
                            <Badge variant="outline" className={cn('font-semibold capitalize', STATUS_STYLES[project.status])}>
                                {project.status.replace('-', ' ')}
                            </Badge>
                            <span className="text-sm font-bold">Health: {project.healthScore}</span>
                        </div>

                        {/* Progress */}
                        <div className="space-y-1.5">
                            <div className="flex justify-between text-xs text-slate-500">
                                <span>Completion</span>
                                <span className="font-semibold">{project.completion}%</span>
                            </div>
                            <Progress value={project.completion} className="h-2" />
                        </div>

                        {/* Budget Footer */}
                        <div className="flex justify-between items-center text-sm pt-2 border-t border-slate-100 dark:border-slate-800">
                            <span className="text-slate-500">Budget</span>
                            <span className="font-bold">${(project.budget.total / 1_000_000).toFixed(0)}M</span>
                        </div>

                        {/* Manager */}
                        <p className="text-xs text-slate-400">PM: {project.manager}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
    </div>
);

export default Projects;
