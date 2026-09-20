"use client";

import React from "react";
import Link from "next/link";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import SecondaryButton from "@/components/common/SecondaryButton";
import AnimatedReveal from "@/components/common/AnimatedReveal";
import { CheckCircle2, ChevronRight, Leaf } from "lucide-react";

export default function AboutPreview() {
  const highlights = [
    "Traditional Homeopathic treatments",
    "Therapeutic massages for pain management and spine care",
    "100% natural, authentic herbal preparations",
    "Expert consultation by seasoned Ayurvedic physicians",
  ];

  return (
    <section className="bg-brand-primary/5 relative overflow-hidden py-12 md:py-20">
      {/* Decorative vectors */}
      <div className="bg-brand-gold/5 pointer-events-none absolute top-0 left-0 h-80 w-80 rounded-full blur-3xl filter" />

      <Container>
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Image Box Placeholder */}
          <div className="order-2 lg:order-1 lg:col-span-5">
            <AnimatedReveal direction="right" className="relative">
              {/* Outer decorative gold element */}
              <div className="border-brand-gold absolute -top-4 -left-4 h-12 w-12 border-t-2 border-l-2" />
              <div className="border-brand-gold absolute -right-4 -bottom-4 h-12 w-12 border-r-2 border-b-2" />

              <div className="border-brand-primary/10 bg-brand-primary/10 text-brand-dark relative flex aspect-video flex-col items-center justify-center overflow-hidden rounded-xl border p-6 text-center shadow-xl lg:aspect-[4/5] lg:p-8">
                <Leaf className="text-brand-primary mb-4 h-10 w-10" />
                <span className="font-heading text-lg font-bold">
                  Genuine Healing Space
                </span>
                <p className="mt-2 max-w-xs text-xs leading-relaxed text-gray-500">
                  Our therapeutic clinic features comfortable massage tables,
                  traditional steam rooms, and relaxing spaces dedicated to
                  natural healing.
                </p>
                <div className="text-brand-gold mt-6 text-xs font-semibold tracking-widest uppercase">
                  ESTABLISHED 2026
                </div>
              </div>
            </AnimatedReveal>
          </div>

          {/* Right Column: Content Text */}
          <div className="order-1 lg:order-2 lg:col-span-7">
            <AnimatedReveal direction="left">
              <SectionHeading
                title="Pioneering Traditional Ayurveda in Abu Dhabi"
                subtitle="About Our Center"
                align="left"
                className="mb-8"
              />
            </AnimatedReveal>

            <AnimatedReveal direction="up" delay={200}>
              <p className="text-brand-grey mb-6 leading-[1.6] font-light">
                Kottakkal Arya Vaidyasala Ayurvedic Medical Center brings the
                authentic, age-old healing heritage of Ayurveda to the United
                Arab Emirates. Guided by the principles of Ashtanga Hridaya, we
                treat the root cause of health issues, not just the symptoms.
              </p>
              <p className="text-brand-grey mb-8 leading-[1.6] font-light">
                Our customized wellness plans help address stress, weight
                issues, joint pain, skin disorders, and lifestyle diseases. We
                aim to restore physical equilibrium and mental serenity.
              </p>
            </AnimatedReveal>

            {/* Bullets List */}
            <AnimatedReveal
              direction="up"
              delay={300}
              className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2"
            >
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="text-brand-primary mt-0.5 h-5 w-5 shrink-0" />
                  <span className="text-brand-grey text-sm leading-normal font-light">
                    {item}
                  </span>
                </div>
              ))}
            </AnimatedReveal>

            <AnimatedReveal direction="up" delay={400}>
              <Link href="/about" className="inline-block">
                <SecondaryButton
                  icon={<ChevronRight className="h-4 w-4" />}
                  iconPosition="right"
                >
                  Read Our Full Story
                </SecondaryButton>
              </Link>
            </AnimatedReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
