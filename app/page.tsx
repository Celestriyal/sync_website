'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import './gold.css';
import GoldBackground from '../components/celestriyal/GoldBackground';

export default function CelestriyalPage() {
  const { scrollYProgress } = useScroll();
  const textX = useTransform(scrollYProgress, [0, 0.2], [0, -200]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <main className="relative min-h-screen bg-[#020202] text-white selection:bg-[#f6e27a] selection:text-black overflow-x-hidden font-sans">
      
      <GoldBackground />

      {/* HERO SECTION */}
      <section className="h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
        {/* MASSIVE BACKGROUND TEXT */}
        <motion.div 
            style={{ x: textX, opacity: textOpacity }}
            className="absolute whitespace-nowrap text-[25vw] font-black text-white/[0.02] uppercase tracking-tighter leading-none pointer-events-none italic select-none"
        >
            Digital Craftsmanship
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mb-4 text-[12px] md:text-lg font-black uppercase tracking-[1.2em] text-[#f6e27a] gold-glint-pro"
          >
            Studio of Digital Craftsmanship
          </motion.div>
          <motion.h1 
            className="text-[16vw] md:text-[14vw] font-black leading-none tracking-tighter uppercase text-gold-master gold-glint-pro pb-12 italic"
          >
            Celestriyal
          </motion.h1>
          
          <div className="flex items-center justify-center gap-12 overflow-hidden h-4">
              <motion.div 
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="text-[8px] md:text-[10px] font-mono tracking-[0.8em] uppercase text-white/30"
              >
                Research <span className="mx-2">•</span> Architecture <span className="mx-2">•</span> Production
              </motion.div>
          </div>
        </motion.div>

        {/* Floating Background Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] bg-[#f6e27a]/5 rounded-full blur-[180px] -z-10 animate-pulse"></div>
        
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6"
        >
            <span className="text-white/20 font-mono text-[8px] uppercase tracking-[1em] animate-bounce">Scroll</span>
            <div className="w-px h-16 bg-gradient-to-b from-[#f6e27a]/60 to-transparent"></div>
        </motion.div>
      </section>

      {/* CONTACT SECTION (UNIFIED) */}
      <section id="contact" className="py-64 px-6 text-center z-10 relative">
        <div className="max-w-3xl mx-auto space-y-12">
           <h3 className="text-white/20 font-mono text-[10px] uppercase tracking-[1.5em]">Genesis Commission</h3>
           <h2 className="text-7xl md:text-9xl font-black text-white tracking-tighter uppercase leading-none italic">
             Begin <br/> The <span className="text-gold-master">Era.</span>
           </h2>
           <div className="pt-12">
              <a 
                href="https://ashfaqcode.me/#contact" 
                className="group relative inline-flex items-center gap-12 px-20 py-10 rounded-full border border-[#f6e27a]/30 hover:border-[#f6e27a] transition-all duration-1000 gold-glint-pro"
              >
                <span className="text-xl md:text-3xl font-black uppercase tracking-[0.3em] relative z-10 group-hover:text-black transition-colors italic">Inquire</span>
                <ArrowRight className="w-10 h-10 relative z-10 group-hover:translate-x-4 transition-transform group-hover:text-black" />
                <div className="absolute inset-0 bg-gold-luxury opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-full"></div>
              </a>
           </div>
        </div>
      </section>

      <footer className="py-24 border-t border-white/5 text-center px-6 z-10 relative bg-[#020202]">
          <div className="max-w-xl mx-auto space-y-12">
              <div className="text-[12px] font-black tracking-[1.5em] uppercase text-[#f6e27a] gold-glint-pro">Celestriyal</div>
              <p className="text-[8px] font-mono text-white/20 uppercase tracking-[1em] leading-loose">
                ©2026 Celestriyal Studios <br/> 
                Digital Couture <span className="mx-2">/</span> Visual Architecture <br/>
                All Rights Reserved
              </p>
          </div>
      </footer>

    </main>
  );
}
