import { create } from 'zustand';

type Theme = 'dark' | 'light';

interface ICMPState {
    selectedProjectId: string | null;
    sidebarCollapsed: boolean;
    theme: Theme;
    setSelectedProjectId: (id: string | null) => void;
    toggleSidebar: () => void;
    setTheme: (theme: Theme) => void;
}

export const useStore = create<ICMPState>((set) => ({
    selectedProjectId: null,
    sidebarCollapsed: true,
    theme: 'dark',
    setSelectedProjectId: (id) => set({ selectedProjectId: id }),
    toggleSidebar: () => set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),
    setTheme: (theme) => set({ theme }),
}));
