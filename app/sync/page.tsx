'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import SpotlightCard from '@/components/SpotlightCard';
import { 
  MessageSquare, 
  BookOpen, 
  Cpu, 
  ShieldCheck, 
  Wrench, 
  Users, 
  Wifi, 
  Calculator,
  Layers,
  Zap,
  Clock,
  LayoutGrid,
  Database,
  ArrowRightLeft,
  Terminal
} from 'lucide-react';

const FeatureCard = ({ title, subtitle, desc, icon: Icon, delay, className = "" }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    <SpotlightCard className="h-full bg-white/[0.02] border border-white/5 rounded-[2rem] p-8 md:p-10 hover:border-[#50C878]/30 transition-all group relative overflow-hidden">
      <div className="flex flex-col h-full relative z-10">
        <div className="mb-6 p-4 rounded-2xl bg-[#50C878]/10 w-fit group-hover:scale-110 transition-transform duration-500">
          <Icon className="w-6 h-6 text-[#50C878]" />
        </div>
        {subtitle && <span className="text-[10px] font-mono uppercase text-zinc-600 tracking-[0.3em] mb-4 block leading-none">{subtitle}</span>}
        <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter italic">{title}</h3>
        <p className="text-zinc-400 font-normal leading-relaxed text-sm md:text-base">{desc}</p>
      </div>
    </SpotlightCard>
  </motion.div>
);

