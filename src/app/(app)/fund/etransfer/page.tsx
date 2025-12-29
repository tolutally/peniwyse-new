'use client';

import { useState, useEffect } from 'react';

// app/(app)/fund/etransfer/page.tsx
// Peniwyse — Interac e-Transfer funding instructions and tracking

export default function ETransferPage() {
    const [status, setStatus] = useState<'IDLE' | 'PENDING' | 'DETECTED'>('IDLE');

    const refCode = "PW-8291-CAD";
    const receiverEmail = "funding@peniwyse.ca";

    // Mock detection after 10 seconds for UX "wow"
    useEffect(() => {
        if (status === 'PENDING') {
            const timer = setTimeout(() => setStatus('DETECTED'), 10000);
            return () => clearTimeout(timer);
        }
    }, [status]);

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        // Could add toast here
    };

    return (
        <div className="min-h-screen bg-slate-50 p-4 sm:p-8">
            <div className="max-w-3xl mx-auto">
                {/* Navigation */}
                <div className="mb-6 flex items-center justify-between">
                    <a href="/fund" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors group">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 transition-transform group-hover:-translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m15 18-6-6 6-6" />
                        </svg>
                        Change Method
                    </a>
                    <button className="text-xs font-bold text-blue-600 hover:text-blue-700 uppercase tracking-widest">Help</button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

                    {/* Instructions Column */}
                    <div className="lg:col-span-3 space-y-6">
                        <div className="bg-white border border-slate-200 rounded-[32px] p-6 sm:p-8 shadow-sm">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" />
                                    </svg>
                                </div>
                                <h2 className="text-xl font-bold text-slate-900 tracking-tight">E-Transfer Instructions</h2>
                            </div>

                            <p className="text-sm text-slate-500 mb-8 leading-relaxed">
                                Log in to your Canadian bank account and send an Interac e-Transfer to the details below. Our system will auto-match your deposit.
                            </p>

                            <div className="space-y-4">
                                <InstructionRow
                                    label="Recipient Name"
                                    value="Peniwyse Inc."
                                    onCopy={() => copyToClipboard("Peniwyse Inc.")}
                                />
                                <InstructionRow
                                    label="Recipient Email"
                                    value={receiverEmail}
                                    onCopy={() => copyToClipboard(receiverEmail)}
                                />
                                <InstructionRow
                                    label="Message / Reference Code"
                                    value={refCode}
                                    isPrimary
                                    onCopy={() => copyToClipboard(refCode)}
                                />
                            </div>

                            <div className="mt-8 p-4 bg-amber-50 rounded-2xl border border-amber-100 flex gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                                </svg>
                                <p className="text-xs text-amber-800 leading-normal">
                                    <span className="font-bold">Important:</span> You MUST include the reference code <span className="font-bold underline">{refCode}</span> in the e-Transfer message field or your deposit will require manual review.
                                </p>
                            </div>
                        </div>

                        {status === 'IDLE' && (
                            <button
                                onClick={() => setStatus('PENDING')}
                                className="w-full py-5 bg-slate-900 text-white rounded-[24px] font-bold text-lg hover:bg-slate-800 transition-all shadow-xl shadow-slate-200"
                            >
                                I've sent the transfer
                            </button>
                        )}
                    </div>

                    {/* Status Column */}
                    <div className="lg:col-span-2 space-y-4">
                        <div className="bg-white border border-slate-200 rounded-[32px] p-6 shadow-sm flex flex-col items-center justify-center text-center min-h-[340px]">
                            {status === 'IDLE' ? (
                                <>
                                    <div className="h-16 w-16 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-300 mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
                                        </svg>
                                    </div>
                                    <h3 className="font-bold text-slate-900">Waiting for transfer</h3>
                                    <p className="text-xs text-slate-400 mt-2 px-4 italic">
                                        Once you send the funds, click the button to start monitoring.
                                    </p>
                                </>
                            ) : (
                                <div className="w-full animate-in fade-in zoom-in duration-500">
                                    <div className="mb-6 relative">
                                        <div className="h-20 w-20 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mx-auto">
                                            {status === 'PENDING' ? (
                                                <div className="h-10 w-10 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin" />
                                            ) : (
                                                <div className="h-12 w-12 rounded-full bg-emerald-500 flex items-center justify-center text-white scale-110 shadow-lg shadow-emerald-100">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <h3 className="font-bold text-slate-900">
                                        {status === 'PENDING' ? "Monitoring Interac Rails" : "Deposit Detected"}
                                    </h3>
                                    <p className="text-xs text-slate-500 mt-2 px-4">
                                        {status === 'PENDING' ? "Checking for PW-8291-CAD reference code..." : "We've found your transfer and it's being cleared."}
                                    </p>

                                    {/* Timeline */}
                                    <div className="mt-8 space-y-4 text-left px-2">
                                        <TimelineStep
                                            label="Transfer Initiated"
                                            active={true}
                                            completed={true}
                                        />
                                        <TimelineStep
                                            label="Peniwyse Monitoring"
                                            active={status === 'PENDING'}
                                            completed={status === 'DETECTED'}
                                        />
                                        <TimelineStep
                                            label="Clearing Funds"
                                            active={status === 'DETECTED'}
                                            completed={false}
                                        />
                                        <TimelineStep
                                            label="Available in Wallet"
                                            active={false}
                                            completed={false}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="bg-slate-50 rounded-3xl p-4 border border-slate-100">
                            <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                                Deposits are processed 24/7. First-time deposits may take up to 2 hours to clear due to fraud prevention protocols.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function InstructionRow({ label, value, isPrimary = false, onCopy }: { label: string, value: string, isPrimary?: boolean, onCopy: () => void }) {
    return (
        <div className={`p-4 rounded-2xl border transition-all ${isPrimary ? 'bg-blue-50 border-blue-100' : 'bg-slate-50 border-slate-100'}`}>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{label}</p>
            <div className="flex items-center justify-between gap-4">
                <span className={`font-mono text-sm sm:text-base font-bold truncate ${isPrimary ? 'text-blue-900' : 'text-slate-900'}`}>{value}</span>
                <button
                    onClick={onCopy}
                    className="shrink-0 h-8 px-3 rounded-lg bg-white border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors shadow-sm"
                >
                    Copy
                </button>
            </div>
        </div>
    );
}

function TimelineStep({ label, active, completed }: { label: string, active: boolean, completed: boolean }) {
    return (
        <div className="flex items-center gap-3">
            <div className={`h-2.5 w-2.5 rounded-full z-10 transition-colors duration-500 ${completed ? "bg-emerald-500" : active ? "bg-blue-500 animate-pulse ring-4 ring-blue-100" : "bg-slate-200"
                }`} />
            <span className={`text-xs font-bold transition-colors ${completed || active ? "text-slate-900" : "text-slate-400"
                }`}>
                {label}
            </span>
        </div>
    );
}
