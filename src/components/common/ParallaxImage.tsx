"use client"

import React, { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

interface ParallaxImageProps {
  src: string
  alt: string
  className?: string
  /** Parallax intensity — higher = more movement. Default 40 */
  intensity?: number
  /** Enable zoom on scroll */
  zoom?: boolean
  /** Overlay gradient direction */
  overlay?: "none" | "bottom" | "top" | "full"
  /** Optional children rendered on top of the image */
  children?: React.ReactNode
}

/**
 * ParallaxImage — Framer Motion scroll-linked parallax image
 * with optional zoom effect, gradient overlays, and luxury reveal.
 */
export default function ParallaxImage({
  src,
  alt,
  className,
  intensity = 40,
  zoom = false,
  overlay = "none",
  children,
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  /* Parallax: Image moves slower than scroll */
  const y = useTransform(scrollYProgress, [0, 1], [-intensity, intensity])

  /* Zoom: Image scales up slightly as user scrolls into view */
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, zoom ? 1.08 : 1, zoom ? 1.12 : 1])

  const overlayGradient = {
    none: "",
    bottom: "bg-gradient-to-t from-brand-dark/70 via-brand-dark/20 to-transparent",
    top: "bg-gradient-to-b from-brand-dark/70 via-brand-dark/20 to-transparent",
    full: "bg-brand-dark/40",
  }

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden rounded-xl", className)}
    >
      {/* Parallax image layer */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-[-20%] w-[140%] h-[140%]"
      >
        {/* Use a div with background-image for better parallax performance */}
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${src})` }}
          role="img"
          aria-label={alt}
        />
      </motion.div>

      {/* Overlay gradient */}
      {overlay !== "none" && (
        <div className={cn("absolute inset-0 z-[1]", overlayGradient[overlay])} />
      )}

      {/* Children content on top */}
      {children && (
        <div className="relative z-[2]">{children}</div>
      )}
    </div>
  )
}
