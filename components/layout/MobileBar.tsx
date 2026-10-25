import { Phone, Send } from "lucide-react";
import { getDictionary } from "@/content/dictionaries";
import type { Locale } from "@/lib/i18n";
import { site, telegramLink } from "@/site.config";

// Always-visible contact on phones (CLAUDE.md §8.1). The body gets matching bottom padding in the layout.
export function MobileBar({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <nav
      aria-label={`${t.mobileBar.telegram} / ${t.mobileBar.call}`}
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-white/10 bg-primary pb-[env(safe-area-inset-bottom)] text-white lg:hidden"
    >
      <a href={telegramLink(t.hero.telegramText)} target="_blank" rel="noopener" className="flex h-14 items-center justify-center gap-2 text-[15px] font-medium active:bg-white/10">
        <Send aria-hidden className="size-[18px]" />
        {t.mobileBar.telegram}
      </a>
      <a href={site.phoneHref} className="flex h-14 items-center justify-center gap-2 border-l border-white/15 text-[15px] font-medium active:bg-white/10">
        <Phone aria-hidden className="size-[18px]" />
        {t.mobileBar.call}
      </a>
    </nav>
  );
}
