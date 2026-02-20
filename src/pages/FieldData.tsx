import type { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Signal, Zap, Droplets, Wind, Thermometer, MapPin } from 'lucide-react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { cn } from '@/lib/utils';

interface SensorReading {
    time: string;
    temp: number;
    humidity: number;
    energy: number;
}

interface Device {
    id: string;
    type: string;
    location: string;
    status: 'Online' | 'Warning' | 'Offline';
    signal: 'Strong' | 'Good' | 'Weak';
    battery: string;
}

interface SensorStat {
    icon: LucideIcon;
    label: string;
    value: string;
    color: string;
}

const sensorData: SensorReading[] = [
    { time: '10:00', temp: 24, humidity: 45, energy: 320 },
    { time: '11:00', temp: 26, humidity: 42, energy: 350 },
    { time: '12:00', temp: 28, humidity: 38, energy: 410 },
    { time: '13:00', temp: 30, humidity: 35, energy: 450 },
    { time: '14:00', temp: 31, humidity: 34, energy: 480 },
    { time: '15:00', temp: 29, humidity: 37, energy: 460 },
];

const devices: Device[] = [
    { id: 'SEN-001', type: 'Climate', location: 'Section A - Basement', status: 'Online', signal: 'Strong', battery: '92%' },
    { id: 'SEN-042', type: 'Vibration', location: 'Elevator Shaft 3', status: 'Online', signal: 'Good', battery: '74%' },
    { id: 'PWR-102', type: 'Meter', location: 'Main Power Room', status: 'Online', signal: 'Strong', battery: 'Mains' },
    { id: 'WTR-205', type: 'Flow', location: 'Pump House B', status: 'Warning', signal: 'Weak', battery: '45%' },
];

const sensorStats: SensorStat[] = [
    { icon: Thermometer, label: 'Temperature', value: '28°C', color: 'text-orange-500' },
    { icon: Droplets, label: 'Humidity', value: '42%', color: 'text-blue-500' },
    { icon: Wind, label: 'Air Quality', value: 'AQI 18', color: 'text-emerald-500' },
    { icon: Zap, label: 'Power Draw', value: '48.2 kW', color: 'text-amber-500' },
];

const tooltipStyle = {
    backgroundColor: '#0f172a',
    border: 'none',
    borderRadius: '8px',
    color: '#fff',
} as const;

const axisProps = { axisLine: false, tickLine: false, tick: { fontSize: 12 } } as const;

const getStatusStyle = (status: Device['status']): string => {
    if (status === 'Online') return 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20';
    if (status === 'Warning') return 'text-amber-500 bg-amber-500/10 border-amber-500/20';
    return 'text-rose-500 bg-rose-500/10 border-rose-500/20';
};

const FieldData = () => (
    <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-emerald-500">Field Telemetry</h1>
                <p className="text-sm text-slate-500 dark:text-slate-400">Real-time IoT sensor network and site conditions</p>
            </div>
            <Badge variant="outline" className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20 py-1.5 px-3 self-start sm:self-auto">
                <Signal size={14} className="mr-2 animate-pulse" />
                Network Active: 1,420 Nodes
            </Badge>
        </div>

        {/* Sensor Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {sensorStats.map((stat) => (
                <Card key={stat.label} className="border-none shadow-md bg-white dark:bg-slate-900 overflow-hidden ring-1 ring-slate-200 dark:ring-slate-800">
                    <CardContent className="p-4 sm:p-5 flex items-center justify-between">
                        <div>
                            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{stat.label}</p>
                            <h3 className="text-xl sm:text-2xl font-bold mt-1">{stat.value}</h3>
                        </div>
                        <stat.icon size={24} className={stat.color} />
                    </CardContent>
                </Card>
            ))}
        </div>

        {/* Charts & Devices */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2 border-none shadow-lg bg-white dark:bg-slate-900 ring-1 ring-slate-200 dark:ring-slate-800">
                <CardHeader>
                    <CardTitle className="text-sm font-semibold text-slate-500 uppercase tracking-widest">
                        Site Telemetry Trends (Last 6 Hours)
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="h-[280px] sm:h-[350px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={sensorData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" opacity={0.5} />
                                <XAxis dataKey="time" {...axisProps} />
                                <YAxis {...axisProps} />
                                <Tooltip contentStyle={tooltipStyle} />
                                <Line type="monotone" dataKey="energy" stroke="#10b981" strokeWidth={4} dot={{ r: 0 }} name="Energy (kW)" />
                                <Line type="monotone" dataKey="temp" stroke="#f59e0b" strokeWidth={2} dot={{ r: 0 }} name="Temp (°C)" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white dark:bg-slate-900 ring-1 ring-slate-200 dark:ring-slate-800 overflow-hidden">
                <CardHeader className="border-b border-slate-100 dark:border-slate-800">
                    <CardTitle className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Active Devices</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    <div className="divide-y divide-slate-100 dark:divide-slate-800">
                        {devices.map((device) => (
                            <div key={device.id} className="p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <div className="flex justify-between items-start mb-1">
                                    <h4 className="font-bold text-sm tracking-tight">{device.id}</h4>
                                    <Badge variant="outline" className={cn('text-[10px] font-bold', getStatusStyle(device.status))}>
                                        {device.status}
                                    </Badge>
                                </div>
                                <div className="flex items-center text-xs text-slate-500 gap-2 mb-2">
                                    <span className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-[9px] font-bold uppercase">{device.type}</span>
                                    <span className="flex items-center"><MapPin size={10} className="mr-0.5" />{device.location}</span>
                                </div>
                                <div className="flex items-center justify-between text-[10px]">
                                    <span className="text-slate-400">Signal: <span className="text-white font-bold">{device.signal}</span></span>
                                    <span className="text-slate-400">Power: <span className="text-white font-bold">{device.battery}</span></span>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    </div>
);

export default FieldData;
