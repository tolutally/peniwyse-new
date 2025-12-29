import { create } from 'zustand';
import { Wallet } from '@/types/wallet';

interface WalletState {
    wallet: Wallet | null;
    isLoading: boolean;
    error: string | null;

    // Actions
    setWallet: (wallet: Wallet) => void;
    updateBalance: (cadBalance?: number, usdcBalance?: number) => void;
    fetchWallet: (userId: string) => Promise<void>;
    clearWallet: () => void;
}

export const useWalletStore = create<WalletState>((set, get) => ({
    wallet: null,
    isLoading: false,
    error: null,

    setWallet: (wallet) => set({ wallet, error: null }),

    updateBalance: (cadBalance, usdcBalance) => {
        const { wallet } = get();
        if (!wallet) return;

        set({
            wallet: {
                ...wallet,
                cadBalance: cadBalance ?? wallet.cadBalance,
                usdcBalance: usdcBalance ?? wallet.usdcBalance,
                updatedAt: new Date(),
            },
        });
    },

    fetchWallet: async (userId: string) => {
        set({ isLoading: true, error: null });
        try {
            // Mock API call - in production this would fetch from the API
            await new Promise(resolve => setTimeout(resolve, 500));

            const mockWallet: Wallet = {
                id: 'wallet-demo',
                userId,
                cadBalance: 120.00,
                usdcBalance: 270.37,
                usdcAddress: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
                chainId: 8453,
                chainName: 'Base',
                createdAt: new Date('2023-12-01'),
                updatedAt: new Date(),
            };

            set({ wallet: mockWallet, isLoading: false });
        } catch (error) {
            set({
                error: error instanceof Error ? error.message : 'Failed to fetch wallet',
                isLoading: false
            });
        }
    },

    clearWallet: () => set({ wallet: null, error: null }),
}));
