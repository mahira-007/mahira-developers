"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useSpring, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, Award } from "lucide-react";
import gsap from "gsap";
import { Motion } from "@motion.page/sdk";

// Canvas-based particles system for high performance (60 FPS) floating orbs
function CanvasParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const particles = [];
    const particleCount = 35;

    class Particle {
      constructor() {
        this.reset();
        this.y = Math.random() * height;
      }

      reset() {
        this.x = Math.random() * width;
        this.y = height + 10;
        this.size = Math.random() * 2.5 + 0.6;
        this.speedY = Math.random() * 0.4 + 0.15;
        this.speedX = Math.sin(Math.random() * Math.PI) * 0.15;
        this.opacity = Math.random() * 0.35 + 0.1;
        this.fadeSpeed = Math.random() * 0.004 + 0.002;
        this.maxOpacity = this.opacity;
        this.currentOpacity = 0;
      }

      update() {
        this.y -= this.speedY;
        this.x += this.speedX;
        if (this.currentOpacity < this.maxOpacity) this.currentOpacity += 0.01;
        if (this.y < 120) this.currentOpacity -= this.fadeSpeed;
        if (this.y < 0 || this.currentOpacity <= 0 || this.x < 0 || this.x > width) this.reset();
      }

      draw() {
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 2);
        gradient.addColorStop(0, `rgba(197, 168, 93, ${this.currentOpacity})`);
        gradient.addColorStop(1, "rgba(197, 168, 93, 0)");
        ctx.fillStyle = gradient;
        ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) particles.push(new Particle());

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => { p.update(); p.draw(); });
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-10"
      style={{ mixBlendMode: "screen" }}
    />
  );
}

