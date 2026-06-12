"use client"

import React from "react"
import Container from "@/components/common/Container"
import SectionHeading from "@/components/common/SectionHeading"
import AnimatedReveal from "@/components/common/AnimatedReveal"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Award, Stethoscope, UserCheck } from "lucide-react"

export default function DoctorsPreview() {
  const doctors = [
    {
      name: "Dr. Sajitha Nair",
      title: "Senior Ayurvedic Consultant",
      credentials: "BAMS, MD (Ayurveda)",
      specialty: "Chronic Pain Management, Spine Care, & Rheumatology",
      experience: "15+ Years Clinical Experience",
    },
    {
      name: "Dr. Vineeth Kumar",
      title: "Ayurvedic Physician & Panchakarma Expert",
      credentials: "BAMS",
      specialty: "Detoxification, Lifestyle Disorders, & Stress Therapy",
      experience: "10+ Years Clinical Experience",
    },
  ]

  const handleConsultation = () => {
    const contactSection = document.getElementById("contact-cta")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-20 bg-brand-primary/5 dark:bg-transparent relative overflow-hidden">
      <Container>
        <AnimatedReveal direction="up">
          <SectionHeading
            title="Meet Our Expert Physicians"
            subtitle="Doctors & Consultants"
            align="center"
          />
        </AnimatedReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {doctors.map((doc, idx) => (
            <AnimatedReveal
              key={doc.name}
              direction="up"
              delay={idx * 150}
              className="flex"
            >
              <Card className="w-full bg-white dark:bg-brand-dark border border-brand-primary/10 hover:border-brand-gold/40 transition-all duration-300 hover:shadow-xl group flex flex-col justify-between overflow-hidden">
                <div className="bg-brand-primary/5 dark:bg-brand-primary/10 py-8 px-6 border-b border-brand-primary/5 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-brand-primary/10 border border-brand-gold flex items-center justify-center text-brand-primary">
                    <Stethoscope className="w-10 h-10 text-brand-gold" />
                  </div>
                </div>

                <CardHeader className="text-center pt-6">
                  <h3 className="font-heading text-2xl font-bold text-gray-900 dark:text-gray-100">
                    {doc.name}
                  </h3>
                  <p className="text-sm font-semibold text-brand-primary dark:text-brand-secondary">
                    {doc.title}
                  </p>
                  <p className="text-xs text-gray-500 font-medium">
                    {doc.credentials}
                  </p>
                </CardHeader>

                <CardContent className="px-8 pb-6 flex flex-col gap-4 text-center">
                  <div className="flex flex-col items-center gap-1.5">
                    <Award className="w-4 h-4 text-brand-gold" />
                    <span className="text-xs font-semibold text-gray-800 dark:text-gray-200">Specialty</span>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {doc.specialty}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-center gap-1.5 text-xs font-medium text-brand-primary dark:text-brand-secondary bg-brand-primary/5 py-1.5 px-3 rounded-full border border-brand-primary/10">
                    <UserCheck className="w-3.5 h-3.5" />
                    <span>{doc.experience}</span>
                  </div>
                </CardContent>

                <CardFooter className="pb-6 px-8">
                  <Button 
                    onClick={handleConsultation}
                    className="w-full bg-brand-primary hover:bg-brand-dark text-white border border-brand-primary hover:border-brand-gold/30 transition-all duration-300 py-5 text-xs font-semibold rounded-md"
                  >
                    Request Consultation
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedReveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
