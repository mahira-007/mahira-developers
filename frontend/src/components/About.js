"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, HardHat, Award, Eye } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const shape1Ref = useRef(null);
  const shape2Ref = useRef(null);

  useEffect(() => {
    // Respect system reduced-motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    // Use GSAP context for safe React scoping and clean-up
    const ctx = gsap.context(() => {
      gsap.to(shape1Ref.current, {
        y: 80,
        ease: "none",
        scrollTrigger: {
          trigger: "#about",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      gsap.to(shape2Ref.current, {
        y: -80,
        ease: "none",
        scrollTrigger: {
          trigger: "#about",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    });

    return () => ctx.revert(); // revert GSAP context on unmount
  }, []);

  const coreValues = [
    { icon: ShieldCheck, label: "RERA & DTCP Approved", desc: "All lands undergo extensive legal audits for clear, risk-free titles." },
    { icon: HardHat, label: "Structural Excellence", desc: "We deploy supreme civil engineering and premium raw materials." },
    { icon: Eye, label: "Absolute Transparency", desc: "Zero hidden costs. What you see in our blueprint is what you get." },
    { icon: Award, label: "Elite Local Expertise", desc: "Tuned into Tamil Nadu's fastest growing residential corridors." },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 70, damping: 15 }
    }
  };

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      {/* Background shape 1 (GSAP Parallax) */}
      <div
        ref={shape1Ref}
        className="absolute -top-24 -right-24 w-[350px] h-[350px] rounded-full bg-gold-primary/5 blur-[100px] pointer-events-none"
      />
      {/* Background shape 2 (GSAP Parallax) */}
      <div
        ref={shape2Ref}
        className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full bg-navy-royal/5 blur-[120px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: About Text */}
          <div className="lg:col-span-6">
            <span className="text-xs uppercase tracking-widest text-gold-primary font-extrabold mb-3 block">
              Our Identity
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-royal mb-6 tracking-tight">
              Commitment to Structural Excellence
            </h2>
            <p className="text-base text-slate-light mb-6 leading-relaxed">
              Based in Tamil Nadu, Mahira Developers is built on a foundation of engineering integrity, quality construction, and absolute compliance. We specialize in transforming open layouts into premium master-planned developments, creating environments where families thrive.
            </p>
            <p className="text-base text-slate-muted leading-relaxed mb-8">
              Whether building premium residential spaces in Arani, modern townships in Sriperumbudur, or luxury plots in Berigai, we ensure our developments meet strict regulatory guidelines, carry complete DTCP layout approvals, and feature top-tier infrastructure.
            </p>
          </div>

          {/* Right Side: Core Values Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {coreValues.map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="p-6 rounded-2xl border border-slate-200/80 bg-background-alt shadow-sm hover:border-gold-primary/40 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold-primary/10 flex items-center justify-center text-gold-primary mb-5 shadow-inner">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-extrabold text-navy-royal mb-2 uppercase tracking-wider">
                    {value.label}
                  </h4>
                  <p className="text-xs text-slate-muted leading-relaxed">
                    {value.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}


