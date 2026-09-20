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
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
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
        "fixed top-0 z-50 flex w-full flex-col border-b transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-brand-dark/95 border-brand-gold/10 shadow-md backdrop-blur-md"
          : "border-transparent bg-transparent",
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
          <Logo
            size="md"
            light={true}
            className="transition-all duration-300"
          />

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 lg:flex xl:gap-8">
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
                        "group relative flex items-center gap-1.5 py-1 text-sm font-medium tracking-wide transition-colors duration-300",
                        isTreatmentsActive
                          ? "text-brand-gold"
                          : "hover:text-brand-gold text-white"
                      )}
                    >
                      Our Treatments
                      <motion.div
                        animate={{ rotate: treatmentsOpen ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <ChevronDown className="h-3.5 w-3.5" />
                      </motion.div>
                      <span
                        className={cn(
                          "bg-brand-gold absolute -bottom-1 left-0 h-[2px] w-full origin-left rounded-full transition-transform duration-300",
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
                          initial={{
                            opacity: 0,
                            y: 15,
                            scale: 0.95,
                            filter: "blur(10px)",
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            filter: "blur(0px)",
                          }}
                          exit={{
                            opacity: 0,
                            y: 10,
                            scale: 0.95,
                            filter: "blur(10px)",
                          }}
                          transition={{
                            duration: 0.4,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="absolute top-full left-1/2 z-50 w-[320px] -translate-x-1/2 pt-6"
                        >
                          <div className="bg-brand-dark/80 relative flex flex-col gap-2 overflow-hidden rounded-3xl border border-white/10 p-3 shadow-[0_30px_60px_rgba(0,0,0,0.4)] backdrop-blur-2xl">
                            {/* Decorative Top Glow */}
                            <div className="bg-brand-gold/30 pointer-events-none absolute -top-10 left-1/2 h-10 w-32 -translate-x-1/2 rounded-full blur-2xl" />

                            {treatmentsDropdown.map((item, idx) => {
                              const isItemActive = pathname === item.href;
                              const Icon = item.icon;
                              return (
                                <motion.div
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{
                                    delay: idx * 0.05 + 0.1,
                                    duration: 0.4,
                                    ease: "easeOut",
                                  }}
                                  key={item.href}
                                >
                                  <Link
                                    href={item.href}
                                    onClick={() => setTreatmentsOpen(false)}
                                    className={cn(
                                      "group relative flex items-start gap-4 overflow-hidden rounded-2xl p-4 transition-all duration-400",
                                      isItemActive
                                        ? "bg-brand-gold/10"
                                        : "hover:bg-white/5"
                                    )}
                                  >
                                    {/* Hover background slide effect */}
                                    <div className="from-brand-gold/10 absolute inset-0 translate-x-[-100%] bg-gradient-to-r to-transparent transition-transform duration-500 ease-out group-hover:translate-x-0" />

                                    <div
                                      className={cn(
                                        "relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl shadow-sm transition-all duration-500",
                                        isItemActive
                                          ? "from-brand-gold/40 to-brand-gold/10 text-brand-gold border-brand-gold/30 border bg-gradient-to-br shadow-[0_0_15px_rgba(201,169,110,0.3)]"
                                          : "text-brand-gold group-hover:from-brand-gold/30 group-hover:to-brand-gold/5 group-hover:border-brand-gold/40 border border-white/10 bg-gradient-to-br from-white/10 to-transparent group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(201,169,110,0.2)]"
                                      )}
                                    >
                                      <Icon
                                        className="h-5 w-5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
                                        strokeWidth={1.5}
                                      />
                                      <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                    </div>
                                    <div className="relative z-10 flex min-w-0 flex-col">
                                      <span
                                        className={cn(
                                          "mb-1 text-sm font-semibold transition-colors duration-300",
                                          isItemActive
                                            ? "text-brand-gold"
                                            : "group-hover:text-brand-gold text-white"
                                        )}
                                      >
                                        {item.label}
                                      </span>
                                      <span className="text-[11px] leading-relaxed text-white/50 transition-colors group-hover:text-white/70">
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
                    "group relative py-1 text-sm font-medium tracking-wide transition-colors duration-300",
                    isActive
                      ? "text-brand-gold"
                      : "hover:text-brand-gold text-white"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "bg-brand-gold absolute -bottom-1 left-0 h-[2px] w-full origin-left rounded-full transition-transform duration-300",
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
              className="bg-brand-gold text-brand-dark border-brand-gold hover:text-brand-dark h-10 px-5 py-2.5 text-sm transition-all duration-300 hover:border-white hover:bg-white"
              onClick={() => openWhatsApp()}
            >
              Book Consultation
            </PrimaryButton>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-4 lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="rounded-md p-2 text-white hover:bg-white/10">
                <Menu className="h-6 w-6" />
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-brand-dark border-brand-gold/10 flex h-full flex-col justify-between p-6"
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
                          <div
                            className="border-b border-white/10"
                            key="mobile-treatments"
                          >
                            <button
                              onClick={() => setMobileTreatmentsOpen((v) => !v)}
                              className={cn(
                                "flex w-full items-center justify-between px-3 py-3 text-base font-normal transition-colors duration-200",
                                isTreatmentsActive
                                  ? "text-brand-gold font-semibold"
                                  : "hover:text-brand-gold text-white"
                              )}
                            >
                              Our Treatments
                              <motion.div
                                animate={{
                                  rotate: mobileTreatmentsOpen ? 180 : 0,
                                }}
                                transition={{ duration: 0.25 }}
                              >
                                <ChevronDown className="h-4 w-4" />
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
                                      const isItemActive =
                                        pathname === item.href;
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
                                            "flex items-center gap-3 rounded-xl px-3 py-2.5 transition-all duration-200",
                                            isItemActive
                                              ? "bg-brand-gold/15 text-brand-gold"
                                              : "hover:text-brand-gold text-white/80 hover:bg-white/5"
                                          )}
                                        >
                                          <div
                                            className={cn(
                                              "relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg shadow-sm transition-all duration-500",
                                              isItemActive
                                                ? "from-brand-gold/40 to-brand-gold/10 text-brand-gold border-brand-gold/30 border bg-gradient-to-br"
                                                : "text-brand-gold group-hover:from-brand-gold/30 group-hover:to-brand-gold/5 group-hover:border-brand-gold/40 border border-white/10 bg-gradient-to-br from-white/10 to-transparent"
                                            )}
                                          >
                                            <Icon
                                              className="h-4 w-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)]"
                                              strokeWidth={1.5}
                                            />
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
                            "rounded-xl border-b border-white/10 px-3 py-3 text-base font-normal transition-colors duration-200",
                            isActive
                              ? "text-brand-gold font-semibold"
                              : "hover:text-brand-gold text-white"
                          )}
                        >
                          {link.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-auto flex flex-col gap-4">
                  <a
                    href={`tel:${siteConfig.contact.phoneRaw}`}
                    className="bg-brand-gold/10 border-brand-gold/20 text-brand-gold hover:bg-brand-gold/20 flex items-center gap-3 rounded-lg border p-3 transition-colors"
                  >
                    <Phone className="text-brand-gold h-5 w-5" />
                    <div className="flex flex-col">
                      <span className="text-[10px] text-white/60">Call Us</span>
                      <span className="text-sm font-semibold text-white">
                        {siteConfig.contact.phone}
                      </span>
                    </div>
                  </a>
                  <PrimaryButton
                    className="bg-brand-gold text-brand-dark border-brand-gold hover:text-brand-dark w-full py-4 text-sm font-medium transition-all duration-300 hover:border-white hover:bg-white"
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
