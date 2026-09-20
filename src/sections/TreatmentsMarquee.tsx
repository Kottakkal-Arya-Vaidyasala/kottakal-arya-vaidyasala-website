"use client";

import React from "react";
import { treatments } from "@/data/treatments";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { Sparkles } from "@/components/ui/sparkles";
import Container from "@/components/common/Container";

export default function TreatmentsMarquee() {
  return (
    <section className="relative flex w-full flex-col items-center overflow-hidden bg-white pt-10 pb-0">
      <Container className="relative z-20 w-full">
        <div className="mb-6 text-center">
          <p className="text-brand-gold mb-2 text-sm font-medium tracking-[0.2em] uppercase">
            Time-Tested Healing
          </p>
          <h2 className="font-heading text-brand-dark text-3xl md:text-4xl">
            Our Signature Therapies
          </h2>
        </div>

        <div className="relative mx-auto mt-4 h-[60px] w-full max-w-5xl">
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
                <div className="bg-brand-gold/60 h-1.5 w-1.5 rounded-full" />
                <span className="text-brand-dark/80 text-xl font-light tracking-wide md:text-2xl">
                  {treatment.title}
                </span>
              </div>
            ))}
          </InfiniteSlider>
        </div>
      </Container>

      {/* ── Glowing Arc & Sparkles Effect ── */}
      <div className="pointer-events-none relative z-0 mt-0 h-24 w-full overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] md:h-32">
        {/* Glow */}
        <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#c9a96e,transparent_70%)] before:opacity-10" />

        {/* Curved Border Arc */}
        <div className="border-brand-gold/30 absolute top-1/2 -left-1/2 z-10 aspect-[1/0.7] w-[200%] rounded-[100%] border-t bg-white" />

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
