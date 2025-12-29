export type KYCStatus =
    | 'not_started'
    | 'pending'
    | 'under_review'
    | 'approved'
    | 'rejected'
    | 'requires_resubmission';

export type DocumentType =
    | 'passport'
    | 'drivers_license'
    | 'national_id'
    | 'selfie';

export interface KYCProfile {
    id: string;
    userId: string;
    status: KYCStatus;
    tier: number;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    address: {
        street: string;
        city: string;
        province: string;
        postalCode: string;
        country: string;
    };
    phoneNumber: string;
    documents: KYCDocument[];
    submittedAt?: Date;
    reviewedAt?: Date;
    approvedAt?: Date;
    rejectionReason?: string;
}

export interface KYCDocument {
    id: string;
    type: DocumentType;
    fileName: string;
    fileUrl: string;
    uploadedAt: Date;
    status: 'pending' | 'approved' | 'rejected';
    rejectionReason?: string;
}

export interface KYCLimits {
    tier: number;
    dailyDepositLimit: number;
    dailyWithdrawalLimit: number;
    monthlyDepositLimit: number;
    monthlyWithdrawalLimit: number;
    requiresKYC: boolean;
}
