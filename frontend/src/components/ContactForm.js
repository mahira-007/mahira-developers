"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [formState, setFormState] = useState({ name: "", email: "", project: "General Inquiry", message: "" });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setFormState({ name: "", email: "", project: "General Inquiry", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-28 bg-white relative overflow-hidden border-t border-slate-100">
      {/* Background shape */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-gold-primary/5 to-transparent blur-[120px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Info Card */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full text-left">
            <div>
              <span className="text-xs uppercase tracking-widest text-gold-primary font-extrabold mb-3 block">
                Contact Office
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-royal mb-6 tracking-tight">
                Start Building Your Future Today
              </h2>
              <p className="text-base text-slate-muted mb-10 leading-relaxed">
                Connect with our real estate consulting team. Fill out the form, choose your interested development, and our local representatives will contact you shortly.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {[
                { icon: Mail, label: "Email Us", value: "mahiradevelopers@gmail.com", href: "mailto:mahiradevelopers@gmail.com" },
                { icon: Phone, label: "Call Us", value: "+91 94434 54395", href: "tel:+919443454395" },
                { icon: MapPin, label: "Headquarters", value: "Sriperumbudur - 602105", href: "/contact" },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <a
                    key={idx}
                    href={item.href}
                    className="flex items-center gap-4 p-5 rounded-2xl border border-slate-200 bg-background-alt hover:border-gold-primary/30 hover:bg-white transition-all duration-300 hover:shadow-xl hover:shadow-gold-primary/5 group overflow-hidden"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gold-primary/10 flex items-center justify-center text-gold-primary shadow-inner group-hover:bg-gold-primary group-hover:text-white transition-colors duration-300 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[10px] uppercase font-bold tracking-widest text-slate-muted">
                        {item.label}
                      </div>
                      <div className="text-sm font-extrabold text-navy-royal break-all">
                        {item.value}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Column: Form Container */}
          <div className="lg:col-span-7 w-full text-left">
            <div className="p-8 md:p-12 rounded-2xl border border-slate-200/80 bg-white shadow-2xl relative">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-primary via-gold-light to-gold-dark rounded-t-2xl" />

              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center py-16"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-6">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-bold text-navy-royal mb-2">
                      Inquiry Submitted!
                    </h3>
                    <p className="text-sm text-slate-muted max-w-sm">
                      Thank you for contacting Mahira Developers. Our relationship manager will reach out with the project brochure and price details.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-8 text-sm font-bold text-gold-primary hover:text-gold-dark transition-colors cursor-pointer"
                    >
                      Send another inquiry
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6"
                  >
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-[10px] font-bold uppercase tracking-widest text-slate-light mb-2"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 text-navy-royal placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-primary/20 focus:border-gold-primary focus:bg-white transition-all text-sm"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[10px] font-bold uppercase tracking-widest text-slate-light mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="name@example.com"
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 text-navy-royal placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-primary/20 focus:border-gold-primary focus:bg-white transition-all text-sm"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="project"
                        className="block text-[10px] font-bold uppercase tracking-widest text-slate-light mb-2"
                      >
                        Select Project of Interest
                      </label>
                      <div className="relative">
                        <select
                          name="project"
                          id="project"
                          value={formState.project}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 text-navy-royal focus:outline-none focus:ring-2 focus:ring-gold-primary/20 focus:border-gold-primary focus:bg-white transition-all text-sm cursor-pointer appearance-none"
                        >
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Premium Residential Space in Arani">Premium Residential Space (Arani)</option>
                          <option value="Modern Township in Sriperumbudur">Modern Township (Sriperumbudur)</option>
                          <option value="Luxury Villa Plots in Berigai">Luxury Villa Plots (Berigai)</option>
                          <option value="Elite Phase 2 Development in Berigai">Elite Phase 2 Development (Berigai)</option>
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
                        htmlFor="message"
                        className="block text-[10px] font-bold uppercase tracking-widest text-slate-light mb-2"
                      >
                        Message details
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        required
                        rows="4"
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="Tell us about your requirements (e.g. plot size, budget, time to visit)..."
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 text-navy-royal placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-primary/20 focus:border-gold-primary focus:bg-white transition-all text-sm resize-none"
                      />
                    </div>

                    {status === "error" && (
                      <div className="text-xs text-rose-500 font-semibold">
                        Please fill in all fields before sending.
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full inline-flex items-center justify-center px-6 py-4 text-xs font-bold uppercase tracking-widest rounded-xl bg-gradient-to-r from-gold-primary via-gold-light to-gold-dark text-navy-royal hover:from-gold-light hover:to-gold-primary transition-all duration-300 hover:scale-[1.01] active:scale-100 disabled:opacity-75 disabled:pointer-events-none cursor-pointer font-sans shadow-lg shadow-gold-primary/10 gap-2"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Submitting Inquiry...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Submit Inquiry
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

