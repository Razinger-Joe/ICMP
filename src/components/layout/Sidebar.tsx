import { LayoutDashboard, FolderKanban, Calendar, DollarSign, ShieldAlert, Camera, BarChart3, Settings, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useStore } from '@/store/useStore';
import { Button } from '@/components/ui/button';

const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', id: 'dashboard' },
    { icon: FolderKanban, label: 'Projects', id: 'projects' },
    { icon: Calendar, label: 'Schedule', id: 'schedule' },
    { icon: DollarSign, label: 'Costs', id: 'costs' },
    { icon: ShieldAlert, label: 'Safety', id: 'safety' },
    { icon: Camera, label: 'Field Data', id: 'field' },
    { icon: BarChart3, label: 'Reports', id: 'reports' },
    { icon: Settings, label: 'Settings', id: 'settings' },
];

export const Sidebar = () => {
    const { sidebarCollapsed, toggleSidebar } = useStore();

    return (
        <div className={cn(
            "h-screen bg-slate-900 text-white transition-all duration-300 flex flex-col border-r border-slate-800",
            sidebarCollapsed ? "w-16" : "w-64"
        )}>
            <div className="p-4 flex items-center justify-between border-b border-slate-800">
                {!sidebarCollapsed && <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">ICMP</span>}
                <Button variant="ghost" size="icon" onClick={toggleSidebar} className="text-slate-400 hover:text-white">
                    {sidebarCollapsed ? <Menu size={20} /> : <X size={20} />}
                </Button>
            </div>

            <nav className="flex-1 overflow-y-auto py-4">
                {navItems.map((item) => (
                    <div
                        key={item.id}
                        className={cn(
                            "flex items-center px-4 py-3 cursor-pointer transition-colors hover:bg-slate-800 text-slate-400 hover:text-white group",
                            item.id === 'dashboard' && "bg-slate-800 text-blue-400 border-l-4 border-blue-400"
                        )}
                    >
                        <item.icon size={20} className={cn(sidebarCollapsed ? "mx-auto" : "mr-3")} />
                        {!sidebarCollapsed && <span className="font-medium">{item.label}</span>}
                        {sidebarCollapsed && (
                            <div className="absolute left-16 bg-slate-800 px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                                {item.label}
                            </div>
                        )}
                    </div>
                ))}
            </nav>

            <div className="p-4 border-t border-slate-800">
                {!sidebarCollapsed && (
                    <div className="bg-slate-800/50 p-3 rounded-lg">
                        <p className="text-xs text-slate-500 uppercase font-semibold">User Role</p>
                        <p className="text-sm font-medium">Project Manager</p>
                    </div>
                )}
            </div>
        </div>
    );
};
