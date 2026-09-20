"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/common/Container";
import AnimatedReveal from "@/components/common/AnimatedReveal";
import PrimaryButton from "@/components/common/PrimaryButton";
import {
  Phone,
  Mail,
  MapPin,
  CalendarDays,
  MessageCircle,
  Send,
  Loader2,
  CheckCircle,
  User,
  FileText,
  AlertCircle,
  Clock,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site";
import { sendContactEmail, type ContactFormInput } from "@/services/email";
import { useWhatsApp } from "@/hooks/useWhatsApp";
import { toast } from "sonner";
import { treatments } from "@/data/treatments";

/**
 * ═══════════════════════════════════════════════════
 * Contact CTA — Two-Column Editorial + Contact Form
 * ═══════════════════════════════════════════════════
 * Navy/Gold palette with production-ready form validation.
 */

interface FieldError {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function ContactCTA() {
  const { openWhatsApp } = useWhatsApp();
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
    // Clear field error on change
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

  /** Validate all fields before submission */
  const validateForm = (): boolean => {
    const newErrors: FieldError = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Please enter a valid name";
    }

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
        toast.success(response.message);
        setFormData({
          name: "",
          email: "",
          phone: "",
          treatment: "",
          message: "",
        });
        setIsSuccess(true);
      } else {
        toast.error(response.message);
      }
    } catch {
      toast.error("An unexpected error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  /** Reset form after success */
  const handleReset = () => {
    setIsSuccess(false);
    setErrors({});
  };

  return (
    <section
      id="contact-cta"
      className="bg-brand-dark relative overflow-hidden py-24 text-white md:py-32"
    >
      {/* Background vectors */}
      <div className="bg-brand-secondary/8 pointer-events-none absolute top-1/2 left-0 h-[500px] w-[500px] -translate-y-1/2 rounded-full blur-[200px] filter" />
      <div className="bg-brand-gold/[0.06] pointer-events-none absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full blur-[180px] filter" />

      {/* Top gold line */}
      <div className="via-brand-gold/25 absolute top-0 right-0 left-0 h-[1px] bg-gradient-to-r from-transparent to-transparent" />

      <Container className="relative z-10">
        <AnimatedReveal direction="up" className="mb-16 text-center md:mb-20">
          <h2
            style={{ textShadow: "0px 4px 12px rgba(0, 0, 0, 0.9)" }}
            className="font-heading mb-1 text-2xl font-bold tracking-wide text-white sm:mb-2 sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl"
          >
            Book Your <span className="text-brand-gold">Consultation</span>
          </h2>
          <p
            style={{ textShadow: "0px 2px 8px rgba(0, 0, 0, 0.9)" }}
            className="mb-6 text-[10px] font-bold tracking-[0.15em] text-white uppercase sm:text-sm md:text-lg lg:text-xl"
          >
            Begin Your Healing
          </p>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed font-light text-gray-300 md:text-base">
            Connect with our Ayurveda specialists and receive a holistic
            treatment plan tailored specifically to your unique needs.
          </p>
        </AnimatedReveal>

        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2 lg:gap-16">
          {/* ── Left: Contact Info ────────────────────── */}
          <div className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-xl sm:p-8 md:p-10">
            <div className="mb-8 text-center">
              <h3 className="font-heading text-brand-dark mb-2 text-2xl font-bold">
                Get In Touch
              </h3>
              <p className="text-sm font-light text-gray-500">
                We're here to assist with your Ayurvedic journey
              </p>
            </div>

            {/* Contact details */}
            <AnimatedReveal
              direction="up"
              delay={200}
              className="mb-8 flex flex-col gap-4"
            >
              {[
                {
                  icon: <MapPin className="text-brand-gold h-5 w-5" />,
                  title: "Visit Us",
                  detail: siteConfig.address.full,
                },
                {
                  icon: <Phone className="text-brand-gold h-5 w-5" />,
                  title: "Call Us",
                  detail: siteConfig.contact.phone,
                  href: `tel:${siteConfig.contact.phoneRaw}`,
                },
                {
                  icon: <Mail className="text-brand-gold h-5 w-5" />,
                  title: "Email Us",
                  detail: siteConfig.contact.email,
                  href: `mailto:${siteConfig.contact.email}`,
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="hover:bg-brand-gold/5 hover:border-brand-gold/40 flex cursor-pointer items-start gap-4 rounded-xl border border-gray-100 bg-gray-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="mt-0.5 shrink-0">{item.icon}</div>
                  <div>
                    <h4 className="text-brand-dark text-sm font-semibold">
                      {item.title}
                    </h4>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="hover:text-brand-primary mt-0.5 block text-xs break-words break-all text-gray-600 transition-colors sm:break-normal"
                      >
                        {item.detail}
                      </a>
                    ) : (
                      <div className="mt-0.5 text-xs text-gray-600">
                        {item.detail}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </AnimatedReveal>

            {/* Quick action buttons */}
            <div className="mt-auto pt-6">
              <AnimatedReveal
                direction="up"
                delay={50}
                className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row"
              >
                <PrimaryButton
                  icon={<Phone className="h-4 w-4" />}
                  onClick={() => {
                    window.location.href = `tel:${siteConfig.contact.phoneRaw}`;
                  }}
                  className="bg-brand-primary hover:bg-brand-gold hover:text-brand-dark w-full justify-center border-transparent text-white shadow-md sm:w-auto"
                >
                  Call Now
                </PrimaryButton>
                <PrimaryButton
                  icon={<MessageCircle className="h-4 w-4" />}
                  onClick={() => openWhatsApp()}
                  className="bg-brand-primary hover:bg-brand-gold hover:text-brand-dark w-full justify-center border-transparent text-white shadow-md sm:w-auto"
                >
                  Book an Appointment
                </PrimaryButton>
              </AnimatedReveal>
            </div>
          </div>

          {/* ── Right: Contact Form ───────────────────── */}
          <AnimatedReveal direction="left" delay={200} className="h-full">
            <div className="h-full rounded-2xl border border-gray-100 bg-white p-6 shadow-xl sm:p-8 md:p-10">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  /* ── Success State ───────────────────── */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        delay: 0.1,
                      }}
                      className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/15"
                    >
                      <CheckCircle className="h-10 w-10 text-emerald-400" />
                    </motion.div>
                    <h3 className="font-heading text-brand-dark mb-2 text-2xl font-bold">
                      Message Sent Successfully!
                    </h3>
                    <p className="mb-8 max-w-sm text-sm leading-[1.6] font-light text-gray-600">
                      Thank you for reaching out. Our team will contact you
                      within 24 hours to discuss your wellness needs.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleReset}
                      className="text-brand-gold border-brand-gold/30 hover:bg-brand-gold/10 rounded-lg border px-6 py-2.5 text-sm font-semibold transition-all duration-300"
                    >
                      Send Another Message
                    </motion.button>
                  </motion.div>
                ) : (
                  /* ── Form State ─────────────────────── */
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex h-full flex-col"
                  >
                    <div className="text-center">
                      <h3 className="font-heading text-brand-dark mb-1 text-xl font-bold">
                        Send Us a Message
                      </h3>
                      <p className="mb-8 text-xs font-light text-gray-600">
                        Fill in your details and we&apos;ll get back to you
                        shortly.
                      </p>
                    </div>

                    <form
                      onSubmit={handleSubmit}
                      noValidate
                      className="flex flex-grow flex-col gap-5"
                    >
                      {/* Row: Name + Email */}
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                          <div className="relative">
                            <User className="absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-gray-500" />
                            <input
                              type="text"
                              name="name"
                              placeholder="Your Name *"
                              value={formData.name}
                              onChange={handleChange}
                              aria-label="Your Name"
                              aria-invalid={!!errors.name}
                              className={`w-full border bg-gray-50 ${errors.name ? "border-red-400" : "border-gray-200"} text-brand-dark focus:border-brand-primary rounded-lg py-3.5 pr-4 pl-10 text-base placeholder-gray-500 transition-all duration-300 focus:bg-white focus:outline-none md:text-sm`}
                            />
                          </div>
                          {errors.name && (
                            <p className="mt-1.5 ml-1 flex items-center gap-1 text-[11px] text-red-400">
                              <AlertCircle className="h-3 w-3" /> {errors.name}
                            </p>
                          )}
                        </div>
                        <div>
                          <div className="relative">
                            <Mail className="absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-gray-500" />
                            <input
                              type="email"
                              name="email"
                              placeholder="Email Address *"
                              value={formData.email}
                              onChange={handleChange}
                              aria-label="Email Address"
                              aria-invalid={!!errors.email}
                              className={`w-full border bg-gray-50 ${errors.email ? "border-red-400" : "border-gray-200"} text-brand-dark focus:border-brand-primary rounded-lg py-3.5 pr-4 pl-10 text-base placeholder-gray-500 transition-all duration-300 focus:bg-white focus:outline-none md:text-sm`}
                            />
                          </div>
                          {errors.email && (
                            <p className="mt-1.5 ml-1 flex items-center gap-1 text-[11px] text-red-400">
                              <AlertCircle className="h-3 w-3" /> {errors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Row: Phone + Treatment */}
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                          <div className="relative">
                            <Phone className="absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-gray-500" />
                            <input
                              type="tel"
                              name="phone"
                              placeholder="Phone Number"
                              value={formData.phone}
                              onChange={handleChange}
                              aria-label="Phone Number"
                              aria-invalid={!!errors.phone}
                              className={`w-full border bg-gray-50 ${errors.phone ? "border-red-400" : "border-gray-200"} text-brand-dark focus:border-brand-primary rounded-lg py-3.5 pr-4 pl-10 text-base placeholder-gray-500 transition-all duration-300 focus:bg-white focus:outline-none md:text-sm`}
                            />
                          </div>
                          {errors.phone && (
                            <p className="mt-1.5 ml-1 flex items-center gap-1 text-[11px] text-red-400">
                              <AlertCircle className="h-3 w-3" /> {errors.phone}
                            </p>
                          )}
                        </div>
                        <div className="relative" ref={dropdownRef}>
                          <FileText className="pointer-events-none absolute top-1/2 left-3.5 z-10 h-4 w-4 -translate-y-1/2 text-gray-500" />
                          <button
                            type="button"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className={cn(
                              "flex w-full items-center justify-between rounded-lg border py-3.5 pr-4 pl-10 text-left text-sm transition-all duration-300",
                              isDropdownOpen
                                ? "border-brand-primary text-brand-dark bg-white shadow-[0_0_10px_rgba(20,53,68,0.05)]"
                                : "hover:border-brand-primary/50 text-brand-dark border-gray-200 bg-gray-50 hover:bg-white"
                            )}
                          >
                            <span
                              className={
                                formData.treatment
                                  ? "text-brand-dark"
                                  : "text-gray-500"
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
                              <ChevronDown className="h-4 w-4 text-gray-500" />
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
                                className="absolute top-full left-0 z-50 w-full overflow-hidden rounded-xl border border-gray-100 bg-white/90 p-1.5 shadow-2xl backdrop-blur-xl"
                              >
                                <div className="custom-scrollbar flex max-h-60 flex-col gap-1 overflow-y-auto">
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
                                          "group relative flex cursor-pointer items-center justify-between overflow-hidden rounded-lg px-3.5 py-2.5 text-sm transition-all duration-300",
                                          isSelected
                                            ? "bg-brand-gold/10 text-brand-dark font-semibold"
                                            : "hover:text-brand-dark text-gray-600 hover:bg-gray-50"
                                        )}
                                      >
                                        <div className="from-brand-gold/5 absolute inset-0 translate-x-[-100%] bg-gradient-to-r to-transparent transition-transform duration-500 ease-out group-hover:translate-x-0" />
                                        <span className="relative z-10 tracking-wide">
                                          {t.title}
                                        </span>

                                        {isSelected && (
                                          <motion.div
                                            className="relative z-10"
                                            layoutId="cta-dropdown-check"
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

                      {/* Message */}
                      <div>
                        <textarea
                          name="message"
                          placeholder="Your Message *"
                          value={formData.message}
                          onChange={handleChange}
                          aria-label="Your Message"
                          aria-invalid={!!errors.message}
                          rows={4}
                          className={`w-full border bg-gray-50 ${errors.message ? "border-red-400" : "border-gray-200"} text-brand-dark focus:border-brand-primary resize-none rounded-lg px-4 py-3.5 text-base placeholder-gray-500 transition-all duration-300 focus:bg-white focus:outline-none md:text-sm`}
                        />
                        {errors.message && (
                          <p className="mt-1.5 ml-1 flex items-center gap-1 text-[11px] text-red-400">
                            <AlertCircle className="h-3 w-3" /> {errors.message}
                          </p>
                        )}
                      </div>

                      {/* Submit */}
                      <div className="mt-auto pt-4">
                        <motion.button
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                          type="submit"
                          disabled={isSubmitting}
                          className="bg-brand-primary hover:bg-brand-gold hover:text-brand-dark flex w-full items-center justify-center gap-2 rounded-lg py-4 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-75"
                        >
                          {isSubmitting ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                          ) : (
                            <Send className="h-4 w-4" />
                          )}
                          <span>
                            {isSubmitting ? "Sending..." : "Send Message"}
                          </span>
                        </motion.button>

                        <p className="mt-2 text-center text-[10px] font-light text-gray-500">
                          Your privacy is our priority. All medical inquiries
                          are kept strictly confidential.
                        </p>
                      </div>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </AnimatedReveal>
        </div>
      </Container>
    </section>
  );
}
