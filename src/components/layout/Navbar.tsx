import { Bell, Search, User, Moon, Sun, Command } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useStore } from '@/store/useStore';

export const Navbar = () => {
    const { theme, setTheme } = useStore();

    return (
        <header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 flex items-center justify-between sticky top-0 z-40 backdrop-blur-md bg-opacity-80">
            <div className="flex items-center flex-1 max-w-xl">
                <div className="relative w-full group">
                    <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <Input
                        placeholder="Search projects, tasks, or reports..."
                        className="pl-10 h-10 bg-slate-100 dark:bg-slate-800 border-none focus-visible:ring-blue-500 w-full"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 bg-slate-200 dark:bg-slate-700 px-1.5 py-0.5 rounded text-[10px] text-slate-500 font-mono">
                        <Command size={10} /> K
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="text-slate-500"
                >
                    {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                </Button>

                <div className="relative">
                    <Button variant="ghost" size="icon" className="text-slate-500">
                        <Bell size={20} />
                    </Button>
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
                </div>

                <div className="h-8 w-px bg-slate-200 dark:bg-slate-800 mx-2"></div>

                <div className="flex items-center gap-3 pl-2">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-semibold">Alex Thompson</p>
                        <p className="text-xs text-slate-500">Sr. Project Manager</p>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold ring-2 ring-blue-500/20">
                        <User size={20} />
                    </div>
                </div>
            </div>
        </header>
    );
};
