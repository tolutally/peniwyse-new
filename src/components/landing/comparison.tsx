'use client';

import React from 'react';

export default function Comparison() {
    const rows = [
        { label: 'FX spread', traditional: '2–4% baked into the rate', peniwyse: 'Transparent, competitive conversion' },
        { label: 'Speed', traditional: '“3–5 business days” roulette', peniwyse: 'Near-instant settlement' },
        { label: 'Control', traditional: 'Bank decides when & how', peniwyse: 'You convert when it makes sense' },
        { label: 'Reliability', traditional: 'Holds, limits, random reviews', peniwyse: 'Built for cross-border realities' },
        { label: 'Transparency', traditional: 'Fees, spreads, and rules are opaque', peniwyse: 'Clear pricing, clear rules' },
        { label: 'Experience', traditional: 'Paperwork, phone calls, anxiety', peniwyse: 'Modern, self-serve, predictable' },
        { label: 'True cost over time', traditional: 'Quietly expensive year after year', peniwyse: 'Keeps more of your real value intact' }
    ];

    return (
        <section className="px-6 md:px-16 py-24 relative z-20 overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent"></div>

            <div className="max-w-5xl mx-auto text-center mb-16 relative z-10 glass-text-plate p-8 md:p-10">
                <span className="inline-flex items-center px-3 py-1 text-[10px] font-semibold rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 uppercase tracking-[0.15em] mb-6">
                    Comparison
                </span>
                <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-6">
                    Have you been penny wise,<br /> <span className="text-indigo-600">dollar foolish with FX?</span>
                </h2>
                <p className="text-base text-neutral-500 max-w-2xl mx-auto leading-relaxed">
                    Traditional Canadian FX rails look “safe” on the surface, but slow transfers, hidden spreads, and blocked withdrawals quietly cost you real money.
                    Peniwyse uses compliant USDC rails so you keep more of what you earn.
                </p>
            </div>

            {/* Comparison table */}
            <div className="max-w-5xl mx-auto bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-2xl shadow-neutral-900/5 relative z-10">
                <div className="grid grid-cols-3 text-xs md:text-sm font-medium bg-neutral-50 border-b border-neutral-200">
                    <div className="px-4 py-3 text-left text-neutral-400"> </div>
                    <div className="px-4 py-3 text-center text-neutral-400 uppercase tracking-wider text-[10px]">Traditional FX / Banks</div>
                    <div className="px-4 py-3 text-center text-indigo-600 uppercase tracking-wider text-[10px] font-bold">Peniwyse USDC Rails</div>
                </div>

                <div className="divide-y divide-neutral-100 text-xs md:text-sm">
                    {rows.map((row, index) => (
                        <div key={index} className={`grid grid-cols-3 hover:bg-neutral-50 transition-colors ${index % 2 === 1 ? 'bg-neutral-50/50' : ''}`}>
                            <div className="px-4 py-4 text-left text-neutral-600 font-medium">{row.label}</div>
                            <div className="px-4 py-4 text-center text-neutral-500">{row.traditional}</div>
                            <div className="px-4 py-4 text-center text-neutral-900 font-medium">{row.peniwyse}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
