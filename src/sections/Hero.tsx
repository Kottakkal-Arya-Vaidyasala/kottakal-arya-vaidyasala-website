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
    image: "/images/hero/hero-carousel.png",
    title: "The Epitome of Luxury Ayurveda in the UAE.",
    subtitle:
      "Escape the fast-paced city life. Discover a sanctuary of elite holistic healing and exclusive wellness therapies right here in Abu Dhabi.",
  },
  {
    image: "/images/clinic/carousel2.png",
    title: "An Unrivaled Haven of Wellness.",
    subtitle:
      "Experience unmatched VIP care and ancient healing therapies, flawlessly delivered by expert physicians in a state-of-the-art setting.",
  },
  {
    image: "/images/gallery/kerala-heritage1.png",
    title: "Bespoke Rejuvenation for the Elite.",
    subtitle:
      "Restore perfect harmony to mind and body with highly personalized detox and relaxation packages, exclusively crafted for our discerning clientele.",
  },
];

export default function Hero() {
  const { openWhatsApp } = useWhatsApp();

  const [displayedText, setDisplayedText] = useState("");
  const [typingComplete, setTypingComplete] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const hasTyped = React.useRef(false);

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

  // Typewriter Effect - Triggers only on the first slide
  useEffect(() => {
    if (currentImage !== 0) {
      const t = setTimeout(() => setTypingComplete(true), 0);
      return () => clearTimeout(t);
    }

    if (hasTyped.current) {
      setDisplayedText(carouselData[0].title);
      setTypingComplete(true);
      return;
    }

    let i = 0;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDisplayedText("");
    setTypingComplete(false);
    const currentTitle = carouselData[0].title;

    const startDelay = setTimeout(() => {
      const timer = setInterval(() => {
        setDisplayedText(currentTitle.slice(0, i));
        i++;
        if (i > currentTitle.length) {
          clearInterval(timer);
          setTypingComplete(true);
          hasTyped.current = true;
        }
      }, 40);
      return () => clearInterval(timer);
    }, 200);

    return () => clearTimeout(startDelay);
  }, [currentImage]);

  return (
    <section
      id="hero"
      className="relative w-full h-[70vh] min-h-[500px] flex items-center overflow-hidden bg-brand-dark group"
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
      <div className="absolute inset-0 bg-brand-dark/50 z-10" />

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
        <div className="min-h-[140px] md:min-h-[120px] lg:min-h-[180px] mb-6 flex items-end justify-center">
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentImage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-white leading-[1.15] max-w-4xl mx-auto"
            >
              {currentImage === 0
                ? displayedText
                : carouselData[currentImage].title}
              {/* Blinking cursor only when typing on the first slide */}
              {currentImage === 0 && !typingComplete && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="inline-block w-[3px] h-[1em] bg-brand-gold ml-1 align-middle translate-y-[-2px]"
                />
              )}
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* Subtitle Container (Fixed height prevents buttons from jumping) */}
        <div className="min-h-[100px] mb-10 flex items-start justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentImage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed font-light"
            >
              {carouselData[currentImage].subtitle}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Buttons (Static to prevent jumpiness) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <PrimaryButton
            onClick={() => openWhatsApp()}
            icon={<Calendar className="w-4 h-4" />}
          >
            Book Consultation
          </PrimaryButton>
          <Link href="/our-treatments">
            <PrimaryButton icon={<ArrowRight className="w-4 h-4" />}>
              Explore Therapies
            </PrimaryButton>
          </Link>
        </motion.div>

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
