import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";
import WhatsAppButton from "@/components/common/WhatsAppButton";

import { defaultMetadata, localBusinessSchema } from "./metadata";

/* ── Premium Typography Setup ─────────────────────── */

/** Plus Jakarta Sans — clean, modern body text with editorial weight */
const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

/** Cormorant Garamond — ultra-luxury editorial serif for headings */
const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = defaultMetadata;

/**
 * Root Layout — wraps every page with global providers,
 * navigation, footer, toast system, and floating WhatsApp CTA.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        {/* Responsive Sticky Header Navigation */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow">{children}</main>

        {/* Footer Navigation */}
        <Footer />

        {/* Floating WhatsApp CTA — persistent across all pages */}
        <WhatsAppButton />

        {/* Sonner Toast alerts */}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
