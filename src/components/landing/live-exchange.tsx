'use client';

import React, { useState } from 'react';
import { Activity, ArrowUp, ArrowDown, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LiveExchangeCard() {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const rates = [
        { pair: 'USDC / CAD', name: 'Canadian Dollar', rate: '1.3542', change: '0.12%', up: true, flag: '🇨🇦', color: 'bg-indigo-50 border-indigo-100 text-indigo-700' },
        { pair: 'USDC / USD', name: 'US Dollar', rate: '1.0002', change: '0.01%', up: true, flag: '🇺🇸', color: 'bg-indigo-50 border-indigo-100 text-indigo-700' },
        { pair: 'USDC / GBP', name: 'British Pound', rate: '0.7894', change: '0.04%', up: false, flag: '🇬🇧', color: 'bg-violet-50 border-violet-100 text-violet-700' }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="fixed bottom-6 right-6 w-[260px] z-50 glass rounded-xl shadow-2xl shadow-neutral-900/10 overflow-hidden ring-1 ring-white/20 pointer-events-auto"
        >
            {/* Header - Clickable for toggle */}
            <div
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="px-4 py-3 border-b border-neutral-200/50 flex items-center justify-between bg-white/40 cursor-pointer hover:bg-white/60 transition-colors"
            >
                <div className="flex items-center gap-2">
                    <Activity className="w-3.5 h-3.5 text-indigo-600" />
                    <span className="text-[10px] font-semibold tracking-wide text-neutral-900 uppercase">Live Exchange</span>
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5 border-r border-neutral-200/50 pr-2.5">
                        <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
                        </span>
                        <span className="text-[9px] font-medium text-neutral-400">REALTIME</span>
                    </div>
                    {isCollapsed ? (
                        <ChevronUp className="w-3 h-3 text-neutral-400" />
                    ) : (
                        <ChevronDown className="w-3 h-3 text-neutral-400" />
                    )}
                </div>
            </div>

            {/* Collapsible Content */}
            <AnimatePresence initial={false}>
                {!isCollapsed && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        {/* List */}
                        <div className="p-1">
                            {rates.map((rate, index) => (
                                <div key={index} className="group flex items-center justify-between p-3 hover:bg-white/40 rounded-lg transition-colors cursor-default">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-8 h-8 rounded-full border flex items-center justify-center text-[10px] font-bold ${rate.color}`}>
                                            {rate.flag}
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[10px] font-semibold text-neutral-900">{rate.pair}</span>
                                            <span className="text-[9px] text-neutral-400">{rate.name}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <span className="text-xs font-mono font-medium text-neutral-900">{rate.rate}</span>
                                        <span className={`text-[9px] font-medium flex items-center gap-0.5 ${rate.up ? 'text-blue-600' : 'text-rose-500'}`}>
                                            {rate.up ? <ArrowUp className="w-2 h-2" /> : <ArrowDown className="w-2 h-2" />}
                                            {rate.change}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Footer CTA */}
                        <div className="px-3 pb-3 pt-1">
                            <button className="w-full py-2 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg text-[10px] font-medium transition-all shadow-lg shadow-neutral-900/10 flex items-center justify-center gap-2 active:scale-95">
                                View All Rates
                                <ChevronRight className="w-3 h-3 text-neutral-400" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
