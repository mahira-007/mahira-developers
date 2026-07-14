"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 bg-navy-royal z-[9999] flex flex-col items-center justify-center text-white"
        >
          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8"
            >
              <div className="px-6 py-4 rounded-xl border border-gold-primary/20 bg-navy-light/40 backdrop-blur-md shadow-xl flex items-center justify-center gap-3">
                <img
                  src="/logo.jpg"
                  alt="Mahira Developers Logo"
                  className="h-10 w-auto object-contain rounded border border-gold-primary/30"
                />
                <div className="flex flex-col text-left">
                  <span className="text-base font-black tracking-widest text-white uppercase leading-none">
                    MAHIRA<span className="text-gold-primary">.</span>
                  </span>
                  <span className="text-[8px] tracking-widest text-slate-400 font-bold uppercase mt-1">
                    Developers
                  </span>
                </div>
              </div>
            </motion.div>
            
            <div className="w-48 h-[1px] bg-white/10 relative overflow-hidden rounded-full">
              <motion.div
                initial={{ left: "-100%" }}
                animate={{ left: "100%" }}
                transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-gold-primary to-transparent"
              />
            </div>
            
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="text-[9px] uppercase tracking-widest text-gold-light mt-4 font-bold font-mono"
            >
              Excellence Redefined
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
