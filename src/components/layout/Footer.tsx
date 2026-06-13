"use client"

import React, { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Loader2 } from "lucide-react"
import { LogoFallback } from "@/components/common/Logo"
import Container from "@/components/common/Container"
import AnimatedReveal from "@/components/common/AnimatedReveal"
import { siteConfig } from "@/data/site"
import { subscribeToNewsletter } from "@/services/newsletter"
import { toast } from "sonner"
import { useWhatsApp } from "@/hooks/useWhatsApp"

/**
 * ═══════════════════════════════════════════════════
 * Footer — Premium Site Footer
 * ═══════════════════════════════════════════════════
 * Uses centralized data layer for all constants.
 * Connected newsletter form via Brevo API route.
 * Framer Motion reveal animations.
 */
export default function Footer() {
  const { openWhatsApp } = useWhatsApp()
  const currentYear = new Date().getFullYear()
  const [footerEmail, setFooterEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!footerEmail.trim()) return

    setIsSubmitting(true)
    try {
      const response = await subscribeToNewsletter(footerEmail)
      if (response.success) {
        toast.success(response.message)
        setFooterEmail("")
      } else {
        toast.error(response.message)
      }
    } catch {
      toast.error("An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="w-full bg-brand-dark text-white/90 relative overflow-hidden border-t-2 border-brand-gold/20 pt-16 pb-8">
      {/* Decorative background vectors */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/8 rounded-full filter blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/[0.04] rounded-full filter blur-[200px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-14 text-center lg:text-left">

          {/* ── Column 1: Logo & Description ──────────── */}
          <AnimatedReveal direction="up" className="flex flex-col items-center lg:items-start gap-6">
            <LogoFallback light size="md" />

            <p className="text-sm text-gray-300/80 leading-relaxed">
              {siteConfig.description}
            </p>

            {/* WhatsApp CTA */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => openWhatsApp()}
              className="inline-flex items-center gap-2.5 bg-transparent border border-white/70 hover:border-white hover:bg-white/5 text-[#25D366] font-bold text-sm px-5 py-2.5 rounded-full transition-all duration-300 w-fit"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Consult an Expert</span>
            </motion.button>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              {siteConfig.socials.map((social) => {
                const renderIcon = (iconName: string) => {
                  switch(iconName) {
                    case 'instagram': return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
                    case 'facebook': return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
                    case 'youtube': return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>;
                    default: return <Mail className="w-[18px] h-[18px]" />;
                  }
                };
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-dark hover:bg-brand-gold hover:border-brand-gold transition-all duration-300"
                  >
                    {renderIcon(social.icon)}
                  </a>
                );
              })}
            </div>
          </AnimatedReveal>

          {/* ── Column 2: Quick Links ─────────────────── */}
          <AnimatedReveal direction="up" delay={100} className="flex flex-col items-center lg:items-start gap-5">
            <h3 className="font-heading font-semibold text-lg text-brand-gold tracking-wide relative pb-2.5 after:absolute after:bottom-0 after:left-1/2 lg:after:left-0 after:-translate-x-1/2 lg:after:translate-x-0 after:w-8 after:h-[2px] after:bg-brand-gold">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm text-gray-300">
              {siteConfig.navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-brand-gold transition-colors duration-200 flex items-center gap-1.5"
                  >
                    <span className="text-brand-gold/50 select-none">›</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </AnimatedReveal>

          {/* ── Column 3: Contact Details ─────────────── */}
          <AnimatedReveal direction="up" delay={200} className="flex flex-col items-center lg:items-start gap-5">
            <h3 className="font-heading font-semibold text-lg text-brand-gold tracking-wide relative pb-2.5 after:absolute after:bottom-0 after:left-1/2 lg:after:left-0 after:-translate-x-1/2 lg:after:translate-x-0 after:w-8 after:h-[2px] after:bg-brand-gold">
              Contact Details
            </h3>
            <ul className="flex flex-col gap-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <span>{siteConfig.address.full}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-gold shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="hover:text-brand-gold transition-colors duration-200"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-gold shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-brand-gold transition-colors duration-200 truncate"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </AnimatedReveal>

          {/* ── Column 4: Hours & Newsletter ──────────── */}
          <AnimatedReveal direction="up" delay={300} className="flex flex-col items-center lg:items-start gap-5">
            <h3 className="font-heading font-semibold text-lg text-brand-gold tracking-wide relative pb-2.5 after:absolute after:bottom-0 after:left-1/2 lg:after:left-0 after:-translate-x-1/2 lg:after:translate-x-0 after:w-8 after:h-[2px] after:bg-brand-gold">
              Opening Hours
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-gold shrink-0" />
                <span className="font-medium text-white">{siteConfig.hours.days}:</span>
                <span>{siteConfig.hours.time}</span>
              </li>
              <li className="text-xs text-brand-secondary/70 mt-1">
                *{siteConfig.hours.note}
              </li>
            </ul>

            {/* Newsletter — connected to Brevo */}
            <div className="mt-3 flex flex-col gap-2">
              <span className="text-xs font-medium uppercase tracking-[0.15em] text-brand-gold">
                Subscribe to Newsletter
              </span>
              <form
                onSubmit={handleNewsletterSubmit}
                className="flex items-center bg-brand-primary/15 border border-brand-primary/30 rounded-lg overflow-hidden p-1 focus-within:border-brand-gold/40 transition-all duration-300"
              >
                <input
                  type="email"
                  placeholder="Your email address"
                  value={footerEmail}
                  onChange={(e) => setFooterEmail(e.target.value)}
                  disabled={isSubmitting}
                  className="bg-transparent text-white px-3 py-2 text-xs w-full focus:outline-none placeholder-gray-400 disabled:opacity-60"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-brand-gold hover:bg-brand-gold/90 text-brand-dark p-2 rounded transition-colors duration-300 shrink-0 disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  ) : (
                    <Send className="w-3.5 h-3.5" />
                  )}
                </button>
              </form>
              <span className="text-[10px] text-gray-500">
                Sign up for health tips & seasonal packages.
              </span>
            </div>
          </AnimatedReveal>
        </div>

        {/* ── Footer Bottom Bar ──────────────────────── */}
        <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-6 text-xs text-gray-400">
          <div>
            &copy; {currentYear} {siteConfig.fullName}. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/terms-of-service" className="hover:text-brand-gold transition-colors duration-200">
              Terms of Service
            </Link>
            <Link href="/privacy-policy" className="hover:text-brand-gold transition-colors duration-200">
              Privacy Policy
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
