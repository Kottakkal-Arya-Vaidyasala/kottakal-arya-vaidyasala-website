"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/common/Container";
import AnimatedReveal from "@/components/common/AnimatedReveal";
import PrimaryButton from "@/components/common/PrimaryButton";
import { CalendarDays, MessageCircle } from "lucide-react";
import { useWhatsApp } from "@/hooks/useWhatsApp";

/**
 * ═══════════════════════════════════════════════════
 * Consultation CTA — Full-Width Cinematic Banner
 * ═══════════════════════════════════════════════════
 * Large heading with background image, navy gradient overlay,
 * and two prominent CTAs.
 */
export default function ConsultationCTA() {
  const { openWhatsApp } = useWhatsApp();

  const scrollToContact = () => {
    const el = document.getElementById("contact-cta");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-white">
      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedReveal direction="up" delay={100}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl xl:text-[3.5rem] font-heading font-bold text-brand-primary leading-[1.12] mb-6">
              Your Path to <span className="gold-text">Holistic Wellness</span>{" "}
              Starts Here
            </h2>
          </AnimatedReveal>

          <AnimatedReveal direction="up" delay={200}>
            <p className="text-base md:text-lg text-brand-grey mb-10 max-w-xl mx-auto leading-[1.6] font-light">
              Schedule a personalized consultation with our expert Ayurvedic
              physicians and take the first step towards natural, lasting
              health.
            </p>
          </AnimatedReveal>

          <AnimatedReveal direction="up" delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <PrimaryButton
                icon={<CalendarDays className="w-4 h-4" />}
                onClick={scrollToContact}
              >
                Book Consultation
              </PrimaryButton>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => openWhatsApp()}
                className="flex items-center gap-2.5 px-7 py-4 rounded-md bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366] text-sm font-semibold hover:bg-[#25D366]/25 transition-all duration-300"
              >
                <MessageCircle className="w-4.5 h-4.5 fill-current" />
                <span>WhatsApp Us Directly</span>
              </motion.button>
            </div>
          </AnimatedReveal>
        </div>
      </Container>
    </section>
  );
}
