'use client';

// app/(app)/fund/eft/page.tsx
// Peniwyse — EFT funding (Coming soon placeholder)

export default function EftComingSoonPage() {
    return (
        <div className="min-h-screen bg-slate-50 p-4 sm:p-8 flex items-center justify-center">
            <div className="max-w-md w-full text-center space-y-6 animate-in fade-in zoom-in duration-700">
                <div className="h-24 w-24 bg-white border border-slate-200 rounded-[40px] shadow-xl flex items-center justify-center mx-auto mb-8">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 10h18" /><path d="M5 10V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3" /><path d="M6 10v9" /><path d="M10 10v9" /><path d="M14 10v9" /><path d="M18 10v9" /><path d="M4 19h16" />
                    </svg>
                </div>

                <h1 className="text-3xl font-bold text-slate-900 tracking-tight">EFT Funding is Coming Soon</h1>
                <p className="text-slate-500 leading-relaxed">
                    We're currently finalizing our direct bank integration through Flinks and Plaid to offer higher limit deposits.
                </p>

                <div className="pt-8">
                    <a
                        href="/fund"
                        className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white rounded-[24px] font-bold text-md hover:bg-slate-800 transition-all shadow-xl shadow-slate-200"
                    >
                        Use e-Transfer Instead
                    </a>
                </div>

                <p className="text-xs text-slate-400 font-medium">Expected release: Q1 2026</p>
            </div>
        </div>
    );
}
