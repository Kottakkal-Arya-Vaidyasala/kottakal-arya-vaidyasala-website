"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Phone, ChevronDown, Flower2, FlaskConical } from "lucide-react";
import Logo from "@/components/common/Logo";
import Container from "@/components/common/Container";
import PrimaryButton from "@/components/common/PrimaryButton";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site";
import { useWhatsApp } from "@/hooks/useWhatsApp";

/**
 * ═══════════════════════════════════════════════════
 * Navbar — Premium Sticky Navigation (Navy/Gold)
 * ═══════════════════════════════════════════════════
 * Features a top information bar, scroll-aware sticky nav,
 * Framer Motion animations, and responsive mobile sheet.
 * "Our Treatments" has a dropdown with Ayurveda & Homeopathy.
 */

const treatmentsDropdown = [
  {
    label: "Ayurveda",
    href: "/our-treatments",
    icon: Flower2,
    description: "Traditional Ayurvedic therapies",
  },
  {
    label: "Homeopathy",
    href: "/homeopathy",
    icon: FlaskConical,
    description: "Constitutional natural medicine",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const { openWhatsApp } = useWhatsApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);
  const [mobileTreatmentsOpen, setMobileTreatmentsOpen] = useState(false);
  const lastScrollY = React.useRef(0);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 40);
      if (currentScrollY > lastScrollY.current && currentScrollY > 200) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setTreatmentsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isTreatmentsActive =
    pathname === "/our-treatments" || pathname === "/homeopathy";


  return (
    <header
      className={cn(
        "w-full flex flex-col z-50 fixed top-0 transition-all duration-300 ease-in-out border-b",
        isScrolled
          ? "bg-brand-dark/95 backdrop-blur-md shadow-md border-brand-gold/10"
          : "bg-transparent border-transparent",
        isHidden ? "-translate-y-full" : "translate-y-0"
      )}
    >
      {/* ── Main Navbar ──────────────────────────── */}
      <nav
        className={cn(
          "w-full transition-all duration-300",
          isScrolled ? "py-2" : "py-4"
        )}
      >
        <Container className="flex items-center justify-between">
          {/* Logo */}
          <Logo size="md" light={true} className="transition-all duration-300" />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {siteConfig.navLinks.map((link) => {
              const isActive = pathname === link.href;

              if (link.href === "/our-treatments") {
                return (
                  <div 
                    className="relative" 
                    ref={dropdownRef} 
                    key="our-treatments-dropdown"
                    onMouseEnter={() => setTreatmentsOpen(true)}
                    onMouseLeave={() => setTreatmentsOpen(false)}
                  >
                    <button
                      onClick={() => setTreatmentsOpen((v) => !v)}
                      className={cn(
                        "text-sm font-medium transition-colors duration-300 relative py-1 tracking-wide group flex items-center gap-1.5",
                        isTreatmentsActive
                          ? "text-brand-gold"
                          : "text-white hover:text-brand-gold"
                      )}
                    >
                      Our Treatments
                      <motion.div
                        animate={{ rotate: treatmentsOpen ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <ChevronDown className="w-3.5 h-3.5" />
                      </motion.div>
                      <span
                        className={cn(
                          "absolute -bottom-1 left-0 w-full h-[2px] bg-brand-gold rounded-full transition-transform duration-300 origin-left",
                          isTreatmentsActive
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        )}
                      />
                    </button>

                    {/* Dropdown Panel */}
                    <AnimatePresence>
                      {treatmentsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 15, scale: 0.95, filter: "blur(10px)" }}
                          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                          exit={{ opacity: 0, y: 10, scale: 0.95, filter: "blur(10px)" }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-6 z-50 w-[320px]"
                        >
                          <div className="bg-brand-dark/80 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.4)] p-3 overflow-hidden flex flex-col gap-2 relative">
                            {/* Decorative Top Glow */}
                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-32 h-10 bg-brand-gold/30 rounded-full blur-2xl pointer-events-none" />
                            
                            {treatmentsDropdown.map((item, idx) => {
                            const isItemActive = pathname === item.href;
                            const Icon = item.icon;
                            return (
                              <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.05 + 0.1, duration: 0.4, ease: "easeOut" }}
                                key={item.href}
                              >
                                <Link
                                  href={item.href}
                                  onClick={() => setTreatmentsOpen(false)}
                                  className={cn(
                                    "relative flex items-start gap-4 p-4 rounded-2xl transition-all duration-400 group overflow-hidden",
                                    isItemActive
                                      ? "bg-brand-gold/10"
                                      : "hover:bg-white/5"
                                  )}
                                >
                                  {/* Hover background slide effect */}
                                  <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/10 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                                  
                                  <div
                                    className={cn(
                                      "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-500 relative z-10 shadow-sm",
                                      isItemActive
                                        ? "bg-gradient-to-br from-brand-gold/40 to-brand-gold/10 text-brand-gold border border-brand-gold/30 shadow-[0_0_15px_rgba(201,169,110,0.3)]"
                                        : "bg-gradient-to-br from-white/10 to-transparent border border-white/10 text-brand-gold group-hover:from-brand-gold/30 group-hover:to-brand-gold/5 group-hover:border-brand-gold/40 group-hover:shadow-[0_0_20px_rgba(201,169,110,0.2)] group-hover:scale-105"
                                    )}
                                  >
                                    <Icon className="w-5 h-5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]" strokeWidth={1.5} />
                                    <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                  </div>
                                  <div className="flex flex-col min-w-0 relative z-10">
                                    <span className={cn(
                                      "text-sm font-semibold mb-1 transition-colors duration-300",
                                      isItemActive ? "text-brand-gold" : "text-white group-hover:text-brand-gold"
                                    )}>
                                      {item.label}
                                    </span>
                                    <span className="text-[11px] text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
                                      {item.description}
                                    </span>
                                  </div>
                                </Link>
                              </motion.div>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors duration-300 relative py-1 tracking-wide group",
                    isActive
                      ? "text-brand-gold"
                      : "text-white hover:text-brand-gold"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 w-full h-[2px] bg-brand-gold rounded-full transition-transform duration-300 origin-left",
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    )}
                  />
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <PrimaryButton
              className="py-2.5 px-5 text-sm h-10 bg-brand-gold text-brand-dark border-brand-gold hover:bg-white hover:text-brand-dark hover:border-white transition-all duration-300"
              onClick={() => openWhatsApp()}
            >
              Book Consultation
            </PrimaryButton>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden flex items-center gap-4">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="p-2 rounded-md hover:bg-white/10 text-white">
                <Menu className="w-6 h-6" />
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-brand-dark border-brand-gold/10 p-6 flex flex-col justify-between h-full"
              >
                <div>
                  <SheetHeader className="sr-only">
                    <SheetTitle>Navigation Menu</SheetTitle>
                  </SheetHeader>
                  <div className="mt-8 flex flex-col gap-1">
                    {siteConfig.navLinks.map((link) => {
                      const isActive = pathname === link.href;

                      if (link.href === "/our-treatments") {
                        return (
                          <div className="border-b border-white/10" key="mobile-treatments">
                            <button
                              onClick={() => setMobileTreatmentsOpen((v) => !v)}
                              className={cn(
                                "w-full flex items-center justify-between text-base font-normal py-3 px-3 transition-colors duration-200",
                                isTreatmentsActive
                                  ? "text-brand-gold font-semibold"
                                  : "text-white hover:text-brand-gold"
                              )}
                            >
                              Our Treatments
                              <motion.div
                                animate={{ rotate: mobileTreatmentsOpen ? 180 : 0 }}
                                transition={{ duration: 0.25 }}
                              >
                                <ChevronDown className="w-4 h-4" />
                              </motion.div>
                            </button>

                            <AnimatePresence>
                              {mobileTreatmentsOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.25 }}
                                  className="overflow-hidden"
                                >
                                  <div className="flex flex-col gap-1 pb-3 pl-3">
                                    {treatmentsDropdown.map((item) => {
                                      const isItemActive = pathname === item.href;
                                      const Icon = item.icon;
                                      return (
                                        <Link
                                          key={item.href}
                                          href={item.href}
                                          onClick={() => {
                                            setIsOpen(false);
                                            setMobileTreatmentsOpen(false);
                                          }}
                                          className={cn(
                                            "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200",
                                            isItemActive
                                              ? "bg-brand-gold/15 text-brand-gold"
                                              : "text-white/80 hover:text-brand-gold hover:bg-white/5"
                                          )}
                                        >
                                          <div
                                            className={cn(
                                              "w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-500 relative z-10 shadow-sm",
                                              isItemActive
                                                ? "bg-gradient-to-br from-brand-gold/40 to-brand-gold/10 text-brand-gold border border-brand-gold/30"
                                                : "bg-gradient-to-br from-white/10 to-transparent border border-white/10 text-brand-gold group-hover:from-brand-gold/30 group-hover:to-brand-gold/5 group-hover:border-brand-gold/40"
                                            )}
                                          >
                                            <Icon className="w-4 h-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)]" strokeWidth={1.5} />
                                          </div>
                                          <div className="flex flex-col">
                                            <span className="text-sm font-semibold">
                                              {item.label}
                                            </span>
                                            <span className="text-[10px] text-white/40">
                                              {item.description}
                                            </span>
                                          </div>
                                        </Link>
                                      );
                                    })}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      }

                      return (
                        <Link
                          key={link.label}
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "text-base font-normal py-3 px-3 rounded-xl border-b border-white/10 transition-colors duration-200",
                            isActive
                              ? "text-brand-gold font-semibold"
                              : "text-white hover:text-brand-gold"
                          )}
                        >
                          {link.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>

                <div className="flex flex-col gap-4 mt-auto">
                  <a
                    href={`tel:${siteConfig.contact.phoneRaw}`}
                    className="flex items-center gap-3 p-3 rounded-lg bg-brand-gold/10 border border-brand-gold/20 text-brand-gold hover:bg-brand-gold/20 transition-colors"
                  >
                    <Phone className="w-5 h-5 text-brand-gold" />
                    <div className="flex flex-col">
                      <span className="text-[10px] text-white/60">Call Us</span>
                      <span className="text-sm font-semibold text-white">
                        {siteConfig.contact.phone}
                      </span>
                    </div>
                  </a>
                  <PrimaryButton
                    className="w-full py-4 text-sm font-medium bg-brand-gold text-brand-dark border-brand-gold hover:bg-white hover:text-brand-dark hover:border-white transition-all duration-300"
                    onClick={() => {
                      setIsOpen(false);
                      openWhatsApp();
                    }}
                  >
                    Book Consultation
                  </PrimaryButton>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </Container>
      </nav>
    </header>
  );
}
