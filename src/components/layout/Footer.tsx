"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Mail, MapPin, Phone, Clock, ChevronRight } from "lucide-react";
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
        return <Mail className="h-5 w-5" />;
    }
  };

  const quickLinks = [
    ...siteConfig.navLinks,
    { label: "About Homeopathy", href: "/homeopathy" },
  ];

  return (
    <footer className="border-brand-primary/10 relative overflow-hidden border-t bg-[#f7f4ee] pt-12 pb-4 text-black">
      {/* Background vector accents (light theme) */}
      <div className="bg-brand-gold/5 pointer-events-none absolute top-0 right-0 h-[600px] w-[600px] translate-x-1/3 -translate-y-1/2 rounded-full blur-[150px] filter" />
      <div className="bg-brand-sage/20 pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] -translate-x-1/2 translate-y-1/3 rounded-full blur-[120px] filter" />

      <Container className="relative z-10">
        {/* Main Footer Columns */}
        <div className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-12 lg:gap-6">
          {/* Column 1: Brand & About (Takes up more space) */}
          <div className="flex flex-col space-y-6 lg:col-span-4">
            <div className="mb-2">
              <Logo size="sm" />
            </div>
            <p className="pr-4 text-base leading-relaxed font-medium text-black md:pr-12">
              {siteConfig.description}
            </p>
            <div className="flex space-x-3 pt-2">
              {siteConfig.socials.map((social: any) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-brand-primary/20 text-brand-primary hover:bg-brand-primary hover:text-brand-gold hover:border-brand-primary flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  aria-label={social.label}
                >
                  {renderSocialIcon(social.icon || social.label)}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col space-y-6 lg:col-span-2">
            <h4 className="font-heading flex items-center text-xl font-bold tracking-wide whitespace-nowrap text-black">
              Quick Links
              <span className="bg-brand-gold ml-3 h-0.5 w-12 shrink-0 rounded-full opacity-50"></span>
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
                    className="hover:text-brand-primary group flex items-center text-base font-medium text-black transition-colors"
                  >
                    <ChevronRight className="text-brand-primary group-hover:text-brand-gold mr-2 h-4 w-4 transition-all duration-300 group-hover:translate-x-1" />
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Key Treatments */}
          <div className="flex flex-col space-y-6 lg:col-span-3">
            <h4 className="font-heading flex items-center text-xl font-bold tracking-wide whitespace-nowrap text-black">
              Our Expertise
              <span className="bg-brand-gold ml-3 h-0.5 w-12 shrink-0 rounded-full opacity-50"></span>
            </h4>
            <div className="flex flex-col">
              {/* 1. Homeopathy Category */}
              <div className="mb-5">
                <Link
                  href="/homeopathy"
                  className="hover:text-brand-primary group flex items-center text-base font-bold text-black transition-colors"
                >
                  <ChevronRight className="text-brand-gold mr-2 h-4 w-4 shrink-0 transition-all duration-300 group-hover:translate-x-1" />
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    Homeopathy
                  </span>
                </Link>
              </div>

              {/* 2. Ayurveda Category */}
              <div>
                <Link
                  href="/our-treatments"
                  className="hover:text-brand-primary group mb-4 flex items-center text-base font-bold text-black transition-colors"
                >
                  <ChevronRight className="text-brand-gold mr-2 h-4 w-4 shrink-0 transition-all duration-300 group-hover:translate-x-1" />
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    Ayurveda
                  </span>
                </Link>
                <ul className="border-brand-gold/10 ml-[7px] flex flex-col space-y-3 border-l-2 pl-6">
                  {treatments.slice(0, 5).map((treatment) => (
                    <li key={treatment.id}>
                      <Link
                        href={`/our-treatments#${treatment.id}`}
                        className="hover:text-brand-primary group flex items-center text-sm font-medium text-gray-700 transition-colors"
                      >
                        <div className="bg-brand-gold/40 group-hover:bg-brand-gold mr-3 -ml-[25px] h-1.5 w-1.5 shrink-0 rounded-full transition-colors" />
                        <span className="line-clamp-1 transition-transform duration-300 group-hover:translate-x-1">
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
          <div className="flex flex-col space-y-6 lg:col-span-3">
            <h4 className="font-heading flex items-center text-xl font-bold tracking-wide whitespace-nowrap text-black">
              Contact Us
              <span className="bg-brand-gold ml-3 h-0.5 w-12 shrink-0 rounded-full opacity-50"></span>
            </h4>
            <ul className="flex flex-col space-y-5">
              <li className="group flex cursor-pointer items-start text-base font-medium text-black">
                <div className="bg-brand-primary/5 group-hover:bg-brand-primary mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                  <MapPin className="text-brand-primary group-hover:text-brand-gold h-5 w-5 transition-colors duration-300" />
                </div>
                <span className="mt-1.5 leading-relaxed">
                  {siteConfig.address.full}
                </span>
              </li>
              <li className="group flex cursor-pointer items-center text-base font-medium text-black">
                <div className="bg-brand-primary/5 group-hover:bg-brand-primary mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                  <Phone className="text-brand-primary group-hover:text-brand-gold h-5 w-5 transition-colors duration-300" />
                </div>
                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="hover:text-brand-primary mt-0.5 transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="group flex cursor-pointer items-center text-base font-medium text-black">
                <div className="bg-brand-primary/5 group-hover:bg-brand-primary mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                  <Mail className="text-brand-primary group-hover:text-brand-gold h-5 w-5 transition-colors duration-300" />
                </div>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-brand-primary mt-0.5 break-all transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="group flex cursor-pointer items-start pt-1 text-base font-medium text-black">
                <div className="bg-brand-primary/5 group-hover:bg-brand-primary mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                  <Clock className="text-brand-primary group-hover:text-brand-gold h-5 w-5 transition-colors duration-300" />
                </div>
                <span className="mt-1.5 leading-relaxed">
                  {siteConfig.hours.display}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-brand-primary/10 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
          <p className="text-center text-base font-medium text-black md:text-left">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-base font-medium text-black">
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
