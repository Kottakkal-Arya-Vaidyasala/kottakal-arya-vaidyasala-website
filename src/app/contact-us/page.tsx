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
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FieldError]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
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
    <main className="flex flex-col min-h-screen bg-brand-cream overflow-hidden">
      {/* ── 1. Hero Section (Centered with AI Image) ── */}
      <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/contact/contact-carousel.png"
            alt="Luxury Clinic Reception"
            fill
            className="object-cover object-top md:object-[center_20%]"
            priority
          />
          <div className="absolute inset-0 bg-brand-dark/40 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-brand-dark/40 opacity-90" />
        </div>

        <Container className="relative z-10 text-center mt-12 md:mt-16">
          <AnimatedReveal direction="up" delay={100}>
            <h1
              style={{ textShadow: "0px 4px 12px rgba(0, 0, 0, 0.9)" }}
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white max-w-5xl mx-auto leading-tight mb-1 sm:mb-2 text-center"
            >
              Restore Your Harmony
            </h1>
            <p
              style={{ textShadow: "0px 2px 8px rgba(0, 0, 0, 0.9)" }}
              className="text-[8px] sm:text-xs md:text-sm lg:text-base text-white font-bold tracking-[0.15em] uppercase"
            >
              We're Here To Help
            </p>
          </AnimatedReveal>
        </Container>
      </section>

      {/* ── 2. Contact Info & Map (Split Layout) ──── */}
      <section className="py-12 md:py-24 relative mt-4 md:-mt-16 z-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Left: Get in Touch Card */}
            <AnimatedReveal direction="right" className="h-full">
              <div className="bg-white p-6 sm:p-8 md:p-14 rounded-3xl shadow-xl border border-gray-100 h-full flex flex-col justify-center">
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-brand-dark mb-6 md:mb-8 text-center">
                  Get in Touch
                </h2>

                <div className="flex flex-col gap-6 md:gap-8">
                  <div className="flex items-start gap-4 md:gap-5">
                    <div className="w-12 h-12 rounded-full bg-brand-cream flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-brand-primary" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-xs md:text-sm font-bold tracking-widest uppercase text-brand-gold mb-1">
                        Visit Us
                      </h4>
                      <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-xs">
                        {siteConfig.address.full}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-brand-cream flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-brand-primary" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-xs md:text-sm font-bold tracking-widest uppercase text-brand-gold mb-1">
                        Call Us
                      </h4>
                      <a
                        href={`tel:${siteConfig.contact.phoneRaw}`}
                        className="text-gray-600 hover:text-brand-primary transition-colors text-sm md:text-lg break-words block"
                      >
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-brand-cream flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-brand-primary" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-xs md:text-sm font-bold tracking-widest uppercase text-brand-gold mb-1">
                        Email Us
                      </h4>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-gray-600 hover:text-brand-primary transition-colors text-sm md:text-lg break-all block"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-brand-cream flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-brand-primary" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-xs md:text-sm font-bold tracking-widest uppercase text-brand-gold mb-1">
                        Clinic Timings
                      </h4>
                      <div className="text-gray-600 text-sm md:text-base leading-relaxed">
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
              <div className="w-full h-[300px] sm:h-[400px] lg:h-full min-h-[300px] sm:min-h-[400px] rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-gray-100">
                <iframe
                  src="https://maps.google.com/maps?q=Kottakkal+Arya+vaidyasala+Ayurvedic+medical+center,+Ground+floor,+Hamed+center,+Al+danah+zone+1,+Electra+street,+Abudhabi&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kottakkal Arya Vaidyasala Location"
                  className="w-full h-full grayscale-[10%] contrast-110"
                />
              </div>
            </AnimatedReveal>
          </div>
        </Container>
      </section>

      {/* ── 3. EmailJS Contact Form ────────────────── */}
      <section className="pb-24 pt-8 bg-brand-cream relative">
        <Container>
          <AnimatedReveal direction="up" className="max-w-4xl mx-auto">
            <div className="bg-brand-dark rounded-3xl p-6 md:p-14 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-primary/20 rounded-full filter blur-[100px] pointer-events-none" />

              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center py-16 relative z-10"
                  >
                    <div className="w-24 h-24 rounded-full bg-brand-gold/20 flex items-center justify-center mb-6">
                      <CheckCircle className="w-12 h-12 text-brand-gold" />
                    </div>
                    <h3 className="text-3xl font-heading font-bold text-white mb-4">
                      Message Sent!
                    </h3>
                    <p className="text-gray-300 max-w-md mx-auto mb-8">
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
                      className="text-brand-gold border border-brand-gold/30 px-8 py-3 rounded-xl hover:bg-brand-gold/10 transition-colors font-semibold tracking-wide"
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
                    <div className="text-center mb-10">
                      <h3 className="text-3xl font-heading font-bold text-white mb-3">
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
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="relative">
                          <User className="absolute left-4 top-[18px] w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            name="name"
                            placeholder="Your Name *"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full bg-white/5 border ${errors.name ? "border-red-400" : "border-white/10"} text-white placeholder-gray-400 pl-12 pr-4 py-4 rounded-xl focus:outline-none focus:border-brand-gold transition-colors`}
                          />
                          {errors.name && (
                            <p className="text-red-400 text-xs mt-1 absolute -bottom-5">
                              <AlertCircle className="w-3 h-3 inline mr-1" />
                              {errors.name}
                            </p>
                          )}
                        </div>
                        <div className="relative">
                          <Mail className="absolute left-4 top-[18px] w-5 h-5 text-gray-400" />
                          <input
                            type="email"
                            name="email"
                            placeholder="Email Address *"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full bg-white/5 border ${errors.email ? "border-red-400" : "border-white/10"} text-white placeholder-gray-400 pl-12 pr-4 py-4 rounded-xl focus:outline-none focus:border-brand-gold transition-colors`}
                          />
                          {errors.email && (
                            <p className="text-red-400 text-xs mt-1 absolute -bottom-5">
                              <AlertCircle className="w-3 h-3 inline mr-1" />
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                        <div className="relative">
                          <Phone className="absolute left-4 top-[18px] w-5 h-5 text-gray-400" />
                          <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            className={`w-full bg-white/5 border ${errors.phone ? "border-red-400" : "border-white/10"} text-white placeholder-gray-400 pl-12 pr-4 py-4 rounded-xl focus:outline-none focus:border-brand-gold transition-colors`}
                          />
                        </div>
                        <div className="relative" ref={dropdownRef}>
                          <FileText className="absolute left-4 top-[18px] w-5 h-5 text-gray-400 z-10 pointer-events-none" />
                          <button
                            type="button"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className={cn(
                              "w-full flex items-center justify-between text-left pl-12 pr-4 py-4 rounded-xl transition-all duration-300 border bg-white/5",
                              isDropdownOpen 
                                ? "border-brand-gold shadow-[0_0_15px_rgba(201,169,110,0.1)] text-white" 
                                : "border-white/10 hover:border-brand-gold/50"
                            )}
                          >
                            <span className={formData.treatment ? "text-white" : "text-gray-400"}>
                              {formData.treatment || "Select Treatment"}
                            </span>
                            <motion.div 
                              animate={{ rotate: isDropdownOpen ? 180 : 0 }} 
                              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            >
                              <ChevronDown className="w-5 h-5 text-gray-400" />
                            </motion.div>
                          </button>

                          <AnimatePresence>
                            {isDropdownOpen && (
                              <motion.div
                                initial={{ opacity: 0, y: -10, scale: 0.95, filter: "blur(8px)" }}
                                animate={{ opacity: 1, y: 8, scale: 1, filter: "blur(0px)" }}
                                exit={{ opacity: 0, y: -5, scale: 0.95, filter: "blur(4px)" }}
                                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                className="absolute top-full left-0 w-full bg-brand-dark/80 backdrop-blur-2xl border border-brand-gold/20 rounded-2xl p-2 shadow-2xl z-50 overflow-hidden"
                              >
                                <div className="max-h-64 overflow-y-auto custom-scrollbar flex flex-col gap-1 pr-1">
                                  {[{ id: 'default', title: 'Select Treatment' }, ...treatments, { id: 'general', title: 'General Consultation' }].map((t, idx) => {
                                    const isSelected = formData.treatment === t.title || (!formData.treatment && t.id === 'default');
                                    return (
                                      <motion.div
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.03, duration: 0.3 }}
                                        key={t.id}
                                        onClick={() => {
                                          setFormData(prev => ({ ...prev, treatment: t.id === 'default' ? "" : t.title }));
                                          setIsDropdownOpen(false);
                                        }}
                                        className={cn(
                                          "group relative flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer transition-all duration-300 overflow-hidden",
                                          isSelected 
                                            ? "bg-brand-gold/10 text-brand-gold font-medium" 
                                            : "text-gray-300 hover:text-white hover:bg-white/5"
                                        )}
                                      >
                                        <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/5 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                                        <span className="relative z-10 text-sm tracking-wide">
                                          {t.title}
                                        </span>
                                        
                                        {isSelected && (
                                          <motion.div className="relative z-10" layoutId="dropdown-check">
                                            <CheckCircle className="w-4 h-4 text-brand-gold" />
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
                          className={`w-full bg-white/5 border ${errors.message ? "border-red-400" : "border-white/10"} text-white placeholder-gray-400 px-5 py-4 rounded-xl focus:outline-none focus:border-brand-gold transition-colors resize-none`}
                        />
                        {errors.message && (
                          <p className="text-red-400 text-xs mt-1 absolute -bottom-5">
                            <AlertCircle className="w-3 h-3 inline mr-1" />
                            {errors.message}
                          </p>
                        )}
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-brand-gold hover:bg-white text-brand-dark font-bold tracking-widest uppercase text-sm py-5 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-colors mt-6 disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                          <Send className="w-5 h-5" />
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
