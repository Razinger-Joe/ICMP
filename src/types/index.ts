export type ProjectStatus = 'on-track' | 'at-risk' | 'delayed' | 'on-hold';

export interface Project {
    id: string;
    name: string;
    type: string;
    location: {
        lat: number;
        lng: number;
        address: string;
    };
    status: ProjectStatus;
    healthScore: number;
    budget: {
        total: number;
        spent: number;
        forecast: number;
    };
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

export interface ChartDataPoint {
    date: string;
    value: number;
    planned?: number;
    actual?: number;
}
