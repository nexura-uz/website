"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState, useSyncExternalStore } from "react";
import type { Dictionary } from "@/content/dictionaries";
import { CONSENT_KEY, setConsent } from "@/lib/analytics";

const noop = () => () => {};
// Server snapshot says "chosen" so the notice never flashes in the static HTML.
const readChosen = () => {
  try {
    return localStorage.getItem(CONSENT_KEY) !== null;
  } catch {
    return true;
  }
};

// Consent for GA4 (Consent Mode v2, CLAUDE.md §9.4): analytics cookies only after Accept.
export function CookieNotice({ t, privacyHref }: { t: Dictionary["cookie"]; privacyHref: string }) {
  const chosen = useSyncExternalStore(noop, readChosen, () => true);
  const [closed, setClosed] = useState(false);

  const choose = (choice: "granted" | "denied") => {
    setConsent(choice);
    setClosed(true);
  };

  return (
    <AnimatePresence>
      {!chosen && !closed && (
        <motion.div
          role="region"
          aria-label="Cookie"
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 24, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-3 bottom-[calc(4.5rem+env(safe-area-inset-bottom))] z-50 rounded-2xl border border-gray/15 bg-white p-4 pl-5 shadow-xl shadow-black/10 sm:inset-x-auto sm:left-6 sm:max-w-md lg:bottom-6"
        >
          <p className="text-sm leading-snug text-black/80">
            {t.text}{" "}
            <Link href={privacyHref} className="text-primary underline underline-offset-4">
              {t.link}
            </Link>
          </p>
          <div className="mt-3 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={() => choose("denied")}
              className="h-10 rounded-full px-4 text-sm font-medium text-gray transition-colors hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {t.decline}
            </button>
            <button
              type="button"
              onClick={() => choose("granted")}
              className="h-10 rounded-full bg-primary px-5 text-sm font-medium text-white transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              {t.ok}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
