"use client";

import { use, useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InquiryModal from "@/components/InquiryModal";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { 
  MapPin, ShieldCheck, TreePine, Droplet, Zap, 
  Download, PhoneCall, GraduationCap, Activity, Car, 
  Compass, CheckCircle2, Calendar, FileText, Info, LayoutGrid 
} from "lucide-react";

export default function ProjectDetailPage({ params }) {
  const resolvedParams = use(params);
  const projectId = parseInt(resolvedParams.id, 10);
  const shouldReduceMotion = useReducedMotion();

  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [hoveredPlot, setHoveredPlot] = useState(null);
  const [brochureStatus, setBrochureStatus] = useState("idle");

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

  const project = projects.find(p => p.id === projectId) || projects[0];

  // SVG Plots Data representing Gated Layout
  const plots = [
    { id: 1, label: "P-01", size: "1,500 Sq.Ft.", status: "Available", price: "₹28L", x: 20, y: 30, w: 45, h: 45 },
    { id: 2, label: "P-02", size: "1,500 Sq.Ft.", status: "Booked", price: "₹28L", x: 75, y: 30, w: 45, h: 45 },
    { id: 3, label: "P-03", size: "1,200 Sq.Ft.", status: "Available", price: "₹22L", x: 130, y: 30, w: 45, h: 45 },
    { id: 4, label: "P-04", size: "1,200 Sq.Ft.", status: "Available", price: "₹22L", x: 185, y: 30, w: 45, h: 45 },
    { id: 5, label: "P-05", size: "1,800 Sq.Ft.", status: "Booked", price: "₹34L", x: 240, y: 30, w: 45, h: 45 },

    { id: 6, label: "P-06", size: "1,500 Sq.Ft.", status: "Available", price: "₹28L", x: 20, y: 110, w: 45, h: 45 },
    { id: 7, label: "P-07", size: "1,500 Sq.Ft.", status: "Booked", price: "₹28L", x: 75, y: 110, w: 45, h: 45 },
    { id: 8, label: "P-08", size: "1,200 Sq.Ft.", status: "Available", price: "₹22L", x: 130, y: 110, w: 45, h: 45 },
    { id: 9, label: "P-09", size: "1,200 Sq.Ft.", status: "Available", price: "₹22L", x: 185, y: 110, w: 45, h: 45 },
    { id: 10, label: "P-10", size: "1,800 Sq.Ft.", status: "Available", price: "₹34L", x: 240, y: 110, w: 45, h: 45 },

    { id: 11, label: "P-11", size: "1,500 Sq.Ft.", status: "Available", price: "₹28L", x: 20, y: 190, w: 45, h: 45 },
    { id: 12, label: "P-12", size: "1,500 Sq.Ft.", status: "Booked", price: "₹28L", x: 75, y: 190, w: 45, h: 45 },
    { id: 13, label: "P-13", size: "1,200 Sq.Ft.", status: "Available", price: "₹22L", x: 130, y: 190, w: 45, h: 45 },
    { id: 14, label: "P-14", size: "1,200 Sq.Ft.", status: "Booked", price: "₹22L", x: 185, y: 190, w: 45, h: 45 },
    { id: 15, label: "P-15", size: "2,000 Sq.Ft.", status: "Available", price: "₹38L", x: 240, y: 190, w: 45, h: 45 },
  ];

  const handleDownloadBrochure = () => {
    setBrochureStatus("downloading");
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = project.media[project.media.length - 1].src;
      link.setAttribute("download", `${project.title}_Brochure.jpg`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setBrochureStatus("success");
    }, 1200);
  };

  const triggerInquiry = (actionType) => {
    const event = new CustomEvent("open-inquiry-modal", { detail: { project: `${project.title} - ${actionType}` } });
    window.dispatchEvent(event);
  };

  return (
    <>
      <Navbar />

      <main className="flex-1 bg-background pt-20">
        
        {/* Cinematic Hero Banner */}
        <section className="relative h-[55vh] min-h-[400px] bg-slate-900 overflow-hidden">
          <motion.div
            initial={shouldReduceMotion ? {} : { scale: 1.05 }}
            animate={shouldReduceMotion ? {} : { scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={project.media[activeMediaIndex].type === "video" ? "/projects/drone_luxury_plots.png" : project.media[activeMediaIndex].src}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-background via-slate-900/60 to-transparent z-10" />

          <div className="absolute bottom-10 left-0 right-0 max-w-7xl mx-auto px-6 md:px-12 z-20 text-left text-white flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-gold-light font-extrabold mb-2.5 block">
                {project.approval} &bull; {project.status}
              </span>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-2 leading-tight">
                {project.title}
              </h1>
              <div className="flex items-center gap-1.5 text-xs text-slate-300 font-bold uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-gold-primary" />
                <span>{project.location}</span>
              </div>
            </div>
            
            <div className="flex gap-4">
              <span className="bg-white/10 backdrop-blur-md border border-white/20 py-2 px-5 rounded-xl text-left">
                <div className="text-[9px] uppercase tracking-wider text-slate-300">Sizes From</div>
                <div className="text-sm font-extrabold text-white">{project.sizes}</div>
              </span>
              <span className="bg-white/10 backdrop-blur-md border border-white/20 py-2 px-5 rounded-xl text-left">
                <div className="text-[9px] uppercase tracking-wider text-slate-300">Pricing Starting</div>
                <div className="text-sm font-extrabold text-gold-primary">{project.price}</div>
              </span>
            </div>
          </div>
        </section>

        {/* Dynamic Detail grid */}
        <section className="py-24 section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left: Gallery & Amenities */}
            <div className="lg:col-span-7 text-left">
              
              {/* Drone Thumbnails gallery */}
              <div className="mb-12">
                <h3 className="text-lg font-black text-white mb-6 tracking-tight">Drone View & Layout Gallery</h3>
                <div className="w-full h-80 rounded-2xl overflow-hidden bg-slate-950 mb-4 border border-white/5 shadow-inner">
                  {project.media[activeMediaIndex].type === "video" ? (
                    <video
                      src={project.media[activeMediaIndex].src}
                      controls
                      autoPlay
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      src={project.media[activeMediaIndex].src}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {project.media.map((med, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveMediaIndex(idx)}
                      className={`relative w-20 h-16 rounded-xl overflow-hidden border-2 flex-shrink-0 cursor-pointer transition-all ${
                        activeMediaIndex === idx ? "border-gold-primary scale-102 shadow-md" : "border-transparent opacity-65 hover:opacity-100"
                      }`}
                    >
                      {med.type === "video" ? (
                        <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                          <span className="text-[9px] font-bold text-white uppercase tracking-wider">Video</span>
                        </div>
                      ) : (
                        <img src={med.src} className="w-full h-full object-cover" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="mb-12">
                <h3 className="text-lg font-black text-white mb-4 tracking-tight">Project Summary</h3>
                <p className="text-sm text-slate-light leading-relaxed mb-6">
                  {project.description} This plotted layout development represents a signature real estate benchmark in the area. Spanning gated bounds with complete landscaping, individual connection points, and security outposts.
                </p>
                <p className="text-sm text-slate-muted leading-relaxed">
                  Every plot is verified with a clear litigation-free layout map. Ready for immediate villa registration and customization based on client preferences.
                </p>
              </div>

              {/* Amenities Grid */}
              <div className="mb-12">
                <h3 className="text-lg font-black text-white mb-6 tracking-tight">Premium Infrastructure</h3>
                <div className="grid grid-cols-2 gap-4">
                  {project.amenities.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div key={idx} className="flex items-center gap-3 p-4 rounded-xl border border-white/5 bg-background-alt/60">
                        <div className="w-9 h-9 rounded-lg bg-gold-primary/10 flex items-center justify-center text-gold-primary">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-bold text-white">{item.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Right: SVG Layout, landmarks, Book scheduler */}
            <div className="lg:col-span-5 text-left">
              
              {/* Interactive Layout Map SVG */}
              <div className="p-6 border border-white/5 rounded-3xl bg-background-alt/60 mb-12 relative shadow-inner">
                <h3 className="text-base font-extrabold text-white mb-1 tracking-tight flex items-center gap-2">
                  <LayoutGrid className="w-4.5 h-4.5 text-gold-primary" />
                  Interactive Plot Layout Map
                </h3>
                <p className="text-[10px] text-slate-muted mb-6 leading-relaxed">
                  Hover over plots to check sizing, prices, and bookings. Red plots indicate booked units.
                </p>

                {/* SVG Element */}
                <div className="w-full aspect-[4/3] bg-background rounded-2xl border border-white/5 relative overflow-hidden flex items-center justify-center p-2 shadow-sm">
                  <svg
                    viewBox="0 0 310 270"
                    className="w-full h-full"
                  >
                    {/* Plot rects */}
                    {plots.map((plot) => {
                      const isBooked = plot.status === "Booked";
                      return (
                        <rect
                          key={plot.id}
                          x={plot.x}
                          y={plot.y}
                          width={plot.w}
                          height={plot.h}
                          rx={6}
                          className="transition-all duration-300 cursor-pointer"
                          fill={isBooked ? "rgba(239, 68, 68, 0.12)" : "rgba(16, 185, 129, 0.12)"}
                          stroke={isBooked ? "rgba(239, 68, 68, 0.75)" : "rgba(16, 185, 129, 0.75)"}
                          strokeWidth={hoveredPlot?.id === plot.id ? 2.5 : 1.5}
                          onMouseEnter={() => setHoveredPlot(plot)}
                          onMouseLeave={() => setHoveredPlot(null)}
                        />
                      );
                    })}

                    {/* Plot label texts */}
                    {plots.map((plot) => (
                      <text
                        key={`text-${plot.id}`}
                        x={plot.x + 22.5}
                        y={plot.y + 27}
                        textAnchor="middle"
                        className="font-mono text-[9px] font-black pointer-events-none select-none fill-white/85"
                      >
                        {plot.label}
                      </text>
                    ))}

                    {/* Center Tarmac Road visual */}
                    <line x1={0} y1={85} x2={310} y2={85} stroke="rgba(148, 163, 184, 0.35)" strokeWidth={12} />
                    <line x1={0} y1={85} x2={310} y2={85} stroke="white" strokeWidth={1} strokeDasharray="6,4" />
                    <text x={155} y={97} textAnchor="middle" className="font-sans text-[7px] font-bold tracking-widest fill-slate-light pointer-events-none select-none">
                      10M WIDE ROAD
                    </text>

                    {/* Left Tarmac Road visual */}
                    <line x1={0} y1={165} x2={310} y2={165} stroke="rgba(148, 163, 184, 0.35)" strokeWidth={12} />
                    <line x1={0} y1={165} x2={310} y2={165} stroke="white" strokeWidth={1} strokeDasharray="6,4" />
                    <text x={155} y={177} textAnchor="middle" className="font-sans text-[7px] font-bold tracking-widest fill-slate-light pointer-events-none select-none">
                      9M WIDE ROAD
                    </text>
                  </svg>

                  {/* SVG Tooltip */}
                  <AnimatePresence>
                    {hoveredPlot && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute top-4 right-4 p-3.5 bg-navy-royal text-white border border-gold-primary/30 rounded-xl shadow-lg z-20 text-[10px] w-40 flex flex-col gap-1.5"
                      >
                        <div className="font-extrabold text-gold-light border-b border-white/10 pb-1 flex justify-between">
                          <span>{hoveredPlot.label}</span>
                          <span className={hoveredPlot.status === "Booked" ? "text-red-400" : "text-emerald-400"}>
                            {hoveredPlot.status}
                          </span>
                        </div>
                        <div>Size: <strong>{hoveredPlot.size}</strong></div>
                        <div>Price: <strong>{hoveredPlot.price}</strong></div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Nearby Connection Landmarks */}
              <div className="mb-12">
                <h3 className="text-base font-extrabold text-white mb-5 tracking-tight border-b border-white/5 pb-2">
                  Nearby Landmarks
                </h3>
                <div className="flex flex-col gap-4">
                  {project.nearby.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div key={idx} className="flex items-start gap-3 text-xs text-slate-muted">
                        <div className="w-7 h-7 rounded-lg bg-background flex items-center justify-center text-slate-400 shrink-0 border border-white/5">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <strong className="text-white font-extrabold text-[10px] uppercase block tracking-wider leading-none mb-1">{item.label}</strong>
                          <span className="text-[11px] leading-tight block">{item.text}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Action drawer scheduling */}
              <div className="p-6 border border-white/5 rounded-3xl bg-background-alt/60 flex flex-col gap-4">
                <h3 className="text-base font-extrabold text-white mb-1 tracking-tight">Direct Enquiries</h3>
                
                <button
                  onClick={handleDownloadBrochure}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl border border-white/10 bg-background hover:border-gold-primary hover:text-gold-primary text-white hover:bg-gold-primary/10 text-xs font-bold uppercase tracking-widest transition-all cursor-pointer font-sans"
                  disabled={brochureStatus === "downloading"}
                >
                  <Download className="w-4 h-4" />
                  {brochureStatus === "downloading" ? "Downloading..." : brochureStatus === "success" ? "Downloaded Brochure!" : "Brochure PDF"}
                </button>

                <button
                  onClick={() => triggerInquiry("Private Site Walkthrough")}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-gold-primary to-gold-dark text-navy-royal hover:from-gold-light hover:to-gold-primary text-xs font-bold uppercase tracking-widest transition-all cursor-pointer font-sans font-extrabold shadow-md shadow-gold-primary/10 hover:scale-102"
                >
                  <Calendar className="w-4 h-4" />
                  Book Site Visit
                </button>

                <a
                  href={`https://wa.me/919443454395?text=${encodeURIComponent(`Hello Mahira Developers, I would like to request plot availability and price details for the project: ${project.title} in ${project.location}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:shadow-lg hover:shadow-emerald-500/20 text-xs font-bold uppercase tracking-widest transition-all cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>

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
