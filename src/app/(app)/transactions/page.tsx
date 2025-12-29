'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useState, Suspense } from 'react';

// app/(app)/transactions/page.tsx
// Peniwyse — Unified Ledger View
// Filters: Type (tabs), Status, Currency

function TransactionsContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const initialTab = searchParams.get('tab') || 'all';
    const initialCurrency = searchParams.get('currency') || 'all';
    const initialStatus = searchParams.get('status') || 'all';

    const [activeTab, setActiveTab] = useState(initialTab);
    const [currencyFilter, setCurrencyFilter] = useState(initialCurrency);
    const [statusFilter, setStatusFilter] = useState(initialStatus);

    const tabs = [
        { id: 'all', label: 'All Activity' },
        { id: 'deposit', label: 'Deposits' },
        { id: 'conversion', label: 'Conversions' },
        { id: 'withdrawal', label: 'Withdrawals' },
    ];

    const allTransactions = [
        {
            id: "tx-PW8291A",
            type: "deposit",
            title: "USDC Deposit",
            meta: "Base Chain • Today, 10:45 AM",
            amount: "450.00",
            currency: "USDC",
            status: "confirmed",
            tone: "pos"
        },
        {
            id: "tx-PW8291B",
            type: "conversion",
            title: "Converted CAD → USDC",
            meta: "Peniwyse Rails • Yesterday, 3:42 PM",
            amount: "920.00",
            currency: "USDC",
            subAmount: "-$1,250.00 CAD",
            status: "completed",
            tone: "pos"
        },
        {
            id: "tx-PW8291C",
            type: "withdrawal",
            title: "Withdrawal to Bank",
            meta: "EFT • Dec 20, 2025, 1:18 PM",
            amount: "600.00",
            currency: "CAD",
            status: "processing",
            tone: "neg"
        },
        {
            id: "tx-PW8291D",
            type: "deposit",
            title: "CAD Funding",
            meta: "e-Transfer • Dec 18, 2025, 9:24 AM",
            amount: "1,250.00",
            currency: "CAD",
            status: "completed",
            tone: "pos"
        },
        {
            id: "tx-PW8291E",
            type: "deposit",
            title: "USDC Deposit",
            meta: "Base Chain • Dec 15, 2025, 4:51 PM",
            amount: "100.00",
            currency: "USDC",
            status: "completed",
            tone: "pos"
        }
    ];

    const filteredTransactions = allTransactions.filter(tx => {
        const matchesTab = activeTab === 'all' || tx.type === activeTab;
        const matchesCurrency = currencyFilter === 'all' || tx.currency === currencyFilter;
        const matchesStatus = statusFilter === 'all' || tx.status === statusFilter;
        return matchesTab && matchesCurrency && matchesStatus;
    });

    return (
        <div className="min-h-screen bg-slate-50 p-4 sm:p-8 font-sans">
            <div className="max-w-5xl mx-auto">
                {/* Breadcrumb for consistency */}
                <div className="mb-6">
                    <a href="/dashboard" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors group">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 transition-transform group-hover:-translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m15 18-6-6 6-6" />
                        </svg>
                        Dashboard
                    </a>
                </div>

                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Activity</h1>
                        <p className="text-slate-500 text-sm mt-1">Unified ledger for all your digital and fiat assets.</p>
                    </div>

                    {/* Secondary Filters */}
                    <div className="flex flex-wrap items-center gap-3">
                        <div className="flex items-center gap-2 p-1 bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                            <button
                                onClick={() => setCurrencyFilter('all')}
                                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${currencyFilter === 'all' ? 'bg-slate-900 text-white' : 'text-slate-500 hover:bg-slate-50'}`}
                            >All</button>
                            <button
                                onClick={() => setCurrencyFilter('CAD')}
                                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${currencyFilter === 'CAD' ? 'bg-slate-900 text-white' : 'text-slate-500 hover:bg-slate-50'}`}
                            >CAD</button>
                            <button
                                onClick={() => setCurrencyFilter('USDC')}
                                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${currencyFilter === 'USDC' ? 'bg-slate-900 text-white' : 'text-slate-500 hover:bg-slate-50'}`}
                            >USDC</button>
                        </div>

                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="bg-white border border-slate-200 rounded-xl px-4 py-2 text-xs font-bold text-slate-900 outline-none shadow-sm focus:ring-2 focus:ring-blue-500/10"
                        >
                            <option value="all">Status: All</option>
                            <option value="completed">Completed</option>
                            <option value="processing">Processing</option>
                            <option value="confirmed">Confirmed</option>
                        </select>

                        <button className="h-9 w-9 flex items-center justify-center bg-white border border-slate-200 rounded-xl text-slate-500 hover:text-slate-900 shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
                        </button>
                    </div>
                </div>

                {/* Primary Type Tabs */}
                <div className="flex items-center gap-1 p-1 bg-slate-200/50 rounded-2xl w-full sm:w-fit mb-8 border border-slate-200/40">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex-1 sm:flex-none px-6 py-2.5 text-sm font-bold rounded-xl transition-all ${activeTab === tab.id ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Unified Table/List */}
                <div className="bg-white border border-slate-200/70 rounded-[32px] overflow-hidden shadow-sm">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50/50 border-b border-slate-100">
                                    <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Transaction</th>
                                    <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest hidden md:table-cell">Status</th>
                                    <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-right">Amount</th>
                                    <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-right w-10"></th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {filteredTransactions.length > 0 ? (
                                    filteredTransactions.map(tx => (
                                        <tr
                                            key={tx.id}
                                            onClick={() => router.push(`/transactions/${tx.id}`)}
                                            className="group hover:bg-slate-50/50 cursor-pointer transition-colors"
                                        >
                                            <td className="px-6 py-5">
                                                <div className="flex items-center gap-4">
                                                    <div className={`h-10 w-10 rounded-xl flex items-center justify-center shrink-0 border ${tx.type === 'deposit' ? 'bg-emerald-50 border-emerald-100 text-emerald-600' :
                                                            tx.type === 'withdrawal' ? 'bg-blue-50 border-blue-100 text-blue-600' :
                                                                'bg-slate-50 border-slate-100 text-slate-600'
                                                        }`}>
                                                        {tx.type === 'deposit' && <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14m7-7-7 7-7-7" /></svg>}
                                                        {tx.type === 'withdrawal' && <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5m-7 7 7-7 7 7" /></svg>}
                                                        {tx.type === 'conversion' && <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m8 3 4 4-4 4m8 10-4-4 4-4" /><path d="M12 7h-1" /><path d="M12 17h-1" /></svg>}
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{tx.title}</p>
                                                        <p className="text-[11px] text-slate-500 font-medium">{tx.meta}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-5 hidden md:table-cell">
                                                <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-md ${tx.status === 'confirmed' || tx.status === 'completed' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                                                    }`}>
                                                    {tx.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-5 text-right">
                                                <p className={`text-sm font-bold tabular-nums ${tx.tone === 'pos' ? 'text-emerald-700' : 'text-slate-900'}`}>
                                                    {tx.tone === 'pos' ? '+' : '-'}{tx.currency === 'CAD' ? '$' : ''}{tx.amount} {tx.currency}
                                                </p>
                                                {tx.subAmount && (
                                                    <p className="text-[10px] text-slate-400 font-medium">{tx.subAmount}</p>
                                                )}
                                            </td>
                                            <td className="px-6 py-5 text-right">
                                                <div className="text-slate-300 group-hover:text-slate-900 transition-colors">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={4} className="px-6 py-20 text-center">
                                            <p className="text-sm text-slate-400 font-medium italic">No transactions found matching your filters.</p>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Footer info */}
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 px-4">
                    <p className="text-xs text-slate-400 font-medium">Viewing last 30 days of activity.</p>
                    <div className="flex items-center gap-6">
                        <a href="/statements" className="text-xs font-bold text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-1.5 underline underline-offset-4 decoration-slate-200">
                            Monthly Statements
                        </a>
                        <a href="/support" className="text-xs font-bold text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-1.5 underline underline-offset-4 decoration-slate-200">
                            Dispute Transaction
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function TransactionsPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-slate-50 flex items-center justify-center font-sans">Loading activity ledger...</div>}>
            <TransactionsContent />
        </Suspense>
    );
}
