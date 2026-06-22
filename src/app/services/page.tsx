"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/common/Container";
import AnimatedReveal from "@/components/common/AnimatedReveal";
import PrimaryButton from "@/components/common/PrimaryButton";
import { ArrowRight, Clock, Flower2, Droplets, Waves, Gem, ChevronDown, Plus } from "lucide-react";
import { useWhatsApp } from "@/hooks/useWhatsApp";

const servicesData = [
  // Body Scrubs & Wraps
  { id: "scrub-mud", category: "Body Scrubs & Wraps", title: "Aromatic moisturizing mud wrap", duration: "60 min", image: "/images/treatments/abhyangam.png", description: "Deeply hydrate and nourish your skin with our aromatic mud wrap." },
  { id: "scrub-herbal", category: "Body Scrubs & Wraps", title: "Herbal Scrub with aromatic massage", duration: "60 min", image: "/images/treatments/panchakarma1.png", description: "Exfoliate and refresh your body with a traditional herbal scrub." },

  // Our Facials - Shine Bright
  { id: "facial-herbal", category: "Our Facials - Shine Bright", title: "Herbal Facial", duration: "60 min", image: "/images/treatments/shirodhara.png", description: "Restore your natural glow with our signature herbal facial." },
  { id: "facial-navara", category: "Our Facials - Shine Bright", title: "Navara Facial", duration: "60 min", image: "/images/treatments/njavarakizhi.png", description: "A deeply nourishing facial using traditional Navara rice." },

  // Ease Your Mind
  { id: "mind-vamasabhyangam", category: "Ease Your Mind", title: "Vamasabhyangam (back massage)", duration: "30 min", image: "/images/treatments/pizhichil.png", description: "Relieve tension and stiffness in your back with targeted massage therapy." },
  { id: "mind-padabhyangam", category: "Ease Your Mind", title: "Padabhyangam (foot reflexology)", duration: "55 min", image: "/images/treatments/elakizhi.png", description: "Relax and restore balance throughout your body." },
  { id: "mind-shirobhyangam", category: "Ease Your Mind", title: "Shirobhyangam (Indian head massage)", duration: "30 min", image: "/images/treatments/abhyangam.png", description: "A deeply calming head massage that relieves stress and improves sleep." },
  { id: "mind-mukhabhyangam", category: "Ease Your Mind", title: "Mukhabhyangam (Face care)", duration: "30 min", image: "/images/treatments/panchakarma1.png", description: "Gentle facial care and massage to relieve facial tension." },

  // Our Programs
  { id: "prog-panchakarma", category: "Our Programs", title: "Panchakarma", duration: "Custom", image: "/images/treatments/shirodhara.png", description: "The ultimate Ayurvedic detoxification and purification therapy." },
  { id: "prog-skin", category: "Our Programs", title: "Skin Care", duration: "Custom", image: "/images/treatments/njavarakizhi.png", description: "Specialized programs for chronic skin conditions." },
  { id: "prog-detox", category: "Our Programs", title: "Detox", duration: "Custom", image: "/images/treatments/elakizhi.png", description: "Programs designed to eliminate accumulated toxins." },
  { id: "prog-stress", category: "Our Programs", title: "Stress Management", duration: "Custom", image: "/images/treatments/pizhichil.png", description: "Holistic approaches to calm the nervous system." },
  { id: "prog-rejuvenation", category: "Our Programs", title: "Rejuvenation", duration: "Custom", image: "/images/treatments/abhyangam.png", description: "Rasayana therapies to slow aging and boost immunity." },
  { id: "prog-prenatal-mother", category: "Our Programs", title: "Prenatal & Post natal are for Mother", duration: "Custom", image: "/images/treatments/panchakarma1.png", description: "Specialized nurturing care supporting mothers." },
  { id: "prog-neonatal", category: "Our Programs", title: "Neonatal Care for Babies", duration: "Custom", image: "/images/treatments/shirodhara.png", description: "Gentle, traditional Ayurvedic care to support infant development." },
  { id: "prog-slimming", category: "Our Programs", title: "Body Slimming", duration: "Custom", image: "/images/treatments/njavarakizhi.png", description: "Natural, sustainable Ayurvedic weight management." },

  // Ayurveda Therapies
  { id: "ayr-abhyangam", category: "Ayurveda Therapies", title: "Abhyangam", duration: "60 min", image: "/images/treatments/abhyangam.png", description: "Deeply nourishing whole-body warm oil massage." },
  { id: "ayr-marma", category: "Ayurveda Therapies", title: "Marma abhyangam", duration: "60 min", image: "/images/treatments/panchakarma1.png", description: "Specialized massage targeting vital energy points." },
  { id: "ayr-podi", category: "Ayurveda Therapies", title: "Podi Kizhi", duration: "60 min", image: "/images/treatments/elakizhi.png", description: "Warm herbal powder poultice massage for joint and muscle pain." },
  { id: "ayr-avi", category: "Ayurveda Therapies", title: "Avi kizhi (Aromatic herbal pouch)", duration: "60 min", image: "/images/treatments/njavarakizhi.png", description: "Aromatic herbal pouch therapy for deep relaxation." },
  { id: "ayr-navara", category: "Ayurveda Therapies", title: "Navara Kizhi (Rice pouch therapy)", duration: "60 min", image: "/images/treatments/pizhichil.png", description: "Nourishing rice pouch therapy to strengthen muscles." },
  { id: "ayr-udvarthnam", category: "Ayurveda Therapies", title: "Udvarthnam (Herbal powder massage)", duration: "60 min", image: "/images/treatments/abhyangam.png", description: "Invigorating dry herbal powder massage for weight management." },
  { id: "ayr-shirodhara", category: "Ayurveda Therapies", title: "Shirodhara", duration: "60 min", image: "/images/treatments/shirodhara.png", description: "Continuous stream of warm medicated oil on the forehead." },
  { id: "ayr-ksheeradhara", category: "Ayurveda Therapies", title: "Ksheeradhara", duration: "60 min", image: "/images/treatments/panchakarma1.png", description: "Continuous stream of medicated milk over the body." },
  { id: "ayr-kashayadhara", category: "Ayurveda Therapies", title: "Kashayadhara", duration: "60 min", image: "/images/treatments/elakizhi.png", description: "Continuous stream of herbal decoctions over the body." },
  { id: "ayr-pizhichil", category: "Ayurveda Therapies", title: "Pizhichil", duration: "60 min", image: "/images/treatments/pizhichil.png", description: "Luxurious warm oil bath combined with gentle massage." },
  { id: "ayr-prishta", category: "Ayurveda Therapies", title: "Prishta vasti", duration: "60 min", image: "/images/treatments/abhyangam.png", description: "Specialized oil pooling therapy for the entire back." },
  { id: "ayr-kati", category: "Ayurveda Therapies", title: "Kati vasti", duration: "30 min", image: "/images/treatments/njavarakizhi.png", description: "Targeted oil pooling therapy for lower back pain." },
  { id: "ayr-janu", category: "Ayurveda Therapies", title: "Janu vasti", duration: "30 min", image: "/images/treatments/shirodhara.png", description: "Targeted oil pooling therapy for knee joint health." },
  { id: "ayr-greeva", category: "Ayurveda Therapies", title: "Greeva vasti", duration: "30 min", image: "/images/treatments/panchakarma1.png", description: "Targeted oil pooling therapy for neck and cervical spine." },
  { id: "ayr-tharpanam", category: "Ayurveda Therapies", title: "Tharpanam", duration: "45 min", image: "/images/treatments/elakizhi.png", description: "Rejuvenating therapy for the eyes using medicated ghee." },
  { id: "ayr-akshi", category: "Ayurveda Therapies", title: "Akshi dhara", duration: "30 min", image: "/images/treatments/pizhichil.png", description: "Cleansing and cooling continuous pouring of liquids over eyes." },
  { id: "ayr-thalapothichil", category: "Ayurveda Therapies", title: "Thalapothichil", duration: "60 min", image: "/images/treatments/abhyangam.png", description: "Cooling herbal paste applied to the head for stress relief." },
  { id: "ayr-nasya", category: "Ayurveda Therapies", title: "Nasya shodhana", duration: "30 min", image: "/images/treatments/njavarakizhi.png", description: "Nasal administration of medicated oils for sinus health." },
  { id: "ayr-lepam", category: "Ayurveda Therapies", title: "Lepam", duration: "30 min", image: "/images/treatments/shirodhara.png", description: "Application of medicinal herbal paste for localized pain." },
  { id: "ayr-sneha", category: "Ayurveda Therapies", title: "Snehavasthy", duration: "30 min", image: "/images/treatments/panchakarma1.png", description: "Therapeutic oil enema for detoxification and Vata balance." },
  { id: "ayr-shirovasti", category: "Ayurveda Therapies", title: "Shirovasti", duration: "60 min", image: "/images/treatments/elakizhi.png", description: "Warm medicated oil retained on the head using a cap." },

  // Our Wellness Treatments
  { id: "well-deep", category: "Our Wellness Treatments", title: "Deep Tissue Massage", duration: "60 min", image: "/images/treatments/pizhichil.png", description: "Intensive massage therapy targeting deep muscle layers." },
  { id: "well-prenatal", category: "Our Wellness Treatments", title: "Prenatal and Postnatal Care", duration: "Custom", image: "/images/treatments/abhyangam.png", description: "Soothing sessions dedicated to maternal well-being." },
  { id: "well-chakra", category: "Our Wellness Treatments", title: "Chakra balancing Hotstone massage", duration: "90 min", image: "/images/treatments/shirodhara.png", description: "Energy alignment using heated stones to melt away stress." },
  { id: "well-lymphatic", category: "Our Wellness Treatments", title: "Manual lymphatic drainage", duration: "60 min", image: "/images/treatments/njavarakizhi.png", description: "Gentle techniques to encourage lymph system drainage." }
];

