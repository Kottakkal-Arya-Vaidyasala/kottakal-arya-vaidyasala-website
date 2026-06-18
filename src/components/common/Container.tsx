import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  as?: React.ElementType;
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
        "mx-auto w-full max-w-[1440px] px-3 sm:px-4 lg:px-6 xl:px-8",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
