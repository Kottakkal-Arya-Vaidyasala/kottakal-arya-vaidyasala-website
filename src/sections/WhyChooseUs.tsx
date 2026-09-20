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
    <section className="relative overflow-hidden bg-white pt-8 pb-10 md:pt-16 md:pb-10">
      {/* Subtle background glow */}
      <div className="bg-brand-primary/[0.02] pointer-events-none absolute top-1/2 left-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[180px] filter" />

      <Container>
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-16">
          {/* ── Left: Image ── */}
          <AnimatedReveal direction="right" className="w-full">
            <div className="img-zoom gold-border-reveal group relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-2xl sm:aspect-square lg:aspect-[4/5]">
              <Image
                src="/images/about/pure-herbs.webp"
                alt="Traditional Ayurvedic Herbs for Holistic Healing in Dubai"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Gradient overlay */}
              <div className="from-brand-dark/90 via-brand-dark/20 absolute inset-0 bg-gradient-to-t to-transparent" />

              {/* Text overlay at bottom */}
              <div className="absolute right-0 bottom-0 left-0 z-10 p-6 md:p-8">
                <div className="mb-3 flex items-center gap-2">
                  <Leaf className="text-brand-gold h-4 w-4 md:h-5 md:w-5" />
                  <span className="text-brand-gold text-xs font-semibold tracking-[0.15em] uppercase md:text-sm">
                    Authentic Healing
                  </span>
                </div>
                <h3 className="font-heading mb-2 text-2xl font-bold text-white md:text-3xl">
                  Pure Herbal Formulations
                </h3>
                <p className="max-w-sm text-sm leading-relaxed font-light text-gray-200 md:text-base">
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
                <span className="text-brand-primary mb-3 flex items-center gap-2 text-sm font-semibold tracking-wider uppercase md:text-base">
                  <span className="bg-brand-primary h-0.5 w-8 rounded-full"></span>
                  Who We Are
                </span>
                <h2 className="font-heading mb-6 text-3xl leading-tight font-bold text-black md:text-4xl lg:text-5xl 2xl:text-6xl">
                  The Natural Path to Balanced Health and Lasting Wellness
                </h2>
              </div>

              <div className="mb-8 space-y-5 text-base leading-relaxed font-normal text-gray-800 md:text-lg">
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
              <div className="mt-10 flex flex-col gap-5">
                {highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="group flex cursor-default items-center gap-5"
                  >
                    <div className="bg-brand-cream border-brand-gold/20 relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border shadow-sm transition-all duration-500 group-hover:shadow-md md:h-14 md:w-14">
                      <div className="bg-brand-primary absolute inset-0 translate-y-full rounded-full transition-transform duration-500 ease-out group-hover:translate-y-0" />
                      <CheckCircle2 className="text-brand-gold relative z-10 h-5 w-5 transition-colors duration-500 group-hover:scale-110 group-hover:text-white md:h-6 md:w-6" />
                    </div>
                    <span className="font-heading group-hover:text-brand-gold transform text-base font-semibold text-[#1F2A44] transition-all duration-300 group-hover:translate-x-2 md:text-lg lg:text-xl">
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
