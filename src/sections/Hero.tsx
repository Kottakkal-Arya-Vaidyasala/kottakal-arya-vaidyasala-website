"use client"

import React from "react"
import Container from "@/components/common/Container"
import PrimaryButton from "@/components/common/PrimaryButton"
import SecondaryButton from "@/components/common/SecondaryButton"
import AnimatedReveal from "@/components/common/AnimatedReveal"
import { Calendar, Compass, Sparkles } from "lucide-react"

export default function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-cta")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-[90vh] flex items-center bg-brand-dark text-white overflow-hidden py-20">
      {/* Decorative Traditional Accents & Glows */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#C8A96B_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-brand-primary/20 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-brand-gold/15 rounded-full filter blur-[120px] pointer-events-none" />

      {/* Gold aesthetic border line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <AnimatedReveal direction="down" delay={100}>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-primary/20 border border-brand-gold/30 text-brand-gold text-xs font-semibold uppercase tracking-wider mb-6">
                <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
                <span>Authentic Kerala Ayurveda in Abu Dhabi</span>
              </div>
            </AnimatedReveal>

            <AnimatedReveal direction="up" delay={200}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading leading-[1.1] mb-6 tracking-wide">
                Restore Balance to Your <span className="text-brand-gold font-serif italic">Body, Mind,</span> & Soul
              </h1>
            </AnimatedReveal>

            <AnimatedReveal direction="up" delay={300}>
              <p className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
                Welcome to Kottakkal Arya Vaidyasala Ayurvedic Medical Center. Discover time-tested Kerala Ayurvedic therapies tailored to heal alignments and rejuvenate your well-being.
              </p>
            </AnimatedReveal>

            <AnimatedReveal direction="up" delay={400}>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <PrimaryButton 
                  icon={<Calendar className="w-4.5 h-4.5" />} 
                  iconPosition="right"
                  onClick={scrollToContact}
                >
                  Book Consultation
                </PrimaryButton>
                <SecondaryButton 
                  icon={<Compass className="w-4.5 h-4.5" />}
                  iconPosition="right"
                  onClick={() => {
                    const treatmentsSec = document.getElementById("featured-treatments")
                    if (treatmentsSec) {
                      treatmentsSec.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  Explore Treatments
                </SecondaryButton>
              </div>
            </AnimatedReveal>
          </div>

          {/* Right Placeholder Image Frame Column */}
          <div className="lg:col-span-5 flex justify-center">
            <AnimatedReveal direction="left" delay={500} className="w-full max-w-md">
              <div className="relative aspect-square md:aspect-[4/5] w-full rounded-2xl overflow-hidden border-2 border-brand-gold/30 shadow-2xl p-2 bg-brand-primary/10">
                {/* Traditional frame aesthetic */}
                <div className="absolute inset-4 rounded-xl border border-brand-gold/20 flex flex-col items-center justify-center bg-brand-dark/40 backdrop-blur-sm text-center p-6">
                  <div className="w-16 h-16 rounded-full bg-brand-primary/20 border border-brand-gold/35 flex items-center justify-center mb-4 text-brand-gold">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <span className="text-sm font-semibold tracking-widest text-brand-gold uppercase mb-1">
                    Kottakkal Arya Vaidyasala
                  </span>
                  <h3 className="font-heading text-xl font-bold mb-2">Ayurvedic Sanctuary</h3>
                  <p className="text-xs text-gray-300 max-w-xs leading-relaxed">
                    Premium therapeutic environment located in Airport Road, Abu Dhabi. Designed for serene, authentic healthcare healing.
                  </p>
                  
                  {/* Decorative leaves icons */}
                  <div className="mt-6 flex items-center gap-1.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-brand-gold/50" />
                    <div className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
                    <div className="h-1.5 w-1.5 rounded-full bg-brand-gold/50" />
                  </div>
                </div>
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
