"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/common/Container";
import AnimatedReveal from "@/components/common/AnimatedReveal";
import { Droplets, Flame, Wind } from "lucide-react";

/**
 * ═══════════════════════════════════════════════════
 * Ayurveda Philosophy — Premium Light Section
 * ═══════════════════════════════════════════════════
 * Redesigned light-themed section with premium card hover effects,
 * vibrant dosha colors, and a majestic quote block.
 */

const doshas = [
  {
    name: "Vata",
    element: "Air & Space",
    description:
      "Governs movement, breathing, and nervous system. When balanced, it promotes creativity and vitality. Imbalance leads to anxiety, dry skin, and insomnia.",
    icon: <Wind className="w-8 h-8" />,
    color: "from-sky-500/20 to-transparent",
    borderColor: "border-white/10",
    iconBg: "bg-sky-500/10 text-sky-400",
    shadow: "hover:shadow-[0_20px_40px_-15px_rgba(14,165,233,0.15)]",
  },
  {
    name: "Pitta",
    element: "Fire & Water",
    description:
      "Controls digestion, metabolism, and body temperature. Balanced Pitta brings sharp intellect and courage. Excess causes inflammation, acidity, and irritability.",
    icon: <Flame className="w-8 h-8" />,
    color: "from-amber-500/20 to-transparent",
    borderColor: "border-white/10",
    iconBg: "bg-amber-500/10 text-amber-400",
    shadow: "hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.15)]",
  },
  {
    name: "Kapha",
    element: "Earth & Water",
    description:
      "Provides structure, stability, and immunity. Balanced Kapha yields strength and calm temperament. Imbalance manifests as weight gain, congestion, and lethargy.",
    icon: <Droplets className="w-8 h-8" />,
    color: "from-emerald-500/20 to-transparent",
    borderColor: "border-white/10",
    iconBg: "bg-emerald-500/10 text-emerald-400",
    shadow: "hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.15)]",
  },
];

const ayurvedaQuotes = [
  {
    text: "When diet is wrong, medicine is of no use. When diet is correct, medicine is of no need.",
    author: "Charaka Samhita",
    context: "Ancient Ayurvedic Medical Text, c. 300 BCE",
  },
  {
    text: "Health is the state of dynamic balance. Disease is the result of losing this balance.",
    author: "Sushruta Samhita",
    context: "Foundational Ayurvedic Treatise, c. 600 BCE",
  },
  {
    text: "The universe is completely connected. The body is a microcosm of the entire macrocosm.",
    author: "Ashtanga Hridayam",
    context: "Core Ayurvedic Text, c. 500 CE",
  },
  {
    text: "Ayurveda teaches us to cherish our innate nature - to love and honor who we are.",
    author: "Ayurvedic Wisdom",
    context: "The Science of Life",
  },
];

export default function AyurvedaPhilosophy() {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % ayurvedaQuotes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="block relative pt-12 pb-16 md:pt-4 md:pb-20 bg-white overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-gold/[0.02] rounded-full filter blur-[100px] pointer-events-none" />

      <Container className="relative z-10">
        {/* ── Section Header ────────────────────────── */}
        <AnimatedReveal direction="up" className="text-center mb-12 md:mb-24">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-brand-gold mb-4 block">
            The Science of Life
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold font-heading text-brand-primary leading-[1.15] max-w-3xl mx-auto mb-6">
            Ancient Wisdom,{" "}
            <span className="text-brand-gold">Modern Healing</span>
          </h2>
          <p className="text-base md:text-lg text-brand-grey max-w-2xl mx-auto leading-[1.7] font-light">
            Ayurveda — the 5,000-year-old science of life — teaches that true
            health is achieved when body, mind, and spirit exist in perfect
            harmony with nature.
          </p>
        </AnimatedReveal>

        {/* ── Three Doshas ───────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 mb-16 md:mb-32">
          {doshas.map((dosha, idx) => (
            <AnimatedReveal key={dosha.name} direction="up" delay={idx * 150}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`relative p-6 sm:p-8 md:p-10 lg:p-12 rounded-3xl md:rounded-[2rem] border bg-brand-primary transition-all duration-500 h-full flex flex-col group ${dosha.shadow} ${dosha.borderColor}`}
              >
                {/* Background Gradient on Hover */}
                <div
                  className={`absolute inset-0 rounded-[2rem] bg-gradient-to-b ${dosha.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl ${dosha.iconBg} flex items-center justify-center mb-4 md:mb-8 transform group-hover:scale-110 transition-transform duration-500`}
                  >
                    {React.cloneElement(dosha.icon as React.ReactElement<any>, {
                      className: "w-6 h-6 md:w-8 md:h-8",
                    })}
                  </div>

                  {/* Title & element */}
                  <div className="mb-6">
                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2">
                      {dosha.name}
                    </h3>
                    <span className="text-xs font-bold tracking-[0.15em] text-brand-gold uppercase">
                      {dosha.element}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm md:text-base text-white/80 leading-relaxed font-light flex-1">
                    {dosha.description}
                  </p>
                </div>
              </motion.div>
            </AnimatedReveal>
          ))}
        </div>

        {/* ── Philosophy Quote Block (Carousel) ──────── */}
        <AnimatedReveal direction="up" delay={200}>
          <div className="relative max-w-5xl mx-auto text-center px-4 py-12 md:px-6 md:py-20 rounded-[2.5rem] bg-brand-primary border border-white/10 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.15)] overflow-hidden min-h-[380px] flex flex-col justify-center">
            {/* Large decorative quote marks */}
            <div className="absolute -top-6 -left-2 text-brand-gold/10 text-[240px] leading-none select-none pointer-events-none">
              &ldquo;
            </div>

            <div className="relative z-10 px-2 md:px-16 flex-1 flex flex-col justify-center mb-8">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={currentQuote}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="w-full"
                >
                  <p className="font-heading text-xl md:text-3xl lg:text-[2.5rem] font-medium text-white leading-[1.4] italic mb-10">
                    &quot;{ayurvedaQuotes[currentQuote].text}&quot;
                  </p>
                  <footer className="flex flex-col items-center gap-4">
                    <div className="h-[2px] w-12 bg-brand-gold" />
                    <cite className="text-sm font-bold text-brand-gold not-italic tracking-[0.2em] uppercase mt-2">
                      — {ayurvedaQuotes[currentQuote].author}
                    </cite>
                    <span className="text-sm text-white/70 font-light">
                      {ayurvedaQuotes[currentQuote].context}
                    </span>
                  </footer>
                </motion.blockquote>
              </AnimatePresence>
            </div>

            {/* Carousel Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
              {ayurvedaQuotes.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentQuote(idx)}
                  className={`transition-all duration-300 rounded-full ${
                    idx === currentQuote
                      ? "w-6 h-1.5 bg-brand-gold"
                      : "w-1.5 h-1.5 bg-brand-gold/30 hover:bg-brand-gold/50"
                  }`}
                  aria-label={`Go to quote ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </AnimatedReveal>
      </Container>
    </section>
  );
}
