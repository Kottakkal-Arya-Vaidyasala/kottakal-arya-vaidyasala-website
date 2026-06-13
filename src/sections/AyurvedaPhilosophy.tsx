"use client"

import React from "react"
import { motion } from "framer-motion"
import Container from "@/components/common/Container"
import AnimatedReveal from "@/components/common/AnimatedReveal"
import { Droplets, Flame, Wind } from "lucide-react"

/**
 * ═══════════════════════════════════════════════════
 * Ayurveda Philosophy — Immersive Dark Section
 * ═══════════════════════════════════════════════════
 * Full-width dark background with centered editorial text,
 * the three Doshas (Vata, Pitta, Kapha), and a philosophy
 * quote block with ornamental accents.
 */

const doshas = [
  {
    name: "Vata",
    element: "Air & Space",
    description:
      "Governs movement, breathing, and nervous system. When balanced, it promotes creativity and vitality. Imbalance leads to anxiety, dry skin, and insomnia.",
    icon: <Wind className="w-6 h-6" />,
    color: "from-sky-400/20 to-sky-600/10",
    borderColor: "border-sky-400/20 hover:border-sky-400/40",
    iconBg: "bg-sky-400/10",
    iconColor: "text-sky-400",
  },
  {
    name: "Pitta",
    element: "Fire & Water",
    description:
      "Controls digestion, metabolism, and body temperature. Balanced Pitta brings sharp intellect and courage. Excess causes inflammation, acidity, and irritability.",
    icon: <Flame className="w-6 h-6" />,
    color: "from-amber-400/20 to-orange-600/10",
    borderColor: "border-amber-400/20 hover:border-amber-400/40",
    iconBg: "bg-amber-400/10",
    iconColor: "text-amber-400",
  },
  {
    name: "Kapha",
    element: "Earth & Water",
    description:
      "Provides structure, stability, and immunity. Balanced Kapha yields strength and calm temperament. Imbalance manifests as weight gain, congestion, and lethargy.",
    icon: <Droplets className="w-6 h-6" />,
    color: "from-emerald-400/20 to-green-600/10",
    borderColor: "border-emerald-400/20 hover:border-emerald-400/40",
    iconBg: "bg-emerald-400/10",
    iconColor: "text-emerald-400",
  },
]

export default function AyurvedaPhilosophy() {
  return (
    <section className="relative py-28 md:py-36 bg-[#071a0f] text-white overflow-hidden grain-overlay">
      {/* Background decorative elements */}
      <div className="absolute inset-0 dot-pattern opacity-[0.06] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-primary/[0.06] rounded-full filter blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-gold/[0.04] rounded-full filter blur-[150px] pointer-events-none" />

      {/* Top decorative line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />

      <Container className="relative z-10">
        {/* ── Section Header ────────────────────────── */}
        <AnimatedReveal direction="up" className="text-center mb-20">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-gold/80 mb-3 block">
            The Science of Life
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[3.25rem] font-bold font-heading leading-[1.15] max-w-3xl mx-auto mb-5">
            Ancient Wisdom,{" "}
            <span className="italic font-serif gold-text">Modern Healing</span>
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Ayurveda — the 5,000-year-old science of life — teaches that true health 
            is achieved when body, mind, and spirit exist in perfect harmony with nature.
          </p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="h-[2px] w-10 rounded-full bg-brand-gold/50" />
            <div className="h-2 w-2 rounded-full rotate-45 bg-brand-gold/50" />
            <div className="h-[2px] w-10 rounded-full bg-brand-gold/50" />
          </div>
        </AnimatedReveal>

        {/* ── Three Doshas ───────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {doshas.map((dosha, idx) => (
            <AnimatedReveal key={dosha.name} direction="up" delay={idx * 150}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className={`relative p-8 md:p-10 rounded-2xl border ${dosha.borderColor} bg-gradient-to-b ${dosha.color} backdrop-blur-sm transition-all duration-500 h-full flex flex-col`}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl ${dosha.iconBg} flex items-center justify-center ${dosha.iconColor} mb-6`}>
                  {dosha.icon}
                </div>

                {/* Title & element */}
                <h3 className="font-heading text-2xl font-bold text-white mb-1">
                  {dosha.name}
                </h3>
                <span className="text-xs font-semibold tracking-wider text-gray-400 uppercase mb-4">
                  {dosha.element}
                </span>

                {/* Description */}
                <p className="text-sm text-gray-300 leading-relaxed flex-1">
                  {dosha.description}
                </p>
              </motion.div>
            </AnimatedReveal>
          ))}
        </div>

        {/* ── Philosophy Quote Block ─────────────────── */}
        <AnimatedReveal direction="up" delay={200}>
          <div className="relative max-w-3xl mx-auto text-center">
            {/* Large decorative quote marks */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-brand-gold/10 font-serif text-[120px] leading-none select-none pointer-events-none">
              &ldquo;
            </div>

            <blockquote className="relative z-10">
              <p className="font-heading text-xl md:text-2xl lg:text-[1.75rem] font-medium text-gray-200 leading-relaxed italic">
                When diet is wrong, medicine is of no use. When diet is correct, 
                medicine is of no need.
              </p>
              <footer className="mt-6 flex flex-col items-center gap-2">
                <div className="h-[1px] w-12 bg-brand-gold/40" />
                <cite className="text-sm font-semibold text-brand-gold not-italic tracking-wide">
                  — Charaka Samhita
                </cite>
                <span className="text-xs text-gray-500">
                  Ancient Ayurvedic Medical Text, c. 300 BCE
                </span>
              </footer>
            </blockquote>
          </div>
        </AnimatedReveal>
      </Container>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />
    </section>
  )
}
