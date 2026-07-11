"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/common/Container";
import AnimatedReveal from "@/components/common/AnimatedReveal";
import { Leaf, CheckCircle2 } from "lucide-react";

export default function WhyChooseUs() {
  const highlights = [
    "100% Organic Herbal Medicines",
    "Certified Professional Therapists",
  ];

  return (
    <section className="pt-8 pb-10 md:pt-16 md:pb-10 bg-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-primary/[0.02] rounded-full filter blur-[180px] pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* ── Left: Image ── */}
          <AnimatedReveal direction="right" className="w-full">
            <div className="relative w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden img-zoom gold-border-reveal group shadow-2xl">
              <Image
                src="/images/about/pure-herbs.webp"
                alt="Traditional Ayurvedic Herbs for Holistic Healing in Dubai"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent" />

              {/* Text overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
                <div className="flex items-center gap-2 mb-3">
                  <Leaf className="w-4 h-4 md:w-5 md:h-5 text-brand-gold" />
                  <span className="text-xs md:text-sm font-semibold text-brand-gold tracking-[0.15em] uppercase">
                    Authentic Healing
                  </span>
                </div>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-2">
                  Pure Herbal Formulations
                </h3>
                <p className="text-sm md:text-base text-gray-200 leading-relaxed max-w-sm font-light">
                  Carefully selected traditional herbs crafted into potent
                  medicines for your healing journey.
                </p>
              </div>
            </div>
          </AnimatedReveal>

          {/* ── Right: Text Content ── */}
          <div className="flex flex-col justify-start">
            <AnimatedReveal direction="left">
              <div className="mb-6">
                <span className="text-brand-primary text-sm md:text-base font-semibold tracking-wider uppercase mb-3 flex items-center gap-2">
                  <span className="w-8 h-0.5 bg-brand-primary rounded-full"></span>
                  Who We Are
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-heading font-bold text-black mb-6 leading-tight">
                  The Natural Path to Balanced Health and Lasting Wellness
                </h2>
              </div>

              <div className="space-y-5 text-gray-800 font-normal leading-relaxed text-base md:text-lg mb-8">
                <p>
                  At <strong>Kottakkal Arya Vaidyasala</strong>, we provide the
                  best Ayurvedic treatment in Abu Dhabi by combining the
                  timeless science of Ayurveda with modern clinical standards.
                  Our mission is to deliver safe, authentic, and personalized
                  Ayurvedic care that addresses the root cause of health
                  concerns while restoring natural balance to the body and mind.
                </p>
                <p>
                  Our treatments are guided by experienced and qualified
                  Ayurvedic doctors and delivered by professionally trained
                  therapists, following traditional diagnostic methods and
                  evidence-based practices. We specialize in holistic healing
                  through authentic therapies, organic herbal medicines, and
                  customized treatment plans tailored to each patient&apos;s
                  unique body constitution.
                </p>
                <p>
                  Trusted by patients across Abu Dhabi, we focus on long-term
                  wellness, preventive care, and sustainable healing—helping you
                  achieve harmony of body, mind, and spirit naturally.
                </p>
              </div>

              {/* Premium Interactive Highlights List */}
              <div className="flex flex-col gap-5 mt-10">
                {highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-5 group cursor-default"
                  >
                    <div className="relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-brand-cream border border-brand-gold/20 overflow-hidden shrink-0 shadow-sm group-hover:shadow-md transition-all duration-500">
                      <div className="absolute inset-0 bg-brand-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out rounded-full" />
                      <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-brand-gold group-hover:text-white relative z-10 transition-colors duration-500 group-hover:scale-110" />
                    </div>
                    <span className="text-[#1F2A44] font-heading font-semibold text-base md:text-lg lg:text-xl group-hover:text-brand-gold transition-all duration-300 group-hover:translate-x-2 transform">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
