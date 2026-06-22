"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/common/Container";
import AnimatedReveal from "@/components/common/AnimatedReveal";
import { subscribeToNewsletter } from "@/services/newsletter";
import { toast } from "sonner";
import {
  Send,
  Sparkles,
  Loader2,
  CheckCircle,
  AlertCircle,
  RotateCcw,
} from "lucide-react";

/**
 * ═══════════════════════════════════════════════════
 * Newsletter — Elegant Split Layout (Navy/Gold)
 * ═══════════════════════════════════════════════════
 */
export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [validationError, setValidationError] = useState("");

  const validateEmail = (value: string): boolean => {
    if (!value.trim()) {
      setValidationError("Email address is required");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim())) {
      setValidationError("Please enter a valid email address");
      return false;
    }
    setValidationError("");
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) return;

    setIsSubmitting(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      const response = await subscribeToNewsletter(email);
      if (response.success) {
        setSuccessMessage(response.message);
        toast.success(response.message);
        setEmail("");
        setStatus("success");
      } else {
        setErrorMessage(response.message);
        setStatus("error");
        toast.error(response.message);
      }
    } catch {
      setErrorMessage("An unexpected error occurred. Please try again later.");
      setStatus("error");
      toast.error("An unexpected error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRetry = () => {
    setStatus("idle");
    setErrorMessage("");
  };

  return (
    <section className="py-20 md:py-24 bg-brand-primary relative overflow-hidden grain-overlay">
      {/* Decorative vectors */}
      <div className="absolute inset-0 dot-pattern opacity-[0.06] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-gold/15 rounded-full filter blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-dark/30 rounded-full filter blur-[140px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* ── Left: Decorative Image ────────────────── */}
          <AnimatedReveal
            direction="right"
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about/herbs.png"
                alt="Traditional Ayurvedic herbs and ingredients"
                fill
                className="object-cover"
                sizes="40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-transparent" />
            </div>
          </AnimatedReveal>

          {/* ── Right: Newsletter Form ────────────────── */}
          <div className="lg:col-span-7 text-white">
            <AnimatedReveal direction="down">
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-8 h-[1px] bg-brand-gold" />
                <span className="text-brand-gold text-xs font-bold uppercase tracking-[0.2em]">
                  Ayurvedic Wellness Tips
                </span>
              </div>
            </AnimatedReveal>

            <AnimatedReveal direction="up" delay={100}>
              <h2 className="text-3xl md:text-5xl lg:text-[3.25rem] font-heading font-bold mb-6 tracking-wide leading-[1.15]">
                Subscribe to Our <br className="hidden md:block" />
                <span className="text-brand-gold font-light">
                  Wellness Newsletter
                </span>
              </h2>
              <p className="text-base md:text-lg text-white/80 mb-10 max-w-lg leading-[1.8] font-light">
                Stay informed about holistic healing tips, seasonal Ayurvedic
                packages, detox recommendations, and special wellness events in
                Abu Dhabi.
              </p>
            </AnimatedReveal>

            {/* Form / States */}
            <AnimatedReveal direction="up" delay={200}>
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  /* ── Success State ───────────────────── */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-emerald-400/30 rounded-xl p-5 max-w-lg"
                  >
                    <div className="w-12 h-12 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {successMessage.includes("already") ? "Already Subscribed" : "Successfully Subscribed!"}
                      </p>
                      <p className="text-xs text-gray-300 mt-0.5">
                        {successMessage || "You'll receive our next wellness newsletter. Welcome aboard!"}
                      </p>
                    </div>
                  </motion.div>
                ) : status === "error" ? (
                  /* ── Error State ─────────────────────── */
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-red-400/30 rounded-xl p-5 max-w-lg"
                  >
                    <div className="w-12 h-12 rounded-full bg-red-500/15 border border-red-500/30 flex items-center justify-center shrink-0">
                      <AlertCircle className="w-6 h-6 text-red-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-white">
                        Subscription Failed
                      </p>
                      <p className="text-xs text-gray-300 mt-0.5">
                        {errorMessage}
                      </p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleRetry}
                      className="flex items-center gap-1.5 text-xs font-semibold text-brand-gold border border-brand-gold/30 px-3 py-1.5 rounded-lg hover:bg-brand-gold/10 transition-all shrink-0"
                    >
                      <RotateCcw className="w-3 h-3" />
                      Retry
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
                    <form
                      onSubmit={handleSubmit}
                      noValidate
                      className="flex flex-col gap-2 max-w-lg"
                    >
                      <div className="flex flex-col sm:flex-row gap-3">
                        <div className="relative flex-1">
                          <input
                            type="email"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => {
                              setEmail(e.target.value);
                              if (validationError) setValidationError("");
                            }}
                            disabled={isSubmitting}
                            aria-label="Email address for newsletter"
                            aria-invalid={!!validationError}
                            className={`w-full bg-white/10 backdrop-blur-sm border ${validationError ? "border-red-400/60" : "border-white/20"} text-white placeholder-white/50 px-5 py-3.5 rounded-lg text-sm focus:outline-none focus:border-brand-gold focus:bg-white/15 transition-all duration-300 disabled:opacity-60`}
                            required
                          />
                        </div>

                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          type="submit"
                          disabled={isSubmitting}
                          className="bg-[#F7F4EE] hover:bg-white text-[#1F2A44] font-semibold text-sm px-7 py-3.5 rounded-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 shrink-0 disabled:opacity-75 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                          ) : (
                            <Send className="w-4 h-4" />
                          )}
                          <span>
                            {isSubmitting ? "Subscribing..." : "Subscribe"}
                          </span>
                        </motion.button>
                      </div>

                      {/* Validation error */}
                      {validationError && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-center gap-1 text-red-400 text-[11px] ml-1"
                        >
                          <AlertCircle className="w-3 h-3" /> {validationError}
                        </motion.p>
                      )}

                      <p className="text-[11px] text-white/40 mt-1">
                        We respect your privacy. Unsubscribe at any time. No
                        spam, ever.
                      </p>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </AnimatedReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
