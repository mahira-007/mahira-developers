"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, useSpring, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, Award } from "lucide-react";

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
    const particleCount = 35; // optimal count to avoid clutter

    class Particle {
      constructor() {
        this.reset();
        this.y = Math.random() * height; // initial scatter
      }

      reset() {
        this.x = Math.random() * width;
        this.y = height + 10;
        this.size = Math.random() * 2.5 + 0.6;
        this.speedY = Math.random() * 0.4 + 0.15; // slow vertical drift
        this.speedX = Math.sin(Math.random() * Math.PI) * 0.15; // gentle side sway
        this.opacity = Math.random() * 0.35 + 0.1;
        this.fadeSpeed = Math.random() * 0.004 + 0.002;
        this.maxOpacity = this.opacity;
        this.currentOpacity = 0; // start transparent and fade in
      }

      update() {
        this.y -= this.speedY;
        this.x += this.speedX;

        // Fade-in on spawn
        if (this.currentOpacity < this.maxOpacity) {
          this.currentOpacity += 0.01;
        }

        // Fade-out as it approaches the top
        if (this.y < 120) {
          this.currentOpacity -= this.fadeSpeed;
        }

        // Reset if goes off-screen
        if (this.y < 0 || this.currentOpacity <= 0 || this.x < 0 || this.x > width) {
          this.reset();
        }
      }

      draw() {
        ctx.beginPath();
        // Create radial gradient for realistic soft glow
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size * 2
        );
        gradient.addColorStop(0, `rgba(197, 168, 93, ${this.currentOpacity})`); // gold-primary
        gradient.addColorStop(1, "rgba(197, 168, 93, 0)");

        ctx.fillStyle = gradient;
        ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Initialize particles array
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
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
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseInt(to, 10);
    if (isNaN(end)) return;

    const duration = 2500;
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeProgress = progress * (2 - progress); // Ease out quad
      setCount(Math.floor(easeProgress * end));

      if (progress < 1) {
        window.requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    window.requestAnimationFrame(animate);
  }, [isInView, to]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const parallaxX = useSpring(0, { stiffness: 40, damping: 15 });
  const parallaxY = useSpring(0, { stiffness: 40, damping: 15 });

  // Handle Parallax Mouse coordinates (disabled if reduced motion is preferred)
  useEffect(() => {
    if (shouldReduceMotion) return;
    
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [shouldReduceMotion]);

  // Update Springs smoothly when mousePos changes
  useEffect(() => {
    if (shouldReduceMotion) return;
    parallaxX.set(mousePos.x * -30); // max 30px offset
    parallaxY.set(mousePos.y * -30);
  }, [mousePos, parallaxX, parallaxY, shouldReduceMotion]);

  const triggerInquiry = (e) => {
    e?.preventDefault();
    const event = new CustomEvent("open-inquiry-modal", { detail: { project: "General Inquiry" } });
    window.dispatchEvent(event);
  };

  // Words list for stagger animations
  const line1Words = "Build Your Dream.".split(" ");
  const line2Words = "Own Your Future.".split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0.05 : 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: shouldReduceMotion ? "tween" : "spring",
        stiffness: 90,
        damping: 12,
        duration: shouldReduceMotion ? 0.35 : undefined,
      },
    },
  };

  const stats = [
    { label: "Happy Families", value: "1200", suffix: "+" },
    { label: "Plots Sold", value: "850", suffix: "+" },
    { label: "Years of Trust", value: "15", suffix: "+" },
  ];

  return (
    <section
      id="home"
      className="relative h-screen min-h-[720px] flex items-center justify-center overflow-hidden bg-navy-royal"
    >
      {/* Background image container with Ken Burns loop and mouse parallax */}
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

      {/* Drifting gradient overlay (slow changing) */}
      <div className="absolute inset-0 bg-gradient-to-tr from-navy-royal via-navy-light/95 to-navy-royal/90 z-0 pointer-events-none animate-gradient-drift" />

      {/* Canvas Particles Component (disabled if reduced motion is preferred) */}
      {!shouldReduceMotion && <CanvasParticles />}

      {/* Soft golden gradient backdrop behind headings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] sm:w-[480px] sm:h-[480px] rounded-full bg-gold-primary/15 blur-[110px] sm:blur-[140px] pointer-events-none z-0 animate-pulse" style={{ animationDuration: '6s' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20 w-full flex flex-col justify-between h-full pt-32 pb-12">
        
        {/* Main Content Area */}
        <div className="flex-1 flex items-center justify-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-4xl mx-auto flex flex-col items-center"
          >
            {/* Elegant Luxury Badge */}
            <motion.div
              variants={wordVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] uppercase tracking-widest font-extrabold bg-navy-royal/90 text-gold-light border border-gold-primary/30 mb-8 backdrop-blur-md shadow-lg"
            >
              <Award className="w-3.5 h-3.5 text-gold-primary animate-pulse" />
              <span>Mahira Developers &bull; Signature Living</span>
            </motion.div>

            {/* Premium Staggered Title (Word by Word) */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.08] text-white mb-8 select-none"
            >
              <span className="block mb-2 overflow-hidden py-1">
                {line1Words.map((word, i) => (
                  <motion.span
                    key={i}
                    variants={wordVariants}
                    className="inline-block mr-3 md:mr-4 last:mr-0"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
              <span className="luxury-text-gold font-black block overflow-hidden py-1">
                {line2Words.map((word, i) => (
                  <motion.span
                    key={i}
                    variants={wordVariants}
                    className="inline-block mr-3 md:mr-4 last:mr-0"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={wordVariants}
              className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed font-normal"
            >
              Premium residential plots in fast-growing locations with clear legal documentation and trusted service.
            </motion.p>

            {/* CTA Buttons with Glowing Animations */}
            <motion.div
              variants={wordVariants}
              className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto justify-center"
            >
              <motion.a
                href="#projects"
                whileHover={shouldReduceMotion ? {
                  scale: 1.01,
                } : { 
                  scale: 1.04, 
                  boxShadow: "0 0 25px rgba(197, 168, 93, 0.45)",
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-8 py-4 text-xs font-bold uppercase tracking-widest rounded-xl bg-gradient-to-r from-gold-primary via-gold-light to-gold-dark text-navy-royal hover:from-gold-light hover:to-gold-primary transition-all duration-300 shadow-xl shadow-gold-primary/10 gap-2 cursor-pointer"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              
              <motion.button
                onClick={triggerInquiry}
                whileHover={shouldReduceMotion ? {
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                } : { 
                  scale: 1.04, 
                  boxShadow: "0 0 25px rgba(197, 168, 93, 0.25)",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-8 py-4 text-xs font-bold uppercase tracking-widest rounded-xl bg-white/5 border border-gold-primary/50 text-white hover:border-gold-light transition-all duration-300 cursor-pointer"
              >
                Contact Us
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Counter & Stats Overlay Bar at the bottom */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 55 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8, type: "spring" }}
          className="w-full mt-auto"
        >
          <div className="glass-card-dark rounded-2xl p-6 md:p-8 max-w-4xl mx-auto shadow-2xl relative overflow-hidden backdrop-blur-xl">
            {/* Decorative soft gold border line on top */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-primary to-transparent" />
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-gold-primary/15 items-center justify-center">
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
        </motion.div>
      </div>

      {/* Bouncing Scroll-down Indicator */}
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

