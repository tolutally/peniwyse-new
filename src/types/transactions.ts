export type TransactionType =
    | 'deposit'
    | 'withdrawal'
    | 'conversion'
    | 'receive'
    | 'send';

export type TransactionStatus =
    | 'pending'
    | 'processing'
    | 'completed'
    | 'failed'
    | 'cancelled';

export interface Transaction {
    id: string;
    userId: string;
    type: TransactionType;
    status: TransactionStatus;
    fromCurrency: 'CAD' | 'USDC';
    toCurrency: 'CAD' | 'USDC';
    fromAmount: number;
    toAmount: number;
    fee: number;
    exchangeRate?: number;
    description: string;
    referenceId?: string;
    txHash?: string;
    createdAt: Date;
    completedAt?: Date;
    metadata?: Record<string, any>;
}

export interface TransactionFilter {
    type?: TransactionType[];
    status?: TransactionStatus[];
    dateFrom?: Date;
    dateTo?: Date;
    minAmount?: number;
    maxAmount?: number;
}

export interface TransactionReceipt extends Transaction {
    userName: string;
    userEmail: string;
}
