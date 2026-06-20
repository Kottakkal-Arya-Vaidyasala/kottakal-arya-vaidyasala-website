"use client";

import React from "react";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";

// Array of 17 insurance logos
const insuranceLogos = [
  "adnic_logo_HQ.png",
  "cigna_logo_HQ.png",
  "daman_logo_HQ.png",
  "dubai_insurance_logo_HQ.png",
  "gig_logo_HQ.png",
  "inayah_tpa_logo_HQ.png",
  "mednet_logo_HQ.png",
  "metlife_logo_HQ.png",
  "msh_logo_HQ.png",
  "nas_logo_HQ.png",
  "neuron_logo_HQ.png",
  "nextcare_logo_HQ.png",
  "orient_logo_HQ.png",
  "qic_logo_HQ.png",
  "rak_insurance_logo_HQ.png",
  "sukoon_logo_HQ.png",
  "takaful_logo_HQ.png"
];

export default function InsuranceMarquee() {
  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden flex flex-col items-center">
      <Container className="relative z-20 w-full mb-8">
        <SectionHeading
          title="We Accept Insurance"
          subtitle="Coverage Partners"
          description="We partner with major insurance providers to ensure your healing journey is smooth and accessible."
          align="center"
        />
      </Container>

      {/* Constrained scrolling marquee to create gaps on both sides */}
      <div className="relative w-full max-w-5xl mx-auto px-4">
        <InfiniteSlider
          className="flex h-24 w-full items-center"
          duration={50}
          gap={64}
        >
          {insuranceLogos.map((filename) => (
            <div
              key={filename}
              className="flex items-center justify-center w-32 md:w-48 h-16 md:h-20 bg-white border border-brand-primary/10 rounded-xl hover:border-brand-gold/50 transition-colors shadow-sm overflow-hidden"
            >
              <img 
                src={`/images/insurance/${filename}`} 
                alt={filename.replace("_logo_HQ.png", "").toUpperCase()} 
                className="w-full h-full object-contain p-3 opacity-90 hover:opacity-100 transition-opacity" 
              />
            </div>
          ))}
        </InfiniteSlider>
      </div>
    </section>
  );
}
