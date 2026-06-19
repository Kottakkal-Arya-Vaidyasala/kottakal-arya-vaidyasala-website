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
    "Traditional Panchakarma detoxification treatments",
    "Therapeutic massages for pain management and spine care",
    "100% natural, authentic herbal preparations",
    "Expert consultation by seasoned Ayurvedic physicians",
  ];

  return (
    <section className="py-20 bg-brand-primary/5 relative overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-brand-gold/5 rounded-full filter blur-3xl pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image Box Placeholder */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <AnimatedReveal direction="right" className="relative">
              {/* Outer decorative gold element */}
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-brand-gold" />
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-brand-gold" />

              <div className="relative aspect-video lg:aspect-[4/5] rounded-xl overflow-hidden shadow-xl border border-brand-primary/10 bg-brand-primary/10 flex flex-col items-center justify-center p-8 text-center text-brand-dark">
                <Leaf className="w-10 h-10 text-brand-primary mb-4" />
                <span className="font-heading text-lg font-bold">
                  Genuine Healing Space
                </span>
                <p className="text-xs text-gray-500 max-w-xs mt-2 leading-relaxed">
                  Our therapeutic clinic features comfortable massage tables,
                  traditional steam rooms, and relaxing spaces dedicated to
                  natural healing.
                </p>
                <div className="mt-6 text-xs font-semibold text-brand-gold tracking-widest uppercase">
                  ESTABLISHED 2026
                </div>
              </div>
            </AnimatedReveal>
          </div>

          {/* Right Column: Content Text */}
          <div className="lg:col-span-7 order-1 lg:order-2">
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
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
            >
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-brand-grey font-light leading-normal">
                    {item}
                  </span>
                </div>
              ))}
            </AnimatedReveal>

            <AnimatedReveal direction="up" delay={400}>
              <Link href="/about" className="inline-block">
                <SecondaryButton
                  icon={<ChevronRight className="w-4 h-4" />}
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
