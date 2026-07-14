"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Shield, Eye, Heart, Milestone, Check, Users, Award, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InquiryModal from "@/components/InquiryModal";
import WhatsAppButton from "@/components/WhatsAppButton";

// Custom CountUp hook
function AboutCounter({ to, suffix = "", label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = parseInt(to, 10);
    if (isNaN(end)) return;

    const duration = 2000;
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeProgress = progress * (2 - progress);
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
    <div ref={ref} className="text-center p-4 border border-slate-100 rounded-2xl bg-white shadow-sm flex flex-col items-center">
      <span className="text-3xl sm:text-4xl font-extrabold text-navy-royal tracking-tight mb-2">
        {count.toLocaleString()}{suffix}
      </span>
      <span className="text-[10px] sm:text-xs font-bold text-gold-primary uppercase tracking-widest text-center">
        {label}
      </span>
    </div>
  );
}

export default function AboutPage() {
  const shouldReduceMotion = useReducedMotion();

  const milestones = [
    {
      year: "2012",
      title: "Company Inception",
      desc: "Founded with a vision to streamline open land plotting developments in Tamil Nadu by ensuring clear, legal compliance.",
    },
    {
      year: "2015",
      title: "First Large Gated Layout",
      desc: "Successfully delivered our signature 50-plot gated project in Arani, setting local infrastructure standards with wide roads.",
    },
    {
      year: "2018",
      title: "Industrial Corridor Expansion",
      desc: "Launched our first major township layout in the Sriperumbudur manufacturing hub, catering to high-yield investment markets.",
    },
    {
      year: "2021",
      title: "500+ Plots Delivered",
      desc: "Crossed the milestone of serving 500+ happy families with complete registration clearances and client satisfaction.",
    },
    {
      year: "2024",
      title: "Elite Phase 2 & RERA Integration",
      desc: "Initiated multi-tier township models in Berigai with complete RERA listings, modern clubhouse provisions, and surveillance integrations.",
    },
  ];

  const values = [
    { icon: Shield, title: "Uncompromising Integrity", desc: "We ensure absolute transparency in land measurements, documents, and pricing structures." },
    { icon: Eye, title: "Future-Ready Vision", desc: "Our developments target strategic geographic hubs that guarantee long-term asset growth." },
    { icon: Heart, title: "Customer Centricity", desc: "We support client journeys from initial pick, documentation steps, registration, to layout handovers." },
  ];

  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0.05 : 0.15,
      },
    },
  };

  const milestoneVariants = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: shouldReduceMotion ? "tween" : "spring",
        stiffness: 70,
        damping: 15,
        duration: shouldReduceMotion ? 0.35 : undefined,
      },
    },
  };

  return (
    <>
      <Navbar />
      
      <main className="flex-1 bg-white">
        
        {/* Banner Section */}
        <section className="relative py-32 bg-navy-royal overflow-hidden">
          <div className="absolute inset-0 bg-[url('/projects/drone_luxury_plots.png')] bg-cover bg-center bg-no-repeat opacity-20 pointer-events-none scale-102" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-royal via-navy-royal/90 to-navy-royal/65 z-0" />
          
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center text-white">
            <span className="text-xs uppercase tracking-widest text-gold-light font-extrabold mb-3 block">
              About Mahira
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight max-w-3xl mx-auto">
              Engineering Trust, Delivering Communities
            </h1>
            <div className="h-0.5 w-20 bg-gold-primary mx-auto mt-6" />
          </div>
        </section>

        {/* Founder message */}
        <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 bg-slate-50 p-8 rounded-3xl border border-slate-200/60 shadow-inner flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-gold-primary/10 flex items-center justify-center text-gold-primary mb-6 shadow-inner">
                <Users className="w-10 h-10" />
              </div>
              <h3 className="text-lg font-bold text-navy-royal mb-1">Vinayaga Sundaram</h3>
              <p className="text-xs font-semibold text-gold-primary uppercase tracking-widest mb-6">Founder & Chairman</p>
              <p className="text-xs text-slate-muted italic max-w-xs leading-relaxed">
                "Real estate isn't just about selling square feet. It's about securing a family's financial future and building environments where kids thrive."
              </p>
            </div>
            
            <div className="lg:col-span-7 text-left">
              <span className="text-xs uppercase tracking-widest text-gold-primary font-extrabold mb-2 block">
                Founder's Address
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-royal mb-6 tracking-tight">
                Our Foundation is Built on Legal Integrity
              </h2>
              <p className="text-sm text-slate-light leading-relaxed mb-4">
                At Mahira Developers, we realize that acquiring land plots is one of the most critical decisions a family makes. That's why our layout processes begin months before listing: we conduct double legal audits to guarantee 100% litigation-free titles.
              </p>
              <p className="text-sm text-slate-light leading-relaxed mb-6">
                Our infrastructure standards—from concrete road setups to water connection lines—are engineered for permanence. We choose prime corridors in Tamil Nadu to secure high appreciation yields for our partners. Thank you for making us your trusted real estate developer.
              </p>
              <div className="h-[1px] w-full bg-slate-100 mb-6" />
              <div className="flex gap-8">
                <AboutCounter to="1200" suffix="+" label="Happy Families" />
                <AboutCounter to="850" suffix="+" label="Plots Delivered" />
                <AboutCounter to="15" suffix="+" label="Years of Trust" />
              </div>
            </div>
          </div>
        </section>

        {/* Mission Vision Values */}
        <section className="py-24 bg-background-alt border-t border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-royal mb-12 tracking-tight">
              Our Mission, Vision, and Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <div key={i} className="glass-card bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm text-left flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                    <div>
                      <div className="w-10 h-10 rounded-lg bg-gold-primary/10 flex items-center justify-center text-gold-primary mb-6 shadow-inner">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-base font-extrabold text-navy-royal mb-3 uppercase tracking-wider">
                        {v.title}
                      </h4>
                      <p className="text-xs text-slate-muted leading-relaxed">
                        {v.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-24 max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-gold-primary font-extrabold mb-3 block">
              Our Journey
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-royal mb-4 tracking-tight">
              Development Milestones
            </h2>
            <p className="text-xs text-slate-muted max-w-sm mx-auto">
              Follow our growth pathway over the last decade of plotted layout developments.
            </p>
          </div>

          <motion.div
            variants={timelineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative border-l border-gold-primary/30 ml-4 md:ml-32 text-left"
          >
            {milestones.map((m, idx) => (
              <motion.div
                key={idx}
                variants={milestoneVariants}
                className="mb-12 last:mb-0 pl-8 relative"
              >
                {/* Timeline Circle */}
                <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-gold-primary border-2 border-white shadow flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-navy-royal" />
                </span>
                
                {/* Year tag for larger screens */}
                <span className="hidden md:block absolute -left-32 top-0.5 text-right w-24 font-mono text-base font-extrabold text-navy-royal">
                  {m.year}
                </span>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow transition-shadow">
                  <span className="inline-block md:hidden font-mono text-xs font-extrabold text-gold-primary mb-1 uppercase">
                    {m.year} &bull; Milestone
                  </span>
                  <h4 className="text-base font-extrabold text-navy-royal mb-2 tracking-tight">
                    {m.title}
                  </h4>
                  <p className="text-xs text-slate-muted leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

      </main>

      <Footer />
      <InquiryModal />
      <WhatsAppButton />
    </>
  );
}
