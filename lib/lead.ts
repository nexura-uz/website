import { serviceKeys } from "@/content/pricing";

// Option keys shared by the form (labels come from the dictionary) and the server action.
export const leadServices = [...serviceKeys, "unsure"] as const;
export const leadBudgets = ["lt500", "500-2k", "2-5k", "5-15k", "15k+", "unknown"] as const;
export const leadTimelines = ["urgent", "soon", "exploring"] as const;

export const attributionKeys = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "referrer",
  "landing_page",
  "first_visit_at",
] as const;

export type LeadField = "name" | "contact" | "phone" | "telegram" | "email" | "consent";
// Success redirects to the thank-you page, so the form only ever sees idle or error.
export type LeadState = { status: "idle" } | { status: "error"; errors: Partial<Record<LeadField | "server", true>> };
