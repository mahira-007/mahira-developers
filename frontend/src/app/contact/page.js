"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InquiryModal from "@/components/InquiryModal";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, Clock, MapPin, Send } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export default function ContactPage() {
  const shouldReduceMotion = useReducedMotion();

  const companyDetails = {
    name: "Mahira Developers",
    address: "No.10, Sumathi Theatre Opposite, Bangalore Main Road, Sriperumbudur - 602105",
    phone: "+91 94434 54395",
    email: "mahiradevelopers@gmail.com",
    hours: "Monday – Saturday, 9:00 AM – 6:00 PM"
  };

  const whatsappMessage = encodeURIComponent("Hello Mahira Developers, I would like to contact your Sriperumbudur office regarding plotted layout options.");
  const whatsappUrl = `https://wa.me/919443454395?text=${whatsappMessage}`;

  return (
    <>
      <Navbar />
      
      <main className="flex-1 bg-background">
        
        {/* Banner */}
        <section className="relative py-32 bg-navy-royal overflow-hidden">
          <div className="absolute inset-0 bg-[url('/projects/drone_luxury_plots.png')] bg-cover bg-center bg-no-repeat opacity-20 pointer-events-none scale-102" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-royal via-navy-royal/90 to-navy-royal/65 z-0" />
          
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center text-white">
            <span className="text-xs uppercase tracking-widest text-gold-light font-extrabold mb-3 block">
              Contact Center
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight max-w-3xl mx-auto">
              Connect with Mahira Developers
            </h1>
            <div className="h-0.5 w-20 bg-gold-primary mx-auto mt-6" />
          </div>
        </section>

        {/* Office Details & CTAs Grid */}
        <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-start">
            
            {/* Left: Branding & Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="lg:col-span-5 p-8 border border-white/5 rounded-3xl bg-background-alt/50 text-left relative overflow-hidden shadow-inner flex flex-col justify-between"
            >
              <div>
                {/* Brand Header */}
                <div className="flex items-center gap-4 mb-8">
                  <img
                    src="/logo.jpg"
                    alt="Mahira Developers Logo"
                    className="h-14 w-auto object-contain rounded border border-gold-primary/30"
                  />
                  <div className="flex flex-col">
                    <span className="text-base font-black tracking-widest text-white uppercase leading-none">
                      MAHIRA<span className="text-gold-primary">.</span>
                    </span>
                    <span className="text-[9px] tracking-widest text-slate-muted font-bold uppercase mt-1">
                      Developers
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-muted leading-relaxed mb-8">
                  Reach out directly to our relationships team at our Sriperumbudur headquarters. We guide you through site layout picking, RERA checks, and immediate registration.
                </p>

                {/* Structured Metadata details */}
                <div className="flex flex-col gap-5 text-xs text-slate-light mb-8">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4.5 h-4.5 text-gold-primary shrink-0" />
                    <span className="leading-snug">{companyDetails.address}</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="w-4.5 h-4.5 text-gold-primary shrink-0" />
                    <a href={`tel:${companyDetails.phone}`} className="hover:text-gold-primary font-bold transition-colors">
                      {companyDetails.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-4.5 h-4.5 text-gold-primary shrink-0" />
                    <a href={`mailto:${companyDetails.email}`} className="hover:text-gold-primary font-bold transition-colors">
                      {companyDetails.email}
                    </a>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4.5 h-4.5 text-gold-primary shrink-0" />
                    <span>
                      <strong className="text-white block mb-0.5">Office Hours</strong>
                      {companyDetails.hours}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons Drawer */}
              <div className="flex flex-col gap-3 pt-6 border-t border-white/5">
                <a
                  href={`tel:${companyDetails.phone}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-gold-primary via-gold-light to-gold-dark text-navy-royal hover:from-gold-light hover:to-gold-primary text-xs font-bold uppercase tracking-widest transition-all cursor-pointer font-sans shadow-md shadow-gold-primary/10 hover:scale-102"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:shadow-lg hover:shadow-emerald-500/20 text-xs font-bold uppercase tracking-widest transition-all cursor-pointer font-sans hover:scale-102"
                >
                  <Send className="w-4 h-4" />
                  WhatsApp Us
                </a>

                <a
                  href={`mailto:${companyDetails.email}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl border border-white/10 bg-background text-white hover:border-gold-primary hover:text-gold-primary hover:bg-gold-primary/10 text-xs font-bold uppercase tracking-widest transition-all cursor-pointer font-sans hover:scale-102"
                >
                  <Mail className="w-4 h-4" />
                  Email Us
                </a>
              </div>
            </motion.div>

            {/* Right: Contact Form wrapper */}
            <div className="lg:col-span-7 rounded-3xl border border-white/5 overflow-hidden shadow-sm">
              <ContactForm />
            </div>

          </div>

        </section>

      </main>

      <Footer />
      <InquiryModal />
      <WhatsAppButton />
    </>
  );
}
