"use client"

import React, { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { siteConfig } from "@/data/site"

/**
 * ═══════════════════════════════════════════════════
 * Trust Indicators — Animated Counter Stats Strip
 * ═══════════════════════════════════════════════════
 * Full-width gold accent bar displaying key trust metrics.
 * Numbers animate counting up when scrolled into view.
 */

function AnimatedCounter({ target, suffix = "" }: { target: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [count, setCount] = useState(0)

  /* Extract numeric part from target string like "5000+" or "4.9" */
  const numericValue = parseFloat(target.replace(/[^0-9.]/g, ""))
  const isDecimal = target.includes(".")
  const hasPlus = target.includes("+")

  useEffect(() => {
    if (!isInView) return

    const duration = 2000
    const steps = 60
    const increment = numericValue / steps
    let current = 0
    let step = 0

    const timer = setInterval(() => {
      step++
      current = Math.min(current + increment, numericValue)
      setCount(current)

      if (step >= steps) {
        setCount(numericValue)
        clearInterval(timer)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isInView, numericValue])

  return (
    <span ref={ref} className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-white tabular-nums">
      {isDecimal ? count.toFixed(1) : Math.floor(count).toLocaleString()}
      {hasPlus && "+"}
      {suffix}
    </span>
  )
}

export default function TrustIndicators() {
  const stats = siteConfig.stats

  return (
    <section className="relative py-14 md:py-16 bg-brand-dark overflow-hidden">
      {/* Subtle gold gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-primary/10 to-brand-dark pointer-events-none" />
      <div className="absolute inset-0 dot-pattern opacity-10 pointer-events-none" />

      {/* Top gold line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.6,
                delay: idx * 0.1,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="flex flex-col items-center text-center relative"
            >
              {/* Vertical divider between items */}
              {idx > 0 && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-brand-gold/15 hidden md:block" />
              )}

              <AnimatedCounter target={stat.value} suffix={stat.value === "4.9" ? "★" : ""} />
              <span className="text-xs md:text-sm text-gray-400 font-medium tracking-wide mt-2 uppercase">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom gold line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
    </section>
  )
}
