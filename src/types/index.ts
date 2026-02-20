export type ProjectStatus = 'on-track' | 'at-risk' | 'delayed' | 'on-hold';

export interface ProjectLocation {
    lat: number;
    lng: number;
    address: string;
}

export interface ProjectBudget {
    total: number;
    spent: number;
    forecast: number;
}

export interface Project {
    id: string;
    name: string;
    type: string;
    location: ProjectLocation;
    status: ProjectStatus;
    healthScore: number;
    budget: ProjectBudget;
    completion: number;
    startDate: string;
    endDate: string;
    manager: string;
    description: string;
}

export interface MetricCard {
    title: string;
    value: string | number;
    trend: number;
    unit?: string;
    status?: 'success' | 'warning' | 'danger' | 'neutral';
}

export interface PerformanceDataPoint {
    month: string;
    spi: number;
    cpi: number;
}

export interface BudgetDataPoint {
    month: string;
    planned: number;
    actual: number;
}
