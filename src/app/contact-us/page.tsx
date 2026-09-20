"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/common/Container";
import AnimatedReveal from "@/components/common/AnimatedReveal";
import { siteConfig } from "@/data/site";
import {
  MapPin,
  Phone,
  Mail,
  User,
  FileText,
  Send,
  Loader2,
  CheckCircle,
  AlertCircle,
  Clock,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { sendContactEmail, type ContactFormInput } from "@/services/email";
import { toast } from "sonner";
import { treatments } from "@/data/treatments";

/**
 * ═══════════════════════════════════════════════════
 * Contact Us Page — Redesigned Premium Layout
 * ═══════════════════════════════════════════════════
 */

interface FieldError {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function ContactUsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [errors, setErrors] = useState<FieldError>({});
  const [formData, setFormData] = useState<ContactFormInput>({
    name: "",
    email: "",
    phone: "",
    treatment: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FieldError]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const validateForm = (): boolean => {
    const newErrors: FieldError = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }
    if (formData.phone && !/^[\d\s+\-()]{7,20}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("Please fix the highlighted errors.");
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await sendContactEmail(formData);
      if (response.success) {
        setIsSuccess(true);
        toast.success("Message sent successfully!");
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-brand-cream flex min-h-screen flex-col overflow-hidden">
      {/* ── 1. Hero Section (Centered with AI Image) ── */}
      <section className="relative flex h-[60vh] min-h-[400px] w-full items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/contact/contact-carousel.webp"
            alt="Luxury Ayurvedic Clinic Reception - Kottakkal Arya Vaidyasala Dubai"
            fill
            className="object-cover object-top md:object-[center_20%]"
            priority
          />
          <div className="bg-brand-dark/40 absolute inset-0 backdrop-blur-[1px]" />
          <div className="from-brand-dark/80 to-brand-dark/40 absolute inset-0 bg-gradient-to-t via-transparent opacity-90" />
        </div>

        <Container className="relative z-10 mt-12 text-center md:mt-16">
          <AnimatedReveal direction="up" delay={100}>
            <h1
              style={{ textShadow: "0px 4px 12px rgba(0, 0, 0, 0.9)" }}
              className="font-heading mx-auto mb-1 max-w-5xl text-center text-2xl leading-tight font-bold text-white sm:mb-2 sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Restore Your Harmony
            </h1>
            <p
              style={{ textShadow: "0px 2px 8px rgba(0, 0, 0, 0.9)" }}
              className="text-[8px] font-bold tracking-[0.15em] text-white uppercase sm:text-xs md:text-sm lg:text-base"
            >
              We're Here To Help
            </p>
          </AnimatedReveal>
        </Container>
      </section>

      {/* ── 2. Contact Info & Map (Split Layout) ──── */}
      <section className="relative z-20 mt-4 py-12 md:-mt-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2">
            {/* Left: Get in Touch Card */}
            <AnimatedReveal direction="right" className="h-full">
              <div className="flex h-full flex-col justify-center rounded-3xl border border-gray-100 bg-white p-6 shadow-xl sm:p-8 md:p-14">
                <h2 className="font-heading text-brand-dark mb-6 text-center text-2xl font-bold sm:text-3xl md:mb-8">
                  Get in Touch
                </h2>

                <div className="flex flex-col gap-6 md:gap-8">
                  <div className="flex items-start gap-4 md:gap-5">
                    <div className="bg-brand-cream flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
                      <MapPin className="text-brand-primary h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-brand-gold mb-1 text-xs font-bold tracking-widest uppercase md:text-sm">
                        Visit Us
                      </h4>
                      <p className="max-w-xs text-sm leading-relaxed text-gray-600 md:text-base">
                        {siteConfig.address.full}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="bg-brand-cream flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
                      <Phone className="text-brand-primary h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-brand-gold mb-1 text-xs font-bold tracking-widest uppercase md:text-sm">
                        Call Us
                      </h4>
                      <a
                        href={`tel:${siteConfig.contact.phoneRaw}`}
                        className="hover:text-brand-primary block text-sm break-words text-gray-600 transition-colors md:text-lg"
                      >
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="bg-brand-cream flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
                      <Mail className="text-brand-primary h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-brand-gold mb-1 text-xs font-bold tracking-widest uppercase md:text-sm">
                        Email Us
                      </h4>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="hover:text-brand-primary block text-sm break-all text-gray-600 transition-colors md:text-lg"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="bg-brand-cream flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
                      <Clock className="text-brand-primary h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-brand-gold mb-1 text-xs font-bold tracking-widest uppercase md:text-sm">
                        Clinic Timings
                      </h4>
                      <div className="text-sm leading-relaxed text-gray-600 md:text-base">
                        <p>Sat - Thu: 9:00 AM – 11:00 PM</p>
                        <p>Fri: 9:00 AM – 11:55 AM, 2:00 PM – 11:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedReveal>

            {/* Right: Google Map */}
            <AnimatedReveal direction="left" className="h-full">
              <div className="h-[300px] min-h-[300px] w-full overflow-hidden rounded-3xl border-4 border-white bg-gray-100 shadow-xl sm:h-[400px] sm:min-h-[400px] lg:h-full">
                <iframe
                  src="https://maps.google.com/maps?q=Kottakkal+Arya+vaidyasala+Ayurvedic+medical+center,+Ground+floor,+Hamed+center,+Al+danah+zone+1,+Electra+street,+Abudhabi&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kottakkal Arya Vaidyasala Location"
                  className="h-full w-full contrast-110 grayscale-[10%]"
                />
              </div>
            </AnimatedReveal>
          </div>
        </Container>
      </section>

      {/* ── 3. EmailJS Contact Form ────────────────── */}
      <section className="bg-brand-cream relative pt-8 pb-24">
        <Container>
          <AnimatedReveal direction="up" className="mx-auto max-w-4xl">
            <div className="bg-brand-dark relative overflow-hidden rounded-3xl p-6 shadow-2xl md:p-14">
              <div className="bg-brand-primary/20 pointer-events-none absolute top-0 right-0 h-[400px] w-[400px] rounded-full blur-[100px] filter" />

              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative z-10 flex flex-col items-center py-16 text-center"
                  >
                    <div className="bg-brand-gold/20 mb-6 flex h-24 w-24 items-center justify-center rounded-full">
                      <CheckCircle className="text-brand-gold h-12 w-12" />
                    </div>
                    <h3 className="font-heading mb-4 text-3xl font-bold text-white">
                      Message Sent!
                    </h3>
                    <p className="mx-auto mb-8 max-w-md text-gray-300">
                      Thank you for reaching out. Our Ayurvedic experts will get
                      back to you shortly to assist with your journey.
                    </p>
                    <button
                      onClick={() => {
                        setIsSuccess(false);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          treatment: "",
                          message: "",
                        });
                      }}
                      className="text-brand-gold border-brand-gold/30 hover:bg-brand-gold/10 rounded-xl border px-8 py-3 font-semibold tracking-wide transition-colors"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="relative z-10"
                  >
                    <div className="mb-10 text-center">
                      <h3 className="font-heading mb-3 text-3xl font-bold text-white">
                        Send us a Message
                      </h3>
                      <p className="text-brand-sage font-light">
                        Fill out the form below and we will get back to you.
                      </p>
                    </div>

                    <form
                      onSubmit={handleSubmit}
                      noValidate
                      className="flex flex-col gap-6"
                    >
                      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="relative">
                          <User className="absolute top-[18px] left-4 h-5 w-5 text-gray-400" />
                          <input
                            type="text"
                            name="name"
                            placeholder="Your Name *"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full border bg-white/5 ${errors.name ? "border-red-400" : "border-white/10"} focus:border-brand-gold rounded-xl py-4 pr-4 pl-12 text-base text-white placeholder-gray-400 transition-colors focus:outline-none md:text-sm`}
                          />
                          {errors.name && (
                            <p className="absolute -bottom-5 mt-1 text-xs text-red-400">
                              <AlertCircle className="mr-1 inline h-3 w-3" />
                              {errors.name}
                            </p>
                          )}
                        </div>
                        <div className="relative">
                          <Mail className="absolute top-[18px] left-4 h-5 w-5 text-gray-400" />
                          <input
                            type="email"
                            name="email"
                            placeholder="Email Address *"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full border bg-white/5 ${errors.email ? "border-red-400" : "border-white/10"} focus:border-brand-gold rounded-xl py-4 pr-4 pl-12 text-base text-white placeholder-gray-400 transition-colors focus:outline-none md:text-sm`}
                          />
                          {errors.email && (
                            <p className="absolute -bottom-5 mt-1 text-xs text-red-400">
                              <AlertCircle className="mr-1 inline h-3 w-3" />
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="mt-2 grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="relative">
                          <Phone className="absolute top-[18px] left-4 h-5 w-5 text-gray-400" />
                          <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            className={`w-full border bg-white/5 ${errors.phone ? "border-red-400" : "border-white/10"} focus:border-brand-gold rounded-xl py-4 pr-4 pl-12 text-base text-white placeholder-gray-400 transition-colors focus:outline-none md:text-sm`}
                          />
                        </div>
                        <div className="relative" ref={dropdownRef}>
                          <FileText className="pointer-events-none absolute top-[18px] left-4 z-10 h-5 w-5 text-gray-400" />
                          <button
                            type="button"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className={cn(
                              "flex w-full items-center justify-between rounded-xl border bg-white/5 py-4 pr-4 pl-12 text-left transition-all duration-300",
                              isDropdownOpen
                                ? "border-brand-gold text-white shadow-[0_0_15px_rgba(201,169,110,0.1)]"
                                : "hover:border-brand-gold/50 border-white/10"
                            )}
                          >
                            <span
                              className={
                                formData.treatment
                                  ? "text-white"
                                  : "text-gray-400"
                              }
                            >
                              {formData.treatment || "Select Treatment"}
                            </span>
                            <motion.div
                              animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                              transition={{
                                duration: 0.4,
                                ease: [0.22, 1, 0.36, 1],
                              }}
                            >
                              <ChevronDown className="h-5 w-5 text-gray-400" />
                            </motion.div>
                          </button>

                          <AnimatePresence>
                            {isDropdownOpen && (
                              <motion.div
                                initial={{
                                  opacity: 0,
                                  y: -10,
                                  scale: 0.95,
                                  filter: "blur(8px)",
                                }}
                                animate={{
                                  opacity: 1,
                                  y: 8,
                                  scale: 1,
                                  filter: "blur(0px)",
                                }}
                                exit={{
                                  opacity: 0,
                                  y: -5,
                                  scale: 0.95,
                                  filter: "blur(4px)",
                                }}
                                transition={{
                                  duration: 0.4,
                                  ease: [0.22, 1, 0.36, 1],
                                }}
                                className="bg-brand-dark/80 border-brand-gold/20 absolute top-full left-0 z-50 w-full overflow-hidden rounded-2xl border p-2 shadow-2xl backdrop-blur-2xl"
                              >
                                <div className="custom-scrollbar flex max-h-64 flex-col gap-1 overflow-y-auto pr-1">
                                  {[
                                    {
                                      id: "default",
                                      title: "Select Treatment",
                                    },
                                    ...treatments,
                                    {
                                      id: "general",
                                      title: "General Consultation",
                                    },
                                  ].map((t, idx) => {
                                    const isSelected =
                                      formData.treatment === t.title ||
                                      (!formData.treatment &&
                                        t.id === "default");
                                    return (
                                      <motion.div
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                          delay: idx * 0.03,
                                          duration: 0.3,
                                        }}
                                        key={t.id}
                                        onClick={() => {
                                          setFormData((prev) => ({
                                            ...prev,
                                            treatment:
                                              t.id === "default" ? "" : t.title,
                                          }));
                                          setIsDropdownOpen(false);
                                        }}
                                        className={cn(
                                          "group relative flex cursor-pointer items-center justify-between overflow-hidden rounded-xl px-4 py-3 transition-all duration-300",
                                          isSelected
                                            ? "bg-brand-gold/10 text-brand-gold font-medium"
                                            : "text-gray-300 hover:bg-white/5 hover:text-white"
                                        )}
                                      >
                                        <div className="from-brand-gold/5 absolute inset-0 translate-x-[-100%] bg-gradient-to-r to-transparent transition-transform duration-500 ease-out group-hover:translate-x-0" />
                                        <span className="relative z-10 text-sm tracking-wide">
                                          {t.title}
                                        </span>

                                        {isSelected && (
                                          <motion.div
                                            className="relative z-10"
                                            layoutId="dropdown-check"
                                          >
                                            <CheckCircle className="text-brand-gold h-4 w-4" />
                                          </motion.div>
                                        )}
                                      </motion.div>
                                    );
                                  })}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>

                      <div className="relative mt-2">
                        <textarea
                          name="message"
                          placeholder="Your Message *"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className={`w-full border bg-white/5 ${errors.message ? "border-red-400" : "border-white/10"} focus:border-brand-gold resize-none rounded-xl px-5 py-4 text-base text-white placeholder-gray-400 transition-colors focus:outline-none md:text-sm`}
                        />
                        {errors.message && (
                          <p className="absolute -bottom-5 mt-1 text-xs text-red-400">
                            <AlertCircle className="mr-1 inline h-3 w-3" />
                            {errors.message}
                          </p>
                        )}
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-brand-gold text-brand-dark mt-6 flex w-full items-center justify-center gap-2 rounded-xl py-5 text-sm font-bold tracking-widest uppercase shadow-lg transition-colors hover:bg-white disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <Loader2 className="h-5 w-5 animate-spin" />
                        ) : (
                          <Send className="h-5 w-5" />
                        )}
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </AnimatedReveal>
        </Container>
      </section>
    </main>
  );
}
