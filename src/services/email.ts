import emailjs from "@emailjs/browser"

export interface ContactFormInput {
  name: string
  email: string
  phone: string
  treatment?: string
  doctor?: string
  message: string
  preferredDate?: string
  preferredTime?: string
}

export interface EmailResponse {
  success: boolean
  message: string
  error?: unknown
}

/* ── Environment Variable Validation ────────────── */
const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ""
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || ""
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""

const isConfigured = !!(serviceId && templateId && publicKey)

/* Runtime warning for missing configuration */
if (typeof window !== "undefined" && !isConfigured) {
  console.warn(
    "[EmailJS] ⚠️ Missing environment variables. Ensure the following are set with NEXT_PUBLIC_ prefix:\n" +
    "  - NEXT_PUBLIC_EMAILJS_SERVICE_ID\n" +
    "  - NEXT_PUBLIC_EMAILJS_TEMPLATE_ID\n" +
    "  - NEXT_PUBLIC_EMAILJS_PUBLIC_KEY\n" +
    "Contact form will run in development mock mode."
  )
}

/**
 * Dispatch contact form inputs to client email service using EmailJS.
 */
export async function sendContactEmail(
  formData: ContactFormInput
): Promise<EmailResponse> {
  // Validate basic required inputs
  if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
    return {
      success: false,
      message: "Please fill in all required fields (Name, Email, Message).",
    }
  }

  // Graceful fallback for mock sandbox environment
  if (!isConfigured) {
    console.log("[Mock Email Sent] Dispatching to EmailJS mock layer:", formData)
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 800))
    return {
      success: true,
      message: "Thank you! Your inquiry has been sent (Development Mock Mode).",
    }
  }

  try {
    // Map fields matching template definitions configured in EmailJS console
    const templateParams = {
      from_name: formData.name.trim(),
      from_email: formData.email.trim(),
      phone_number: formData.phone.trim() || "Not provided",
      selected_treatment: formData.treatment || "General Inquiry",
      selected_doctor: formData.doctor || "General Practitioner / Open Consultation",
      message: formData.message.trim(),
      preferred_date: formData.preferredDate || "No preference",
      preferred_time: formData.preferredTime || "No preference",
      to_email: "kottakkalaryavaidyasalaauh@gmail.com",
    }

    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    )

    if (response.status === 200) {
      return {
        success: true,
        message: "Your message has been sent successfully. We will get back to you soon!",
      }
    } else {
      throw new Error(`EmailJS API response code: ${response.status} - ${response.text}`)
    }
  } catch (error: unknown) {
    console.error("EmailJS dispatch service failure:", error)
    return {
      success: false,
      message: "Failed to dispatch message. Please try again or contact our front office directly.",
      error: error instanceof Error ? error.message : String(error),
    }
  }
}

export const isEmailJSConfigured = isConfigured
