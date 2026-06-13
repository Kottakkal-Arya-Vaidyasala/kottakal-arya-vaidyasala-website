import { NewsletterSubscriptionResponse } from "@/types/newsletter"

/**
 * ═══════════════════════════════════════════════════
 * Newsletter Service — Calls /api/newsletter (Brevo)
 * ═══════════════════════════════════════════════════
 * Client-side service that POSTs to our secure server-side
 * API route, which in turn calls the Brevo API with the
 * secret API key. No secrets are exposed to the browser.
 */
export async function subscribeToNewsletter(
  email: string
): Promise<NewsletterSubscriptionResponse> {
  /* ── Client-side validation ─────────────────────── */
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      success: false,
      message: "Please enter a valid email address.",
    }
  }

  try {
    const response = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email.trim().toLowerCase() }),
    })

    const data = await response.json()

    return {
      success: data.success,
      message: data.message,
    }
  } catch (error: any) {
    console.error("Newsletter subscription error:", error)
    return {
      success: false,
      message: "An error occurred. Please try subscribing again later.",
      error: error?.message || String(error),
    }
  }
}
