import React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface PrimaryButtonProps extends React.ComponentProps<typeof Button> {
  children: React.ReactNode
  icon?: React.ReactNode
  iconPosition?: "left" | "right"
  pulse?: boolean
}

/**
 * Premium Ayurvedic Primary Button.
 * Extends the baseline Button with a custom hover glow, gold highlights, 
 * optionally a subtle pulse micro-animation, and slotting for icons.
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
    <Button
      className={cn(
        "relative overflow-hidden font-medium text-white transition-all duration-300 shadow-md",
        "bg-brand-primary hover:bg-brand-dark hover:shadow-lg hover:shadow-brand-primary/20",
        "border border-brand-primary hover:border-brand-gold/40",
        "px-6 py-5 rounded-md h-auto flex items-center justify-center gap-2",
        pulse && "animate-pulse hover:animate-none",
        className
      )}
      {...props}
    >
      {/* Decorative inner light sweep on hover */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-none duration-1000" />
      
      {icon && iconPosition === "left" && (
        <span className="transition-transform duration-300 group-hover:translate-x-[-2px]">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className="transition-transform duration-300 group-hover:translate-x-[2px]">
          {icon}
        </span>
      )}
    </Button>
  )
}
