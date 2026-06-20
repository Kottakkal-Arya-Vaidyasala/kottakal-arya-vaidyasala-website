"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, MapPin, Phone, Clock, ChevronRight, Loader2 } from "lucide-react";
import Logo from "@/components/common/Logo";
import { siteConfig } from "@/data/site";
import { subscribeToNewsletter } from "@/services/newsletter";
import { toast } from "sonner";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  const renderSocialIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case "instagram":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        );
      case "facebook":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
        );
      case "youtube":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        toast.success(response.message || "Successfully subscribed to the newsletter!");
        setEmail("");
      } else {
        toast.error(response.message || "Failed to subscribe. Please try again.");
      }
    } catch {
      toast.error("An unexpected error occurred. Please try again later.");
    } finally {
      setIsSubscribing(false);
    }
  };

  const quickLinks = siteConfig.navLinks;

  return (
    <footer className="bg-white pt-16 pb-8 border-t border-brand-primary/10 relative overflow-hidden mt-12 text-black">
      {/* Background vector accents (light theme) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gold/5 rounded-full filter blur-[150px] pointer-events-none translate-x-1/3 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-sage/20 rounded-full filter blur-[120px] pointer-events-none -translate-x-1/2 translate-y-1/3" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        
        {/* Newsletter Section - Perfectly Aligned Top Block */}
        <div className="bg-white border border-brand-primary/10 drop-shadow-2xl rounded-2xl p-8 md:p-10 mb-16 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
          {/* Subtle decoration inside the newsletter card */}
          <div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-brand-sage/20 to-transparent pointer-events-none" />
          
          <div className="w-full lg:w-1/2 z-10">
            <h3 className="text-2xl font-heading font-bold text-black mb-2">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-black text-sm font-light leading-relaxed">
              Join our community to receive the latest holistic health tips, exclusive offers, and expert Ayurvedic insights directly in your inbox.
            </p>
          </div>
          
          <form onSubmit={handleNewsletterSubmit} className="flex w-full lg:w-1/2 max-w-md items-center gap-3 z-10">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              disabled={isSubscribing}
              className="flex-1 bg-gray-50 border border-gray-200 text-black placeholder-gray-500 px-5 py-3.5 rounded-full text-sm focus:outline-none focus:border-brand-primary focus:bg-white transition-all duration-300"
            />
            <button
              type="submit"
              disabled={isSubscribing}
              className="bg-brand-primary text-white hover:bg-brand-gold hover:text-black font-medium px-6 py-3.5 rounded-full text-sm flex items-center justify-center min-w-[120px] transition-all duration-300 disabled:opacity-70"
            >
              {isSubscribing ? <Loader2 className="w-4 h-4 animate-spin" /> : "Subscribe"}
            </button>
          </form>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & About (Takes up more space) */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            <div className="mb-2">
              <Logo size="sm" />
            </div>
            <p className="text-black text-sm leading-relaxed font-light pr-4 md:pr-12">
              {siteConfig.description}
            </p>
            <div className="flex space-x-3 pt-2">
              {siteConfig.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-brand-primary/20 flex items-center justify-center text-brand-primary hover:bg-brand-gold hover:text-white hover:border-brand-gold transition-all duration-300 shadow-sm bg-white"
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
                    className="text-black hover:text-brand-gold text-sm font-light transition-colors flex items-center group"
                  >
                    <ChevronRight className="w-4 h-4 mr-1 text-brand-gold/50 group-hover:text-brand-gold transition-colors" />
                    {link.label}
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
              {["Panchakarma Therapies", "Pain Management", "Stress & Anxiety Care", "Skin & Hair Treatments", "Weight Management", "Women's Wellness"].map((treatment) => (
                <li key={treatment}>
                  <Link
                    href="/services"
                    className="text-black hover:text-brand-gold text-sm font-light transition-colors flex items-center group"
                  >
                    <ChevronRight className="w-4 h-4 mr-1 text-brand-gold/50 group-hover:text-brand-gold transition-colors" />
                    {treatment}
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
              <li className="flex items-start text-black text-sm font-light group">
                <div className="w-8 h-8 rounded-full bg-brand-sage/30 flex items-center justify-center mr-3 shrink-0 group-hover:bg-brand-gold/20 transition-colors">
                  <MapPin className="w-4 h-4 text-brand-gold" />
                </div>
                <span className="mt-1.5 leading-relaxed">{siteConfig.address.full}</span>
              </li>
              <li className="flex items-center text-black text-sm font-light group">
                <div className="w-8 h-8 rounded-full bg-brand-sage/30 flex items-center justify-center mr-3 shrink-0 group-hover:bg-brand-gold/20 transition-colors">
                  <Phone className="w-4 h-4 text-brand-gold" />
                </div>
                <a href={`tel:${siteConfig.contact.phoneRaw}`} className="hover:text-brand-primary transition-colors mt-0.5">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center text-black text-sm font-light group">
                <div className="w-8 h-8 rounded-full bg-brand-sage/30 flex items-center justify-center mr-3 shrink-0 group-hover:bg-brand-gold/20 transition-colors">
                  <Mail className="w-4 h-4 text-brand-gold" />
                </div>
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-brand-primary transition-colors mt-0.5 break-all">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start text-black text-sm font-light group pt-1">
                <div className="w-8 h-8 rounded-full bg-brand-sage/30 flex items-center justify-center mr-3 shrink-0 group-hover:bg-brand-gold/20 transition-colors">
                  <Clock className="w-4 h-4 text-brand-gold" />
                </div>
                <span className="mt-1.5 leading-relaxed">{siteConfig.hours.display}</span>
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
            <Link href="#" className="hover:text-brand-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-brand-primary transition-colors">Terms & Conditions</Link>
            <Link href="#" className="hover:text-brand-primary transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
