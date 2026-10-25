import { attributionKeys } from "@/lib/lead";

// First-touch attribution (CLAUDE.md §9.2): stored once, sent with the lead. No personal data.
const KEY = "nx_attribution";

export function captureAttribution() {
  try {
    if (localStorage.getItem(KEY)) return;
    const params = new URLSearchParams(location.search);
    const ref = document.referrer && new URL(document.referrer).host !== location.host ? document.referrer : "";
    localStorage.setItem(
      KEY,
      JSON.stringify({
        utm_source: params.get("utm_source") ?? "",
        utm_medium: params.get("utm_medium") ?? "",
        utm_campaign: params.get("utm_campaign") ?? "",
        utm_content: params.get("utm_content") ?? "",
        referrer: ref,
        landing_page: location.pathname + location.search,
        first_visit_at: new Date().toISOString(),
      }),
    );
  } catch {
    // Storage blocked (private mode): the lead still goes through without attribution.
  }
}

export function readAttribution(): Partial<Record<(typeof attributionKeys)[number], string>> {
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? "{}");
  } catch {
    return {};
  }
}
