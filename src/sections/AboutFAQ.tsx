"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Container from "@/components/common/Container";
import { Plus, Minus } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const faqs = [
  {
    question: "What makes Kottakkal Ayurveda different from other wellness centers?",
    answer: "Unlike standard wellness or massage centers that focus mainly on temporary relaxation, we are a fully-fledged Ayurvedic medical facility. Our highly trained doctors from Kerala diagnose the root cause of your discomfort, and our authentic therapies are prescribed specifically for your unique body type (Dosha) to provide deep, clinical-level healing."
  },
  {
    question: "Do I need a consultation before starting a treatment?",
    answer: "Yes, we highly recommend it! A proper consultation allows our Ayurvedic physicians to understand your medical history, lifestyle, and specific health concerns. This ensures we recommend the safest and most effective therapy tailored exactly to your body."
  },
  {
    question: "Are your treatments covered by health insurance?",
    answer: "We accept all major insurance networks on a reimbursement basis. Our front desk team will gladly provide you with a detailed invoice and all the necessary medical reports you need to easily claim the amount back from your insurance provider."
  },
  {
    question: "What kind of conditions can Ayurveda help with?",
    answer: "Ayurveda is incredibly versatile. At our Abu Dhabi center, we see excellent results with chronic back and joint pain, stress, insomnia, digestive issues, and skin conditions. Even if you are perfectly healthy, our authentic detox therapies are wonderful for boosting immunity and maintaining wellness."
  }
];

export default function AboutFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement>(null);
  const faqListRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Title animation
      gsap.fromTo(
        ".faq-title-element",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".faq-title-element",
            start: "top 85%",
          },
        }
      );

      // Staggered list animation
      const cards = gsap.utils.toArray(".faq-card");
      gsap.fromTo(
        cards,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: faqListRef.current,
            start: "top 80%",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-white relative overflow-hidden border-t border-brand-primary/10">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-brand-primary/5 rounded-full filter blur-[100px] md:blur-[150px] pointer-events-none translate-x-1/3 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-brand-sage/20 rounded-full filter blur-[80px] md:blur-[120px] pointer-events-none -translate-x-1/2 translate-y-1/3" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* GSAP Animated Title */}
          <div className="text-center mb-12 md:mb-16">
            <h4 className="faq-title-element text-sm font-bold tracking-widest uppercase text-brand-gold mb-3">
              We're Here To Help
            </h4>
            <h2 className="faq-title-element text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-heading font-bold text-brand-dark mb-6">
              Frequently Asked <span className="gold-text">Questions</span>
            </h2>
            <p className="faq-title-element text-sm md:text-base text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
              Genuine answers about experiencing authentic Ayurvedic healing and wellness at our premium medical center in Abu Dhabi.
            </p>
          </div>

          <div ref={faqListRef} className="space-y-4 md:space-y-5">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`faq-card group border transition-all duration-500 rounded-2xl overflow-hidden cursor-pointer ${
                    isOpen
                      ? "border-brand-primary bg-brand-primary/5 shadow-[0_15px_40px_rgba(31,42,68,0.12)] scale-[1.01]"
                      : "border-brand-primary/20 bg-white hover:border-brand-primary/40 hover:shadow-lg hover:-translate-y-1"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full text-left px-5 py-5 sm:px-6 sm:py-6 md:px-8 md:py-7 flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <h3 className={`font-heading font-bold text-base sm:text-lg md:text-xl transition-colors duration-300 pr-4 ${isOpen ? "text-brand-primary" : "text-brand-dark group-hover:text-brand-primary"}`}>
                      {faq.question}
                    </h3>
                    <div className={`shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-500 ${isOpen ? "bg-brand-gold text-white rotate-180" : "bg-brand-primary/10 text-brand-primary group-hover:bg-brand-primary group-hover:text-white"}`}>
                      {isOpen ? <Minus className="w-4 h-4 sm:w-5 sm:h-5" /> : <Plus className="w-4 h-4 sm:w-5 sm:h-5" />}
                    </div>
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                      >
                        <div className="px-5 pb-6 sm:px-6 sm:pb-7 md:px-8 md:pb-8 pt-0 text-sm sm:text-base text-gray-600 font-light leading-relaxed md:leading-loose">
                          {faq.answer}
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
  );
}
