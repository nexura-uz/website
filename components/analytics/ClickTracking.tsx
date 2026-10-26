"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

// One delegated listener instead of wiring every link: Telegram and phone clicks anywhere on the site.
// `location` comes from the nearest [data-cta] container (hero, header, mobile_bar, footer…).
export function ClickTracking() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element).closest?.("a");
      if (!a) return;
      const href = a.getAttribute("href") ?? "";
      const event = href.startsWith("https://t.me/") ? "cta_telegram_click" : href.startsWith("tel:") ? "cta_phone_click" : null;
      if (!event) return;
      const location = a.closest<HTMLElement>("[data-cta]")?.dataset.cta ?? "page";
      track(event, { location, page_path: window.location.pathname });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