export default function ServicesPage() {
  const { openWhatsApp } = useWhatsApp();

  const [visibleCount, setVisibleCount] = useState(6); // Default to 6 for SSR matching desktop
  const [stepSize, setStepSize] = useState(6);
  const [activeTab, setActiveTab] = useState(0);
  const [openCategory, setOpenCategory] = useState<string | null>("Ayurveda Therapies");

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
    <main className="flex min-h-screen flex-col bg-brand-cream overflow-hidden">
      {/* ── Header ────────────────────────────────── */}
      <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-black text-white pt-16">
        <Image
          src="/images/hero/home-carousel2.png"
          alt="Ayurveda Services"
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
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-white whitespace-normal sm:whitespace-nowrap tracking-wide mb-0 px-4 leading-tight"
            >
              Heal naturally.{" "}
              <span className="text-brand-gold">
                Live fully.
              </span>
            </h1>
          </AnimatedReveal>
          <AnimatedReveal direction="up" delay={200}>
            <p
              style={{ textShadow: "0px 1px 4px rgba(0, 0, 0, 0.6)" }}
              className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-200 font-light tracking-[0.15em] uppercase whitespace-normal sm:whitespace-nowrap px-4 leading-relaxed mx-auto text-center"
            >
              Pure Ayurvedic Care.
            </p>
          </AnimatedReveal>
        </Container>
      </section>

      {/* ── Services List (Compact Cards) ───────────── */}
      <section id="offerings" className="pt-12 pb-24 bg-white relative">
        <div className="absolute top-0 right-0 w-full h-full grain-overlay opacity-20 pointer-events-none" />
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-brand-primary mb-6">
              Our Exclusive{" "}
              <span className="text-brand-gold">
                Offerings
              </span>
            </h2>
            <p className="text-lg text-brand-grey max-w-2xl mx-auto font-light">
              Explore our comprehensive list of wellness programs, therapeutic
              massages, and holistic healing packages.
            </p>
          </motion.div>

          
          {/* Our Exclusive Packages Section */}
          <div className="max-w-7xl mx-auto mb-16">
            <div className="bg-brand-cream/30 rounded-3xl p-6 sm:p-8 md:p-10 border border-brand-gold/20 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
              
              <div className="relative z-10 flex flex-col lg:flex-row gap-10 items-center justify-between">
                
                <div className="w-full lg:w-1/2">
                  <span className="text-sm font-semibold tracking-widest uppercase text-brand-gold mb-3 block">Our Signature Care</span>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-brand-primary mb-6">Experience our Exclusive Holistic Packages</h3>
                  
                  <ul className="space-y-4">
                    {["Doctors consultation", "Ayurveda therapies", "Dietary Plans", "Lifestyle modification advices"].map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-brand-primary/5 flex items-center justify-center shrink-0">
                          <svg className="w-4 h-4 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-800 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
                  {[
                    { title: "Bronze", duration: "7 Days", color: "from-[#CD7F32]/10 to-[#CD7F32]/5", border: "border-[#CD7F32]/30", text: "text-[#B87333]" },
                    { title: "Silver", duration: "14 Days", color: "from-[#E8E8E8]/50 to-transparent", border: "border-[#C0C0C0]/50", text: "text-[#808080]" },
                    { title: "Gold", duration: "21 Days", color: "from-[#FFD700]/10 to-[#FFD700]/5", border: "border-[#FFD700]/30", text: "text-[#D4AF37]" },
                    { title: "Platinum", duration: "28 Days", color: "from-[#E5E4E2]/20 to-[#E5E4E2]/5", border: "border-[#E5E4E2]/50", text: "text-[#7B7C7D]" }
                  ].map((pkg, i) => (
                    <div key={i} className={`bg-gradient-to-br ${pkg.color} ${pkg.border} border rounded-2xl p-5 flex flex-col items-center justify-center text-center hover:scale-105 transition-transform duration-300 shadow-sm`}>
                      <span className={`text-sm font-semibold tracking-wider uppercase mb-1 ${pkg.text}`}>{pkg.title}</span>
                      <span className="text-xl font-heading font-bold text-gray-900">{pkg.duration}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>

          
          {/* Featured Treatments (Most Wanted) */}
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-brand-primary mb-8 text-center">Featured Treatments</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 max-w-7xl mx-auto">
              {servicesData.filter(s => ["ayr-abhyangam", "ayr-shirodhara", "prog-panchakarma", "ayr-navara", "well-deep", "facial-herbal"].includes(s.id)).map(
                (service, idx) => {
                  const isNavy = idx % 2 === 0;
                  return (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                    >
                      <div
                        id={`service-${service.id}`}
                        className={`flex flex-col h-full rounded-2xl shadow-md hover:shadow-lg transition-shadow overflow-hidden group scroll-mt-32 ${
                          isNavy
                            ? "bg-[#1F2A44]"
                            : "bg-white border border-gray-100"
                        }`}
                      >
                        <div className="relative h-48 w-full overflow-hidden shrink-0">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
                          <div className="absolute bottom-3 left-3 glass rounded-full px-3 py-1 flex items-center gap-1.5 border border-white/20">
                            <Clock className="w-3.5 h-3.5 text-brand-gold" />
                            <span className="text-xs font-semibold text-white tracking-wider">
                              {service.duration}
                            </span>
                          </div>
                        </div>
                        <div className="p-5 flex flex-col flex-grow">
                          <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-brand-gold mb-2 block">
                            {service.category}
                          </span>
                          <h3
                            className={`font-heading text-xl font-bold mb-2 leading-tight ${isNavy ? "text-white" : "text-[#1F2A44]"}`}
                          >
                            {service.title}
                          </h3>
                          <p
                            className={`text-sm leading-relaxed mb-6 line-clamp-3 mt-1 ${isNavy ? "text-gray-300" : "text-[#1F2A44]/80"}`}
                          >
                            {service.description}
                          </p>
                          <div className="mt-auto pt-4 border-t border-brand-gold/20">
                            <PrimaryButton
                              onClick={() => openWhatsApp({ treatment: service.title })}
                              icon={<ArrowRight className="w-4 h-4" />}
                              className={`w-full py-3 text-sm ${
                                isNavy
                                  ? "bg-white text-brand-primary hover:bg-white/90 border-transparent shadow-none"
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
                }
              )}
            </div>
          </div>

          {/* Comprehensive Treatments List (Accordion Style) */}
          <div className="max-w-4xl mx-auto mt-20">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-brand-primary mb-8 text-center">Explore All Offerings</h3>
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
              {Array.from(new Set(servicesData.map(s => s.category))).filter(c => c !== "Exclusive Packages").map((category, idx) => {
                const categoryServices = servicesData.filter(s => s.category === category && !["ayr-abhyangam", "ayr-shirodhara", "prog-panchakarma", "ayr-navara", "well-deep", "facial-herbal"].includes(s.id));
                
                if (categoryServices.length === 0) return null;

                const isOpen = openCategory === category;

                return (
                  <div key={idx} className="border-b border-gray-100 last:border-b-0">
                    <button
                      onClick={() => setOpenCategory(isOpen ? null : category)}
                      className={`w-full text-left px-6 py-5 flex items-center justify-between transition-colors duration-300 ${isOpen ? 'bg-[#F4F6F9]' : 'hover:bg-[#F8F9FB]'}`}
                    >
                      <h4 className={`font-heading font-bold text-lg md:text-xl ${isOpen ? 'text-brand-primary' : 'text-gray-700'}`}>
                        {category} <span className="text-sm font-normal text-gray-400 ml-2">({categoryServices.length})</span>
                      </h4>
                      <ChevronDown className={`w-5 h-5 text-brand-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
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
                          <div className="px-6 pb-6 pt-2 divide-y divide-gray-50">
                            {categoryServices.map((service, sIdx) => (
                              <div key={sIdx} className="py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group lg:hover:bg-gray-50 lg:rounded-xl lg:px-4 lg:-mx-4 transition-colors duration-300">
                                <div className="flex-1">
                                  <div className="flex flex-wrap items-center gap-3 mb-2">
                                    <h5 className="font-bold text-[#1F2A44] text-base md:text-lg group-hover:text-brand-gold transition-colors">{service.title}</h5>
                                    <span className="text-[10px] font-semibold tracking-wider uppercase text-brand-primary bg-brand-primary/5 px-2 py-0.5 rounded-full flex items-center gap-1">
                                      <Clock className="w-3 h-3" /> {service.duration}
                                    </span>
                                  </div>
                                  <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-3xl">{service.description}</p>
                                </div>
                                <button 
                                  onClick={() => openWhatsApp({ treatment: service.title })}
                                  className="text-sm font-semibold bg-brand-primary text-white hover:bg-brand-gold hover:text-white transition-colors duration-300 px-6 py-2.5 rounded-full whitespace-nowrap self-start sm:self-center shadow-sm"
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
      <section className="pt-16 pb-24 bg-brand-cream relative">
        <Container className="relative z-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-brand-gold mb-4 block">
              Tailored For You
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-primary mb-6">
              Which Therapy is <span className="text-brand-gold">Right For You?</span>
            </h2>
            <p className="text-base text-brand-grey max-w-2xl mx-auto font-light leading-relaxed">
              Our Ayurvedic therapies are customized for specific wellness needs. Discover the advantages and find the perfect treatment category for your lifestyle.
            </p>
          </motion.div>

          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            {[
              {
                icon: <Flower2 className="w-6 h-6" strokeWidth={1.5} />,
                title: "Stress & Mental Fatigue",
                forWhom: "Busy professionals, students, and anyone experiencing chronic stress or sleep issues.",
                advantages: "Calms the nervous system, restores mental clarity, and deeply relaxes the mind.",
                therapies: "Ease Your Mind, Stress Management",
              },
              {
                icon: <Droplets className="w-6 h-6" strokeWidth={1.5} />,
                title: "Detoxification & Healing",
                forWhom: "Individuals feeling sluggish, recovering from illness, or seeking systemic balance.",
                advantages: "Flushes out deep-seated toxins (Ama), boosts immunity, and balances Doshas.",
                therapies: "Panchakarma, Detox, Exclusive Packages",
              },
              {
                icon: <Waves className="w-6 h-6" strokeWidth={1.5} />,
                title: "Physical Tension & Pain",
                forWhom: "Athletes, office workers with posture issues, or those with chronic body aches.",
                advantages: "Releases muscle tension, improves circulation, and clears energetic blockages.",
                therapies: "Deep Tissue, Hotstone, Wellness Treatments",
              },
              {
                icon: <Gem className="w-6 h-6" strokeWidth={1.5} />,
                title: "Beauty & Anti-Aging",
                forWhom: "Anyone looking to restore their natural glow, combat aging, or address skin issues.",
                advantages: "Deeply nourishes skin, reduces signs of aging, and rejuvenates on a cellular level.",
                therapies: "Our Facials, Skin Care, Body Scrubs",
              },
            ].map((item, idx) => {
              const isActive = activeTab === idx;
              return (
                <div 
                  key={idx} 
                  className={`border-b border-gray-100 last:border-b-0 transition-all duration-300 group ${isActive ? 'bg-[#F4F6F9]' : 'hover:bg-[#F8F9FB]'}`}
                >
                  <button
                    onClick={() => setActiveTab(isActive ? -1 : idx)}
                    className="w-full text-left px-6 py-6 md:px-10 md:py-8 flex items-center justify-between focus:outline-none"
                  >
                    <div className="flex items-center gap-6">
                      <div className={`p-3 rounded-full transition-all duration-500 group-hover:scale-110 ${isActive ? 'bg-brand-primary text-white shadow-md' : 'bg-brand-cream text-brand-primary'}`}>
                        {item.icon}
                      </div>
                      <h3 className={`text-xl md:text-2xl font-heading font-bold transition-all duration-300 group-hover:translate-x-2 ${isActive ? 'text-brand-primary' : 'text-brand-primary/80'}`}>
                        {item.title}
                      </h3>
                    </div>
                    <div className={`flex-shrink-0 transition-transform duration-500 ${isActive ? 'rotate-45 text-brand-primary' : 'text-brand-primary/40 group-hover:text-brand-primary/70'}`}>
                      <Plus className="w-6 h-6" />
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
                        <div className="px-6 pb-8 md:px-10 md:pb-10 pt-0 ml-[4.5rem] md:ml-20">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                              <span className="text-xs font-semibold uppercase tracking-wider text-brand-primary block opacity-80">Target Audience</span>
                              <p className="text-[#1F2A44]/80 text-sm leading-relaxed">{item.forWhom}</p>
                            </div>
                            <div className="space-y-2">
                              <span className="text-xs font-semibold uppercase tracking-wider text-brand-primary block opacity-80">Key Advantages</span>
                              <p className="text-[#1F2A44]/80 text-sm leading-relaxed">{item.advantages}</p>
                            </div>
                          </div>
                          <div className="mt-6 pt-6 border-t border-gray-200">
                            <span className="text-xs font-semibold uppercase tracking-wider text-brand-primary block mb-2 opacity-80">Recommended Therapies</span>
                            <p className="text-brand-primary font-bold text-sm">{item.therapies}</p>
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
    </main>
  );
}
