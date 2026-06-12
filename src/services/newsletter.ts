import { supabase, isSupabaseConfigured } from "@/lib/supabase"
import { NewsletterSubscriptionResponse } from "@/types/newsletter"

/**
 * Newsletter service layer handling subscribers.
 */
export async function subscribeToNewsletter(
  email: string
): Promise<NewsletterSubscriptionResponse> {
  // Sanity check validation
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      success: false,
      message: "Please enter a valid email address.",
    }
  }

  // Handle environment placeholder mock logic for dev
  if (!isSupabaseConfigured) {
    console.log(`[Mock Newsletter Subscription] Email: ${email}`)
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 800))
    return {
      success: true,
      message: "Thank you! You have successfully subscribed (Development Mock Mode).",
    }
  }

  try {
    // Check if email already registered
    const { data: existing, error: fetchError } = await supabase
      .from("newsletter_subscribers")
      .select("email, is_active")
      .eq("email", email.trim().toLowerCase())
      .maybeSingle()

    if (fetchError) {
      throw fetchError
    }

    if (existing) {
      if (!existing.is_active) {
        // Reactivate subscriber
        const { error: updateError } = await supabase
          .from("newsletter_subscribers")
          .update({ is_active: true })
          .eq("email", email.trim().toLowerCase())

        if (updateError) throw updateError
      }
      return {
        success: true,
        message: "You are already registered! Thank you for staying connected.",
      }
    }

    // Insert new email subscription record
    const { error: insertError } = await supabase
      .from("newsletter_subscribers")
      .insert([{ email: email.trim().toLowerCase(), is_active: true }])

    if (insertError) {
      throw insertError
    }

    return {
      success: true,
      message: "Thank you for subscribing to our newsletter!",
    }
  } catch (error: any) {
    console.error("Supabase newsletter subscribe error:", error)
    return {
      success: false,
      message: "An error occurred. Please try subscribing again later.",
      error: error?.message || String(error),
    }
  }
}
