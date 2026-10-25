"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState, useSyncExternalStore } from "react";
import type { Dictionary } from "@/content/dictionaries";

const KEY = "nx_cookie_ok";
const noop = () => () => {};
// Server snapshot says "seen" so the notice never flashes in the static HTML.
const readSeen = () => {
  try {
    return localStorage.getItem(KEY) === "1";
  } catch {
    return true;
  }
};

// Informational notice only: nothing here tracks yet. Needs accept/decline once analytics is added (CLAUDE.md §9.4).
export function CookieNotice({ t, privacyHref }: { t: Dictionary["cookie"]; privacyHref: string }) {
  const seen = useSyncExternalStore(noop, readSeen, () => true);
  const [closed, setClosed] = useState(false);

  const accept = () => {
    try {
      localStorage.setItem(KEY, "1");
    } catch {}
    setClosed(true);
  };

  return (
    <AnimatePresence>
      {!seen && !closed && (
        <motion.div
          role="region"
          aria-label="Cookie"
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 24, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-3 bottom-[calc(4.5rem+env(safe-area-inset-bottom))] z-50 lg:bottom-6 flex items-center gap-4 rounded-2xl border border-gray/15 bg-white p-4 pl-5 shadow-xl shadow-black/10 sm:inset-x-auto sm:left-6 sm:max-w-md"
        >
          <p className="text-sm leading-snug text-black/80">
            {t.text}{" "}
            <Link href={privacyHref} className="text-primary underline underline-offset-4">
              {t.link}
            </Link>
          </p>
          <button
            type="button"
            onClick={accept}
            className="h-10 shrink-0 rounded-full bg-primary px-5 text-sm font-medium text-white transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            {t.ok}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
