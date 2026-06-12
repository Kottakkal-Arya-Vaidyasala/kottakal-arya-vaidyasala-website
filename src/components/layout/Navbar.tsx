"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, Mail, Clock, Leaf } from "lucide-react"
import Container from "@/components/common/Container"
import PrimaryButton from "@/components/common/PrimaryButton"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"

import { cn } from "@/lib/utils"

export default function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  // Listen for scroll events to update navbar solid state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Treatments", href: "/treatments" },
    { label: "Doctors", href: "/doctors" },
    { label: "Gallery", href: "/gallery" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contact", href: "/contact" },
  ]

  const contactNumber = "+971 55 267 1598"
  const emailAddress = "kottakkalaryavaidyasalaauh@gmail.com"

  return (
    <header className="w-full flex flex-col z-50 relative">
      {/* Top Banner (Information Bar) - Hidden on scroll or minimized */}
      <div 
        className={cn(
          "w-full bg-brand-dark text-white/90 text-xs transition-all duration-300 border-b border-brand-primary/20",
          isScrolled ? "h-0 overflow-hidden py-0 opacity-0" : "py-2.5 opacity-100"
        )}
      >
        <Container className="flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <a 
              href={`tel:${contactNumber.replace(/\s+/g, "")}`} 
              className="flex items-center gap-1.5 hover:text-brand-gold transition-colors duration-200"
            >
              <Phone className="w-3.5 h-3.5 text-brand-gold" />
              <span>{contactNumber}</span>
            </a>
            <span className="hidden sm:inline text-white/30">|</span>
            <a 
              href={`mailto:${emailAddress}`} 
              className="flex items-center gap-1.5 hover:text-brand-gold transition-colors duration-200"
            >
              <Mail className="w-3.5 h-3.5 text-brand-gold" />
              <span className="truncate max-w-[200px] md:max-w-none">{emailAddress}</span>
            </a>
          </div>
          <div className="flex items-center gap-1.5 text-white/75">
            <Clock className="w-3.5 h-3.5 text-brand-gold" />
            <span>Abu Dhabi, UAE (Daily: 9:00 AM - 9:00 PM)</span>
          </div>
        </Container>
      </div>

      {/* Main Navbar */}
      <nav
        className={cn(
          "w-full transition-all duration-300 border-b",
          isScrolled 
            ? "fixed top-0 left-0 right-0 bg-white/95 dark:bg-brand-dark/95 backdrop-blur-md shadow-md border-brand-gold/10 py-3" 
            : "bg-white dark:bg-brand-dark border-transparent py-5"
        )}
      >
        <Container className="flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center border border-brand-gold/30 group-hover:bg-brand-primary/20 transition-all duration-300">
              <Leaf className="w-5.5 h-5.5 text-brand-primary group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg md:text-xl text-brand-dark dark:text-white leading-none tracking-tight">
                KOTTAKKAL
              </span>
              <span className="text-[9px] font-sans font-bold tracking-widest text-brand-gold leading-none mt-1">
                ARYA VAIDYASALA
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
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
                  {/* Underline transition for active/hover links */}
                  <span 
                    className={cn(
                      "absolute bottom-0 left-0 w-full h-[2px] bg-brand-gold rounded-full transition-transform duration-300 origin-left",
                      isActive ? "scale-x-100" : "scale-x-0 hover:scale-x-100"
                    )} 
                  />
                </Link>
              )
            })}
          </div>

          {/* Call to Action Button (Desktop Only) */}
          <div className="hidden lg:block">
            <PrimaryButton 
              className="py-2.5 px-5 text-sm h-10"
              onClick={() => {
                const contactSection = document.getElementById("contact-cta")
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
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
              <SheetContent side="right" className="bg-white dark:bg-brand-dark border-brand-gold/10 p-6 flex flex-col justify-between h-full">
                <div>
                  <SheetHeader className="text-left mb-8">
                    <SheetTitle className="flex items-center gap-2">
                      <Leaf className="w-5 h-5 text-brand-primary" />
                      <span className="font-heading font-bold text-brand-dark dark:text-white">
                        Kottakkal Arya Vaidyasala
                      </span>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-4">
                    {navLinks.map((link) => {
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
                    href={`tel:${contactNumber.replace(/\s+/g, "")}`}
                    className="flex items-center gap-3 p-3 rounded-lg bg-brand-primary/5 border border-brand-primary/10 text-brand-dark dark:text-white hover:bg-brand-primary/10 transition-colors"
                  >
                    <Phone className="w-5 h-5 text-brand-gold" />
                    <div className="flex flex-col">
                      <span className="text-[10px] text-gray-500">Call Us</span>
                      <span className="text-sm font-semibold">{contactNumber}</span>
                    </div>
                  </a>
                  <PrimaryButton 
                    className="w-full py-4 text-sm font-medium"
                    onClick={() => {
                      setIsOpen(false)
                      const contactSection = document.getElementById("contact-cta")
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: "smooth" })
                      }
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
      {/* Spacer to prevent content shifting when nav is fixed */}
      {isScrolled && <div className="h-[76px] w-full" />}
    </header>
  )
}


