"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/common/Container";
import { ArrowRight, Clock, ChevronDown, Sparkles } from "lucide-react";
import { treatments } from "@/data/treatments";
import { cn } from "@/lib/utils";
import { useWhatsApp } from "@/hooks/useWhatsApp";

export default function OurTreatmentsPage() {
  const { openWhatsApp } = useWhatsApp();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedTherapy, setExpandedTherapy] = useState<string | null>(null);
  const [showAllTherapies, setShowAllTherapies] = useState(false);
  const showMoreRef = useRef<HTMLDivElement>(null);

  const INITIAL_VISIBLE_COUNT = 13;
  const hiddenCount = Math.max(0, treatments.length - INITIAL_VISIBLE_COUNT);
  const visibleTreatments = showAllTherapies
    ? treatments
    : treatments.slice(0, INITIAL_VISIBLE_COUNT);

  const handleShowMore = useCallback(() => {
    setShowAllTherapies(true);
    // Smooth scroll to newly revealed items after render
    setTimeout(() => {
      showMoreRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 100);
  }, []);
  // Filter specifically for the hero carousel
  const carouselTreatments = treatments.filter((t) =>
    ["njavarakizhi", "nasyam", "shirodhara", "facial-herbal"].includes(t.id),
  );

  console.log(
    "CAROUSEL DEBUG:",
    carouselTreatments.map((t) => t.id),
  );

  // Auto-switch background carousel logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselTreatments.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [carouselTreatments.length]);

  const activeTreatment = carouselTreatments[currentIndex] || treatments[0];

  return (
    <main className="flex min-h-screen flex-col bg-brand-cream overflow-hidden">
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center pt-16">
        <div className="absolute inset-0 z-0">
          <AnimatePresence>
            <motion.div
              key={activeTreatment.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={activeTreatment.imagePath}
                alt={activeTreatment.title}
                fill
                className="object-cover blur-[2px] relative z-10 scale-110 md:scale-105 lg:scale-100 object-center"
                priority
              />
            </motion.div>
          </AnimatePresence>
          {/* Muted dark overlay for text readability (neutral black instead of blue) */}
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
        </div>

        <Container className="relative z-10 w-full h-full flex flex-col justify-center items-center">
          <div className="max-w-4xl w-full text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTreatment.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center justify-center w-full"
              >
                <p className="text-white tracking-[0.2em] uppercase text-xs sm:text-sm md:text-base font-semibold mb-3 sm:mb-4 drop-shadow-md text-center">
                  {activeTreatment.subtitle}
                </p>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-heading font-extrabold text-white mb-8 sm:mb-10 leading-tight drop-shadow-[0_8px_12px_rgba(0,0,0,0.9)] tracking-wide text-center">
                  {activeTreatment.title}
                </h1>
              </motion.div>
            </AnimatePresence>
          </div>
        </Container>
      </section>

      {/* ── 2. Featured Therapies — Split Layout ───────── */}
      <section
        id="complete-menu"
        className="pt-8 pb-16 md:pt-12 md:pb-20 bg-white relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-full h-full grain-overlay opacity-10 pointer-events-none" />
        <div className="absolute -right-[20%] top-[5%] w-[600px] h-[600px] bg-brand-gold/5 rounded-full filter blur-[150px] pointer-events-none" />

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8 md:mb-12 flex flex-col items-center text-center"
          >
            <p className="text-brand-gold tracking-[0.2em] uppercase text-xs font-semibold mb-3 text-center">
              Signature Collection
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-heading font-bold text-brand-primary text-center">
              Kottakkal&apos;s{" "}
              <span className="text-brand-gold relative inline-block">
                Featured Therapies
                <motion.span
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  className="absolute -bottom-1 left-0 h-[3px] bg-brand-gold rounded-full"
                />
              </span>
            </h2>
          </motion.div>

          {/* Split Layout: Cards Left, Highlights Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-stretch">
            {/* Left — 4 Featured Image Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              {treatments.slice(0, 4).map((treatment, idx) => (
                <motion.div
                  key={treatment.id}
                  id={`treatment-${treatment.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 scroll-mt-32 border-2 border-transparent shadow-md hover:shadow-xl hover:border-brand-gold/30 flex flex-col"
                >
                  <div className="relative h-60 sm:h-64 lg:h-[280px] w-full overflow-hidden flex-1">
                    <Image
                      src={treatment.imagePath}
                      alt={treatment.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/30 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                      <h3 className="font-heading text-xl sm:text-2xl font-bold text-white leading-tight drop-shadow-md mb-1">
                        {treatment.title}
                      </h3>
                      <p className="text-white/80 text-xs sm:text-sm font-medium">
                        {treatment.duration}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right — 4 Stacked Premium Highlight Panels */}
            <div className="bg-brand-primary rounded-3xl overflow-hidden relative">
              {/* Decorative background elements */}
              <div className="absolute -right-16 -top-16 w-72 h-72 bg-brand-gold/[0.08] rounded-full filter blur-[80px] pointer-events-none" />
              <div className="absolute -left-10 bottom-0 w-48 h-48 bg-brand-gold/5 rounded-full filter blur-[60px] pointer-events-none" />

              <div className="relative z-10 divide-y divide-white/10">
                {treatments.slice(0, 4).map((treatment, idx) => (
                  <motion.div
                    key={treatment.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.12 }}
                    className="p-6 sm:p-8 hover:bg-white/[0.04] transition-colors duration-300"
                  >
                    {/* Number badge + Subtitle */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-brand-gold/15 text-brand-gold text-[11px] font-bold tracking-wider">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <p className="text-brand-gold tracking-[0.15em] uppercase text-[10px] sm:text-xs font-bold">
                        {treatment.subtitle}
                      </p>
                    </div>

                    {/* Title + Duration */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <h3 className="text-xl sm:text-2xl font-heading font-bold text-white leading-tight">
                        {treatment.title}
                      </h3>
                      <div className="flex items-center gap-1.5 shrink-0">
                        <Clock className="w-3.5 h-3.5 text-brand-gold/70" />
                        <span className="text-white/60 text-xs font-medium whitespace-nowrap">
                          {treatment.duration}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-4 font-light line-clamp-2">
                      {treatment.description}
                    </p>

                    {/* Benefits (top 3) + Book button */}
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-wrap gap-2">
                        {treatment.benefits.slice(0, 3).map((benefit, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1.5 text-white/70 text-[11px] sm:text-xs font-light bg-white/[0.06] px-2.5 py-1 rounded-full"
                          >
                            <span className="w-1 h-1 rounded-full bg-brand-gold shrink-0" />
                            {benefit}
                          </span>
                        ))}
                      </div>
                      <button
                        onClick={() =>
                          openWhatsApp({ treatment: treatment.title })
                        }
                        className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-2.5 rounded-full text-[11px] sm:text-xs font-bold tracking-wider uppercase bg-brand-gold text-brand-primary hover:bg-brand-gold/90 transition-all duration-300 shadow-lg shadow-brand-gold/20"
                      >
                        Book Now
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 3. Complete Therapy Menu — Premium Accordion ───────── */}
      <section
        id="all-therapies-section"
        className="pt-10 pb-20 md:pt-16 md:pb-28 bg-brand-cream relative overflow-hidden"
      >
        <div className="absolute -left-[15%] top-[20%] w-[600px] h-[600px] bg-brand-primary/[0.03] rounded-full filter blur-[150px] pointer-events-none" />
        <div className="absolute right-[-10%] bottom-[10%] w-[400px] h-[400px] bg-brand-gold/[0.04] rounded-full filter blur-[120px] pointer-events-none" />

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center mb-8 md:mb-12 flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 bg-brand-primary/5 border border-brand-primary/10 rounded-full px-4 py-1.5 mb-5">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
              <p className="text-brand-primary tracking-[0.2em] uppercase text-[10px] sm:text-xs font-bold">
                Complete Menu
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-heading font-bold text-brand-primary mb-5 text-center">
              All Our{" "}
              <span className="text-brand-gold relative inline-block">
                Therapies
                <motion.span
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  className="absolute -bottom-1 left-0 h-[3px] bg-brand-gold/40 rounded-full"
                />
              </span>
            </h2>
            <p className="text-sm md:text-base text-brand-grey max-w-xl mx-auto font-light leading-relaxed">
              A comprehensive range of authentic Ayurvedic treatments rooted in
              centuries of tradition, designed for total well-being.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-3">
            {visibleTreatments.map((treatment, idx) => {
              const isExpanded = expandedTherapy === treatment.id;
              return (
                <motion.div
                  key={treatment.id}
                  id={`treatment-${treatment.id}`}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.45,
                    delay: Math.min(idx * 0.04, 0.4),
                    ease: "easeOut",
                  }}
                  className="scroll-mt-32"
                  {...(idx === INITIAL_VISIBLE_COUNT
                    ? { ref: showMoreRef }
                    : {})}
                >
                  <div
                    className={`bg-white rounded-2xl border transition-all duration-400 overflow-hidden ${
                      isExpanded
                        ? "border-brand-primary/15 shadow-lg shadow-brand-primary/5"
                        : "border-brand-primary/[0.06] shadow-sm hover:shadow-md hover:border-brand-primary/10"
                    }`}
                  >
                    {/* Accordion Header */}
                    <button
                      onClick={() =>
                        setExpandedTherapy(isExpanded ? null : treatment.id)
                      }
                      className="w-full flex items-center gap-4 sm:gap-5 p-5 sm:p-6 text-left transition-colors duration-300 hover:bg-brand-primary/[0.015]"
                    >
                      {/* Number */}
                      <span
                        className={`hidden sm:inline-flex items-center justify-center w-10 h-10 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 shrink-0 ${
                          isExpanded
                            ? "bg-brand-primary text-white shadow-md"
                            : "bg-brand-primary/5 text-brand-primary/50"
                        }`}
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </span>

                      {/* Title + Badge */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 flex-wrap">
                          <h3
                            className={`font-heading text-base sm:text-lg font-bold transition-colors duration-300 ${
                              isExpanded
                                ? "text-brand-primary"
                                : "text-brand-primary/80"
                            }`}
                          >
                            {treatment.title}
                          </h3>
                          <span className="hidden sm:inline-block text-[9px] font-bold tracking-wider uppercase text-white bg-brand-primary px-2.5 py-0.5 rounded-full whitespace-nowrap">
                            {treatment.subtitle}
                          </span>
                        </div>
                        {!isExpanded && (
                          <p className="text-brand-grey/70 text-xs sm:text-sm font-light line-clamp-1 mt-1 max-w-2xl">
                            {treatment.description}
                          </p>
                        )}
                      </div>

                      {/* Duration + Chevron */}
                      <div className="flex items-center gap-3 sm:gap-4 shrink-0">
                        <div className="hidden sm:flex items-center gap-1.5 text-brand-primary/40">
                          <Clock className="w-3.5 h-3.5" />
                          <span className="text-xs font-medium whitespace-nowrap">
                            {treatment.duration}
                          </span>
                        </div>
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          whileHover={{
                            scale: 1.15,
                            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                          }}
                          whileTap={{ scale: 0.95 }}
                          className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300 ${
                            isExpanded
                              ? "bg-brand-primary text-white"
                              : "bg-brand-primary/5 text-brand-primary/40 hover:bg-brand-primary/10 hover:text-brand-primary/70"
                          }`}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </motion.div>
                      </div>
                    </button>

                    {/* Accordion Content */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.35,
                            ease: [0.25, 0.8, 0.25, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 sm:px-6 pb-6 sm:pb-8 pt-0">
                            {/* Divider */}
                            <div className="w-full h-px bg-gradient-to-r from-transparent via-brand-primary/10 to-transparent mb-6" />

                            <div className="sm:pl-[60px]">
                              {/* Description */}
                              <p className="text-brand-grey text-sm sm:text-base leading-relaxed mb-6 max-w-2xl font-light">
                                {treatment.longDescription ||
                                  treatment.description}
                              </p>

                              {/* Benefits Grid */}
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                                {treatment.benefits.map((benefit, i) => (
                                  <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -8 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                      duration: 0.3,
                                      delay: i * 0.06,
                                    }}
                                    className="flex items-center gap-2.5 py-1.5"
                                  >
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
                                    <span className="text-brand-primary/70 text-sm font-light">
                                      {benefit}
                                    </span>
                                  </motion.div>
                                ))}
                              </div>

                              {/* Duration (mobile) + CTA */}
                              <div className="flex flex-col sm:flex-row items-center gap-4">
                                <div className="flex sm:hidden items-center gap-1.5 text-brand-primary/50">
                                  <Clock className="w-3.5 h-3.5" />
                                  <span className="text-xs font-medium">
                                    {treatment.duration}
                                  </span>
                                </div>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    openWhatsApp({
                                      treatment: treatment.title,
                                    });
                                  }}
                                  className="inline-flex items-center justify-center gap-2.5 px-8 py-3 rounded-full text-xs font-bold tracking-wider uppercase bg-brand-primary text-white hover:bg-brand-gold hover:text-brand-primary transition-all duration-300 shadow-lg shadow-brand-primary/15 hover:shadow-brand-gold/20 w-full sm:w-auto"
                                >
                                  Book This Therapy
                                  <ArrowRight className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Show More / Show Less Button */}
          {hiddenCount > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="max-w-4xl mx-auto mt-8 relative"
            >
              {/* Fade overlay hint — only when collapsed */}
              {!showAllTherapies && (
                <div className="absolute -top-16 left-0 right-0 h-16 bg-gradient-to-t from-brand-cream to-transparent pointer-events-none z-10" />
              )}

              <div className="flex justify-center">
                <motion.button
                  onClick={() => {
                    if (showAllTherapies) {
                      setShowAllTherapies(false);
                      setExpandedTherapy(null);
                      // Scroll back to the section heading
                      const section = document.getElementById(
                        "all-therapies-section",
                      );
                      if (section) {
                        const offset =
                          section.getBoundingClientRect().top +
                          window.scrollY -
                          100;
                        window.scrollTo({ top: offset, behavior: "smooth" });
                      }
                    } else {
                      handleShowMore();
                    }
                  }}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="group inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase bg-brand-primary text-white hover:bg-brand-gold hover:text-brand-primary transition-all duration-400 shadow-lg shadow-brand-primary/15 hover:shadow-xl hover:shadow-brand-gold/20"
                >
                  {showAllTherapies ? (
                    <>
                      Show Less
                      <motion.div
                        animate={{ rotate: 180 }}
                        className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-brand-primary/10 transition-colors duration-300"
                      >
                        <ChevronDown className="w-3.5 h-3.5" />
                      </motion.div>
                    </>
                  ) : (
                    <>
                      Show {hiddenCount} More Therapies
                      <motion.div
                        animate={{ y: [0, 3, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-brand-primary/10 transition-colors duration-300"
                      >
                        <ChevronDown className="w-3.5 h-3.5" />
                      </motion.div>
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>
          )}
        </Container>
      </section>
    </main>
  );
}
