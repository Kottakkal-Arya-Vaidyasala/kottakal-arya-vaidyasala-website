import React from "react";
import Link from "next/link";
import Container from "./Container";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  bgImage?: string;
}

/**
 * Premium Page Header for subpages.
 * Provides a rich background gradient/pattern overlay, heading styling,
 * and custom breadcrumb trail component.
 */
export default function PageHeader({
  title,
  subtitle,
  breadcrumbs = [],
  bgImage,
}: PageHeaderProps) {
  return (
    <div className="relative overflow-hidden bg-brand-dark py-16 md:py-24 text-white">
      {/* Background patterns */}
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-overlay"
        style={{
          backgroundImage: bgImage ? `url(${bgImage})` : "none",
          backgroundColor: bgImage ? "transparent" : "#084F2A",
        }}
      />
      {/* Golden top decorative gradient line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-gold via-brand-secondary to-brand-gold" />

      {/* Subtly animated background glow elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-brand-primary/20 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-gold/10 rounded-full filter blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center">
          {subtitle && (
            <p className="text-xs md:text-sm font-semibold uppercase tracking-widest text-brand-gold mb-3">
              {subtitle}
            </p>
          )}

          <h1 className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold font-heading mb-6 tracking-wide drop-shadow-md">
            {title}
          </h1>

          {/* Breadcrumbs Navigation */}
          {breadcrumbs.length > 0 && (
            <nav className="flex items-center gap-2 text-sm text-gray-300 bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/5">
              <Link
                href="/"
                className="hover:text-brand-gold transition-colors duration-200"
              >
                Home
              </Link>
              {breadcrumbs.map((item, idx) => (
                <React.Fragment key={idx}>
                  <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="hover:text-brand-gold transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-brand-gold font-medium">
                      {item.label}
                    </span>
                  )}
                </React.Fragment>
              ))}
            </nav>
          )}
        </div>
      </Container>
    </div>
  );
}
