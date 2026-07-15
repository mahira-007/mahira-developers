"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Loader2, CheckCircle, PhoneCall } from "lucide-react";

export default function InquiryModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formState, setFormState] = useState({ name: "", phone: "", project: "General Inquiry", message: "" });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  useEffect(() => {
    const handleOpenModal = (e) => {
      if (e.detail?.project) {
        setFormState((prev) => ({ ...prev, project: e.detail.project }));
      }
      setIsOpen(true);
    };

    window.addEventListener("open-inquiry-modal", handleOpenModal);
    return () => window.removeEventListener("open-inquiry-modal", handleOpenModal);
  }, []);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleClose = () => {
    setIsOpen(false);
    // Reset status after animation leaves
    setTimeout(() => {
      setStatus("idle");
      setFormState({ name: "", phone: "", project: "General Inquiry", message: "" });
    }, 300);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.phone) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    // Simulate API call
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-navy-royal/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/5 bg-background-alt p-6 md:p-8 shadow-2xl z-10 text-left backdrop-blur-xl"
          >
            {/* Top decorative gradient bar */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-primary via-gold-light to-gold-dark" />
            
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-muted hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-950/20 border border-emerald-900/30 flex items-center justify-center text-emerald-500 mb-6">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Inquiry Received!
                  </h3>
                  <p className="text-sm text-slate-muted max-w-sm mb-6">
                    Our real estate relationship executive will call you on **{formState.phone}** shortly to share brochures, plan details, and pricing.
                  </p>
                  <button
                    onClick={handleClose}
                    className="px-6 py-3 text-xs font-bold uppercase tracking-widest rounded-xl bg-gradient-to-r from-gold-primary to-gold-dark text-navy-royal hover:from-gold-light hover:to-gold-primary transition-all duration-300 shadow-md cursor-pointer font-sans"
                  >
                    Close Window
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="flex items-center gap-3 mb-4 mt-2">
                    <div className="w-10 h-10 rounded-xl bg-gold-primary/10 flex items-center justify-center text-gold-primary shadow-inner">
                      <PhoneCall className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-extrabold text-white leading-tight">
                        Book a Consultation
                      </h3>
                      <p className="text-xs text-slate-muted">
                        Mahira Developers - Building Your Dreams
                      </p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-4">
                    <div>
                      <label
                        htmlFor="modal-name"
                        className="block text-[10px] font-bold uppercase tracking-widest text-slate-light mb-1.5"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="modal-name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-background/45 text-foreground placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-gold-primary/20 focus:border-gold-primary focus:bg-background-alt/90 transition-all text-sm"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="modal-phone"
                        className="block text-[10px] font-bold uppercase tracking-widest text-slate-light mb-1.5"
                      >
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="modal-phone"
                        required
                        value={formState.phone}
                        onChange={handleChange}
                        placeholder="Enter 10-digit number"
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-background/45 text-foreground placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-gold-primary/20 focus:border-gold-primary focus:bg-background-alt/90 transition-all text-sm"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="modal-project"
                        className="block text-[10px] font-bold uppercase tracking-widest text-slate-light mb-1.5"
                      >
                        Select Project Location
                      </label>
                      <div className="relative">
                        <select
                          name="project"
                          id="modal-project"
                          value={formState.project}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-white/10 bg-background/45 text-foreground focus:outline-none focus:ring-2 focus:ring-gold-primary/20 focus:border-gold-primary focus:bg-background-alt/90 transition-all text-sm cursor-pointer appearance-none [&>option]:bg-background-alt"
                        >
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Premium Residential Space">Premium Residential Space (Arani)</option>
                          <option value="Modern Township">Modern Township (Sriperumbudur)</option>
                          <option value="Luxury Villa Plots">Luxury Villa Plots (Berigai)</option>
                          <option value="Elite Phase 2 Development">Elite Phase 2 Development (Berigai)</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="modal-message"
                        className="block text-[10px] font-bold uppercase tracking-widest text-slate-light mb-1.5"
                      >
                        Requirement Details
                      </label>
                      <textarea
                        name="message"
                        id="modal-message"
                        rows="3"
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="Add details like preferred plot sizes, schedule timing, or general queries..."
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-background/45 text-foreground placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-gold-primary/20 focus:border-gold-primary focus:bg-background-alt/90 transition-all text-sm resize-none"
                      />
                    </div>

                    {status === "error" && (
                      <span className="text-xs font-semibold text-rose-500">
                        Please fill in Name and Phone Number fields.
                      </span>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full inline-flex items-center justify-center px-6 py-4 text-xs font-bold uppercase tracking-widest rounded-xl bg-gradient-to-r from-gold-primary via-gold-light to-gold-dark text-navy-royal hover:from-gold-light hover:to-gold-primary transition-all duration-300 hover:scale-[1.01] active:scale-100 disabled:opacity-75 disabled:pointer-events-none cursor-pointer font-sans shadow-lg shadow-gold-primary/10 gap-2"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Submitting Booking...
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          Submit Request
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

