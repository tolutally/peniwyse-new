'use client';

// app/(app)/fees/page.tsx
// Peniwyse — Transparent common questions & fee schedule

export default function FeesPage() {
    const feeItems = [
        { title: "Conversion Fee (Spread)", value: "0.25%", desc: "The weighted average spread applied to the current mid-market rate." },
        { title: "Flat Rails Fee", value: "$0.50 CAD / USDC", desc: "Covers the administrative and processing costs of our liquidity partners." },
        { title: "USDC Network Cost", value: "≈ 0.10 USDC", desc: "Estimated transaction fee for the Base network. Subject to gas volatility." },
        { title: "e-Transfer Funding", value: "$0.00", desc: "Funding your account via Canadian e-Transfer is completely free." },
        { title: "Bank Withdrawal (EFT)", value: "$1.50 CAD", desc: "Flat fee for moving funds back to any major Canadian bank." },
    ];

    return (
        <div className="min-h-screen bg-slate-50 p-4 sm:p-8">
            <div className="max-w-3xl mx-auto">
                {/* Navigation Breadcrumb */}
                <div className="mb-6">
                    <a href="/dashboard" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors group">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 transition-transform group-hover:-translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m15 18-6-6 6-6" />
                        </svg>
                        Dashboard
                    </a>
                </div>

                <div className="mb-10">
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">Transparent Fees</h1>
                    <p className="text-slate-500 text-sm mt-1 max-w-sm">No hidden markups. We prioritize clarity and fair movement of value.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                    {feeItems.map((item, idx) => (
                        <div key={idx} className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                                <span className="text-blue-600 font-bold text-lg">{item.value}</span>
                            </div>
                            <p className="text-xs text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* How it works Section */}
                <div className="bg-slate-900 text-white rounded-[40px] p-8 sm:p-12">
                    <h2 className="text-2xl font-bold mb-8">How our quote works</h2>
                    <div className="space-y-8">
                        <div className="flex gap-4">
                            <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 font-bold text-sm">1</div>
                            <div>
                                <h4 className="font-bold mb-1">Live Aggregate Rate</h4>
                                <p className="text-sm text-white/60 leading-relaxed">We source rates from multiple liquidity providers and aggregate them to provide the most competitive mid-market rate for CAD and USDC.</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 font-bold text-sm">2</div>
                            <div>
                                <h4 className="font-bold mb-1">Rate Locking Mechanism</h4>
                                <p className="text-sm text-white/60 leading-relaxed">Cryptocurrency prices move fast. When you request a quote, we "lock" that rate for 30 seconds to give you time to finalize the transaction without surprises.</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 font-bold text-sm">3</div>
                            <div>
                                <h4 className="font-bold mb-1">Instant Settlement</h4>
                                <p className="text-sm text-white/60 leading-relaxed">Once you confirm, the conversion happens instantly on our rails. Funds are typically available in your wallet within minutes of completion.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Help Center CTA */}
                <div className="mt-12 text-center p-8 rounded-[40px] border border-slate-200 border-dashed">
                    <h3 className="text-lg font-bold text-slate-900">Still have questions?</h3>
                    <p className="text-sm text-slate-500 mt-2 mb-6">Our support team is ready to help with any complex fee inquiries.</p>
                    <a href="/support" className="inline-flex px-8 py-3 bg-white border border-slate-200 rounded-2xl font-bold text-sm text-slate-900 hover:bg-slate-50 transition-colors">
                        Contact Dispute Support
                    </a>
                </div>
            </div>
        </div>
    );
}
