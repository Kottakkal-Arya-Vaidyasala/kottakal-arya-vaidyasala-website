"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  ChevronRight,
} from "lucide-react";
import Logo from "@/components/common/Logo";
import Container from "@/components/common/Container";
import { siteConfig } from "@/data/site";
import { treatments } from "@/data/treatments";

export default function Footer() {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

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

  const quickLinks = [
    ...siteConfig.navLinks,
    { label: "About Homeopathy", href: "/homeopathy" }
  ];

  return (
    <footer className="bg-[#f7f4ee] pt-12 pb-4 border-t border-brand-primary/10 relative overflow-hidden text-black">
      {/* Background vector accents (light theme) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gold/5 rounded-full filter blur-[150px] pointer-events-none translate-x-1/3 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-sage/20 rounded-full filter blur-[120px] pointer-events-none -translate-x-1/2 translate-y-1/3" />

      <Container className="relative z-10">

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 mb-10">
          {/* Column 1: Brand & About (Takes up more space) */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            <div className="-ml-1.5 md:-ml-2 mb-2">
              <Logo size="sm" />
            </div>
            <p className="text-black text-base leading-relaxed font-medium pr-4 md:pr-12">
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
            <h4 className="text-xl font-heading font-bold text-black tracking-wide flex items-center whitespace-nowrap">
              Quick Links
              <span className="w-12 h-0.5 bg-brand-gold ml-3 rounded-full opacity-50 shrink-0"></span>
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
                    className="text-black hover:text-brand-primary text-base font-medium transition-colors flex items-center group"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 text-brand-primary group-hover:text-brand-gold group-hover:translate-x-1 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Key Treatments */}
          <div className="lg:col-span-3 flex flex-col space-y-6">
            <h4 className="text-xl font-heading font-bold text-black tracking-wide flex items-center whitespace-nowrap">
              Our Expertise
              <span className="w-12 h-0.5 bg-brand-gold ml-3 rounded-full opacity-50 shrink-0"></span>
            </h4>
            <div className="flex flex-col">
              {/* 1. Homeopathy Category */}
              <div className="mb-5">
                <Link
                  href="/homeopathy"
                  className="text-black hover:text-brand-primary text-base font-bold transition-colors flex items-center group"
                >
                  <ChevronRight className="w-4 h-4 mr-2 text-brand-gold group-hover:translate-x-1 transition-all duration-300 shrink-0" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    Homeopathy
                  </span>
                </Link>
              </div>

              {/* 2. Ayurveda Category */}
              <div>
                <Link
                  href="/our-treatments"
                  className="text-black hover:text-brand-primary text-base font-bold transition-colors flex items-center group mb-4"
                >
                  <ChevronRight className="w-4 h-4 mr-2 text-brand-gold group-hover:translate-x-1 transition-all duration-300 shrink-0" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    Ayurveda
                  </span>
                </Link>
                <ul className="flex flex-col space-y-3 pl-6 border-l-2 border-brand-gold/10 ml-[7px]">
                  {treatments.slice(0, 5).map((treatment) => (
                    <li key={treatment.id}>
                      <Link
                        href={`/our-treatments#${treatment.id}`}
                        className="text-gray-700 hover:text-brand-primary text-sm font-medium transition-colors flex items-center group"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/40 mr-3 group-hover:bg-brand-gold transition-colors shrink-0 -ml-[25px]" />
                        <span className="group-hover:translate-x-1 transition-transform duration-300 line-clamp-1">
                          {treatment.title}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Column 4: Contact Info */}
          <div className="lg:col-span-3 flex flex-col space-y-6">
            <h4 className="text-xl font-heading font-bold text-black tracking-wide flex items-center whitespace-nowrap">
              Contact Us
              <span className="w-12 h-0.5 bg-brand-gold ml-3 rounded-full opacity-50 shrink-0"></span>
            </h4>
            <ul className="flex flex-col space-y-5">
              <li className="flex items-start text-black text-base font-medium group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-brand-primary/5 flex items-center justify-center mr-4 shrink-0 group-hover:bg-brand-primary group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                  <MapPin className="w-5 h-5 text-brand-primary group-hover:text-brand-gold transition-colors duration-300" />
                </div>
                <span className="mt-1.5 leading-relaxed">
                  {siteConfig.address.full}
                </span>
              </li>
              <li className="flex items-center text-black text-base font-medium group cursor-pointer">
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
              <li className="flex items-center text-black text-base font-medium group cursor-pointer">
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
              <li className="flex items-start text-black text-base font-medium group pt-1 cursor-pointer">
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
          <p className="text-base text-black font-medium text-center md:text-left">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-base text-black font-medium">
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
