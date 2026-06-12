import React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface SecondaryButtonProps extends React.ComponentProps<typeof Button> {
  children: React.ReactNode
  icon?: React.ReactNode
  iconPosition?: "left" | "right"
}

/**
 * Premium Ayurvedic Secondary Button.
 * Uses an outline border style with the brand gold/green, smooth hover transitions, 
 * and optional icon support.
 */
export default function SecondaryButton({
  children,
  className,
  icon,
  iconPosition = "right",
  ...props
}: SecondaryButtonProps) {
  return (
    <Button
      className={cn(
        "relative overflow-hidden font-medium border transition-all duration-300",
        "border-brand-gold bg-transparent text-brand-primary",
        "hover:bg-brand-primary hover:text-white hover:border-brand-primary",
        "px-6 py-5 rounded-md h-auto flex items-center justify-center gap-2",
        className
      )}
      {...props}
    >
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
