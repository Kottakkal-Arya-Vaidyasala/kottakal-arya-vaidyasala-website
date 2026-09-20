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
    image: "/images/hero/home-carousel1.webp",
    title: "Awaken Your Inner Vitality",
    subtitle: "REJUVENATE YOUR SPIRIT TODAY.",
  },
  {
    image: "/images/hero/home-carousel2.webp",
    title: "Our Healing Heritage",
    subtitle: "AUTHENTIC AYURVEDA & HOMEOPATHY IN ABU DHABI",
  },
  {
    image: "/images/hero/home-carousel3.webp",
    title: "Heal naturally. Live fully.",
    subtitle: "PURE AYURVEDIC & HOMEOPATHIC CARE.",
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
      prev === 0 ? carouselData.length - 1 : prev - 1
    );
  };

  return (
    <section
      id="hero"
      className="bg-brand-dark group relative flex h-[60vh] min-h-[500px] w-full items-center overflow-hidden"
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
            alt={`${carouselData[currentImage].title} - Kottakkal Arya Vaidyasala Dubai`}
            fill
            className="object-cover"
            sizes="100vw"
            loading="eager"
            priority={currentImage === 0}
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark overlay to ensure text is readable */}
      <div className="bg-brand-dark/30 absolute inset-0 z-10" />

      {/* ── Manual Navigation Arrows ────────────────── */}
      <button
        onClick={prevSlide}
        className="hover:bg-brand-gold/80 absolute top-1/2 left-2 z-30 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-2 text-white opacity-0 backdrop-blur-md transition-all group-hover:opacity-100 md:left-6 md:p-3"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
      </button>

      <button
        onClick={nextSlide}
        className="hover:bg-brand-gold/80 absolute top-1/2 right-2 z-30 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-2 text-white opacity-0 backdrop-blur-md transition-all group-hover:opacity-100 md:right-6 md:p-3"
        aria-label="Next image"
      >
        <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
      </button>

      {/* ── Foreground Text Layer ──────────────────── */}
      <Container className="relative z-20 flex h-full flex-col items-center justify-center pt-16 pb-24 text-center">
        {/* Title Container with AnimatePresence for smooth transitions */}
        <div className="mb-1 flex w-full items-end justify-center overflow-hidden px-2 sm:mb-2 sm:px-4">
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              style={{ textShadow: "0px 4px 12px rgba(0, 0, 0, 0.9)" }}
              className="font-heading px-2 text-center text-xl leading-tight font-bold tracking-wide whitespace-normal text-white sm:text-2xl sm:whitespace-nowrap md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
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
              className="text-center text-[8px] font-light tracking-[0.15em] text-gray-200 uppercase sm:text-xs md:text-sm lg:text-base"
            >
              {carouselData[currentImage].subtitle}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Carousel Indicators */}
        <div className="glass absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-md">
          {carouselData.map((_, idx) => (
            <div
              key={idx}
              className={`cursor-pointer rounded-full transition-all duration-500 ${
                idx === currentImage
                  ? "bg-brand-gold h-1.5 w-6"
                  : "h-1.5 w-1.5 bg-white/40 hover:bg-white/60"
              }`}
              onClick={() => setCurrentImage(idx)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
