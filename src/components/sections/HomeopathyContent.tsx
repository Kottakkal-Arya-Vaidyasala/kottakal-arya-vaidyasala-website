"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
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
  const [expandedCondition, setExpandedCondition] = useState<string | null>(null);
  const [showAllConditions, setShowAllConditions] = useState(false);
  const showMoreRef = useRef<HTMLDivElement>(null);

  const INITIAL_VISIBLE_COUNT = 5;
  const hiddenCount = Math.max(
    0,
    homeopathyConditions.length - INITIAL_VISIBLE_COUNT,
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
      <section className="pt-16 pb-12 md:pt-24 md:pb-20 lg:pt-32 lg:pb-28 bg-white relative overflow-hidden">
        <motion.div style={{ y: y1 }} className="absolute -right-[20%] top-[5%] w-[600px] h-[600px] bg-brand-gold/5 rounded-full filter blur-[150px] pointer-events-none" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-12 md:mb-20">
            {/* Text Side */}
            <motion.div
              initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-left"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-brand-primary mb-6 md:mb-8 text-left">
                What is{" "}
                <span className="text-brand-gold relative inline-block">
                  Homeopathy?
                  <motion.span
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className="absolute -bottom-1 left-0 h-[3px] bg-brand-gold rounded-full"
                  />
                </span>
              </h2>
              <div className="flex flex-col space-y-6 md:space-y-8">
                <p className="first-letter:text-5xl md:first-letter:text-6xl first-letter:font-heading first-letter:font-bold first-letter:text-brand-gold first-letter:mr-2 md:first-letter:mr-3 first-letter:float-left first-letter:leading-[0.85] text-sm sm:text-base md:text-lg leading-relaxed md:leading-[1.8] font-light text-gray-600 text-left">
                  Experience the profound elegance of Homeopathy, a time-honored
                  system of natural medicine that awakens the body&apos;s
                  intrinsic healing intelligence. Rather than merely masking
                  symptoms, our ultra-diluted, gentle remedies work in harmony
                  with your natural vitality to restore balance from
                  within—offering profound, lasting relief without compromise.
                </p>

                <div className="relative pl-6 md:pl-8 py-5 border-l-[3px] border-brand-gold bg-gradient-to-r from-brand-gold/10 via-brand-gold/[0.02] to-transparent rounded-r-2xl my-2">
                  <div className="absolute -left-[14px] -top-3 text-brand-gold opacity-60 text-5xl font-heading leading-none">
                    &ldquo;
                  </div>
                  <p className="text-brand-primary font-heading font-medium italic text-lg md:text-xl m-0 leading-relaxed text-left relative z-10">
                    True healing requires deeply personalized care. We bridge your
                    physical, mental, and emotional well-being.
                  </p>
                </div>

                <p className="text-sm sm:text-base md:text-lg leading-relaxed md:leading-[1.8] font-light text-gray-600 text-left">
                  At Kottakkal Arya Vaidyasala, our expert homeopathic physicians
                  take the time to understand your complete constitutional
                  profile. We meticulously curate a precise, bespoke remedy
                  tailored exclusively to your unique journey toward optimal
                  health.
                </p>
              </div>
            </motion.div>

            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: 30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="relative w-full aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden shadow-2xl group mt-8 lg:mt-0"
            >
              <div className="absolute inset-0 bg-brand-primary/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <Image
                src="/images/homeopathy/homeopathy-medicine.webp"
                alt="Homeopathy Medicine - Ayurvedic Treatment in Dubai"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Decorative elements */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-gold/20 rounded-full blur-3xl z-20 pointer-events-none" />
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-primary/20 rounded-full blur-3xl z-20 pointer-events-none" />
            </motion.div>
          </div>

          {/* Why Homeopathy Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-8 md:mt-12 max-w-5xl mx-auto">
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
                className="relative flex flex-row items-start gap-4 sm:gap-5 p-4 sm:p-6 rounded-2xl transition-all duration-500 hover:bg-brand-primary/[0.02] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] group border border-transparent hover:border-brand-gold/20 bg-white sm:bg-transparent shadow-sm sm:shadow-none"
              >
                {/* Decorative expanding line */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-brand-gold rounded-r-full transition-all duration-500 group-hover:h-1/2 opacity-0 group-hover:opacity-100" />

                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-brand-primary/5 flex items-center justify-center shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:bg-brand-gold group-hover:-rotate-6 group-hover:shadow-md">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-brand-primary group-hover:text-white transition-colors duration-500" />
                </div>

                <div className="flex-1 transition-transform duration-500 group-hover:translate-x-1 sm:group-hover:translate-x-2">
                  <h3 className="font-heading font-bold text-brand-primary text-lg sm:text-xl mb-1.5 sm:mb-2.5 transition-colors duration-500 group-hover:text-brand-gold">
                    {point.title}
                  </h3>
                  <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
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
        className="pt-6 pb-12 md:pt-12 md:pb-28 bg-brand-cream relative overflow-hidden"
      >
        <motion.div style={{ y: y2 }} className="absolute -left-[15%] top-[20%] w-[600px] h-[600px] bg-brand-primary/[0.03] rounded-full filter blur-[150px] pointer-events-none" />
        <motion.div style={{ y: y3 }} className="absolute right-[-10%] bottom-[10%] w-[400px] h-[400px] bg-brand-gold/[0.04] rounded-full filter blur-[120px] pointer-events-none" />

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center mb-6 md:mb-12 flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-1.5 md:gap-2 bg-brand-primary/5 border border-brand-primary/10 rounded-full px-4 py-1.5 mb-4 md:mb-5">
              <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 text-brand-gold" />
              <p className="text-brand-primary tracking-[0.2em] uppercase text-[10px] sm:text-xs font-bold">
                Conditions We Treat
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-heading font-bold text-brand-primary mb-4 md:mb-6 text-center">
              Homeopathic{" "}
              <span className="text-brand-gold relative inline-block">
                Treatments
                <motion.span
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  className="absolute -bottom-1 left-0 h-[3px] bg-brand-gold/40 rounded-full"
                />
              </span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-700 max-w-xl mx-auto leading-relaxed">
              Our homeopathic physician treats a wide spectrum of acute and
              chronic conditions with individualized constitutional
              prescriptions.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-3">
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
                    className={`bg-white rounded-2xl border transition-all duration-400 overflow-hidden ${
                      isExpanded
                        ? "border-brand-primary/15 shadow-lg shadow-brand-primary/5"
                        : "border-brand-primary/[0.06] shadow-sm hover:shadow-md hover:border-brand-primary/10"
                    }`}
                  >
                    {/* Accordion Header */}
                    <button
                      onClick={() =>
                        setExpandedCondition(isExpanded ? null : condition.id)
                      }
                      className="w-full flex items-center gap-4 sm:gap-5 p-5 sm:p-6 text-left transition-colors duration-300 hover:bg-brand-primary/[0.015]"
                    >
                      {/* Number */}
                      <span
                        className={`hidden sm:inline-flex items-center justify-center w-10 h-10 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 shrink-0 ${
                          isExpanded
                            ? "bg-brand-primary text-white shadow-md"
                            : "bg-brand-primary/5 text-brand-primary/50"
                        }`}
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </span>

                      {/* Title + Badge */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 flex-wrap">
                          <h3
                            className={`font-heading text-base sm:text-lg font-bold transition-colors duration-300 ${
                              isExpanded
                                ? "text-brand-primary"
                                : "text-brand-primary/80"
                            }`}
                          >
                            {condition.title}
                          </h3>
                          <span className="hidden sm:inline-block text-[9px] font-bold tracking-wider uppercase text-white bg-brand-primary px-2.5 py-0.5 rounded-full whitespace-nowrap">
                            {condition.subtitle}
                          </span>
                        </div>
                        {!isExpanded && (
                          <p className="text-gray-600 text-xs sm:text-sm line-clamp-1 mt-1 max-w-2xl">
                            {condition.description}
                          </p>
                        )}
                      </div>

                      {/* Duration + Chevron */}
                      <div className="flex items-center gap-3 sm:gap-4 shrink-0">
                        <div className="hidden sm:flex items-center gap-1.5 text-brand-primary/40">
                          <Clock className="w-3.5 h-3.5" />
                          <span className="text-xs font-medium whitespace-nowrap">
                            {condition.duration}
                          </span>
                        </div>
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300 ${
                            isExpanded
                              ? "bg-brand-primary text-white"
                              : "bg-brand-primary/5 text-brand-primary/40 hover:bg-brand-primary/10 hover:text-brand-primary/70"
                          }`}
                        >
                          <ChevronDown className="w-4 h-4" />
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
                          <div className="px-5 sm:px-6 pb-6 sm:pb-8 pt-0">
                            <div className="w-full h-px bg-gradient-to-r from-transparent via-brand-primary/10 to-transparent mb-6" />

                            <div className="sm:pl-[60px]">
                              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
                                {condition.longDescription ||
                                  condition.description}
                              </p>

                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
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
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
                                    <span className="text-brand-primary/80 text-sm font-medium">
                                      {benefit}
                                    </span>
                                  </motion.div>
                                ))}
                              </div>

                              <div className="flex flex-col sm:flex-row items-center gap-4">
                                <div className="flex sm:hidden items-center gap-1.5 text-brand-primary/50">
                                  <Clock className="w-3.5 h-3.5" />
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
                                  className="inline-flex items-center justify-center gap-2.5 px-8 py-3 rounded-full text-xs font-bold tracking-wider uppercase bg-brand-primary text-white hover:bg-brand-gold hover:text-brand-primary transition-all duration-300 shadow-lg shadow-brand-primary/15 hover:shadow-brand-gold/20 w-full sm:w-auto"
                                >
                                  Book Consultation
                                  <ArrowRight className="w-3.5 h-3.5" />
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
              className="max-w-4xl mx-auto mt-8 relative"
            >
              {!showAllConditions && (
                <div className="absolute -top-16 left-0 right-0 h-16 bg-gradient-to-t from-brand-cream to-transparent pointer-events-none z-10" />
              )}
              <div className="flex justify-center">
                <motion.button
                  onClick={() => {
                    if (showAllConditions) {
                      setShowAllConditions(false);
                      setExpandedCondition(null);
                      const section = document.getElementById(
                        "homeopathy-conditions",
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
                  className="group inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase bg-brand-primary text-white hover:bg-brand-gold hover:text-brand-primary transition-all duration-400 shadow-lg shadow-brand-primary/15 hover:shadow-xl hover:shadow-brand-gold/20"
                >
                  {showAllConditions ? (
                    <>
                      Show Less
                      <motion.div
                        animate={{ rotate: 180 }}
                        className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center"
                      >
                        <ChevronDown className="w-3.5 h-3.5" />
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
                        className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center"
                      >
                        <ChevronDown className="w-3.5 h-3.5" />
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
      <section className="py-12 md:py-24 bg-brand-primary relative overflow-hidden">
        <motion.div style={{ y: y1 }} className="absolute -right-20 -top-20 w-72 h-72 bg-brand-gold/20 rounded-full filter blur-[80px] pointer-events-none" />
        <motion.div style={{ y: y2 }} className="absolute -left-20 bottom-0 w-56 h-56 bg-brand-gold/10 rounded-full filter blur-[60px] pointer-events-none" />

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center max-w-2xl mx-auto"
          >
            <p className="text-brand-gold tracking-[0.2em] uppercase text-[10px] md:text-xs font-semibold mb-3 md:mb-4">
              Begin Your Healing Journey
            </p>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 md:mb-6 leading-tight">
              Ready to Experience the Power of Homeopathy?
            </h2>
            <p className="text-white/90 text-sm md:text-base lg:text-lg leading-relaxed mb-8 md:mb-10 px-4">
              Book a consultation with our experienced homeopathic physician
              today and take the first step towards lasting natural healing.
            </p>
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() =>
                openWhatsApp({ treatment: "Homeopathy Consultation" })
              }
              className="inline-flex items-center justify-center gap-2 md:gap-3 px-6 md:px-10 py-3.5 md:py-4 rounded-full text-[11px] md:text-sm font-bold tracking-wider uppercase bg-brand-gold text-brand-dark hover:bg-white hover:text-brand-primary transition-all duration-300 shadow-xl shadow-brand-gold/20"
            >
              Book Consultation Now
              <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
            </motion.button>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
