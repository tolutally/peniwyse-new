export const FEES = {
    // Conversion fees (percentage)
    CAD_TO_USDC: 0.005, // 0.5%
    USDC_TO_CAD: 0.005, // 0.5%

    // Deposit fees
    ETRANSFER_FEE: 0, // Free
    EFT_FEE: 0, // Free

    // Withdrawal fees
    BANK_WITHDRAWAL_FEE: 1.50, // $1.50 CAD flat fee
    USDC_NETWORK_FEE: 0.10, // Estimated Base network fee in USDC

    // Minimum amounts
    MIN_CONVERSION_CAD: 10,
    MIN_CONVERSION_USDC: 10,
    MIN_DEPOSIT: 10,
    MIN_WITHDRAWAL: 10,
} as const;

export const SUPPORTED_CHAIN = {
    id: 8453,
    name: 'Base',
    network: 'base-mainnet',
    nativeCurrency: {
        name: 'Ethereum',
        symbol: 'ETH',
        decimals: 18,
    },
    rpcUrls: {
        default: { http: ['https://mainnet.base.org'] },
        public: { http: ['https://mainnet.base.org'] },
    },
    blockExplorers: {
        default: { name: 'BaseScan', url: 'https://basescan.org' },
    },
    contracts: {
        usdc: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
    },
} as const;

export const EXCHANGE_RATE = {
    // Mock exchange rate - in production this would come from an API
    USD_TO_CAD: 1.35,
    CAD_TO_USD: 0.74,
    UPDATE_INTERVAL_MS: 30000, // 30 seconds
} as const;
