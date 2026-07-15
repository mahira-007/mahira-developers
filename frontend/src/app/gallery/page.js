"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Play, X, ZoomIn } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InquiryModal from "@/components/InquiryModal";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function GalleryPage() {
  const shouldReduceMotion = useReducedMotion();
  const [activeMedia, setActiveMedia] = useState(null); // null or media object
  const [filter, setFilter] = useState("all"); // all, images, videos

  const mediaItems = [
    { type: "image", src: "/projects/drone_luxury_plots.png", title: "Luxury Plotted Development", category: "images", tag: "drones", size: "col-span-2 row-span-1 h-80" },
    { type: "video", src: "/projects/arani-video-1.mp4", title: "Arani Premium Development walkthrough", category: "videos", size: "col-span-1 row-span-1 h-80" },
    { type: "image", src: "/projects/sriperumbudur-house-4-portions.jpeg", title: "Gated Townhouse Elevations", category: "images", size: "col-span-1 row-span-1 h-80" },
    { type: "video", src: "/projects/berigai-video-1.mp4", title: "Luxury Gated Layout walkthrough", category: "videos", size: "col-span-1 row-span-1 h-80" },
    { type: "image", src: "/projects/sunrise-avenue.jpeg", title: "Entrance Elevation Archway", category: "images", size: "col-span-2 row-span-1 h-80" },
  ];

  const filteredItems = mediaItems.filter(item => {
    if (filter === "all") return true;
    if (filter === "images") return item.type === "image";
    if (filter === "videos") return item.type === "video";
    return true;
  });

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
              Portfolio Media
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight max-w-3xl mx-auto">
              Visualizing Premium Living
            </h1>
            <div className="h-0.5 w-20 bg-gold-primary mx-auto mt-6" />
          </div>
        </section>

        {/* Media Controls */}
        <section className="py-12 bg-background-alt border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-center gap-4">
            {["all", "images", "videos"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all cursor-pointer ${
                  filter === f
                    ? "bg-background text-gold-primary border border-gold-primary/20 shadow-md"
                    : "bg-background-alt text-slate-muted border border-white/10 hover:border-gold-primary/45"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </section>

        {/* Masonry Layout Grid */}
        <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-max">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={idx}
                layout={!shouldReduceMotion}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                onClick={() => setActiveMedia(item)}
                className="group relative rounded-2xl overflow-hidden bg-background-alt border border-white/5 cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300 h-64 md:h-72"
              >
                {/* Media backdrop */}
                {item.type === "video" ? (
                  <div className="w-full h-full relative">
                    <video
                      src={item.src}
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                      onMouseOver={(e) => !shouldReduceMotion && e.target.play()}
                      onMouseOut={(e) => !shouldReduceMotion && e.target.pause()}
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-gold-primary/95 text-navy-royal flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                        <Play className="w-5 h-5 fill-navy-royal pl-0.5" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full relative overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="w-10 h-10 rounded-full bg-background/95 text-gold-primary flex items-center justify-center shadow-md border border-white/5">
                        <ZoomIn className="w-4 h-4 text-gold-primary" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Overlay details */}
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/85 via-black/45 to-transparent text-left pointer-events-none">
                  <span className="text-[8px] font-bold text-gold-light uppercase tracking-widest mb-1.5 block">
                    {item.type} &bull; {item.tag || item.category}
                  </span>
                  <h4 className="text-sm font-extrabold text-white leading-tight tracking-tight">
                    {item.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </main>

      {/* Lightbox / Video Overlay Viewer */}
      <AnimatePresence>
        {activeMedia && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveMedia(null)}
              className="absolute inset-0 bg-navy-royal/95 backdrop-blur-md"
            />
            
            {/* Media Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl max-h-[85vh] bg-black rounded-2xl overflow-hidden border border-white/10 z-10 flex items-center justify-center shadow-2xl"
            >
              {/* Close button */}
              <button
                onClick={() => setActiveMedia(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/45 hover:bg-black/65 text-white z-30 transition-colors shadow-lg cursor-pointer"
                aria-label="Close media viewer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-full h-[60vh] md:h-[70vh] flex items-center justify-center">
                {activeMedia.type === "video" ? (
                  <video
                    src={activeMedia.src}
                    controls
                    autoPlay
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <img
                    src={activeMedia.src}
                    alt={activeMedia.title}
                    className="w-full h-full object-contain"
                  />
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
      <InquiryModal />
      <WhatsAppButton />
    </>
  );
}
