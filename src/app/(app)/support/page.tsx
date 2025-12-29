'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

// app/(app)/support/page.tsx
// Peniwyse — Support center and ticket management

export default function SupportPage() {
    const router = useRouter();
    const [showNewTicket, setShowNewTicket] = useState(false);

    const categories = [
        { id: 'funding', title: 'CAD Funding', desc: 'Issues with e-Transfer or EFT deposits.', icon: '💰' },
        { id: 'withdrawal', title: 'Withdrawals', desc: 'Questions about bank settlement or ETAs.', icon: '🏦' },
        { id: 'conversion', title: 'Conversions', desc: 'Disputes regarding rates or swap status.', icon: '🔄' },
        { id: 'deposit', title: 'USDC Deposits', desc: 'Incoming chain monitoring or confirmation issues.', icon: '🔵' },
    ];

    const tickets = [
        { id: 'TKT-1082', subject: 'e-Transfer not appearing', Category: 'Funding', status: 'In Review', date: '2 hours ago' },
        { id: 'TKT-0941', subject: 'KYC Tier 2 Verification', Category: 'Account', status: 'Resolved', date: 'Dec 18, 2025' },
    ];

    return (
        <div className="min-h-screen bg-slate-50 p-4 sm:p-8 font-sans">
            <div className="max-w-4xl mx-auto">
                {/* Breadcrumb */}
                <div className="mb-6">
                    <a href="/dashboard" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors group">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 transition-transform group-hover:-translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m15 18-6-6 6-6" />
                        </svg>
                        Dashboard
                    </a>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Support Center</h1>
                        <p className="text-slate-500 text-sm mt-1">We're here to help move your value safely.</p>
                    </div>
                    <button
                        onClick={() => setShowNewTicket(true)}
                        className="bg-slate-900 text-white px-6 py-3 rounded-2xl font-bold text-sm hover:bg-slate-800 shadow-xl shadow-slate-200 transition-all flex items-center gap-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                        Open New Ticket
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Categories */}
                    <div className="lg:col-span-2 space-y-4">
                        <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1 mb-4">Help Categories</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => router.push(`/support/disputes/new?category=${cat.id}`)}
                                    className="bg-white border border-slate-200 rounded-[32px] p-6 text-left hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/5 transition-all group"
                                >
                                    <div className="h-12 w-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-2xl mb-4 group-hover:bg-blue-50 transition-colors">
                                        {cat.icon}
                                    </div>
                                    <h3 className="font-bold text-slate-900 mb-1">{cat.title}</h3>
                                    <p className="text-xs text-slate-500 leading-relaxed font-medium">{cat.desc}</p>
                                </button>
                            ))}
                        </div>

                        {/* Help Articles Mockup */}
                        <div className="mt-12">
                            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1 mb-4">Common Questions</h2>
                            <div className="bg-white border border-slate-200 rounded-[32px] overflow-hidden">
                                <div className="divide-y divide-slate-100">
                                    <FAQItem title="How long do e-Transfers take?" />
                                    <FAQItem title="What are the maximum withdrawal limits?" />
                                    <FAQItem title="Is Peniwyse an MSB registered company?" />
                                    <FAQItem title="How do I verify for Tier 2 access?" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Active Tickets Sidebar */}
                    <div className="space-y-4">
                        <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1 mb-4">My Tickets</h2>
                        <div className="space-y-3">
                            {tickets.map((t) => (
                                <a
                                    key={t.id}
                                    href={`/support/tickets/${t.id}`}
                                    className="block bg-white border border-slate-200 rounded-3xl p-5 hover:border-slate-300 transition-all shadow-sm group"
                                >
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">{t.id}</span>
                                        <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-md ${t.status === 'Resolved' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'
                                            }`}>
                                            {t.status}
                                        </span>
                                    </div>
                                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{t.subject}</h4>
                                    <div className="mt-4 flex items-center justify-between">
                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t.Category}</span>
                                        <span className="text-[10px] text-slate-400 font-medium">{t.date}</span>
                                    </div>
                                </a>
                            ))}

                            <div className="p-6 border border-slate-200 border-dashed rounded-[32px] text-center">
                                <p className="text-xs text-slate-400 font-medium">Average response time: <br /><span className="text-slate-900">~15 minutes</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* New Ticket Modal Overflow */}
            {showNewTicket && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setShowNewTicket(false)} />
                    <div className="relative w-full max-w-lg bg-white rounded-[40px] shadow-2xl p-8 animate-in zoom-in-95 duration-300">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-xl font-bold text-slate-900 text-center flex-1">Open Support Ticket</h2>
                            <button onClick={() => setShowNewTicket(false)} className="h-8 w-8 rounded-full hover:bg-slate-100 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                            </button>
                        </div>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Issue Category</label>
                                <select className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-sm font-semibold text-slate-900 outline-none">
                                    <option>Select a category...</option>
                                    <option>CAD Funding</option>
                                    <option>Withdrawals</option>
                                    <option>Asset Conversions</option>
                                    <option>General Support</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Subject</label>
                                <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-sm font-semibold text-slate-900 outline-none" placeholder="Briefly describe the issue" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Message</label>
                                <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-sm font-semibold text-slate-900 outline-none resize-none" placeholder="Provide details (e.g. Reference IDs, timestamps)" />
                            </div>
                            <div className="pt-4">
                                <button className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold shadow-xl shadow-slate-200 hover:bg-slate-800 transition-all">
                                    Submit Ticket
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

function FAQItem({ title }: { title: string }) {
    return (
        <button className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50/50 transition-colors group">
            <span className="text-sm font-bold text-slate-700 group-hover:text-blue-600 transition-colors">{title}</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
        </button>
    );
}
