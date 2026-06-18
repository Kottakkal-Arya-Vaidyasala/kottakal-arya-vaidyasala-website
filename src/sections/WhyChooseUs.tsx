"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import AnimatedReveal from "@/components/common/AnimatedReveal";
import { ShieldCheck, HeartPulse, Sparkles, Building } from "lucide-react";

/**
 * ═══════════════════════════════════════════════════
 * Why Choose Us — Asymmetric Editorial Layout
 * ═══════════════════════════════════════════════════
 * Large editorial feature on the left with a full-height
 * image and text overlay, plus 3 stacked feature cards
 * on the right with unique hover depth effects.
 */

const features = [
  {
    title: "Authentic Heritage",
    description:
      "Direct legacy of genuine Ayurvedic recipes, medicines, and therapeutic techniques from the ancient origins of Ayurveda — preserved across generations.",
    icon: <Sparkles className="w-5 h-5" />,
  },
  {
    title: "Certified Vaidyas",
    description:
      "Consult with highly trained BAMS/MD physicians skilled in traditional pulse analysis (Nadi Pariksha) and personalized treatment protocols.",
    icon: <ShieldCheck className="w-5 h-5" />,
  },
  {
    title: "Personalized Wellness",
    description:
      "We evaluate your Prakriti (constitution) and Vikriti (imbalances) to craft customized diet, herbal formulas, and treatment plans.",
    icon: <HeartPulse className="w-5 h-5" />,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="pt-12 pb-24 md:pt-16 md:pb-32 bg-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-primary/[0.02] rounded-full filter blur-[180px] pointer-events-none" />

      <Container>
        <AnimatedReveal direction="up">
          <SectionHeading
            title="A Legacy of Genuine Healing"
            subtitle="Why Choose Us"
            description="For over a century, our tradition of authentic Ayurveda has restored health and vitality to thousands."
            align="center"
          />
        </AnimatedReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* ── Left: Large editorial feature with image ── */}
          <AnimatedReveal direction="right" className="lg:col-span-5">
            <div className="relative h-full min-h-[400px] lg:min-h-0 rounded-2xl overflow-hidden img-zoom gold-border-reveal group">
              <Image
                src="/images/hero/hero-carousel.png"
                alt="Premium Ayurvedic treatment room"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/30 to-transparent" />

              {/* Text overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                <div className="flex items-center gap-2 mb-3">
                  <Building className="w-4 h-4 text-brand-gold" />
                  <span className="text-xs font-semibold text-brand-gold tracking-[0.15em] uppercase">
                    Premium Facility
                  </span>
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-2">
                  State-of-the-Art Healing Rooms
                </h3>
                <p className="text-sm text-gray-300 leading-[1.6] max-w-sm font-light">
                  Hygienic, serene treatment environments designed for your
                  comfort and complete restoration in Abu Dhabi.
                </p>
              </div>
            </div>
          </AnimatedReveal>

          {/* ── Right: 3 stacked editorial feature cards ── */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {features.map((feature, idx) => (
              <AnimatedReveal
                key={feature.title}
                direction="left"
                delay={idx * 120}
              >
                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="flex items-start gap-6 p-7 md:p-8 rounded-xl bg-brand-cream/50 border border-brand-primary/8 hover:border-brand-gold/30 transition-all duration-500 group editorial-hover"
                >
                  {/* Icon circle */}
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-brand-primary/8 flex items-center justify-center text-brand-primary border border-brand-primary/10 group-hover:bg-brand-primary group-hover:text-white group-hover:border-brand-primary transition-all duration-500">
                    {feature.icon}
                  </div>

                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-bold text-brand-primary mb-2 group-hover:text-brand-dark transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-brand-grey leading-[1.6] font-light">
                      {feature.description}
                    </p>
                  </div>

                  {/* Decorative gold accent on hover */}
                  <div className="w-1 self-stretch rounded-full bg-transparent group-hover:bg-brand-gold/40 transition-colors duration-500" />
                </motion.div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
