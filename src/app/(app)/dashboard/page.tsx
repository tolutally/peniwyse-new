'use client';

// app/(app)/dashboard/page.tsx
// Peniwyse — Light dashboard (USDC rails) in Next.js
// Drop-in UI: uses Tailwind classes only. Replace mock data with real props later.

export default function DashboardPage() {
    const user = { name: "Alex", tier: "Verified" as const };
    const balances = {
        cad: 12450.22,
        usdc: 3200.5,
        totalCadApprox: 12450.22 + 3200.5 * 1.36, // mock rate
    };
    const rate = { cadPerUsdc: 1.36, feePct: 0.75 };

    const recentTx = [
        { title: "CAD Funding (e-Transfer)", meta: "Today • 9:24 AM", amount: "+$1,250.00 CAD", tone: "pos" as const },
        { title: "Convert CAD → USDC", meta: "Yesterday • 3:42 PM", amount: "+920.00 USDC", tone: "pos" as const },
        { title: "Withdraw to Bank (EFT)", meta: "Dec 20, 2025 • 1:18 PM", amount: "-$600.00 CAD", tone: "neg" as const },
    ];

    return (
        <div className="border border-slate-200/70 rounded-[28px] mx-auto shadow-[0_18px_70px_-18px_rgba(15,23,42,0.22)] bg-white/80 backdrop-blur-xl">
            {/* Content grid */}
            <div className="grid grid-cols-12">
                {/* Sidebar */}
                <aside className="col-span-12 md:col-span-3 lg:col-span-3 border-r border-slate-200/70 bg-white/50">
                    <div className="p-4 sm:p-6">
                        {/* Branding */}
                        <div className="flex items-center gap-3 mb-8 px-1">
                            <div className="h-9 w-9 rounded-xl bg-slate-900 flex items-center justify-center text-white font-bold shadow-lg shadow-slate-200">
                                P
                            </div>
                            <div>
                                <h1 className="text-xl font-bold tracking-tight text-slate-900 leading-none">Peniwyse</h1>
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">USDC Rails</p>
                            </div>
                        </div>

                        {/* Profile */}
                        <div className="mb-6 group">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="h-10 w-10 rounded-lg border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
                                    <span className="text-sm font-semibold text-slate-700">PW</span>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-slate-900">{user.name}</p>
                                    <div className="flex items-center gap-2">
                                        <p className="text-xs text-slate-500">{user.tier} account</p>
                                        <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[11px] text-emerald-700">
                                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                            Compliance OK
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Status chip */}
                            <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2">
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-blue-500" />
                                    <p className="text-xs text-slate-700">Network: Base (USDC)</p>
                                </div>
                                <a className="text-xs text-slate-500 hover:text-slate-700" href="/settings">
                                    Change
                                </a>
                            </div>
                        </div>

                        <nav className="space-y-6">
                            <div>
                                <p className="mb-2 text-xs uppercase tracking-wider text-slate-500">Overview</p>
                                <ul className="space-y-1">
                                    <li>
                                        <a
                                            href="/dashboard"
                                            className="group flex items-center gap-3 text-sm rounded-lg px-3 py-2 text-slate-900 bg-slate-100 border border-slate-200"
                                        >
                                            <IconGrid />
                                            Dashboard
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/wallet"
                                            className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                                        >
                                            <IconWallet />
                                            Wallet
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/transactions"
                                            className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                                        >
                                            <IconArrowDown />
                                            Transactions
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <p className="mb-2 text-xs uppercase tracking-wider text-slate-500">Rails</p>
                                <ul className="space-y-1">
                                    <li>
                                        <a
                                            href="/fund"
                                            className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                                        >
                                            <IconBank />
                                            Fund CAD
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/convert"
                                            className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                                        >
                                            <IconSwap />
                                            Convert CAD ↔ USDC
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/receive"
                                            className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                                        >
                                            <IconReceive />
                                            Receive USDC
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/withdraw"
                                            className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                                        >
                                            <IconWithdraw />
                                            Withdraw CAD
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <p className="mb-2 text-xs uppercase tracking-wider text-slate-500">Trust</p>
                                <ul className="space-y-1">
                                    <li>
                                        <a
                                            href="/fees"
                                            className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                                        >
                                            <IconTag />
                                            Fees & live quote
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/statements"
                                            className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                                        >
                                            <IconDoc />
                                            Statements
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/support"
                                            className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                                        >
                                            <IconHelp />
                                            Support & disputes
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </aside>

                {/* Main */}
                <section className="col-span-12 md:col-span-9 lg:col-span-9">
                    <div className="min-h-[720px] flex flex-col">
                        <div className="flex-1 overflow-y-auto px-4 py-8 sm:px-8 space-y-6">
                            {/* Header */}
                            <div>
                                <h2 className="text-2xl mb-1 tracking-tighter text-slate-900">Welcome back, {user.name}</h2>
                                <p className="text-sm text-slate-600">Move CAD ⇄ USDC, receive globally, and withdraw to Canadian banks.</p>
                            </div>

                            {/* Quick actions */}
                            <div>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                    <QuickAction href="/fund" label="Fund CAD" icon={<IconPlus />} />
                                    <QuickAction href="/convert" label="Convert" icon={<IconSwap />} />
                                    <QuickAction href="/withdraw" label="Withdraw" icon={<IconWithdraw />} />
                                    <QuickAction href="/statements" label="Statements" icon={<IconDoc />} />
                                </div>
                            </div>

                            {/* KPI cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <Card
                                    label="Total (est.)"
                                    value={`$${money(balances.totalCadApprox)} CAD`}
                                    sub={
                                        <span className="text-xs text-slate-500">
                                            CAD + USDC @ {rate.cadPerUsdc.toFixed(2)} CAD/USDC
                                        </span>
                                    }
                                    icon={<IconSpark />}
                                    iconClass="text-emerald-600"
                                />
                                <Card
                                    label="CAD balance"
                                    value={`$${money(balances.cad)} CAD`}
                                    sub={<span className="text-xs text-slate-500">Available to fund/withdraw</span>}
                                    icon={<IconBank />}
                                    iconClass="text-blue-600"
                                />
                                <Card
                                    label="USDC balance"
                                    value={`${money(balances.usdc)} USDC`}
                                    sub={<span className="text-xs text-slate-500">Receive & convert anytime</span>}
                                    icon={<IconCoin />}
                                    iconClass="text-slate-700"
                                />
                            </div>

                            {/* Live quote + Receive */}
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                                <div className="lg:col-span-2 rounded-xl border border-slate-200 bg-white p-4">
                                    <div className="flex items-center justify-between mb-3">
                                        <div>
                                            <p className="text-sm font-semibold text-slate-900">Live quote</p>
                                            <p className="text-xs text-slate-500">Transparent fees. No surprises.</p>
                                        </div>
                                        <a href="/fees" className="text-sm text-slate-600 hover:text-slate-900">
                                            View fees
                                        </a>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                        <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                                            <p className="text-xs text-slate-500">Rate</p>
                                            <p className="text-base font-semibold text-slate-900">{rate.cadPerUsdc.toFixed(2)} CAD/USDC</p>
                                        </div>
                                        <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                                            <p className="text-xs text-slate-500">Conversion fee</p>
                                            <p className="text-base font-semibold text-slate-900">{rate.feePct.toFixed(2)}%</p>
                                        </div>
                                        <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                                            <p className="text-xs text-slate-500">Estimated ETA</p>
                                            <p className="text-base font-semibold text-slate-900">1–5 min</p>
                                        </div>
                                    </div>

                                    <div className="mt-4 flex flex-col sm:flex-row gap-3">
                                        <a
                                            href="/convert"
                                            className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-900 hover:bg-slate-50"
                                        >
                                            <IconSwap />
                                            Convert now
                                        </a>
                                        <a
                                            href="/fund"
                                            className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm text-white hover:bg-slate-800"
                                        >
                                            <IconPlus />
                                            Fund CAD
                                        </a>
                                    </div>
                                </div>

                                <div className="rounded-xl border border-slate-200 bg-white p-4">
                                    <div className="flex items-center justify-between mb-3">
                                        <div>
                                            <p className="text-sm font-semibold text-slate-900">Receive USDC</p>
                                            <p className="text-xs text-slate-500">Deposit address</p>
                                        </div>
                                        <a href="/receive" className="text-sm text-slate-600 hover:text-slate-900">
                                            Open
                                        </a>
                                    </div>

                                    <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                                        <p className="text-[11px] text-slate-500 mb-1">USDC address (Base)</p>
                                        <div className="flex items-center justify-between gap-2">
                                            <code className="text-xs text-slate-800 break-all">
                                                0x3A7b...91F2
                                            </code>
                                            <button className="shrink-0 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-900 hover:bg-slate-50">
                                                Copy
                                            </button>
                                        </div>
                                    </div>

                                    <div className="mt-3 rounded-lg border border-amber-200 bg-amber-50 p-3">
                                        <p className="text-xs text-amber-900 font-medium">Heads up</p>
                                        <p className="text-xs text-amber-800 mt-1">
                                            Only send <span className="font-semibold">USDC</span> on <span className="font-semibold">Base</span> to this address.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Recent transactions */}
                            <div className="rounded-xl border border-slate-200 bg-white">
                                <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200">
                                    <h3 className="text-sm font-semibold text-slate-900">Recent activity</h3>
                                    <a href="/transactions" className="text-sm text-slate-600 hover:text-slate-900">
                                        View all
                                    </a>
                                </div>

                                <div className="p-4 space-y-2">
                                    {recentTx.map((tx, idx) => (
                                        <div key={idx} className="flex items-center justify-between rounded-lg border border-slate-200 bg-white p-4">
                                            <div className="flex items-center gap-3">
                                                <div className="h-10 w-10 rounded-lg border border-slate-200 bg-slate-50 flex items-center justify-center">
                                                    <IconActivity />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-medium text-slate-900">{tx.title}</p>
                                                    <p className="text-xs text-slate-500">{tx.meta}</p>
                                                </div>
                                            </div>
                                            <p className={`text-sm font-semibold ${tx.tone === "pos" ? "text-emerald-700" : "text-slate-900"}`}>
                                                {tx.amount}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Support tip */}
                            <div className="rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-4">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <p className="text-sm font-semibold text-slate-900">Need help?</p>
                                        <p className="text-sm text-slate-600 mt-1">
                                            Open a ticket for funding delays, withdrawals, or disputed transactions. We’ll respond with clear timestamps and next steps.
                                        </p>
                                    </div>
                                    <a
                                        href="/support"
                                        className="shrink-0 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 hover:bg-slate-50"
                                    >
                                        Contact support
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

/* ---------- Small UI helpers (inline for a single-file drop-in) ---------- */

function Card({
    label,
    value,
    sub,
    icon,
    iconClass,
}: {
    label: string;
    value: string;
    sub?: React.ReactNode;
    icon: React.ReactNode;
    iconClass?: string;
}) {
    return (
        <div className="rounded-xl border border-slate-200 bg-white p-4">
            <div className="flex items-center justify-between mb-2">
                <p className="text-xs uppercase tracking-wider text-slate-500">{label}</p>
                <span className={`w-4 h-4 ${iconClass ?? "text-slate-700"}`}>{icon}</span>
            </div>
            <p className="text-2xl mb-1 tracking-tighter text-slate-900">{value}</p>
            {sub}
        </div>
    );
}

function QuickAction({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
    return (
        <a
            href={href}
            className="rounded-lg border border-slate-200 bg-white p-4 hover:bg-slate-50 transition flex flex-col items-center justify-center text-center"
        >
            <span className="w-6 h-6 text-slate-700 mb-2">{icon}</span>
            <p className="text-xs text-slate-700">{label}</p>
        </a>
    );
}

function money(n: number) {
    // no Intl to keep it dead-simple for drop-in; swap to Intl.NumberFormat later
    const s = Math.round(n * 100) / 100;
    return s.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

/* ---------- Tiny inline icons (no deps) ---------- */

function IconPlus() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v20" />
            <path d="M2 12h20" />
        </svg>
    );
}
function IconDots() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="1" />
            <circle cx="19" cy="12" r="1" />
            <circle cx="5" cy="12" r="1" />
        </svg>
    );
}
function IconGrid() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect width="7" height="9" x="3" y="3" rx="1" />
            <rect width="7" height="5" x="14" y="3" rx="1" />
            <rect width="7" height="9" x="14" y="12" rx="1" />
            <rect width="7" height="5" x="3" y="16" rx="1" />
        </svg>
    );
}
function IconWallet() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
            <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
            <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
        </svg>
    );
}
function IconArrowDown() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" x2="12" y1="15" y2="3" />
        </svg>
    );
}
function IconBank() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 10h18" />
            <path d="M5 10V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3" />
            <path d="M6 10v9" />
            <path d="M10 10v9" />
            <path d="M14 10v9" />
            <path d="M18 10v9" />
            <path d="M4 19h16" />
        </svg>
    );
}
function IconSwap() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 7h12" />
            <path d="M16 3l4 4-4 4" />
            <path d="M16 17H4" />
            <path d="M8 21l-4-4 4-4" />
        </svg>
    );
}
function IconReceive() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" x2="12" y1="15" y2="3" />
        </svg>
    );
}
function IconWithdraw() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" x2="12" y1="3" y2="15" />
        </svg>
    );
}
function IconTag() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.59 13.41 11 3H4v7l9.59 9.59a2 2 0 0 0 2.83 0l4.17-4.17a2 2 0 0 0 0-2.83Z" />
            <circle cx="7.5" cy="7.5" r="1.5" />
        </svg>
    );
}
function IconDoc() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
            <path d="M14 2v6h6" />
            <path d="M8 13h8" />
            <path d="M8 17h8" />
        </svg>
    );
}
function IconHelp() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <path d="M12 17h.01" />
        </svg>
    );
}
function IconSpark() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2l1.6 5.4L19 9l-5.4 1.6L12 16l-1.6-5.4L5 9l5.4-1.6L12 2Z" />
            <path d="M5 19l.8-2.6L8 15.6l-2.6-.8L5 12.2l-.8 2.6-2.6.8 2.6.8L5 19Z" />
        </svg>
    );
}
function IconCoin() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M9 10c0-1.1 1.3-2 3-2s3 .9 3 2-1.3 2-3 2-3 .9-3 2 1.3 2 3 2 3-.9 3-2" />
            <path d="M12 7v10" />
        </svg>
    );
}
function IconActivity() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 12h4l2-7 4 14 2-7h6" />
        </svg>
    );
}
