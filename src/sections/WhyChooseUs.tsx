"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import AnimatedReveal from "@/components/common/AnimatedReveal";
import { Leaf } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="pt-12 pb-12 md:pt-16 md:pb-16 bg-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-primary/[0.02] rounded-full filter blur-[180px] pointer-events-none" />

      <Container>
        <AnimatedReveal direction="up">
          <SectionHeading
            title="Who We Are"
            subtitle="Kottakkal Arya Vaidyasala"
            description="Where Ancient Wisdom Restores Vitality"
            align="center"
          />
        </AnimatedReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* ── Left: Large editorial feature with image ── */}
          <AnimatedReveal direction="right" className="lg:col-span-5">
            <div className="relative h-full min-h-[400px] lg:min-h-0 rounded-2xl overflow-hidden img-zoom gold-border-reveal group">
              <Image
                src="/images/about/herbs.png"
                alt="Ayurvedic herbs and holistic healing"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/30 to-transparent" />

              {/* Text overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8 z-10">
                <div className="flex items-center gap-2 mb-2 md:mb-3">
                  <Leaf className="w-3.5 h-3.5 md:w-4 md:h-4 text-brand-gold" />
                  <span className="text-[10px] md:text-xs font-semibold text-brand-gold tracking-[0.15em] uppercase">
                    Authentic Ingredients
                  </span>
                </div>
                <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">
                  Pure Herbal Formulations
                </h3>
                <p className="text-xs md:text-sm text-gray-300 leading-[1.6] max-w-sm font-light">
                  We use carefully selected, traditional Ayurvedic herbs to craft potent natural medicines tailored precisely for your holistic healing journey.
                </p>
              </div>
            </div>
          </AnimatedReveal>

          {/* ── Right: Who We Are Text Content ── */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <AnimatedReveal direction="left" delay={100}>
              <div className="space-y-6 text-black font-normal leading-relaxed text-base md:text-lg">
                <p>
                  <span className="font-semibold text-brand-primary">Kottakkal Arya Vaidyasala</span> is the premier <strong>Ayurvedic center in Abu Dhabi</strong>, bringing the authentic healing heritage of Kerala to the UAE. Our expert doctors combine ancient Ayurvedic wisdom with modern therapeutic standards to deliver personalized, holistic healing that restores your natural balance.
                </p>
                <p>
                  We specialize in comprehensive <strong>Panchakarma treatments</strong>, potent herbal medicines, and natural therapies designed to treat the root cause of ailments. From managing chronic pain, arthritis, and migraines to luxurious detox programs and stress relief therapies, our customized wellness plans ensure sustainable health improvements.
                </p>
                <p>
                  Experience the true essence of <strong>authentic Ayurveda in Abu Dhabi</strong>. Reconnect with your inner vitality through our time-tested rejuvenation therapies, pure herbal formulations, and expert clinical care tailored precisely to your unique constitution.
                </p>
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
