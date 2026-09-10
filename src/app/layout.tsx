import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";
import WhatsAppButton from "@/components/common/WhatsAppButton";

import { defaultMetadata, localBusinessSchema } from "./metadata";

/* ── Premium Typography Setup ─────────────────────── */

/** Josefin Sans — elegant, geometric sans-serif for body text */
const josefinSans = Josefin_Sans({
  variable: "--font-josefin",
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
      className={`${josefinSans.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground overflow-x-hidden">
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
