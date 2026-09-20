"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/common/Container";
import AnimatedReveal from "@/components/common/AnimatedReveal";
import PrimaryButton from "@/components/common/PrimaryButton";
import {
  ArrowRight,
  Clock,
  Flower2,
  Droplets,
  Waves,
  Gem,
  ChevronDown,
  Plus,
  Sparkles,
} from "lucide-react";
import { useWhatsApp } from "@/hooks/useWhatsApp";
import HomeopathyContent from "@/components/sections/HomeopathyContent";

const servicesData = [
  // Body Scrubs & Wraps
  {
    id: "scrub-mud",
    category: "Body Scrubs & Wraps",
    title: "Aromatic moisturizing mud wrap",
    duration: "60 min",
    image: "/images/treatments/abhyangam-v2.webp",
    description:
      "Deeply hydrate and nourish your skin with our aromatic mud wrap.",
  },
  {
    id: "scrub-herbal",
    category: "Body Scrubs & Wraps",
    title: "Herbal Scrub with aromatic massage",
    duration: "60 min",
    image: "/images/treatments/panchakarma-v2.webp",
    description:
      "Exfoliate and refresh your body with a traditional herbal scrub.",
  },

  // Our Facials - Shine Bright
  {
    id: "facial-herbal",
    category: "Our Facials - Shine Bright",
    title: "Herbal Facial",
    duration: "60 min",
    image: "/images/treatments/herbal-facial-v2.webp",
    description: "Restore your natural glow with our signature herbal facial.",
  },
  {
    id: "facial-njavara",
    category: "Our Facials - Shine Bright",
    title: "Njavara Facial",
    duration: "60 min",
    image: "/images/treatments/njavarakizhi-v2.webp",
    description: "A deeply nourishing facial using traditional Njavara rice.",
  },

  // Ease Your Mind
  {
    id: "mind-vamasabhyangam",
    category: "Ease Your Mind",
    title: "Vamasabhyangam (back massage)",
    duration: "30 min",
    image: "/images/treatments/pizhichil-v2.webp",
    description:
      "Relieve tension and stiffness in your back with targeted massage therapy.",
  },
  {
    id: "mind-padabhyangam",
    category: "Ease Your Mind",
    title: "Padabhyangam (foot reflexology)",
    duration: "55 min",
    image: "/images/treatments/elakizhi-v2.webp",
    description: "Relax and restore balance throughout your body.",
  },
  {
    id: "mind-shirobhyangam",
    category: "Ease Your Mind",
    title: "Shirobhyangam (Indian head massage)",
    duration: "30 min",
    image: "/images/treatments/abhyangam-v2.webp",
    description:
      "A deeply calming head massage that relieves stress and improves sleep.",
  },
  {
    id: "mind-mukhabhyangam",
    category: "Ease Your Mind",
    title: "Mukhabhyangam (Face care)",
    duration: "30 min",
    image: "/images/treatments/panchakarma-v2.webp",
    description: "Gentle facial care and massage to relieve facial tension.",
  },

  // Our Programs
  {
    id: "prog-skin",
    category: "Our Programs",
    title: "Skin Care",
    duration: "Custom",
    image: "/images/treatments/njavarakizhi-v2.webp",
    description: "Specialized programs for chronic skin conditions.",
  },
  {
    id: "prog-detox",
    category: "Our Programs",
    title: "Detox",
    duration: "Custom",
    image: "/images/treatments/elakizhi-v2.webp",
    description: "Programs designed to eliminate accumulated toxins.",
  },
  {
    id: "prog-stress",
    category: "Our Programs",
    title: "Stress Management",
    duration: "Custom",
    image: "/images/treatments/pizhichil-v2.webp",
    description: "Holistic approaches to calm the nervous system.",
  },
  {
    id: "prog-rejuvenation",
    category: "Our Programs",
    title: "Rejuvenation",
    duration: "Custom",
    image: "/images/treatments/abhyangam-v2.webp",
    description: "Rasayana therapies to slow aging and boost immunity.",
  },
  {
    id: "prog-prenatal-mother",
    category: "Our Programs",
    title: "Prenatal & Post natal are for Mother",
    duration: "Custom",
    image: "/images/treatments/panchakarma-v2.webp",
    description: "Specialized nurturing care supporting mothers.",
  },
  {
    id: "prog-neonatal",
    category: "Our Programs",
    title: "Neonatal Care for Babies",
    duration: "Custom",
    image: "/images/treatments/shirodhara-v2.webp",
    description:
      "Gentle, traditional Ayurvedic care to support infant development.",
  },
  {
    id: "prog-slimming",
    category: "Our Programs",
    title: "Body Slimming",
    duration: "Custom",
    image: "/images/treatments/njavarakizhi-v2.webp",
    description: "Natural, sustainable Ayurvedic weight management.",
  },

  // Ayurveda Therapies
  {
    id: "ayr-abhyangam",
    category: "Ayurveda Therapies",
    title: "Abhyangam",
    duration: "60 min",
    image: "/images/treatments/abhyangam-v2.webp",
    description: "Deeply nourishing whole-body warm oil massage.",
  },
  {
    id: "ayr-marma",
    category: "Ayurveda Therapies",
    title: "Marma abhyangam",
    duration: "60 min",
    image: "/images/treatments/panchakarma-v2.webp",
    description: "Specialized massage targeting vital energy points.",
  },
  {
    id: "ayr-podi",
    category: "Ayurveda Therapies",
    title: "Podi Kizhi",
    duration: "60 min",
    image: "/images/treatments/elakizhi-v2.webp",
    description:
      "Warm herbal powder poultice massage for joint and muscle pain.",
  },
  {
    id: "ayr-aavi",
    category: "Ayurveda Therapies",
    title: "Aavi Kizhi (Aromatic herbal pouch)",
    duration: "60 min",
    image: "/images/treatments/njavarakizhi-v2.webp",
    description: "Aromatic herbal pouch therapy for deep relaxation.",
  },
  {
    id: "ayr-njavara",
    category: "Ayurveda Therapies",
    title: "Njavara Kizhi (Rice pouch therapy)",
    duration: "60 min",
    image: "/images/treatments/njavarakizhi-v2.webp",
    description: "Nourishing rice pouch therapy to strengthen muscles.",
  },
  {
    id: "ayr-nasya",
    category: "Ayurveda Therapies",
    title: "Nasyam",
    duration: "30 min",
    image: "/images/treatments/nasyam-v2.webp",
    description:
      "Nasal administration of medicated oils or liquids for cleansing and sinus health.",
  },
  {
    id: "ayr-udwarthanam",
    category: "Ayurveda Therapies",
    title: "Udwarthanam (Herbal powder massage)",
    duration: "60 min",
    image: "/images/treatments/abhyangam-v2.webp",
    description:
      "Invigorating dry herbal powder massage for weight management.",
  },
  {
    id: "ayr-shirodhara",
    category: "Ayurveda Therapies",
    title: "Shirodhara",
    duration: "60 min",
    image: "/images/treatments/shirodhara-v2.webp",
    description: "Continuous stream of warm medicated oil on the forehead.",
  },
  {
    id: "ayr-ksheeradhara",
    category: "Ayurveda Therapies",
    title: "Ksheeradhara",
    duration: "60 min",
    image: "/images/treatments/panchakarma-v2.webp",
    description: "Continuous stream of medicated milk over the body.",
  },
  {
    id: "ayr-kashayadhara",
    category: "Ayurveda Therapies",
    title: "Kashayadhara",
    duration: "60 min",
    image: "/images/treatments/elakizhi-v2.webp",
    description: "Continuous stream of herbal decoctions over the body.",
  },
  {
    id: "ayr-pizhichil",
    category: "Ayurveda Therapies",
    title: "Pizhichil",
    duration: "60 min",
    image: "/images/treatments/pizhichil-v2.webp",
    description: "Luxurious warm oil bath combined with gentle massage.",
  },
  {
    id: "ayr-prishta",
    category: "Ayurveda Therapies",
    title: "Prishta vasti",
    duration: "60 min",
    image: "/images/treatments/abhyangam-v2.webp",
    description: "Specialized oil pooling therapy for the entire back.",
  },
  {
    id: "ayr-kati",
    category: "Ayurveda Therapies",
    title: "Kati vasti",
    duration: "30 min",
    image: "/images/treatments/njavarakizhi-v2.webp",
    description: "Targeted oil pooling therapy for lower back pain.",
  },
  {
    id: "ayr-janu",
    category: "Ayurveda Therapies",
    title: "Janu vasti",
    duration: "30 min",
    image: "/images/treatments/shirodhara-v2.webp",
    description: "Targeted oil pooling therapy for knee joint health.",
  },
  {
    id: "ayr-greeva",
    category: "Ayurveda Therapies",
    title: "Greeva vasti",
    duration: "30 min",
    image: "/images/treatments/panchakarma-v2.webp",
    description: "Targeted oil pooling therapy for neck and cervical spine.",
  },
  {
    id: "ayr-tharpanam",
    category: "Ayurveda Therapies",
    title: "Tharpanam",
    duration: "45 min",
    image: "/images/treatments/elakizhi-v2.webp",
    description: "Rejuvenating therapy for the eyes using medicated ghee.",
  },
  {
    id: "ayr-akshi",
    category: "Ayurveda Therapies",
    title: "Akshi dhara",
    duration: "30 min",
    image: "/images/treatments/pizhichil-v2.webp",
    description:
      "Cleansing and cooling continuous pouring of liquids over eyes.",
  },
  {
    id: "ayr-thalapothichil",
    category: "Ayurveda Therapies",
    title: "Thalapothichil",
    duration: "60 min",
    image: "/images/treatments/abhyangam-v2.webp",
    description: "Cooling herbal paste applied to the head for stress relief.",
  },
  {
    id: "ayr-lepam",
    category: "Ayurveda Therapies",
    title: "Lepam",
    duration: "30 min",
    image: "/images/treatments/shirodhara-v2.webp",
    description: "Application of medicinal herbal paste for localized pain.",
  },
  {
    id: "ayr-sneha",
    category: "Ayurveda Therapies",
    title: "Snehavasthy",
    duration: "30 min",
    image: "/images/treatments/panchakarma-v2.webp",
    description: "Therapeutic oil enema for detoxification and Vata balance.",
  },
  {
    id: "ayr-shirovasti",
    category: "Ayurveda Therapies",
    title: "Shirovasti",
    duration: "60 min",
    image: "/images/treatments/elakizhi-v2.webp",
    description: "Warm medicated oil retained on the head using a cap.",
  },

  // Our Wellness Treatments
  {
    id: "well-deep",
    category: "Our Wellness Treatments",
    title: "Deep Tissue Massage",
    duration: "60 min",
    image: "/images/treatments/pizhichil-v2.webp",
    description: "Intensive massage therapy targeting deep muscle layers.",
  },
  {
    id: "well-prenatal",
    category: "Our Wellness Treatments",
    title: "Prenatal and Postnatal Care",
    duration: "Custom",
    image: "/images/treatments/abhyangam-v2.webp",
    description: "Soothing sessions dedicated to maternal well-being.",
  },
  {
    id: "well-chakra",
    category: "Our Wellness Treatments",
    title: "Chakra balancing Hotstone massage",
    duration: "90 min",
    image: "/images/treatments/shirodhara-v2.webp",
    description: "Energy alignment using heated stones to melt away stress.",
  },
  {
    id: "well-lymphatic",
    category: "Our Wellness Treatments",
    title: "Manual lymphatic drainage",
    duration: "60 min",
    image: "/images/treatments/njavarakizhi-v2.webp",
    description: "Gentle techniques to encourage lymph system drainage.",
  },
];

