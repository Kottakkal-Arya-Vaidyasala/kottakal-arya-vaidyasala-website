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
import { ArrowRight, Clock } from "lucide-react";
import { treatments } from "@/data/treatments";
import { useWhatsApp } from "@/hooks/useWhatsApp";

export default function OurTreatmentsPage() {
  const { openWhatsApp } = useWhatsApp();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      setShowAll(true);
    }
  }, []);

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
      <section className="relative w-full h-screen min-h-screen flex items-center justify-center pt-16">
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
          {/* Muted dark overlay for text readability (neutral black instead of blue) */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
        </div>

        <Container className="relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Highlighted Text Content */}
            <div className="flex flex-col">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTreatment.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-heading font-extrabold text-white mb-3 sm:mb-4 leading-tight drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] tracking-wide">
                    {activeTreatment.title}
                  </h1>
                  <p className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 border-l-4 border-brand-gold bg-black/30 backdrop-blur-sm text-sm sm:text-base md:text-xl font-semibold text-brand-gold mb-4 sm:mb-5 shadow-lg line-clamp-2 max-w-fit">
                    {activeTreatment.subtitle}
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-gray-100 leading-relaxed max-w-md mb-6 sm:mb-8 font-light line-clamp-3 md:line-clamp-2 drop-shadow-md">
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
                      } else {
                        // If element is hidden in the collapsed list, expand first
                        setShowAll(true);
                        setTimeout(() => {
                          const newEl = document.getElementById(
                            `treatment-${activeTreatment.id}`,
                          );
                          if (newEl) {
                            const newY =
                              newEl.getBoundingClientRect().top +
                              window.scrollY -
                              100;
                            window.scrollTo({ top: newY, behavior: "smooth" });
                          }
                        }, 100);
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
              {treatments.slice(0, 5).map((t, idx) => (
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
      <section className="pt-12 pb-24 md:pt-16 md:pb-32 bg-white relative overflow-hidden">
        {/* Subtle decorative background elements */}
        <div className="absolute top-0 right-0 w-full h-full grain-overlay opacity-20 pointer-events-none" />
        <div className="absolute -left-[20%] top-[10%] w-[800px] h-[800px] bg-brand-primary/5 rounded-full filter blur-[150px] pointer-events-none" />

        <Container className="relative z-10">
          <AnimatedReveal direction="up" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-brand-primary mb-6">
              Our Complete{" "}
              <span className="text-brand-gold">Menu</span>
            </h2>
            <p className="text-lg text-brand-grey max-w-2xl mx-auto font-light">
              Explore our full range of authentic therapies, carefully designed
              to rejuvenate your body, mind, and spirit.
            </p>
          </AnimatedReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mt-12 max-w-7xl mx-auto">
            {(showAll ? treatments : treatments.slice(0, 6)).map(
              (treatment, idx) => {
                const isNavy = idx % 2 === 0;

                return (
                  <AnimatedReveal
                    key={treatment.id}
                    direction="up"
                    delay={(idx % 6) * 50}
                  >
                    <div
                      id={`treatment-${treatment.id}`}
                      className={`flex flex-col h-full rounded-2xl shadow-md hover:shadow-lg transition-shadow overflow-hidden group scroll-mt-32 ${
                        isNavy
                          ? "bg-[#1F2A44]"
                          : "bg-white border border-gray-100"
                      }`}
                    >
                      <div className="relative h-40 w-full overflow-hidden shrink-0">
                        <Image
                          src={treatment.imagePath}
                          alt={treatment.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
                        <div className="absolute bottom-3 left-3 glass rounded-full px-2 py-0.5 flex items-center gap-1.5 border border-white/20">
                          <Clock className="w-3 h-3 text-brand-gold" />
                          <span className="text-[10px] font-semibold text-white tracking-wider">
                            {treatment.duration}
                          </span>
                        </div>
                      </div>
                      <div className="p-4 sm:p-5 flex flex-col flex-grow">
                        <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-brand-gold mb-1.5 block">
                          Signature Therapy
                        </span>
                        <h3
                          className={`font-heading text-lg font-bold mb-1 leading-tight ${isNavy ? "text-white" : "text-[#1F2A44]"}`}
                        >
                          {treatment.title}
                        </h3>
                        <p className="text-[11px] font-semibold text-brand-gold mb-2.5">
                          {treatment.subtitle}
                        </p>
                        <p
                          className={`text-xs leading-relaxed mb-4 line-clamp-2 ${isNavy ? "text-gray-300" : "text-[#1F2A44]/80"}`}
                        >
                          {treatment.description}
                        </p>
                        <div className="mt-auto pt-4 border-t border-brand-gold/20">
                          <PrimaryButton
                            onClick={() =>
                              openWhatsApp({ treatment: treatment.title })
                            }
                            icon={<ArrowRight className="w-3.5 h-3.5" />}
                            className={`w-full py-2.5 text-xs ${
                              isNavy
                                ? "bg-white text-brand-primary hover:bg-white/90 border-transparent shadow-none"
                                : "shadow-none"
                            }`}
                          >
                            Book Now
                          </PrimaryButton>
                        </div>
                      </div>
                    </div>
                  </AnimatedReveal>
                );
              },
            )}
          </div>

          {treatments.length > 6 && (
            <div className="mt-12 flex justify-center relative z-10">
              <PrimaryButton
                onClick={() => setShowAll(!showAll)}
                className="px-8 py-4"
              >
                {showAll ? "Show Less Therapies" : "Show More Therapies"}
              </PrimaryButton>
            </div>
          )}
        </Container>
      </section>
    </main>
  );
}
