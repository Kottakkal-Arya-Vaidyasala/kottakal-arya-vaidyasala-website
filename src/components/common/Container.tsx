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
        "mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-10 2xl:px-16",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
