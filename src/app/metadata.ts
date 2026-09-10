import { Metadata } from "next"

const siteConfig = {
  name: "Kottakkal Arya Vaidyasala",
  fullName: "Kottakkal Arya Vaidyasala Ayurvedic & Homeopathic Medical Center",
  shortName: "Kottakkal Ayurveda Abu Dhabi",
  tagline: "Authentic Ayurveda & Homeopathy — Trusted by Kerala's Community in Abu Dhabi",

  /**
   * Meta description — 155 chars, keyword-rich, Trivandrum/Kerala audience targeted.
   * Triggers high CTR on Google Search with action-oriented language.
   */
  description:
    "Kottakkal Arya Vaidyasala Abu Dhabi — Authentic Ayurvedic & Homeopathic treatments by expert Kerala doctors. Shirodhara, Abhyangam, Pizhichil, Kizhi therapies & more. Trusted by thousands from Trivandrum & Kerala. Book now.",

  /**
   * Extended description — for website body copy, schema, and Google Business.
   * Written to rank for Kerala expat + Trivandrum health tourism searches.
   */
  longDescription:
    "Rooted in the centuries-old healing tradition of Kottakkal, Kerala, and now proudly serving Abu Dhabi's thriving Malayali community, Kottakkal Arya Vaidyasala is the UAE's most trusted destination for authentic Ayurvedic and Homeopathic care. Our experienced Kerala-trained physicians bring the same classical healing philosophy from Trivandrum, Thrissur, and Kottakkal directly to you in Abu Dhabi. We offer a comprehensive range of classical therapies including Abhyangam, Shirodhara, Pizhichil, Elakizhi, Njavara Kizhi, Nasyam, Kati Vasti, Janu Vasti, Greeva Vasti, Ksheeradhara, Thalapothichil, Udwarthanam, Shirovasti, Tharpanam, and personalised Homeopathic consultations — every treatment rooted in time-tested Shastra-based medicine with no shortcuts and no compromises. Whether you are managing chronic pain, joint disorders, stress, skin conditions, digestive issues, or simply seeking a holistic wellness reset, our doctors create a bespoke treatment plan tailored to your prakriti (body constitution). Thousands of families from Trivandrum and across Kerala trust us for the same quality of care they would expect back home — now conveniently available in Abu Dhabi, UAE.",

  url: "https://kottakkal-ayurveda.ae",
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
   * Target keywords — Trivandrum + Kerala + UAE Ayurveda intent signals
   */
  keywords: [
    "Kottakkal Arya Vaidyasala Abu Dhabi",
    "Ayurvedic clinic Abu Dhabi",
    "Kerala Ayurveda UAE",
    "Homeopathy Abu Dhabi",
    "Ayurveda for Trivandrum expats",
    "Trivandrum Ayurvedic treatment UAE",
    "Malayali doctor Abu Dhabi",
    "Kerala doctor UAE",
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
    "Kerala homeopathy Abu Dhabi",
    "Udwarthanam Abu Dhabi",
    "Shirovasti Abu Dhabi",
    "Thalapothichil Abu Dhabi",
  ],
}

/**
 * ═══════════════════════════════════════════════════════════
 * Default Metadata — SEO-optimised for Google Search Console
 * Targeting: Kerala / Trivandrum community in Abu Dhabi, UAE
 * ═══════════════════════════════════════════════════════════
 */
export const defaultMetadata: Metadata = {
  title: {
    default: "Kottakkal Arya Vaidyasala Abu Dhabi | Authentic Ayurveda & Homeopathy for Kerala Community",
    template: `%s | Kottakkal Arya Vaidyasala — Ayurveda Abu Dhabi`,
  },

  description: siteConfig.description,

  keywords: siteConfig.keywords,

  metadataBase: new URL(siteConfig.url),

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
      "Trusted by thousands from Trivandrum & Kerala. Expert Shirodhara, Abhyangam, Pizhichil, Elakizhi, Kizhi therapies & Homeopathy in Abu Dhabi. Same quality as home — Kerala doctors, classical treatments. Book now: +971 54 200 9935",
    url: siteConfig.url,
    siteName: siteConfig.fullName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kottakkal Arya Vaidyasala Abu Dhabi — Authentic Ayurveda & Homeopathy trusted by Kerala's Community",
        type: "image/jpeg",
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
      "Kerala's most trusted Ayurvedic heritage — now in Abu Dhabi. Shirodhara, Abhyangam, Pizhichil, Kizhi therapies, classical Homeopathy & more. Trusted by the Trivandrum & Kerala community in UAE.",
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

  /**
   * Additional meta tags for geo-targeting and authorship
   */
  other: {
    "geo.region": "AE-AZ",
    "geo.placename": "Abu Dhabi",
    "geo.position": "24.4697;54.3698",
    "ICBM": "24.4697, 54.3698",
    "audience": "Kerala community in UAE, Trivandrum expats, Malayali families in Abu Dhabi",
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
  "image": `${siteConfig.url}/og-image.jpg`,
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
    { "@type": "City", "name": "Trivandrum" },
    { "@type": "State", "name": "Kerala" },
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
