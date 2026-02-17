import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Search, Filter, Plus, MoreVertical, MapPin, Calendar, Users } from 'lucide-react';
import { mockProjects } from '@/mock/data';
import { cn } from '@/lib/utils';
import type { ProjectStatus } from '@/types';

const statusMap: Record<ProjectStatus, { label: string, color: string }> = {
    'on-track': { label: 'On Track', color: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.1)]' },
    'at-risk': { label: 'At Risk', color: 'bg-amber-500/10 text-amber-500 border-amber-500/20 shadow-[0_0_10px_rgba(245,158,11,0.1)]' },
    'delayed': { label: 'Delayed', color: 'bg-rose-500/10 text-rose-500 border-rose-500/20 shadow-[0_0_10px_rgba(244,63,94,0.1)]' },
    'on-hold': { label: 'On Hold', color: 'bg-slate-500/10 text-slate-500 border-slate-500/20 shadow-[0_0_10px_rgba(100,116,139,0.1)]' },
};

const Projects = () => {
    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">Projects Portfolio</h1>
                    <p className="text-slate-500 dark:text-slate-400">Total of {mockProjects.length} active infrastructure projects</p>
                </div>
                <div className="flex items-center gap-2">
                    <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg active:scale-95 transition-transform group">
                        <Plus size={16} className="mr-2 group-hover:rotate-90 transition-transform" />
                        Create Project
                    </Button>
                </div>
            </div>

            <Card className="border-none shadow-md bg-white dark:bg-slate-900 ring-1 ring-slate-200 dark:ring-slate-800">
                <CardContent className="p-4 flex flex-col sm:flex-row gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search projects by name, location, or manager..."
                            className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border-none rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                        />
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="gap-2 dark:border-slate-800">
                            <Filter size={16} />
                            Filters
                        </Button>
                        <Button variant="outline" size="sm" className="gap-2 dark:border-slate-800">
                            Sort
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {mockProjects.map((project) => (
                    <Card key={project.id} className="group overflow-hidden border-none shadow-lg bg-white dark:bg-slate-900 ring-1 ring-slate-200 dark:ring-slate-800 transition-all hover:shadow-2xl hover:translate-y-[-4px]">
                        <div className="h-2 w-full bg-emerald-500 opacity-20 group-hover:opacity-100 transition-opacity" />
                        <CardHeader className="p-6 pb-2">
                            <div className="flex justify-between items-start">
                                <Badge variant="outline" className={cn("text-[10px] uppercase tracking-wider mb-2", statusMap[project.status].color)}>
                                    {statusMap[project.status].label}
                                </Badge>
                                <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400">
                                    <MoreVertical size={16} />
                                </Button>
                            </div>
                            <CardTitle className="text-xl font-bold group-hover:text-emerald-500 transition-colors line-clamp-1">{project.name}</CardTitle>
                            <div className="flex items-center text-sm text-slate-500 mt-1">
                                <MapPin size={14} className="mr-1" />
                                {project.location.address}
                            </div>
                        </CardHeader>
                        <CardContent className="p-6 pt-4 space-y-4">
                            <div className="space-y-1.5">
                                <div className="flex justify-between text-xs mb-1">
                                    <span className="text-slate-500 font-medium">Completion Progress</span>
                                    <span className="font-bold text-emerald-500">{project.completion}%</span>
                                </div>
                                <Progress value={project.completion} className="h-2 bg-slate-100 dark:bg-slate-800" />
                            </div>

                            <div className="grid grid-cols-2 gap-4 py-2">
                                <div className="space-y-1">
                                    <p className="text-[10px] text-slate-500 uppercase font-semibold tracking-wider">Budget Spent</p>
                                    <p className="font-bold">${(project.budget.spent / 1000000).toFixed(1)}M</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] text-slate-500 uppercase font-semibold tracking-wider">Total Value</p>
                                    <p className="font-bold">${(project.budget.total / 1000000).toFixed(1)}M</p>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                                <div className="flex items-center text-xs text-slate-500 gap-3">
                                    <div className="flex items-center">
                                        <Calendar size={14} className="mr-1" />
                                        Dec 2024
                                    </div>
                                    <div className="flex items-center">
                                        <Users size={14} className="mr-1" />
                                        {project.manager}
                                    </div>
                                </div>
                                <Button variant="ghost" size="sm" className="text-emerald-500 hover:text-emerald-600 hover:bg-emerald-500/10 p-0 h-auto font-bold tracking-tight">
                                    DETAILS
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Projects;
