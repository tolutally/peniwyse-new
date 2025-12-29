'use client';

import { useState, useEffect } from 'react';

// app/(app)/convert/page.tsx
// Peniwyse — Conversion engine
// Focus: Live quotes, fee transparency, rate locking

export default function ConvertPage() {
    const [sellAmount, setSellAmount] = useState<string>('');
    const [direction, setDirection] = useState<'CAD_TO_USDC' | 'USDC_TO_CAD'>('CAD_TO_USDC');
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [timer, setTimer] = useState(30);
    const [showConfirm, setShowConfirm] = useState(false);

    // Mock rates
    const cadToUsdcRate = 0.7354;
    const usdcToCadRate = 1.3592;
    const spread = 0.0025; // 0.25% spread
    const flatFee = 0.50; // $0.50 flat fee
    const networkCostUsdc = 0.10; // $0.10 USDC network cost

    const currentRate = direction === 'CAD_TO_USDC' ? cadToUsdcRate : usdcToCadRate;

    // Calculations
    const rawBuyAmount = sellAmount ? parseFloat(sellAmount) * currentRate : 0;
    const spreadAmount = rawBuyAmount * spread;
    const totalFees = flatFee + spreadAmount + (direction === 'CAD_TO_USDC' ? networkCostUsdc * 1.36 : networkCostUsdc);
    const finalBuyAmount = Math.max(0, rawBuyAmount - totalFees);

    // Quote timer
    useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => setTimer(t => t - 1), 1000);
            return () => clearInterval(interval);
        } else {
            refreshQuote();
        }
    }, [timer]);

    const refreshQuote = () => {
        setIsRefreshing(true);
        setTimeout(() => {
            setIsRefreshing(false);
            setTimer(30);
        }, 800);
    };

    const toggleDirection = () => {
        setDirection(prev => prev === 'CAD_TO_USDC' ? 'USDC_TO_CAD' : 'CAD_TO_USDC');
        setSellAmount('');
    };

    return (
        <div className="min-h-screen bg-slate-50 p-4 sm:p-8">
            <div className="max-w-xl mx-auto">
                <div className="mb-8 flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Convert</h1>
                    <a href="/fees" className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                        View Fee Schedule
                    </a>
                </div>

                <div className="space-y-4">
                    {/* Sell Input */}
                    <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm transition-all focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">You Sell</span>
                            <span className="text-xs font-medium text-slate-400">Balance: {direction === 'CAD_TO_USDC' ? '$12,450.22 CAD' : '3,200.50 USDC'}</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <input
                                type="number"
                                value={sellAmount}
                                onChange={(e) => setSellAmount(e.target.value)}
                                placeholder="0.00"
                                className="flex-1 bg-transparent text-3xl font-bold text-slate-900 outline-none placeholder:text-slate-200 tabular-nums"
                            />
                            <div className="flex items-center gap-2 px-3 py-2 bg-slate-100 rounded-xl font-bold text-slate-900 min-w-[100px] justify-center">
                                {direction === 'CAD_TO_USDC' ? 'CAD' : 'USDC'}
                            </div>
                        </div>
                    </div>

                    {/* Toggle Button */}
                    <div className="flex justify-center -my-6 relative z-10">
                        <button
                            onClick={toggleDirection}
                            className="h-12 w-12 bg-white border border-slate-200 rounded-full shadow-md flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-200 hover:shadow-lg transition-all active:scale-95"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 11V7l-4 4 4 4v-4h14v-2z" /><path d="M17 13v4l4-4-4-4v4H3v2z" /></svg>
                        </button>
                    </div>

                    {/* Buy Input */}
                    <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">You Buy</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <input
                                type="text"
                                readOnly
                                value={sellAmount ? finalBuyAmount.toLocaleString(undefined, { maximumFractionDigits: 6 }) : ''}
                                placeholder="0.00"
                                className="flex-1 bg-transparent text-3xl font-bold text-slate-900 outline-none placeholder:text-slate-100 tabular-nums"
                            />
                            <div className="flex items-center gap-2 px-3 py-2 bg-blue-50 text-blue-700 rounded-xl font-bold min-w-[100px] justify-center">
                                {direction === 'CAD_TO_USDC' ? 'USDC' : 'CAD'}
                            </div>
                        </div>
                    </div>

                    {/* Quote Panel */}
                    <div className="bg-slate-100/50 border border-slate-200/50 rounded-3xl p-6 mt-6 space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <p className="text-sm font-bold text-slate-900">
                                    1 {direction === 'CAD_TO_USDC' ? 'CAD' : 'USDC'} ≈ {currentRate.toFixed(4)} {direction === 'CAD_TO_USDC' ? 'USDC' : 'CAD'}
                                </p>
                                {isRefreshing ? (
                                    <div className="h-4 w-4 border-2 border-blue-500/20 border-t-blue-500 rounded-full animate-spin" />
                                ) : (
                                    <button onClick={refreshQuote} className="text-blue-600 hover:text-blue-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" /><path d="M3 21v-5h5" /></svg>
                                    </button>
                                )}
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Quote locks in</span>
                                <span className={`text-xs font-mono font-bold ${timer < 10 ? 'text-red-500' : 'text-slate-700'}`}>{timer}s</span>
                            </div>
                        </div>

                        <div className="h-px bg-slate-200" />

                        <div className="space-y-2">
                            <div className="flex justify-between text-xs font-medium">
                                <span className="text-slate-500">Peniwyse Fee (Spread 0.25%)</span>
                                <span className="text-slate-900">${spreadAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                            </div>
                            <div className="flex justify-between text-xs font-medium">
                                <span className="text-slate-500">Flat Rails Fee</span>
                                <span className="text-slate-900">${flatFee.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-xs font-medium">
                                <span className="text-slate-500">Network Cost (Estimated)</span>
                                <span className="text-slate-900">${direction === 'CAD_TO_USDC' ? (networkCostUsdc * 1.36).toFixed(2) : networkCostUsdc.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-xs font-bold pt-1">
                                <span className="text-slate-900">Total Charged</span>
                                <span className="text-slate-900">${totalFees.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                            </div>
                        </div>
                    </div>

                    <button
                        disabled={!sellAmount || parseFloat(sellAmount) <= 0}
                        onClick={() => setShowConfirm(true)}
                        className="w-full bg-slate-900 text-white py-5 rounded-[24px] font-bold text-lg shadow-xl shadow-slate-200 hover:bg-slate-800 transition-all active:scale-[0.98] disabled:opacity-50 disabled:active:scale-100 disabled:shadow-none mt-4"
                    >
                        Review Conversion
                    </button>
                </div>
            </div>

            {/* Confirmation Modal */}
            {showConfirm && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300" onClick={() => setShowConfirm(false)} />
                    <div className="relative w-full max-w-md bg-white rounded-[40px] shadow-2xl overflow-hidden animate-in zoom-in-95 fade-in duration-300">
                        <div className="p-8 pb-4">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-bold text-slate-900">Confirm Convert</h2>
                                <button onClick={() => setShowConfirm(false)} className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                                </button>
                            </div>

                            <div className="space-y-6 text-center">
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Converting</p>
                                    <p className="text-3xl font-bold text-slate-900">{parseFloat(sellAmount).toLocaleString()} {direction === 'CAD_TO_USDC' ? 'CAD' : 'USDC'}</p>
                                </div>
                                <div className="h-10 w-10 mx-auto rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14m0-14L7 10m5-5 5 5" /></svg>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">To Receive Approx.</p>
                                    <p className="text-3xl font-bold text-blue-600">{finalBuyAmount.toLocaleString(undefined, { maximumFractionDigits: 6 })} {direction === 'CAD_TO_USDC' ? 'USDC' : 'CAD'}</p>
                                </div>
                            </div>

                            <div className="mt-8 bg-slate-50 rounded-3xl p-5 space-y-3">
                                <div className="flex justify-between text-sm font-medium">
                                    <span className="text-slate-500">Rate Lock Window</span>
                                    <span className="text-slate-900">30 Seconds</span>
                                </div>
                                <div className="flex justify-between text-sm font-medium">
                                    <span className="text-slate-500">Locked Rate</span>
                                    <span className="text-slate-900">1 {direction === 'CAD_TO_USDC' ? 'CAD' : 'USDC'} = {currentRate} {direction === 'CAD_TO_USDC' ? 'USDC' : 'CAD'}</span>
                                </div>
                            </div>

                            <div className="mt-8 grid grid-cols-2 gap-3">
                                <button onClick={() => setShowConfirm(false)} className="py-4 rounded-2xl font-bold text-slate-500 hover:text-slate-700 transition-colors">
                                    Back
                                </button>
                                <button className="py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all active:scale-[0.98]">
                                    Confirm Lock
                                </button>
                            </div>
                        </div>
                        <div className="p-4 bg-slate-50 text-center">
                            <p className="text-[10px] text-slate-400 font-medium px-4">
                                Rates are locked for the duration of the window. If the window expires, you will need to refresh for a new quote.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
