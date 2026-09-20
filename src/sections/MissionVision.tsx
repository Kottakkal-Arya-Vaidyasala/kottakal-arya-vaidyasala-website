"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import AnimatedReveal from "@/components/common/AnimatedReveal";
import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="bg-brand-sage/30 relative overflow-hidden pt-10 pb-16 md:pt-12 md:pb-24">
      <Container>
        <AnimatedReveal direction="up">
          <SectionHeading
            title="Our Guiding Principles"
            subtitle="Mission & Vision"
            description="Committed to bringing the purest form of Ayurveda to the world, restoring health and harmony to every life we touch."
            align="center"
          />
        </AnimatedReveal>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          {/* Mission Card */}
          <AnimatedReveal direction="up" delay={100}>
            <div className="border-brand-gold/20 hover:border-brand-gold/60 group relative h-full overflow-hidden rounded-2xl border bg-white p-8 shadow-sm transition-colors duration-500 md:p-12">
              <div className="pointer-events-none absolute top-0 right-0 p-8 opacity-5 transition-opacity duration-500 group-hover:opacity-10">
                <Target className="text-brand-gold h-32 w-32" />
              </div>

              <div className="bg-brand-gold/10 border-brand-gold/20 mb-6 flex h-14 w-14 items-center justify-center rounded-xl border">
                <Target className="text-brand-gold h-6 w-6" />
              </div>

              <h3 className="font-heading text-brand-primary mb-4 text-2xl font-bold">
                Our Mission
              </h3>

              <p className="leading-relaxed font-normal text-black">
                To provide authentic, highly personalized Ayurvedic care that
                addresses the root cause of illness. We are dedicated to
                offering holistic healing environments, utilizing the purest
                traditional herbal formulations, and empowering our patients to
                achieve lasting physical, mental, and spiritual well-being.
              </p>
            </div>
          </AnimatedReveal>

          {/* Vision Card */}
          <AnimatedReveal direction="up" delay={200}>
            <div className="bg-brand-primary border-brand-primary hover:border-brand-gold/40 group relative h-full overflow-hidden rounded-2xl border p-8 shadow-lg transition-colors duration-500 md:p-12">
              <div className="pointer-events-none absolute top-0 right-0 p-8 opacity-5 transition-opacity duration-500 group-hover:opacity-10">
                <Eye className="text-brand-gold h-32 w-32" />
              </div>

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/10">
                <Eye className="text-brand-gold h-6 w-6" />
              </div>

              <h3 className="font-heading mb-4 text-2xl font-bold text-white">
                Our Vision
              </h3>

              <p className="leading-relaxed font-light text-gray-200">
                To be the most trusted global sanctuary for traditional
                Ayurveda, recognized for our uncompromising commitment to
                ancient healing sciences. We envision a world where the timeless
                wisdom of Ayurveda seamlessly integrates into modern lifestyles,
                naturally fostering a healthier and more balanced society.
              </p>
            </div>
          </AnimatedReveal>
        </div>
      </Container>
    </section>
  );
}
