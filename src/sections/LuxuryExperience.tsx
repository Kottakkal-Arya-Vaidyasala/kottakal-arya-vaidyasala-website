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
    src: "/images/homeopathy/homeopathy.webp",
    alt: "Homeopathic therapy session",
    title: "Healing Therapies",
    span: "col-span-2 row-span-1",
    aspect: "aspect-[2/1]",
  },
];

export default function LuxuryExperience() {
  return (
    <section className="bg-brand-cream relative overflow-hidden py-24 md:py-32">
      <Container>
        {/* ── Section Header ────────────────────────── */}
        <AnimatedReveal direction="up" className="mb-16 text-center md:mb-20">
          <span className="text-brand-gold mb-3 block text-xs font-semibold tracking-[0.2em] uppercase">
            Our Environment
          </span>
          <h2 className="font-heading text-brand-primary mx-auto mb-5 max-w-3xl text-3xl leading-[1.15] font-bold md:text-4xl lg:text-5xl 2xl:text-6xl">
            A Sanctuary of <span className="text-brand-gold">Healing</span>
          </h2>
          <p className="text-brand-grey mx-auto max-w-2xl text-base leading-[1.6] font-light md:text-lg">
            Step into a space where traditional Ayurvedic aesthetics meet modern
            comfort — designed to nurture your journey to wellness.
          </p>
          <div className="mt-5 flex items-center justify-center gap-2">
            <div className="bg-brand-gold h-[2px] w-10 rounded-full" />
            <div className="bg-brand-gold h-2 w-2 rotate-45 rounded-full" />
            <div className="bg-brand-gold h-[2px] w-10 rounded-full" />
          </div>
        </AnimatedReveal>

        {/* ── Asymmetric Image Grid ─────────────────── */}
        <div className="grid auto-rows-[200px] grid-cols-2 gap-4 md:auto-rows-[220px] md:grid-cols-4 md:gap-5">
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
                className="group img-zoom gold-border-reveal relative h-full w-full cursor-pointer overflow-hidden rounded-xl"
              >
                <Image
                  src={img.src}
                  alt={`${img.alt} - Kottakkal Ayurveda Dubai`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />

                {/* Hover overlay */}
                <div className="bg-brand-dark/0 group-hover:bg-brand-dark/50 absolute inset-0 flex items-end justify-start p-5 transition-all duration-500 md:p-6">
                  <div className="translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="text-brand-gold text-xs font-semibold tracking-wider uppercase">
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
