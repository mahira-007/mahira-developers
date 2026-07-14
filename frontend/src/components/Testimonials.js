"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

export default function Testimonials() {
  const shouldReduceMotion = useReducedMotion();
  const [activeIdx, setActiveIdx] = useState(0);

  const feedbacks = [
    {
      name: "Ramanathan Swamy",
      role: "Government Executive (Retd)",
      location: "Chennai",
      rating: 5,
      comment: "We purchased a plot at the Sriperumbudur layout. The entire legal vetting process was extremely transparent. Mahira's team took care of all DTCP documentation, making it completely stress-free for senior citizens.",
    },
    {
      name: "Meera Krishnan",
      role: "IT Director",
      location: "Hosur",
      rating: 5,
      comment: "Mahira Developers has established amazing infrastructure in Berigai. The wide concrete roads, gated arch, and underground water utilities are built to last. Highly recommended for immediate villa construction.",
    },
    {
      name: "Dr. Anirudh Sen",
      role: "Senior Surgeon",
      location: "Vellore",
      rating: 5,
      comment: "Invested in Arani phase 1 residential plots. The land value appreciation has already exceeded my initial projections by 20%. Document registration was clean and completed in a single day.",
    },
  ];

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? feedbacks.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === feedbacks.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 bg-background-alt relative overflow-hidden border-t border-slate-100">
      {/* Background radial glows */}
      <div className="absolute top-1/3 left-10 w-[400px] h-[400px] rounded-full bg-navy-royal/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-[450px] h-[450px] rounded-full bg-gold-primary/5 blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 text-center">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-gold-primary font-extrabold mb-3 block">
            Client Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-royal mb-4 tracking-tight">
            Trusted by Happy Families
          </h2>
          <p className="text-xs sm:text-sm text-slate-muted max-w-xl mx-auto leading-relaxed">
            Read stories from our landowners who have successfully built their homes and investments across our developments.
          </p>
        </div>

        {/* Carousel Block */}
        <div className="relative glass-card bg-white border border-slate-200 shadow-xl rounded-3xl p-8 md:p-12 max-w-3xl mx-auto min-h-[350px] flex flex-col justify-between overflow-hidden">
          {/* Decorative giant quotes */}
          <Quote className="absolute top-8 right-8 w-24 h-24 text-slate-100 pointer-events-none stroke-[1]" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: shouldReduceMotion ? 0 : -30 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="flex-1 flex flex-col justify-between text-left relative z-10"
            >
              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(feedbacks[activeIdx].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-primary text-gold-primary" />
                  ))}
                </div>

                {/* Comment Text */}
                <p className="text-sm md:text-base text-navy-royal/90 italic leading-relaxed mb-8 font-sans font-medium">
                  "{feedbacks[activeIdx].comment}"
                </p>
              </div>

              {/* Author detail info */}
              <div className="flex items-center justify-between border-t border-slate-100 pt-6">
                <div>
                  <h4 className="text-sm sm:text-base font-extrabold text-navy-royal tracking-tight">
                    {feedbacks[activeIdx].name}
                  </h4>
                  <p className="text-[10px] sm:text-xs font-bold text-slate-muted uppercase tracking-wider">
                    {feedbacks[activeIdx].role} &bull; {feedbacks[activeIdx].location}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Arrows */}
          <div className="absolute bottom-8 right-8 flex gap-3 z-20">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:border-gold-primary hover:text-gold-primary flex items-center justify-center transition-all cursor-pointer shadow-sm hover:scale-102"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:border-gold-primary hover:text-gold-primary flex items-center justify-center transition-all cursor-pointer shadow-sm hover:scale-102"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Slide Indicator Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {feedbacks.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                activeIdx === idx ? "w-6 bg-gold-primary" : "bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
