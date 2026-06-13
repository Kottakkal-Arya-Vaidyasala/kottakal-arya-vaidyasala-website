import { siteConfig } from "@/data/site"

/**
 * useWhatsApp — Generates professional WhatsApp deep-link URLs
 * with pre-filled message templates for consultation booking.
 */
export function useWhatsApp() {
  const whatsappNumber = siteConfig.contact.whatsapp

  /**
   * Generate a WhatsApp URL with a custom message
   */
  const getWhatsAppUrl = (params?: {
    name?: string
    treatment?: string
    contactMethod?: string
  }) => {
    const message = params?.treatment
      ? `Hello, I would like to book: ${params.treatment}.`
      : `Hello, I would like to schedule a consultation with Kottakkal Arya Vaidyasala Ayurvedic Medical Center.`

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
  }

  /**
   * Open WhatsApp in a new tab with the generated URL
   */
  const openWhatsApp = (params?: {
    name?: string
    treatment?: string
    contactMethod?: string
  }) => {
    const url = getWhatsAppUrl(params)
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return { getWhatsAppUrl, openWhatsApp, whatsappNumber }
}
