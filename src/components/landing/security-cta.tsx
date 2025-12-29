'use client';

import React from 'react';
import {
    Shield,
    EyeOff,
    Lock,
    Key,
    Fingerprint,
    ShieldCheck,
    ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function SecurityCTA() {
    const securityFeatures = [
        { icon: <EyeOff className="w-5 h-5" />, label: 'Privacy' },
        { icon: <Lock className="w-5 h-5" />, label: 'Encryption' },
        { icon: <Key className="w-5 h-5" />, label: 'Passkeys' },
        { icon: <Fingerprint className="w-5 h-5" />, label: 'MFA' },
        { icon: <ShieldCheck className="w-5 h-5 text-indigo-700" />, label: 'Compliance', active: true }
    ];

    return (
        <section className="py-24 px-4 sm:px-6 relative z-20">
            <div className="max-w-5xl mx-auto">

                {/* Header Section */}
                <div className="text-center mb-8 space-y-3 glass-text-plate p-6 md:p-8 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900 leading-tight">
                        Security you don’t <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">have to think about</span>
                    </h2>

                    <p className="text-base md:text-lg text-neutral-500 leading-relaxed max-w-xl mx-auto">
                        Designed to quietly protect your money while it moves - without getting in the way.
                    </p>
                </div>

                {/* Security Card */}
                <div className="relative md:p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.06)] overflow-hidden rounded-2xl p-6 glass-text-plate mb-12 border-indigo-200/30">
                    <div className="absolute -left-10 -top-16 h-64 w-64 bg-gradient-to-tr rounded-full blur-2xl from-indigo-500/20 to-blue-500/10"></div>

                    <div className="flex items-center gap-3 mb-6 relative">
                        <div className="h-10 w-10 rounded-xl ring-1 flex items-center justify-center bg-white/40 ring-indigo-700/30 text-indigo-700">
                            <Shield className="w-5 h-5" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-indigo-950">
                            Secure by Design
                        </h3>
                    </div>

                    <p className="max-w-2xl text-indigo-900/80 relative text-sm md:text-base leading-relaxed">
                        Built as a Canadian MSB from day one: strong KYC/AML, sanctions screening, chain analytics, and strict access controls.
                        We use defense-in-depth security so your CAD and USDC stay protected while you move value across borders.
                    </p>

                    {/* Progress-like icons */}
                    <div className="mt-8 grid grid-cols-3 sm:grid-cols-5 gap-4 md:gap-6 relative">
                        {securityFeatures.map((feature, index) => (
                            <div key={index} className="flex flex-col items-center gap-3">
                                <div className={`h-12 w-12 rounded-full ring-1 flex items-center justify-center ${feature.active ? 'bg-white/60 ring-indigo-700/30 text-indigo-700' : 'bg-white/60 ring-indigo-700/30 text-indigo-900/60'}`}>
                                    {feature.icon}
                                </div>
                                <span className="text-xs text-indigo-900/70 font-medium">{feature.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Final CTA */}
                <div className="text-center pt-8 pb-16">
                    <p className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-4">
                        READY TO BE SMARTER WITH YOUR MONEY ?
                    </p>
                    <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-8 max-w-2xl mx-auto leading-tight">
                        You are one click away from using your digital assets anywhere.
                    </h2>

                    <div className="flex justify-center">
                        <button className="group flex items-center gap-2 bg-neutral-900 text-white px-8 py-4 rounded-xl text-base font-medium hover:bg-neutral-800 transition-all shadow-lg shadow-neutral-900/10 hover:shadow-xl hover:shadow-neutral-900/20 active:scale-95">
                            <span>Get Started</span>
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" strokeWidth={1.5} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
