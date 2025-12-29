'use client';

import React from 'react';
import Hero from '@/components/landing/hero';
import FeatureGrid from '@/components/landing/feature-grid';
import Timeline from '@/components/landing/timeline';
import Audience from '@/components/landing/audience';
import Comparison from '@/components/landing/comparison';
import Impact from '@/components/landing/impact';
import SecurityCTA from '@/components/landing/security-cta';
import Footer from '@/components/landing/footer';
import LiveExchangeCard from '@/components/landing/live-exchange';
import ThreeBackground from '@/components/landing/three-background/canvas';

export default function LandingPage() {
    return (
        <div className="relative min-h-screen Selection:bg-neutral-100 font-sans text-neutral-900 overflow-x-hidden">
            {/* Background Layer */}
            <ThreeBackground />

            {/* Main Content */}
            <main className="relative z-20">
                <Hero />
                <Impact />

                <FeatureGrid />
                <Timeline />
                <Audience />
                <Comparison />
                <SecurityCTA />

                <Footer />
                <LiveExchangeCard />
            </main>
        </div>
    );
}
