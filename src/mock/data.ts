import type { Project } from '../types';

export const mockProjects: Project[] = [
    {
        id: '1',
        name: 'Metropolis Hospital Expansion',
        type: 'Healthcare',
        location: { lat: 40.7128, lng: -74.0060, address: 'New York, NY' },
        status: 'on-track',
        healthScore: 92,
        budget: { total: 150000000, spent: 45000000, forecast: 148000000 },
        completion: 35,
        startDate: '2023-01-15',
        endDate: '2025-12-30',
        manager: 'Sarah Jenkins',
        description: 'A 500-bed expansion project focused on smart healthcare systems.'
    },
    {
        id: '2',
        name: 'Golden Gate Bridge Maintenance',
        type: 'Infrastructure',
        location: { lat: 37.8199, lng: -122.4783, address: 'San Francisco, CA' },
        status: 'at-risk',
        healthScore: 68,
        budget: { total: 45000000, spent: 32000000, forecast: 48000000 },
        completion: 62,
        startDate: '2023-06-01',
        endDate: '2024-05-15',
        manager: 'Michael Chen',
        description: 'Structural reinforcement and sensor integration for real-time monitoring.'
    },
    {
        id: '3',
        name: 'Skyline Residential Towers',
        type: 'Residential',
        location: { lat: 34.0522, lng: -118.2437, address: 'Los Angeles, CA' },
        status: 'on-track',
        healthScore: 85,
        budget: { total: 280000000, spent: 210000000, forecast: 275000000 },
        completion: 78,
        startDate: '2022-03-10',
        endDate: '2024-09-20',
        manager: 'Robert Wilson',
        description: 'High-end residential complex with integrated green building features.'
    }
];

export const mockPerformanceData = [
    { month: 'Jan', spi: 1.02, cpi: 0.98 },
    { month: 'Feb', spi: 1.05, cpi: 1.01 },
    { month: 'Mar', spi: 0.95, cpi: 0.92 },
    { month: 'Apr', spi: 0.88, cpi: 0.85 },
    { month: 'May', spi: 0.92, cpi: 0.89 },
    { month: 'Jun', spi: 1.01, cpi: 0.95 },
];

export const mockBudgetData = [
    { month: 'Jan', planned: 10, actual: 8 },
    { month: 'Feb', planned: 25, actual: 22 },
    { month: 'Mar', planned: 45, actual: 48 },
    { month: 'Apr', planned: 70, actual: 75 },
    { month: 'May', planned: 95, actual: 102 },
    { month: 'Jun', planned: 120, actual: 115 },
];
