"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/common/Container";
import AnimatedReveal from "@/components/common/AnimatedReveal";
import PrimaryButton from "@/components/common/PrimaryButton";
import { ArrowRight, Clock } from "lucide-react";
import { useWhatsApp } from "@/hooks/useWhatsApp";

const servicesData = [
  // Body Scrubs & Wraps
  { id: "scrub-mud", category: "Body Scrubs & Wraps", title: "Aromatic moisturizing mud wrap", duration: "60 min", image: "/images/treatments/abhyangam.png", description: "Deeply hydrate and nourish your skin with our aromatic moisturizing mud wrap." },
  { id: "scrub-herbal", category: "Body Scrubs & Wraps", title: "Herbal Scrub with aromatic massage", duration: "60 min", image: "/images/treatments/panchakarma1.png", description: "Exfoliate and refresh your body with a traditional herbal scrub followed by a soothing massage." },
  
  // Our Facials - Shine Bright
  { id: "facial-herbal", category: "Our Facials - Shine Bright", title: "Herbal Facial", duration: "60 min", image: "/images/treatments/shirodhara.png", description: "Restore your natural glow with our signature herbal facial using authentic Ayurvedic ingredients." },
  { id: "facial-navara", category: "Our Facials - Shine Bright", title: "Navara Facial", duration: "60 min", image: "/images/treatments/njavarakizhi.png", description: "A deeply nourishing facial using traditional Navara rice to rejuvenate and brighten the skin." },
  
  // Ease Your Mind
  { id: "mind-vamasabhyangam", category: "Ease Your Mind", title: "Vamasabhyangam (Back Massage)", duration: "30 min", image: "/images/treatments/pizhichil.png", description: "Relieve tension and stiffness in your back with this targeted, soothing massage therapy." },
  { id: "mind-padabhyangam", category: "Ease Your Mind", title: "Padabhyangam (Foot Reflexology)", duration: "55 min", image: "/images/treatments/elakizhi.png", description: "Relax and restore balance throughout your body with traditional Ayurvedic foot reflexology." },
  { id: "mind-shirobhyangam", category: "Ease Your Mind", title: "Shirobhyangam (Indian Head Massage)", duration: "30 min", image: "/images/treatments/abhyangam.png", description: "A deeply calming head massage that relieves stress, improves sleep, and nourishes the scalp." },
  { id: "mind-mukhabhyangam", category: "Ease Your Mind", title: "Mukhabhyangam (Face Care)", duration: "30 min", image: "/images/treatments/panchakarma1.png", description: "Gentle facial care and massage to relieve facial tension and promote a healthy complexion." },
  
  // Our Exclusive
  { id: "exc-consultation", category: "Our Exclusive", title: "Doctors Consultation", duration: "Varies", image: "/images/treatments/shirodhara.png", description: "Expert Ayurvedic consultation to assess your unique constitution and health needs." },
  { id: "exc-therapies", category: "Our Exclusive", title: "Ayurveda Therapies", duration: "Varies", image: "/images/treatments/njavarakizhi.png", description: "Authentic, customized Ayurvedic therapies administered by experienced practitioners." },
  { id: "exc-dietary", category: "Our Exclusive", title: "Dietary Plans", duration: "Varies", image: "/images/treatments/elakizhi.png", description: "Personalized nutritional guidance based on your specific Dosha and wellness goals." },
  { id: "exc-lifestyle", category: "Our Exclusive", title: "Lifestyle Modification Advices", duration: "Varies", image: "/images/treatments/pizhichil.png", description: "Holistic recommendations for daily routines to maintain long-term balance and health." },
  
  // Packages
  { id: "pkg-bronze", category: "Exclusive Packages", title: "Bronze Package", duration: "7 Days", image: "/images/treatments/abhyangam.png", description: "A foundational 7-day wellness immersion program." },
  { id: "pkg-silver", category: "Exclusive Packages", title: "Silver Package", duration: "14 Days", image: "/images/treatments/panchakarma1.png", description: "A comprehensive 14-day holistic healing and detox program." },
  { id: "pkg-gold", category: "Exclusive Packages", title: "Gold Package", duration: "21 Days", image: "/images/treatments/shirodhara.png", description: "An extensive 21-day program for deep rejuvenation and systemic balance." },
  { id: "pkg-platinum", category: "Exclusive Packages", title: "Platinum Package", duration: "28 Days", image: "/images/treatments/njavarakizhi.png", description: "Our ultimate 28-day transformative Ayurvedic healing journey." },
  
  // Our Programs
  { id: "prog-panchakarma", category: "Our Programs", title: "Panchakarma", duration: "Custom", image: "/images/treatments/elakizhi.png", description: "The ultimate Ayurvedic detoxification and purification therapy." },
  { id: "prog-skin", category: "Our Programs", title: "Skin Care", duration: "Custom", image: "/images/treatments/pizhichil.png", description: "Specialized programs for chronic skin conditions and holistic dermatology." },
  { id: "prog-detox", category: "Our Programs", title: "Detox", duration: "Custom", image: "/images/treatments/abhyangam.png", description: "Programs designed to eliminate accumulated Ama (toxins) from the body." },
  { id: "prog-stress", category: "Our Programs", title: "Stress Management", duration: "Custom", image: "/images/treatments/panchakarma1.png", description: "Holistic approaches to calm the nervous system and manage chronic stress." },
  { id: "prog-rejuvenation", category: "Our Programs", title: "Rejuvenation", duration: "Custom", image: "/images/treatments/shirodhara.png", description: "Rasayana therapies to slow aging, boost immunity, and restore vitality." },
  
  // Pure Care True Healing
  { id: "care-prenatal", category: "Pure Care True Healing", title: "Prenatal & Postnatal Care for Mother", duration: "Custom", image: "/images/treatments/njavarakizhi.png", description: "Specialized nurturing care supporting mothers through pregnancy and postpartum recovery." },
  { id: "care-neonatal", category: "Pure Care True Healing", title: "Neonatal Care for Babies", duration: "Custom", image: "/images/treatments/elakizhi.png", description: "Gentle, traditional Ayurvedic care to support healthy infant development." },
  { id: "care-slimming", category: "Pure Care True Healing", title: "Body Slimming", duration: "Custom", image: "/images/treatments/pizhichil.png", description: "Natural, sustainable Ayurvedic weight management and body contouring therapies." },
  
  // Our Wellness Treatments
  { id: "well-deep", category: "Our Wellness Treatments", title: "Deep Tissue Massage", duration: "Custom", image: "/images/treatments/abhyangam.png", description: "Intensive massage therapy targeting deep muscle layers to release chronic tension." },
  { id: "well-prenatal", category: "Our Wellness Treatments", title: "Prenatal and Postnatal Care", duration: "60 mins", image: "/images/treatments/panchakarma1.png", description: "Soothing 60-minute sessions dedicated to maternal well-being." },
  { id: "well-chakra", category: "Our Wellness Treatments", title: "Chakra Balancing", duration: "Custom", image: "/images/treatments/shirodhara.png", description: "Energy alignment therapies to clear blockages and restore energetic harmony." },
  { id: "well-hotstone", category: "Our Wellness Treatments", title: "Hotstone Massage", duration: "90 min", image: "/images/treatments/njavarakizhi.png", description: "Luxurious massage using heated stones to melt away muscle stiffness and stress." },
  { id: "well-lymphatic", category: "Our Wellness Treatments", title: "Manual Lymphatic Drainage", duration: "60 min", image: "/images/treatments/elakizhi.png", description: "Gentle rhythmic techniques to encourage the natural drainage of the lymph system." },
];

