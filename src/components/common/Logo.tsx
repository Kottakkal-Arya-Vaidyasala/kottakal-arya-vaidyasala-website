"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Leaf } from "lucide-react";
import { motion } from "framer-motion";

interface LogoProps {
  /** Display variant */
  variant?: "full" | "icon" | "text";
  /** Size preset */
  size?: "sm" | "md" | "lg" | "xl";
  /** Light mode (white text for dark backgrounds) */
  light?: boolean;
  /** Link to homepage on click */
  linkToHome?: boolean;
  /** Additional class names */
  className?: string;
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
  sm: { logo: { w: 46, h: 46 }, icon: { w: 32, h: 32 }, text: "text-sm" },
  md: { logo: { w: 64, h: 64 }, icon: { w: 40, h: 40 }, text: "text-base" },
  lg: { logo: { w: 84, h: 84 }, icon: { w: 48, h: 48 }, text: "text-lg" },
  xl: { logo: { w: 104, h: 104 }, icon: { w: 56, h: 56 }, text: "text-xl" },
} as const;

/* ── Logo file paths ─────────────────────────────── */
const LOGO_PATHS = {
  full: "/images/logo/navy-logo.png",
  fullWhite: "/images/logo/gold-logo.png",
  fullSvg: "/images/logo/logo-full.svg",
  icon: "/images/logo/logo-icon.png",
} as const;

/**
 * Checks if the SVG logo file exists by trying to load it.
 * Falls back to PNG if SVG is not available.
 */
function getLogoSrc(light: boolean): string {
  // Prefer SVG for crisp rendering at all sizes
  // When the official logo SVG is available, this will auto-resolve
  // For now, fallback to PNG path
  return light ? LOGO_PATHS.fullWhite : LOGO_PATHS.full;
}

export default function Logo({
  variant = "full",
  size = "md",
  light = false,
  linkToHome = true,
  className,
}: LogoProps) {
  const dimensions = sizeMap[size];

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
              alt="Kottakkal Arya Vaidyasala - Premier Ayurvedic Clinic in Dubai"
              width={dimensions.icon.w}
              height={dimensions.icon.h}
              className="object-contain"
              priority
            />
          </div>
        );

      case "text":
        return (
          <div className={cn("flex flex-col", className)}>
            <span
              className={cn(
                "font-heading font-bold tracking-tight leading-none",
                dimensions.text,
                light ? "text-white" : "text-brand-dark",
              )}
            >
              KOTTAKKAL
            </span>
             <span
              className={cn(
                "w-full flex justify-between font-sans font-bold leading-none mt-1",
                light ? "text-brand-gold" : "text-brand-primary",
                size === "sm"
                  ? "text-[6.5px]"
                  : size === "md"
                    ? "text-[8px]"
                    : "text-[9.5px]"
              )}
            >
              <span>A</span>
              <span>R</span>
              <span>Y</span>
              <span>A</span>
              <span className="w-[2px] inline-block"></span>
              <span>V</span>
              <span>A</span>
              <span>I</span>
              <span>D</span>
              <span>Y</span>
              <span>A</span>
              <span>S</span>
              <span>A</span>
              <span>L</span>
              <span>A</span>
            </span>
          </div>
        );

      case "full":
      default:
        return (
          <div className="flex items-center gap-3.5">
            <div
              className={cn("relative flex-shrink-0", className)}
              style={{ width: dimensions.logo.w, height: dimensions.logo.h }}
            >
              <Image
                src={getLogoSrc(light)}
                alt="Kottakkal Arya Vaidyasala - Premier Ayurvedic Clinic in Dubai"
                width={dimensions.logo.w}
                height={dimensions.logo.h}
                className="w-full h-full object-contain"
                style={{ objectFit: "contain", maxHeight: dimensions.logo.h }}
                priority
              />
            </div>
            <div className="flex flex-col justify-center translate-y-[2px]">
              <span
                className={cn(
                  "font-bold tracking-tight leading-none",
                  size === "sm"
                    ? "text-lg"
                    : size === "md"
                      ? "text-xl"
                      : "text-2xl",
                  light ? "text-white" : "text-brand-primary",
                )}
                style={{
                  fontFamily:
                    "'Avenir Next Pro', 'Avenir Next', 'Avenir', sans-serif",
                }}
              >
                KOTTAKKAL
              </span>
              <span
                className={cn(
                  "w-full flex justify-between font-sans font-bold leading-none mt-0.5",
                  light ? "text-brand-gold" : "text-brand-primary",
                  size === "sm"
                    ? "text-[6.5px]"
                    : size === "md"
                      ? "text-[8px]"
                      : "text-[9.5px]"
                )}
              >
                <span>A</span>
                <span>R</span>
                <span>Y</span>
                <span>A</span>
                <span className="w-[2px] inline-block"></span>
                <span>V</span>
                <span>A</span>
                <span>I</span>
                <span>D</span>
                <span>Y</span>
                <span>A</span>
                <span>S</span>
                <span>A</span>
                <span>L</span>
                <span>A</span>
              </span>
            </div>
          </div>
        );
    }
  };

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
    );
  }

  return renderLogo();
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
  light?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const iconSizes = { sm: "w-8 h-8", md: "w-10 h-10", lg: "w-12 h-12" };
  const leafSizes = { sm: "w-4 h-4", md: "w-5 h-5", lg: "w-6 h-6" };
  const titleSizes = {
    sm: "text-base",
    md: "text-lg md:text-xl",
    lg: "text-xl md:text-2xl",
  };
  const subSizes = { sm: "text-[7px]", md: "text-[9px]", lg: "text-[10px]" };

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
            : "bg-brand-primary/10 border-brand-gold/30 group-hover:bg-brand-primary/20",
        )}
      >
        <Leaf
          className={cn(
            leafSizes[size],
            light ? "text-brand-gold" : "text-brand-primary",
          )}
        />
      </motion.div>
      <div className="flex flex-col">
        <span
          className={cn(
            "font-heading font-bold leading-none tracking-tight",
            titleSizes[size],
            light ? "text-white" : "text-brand-dark",
          )}
        >
          KOTTAKKAL
        </span>
        <span
          className={cn(
            "w-full flex justify-between font-sans font-bold leading-none mt-1",
            light ? "text-brand-gold" : "text-brand-primary",
            size === "sm"
              ? "text-[6.5px]"
              : size === "md"
                ? "text-[8px]"
                : "text-[9.5px]"
          )}
        >
          <span>A</span>
          <span>R</span>
          <span>Y</span>
          <span>A</span>
          <span className="w-[2px] inline-block"></span>
          <span>V</span>
          <span>A</span>
          <span>I</span>
          <span>D</span>
          <span>Y</span>
          <span>A</span>
          <span>S</span>
          <span>A</span>
          <span>L</span>
          <span>A</span>
        </span>
      </div>
    </Link>
  );
}
