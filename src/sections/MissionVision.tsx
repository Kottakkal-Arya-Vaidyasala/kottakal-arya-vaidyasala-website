"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import AnimatedReveal from "@/components/common/AnimatedReveal";
import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="py-16 md:py-24 bg-brand-sage/30 relative overflow-hidden">
      <Container>
        <AnimatedReveal direction="up">
          <SectionHeading
            title="Our Guiding Principles"
            subtitle="Mission & Vision"
            description="Committed to bringing the purest form of Ayurveda to the world, restoring health and harmony to every life we touch."
            align="center"
          />
        </AnimatedReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-12 max-w-5xl mx-auto">
          {/* Mission Card */}
          <AnimatedReveal direction="up" delay={100}>
            <div className="h-full bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-brand-gold/20 hover:border-brand-gold/60 transition-colors duration-500 group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                <Target className="w-32 h-32 text-brand-gold" />
              </div>

              <div className="w-14 h-14 bg-brand-gold/10 rounded-xl flex items-center justify-center mb-6 border border-brand-gold/20">
                <Target className="w-6 h-6 text-brand-gold" />
              </div>

              <h3 className="font-heading text-2xl font-bold text-brand-primary mb-4">
                Our Mission
              </h3>

              <p className="text-black leading-relaxed font-normal">
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
            <div className="h-full bg-brand-primary p-8 md:p-12 rounded-2xl shadow-lg border border-brand-primary hover:border-brand-gold/40 transition-colors duration-500 group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                <Eye className="w-32 h-32 text-brand-gold" />
              </div>

              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6 border border-white/10">
                <Eye className="w-6 h-6 text-brand-gold" />
              </div>

              <h3 className="font-heading text-2xl font-bold text-white mb-4">
                Our Vision
              </h3>

              <p className="text-gray-200 leading-relaxed font-light">
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
