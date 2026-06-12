import React from "react"
import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  align?: "left" | "center" | "right"
  className?: string
  light?: boolean
}

/**
 * Premium Section Heading featuring traditional Playfair Display typography
 * combined with modern spacing and an elegant gold divider.
 */
export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
  light = false,
}: SectionHeadingProps) {
  const alignmentClass = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  }[align]

  return (
    <div className={cn("flex flex-col mb-10 md:mb-16", alignmentClass, className)}>
      {subtitle && (
        <span
          className={cn(
            "text-xs md:text-sm font-semibold tracking-widest uppercase mb-2",
            light ? "text-brand-secondary/80" : "text-brand-primary"
          )}
        >
          {subtitle}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-bold leading-tight font-heading max-w-3xl",
          light ? "text-white" : "text-gray-900 dark:text-gray-100"
        )}
      >
        {title}
      </h2>
      
      {/* Decorative Gold Ayurvedic Accent Divider */}
      <div className="flex items-center gap-1.5 mt-4">
        <div className="h-[2px] w-8 rounded-full bg-brand-gold" />
        <div className="h-2 w-2 rounded-full rotate-45 bg-brand-gold" />
        <div className="h-[2px] w-8 rounded-full bg-brand-gold" />
      </div>
    </div>
  )
}
