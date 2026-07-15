"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PhoneCall, Calendar } from "lucide-react";

export default function CTA() {
  const shouldReduceMotion = useReducedMotion();

  const triggerInquiry = (projectName) => {
    const event = new CustomEvent("open-inquiry-modal", { detail: { project: projectName } });
    window.dispatchEvent(event);
  };

  return (
    <section className="section-y bg-navy-royal relative overflow-hidden">
      {/* Background radial highlights */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gold-primary/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-navy-light/10 blur-[120px] pointer-events-none" />

      <div className="section-container text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <span className="text-[10px] uppercase tracking-widest text-gold-light font-extrabold mb-4 block">
            Begin Your Legacy
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 tracking-tight max-w-2xl leading-tight">
            Schedule a Guided Private Site Visit Today
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mb-10 leading-relaxed">
            Our relationship managers organize physical and virtual site walkthroughs. Inspect layout coordinates, RERA/DTCP blueprints, and connectivity benchmarks.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto justify-center">
            <button
              onClick={() => triggerInquiry("Private Site Visit")}
              className="inline-flex items-center justify-center px-8 py-4 text-[10px] font-bold uppercase tracking-widest rounded-xl bg-gradient-to-r from-gold-primary via-gold-light to-gold-dark text-navy-royal hover:from-gold-light hover:to-gold-primary transition-all duration-300 gap-2 cursor-pointer shadow-lg shadow-gold-primary/15 hover:scale-102 font-sans font-extrabold"
            >
              <Calendar className="w-4 h-4" />
              Book Site Visit
            </button>

            <a
              href="tel:+919443454395"
              className="inline-flex items-center justify-center px-8 py-4 text-[10px] font-bold uppercase tracking-widest rounded-xl bg-white/5 border border-gold-primary/50 text-white hover:border-gold-light transition-all duration-300 gap-2 cursor-pointer hover:scale-102 font-sans font-extrabold"
            >
              <PhoneCall className="w-4 h-4 text-gold-primary" />
              Call Relations
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
