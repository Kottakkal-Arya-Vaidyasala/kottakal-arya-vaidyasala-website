"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, Phone, Mail, Clock, Leaf } from "lucide-react"
import { LogoFallback } from "@/components/common/Logo"
import Container from "@/components/common/Container"
import PrimaryButton from "@/components/common/PrimaryButton"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/data/site"
import { useWhatsApp } from "@/hooks/useWhatsApp"

/**
 * ═══════════════════════════════════════════════════
 * Navbar — Premium Sticky Navigation
 * ═══════════════════════════════════════════════════
 * Features a top information bar, scroll-aware sticky nav,
 * Framer Motion animations, and responsive mobile sheet.
 */
export default function Navbar() {
  const pathname = usePathname()
  const router = useRouter()
  const { openWhatsApp } = useWhatsApp()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="w-full flex flex-col z-50 relative">
      {/* ── Top Information Bar ───────────────────── */}
      <motion.div
        initial={false}
        animate={{
          height: isScrolled ? 0 : "auto",
          opacity: isScrolled ? 0 : 1,
          paddingTop: isScrolled ? 0 : 10,
          paddingBottom: isScrolled ? 0 : 10,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="w-full bg-brand-dark text-white/90 text-xs overflow-hidden border-b border-brand-primary/20"
      >
        <Container className="flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="flex items-center gap-1.5 hover:text-brand-gold transition-colors duration-200"
            >
              <Phone className="w-3.5 h-3.5 text-brand-gold" />
              <span>{siteConfig.contact.phone}</span>
            </a>
            <span className="hidden sm:inline text-white/20">|</span>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center gap-1.5 hover:text-brand-gold transition-colors duration-200"
            >
              <Mail className="w-3.5 h-3.5 text-brand-gold" />
              <span className="truncate max-w-[200px] md:max-w-none">
                {siteConfig.contact.email}
              </span>
            </a>
          </div>
          <div className="flex items-center gap-1.5 text-white/70">
            <Clock className="w-3.5 h-3.5 text-brand-gold" />
            <span>Abu Dhabi, UAE ({siteConfig.hours.time})</span>
          </div>
        </Container>
      </motion.div>

      {/* ── Main Navbar ──────────────────────────── */}
      <nav
        className={cn(
          "w-full transition-all duration-300 border-b",
          isScrolled
            ? "fixed top-0 left-0 right-0 bg-white/95 dark:bg-brand-dark/95 backdrop-blur-md shadow-md border-brand-gold/10 py-3"
            : "bg-white dark:bg-brand-dark border-transparent py-5"
        )}
      >
        <Container className="flex items-center justify-between">
          {/* Logo */}
          <LogoFallback size="md" />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {siteConfig.navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors duration-200 relative py-1.5",
                    isActive
                      ? "text-brand-primary dark:text-brand-secondary font-semibold"
                      : "text-gray-600 dark:text-gray-300 hover:text-brand-primary dark:hover:text-brand-secondary"
                  )}
                >
                  {link.label}
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-gold rounded-full"
                    initial={false}
                    animate={{ scaleX: isActive ? 1 : 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    style={{ originX: 0 }}
                  />
                </Link>
              )
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
              <SheetTrigger className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-brand-primary/10 text-brand-dark dark:text-white">
                <Menu className="w-6 h-6" />
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-white dark:bg-brand-dark border-brand-gold/10 p-6 flex flex-col justify-between h-full"
              >
                <div>
                  <SheetHeader className="text-left mb-8">
                    <SheetTitle className="flex items-center gap-2">
                      <Leaf className="w-5 h-5 text-brand-primary" />
                      <span className="font-heading font-bold text-brand-dark dark:text-white">
                        {siteConfig.name}
                      </span>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-4">
                    {siteConfig.navLinks.map((link) => {
                      const isActive = pathname === link.href
                      return (
                        <Link
                          key={link.label}
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "text-base font-medium py-2 border-b border-gray-100 dark:border-white/5 transition-colors duration-200",
                            isActive
                              ? "text-brand-primary dark:text-brand-secondary font-semibold"
                              : "text-gray-600 dark:text-gray-300 hover:text-brand-primary"
                          )}
                        >
                          {link.label}
                        </Link>
                      )
                    })}
                  </div>
                </div>

                <div className="flex flex-col gap-4 mt-auto">
                  <a
                    href={`tel:${siteConfig.contact.phoneRaw}`}
                    className="flex items-center gap-3 p-3 rounded-lg bg-brand-primary/5 border border-brand-primary/10 text-brand-dark dark:text-white hover:bg-brand-primary/10 transition-colors"
                  >
                    <Phone className="w-5 h-5 text-brand-gold" />
                    <div className="flex flex-col">
                      <span className="text-[10px] text-gray-500">Call Us</span>
                      <span className="text-sm font-semibold">
                        {siteConfig.contact.phone}
                      </span>
                    </div>
                  </a>
                  <PrimaryButton
                    className="w-full py-4 text-sm font-medium"
                    onClick={() => {
                      setIsOpen(false)
                      openWhatsApp()
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

      {/* Spacer for fixed nav */}
      {isScrolled && <div className="h-[76px] w-full" />}
    </header>
  )
}
