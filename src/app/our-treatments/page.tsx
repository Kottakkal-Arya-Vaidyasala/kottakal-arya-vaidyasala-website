"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import Container from "@/components/common/Container";
import AnimatedReveal from "@/components/common/AnimatedReveal";
import PrimaryButton from "@/components/common/PrimaryButton";
import { ArrowRight, Clock, CheckCircle2 } from "lucide-react";
import { treatments } from "@/data/treatments";
import { useWhatsApp } from "@/hooks/useWhatsApp";

/**
 * ═══════════════════════════════════════════════════
 * Our Treatments Page — Redesigned Premium Layout
 * ═══════════════════════════════════════════════════
 */
export default function OurTreatmentsPage() {
  const { openWhatsApp } = useWhatsApp();
  const [currentIndex, setCurrentIndex] = useState(0);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // Auto-switch background carousel logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % treatments.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const activeTreatment = treatments[currentIndex];

  return (
    <main className="flex min-h-screen flex-col bg-brand-cream overflow-hidden">
      {/* ── 1. Immersive Hero Background Carousel ──────── */}
      <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center">
        {/* Background Image Carousel */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTreatment.id}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={activeTreatment.imagePath}
                alt={activeTreatment.title}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>
          {/* Muted dark overlay for text readability */}
          <div className="absolute inset-0 bg-brand-dark/70 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-90" />
        </div>

        <Container className="relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Highlighted Text Content */}
            <div className="flex flex-col">
              <AnimatedReveal direction="up">
                <span className="inline-block py-1.5 px-4 rounded-full bg-brand-gold/20 backdrop-blur-sm border border-brand-gold/30 text-brand-gold text-xs font-bold tracking-[0.2em] uppercase mb-6">
                  Signature Therapies
                </span>
              </AnimatedReveal>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTreatment.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <h1 className="text-5xl md:text-6xl lg:text-8xl font-heading font-bold text-white mb-4 leading-[1.1] drop-shadow-lg">
                    {activeTreatment.title}
                  </h1>
                  <p className="text-xl md:text-2xl font-serif italic text-brand-gold mb-6 drop-shadow-md">
                    {activeTreatment.subtitle}
                  </p>
                  <p className="text-lg text-gray-200 leading-relaxed max-w-lg mb-8 font-light">
                    {activeTreatment.description}
                  </p>

                  <PrimaryButton
                    onClick={() => {
                      const el = document.getElementById(
                        `treatment-${activeTreatment.id}`,
                      );
                      if (el) {
                        const y =
                          el.getBoundingClientRect().top + window.scrollY - 100;
                        window.scrollTo({ top: y, behavior: "smooth" });
                      }
                    }}
                    className="w-fit"
                  >
                    View Details
                  </PrimaryButton>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Carousel Navigation Indicators */}
            <div className="hidden lg:flex flex-col items-end justify-center gap-4">
              {treatments.map((t, idx) => (
                <button
                  key={t.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`group flex items-center gap-4 transition-all duration-300 ${
                    currentIndex === idx
                      ? "opacity-100"
                      : "opacity-40 hover:opacity-70"
                  }`}
                >
                  <span
                    className={`text-sm font-bold tracking-widest uppercase transition-colors ${
                      currentIndex === idx ? "text-brand-gold" : "text-white"
                    }`}
                  >
                    {t.title}
                  </span>
                  <div
                    className={`h-[2px] transition-all duration-500 ${
                      currentIndex === idx
                        ? "w-16 bg-brand-gold"
                        : "w-8 bg-white group-hover:w-12"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── 2. Comprehensive Treatment List ───────── */}
      {/* Brand primary background to match button color, looking premium */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        {/* Subtle decorative background elements */}
        <div className="absolute top-0 right-0 w-full h-full grain-overlay opacity-20 pointer-events-none" />
        <div className="absolute -left-[20%] top-[10%] w-[800px] h-[800px] bg-brand-primary/5 rounded-full filter blur-[150px] pointer-events-none" />

        <Container className="relative z-10">
          <AnimatedReveal direction="up" className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-brand-primary mb-6">
              Our Complete{" "}
              <span className="italic font-serif text-brand-gold">Menu</span>
            </h2>
            <p className="text-lg text-brand-grey max-w-2xl mx-auto font-light">
              Explore our full range of authentic therapies, carefully designed
              to rejuvenate your body, mind, and spirit.
            </p>
          </AnimatedReveal>

          <div className="flex flex-col gap-24">
            {treatments.map((treatment, idx) => {
              const isEven = idx % 2 === 0;
              const isNavy = idx % 2 === 0;

              return (
                <AnimatedReveal key={treatment.id} direction="up" delay={idx * 100}>
                  <div
                    id={`treatment-${treatment.id}`}
                    className={`scroll-mt-32 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center p-8 md:p-12 lg:p-16 rounded-[2.5rem] shadow-xl border ${
                      isNavy ? "bg-brand-primary border-white/10" : "bg-white border-gray-100"
                    } ${isEven ? "lg:direction-ltr" : "lg:direction-rtl"}`}
                  >
                    {/* Image Column */}
                    <div className={`lg:col-span-5 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                      <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl gold-border-reveal group">
                        <Image
                          src={treatment.imagePath}
                          alt={treatment.title}
                          fill
                          className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors duration-700" />
                        <div className="absolute top-5 left-5 glass rounded-full px-4 py-1.5 flex items-center gap-1.5 z-10">
                          <Clock className="w-3.5 h-3.5 text-brand-gold" />
                          <span className="text-xs font-semibold text-white">{treatment.duration}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content Column */}
                    <div className={`lg:col-span-7 flex flex-col ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                      <span className={`text-xs font-semibold tracking-[0.15em] uppercase mb-4 block ${isNavy ? "text-brand-gold" : "text-brand-gold"} lg:-ml-4 lg:pl-4 lg:border-l-2 lg:border-brand-gold/40`}>
                        Signature Therapy
                      </span>
                      <h3 className={`text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 leading-tight ${isNavy ? "text-white" : "text-brand-primary"}`}>
                        {treatment.title}
                      </h3>
                      <p className={`font-serif italic text-xl mb-6 ${isNavy ? "text-brand-gold" : "text-brand-primary/80"}`}>
                        {treatment.subtitle}
                      </p>

                      <p className={`leading-relaxed mb-8 text-lg font-light ${isNavy ? "text-gray-300" : "text-brand-grey"}`}>
                        {treatment.longDescription}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                        {treatment.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${isNavy ? "text-brand-gold" : "text-brand-primary"}`} />
                            <span className={`text-sm font-medium ${isNavy ? "text-gray-200" : "text-brand-dark"}`}>
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>

                      <PrimaryButton
                        onClick={() => openWhatsApp({ treatment: treatment.title })}
                        className={`w-full sm:w-auto ${isNavy ? "bg-brand-gold hover:bg-white text-brand-dark" : "bg-brand-primary hover:bg-brand-gold text-white"}`}
                      >
                        Book {treatment.title}
                      </PrimaryButton>
                    </div>
                  </div>
                </AnimatedReveal>
              );
            })}
          </div>
        </Container>
      </section>
    </main>
  );
}
