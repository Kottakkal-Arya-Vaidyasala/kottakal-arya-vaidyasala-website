import { Metadata } from "next"

/**
 * Resolves the correct base URL for OG images.
 * - On Vercel: uses VERCEL_URL (automatically injected by Vercel)
 * - In production with custom domain: uses the hardcoded production URL
 * - Locally: falls back to localhost
 */
const getBaseUrl = () => {
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }
  return "https://www.kottakkalaryavaidyasala.ae"
}

const BASE_URL = getBaseUrl()

const siteConfig = {
  name: "Kottakkal Arya Vaidyasala",
  fullName: "Kottakkal Arya Vaidyasala Ayurvedic & Homeopathic Medical Center",
  shortName: "Kottakkal Ayurveda Abu Dhabi",
  tagline: "Authentic Ayurveda & Homeopathy — Abu Dhabi's Most Trusted Wellness Destination",

  /**
   * Meta description — 155 chars, keyword-rich, global audience in Abu Dhabi/UAE targeted.
   * Triggers high CTR on Google Search with action-oriented language.
   */
  description:
    "Kottakkal Arya Vaidyasala Abu Dhabi — Authentic Ayurvedic & Homeopathic treatments by expert doctors. Shirodhara, Abhyangam, Pizhichil, Kizhi therapies & more. Abu Dhabi's most trusted Ayurveda & Homeopathy centre. Book now.",

  /**
   * Extended description — for website body copy, schema, and Google Business.
   * Written to rank for global Ayurveda & wellness searches in UAE & Abu Dhabi.
   */
  longDescription:
    "Rooted in the centuries-old healing tradition of Kottakkal, Kerala, Kottakkal Arya Vaidyasala is Abu Dhabi's most trusted destination for authentic Ayurvedic and Homeopathic care. Our experienced classical physicians bring time-tested healing directly to you in Abu Dhabi, UAE. We offer a comprehensive range of classical therapies including Abhyangam, Shirodhara, Pizhichil, Elakizhi, Njavara Kizhi, Nasyam, Kati Vasti, Janu Vasti, Greeva Vasti, Ksheeradhara, Thalapothichil, Udwarthanam, Shirovasti, Tharpanam, and personalised Homeopathic consultations — every treatment rooted in time-tested Shastra-based medicine with no shortcuts and no compromises. Whether you are managing chronic pain, joint disorders, stress, skin conditions, digestive issues, or simply seeking a holistic wellness reset, our doctors create a bespoke treatment plan tailored to your unique body constitution. Thousands of patients from across the globe — UAE, GCC, Europe, and beyond — trust us for world-class Ayurvedic and Homeopathic care, now conveniently available in the heart of Abu Dhabi.",

  url: "https://www.kottakkalaryavaidyasala.ae",
  telephone: "+971 54 200 9935",
  email: "kottakkalaryavaidyasalaauh@gmail.com",

  address: {
    streetAddress: "Ground floor, Hamed Center, Al Danah Zone 1, Electra Street",
    addressLocality: "Abu Dhabi",
    addressRegion: "Abu Dhabi",
    postalCode: "00000",
    addressCountry: "AE",
  },

  hours: "Mo-Su 09:00-21:00",

  /**
   * Target keywords — global audience + UAE/Abu Dhabi Ayurveda intent signals
   */
  keywords: [
    "Kottakkal Arya Vaidyasala Abu Dhabi",
    "Ayurvedic clinic Abu Dhabi",
    "Ayurveda UAE",
    "Homeopathy Abu Dhabi",
    "best Ayurveda clinic Abu Dhabi",
    "Ayurvedic treatment Abu Dhabi",
    "Ayurvedic doctor Abu Dhabi",
    "Homeopathic doctor UAE",
    "Shirodhara Abu Dhabi",
    "Abhyangam Abu Dhabi",
    "Pizhichil Abu Dhabi",
    "Elakizhi Abu Dhabi",
    "Njavara Kizhi Abu Dhabi",
    "Kati Vasti Abu Dhabi",
    "Nasyam Abu Dhabi",
    "Kizhi therapy Abu Dhabi",
    "Ayurvedic massage Abu Dhabi",
    "classical Ayurveda UAE",
    "best Ayurveda clinic UAE",
    "traditional Ayurveda Abu Dhabi",
    "Udwarthanam Abu Dhabi",
    "Shirovasti Abu Dhabi",
    "Thalapothichil Abu Dhabi",
    "holistic wellness Abu Dhabi",
    "natural healing Abu Dhabi",
    "chronic pain Ayurveda UAE",
  ],
}

/**
 * ═══════════════════════════════════════════════════════════
 * Default Metadata — SEO-optimised for Google Search Console
 * Targeting: Global audience in Abu Dhabi & UAE
 * ═══════════════════════════════════════════════════════════
 */
