"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import AnimatedReveal from "@/components/common/AnimatedReveal";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

/**
 * ═══════════════════════════════════════════════════
 * Testimonials Preview — Auto-Sliding Single Card
 * ═══════════════════════════════════════════════════
 * A luxury auto-playing carousel displaying one large
 * patient review at a time with smooth crossfades.
 */
export default function TestimonialsPreview() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const review = testimonials[activeIndex];

  return (
    <section className="pt-4 pb-20 md:pt-16 md:pb-32 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-gold/[0.03] rounded-full filter blur-[180px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-brand-primary/[0.02] rounded-full filter blur-[120px] pointer-events-none" />

      <Container>
        <AnimatedReveal direction="up">
          <SectionHeading
            title="Lives Renewed, Balance Restored"
            subtitle="Patient Testimonials"
            description="Authentic stories of individuals who rediscovered harmony and health through Ayurvedic healing."
            align="center"
          />
        </AnimatedReveal>

        <AnimatedReveal
          direction="fade"
          className="max-w-4xl mx-auto mt-12 md:mt-16 relative"
        >
          {/* Main Card Container */}
          <div className="relative bg-gradient-to-br from-brand-primary/[0.03] to-brand-gold/[0.04] rounded-[2rem] p-6 md:p-10 lg:p-12 border border-brand-primary/10 shadow-xl overflow-hidden min-h-[300px] flex items-center justify-center">
            {/* Decorative Quotes */}
            <Quote className="absolute top-6 left-6 md:top-8 md:left-8 w-10 h-10 md:w-16 md:h-16 text-brand-gold/[0.07]" />
            <Quote className="absolute bottom-6 right-6 md:bottom-8 md:right-8 w-10 h-10 md:w-16 md:h-16 text-brand-gold/[0.07] rotate-180" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 40, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -40, scale: 0.98 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 flex flex-col items-center text-center w-full"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 md:w-6 md:h-6 fill-brand-gold text-brand-gold"
                    />
                  ))}
                </div>

                {/* Quote text */}
                <blockquote className="mb-8 max-w-2xl mx-auto">
                  <p className="font-heading text-lg md:text-2xl font-medium text-brand-dark leading-[1.6] italic">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </blockquote>

                {/* Author Info */}
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-brand-primary to-brand-gold flex items-center justify-center text-white font-heading font-bold text-xl shadow-lg ring-2 ring-white">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-heading text-lg md:text-xl font-bold text-brand-primary mb-1">
                      {review.name}
                    </div>
                    <div className="text-sm md:text-base text-brand-grey">
                      {review.location}{" "}
                      <span className="mx-2 text-brand-gold/50">•</span>{" "}
                      <span className="text-brand-gold font-semibold">
                        {review.treatment}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8 md:mt-10">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`transition-all duration-500 rounded-full ${
                  idx === activeIndex
                    ? "w-10 h-2.5 bg-brand-gold shadow-md"
                    : "w-2.5 h-2.5 bg-brand-gold/30 hover:bg-brand-gold/60"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </AnimatedReveal>
      </Container>
    </section>
  );
}
