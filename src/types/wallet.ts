export interface Wallet {
    id: string;
    userId: string;
    cadBalance: number;
    usdcBalance: number;
    usdcAddress: string;
    chainId: number;
    chainName: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Balance {
    currency: 'CAD' | 'USDC';
    amount: number;
    usdValue?: number;
}

export interface AllocationTarget {
    cadPercentage: number;
    usdcPercentage: number;
    targetUsdValue: number;
}
