"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

export const LEAD_KEY = "nx_lead";

// Fires generate_lead once per real submission: LeadForm sets the key, a refresh finds it gone.
export function LeadTracker() {
  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(LEAD_KEY);
      if (!raw) return;
      sessionStorage.removeItem(LEAD_KEY);
      track("generate_lead", JSON.parse(raw));
    } catch {}
  }, []);
  return null;
}
