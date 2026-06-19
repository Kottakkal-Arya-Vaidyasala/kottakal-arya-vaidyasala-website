"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import AnimatedReveal from "@/components/common/AnimatedReveal";
import PrimaryButton from "@/components/common/PrimaryButton";
import {
  Check,
  ArrowRight,
  Clock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { featuredTreatments } from "@/data/treatments";

/**
 * ═══════════════════════════════════════════════════
 * Featured Treatments — Magazine Editorial Layout
 * ═══════════════════════════════════════════════════
 * Alternating left-right image/text rows with asymmetric
 * floating text headers. No generic grid cards.
 */
export default function FeaturedTreatments() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -260, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 260, behavior: "smooth" });
    }
  };

  return (
    <section
      id="featured-treatments"
      className="py-24 md:py-32 bg-white relative overflow-hidden"
    >
      {/* Subtle background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/[0.02] rounded-full filter blur-[200px] pointer-events-none" />

      <Container>
        <AnimatedReveal direction="up">
          <SectionHeading
            title="Our Signature Ayurvedic Therapies"
            subtitle="Featured Treatments"
            description="Each therapy is customized to your unique constitution by our expert physicians, using authentic traditional herbal formulations."
            align="center"
          />
        </AnimatedReveal>

        {/* ── Alternating Treatment Rows (Desktop) ────────────── */}
        <div className="hidden lg:flex flex-col gap-28">
          {featuredTreatments.map((treatment, idx) => {
            const isReversed = idx % 2 !== 0;
            const isNavy = idx % 2 === 0;

            return (
              <AnimatedReveal
                key={treatment.id}
                direction="up"
                delay={idx * 100}
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center p-8 md:p-12 lg:p-16 rounded-[2.5rem] shadow-lg ${
                    isNavy ? "bg-[#1F2A44]" : "bg-white"
                  } ${isReversed ? "lg:direction-rtl" : ""}`}
                >
                  {/* Image */}
                  <div
                    className={`lg:col-span-5 ${isReversed ? "lg:order-2" : "lg:order-1"}`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl gold-border-reveal"
                    >
                      <Image
                        src={treatment.imagePath}
                        alt={treatment.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-transparent" />
                      <div className="absolute top-5 left-5 glass rounded-full px-4 py-1.5 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-brand-gold" />
                        <span className="text-xs font-semibold text-white">
                          {treatment.duration}
                        </span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div
                    className={`lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left ${isReversed ? "lg:order-1" : "lg:order-2"}`}
                  >
                    <span className="text-xs font-semibold tracking-[0.15em] uppercase text-brand-gold mb-3 block lg:-ml-4 lg:pl-4 lg:border-l-2 lg:border-brand-gold/40">
                      Signature Therapy
                    </span>
                    <h3
                      className={`font-heading text-3xl md:text-4xl font-bold mb-2 leading-tight ${isNavy ? "text-white" : "text-[#1F2A44]"}`}
                    >
                      {treatment.title}
                    </h3>
                    <p className="text-sm font-semibold text-brand-gold mb-5">
                      {treatment.subtitle}
                    </p>
                    <p
                      className={`text-base leading-[1.6] font-medium mb-8 max-w-lg ${isNavy ? "text-gray-300" : "text-[#1F2A44]/80"}`}
                    >
                      {treatment.description}
                    </p>

                    <ul className="flex flex-col gap-3 mb-8">
                      {treatment.benefits.map((b) => (
                        <li key={b} className="flex items-center gap-3">
                          <div
                            className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${isNavy ? "bg-white/10" : "bg-[#1F2A44]/10"}`}
                          >
                            <Check
                              className={`w-3 h-3 ${isNavy ? "text-brand-gold" : "text-[#1F2A44]"}`}
                            />
                          </div>
                          <span
                            className={`text-sm font-medium ${isNavy ? "text-gray-200" : "text-[#1F2A44]"}`}
                          >
                            {b}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Link href={`/our-treatments#treatment-${treatment.id}`}>
                      <PrimaryButton
                        icon={<ArrowRight className="w-4 h-4" />}
                        className={
                          isNavy
                            ? "bg-white text-brand-primary hover:bg-white/90 border-transparent shadow-xl hover:shadow-white/20"
                            : ""
                        }
                      >
                        Learn More & Book
                      </PrimaryButton>
                    </Link>
                  </div>
                </div>
              </AnimatedReveal>
            );
          })}
        </div>

        {/* ── Horizontal Slider (Mobile & Tablet) ────────────── */}
        <div className="block lg:hidden relative mt-12">
          <div
            ref={sliderRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth after:content-[''] after:w-px after:shrink-0 sm:after:hidden"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {featuredTreatments.map((treatment, idx) => {
              const isNavy = idx % 2 === 0;
              return (
                <div
                  key={treatment.id}
                  className={`w-[75vw] sm:w-[280px] snap-center flex flex-col rounded-3xl shadow-xl overflow-hidden shrink-0 ${
                    isNavy ? "bg-[#1F2A44]" : "bg-white"
                  }`}
                >
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src={treatment.imagePath}
                      alt={treatment.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 75vw, 280px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 glass rounded-full px-3 py-1.5 flex items-center gap-1.5 border border-white/20">
                      <Clock className="w-3.5 h-3.5 text-brand-gold" />
                      <span className="text-[10px] font-semibold text-white tracking-wider">
                        {treatment.duration}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-brand-gold mb-1 block">
                      Signature Therapy
                    </span>
                    <h3
                      className={`font-heading text-xl font-bold mb-1 leading-tight ${isNavy ? "text-white" : "text-[#1F2A44]"}`}
                    >
                      {treatment.title}
                    </h3>
                    <p className="text-xs font-semibold text-brand-gold mb-4">
                      {treatment.subtitle}
                    </p>
                    <p
                      className={`text-sm leading-relaxed mb-6 line-clamp-3 ${isNavy ? "text-gray-300" : "text-[#1F2A44]/80"}`}
                    >
                      {treatment.description}
                    </p>
                    <div className="mt-auto pt-4 border-t border-brand-gold/20">
                      <Link href={`/our-treatments#treatment-${treatment.id}`}>
                        <PrimaryButton
                          icon={<ArrowRight className="w-4 h-4" />}
                          className={`w-full py-3 text-xs ${
                            isNavy
                              ? "bg-white text-brand-primary hover:bg-white/90 border-transparent"
                              : ""
                          }`}
                        >
                          Book Now
                        </PrimaryButton>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <style
            dangerouslySetInnerHTML={{
              __html: `
            .block.lg\\:hidden > div::-webkit-scrollbar { display: none; }
          `,
            }}
          />

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-white transition-all shadow-sm hover:shadow-md"
              aria-label="Previous treatment"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={scrollRight}
              className="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-white transition-all shadow-sm hover:shadow-md"
              aria-label="Next treatment"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
