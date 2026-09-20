"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import AnimatedReveal from "@/components/common/AnimatedReveal";
import PrimaryButton from "@/components/common/PrimaryButton";
import {
  Check,
  ArrowRight,
  Clock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { featuredTreatments } from "@/data/treatments";

/**
 * ═══════════════════════════════════════════════════
 * Featured Treatments — Magazine Editorial Layout
 * ═══════════════════════════════════════════════════
 * Alternating left-right image/text rows with asymmetric
 * floating text headers. No generic grid cards.
 */
export default function FeaturedTreatments() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef);

  useEffect(() => {
    if (!isInView && showAll) {
      setShowAll(false);
    }
  }, [isInView, showAll]);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -260, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 260, behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="featured-treatments"
      className="relative scroll-mt-24 overflow-hidden bg-white pt-4 pb-8 md:pt-8 md:pb-16"
    >
      {/* Subtle background decorations */}
      <div className="bg-brand-primary/[0.02] pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] rounded-full blur-[200px] filter" />

      <Container>
        <AnimatedReveal direction="up">
          <SectionHeading
            title="Our Signature Ayurvedic Therapies"
            subtitle="Featured Treatments"
            description="Each therapy is customized to your unique constitution by our expert physicians, using authentic traditional herbal formulations."
            align="center"
          />
        </AnimatedReveal>

        {/* ── Responsive Grid Layout ────────────── */}
        <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {(showAll
            ? featuredTreatments.slice(0, 6)
            : featuredTreatments.slice(0, 3)
          ).map((treatment, idx) => {
            const isNavy = idx % 2 === 0;
            return (
              <AnimatedReveal
                key={treatment.id}
                direction="up"
                delay={(idx % 6) * 100}
              >
                <div
                  className={`group flex h-full flex-col overflow-hidden rounded-2xl shadow-lg transition-shadow hover:shadow-xl ${
                    isNavy ? "bg-[#1F2A44]" : "border border-gray-100 bg-white"
                  }`}
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden">
                    <Image
                      src={treatment.imagePath}
                      alt={`${treatment.title} - Authentic Ayurvedic Treatment in Dubai`}
                      fill
                      className={`object-cover transition-transform duration-700 group-hover:scale-105 ${
                        treatment.id === "njavarakizhi"
                          ? "object-[center_70%]"
                          : ""
                      }`}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="from-brand-dark/80 absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />
                    <div className="glass absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full border border-white/20 px-2.5 py-1">
                      <Clock className="text-brand-gold h-3 w-3" />
                      <span className="text-[10px] font-semibold tracking-wider text-white">
                        {treatment.duration}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-grow flex-col p-5 sm:p-6">
                    <span className="text-brand-gold mb-2 block text-[10px] font-semibold tracking-[0.15em] uppercase sm:text-xs">
                      Signature Therapy
                    </span>
                    <h3
                      className={`font-heading mb-2 text-xl leading-tight font-bold sm:text-2xl ${isNavy ? "text-white" : "text-[#1F2A44]"}`}
                    >
                      {treatment.title}
                    </h3>
                    <p
                      className={`mb-4 text-xs font-semibold sm:text-sm ${isNavy ? "text-brand-gold" : "text-brand-primary"}`}
                    >
                      {treatment.subtitle}
                    </p>
                    <p
                      className={`mb-6 line-clamp-3 text-sm leading-relaxed ${isNavy ? "text-gray-300" : "text-[#1F2A44]/80"}`}
                    >
                      {treatment.description}
                    </p>
                    <div className="border-brand-gold/20 mt-auto flex justify-center border-t pt-5">
                      <Link
                        href={`/our-treatments#treatment-${treatment.id}`}
                        className="flex justify-center"
                      >
                        <PrimaryButton
                          icon={<ArrowRight className="h-4 w-4" />}
                          className={`px-8 py-3 text-sm shadow-none transition-all duration-300 ${
                            isNavy
                              ? "bg-brand-gold text-brand-dark border-brand-gold hover:text-brand-dark hover:border-white hover:bg-white"
                              : "bg-brand-primary border-brand-primary hover:bg-brand-gold hover:border-brand-gold text-white hover:text-white"
                          }`}
                        >
                          Book Now
                        </PrimaryButton>
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedReveal>
            );
          })}
        </div>

        {/* Toggle Button */}
        {featuredTreatments.length > 3 && (
          <div className="relative z-10 mt-8 flex justify-center lg:mt-16">
            <PrimaryButton
              onClick={() => {
                if (showAll) {
                  setShowAll(false);
                  setTimeout(() => {
                    document
                      .getElementById("featured-treatments")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }, 50);
                } else {
                  setShowAll(true);
                }
              }}
              className="bg-brand-primary border-brand-primary hover:bg-brand-gold hover:text-brand-dark hover:border-brand-gold border px-8 py-4 text-white shadow-none transition-all duration-300"
            >
              {showAll ? "Show Less Therapies" : "Show More Therapies"}
            </PrimaryButton>
          </div>
        )}
      </Container>
    </section>
  );
}
