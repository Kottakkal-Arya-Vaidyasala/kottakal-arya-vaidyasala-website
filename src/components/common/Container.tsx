import React from "react"
import { cn } from "@/lib/utils"

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  as?: React.ElementType
}

/**
 * A reusable layout container that enforces standard margins, widths,
 * and horizontal alignment (centered container) across all viewport widths.
 */
export default function Container({
  children,
  className,
  as: Component = "div",
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
