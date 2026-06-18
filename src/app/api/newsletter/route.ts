import { NextRequest, NextResponse } from "next/server"

/**
 * ═══════════════════════════════════════════════════
 * Newsletter API Route — Brevo (Sendinblue) Integration
 * ═══════════════════════════════════════════════════
 * POST /api/newsletter
 * 
 * Server-side route that securely calls the Brevo API
 * to add newsletter subscribers. The BREVO_API_KEY is
 * never exposed to the client.
 * 
 * Expected body: { email: string }
 * Returns: { success: boolean, message: string }
 */

const BREVO_API_KEY = process.env.BREVO_API_KEY || ""
const BREVO_LIST_ID = parseInt(process.env.BREVO_LIST_ID || "3", 10)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    /* ── Validate email ───────────────────────────── */
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address." },
        { status: 400 }
      )
    }

    /* ── Development mock mode ────────────────────── */
    if (!BREVO_API_KEY || !BREVO_LIST_ID) {
      console.log(`[Mock Newsletter] Email: ${email} — Brevo not configured`)
      // Simulate API delay for realistic UX
      await new Promise((resolve) => setTimeout(resolve, 600))
      return NextResponse.json({
        success: true,
        message: "Thank you for subscribing! (Development Mode)",
      })
    }

    /* ── Call Brevo API to create/update contact ──── */
    const brevoResponse = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": BREVO_API_KEY,
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: email.trim().toLowerCase(),
        listIds: [BREVO_LIST_ID],
        updateEnabled: true, // Re-subscribe if previously unsubscribed
        attributes: {
          SIGNUP_SOURCE: "website_newsletter",
          SIGNUP_DATE: new Date().toISOString(),
        },
      }),
    })

    /* ── Handle Brevo API response ────────────────── */

    // 201 = Created successfully
    if (brevoResponse.status === 201) {
      return NextResponse.json({
        success: true,
        message: "Welcome! You have been subscribed to our wellness newsletter.",
      })
    }

    // 204 = Contact already exists and was updated
    if (brevoResponse.status === 204) {
      return NextResponse.json({
        success: true,
        message: "You are already subscribed. Thank you for staying connected!",
      })
    }

    // Handle duplicate protection (409 Conflict)
    if (brevoResponse.status === 409) {
      return NextResponse.json({
        success: true,
        message: "You are already subscribed. Thank you for staying connected!",
      })
    }

    // Any other error
    const errorData = await brevoResponse.json().catch(() => ({}))
    console.error("[Brevo API Error]", brevoResponse.status, errorData)

    return NextResponse.json(
      {
        success: false,
        message: "Unable to process subscription. Please try again later.",
      },
      { status: 500 }
    )
  } catch (error) {
    console.error("[Newsletter Route Error]", error)
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred. Please try again later.",
      },
      { status: 500 }
    )
  }
}
