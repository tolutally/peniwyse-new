import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    emailVerified: boolean;
    phoneVerified: boolean;
}

interface SessionState {
    user: User | null;
    sessionId: string | null;
    isAuthenticated: boolean;
    isLoading: boolean;

    // Actions
    setUser: (user: User) => void;
    setSession: (sessionId: string) => void;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    checkAuth: () => Promise<void>;
}

export const useSessionStore = create<SessionState>()(
    persist(
        (set, get) => ({
            user: null,
            sessionId: null,
            isAuthenticated: false,
            isLoading: false,

            setUser: (user) => set({ user, isAuthenticated: true }),

            setSession: (sessionId) => set({ sessionId }),

            login: async (email: string, password: string) => {
                set({ isLoading: true });
                try {
                    // Mock login - in production this would call the API
                    await new Promise(resolve => setTimeout(resolve, 1000));

                    // Mock user data
                    const mockUser: User = {
                        id: 'user-demo',
                        email,
                        firstName: 'John',
                        lastName: 'Doe',
                        phoneNumber: '+1 (416) 555-0123',
                        emailVerified: true,
                        phoneVerified: true,
                    };

                    const mockSessionId = `session-${Date.now()}`;

                    set({
                        user: mockUser,
                        sessionId: mockSessionId,
                        isAuthenticated: true,
                        isLoading: false,
                    });
                } catch (error) {
                    set({ isLoading: false });
                    throw error;
                }
            },

            logout: () => {
                set({
                    user: null,
                    sessionId: null,
                    isAuthenticated: false,
                });
            },

            checkAuth: async () => {
                const { sessionId } = get();
                if (!sessionId) {
                    set({ isAuthenticated: false });
                    return;
                }

                // In production, validate session with API
                // For now, just check if sessionId exists
                set({ isAuthenticated: !!sessionId });
            },
        }),
        {
            name: 'session-storage',
            partialize: (state) => ({
                user: state.user,
                sessionId: state.sessionId,
                isAuthenticated: state.isAuthenticated,
            }),
        }
    )
);
