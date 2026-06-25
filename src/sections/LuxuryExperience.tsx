"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/common/Container";
import AnimatedReveal from "@/components/common/AnimatedReveal";

/**
 * ═══════════════════════════════════════════════════
 * Luxury Experience — Asymmetric Image Gallery
 * ═══════════════════════════════════════════════════
 * Full-width gallery showcasing the premium clinic environment.
 * Asymmetric masonry layout with hover zoom and gold border reveals.
 */

const galleryImages = [
  {
    src: "/images/gallery/kerala-heritage.png",
    alt: "Traditional Ayurvedic heritage courtyard",
    title: "Ayurvedic Heritage",
    span: "col-span-2 row-span-2",
    aspect: "aspect-square",
  },
  {
    src: "/images/gallery/wellness-lounge.png",
    alt: "Premium wellness relaxation lounge",
    title: "Wellness Lounge",
    span: "col-span-1 row-span-1",
    aspect: "aspect-square",
  },
  {
    src: "/images/gallery/consultation.png",
    alt: "Ayurvedic doctor consultation",
    title: "Expert Consultation",
    span: "col-span-1 row-span-1",
    aspect: "aspect-square",
  },
  {
    src: "/images/homeopathy/homeopathy.png",
    alt: "Homeopathic therapy session",
    title: "Healing Therapies",
    span: "col-span-2 row-span-1",
    aspect: "aspect-[2/1]",
  },
];

export default function LuxuryExperience() {
  return (
    <section className="py-24 md:py-32 bg-brand-cream relative overflow-hidden">
      <Container>
        {/* ── Section Header ────────────────────────── */}
        <AnimatedReveal direction="up" className="text-center mb-16 md:mb-20">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-gold mb-3 block">
            Our Environment
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold font-heading text-brand-primary leading-[1.15] max-w-3xl mx-auto mb-5">
            A Sanctuary of <span className="text-brand-gold">Healing</span>
          </h2>
          <p className="text-base md:text-lg text-brand-grey max-w-2xl mx-auto leading-[1.6] font-light">
            Step into a space where traditional Ayurvedic aesthetics meet modern
            comfort — designed to nurture your journey to wellness.
          </p>
          <div className="flex items-center justify-center gap-2 mt-5">
            <div className="h-[2px] w-10 rounded-full bg-brand-gold" />
            <div className="h-2 w-2 rounded-full rotate-45 bg-brand-gold" />
            <div className="h-[2px] w-10 rounded-full bg-brand-gold" />
          </div>
        </AnimatedReveal>

        {/* ── Asymmetric Image Grid ─────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 auto-rows-[200px] md:auto-rows-[220px]">
          {galleryImages.map((img, idx) => (
            <AnimatedReveal
              key={img.title}
              direction="up"
              delay={idx * 100}
              className={img.span}
            >
              <motion.div
                whileHover={{ scale: 0.98 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full h-full rounded-xl overflow-hidden group img-zoom gold-border-reveal cursor-pointer"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/50 transition-all duration-500 flex items-end justify-start p-5 md:p-6">
                  <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="text-xs font-semibold text-brand-gold tracking-wider uppercase">
                      {img.title}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatedReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