export default function SyncProjectPage() {
  return (
    <div className="bg-[#050505] min-h-screen text-[#EAEAEA] selection:bg-[#50C878] selection:text-black font-sans overflow-x-hidden">
      
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-[#50C878]/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <main className="relative z-10 pt-48 pb-24 px-6 md:px-12 max-w-7xl mx-auto space-y-48">
        
        {/* --- SECTION 1: HERO --- */}
        <section className="flex flex-col items-center text-center space-y-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#50C878]/5 border border-[#50C878]/10 text-[#50C878] text-[10px] font-mono tracking-widest uppercase">
               <span className="w-2 h-2 rounded-full bg-[#50C878] animate-pulse" />
               MAJESTIC CAMPUS OS v1.2.3
            </div>
            <h1 className="text-[14vw] md:text-[12vw] font-black tracking-tighter leading-[0.8] text-white uppercase italic">
              Syn<span className="text-[#50C878]">c</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-500 font-light leading-relaxed max-w-2xl mx-auto italic">
              A high-end, zero-latency digital nervous system. <br/>
              <span className="text-white font-medium italic">Engineered for the elite campus experience.</span>
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 pt-12">
                <div className="flex flex-col items-center">
                    <span className="text-4xl font-black text-white italic tracking-tighter uppercase italic uppercase">0ms</span>
                    <span className="text-[8px] font-mono uppercase text-zinc-700 tracking-[0.5em]">Latency Sync</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-4xl font-black text-white italic tracking-tighter uppercase italic uppercase">100%</span>
                    <span className="text-[8px] font-mono uppercase text-zinc-700 tracking-[0.5em]">Offline Ready</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-4xl font-black text-white italic tracking-tighter uppercase italic uppercase">60+</span>
                    <span className="text-[8px] font-mono uppercase text-zinc-700 tracking-[0.5em]">Module Cluster</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-4xl font-black text-white italic tracking-tighter uppercase italic uppercase">OLED</span>
                    <span className="text-[8px] font-mono uppercase text-zinc-700 tracking-[0.5em]">Engine Architecture</span>
                </div>
          </div>
        </section>

        {/* --- SECTION 2: THE MAJESTIC GRID --- */}
        <section className="space-y-16">
          <div className="max-w-2xl">
            <h2 className="text-[#50C878] font-mono text-[10px] uppercase tracking-[1em] mb-6">Technical Infrastructure</h2>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-tight uppercase italic">
                The Feature <br/>
                <span className="text-zinc-800">Architecture.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[280px]">
            {/* Hyper-Chat */}
            <FeatureCard 
              className="md:col-span-8"
              title="Hyper-Chat v2" 
              subtitle="Real-time Interaction"
              icon={MessageSquare}
              desc="Instagram-style dual-swipe logic (RTL for Timestamps, LTR for Reply) with mechanical haptic feedback. Supports Individual, Class, and Department channels with borderless image sharing."
              delay={0.1}
            />

            {/* Smart Timetable */}
            <FeatureCard 
              className="md:col-span-4"
              title="Zero-Latency Table" 
              subtitle="Scheduling Engine"
              icon={Clock}
              desc="Dynamic 50/55-min options with 'Smart Sync' (Room/Firestore) for instant loading. ViewPager2 enabled."
              delay={0.2}
            />

            {/* Academic Core */}
            <FeatureCard 
              className="md:col-span-4"
              title="Academic Core" 
              subtitle="Data Isolation"
              icon={BookOpen}
              desc="Year, Department, and Section isolated Homework, Announcements, and Dues with mandatory class-filtering."
              delay={0.3}
            />

            {/* GPA Calculators */}
            <FeatureCard 
              className="md:col-span-4"
              title="Target Mode GPA" 
              subtitle="Smart Math"
              icon={Calculator}
              desc="Predictive SGPA/CGPA engine with target estimation. Tells you exactly what you need to achieve your goal."
              delay={0.4}
            />

            {/* OLED Themes */}
            <FeatureCard 
              className="md:col-span-4"
              title="OLED Engines" 
              subtitle="Visual Identity"
              icon={Zap}
              desc="True Black (#000000) OLED theme, Midnight Purple, and Glassmorphism suites with performance mode toggles."
              delay={0.5}
            />

            {/* Tool Suite */}
            <FeatureCard 
              className="md:col-span-6"
              title="Professional Tools" 
              subtitle="Utility Hub"
              icon={Wrench}
              desc="High-speed Image to PDF converter with document scanning & reordering. Real-time Image Compressor with instant preview."
              delay={0.6}
            />

            {/* WiFi Share */}
            <FeatureCard 
              className="md:col-span-6"
              title="WiFi SSRF Network" 
              subtitle="Connectivity"
              icon={Wifi}
              desc="On-device QR extraction from screenshots. Share campus WiFi via Direct Connect logic with 3-hour session expiry."
              delay={0.7}
            />

            {/* Freelancing */}
            <FeatureCard 
              className="md:col-span-8"
              title="Freelancing Hub" 
              subtitle="Campus Economy"
              icon={Users}
              desc="Secure marketplace with delivery proofs (mandatory compressed <20KB uploads). Integrated chat during active orders."
              delay={0.8}
            />

            {/* Admin Panel */}
            <FeatureCard 
              className="md:col-span-4"
              title="Majestic Admin" 
              subtitle="Governance"
              icon={LayoutGrid}
              desc="Bento-grid admin panel with whitelist security for specialized emails (admin1-5) and user governance."
              delay={0.9}
            />
          </div>
        </section>

        {/* --- SECTION 3: SYSTEM HARDENING --- */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start py-32">
            <div className="space-y-12 sticky top-32">
                <div className="space-y-6">
                    <h2 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter">Persistence <br/> <span className="text-[#50C878]">Architecture.</span></h2>
                    <p className="text-xl text-zinc-500 font-light leading-relaxed max-w-lg italic">
                        The bedrock of Sync. A multi-layer storage strategy ensuring zero data loss and 100% offline capability.
                    </p>
                </div>
                <div className="space-y-8">
                    <div className="flex gap-8 items-start">
                        <div className="p-3 rounded-xl bg-[#50C878]/5 text-[#50C878] border border-[#50C878]/10">
                            <Database className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="text-white font-black uppercase tracking-tighter italic">Source.CACHE Logic</h4>
                            <p className="text-zinc-600 text-sm mt-1 italic leading-relaxed">Prioritizing local Room Database instances for zero-latency UI loading, followed by immediate background Firestore synchronization.</p>
                        </div>
                    </div>
                    <div className="flex gap-8 items-start">
                        <div className="p-3 rounded-xl bg-[#50C878]/5 text-[#50C878] border border-[#50C878]/10">
                            <ArrowRightLeft className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="text-white font-black uppercase tracking-tighter italic">Document-Level Sync</h4>
                            <p className="text-zinc-600 text-sm mt-1 italic leading-relaxed">Real-time sync using documentChanges. Syncs edits and deletions locally without requiring a full collection reload.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-12 md:p-24 rounded-[4rem] border border-white/5 bg-white/[0.01] relative overflow-hidden group italic">
                <div className="space-y-10">
                    <div className="space-y-2">
                        <span className="text-[8px] font-mono text-zinc-600 uppercase tracking-widest">Database Schema</span>
                        <h3 className="text-white font-bold text-2xl uppercase italic tracking-tighter italic">Manifest Cluster</h3>
                    </div>
                    
                    <div className="space-y-6">
                        {[
                            { label: "Primary Database", value: "Firestore Cloud" },
                            { label: "Local Persistence", value: "Room SQL v18" },
                            { label: "Asset Storage", value: "Firebase Storage" },
                            { label: "Auth Protocol", value: "Firebase Auth 2.0" },
                            { label: "Notification Engine", value: "FCM v1 Pulse" },
                            { label: "App Integrity", value: "App Check (Debug)" }
                        ].map((stat, i) => (
                            <div key={i} className="flex justify-between items-end border-b border-white/5 pb-4 group-hover:border-[#50C878]/20 transition-colors">
                                <span className="text-[10px] font-mono text-zinc-700 uppercase tracking-[0.3em]">{stat.label}</span>
                                <span className="text-white font-black uppercase italic tracking-tighter text-lg italic tracking-widest">{stat.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

      </main>

      <footer className="py-32 border-t border-white/5 text-center relative z-10 bg-black/50 backdrop-blur-md italic">
        <div className="max-w-xl mx-auto space-y-12">
            <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter italic tracking-[0.2em]">Developed & Engineered <br/> by <span className="text-[#50C878]">Celestriyal Studios</span></h3>
            <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.5em] leading-loose italic">
              Sync Platform is a proprietary campus OS built with Kotlin, Room, and Firebase Cloud. <br/> All rights reserved 2026.
            </p>
            <div className="flex justify-center gap-12 text-[10px] font-mono text-zinc-800 uppercase tracking-[0.4em]">
                <span>Build 1.2.3_8</span>
                <span>Kotlin 2.0</span>
                <span>Cloud Functions v2</span>
            </div>
            <div className="pt-12">
                <Link href="/" className="px-12 py-4 rounded-full border border-white/10 text-white font-mono text-[10px] uppercase tracking-[0.5em] hover:bg-white/5 hover:border-[#50C878]/40 transition-all italic">
                    Return to Genesis
                </Link>
            </div>
        </div>
      </footer>
    </div>
  );
}
