"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 300);
          return 100;
        }
        const diff = Math.random() * 22 + 8;
        return Math.min(prev + diff, 100);
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.02,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#080808] text-[#F5F5F5] select-none"
        >
          <div className="absolute inset-0 ambient-glow opacity-60 pointer-events-none" />

          <div className="relative flex flex-col items-center px-6">
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-8"
            >
              <div className="w-16 h-16 rounded-2xl border border-white/15 bg-white/[0.04] backdrop-blur-md flex items-center justify-center shadow-glass-md">
                <span className="text-xl font-bold tracking-widest text-[#F5F5F5]">AP</span>
              </div>
              <div className="absolute -inset-1 rounded-2xl bg-white/5 blur-xl -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-center mb-8"
            >
              <h2 className="text-xs font-medium tracking-[0.25em] uppercase text-[#929292]">
                Alvin Prayoga
              </h2>
              <p className="text-[11px] text-[#686868] mt-1 tracking-wider">
                Software & AI Portfolio
              </p>
            </motion.div>

            <div className="w-56 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
              <motion.div
                className="h-full bg-gradient-to-r from-transparent via-[#F5F5F5] to-transparent rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut", duration: 0.2 }}
              />
            </div>

            <div className="mt-3 text-[10px] font-mono tracking-widest text-[#686868]">
              {Math.floor(progress)}%
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
