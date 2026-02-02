import { create } from 'zustand';

interface ICMPState {
    selectedProjectId: string | null;
    sidebarCollapsed: boolean;
    theme: 'light' | 'dark';
    setSelectedProjectId: (id: string | null) => void;
    toggleSidebar: () => void;
    setTheme: (theme: 'light' | 'dark') => void;
}

export const useStore = create<ICMPState>((set) => ({
    selectedProjectId: null,
    sidebarCollapsed: false,
    theme: 'dark',
    setSelectedProjectId: (id) => set({ selectedProjectId: id }),
    toggleSidebar: () => set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),
    setTheme: (theme) => set({ theme }),
}));
