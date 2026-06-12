"use client"

import React, { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface AnimatedRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  direction?: "up" | "down" | "left" | "right" | "fade"
  delay?: number // in milliseconds
  duration?: number // in milliseconds
  threshold?: number // 0 to 1
  once?: boolean
}

/**
 * AnimatedReveal utilizes IntersectionObserver to trigger smooth, premium 
 * animations as sections enter the user's viewport.
 */
export default function AnimatedReveal({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 800,
  threshold = 0.1,
  once = true,
  ...props
}: AnimatedRevealProps) {
  const [isRevealed, setIsRevealed] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true)
          if (once && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!once) {
          setIsRevealed(false)
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px", // triggers slightly before entering to avoid page jump feel
      }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, once])

  // Map directions to initial translate states
  const directionClasses = {
    fade: "opacity-0",
    up: "opacity-0 translate-y-12",
    down: "opacity-0 -translate-y-12",
    left: "opacity-0 translate-x-12",
    right: "opacity-0 -translate-x-12",
  }

  const activeClasses = {
    fade: "opacity-100 translate-0",
    up: "opacity-100 translate-y-0",
    down: "opacity-100 translate-y-0",
    left: "opacity-100 translate-x-0",
    right: "opacity-100 translate-x-0",
  }

  const animationStyle = {
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
  }

  return (
    <div
      ref={ref}
      style={animationStyle}
      className={cn(
        "transition-all ease-out",
        isRevealed ? activeClasses[direction] : directionClasses[direction],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
