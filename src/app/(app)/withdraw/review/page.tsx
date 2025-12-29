'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

// app/(app)/withdraw/review/page.tsx
// Peniwyse — Final withdrawal confirmation and status tracking

function WithdrawReviewContent() {
    const searchParams = useSearchParams();
    const amount = searchParams.get('amount') || '0';
    const contactId = searchParams.get('contactId') || '0';

    const [step, setStep] = useState<'REVIEW' | 'CONFIRMED'>('REVIEW');
    const [status, setStatus] = useState<'QUEUED' | 'PROCESSING' | 'SETTLED'>('QUEUED');

    // Simple mock of status transition
    const handleConfirm = () => {
        setStep('CONFIRMED');

        // Simulate Processing after 5s
        setTimeout(() => setStatus('PROCESSING'), 5000);
        // Simulate Settled after 15s
        setTimeout(() => setStatus('SETTLED'), 15000);
    };

    const contact = contactId === '0'
        ? { name: 'Alex Chen (Self)', email: 'alex.chen@example.ca' }
        : { name: 'Mom', email: 'elaine.c@provider.ca' };

    if (step === 'CONFIRMED') {
        return (
            <div className="min-h-screen bg-slate-50 p-4 sm:p-8 flex items-center justify-center">
                <div className="max-w-md w-full bg-white border border-slate-200 rounded-[40px] p-8 shadow-2xl space-y-8 animate-in zoom-in-95 duration-500">
                    <div className="text-center">
                        <div className="h-20 w-20 rounded-full mx-auto mb-6 flex items-center justify-center relative">
                            {status === 'SETTLED' ? (
                                <div className="h-full w-full rounded-full bg-emerald-500 flex items-center justify-center text-white animate-in zoom-in duration-300 shadow-lg shadow-emerald-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                </div>
                            ) : (
                                <>
                                    <div className="absolute inset-0 border-4 border-blue-50 border-t-blue-600 rounded-full animate-spin" />
                                    <div className="h-16 w-16 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
                                    </div>
                                </>
                            )}
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                            {status === 'QUEUED' && "Withdrawal Queued"}
                            {status === 'PROCESSING' && "Rails Processing"}
                            {status === 'SETTLED' && "Funds Sent"}
                        </h2>
                        <p className="text-sm text-slate-500 mt-2">
                            {status === 'QUEUED' && "Security checks in progress..."}
                            {status === 'PROCESSING' && "Our liquidity rail is settling the EFT..."}
                            {status === 'SETTLED' && `Successfully sent to ${contact.email}`}
                        </p>
                    </div>

                    <div className="space-y-4">
                        <StatusStep label="Request Received" completed={true} />
                        <StatusStep label="Security & Compliance" completed={status !== 'QUEUED'} active={status === 'QUEUED'} />
                        <StatusStep label="Interac Rail Settlement" completed={status === 'SETTLED'} active={status === 'PROCESSING'} />
                        <StatusStep label="Settle to Bank" completed={false} active={status === 'SETTLED'} />
                    </div>

                    <div className="pt-4">
                        <a href="/dashboard" className="block w-full text-center py-4 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-2xl font-bold transition-all">
                            Return to Dashboard
                        </a>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 p-4 sm:p-8">
            <div className="max-w-xl mx-auto">
                <div className="mb-8">
                    <a href="/withdraw" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors group mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 transition-transform group-hover:-translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m15 18-6-6 6-6" />
                        </svg>
                        Edit Withdrawal
                    </a>
                    <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Review Withdrawal</h1>
                </div>

                <div className="bg-white border border-slate-200 rounded-[40px] p-8 shadow-sm space-y-8">
                    <div className="text-center">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Total to Bank</p>
                        <h2 className="text-4xl font-bold text-slate-900Tracking-tighter">${parseFloat(amount).toFixed(2)} CAD</h2>
                    </div>

                    <div className="space-y-6">
                        <div className="flex justify-between items-start py-4 border-y border-slate-100">
                            <div>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Receiving Bank</p>
                                <p className="text-sm font-bold text-slate-900">Interac e-Transfer</p>
                            </div>
                            <div className="text-right">
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">ETA</p>
                                <p className="text-sm font-bold text-slate-900">30 - 60 Min</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-500 font-medium">Recipient</span>
                                <span className="text-slate-900 font-bold">{contact.name}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-500 font-medium">Interac Email</span>
                                <span className="text-slate-900 font-bold">{contact.email}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-500 font-medium">Standard Fee</span>
                                <span className="text-emerald-600 font-bold">$0.00</span>
                            </div>
                        </div>
                    </div>

                    <div className="pt-6">
                        <button
                            onClick={handleConfirm}
                            className="w-full bg-blue-600 text-white py-5 rounded-[24px] font-bold text-lg shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all active:scale-[0.98]"
                        >
                            Confirm Withdrawal
                        </button>
                        <p className="text-[10px] text-slate-400 text-center mt-4 px-8 leading-relaxed">
                            By clicking confirm, you agree that the recipient name matches your bank records. Peniwyse is not responsible for misdirected e-Transfers to incorrect emails.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function StatusStep({ label, completed, active = false }: { label: string, completed: boolean, active?: boolean }) {
    return (
        <div className="flex items-center gap-4">
            <div className={`h-8 w-8 rounded-full border-2 flex items-center justify-center shrink-0 transition-all duration-500 ${completed ? "bg-emerald-500 border-emerald-500 text-white" : active ? "bg-white border-blue-600 border-dashed animate-pulse text-blue-600" : "bg-white border-slate-200 text-slate-200"
                }`}>
                {completed ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                ) : (
                    <span className="text-[10px] font-bold">•</span>
                )}
            </div>
            <div className="flex-1">
                <p className={`text-sm font-bold ${completed || active ? "text-slate-900" : "text-slate-300"}`}>{label}</p>
                {active && <p className="text-[10px] text-blue-600 font-medium animate-pulse">Running...</p>}
            </div>
        </div>
    );
}

export default function WithdrawReviewPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-slate-50 flex items-center justify-center">Loading withdrawal summary...</div>}>
            <WithdrawReviewContent />
        </Suspense>
    );
}
