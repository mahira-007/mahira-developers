"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = 2026;

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "/" },
        { name: "Projects", href: "/#projects" },
        { name: "About Us", href: "/about" },
        { name: "Gallery", href: "/gallery" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Projects Portfolio",
      links: [
        { name: "Arani Residential Space", href: "/project/1" },
        { name: "Sriperumbudur Township Layout", href: "/project/2" },
        { name: "Berigai Luxury Villa Plots", href: "/project/3" },
        { name: "Berigai Elite Phase 2", href: "/project/4" },
      ],
    },
  ];

  return (
    <footer className="bg-navy-royal border-t border-gold-primary/20 py-16 text-left text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-gold-primary/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 pb-12">
          
          {/* Logo and Contact Details Column */}
          <div className="md:col-span-6 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center gap-3 group">
                <img
                  src="/logo.jpg"
                  alt="Mahira Developers Logo"
                  className="h-12 w-auto object-contain rounded border border-gold-primary/30 group-hover:scale-102 transition-transform duration-300"
                />
                <div className="flex flex-col">
                  <span className="text-base font-black tracking-widest text-white uppercase leading-none">
                    MAHIRA<span className="text-gold-primary">.</span>
                  </span>
                  <span className="text-[8px] tracking-widest text-slate-400 font-bold uppercase mt-1">
                    Developers
                  </span>
                </div>
              </Link>
            </div>
            
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Mahira Developers is one of the leading names for premium land plotted developments and gated township infrastructure layouts in Tamil Nadu.
            </p>

            <div className="flex flex-col gap-3 text-xs text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-primary shrink-0" />
                <span className="leading-tight">
                  No.10, Sumathi Theatre Opposite, Bangalore Main Road, Sriperumbudur - 602105
                </span>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-primary shrink-0" />
                <a href="tel:+919443454395" className="hover:text-gold-primary transition-colors">
                  +91 94434 54395
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-primary shrink-0" />
                <a href="mailto:mahiradevelopers@gmail.com" className="hover:text-gold-primary transition-colors">
                  mahiradevelopers@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-6 grid grid-cols-2 gap-8">
            {footerLinks.map((group, idx) => (
              <div key={idx} className="flex flex-col gap-4">
                <h4 className="text-[10px] uppercase font-bold tracking-widest text-gold-primary border-b border-white/5 pb-1.5">
                  {group.title}
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {group.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link
                        href={link.href}
                        className="text-xs text-slate-400 hover:text-gold-primary transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 border-t border-gold-primary/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <span>&copy; {currentYear} Mahira Developers. All Rights Reserved.</span>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-gold-primary transition-colors">
              Terms & Conditions
            </Link>
            <Link href="#" className="hover:text-gold-primary transition-colors">
              Privacy Policy
            </Link>
            <span className="text-gold-primary">DTCP & RERA Approved</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
