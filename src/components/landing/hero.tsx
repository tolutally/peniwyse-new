'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center px-6 md:px-10 relative">
            <header className="absolute top-6 left-6 md:left-10">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="flex items-center gap-2"
                >
                    <img
                        src="/peniwyse-logo.png"
                        alt="Peniwyse Logo"
                        className="h-6 w-auto"
                    />
                </motion.div>
            </header>

            <div className="max-w-2xl mt-20 md:mt-0 glass-text-plate p-8 md:p-12 rounded-3xl border border-white/20 shadow-2xl">
                <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-neutral-900 leading-[1.05] mb-6"
                >
                    Borderless Money.<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">No Hidden Fees.</span><br />
                    Real Control.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-base md:text-lg text-neutral-500 font-normal leading-relaxed max-w-lg"
                >
                    A secure Canadian wallet for your digital dollars. Top up instantly with local fiat, convert to USDC and hold stable value. Send or spend worldwide in seconds without the headaches.
                </motion.p>

                <motion.form
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-8 flex items-center gap-3 max-w-md pointer-events-auto"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div className="relative flex-1">
                        <input
                            type="email"
                            placeholder="enter your email..."
                            required
                            className="w-full bg-white/80 backdrop-blur border border-neutral-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-neutral-400 focus:ring-1 focus:ring-neutral-200 transition-all placeholder:text-neutral-400 shadow-sm text-neutral-600"
                        />
                    </div>
                    <button
                        type="submit"
                        className="group flex items-center gap-2 bg-neutral-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-neutral-800 transition-all shadow-lg shadow-neutral-900/10 hover:shadow-xl hover:shadow-neutral-900/20 active:scale-95"
                    >
                        <span>Get Early Access</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" strokeWidth={1.5} />
                    </button>
                </motion.form>
            </div>
        </section>
    );
}
