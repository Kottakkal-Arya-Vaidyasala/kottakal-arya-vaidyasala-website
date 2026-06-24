"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/common/Container";
import PrimaryButton from "@/components/common/PrimaryButton";
import { ArrowRight, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { useWhatsApp } from "@/hooks/useWhatsApp";

/**
 * ═══════════════════════════════════════════════════
 * Hero — 70vh Full-Width Cinematic Carousel
 * ═══════════════════════════════════════════════════
 */

const carouselData = [
  {
    image: "/images/hero/home-carousel1.png",
    title: "Awaken Your Inner Vitality",
    subtitle: "REJUVENATE YOUR SPIRIT TODAY.",
  },
  {
    image: "/images/hero/home-carousel2.png",
    title: "Our Healing Heritage",
    subtitle: "AUTHENTIC AYURVEDA IN ABU DHABI",
  },
  {
    image: "/images/hero/home-carousel3.png",
    title: "Heal naturally. Live fully.",
    subtitle: "PURE AYURVEDIC CARE.",
  },
];

export default function Hero() {
  const { openWhatsApp } = useWhatsApp();

  const [currentImage, setCurrentImage] = useState(0);

  // Auto-Carousel Effect (3 seconds) - Resets on manual navigation
  useEffect(() => {
    const carouselTimer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselData.length);
    }, 3000);
    return () => clearInterval(carouselTimer);
  }, [currentImage]);

  const nextSlide = () => {
    setCurrentImage((prev) => (prev + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setCurrentImage((prev) =>
      prev === 0 ? carouselData.length - 1 : prev - 1,
    );
  };

  return (
    <section
      id="hero"
      className="relative w-full h-[60vh] min-h-[500px] flex items-center overflow-hidden bg-brand-dark group"
    >
      {/* ── Background Carousel Layer ──────────────── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={carouselData[currentImage].image}
            alt={carouselData[currentImage].title}
            fill
            className="object-cover"
            sizes="100vw"
            priority={currentImage === 0}
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark overlay to ensure text is readable */}
      <div className="absolute inset-0 bg-brand-dark/30 z-10" />

      {/* ── Manual Navigation Arrows ────────────────── */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-30 p-2 md:p-3 rounded-full bg-white/10 hover:bg-brand-gold/80 backdrop-blur-md border border-white/20 text-white transition-all opacity-0 group-hover:opacity-100"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-30 p-2 md:p-3 rounded-full bg-white/10 hover:bg-brand-gold/80 backdrop-blur-md border border-white/20 text-white transition-all opacity-0 group-hover:opacity-100"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      {/* ── Foreground Text Layer ──────────────────── */}
      <Container className="relative z-20 flex flex-col items-center justify-center text-center h-full pt-16 pb-24">
        {/* Title Container with AnimatePresence for smooth transitions */}
        <div className="mb-1 sm:mb-2 flex items-end justify-center px-2 sm:px-4 w-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              style={{ textShadow: "0px 4px 12px rgba(0, 0, 0, 0.9)" }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-heading font-bold text-white whitespace-normal sm:whitespace-nowrap tracking-wide leading-tight px-2 text-center"
            >
              {carouselData[currentImage].title}
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* Subtitle Container */}
        <div className="mb-10 flex items-start justify-center px-4">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
              style={{ textShadow: "0px 2px 8px rgba(0, 0, 0, 0.9)" }}
              className="text-[8px] sm:text-xs md:text-sm lg:text-base text-gray-200 font-light tracking-[0.15em] uppercase text-center"
            >
              {carouselData[currentImage].subtitle}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full glass bg-white/10 backdrop-blur-md">
          {carouselData.map((_, idx) => (
            <div
              key={idx}
              className={`transition-all duration-500 rounded-full cursor-pointer ${
                idx === currentImage
                  ? "w-6 h-1.5 bg-brand-gold"
                  : "w-1.5 h-1.5 bg-white/40 hover:bg-white/60"
              }`}
              onClick={() => setCurrentImage(idx)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