export default function ServicesPage() {
  const { openWhatsApp } = useWhatsApp();
  const [showAll, setShowAll] = useState(false);

  return (
    <main className="flex min-h-screen flex-col bg-brand-cream overflow-hidden">
      {/* ── Header ────────────────────────────────── */}
      <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-black text-white pt-16">
        <Image
          src="/images/clinic/carousel2.png"
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
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-white whitespace-nowrap tracking-wide mb-3"
            >
              Discover Holistic Healing <span className="italic font-serif text-brand-gold">with Ayurveda</span>
            </h1>
          </AnimatedReveal>
          <AnimatedReveal direction="up" delay={200}>
            <p 
              style={{ textShadow: "0px 1px 4px rgba(0, 0, 0, 0.6)" }}
              className="text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-200 font-light tracking-[0.15em] uppercase whitespace-nowrap"
            >
              Restore balance and vitality with time-tested Ayurvedic wisdom.
            </p>
          </AnimatedReveal>
        </Container>
      </section>

      {/* ── Services List (Compact Cards) ───────────── */}
      <section className="py-24 bg-white relative">
        <div className="absolute top-0 right-0 w-full h-full grain-overlay opacity-20 pointer-events-none" />
        <Container className="relative z-10">
          <AnimatedReveal direction="up" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-brand-primary mb-6">
              Our Exclusive <span className="italic font-serif text-brand-gold">Offerings</span>
            </h2>
            <p className="text-lg text-brand-grey max-w-2xl mx-auto font-light">
              Explore our comprehensive list of wellness programs, therapeutic massages, and holistic healing packages.
            </p>
          </AnimatedReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mt-12 max-w-7xl mx-auto">
            {(showAll ? servicesData : servicesData.slice(0, 6)).map((service, idx) => {
              const isNavy = idx % 2 === 0;

              return (
                <AnimatedReveal
                  key={service.id}
                  direction="up"
                  delay={(idx % 6) * 50}
                >
                  <div
                    id={`service-${service.id}`}
                    className={`flex flex-col h-full rounded-2xl shadow-md hover:shadow-lg transition-shadow overflow-hidden group scroll-mt-32 ${
                      isNavy
                        ? "bg-[#1F2A44]"
                        : "bg-white border border-gray-100"
                    }`}
                  >
                    <div className="relative h-40 w-full overflow-hidden shrink-0">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3 glass rounded-full px-2 py-0.5 flex items-center gap-1.5 border border-white/20">
                        <Clock className="w-3 h-3 text-brand-gold" />
                        <span className="text-[10px] font-semibold text-white tracking-wider">
                          {service.duration}
                        </span>
                      </div>
                    </div>
                    <div className="p-4 sm:p-5 flex flex-col flex-grow">
                      <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-brand-gold mb-1.5 block">
                        {service.category}
                      </span>
                      <h3
                        className={`font-heading text-lg font-bold mb-1 leading-tight ${isNavy ? "text-white" : "text-[#1F2A44]"}`}
                      >
                        {service.title}
                      </h3>
                      <p
                        className={`text-xs leading-relaxed mb-4 line-clamp-2 mt-2 ${isNavy ? "text-gray-300" : "text-[#1F2A44]/80"}`}
                      >
                        {service.description}
                      </p>
                      <div className="mt-auto pt-4 border-t border-brand-gold/20">
                        <PrimaryButton
                          onClick={() => openWhatsApp({ treatment: service.title })}
                          icon={<ArrowRight className="w-3.5 h-3.5" />}
                          className={`w-full py-2.5 text-xs ${
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
                </AnimatedReveal>
              );
            })}
          </div>

          {servicesData.length > 6 && (
            <div className="mt-12 flex justify-center relative z-10">
              <PrimaryButton
                onClick={() => setShowAll(!showAll)}
                className="px-8 py-4"
              >
                {showAll ? "Show Less Offerings" : "Show All Offerings"}
              </PrimaryButton>
            </div>
          )}
        </Container>
      </section>
    </main>
  );
}
