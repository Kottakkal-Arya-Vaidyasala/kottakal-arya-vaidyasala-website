"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/common/Container";
import AnimatedReveal from "@/components/common/AnimatedReveal";
import PrimaryButton from "@/components/common/PrimaryButton";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useWhatsApp } from "@/hooks/useWhatsApp";

/**
 * ═══════════════════════════════════════════════════
 * Services Page — Premium Alternating Layout
 * ═══════════════════════════════════════════════════
 */

const servicesData = [
  {
    id: "consultation",
    title: "Ayurvedic Consultation",
    subtitle: "Personalized Natural Healing",
    description:
      "Our certified Ayurvedic doctors carefully assess your Dosha (Vata, Pitta, Kapha), lifestyle habits, and medical history to create a personalized treatment plan that restores long-term balance and wellness. Unlike treatments that focus only on symptoms, an Ayurvedic consultation identifies the root cause of your health concerns and supports natural healing from within.",
    benefits: [
      "Identifies the root cause of health issues",
      "Provides customized therapies, diet, and lifestyle guidance",
      "Enhances energy, immunity, and overall well-being",
      "Helps prevent illness naturally",
    ],
    image: "/images/gallery/consultation.png",
  },
  {
    id: "yoga",
    title: "Yoga & Meditation",
    subtitle: "Balance Your Mind and Body Naturally",
    description:
      "Experience the harmony of asanas (postures), pranayama (breathing techniques), and guided meditation, thoughtfully integrated with Ayurvedic wisdom. Our personalized sessions are designed to strengthen the body, calm the mind, and restore inner balance for overall well-being.",
    benefits: [
      "Promotes deep relaxation and better sleep",
      "Enhances focus, clarity, and emotional stability",
      "Reduces stress, anxiety, and mental restlessness",
      "Improves flexibility, strength, and posture",
    ],
    image: "/images/gallery/wellness-lounge.png",
  },
  {
    id: "skin",
    title: "Skin Care Therapy",
    subtitle: "Natural Ayurvedic Glow & Rejuvenation",
    description:
      "Ayurvedic Skin Care Therapy restores healthy, radiant skin using herbal pastes, medicated oils, and rejuvenating herbal packs. These treatments cleanse, detoxify, and nourish the skin from within while correcting internal imbalances that cause recurring skin concerns. Unlike chemical-based solutions, Ayurveda focuses on treating the root cause of skin problems.",
    benefits: [
      "Supports overall skin health and natural radiance",
      "Helps manage acne, pigmentation, and dryness",
      "Nourishes and rejuvenates dull, tired skin",
      "Safe, time-tested Ayurvedic therapies",
    ],
    image: "/images/treatments/abhyangam.png",
  },
  {
    id: "hair",
    title: "Hair Care Therapy",
    subtitle: "Ayurvedic Solution for Strong & Healthy Hair",
    description:
      "Restore the strength and vitality of your hair with Ayurvedic Hair Care Therapy. Using medicated herbal oils, nourishing scalp massages, and natural herbal packs, our treatments deeply nourish the scalp and hair roots from within. Ayurveda takes a holistic approach, addressing not only hair concerns but also stress and internal imbalances.",
    benefits: [
      "Controls hair fall and helps prevent dandruff",
      "Strengthens hair roots and stimulates healthy growth",
      "Improves scalp health and blood circulation",
      "Relieves stress and promotes sound sleep",
    ],
    image: "/images/treatments/panchakarma1.png", // Reusing as placeholder for now
  },
  {
    id: "weight",
    title: "Weight Loss Therapy",
    subtitle: "Natural Ayurvedic Weight Management",
    description:
      "Our Ayurvedic Weight Loss Therapy follows a holistic approach that goes beyond calorie counting and crash diets. By combining herbal medicines, detox therapies, therapeutic massages, personalized diet plans, and lifestyle modifications, we help you achieve and maintain a healthy body weight naturally. This therapy focuses on correcting metabolism and improving digestion.",
    benefits: [
      "Promotes natural and sustainable weight reduction",
      "Improves metabolism and digestive health",
      "Eliminates toxins and reduces excess fat",
      "Boosts energy, stamina, and overall vitality",
    ],
    image: "/images/gallery/kerala-heritage1.png", // Reusing as placeholder
  },
];

export default function ServicesPage() {
  const { openWhatsApp } = useWhatsApp();
  return (
    <main className="flex min-h-screen flex-col bg-brand-cream overflow-hidden">
      {/* ── Header ────────────────────────────────── */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-black text-white">
        <Image
          src="/images/clinic/carousel2.png"
          alt="Ayurveda Services"
          fill
          sizes="100vw"
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-gold/10 rounded-full filter blur-[200px] pointer-events-none z-0" />
        <Container className="relative z-10 text-center">

          <AnimatedReveal direction="up" delay={100}>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-heading font-bold mb-4 md:mb-6">
              Discover Holistic Healing <br />
              <span className="italic font-serif text-brand-gold">
                with Ayurveda
              </span>
            </h1>
          </AnimatedReveal>
          <AnimatedReveal direction="up" delay={200}>
            <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
              Our range of services is designed to restore balance, enhance
              vitality, and support your journey toward lasting wellness. Each
              program blends time-tested Ayurvedic wisdom with personalized care
              for complete mind-body harmony.
            </p>
          </AnimatedReveal>
        </Container>
      </section>

      {/* ── Services List (Alternating) ───────────── */}
      <section className="py-24 bg-white relative">
        <Container>
          <div className="flex flex-col gap-20 lg:gap-32">
            {servicesData.map((service, index) => {
              const isReversed = index % 2 !== 0;

              return (
                <div
                  key={service.id}
                  className={`max-w-[320px] sm:max-w-[480px] lg:max-w-none mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center ${isReversed ? "lg:direction-rtl" : ""}`}
                >
                  {/* Image Column */}
                  <AnimatedReveal
                    direction={isReversed ? "left" : "right"}
                    className={isReversed ? "lg:order-2" : "lg:order-1"}
                  >
                    <div className="relative aspect-[16/9] sm:aspect-[4/3] lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl gold-border-reveal group">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                    </div>
                  </AnimatedReveal>

                  {/* Content Column */}
                  <AnimatedReveal
                    direction={isReversed ? "right" : "left"}
                    className={isReversed ? "lg:order-1" : "lg:order-2"}
                  >
                    <div className={isReversed ? "lg:pr-12" : "lg:pl-12"}>
                      <h3 className="text-xs lg:text-sm font-bold text-brand-gold tracking-[0.15em] uppercase mb-2 lg:mb-3">
                        {service.subtitle}
                      </h3>
                      <h2 className="text-2xl sm:text-3xl lg:text-5xl font-heading font-bold text-brand-dark mb-4 lg:mb-6 leading-tight">
                        {service.title}
                      </h2>
                      <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed mb-6 lg:mb-8">
                        {service.description}
                      </p>

                      <div className="space-y-2 lg:space-y-4 mb-6 lg:mb-10">
                        {service.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="w-4 h-4 lg:w-6 lg:h-6 text-brand-primary shrink-0 mt-0.5" />
                            <span className="text-xs sm:text-sm lg:text-base text-gray-700 font-medium leading-tight">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>

                      <PrimaryButton
                        onClick={() =>
                          openWhatsApp({ treatment: service.title })
                        }
                        className="group flex flex-nowrap items-center justify-center whitespace-nowrap w-fit px-5 py-3 text-xs sm:text-sm"
                      >
                        <span>Book {service.title}</span>
                      </PrimaryButton>
                    </div>
                  </AnimatedReveal>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </main>
  );
}
