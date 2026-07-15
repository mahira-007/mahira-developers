"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { MessageSquare, ArrowRight } from "lucide-react";

export default function ShortContactCTA() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-24 bg-background relative overflow-hidden border-t border-white/5 text-center">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] rounded-full bg-gold-primary/5 blur-[120px] pointer-events-none" />

      <div className="section-container max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="p-8 md:p-12 rounded-3xl border border-white/10 bg-background-alt/65 backdrop-blur-md shadow-2xl flex flex-col items-center w-full relative overflow-hidden"
        >
          {/* Gold top border line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-primary to-transparent" />

          <div className="w-12 h-12 rounded-full bg-gold-primary/10 flex items-center justify-center text-gold-primary mb-6 shadow-inner">
            <MessageSquare className="w-5 h-5" />
          </div>

          <span className="text-[10px] sm:text-xs uppercase tracking-widest text-gold-primary font-extrabold mb-3 block leading-none">
            Have Questions?
          </span>
          
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight leading-tight max-w-xl">
            Get in Touch with our Allotment Experts
          </h2>
          
          <p className="text-xs sm:text-sm text-slate-muted mb-8 max-w-lg leading-relaxed">
            Need customized layout pricing packages or looking to coordinate a physical site visit walkthrough? Our relationship executives are ready to assist you.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-xs font-bold uppercase tracking-widest rounded-xl bg-gradient-to-r from-gold-primary via-gold-light to-gold-dark text-navy-royal hover:from-gold-light hover:to-gold-primary transition-all duration-300 gap-2 cursor-pointer shadow-lg shadow-gold-primary/10 hover:scale-102 font-sans font-extrabold"
          >
            Go to Contact Page
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
