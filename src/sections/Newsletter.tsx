"use client"

import React, { useState } from "react"
import Container from "@/components/common/Container"
import AnimatedReveal from "@/components/common/AnimatedReveal"
import { subscribeToNewsletter } from "@/services/newsletter"
import { toast } from "sonner"
import { Send, Sparkles, Loader2 } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email.trim()) {
      toast.error("Please enter an email address.")
      return
    }

    setIsSubmitting(true)
    try {
      const response = await subscribeToNewsletter(email)
      if (response.success) {
        toast.success(response.message)
        setEmail("")
      } else {
        toast.error(response.message)
      }
    } catch (err) {
      toast.error("An unexpected error occurred. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-16 bg-brand-primary relative overflow-hidden text-white">
      {/* Decorative vectors */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-gold/20 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-dark/30 rounded-full filter blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <AnimatedReveal direction="down">
            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-brand-gold text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ayurvedic Wellness Tips</span>
            </div>
          </AnimatedReveal>

          <AnimatedReveal direction="up" delay={100}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 tracking-wide">
              Subscribe to Our Wellness Newsletter
            </h2>
            <p className="text-sm md:text-base text-gray-200 mb-8 max-w-xl leading-relaxed">
              Stay informed about holistic healing tips, seasonal Ayurvedic packages, detox recommendations, and special wellness camps in Abu Dhabi.
            </p>
          </AnimatedReveal>

          {/* Form wrapper */}
          <AnimatedReveal direction="up" delay={200} className="w-full max-w-md">
            <form 
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 w-full"
            >
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 px-4 py-3 rounded-md text-sm w-full focus:outline-none focus:border-brand-gold transition-colors duration-300"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-brand-gold hover:bg-brand-gold/90 text-brand-dark font-semibold text-sm px-6 py-3.5 rounded-md flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-300 shrink-0 disabled:opacity-75"
              >
                {isSubmitting ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
                <span>Subscribe</span>
              </button>
            </form>
            <p className="text-[10px] text-white/50 mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </AnimatedReveal>
        </div>
      </Container>
    </section>
  )
}
