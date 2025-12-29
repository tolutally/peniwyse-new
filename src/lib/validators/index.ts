import { z } from 'zod';

// Login schema
export const loginSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
});

// Signup schema
export const signupSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string()
        .min(8, 'Password must be at least 8 characters')
        .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
        .regex(/[0-9]/, 'Password must contain at least one number'),
    confirmPassword: z.string(),
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number'),
    acceptTerms: z.boolean().refine(val => val === true, 'You must accept the terms'),
}).refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
});

// KYC Identity schema
export const kycIdentitySchema = z.object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    dateOfBirth: z.date().refine(
        date => {
            const age = new Date().getFullYear() - date.getFullYear();
            return age >= 18;
        },
        'You must be at least 18 years old'
    ),
    address: z.object({
        street: z.string().min(1, 'Street address is required'),
        city: z.string().min(1, 'City is required'),
        province: z.string().min(2, 'Province is required'),
        postalCode: z.string().regex(/^[A-Z]\d[A-Z] \d[A-Z]\d$/, 'Invalid postal code format'),
        country: z.literal('Canada'),
    }),
});

// Conversion schema
export const conversionSchema = z.object({
    fromCurrency: z.enum(['CAD', 'USDC']),
    toCurrency: z.enum(['CAD', 'USDC']),
    amount: z.number().positive('Amount must be positive').min(10, 'Minimum amount is $10'),
});

// Withdrawal schema
export const withdrawalSchema = z.object({
    amount: z.number().positive('Amount must be positive').min(10, 'Minimum withdrawal is $10'),
    bankAccountId: z.string().min(1, 'Please select a bank account'),
});

// Support ticket schema
export const supportTicketSchema = z.object({
    subject: z.string().min(5, 'Subject must be at least 5 characters'),
    category: z.enum(['account', 'transaction', 'kyc', 'technical', 'billing', 'other']),
    priority: z.enum(['low', 'medium', 'high', 'urgent']),
    description: z.string().min(20, 'Description must be at least 20 characters'),
});

export type LoginInput = z.infer<typeof loginSchema>;
export type SignupInput = z.infer<typeof signupSchema>;
export type KYCIdentityInput = z.infer<typeof kycIdentitySchema>;
export type ConversionInput = z.infer<typeof conversionSchema>;
export type WithdrawalInput = z.infer<typeof withdrawalSchema>;
export type SupportTicketInput = z.infer<typeof supportTicketSchema>;
