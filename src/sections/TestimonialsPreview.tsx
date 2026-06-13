"use client"

import React from "react"
import { motion } from "framer-motion"
import Container from "@/components/common/Container"
import SectionHeading from "@/components/common/SectionHeading"
import AnimatedReveal from "@/components/common/AnimatedReveal"
import { Star, Quote } from "lucide-react"
import { featuredTestimonial, supportingTestimonials } from "@/data/testimonials"

/**
 * ═══════════════════════════════════════════════════
 * Testimonials Preview — Overlapping Editorial Cards
 * ═══════════════════════════════════════════════════
 * A large hero-style featured quote alongside smaller
 * supporting testimonials. Not a generic slider or grid.
 */
export default function TestimonialsPreview() {
  return (
    <section className="py-24 md:py-32 bg-white dark:bg-brand-dark/20 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-gold/[0.03] rounded-full filter blur-[180px] pointer-events-none" />

      <Container>
        <AnimatedReveal direction="up">
          <SectionHeading
            title="Stories of Restored Vitality"
            subtitle="Patient Testimonials"
            description="Real experiences from patients who rediscovered wellness through our traditional Ayurvedic therapies."
            align="center"
          />
        </AnimatedReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* ── Featured Hero Testimonial (Large) ────── */}
          <AnimatedReveal direction="right" className="lg:col-span-7">
            <div className="relative h-full bg-gradient-to-br from-brand-primary/[0.04] to-brand-gold/[0.03] dark:from-brand-primary/10 dark:to-brand-gold/5 rounded-2xl p-8 md:p-12 border border-brand-primary/8 hover:border-brand-gold/25 transition-all duration-500 flex flex-col justify-between">
              {/* Large decorative quote */}
              <Quote className="absolute top-6 right-6 w-20 h-20 text-brand-gold/[0.07]" />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(featuredTestimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-brand-gold text-brand-gold"
                  />
                ))}
              </div>

              {/* Quote text */}
              <blockquote className="relative z-10 mb-8">
                <p className="font-heading text-xl md:text-2xl lg:text-[1.65rem] font-medium text-gray-800 dark:text-gray-100 leading-[1.6] italic">
                  &ldquo;{featuredTestimonial.text}&rdquo;
                </p>
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-brand-primary/10">
                {/* Initial avatar */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-primary to-brand-gold flex items-center justify-center text-white font-heading font-bold text-lg">
                  {featuredTestimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-heading text-base font-bold text-gray-900 dark:text-white">
                    {featuredTestimonial.name}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {featuredTestimonial.location} •{" "}
                    <span className="text-brand-primary dark:text-brand-secondary font-semibold">
                      {featuredTestimonial.treatment}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedReveal>

          {/* ── Supporting Testimonials (Stacked) ────── */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {supportingTestimonials.slice(0, 3).map((review, idx) => (
              <AnimatedReveal
                key={review.id}
                direction="left"
                delay={idx * 120}
              >
                <motion.div
                  whileHover={{ x: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="bg-brand-primary/[0.02] dark:bg-brand-primary/5 rounded-xl p-6 md:p-7 border border-brand-primary/8 hover:border-brand-gold/25 transition-all duration-500 group"
                >
                  {/* Stars */}
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-brand-gold text-brand-gold"
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed italic mb-4 line-clamp-3">
                    &ldquo;{review.text}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-primary/80 to-brand-gold/80 flex items-center justify-center text-white text-xs font-bold">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-heading font-bold text-gray-900 dark:text-white">
                        {review.name}
                      </div>
                      <div className="text-[10px] text-gray-500">
                        {review.location} •{" "}
                        <span className="text-brand-primary dark:text-brand-secondary font-semibold">
                          {review.treatment}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
