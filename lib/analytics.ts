// GA4 helpers (CLAUDE.md §10). Never send personal data: no names, phones, usernames or message text.
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";
export const CONSENT_KEY = "nx_consent"; // "granted" | "denied"

type Gtag = (...args: unknown[]) => void;
const gtag = (): Gtag | undefined => (typeof window === "undefined" ? undefined : (window as unknown as { gtag?: Gtag }).gtag);

export function track(event: string, params: Record<string, string | number> = {}) {
  gtag()?.("event", event, params);
}

export function setConsent(choice: "granted" | "denied") {
  try {
    localStorage.setItem(CONSENT_KEY, choice);
  } catch {}
  gtag()?.("consent", "update", { analytics_storage: choice });
}
