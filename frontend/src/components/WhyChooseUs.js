"use client";

import { useEffect, useRef } from "react";
import { ShieldCheck, HardHat, TrendingUp, HandHelping, Scale, Landmark } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUs() {
  const containerRef = useRef(null);

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

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Animate Section Header elements
      gsap.fromTo(
        ".section-header-el",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".section-header-trigger",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // 2. Animate Feature Cards sequentially (staggered reveal)
      gsap.fromTo(
        ".feature-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".feature-cards-trigger",
            start: "top 80%",
            toggleActions: "play none none none",
          },
          clearProps: "transform,opacity", // clean up inline styles so CSS hover works perfectly
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="section-y bg-background relative overflow-hidden border-t border-white/5">
      {/* Visual background glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-gold-primary/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] rounded-full bg-navy-royal/5 blur-[120px] pointer-events-none" />

      <div className="section-container text-left">
        {/* Section Header */}
        <div className="section-header-trigger max-w-3xl mb-20">
          <span className="section-header-el text-xs uppercase tracking-widest text-gold-primary font-extrabold mb-3 block">
            Why Choose Us
          </span>
          <h2 className="section-header-el text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Setting the Benchmark for Land Plotted Developments
          </h2>
          <p className="section-header-el text-sm md:text-base text-slate-muted max-w-2xl leading-relaxed">
            Mahira Developers simplifies real estate investing. We construct clear, approved, and premium infrastructure layouts in Tamil Nadu's fastest growing residential belts.
          </p>
        </div>

        {/* Grid of features (Balanced 2-column layout on large screens) */}
        <div className="feature-cards-trigger grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <div
                key={idx}
                className="feature-card p-8 bg-background-alt/65 border border-white/5 rounded-2xl flex flex-col justify-between transition-all duration-300 group hover:scale-[1.03] hover:shadow-[0_20px_40px_rgba(197,168,93,0.12)] hover:border-gold-primary/50"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gold-primary/10 flex items-center justify-center text-gold-primary mb-6 shadow-inner group-hover:bg-gold-primary group-hover:text-navy-royal transition-all duration-300">
                    <Icon className="w-5.5 h-5.5" />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-3 group-hover:text-gold-primary transition-colors tracking-tight">
                    {reason.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-muted leading-relaxed font-normal">
                    {reason.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
