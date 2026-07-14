"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ShieldCheck, HardHat, TrendingUp, HandHelping, Scale, Landmark } from "lucide-react";

export default function WhyChooseUs() {
  const shouldReduceMotion = useReducedMotion();

  const reasons = [
    {
      icon: ShieldCheck,
      title: "100% Clear Titles",
      desc: "Every single layout undergoes intensive double legal audits to guarantee absolute litigation-free titles for total peace of mind.",
    },
    {
      icon: Scale,
      title: "DTCP & RERA Approvals",
      desc: "All developments possess valid regulatory approvals, strict buffer zoning, and full masterplan layout clearances.",
    },
    {
      icon: HardHat,
      title: "Premium Civic Infrastructure",
      desc: "Equipped with high-durable tarmac or concrete roads, underground utility pipelines, clean drinking supply, and streetlights.",
    },
    {
      icon: TrendingUp,
      title: "Prime Growth Corridors",
      desc: "We handpick land plots near major industrial hubs, educational institutes, and national expressways for high investment returns.",
    },
    {
      icon: Landmark,
      title: "Zero Hidden Costs",
      desc: "What is committed in the blueprint is what you get. Transparent pricing layouts and smooth registration support.",
    },
    {
      icon: HandHelping,
      title: "Dedicated Customer Relations",
      desc: "From initial site visits and layout picking to legal documentation and handovers, our relationship managers guide you daily.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0.05 : 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: shouldReduceMotion ? "tween" : "spring",
        stiffness: 70,
        damping: 15,
        duration: shouldReduceMotion ? 0.35 : undefined,
      },
    },
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      {/* Visual background glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-gold-primary/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] rounded-full bg-navy-royal/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-left">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <span className="text-xs uppercase tracking-widest text-gold-primary font-extrabold mb-3 block">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-royal mb-6 tracking-tight">
            Setting the Benchmark for Land Plotted Developments
          </h2>
          <p className="text-sm md:text-base text-slate-muted max-w-2xl leading-relaxed">
            Mahira Developers simplifies real estate investing. We construct clear, approved, and premium infrastructure layouts in Tamil Nadu's fastest growing residential belts.
          </p>
        </div>

        {/* Grid of features */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={shouldReduceMotion ? {
                  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.04)"
                } : {
                  y: -5,
                  boxShadow: "0 20px 40px rgba(197, 168, 93, 0.08)",
                  borderColor: "rgba(197, 168, 93, 0.35)",
                }}
                className="p-8 bg-background-alt border border-slate-200/80 rounded-2xl flex flex-col justify-between transition-all duration-300 group hover:shadow-xl"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gold-primary/10 flex items-center justify-center text-gold-primary mb-6 shadow-inner group-hover:bg-gold-primary group-hover:text-navy-royal transition-all duration-300">
                    <Icon className="w-5.5 h-5.5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-navy-royal mb-3 group-hover:text-gold-primary transition-colors tracking-tight">
                    {reason.title}
                  </h3>
                  <p className="text-xs text-slate-muted leading-relaxed font-normal">
                    {reason.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
