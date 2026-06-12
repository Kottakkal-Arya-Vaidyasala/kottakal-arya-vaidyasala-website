/**
 * Newsletter subscriber entity database model mapping.
 */
export interface NewsletterSubscriber {
  id?: string // UUID created by Supabase
  email: string
  created_at?: string // ISO timestamp from database
  is_active?: boolean // defaults to true for active list
}

export interface NewsletterSubscriptionResponse {
  success: boolean
  message: string
  error?: string
}
