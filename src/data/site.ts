/**
 * ═══════════════════════════════════════════════════
 * Site-Wide Constants — Single Source of Truth
 * ═══════════════════════════════════════════════════
 * Centralized configuration for contact details, business info,
 * and social links. Import this instead of hardcoding values.
 */

export const siteConfig = {
  name: "Kottakkal Arya Vaidyasala",
  fullName: "Kottakkal Arya Vaidyasala Ayurvedic Medical Center",
  tagline: "Authentic Kerala Ayurveda in Abu Dhabi",
  description:
    "Experience premium traditional Ayurvedic healing and wellness treatments in Abu Dhabi, UAE. Expert doctor consultations, therapeutic massages, and holistic care.",
  url: "https://kottakkal-ayurveda.ae",

  /** Contact details */
  contact: {
    phone: "+971 55 267 1598",
    phoneRaw: "+971552671598",
    email: "kottakkalaryavaidyasalaauh@gmail.com",
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "971552671598",
  },

  /** Physical address */
  address: {
    street: "Airport Road, Near Al Wahda Mall",
    city: "Abu Dhabi",
    country: "UAE",
    full: "Airport Road, Near Al Wahda Mall, Abu Dhabi, UAE",
    mapUrl: "https://maps.google.com/?q=Kottakkal+Arya+Vaidyasala+Abu+Dhabi",
  },

  /** Operating hours */
  hours: {
    display: "Daily: 9:00 AM – 9:00 PM",
    days: "Monday – Sunday",
    time: "9:00 AM – 9:00 PM",
    note: "Doctor consultations require prior booking.",
  },

  /** Social media links */
  socials: [
    { label: "Instagram", href: "https://www.facebook.com/profile.php?id=61587237147375", icon: "instagram" },
    { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61587237147375", icon: "facebook" },
    { label: "YouTube", href: "https://www.youtube.com/@KottakkalAryaVaidyasala-auh", icon: "youtube" },
    { label: "Email", href: "mailto:kottakkalaryavaidyasalaauh@gmail.com", icon: "mail" },
  ] as const,

  /** Navigation links */
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Services", href: "/services" },
    { label: "Our Treatments", href: "/our-treatments" },
    { label: "Blog", href: "/blog" },
    { label: "Contact Us", href: "/contact-us" },
  ] as const,

  /** Trust stats for social proof */
  stats: [
    { value: "100+", label: "Years of Heritage" },
    { value: "5000+", label: "Patients Treated" },
    { value: "4.9", label: "Google Rating" },
    { value: "15+", label: "Expert Physicians" },
  ] as const,
} as const

export type NavLink = (typeof siteConfig.navLinks)[number]
export type SocialLink = (typeof siteConfig.socials)[number]
