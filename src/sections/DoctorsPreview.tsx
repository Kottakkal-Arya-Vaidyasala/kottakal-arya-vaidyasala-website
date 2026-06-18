"use client"

import React from "react"
import { motion } from "framer-motion"
import Container from "@/components/common/Container"
import SectionHeading from "@/components/common/SectionHeading"
import AnimatedReveal from "@/components/common/AnimatedReveal"
import PrimaryButton from "@/components/common/PrimaryButton"
import { Award, Stethoscope, BookOpen, CalendarDays } from "lucide-react"
import { doctors } from "@/data/doctors"
import { useWhatsApp } from "@/hooks/useWhatsApp"

/**
 * ═══════════════════════════════════════════════════
 * Doctors Preview — Editorial Authority Presentation
 * ═══════════════════════════════════════════════════
 * Split-screen editorial layout focusing on authority,
 * credentials, and trust. Navy/Gold palette.
 */
export default function DoctorsPreview() {
  const { openWhatsApp } = useWhatsApp()

  return (
    <section className="py-24 md:py-32 bg-brand-cream relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-brand-gold/[0.04] rounded-full filter blur-[180px] pointer-events-none" />

      <Container>
        <AnimatedReveal direction="up">
          <SectionHeading
            title="Meet Our Expert Physicians"
            subtitle="Doctors & Consultants"
            description="Our physicians combine deep classical training with modern clinical expertise to deliver personalized Ayurvedic healthcare."
            align="center"
          />
        </AnimatedReveal>

        {/* ── Doctors Grid — Editorial Cards ────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {doctors.map((doctor, idx) => (
            <AnimatedReveal
              key={doctor.id}
              direction={idx === 0 ? "right" : "left"}
              delay={idx * 150}
            >
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="bg-white rounded-2xl overflow-hidden border border-brand-primary/8 hover:border-brand-gold/30 transition-all duration-500 editorial-hover h-full flex flex-col"
              >
                {/* Top section — Avatar & Name */}
                <div className="relative bg-gradient-to-br from-brand-primary/[0.06] to-brand-gold/[0.04] px-8 pt-10 pb-8 flex flex-col items-center text-center">
                  {/* Avatar circle with stethoscope */}
                  <div className="relative mb-5">
                    <div className="w-24 h-24 rounded-full bg-brand-primary/10 border-2 border-brand-gold/30 flex items-center justify-center">
                      <Stethoscope className="w-10 h-10 text-brand-gold" />
                    </div>
                    {/* Online indicator */}
                    <div className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-white" />
                  </div>

                  <h3 className="font-heading text-2xl font-bold text-brand-primary">
                    {doctor.name}
                  </h3>
                  <p className="text-sm font-semibold text-brand-gold mt-1">
                    {doctor.title}
                  </p>

                  {/* Credentials badge */}
                  <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20">
                    <BookOpen className="w-3 h-3 text-brand-gold" />
                    <span className="text-[11px] font-semibold text-brand-gold">
                      {doctor.credentials}
                    </span>
                  </div>
                </div>

                {/* Bottom section — Details */}
                <div className="px-8 py-8 flex-1 flex flex-col">
                  {/* Bio */}
                  <p className="text-sm text-brand-grey leading-[1.6] font-light mb-6">
                    {doctor.bio}
                  </p>

                  {/* Specialties */}
                  <div className="mb-6">
                    <span className="text-xs font-semibold text-brand-grey uppercase tracking-wider mb-3 block">
                      Specialties
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {doctor.specialties.map((s) => (
                        <span
                          key={s}
                          className="text-xs px-3 py-1.5 rounded-full bg-brand-primary/[0.06] text-brand-primary font-medium border border-brand-primary/8"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Experience badge */}
                  <div className="flex items-center gap-2 mb-8 mt-auto">
                    <Award className="w-4 h-4 text-brand-gold" />
                    <span className="text-xs font-bold text-brand-primary">
                      {doctor.experience}
                    </span>
                  </div>

                  {/* CTA */}
                  <PrimaryButton
                    className="w-full"
                    icon={<CalendarDays className="w-4 h-4" />}
                    onClick={() => openWhatsApp()}
                  >
                    Request Consultation
                  </PrimaryButton>
                </div>
              </motion.div>
            </AnimatedReveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
