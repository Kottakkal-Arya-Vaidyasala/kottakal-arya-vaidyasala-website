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
      className="pt-4 pb-8 md:pt-8 md:pb-16 bg-white relative overflow-hidden scroll-mt-24"
    >
      {/* Subtle background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/[0.02] rounded-full filter blur-[200px] pointer-events-none" />

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12 max-w-7xl mx-auto">
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
                  className={`flex flex-col h-full rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group ${
                    isNavy ? "bg-[#1F2A44]" : "bg-white border border-gray-100"
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
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 glass rounded-full px-2.5 py-1 flex items-center gap-1.5 border border-white/20">
                      <Clock className="w-3 h-3 text-brand-gold" />
                      <span className="text-[10px] font-semibold text-white tracking-wider">
                        {treatment.duration}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 sm:p-6 flex flex-col flex-grow">
                    <span className="text-[10px] sm:text-xs font-semibold tracking-[0.15em] uppercase text-brand-gold mb-2 block">
                      Signature Therapy
                    </span>
                    <h3
                      className={`font-heading text-xl sm:text-2xl font-bold mb-2 leading-tight ${isNavy ? "text-white" : "text-[#1F2A44]"}`}
                    >
                      {treatment.title}
                    </h3>
                    <p
                      className={`text-xs sm:text-sm font-semibold mb-4 ${isNavy ? "text-brand-gold" : "text-brand-primary"}`}
                    >
                      {treatment.subtitle}
                    </p>
                    <p
                      className={`text-sm leading-relaxed mb-6 line-clamp-3 ${isNavy ? "text-gray-300" : "text-[#1F2A44]/80"}`}
                    >
                      {treatment.description}
                    </p>
                    <div className="mt-auto pt-5 border-t border-brand-gold/20 flex justify-center">
                      <Link
                        href={`/our-treatments#treatment-${treatment.id}`}
                        className="flex justify-center"
                      >
                        <PrimaryButton
                          icon={<ArrowRight className="w-4 h-4" />}
                          className={`px-8 py-3 text-sm transition-all duration-300 shadow-none ${
                            isNavy
                              ? "bg-brand-gold text-brand-dark border-brand-gold hover:bg-white hover:text-brand-dark hover:border-white"
                              : "bg-brand-primary text-white border-brand-primary hover:bg-brand-gold hover:text-white hover:border-brand-gold"
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
          <div className="mt-8 lg:mt-16 flex justify-center relative z-10">
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
              className="px-8 py-4 bg-brand-primary text-white border border-brand-primary hover:bg-brand-gold hover:text-brand-dark hover:border-brand-gold transition-all duration-300 shadow-none"
            >
              {showAll ? "Show Less Therapies" : "Show More Therapies"}
            </PrimaryButton>
          </div>
        )}
      </Container>
    </section>
  );
}
