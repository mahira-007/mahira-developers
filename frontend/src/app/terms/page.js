"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InquiryModal from "@/components/InquiryModal";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion, useReducedMotion } from "framer-motion";
import { FileText, Shield, Scale } from "lucide-react";

export default function TermsPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <Navbar />

      <main className="flex-1 bg-background">
        {/* Banner Section */}
        <section className="relative py-28 bg-navy-royal overflow-hidden">
          <div className="absolute inset-0 bg-[url('/projects/drone_luxury_plots.png')] bg-cover bg-center bg-no-repeat opacity-15 pointer-events-none scale-102" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-royal via-navy-royal/90 to-navy-royal/65 z-0" />
          
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center text-white pt-10">
            <span className="text-xs uppercase tracking-widest text-gold-light font-extrabold mb-3 block">
              Legal Framework
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight max-w-3xl mx-auto">
              Terms & Conditions
            </h1>
            <div className="h-0.5 w-20 bg-gold-primary mx-auto mt-6" />
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 max-w-4xl mx-auto px-6 text-left">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="prose prose-invert prose-slate max-w-none text-slate-light leading-relaxed flex flex-col gap-8"
          >
            <div className="flex items-center gap-3 p-4 rounded-xl border border-white/5 bg-background-alt/65 mb-4">
              <FileText className="w-5 h-5 text-gold-primary shrink-0" />
              <span className="text-xs text-slate-muted">Last Updated: July 15, 2026</span>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-4 flex items-center gap-2.5">
                <Scale className="w-5 h-5 text-gold-primary" />
                1. Acceptance of Terms
              </h2>
              <p className="text-xs sm:text-sm">
                Welcome to Mahira Developers. By accessing our website, purchasing our plotted layouts, or submitting inquiry forms, you agree to comply with and be bound by the following terms and conditions of use. Please read them carefully before using our services.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-4 flex items-center gap-2.5">
                <Shield className="w-5 h-5 text-gold-primary" />
                2. Land and Plotted Layout Details
              </h2>
              <p className="text-xs sm:text-sm">
                All land coordinates, layout plots, sizes, and pricing structures shown on this website are indicative and subject to change based on booking velocities and regulatory compliance updates. DTCP and RERA approval files are verified for general litigation checks; however, clients are advised to conduct their own legal audits prior to registration.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-4">
                3. Lead Generation and Marketing Communications
              </h2>
              <p className="text-xs sm:text-sm font-normal">
                By providing your name, email address, and phone number via our direct inquiry form or site visit booking links, you explicitly consent to receive transactional notifications, phone calls, and WhatsApp messages from our relationship managers in accordance with our Privacy Policy.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-4">
                4. Registration and Booking Allocations
              </h2>
              <p className="text-xs sm:text-sm">
                Plotted developments are allocated on a first-come, first-served basis. Bookings are only finalized upon receipt of advance payments and written confirmation from Mahira Developers' Sriperumbudur administrative center. Registrations are completed under standard state government rules.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-4">
                5. Limitation of Liability
              </h2>
              <p className="text-xs sm:text-sm">
                Mahira Developers and its executives shall not be liable for any direct or indirect damages arising out of the use of this website, brochure downloads, or physical site visit tours. For official legal agreements, please refer to the signed booking covenants.
              </p>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
      <InquiryModal />
      <WhatsAppButton />
    </>
  );
}
