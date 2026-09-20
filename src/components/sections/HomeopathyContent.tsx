"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import Container from "@/components/common/Container";
import {
  ArrowRight,
  Clock,
  ChevronDown,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { useWhatsApp } from "@/hooks/useWhatsApp";

const homeopathyConditions = [
  {
    id: "pediatric-concerns",
    title: "Pediatric Concerns",
    subtitle: "Safe, Gentle Care for Children",
    description:
      "Homeopathy provides safe, gentle, and highly effective solutions for your child's physical, mental, and emotional health during their crucial development years.",
    longDescription:
      "Childhood is the ideal time to introduce homeopathy as the immune system is developing naturally. It is well-placed to offer side-effect-free remedies that nurture your child's well-being and build a foundation for lifelong health.",
    benefits: [
      "Safe & gentle for kids",
      "Supports developing immune systems",
      "Holistic physical & mental care",
      "Free from harsh chemicals",
    ],
    duration: "45 – 60 Minutes Consultation",
    iconName: "Leaf",
  },
  {
    id: "skin-disorders",
    title: "Skin Disorders",
    subtitle: "Eczema, Psoriasis & Acne",
    description:
      "We provide a holistic approach to treating skin conditions, aiming to heal the underlying internal imbalance rather than merely suppressing visible symptoms.",
    longDescription:
      "Homeopathy is exceptionally effective for common conditions like eczema, psoriasis, acne, fungal infections, and urticaria. By targeting the root cause of the disorder, we stimulate the body to heal from within, ensuring long-lasting, clear, and healthy skin.",
    benefits: [
      "Treats the root internal cause",
      "Effective for eczema & acne",
      "Natural and non-toxic",
      "Prevents future flare-ups",
    ],
    duration: "45 – 60 Minutes Consultation",
    iconName: "Sparkles",
  },
  {
    id: "allergies",
    title: "Allergies",
    subtitle: "Personalized Allergy Relief",
    description:
      "Homeopathy treats allergies individually, considering your unique reaction patterns and addressing the physical and emotional triggers.",
    longDescription:
      "Rather than just managing symptoms like sneezing, itching, or rashes, we look at your overall health. Our natural remedies are specifically chosen based on how your body uniquely reacts, aiming to reduce hypersensitivity and provide lasting relief.",
    benefits: [
      "Addresses root cause of allergies",
      "Natural relief from sneezing & itching",
      "Personalized for your reaction pattern",
      "No drowsiness or side effects",
    ],
    duration: "45 – 60 Minutes Consultation",
    iconName: "Wind",
  },
  {
    id: "hair-fall",
    title: "Hair Fall",
    subtitle: "Natural Hair Regrowth",
    description:
      "We treat hair fall by focusing on your overall health, lifestyle, and identifying the specific root causes of your hair loss.",
    longDescription:
      "Hair loss is often a symptom of underlying imbalances such as stress, poor digestion, or hormonal issues. Homeopathy works gently to stimulate natural hair regrowth by addressing these foundational factors, restoring both your health and your confidence.",
    benefits: [
      "Stimulates natural hair regrowth",
      "Addresses underlying stress & hormones",
      "Holistic lifestyle approach",
      "Improves scalp health",
    ],
    duration: "45 – 60 Minutes Consultation",
    iconName: "Activity",
  },
  {
    id: "digestive-issues",
    title: "Digestive Issues",
    subtitle: "Acidity, Bloating & Constipation",
    description:
      "Find natural relief from daily digestive discomforts, including acidity, bloating, and gas, by restoring harmony to your gut.",
    longDescription:
      "Digestive issues can disrupt your mood, sleep, and energy levels. If you struggle with the burning sensation of acidity or the uneasiness of bloating, our constitutional remedies can resolve these problems at the root, improving your overall daily comfort.",
    benefits: [
      "Relieves acidity and bloating",
      "Improves overall gut health",
      "Boosts energy and mood",
      "Resolves chronic constipation",
    ],
    duration: "45 – 60 Minutes Consultation",
    iconName: "HeartPulse",
  },
  {
    id: "stress-anxiety",
    title: "Stress and Anxiety",
    subtitle: "Mental Clarity & Calmness",
    description:
      "Our natural remedies work gently to calm the nervous system, reduce feelings of anxiety, and promote long-lasting mental clarity.",
    longDescription:
      "Unlike traditional medications that may lead to dependency, homeopathic treatments for stress and anxiety are completely natural. We focus on providing long-term emotional relief, helping you navigate daily life with a calm and resilient mind.",
    benefits: [
      "Calms the nervous system naturally",
      "Promotes mental clarity",
      "Non-habit forming & safe",
      "Provides long-term emotional relief",
    ],
    duration: "45 – 60 Minutes Consultation",
    iconName: "Brain",
  },
  {
    id: "hormonal-imbalance",
    title: "Hormonal Imbalance",
    subtitle: "Gentle & Natural Rebalancing",
    description:
      "Experience a gentle, holistic approach to rebalancing your hormones by addressing the root cause rather than masking symptoms.",
    longDescription:
      "We offer a highly personalized path to healing that takes into account your unique body constitution, emotional health, and lifestyle factors. This ensures your hormones are naturally regulated, restoring true vitality and balance to your life.",
    benefits: [
      "Natural hormonal rebalancing",
      "Addresses root causes safely",
      "Highly personalized care",
      "Improves overall vitality",
    ],
    duration: "45 – 60 Minutes Consultation",
    iconName: "Sparkles",
  },
  {
    id: "irregular-periods",
    title: "Irregular Periods",
    subtitle: "Natural Cycle Regulation",
    description:
      "A highly useful, natural alternative for treating period pain and regulating menstrual cycles without the side effects of conventional medicines.",
    longDescription:
      "Many women are switching to homeopathy for menstrual health. Allopathic medicines can disrupt your natural hormones and cause side effects. Our homeopathic treatments provide significant relief from period pain and gently restore regularity to your cycle.",
    benefits: [
      "Regulates menstrual cycles naturally",
      "Significant relief from period pain",
      "Free from harmful side effects",
      "Does not disrupt natural hormones",
    ],
    duration: "45 – 60 Minutes Consultation",
    iconName: "Activity",
  },
];

const whyHomeopathyPoints = [
  {
    title: "Holistic Treatment",
    desc: "Treats the whole person — mind, body, and spirit — not just isolated symptoms.",
  },
  {
    title: "100% Natural",
    desc: "Derived from natural plant, mineral, and animal sources, highly diluted for safety.",
  },
  {
    title: "No Side Effects",
    desc: "Gentle remedies with no toxicity, drug interactions, or organ damage.",
  },
  {
    title: "Safe for All Ages",
    desc: "Suitable for newborns, pregnant women, elderly patients, and everyone in between.",
  },
  {
    title: "Addresses Root Cause",
    desc: "Targets the underlying susceptibility rather than suppressing surface symptoms.",
  },
  {
    title: "Evidence-Based",
    desc: "Growing body of clinical research supports homeopathy's effectiveness across conditions.",
  },
];

export default function HomeopathyContent() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const { openWhatsApp } = useWhatsApp();
  const [expandedCondition, setExpandedCondition] = useState<string | null>(
    null
  );
  const [showAllConditions, setShowAllConditions] = useState(false);
  const showMoreRef = useRef<HTMLDivElement>(null);

  const INITIAL_VISIBLE_COUNT = 5;
  const hiddenCount = Math.max(
    0,
    homeopathyConditions.length - INITIAL_VISIBLE_COUNT
  );
  const visibleConditions = showAllConditions
    ? homeopathyConditions
    : homeopathyConditions.slice(0, INITIAL_VISIBLE_COUNT);

  const handleShowMore = useCallback(() => {
    setShowAllConditions(true);
    setTimeout(() => {
      showMoreRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 100);
  }, []);

  return (
    <>
      {/* ── 2. Introduction & Why Homeopathy ────────────── */}
      <section className="relative overflow-hidden bg-white pt-12 pb-12 md:pt-16 md:pb-20 lg:pt-20 lg:pb-28">
        <motion.div
          style={{ y: y1 }}
          className="bg-brand-gold/5 pointer-events-none absolute top-[5%] -right-[20%] h-[600px] w-[600px] rounded-full blur-[150px] filter"
        />

        <Container className="relative z-10">
          <div className="mb-12 grid grid-cols-1 items-stretch gap-10 md:mb-20 lg:grid-cols-2 lg:gap-16">
            {/* Text Side */}
            <motion.div
              initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-left"
            >
              <h2 className="font-heading text-brand-primary mb-10 text-left text-2xl font-bold sm:text-4xl md:mb-14 md:text-5xl lg:text-6xl">
                What is{" "}
                <span className="text-brand-gold relative inline-block">
                  Homeopathy?
                  <motion.span
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    transition={{
                      duration: 0.8,
                      delay: 0.3,
                      ease: "easeInOut",
                    }}
                    viewport={{ once: true }}
                    className="bg-brand-gold absolute -bottom-1 left-0 h-[3px] rounded-full"
                  />
                </span>
              </h2>
              <div className="flex flex-col space-y-6 md:space-y-8">
                <p className="first-letter:font-heading first-letter:text-brand-gold text-left text-sm leading-relaxed font-light text-gray-600 first-letter:float-left first-letter:mr-2 first-letter:text-5xl first-letter:leading-[0.85] first-letter:font-bold sm:text-base md:text-lg md:leading-[1.8] md:first-letter:mr-3 md:first-letter:text-6xl">
                  Experience the profound elegance of Homeopathy, a time-honored
                  system of natural medicine that awakens the body&apos;s
                  intrinsic healing intelligence. Rather than merely masking
                  symptoms, our ultra-diluted, gentle remedies work in harmony
                  with your natural vitality to restore balance from
                  within—offering profound, lasting relief without compromise.
                </p>

                <div className="border-brand-gold from-brand-gold/10 via-brand-gold/[0.02] relative my-2 rounded-r-2xl border-l-[3px] bg-gradient-to-r to-transparent py-5 pl-6 md:pl-8">
                  <div className="text-brand-gold font-heading absolute -top-3 -left-[14px] text-5xl leading-none opacity-60">
                    &ldquo;
                  </div>
                  <p className="text-brand-primary font-heading relative z-10 m-0 text-left text-lg leading-relaxed font-medium italic md:text-xl">
                    True healing requires deeply personalized care. We bridge
                    your physical, mental, and emotional well-being.
                  </p>
                </div>

                <p className="text-left text-sm leading-relaxed font-light text-gray-600 sm:text-base md:text-lg md:leading-[1.8]">
                  At Kottakkal Arya Vaidyasala, our expert homeopathic
                  physicians take the time to understand your complete
                  constitutional profile. We meticulously curate a precise,
                  bespoke remedy tailored exclusively to your unique journey
                  toward optimal health.
                </p>
              </div>
            </motion.div>

            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: 30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="group relative mt-2 aspect-[4/3] min-h-[300px] w-full overflow-hidden rounded-3xl shadow-2xl lg:mt-0 lg:aspect-auto lg:h-full"
            >
              <div className="bg-brand-primary/5 absolute inset-0 z-10 transition-colors duration-500 group-hover:bg-transparent" />
              <Image
                src="/images/homeopathy/homeopathy-medicine.webp"
                alt="Homeopathy Medicine - Ayurvedic Treatment in Dubai"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Decorative elements */}
              <div className="bg-brand-gold/20 pointer-events-none absolute -right-10 -bottom-10 z-20 h-40 w-40 rounded-full blur-3xl" />
              <div className="bg-brand-primary/20 pointer-events-none absolute -top-10 -left-10 z-20 h-40 w-40 rounded-full blur-3xl" />
            </motion.div>
          </div>

          {/* Why Homeopathy Grid */}
          <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-4 md:mt-12 md:grid-cols-2 md:gap-6">
            {whyHomeopathyPoints.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.1,
                  ease: "easeOut",
                }}
                className="hover:bg-brand-primary/[0.02] group hover:border-brand-gold/20 relative flex flex-row items-start gap-4 rounded-2xl border border-transparent bg-white p-4 shadow-sm transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] sm:gap-5 sm:bg-transparent sm:p-6 sm:shadow-none"
              >
                {/* Decorative expanding line */}
                <div className="bg-brand-gold absolute top-1/2 left-0 h-0 w-1 -translate-y-1/2 rounded-r-full opacity-0 transition-all duration-500 group-hover:h-1/2 group-hover:opacity-100" />

                <div className="bg-brand-primary/5 group-hover:bg-brand-gold flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-md sm:h-14 sm:w-14 sm:rounded-2xl">
                  <CheckCircle2 className="text-brand-primary h-5 w-5 transition-colors duration-500 group-hover:text-white sm:h-6 sm:w-6" />
                </div>

                <div className="flex-1 transition-transform duration-500 group-hover:translate-x-1 sm:group-hover:translate-x-2">
                  <h3 className="font-heading text-brand-primary group-hover:text-brand-gold mb-1.5 text-lg font-bold transition-colors duration-500 sm:mb-2.5 sm:text-xl">
                    {point.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-gray-700 sm:text-sm md:text-base">
                    {point.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 3. Conditions We Treat — Accordion ──────────── */}
      <section
        id="homeopathy-conditions"
        className="bg-brand-cream relative overflow-hidden pt-6 pb-12 md:pt-12 md:pb-28"
      >
        <motion.div
          style={{ y: y2 }}
          className="bg-brand-primary/[0.03] pointer-events-none absolute top-[20%] -left-[15%] h-[600px] w-[600px] rounded-full blur-[150px] filter"
        />
        <motion.div
          style={{ y: y3 }}
          className="bg-brand-gold/[0.04] pointer-events-none absolute right-[-10%] bottom-[10%] h-[400px] w-[400px] rounded-full blur-[120px] filter"
        />

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-6 flex flex-col items-center text-center md:mb-12"
          >
            <div className="bg-brand-primary/5 border-brand-primary/10 mb-4 inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 md:mb-5 md:gap-2">
              <Sparkles className="text-brand-gold h-3.5 w-3.5 md:h-4 md:w-4" />
              <p className="text-brand-primary text-[10px] font-bold tracking-[0.2em] uppercase sm:text-xs">
                Conditions We Treat
              </p>
            </div>
            <h2 className="font-heading text-brand-primary mb-4 text-center text-2xl font-bold sm:text-4xl md:mb-6 md:text-5xl lg:text-6xl 2xl:text-7xl">
              Homeopathic{" "}
              <span className="text-brand-gold relative inline-block">
                Treatments
                <motion.span
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  className="bg-brand-gold/40 absolute -bottom-1 left-0 h-[3px] rounded-full"
                />
              </span>
            </h2>
            <p className="mx-auto max-w-xl text-xs leading-relaxed text-gray-700 sm:text-sm md:text-base">
              Our homeopathic physician treats a wide spectrum of acute and
              chronic conditions with individualized constitutional
              prescriptions.
            </p>
          </motion.div>

          <div className="mx-auto max-w-4xl space-y-3">
            {visibleConditions.map((condition, idx) => {
              const isExpanded = expandedCondition === condition.id;
              return (
                <motion.div
                  key={condition.id}
                  id={`condition-${condition.id}`}
                  initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.45,
                    delay: Math.min(idx * 0.04, 0.4),
                    ease: "easeOut",
                  }}
                  className="scroll-mt-32"
                  {...(idx === INITIAL_VISIBLE_COUNT
                    ? { ref: showMoreRef }
                    : {})}
                >
                  <div
                    className={`overflow-hidden rounded-2xl border bg-white transition-all duration-400 ${
                      isExpanded
                        ? "border-brand-primary/15 shadow-brand-primary/5 shadow-lg"
                        : "border-brand-primary/[0.06] hover:border-brand-primary/10 shadow-sm hover:shadow-md"
                    }`}
                  >
                    {/* Accordion Header */}
                    <button
                      onClick={() =>
                        setExpandedCondition(isExpanded ? null : condition.id)
                      }
                      className="hover:bg-brand-primary/[0.015] flex w-full items-center gap-4 p-5 text-left transition-colors duration-300 sm:gap-5 sm:p-6"
                    >
                      {/* Number */}
                      <span
                        className={`hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold tracking-wide transition-all duration-300 sm:inline-flex ${
                          isExpanded
                            ? "bg-brand-primary text-white shadow-md"
                            : "bg-brand-primary/5 text-brand-primary/50"
                        }`}
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </span>

                      {/* Title + Badge */}
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-3">
                          <h3
                            className={`font-heading text-base font-bold transition-colors duration-300 sm:text-lg ${
                              isExpanded
                                ? "text-brand-primary"
                                : "text-brand-primary/80"
                            }`}
                          >
                            {condition.title}
                          </h3>
                          <span className="bg-brand-primary hidden rounded-full px-2.5 py-0.5 text-[9px] font-bold tracking-wider whitespace-nowrap text-white uppercase sm:inline-block">
                            {condition.subtitle}
                          </span>
                        </div>
                        {!isExpanded && (
                          <p className="mt-1 line-clamp-1 max-w-2xl text-xs text-gray-600 sm:text-sm">
                            {condition.description}
                          </p>
                        )}
                      </div>

                      {/* Duration + Chevron */}
                      <div className="flex shrink-0 items-center gap-3 sm:gap-4">
                        <div className="text-brand-primary/40 hidden items-center gap-1.5 sm:flex">
                          <Clock className="h-3.5 w-3.5" />
                          <span className="text-xs font-medium whitespace-nowrap">
                            {condition.duration}
                          </span>
                        </div>
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-full transition-colors duration-300 ${
                            isExpanded
                              ? "bg-brand-primary text-white"
                              : "bg-brand-primary/5 text-brand-primary/40 hover:bg-brand-primary/10 hover:text-brand-primary/70"
                          }`}
                        >
                          <ChevronDown className="h-4 w-4" />
                        </motion.div>
                      </div>
                    </button>

                    {/* Accordion Content */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.35,
                            ease: [0.25, 0.8, 0.25, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pt-0 pb-6 sm:px-6 sm:pb-8">
                            <div className="via-brand-primary/10 mb-6 h-px w-full bg-gradient-to-r from-transparent to-transparent" />

                            <div className="sm:pl-[60px]">
                              <p className="mb-6 max-w-2xl text-sm leading-relaxed text-gray-700 sm:text-base">
                                {condition.longDescription ||
                                  condition.description}
                              </p>

                              <div className="mb-8 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                                {condition.benefits.map((benefit, i) => (
                                  <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -8 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                      duration: 0.3,
                                      delay: i * 0.06,
                                    }}
                                    className="flex items-center gap-2.5 py-1.5"
                                  >
                                    <div className="bg-brand-gold h-1.5 w-1.5 shrink-0 rounded-full" />
                                    <span className="text-brand-primary/80 text-sm font-medium">
                                      {benefit}
                                    </span>
                                  </motion.div>
                                ))}
                              </div>

                              <div className="flex flex-col items-center gap-4 sm:flex-row">
                                <div className="text-brand-primary/50 flex items-center gap-1.5 sm:hidden">
                                  <Clock className="h-3.5 w-3.5" />
                                  <span className="text-xs font-medium">
                                    {condition.duration}
                                  </span>
                                </div>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    openWhatsApp({
                                      treatment: condition.title,
                                    });
                                  }}
                                  className="bg-brand-primary hover:bg-brand-gold hover:text-brand-primary shadow-brand-primary/15 hover:shadow-brand-gold/20 inline-flex w-full items-center justify-center gap-2.5 rounded-full px-8 py-3 text-xs font-bold tracking-wider text-white uppercase shadow-lg transition-all duration-300 sm:w-auto"
                                >
                                  Book Consultation
                                  <ArrowRight className="h-3.5 w-3.5" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Show More / Less Button */}
          {hiddenCount > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 15, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative mx-auto mt-8 max-w-4xl"
            >
              {!showAllConditions && (
                <div className="from-brand-cream pointer-events-none absolute -top-16 right-0 left-0 z-10 h-16 bg-gradient-to-t to-transparent" />
              )}
              <div className="flex justify-center">
                <motion.button
                  onClick={() => {
                    if (showAllConditions) {
                      setShowAllConditions(false);
                      setExpandedCondition(null);
                      const section = document.getElementById(
                        "homeopathy-conditions"
                      );
                      if (section) {
                        const offset =
                          section.getBoundingClientRect().top +
                          window.scrollY -
                          100;
                        window.scrollTo({ top: offset, behavior: "smooth" });
                      }
                    } else {
                      handleShowMore();
                    }
                  }}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="group bg-brand-primary hover:bg-brand-gold hover:text-brand-primary shadow-brand-primary/15 hover:shadow-brand-gold/20 inline-flex items-center justify-center gap-3 rounded-full px-8 py-3.5 text-xs font-bold tracking-wider text-white uppercase shadow-lg transition-all duration-400 hover:shadow-xl sm:px-10 sm:py-4 sm:text-sm"
                >
                  {showAllConditions ? (
                    <>
                      Show Less
                      <motion.div
                        animate={{ rotate: 180 }}
                        className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20"
                      >
                        <ChevronDown className="h-3.5 w-3.5" />
                      </motion.div>
                    </>
                  ) : (
                    <>
                      Show {hiddenCount} More Conditions
                      <motion.div
                        animate={{ y: [0, 3, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20"
                      >
                        <ChevronDown className="h-3.5 w-3.5" />
                      </motion.div>
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>
          )}
        </Container>
      </section>

      {/* ── 4. CTA Banner ───────────────────────────────── */}
      <section className="bg-brand-primary relative overflow-hidden py-12 md:py-24">
        <motion.div
          style={{ y: y1 }}
          className="bg-brand-gold/20 pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full blur-[80px] filter"
        />
        <motion.div
          style={{ y: y2 }}
          className="bg-brand-gold/10 pointer-events-none absolute bottom-0 -left-20 h-56 w-56 rounded-full blur-[60px] filter"
        />

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-brand-gold mb-3 text-[10px] font-semibold tracking-[0.2em] uppercase md:mb-4 md:text-xs">
              Begin Your Healing Journey
            </p>
            <h2 className="font-heading mb-4 text-2xl leading-tight font-bold text-white md:mb-6 md:text-4xl lg:text-5xl">
              Ready to Experience the Power of Homeopathy?
            </h2>
            <p className="mb-8 px-4 text-sm leading-relaxed text-white/90 md:mb-10 md:text-base lg:text-lg">
              Book a consultation with our experienced homeopathic physician
              today and take the first step towards lasting natural healing.
            </p>
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() =>
                openWhatsApp({ treatment: "Homeopathy Consultation" })
              }
              className="bg-brand-gold text-brand-dark hover:text-brand-primary shadow-brand-gold/20 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[11px] font-bold tracking-wider uppercase shadow-xl transition-all duration-300 hover:bg-white md:gap-3 md:px-10 md:py-4 md:text-sm"
            >
              Book Consultation Now
              <ArrowRight className="h-3.5 w-3.5 md:h-4 md:w-4" />
            </motion.button>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
