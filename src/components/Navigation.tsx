"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 flex justify-center px-4 py-4 md:py-6 ${
          scrolled ? "backdrop-blur-sm" : ""
        }`}
      >
        <nav
          className={`flex items-center justify-between gap-6 px-4 py-2.5 rounded-full border transition-all duration-500 ${
            scrolled
              ? "bg-[#111111]/80 border-white/15 shadow-glass-md backdrop-blur-xl"
              : "bg-[#111111]/40 border-white/10 backdrop-blur-md"
          } max-w-4xl w-full`}
        >
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#home");
            }}
            className="flex items-center gap-2.5 pl-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/15 flex items-center justify-center text-xs font-bold tracking-wider group-hover:border-white/40 transition-colors">
              AP
            </div>
            <span className="text-sm font-medium tracking-tight text-[#F5F5F5] hidden sm:inline-block">
              Alvin Prayoga
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <button
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  className={`relative px-4 py-1.5 text-xs font-medium tracking-wide transition-colors rounded-full ${
                    isActive ? "text-[#FFFFFF]" : "text-[#929292] hover:text-[#F5F5F5]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-white/10 border border-white/20"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2 pr-1">
            <button
              onClick={() => scrollTo("#contact")}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-medium rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-[#F5F5F5] hover:text-[#FFFFFF] transition-all hover:border-white/40 active:scale-95"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#C4C4C4]" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-[#F5F5F5] hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-4 top-20 z-40 p-6 rounded-2xl bg-[#111111]/95 border border-white/15 shadow-glass-lg backdrop-blur-2xl md:hidden flex flex-col gap-3"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <button
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  className={`flex items-center justify-between w-full p-3 rounded-xl text-left text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-white/10 text-[#FFFFFF] border border-white/20"
                      : "text-[#929292] hover:text-[#F5F5F5] hover:bg-white/5"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <div className="w-1.5 h-1.5 rounded-full bg-white shadow-silver-glow" />}
                </button>
              );
            })}

            <div className="pt-3 border-t border-white/10 mt-1">
              <button
                onClick={() => scrollTo("#contact")}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/10 border border-white/20 text-sm font-medium text-[#F5F5F5]"
              >
                <span>Let&apos;s Work Together</span>
                <ArrowUpRight className="w-4 h-4 text-[#C4C4C4]" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
