'use client';

import React from 'react';
import {
    ArrowDownToLine,
    ArrowUpRight,
    Banknote,
    BatteryCharging,
    CreditCard,
    FileText,
    Globe,
    HelpCircle,
    QrCode,
    RefreshCw,
    ShieldCheck,
    Sparkles,
    Timer,
    Wallet,
    Wifi,
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function FeatureGrid() {
    return (
        <section className="px-4 py-16 md:py-32 max-w-7xl mx-auto relative z-20">
            {/* Header Section */}
            <div className="text-center mb-20 space-y-4 glass-text-plate p-8 md:p-12 max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tight text-neutral-900 leading-tight">
                    Spend your stablecoin <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">anywhere, anytime</span>
                </h2>

                <p className="text-lg md:text-xl text-neutral-500 leading-relaxed max-w-2xl mx-auto">
                    Peniwyse gives you compliant USDC rails in Canada so you can finally be wise about both pennies and dollars.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
                {/* Top Left: Core rails card (Peniwyse) */}
                <div className="md:col-span-2 overflow-hidden flex flex-col rounded-3xl p-6 relative justify-between bg-indigo-950 shadow-2xl shadow-indigo-950/20">
                    <div className="flex items-start justify-between gap-4 mb-6">
                        <div>
                            <p className="text-2xl md:text-3xl font-semibold tracking-tight mb-2 text-indigo-50">
                                CAD ⇄ USDC rails, built for speed.
                            </p>
                            <p className="text-sm max-w-md text-indigo-200/80 leading-relaxed">
                                Fund with Canadian rails, convert with a transparent quote, receive USDC globally,
                                and withdraw back to your Canadian bank — with clean transaction history and statements.
                            </p>
                        </div>

                        <div className="hidden sm:flex flex-col items-end gap-1.5">
                            <span className="inline-flex items-center gap-1.5 rounded-full text-[10px] uppercase font-medium tracking-wide px-2.5 py-1 bg-white/5 text-indigo-100 border border-white/10">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#4DE1FF] animate-pulse" />
                                Live quote
                            </span>
                            <span className="inline-flex items-center gap-1.5 rounded-full text-[10px] uppercase font-medium tracking-wide px-2.5 py-1 bg-white/5 text-indigo-100 border border-white/10">
                                <ShieldCheck className="w-3.5 h-3.5 text-[#4DE1FF]" />
                                KYC + monitoring
                            </span>
                        </div>
                    </div>

                    {/* “Core actions” tiles */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        {/* Fund CAD */}
                        <div className="rounded-2xl p-4 flex flex-col justify-between bg-white text-indigo-950 transition hover:translate-y-[-2px]">
                            <div className="flex items-center justify-between mb-3">
                                <div>
                                    <p className="text-[10px] uppercase font-semibold tracking-wider text-indigo-700">Fund CAD</p>
                                    <p className="text-lg font-bold tracking-tight text-indigo-950">$1,250.00</p>
                                </div>
                                <div className="h-8 w-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-700">
                                    <Banknote className="w-4 h-4" />
                                </div>
                            </div>
                            <div className="flex items-center justify-between text-[10px] font-medium">
                                <span className="text-indigo-700/70">e-Transfer / EFT</span>
                                <span className="text-indigo-700 bg-indigo-100 px-1.5 py-0.5 rounded">Ready</span>
                            </div>
                        </div>

                        {/* Convert */}
                        <div className="rounded-2xl p-4 flex flex-col justify-between bg-neutral-950 text-indigo-50 border border-white/10 transition hover:translate-y-[-2px]">
                            <div className="flex items-center justify-between mb-3">
                                <div>
                                    <p className="text-[10px] uppercase font-semibold tracking-wider text-indigo-200">Convert</p>
                                    <p className="text-lg font-bold tracking-tight">CAD → USDC</p>
                                </div>
                                <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-[#4DE1FF]">
                                    <RefreshCw className="w-4 h-4" />
                                </div>
                            </div>
                            <div className="flex items-center justify-between text-[10px] font-medium text-indigo-200/70">
                                <span>Rate locked: 30s</span>
                                <span className="text-[#4DE1FF]">Fee 0.75%</span>
                            </div>
                        </div>

                        {/* Receive */}
                        <div className="rounded-2xl p-4 flex flex-col justify-between bg-indigo-900 text-indigo-50 border border-white/10 transition hover:translate-y-[-2px]">
                            <div className="flex items-center justify-between mb-3">
                                <div>
                                    <p className="text-[10px] uppercase font-semibold tracking-wider text-indigo-200">Receive USDC</p>
                                    <p className="text-lg font-bold tracking-tight">0x3A7b…91F2</p>
                                </div>
                                <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-[#4DE1FF]">
                                    <QrCode className="w-4 h-4" />
                                </div>
                            </div>
                            <div className="flex items-center justify-between text-[10px] font-medium text-indigo-200/70">
                                <span>Network</span>
                                <span className="text-indigo-50 bg-white/10 px-1.5 py-0.5 rounded">Base</span>
                            </div>
                        </div>

                        {/* Withdraw */}
                        <div className="rounded-2xl p-4 flex flex-col justify-between bg-indigo-950 text-indigo-50 border border-white/5 transition hover:translate-y-[-2px]">
                            <div className="flex items-center justify-between mb-3">
                                <div>
                                    <p className="text-[10px] uppercase font-semibold tracking-wider text-indigo-200">Withdraw CAD</p>
                                    <p className="text-lg font-bold tracking-tight">$600.00</p>
                                </div>
                                <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center text-indigo-200">
                                    <ArrowDownToLine className="w-4 h-4" />
                                </div>
                            </div>
                            <div className="flex items-center justify-between text-[10px] font-medium text-indigo-200/70">
                                <span>To bank (EFT)</span>
                                <span className="text-indigo-50 bg-white/10 px-1.5 py-0.5 rounded">1–2 days</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Top Middle: Trust / Security card (instead of portrait) */}
                <div className="relative overflow-hidden flex rounded-3xl items-center justify-center bg-white border border-neutral-200/60 shadow-sm h-[300px] md:h-auto">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(77,225,255,0.25),transparent_45%),radial-gradient(circle_at_90%_40%,rgba(139,124,255,0.18),transparent_55%)]" />
                    <div className="relative z-10 p-6 w-full">
                        <div className="flex items-center gap-2 mb-5">
                            <div className="w-10 h-10 rounded-2xl bg-slate-900 text-white flex items-center justify-center">
                                <ShieldCheck className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-slate-900">Trust-first rails</p>
                                <p className="text-xs text-slate-500">Compliance + clarity by design</p>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <Row label="KYC onboarding" value="Required" accent />
                            <Row label="Sanctions / PEP screening" value="Always on" accent />
                            <Row label="Transaction monitoring" value="Velocity + limits" accent />
                            <Row label="Statements & receipts" value="Monthly PDFs" />
                        </div>

                        <div className="mt-6 flex items-center justify-between rounded-2xl border border-neutral-200/70 bg-white/70 p-4">
                            <div className="flex items-center gap-2">
                                <Timer className="w-4 h-4 text-slate-700" />
                                <p className="text-xs text-slate-600">Audit-ready logs</p>
                            </div>
                            <span className="text-xs font-semibold text-slate-900">Enabled</span>
                        </div>
                    </div>
                </div>

                {/* Top Right: Phone mock (keep style, change content to quote + balances) */}
                <div className="flex flex-col rounded-3xl bg-neutral-50/60 border border-neutral-200/60 backdrop-blur-sm overflow-hidden relative min-h-[400px]">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
                    <div className="relative z-10 p-6 flex flex-col h-full items-center justify-center">
                        <div className="w-full max-w-[220px] bg-white rounded-[2rem] shadow-xl border border-neutral-100 overflow-hidden flex flex-col">
                            {/* Phone Header */}
                            <div className="px-4 pt-3 pb-2 flex items-center justify-between">
                                <span className="text-[8px] font-medium text-neutral-400">9:41</span>
                                <div className="flex gap-1 text-neutral-400">
                                    <Wifi className="w-2.5 h-2.5" />
                                    <BatteryCharging className="w-2.5 h-2.5" />
                                </div>
                            </div>

                            {/* Phone Content */}
                            <div className="flex-1 bg-neutral-50 px-3 pb-4">
                                <div className="mb-3 pt-2">
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="text-[8px] font-bold text-neutral-400 uppercase tracking-wider">Live quote</span>
                                        <span className="text-[8px] font-bold text-[#0EA5E9] bg-sky-50 px-1.5 py-0.5 rounded">
                                            1.36 CAD/USDC
                                        </span>
                                    </div>
                                    <h3 className="text-sm font-bold text-neutral-900">Convert $500 CAD</h3>
                                    <p className="text-[10px] text-neutral-500 mt-1">Fee: 0.75% • Lock: 30s</p>
                                </div>

                                {/* “Quote bars” */}
                                <div className="h-20 w-full flex items-end justify-between gap-1 mb-3">
                                    {[32, 50, 38, 58, 80, 62, 90].map((height, i) => (
                                        <div
                                            key={i}
                                            className="w-full rounded-t-[2px]"
                                            style={{
                                                height: `${height}%`,
                                                background: i >= 4 ? '#4DE1FF' : '#8B7CFF',
                                                opacity: Math.max(0.35, height / 100),
                                            }}
                                        />
                                    ))}
                                </div>

                                <div className="space-y-2">
                                    <MiniRow
                                        icon={<Wallet className="w-3 h-3 text-neutral-700" />}
                                        title="CAD Balance"
                                        badge="$1,240"
                                    />
                                    <MiniRow
                                        icon={<Globe className="w-3 h-3 text-[#0EA5E9]" />}
                                        title="USDC Balance"
                                        badge="452.00"
                                        badgeTone="accent"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Middle Left: Global wallet (keep, adapt) */}
                <div className="rounded-3xl p-6 flex flex-col justify-between bg-indigo-950 text-indigo-50 relative overflow-hidden group min-h-[250px]">
                    <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#4DE1FF]/20 rounded-full blur-2xl group-hover:bg-[#4DE1FF]/30 transition-colors" />
                    <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-8">
                            <div className="w-8 h-8 rounded-full bg-indigo-900 flex items-center justify-center border border-white/10">
                                <Globe className="w-4 h-4 text-[#4DE1FF]" />
                            </div>
                            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-200">USDC Wallet</span>
                        </div>

                        <div className="space-y-1">
                            <h3 className="text-3xl font-bold tracking-tight">452.00</h3>
                            <p className="text-sm text-indigo-200/70">USDC available • Base network</p>
                        </div>
                    </div>

                    <div className="relative z-10 mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="flex -space-x-2">
                                <div className="w-6 h-6 rounded-full bg-indigo-900 border-2 border-indigo-950" />
                                <div className="w-6 h-6 rounded-full bg-sky-900/60 border-2 border-indigo-950" />
                            </div>
                            <span className="text-[10px] text-indigo-200">Monitoring enabled</span>
                        </div>
                        <RefreshCw className="w-4 h-4 text-[#4DE1FF] animate-spin-slow" />
                    </div>
                </div>

                {/* Middle Center: Brand card (Peniwyse positioning) */}
                <div className="md:col-span-2 relative rounded-3xl overflow-hidden p-10 flex flex-col items-center justify-center text-center bg-white border border-neutral-200/60 shadow-sm">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(77,225,255,0.20),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(139,124,255,0.18),transparent_55%)]" />
                    <div className="relative z-10">
                        <img
                            src="/peniwyse-logo.png"
                            alt="Peniwyse"
                            className="h-12 md:h-16 w-auto mx-auto mb-8"
                        />
                        <p className="text-base text-neutral-500 max-w-md mx-auto leading-relaxed">
                            A Canada-first stablecoin rail: fund in CAD, convert with clarity, receive USDC globally,
                            and cash out to your bank — fast.
                        </p>

                    </div>
                </div>

                {/* Middle Right: Product pillars with Rain animation */}
                <div className="flex flex-col rounded-3xl p-6 justify-center items-center bg-indigo-600 shadow-xl shadow-indigo-900/10 min-h-[250px] relative overflow-hidden group">
                    <div className="absolute inset-0 z-0 pointer-events-none">
                        {[
                            'CAD rails',
                            'Transparent fees',
                            'Risk controls',
                            'Live quote',
                            'Fast settlement',
                            'Quick conversion',
                            'USDC receive',
                            'Statements',
                            'CAD funding',
                            'CAD rails', // duplicates for denser rain
                            'Live quote',
                            'Simple UI'
                        ].map((label, i) => (
                            <motion.span
                                key={i}
                                className="absolute px-3 py-1.5 rounded-full bg-white/10 text-white text-[10px] font-medium border border-white/20 whitespace-nowrap"
                                initial={{
                                    top: -20,
                                    left: `${(i * 15) % 90 + Math.random() * 5}%`,
                                    opacity: 0
                                }}
                                animate={{
                                    top: ['-10%', '110%'],
                                    opacity: [0, 1, 1, 0]
                                }}
                                transition={{
                                    duration: 5 + Math.random() * 5,
                                    repeat: Infinity,
                                    delay: i * 0.8,
                                    ease: "linear"
                                }}
                            >
                                {label}
                            </motion.span>
                        ))}
                    </div>

                </div>

                {/* Bottom Left: “Proof” chart (conversion volume / activity) */}
                <div className="flex flex-col rounded-3xl p-6 bg-white border border-neutral-200/60 shadow-sm relative overflow-hidden min-h-[250px]">
                    <div className="flex items-start justify-between mb-8 relative z-10">
                        <div>
                            <p className="text-3xl font-bold tracking-tight text-neutral-900">$4,860</p>
                            <p className="text-xs font-medium text-neutral-500 mt-1">Converted this month (CAD equiv.)</p>
                        </div>
                        <div className="text-right">
                            <span className="block text-[10px] font-bold text-sky-700 bg-sky-50 px-2 py-1 rounded-full">
                                +15%
                            </span>
                        </div>
                    </div>

                    <div className="mt-auto relative z-10 h-32 flex items-end gap-1.5">
                        {[30, 45, 25, 60, 80, 55, 40, 65, 50].map((height, i) => (
                            <div
                                key={i}
                                className={`flex-1 rounded-t-sm transition-colors ${i === 4 ? 'bg-[#4DE1FF] shadow-lg shadow-sky-300/40' : 'bg-neutral-100 hover:bg-slate-200'
                                    }`}
                                style={{ height: `${height}%` }}
                            />
                        ))}
                    </div>
                </div>

                {/* Bottom Middle: Transparency billboard (fees + statements) */}
                <div className="md:col-span-2 rounded-3xl bg-indigo-50 overflow-hidden flex flex-col sm:flex-row min-h-[250px] border border-indigo-100">
                    <div className="p-8 flex-1 flex flex-col justify-center">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-2 h-2 rounded-full bg-[#4DE1FF]" />
                            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-700">Transparent by default</span>
                        </div>
                        <h3 className="text-3xl font-bold text-indigo-950 leading-tight">
                            LIVE QUOTES. <br />
                            <span className="text-indigo-600">CLEAR FEES.</span>
                        </h3>
                        <p className="mt-3 text-sm text-indigo-800/70 max-w-md">
                            See the rate, fee, and estimated arrival time before you confirm. Export statements anytime for trust and audits.
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2">
                            <Pill icon={<FileText className="w-4 h-4" />} label="Monthly statements" />
                            <Pill icon={<CreditCard className="w-4 h-4" />} label="Free deposits and transfers" />
                            <Pill icon={<Sparkles className="w-4 h-4" />} label="Simple to use" />
                        </div>
                    </div>

                    <div className="sm:w-1/2 bg-indigo-100 relative min-h-[200px] sm:min-h-0">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(77,225,255,0.35),transparent_45%)]" />
                        <div className="absolute inset-0 p-8 flex flex-col justify-between">
                            <div className="flex-1 flex flex-col items-center justify-center">
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                    className="text-center group"
                                >
                                    {/* Active Pulse Ring */}
                                    <div className="relative mb-6 mx-auto w-16 h-16">
                                        <div className="absolute inset-0 bg-indigo-500 rounded-2xl blur-lg opacity-20 animate-pulse"></div>
                                        <div className="relative w-full h-full bg-white/80 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/50 shadow-xl shadow-indigo-500/10">
                                            <RefreshCw className="w-8 h-8 text-indigo-600 animate-spin-slow" />
                                            {/* Live Dot */}
                                            <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
                                        </div>
                                    </div>

                                    <h4 className="text-indigo-950 font-bold text-xl tracking-tight mb-1">Core Infrastructure</h4>
                                    <div className="flex items-center justify-center gap-2">
                                        <div className="flex gap-0.5">
                                            <div className="w-1 h-3 bg-indigo-600/30 rounded-full animate-[bounce_1s_-0.2s_infinite]"></div>
                                            <div className="w-1 h-5 bg-indigo-600/60 rounded-full animate-[bounce_1s_-0.1s_infinite]"></div>
                                            <div className="w-1 h-3 bg-indigo-600/30 rounded-full animate-[bounce_1s_infinite]"></div>
                                        </div>
                                        <p className="text-indigo-600 text-[10px] uppercase font-bold tracking-[0.2em]">Always active</p>
                                    </div>
                                </motion.div>
                            </div>
                            <div className="w-full rounded-2xl bg-white/90 backdrop-blur border border-white shadow-xl p-5 translate-y-2">
                                <div className="flex items-center justify-between">
                                    <p className="text-xs font-semibold text-slate-900">Quote preview</p>
                                    <span className="text-[10px] font-bold text-sky-700 bg-sky-50 px-2 py-1 rounded-full">Locked</span>
                                </div>
                                <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                                    <div className="rounded-lg bg-slate-50 border border-slate-200 p-2">
                                        <p className="text-slate-500">Rate</p>
                                        <p className="font-semibold text-slate-900">1.36</p>
                                    </div>
                                    <div className="rounded-lg bg-slate-50 border border-slate-200 p-2">
                                        <p className="text-slate-500">Fee</p>
                                        <p className="font-semibold text-slate-900">0.75%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Right: Support / disputes (replace portrait) */}
                <div className="rounded-3xl overflow-hidden relative bg-white border border-neutral-200/60 shadow-sm min-h-[250px]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(139,124,255,0.20),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(77,225,255,0.18),transparent_55%)]" />
                    <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-10 h-10 rounded-2xl bg-slate-900 text-white flex items-center justify-center">
                                    <HelpCircle className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-slate-900">Support & disputes</p>
                                    <p className="text-xs text-slate-500">Built for trust when things go wrong</p>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <SupportItem title="Funding delay" meta="e-Transfer pending • 2h" />
                                <SupportItem title="Withdrawal status" meta="EFT processing • ETA 1–2d" />
                                <SupportItem title="Dispute a transaction" meta="Open ticket • attach evidence" />
                            </div>
                        </div>

                        <div className="rounded-2xl border border-neutral-200/70 bg-white/70 p-4 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <FileText className="w-4 h-4 text-slate-700" />
                                <p className="text-xs text-slate-600">Receipts & statements available</p>
                            </div>
                            <ArrowUpRight className="w-4 h-4 text-slate-700" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------- small UI atoms (no external deps) ---------- */

