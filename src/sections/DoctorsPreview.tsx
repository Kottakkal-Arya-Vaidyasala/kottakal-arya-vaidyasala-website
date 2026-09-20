"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import AnimatedReveal from "@/components/common/AnimatedReveal";
import PrimaryButton from "@/components/common/PrimaryButton";
import { Award, Stethoscope, BookOpen, CalendarDays } from "lucide-react";
import { doctors } from "@/data/doctors";
import { useWhatsApp } from "@/hooks/useWhatsApp";

/**
 * ═══════════════════════════════════════════════════
 * Doctors Preview — Editorial Authority Presentation
 * ═══════════════════════════════════════════════════
 * Split-screen editorial layout focusing on authority,
 * credentials, and trust. Navy/Gold palette.
 */
export default function DoctorsPreview() {
  const { openWhatsApp } = useWhatsApp();

  return (
    <section className="bg-brand-cream relative overflow-hidden py-24 md:py-32">
      {/* Subtle background */}
      <div className="bg-brand-gold/[0.04] pointer-events-none absolute top-0 left-0 h-[400px] w-[400px] rounded-full blur-[180px] filter" />

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
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 lg:grid-cols-2">
          {doctors.map((doctor, idx) => (
            <AnimatedReveal
              key={doctor.id}
              direction={idx === 0 ? "right" : "left"}
              delay={idx * 150}
            >
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="border-brand-primary/8 hover:border-brand-gold/30 editorial-hover flex h-full flex-col overflow-hidden rounded-2xl border bg-white transition-all duration-500"
              >
                {/* Top section — Avatar & Name */}
                <div className="from-brand-primary/[0.06] to-brand-gold/[0.04] relative flex flex-col items-center bg-gradient-to-br px-8 pt-10 pb-8 text-center">
                  {/* Avatar circle with stethoscope */}
                  <div className="relative mb-5">
                    <div className="bg-brand-primary/10 border-brand-gold/30 flex h-24 w-24 items-center justify-center rounded-full border-2">
                      <Stethoscope className="text-brand-gold h-10 w-10" />
                    </div>
                    {/* Online indicator */}
                    <div className="absolute right-1 bottom-1 h-5 w-5 rounded-full border-2 border-white bg-emerald-500" />
                  </div>

                  <h3 className="font-heading text-brand-primary text-2xl font-bold">
                    {doctor.name}
                  </h3>
                  <p className="text-brand-gold mt-1 text-sm font-semibold">
                    {doctor.title}
                  </p>

                  {/* Credentials badge */}
                  <div className="bg-brand-gold/10 border-brand-gold/20 mt-3 inline-flex items-center gap-1.5 rounded-full border px-3 py-1">
                    <BookOpen className="text-brand-gold h-3 w-3" />
                    <span className="text-brand-gold text-[11px] font-semibold">
                      {doctor.credentials}
                    </span>
                  </div>
                </div>

                {/* Bottom section — Details */}
                <div className="flex flex-1 flex-col px-8 py-8">
                  {/* Bio */}
                  <p className="text-brand-grey mb-6 text-sm leading-[1.6] font-light">
                    {doctor.bio}
                  </p>

                  {/* Specialties */}
                  <div className="mb-6">
                    <span className="text-brand-grey mb-3 block text-xs font-semibold tracking-wider uppercase">
                      Specialties
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {doctor.specialties.map((s) => (
                        <span
                          key={s}
                          className="bg-brand-primary/[0.06] text-brand-primary border-brand-primary/8 rounded-full border px-3 py-1.5 text-xs font-medium"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Experience badge */}
                  <div className="mt-auto mb-8 flex items-center gap-2">
                    <Award className="text-brand-gold h-4 w-4" />
                    <span className="text-brand-primary text-xs font-bold">
                      {doctor.experience}
                    </span>
                  </div>

                  {/* CTA */}
                  <PrimaryButton
                    className="w-full"
                    icon={<CalendarDays className="h-4 w-4" />}
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
  );
}
