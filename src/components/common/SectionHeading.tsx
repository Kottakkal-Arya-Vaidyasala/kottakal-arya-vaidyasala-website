"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: React.ReactNode | string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
  light?: boolean;
}

/**
 * Premium Section Heading — Cormorant Garamond editorial typography
 * with Framer Motion animated text reveal and expanding gold divider.
 */
export default function SectionHeading({
  title,
  subtitle,
  description,
  align = "center",
  className,
  light = false,
}: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const alignmentClass = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  }[align];

  return (
    <div
      ref={ref}
      className={cn("flex flex-col mb-12 md:mb-20", alignmentClass, className)}
    >
      {/* Subtitle / Eyebrow */}
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3",
            light ? "text-brand-gold/80" : "text-brand-gold",
          )}
        >
          {subtitle}
        </motion.span>
      )}

      {/* Main Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl xl:text-[3.25rem] font-bold leading-[1.15] font-heading tracking-wide",
          align === "center" ? "max-w-3xl" : "max-w-2xl",
          light ? "text-white" : "text-brand-primary",
        )}
      >
        {title}
      </motion.h2>

      {/* Optional Description */}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "text-base md:text-lg mt-5 leading-[1.6] font-light",
            align === "center" ? "max-w-2xl" : "max-w-xl",
            light ? "text-gray-300" : "text-brand-grey",
          )}
        >
          {description}
        </motion.p>
      )}

      {/* Animated Gold Divider */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-2 mt-5 origin-left"
        style={{
          originX: align === "center" ? 0.5 : align === "right" ? 1 : 0,
        }}
      >
        <div className="h-[2px] w-10 rounded-full bg-brand-gold" />
        <div className="h-2 w-2 rounded-full rotate-45 bg-brand-gold" />
        <div className="h-[2px] w-10 rounded-full bg-brand-gold" />
      </motion.div>
    </div>
  );
}