export const defaultMetadata: Metadata = {
  title: {
    default: "Kottakkal Arya Vaidyasala Abu Dhabi | Authentic Ayurveda & Homeopathy in UAE",
    template: `%s | Kottakkal Arya Vaidyasala — Ayurveda Abu Dhabi`,
  },

  description: siteConfig.description,

  keywords: siteConfig.keywords,

  metadataBase: new URL(BASE_URL),

  icons: {
    icon: [
      { url: "/favicon.png", sizes: "any", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  alternates: {
    canonical: "/",
  },

  /**
   * Open Graph — Controls the preview card on WhatsApp, Facebook,
   * LinkedIn, Telegram etc. when anyone shares your link.
   */
  openGraph: {
    title: "Kottakkal Arya Vaidyasala | Authentic Ayurveda & Homeopathy — Abu Dhabi, UAE",
    description:
      "Abu Dhabi's most trusted Ayurveda & Homeopathy centre. Expert Shirodhara, Abhyangam, Pizhichil, Elakizhi, Kizhi therapies & Homeopathy. Classical treatments, world-class care. Book now: +971 54 200 9935",
    url: siteConfig.url,
    siteName: siteConfig.fullName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/og.image.webp`,
        width: 1200,
        height: 630,
        alt: "Kottakkal Arya Vaidyasala Abu Dhabi — Authentic Ayurveda & Homeopathy in UAE",
        type: "image/webp",
      },
    ],
  },

  /**
   * Twitter / X card — large image preview on Twitter shares
   */
  twitter: {
    card: "summary_large_image",
    title: "Kottakkal Arya Vaidyasala | Authentic Ayurveda Abu Dhabi",
    description:
      "Abu Dhabi's most trusted classical Ayurveda & Homeopathy centre. Shirodhara, Abhyangam, Pizhichil, Kizhi therapies & more. World-class care in the heart of UAE.",
    images: [`${BASE_URL}/og.image.webp`],
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

  /**
   * Additional meta tags for geo-targeting and authorship
   */
  other: {
    "geo.region": "AE-AZ",
    "geo.placename": "Abu Dhabi",
    "geo.position": "24.4697;54.3698",
    "ICBM": "24.4697, 54.3698",
    "audience": "Global wellness seekers in UAE, expatriates in Abu Dhabi, international patients UAE",
  },
}

/**
 * ═══════════════════════════════════════════════════════
 * JSON-LD Structured Data — LocalBusiness + MedicalBusiness
 * Maximises Google Knowledge Panel, rich snippets & Maps
 * ═══════════════════════════════════════════════════════
 */
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "LocalBusiness"],
  "name": siteConfig.fullName,
  "alternateName": [siteConfig.name, siteConfig.shortName, "Kottakkal Ayurveda Abu Dhabi"],
  "image": `${BASE_URL}/og.image.webp`,
  "logo": `${siteConfig.url}/favicon.png`,
  "@id": `${siteConfig.url}/#local-business`,
  "url": siteConfig.url,
  "telephone": siteConfig.telephone,
  "email": siteConfig.email,
  "priceRange": "$$",
  "description": siteConfig.longDescription,
  "slogan": siteConfig.tagline,
  "foundingDate": "2010",
  "areaServed": [
    { "@type": "City", "name": "Abu Dhabi" },
    { "@type": "Country", "name": "United Arab Emirates" },
  ],
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
    "latitude": 24.4697,
    "longitude": 54.3698,
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "09:00",
      "closes": "21:00",
    },
  ],
  "medicalSpecialty": ["Ayurvedic", "Homeopathic", "Traditional Medicine"],
  "hasMap": "https://maps.google.com/?q=Kottakkal+Arya+Vaidyasala+Abu+Dhabi",
  "sameAs": [
    "https://www.facebook.com/kottakkalaryavaidyasalaabudhabi",
    "https://www.instagram.com/kottakkalaryavaidyasalaabudhabi",
  ],
  "knowsAbout": [
    "Abhyangam",
    "Shirodhara",
    "Pizhichil",
    "Elakizhi",
    "Njavara Kizhi",
    "Nasyam",
    "Marma Abhyangam",
    "Podi Kizhi",
    "Aavi Kizhi",
    "Naranga Kizhi",
    "Udwarthanam",
    "Utsadanam",
    "Ksheeradhara",
    "Kashayadhara",
    "Pichu",
    "Kati Vasti",
    "Janu Vasti",
    "Greeva Vasti",
    "Prishta Vasti",
    "Tharpanam",
    "Akshi Dhara",
    "Thalapothichil",
    "Nasya Shodhana",
    "Karnapoornam",
    "Lepam",
    "Snehavasthy",
    "Shirovasti",
    "Herbal Facial",
    "Homeopathy",
    "Classical Ayurveda",
    "Kerala Ayurveda",
    "Ayurvedic Medicine",
    "Chronic Pain Management",
  ],
}
