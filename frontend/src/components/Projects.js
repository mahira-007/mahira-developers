"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { 
  MapPin, ArrowRight, ShieldCheck, TreePine, Droplet, Zap, 
  X, Download, PhoneCall, GraduationCap, Activity, Car, 
  Compass, CheckCircle2, DollarSign, MoveRight, LayoutGrid 
} from "lucide-react";
import Link from "next/link";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [brochureStatus, setBrochureStatus] = useState("idle"); // idle, downloading, success

  const projects = [
    {
      id: 1,
      title: "Premium Residential Space",
      location: "Arani, Tamil Nadu",
      status: "Available",
      type: "Apartments & Gated Plots",
      price: "Starting from ₹45 Lakhs",
      sizes: "900 - 1,800 Sq.Ft.",
      approval: "DTCP Approved",
      description: "Luxurious residential space offering secure community living with state-of-the-art infrastructure, wide concrete roads, and pristine environments.",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200/50",
      media: [
        { type: "video", src: "/projects/arani%20video%201.mp4" },
        { type: "image", src: "/projects/sriperumbudur%20house%204%20portions.jpeg" },
        { type: "image", src: "/projects/sunrise%20avenue.jpeg" }
      ],
      amenities: [
        { icon: ShieldCheck, text: "Gated Security" },
        { icon: Compass, text: "Concrete Roads" },
        { icon: Zap, text: "24/7 Electricity" },
        { icon: Droplet, text: "Drinking Water Line" }
      ],
      availability: { sold: 45, total: 60 },
      nearby: [
        { icon: GraduationCap, label: "Education", text: "Arani Govt High School (5 mins)" },
        { icon: Activity, label: "Healthcare", text: "Arani General Hospital (8 mins)" },
        { icon: Car, label: "Connectivity", text: "Chennai-Tirupati Highway (12 mins)" }
      ],
      address: "Survey No. 421/2, Arani bypass Road, Arani, Tamil Nadu 632301"
    },
    {
      id: 2,
      title: "Modern Township Layout",
      location: "Sriperumbudur, Tamil Nadu",
      status: "Selling Fast",
      type: "Master-Planned Gated Township",
      price: "Starting from ₹35 Lakhs",
      sizes: "1,200 - 2,400 Sq.Ft.",
      approval: "DTCP & RERA Approved",
      description: "Integrated gated township located in Sriperumbudur industrial hub. Features elite clubhouse, commercial zones, and children's playground areas.",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200/50",
      media: [
        { type: "image", src: "/projects/sriperumbudur%20house%204%20portions.jpeg" },
        { type: "image", src: "/projects/sunrise%20avenue.jpeg" }
      ],
      amenities: [
        { icon: Compass, text: "Clubhouse Access" },
        { icon: TreePine, text: "Landscaped Park" },
        { icon: Droplet, text: "Underground Sewage" },
        { icon: ShieldCheck, text: "24/7 Gated Security" }
      ],
      availability: { sold: 92, total: 110 },
      nearby: [
        { icon: GraduationCap, label: "Education", text: "Ryan International School (10 mins)" },
        { icon: Activity, label: "Healthcare", text: "Sriperumbudur Hospital (8 mins)" },
        { icon: Car, label: "Connectivity", text: "Chennai-Bangalore Expressway (5 mins)" }
      ],
      address: "Pillaipakkam Main Road, Sriperumbudur, Tamil Nadu 602105"
    },
    {
      id: 3,
      title: "Luxury Villa Plots",
      location: "Berigai, Tamil Nadu",
      status: "Available",
      type: "Premium Villa Layout",
      price: "Starting from ₹18 Lakhs",
      sizes: "1,200 - 4,000 Sq.Ft.",
      approval: "DTCP Approved",
      description: "Elegant villa plots positioned amidst tranquil green boundaries. Premium underground utilities ready for immediate house construction.",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200/50",
      media: [
        { type: "video", src: "/projects/berigai%20video%201.mp4" },
        { type: "image", src: "/projects/sunrise%20avenue.jpeg" },
        { type: "image", src: "/projects/sriperumbudur%20house%204%20portions.jpeg" }
      ],
      amenities: [
        { icon: Droplet, text: "24/7 Water Supply" },
        { icon: Zap, text: "Underground Power" },
        { icon: Compass, text: "Premium Blacktop Roads" },
        { icon: TreePine, text: "Clean Green Zones" }
      ],
      availability: { sold: 28, total: 50 },
      nearby: [
        { icon: GraduationCap, label: "Education", text: "Berigai Matriculation School (5 mins)" },
        { icon: Activity, label: "Healthcare", text: "Hosur Medical Center (20 mins)" },
        { icon: Car, label: "Connectivity", text: "Hosur-Berigai Highway (2 mins)" }
      ],
      address: "Shoolagiri-Berigai Road, Berigai, Tamil Nadu 635105"
    },
    {
      id: 4,
      title: "Elite Phase 2 Development",
      location: "Berigai, Tamil Nadu",
      status: "Selling Fast",
      type: "Elite Gated Layout",
      price: "Starting from ₹22 Lakhs",
      sizes: "1,500 - 3,000 Sq.Ft.",
      approval: "DTCP & RERA Approved",
      description: "Phase 2 extension featuring grand entrance layout, wider tarmac roads, and proposed health clinics, catering to high-yield investment options.",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200/50",
      media: [
        { type: "image", src: "/projects/sunrise%20avenue.jpeg" },
        { type: "image", src: "/projects/sriperumbudur%20house%204%20portions.jpeg" }
      ],
      amenities: [
        { icon: Compass, text: "Elevated Entrance Arch" },
        { icon: TreePine, text: "Children's Play Zone" },
        { icon: Droplet, text: "Rainwater Harvesting" },
        { icon: ShieldCheck, text: "CCTV Surveillance" }
      ],
      availability: { sold: 15, total: 40 },
      nearby: [
        { icon: GraduationCap, label: "Education", text: "Government Primary School (4 mins)" },
        { icon: Activity, label: "Healthcare", text: "Primary Health Center (3 mins)" },
        { icon: Car, label: "Connectivity", text: "Hosur National Highway (15 mins)" }
      ],
      address: "Devasthanam Road, Berigai, Tamil Nadu 635105"
    },
  ];

  const triggerInquiry = (projectName) => {
    const event = new CustomEvent("open-inquiry-modal", { detail: { project: projectName } });
    window.dispatchEvent(event);
  };

  const openDetails = (project) => {
    setSelectedProject(project);
    setActiveMediaIndex(0);
    setBrochureStatus("idle");
  };

  const handleDownloadBrochure = (projectName, fileUrl) => {
    setBrochureStatus("downloading");
    setTimeout(() => {
      // Simulate file download trigger
      const link = document.createElement("a");
      link.href = fileUrl;
      link.setAttribute("download", `${projectName}_Brochure.jpg`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setBrochureStatus("success");
    }, 1200);
  };

  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0.05 : 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: shouldReduceMotion ? "tween" : "spring",
        stiffness: 60,
        damping: 15,
        duration: shouldReduceMotion ? 0.35 : undefined,
      },
    },
  };

  return (
    <section id="projects" className="py-28 bg-background-alt relative border-t border-slate-100 overflow-hidden">
      {/* Background luxury ambient glow */}
      <div className="absolute top-1/3 left-10 w-[450px] h-[450px] rounded-full bg-gold-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-[550px] h-[550px] rounded-full bg-navy-royal/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-widest text-gold-primary font-extrabold mb-3 block">
            Featured Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-royal mb-6 tracking-tight">
            Elite Real Estate Developments
          </h2>
          <p className="text-sm md:text-base text-slate-muted max-w-2xl mx-auto leading-relaxed">
            Discover our high-end ongoing residential projects and highly anticipated upcoming layouts situated in prime growth corridors across Tamil Nadu.
          </p>
          <div className="h-0.5 w-20 bg-gradient-to-r from-transparent via-gold-primary to-transparent mx-auto mt-6" />
        </div>

        {/* Projects Grid (Responsive: 3 columns desktop, 2 tablet, 1 mobile) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {projects.map((project) => {
            const displayMedia = project.media[0];
            return (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover={shouldReduceMotion ? {
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.05)",
                } : { 
                  y: -8,
                  boxShadow: "0 20px 40px rgba(197, 168, 93, 0.12)",
                  borderColor: "rgba(197, 168, 93, 0.4)"
                }}
                className="group rounded-2xl border border-slate-200 bg-white p-5 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl"
              >
                <div>
                  {/* Image wrapper with Hover Zoom */}
                  <div className="relative w-full h-56 rounded-xl overflow-hidden mb-5 border border-slate-100 bg-slate-50 flex items-center justify-center shadow-inner">
                    {displayMedia.type === "video" ? (
                      <video
                        src={displayMedia.src}
                        muted
                        loop
                        playsInline
                        className={`w-full h-full object-cover transition-transform duration-700 ${shouldReduceMotion ? "" : "group-hover:scale-105"}`}
                        onMouseOver={(e) => !shouldReduceMotion && e.target.play()}
                        onMouseOut={(e) => !shouldReduceMotion && e.target.pause()}
                      />
                    ) : (
                      <img
                        src={displayMedia.src}
                        alt={project.title}
                        className={`w-full h-full object-cover transition-transform duration-700 ${shouldReduceMotion ? "" : "group-hover:scale-105"}`}
                      />
                    )}

                    {/* Status & Approval Badges overlay */}
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded text-[8px] font-bold uppercase tracking-wider bg-white/95 border border-gold-primary/20 text-navy-royal shadow-sm backdrop-blur-sm">
                      {project.approval}
                    </span>
                    <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-[9px] font-extrabold uppercase tracking-wider border shadow-sm backdrop-blur-sm ${project.badgeColor}`}>
                      {project.status}
                    </span>

                    {/* Video/Image tag overlay */}
                    <span className="absolute bottom-3 right-3 font-mono text-[8px] font-extrabold text-white bg-navy-royal/85 px-2.5 py-1 rounded tracking-wider z-10 border border-white/10 backdrop-blur-sm">
                      {displayMedia.type === "video" ? "HOVER TO PLAY VIDEO" : "PROJECT LAYOUT"}
                    </span>
                  </div>

                  {/* Header: Title and Location */}
                  <div className="flex items-center gap-1.5 text-slate-muted text-xs font-bold uppercase tracking-wider mb-2 text-left">
                    <MapPin className="w-3.5 h-3.5 text-gold-primary" />
                    <span>{project.location}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-extrabold text-navy-royal mb-1 group-hover:text-gold-primary transition-colors text-left tracking-tight">
                    {project.title}
                  </h3>

                  <span className="inline-block text-[11px] font-bold text-slate-light mb-4 uppercase tracking-wider text-left w-full">
                    {project.type}
                  </span>

                  {/* Plot specifications */}
                  <div className="grid grid-cols-2 gap-4 py-3 px-4 rounded-xl bg-slate-50 border border-slate-100 mb-5 text-left">
                    <div>
                      <div className="text-[9px] font-bold uppercase tracking-wider text-slate-muted">Starting Price</div>
                      <div className="text-sm font-extrabold text-navy-royal">{project.price}</div>
                    </div>
                    <div>
                      <div className="text-[9px] font-bold uppercase tracking-wider text-slate-muted">Plot Sizes</div>
                      <div className="text-sm font-extrabold text-navy-royal">{project.sizes}</div>
                    </div>
                  </div>

                  {/* Short Description */}
                  <p className="text-xs text-slate-muted mb-6 leading-relaxed text-left">
                    {project.description}
                  </p>
                </div>

                {/* Bottom Card Actions */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => openDetails(project)}
                    className="flex-1 inline-flex items-center justify-center px-4 py-2.5 text-[10px] font-bold uppercase tracking-widest rounded-lg border border-slate-200 hover:border-gold-primary hover:bg-gold-primary/5 hover:text-gold-primary transition-all duration-200 cursor-pointer font-sans"
                  >
                    View Details
                  </button>

                  <button
                    onClick={() => triggerInquiry(project.title)}
                    className="flex-1 inline-flex items-center justify-center px-4 py-2.5 text-[10px] font-bold uppercase tracking-widest rounded-lg bg-gradient-to-r from-gold-primary to-gold-dark text-navy-royal hover:from-gold-light hover:to-gold-primary transition-all duration-300 hover:scale-[1.02] cursor-pointer font-sans shadow-md shadow-gold-primary/10"
                  >
                    Enquire Now
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>

      {/* Premium Detailed Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-navy-royal/70 backdrop-blur-md"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: "spring", duration: 0.6 }}
              className="relative w-full max-w-4xl bg-white rounded-3xl border border-slate-200 shadow-2xl z-10 text-left overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
            >
              {/* Top decoration strip */}
              <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-gold-primary via-gold-light to-gold-dark z-30" />

              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-1.5 rounded-full bg-black/45 hover:bg-black/65 text-white z-30 transition-colors shadow-lg"
              >
                <X className="w-4 h-4" />
              </button>

              {/* LEFT COLUMN: Gallery & Media viewer */}
              <div className="w-full md:w-1/2 bg-slate-900 flex flex-col justify-between p-4 relative min-h-[300px] md:min-h-0">
                <div className="w-full flex-1 flex items-center justify-center rounded-2xl overflow-hidden bg-slate-950 relative h-64 md:h-auto">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeMediaIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 w-full h-full"
                    >
                      {selectedProject.media[activeMediaIndex].type === "video" ? (
                        <video
                          src={selectedProject.media[activeMediaIndex].src}
                          controls
                          autoPlay
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <img
                          src={selectedProject.media[activeMediaIndex].src}
                          alt={selectedProject.title}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Gallery Thumbnail Bar */}
                <div className="flex gap-2 mt-4 overflow-x-auto pb-1">
                  {selectedProject.media.map((med, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveMediaIndex(idx)}
                      className={`relative w-16 h-12 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 cursor-pointer ${
                        activeMediaIndex === idx ? "border-gold-primary scale-102 shadow-md" : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                    >
                      {med.type === "video" ? (
                        <div className="w-full h-full bg-slate-800 flex items-center justify-center relative">
                          <video src={med.src} className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-[8px] font-bold">▶</div>
                        </div>
                      ) : (
                        <img src={med.src} className="w-full h-full object-cover" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* RIGHT COLUMN: Details & Features */}
              <div className="w-full md:w-1/2 p-6 md:p-8 overflow-y-auto flex flex-col justify-between max-h-[50vh] md:max-h-none">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-gold-primary mb-1.5 block">
                    {selectedProject.approval}
                  </span>
                  <h3 className="text-2xl font-black text-navy-royal mb-2 tracking-tight leading-tight">
                    {selectedProject.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-slate-muted text-xs font-bold uppercase tracking-wider mb-5">
                    <MapPin className="w-4 h-4 text-gold-primary" />
                    <span>{selectedProject.location}</span>
                  </div>

                  {/* Pricing and plot specifications */}
                  <div className="grid grid-cols-2 gap-4 py-4 px-5 rounded-2xl bg-slate-50 border border-slate-200/60 mb-6">
                    <div>
                      <div className="text-[9px] font-bold uppercase tracking-widest text-slate-muted">Starting Price</div>
                      <div className="text-base font-extrabold text-navy-royal">{selectedProject.price}</div>
                    </div>
                    <div>
                      <div className="text-[9px] font-bold uppercase tracking-widest text-slate-muted">Dimensions</div>
                      <div className="text-base font-extrabold text-navy-royal">{selectedProject.sizes}</div>
                    </div>
                  </div>

                  {/* Plot Availability Progress Bar */}
                  <div className="mb-6">
                    <div className="flex justify-between text-xs font-bold mb-2">
                      <span className="text-navy-royal uppercase tracking-wider text-[10px]">Development Progress</span>
                      <span className="text-gold-primary">
                        {selectedProject.availability.sold} / {selectedProject.availability.total} Plots Booked
                      </span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden border border-slate-200/50">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(selectedProject.availability.sold / selectedProject.availability.total) * 100}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-gold-primary to-gold-dark rounded-full"
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-muted leading-relaxed mb-6">
                    {selectedProject.description}
                  </p>

                  {/* Amenities Grid */}
                  <div className="mb-6">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-navy-royal mb-3 border-b border-slate-100 pb-1.5">
                      Premium Amenities
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {selectedProject.amenities.map((amenity, idx) => {
                        const Icon = amenity.icon;
                        return (
                          <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-light">
                            <div className="w-6 h-6 rounded-md bg-gold-primary/10 flex items-center justify-center text-gold-primary">
                              <Icon className="w-3.5 h-3.5" />
                            </div>
                            <span>{amenity.text}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Nearby Hotspots */}
                  <div className="mb-8">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-navy-royal mb-3 border-b border-slate-100 pb-1.5">
                      Nearby Attractions & Reach
                    </h4>
                    <div className="flex flex-col gap-3">
                      {selectedProject.nearby.map((hotspot, idx) => {
                        const Icon = hotspot.icon;
                        return (
                          <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-muted">
                            <div className="w-6 h-6 rounded-md bg-slate-100 flex items-center justify-center text-slate-500 shrink-0">
                              <Icon className="w-3.5 h-3.5" />
                            </div>
                            <div>
                              <strong className="text-navy-royal font-bold text-[10px] uppercase block tracking-wider leading-none mb-0.5">{hotspot.label}</strong>
                              <span className="text-[11px] leading-tight text-slate-light block">{hotspot.text}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Interactive Layout Link */}
                  <div className="mb-6">
                    <Link
                      href={`/project/${selectedProject.id}`}
                      onClick={() => setSelectedProject(null)}
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-[10px] font-bold uppercase tracking-widest rounded-xl bg-navy-royal text-gold-primary border border-gold-primary/20 hover:bg-gold-primary/10 transition-all cursor-pointer font-sans shadow-md"
                    >
                      <LayoutGrid className="w-4 h-4" />
                      View Interactive Plot Layout
                    </Link>
                  </div>
                </div>

                {/* Actions bottom drawer */}
                <div className="pt-5 border-t border-slate-100 flex flex-col sm:flex-row gap-3 items-center">
                  <button
                    onClick={() => handleDownloadBrochure(selectedProject.title, selectedProject.media[selectedProject.media.length - 1].src)}
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-widest rounded-xl border border-slate-200 hover:border-gold-primary hover:text-gold-primary transition-all duration-200 cursor-pointer font-sans"
                    disabled={brochureStatus === "downloading"}
                  >
                    <Download className="w-3.5 h-3.5" />
                    {brochureStatus === "downloading" ? "Downloading..." : brochureStatus === "success" ? "Downloaded!" : "Brochure"}
                  </button>

                  <a
                    href={`https://wa.me/919443454395?text=${encodeURIComponent(`Hello Mahira Developers, I am interested in ${selectedProject.title} in ${selectedProject.location}. Please send brochures and plot price quotes.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-widest rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 cursor-pointer"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    WhatsApp
                  </a>

                  <button
                    onClick={() => {
                      triggerInquiry(selectedProject.title);
                      setSelectedProject(null);
                    }}
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-widest rounded-xl bg-gradient-to-r from-gold-primary to-gold-dark text-navy-royal hover:from-gold-light hover:to-gold-primary transition-all duration-300 cursor-pointer"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}


