import { Transaction, TransactionStatus, TransactionType } from '@/types/transactions';
import { KYCProfile, KYCStatus } from '@/types/kyc';
import { Wallet } from '@/types/wallet';
import { SupportTicket } from '@/types/support';

interface User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    createdAt: Date;
    emailVerified: boolean;
    phoneVerified: boolean;
}

/**
 * In-memory mock database
 * In production, this would be replaced with actual API calls
 */
class MockDatabase {
    private users: Map<string, User> = new Map();
    private wallets: Map<string, Wallet> = new Map();
    private transactions: Map<string, Transaction> = new Map();
    private kycProfiles: Map<string, KYCProfile> = new Map();
    private supportTickets: Map<string, SupportTicket> = new Map();
    private sessions: Map<string, string> = new Map(); // sessionId -> userId

    constructor() {
        this.seedData();
    }

    // User operations
    getUser(userId: string): User | undefined {
        return this.users.get(userId);
    }

    getUserByEmail(email: string): User | undefined {
        return Array.from(this.users.values()).find(u => u.email === email);
    }

    createUser(user: Omit<User, 'id' | 'createdAt'>): User {
        const newUser: User = {
            ...user,
            id: this.generateId(),
            createdAt: new Date(),
        };
        this.users.set(newUser.id, newUser);
        return newUser;
    }

    // Wallet operations
    getWallet(userId: string): Wallet | undefined {
        return Array.from(this.wallets.values()).find(w => w.userId === userId);
    }

    updateWalletBalance(userId: string, cadBalance?: number, usdcBalance?: number): Wallet | undefined {
        const wallet = this.getWallet(userId);
        if (!wallet) return undefined;

        if (cadBalance !== undefined) wallet.cadBalance = cadBalance;
        if (usdcBalance !== undefined) wallet.usdcBalance = usdcBalance;
        wallet.updatedAt = new Date();

        this.wallets.set(wallet.id, wallet);
        return wallet;
    }

    // Transaction operations
    getTransactions(userId: string): Transaction[] {
        return Array.from(this.transactions.values())
            .filter(t => t.userId === userId)
            .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    }

    getTransaction(id: string): Transaction | undefined {
        return this.transactions.get(id);
    }

    createTransaction(transaction: Omit<Transaction, 'id' | 'createdAt'>): Transaction {
        const newTransaction: Transaction = {
            ...transaction,
            id: this.generateId(),
            createdAt: new Date(),
        };
        this.transactions.set(newTransaction.id, newTransaction);
        return newTransaction;
    }

    // KYC operations
    getKYCProfile(userId: string): KYCProfile | undefined {
        return Array.from(this.kycProfiles.values()).find(k => k.userId === userId);
    }

    updateKYCProfile(userId: string, updates: Partial<KYCProfile>): KYCProfile | undefined {
        const profile = this.getKYCProfile(userId);
        if (!profile) return undefined;

        Object.assign(profile, updates);
        this.kycProfiles.set(profile.id, profile);
        return profile;
    }

    // Support ticket operations
    getSupportTickets(userId: string): SupportTicket[] {
        return Array.from(this.supportTickets.values())
            .filter(t => t.userId === userId)
            .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    }

    getSupportTicket(id: string): SupportTicket | undefined {
        return this.supportTickets.get(id);
    }

    createSupportTicket(ticket: Omit<SupportTicket, 'id' | 'createdAt' | 'updatedAt'>): SupportTicket {
        const newTicket: SupportTicket = {
            ...ticket,
            id: this.generateId(),
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        this.supportTickets.set(newTicket.id, newTicket);
        return newTicket;
    }

    // Session operations
    createSession(userId: string): string {
        const sessionId = this.generateId();
        this.sessions.set(sessionId, userId);
        return sessionId;
    }

    getSession(sessionId: string): string | undefined {
        return this.sessions.get(sessionId);
    }

    deleteSession(sessionId: string): void {
        this.sessions.delete(sessionId);
    }

    // Utility
    private generateId(): string {
        return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    }

    private seedData(): void {
        // Seed will be implemented in seed.ts
    }
}

// Export singleton instance
export const mockDb = new MockDatabase();
