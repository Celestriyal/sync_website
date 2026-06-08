'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';
import toast, { Toaster } from 'react-hot-toast';
import LiquidEther from '../components/LiquidEther';
import Folder from '../components/Folder';
import GooeyNav from '../components/GooeyNav';
import Stepper, { Step } from '../components/Stepper';
import RotatingText from '../components/RotatingText';
import ScrollFloat from '../components/ScrollFloat';
import Preloader from '../components/Preloader';

export default function Home() {
  const title = "Celestriyal Studios";
  const letters = title.split("");
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Ensure fonts are loaded and simulation has a moment to init
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  // Enquiry Form State
  const [enquiryName, setEnquiryName] = useState("");
  const [enquiryEmail, setEnquiryEmail] = useState("");
  const [enquiryPhone, setEnquiryPhone] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [projectVision, setProjectVision] = useState("");

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone: string) => /^\+?[0-9]{10,15}$/.test(phone);

  const submitEnquiry = async () => {
    if (!enquiryName || !validateEmail(enquiryEmail) || !validatePhone(enquiryPhone)) {
      toast.error("Please fill in all details correctly.");
      return;
    }

    const toastId = toast.loading("Sending your vision...");

    try {
      await addDoc(collection(db, "enquiries"), {
        name: enquiryName,
        email: enquiryEmail,
        phone: enquiryPhone,
        service: selectedService,
        vision: projectVision,
        timestamp: serverTimestamp()
      });
      
      toast.success(`Thank you, ${enquiryName}! We've captured your vision.`, { id: toastId });
      
      setEnquiryName("");
      setEnquiryEmail("");
      setEnquiryPhone("");
      setSelectedService("");
      setProjectVision("");
    } catch (e) {
      console.error("Error submitting enquiry: ", e);
      toast.error("Something went wrong. Please try again.", { id: toastId });
    }
  };

  const menuItems = [
    { label: 'Home', href: '#' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

  const socialItems = [
    { label: 'Instagram', link: 'https://www.instagram.com/celestriyal?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' }
  ];

  return (
    <main className="bg-[#F5F3FF] text-[#2D1B69] font-sans overflow-x-hidden selection:bg-[#5B21B6] selection:text-[#F5F3FF]">
      
      <Preloader isLoading={isLoading} />
      
      <Toaster 
        position="bottom-center"
        toastOptions={{
          style: {
            background: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(45, 27, 105, 0.1)',
            color: '#2D1B69',
            fontFamily: 'var(--font-syne)',
            fontWeight: 'bold',
            borderRadius: '1rem',
            padding: '16px 24px',
          },
          success: {
            iconTheme: {
              primary: '#5B21B6',
              secondary: '#F5F3FF',
            },
          },
        }}
      />
      
      {/* NAVIGATION */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={!isLoading ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-8 left-1/2 -translate-x-1/2 z-50 bg-white/60 backdrop-blur-xl border border-[#2D1B69]/10 rounded-full px-2 py-1 shadow-[0_10px_40px_rgba(45,27,105,0.1)] max-w-[90vw]"
      >
        <GooeyNav
          items={menuItems}
          initialActiveIndex={0}
        />
      </motion.div>

      {/* HERO SECTION */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Layer 0: Simulation */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={!isLoading ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <LiquidEther 
              className="h-full w-full opacity-40"
              colors={[ '#5B21B6', '#3730A3', '#9061F9' ]}
              mouseForce={20}
              cursorSize={100}
              isViscous={true}
              viscous={30}
              iterationsViscous={32}
              iterationsPoisson={32}
              resolution={0.5}
              isBounce={false}
              autoDemo={true}
              autoSpeed={0.5}
              autoIntensity={2.2}
              takeoverDuration={0.25}
              autoResumeDelay={0}
              autoRampDuration={0.6}
              color0="#5B21B6"
              color1="#3730A3"
              color2="#9061F9"
          />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#F5F3FF] to-transparent pointer-events-none" />
        </motion.div>

        {/* Layer 1: Content */}
        <div className="relative z-10 text-center px-6 pointer-events-none w-full flex flex-col items-center">
          <div className="flex flex-wrap justify-center mb-6">
            {letters.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, filter: "blur(12px)", y: 20 }}
                animate={!isLoading ? { opacity: 1, filter: "blur(0px)", y: 0 } : { opacity: 0, filter: "blur(12px)", y: 20 }}
                transition={{ 
                  duration: 1, 
                  delay: !isLoading ? (0.3 + (i * 0.05)) : 0, 
                  ease: "easeOut"
                }}
                className="inline-block text-5xl md:text-8xl font-bold uppercase text-[#2D1B69] font-syne"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, filter: "blur(8px)" }}
            animate={!isLoading ? { opacity: 1, filter: "blur(0px)" } : { opacity: 0, filter: "blur(8px)" }}
            transition={{ duration: 1.5, delay: !isLoading ? 1.5 : 0 }}
            className="flex justify-center"
          >
            <RotatingText
              texts={['Abstract Visuals', 'Technical Excellence', 'Immersive CGI', 'Digital Realities']}
              mainClassName="mt-4 text-[12px] md:text-base font-bold tracking-[0.5em] uppercase text-[#5B4A9E] font-delius"
              staggerFrom="last"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-120%", opacity: 0 }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={3000}
              splitBy="characters"
              auto
              loop
            />
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={!isLoading ? { opacity: 0.4 } : { opacity: 0 }}
          transition={{ delay: 2.2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="text-[10px] font-bold tracking-widest uppercase text-[#2D1B69]">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#2D1B69] to-transparent" />
        </motion.div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-32 md:py-48 px-8 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold tracking-[0.4em] uppercase text-[#5B21B6]/60 mb-4 block"
            >
              Services
            </motion.span>
            <ScrollFloat
              animationDuration={1}
              ease='back.inOut(2)'
              scrollStart='center bottom+=50%'
              scrollEnd='bottom bottom-=40%'
              stagger={0.03}
              containerClassName="!my-0"
              textClassName="text-4xl md:text-7xl font-bold font-syne uppercase tracking-tight text-[#2D1B69]"
            >
              Capabilities
            </ScrollFloat>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              num="01" 
              title="Websites" 
              desc="Building immersive web experiences that merge high-end visual art with cutting-edge front-end engineering."
              color="#5B21B6"
            />
            <ServiceCard 
              num="02" 
              title="Mobile Apps" 
              desc="Crafting fluid, high-performance mobile interfaces that prioritize both aesthetic beauty and functional precision."
              color="#3730A3"
            />
            <ServiceCard 
              num="03" 
              title="CGI & 3D" 
              desc="Creating photorealistic CGI, 3D environments, and abstract visual elements to elevate digital products."
              color="#9061F9"
            />
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-32 md:py-48 px-8 md:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold tracking-[0.4em] uppercase text-[#5B21B6]/60 mb-4 block"
            >
              About Us
            </motion.span>
            <ScrollFloat
              animationDuration={1}
              ease='back.inOut(2)'
              scrollStart='center bottom+=50%'
              scrollEnd='bottom bottom-=40%'
              stagger={0.03}
              containerClassName="!my-0"
              textClassName="text-4xl md:text-7xl font-bold font-syne uppercase mb-12 tracking-tight leading-tight text-[#2D1B69]"
            >
              Our Ethos
            </ScrollFloat>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl md:text-3xl font-montagu text-[#5B4A9E] leading-snug italic mb-12"
            >
              "We believe that every digital touchpoint is an opportunity for artistic expression."
            </motion.p>
            <div className="grid grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h4 className="font-syne font-bold uppercase text-sm tracking-widest mb-4 text-[#2D1B69]">Precision</h4>
                <p className="text-[#5B4A9E]/70 text-sm leading-relaxed font-montagu">Pixel-perfect execution from design to deployment.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h4 className="font-syne font-bold uppercase text-sm tracking-widest mb-4 text-[#2D1B69]">Innovation</h4>
                <p className="text-[#5B4A9E]/70 text-sm leading-relaxed font-montagu">Pushing the boundaries of what's possible on the web.</p>
              </motion.div>
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center items-center py-20 min-h-[400px]"
          >
            <Folder 
              color="#5B21B6" 
              className="scale-110 md:scale-125"
              items={[
                <div key="1" className="p-4 bg-[#F5F3FF] h-full w-full rounded-[10px] flex flex-col justify-between text-[#2D1B69]">
                  <div className="text-[10px] font-bold uppercase font-syne">Websites</div>
                  <div className="text-[12px] font-montagu italic font-bold leading-tight">High-end creative <br/> web engineering.</div>
                </div>,
                <div key="2" className="p-4 bg-[#E0E7FF] h-full w-full rounded-[10px] flex flex-col justify-between text-[#2D1B69]">
                  <div className="text-[10px] font-bold uppercase font-syne">Ethos</div>
                  <div className="text-[12px] font-montagu italic font-bold">"Simplicity"</div>
                </div>,
                <div key="3" className="p-4 bg-[#2D1B69] h-full w-full rounded-[10px] flex flex-col justify-between text-[#F5F3FF]">
                  <div className="text-[10px] font-bold uppercase font-syne">Specs</div>
                  <div className="text-[12px] font-montagu italic font-bold">"Performance"</div>
                </div>
              ]}
            />
          </motion.div>
        </div>
      </section>

      {/* CONTACT / ENQUIRY SECTION */}
      <section id="contact" className="py-32 md:py-48 px-8 md:px-24 bg-[#E0E7FF]/30 backdrop-blur-sm border-y border-[#2D1B69]/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-24">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold tracking-[0.4em] uppercase text-[#5B21B6]/60 mb-4 block"
            >
              Contact
            </motion.span>
            <ScrollFloat
              animationDuration={1}
              ease='back.inOut(2)'
              scrollStart='center bottom+=50%'
              scrollEnd='bottom bottom-=40%'
              stagger={0.03}
              containerClassName="!my-0"
              textClassName="text-5xl md:text-[5rem] lg:text-7xl font-bold font-syne uppercase mb-6 tracking-tight leading-none text-[#2D1B69] whitespace-nowrap"
            >
              Start a Project
            </ScrollFloat>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-delius text-[#5B4A9E] tracking-[0.4em] uppercase text-sm"
            >
              Let's build something exceptional together
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Stepper
              stepCircleContainerClassName="bg-[#F5F3FF]/80 backdrop-blur-xl border-[#5B21B6]/20 shadow-[0_20px_60px_rgba(45,27,105,0.05)] rounded-[3rem]"
              footerClassName="border-t border-[#5B21B6]/5"
              onFinalStepCompleted={submitEnquiry}
              nextButtonText="Continue"
              backButtonText="Back"
            >
              <Step>
                <div className="py-12 flex flex-col gap-6">
                  <h3 className="text-2xl font-bold font-syne mb-2 uppercase text-[#2D1B69]">Your Details</h3>
                  <input 
                    type="text" 
                    value={enquiryName}
                    onChange={(e) => setEnquiryName(e.target.value)}
                    placeholder="Full Name"
                    className="w-full bg-transparent border-b-2 border-[#5B21B6] py-2 text-2xl font-montagu focus:outline-none placeholder:text-[#5B21B6]/20 text-[#2D1B69]"
                  />
                  <input 
                    type="email" 
                    value={enquiryEmail}
                    onChange={(e) => setEnquiryEmail(e.target.value)}
                    placeholder="Email Address"
                    className="w-full bg-transparent border-b-2 border-[#5B21B6] py-2 text-2xl font-montagu focus:outline-none placeholder:text-[#5B21B6]/20 text-[#2D1B69]"
                  />
                  <input 
                    type="tel" 
                    value={enquiryPhone}
                    onChange={(e) => setEnquiryPhone(e.target.value)}
                    placeholder="Phone Number"
                    className="w-full bg-transparent border-b-2 border-[#5B21B6] py-2 text-2xl font-montagu focus:outline-none placeholder:text-[#5B21B6]/20 text-[#2D1B69]"
                  />
                </div>
              </Step>
              <Step>
                <div className="py-12">
                  <h3 className="text-2xl font-bold font-syne mb-8 uppercase text-[#2D1B69]">Select a Service</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {['Websites', 'Mobile Applications', 'CGI & 3D', 'Visual R&D'].map(service => (
                      <button 
                        key={service}
                        type="button" 
                        onClick={() => setSelectedService(service)}
                        className={`p-6 rounded-2xl border-2 transition-all duration-300 font-syne font-bold uppercase text-[10px] tracking-widest text-left flex justify-between items-center group ${selectedService === service ? 'border-[#5B21B6] bg-[#5B21B6] text-[#F5F3FF]' : 'border-[#5B21B6]/10 text-[#2D1B69] hover:border-[#5B21B6]'}`}
                      >
                        {service}
                        <span>{selectedService === service ? '✓' : '→'}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </Step>
              <Step>
                <div className="py-12">
                  <h3 className="text-2xl font-bold font-syne mb-8 uppercase text-[#2D1B69]">Your Vision</h3>
                  <textarea 
                    value={projectVision}
                    onChange={(e) => setProjectVision(e.target.value)}
                    placeholder="Describe your project goals..."
                    className="w-full bg-transparent border-2 border-[#5B21B6]/10 rounded-3xl p-8 h-48 text-xl font-montagu focus:outline-none focus:border-[#5B21B6] transition-colors resize-none text-[#2D1B69]"
                  />
                </div>
              </Step>
              <Step>
                <div className="py-12 text-center">
                  <h3 className="text-3xl font-bold font-syne mb-6 text-[#2D1B69] uppercase">Ready to Go!</h3>
                  <p className="font-montagu text-[#5B4A9E] text-lg max-w-sm mx-auto italic">"We've captured your details. Press complete to send them over."</p>
                </div>
              </Step>
            </Stepper>
          </motion.div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-24 px-8 md:px-24 border-t border-[#2D1B69]/5 text-[#2D1B69]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div>
            <div className="text-2xl font-bold font-syne uppercase tracking-tighter mb-4">CELESTRIYAL</div>
            <p className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#5B4A9E]/60 italic leading-loose">Based in India</p>
          </div>
          <div className="flex gap-8">
            {socialItems.map(social => (
              <a key={social.label} href={social.link} target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold tracking-widest uppercase hover:text-[#5B21B6] transition-colors">{social.label}</a>
            ))}
          </div>
          <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#5B4A9E]/30">
            © 2026 Celestriyal Studios
          </div>
        </div>
      </footer>

    </main>
  );
}

function ServiceCard({ num, title, desc, color }: { num: string, title: string, desc: string, color: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-12 rounded-[2.5rem] bg-[#F5F3FF] border border-[#5B21B6]/5 hover:border-[#5B21B6]/10 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group"
    >
      <div className="text-xs font-mono font-bold mb-12 transition-colors text-[#5B21B6]/40">{num}</div>
      <h3 className="text-3xl font-bold font-syne uppercase mb-8 tracking-tight leading-none text-[#2D1B69]">{title}</h3>
      <p className="font-montagu text-[#5B4A9E] leading-relaxed text-sm opacity-80">{desc}</p>
    </motion.div>
  );
}
