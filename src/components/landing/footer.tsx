'use client';

import React from 'react';
import { Command } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="relative z-20 bg-neutral-900 text-white py-12 border-t border-neutral-800">
            {/* Optional: Background noise/grid for texture */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center">
                    {/* Logo */}
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-neutral-900">
                            <Command className="w-4 h-4" />
                        </div>
                        <span className="text-xl font-bold tracking-tight">Peniwyse</span>
                    </div>

                    {/* Links */}
                    <div className="flex gap-8 text-xs font-medium text-neutral-400 mb-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Contact Us</a>
                    </div>

                    {/* Copyright */}
                    <p className="text-neutral-500 text-xs">© 2024 Peniwyse. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
