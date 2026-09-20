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
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <AnimatedReveal direction="up" delay={100}>
            <h2 className="font-heading text-brand-primary mb-6 text-3xl leading-[1.12] font-bold md:text-4xl lg:text-5xl xl:text-[3.5rem] 2xl:text-6xl">
              Your Path to <span className="gold-text">Holistic Wellness</span>{" "}
              Starts Here
            </h2>
          </AnimatedReveal>

          <AnimatedReveal direction="up" delay={200}>
            <p className="text-brand-grey mx-auto mb-10 max-w-xl text-base leading-[1.6] font-light md:text-lg">
              Schedule a personalized consultation with our expert Ayurvedic
              physicians and take the first step towards natural, lasting
              health.
            </p>
          </AnimatedReveal>

          <AnimatedReveal direction="up" delay={300}>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <PrimaryButton
                icon={<CalendarDays className="h-4 w-4" />}
                onClick={scrollToContact}
              >
                Book Consultation
              </PrimaryButton>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => openWhatsApp()}
                className="flex items-center gap-2.5 rounded-md border border-[#25D366]/30 bg-[#25D366]/15 px-7 py-4 text-sm font-semibold text-[#25D366] transition-all duration-300 hover:bg-[#25D366]/25"
              >
                <MessageCircle className="h-4.5 w-4.5 fill-current" />
                <span>WhatsApp Us Directly</span>
              </motion.button>
            </div>
          </AnimatedReveal>
        </div>
      </Container>
    </section>
  );
}
