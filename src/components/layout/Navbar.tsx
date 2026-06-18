"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Phone, Leaf } from "lucide-react";
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
 */
export default function Navbar() {
  const pathname = usePathname();
  const { openWhatsApp } = useWhatsApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const lastScrollY = React.useRef(0);

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

  return (
    <header 
      className={cn(
        "w-full flex flex-col z-50 sticky top-0 transition-transform duration-300 ease-in-out bg-white",
        isHidden ? "-translate-y-full" : "translate-y-0"
      )}
    >
      {/* ── Main Navbar ──────────────────────────── */}
      <nav
        className={cn(
          "w-full transition-all duration-300 border-b",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-gray-100 py-2"
            : "bg-white border-transparent py-2",
        )}
      >
        <Container className="flex items-center justify-between">
          {/* Logo (Kept constant size to prevent layout shift/shaking) */}
          <Logo size="md" className="transition-all duration-300" />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {siteConfig.navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors duration-300 relative py-1 tracking-wide group",
                    isActive
                      ? "text-brand-primary"
                      : "text-gray-500 hover:text-brand-primary",
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 w-full h-[2px] bg-brand-gold rounded-full transition-transform duration-300 origin-left",
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    )}
                  />
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <PrimaryButton
              className="py-2.5 px-5 text-sm h-10"
              onClick={() => openWhatsApp()}
            >
              Book Consultation
            </PrimaryButton>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden flex items-center gap-4">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="p-2 rounded-md hover:bg-brand-primary/5 text-brand-primary">
                <Menu className="w-6 h-6" />
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-white border-brand-gold/10 p-6 flex flex-col justify-between h-full"
              >
                <div>
                  <SheetHeader className="text-left mb-8">
                    <SheetTitle className="flex items-center gap-2">
                      <Leaf className="w-5 h-5 text-brand-primary" />
                      <span className="font-heading font-bold text-brand-primary">
                        {siteConfig.name}
                      </span>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-4">
                    {siteConfig.navLinks.map((link) => {
                      const isActive = pathname === link.href;
                      return (
                        <Link
                          key={link.label}
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "text-base font-normal py-2 border-b border-gray-100 transition-colors duration-200",
                            isActive
                              ? "text-brand-primary font-semibold"
                              : "text-brand-grey hover:text-brand-primary",
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
                    className="flex items-center gap-3 p-3 rounded-lg bg-brand-primary/5 border border-brand-primary/10 text-brand-primary hover:bg-brand-primary/10 transition-colors"
                  >
                    <Phone className="w-5 h-5 text-brand-gold" />
                    <div className="flex flex-col">
                      <span className="text-[10px] text-brand-grey">
                        Call Us
                      </span>
                      <span className="text-sm font-semibold">
                        {siteConfig.contact.phone}
                      </span>
                    </div>
                  </a>
                  <PrimaryButton
                    className="w-full py-4 text-sm font-medium"
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