export default function ServicesPage() {
  const { openWhatsApp } = useWhatsApp();

  const [visibleCount, setVisibleCount] = useState(6); // Default to 6 for SSR matching desktop
  const [stepSize, setStepSize] = useState(6);
  const [treatmentType, setTreatmentType] = useState<"ayurveda" | "homeopathy">(
    "ayurveda"
  );
  const [activeTab, setActiveTab] = useState(0);
  const [openCategory, setOpenCategory] = useState<string | null>(
    "Ayurveda Therapies"
  );
  const [showAllFeatured, setShowAllFeatured] = useState(false);

  useEffect(() => {
    const updateLayout = () => {
      // lg breakpoint is 1024px. Below that we use 4 items. Above we use 6.
      const isMobile = window.innerWidth < 1024;
      const step = isMobile ? 4 : 6;
      setStepSize(step);

      // If the visible count is still at the initial default, snap it to the device's step size
      // This prevents someone on mobile from suddenly seeing 6 initially if they refresh.
      setVisibleCount((prev) => {
        if (prev <= 6) return step;
        return prev;
      });
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  return (
    <main className="bg-brand-cream flex min-h-screen flex-col overflow-hidden">
      {/* ── Header ────────────────────────────────── */}
      <section className="relative flex h-[60vh] min-h-[400px] w-full items-center justify-center overflow-hidden bg-black pt-16 text-white">
        <Image
          src="/images/hero/home-carousel2.webp"
          alt="Authentic Ayurveda Services and Therapies in Dubai"
          fill
          sizes="100vw"
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />

        <Container className="relative z-10 text-center">
          <AnimatedReveal direction="up" delay={100}>
            <h1
              style={{ textShadow: "0px 2px 6px rgba(0, 0, 0, 0.6)" }}
              className="font-heading mb-0 px-4 text-2xl leading-tight font-bold tracking-wide whitespace-normal text-white sm:text-3xl sm:whitespace-nowrap md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl"
            >
              Heal naturally.{" "}
              <span className="text-brand-gold">Live fully.</span>
            </h1>
          </AnimatedReveal>
          <AnimatedReveal direction="up" delay={200}>
            <p
              style={{ textShadow: "0px 1px 4px rgba(0, 0, 0, 0.6)" }}
              className="mx-auto px-4 text-center text-xs leading-relaxed font-light tracking-[0.15em] whitespace-normal text-gray-200 uppercase sm:text-sm sm:whitespace-nowrap md:text-base lg:text-lg"
            >
              Pure Ayurvedic Care.
            </p>
          </AnimatedReveal>
        </Container>
      </section>

      {/* ── Treatment Type Tabs ─────────────────────── */}
      <section className="bg-brand-cream/90 border-brand-primary/10 sticky top-0 z-40 border-b py-4 shadow-[0_4px_30px_rgba(0,0,0,0.03)] backdrop-blur-md transition-all duration-300 md:top-[80px] md:py-6">
        <Container>
          <div className="flex items-center justify-center">
            <div className="border-brand-primary/10 relative inline-flex rounded-full border bg-white p-1.5 shadow-inner md:p-2">
              {(["ayurveda", "homeopathy"] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setTreatmentType(type)}
                  className={`group relative z-10 overflow-hidden rounded-full px-6 py-2.5 text-[10px] font-bold tracking-[0.2em] uppercase transition-colors duration-500 sm:text-xs md:px-12 md:py-3.5 md:text-sm ${
                    treatmentType === type
                      ? "text-white"
                      : "text-brand-primary/60 hover:text-brand-primary"
                  }`}
                >
                  {treatmentType === type && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="bg-brand-primary shadow-brand-primary/20 absolute inset-0 z-[-1] rounded-full shadow-lg"
                      transition={{
                        type: "spring",
                        bounce: 0.15,
                        duration: 0.6,
                      }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    {type === "ayurveda" ? (
                      <Flower2
                        className={`h-3.5 w-3.5 md:h-4 md:w-4 ${treatmentType === type ? "text-brand-gold" : ""}`}
                      />
                    ) : (
                      <Sparkles
                        className={`h-3.5 w-3.5 md:h-4 md:w-4 ${treatmentType === type ? "text-brand-gold" : ""}`}
                      />
                    )}
                    {type}
                  </span>
                  {treatmentType !== type && (
                    <span className="bg-brand-gold/10 absolute inset-0 z-[-1] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {treatmentType === "ayurveda" ? (
        <>
          {/* ── Services List (Compact Cards) ───────────── */}
          <section id="offerings" className="relative bg-white pt-12 pb-24">
            <div className="grain-overlay pointer-events-none absolute top-0 right-0 h-full w-full opacity-20" />
            <Container className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                className="mb-16 text-center"
              >
                <h2 className="font-heading text-brand-primary mb-6 text-2xl font-bold sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl">
                  Our Exclusive{" "}
                  <span className="text-brand-gold">Offerings</span>
                </h2>
                <p className="text-brand-grey mx-auto max-w-2xl text-lg font-light">
                  Explore our comprehensive list of wellness programs,
                  therapeutic massages, and holistic healing packages.
                </p>
              </motion.div>

              {/* Our Exclusive Packages Section */}
              <div className="mx-auto mb-16 max-w-7xl min-[2500px]:max-w-[1400px]">
                <div className="bg-brand-cream/30 border-brand-gold/20 relative overflow-hidden rounded-3xl border p-6 shadow-sm sm:p-8 md:p-10">
                  <div className="bg-brand-gold/5 absolute top-0 right-0 h-64 w-64 translate-x-1/3 -translate-y-1/2 rounded-full blur-3xl"></div>
                  <div className="bg-brand-primary/5 absolute bottom-0 left-0 h-48 w-48 -translate-x-1/3 translate-y-1/2 rounded-full blur-3xl"></div>

                  <div className="relative z-10 flex flex-col items-center justify-between gap-10 lg:flex-row">
                    <div className="w-full lg:w-1/2">
                      <span className="text-brand-gold mb-3 block text-sm font-semibold tracking-widest uppercase">
                        Our Signature Care
                      </span>
                      <h3 className="font-heading text-brand-primary mb-6 text-2xl font-bold md:text-3xl">
                        Experience our Exclusive Holistic Packages
                      </h3>

                      <ul className="space-y-4">
                        {[
                          "Doctors consultation",
                          "Ayurveda therapies",
                          "Dietary Plans",
                          "Lifestyle modification advices",
                        ].map((feature, i) => (
                          <li
                            key={i}
                            className="group flex cursor-default items-center gap-3"
                          >
                            <div className="bg-brand-primary/5 group-hover:bg-brand-primary flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                              <svg
                                className="text-brand-primary group-hover:text-brand-gold h-4 w-4 transition-colors duration-300"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </div>
                            <span className="group-hover:text-brand-primary font-medium text-gray-800 transition-colors duration-300">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid w-full grid-cols-2 gap-4 lg:w-1/2">
                      {[
                        {
                          title: "Bronze",
                          duration: "7 Days",
                          color: "from-[#CD7F32]/10 to-[#CD7F32]/5",
                          border: "border-[#CD7F32]/30",
                          text: "text-[#B87333]",
                        },
                        {
                          title: "Silver",
                          duration: "14 Days",
                          color: "from-[#E8E8E8]/50 to-transparent",
                          border: "border-[#C0C0C0]/50",
                          text: "text-[#808080]",
                        },
                        {
                          title: "Gold",
                          duration: "21 Days",
                          color: "from-[#FFD700]/10 to-[#FFD700]/5",
                          border: "border-[#FFD700]/30",
                          text: "text-[#D4AF37]",
                        },
                        {
                          title: "Platinum",
                          duration: "28 Days",
                          color: "from-[#E5E4E2]/20 to-[#E5E4E2]/5",
                          border: "border-[#E5E4E2]/50",
                          text: "text-[#7B7C7D]",
                        },
                      ].map((pkg, i) => (
                        <div
                          key={i}
                          className={`bg-gradient-to-br ${pkg.color} ${pkg.border} flex flex-col items-center justify-center rounded-2xl border p-5 text-center shadow-sm transition-transform duration-300 hover:scale-105`}
                        >
                          <span
                            className={`mb-1 text-sm font-semibold tracking-wider uppercase ${pkg.text}`}
                          >
                            {pkg.title}
                          </span>
                          <span className="font-heading text-xl font-bold text-gray-900">
                            {pkg.duration}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Featured Treatments (Most Wanted) */}
              <div className="mb-12">
                <h3
                  id="featured-treatments-mobile"
                  className="font-heading text-brand-primary mb-8 scroll-mt-24 text-center text-2xl font-bold md:text-3xl"
                >
                  Featured Treatments
                </h3>
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 min-[2500px]:max-w-[1400px] min-[2500px]:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                  {servicesData
                    .filter((s) =>
                      [
                        "ayr-abhyangam",
                        "ayr-shirodhara",
                        "ayr-njavara",
                        "ayr-pizhichil",
                        "ayr-nasya",
                        "facial-herbal",
                      ].includes(s.id)
                    )
                    .map((service, idx) => {
                      const isNavy = idx % 2 === 0;
                      return (
                        <motion.div
                          key={service.id}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ duration: 0.6, delay: idx * 0.1 }}
                          className={
                            !showAllFeatured && idx >= 3
                              ? "hidden sm:block"
                              : "block"
                          }
                        >
                          <div
                            id={`service-${service.id}`}
                            className={`group flex h-full scroll-mt-32 flex-col overflow-hidden rounded-2xl shadow-md transition-shadow hover:shadow-lg ${
                              isNavy
                                ? "bg-[#1F2A44]"
                                : "border border-gray-100 bg-white"
                            }`}
                          >
                            <div className="relative h-48 w-full shrink-0 overflow-hidden">
                              <Image
                                src={service.image}
                                alt={`${service.title} - Authentic Ayurvedic Treatment in Dubai`}
                                fill
                                className={`object-cover transition-transform duration-700 group-hover:scale-105 ${
                                  service.id === "ayr-njavara"
                                    ? "object-[center_70%]"
                                    : ""
                                }`}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              />
                              <div className="from-brand-dark/80 absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />
                              <div className="glass absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full border border-white/20 px-3 py-1">
                                <Clock className="text-brand-gold h-3.5 w-3.5" />
                                <span className="text-xs font-semibold tracking-wider text-white">
                                  {service.duration}
                                </span>
                              </div>
                            </div>
                            <div className="flex flex-grow flex-col p-5">
                              <span className="text-brand-gold mb-2 block text-[10px] font-semibold tracking-[0.15em] uppercase">
                                {service.category}
                              </span>
                              <h3
                                className={`font-heading mb-2 text-xl leading-tight font-bold ${isNavy ? "text-white" : "text-[#1F2A44]"}`}
                              >
                                {service.title}
                              </h3>
                              <p
                                className={`mt-1 mb-6 line-clamp-3 text-sm leading-relaxed ${isNavy ? "text-gray-300" : "text-[#1F2A44]/80"}`}
                              >
                                {service.description}
                              </p>
                              <div className="border-brand-gold/20 mt-auto border-t pt-4">
                                <PrimaryButton
                                  onClick={() =>
                                    openWhatsApp({ treatment: service.title })
                                  }
                                  icon={<ArrowRight className="h-4 w-4" />}
                                  className={`w-full py-3 text-sm ${
                                    isNavy
                                      ? "text-brand-primary border-transparent bg-white shadow-none hover:bg-white/90"
                                      : "shadow-none"
                                  }`}
                                >
                                  Book Now
                                </PrimaryButton>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                </div>

                {/* Mobile Toggle Button */}
                <div className="relative z-10 mt-8 flex justify-center sm:hidden">
                  <PrimaryButton
                    onClick={() => {
                      if (showAllFeatured) {
                        document
                          .getElementById("featured-treatments-mobile")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }
                      setShowAllFeatured(!showAllFeatured);
                    }}
                    className="w-full max-w-[200px] border-transparent bg-[#1F2A44] px-8 py-3 text-white shadow-none hover:bg-[#1F2A44]/90"
                  >
                    {showAllFeatured ? "Show Less" : "Show More"}
                  </PrimaryButton>
                </div>
              </div>

              {/* Comprehensive Treatments List (Accordion Style) */}
              <div className="mx-auto mt-20 max-w-4xl min-[2500px]:max-w-[1200px]">
                <h3 className="font-heading text-brand-primary mb-8 text-center text-2xl font-bold md:text-3xl">
                  Explore All Offerings
                </h3>
                <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
                  {Array.from(new Set(servicesData.map((s) => s.category)))
                    .filter((c) => c !== "Exclusive Packages")
                    .map((category, idx) => {
                      const categoryServices = servicesData.filter(
                        (s) =>
                          s.category === category &&
                          ![
                            "ayr-abhyangam",
                            "ayr-shirodhara",
                            "ayr-njavara",
                            "well-deep",
                            "facial-herbal",
                          ].includes(s.id)
                      );

                      if (categoryServices.length === 0) return null;

                      const isOpen = openCategory === category;

                      return (
                        <div
                          key={idx}
                          className="border-b border-gray-100 last:border-b-0"
                        >
                          <button
                            onClick={() =>
                              setOpenCategory(isOpen ? null : category)
                            }
                            className={`flex w-full items-center justify-between px-6 py-5 text-left transition-colors duration-300 ${isOpen ? "bg-[#F4F6F9]" : "hover:bg-[#F8F9FB]"}`}
                          >
                            <h4
                              className={`font-heading text-lg font-bold md:text-xl ${isOpen ? "text-brand-primary" : "text-gray-700"}`}
                            >
                              {category}{" "}
                              <span className="ml-2 text-sm font-normal text-gray-400">
                                ({categoryServices.length})
                              </span>
                            </h4>
                            <ChevronDown
                              className={`text-brand-primary h-5 w-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                            />
                          </button>

                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden bg-white"
                              >
                                <div className="divide-y divide-gray-50 px-6 pt-2 pb-6">
                                  {categoryServices.map((service, sIdx) => (
                                    <div
                                      key={sIdx}
                                      className="group flex flex-col justify-between gap-4 py-4 transition-colors duration-300 sm:flex-row sm:items-center sm:py-5 lg:-mx-4 lg:rounded-xl lg:px-4 lg:hover:bg-gray-50"
                                    >
                                      <div className="flex-1">
                                        <div className="mb-2 flex flex-wrap items-center gap-3">
                                          <h5 className="group-hover:text-brand-gold text-base font-bold text-[#1F2A44] transition-colors md:text-lg">
                                            {service.title}
                                          </h5>
                                          <span className="text-brand-primary bg-brand-primary/5 flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase">
                                            <Clock className="h-3 w-3" />{" "}
                                            {service.duration}
                                          </span>
                                        </div>
                                        <p className="max-w-3xl text-sm leading-relaxed text-gray-500 sm:text-base">
                                          {service.description}
                                        </p>
                                      </div>
                                      <button
                                        onClick={() =>
                                          openWhatsApp({
                                            treatment: service.title,
                                          })
                                        }
                                        className="bg-brand-primary hover:bg-brand-gold self-start rounded-full px-6 py-2.5 text-sm font-semibold whitespace-nowrap text-white shadow-sm transition-colors duration-300 hover:text-white sm:self-center"
                                      >
                                        Book Session
                                      </button>
                                    </div>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                </div>
              </div>
            </Container>
          </section>
          {/* ── Who Needs Our Therapies? (Advantages) ───────────── */}
          <section className="bg-brand-cream relative pt-16 pb-24">
            <Container className="relative z-10 mx-auto max-w-5xl min-[2500px]:max-w-[1400px]">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-16 text-center"
              >
                <span className="text-brand-gold mb-4 block text-[10px] font-semibold tracking-[0.15em] uppercase">
                  Tailored For You
                </span>
                <h2 className="font-heading text-brand-primary mb-6 text-3xl font-bold md:text-4xl lg:text-5xl 2xl:text-6xl">
                  Which Therapy is{" "}
                  <span className="text-brand-gold">Right For You?</span>
                </h2>
                <p className="text-brand-grey mx-auto max-w-2xl text-base leading-relaxed font-light">
                  Our Ayurvedic therapies are customized for specific wellness
                  needs. Discover the advantages and find the perfect treatment
                  category for your lifestyle.
                </p>
              </motion.div>

              <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
                {[
                  {
                    icon: <Flower2 className="h-6 w-6" strokeWidth={1.5} />,
                    title: "Stress & Mental Fatigue",
                    forWhom:
                      "Busy professionals, students, and anyone experiencing chronic stress or sleep issues.",
                    advantages:
                      "Calms the nervous system, restores mental clarity, and deeply relaxes the mind.",
                    therapies: "Ease Your Mind, Stress Management",
                  },
                  {
                    icon: <Droplets className="h-6 w-6" strokeWidth={1.5} />,
                    title: "Detoxification & Healing",
                    forWhom:
                      "Individuals feeling sluggish, recovering from illness, or seeking systemic balance.",
                    advantages:
                      "Flushes out deep-seated toxins (Ama), boosts immunity, and balances Doshas.",
                    therapies: "Detox, Exclusive Packages",
                  },
                  {
                    icon: <Waves className="h-6 w-6" strokeWidth={1.5} />,
                    title: "Physical Tension & Pain",
                    forWhom:
                      "Athletes, office workers with posture issues, or those with chronic body aches.",
                    advantages:
                      "Releases muscle tension, improves circulation, and clears energetic blockages.",
                    therapies: "Deep Tissue, Hotstone, Wellness Treatments",
                  },
                  {
                    icon: <Gem className="h-6 w-6" strokeWidth={1.5} />,
                    title: "Beauty & Anti-Aging",
                    forWhom:
                      "Anyone looking to restore their natural glow, combat aging, or address skin issues.",
                    advantages:
                      "Deeply nourishes skin, reduces signs of aging, and rejuvenates on a cellular level.",
                    therapies: "Our Facials, Skin Care, Body Scrubs",
                  },
                ].map((item, idx) => {
                  const isActive = activeTab === idx;
                  return (
                    <div
                      key={idx}
                      className={`group border-b border-gray-100 transition-all duration-300 last:border-b-0 ${isActive ? "bg-[#F4F6F9]" : "hover:bg-[#F8F9FB]"}`}
                    >
                      <button
                        onClick={() => setActiveTab(isActive ? -1 : idx)}
                        className="flex w-full items-center justify-between px-6 py-6 text-left focus:outline-none md:px-10 md:py-8"
                      >
                        <div className="flex items-center gap-6">
                          <div
                            className={`rounded-full p-3 transition-all duration-500 group-hover:scale-110 ${isActive ? "bg-brand-primary text-white shadow-md" : "bg-brand-cream text-brand-primary"}`}
                          >
                            {item.icon}
                          </div>
                          <h3
                            className={`font-heading text-xl font-bold transition-all duration-300 group-hover:translate-x-2 md:text-2xl ${isActive ? "text-brand-primary" : "text-brand-primary/80"}`}
                          >
                            {item.title}
                          </h3>
                        </div>
                        <div
                          className={`flex-shrink-0 transition-transform duration-500 ${isActive ? "text-brand-primary rotate-45" : "text-brand-primary/40 group-hover:text-brand-primary/70"}`}
                        >
                          <Plus className="h-6 w-6" />
                        </div>
                      </button>

                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pt-0 pb-8 sm:ml-[4.5rem] md:ml-20 md:px-10 md:pb-10">
                              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                                <div className="space-y-2">
                                  <span className="text-brand-primary block text-xs font-semibold tracking-wider uppercase opacity-80">
                                    Target Audience
                                  </span>
                                  <p className="text-sm leading-relaxed text-[#1F2A44]/80">
                                    {item.forWhom}
                                  </p>
                                </div>
                                <div className="space-y-2">
                                  <span className="text-brand-primary block text-xs font-semibold tracking-wider uppercase opacity-80">
                                    Key Advantages
                                  </span>
                                  <p className="text-sm leading-relaxed text-[#1F2A44]/80">
                                    {item.advantages}
                                  </p>
                                </div>
                              </div>
                              <div className="mt-6 border-t border-gray-200 pt-6">
                                <span className="text-brand-primary mb-2 block text-xs font-semibold tracking-wider uppercase opacity-80">
                                  Recommended Therapies
                                </span>
                                <p className="text-brand-primary text-sm font-bold">
                                  {item.therapies}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </Container>
          </section>
        </>
      ) : (
        <HomeopathyContent />
      )}
    </main>
  );
}
