"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SecondaryButtonProps extends React.ComponentProps<typeof Button> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

/**
 * Premium Ayurvedic Secondary Button — editorial ghost styling
 * with gold accents, Framer Motion hover depth, and smooth transitions.
 */
export default function SecondaryButton({
  children,
  className,
  icon,
  iconPosition = "right",
  ...props
}: SecondaryButtonProps) {
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
          /* Navy fill style */
          "bg-brand-primary text-white",
          "border border-brand-primary/80 hover:border-brand-gold",
          /* Hover state */
          "hover:bg-brand-gold hover:text-brand-dark",
          /* Shadow & transition */
          "shadow-md hover:shadow-2xl hover:shadow-brand-gold/30",
          "transition-all duration-500 ease-out",
          className,
        )}
        {...props}
      >
        {icon && iconPosition === "left" && (
          <span className="transition-transform duration-300 group-hover:-translate-x-0.5">
            {icon}
          </span>
        )}
        <span className="text-sm font-semibold tracking-wide">{children}</span>
        {icon && iconPosition === "right" && (
          <span className="transition-transform duration-300 group-hover:translate-x-0.5">
            {icon}
          </span>
        )}
      </Button>
    </motion.div>
  );
}
