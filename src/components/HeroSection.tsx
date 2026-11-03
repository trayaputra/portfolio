"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Terminal } from "lucide-react";

export function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 pt-24 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 ambient-glow opacity-70 pointer-events-none" />

      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.025] rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-medium tracking-wide text-[#929292]">
            Available for New Projects & Collaboration
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4 mb-6"
        >
          <p className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-[#929292]">
            Alvin Prayoga
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#F5F5F5] leading-[1.08]">
            Building Ideas Into <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#C4C4C4] to-[#686868]">
              Digital Experiences.
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl text-sm sm:text-base md:text-lg text-[#929292] leading-relaxed mb-10 font-normal"
        >
          Software engineer & AI developer specializing in building resilient fullstack
          applications, autonomous AI workflows, and high-performance interactive digital platforms.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={() => scrollTo("projects")}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#F5F5F5] text-[#080808] font-medium text-sm hover:bg-[#FFFFFF] transition-all duration-300 hover:shadow-silver-glow flex items-center justify-center gap-2 group active:scale-95"
          >
            <span>Explore Projects</span>
            <Sparkles className="w-4 h-4 text-[#080808] group-hover:rotate-12 transition-transform" />
          </button>

          <button
            onClick={() => scrollTo("contact")}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white/[0.05] border border-white/15 text-[#F5F5F5] font-medium text-sm hover:bg-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2 group active:scale-95"
          >
            <Terminal className="w-4 h-4 text-[#C4C4C4]" />
            <span>Contact Me</span>
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => scrollTo("about")}
      >
        <span className="text-[11px] font-mono tracking-widest uppercase text-[#686868]">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-3.5 h-3.5 text-[#686868]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
