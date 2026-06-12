"use client"

import React from "react"
import Container from "@/components/common/Container"
import SectionHeading from "@/components/common/SectionHeading"
import AnimatedReveal from "@/components/common/AnimatedReveal"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, Heart } from "lucide-react"

export default function TestimonialsPreview() {
  const reviews = [
    {
      name: "Sarah M.",
      location: "Abu Dhabi",
      rating: 5,
      treatment: "Abhyangam & Spine Care",
      text: "I experienced amazing relief from chronic lower back pain. Dr. Sajitha mapped out a 7-day Abhyangam and herbal oil therapy that worked wonders. The therapist was extremely professional, and the atmosphere was serene.",
    },
    {
      name: "Rajesh K.",
      location: "Khalidiya",
      rating: 5,
      treatment: "Panchakarma Detoxification",
      text: "Extremely professional clinical staff and authentic Ayurvedic oils. I did a 14-day Panchakarma detox program here. The results were incredible - I felt lighter, had improved digestion, and my energy levels surged.",
    },
    {
      name: "Fatima A.",
      location: "Al Reem Island",
      rating: 5,
      treatment: "Stress Management Therapy",
      text: "The Shirodhara treatment was a heavenly experience. It completely quieted my mind and resolved my severe insomnia issues. I highly recommend Kottakkal Arya Vaidyasala for anyone seeking stress relief.",
    },
  ]

  return (
    <section className="py-20 bg-white dark:bg-brand-dark/20 relative overflow-hidden">
      <Container>
        <AnimatedReveal direction="up">
          <SectionHeading
            title="Stories of Restored Vitality"
            subtitle="Patient Testimonials"
            align="center"
          />
        </AnimatedReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <AnimatedReveal
              key={rev.name}
              direction="up"
              delay={idx * 100}
              className="flex"
            >
              <Card className="w-full bg-brand-primary/[0.01] dark:bg-brand-primary/5 border border-brand-primary/10 hover:border-brand-gold/30 transition-all duration-300 p-8 flex flex-col justify-between relative overflow-hidden group">
                {/* Background quote decoration */}
                <Quote className="absolute -top-4 -right-4 w-24 h-24 text-brand-primary/5 group-hover:text-brand-primary/10 transition-colors duration-300" />
                
                <CardContent className="p-0 flex flex-col justify-between h-full gap-6">
                  {/* Rating Stars */}
                  <div className="flex gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4.5 h-4.5 fill-brand-gold text-brand-gold" />
                    ))}
                  </div>

                  {/* Feedback text */}
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed italic relative z-10">
                    "{rev.text}"
                  </p>

                  {/* Reviewer Details */}
                  <div className="flex items-center gap-3 border-t border-brand-primary/10 pt-4 mt-auto">
                    <div className="w-9 h-9 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                      <Heart className="w-4 h-4 text-brand-gold fill-brand-gold/30" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="font-heading text-sm font-bold text-gray-900 dark:text-gray-100">
                        {rev.name}
                      </span>
                      <span className="text-[10px] text-gray-400">
                        {rev.location} • <span className="text-brand-primary dark:text-brand-secondary font-semibold">{rev.treatment}</span>
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedReveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
