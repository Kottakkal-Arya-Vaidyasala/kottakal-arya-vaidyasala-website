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
    icon: <Wind className="h-8 w-8" />,
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
    icon: <Flame className="h-8 w-8" />,
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
    icon: <Droplets className="h-8 w-8" />,
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
    <section className="relative block overflow-hidden bg-white pt-12 pb-16 md:pt-4 md:pb-20">
      {/* Subtle background glow */}
      <div className="bg-brand-gold/[0.02] pointer-events-none absolute top-0 left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full blur-[100px] filter" />

      <Container className="relative z-10">
        {/* ── Section Header ────────────────────────── */}
        <AnimatedReveal direction="up" className="mb-12 text-center md:mb-24">
          <span className="text-brand-gold mb-4 block text-xs font-bold tracking-[0.2em] uppercase">
            The Science of Life
          </span>
          <h2 className="font-heading text-brand-primary mx-auto mb-6 max-w-3xl text-4xl leading-[1.15] font-bold md:text-5xl lg:text-[3.5rem]">
            Ancient Wisdom,{" "}
            <span className="text-brand-gold">Modern Healing</span>
          </h2>
          <p className="text-brand-grey mx-auto max-w-2xl text-base leading-[1.7] font-light md:text-lg">
            Ayurveda — the 5,000-year-old science of life — teaches that true
            health is achieved when body, mind, and spirit exist in perfect
            harmony with nature.
          </p>
        </AnimatedReveal>

        {/* ── Three Doshas ───────────────────────────── */}
        <div className="mb-16 grid grid-cols-1 gap-6 md:mb-32 md:grid-cols-3 lg:gap-10">
          {doshas.map((dosha, idx) => (
            <AnimatedReveal key={dosha.name} direction="up" delay={idx * 150}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`bg-brand-primary group relative flex h-full flex-col rounded-3xl border p-6 transition-all duration-500 sm:p-8 md:rounded-[2rem] md:p-10 lg:p-12 ${dosha.shadow} ${dosha.borderColor}`}
              >
                {/* Background Gradient on Hover */}
                <div
                  className={`absolute inset-0 rounded-[2rem] bg-gradient-to-b ${dosha.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />

                <div className="relative z-10 flex h-full flex-col">
                  {/* Icon */}
                  <div
                    className={`h-12 w-12 rounded-xl md:h-16 md:w-16 md:rounded-2xl ${dosha.iconBg} mb-4 flex transform items-center justify-center transition-transform duration-500 group-hover:scale-110 md:mb-8`}
                  >
                    {React.cloneElement(dosha.icon as React.ReactElement<any>, {
                      className: "w-6 h-6 md:w-8 md:h-8",
                    })}
                  </div>

                  {/* Title & element */}
                  <div className="mb-6">
                    <h3 className="font-heading mb-1 text-2xl font-bold text-white md:mb-2 md:text-3xl">
                      {dosha.name}
                    </h3>
                    <span className="text-brand-gold text-xs font-bold tracking-[0.15em] uppercase">
                      {dosha.element}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="flex-1 text-sm leading-relaxed font-light text-white/80 md:text-base">
                    {dosha.description}
                  </p>
                </div>
              </motion.div>
            </AnimatedReveal>
          ))}
        </div>

        {/* ── Philosophy Quote Block (Carousel) ──────── */}
        <AnimatedReveal direction="up" delay={200}>
          <div className="bg-brand-primary relative mx-auto flex min-h-[380px] max-w-5xl flex-col justify-center overflow-hidden rounded-[2.5rem] border border-white/10 px-4 py-12 text-center shadow-[0_10px_40px_-20px_rgba(0,0,0,0.15)] md:px-6 md:py-20">
            {/* Large decorative quote marks */}
            <div className="text-brand-gold/10 pointer-events-none absolute -top-6 -left-2 text-[240px] leading-none select-none">
              &ldquo;
            </div>

            <div className="relative z-10 mb-8 flex flex-1 flex-col justify-center px-2 md:px-16">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={currentQuote}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="w-full"
                >
                  <p className="font-heading mb-10 text-xl leading-[1.4] font-medium text-white italic md:text-3xl lg:text-[2.5rem]">
                    &quot;{ayurvedaQuotes[currentQuote].text}&quot;
                  </p>
                  <footer className="flex flex-col items-center gap-4">
                    <div className="bg-brand-gold h-[2px] w-12" />
                    <cite className="text-brand-gold mt-2 text-sm font-bold tracking-[0.2em] uppercase not-italic">
                      — {ayurvedaQuotes[currentQuote].author}
                    </cite>
                    <span className="text-sm font-light text-white/70">
                      {ayurvedaQuotes[currentQuote].context}
                    </span>
                  </footer>
                </motion.blockquote>
              </AnimatePresence>
            </div>

            {/* Carousel Indicators */}
            <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-2">
              {ayurvedaQuotes.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentQuote(idx)}
                  className={`rounded-full transition-all duration-300 ${
                    idx === currentQuote
                      ? "bg-brand-gold h-1.5 w-6"
                      : "bg-brand-gold/30 hover:bg-brand-gold/50 h-1.5 w-1.5"
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
