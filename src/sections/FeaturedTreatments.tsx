"use client"

import React from "react"
import Link from "next/link"
import Container from "@/components/common/Container"
import SectionHeading from "@/components/common/SectionHeading"
import AnimatedReveal from "@/components/common/AnimatedReveal"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Flame, Activity, Flower } from "lucide-react"

export default function FeaturedTreatments() {
  const treatments = [
    {
      title: "Panchakarma",
      subtitle: "Full Body Detoxification",
      description: "A comprehensive five-step purificatory therapy aimed at removing deep-seated toxins, restoring physiological balance, and strengthening immunity.",
      benefits: ["Expels accumulated toxins", "Improves metabolism", "Slows aging process"],
      icon: <Flower className="w-5 h-5 text-brand-gold" />,
    },
    {
      title: "Abhyangam",
      subtitle: "Warm Herbal Oil Massage",
      description: "A full-body massage using individualized warm medicated oils. It is highly beneficial for joints, muscle stiffness, sleep patterns, and circulation.",
      benefits: ["Relieves body aches", "Nourishes skin layers", "Improves sleep quality"],
      icon: <Activity className="w-5 h-5 text-brand-gold" />,
    },
    {
      title: "Shirodhara",
      subtitle: "Continuous Oil Stream Therapy",
      description: "A deeply relaxing therapy where a continuous, rhythmic stream of warm herbal oil is poured onto the forehead, targeting the nervous system.",
      benefits: ["Reduces anxiety & stress", "Combats insomnia", "Relieves headaches"],
      icon: <Flame className="w-5 h-5 text-brand-gold" />,
    },
  ]

  return (
    <section id="featured-treatments" className="py-20 bg-white dark:bg-brand-dark/20 relative">
      <Container>
        <AnimatedReveal direction="up">
          <SectionHeading
            title="Our Signature Ayurvedic Therapies"
            subtitle="Featured Treatments"
            align="center"
          />
        </AnimatedReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {treatments.map((t, idx) => (
            <AnimatedReveal
              key={t.title}
              direction="up"
              delay={idx * 100}
              className="flex"
            >
              <Card className="w-full bg-brand-primary/[0.02] dark:bg-brand-primary/5 border border-brand-primary/10 hover:border-brand-gold/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group flex flex-col justify-between">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center border border-brand-gold/30">
                      {t.icon}
                    </div>
                    <span className="text-[10px] font-bold tracking-widest text-brand-gold uppercase bg-brand-primary/5 px-2 py-0.5 rounded border border-brand-gold/10">
                      Signature
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-brand-dark dark:text-white leading-tight">
                    {t.title}
                  </h3>
                  <span className="text-xs font-semibold text-brand-primary dark:text-brand-secondary">
                    {t.subtitle}
                  </span>
                </CardHeader>
                
                <CardContent className="pb-6 flex-grow flex flex-col justify-between gap-6">
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t.description}
                  </p>
                  
                  {/* Key Benefits Checklist */}
                  <ul className="flex flex-col gap-2 border-t border-brand-primary/10 pt-4">
                    {t.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300">
                        <Check className="w-4 h-4 text-brand-primary dark:text-brand-secondary shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter className="pt-0 pb-6">
                  <Link href="/treatments" className="w-full">
                    <Button 
                      variant="outline" 
                      className="w-full border-brand-primary/20 text-brand-primary dark:text-brand-secondary hover:bg-brand-primary hover:text-white hover:border-brand-primary py-5 text-xs font-semibold transition-all duration-300"
                    >
                      Learn More & Booking Options
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </AnimatedReveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <AnimatedReveal direction="up" delay={300}>
            <Link href="/treatments">
              <Button className="bg-brand-primary hover:bg-brand-dark text-white px-8 py-5 h-auto text-sm font-semibold rounded-md border border-brand-primary hover:border-brand-gold/30 transition-all duration-300 shadow-md">
                View All Treatments
              </Button>
            </Link>
          </AnimatedReveal>
        </div>
      </Container>
    </section>
  )
}
