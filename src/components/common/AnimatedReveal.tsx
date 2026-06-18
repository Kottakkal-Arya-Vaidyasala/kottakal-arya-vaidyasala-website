"use client"

import React, { useRef } from "react"
import { motion, useInView, type Variants } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedRevealProps {
  children: React.ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right" | "fade"
  delay?: number
  duration?: number
  threshold?: number
  once?: boolean
  /** Enable stagger mode — children will animate one by one */
  stagger?: boolean
  staggerDelay?: number
}

/**
 * AnimatedReveal — Framer Motion scroll-triggered reveal animation.
 * Uses `useInView` for performant viewport detection and `motion.div`
 * for silky-smooth 60fps animations with GPU acceleration.
 */
export default function AnimatedReveal({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.7,
  threshold = 0.15,
  once = true,
  stagger = false,
  staggerDelay = 0.1,
}: AnimatedRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {
    once,
    amount: threshold,
    margin: "0px 0px -100px 0px",
  })

  /* Direction-based initial/target transform values */
  const directionMap: Record<string, { x: number; y: number }> = {
    up: { x: 0, y: 30 },
    down: { x: 0, y: -30 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 },
    fade: { x: 0, y: 0 },
  }

  const offset = directionMap[direction]

  /* Stagger container variant — animates children sequentially */
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay / 1000,
      },
    },
  }

  /* Individual item variant */
  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      x: offset.x,
      y: offset.y,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        ease: [0.16, 1, 0.3, 1] as const, /* Luxury cubic bezier — smooth deceleration */
      },
    },
  }

  /* If stagger mode, wrap children in a motion container */
  if (stagger) {
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className={className}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={itemVariants}
      transition={{
        delay: delay / 1000,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/**
 * StaggerItem — Must be used inside an AnimatedReveal with stagger={true}.
 * Each item will animate in sequence according to the parent's staggerDelay.
 */
export function StaggerItem({
  children,
  className,
  direction = "up",
  duration = 0.7,
}: {
  children: React.ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right" | "fade"
  duration?: number
}) {
  const directionMap: Record<string, { x: number; y: number }> = {
    up: { x: 0, y: 30 },
    down: { x: 0, y: -30 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 },
    fade: { x: 0, y: 0 },
  }

  const offset = directionMap[direction]

  const variants: Variants = {
    hidden: { opacity: 0, x: offset.x, y: offset.y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  }

  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  )
}
