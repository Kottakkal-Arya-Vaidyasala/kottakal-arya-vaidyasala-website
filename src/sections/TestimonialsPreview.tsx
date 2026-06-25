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
    <section className="pt-4 pb-12 md:pt-12 md:pb-24 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-gold/[0.03] rounded-full filter blur-[180px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-brand-primary/[0.02] rounded-full filter blur-[120px] pointer-events-none" />

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
          className="max-w-6xl mx-auto mt-8 md:mt-12 relative"
        >
          <StaggerTestimonials />
        </AnimatedReveal>
      </Container>
    </section>
  );
}
