'use client';

import { useState, useEffect } from 'react';

// app/(app)/receive/page.tsx
// Peniwyse — Receive USDC page
// Focus: "Wow" factor, clean UI, mock real-time detection

export default function ReceivePage() {
    const [copied, setCopied] = useState(false);
    const [incomingDetected, setIncomingDetected] = useState(false);
    const address = "0x3A7b8E29C1748264567283910F192E82739B91F2";

    // Mock "Incoming deposit detected" after 8 seconds for the "wow" factor
    useEffect(() => {
        const timer = setTimeout(() => {
            setIncomingDetected(true);
        }, 8000);
        return () => clearTimeout(timer);
    }, []);

    const copyAddress = () => {
        navigator.clipboard.writeText(address);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="min-h-screen bg-slate-50 p-4 sm:p-8">
            <div className="max-w-2xl mx-auto">
                {/* Navigation Breadcrumb */}
                <div className="mb-6">
                    <a href="/dashboard" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors group">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 transition-transform group-hover:-translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m15 18-6-6 6-6" />
                        </svg>
                        Back to Dashboard
                    </a>
                </div>

                <div className="border border-slate-200/70 rounded-[32px] overflow-hidden shadow-[0_18px_70px_-18px_rgba(15,23,42,0.15)] bg-white/80 backdrop-blur-xl">
                    {/* Header */}
                    <div className="px-6 py-8 sm:px-10 text-center border-b border-slate-100">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-4">
                            <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                            <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider">Base Network</span>
                        </div>
                        <h1 className="text-2xl font-bold tracking-tight text-slate-900 mb-2">Receive USDC</h1>
                        <p className="text-slate-500 text-sm max-w-sm mx-auto">
                            Send only <span className="font-semibold text-slate-700">USDC</span> via the <span className="font-semibold text-slate-700">Base network</span>. Other assets may be permanently lost.
                        </p>
                    </div>

                    <div className="p-6 sm:p-10 space-y-8">
                        {/* Visual QR Code Area */}
                        <div className="flex flex-col items-center">
                            <div className="relative group p-4 bg-white rounded-3xl border border-slate-100 shadow-sm transition-all hover:shadow-md">
                                {/* Mock QR Code SVG */}
                                <div className="w-48 h-48 bg-slate-50 rounded-2xl flex items-center justify-center overflow-hidden border border-slate-50">
                                    <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="160" height="160" rx="12" fill="white" />
                                        <path d="M20 20H60V60H20V20ZM30 30V50H50V30H30Z" fill="#0F172A" />
                                        <path d="M100 20H140V60H100V20ZM110 30V50H130V30H110Z" fill="#0F172A" />
                                        <path d="M20 100H60V140H20V100ZM30 110V130H50V110H30Z" fill="#0F172A" />
                                        <rect x="70" y="20" width="20" height="20" fill="#2563EB" />
                                        <rect x="100" y="70" width="20" height="20" fill="#0F172A" />
                                        <rect x="70" y="70" width="20" height="20" fill="#2563EB" />
                                        <rect x="120" y="100" width="20" height="20" fill="#0F172A" />
                                        <rect x="70" y="120" width="20" height="20" fill="#0F172A" />
                                        <rect x="100" y="120" width="20" height="20" fill="#2563EB" />
                                        <rect x="100" y="100" width="20" height="20" fill="#2563EB" />
                                        <rect x="120" y="120" width="20" height="20" fill="#0F172A" />
                                        <rect x="80" y="40" width="10" height="10" fill="#0F172A" />
                                        <rect x="40" y="80" width="10" height="10" fill="#0F172A" />
                                        <rect x="120" y="80" width="10" height="10" fill="#2563EB" />
                                    </svg>
                                </div>
                                {/* Middle Logo Overlay */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-xl shadow-lg border border-slate-100 flex items-center justify-center p-1.5">
                                    <div className="w-full h-full bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xs">P</div>
                                </div>
                            </div>
                        </div>

                        {/* Address Field */}
                        <div className="space-y-3">
                            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider ml-1">Your Deposit Address</label>
                            <div className="flex flex-col sm:flex-row gap-2">
                                <div className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl p-4 font-mono text-sm text-slate-800 break-all select-all">
                                    {address}
                                </div>
                                <button
                                    onClick={copyAddress}
                                    className={`shrink-0 flex items-center justify-center gap-2 sm:px-6 py-4 rounded-2xl font-semibold transition-all ${copied
                                            ? "bg-emerald-500 text-white"
                                            : "bg-slate-900 text-white hover:bg-slate-800"
                                        }`}
                                >
                                    {copied ? (
                                        <>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                            Copied
                                        </>
                                    ) : (
                                        <>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>
                                            Copy
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Detection Status (The "Wow" factor) */}
                        <div className="relative overflow-hidden group">
                            {incomingDetected ? (
                                <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5 flex items-center gap-4 animate-in fade-in slide-in-from-bottom-2 duration-700">
                                    <div className="h-10 w-10 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="12" y1="5" x2="12" y2="19" /><polyline points="19 12 12 19 5 12" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-sm font-bold text-emerald-900">Incoming deposit detected</h4>
                                        <p className="text-xs text-emerald-700">Detecting <span className="font-semibold">450.00 USDC</span>. Waiting for confirmations...</p>
                                    </div>
                                    <div className="text-emerald-700 text-xs font-mono font-semibold">
                                        0/2
                                    </div>
                                </div>
                            ) : (
                                <div className="bg-slate-50 border border-slate-100 border-dashed rounded-2xl p-5 flex items-center gap-4 transition-colors">
                                    <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-400 shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-slate-400">Waiting for deposit...</h4>
                                        <p className="text-xs text-slate-400">Peniwyse is monitoring the Base chain for your funds.</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Footer Info */}
                    <div className="bg-slate-50/50 px-6 py-6 sm:px-10 flex flex-col sm:flex-row gap-6 items-center justify-between border-t border-slate-100">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                            </div>
                            <p className="text-xs text-slate-500 font-medium leading-tight">
                                Assets are secured by cold storage <br /> and enterprise-grade custody.
                            </p>
                        </div>
                        <a href="/transactions?tab=deposits" className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-1 group">
                            View deposit history
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                        </a>
                    </div>
                </div>

                {/* Support Section */}
                <p className="mt-8 text-center text-xs text-slate-400">
                    Encountered an issue? <a href="/support" className="text-slate-600 font-medium hover:underline">Contact Dispute Support</a>
                </p>
            </div>
        </div>
    );
}
