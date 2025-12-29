'use client';

import { useParams } from 'next/navigation';

// app/(app)/statements/[id]/page.tsx
// Peniwyse — Detailed monthly statement view

export default function StatementDetailPage() {
    const params = useParams();
    const id = params.id as string;
    const [year, month] = id.split('-');

    const monthNames: Record<string, string> = {
        "12": "December", "11": "November", "10": "October", "09": "September"
    };

    const monthName = monthNames[month] || "Monthly";

    const summary = [
        { label: "Opening CAD Balance", value: "$4,200.00" },
        { label: "Opening USDC Balance", value: "850.20 USDC" },
        { label: "Total CAD Deposits", value: "+$12,500.00" },
        { label: "Total USDC Received", value: "+2,400.00 USDC" },
        { label: "Conversion Volume", value: "$8,950.00 CAD" },
        { label: "Total Fees Paid", value: "$42.30 CAD" },
    ];

    return (
        <div className="min-h-screen bg-slate-50 p-4 sm:p-8 font-sans">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                        <a href="/statements" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors group mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 transition-transform group-hover:-translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m15 18-6-6 6-6" />
                            </svg>
                            All Statements
                        </a>
                        <h1 className="text-3xl font-bold tracking-tight text-slate-900">{monthName} {year} Report</h1>
                    </div>

                    <div className="flex items-center gap-2">
                        <button className="px-6 py-3 bg-slate-900 text-white rounded-2xl font-bold text-sm hover:bg-slate-800 shadow-xl shadow-slate-200 transition-all flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
                            Download PDF
                        </button>
                    </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-[40px] shadow-sm overflow-hidden mb-8">
                    <div className="p-8 sm:p-12">
                        <div className="flex flex-col sm:flex-row justify-between mb-12 gap-8">
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-1">Peniwyse Inc.</h2>
                                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Digital Asset & Rail Statement</p>
                            </div>
                            <div className="text-left sm:text-right">
                                <p className="text-sm font-bold text-slate-900">Alex Chen</p>
                                <p className="text-xs text-slate-500 font-medium leading-relaxed">AccountID: PW-X9218-02<br />alex.chen@example.ca</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {summary.map((item, idx) => (
                                <div key={idx}>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{item.label}</p>
                                    <p className="text-lg font-bold text-slate-900">{item.value}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16">
                            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest border-b border-slate-100 pb-4 mb-4">Summary of Activity</h3>
                            <div className="space-y-4">
                                {/* Mock Table */}
                                <ActivityRow label="CAD Deposits" count={12} total="+$12,500.00" />
                                <ActivityRow label="USDC Received (Base)" count={4} total="+2,400.00 USDC" />
                                <ActivityRow label="CAD -> USDC Conversions" count={8} total="$8,950.00 CAD" />
                                <ActivityRow label="Withdrawals to Bank" count={3} total="-$6,400.00 CAD" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-50 px-8 py-6 border-t border-slate-100 flex items-center justify-between">
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">End of Period: {monthName} 31, {year}</p>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Report GUID: {id}-PW-STMT-91</p>
                    </div>
                </div>

                <div className="p-8 rounded-[40px] border border-slate-200 border-dashed text-center">
                    <p className="text-xs text-slate-500 max-w-lg mx-auto leading-relaxed">
                        This statement is generated for informational and tax reporting purposes. Peniwyse Inc. is a registered MSB with FINTRAC. All digital asset movements on the Base Chain are verifiable on the public ledger.
                    </p>
                </div>
            </div>
        </div>
    );
}

function ActivityRow({ label, count, total }: { label: string, count: number, total: string }) {
    return (
        <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-slate-900">{label}</span>
                <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded uppercase">{count} TXs</span>
            </div>
            <span className="text-sm font-bold text-slate-900 tabular-nums">{total}</span>
        </div>
    );
}
