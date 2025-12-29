'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

// app/(app)/withdraw/page.tsx
// Peniwyse — Withdrawal initiation form

export default function WithdrawPage() {
    const router = useRouter();
    const [amount, setAmount] = useState('');
    const [selectedContact, setSelectedContact] = useState('0'); // Mock ID

    const contacts = [
        { id: '0', name: 'Alex Chen (Self)', email: 'alex.chen@example.ca', type: 'Instant' },
        { id: '1', name: 'Mom', email: 'elaine.c@provider.ca', type: 'Standard' },
    ];

    const handleNext = () => {
        // Navigate to review with query params (mock state management)
        router.push(`/withdraw/review?amount=${amount}&contactId=${selectedContact}`);
    };

    return (
        <div className="min-h-screen bg-slate-50 p-4 sm:p-8">
            <div className="max-w-xl mx-auto">
                <div className="mb-8">
                    <a href="/dashboard" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors group mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 transition-transform group-hover:-translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m15 18-6-6 6-6" />
                        </svg>
                        Dashboard
                    </a>
                    <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Withdraw CAD</h1>
                    <p className="text-sm text-slate-500 mt-1">Send funds to your bank via Interac e-Transfer.</p>
                </div>

                <div className="space-y-6">
                    {/* Amount Section */}
                    <div className="bg-white border border-slate-200 rounded-[32px] p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Withdrawal Amount</span>
                            <span className="text-xs font-medium text-slate-400">Max: $12,450.22 CAD</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-3xl font-bold text-slate-900">$</span>
                            <input
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                placeholder="0.00"
                                className="flex-1 bg-transparent text-3xl font-bold text-slate-900 outline-none placeholder:text-slate-100 tabular-nums"
                            />
                            <span className="text-lg font-bold text-slate-400">CAD</span>
                        </div>
                    </div>

                    {/* Recipient Section */}
                    <div className="bg-white border border-slate-200 rounded-[32px] p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Recipient</span>
                            <a href="/withdraw/bank" className="text-xs font-bold text-blue-600 hover:text-blue-700">Manage Contacts</a>
                        </div>

                        <div className="grid grid-cols-1 gap-2">
                            {contacts.map((contact) => (
                                <button
                                    key={contact.id}
                                    onClick={() => setSelectedContact(contact.id)}
                                    className={`flex items-center justify-between p-4 rounded-2xl border transition-all text-left ${selectedContact === contact.id
                                            ? "bg-blue-50 border-blue-200 ring-2 ring-blue-500/10"
                                            : "bg-slate-50 border-slate-100 hover:border-slate-200"
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className={`h-10 w-10 rounded-full flex items-center justify-center text-xs font-bold ${selectedContact === contact.id ? "bg-blue-600 text-white" : "bg-slate-200 text-slate-500"
                                            }`}>
                                            {contact.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-slate-900">{contact.name}</p>
                                            <p className="text-[11px] text-slate-500 font-medium">{contact.email}</p>
                                        </div>
                                    </div>
                                    <span className={`text-[10px] font-bold uppercase py-0.5 px-2 rounded-md ${contact.type === 'Instant' ? "bg-emerald-100 text-emerald-700" : "bg-slate-200 text-slate-600"
                                        }`}>
                                        {contact.type}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Compliance & Limit Note */}
                    <div className="bg-slate-100/50 rounded-[24px] p-4 border border-slate-200/50 space-y-3">
                        <div className="flex items-start gap-3">
                            <IconShield />
                            <div>
                                <p className="text-xs font-bold text-slate-900">Compliance & Limits</p>
                                <p className="text-[11px] text-slate-500 mt-1 leading-relaxed italic">
                                    Withdrawals must match your verified Peniwyse profile name. Standard limit: $3,000/day. ETA: 30 minutes to 2 hours.
                                </p>
                            </div>
                        </div>
                    </div>

                    <button
                        disabled={!amount || parseFloat(amount) < 10}
                        onClick={handleNext}
                        className="w-full bg-slate-900 text-white py-5 rounded-[24px] font-bold text-lg shadow-xl shadow-slate-200 hover:bg-slate-800 transition-all active:scale-[0.98] disabled:opacity-50 disabled:shadow-none"
                    >
                        {parseFloat(amount) < 10 && amount ? "Min withdrawal $10.00" : "Review Withdrawal"}
                    </button>
                </div>
            </div>
        </div>
    );
}

function IconShield() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
    );
}
