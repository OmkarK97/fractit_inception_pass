'use client'

import React from 'react';
import { AppProvider } from '../contexts/AppContext';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import MintingSection from '../components/MintingSection';

export default function Home() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-[#121212] relative overflow-hidden">
        {/* Background gradients */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-[40%] -left-[20%] w-[800px] h-[800px] bg-[#2253FF]/10 rounded-full blur-[120px]" />
          <div className="absolute top-[20%] -right-[20%] w-[800px] h-[800px] bg-[#2253FF]/5 rounded-full blur-[120px]" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <Navbar />
          <main className="container mx-auto px-4 py-8 lg:py-12">
            <div className="bg-black/40 backdrop-blur-xl rounded-3xl border border-white/5 shadow-2xl">
              <div className="p-4 md:p-8 lg:p-12 space-y-12">
                <Hero />
                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <MintingSection />
              </div>
            </div>
          </main>
        </div>
      </div>
    </AppProvider>
  );
}

