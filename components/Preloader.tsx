'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Preloader({ isLoading }: { isLoading: boolean }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isLoading) {
      setProgress(100);
      return;
    }
    
    // Simulate realistic loading progress
    const interval = setInterval(() => {
      setProgress(p => {
        // Slow down as it approaches 100 if still loading
        if (p >= 90) return p;
        return p + Math.floor(Math.random() * 15) + 1;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#F5F3FF] text-[#2D1B69]"
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-syne font-black uppercase text-3xl md:text-5xl tracking-[0.3em] mb-6"
          >
            Celestriyal
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-mono text-xs font-bold tracking-widest opacity-60"
          >
            {progress}%
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="w-48 h-[2px] bg-[#2D1B69]/10 mt-6 overflow-hidden rounded-full relative"
          >
            <motion.div 
              className="absolute left-0 top-0 bottom-0 bg-[#2D1B69]"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear", duration: 0.2 }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