function Row({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
    return (
        <div className="flex items-center justify-between rounded-2xl border border-neutral-200/70 bg-white/70 p-3">
            <p className="text-xs text-slate-600">{label}</p>
            <span
                className={[
                    'text-xs font-semibold px-2 py-1 rounded-full border',
                    accent
                        ? 'text-slate-900 border-sky-200 bg-sky-50'
                        : 'text-slate-900 border-neutral-200 bg-white',
                ].join(' ')}
            >
                {value}
            </span>
        </div>
    );
}

function MiniRow({
    icon,
    title,
    badge,
    badgeTone,
}: {
    icon: React.ReactNode;
    title: string;
    badge: string;
    badgeTone?: 'accent';
}) {
    return (
        <div className="bg-white p-2 rounded-lg border border-neutral-100 shadow-sm flex items-center gap-2">
            <div
                className={[
                    'w-6 h-6 rounded-full flex items-center justify-center',
                    badgeTone === 'accent' ? 'bg-sky-50' : 'bg-neutral-100',
                ].join(' ')}
            >
                {icon}
            </div>
            <div className="flex-1">
                <p className="text-[10px] font-semibold text-neutral-700">{title}</p>
                <p className="text-[10px] text-neutral-500">{badgeTone === 'accent' ? 'Stablecoin' : 'Fiat'}</p>
            </div>
            <span
                className={[
                    'text-[10px] font-bold px-2 py-1 rounded-full',
                    badgeTone === 'accent' ? 'text-sky-700 bg-sky-50' : 'text-neutral-700 bg-neutral-100',
                ].join(' ')}
            >
                {badge}
            </span>
        </div>
    );
}


function Pill({ icon, label }: { icon: React.ReactNode; label: string }) {
    return (
        <span className="inline-flex items-center gap-2 rounded-full bg-white/70 border border-indigo-100 px-3 py-1.5 text-xs text-indigo-900">
            {icon}
            {label}
        </span>
    );
}

function SupportItem({ title, meta }: { title: string; meta: string }) {
    return (
        <div className="rounded-2xl border border-neutral-200/70 bg-white/70 p-3">
            <p className="text-xs font-semibold text-slate-900">{title}</p>
            <p className="text-xs text-slate-500 mt-1">{meta}</p>
        </div>
    );
}
