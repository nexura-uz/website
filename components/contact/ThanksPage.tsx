import { ArrowUpRight, Check, Send } from "lucide-react";
import Link from "next/link";
import { LeadTracker } from "@/components/analytics/LeadTracker";
import { getDictionary } from "@/content/dictionaries";
import type { Locale } from "@/lib/i18n";
import { href } from "@/lib/routes";
import { telegramLink } from "@/site.config";

const featured = ["easysale", "midea"] as const;

export function ThanksPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const s = t.contact.form.success;

  return (
    <main data-cta="thank_you" className="flex-1 px-5 pb-24 pt-16 md:px-8 md:pb-36 md:pt-28">
      <LeadTracker />
      <div className="mx-auto max-w-[1200px]">
        <span className="grid size-12 place-items-center rounded-2xl bg-primary text-white">
          <Check aria-hidden className="size-6" strokeWidth={2.5} />
        </span>
        <h1 className="mt-10 max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-black md:text-6xl">{s.title}</h1>
        <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-gray md:text-xl">{s.text}</p>
        <a
          href={telegramLink(t.hero.telegramText)}
          target="_blank"
          rel="noopener"
          className="mt-10 inline-flex h-12 items-center gap-2 rounded-full bg-primary px-7 text-base font-medium text-white transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <Send aria-hidden className="size-[18px]" />
          {s.telegram}
        </a>

        <div className="mt-20 max-w-3xl border-t border-gray/15 pt-10">
          <p className="text-[15px] text-gray">{t.thanks.meanwhile}</p>
          <ul className="mt-4 divide-y divide-gray/15">
            {featured.map((key) => {
              const c = t.cases[key];
              return (
                <li key={key}>
                  <a href={c.url} target="_blank" rel="noopener" className="group flex items-baseline justify-between gap-6 py-5">
                    <span>
                      <span className="block text-xl font-semibold tracking-[-0.015em] text-black group-hover:text-primary">{c.name}</span>
                      <span className="mt-1 block text-[15px] text-gray">{c.text}</span>
                    </span>
                    <ArrowUpRight aria-hidden className="size-5 shrink-0 text-primary" />
                  </a>
                </li>
              );
            })}
          </ul>
          <Link href={href(locale, "work")!} className="mt-4 inline-flex items-center gap-1 text-[15px] font-medium text-primary hover:underline hover:underline-offset-4">
            {t.nav.work}
            <ArrowUpRight aria-hidden className="size-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
