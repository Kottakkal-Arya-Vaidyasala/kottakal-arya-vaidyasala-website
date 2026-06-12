import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import { Toaster } from "@/components/ui/sonner"

import { defaultMetadata, localBusinessSchema } from "./metadata"

// Set up Inter for body text
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
})

// Set up Playfair Display for headers
const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
})

export const metadata = defaultMetadata

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {/* Responsive Sticky Header Navigation */}
        <Navbar />
        
        {/* Main Content Area */}
        <main className="flex-grow">
          {children}
        </main>
        
        {/* Footer Navigation */}
        <Footer />
        
        {/* Sonner Toast alerts */}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  )
}
