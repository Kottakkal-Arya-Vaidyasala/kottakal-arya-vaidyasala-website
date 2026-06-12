"use client"

import React from "react"
import Container from "@/components/common/Container"
import SectionHeading from "@/components/common/SectionHeading"
import AnimatedReveal from "@/components/common/AnimatedReveal"
import { ShieldCheck, HeartPulse, Sparkles, Building } from "lucide-react"

export default function WhyChooseUs() {
  const cards = [
    {
      title: "Authentic Kerala Heritage",
      description: "Direct legacy of genuine Ayurvedic recipes, medicines, and therapeutic techniques from the heart of Kerala, India.",
      icon: <Sparkles className="w-6 h-6" />,
    },
    {
      title: "Certified Vaidyas (Doctors)",
      description: "Consult with highly trained doctors and licensed practitioners skilled in traditional pulse analysis (Nadi Pariksha).",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      title: "Personalized Wellness Plans",
      description: "We evaluate your physical composition (Prakriti) and current imbalances (Vikriti) to craft customized diet, herbs, and treatments.",
      icon: <HeartPulse className="w-6 h-6" />,
    },
    {
      title: "Premium Clean Facility",
      description: "Enjoy state-of-the-art healing rooms, hygienic environments, and a peaceful atmosphere in Abu Dhabi.",
      icon: <Building className="w-6 h-6" />,
    },
  ]

  return (
    <section className="py-20 bg-white dark:bg-brand-dark/40 relative overflow-hidden">
      {/* Decorative leaf blur background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/5 rounded-full filter blur-[150px] pointer-events-none" />

      <Container>
        <AnimatedReveal direction="up">
          <SectionHeading
            title="A Legacy of Genuine Healing"
            subtitle="Why Choose Us"
            align="center"
          />
        </AnimatedReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, idx) => (
            <AnimatedReveal
              key={card.title}
              direction="up"
              delay={idx * 100}
              className="flex"
            >
              <div className="w-full bg-brand-primary/5 dark:bg-brand-primary/10 rounded-xl p-8 border border-brand-primary/10 hover:border-brand-gold/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group flex flex-col items-start">
                <div className="w-12 h-12 rounded-lg bg-brand-primary/10 dark:bg-brand-primary/20 flex items-center justify-center text-brand-primary dark:text-brand-secondary border border-brand-primary/10 group-hover:bg-brand-primary group-hover:text-white transition-all duration-300 mb-6">
                  {card.icon}
                </div>
                <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-brand-primary dark:group-hover:text-brand-secondary transition-colors duration-200">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
