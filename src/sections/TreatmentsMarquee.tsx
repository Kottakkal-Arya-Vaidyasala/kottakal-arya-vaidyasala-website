"use client";

import React from "react";
import { treatments } from "@/data/treatments";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { Sparkles } from "@/components/ui/sparkles";
import Container from "@/components/common/Container";

export default function TreatmentsMarquee() {
  return (
    <section className="relative w-full pt-10 pb-0 bg-white overflow-hidden flex flex-col items-center">
      <Container className="relative z-20 w-full">
        <div className="text-center mb-6">
          <p className="text-brand-gold font-medium tracking-[0.2em] uppercase text-sm mb-2">
            Time-Tested Healing
          </p>
          <h2 className="text-3xl md:text-4xl font-heading text-brand-dark">
            Our Signature Therapies
          </h2>
        </div>

        <div className="relative mt-4 h-[60px] w-full max-w-5xl mx-auto">
          <InfiniteSlider
            className="flex h-full w-full items-center"
            duration={40}
            gap={64}
          >
            {treatments.map((treatment) => (
              <div
                key={treatment.id}
                className="flex items-center gap-4 whitespace-nowrap"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/60" />
                <span className="text-xl md:text-2xl font-light tracking-wide text-brand-dark/80">
                  {treatment.title}
                </span>
              </div>
            ))}
          </InfiniteSlider>
        </div>
      </Container>

      {/* ── Glowing Arc & Sparkles Effect ── */}
      <div className="relative mt-0 h-24 md:h-32 w-full overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] z-0 pointer-events-none">
        {/* Glow */}
        <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#c9a96e,transparent_70%)] before:opacity-10" />

        {/* Curved Border Arc */}
        <div className="absolute -left-1/2 top-1/2 aspect-[1/0.7] z-10 w-[200%] rounded-[100%] border-t border-brand-gold/30 bg-white" />

        {/* Particles */}
        <Sparkles
          density={800}
          className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
          color="#c9a96e"
          size={1.5}
        />
      </div>
    </section>
  );
}
