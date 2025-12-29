'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Audience() {
    const audiences = [
        {
            title: 'Immigrants & Global Canadians',
            description: 'Hold stable USD safely in Canada, convert to CAD when it makes sense, and withdraw to your bank without worrying about unreliable platforms or blocked withdrawals.',
            tag: 'For people who move money',
            color: 'from-blue-50/20',
            image: '/images/audience/global_canadians.png'
        },
        {
            title: 'Freelancers & Remote Workers',
            description: 'Receive USDC from anywhere, keep your earnings protected from FX swings, and cash out smoothly to CAD when you’re ready — simple, compliant, and fast.',
            tag: 'For Canadians earning in USD',
            color: 'from-indigo-50/20',
            image: '/images/audience/freelancers.png'
        },
        {
            title: 'Canadian Businesses',
            description: 'A compliant Canadian USDC wallet that lets you manage USD value and convert to CAD easily, with the foundation to scale global payouts when you need it.',
            tag: 'For global payments',
            color: 'from-indigo-50/20',
            image: '/images/audience/businesses.png'
        }
    ];

    return (
        <section className="py-24 md:py-32 px-4 sm:px-6 relative z-20">
            <div className="max-w-7xl mx-auto">
                <div className="max-w-3xl mx-auto text-center mb-16 glass-text-plate p-8 md:p-10">
                    <h2 className="text-xs font-mono font-medium tracking-widest text-neutral-500 uppercase mb-3">Who Uses Peniwyse?</h2>
                    <p className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">
                        Built for people who live globally<br className="hidden md:block" /> but bank in Canada.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {audiences.map((audience, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-white/60 backdrop-blur-sm rounded-2xl border border-neutral-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                        >
                            {/* Card Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={audience.image}
                                    alt={audience.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>

                            <div className="p-8">
                                <div className={`absolute inset-0 bg-gradient-to-b ${audience.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                                <div className="relative z-10">
                                    <div className="inline-block px-3 py-1 rounded-full bg-neutral-100 text-[10px] font-semibold text-neutral-500 mb-4 border border-neutral-200/50">
                                        {audience.tag}
                                    </div>
                                    <h3 className="text-lg font-semibold text-neutral-900 tracking-tight mb-3">{audience.title}</h3>
                                    <p className="text-sm text-neutral-500 leading-relaxed">
                                        {audience.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
