"use client"

import React from "react"
import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Send, Leaf, MessageSquare } from "lucide-react"
import Container from "@/components/common/Container"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const contactNumber = "+971 55 267 1598"
  const whatsappNumber = "971552671598"
  const emailAddress = "kottakkalaryavaidyasalaauh@gmail.com"

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Treatments", href: "/treatments" },
    { label: "Our Doctors", href: "/doctors" },
    { label: "Gallery", href: "/gallery" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contact Us", href: "/contact" },
  ]

  const socials = [
    { label: "Facebook", href: "https://facebook.com", icon: "FB" },
    { label: "Instagram", href: "https://instagram.com", icon: "IG" },
    { label: "Twitter", href: "https://twitter.com", icon: "X" },
    { label: "LinkedIn", href: "https://linkedin.com", icon: "LN" },
  ]

  return (
    <footer className="w-full bg-brand-dark text-white/90 relative overflow-hidden border-t-2 border-brand-gold/20 pt-16 pb-8">
      {/* Decorative background vectors */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/5 rounded-full filter blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          
          {/* Column 1: Logo, Description & WhatsApp CTA */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-brand-primary/20 flex items-center justify-center border border-brand-gold/30">
                <Leaf className="w-5.5 h-5.5 text-brand-gold" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg leading-none tracking-tight">
                  KOTTAKKAL
                </span>
                <span className="text-[9px] font-sans font-bold tracking-widest text-brand-gold leading-none mt-1">
                  ARYA VAIDYASALA
                </span>
              </div>
            </Link>
            
            <p className="text-sm text-gray-300 leading-relaxed">
              Experience the pinnacle of traditional Ayurvedic healing at Abu Dhabi's premier wellness sanctuary. We offer customized treatments matching timeless Vedic knowledge.
            </p>

            {/* Quick WhatsApp Contact CTA */}
            <div>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm px-5 py-3 rounded-full shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-emerald-600/20 group"
              >
                <MessageSquare className="w-4.5 h-4.5 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-5">
            <h3 className="font-heading font-semibold text-lg text-brand-gold tracking-wide relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[2px] after:bg-brand-gold">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm text-gray-300">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="hover:text-brand-gold transition-colors duration-200 flex items-center gap-1"
                  >
                    <span className="text-brand-gold/70 select-none">›</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col gap-5">
            <h3 className="font-heading font-semibold text-lg text-brand-gold tracking-wide relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[2px] after:bg-brand-gold">
              Contact Details
            </h3>
            <ul className="flex flex-col gap-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <span>Airport Road, Near Al Wahda Mall, Abu Dhabi, UAE</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-gold shrink-0" />
                <a 
                  href={`tel:${contactNumber.replace(/\s+/g, "")}`}
                  className="hover:text-brand-gold transition-colors duration-200"
                >
                  {contactNumber}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-gold shrink-0" />
                <a 
                  href={`mailto:${emailAddress}`}
                  className="hover:text-brand-gold transition-colors duration-200 truncate"
                >
                  {emailAddress}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Opening Hours & Newsletter */}
          <div className="flex flex-col gap-5">
            <h3 className="font-heading font-semibold text-lg text-brand-gold tracking-wide relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[2px] after:bg-brand-gold">
              Opening Hours
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-gold shrink-0" />
                <span className="font-medium text-white">Daily:</span>
                <span>9:00 AM - 9:00 PM</span>
              </li>
              <li className="text-xs text-brand-secondary/80 mt-1">
                *Doctor consultations require prior booking.
              </li>
            </ul>

            {/* Newsletter Sign Up Architecture Placeholder */}
            <div className="mt-2 flex flex-col gap-2">
              <span className="text-xs font-medium uppercase tracking-wider text-brand-gold">
                Subscribe to Newsletter
              </span>
              <form 
                onSubmit={(e) => e.preventDefault()}
                className="flex items-center bg-brand-primary/20 border border-brand-primary/40 rounded-md overflow-hidden p-1 focus-within:border-brand-gold transition-all duration-300"
              >
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-transparent text-white px-2.5 py-1.5 text-xs w-full focus:outline-none placeholder-gray-400"
                  disabled
                />
                <button
                  type="submit"
                  className="bg-brand-gold hover:bg-brand-gold/90 text-brand-dark p-2 rounded transition-colors duration-300"
                  disabled
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
              <span className="text-[10px] text-gray-400">
                Sign up to receive health tips & seasonal packages.
              </span>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <div>
            &copy; {currentYear} Kottakkal Arya Vaidyasala Ayurvedic Medical Center. All Rights Reserved.
          </div>
          <div className="flex gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-gold transition-colors duration-200"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}
