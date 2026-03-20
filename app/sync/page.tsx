'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
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
  Zap
} from 'lucide-react';

const images = {
  home: "/projects/sync/home-page.png",
  chats: "/projects/sync/chats.png",
  group: "/projects/sync/group-chat-inside-1.png",
  timetable: "/projects/sync/timetable.png",
  hw: "/projects/sync/hw-check.png",
  settings: "/projects/sync/settings.png",
  userList: "/projects/sync/user-list.png",
  privacy: "/projects/sync/chat-privacy.png",
  chatFeatures: "/projects/sync/chat-features.png"
};

const FeatureCard = ({ title, desc, icon: Icon, image, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
  >
    <SpotlightCard className="h-full bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-8 md:p-10 hover:border-[#50C878]/30 transition-all group overflow-hidden relative">
      <div className="flex flex-col h-full relative z-10">
        <div className="mb-6 p-4 rounded-2xl bg-[#50C878]/10 w-fit group-hover:scale-110 transition-transform">
          <Icon className="w-6 h-6 text-[#50C878]" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tighter">{title}</h3>
        <p className="text-zinc-400 font-light leading-relaxed mb-8">{desc}</p>
        
        {image && (
          <div className="mt-auto relative w-full h-[300px] translate-y-10 group-hover:translate-y-4 transition-transform duration-700">
            <Image src={image} alt={title} fill className="object-contain" />
          </div>
        )}
      </div>
    </SpotlightCard>
  </motion.div>
);

export default function SyncProjectPage() {
  return (
    <div className="bg-[#050505] min-h-screen text-[#EAEAEA] selection:bg-[#50C878] selection:text-black font-sans">
      
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-[#50C878]/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-8 flex justify-between items-center bg-black/20 backdrop-blur-xl border-b border-white/5">
        <Link href="/" className="text-xl font-bold tracking-[0.3em] uppercase hover:text-[#50C878] transition-colors">
          Ashfaq — 
        </Link>
        <div className="flex gap-8 font-mono text-[10px] tracking-[0.5em] uppercase text-white/60 items-center">
          <Link href="/" className="hover:text-[#50C878] transition-colors hidden md:block text-zinc-500">Celestriyal</Link>
          <div className="h-4 w-px bg-white/10 hidden md:block"></div>
          <span className="text-[#50C878] font-black">Sync Platform</span>
        </div>
      </nav>

      <main className="relative z-10 pt-48 pb-24 px-6 md:px-12 max-w-7xl mx-auto space-y-48">
        
        {/* --- SECTION 1: HERO --- */}
        <section className="flex flex-col lg:flex-row items-center justify-between gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 space-y-10"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#50C878]/5 border border-[#50C878]/10 text-[#50C878] text-xs font-mono tracking-widest">
               <span className="w-2 h-2 rounded-full bg-[#50C878] animate-ping" />
               ENTERPRISE GRADE MOBILE OS
            </div>
            <h1 className="text-7xl md:text-[9rem] font-black tracking-tighter leading-[0.8] text-white uppercase italic">
              Syn<span className="text-[#50C878]">c</span>
            </h1>
            <p className="text-2xl text-zinc-400 font-light leading-relaxed max-w-lg">
              Not just an app, but a <span className="text-white font-medium">digital nervous system</span> for your campus life. Everything connected, instantly.
            </p>
            <div className="flex gap-6">
                <div className="flex flex-col">
                    <span className="text-3xl font-black text-white">0ms</span>
                    <span className="text-[10px] font-mono uppercase text-zinc-500 tracking-widest">Sync Latency</span>
                </div>
                <div className="h-12 w-px bg-white/10"></div>
                <div className="flex flex-col">
                    <span className="text-3xl font-black text-white">100%</span>
                    <span className="text-[10px] font-mono uppercase text-zinc-500 tracking-widest">Offline Ready</span>
                </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, type: "spring" }}
            className="lg:w-1/2 flex justify-center relative"
          >
            <div className="relative w-[320px] h-[650px] rounded-[3.5rem] p-3 bg-[#111] border border-white/10 shadow-[0_50px_100px_-20px_rgba(80,200,120,0.3)]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-3xl z-20"></div>
              <div className="relative w-full h-full overflow-hidden rounded-[2.8rem]">
                <Image src={images.home} alt="Sync Dashboard" fill className="object-cover" priority />
              </div>
            </div>
          </motion.div>
        </section>

        {/* --- SECTION 2: HOW IT WORKS (NON-TECHNICAL) --- */}
        <section className="space-y-24">
            <div className="max-w-3xl">
                <h2 className="text-white/20 font-mono text-xs uppercase tracking-[1em] mb-6">The Philosophy</h2>
                <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-tight uppercase">
                    How it works <br/>
                    <span className="text-zinc-600">for the user.</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-zinc-400">
                <div className="space-y-6">
                    <div className="text-6xl font-black text-[#50C878]/20">01</div>
                    <h4 className="text-white text-xl font-bold uppercase tracking-tighter">Unified Identity</h4>
                    <p className="leading-relaxed">Sync recognizes you by your college credentials. Once you verify your college email, you're automatically sorted into your specific Year, Department, and Section. No setup required.</p>
                </div>
                <div className="space-y-6">
                    <div className="text-6xl font-black text-[#50C878]/20">02</div>
                    <h4 className="text-white text-xl font-bold uppercase tracking-tighter">Always Current</h4>
                    <p className="leading-relaxed">Whether it's a change in the timetable, a new homework assignment, or a sudden announcement from the department head, the information finds you. You don't have to look for it.</p>
                </div>
                <div className="space-y-6">
                    <div className="text-6xl font-black text-[#50C878]/20">03</div>
                    <h4 className="text-white text-xl font-bold uppercase tracking-tighter">Campus Economy</h4>
                    <p className="leading-relaxed">Beyond just academics, Sync hosts a local marketplace. Need help with a project? Use the Freelancing hub. Looking for a hackathon partner? Use the Teammate Finder.</p>
                </div>
            </div>
        </section>

        {/* --- SECTION 3: FEATURE MATRIX --- */}
        <section className="space-y-16">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase italic">The Full Feature Suite</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              title="Hyper-Chat" 
              icon={MessageSquare}
              desc="Instant individual and group messaging with dual-swipe reply logic, image sharing, and follow requests."
              image={images.chats}
              delay={0.1}
            />
            <FeatureCard 
              title="Academic Core" 
              icon={BookOpen}
              desc="Class-isolated Homework, Announcements, and Dues. See only what matters to your specific section."
              image={images.hw}
              delay={0.2}
            />
            <FeatureCard 
              title="Smart Timetable" 
              icon={Layers}
              desc="A zero-latency timetable that syncs with the cloud but works 100% offline using Room Database."
              image={images.timetable}
              delay={0.3}
            />
            <FeatureCard 
              title="Tool Suite" 
              icon={Wrench}
              desc="Built-in Image to PDF converter, Image Compressor, and smart GPA calculators with 'Target Mode'."
              delay={0.4}
            />
            <FeatureCard 
              title="Network SSRF" 
              icon={Wifi}
              desc="A revolutionary 'Share WiFi' system allowing users to broadcast and connect to campus hotspots via QR."
              delay={0.5}
            />
            <FeatureCard 
              title="OLED Engines" 
              icon={Zap}
              desc="True black themes for OLED devices, performance mode toggles, and customizable mechanical haptics."
              image={images.settings}
              delay={0.6}
            />
          </div>
        </section>

        {/* --- SECTION 4: SECURITY --- */}
        <section className="py-24 rounded-[4rem] bg-zinc-900/30 border border-white/5 p-12 md:p-24 relative overflow-hidden group">
            <div className="absolute inset-0 bg-[#50C878]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="flex flex-col lg:flex-row gap-20 items-center relative z-10">
                <div className="lg:w-1/2 space-y-8">
                    <ShieldCheck className="w-16 h-16 text-[#50C878]" />
                    <h3 className="text-5xl font-black text-white uppercase tracking-tighter">Hardened <br/> Privacy.</h3>
                    <p className="text-xl text-zinc-400 font-light leading-relaxed">
                        Every bit of data is protected by class-isolated Firestore rules. Your chats, homework, and profile are only visible to verified members of your own class. 
                    </p>
                    <ul className="space-y-4 font-mono text-xs uppercase tracking-widest text-zinc-500">
                        <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#50C878] rounded-full" /> 14-Day Account Deletion Grace</li>
                        <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#50C878] rounded-full" /> Mandatory Email Authentication</li>
                        <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#50C878] rounded-full" /> Global Force Logout Protocol</li>
                    </ul>
                </div>
                <div className="lg:w-1/2">
                    <div className="relative w-full h-[600px]">
                        <Image src={images.privacy} alt="Privacy" fill className="object-contain rounded-3xl shadow-2xl" />
                    </div>
                </div>
            </div>
        </section>

        {/* --- SECTION 5: UTILITIES --- */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-12 rounded-[3rem] bg-blue-500/5 border border-blue-500/10 space-y-6">
                <Calculator className="w-10 h-10 text-blue-400" />
                <h4 className="text-3xl font-bold text-white uppercase italic tracking-tighter">GPA Optimization</h4>
                <p className="text-zinc-400 font-light">The smart GPA calculator doesn't just calculate; it predicts. Tell it your target CGPA, and it tells you exactly what you need in the next semester.</p>
            </div>
            <div className="p-12 rounded-[3rem] bg-purple-500/5 border border-purple-500/10 space-y-6">
                <Users className="w-10 h-10 text-purple-400" />
                <h4 className="text-3xl font-bold text-white uppercase italic tracking-tighter">Marketplace Hub</h4>
                <p className="text-zinc-400 font-light">From delivering coffee to building websites, the Freelancing module creates a secure campus economy with delivery proofs and milestone tracking.</p>
            </div>
        </section>

      </main>

      <footer className="py-20 border-t border-white/5 text-center relative z-10 bg-black/50 backdrop-blur-md">
        <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.5em] mb-4">
          Developed & Engineered by Ashfaq Global Studio
        </p>
        <div className="flex justify-center gap-8 text-[10px] font-mono text-zinc-700 uppercase tracking-widest">
            <span>v1.2.3 Build</span>
            <span>Kotlin Core</span>
            <span>Firebase Cloud</span>
        </div>
      </footer>
    </div>
  );
}
