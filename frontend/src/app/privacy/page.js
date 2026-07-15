"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InquiryModal from "@/components/InquiryModal";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion, useReducedMotion } from "framer-motion";
import { Shield, Eye, Lock } from "lucide-react";

export default function PrivacyPage() {
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
              Data Protection
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight max-w-3xl mx-auto">
              Privacy Policy
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
              <Eye className="w-5 h-5 text-gold-primary shrink-0" />
              <span className="text-xs text-slate-muted">Last Updated: July 15, 2026</span>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-4 flex items-center gap-2.5">
                <Shield className="w-5 h-5 text-gold-primary" />
                1. Information We Collect
              </h2>
              <p className="text-xs sm:text-sm">
                At Mahira Developers, we collect basic customer information when you submit inquiries, book site visits, or download layout blueprints. This includes:
              </p>
              <ul className="list-disc pl-5 mt-2 text-xs sm:text-sm flex flex-col gap-1.5">
                <li>Personal Identity Data (Full Name)</li>
                <li>Contact Credentials (Phone Number, Email Address)</li>
                <li>Property Preferences (Interested layout, sizes, budget ranges)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-4 flex items-center gap-2.5">
                <Lock className="w-5 h-5 text-gold-primary" />
                2. How We Use Your Data
              </h2>
              <p className="text-xs sm:text-sm">
                Your data is exclusively used to streamline our consulting and plotting sales coordination. Specifically:
              </p>
              <ul className="list-disc pl-5 mt-2 text-xs sm:text-sm flex flex-col gap-1.5">
                <li>To allocate relationship managers for virtual or physical walkthroughs.</li>
                <li>To verify identity coordinates for DTCP/RERA allotment blueprints.</li>
                <li>To communicate legal, registration support, or booking confirmation guidelines via phone calls or WhatsApp.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-4">
                3. Data Storage and Security
              </h2>
              <p className="text-xs sm:text-sm">
                We implement industry-standard database encryption protocols to safeguard lead coordinates. Your details are strictly private and are never sold, rented, or shared with third-party marketing brokers. Access is restricted to authorized administrative personnel inside our Sriperumbudur registration office.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-4">
                4. Cookies and Web Analytics
              </h2>
              <p className="text-xs sm:text-sm">
                Our site uses basic cookies to optimize user experience, store layout zoom selections, and compile web analytics traffic data. You can disable cookies directly in your browser settings if desired.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-4">
                5. Contact Information
              </h2>
              <p className="text-xs sm:text-sm">
                For questions regarding data removal or privacy standards, please email our administrative team at{" "}
                <a href="mailto:mahiradevelopers@gmail.com" className="text-gold-primary hover:underline">
                  mahiradevelopers@gmail.com
                </a>
                .
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
