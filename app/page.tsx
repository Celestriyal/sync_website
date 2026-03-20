'use client';

import { motion } from 'framer-motion';
import { Camera, Monitor, Layers, Sparkles, ChevronRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import './gold.css';
import GoldBackground from '../components/celestriyal/GoldBackground';
import SpotlightCard from '../components/SpotlightCard';

const ServiceTile = ({ title, desc, icon: Icon, className }: { title: string, desc: string, icon: any, className?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={className}
  >
    <SpotlightCard 
      className="h-full group bg-white/[0.01] border-white/5 hover:border-[#f6e27a]/30 transition-all p-8 md:p-12 rounded-[2.5rem]"
      spotlightColor="rgba(246, 226, 122, 0.08)"
    >
      <div className="flex flex-col h-full justify-between">
        <div>
          <div className="mb-6 p-4 rounded-2xl bg-white/5 border border-white/10 w-fit group-hover:scale-110 transition-transform">
            <Icon className="w-8 h-8 text-[#f6e27a]" />
          </div>
          <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4 group-hover:text-gold-master transition-colors">
            {title}
          </h3>
          <p className="text-white/40 font-light leading-relaxed italic">
            {desc}
          </p>
        </div>
        
        <div className="mt-8 flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.4em] text-white/20 group-hover:text-[#f6e27a] transition-colors">
          Capability — 01 <ChevronRight className="w-3 h-3" />
        </div>
      </div>
    </SpotlightCard>
  </motion.div>
);

export default function CelestriyalPage() {
  return (
    <main className="relative min-h-screen bg-[#050505] text-white selection:bg-[#f6e27a] selection:text-black overflow-x-hidden">
      
      <GoldBackground />

      {/* LUXURY NAV BAR */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-8 flex justify-between items-center mix-blend-difference">
        <Link href="/sync" className="text-xl font-bold tracking-[0.3em] uppercase hover:text-[#f6e27a] transition-colors">
          Ashfaq — 
        </Link>
        <Link href="/" className="text-xl font-black tracking-[0.3em] uppercase text-[#f6e27a] hover:text-gold-master transition-all">
          Celestriyal
        </Link>
        <div className="hidden md:flex gap-12 font-mono text-[10px] tracking-[0.5em] uppercase text-white/60">
          <Link href="#services" className="hover:text-[#f6e27a] transition-colors">Capabilities</Link>
          <Link href="#contact" className="hover:text-[#f6e27a] transition-colors">Inquiry</Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="h-screen flex flex-col items-center justify-center px-6 relative">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "circOut" }}
          className="text-center z-10"
        >
          <motion.h1 
            className="text-[12vw] font-black leading-none tracking-tighter uppercase text-gold-master gold-glint-pro px-12 pb-4"
          >
            Celestriyal
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 1 }}
            className="mt-6 text-sm md:text-2xl font-light tracking-[0.5em] uppercase text-white/80"
          >
            Digital Couture <span className="mx-4">•</span> Cinematic Realism
          </motion.div>
        </motion.div>

        {/* Floating Background Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#f6e27a]/5 rounded-full blur-[150px] -z-10 animate-pulse"></div>
      </section>

      {/* CAPABILITIES (BENTO GRID) */}
      <section id="services" className="py-32 px-6 md:px-24 max-w-7xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[400px]">
          <ServiceTile 
            title="CGI & MOTION" 
            desc="Hyper-realistic 3D visualizations and high-fidelity product motion graphics in Unreal Engine 5."
            icon={Camera}
            className="md:col-span-2"
          />
          <ServiceTile 
            title="WEB ARCH" 
            desc="Architecting digital flagships. We build high-performance, immersive websites with React and GLSL."
            icon={Monitor}
            className="md:col-span-2"
          />
          <ServiceTile 
            title="VFX & POST" 
            desc="Seamless visual effects integration and cinematic color grading for high-end digital media."
            icon={Layers}
            className="md:col-span-2"
          />
          <ServiceTile 
            title="STRATEGY" 
            desc="Conceptual branding and technical creative direction for forward-thinking industries."
            icon={Sparkles}
            className="md:col-span-2"
          />
        </div>
      </section>

      {/* CONTACT SECTION (HIGH END) */}
      <section id="contact" className="py-48 px-6 text-center z-10 relative">
        <div className="max-w-3xl mx-auto space-y-12">
           <h3 className="text-white/20 font-mono text-xs uppercase tracking-[1em]">Inquiry</h3>
           <h2 className="text-5xl md:text-9xl font-black text-white tracking-tighter uppercase leading-none">
             Elevate <br/> Your <span className="italic text-gold-master">Vision</span>
           </h2>
           <div className="pt-12">
              <a 
                href="mailto:ashfaq072025@gmail.com" 
                className="group relative inline-flex items-center gap-8 px-12 py-6 rounded-full border border-[#f6e27a]/30 hover:border-[#f6e27a] transition-all duration-700 overflow-hidden gold-glint-pro"
              >
                <span className="text-lg md:text-2xl font-bold uppercase tracking-widest relative z-10 group-hover:text-black transition-colors">Commission Us</span>
                <ArrowRight className="w-8 h-8 relative z-10 group-hover:translate-x-2 transition-transform group-hover:text-black" />
                <div className="absolute inset-0 bg-gold-luxury opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </a>
           </div>
        </div>
      </section>

      <footer className="py-12 border-t border-white/5 text-center px-6 z-10 relative">
          <p className="text-[10px] font-mono text-white/20 uppercase tracking-[0.5em]">
            ©2026 Celestriyal Studio — A Subsidiary of Ashfaq Global
          </p>
      </footer>

    </main>
  );
}
