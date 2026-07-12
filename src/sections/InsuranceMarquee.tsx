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
    <section className="py-12 md:py-16 bg-white overflow-hidden flex flex-col items-center">
      <Container className="relative z-20 w-full mb-8">
        <SectionHeading
          title="Ayurvedic Treatments Covered by Insurance"
          subtitle="Our Insurance Partners"
          description="Kottakkal Arya Vaidyasala is recognized by leading health insurance networks in the UAE, supporting your authentic Ayurvedic healing journey."
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
          {insuranceLogos.map((filename) => {
            const insuranceName = filename
              .replace(/_logo_HQ|-logo/gi, "")
              .split(".")[0]
              .toUpperCase();
            return (
              <div
                key={filename}
                className="group flex items-center justify-center w-32 md:w-44 h-16 md:h-20 bg-white border border-gray-100 rounded-xl hover:border-gray-200 transition-all duration-300 shadow-sm relative overflow-hidden cursor-pointer"
              >
                {/* Subtle elegant gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <img
                  src={`/images/insurance/${filename}`}
                  alt={`${insuranceName} Health Insurance Network - Ayurvedic Clinic Dubai`}
                  title={`${insuranceName} Insurance Covered Ayurvedic Treatments`}
                  className={`w-full h-full object-contain object-center opacity-70 group-hover:opacity-100 transition-all duration-500 mix-blend-multiply relative z-10 ${
                    filename.includes("msh")
                      ? "scale-[1.35] group-hover:scale-[1.45] p-2 md:p-3 object-center translate-y-1 md:translate-y-2"
                      : filename.includes("dubai")
                        ? "scale-[1.5] group-hover:scale-[1.65] p-2 md:p-3"
                        : filename.includes("qic") ||
                            filename.includes("mednet")
                          ? "scale-[0.85] group-hover:scale-[0.95] p-3 md:p-5"
                          : filename.includes("metlife") ||
                              filename.includes("gig") ||
                              filename.includes("inayah")
                            ? "scale-[1.25] group-hover:scale-[1.35] p-2 md:p-3"
                            : "scale-100 group-hover:scale-110 p-3 md:p-5"
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
