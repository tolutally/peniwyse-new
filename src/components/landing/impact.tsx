'use client';

import React from 'react';
import { Banknote, Clock, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Impact() {
    const cards = [
        {
            title: 'Hidden Costs',
            description: 'Money lost to hidden FX spreads (often 2-4%) and mandatory conversions you didn’t plan for or authorize.',
            icon: <Banknote className="w-5 h-5" />,
            color: 'bg-blue-50 border-blue-100 text-blue-600',
            image: '/images/impact/hidden_costs.png'
        },
        {
            title: 'Wasted Time',
            description: 'Days wasted waiting for funds to clear. While you wait, market opportunities move on without you.',
            icon: <Clock className="w-5 h-5" />,
            color: 'bg-indigo-50 border-indigo-100 text-indigo-600',
            image: '/images/impact/wasted_time.png'
        },
        {
            title: 'Anxiety & Uncertainty',
            description: 'The persistent stress of wondering if your withdrawal will be blocked or flagged for "manual review".',
            icon: <AlertCircle className="w-5 h-5" />,
            color: 'bg-indigo-50 border-indigo-100 text-indigo-600',
            image: '/images/impact/uncertainty.png'
        }
    ];

    return (
        <section className="relative py-32 overflow-hidden z-20">
            {/* Decorative background elements adapted for light mode */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-indigo-200/40 rounded-full blur-[100px] mix-blend-multiply"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-200/40 rounded-full blur-[100px] mix-blend-multiply"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header Content */}
                <div className="text-center mb-16 space-y-4 glass-text-plate p-8 md:p-12 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-[10px] font-bold uppercase tracking-widest mb-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></div>
                        Real World Impact
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tight text-neutral-900 leading-tight">
                        "Penny wise,<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">dollar foolish" </span>
                        in real life.
                    </h2>

                    <p className="text-lg md:text-xl text-neutral-500 leading-relaxed max-w-2xl mx-auto">
                        You’ve been trying to be careful with bank fees — but the real leak has been in bad FX, delays, and platforms that don't put you in control.
                    </p>
                </div>

                {/* Cards Grid: 3 columns on desktop */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-white/60 backdrop-blur-sm hover:bg-white border border-neutral-200 hover:border-neutral-300 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md overflow-hidden"
                        >
                            {/* Card Image */}
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>

                            <div className="p-8">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className={`w-10 h-10 rounded-full border flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0 ${card.color}`}>
                                        {card.icon}
                                    </div>
                                    <h4 className="text-xl font-semibold text-neutral-900 mt-1.5">{card.title}</h4>
                                </div>
                                <p className="text-sm text-neutral-500 leading-relaxed">
                                    {card.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
