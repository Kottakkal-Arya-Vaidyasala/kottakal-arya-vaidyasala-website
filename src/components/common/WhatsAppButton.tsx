"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/site";

/**
 * WhatsAppButton — Floating CTA fixed at bottom-right.
 * Expands on hover to show tooltip. Uses the professional
 * pre-filled consultation booking message template.
 */
export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  const whatsappNumber = siteConfig.contact.whatsapp;
  const defaultMessage = encodeURIComponent(
    `Hello Kottakkal Abu Dhabi, I would like to book an elite Ayurveda consultation session. Please guide me through your available slots.`,
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
      {/* Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="glass-light rounded-lg px-4 py-2.5 shadow-xl max-w-[200px]"
          >
            <p className="text-xs font-semibold text-brand-dark leading-snug">
              Chat with us on WhatsApp
            </p>
            <p className="text-[10px] text-brand-grey mt-0.5">
              We reply within 10 minutes
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp FAB */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.1, y: 0 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center justify-center w-10 h-10 md:w-14 md:h-14 outline-none z-50 group"
      >
        {/* Icon Container */}
        <div className="relative w-full h-full transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-105">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full h-full drop-shadow-[0_4px_12px_rgba(37,211,102,0.4)] group-hover:drop-shadow-[0_8px_20px_rgba(37,211,102,0.6)]">
            <path fill="#25D366" d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-5.46-4.45-9.91-9.91-9.91z"/>
            <path fill="#FFF" d="M16.35 14.26c-.24-.12-1.4-.69-1.62-.77-.22-.08-.38-.12-.54.12-.16.24-.61.77-.75.93-.14.16-.28.18-.52.06-.24-.12-1-.37-1.9-1.18-.7-.63-1.18-1.41-1.32-1.65-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.19-.47-.39-.41-.54-.41-.14 0-.3 0-.46 0-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.03 0 1.2.87 2.36.99 2.52.12.16 1.72 2.62 4.17 3.68.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.4-.57 1.6-1.12.2-.55.2-.1.14-.11z"/>
          </svg>
        </div>
      </motion.a>
    </div>
  );
}
