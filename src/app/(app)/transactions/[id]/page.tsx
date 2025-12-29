'use client';

import { useParams } from 'next/navigation';

// app/(app)/transactions/[id]/page.tsx
// Peniwyse — High-fidelity transaction receipt and detail view

export default function TransactionDetailPage() {
    const params = useParams();
    const txId = params.id as string;

    // Mock lookup for specific UX details
    const txData = {
        id: txId,
        title: txId.includes('B') ? "Converted CAD → USDC" : "USDC Deposit",
        status: "Completed",
        date: "January 22, 2025 • 3:42 PM",
        amount: txId.includes('B') ? "920.00 USDC" : "450.00 USDC",
        referenceId: "RAIL-X9218-B521",
        network: "Base Chain",
        fee: txId.includes('B') ? "$2.50 CAD" : "0.00",
        rate: txId.includes('B') ? "1 CAD = 0.7354 USDC" : null,
        sender: txId.includes('B') ? "Peniwyse Rails" : "0x4A1c...9F02",
        receiver: "Alex Chen (Peniwyse Wallet)",
        hash: "0x82b...f91a"
    };

    return (
        <div className="min-h-screen bg-slate-50 p-4 sm:p-8 font-sans">
            <div className="max-w-2xl mx-auto">
                <div className="mb-8">
                    <a href="/transactions" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors group">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 transition-transform group-hover:-translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m15 18-6-6 6-6" />
                        </svg>
                        Activity Ledger
                    </a>
                </div>

                {/* Receipt Concept */}
                <div className="bg-white border border-slate-200/70 rounded-[40px] shadow-2xl overflow-hidden shadow-slate-200/50">
                    {/* Top Branding Section */}
                    <div className="bg-slate-900 px-8 py-10 text-white text-center">
                        <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-white/10 border border-white/10">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{txData.status}</span>
                        </div>
                        <h1 className="text-4xl font-bold tracking-tighter mb-2">{txData.amount}</h1>
                        <p className="text-white/50 text-sm font-medium">{txData.title}</p>
                    </div>

                    {/* Detail Body */}
                    <div className="p-8 sm:p-12 space-y-10">

                        <div className="grid grid-cols-2 gap-y-8">
                            <DetailItem label="Transaction Date" value={txData.date} />
                            <DetailItem label="Reference ID" value={txData.referenceId} />
                            <DetailItem label="Platform / Rail" value={txData.network} />
                            <DetailItem label="Platform Fee" value={txData.fee} />
                            {txData.rate && (
                                <DetailItem label="Locked Quote Rate" value={txData.rate} className="col-span-2" />
                            )}
                        </div>

                        <div className="h-px bg-slate-100" />

                        <div className="space-y-6">
                            <div>
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">Origin</label>
                                <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl flex items-center justify-between">
                                    <span className="text-sm font-bold text-slate-900">{txData.sender}</span>
                                    <button className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Verify</button>
                                </div>
                            </div>

                            <div className="flex justify-center -my-2">
                                <div className="h-8 w-8 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14m0-14L7 10m5-5 5 5" /></svg>
                                </div>
                            </div>

                            <div>
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">Destination</label>
                                <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl flex items-center justify-between">
                                    <span className="text-sm font-bold text-slate-900">{txData.receiver}</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-50/50 border border-blue-100 rounded-3xl p-6">
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-900">Chain Audit</p>
                                        <p className="text-xs text-slate-500 font-medium font-mono">{txData.hash}</p>
                                    </div>
                                </div>
                                <button className="px-6 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-900 hover:bg-slate-50 transition-all shadow-sm">
                                    Explore Block
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Receipt Actions */}
                    <div className="bg-slate-50 px-8 py-6 flex flex-col sm:flex-row gap-4 items-center justify-between border-t border-slate-100">
                        <button className="flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
                            Download PDF Receipt
                        </button>
                        <a href="/support" className="text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors">
                            Report a problem
                        </a>
                    </div>
                </div>

                <p className="mt-8 text-center text-[10px] text-slate-400 font-medium px-8 leading-relaxed">
                    Peniwyse Receipts serve as proof of transaction for individual asset movements on our rails. For multi-asset summary, please download your Monthly Statement.
                </p>
            </div>
        </div>
    );
}

function DetailItem({ label, value, className = "" }: { label: string, value: string, className?: string }) {
    return (
        <div className={className}>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{label}</p>
            <p className="text-sm font-bold text-slate-900">{value}</p>
        </div>
    );
}
