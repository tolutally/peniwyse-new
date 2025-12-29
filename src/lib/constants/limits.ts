import { KYCLimits } from '@/types/kyc';

export const KYC_LIMITS: Record<number, KYCLimits> = {
    0: {
        tier: 0,
        dailyDepositLimit: 0,
        dailyWithdrawalLimit: 0,
        monthlyDepositLimit: 0,
        monthlyWithdrawalLimit: 0,
        requiresKYC: true,
    },
    1: {
        tier: 1,
        dailyDepositLimit: 1000,
        dailyWithdrawalLimit: 1000,
        monthlyDepositLimit: 10000,
        monthlyWithdrawalLimit: 10000,
        requiresKYC: true,
    },
    2: {
        tier: 2,
        dailyDepositLimit: 10000,
        dailyWithdrawalLimit: 10000,
        monthlyDepositLimit: 100000,
        monthlyWithdrawalLimit: 100000,
        requiresKYC: true,
    },
    3: {
        tier: 3,
        dailyDepositLimit: 50000,
        dailyWithdrawalLimit: 50000,
        monthlyDepositLimit: 500000,
        monthlyWithdrawalLimit: 500000,
        requiresKYC: true,
    },
};

export function getLimitsForTier(tier: number): KYCLimits {
    return KYC_LIMITS[tier] || KYC_LIMITS[0];
}
