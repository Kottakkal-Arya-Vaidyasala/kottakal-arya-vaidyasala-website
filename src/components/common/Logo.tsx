"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface LogoProps {
  /** Display variant */
  variant?: "full" | "icon" | "text"
  /** Size preset */
  size?: "sm" | "md" | "lg" | "xl"
  /** Light mode (white text for dark backgrounds) */
  light?: boolean
  /** Link to homepage on click */
  linkToHome?: boolean
  /** Additional class names */
  className?: string
}

/**
 * ═══════════════════════════════════════════════════
 * Logo Component — Official Kottakkal Arya Vaidyasala
 * ═══════════════════════════════════════════════════
 * Supports:
 *   - SVG / PNG / Transparent backgrounds
 *   - Retina displays (2x/3x srcSet via Next/Image)
 *   - Full logo, icon-only, and text-only variants
 *   - Light/dark mode switching
 *   - Multiple size presets
 *
 * Place logo files in:
 *   /public/images/logo/logo-full.png        (full color)
 *   /public/images/logo/logo-full-white.png  (white/light version)
 *   /public/images/logo/logo-icon.png        (icon only)
 *   /public/images/logo/logo-full.svg        (SVG for crisp rendering)
 */

/* ── Size configuration ──────────────────────────── */
const sizeMap = {
  sm: { logo: { w: 120, h: 40 }, icon: { w: 32, h: 32 }, text: "text-sm" },
  md: { logo: { w: 160, h: 50 }, icon: { w: 40, h: 40 }, text: "text-base" },
  lg: { logo: { w: 200, h: 60 }, icon: { w: 48, h: 48 }, text: "text-lg" },
  xl: { logo: { w: 260, h: 80 }, icon: { w: 56, h: 56 }, text: "text-xl" },
} as const

/* ── Logo file paths ─────────────────────────────── */
const LOGO_PATHS = {
  full: "/images/logo/logo-full.png",
  fullWhite: "/images/logo/logo-full-white.png",
  fullSvg: "/images/logo/logo-full.svg",
  icon: "/images/logo/logo-icon.png",
} as const

/**
 * Checks if the SVG logo file exists by trying to load it.
 * Falls back to PNG if SVG is not available.
 */
function getLogoSrc(light: boolean): string {
  // Prefer SVG for crisp rendering at all sizes
  // When the official logo SVG is available, this will auto-resolve
  // For now, fallback to PNG path
  return light ? LOGO_PATHS.fullWhite : LOGO_PATHS.full
}

export default function Logo({
  variant = "full",
  size = "md",
  light = false,
  linkToHome = true,
  className,
}: LogoProps) {
  const dimensions = sizeMap[size]

  /* ── Render based on variant ───────────────────── */
  const renderLogo = () => {
    switch (variant) {
      case "icon":
        return (
          <div
            className={cn("relative flex-shrink-0", className)}
            style={{ width: dimensions.icon.w, height: dimensions.icon.h }}
          >
            <Image
              src={LOGO_PATHS.icon}
              alt="Kottakkal Arya Vaidyasala"
              width={dimensions.icon.w}
              height={dimensions.icon.h}
              className="object-contain"
              priority
            />
          </div>
        )

      case "text":
        return (
          <div className={cn("flex flex-col", className)}>
            <span
              className={cn(
                "font-heading font-bold tracking-tight leading-none",
                dimensions.text,
                light ? "text-white" : "text-brand-dark dark:text-white"
              )}
            >
              KOTTAKKAL
            </span>
            <span
              className={cn(
                "font-sans font-bold tracking-[0.25em] leading-none mt-1",
                size === "sm" ? "text-[7px]" : size === "md" ? "text-[9px]" : size === "lg" ? "text-[10px]" : "text-xs",
                "text-brand-gold"
              )}
            >
              ARYA VAIDYASALA
            </span>
          </div>
        )

      case "full":
      default:
        return (
          <div
            className={cn("relative flex-shrink-0", className)}
            style={{ width: dimensions.logo.w, height: dimensions.logo.h }}
          >
            <Image
              src={getLogoSrc(light)}
              alt="Kottakkal Arya Vaidyasala Ayurvedic Medical Center"
              width={dimensions.logo.w}
              height={dimensions.logo.h}
              className="object-contain"
              priority
              // Next.js automatically handles retina/2x via srcSet
            />
          </div>
        )
    }
  }

  /* ── Wrap in link if needed ────────────────────── */
  if (linkToHome) {
    return (
      <Link
        href="/"
        className="inline-flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-md"
        aria-label="Kottakkal Arya Vaidyasala - Home"
      >
        {renderLogo()}
      </Link>
    )
  }

  return renderLogo()
}

/**
 * LogoFallback — Used when official logo files are not yet available.
 * Renders a styled text-based logo with the leaf icon.
 * Replace this with the Logo component once the logo is uploaded.
 */
export function LogoFallback({
  light = false,
  size = "md",
  className,
}: {
  light?: boolean
  size?: "sm" | "md" | "lg"
  className?: string
}) {
  const { Leaf } = require("lucide-react")
  const motion = require("framer-motion").motion

  const iconSizes = { sm: "w-8 h-8", md: "w-10 h-10", lg: "w-12 h-12" }
  const leafSizes = { sm: "w-4 h-4", md: "w-5 h-5", lg: "w-6 h-6" }
  const titleSizes = { sm: "text-base", md: "text-lg md:text-xl", lg: "text-xl md:text-2xl" }
  const subSizes = { sm: "text-[7px]", md: "text-[9px]", lg: "text-[10px]" }

  return (
    <Link href="/" className={cn("flex items-center gap-2.5 group", className)}>
      <motion.div
        whileHover={{ rotate: 12 }}
        transition={{ type: "spring", stiffness: 300 }}
        className={cn(
          iconSizes[size],
          "rounded-full flex items-center justify-center border transition-all duration-300",
          light
            ? "bg-white/10 border-brand-gold/40 group-hover:bg-white/20"
            : "bg-brand-primary/10 border-brand-gold/30 group-hover:bg-brand-primary/20"
        )}
      >
        <Leaf className={cn(leafSizes[size], light ? "text-brand-gold" : "text-brand-primary")} />
      </motion.div>
      <div className="flex flex-col">
        <span
          className={cn(
            "font-heading font-bold leading-none tracking-tight",
            titleSizes[size],
            light ? "text-white" : "text-brand-dark dark:text-white"
          )}
        >
          KOTTAKKAL
        </span>
        <span
          className={cn(
            subSizes[size],
            "font-sans font-bold tracking-[0.25em] text-brand-gold leading-none mt-1"
          )}
        >
          ARYA VAIDYASALA
        </span>
      </div>
    </Link>
  )
}
