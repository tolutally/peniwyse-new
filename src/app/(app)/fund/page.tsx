'use client';

// app/(app)/fund/page.tsx
// Peniwyse — Choice of funding method

export default function FundSelectionPage() {
    const methods = [
        {
            id: 'etransfer',
            title: 'Interac e-Transfer',
            desc: 'Instant detection. Standard bank limits apply.',
            eta: '15-30 mins',
            fee: 'Free',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" />
                </svg>
            ),
            active: true,
            href: '/fund/etransfer'
        },
        {
            id: 'eft',
            title: 'Bank Transfer (EFT)',
            desc: 'Connect your bank via Flinks or Plaid.',
            eta: '1-3 business days',
            fee: 'Free',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 10h18" /><path d="M5 10V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3" /><path d="M6 10v9" /><path d="M10 10v9" /><path d="M14 10v9" /><path d="M18 10v9" /><path d="M4 19h16" />
                </svg>
            ),
            active: false,
            href: '/fund/eft'
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 p-4 sm:p-8">
            <div className="max-w-2xl mx-auto">
                <div className="mb-8">
                    <a href="/dashboard" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors group mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 transition-transform group-hover:-translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m15 18-6-6 6-6" />
                        </svg>
                        Dashboard
                    </a>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">Fund CAD</h1>
                    <p className="text-slate-500 text-sm mt-1">Select your preferred method to add Canadian Dollars to your Peniwyse wallet.</p>
                </div>

                <div className="space-y-4">
                    {methods.map((method) => (
                        <a
                            key={method.id}
                            href={method.active ? method.href : '#'}
                            className={`block p-6 rounded-[32px] border transition-all ${method.active
                                    ? "bg-white border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/5 group"
                                    : "bg-slate-100/50 border-slate-200 opacity-70 cursor-not-allowed"
                                }`}
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex gap-4">
                                    <div className={`h-12 w-12 rounded-2xl flex items-center justify-center shrink-0 ${method.active ? "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors" : "bg-slate-200 text-slate-400"
                                        }`}>
                                        {method.icon}
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <h3 className="font-bold text-slate-900">{method.title}</h3>
                                            {!method.active && (
                                                <span className="text-[10px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded-md bg-slate-200 text-slate-500">Coming Soon</span>
                                            )}
                                        </div>
                                        <p className="text-sm text-slate-500 leading-snug">{method.desc}</p>

                                        <div className="mt-4 flex items-center gap-4">
                                            <div className="flex items-center gap-1.5">
                                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">ETA</span>
                                                <span className="text-xs font-bold text-slate-700">{method.eta}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Fee</span>
                                                <span className="text-xs font-bold text-emerald-600">{method.fee}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {method.active && (
                                    <div className="h-8 w-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14m-7-7 7 7-7 7" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        </a>
                    ))}
                </div>

                {/* Security / Compliance Note */}
                <div className="mt-12 p-6 rounded-[32px] bg-slate-900 text-white">
                    <div className="flex items-start gap-4">
                        <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="font-bold text-sm">FINTRAC Regulated</h4>
                            <p className="text-xs text-white/60 mt-1 leading-relaxed">
                                Peniwyse is a registered Money Services Business (MSB). All funding methods comply with Canadian AML/KYC regulations. For first-time funding, additional verification may be required.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
