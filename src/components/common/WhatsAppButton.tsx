"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle } from "lucide-react"
import { siteConfig } from "@/data/site"

/**
 * WhatsAppButton — Floating CTA fixed at bottom-right.
 * Expands on hover to show tooltip. Uses the professional
 * pre-filled consultation booking message template.
 */
export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false)

  const whatsappNumber = siteConfig.contact.whatsapp
  const defaultMessage = encodeURIComponent(
    `Hello Kottakkal Abu Dhabi, I would like to book an elite Ayurveda consultation session. Please guide me through your available slots.`
  )

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`

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
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 transition-shadow duration-300"
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
        <MessageCircle className="w-6 h-6 fill-current relative z-10" />
      </motion.a>
    </div>
  )
}
