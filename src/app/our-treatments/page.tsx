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
    ["njavarakizhi", "nasyam", "shirodhara", "facial-herbal"].includes(t.id)
  );

  console.log(
    "CAROUSEL DEBUG:",
    carouselTreatments.map((t) => t.id)
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
    <main className="bg-brand-cream flex min-h-screen flex-col overflow-hidden">
      <section className="relative flex h-[60vh] min-h-[500px] w-full items-center justify-center pt-16">
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
                alt={`${activeTreatment.title} - Authentic Ayurvedic Treatment in Dubai`}
                fill
                className="relative z-10 scale-110 object-cover object-center blur-[2px] md:scale-105 lg:scale-100"
                priority
              />
            </motion.div>
          </AnimatePresence>
          {/* Muted dark overlay for text readability (neutral black instead of blue) */}
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
        </div>

        <Container className="relative z-10 flex h-full w-full flex-col items-center justify-center">
          <div className="w-full max-w-4xl text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTreatment.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex w-full flex-col items-center justify-center"
              >
                <p className="mb-3 text-center text-xs font-semibold tracking-[0.2em] text-white uppercase drop-shadow-md sm:mb-4 sm:text-sm md:text-base">
                  {activeTreatment.subtitle}
                </p>
                <h1 className="font-heading mb-8 text-center text-2xl leading-tight font-extrabold tracking-wide text-white drop-shadow-[0_8px_12px_rgba(0,0,0,0.9)] sm:mb-10 sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl">
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
        className="relative overflow-hidden bg-white pt-8 pb-16 md:pt-12 md:pb-20"
      >
        <div className="grain-overlay pointer-events-none absolute top-0 right-0 h-full w-full opacity-10" />
        <div className="bg-brand-gold/5 pointer-events-none absolute top-[5%] -right-[20%] h-[600px] w-[600px] rounded-full blur-[150px] filter" />

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8 flex flex-col items-center text-center md:mb-12"
          >
            <p className="text-brand-gold mb-3 text-center text-xs font-semibold tracking-[0.2em] uppercase">
              Signature Collection
            </p>
            <h2 className="font-heading text-brand-primary text-center text-3xl font-bold md:text-4xl lg:text-5xl 2xl:text-6xl">
              Kottakkal&apos;s{" "}
              <span className="text-brand-gold relative inline-block">
                Featured Therapies
                <motion.span
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  className="bg-brand-gold absolute -bottom-1 left-0 h-[3px] rounded-full"
                />
              </span>
            </h2>
          </motion.div>

          {/* Split Layout: Cards Left, Highlights Right */}
          <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-14">
            {/* Left — 4 Featured Image Cards */}
            <div className="hidden grid-cols-1 gap-4 sm:grid-cols-2 md:grid lg:gap-6">
              {treatments.slice(0, 4).map((treatment, idx) => (
                <motion.div
                  key={treatment.id}
                  id={`treatment-${treatment.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group hover:border-brand-gold/30 flex cursor-pointer scroll-mt-32 flex-col overflow-hidden rounded-2xl border-2 border-transparent shadow-md transition-all duration-300 hover:shadow-xl"
                >
                  <div className="relative h-60 w-full flex-1 overflow-hidden sm:h-64 lg:h-[280px]">
                    <Image
                      src={treatment.imagePath}
                      alt={`${treatment.title} - Authentic Ayurvedic Treatment in Dubai`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="from-brand-dark/90 via-brand-dark/30 absolute inset-0 bg-gradient-to-t to-transparent" />
                    <div className="absolute right-4 bottom-4 left-4 sm:right-6 sm:bottom-6 sm:left-6">
                      <h3 className="font-heading mb-1 text-xl leading-tight font-bold text-white drop-shadow-md sm:text-2xl">
                        {treatment.title}
                      </h3>
                      <p className="text-xs font-medium text-white/80 sm:text-sm">
                        {treatment.duration}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right — 4 Stacked Premium Highlight Panels */}
            <div className="bg-brand-primary relative overflow-hidden rounded-3xl">
              {/* Decorative background elements */}
              <div className="bg-brand-gold/[0.08] pointer-events-none absolute -top-16 -right-16 h-72 w-72 rounded-full blur-[80px] filter" />
              <div className="bg-brand-gold/5 pointer-events-none absolute bottom-0 -left-10 h-48 w-48 rounded-full blur-[60px] filter" />

              <div className="relative z-10 divide-y divide-white/10">
                {treatments.slice(0, 4).map((treatment, idx) => (
                  <motion.div
                    key={treatment.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.12 }}
                    className="p-6 transition-colors duration-300 hover:bg-white/[0.04] sm:p-8"
                  >
                    {/* Number badge + Subtitle */}
                    <div className="mb-3 flex items-center gap-3">
                      <span className="bg-brand-gold/15 text-brand-gold inline-flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-bold tracking-wider">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <p className="text-brand-gold text-[10px] font-bold tracking-[0.15em] uppercase sm:text-xs">
                        {treatment.subtitle}
                      </p>
                    </div>

                    {/* Title + Duration */}
                    <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="font-heading text-xl leading-tight font-bold text-white sm:text-2xl">
                        {treatment.title}
                      </h3>
                      <div className="flex shrink-0 items-center gap-1.5">
                        <Clock className="text-brand-gold/70 h-3.5 w-3.5" />
                        <span className="text-xs font-medium whitespace-nowrap text-white/60">
                          {treatment.duration}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mb-4 line-clamp-2 text-sm leading-relaxed font-light text-gray-400">
                      {treatment.description}
                    </p>

                    {/* Benefits (top 3) + Book button */}
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-wrap gap-2">
                        {treatment.benefits.slice(0, 3).map((benefit, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.06] px-2.5 py-1 text-[11px] font-light text-white/70 sm:text-xs"
                          >
                            <span className="bg-brand-gold h-1 w-1 shrink-0 rounded-full" />
                            {benefit}
                          </span>
                        ))}
                      </div>
                      <button
                        onClick={() =>
                          openWhatsApp({ treatment: treatment.title })
                        }
                        className="bg-brand-gold text-brand-primary hover:bg-brand-gold/90 shadow-brand-gold/20 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-2.5 text-[11px] font-bold tracking-wider uppercase shadow-lg transition-all duration-300 sm:w-auto sm:text-xs"
                      >
                        Book Now
                        <ArrowRight className="h-3.5 w-3.5" />
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
        className="bg-brand-cream relative overflow-hidden pt-10 pb-20 md:pt-16 md:pb-28"
      >
        <div className="bg-brand-primary/[0.03] pointer-events-none absolute top-[20%] -left-[15%] h-[600px] w-[600px] rounded-full blur-[150px] filter" />
        <div className="bg-brand-gold/[0.04] pointer-events-none absolute right-[-10%] bottom-[10%] h-[400px] w-[400px] rounded-full blur-[120px] filter" />

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-8 flex flex-col items-center text-center md:mb-12"
          >
            <div className="bg-brand-primary/5 border-brand-primary/10 mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-1.5">
              <Sparkles className="text-brand-gold h-3.5 w-3.5" />
              <p className="text-brand-primary text-[10px] font-bold tracking-[0.2em] uppercase sm:text-xs">
                Complete Menu
              </p>
            </div>
            <h2 className="font-heading text-brand-primary mb-5 text-center text-3xl font-bold md:text-4xl lg:text-5xl 2xl:text-6xl">
              All Our{" "}
              <span className="text-brand-gold relative inline-block">
                Therapies
                <motion.span
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  className="bg-brand-gold/40 absolute -bottom-1 left-0 h-[3px] rounded-full"
                />
              </span>
            </h2>
            <p className="text-brand-grey mx-auto max-w-xl text-sm leading-relaxed font-light md:text-base">
              A comprehensive range of authentic Ayurvedic treatments rooted in
              centuries of tradition, designed for total well-being.
            </p>
          </motion.div>

          <div className="mx-auto max-w-4xl space-y-3">
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
                    className={`overflow-hidden rounded-2xl border bg-white transition-all duration-400 ${
                      isExpanded
                        ? "border-brand-primary/15 shadow-brand-primary/5 shadow-lg"
                        : "border-brand-primary/[0.06] hover:border-brand-primary/10 shadow-sm hover:shadow-md"
                    }`}
                  >
                    {/* Accordion Header */}
                    <button
                      onClick={() =>
                        setExpandedTherapy(isExpanded ? null : treatment.id)
                      }
                      className="hover:bg-brand-primary/[0.015] flex w-full items-center gap-4 p-5 text-left transition-colors duration-300 sm:gap-5 sm:p-6"
                    >
                      {/* Number */}
                      <span
                        className={`hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold tracking-wide transition-all duration-300 sm:inline-flex ${
                          isExpanded
                            ? "bg-brand-primary text-white shadow-md"
                            : "bg-brand-primary/5 text-brand-primary/50"
                        }`}
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </span>

                      {/* Title + Badge */}
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-3">
                          <h3
                            className={`font-heading text-base font-bold transition-colors duration-300 sm:text-lg ${
                              isExpanded
                                ? "text-brand-primary"
                                : "text-brand-primary/80"
                            }`}
                          >
                            {treatment.title}
                          </h3>
                          <span className="bg-brand-primary hidden rounded-full px-2.5 py-0.5 text-[9px] font-bold tracking-wider whitespace-nowrap text-white uppercase sm:inline-block">
                            {treatment.subtitle}
                          </span>
                        </div>
                        {!isExpanded && (
                          <p className="text-brand-grey/70 mt-1 line-clamp-1 max-w-2xl text-xs font-light sm:text-sm">
                            {treatment.description}
                          </p>
                        )}
                      </div>

                      {/* Duration + Chevron */}
                      <div className="flex shrink-0 items-center gap-3 sm:gap-4">
                        <div className="text-brand-primary/40 hidden items-center gap-1.5 sm:flex">
                          <Clock className="h-3.5 w-3.5" />
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
                          className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-full transition-colors duration-300 ${
                            isExpanded
                              ? "bg-brand-primary text-white"
                              : "bg-brand-primary/5 text-brand-primary/40 hover:bg-brand-primary/10 hover:text-brand-primary/70"
                          }`}
                        >
                          <ChevronDown className="h-4 w-4" />
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
                          <div className="px-5 pt-0 pb-6 sm:px-6 sm:pb-8">
                            {/* Divider */}
                            <div className="via-brand-primary/10 mb-6 h-px w-full bg-gradient-to-r from-transparent to-transparent" />

                            <div className="sm:pl-[60px]">
                              {/* Description */}
                              <p className="text-brand-grey mb-6 max-w-2xl text-sm leading-relaxed font-light sm:text-base">
                                {treatment.longDescription ||
                                  treatment.description}
                              </p>

                              {/* Benefits Grid */}
                              <div className="mb-8 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
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
                                    <div className="bg-brand-gold h-1.5 w-1.5 shrink-0 rounded-full" />
                                    <span className="text-brand-primary/70 text-sm font-light">
                                      {benefit}
                                    </span>
                                  </motion.div>
                                ))}
                              </div>

                              {/* Duration (mobile) + CTA */}
                              <div className="flex flex-col items-center gap-4 sm:flex-row">
                                <div className="text-brand-primary/50 flex items-center gap-1.5 sm:hidden">
                                  <Clock className="h-3.5 w-3.5" />
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
                                  className="bg-brand-primary hover:bg-brand-gold hover:text-brand-primary shadow-brand-primary/15 hover:shadow-brand-gold/20 inline-flex w-full items-center justify-center gap-2.5 rounded-full px-8 py-3 text-xs font-bold tracking-wider text-white uppercase shadow-lg transition-all duration-300 sm:w-auto"
                                >
                                  Book This Therapy
                                  <ArrowRight className="h-3.5 w-3.5" />
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
              className="relative mx-auto mt-8 max-w-4xl"
            >
              {/* Fade overlay hint — only when collapsed */}
              {!showAllTherapies && (
                <div className="from-brand-cream pointer-events-none absolute -top-16 right-0 left-0 z-10 h-16 bg-gradient-to-t to-transparent" />
              )}

              <div className="flex justify-center">
                <motion.button
                  onClick={() => {
                    if (showAllTherapies) {
                      setShowAllTherapies(false);
                      setExpandedTherapy(null);
                      // Scroll back to the section heading
                      const section = document.getElementById(
                        "all-therapies-section"
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
                  className="group bg-brand-primary hover:bg-brand-gold hover:text-brand-primary shadow-brand-primary/15 hover:shadow-brand-gold/20 inline-flex items-center justify-center gap-3 rounded-full px-8 py-3.5 text-xs font-bold tracking-wider text-white uppercase shadow-lg transition-all duration-400 hover:shadow-xl sm:px-10 sm:py-4 sm:text-sm"
                >
                  {showAllTherapies ? (
                    <>
                      Show Less
                      <motion.div
                        animate={{ rotate: 180 }}
                        className="group-hover:bg-brand-primary/10 flex h-5 w-5 items-center justify-center rounded-full bg-white/20 transition-colors duration-300"
                      >
                        <ChevronDown className="h-3.5 w-3.5" />
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
                        className="group-hover:bg-brand-primary/10 flex h-5 w-5 items-center justify-center rounded-full bg-white/20 transition-colors duration-300"
                      >
                        <ChevronDown className="h-3.5 w-3.5" />
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