// Custom CountUp Component
function CountUp({ to, suffix = "", prefix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    // Use IntersectionObserver for CountUp trigger
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const end = parseInt(to, 10);
        if (isNaN(end)) return;
        const duration = 2500;
        let startTime = null;

        const animate = (timestamp) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          const easeProgress = progress * (2 - progress);
          setCount(Math.floor(easeProgress * end));
          if (progress < 1) window.requestAnimationFrame(animate);
          else setCount(end);
        };
        window.requestAnimationFrame(animate);
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [to]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const parallaxX = useSpring(0, { stiffness: 40, damping: 15 });
  const parallaxY = useSpring(0, { stiffness: 40, damping: 15 });

  // Refs for GSAP targets
  const heroRef      = useRef(null);
  const badgeRef     = useRef(null);
  const titleRef     = useRef(null);
  const subtitleRef  = useRef(null);
  const ctaRef       = useRef(null);
  const statsRef     = useRef(null);

  // Mouse parallax for background image
  useEffect(() => {
    if (shouldReduceMotion) return;
    const handleMouseMove = (e) => {
      parallaxX.set(((e.clientX / window.innerWidth) - 0.5) * -30);
      parallaxY.set(((e.clientY / window.innerHeight) - 0.5) * -30);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [shouldReduceMotion, parallaxX, parallaxY]);

  // ── Motion Page SDK Hero entry timeline ───────────────────────────────────────────
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || shouldReduceMotion) return;

    // Use Motion Page SDK to build a sequenced entry animation
    const motionInstance = Motion("hero-entry-sequence", [
      {
        target: badgeRef.current,
        from: { opacity: 0, y: 30 },
        to: { opacity: 1, y: 0 },
        duration: 0.8,
        ease: "power2.out",
      },
      {
        target: titleRef.current,
        from: { opacity: 0, y: 30 },
        to: { opacity: 1, y: 0 },
        duration: 0.8,
        ease: "power2.out",
        position: "-=0.55",
      },
      {
        target: subtitleRef.current,
        from: { opacity: 0, y: 30 },
        to: { opacity: 1, y: 0 },
        duration: 0.8,
        ease: "power2.out",
        position: "-=0.55",
      },
      {
        target: ctaRef.current,
        from: { opacity: 0, y: 30 },
        to: { opacity: 1, y: 0 },
        duration: 0.8,
        ease: "power2.out",
        position: "-=0.55",
      },
      {
        target: statsRef.current,
        from: { opacity: 0, y: 30 },
        to: { opacity: 1, y: 0 },
        duration: 0.8,
        ease: "power2.out",
        position: "-=0.55",
      }
    ]).onPageLoad();

    return () => {
      try {
        motionInstance?.kill();
      } catch (err) {
        // Safe fail
      }
    };
  }, [shouldReduceMotion]);

  const triggerInquiry = (e) => {
    e?.preventDefault();
    const event = new CustomEvent("open-inquiry-modal", { detail: { project: "General Inquiry" } });
    window.dispatchEvent(event);
  };

  const stats = [
    { label: "Happy Families", value: "1200", suffix: "+" },
    { label: "Plots Sold",     value: "850",  suffix: "+" },
    { label: "Happy Customers", value: "100",  suffix: "+" },
    { label: "Years of Trust", value: "15",   suffix: "+" },
  ];

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative h-screen min-h-[720px] flex items-center justify-center overflow-hidden bg-navy-royal"
    >
      {/* Background image — Ken Burns + mouse parallax (Framer Motion springs) */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: "url('/projects/drone_luxury_plots.png')",
          x: shouldReduceMotion ? 0 : parallaxX,
          y: shouldReduceMotion ? 0 : parallaxY,
        }}
        animate={shouldReduceMotion ? { scale: 1.03 } : { scale: [1.03, 1.1, 1.03] }}
        transition={shouldReduceMotion ? { duration: 0.1 } : { duration: 25, ease: "easeInOut", repeat: Infinity }}
      />

      {/* Drifting gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-navy-royal via-navy-light/95 to-navy-royal/90 z-0 pointer-events-none animate-gradient-drift" />

      {/* Canvas Particles */}
      {!shouldReduceMotion && <CanvasParticles />}

      {/* Soft golden backdrop */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] sm:w-[480px] sm:h-[480px] rounded-full bg-gold-primary/15 blur-[110px] sm:blur-[140px] pointer-events-none z-0 animate-pulse"
        style={{ animationDuration: "6s" }}
      />

      <div
        className="section-container w-full flex flex-col justify-between h-full pt-32 pb-12"
        style={{ zIndex: 20 }}
      >
        {/* ── Main content ─────────────────────────────────────── */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto flex flex-col items-center">

            {/* Badge */}
            <div
              ref={badgeRef}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] uppercase tracking-widest font-extrabold bg-navy-royal/90 text-gold-light border border-gold-primary/30 mb-8 backdrop-blur-md shadow-lg cursor-default"
              style={{ opacity: 0 }}
            >
              <Award className="w-3.5 h-3.5 text-gold-primary animate-pulse" />
              <span>Mehra Developers</span>
            </div>

            {/* Heading */}
            <h1
              ref={titleRef}
              className="text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tight leading-[1.1] text-white mb-8 select-none"
              style={{ opacity: 0 }}
            >
              We Build Next-Gen
              <span className="luxury-text-gold font-black block mt-2">
                Digital Experiences
              </span>
            </h1>

            {/* Subtitle */}
            <p
              ref={subtitleRef}
              className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed font-normal"
              style={{ opacity: 0 }}
            >
              Designing, engineering, and launching state-of-the-art software, creative interfaces, and web applications that power digital evolution.
            </p>

            {/* CTA Buttons — Framer Motion hover/tap states preserved */}
            <div
              ref={ctaRef}
              className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto justify-center"
              style={{ opacity: 0 }}
            >
              <motion.a
                href="#contact"
                whileHover={shouldReduceMotion ? { scale: 1.01 } : {
                  scale: 1.04,
                  boxShadow: "0 0 25px rgba(197, 168, 93, 0.45)",
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-8 py-4 text-xs font-bold uppercase tracking-widest rounded-xl bg-gradient-to-r from-gold-primary via-gold-light to-gold-dark text-navy-royal hover:from-gold-light hover:to-gold-primary transition-all duration-300 shadow-xl shadow-gold-primary/10 gap-2 cursor-pointer"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </motion.a>
 
              <motion.a
                href="#projects"
                whileHover={shouldReduceMotion ? { backgroundColor: "rgba(255, 255, 255, 0.05)" } : {
                  scale: 1.04,
                  boxShadow: "0 0 25px rgba(197, 168, 93, 0.25)",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-8 py-4 text-xs font-bold uppercase tracking-widest rounded-xl bg-white/5 border border-gold-primary/50 text-white hover:border-gold-light transition-all duration-300 cursor-pointer"
              >
                Our Work
              </motion.a>
            </div>
          </div>
        </div>

        {/* ── Stats bar ─────────────────────────────────────────── */}
        <div ref={statsRef} className="w-full mt-auto" style={{ opacity: 0 }}>
          <div className="glass-card-dark rounded-2xl p-6 md:p-8 max-w-4xl mx-auto shadow-2xl relative overflow-hidden backdrop-blur-xl">
            {/* Gold top-border accent */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-primary to-transparent" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 divide-y-0 divide-x-0 md:divide-x divide-gold-primary/15 items-center justify-center">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center text-center p-2 first:pt-0 sm:first:pt-2"
                >
                  <div className="flex items-center gap-2 mb-1 justify-center">
                    <div className="w-5 h-5 rounded-full bg-gold-primary/10 flex items-center justify-center text-gold-primary">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                      <CountUp to={stat.value} suffix={stat.suffix} />
                    </span>
                  </div>
                  <span className="text-[10px] md:text-xs font-bold text-gold-light uppercase tracking-widest">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll-down indicator — Framer Motion loop animation preserved */}
      <div className="absolute bottom-8 left-1/2 z-20">
        <motion.a
          href="#projects"
          style={{ x: "-50%" }}
          className="cursor-pointer flex flex-col items-center gap-1 hover:text-gold-primary transition-colors text-white/55"
          animate={shouldReduceMotion ? { y: 0 } : { y: [0, 8, 0] }}
          transition={shouldReduceMotion ? {} : { repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          aria-label="Scroll down to projects"
        >
          <span className="text-[8px] uppercase tracking-widest font-extrabold text-gold-light/75">Scroll Down</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 text-gold-primary"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.a>
      </div>
    </section>
  );
}
