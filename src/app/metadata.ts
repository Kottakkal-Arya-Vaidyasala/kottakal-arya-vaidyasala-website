import { Metadata } from "next"

const siteConfig = {
  name: "Kottakkal Arya Vaidyasala Ayurvedic Medical Center",
  shortName: "Kottakkal Ayurveda",
  description: "Experience premium traditional Ayurvedic healing and wellness treatments in Abu Dhabi, UAE. Expert doctor consultations, therapeutic massages, and holistic care.",
  url: "https://kottakkal-ayurveda.ae", // Replace with verified domain on production
  telephone: "+971 55 267 1598",
  email: "kottakkalaryavaidyasalaauh@gmail.com",
  address: {
    streetAddress: "Airport Road, Near Al Wahda Mall",
    addressLocality: "Abu Dhabi",
    addressRegion: "Abu Dhabi",
    postalCode: "00000",
    addressCountry: "AE",
  },
  hours: "Mo-Su 09:00-21:00",
}

/**
 * Standard reusable SEO metadata configuration.
 */
export const defaultMetadata: Metadata = {
  title: {
    default: `${siteConfig.name} - Abu Dhabi`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // Standard OG image file path
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Traditional Ayurvedic Healing`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/og-image.jpg"],
    creator: "@KottakkalAUH",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Healthcare",
}

/**
 * JSON-LD structured data schema for search engines (LocalBusiness SEO foundation)
 */
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": siteConfig.name,
  "alternateName": siteConfig.shortName,
  "image": `${siteConfig.url}/og-image.jpg`,
  "@id": `${siteConfig.url}/#local-business`,
  "url": siteConfig.url,
  "telephone": siteConfig.telephone,
  "email": siteConfig.email,
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": siteConfig.address.streetAddress,
    "addressLocality": siteConfig.address.addressLocality,
    "addressRegion": siteConfig.address.addressRegion,
    "postalCode": siteConfig.address.postalCode,
    "addressCountry": siteConfig.address.addressCountry,
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 24.4697, // Approximate coordinates for Airport Road / Al Wahda Mall area
    "longitude": 54.3698,
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "21:00"
    }
  ],
  "medicalSpecialty": "Ayurvedic",
  "description": siteConfig.description,
}
