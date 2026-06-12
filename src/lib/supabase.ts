import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""

// Graceful fallback warnings to enable local coding compilation without blocking developers
const hasKeys = supabaseUrl && supabaseAnonKey

if (!hasKeys) {
  console.warn(
    "Warning: Supabase environment variables (NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY) are not set. Database integrations will be mocked or throw errors."
  )
}

/**
 * Shared Supabase Client connection instance.
 */
export const supabase = createClient(
  supabaseUrl || "https://placeholder-url.supabase.co",
  supabaseAnonKey || "placeholder-anon-key"
)
export const isSupabaseConfigured = !!hasKeys
export default supabase
