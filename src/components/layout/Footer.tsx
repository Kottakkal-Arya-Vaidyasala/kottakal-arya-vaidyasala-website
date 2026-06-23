"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  ChevronRight,
  Loader2,
} from "lucide-react";
import Logo from "@/components/common/Logo";
import Container from "@/components/common/Container";
import { siteConfig } from "@/data/site";
import { treatments } from "@/data/treatments";
import { subscribeToNewsletter } from "@/services/newsletter";
import { toast } from "sonner";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Footer() {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const newsletterRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: newsletterRef.current,
          start: "top 85%",
        },
      });

      tl.from(newsletterRef.current, {
        y: 30,
        opacity: 0,
        scale: 0.98,
        duration: 0.4,
        ease: "power3.out",
      })
      .from(".newsletter-glow", {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.1,
      }, "-=0.2")
      .from(".newsletter-text", {
        y: 15,
        opacity: 0,
        duration: 0.4,
        stagger: 0.05,
        ease: "power2.out",
      }, "-=0.3")
      .from(".newsletter-form", {
        x: 15,
        opacity: 0,
        duration: 0.4,
        ease: "power2.out",
      }, "-=0.3");
    },
    { scope: newsletterRef }
  );

  const renderSocialIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case "instagram":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        );
      case "facebook":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
        );
      case "youtube":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
          </svg>
        );
      default:
        return <Mail className="w-5 h-5" />;
    }
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubscribing(true);
    try {
      const response = await subscribeToNewsletter(email);
      if (response.success) {
        toast.success(
          response.message || "Successfully subscribed to the newsletter!",
        );
        setEmail("");
      } else {
        toast.error(
          response.message || "Failed to subscribe. Please try again.",
        );
      }
    } catch {
      toast.error("An unexpected error occurred. Please try again later.");
    } finally {
      setIsSubscribing(false);
    }
  };

  const quickLinks = siteConfig.navLinks;

  return (
    <footer className="bg-white pt-12 pb-8 border-t border-brand-primary/10 relative overflow-hidden text-black">
      {/* Background vector accents (light theme) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gold/5 rounded-full filter blur-[150px] pointer-events-none translate-x-1/3 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-sage/20 rounded-full filter blur-[120px] pointer-events-none -translate-x-1/2 translate-y-1/3" />

      <Container className="relative z-10">
        {/* Newsletter Section - Premium Banner */}
        <div ref={newsletterRef} className="bg-brand-primary rounded-[2rem] p-6 sm:p-8 md:p-12 mb-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-10 relative overflow-hidden shadow-[0_20px_50px_rgba(31,42,68,0.2)] border border-brand-gold/20">
          {/* Luxury background glows */}
          <div className="newsletter-glow absolute -right-20 -top-20 w-64 h-64 bg-brand-gold/30 rounded-full filter blur-[80px] pointer-events-none" />
          <div className="newsletter-glow absolute -left-20 -bottom-20 w-64 h-64 bg-brand-sage/20 rounded-full filter blur-[80px] pointer-events-none" />

          <div className="w-full lg:w-1/2 z-10 flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="newsletter-text inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-xs font-bold tracking-widest uppercase mb-4">
              <Mail className="w-3.5 h-3.5" />
              Stay Connected
            </div>
            <h3 className="newsletter-text text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white mb-3 md:mb-4">
              Join our <span className="text-brand-gold">Ayurvedic</span> community
            </h3>
            <p className="newsletter-text text-gray-300 text-sm md:text-base font-light leading-relaxed max-w-md">
              Get holistic health tips, exclusive offers, and ancient Ayurvedic insights delivered directly to your inbox.
            </p>
          </div>

          <form
            onSubmit={handleNewsletterSubmit}
            className="newsletter-form flex flex-col sm:flex-row w-full lg:w-1/2 max-w-lg mx-auto lg:mx-0 items-stretch sm:items-center gap-3 sm:gap-0 bg-transparent sm:bg-white/5 p-0 sm:p-2 rounded-2xl sm:rounded-full border-none sm:border sm:border-white/10 backdrop-blur-md z-10"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              disabled={isSubscribing}
              className="flex-1 w-full bg-white/5 sm:bg-transparent text-white placeholder-gray-400 px-6 py-4 border border-white/10 sm:border-none rounded-xl sm:rounded-full text-sm focus:outline-none focus:border-brand-gold sm:focus:border-transparent transition-all duration-300"
            />
            <button
              type="submit"
              disabled={isSubscribing}
              className="bg-brand-gold text-brand-dark hover:bg-white hover:text-brand-primary hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] font-bold px-8 py-4 rounded-xl sm:rounded-full text-sm flex items-center justify-center min-w-[140px] transition-all duration-300 disabled:opacity-70 group"
            >
              {isSubscribing ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  Subscribe
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 mb-10">
          {/* Column 1: Brand & About (Takes up more space) */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            <div className="-ml-1.5 md:-ml-2 mb-2">
              <Logo size="sm" />
            </div>
            <p className="text-black text-sm leading-relaxed font-light pr-4 md:pr-12">
              {siteConfig.description}
            </p>
            <div className="flex space-x-3 pt-2">
              {siteConfig.socials.map((social: any) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-brand-primary/20 flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-brand-gold hover:border-brand-primary hover:-translate-y-1 hover:shadow-lg transition-all duration-300 bg-white"
                  aria-label={social.label}
                >
                  {renderSocialIcon(social.icon || social.label)}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 flex flex-col space-y-6">
            <h4 className="text-xl font-heading font-bold text-black tracking-wide flex items-center">
              Quick Links
              <span className="w-12 h-0.5 bg-brand-gold ml-4 rounded-full opacity-50"></span>
            </h4>
            <ul className="flex flex-col space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={(e) => {
                      if (pathname === link.href) {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                    }}
                    className="text-black hover:text-brand-primary text-sm font-light transition-colors flex items-center group"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 text-brand-primary group-hover:text-brand-gold group-hover:translate-x-1 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Key Treatments */}
          <div className="lg:col-span-3 flex flex-col space-y-6">
            <h4 className="text-xl font-heading font-bold text-black tracking-wide flex items-center">
              Our Expertise
              <span className="w-12 h-0.5 bg-brand-gold ml-4 rounded-full opacity-50"></span>
            </h4>
            <ul className="flex flex-col space-y-3">
              {treatments.slice(0, 6).map((treatment) => (
                <li key={treatment.id}>
                  <Link
                    href={`/our-treatments#${treatment.id}`}
                    className="text-black hover:text-brand-primary text-sm font-light transition-colors flex items-center group"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 text-brand-primary group-hover:text-brand-gold group-hover:translate-x-1 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300 line-clamp-1">{treatment.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="lg:col-span-3 flex flex-col space-y-6">
            <h4 className="text-xl font-heading font-bold text-black tracking-wide flex items-center">
              Contact Us
              <span className="w-12 h-0.5 bg-brand-gold ml-4 rounded-full opacity-50"></span>
            </h4>
            <ul className="flex flex-col space-y-5">
              <li className="flex items-start text-black text-sm font-light group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-brand-primary/5 flex items-center justify-center mr-4 shrink-0 group-hover:bg-brand-primary group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                  <MapPin className="w-5 h-5 text-brand-primary group-hover:text-brand-gold transition-colors duration-300" />
                </div>
                <span className="mt-1.5 leading-relaxed">
                  {siteConfig.address.full}
                </span>
              </li>
              <li className="flex items-center text-black text-sm font-light group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-brand-primary/5 flex items-center justify-center mr-4 shrink-0 group-hover:bg-brand-primary group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                  <Phone className="w-5 h-5 text-brand-primary group-hover:text-brand-gold transition-colors duration-300" />
                </div>
                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="hover:text-brand-primary transition-colors mt-0.5"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center text-black text-sm font-light group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-brand-primary/5 flex items-center justify-center mr-4 shrink-0 group-hover:bg-brand-primary group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                  <Mail className="w-5 h-5 text-brand-primary group-hover:text-brand-gold transition-colors duration-300" />
                </div>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-brand-primary transition-colors mt-0.5 break-all"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start text-black text-sm font-light group pt-1 cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-brand-primary/5 flex items-center justify-center mr-4 shrink-0 group-hover:bg-brand-primary group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                  <Clock className="w-5 h-5 text-brand-primary group-hover:text-brand-gold transition-colors duration-300" />
                </div>
                <span className="mt-1.5 leading-relaxed">
                  {siteConfig.hours.display}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-brand-primary/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-black font-light text-center md:text-left">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-black font-light">
            <Link
              href="#"
              className="hover:text-brand-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="hover:text-brand-primary transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link
              href="#"
              className="hover:text-brand-primary transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
