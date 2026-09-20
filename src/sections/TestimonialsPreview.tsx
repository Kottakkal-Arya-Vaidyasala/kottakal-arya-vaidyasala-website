"use client";

import React from "react";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import AnimatedReveal from "@/components/common/AnimatedReveal";
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";

/**
 * ═══════════════════════════════════════════════════
 * Testimonials Preview — Staggered Card Carousel
 * ═══════════════════════════════════════════════════
 * Displays patient reviews in a stunning 3D staggered card deck
 * with smooth sliding transitions, autoplay slideshow, and fully responsive layouts.
 */
export default function TestimonialsPreview() {
  return (
    <section className="relative overflow-hidden bg-white pt-4 pb-12 md:pt-12 md:pb-24">
      {/* Background accents */}
      <div className="bg-brand-gold/[0.03] pointer-events-none absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full blur-[180px] filter" />
      <div className="bg-brand-primary/[0.02] pointer-events-none absolute top-0 left-0 h-[300px] w-[300px] rounded-full blur-[120px] filter" />

      <Container>
        <AnimatedReveal direction="up">
          <SectionHeading
            title="Lives Renewed, Balance Restored"
            subtitle="Patient Testimonials"
            description="Authentic stories of individuals who rediscovered harmony and health through Ayurvedic healing at Kottakkal."
            align="center"
          />
        </AnimatedReveal>

        <AnimatedReveal
          direction="fade"
          className="relative mx-auto mt-8 max-w-6xl md:mt-12"
        >
          <StaggerTestimonials />
        </AnimatedReveal>
      </Container>
    </section>
  );
}
