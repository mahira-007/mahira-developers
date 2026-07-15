"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Motion } from "@motion.page/sdk";

export default function Testimonials() {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef(null);

  const feedbacks = [
    {
      name: "Ramanathan Swamy",
      role: "Government Executive (Retd)",
      location: "Chennai",
      rating: 5,
      comment: "We purchased a plot at the Sriperumbudur layout. The entire legal vetting process was extremely transparent. Mahira's team took care of all DTCP documentation, making it completely stress-free for senior citizens.",
      initials: "RS",
    },
    {
      name: "Meera Krishnan",
      role: "IT Director",
      location: "Hosur",
      rating: 5,
      comment: "Mahira Developers has established amazing infrastructure in Berigai. The wide concrete roads, gated arch, and underground water utilities are built to last. Highly recommended for immediate villa construction.",
      initials: "MK",
    },
    {
      name: "Dr. Anirudh Sen",
      role: "Senior Surgeon",
      location: "Vellore",
      rating: 5,
      comment: "Invested in Arani phase 1 residential plots. The land value appreciation has already exceeded my initial projections by 20%. Document registration was clean and completed in a single day.",
      initials: "AS",
    },
  ];

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || shouldReduceMotion) return;

    const motionInstance = Motion("testimonials-reveal", ".testimonial-card", {
      from: { opacity: 0, y: 35 },
      to: { opacity: 1, y: 0 },
      duration: 0.8,
      ease: "power2.out",
      stagger: { each: 0.15, from: "start" },
    }).onScroll({
      start: "top 85%",
      scrub: false,
    });

    return () => {
      try {
        motionInstance?.kill();
      } catch (err) {
        // Safe fail
      }
    };
  }, [shouldReduceMotion]);

  return (
    <section ref={containerRef} className="section-y bg-background-alt relative overflow-hidden border-t border-white/5">
      {/* Background radial glows */}
      <div className="absolute top-1/3 left-10 w-[400px] h-[400px] rounded-full bg-navy-royal/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-[450px] h-[450px] rounded-full bg-gold-primary/5 blur-[130px] pointer-events-none" />

      <div className="section-container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <span className="text-xs uppercase tracking-widest text-gold-primary font-extrabold mb-3 block">
            Client Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
            Trusted by Happy Families
          </h2>
          <p className="text-xs sm:text-sm text-slate-muted max-w-xl mx-auto leading-relaxed">
            Read stories from our landowners who have successfully built their homes and investments across our developments.
          </p>
        </div>

        {/* Multi-column Testimonial Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left max-w-7xl mx-auto relative z-10">
          {feedbacks.map((item, idx) => (
            <div
              key={idx}
              style={{
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
              className="testimonial-card relative p-8 rounded-3xl border border-white/10 bg-background/55 shadow-xl flex flex-col justify-between overflow-hidden transition-all duration-300 hover:border-gold-primary/20"
            >
              {/* Decorative Quote */}
              <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5 pointer-events-none stroke-[1.5]" />

              <div className="flex-1">
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-primary text-gold-primary" />
                  ))}
                </div>

                {/* Comment Text */}
                <p className="text-xs sm:text-sm text-white/95 leading-relaxed italic mb-8 font-sans font-medium">
                  "{item.comment}"
                </p>
              </div>

              {/* User Avatar & Identity details */}
              <div className="flex items-center gap-3 border-t border-white/5 pt-5 mt-auto">
                {/* Circular Profile Avatar Container */}
                <div className="w-10 h-10 rounded-full bg-gold-primary/10 border border-gold-primary/20 flex items-center justify-center font-bold text-gold-primary text-xs shrink-0 select-none shadow-sm shadow-gold-primary/5">
                  {item.initials}
                </div>

                <div>
                  <h4 className="text-xs sm:text-sm font-extrabold text-white tracking-tight leading-none mb-1">
                    {item.name}
                  </h4>
                  <p className="text-[9px] sm:text-[10px] font-bold text-slate-muted uppercase tracking-wider leading-none">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
