"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface AnimatedRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "fade";
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
  /** Enable stagger mode — children will animate one by one */
  stagger?: boolean;
  staggerDelay?: number;
}

/**
 * AnimatedReveal — Re-engineered to use GSAP ScrollTrigger
 * Provides buttery-smooth, high-performance luxury timeline animations.
 */
export default function AnimatedReveal({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 1.2, // Luxury duration
  threshold = 0.15,
  once = true,
  stagger = false,
  staggerDelay = 0.1,
}: AnimatedRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Luxury physics: snappy, with zoom-out, zoom-in, and depth
  const directionMap: Record<string, any> = {
    up: { x: 0, y: 100, scale: 1.05 },
    down: { x: 0, y: -100, scale: 1.05 },
    left: { x: 100, y: 0, scale: 1.05 }, // Comes from the right
    right: { x: -100, y: 0, scale: 1.05 }, // Comes from the left
    fade: { x: 0, y: 0, scale: 0.9 }, // Zoom in for fade
  };

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const offset = directionMap[direction];
      const elements = stagger
        ? gsap.utils.toArray(".gsap-stagger-item", containerRef.current)
        : [containerRef.current];

      // Initial state
      gsap.set(elements, {
        opacity: 0,
        x: offset.x,
        y: offset.y,
        scale: offset.scale,
        transformOrigin: "center center",
      });

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: `top ${100 - threshold * 100}%`,
        once: once,
        onEnter: () => {
          gsap.to(elements, {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration: duration,
            delay: delay / 1000,
            stagger: stagger ? staggerDelay : 0,
            ease: "expo.out", // Snappy, luxury ease
            overwrite: "auto",
          });
        },
        onLeaveBack: once
          ? undefined
          : () => {
              gsap.to(elements, {
                opacity: 0,
                x: offset.x,
                y: offset.y,
                scale: offset.scale,
                duration: duration * 0.8,
                stagger: stagger ? staggerDelay : 0,
                ease: "power3.in",
                overwrite: "auto",
              });
            },
      });
    },
    {
      scope: containerRef,
      dependencies: [direction, delay, duration, threshold, once, stagger, staggerDelay],
    }
  );

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}

/**
 * StaggerItem — Must be used inside an AnimatedReveal with stagger={true}.
 * The parent's GSAP animation controls the reveal.
 */
export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "fade";
  duration?: number;
}) {
  return <div className={cn("gsap-stagger-item", className)}>{children}</div>;
}
