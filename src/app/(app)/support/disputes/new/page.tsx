'use client';

import { useSearchParams } from 'next/navigation';
import { useState, Suspense } from 'react';

// app/(app)/support/disputes/new/page.tsx
// Peniwyse — Transaction Dispute & Issue Reporting Flow

function NewDisputeContent() {
    const searchParams = useSearchParams();
    const category = searchParams.get('category') || 'general';

    const [step, setStep] = useState(1);

    return (
        <div className="min-h-screen bg-slate-50 p-4 sm:p-8 font-sans">
            <div className="max-w-2xl mx-auto">
                {/* Navigation / Progress */}
                <div className="mb-12">
                    <a href="/support" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors group mb-8">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 transition-transform group-hover:-translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m15 18-6-6 6-6" />
                        </svg>
                        Cancel
                    </a>

                    <div className="flex items-center gap-2">
                        {[1, 2, 3].map((s) => (
                            <div key={s} className="flex-1 h-1.5 rounded-full overflow-hidden bg-slate-200">
                                <div className={`h-full bg-blue-600 transition-all duration-500 ${step >= s ? 'w-full' : 'w-0'}`} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-[40px] shadow-2xl p-8 sm:p-12 animate-in slide-in-from-bottom-4 duration-500">
                    {step === 1 && (
                        <div className="space-y-8 animate-in fade-in duration-500">
                            <div className="text-center">
                                <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Report an issue</h1>
                                <p className="text-slate-500 text-sm mt-2">Which transaction are you having trouble with?</p>
                            </div>

                            <div className="space-y-3">
                                <TransactionSelect
                                    title="USDC Deposit"
                                    meta="Base Chain • 450.00 USDC"
                                    date="Today, 10:45 AM"
                                    onClick={() => setStep(2)}
                                />
                                <TransactionSelect
                                    title="Converted CAD → USDC"
                                    meta="Peniwyse Rails • +920.00 USDC"
                                    date="Yesterday, 3:42 PM"
                                    onClick={() => setStep(2)}
                                />
                                <TransactionSelect
                                    title="CAD Funding"
                                    meta="e-Transfer • +$1,250.00 CAD"
                                    date="Dec 18, 2025"
                                    onClick={() => setStep(2)}
                                />
                            </div>

                            <button className="w-full text-sm font-bold text-slate-400 hover:text-slate-600 transition-colors pt-4 italic">
                                Transaction not listed? Click here.
                            </button>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                            <div className="text-center">
                                <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Tell us more</h1>
                                <p className="text-slate-500 text-sm mt-2">What happened with this withdrawal?</p>
                            </div>

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Detail of issue</label>
                                    <textarea
                                        rows={5}
                                        className="w-full bg-slate-50 border border-slate-200 rounded-3xl p-6 text-sm font-semibold text-slate-900 outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 resize-none"
                                        placeholder="e.g. I haven't received my withdrawal to TD Bank, or the e-Transfer email hasn't arrived..."
                                    />
                                </div>

                                <div className="p-5 rounded-3xl border border-blue-50 bg-blue-50/50 flex gap-4">
                                    <div className="h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                    </div>
                                    <p className="text-[11px] text-blue-900 font-medium leading-relaxed">
                                        Our Rails team is notified immediately when you report a specific transaction. Typical resolution time is under <span className="font-bold">15 minutes</span>.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 pt-4">
                                <button onClick={() => setStep(1)} className="flex-1 py-4 font-bold text-slate-500 hover:text-slate-900 transition-colors">Back</button>
                                <button onClick={() => setStep(3)} className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold shadow-xl shadow-slate-200 hover:bg-slate-800 transition-all">Submit Dispute</button>
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="text-center space-y-8 animate-in zoom-in-95 duration-500">
                            <div className="h-20 w-20 rounded-full bg-emerald-500 mx-auto flex items-center justify-center text-white shadow-lg shadow-emerald-100">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Report Received</h1>
                                <p className="text-slate-500 text-sm mt-3 leading-relaxed px-6">
                                    Your report for <span className="font-bold">PW-8291-CAD</span> has been opened as Ticket <span className="font-bold underline text-blue-600">#TKT-1085</span>.
                                </p>
                            </div>
                            <div className="pt-4 space-y-3">
                                <button onClick={() => window.location.href = '/support'} className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold shadow-xl shadow-slate-200">
                                    Go to Ticket
                                </button>
                                <button onClick={() => window.location.href = '/dashboard'} className="w-full text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors py-2">
                                    Back to Dashboard
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

function TransactionSelect({ title, meta, date, onClick }: { title: string, meta: string, date: string, onClick: () => void }) {
    return (
        <button onClick={onClick} className="w-full flex items-center justify-between p-5 border border-slate-100 rounded-[24px] hover:border-blue-200 hover:bg-blue-50/10 transition-all text-left group">
            <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors font-bold text-xs uppercase">•</div>
                <div>
                    <h4 className="text-sm font-bold text-slate-900">{title}</h4>
                    <p className="text-[11px] text-slate-500 font-medium">{meta}</p>
                </div>
            </div>
            <div className="text-right">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{date}</p>
            </div>
        </button>
    );
}

export default function NewDisputePage() {
    return (
        <Suspense fallback={<div>Loading support flow...</div>}>
            <NewDisputeContent />
        </Suspense>
    );
}
