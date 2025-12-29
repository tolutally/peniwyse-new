'use client';

import { useState } from 'react';

// app/(app)/withdraw/bank/page.tsx
// Peniwyse — Contact management for withdrawals

export default function BankContactsPage() {
    const [showAdd, setShowAdd] = useState(false);
    const [contacts, setContacts] = useState([
        { id: '0', name: 'Alex Chen (Self)', email: 'alex.chen@example.ca', bank: 'TD Canada Trust' },
        { id: '1', name: 'Mom', email: 'elaine.c@provider.ca', bank: 'RBC Royal Bank' },
    ]);

    return (
        <div className="min-h-screen bg-slate-50 p-4 sm:p-8">
            <div className="max-w-2xl mx-auto">
                <div className="mb-8 flex items-center justify-between">
                    <div>
                        <a href="/withdraw" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors group mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 transition-transform group-hover:-translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m15 18-6-6 6-6" />
                            </svg>
                            Withdraw
                        </a>
                        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Saved Recipients</h1>
                        <p className="text-slate-500 text-sm mt-1">Manage your Interac e-Transfer contacts.</p>
                    </div>
                    <button
                        onClick={() => setShowAdd(true)}
                        className="bg-blue-600 text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all flex items-center gap-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                        Add Contact
                    </button>
                </div>

                <div className="space-y-3">
                    {contacts.map((contact) => (
                        <div key={contact.id} className="bg-white border border-slate-200 rounded-3xl p-5 shadow-sm flex items-center justify-between group hover:border-slate-300 transition-all">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 font-bold group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                    {contact.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900">{contact.name}</h3>
                                    <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                                        <span>{contact.email}</span>
                                        <span className="h-1 w-1 rounded-full bg-slate-200" />
                                        <span>{contact.bank}</span>
                                    </div>
                                </div>
                            </div>
                            <button className="h-10 w-10 flex items-center justify-center rounded-xl text-slate-400 hover:bg-slate-50 hover:text-slate-900 transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1" /><circle cx="12" cy="5" r="1" /><circle cx="12" cy="19" r="1" /></svg>
                            </button>
                        </div>
                    ))}
                </div>

                {/* Empty state hint */}
                <p className="mt-8 text-center text-xs text-slate-400 font-medium">
                    Trusted contacts allow for faster processing and lower security flagging.
                </p>

                {/* Add Contact Modal Placeholder */}
                {showAdd && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-300" onClick={() => setShowAdd(false)} />
                        <div className="relative w-full max-w-md bg-white rounded-[40px] shadow-2xl p-8 animate-in zoom-in-95 duration-300">
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-xl font-bold text-slate-900 text-center flex-1">New Recipient</h2>
                                <button onClick={() => setShowAdd(false)} className="h-8 w-8 rounded-full hover:bg-slate-100 flex items-center justify-center transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                                </button>
                            </div>

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-sm font-semibold text-slate-900 outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500" placeholder="e.g. John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Interac Email</label>
                                    <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-sm font-semibold text-slate-900 outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500" placeholder="e.g. name@bank.ca" />
                                </div>
                                <div className="pt-4">
                                    <button className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold shadow-xl shadow-slate-200 hover:bg-slate-800 transition-all">
                                        Save Contact
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
