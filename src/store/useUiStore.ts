import { create } from 'zustand';

interface Toast {
    id: string;
    type: 'success' | 'error' | 'warning' | 'info';
    message: string;
    duration?: number;
}

interface UiState {
    sidebarOpen: boolean;
    toasts: Toast[];

    // Actions
    toggleSidebar: () => void;
    setSidebarOpen: (open: boolean) => void;
    addToast: (toast: Omit<Toast, 'id'>) => void;
    removeToast: (id: string) => void;
}

export const useUiStore = create<UiState>((set, get) => ({
    sidebarOpen: true,
    toasts: [],

    toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),

    setSidebarOpen: (open) => set({ sidebarOpen: open }),

    addToast: (toast) => {
        const id = `toast-${Date.now()}-${Math.random()}`;
        const newToast: Toast = { ...toast, id };

        set((state) => ({ toasts: [...state.toasts, newToast] }));

        // Auto-remove toast after duration
        const duration = toast.duration ?? 5000;
        setTimeout(() => {
            get().removeToast(id);
        }, duration);
    },

    removeToast: (id) => {
        set((state) => ({
            toasts: state.toasts.filter((t) => t.id !== id),
        }));
    },
}));
