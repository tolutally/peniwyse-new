'use client';

// app/(app)/statements/page.tsx
// Peniwyse — Monthly statements list

export default function StatementsPage() {
    const statements = [
        { month: "December", year: "2025", id: "2025-12", status: "Generated" },
        { month: "November", year: "2025", id: "2025-11", status: "Generated" },
        { month: "October", year: "2025", id: "2025-10", status: "Generated" },
        { month: "September", year: "2025", id: "2025-09", status: "Generated" },
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

                <div className="mb-10">
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">Statements</h1>
                    <p className="text-slate-500 text-sm mt-1">Download official monthly records for your tax and accounting needs.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {statements.map((stmt) => (
                        <div key={stmt.id} className="bg-white border border-slate-200 rounded-[32px] p-6 shadow-sm hover:border-slate-300 transition-all group">
                            <div className="flex items-center justify-between mb-6">
                                <div className="h-12 w-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" /><path d="M14 2v6h6" /><path d="M8 13h8" /><path d="M8 17h8" /></svg>
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700">
                                    {stmt.status}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{stmt.month} {stmt.year}</h3>
                            <p className="text-slate-500 text-xs mt-1 mb-6 font-medium">Monthly Portfolio Activity Report</p>

                            <div className="flex items-center gap-2">
                                <a
                                    href={`/statements/${stmt.id}`}
                                    className="flex-1 text-center py-3 rounded-2xl border border-slate-200 text-sm font-bold text-slate-900 hover:bg-slate-50 transition-all"
                                >
                                    View Online
                                </a>
                                <button
                                    className="flex-1 text-center py-3 rounded-2xl bg-slate-900 text-white text-sm font-bold hover:bg-slate-800 transition-all"
                                >
                                    Download PDF
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Info Box */}
                <div className="mt-12 p-6 rounded-[32px] border border-slate-200 border-dashed bg-slate-100/30">
                    <div className="flex gap-4">
                        <div className="h-10 w-10 shrink-0 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 text-sm">Automated Schedule</h4>
                            <p className="text-xs text-slate-500 leading-relaxed mt-1">
                                Statements are generated on the 1st of every month for the previous period. You'll receive an email notification as soon as your latest report is ready.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
