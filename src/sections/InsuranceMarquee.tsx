"use client";

import React from "react";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";

// Array of 17 insurance logos
const insuranceLogos = [
  "adnic-logo.webp",
  "cigna-logo.webp",
  "daman-logo.webp",
  "dubai-insurance.webp",
  "gig-logo.webp",
  "inayah-logo.webp",
  "mednet-logo.webp",
  "metlife-logo.webp",
  "msh-logo.webp",
  "nas-logo.webp",
  "neuron-logo.webp",
  "nextcare-logo.webp",
  "orient-logo.webp",
  "qic-logo.webp",
  "sukoon-logo.webp",
];

export default function InsuranceMarquee() {
  return (
    <section className="flex flex-col items-center overflow-hidden bg-white py-12 md:py-16">
      <Container className="relative z-20 mb-8 w-full">
        <SectionHeading
          title="Ayurvedic Treatments Covered by Insurance"
          subtitle="Our Insurance Partners"
          description="Kottakkal Arya Vaidyasala is recognized by leading health insurance networks in the UAE, supporting your authentic Ayurvedic healing journey."
          align="center"
        />
      </Container>

      {/* Constrained scrolling marquee to create gaps on both sides */}
      <div className="relative mx-auto w-full max-w-5xl px-4">
        <InfiniteSlider
          className="flex h-24 w-full items-center"
          duration={50}
          gap={64}
        >
          {insuranceLogos.map((filename) => {
            const insuranceName = filename
              .replace(/_logo_HQ|-logo/gi, "")
              .split(".")[0]
              .toUpperCase();
            return (
              <div
                key={filename}
                className="group relative flex h-16 w-32 cursor-pointer items-center justify-center overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:border-gray-200 md:h-20 md:w-44"
              >
                {/* Subtle elegant gradient on hover */}
                <div className="from-brand-gold/5 absolute inset-0 bg-gradient-to-br to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <img
                  src={`/images/insurance/${filename}`}
                  alt={`${insuranceName} Health Insurance Network - Ayurvedic Clinic Dubai`}
                  title={`${insuranceName} Insurance Covered Ayurvedic Treatments`}
                  className={`relative z-10 h-full w-full object-contain object-center opacity-70 mix-blend-multiply transition-all duration-500 group-hover:opacity-100 ${
                    filename.includes("msh")
                      ? "translate-y-1 scale-[1.35] object-center p-2 group-hover:scale-[1.45] md:translate-y-2 md:p-3"
                      : filename.includes("dubai")
                        ? "scale-[1.5] p-2 group-hover:scale-[1.65] md:p-3"
                        : filename.includes("qic") ||
                            filename.includes("mednet")
                          ? "scale-[0.85] p-3 group-hover:scale-[0.95] md:p-5"
                          : filename.includes("metlife") ||
                              filename.includes("gig") ||
                              filename.includes("inayah")
                            ? "scale-[1.25] p-2 group-hover:scale-[1.35] md:p-3"
                            : "scale-100 p-3 group-hover:scale-110 md:p-5"
                  }`}
                />
              </div>
            );
          })}
        </InfiniteSlider>
      </div>
    </section>
  );
}
