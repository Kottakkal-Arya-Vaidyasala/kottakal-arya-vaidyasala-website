"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import Container from "@/components/common/Container"
import SectionHeading from "@/components/common/SectionHeading"
import AnimatedReveal from "@/components/common/AnimatedReveal"
import PrimaryButton from "@/components/common/PrimaryButton"
import { Check, ArrowRight, Clock } from "lucide-react"
import { featuredTreatments } from "@/data/treatments"

/**
 * ═══════════════════════════════════════════════════
 * Featured Treatments — Magazine Editorial Layout
 * ═══════════════════════════════════════════════════
 * Alternating left-right image/text rows instead of
 * a generic 3-column card grid. Each treatment has
 * a unique visual composition.
 */
export default function FeaturedTreatments() {
  return (
    <section
      id="featured-treatments"
      className="py-24 md:py-32 bg-white dark:bg-brand-dark/20 relative overflow-hidden"
    >
      {/* Subtle background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/[0.02] rounded-full filter blur-[200px] pointer-events-none" />

      <Container>
        <AnimatedReveal direction="up">
          <SectionHeading
            title="Our Signature Ayurvedic Therapies"
            subtitle="Featured Treatments"
            description="Each therapy is customized to your unique constitution by our expert physicians, using authentic Kerala herbal formulations."
            align="center"
          />
        </AnimatedReveal>

        {/* ── Alternating Treatment Rows ────────────── */}
        <div className="flex flex-col gap-20 md:gap-28">
          {featuredTreatments.map((treatment, idx) => {
            const isReversed = idx % 2 !== 0
            const isLast = idx === featuredTreatments.length - 1

            /* Last item = full-width cinematic banner */
            if (isLast) {
              return (
                <AnimatedReveal key={treatment.id} direction="up" delay={100}>
                  <div className="relative rounded-2xl overflow-hidden min-h-[400px] md:min-h-[500px] img-zoom gold-border-reveal flex items-center">
                    <Image
                      src={treatment.imagePath}
                      alt={treatment.title}
                      fill
                      className="object-cover absolute inset-0 z-0"
                      sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-brand-dark/95 via-brand-dark/70 to-brand-dark/30 md:to-transparent z-0" />

                    {/* Content overlay */}
                    <div className="relative z-10 p-8 md:p-14 max-w-2xl flex flex-col items-center text-center md:items-start md:text-left w-full mx-auto md:mx-0">
                      <span className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold tracking-[0.15em] uppercase text-brand-gold mb-4">
                        <Clock className="w-3.5 h-3.5" />
                          {treatment.duration}
                        </span>
                        <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 leading-tight">
                          {treatment.title}
                        </h3>
                        <p className="text-sm text-brand-gold/80 font-semibold mb-5">
                          {treatment.subtitle}
                        </p>
                        <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-8 max-w-lg">
                          {treatment.description}
                        </p>

                        <ul className="flex flex-wrap gap-3 mb-8">
                          {treatment.benefits.slice(0, 3).map((b) => (
                            <li
                              key={b}
                              className="flex items-center gap-1.5 text-xs text-gray-300 bg-white/5 px-3 py-1.5 rounded-full border border-white/10"
                            >
                              <Check className="w-3.5 h-3.5 text-brand-gold" />
                              {b}
                            </li>
                          ))}
                        </ul>

                        <Link href={`/our-treatments#treatment-${treatment.id}`}>
                          <PrimaryButton icon={<ArrowRight className="w-4 h-4" />}>
                            Learn More
                          </PrimaryButton>
                        </Link>
                    </div>
                  </div>
                </AnimatedReveal>
              )
            }

            /* Standard alternating row */
            return (
              <AnimatedReveal key={treatment.id} direction="up" delay={idx * 100}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                    isReversed ? "lg:direction-rtl" : ""
                  }`}
                >
                  {/* Image */}
                  <div
                    className={`lg:col-span-5 ${
                      isReversed ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
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

                      {/* Duration badge */}
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
                    className={`lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left ${
                      isReversed ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <span className="text-xs font-semibold tracking-[0.15em] uppercase text-brand-primary dark:text-brand-secondary mb-3 block">
                      Signature Therapy
                    </span>
                    <h3 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                      {treatment.title}
                    </h3>
                    <p className="text-sm font-semibold text-brand-gold mb-5">
                      {treatment.subtitle}
                    </p>
                    <p className="text-base text-gray-600 dark:text-gray-300 leading-[1.8] mb-8 max-w-lg">
                      {treatment.description}
                    </p>

                    {/* Benefits list */}
                    <ul className="flex flex-col gap-3 mb-8">
                      {treatment.benefits.map((b) => (
                        <li key={b} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3 text-brand-primary dark:text-brand-secondary" />
                          </div>
                          <span className="text-sm text-gray-600 dark:text-gray-300">
                            {b}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Link href={`/our-treatments#treatment-${treatment.id}`}>
                      <PrimaryButton icon={<ArrowRight className="w-4 h-4" />}>
                        Learn More & Book
                      </PrimaryButton>
                    </Link>
                  </div>
                </div>
              </AnimatedReveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
