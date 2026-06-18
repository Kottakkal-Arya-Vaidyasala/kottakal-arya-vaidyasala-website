"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PrimaryButtonProps extends React.ComponentProps<typeof Button> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  pulse?: boolean;
}

/**
 * Premium Primary Button — Champagne Gold with Midnight Navy text.
 * Framer Motion micro-interactions, inner light sweep, and luxury hover depth.
 */
export default function PrimaryButton({
  children,
  className,
  icon,
  iconPosition = "right",
  pulse = false,
  ...props
}: PrimaryButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="inline-block"
    >
      <Button
        className={cn(
          /* Base layout */
          "group relative overflow-hidden font-medium",
          "px-7 py-5 rounded-md h-auto flex items-center justify-center gap-2.5",
          /* Colors — Midnight Navy CTA */
          "bg-brand-primary hover:bg-brand-primary/90 text-[#ffffff]",
          "border border-brand-primary/80 hover:border-brand-primary",
          /* Shadow & depth */
          "shadow-md hover:shadow-2xl hover:shadow-brand-primary/40",
          /* Transition */
          "transition-all duration-500 ease-out",
          /* Pulse animation option */
          pulse && "animate-pulse-glow",
          className,
        )}
        {...props}
      >
        {/* Inner shimmer light sweep on hover */}
        <span
          className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/[0.25] to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out"
          aria-hidden="true"
        />

        {icon && iconPosition === "left" && (
          <span className="relative z-10 transition-transform duration-300 group-hover:-translate-x-0.5">
            {icon}
          </span>
        )}
        <span className="relative z-10 text-sm font-semibold tracking-wide">
          {children}
        </span>
        {icon && iconPosition === "right" && (
          <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5">
            {icon}
          </span>
        )}
      </Button>
    </motion.div>
  );
}
