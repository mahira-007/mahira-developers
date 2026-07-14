"use client";

import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";

export default function WhatsAppButton() {
  const whatsappNumber = "919443454395"; // Official WhatsApp number
  const callNumber = "+919443454395"; // Official call number
  const message = "Hello Mahira Developers, I am interested in your premium residential layouts. Please share project details and pricing.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Floating Call Button */}
      <motion.a
        href={`tel:${callNumber}`}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, rotate: -5 }}
        whileTap={{ scale: 0.9 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 1.2,
        }}
        className="w-14 h-14 rounded-full flex items-center justify-center text-navy-royal bg-gradient-to-r from-gold-primary via-gold-light to-gold-dark shadow-2xl hover:shadow-[0_0_20px_rgba(197,168,93,0.5)] border border-gold-primary/30 cursor-pointer"
        aria-label="Call Mahira Developers"
      >
        <PhoneCall className="w-5.5 h-5.5" />
      </motion.a>

      {/* Floating WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 1.4,
        }}
        className="w-14 h-14 rounded-full flex items-center justify-center text-white bg-gradient-to-r from-emerald-500 to-teal-600 shadow-2xl hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] border border-emerald-400/30 cursor-pointer"
        aria-label="Contact us on WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.03-5.114-2.905-6.99C16.559 1.875 14.09 .843 11.458.843 6.023.843 1.6 5.263 1.595 10.7c-.001 1.645.453 3.25 1.314 4.694l-.953 3.484 3.57-.936zm11.332-6.52c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.669.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.568-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        </svg>
      </motion.a>
    </div>
  );
}
