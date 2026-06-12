"use client"

import React from "react"
import Container from "@/components/common/Container"
import PrimaryButton from "@/components/common/PrimaryButton"
import AnimatedReveal from "@/components/common/AnimatedReveal"
import { Phone, Mail, MapPin, CalendarDays, MessageSquare } from "lucide-react"

export default function ContactCTA() {
  const contactNumber = "+971 55 267 1598"
  const whatsappNumber = "971552671598"
  const emailAddress = "kottakkalaryavaidyasalaauh@gmail.com"

  const handleCall = () => {
    window.location.href = `tel:${contactNumber.replace(/\s+/g, "")}`
  }

  return (
    <section id="contact-cta" className="py-20 bg-brand-dark text-white relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1.5px,transparent_1.5px)] [background-size:30px_30px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-brand-primary/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-gold/10 rounded-full filter blur-3xl pointer-events-none" />

      {/* Decorative top divider line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading and Details */}
          <div className="lg:col-span-7 text-left flex flex-col items-start">
            <AnimatedReveal direction="down">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-primary/30 border border-brand-gold/20 text-brand-gold text-xs font-semibold uppercase tracking-wider mb-6">
                <CalendarDays className="w-3.5 h-3.5" />
                <span>Appointments & Consultations</span>
              </div>
            </AnimatedReveal>

            <AnimatedReveal direction="up" delay={100}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-6 tracking-wide leading-tight">
                Begin Your Journey to <span className="text-brand-gold font-serif italic">Holistic Health</span> Today
              </h2>
              <p className="text-sm md:text-base text-gray-300 mb-8 max-w-xl leading-relaxed">
                Consult with our experienced physicians to receive a customized diet, routine, and therapy plan. Contact us to schedule your appointment or inquire about treatments.
              </p>
            </AnimatedReveal>

            {/* Direct Contact Nodes */}
            <AnimatedReveal direction="up" delay={200} className="flex flex-col gap-4 w-full">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/5 hover:border-brand-gold/20 transition-all duration-300">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Our Location</h4>
                  <p className="text-xs text-gray-400 mt-1">Airport Road, Near Al Wahda Mall, Abu Dhabi, UAE</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/5 hover:border-brand-gold/20 transition-all duration-300">
                  <Phone className="w-5 h-5 text-brand-gold shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Call Us Directly</h4>
                    <p className="text-xs text-gray-400 mt-1">{contactNumber}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/5 hover:border-brand-gold/20 transition-all duration-300">
                  <Mail className="w-5 h-5 text-brand-gold shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Email Us</h4>
                    <p className="text-xs text-gray-400 mt-1 truncate max-w-[150px] sm:max-w-none">{emailAddress}</p>
                  </div>
                </div>
              </div>
            </AnimatedReveal>
          </div>

          {/* Right Column: CTA Panel Card Placeholder */}
          <div className="lg:col-span-5 flex justify-center">
            <AnimatedReveal direction="left" delay={300} className="w-full max-w-sm">
              <div className="w-full bg-brand-primary/10 rounded-xl p-8 border border-brand-gold/30 shadow-xl text-center flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-brand-primary/20 border border-brand-gold/40 flex items-center justify-center mb-4 text-brand-gold">
                  <CalendarDays className="w-6 h-6" />
                </div>
                
                <h3 className="font-heading text-xl font-bold text-white mb-2">Book Your Session</h3>
                <p className="text-xs text-gray-300 mb-6 leading-relaxed">
                  Call our front desk or message us directly on WhatsApp to coordinate a convenient time slot with our doctors.
                </p>

                <div className="flex flex-col gap-3 w-full">
                  <PrimaryButton 
                    className="w-full py-3 text-xs" 
                    icon={<Phone className="w-4 h-4" />}
                    onClick={handleCall}
                  >
                    Call Doctor Consult
                  </PrimaryButton>
                  
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 border border-brand-gold text-brand-gold hover:bg-brand-primary hover:text-white hover:border-brand-primary py-3 rounded-md text-xs font-semibold transition-all duration-300 shadow-md"
                  >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    <span>WhatsApp Inquiry</span>
                  </a>
                </div>

                <span className="text-[10px] text-gray-400 mt-4">
                  *We generally respond to text messages within 10 minutes.
                </span>
              </div>
            </AnimatedReveal>
          </div>

        </div>
      </Container>
    </section>
  )
}
