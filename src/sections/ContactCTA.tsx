"use client";

import React, { useState } from "react";
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
} from "lucide-react";
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
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field error on change
    if (errors[name as keyof FieldError]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

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
    } else if (formData.message.trim().length < 10) {
      newErrors.message =
        "Please provide more details (at least 10 characters)";
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
      className="py-24 md:py-32 bg-brand-dark text-white relative overflow-hidden"
    >
      {/* Background vectors */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-brand-secondary/8 rounded-full filter blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-gold/[0.06] rounded-full filter blur-[180px] pointer-events-none" />

      {/* Top gold line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/25 to-transparent" />

      <Container className="relative z-10">
        <AnimatedReveal direction="up" className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-secondary/25 border border-brand-gold/20 text-brand-gold text-xs font-semibold uppercase tracking-[0.15em] mb-6">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Connect With Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-5 tracking-wide leading-tight">
            Begin Your Journey to{" "}
            <span className="italic font-serif gold-text">Holistic Health</span>
          </h2>
          <p className="text-sm md:text-base text-gray-300/80 max-w-xl mx-auto leading-[1.6] font-light">
            Reach out to schedule your consultation or inquire about our
            treatments. Our team responds within minutes.
          </p>
        </AnimatedReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* ── Left: Contact Info ────────────────────── */}
          <div className="flex flex-col bg-white rounded-2xl p-8 md:p-10 border border-gray-100 shadow-xl h-full justify-between">
            <h3 className="text-2xl font-heading font-bold text-brand-dark mb-8">
              Get In Touch
            </h3>

            {/* Contact details */}
            <AnimatedReveal
              direction="up"
              delay={200}
              className="flex flex-col gap-4 mb-8"
            >
              {[
                {
                  icon: <MapPin className="w-5 h-5 text-brand-gold" />,
                  title: "Visit Us",
                  detail: siteConfig.address.full,
                },
                {
                  icon: <Phone className="w-5 h-5 text-brand-gold" />,
                  title: "Call Us",
                  detail: siteConfig.contact.phone,
                  href: `tel:${siteConfig.contact.phoneRaw}`,
                },
                {
                  icon: <Mail className="w-5 h-5 text-brand-gold" />,
                  title: "Email Us",
                  detail: siteConfig.contact.email,
                  href: `mailto:${siteConfig.contact.email}`,
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-brand-gold/30 transition-all duration-300"
                >
                  <div className="shrink-0 mt-0.5">{item.icon}</div>
                  <div>
                    <h4 className="text-sm font-semibold text-brand-dark">
                      {item.title}
                    </h4>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-xs text-gray-600 mt-0.5 hover:text-brand-primary transition-colors block"
                      >
                        {item.detail}
                      </a>
                    ) : (
                      <p className="text-xs text-gray-600 mt-0.5">
                        {item.detail}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </AnimatedReveal>

            {/* Quick action buttons */}
            <AnimatedReveal
              direction="up"
              delay={300}
              className="flex flex-col sm:flex-row gap-3"
            >
              <PrimaryButton
                icon={<Phone className="w-4 h-4" />}
                onClick={() => {
                  window.location.href = `tel:${siteConfig.contact.phoneRaw}`;
                }}
                className="flex-1 bg-brand-primary text-white hover:bg-brand-gold hover:text-brand-dark border-transparent shadow-md"
              >
                Call Now
              </PrimaryButton>
              <PrimaryButton
                icon={<MessageCircle className="w-4 h-4" />}
                onClick={() => openWhatsApp()}
                className="flex-1 bg-brand-primary text-white hover:bg-brand-gold hover:text-brand-dark border-transparent shadow-md"
              >
                Book an Appointment
              </PrimaryButton>
            </AnimatedReveal>
          </div>

          {/* ── Right: Contact Form ───────────────────── */}
          <AnimatedReveal direction="left" delay={200} className="h-full">
            <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100 shadow-xl h-full">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  /* ── Success State ───────────────────── */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        delay: 0.1,
                      }}
                      className="w-20 h-20 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mb-6"
                    >
                      <CheckCircle className="w-10 h-10 text-emerald-400" />
                    </motion.div>
                    <h3 className="font-heading text-2xl font-bold text-brand-dark mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-sm text-gray-600 mb-8 max-w-sm leading-[1.6] font-light">
                      Thank you for reaching out. Our team will contact you
                      within 24 hours to discuss your wellness needs.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleReset}
                      className="text-sm font-semibold text-brand-gold border border-brand-gold/30 px-6 py-2.5 rounded-lg hover:bg-brand-gold/10 transition-all duration-300"
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
                  >
                    <h3 className="font-heading text-xl font-bold text-brand-dark mb-1">
                      Send Us a Message
                    </h3>
                    <p className="text-xs text-gray-600 mb-8 font-light">
                      Fill in your details and we&apos;ll get back to you
                      shortly.
                    </p>

                    <form
                      onSubmit={handleSubmit}
                      noValidate
                      className="flex flex-col gap-5"
                    >
                      {/* Row: Name + Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <div className="relative">
                            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                            <input
                              type="text"
                              name="name"
                              placeholder="Your Name *"
                              value={formData.name}
                              onChange={handleChange}
                              aria-label="Your Name"
                              aria-invalid={!!errors.name}
                              className={`w-full bg-gray-50 border ${errors.name ? "border-red-400" : "border-gray-200"} text-brand-dark placeholder-gray-500 pl-10 pr-4 py-3.5 rounded-lg text-sm focus:outline-none focus:border-brand-primary focus:bg-white transition-all duration-300`}
                            />
                          </div>
                          {errors.name && (
                            <p className="flex items-center gap-1 text-red-400 text-[11px] mt-1.5 ml-1">
                              <AlertCircle className="w-3 h-3" /> {errors.name}
                            </p>
                          )}
                        </div>
                        <div>
                          <div className="relative">
                            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                            <input
                              type="email"
                              name="email"
                              placeholder="Email Address *"
                              value={formData.email}
                              onChange={handleChange}
                              aria-label="Email Address"
                              aria-invalid={!!errors.email}
                              className={`w-full bg-gray-50 border ${errors.email ? "border-red-400" : "border-gray-200"} text-brand-dark placeholder-gray-500 pl-10 pr-4 py-3.5 rounded-lg text-sm focus:outline-none focus:border-brand-primary focus:bg-white transition-all duration-300`}
                            />
                          </div>
                          {errors.email && (
                            <p className="flex items-center gap-1 text-red-400 text-[11px] mt-1.5 ml-1">
                              <AlertCircle className="w-3 h-3" /> {errors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Row: Phone + Treatment */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <div className="relative">
                            <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                            <input
                              type="tel"
                              name="phone"
                              placeholder="Phone Number"
                              value={formData.phone}
                              onChange={handleChange}
                              aria-label="Phone Number"
                              aria-invalid={!!errors.phone}
                              className={`w-full bg-gray-50 border ${errors.phone ? "border-red-400" : "border-gray-200"} text-brand-dark placeholder-gray-500 pl-10 pr-4 py-3.5 rounded-lg text-sm focus:outline-none focus:border-brand-primary focus:bg-white transition-all duration-300`}
                            />
                          </div>
                          {errors.phone && (
                            <p className="flex items-center gap-1 text-red-400 text-[11px] mt-1.5 ml-1">
                              <AlertCircle className="w-3 h-3" /> {errors.phone}
                            </p>
                          )}
                        </div>
                        <div className="relative">
                          <FileText className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 z-10" />
                          <select
                            name="treatment"
                            value={formData.treatment}
                            onChange={handleChange}
                            aria-label="Select Treatment"
                            className="w-full bg-gray-50 border border-gray-200 text-brand-dark pl-10 pr-4 py-3.5 rounded-lg text-sm focus:outline-none focus:border-brand-primary focus:bg-white transition-all duration-300 appearance-none cursor-pointer"
                          >
                            <option value="" className="bg-white">
                              Select Treatment
                            </option>
                            {treatments.map((t) => (
                              <option
                                key={t.id}
                                value={t.title}
                                className="bg-white"
                              >
                                {t.title}
                              </option>
                            ))}
                            <option
                              value="General Consultation"
                              className="bg-white"
                            >
                              General Consultation
                            </option>
                          </select>
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
                          className={`w-full bg-gray-50 border ${errors.message ? "border-red-400" : "border-gray-200"} text-brand-dark placeholder-gray-500 px-4 py-3.5 rounded-lg text-sm focus:outline-none focus:border-brand-primary focus:bg-white transition-all duration-300 resize-none`}
                        />
                        {errors.message && (
                          <p className="flex items-center gap-1 text-red-400 text-[11px] mt-1.5 ml-1">
                            <AlertCircle className="w-3 h-3" /> {errors.message}
                          </p>
                        )}
                      </div>

                      {/* Submit */}
                      <motion.button
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-brand-primary hover:bg-brand-gold text-white hover:text-brand-dark font-semibold text-sm py-4 rounded-lg flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-75 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <Send className="w-4 h-4" />
                        )}
                        <span>
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </span>
                      </motion.button>

                      <p className="text-[10px] text-gray-500 text-center font-light">
                        By submitting, you agree to our privacy policy.
                        We&apos;ll never share your information.
                      </p>
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
