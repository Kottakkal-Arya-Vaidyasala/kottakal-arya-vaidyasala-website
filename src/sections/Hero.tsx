"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import Container from "@/components/common/Container"
import PrimaryButton from "@/components/common/PrimaryButton"
import SecondaryButton from "@/components/common/SecondaryButton"
import { Calendar, Compass, MessageCircle, ShieldCheck, Star, Award } from "lucide-react"
import { siteConfig } from "@/data/site"
import { useWhatsApp } from "@/hooks/useWhatsApp"

/**
 * ═══════════════════════════════════════════════════
 * Hero Section — Cinematic Split Layout
 * ═══════════════════════════════════════════════════
 * Full-viewport hero with editorial typography on the left
 * and parallax imagery with floating trust badges on the right.
 * Features word-by-word stagger animation and premium grain overlay.
 */
export default function Hero() {
  const { openWhatsApp } = useWhatsApp()

  const scrollToContact = () => {
    const el = document.getElementById("contact-cta")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToTreatments = () => {
    const el = document.getElementById("featured-treatments")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  /* Stagger animation config */
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: 0.3 },
    },
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] as const },
    },
  }

  const fadeLeft = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: [0.23, 1, 0.32, 1] as const, delay: 0.5 },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center hero-gradient text-white overflow-hidden grain-overlay">
      {/* ── Decorative Background Elements ────────── */}
      <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-brand-primary/20 rounded-full filter blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-60 -left-40 w-[500px] h-[500px] bg-brand-gold/10 rounded-full filter blur-[140px] pointer-events-none" />

      {/* Diagonal gold accent line */}
      <div className="absolute top-0 right-[45%] w-[1px] h-full bg-gradient-to-b from-transparent via-brand-gold/15 to-transparent pointer-events-none hidden lg:block" />

      {/* Bottom gold divider */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

      <Container className="relative z-10 py-24 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[85vh]">
          {/* ── Left: Editorial Typography Column (7/12) ── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            {/* Eyebrow badge */}
            <motion.div variants={fadeUp}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-gold text-brand-gold text-xs font-semibold uppercase tracking-[0.15em] mb-8">
                <Award className="w-3.5 h-3.5" />
                <span>{siteConfig.tagline}</span>
              </div>
            </motion.div>

            {/* Main heading — large editorial typography */}
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[5rem] font-bold font-heading leading-[1.08] mb-8 tracking-wide"
            >
              Restore Balance
              <br />
              to Your{" "}
              <span className="italic font-serif gold-text">
                Body, Mind,
              </span>
              <br />
              & Soul
            </motion.h1>

            {/* Sub-description */}
            <motion.p
              variants={fadeUp}
              className="text-base md:text-lg text-gray-300/90 mb-10 max-w-xl leading-[1.75] font-light"
            >
              Discover time-tested Kerala Ayurvedic therapies tailored to heal
              ailments and rejuvenate your well-being at Abu Dhabi&apos;s premier
              Ayurvedic Medical Center.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
            >
              <PrimaryButton
                icon={<Calendar className="w-4 h-4" />}
                iconPosition="right"
                onClick={() => openWhatsApp()}
              >
                Book Consultation
              </PrimaryButton>
              <SecondaryButton
                icon={<Compass className="w-4 h-4" />}
                iconPosition="right"
                className="border-white/30 text-white hover:bg-white hover:text-brand-dark hover:border-white"
                onClick={scrollToTreatments}
              >
                Explore Treatments
              </SecondaryButton>
            </motion.div>

            {/* Trust indicators row */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-6 text-xs text-gray-400"
            >
              {[
                { icon: <Award className="w-4 h-4 text-brand-gold" />, text: "100+ Years Heritage" },
                { icon: <ShieldCheck className="w-4 h-4 text-brand-gold" />, text: "Licensed in UAE" },
                { icon: <Star className="w-4 h-4 text-brand-gold fill-brand-gold" />, text: "4.9★ Google Rating" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-1.5">
                  {item.icon}
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Hero Image with Floating Elements (5/12) ── */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 flex justify-center relative"
          >
            {/* Main image */}
            <div className="relative w-full max-w-lg">
              {/* Decorative gold frame corners */}
              <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-brand-gold/40 rounded-tl-xl z-10" />
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-brand-gold/40 rounded-br-xl z-10" />

              {/* Image container */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
                <Image
                  src="/images/hero/hero-main.png"
                  alt="Luxury Ayurvedic treatment room at Kottakkal Arya Vaidyasala"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 via-transparent to-brand-dark/10" />
              </div>

              {/* Floating trust badge — bottom left */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.7 }}
                className="absolute -bottom-5 -left-5 glass rounded-xl px-5 py-3.5 shadow-xl z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center">
                    <Star className="w-5 h-5 text-brand-gold fill-brand-gold" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">5,000+</div>
                    <div className="text-[10px] text-gray-400 font-medium">Patients Healed</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating badge — top right */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.7 }}
                className="absolute -top-4 -right-4 glass rounded-xl px-4 py-3 shadow-xl z-20"
              >
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-brand-gold" />
                  <div>
                    <div className="text-xs font-bold text-white">DHA Licensed</div>
                    <div className="text-[10px] text-gray-400">Abu Dhabi, UAE</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
