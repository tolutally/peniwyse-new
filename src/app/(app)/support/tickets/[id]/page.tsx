'use client';

import { useParams } from 'next/navigation';

// app/(app)/support/tickets/[id]/page.tsx
// Peniwyse — Support Ticket Detailed View & Messaging

export default function TicketDetailPage() {
    const params = useParams();
    const ticketId = params.id as string;

    const messages = [
        {
            role: 'user',
            name: 'Alex Chen',
            content: "Hi, I sent an e-Transfer about 4 hours ago with reference PW-8291-CAD but it hasn't reflected in my CAD balance yet. Can you please check the status?",
            time: 'Today, 10:15 AM'
        },
        {
            role: 'system',
            name: 'Peniwyse Support',
            content: "Hello Alex, thank you for reaching out. We've located your transfer. It's currently in our 'Pending Review' queue because the sender name on the transfer slightly differs from your verified KYC name. Our compliance team is manually approving it now.",
            time: 'Today, 10:42 AM'
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 p-4 sm:p-8 font-sans">
            <div className="max-w-4xl mx-auto">
                {/* Navigation Breadcrumb */}
                <div className="mb-6 flex items-center justify-between">
                    <a href="/support" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors group">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 transition-transform group-hover:-translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m15 18-6-6 6-6" />
                        </svg>
                        Support Tickets
                    </a>
                    <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Status:</span>
                        <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-md bg-amber-50 text-amber-700">In Review</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Message Thread */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-white border border-slate-200 rounded-[40px] shadow-sm overflow-hidden flex flex-col h-[600px]">
                            {/* Ticket Header */}
                            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                                <div>
                                    <h2 className="text-sm font-bold text-slate-900">e-Transfer not appearing</h2>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Ticket ID: {ticketId}</p>
                                </div>
                                <button className="text-xs font-bold text-slate-400 hover:text-slate-900 transition-colors uppercase tracking-widest">Close Ticket</button>
                            </div>

                            {/* Messages Scroll Area */}
                            <div className="flex-1 overflow-y-auto p-6 space-y-8">
                                {messages.map((msg, idx) => (
                                    <div key={idx} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                                        <div className={`max-w-[85%] rounded-[24px] p-5 ${msg.role === 'user'
                                                ? 'bg-slate-900 text-white rounded-tr-none'
                                                : 'bg-slate-100 text-slate-900 rounded-tl-none border border-slate-200/50'
                                            }`}>
                                            <p className="text-sm leading-relaxed">{msg.content}</p>
                                        </div>
                                        <p className="mt-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest mx-1">
                                            {msg.name} • {msg.time}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Reply Input */}
                            <div className="p-6 border-t border-slate-100 bg-white">
                                <div className="relative">
                                    <textarea
                                        rows={1}
                                        placeholder="Type your message..."
                                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 pr-16 text-sm font-semibold text-slate-900 outline-none resize-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500"
                                    />
                                    <button className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-xl bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-all shadow-lg shadow-blue-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13" /><path d="M22 2l-7 20-4-9-9-4 20-7z" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Info */}
                    <div className="space-y-6">
                        <div className="bg-white border border-slate-200 rounded-[32px] p-6 shadow-sm">
                            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Linked Transaction</h3>
                            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 flex items-center justify-between group cursor-pointer hover:border-slate-200 transition-all">
                                <div>
                                    <p className="text-xs font-bold text-slate-900">PW-8291-CAD</p>
                                    <p className="text-[10px] text-slate-400 font-medium">Interac e-Transfer</p>
                                </div>
                                <div className="text-slate-300 group-hover:text-slate-900 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-900 text-white rounded-[32px] p-6">
                            <h3 className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-4">Support SLA</h3>
                            <div className="space-y-4">
                                <div className="flex gap-3">
                                    <div className="h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                    </div>
                                    <p className="text-xs text-white/70 font-medium">Transaction located</p>
                                </div>
                                <div className="flex gap-3">
                                    <div className="h-5 w-5 rounded-full bg-blue-500 flex items-center justify-center shrink-0 animate-pulse">
                                        <div className="h-1.5 w-1.5 rounded-full bg-white" />
                                    </div>
                                    <p className="text-xs text-white/70 font-medium">Identity verification underway</p>
                                </div>
                                <div className="flex gap-3">
                                    <div className="h-5 w-5 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-[10px] font-bold text-white/30">•</div>
                                    <p className="text-xs text-white/30 font-medium lowercase">Manual rail clearing</p>
                                </div>
                            </div>
                        </div>

                        <p className="text-[10px] text-slate-400 font-medium text-center px-4 leading-relaxed italic">
                            Your ticket is marked high-priority because it involves a pending deposit.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
