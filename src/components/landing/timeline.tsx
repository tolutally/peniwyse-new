'use client';

import React from 'react';
import { Zap, Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Timeline() {
    const steps = [
        {
            day: 'Today',
            title: 'Fix the problem.',
            description: 'Stop worrying about access to USD value, unstable platforms, and getting trapped in crypto UX hell.',
            icon: <Zap className="w-4 h-4" fill="currentColor" />,
            items: [
                'Create your account + complete KYC in minutes',
                'Get a compliant Canada-based wallet',
                'Fund your CAD balance via e-Transfer / EFT'
            ],
            color: 'bg-peniwyse-indigo text-white',
            labelColor: 'bg-peniwyse-indigo/10 text-peniwyse-indigo'
        },
        {
            day: 'Day 3',
            title: 'Start using real value.',
            description: 'Use digital dollars like cash - spend, hold, and receive safely - anywhere.',
            icon: <span className="font-mono text-sm font-bold">03</span>,
            items: [
                'Convert CAD → USDC instantly',
                'Get a USDC receive address to accept funds',
                'See clear transaction history + balances'
            ],
            color: 'bg-white text-peniwyse-text-primary border border-peniwyse-border',
            labelColor: 'bg-peniwyse-accent/10 text-peniwyse-accent'
        },
        {
            day: 'Day 7',
            title: 'Full circle.',
            description: 'Easily move funds to any Canadian bank account. Ask why you didn’t have this years ago.',
            icon: <span className="font-mono text-sm font-bold">07</span>,
            items: [
                'Hold stable USD value with confidence',
                'Receive USDC from anywhere globally',
                'Convert back to CAD + withdraw to your bank'
            ],
            color: 'bg-peniwyse-secondary text-white',
            labelColor: 'bg-peniwyse-secondary/10 text-peniwyse-secondary'
        }
    ];

    return (
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-16 py-20 relative z-20">
            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-12 lg:gap-16">

                {/* LEFT SIDE TEXT */}
                <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-peniwyse-border px-3 py-1 mb-6 text-[10px] font-bold uppercase tracking-[0.15em] text-peniwyse-text-muted bg-white/50 backdrop-blur-sm">
                        FRICTIONLESS MONEY MOVEMENT
                    </div>

                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-peniwyse-text-primary mb-6 leading-tight">
                        Here’s what you can get done in your first{' '}
                        <span className="text-peniwyse-indigo">7 days with Peniwyse.</span>
                    </h2>

                    <p className="text-base md:text-lg text-peniwyse-text-muted leading-relaxed max-w-xl mb-8 font-normal">
                        Built for Canadians who move or hold USD value. No more scrambling for USD exposure. No more risky exchanges. No more “Can this platform actually cash me out?” anxiety.
                    </p>

                    <button className="group flex items-center gap-2 bg-peniwyse-accent text-peniwyse-text-primary px-6 py-3 rounded-lg text-sm font-bold hover:brightness-110 transition-all shadow-lg shadow-peniwyse-accent/10 hover:shadow-xl hover:shadow-peniwyse-accent/20 active:scale-95">
                        <span>Get Early Access</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
                    </button>
                </div>

                {/* RIGHT TIMELINE */}
                <div className="relative">

                    {/* Vertical Line */}
                    <div className="absolute left-[19px] top-6 bottom-6 hidden md:block w-px bg-peniwyse-border"></div>

                    <div className="space-y-10 relative">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative flex gap-6"
                            >
                                <div className="flex flex-col items-center flex-shrink-0 z-10">
                                    <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full shadow-lg border-4 border-neutral-50 ${step.color}`}>
                                        {step.icon}
                                    </div>
                                </div>

                                <div className="flex-1 bg-white/80 backdrop-blur-sm border border-peniwyse-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className="text-sm font-bold text-peniwyse-text-primary">{step.title}</h3>
                                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${step.labelColor}`}>
                                            {step.day}
                                        </span>
                                    </div>

                                    <p className="text-sm text-peniwyse-text-muted mb-4 font-normal leading-relaxed">
                                        {step.description}
                                    </p>

                                    <ul className="space-y-2.5">
                                        {step.items.map((item, i) => (
                                            <li key={i} className="flex gap-3 text-sm text-peniwyse-text-muted items-start">
                                                <Check className="w-4 h-4 text-peniwyse-secondary mt-0.5 flex-shrink-0" />
                                                <span className="font-medium text-xs">{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {index === 2 && (
                                        <div className="mt-4 pt-4 border-t border-neutral-100">
                                            <p className="text-xs text-neutral-400 font-medium italic">
                                                No noise. Just clean, compliant rails that work.
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
