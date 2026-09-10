/**
 * ═══════════════════════════════════════════════════
 * Site-Wide Constants — Single Source of Truth
 * ═══════════════════════════════════════════════════
 * Centralized configuration for contact details, business info,
 * and social links. Import this instead of hardcoding values.
 */

export const siteConfig = {
  name: "Kottakkal Arya Vaidyasala",
  fullName: "Kottakkal Arya Vaidyasala Ayurvedic & Homeopathic Medical Center",
  tagline: "Authentic Ayurveda & Homeopathy in Abu Dhabi",
  description:
    "Experience premium traditional Ayurvedic healing and pure Homeopathic wellness treatments in Abu Dhabi, UAE. Expert doctor consultations, therapeutic massages, and holistic care.",
  url: "https://www.kottakkalaryavaidyasala.ae",

  /** Contact details */
  contact: {
    phone: "+971 54 200 9935",
    phoneRaw: "+971542009935",
    email: "kottakkalaryavaidyasalaauh@gmail.com",
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "971542009935",
  },

  /** Physical address */
  address: {
    street: "Ground floor, Hamed center, Al danah zone 1, Electra street",
    city: "Abu Dhabi",
    country: "UAE",
    full: "Ground floor, Hamed center, Al danah zone 1, Electra street, Abu Dhabi",
    mapUrl: "https://maps.google.com/?q=Kottakkal+Arya+Vaidyasala+Abu+Dhabi",
  },

  /** Operating hours */
  hours: {
    display: "9:00 AM – 11:00 PM",
    days: "Monday – Sunday",
    time: "9:00 AM – 11:00 PM",
    note: "Friday: 9:00 AM – 11:55 AM, 2:00 PM – 11:00 PM",
  },

  /** Logos & Icons */
  logos: {
    icon: "/images/logo/icon.png",
    iconBackup: "/images/logo/icon_backup.png",
    navy: "/images/logo/navy-logo.png",
    gold: "/images/logo/gold-logo.png",
  },

  /** Social media links */
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/kottakkalaryavaidyasala.ae/?utm_source=ig_web_button_share_sheet", icon: "instagram" },
    { label: "Facebook", href: "https://www.facebook.com/share/1KD26c1kan/?mibextid=wwXIfr", icon: "facebook" },
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
