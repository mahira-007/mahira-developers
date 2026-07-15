"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const triggerInquiry = (e) => {
    e?.preventDefault();
    setIsOpen(false);
    const event = new CustomEvent("open-inquiry-modal", { detail: { project: "General Inquiry" } });
    window.dispatchEvent(event);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/#projects" },
    { name: "About Us", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      style={{
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)"
      }}
      className={`sticky top-0 z-50 transition-all duration-500 border-b border-white/5 ${
        scrolled
          ? "bg-background/80 shadow-lg shadow-gold-primary/5 py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="section-container flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group py-1">
          <img
            src="/logo.jpg"
            alt="Mahira Developers Logo"
            className="h-11 w-auto object-contain rounded border border-gold-primary/30 group-hover:scale-102 transition-transform duration-300 shadow-sm"
          />
          <div className="flex flex-col text-left">
            <span className="text-sm font-extrabold tracking-widest text-white uppercase leading-none">
              MAHIRA<span className="text-gold-primary">.</span>
            </span>
            <span className="text-[7px] tracking-widest text-slate-400 font-bold uppercase mt-0.5">
              Developers
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-[10px] font-bold uppercase tracking-widest transition-colors duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gold-primary after:transition-all after:duration-300 hover:after:w-full ${
                scrolled ? "text-slate-200 hover:text-gold-primary" : "text-white hover:text-gold-light"
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          <button
            onClick={triggerInquiry}
            className="inline-flex items-center justify-center px-5 py-2.5 text-[9px] font-bold uppercase tracking-widest rounded bg-gradient-to-r from-gold-primary to-gold-dark text-navy-royal hover:from-gold-light hover:to-gold-primary transition-all duration-300 hover:scale-[1.03] shadow-md shadow-gold-primary/20 gap-1.5 cursor-pointer font-sans animate-pulse"
            style={{ animationDuration: '3s' }}
          >
            Enquire Now
            <ArrowRight className="w-3 h-3" />
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2 rounded transition-colors ${
            scrolled ? "text-slate-200 hover:text-gold-primary" : "text-white hover:text-gold-light"
          }`}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-b border-gold-primary/20 bg-navy-royal/98 backdrop-blur-lg overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xs font-bold uppercase tracking-wider text-slate-200 hover:text-gold-primary transition-colors py-3 border-b border-slate-800/60"
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={triggerInquiry}
                className="mt-4 inline-flex items-center justify-center px-5 py-3 text-xs font-bold uppercase tracking-widest rounded bg-gradient-to-r from-gold-primary to-gold-dark text-navy-royal hover:from-gold-light hover:to-gold-primary transition-all w-full gap-2 cursor-pointer"
              >
                Enquire Now
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

