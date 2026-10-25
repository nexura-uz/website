import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { CtaBand } from "@/components/ui/CtaBand";
import { getDictionary } from "@/content/dictionaries";
import { fromPrice, serviceKeys } from "@/content/pricing";
import type { Locale } from "@/lib/i18n";
import { href } from "@/lib/routes";
import { telegramLink } from "@/site.config";

// UZ/RU only: routes.pricing.en is null, so this never renders for English.
export function PricingPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const p = t.pricing!;
  const contact = href(locale, "contact")!;

  return (
    <main className="flex-1">
      <section className="px-5 pb-14 pt-14 md:px-8 md:pb-20 md:pt-28">
        <div className="mx-auto max-w-[1200px]">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-gray">{p.eyebrow}</p>
          <h1 className="mt-5 text-balance text-[2.5rem] font-semibold leading-[1.03] tracking-[-0.04em] text-black sm:text-6xl lg:text-[4.5rem]">
            {p.title}
          </h1>
          <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-gray md:text-xl">{p.sub}</p>
        </div>
      </section>

      <section className="px-5 pb-24 md:px-8 md:pb-36">
        <div className="mx-auto max-w-[1200px]">
          <div className="hidden grid-cols-12 gap-6 border-b border-gray/25 pb-4 font-mono text-xs uppercase tracking-[0.14em] text-gray md:grid">
            <span className="col-span-4">{p.columns.service}</span>
            <span className="col-span-5">{p.columns.includes}</span>
            <span className="col-span-3">{p.columns.timeline}</span>
          </div>

          {serviceKeys.map((key) => {
            const row = t.servicePages[key];
            const note = "note" in row ? row.note : undefined;
            return (
              <article key={key} className="grid gap-6 border-b border-gray/25 py-10 md:grid-cols-12 md:py-12">
                <div className="md:col-span-4">
                  <h2 className="text-2xl font-semibold tracking-[-0.02em] text-black md:text-[1.75rem]">
                    <Link href={href(locale, key)!} className="transition-colors hover:text-primary">
                      {t.services[key].title}
                    </Link>
                  </h2>
                  <p className="mt-3 font-mono text-xl text-black md:text-2xl">{fromPrice(key, t.nav.from)}</p>
                  {note && <p className="mt-4 max-w-xs text-pretty text-[15px] leading-relaxed text-gray">{note}</p>}
                </div>

                <ul className="space-y-2.5 md:col-span-5">
                  {row.includes.map((item) => (
                    <li key={item} className="flex gap-3 text-[16px] leading-snug text-black/80">
                      <span aria-hidden className="mt-[0.55em] h-px w-3 shrink-0 bg-gray/50" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between gap-4 md:col-span-3 md:flex-col md:items-start md:justify-between">
                  <span className="font-mono text-[15px] text-black">
                    <span className="mr-2 font-sans text-sm text-gray md:hidden">{p.columns.timeline}:</span>
                    {row.timeline}
                  </span>
                  <Link
                    href={`${contact}?service=${key}`}
                    className="group inline-flex items-center gap-1 text-[15px] font-medium text-primary hover:underline hover:underline-offset-4"
                  >
                    {p.cta}
                    <ArrowUpRight aria-hidden className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-light-gray px-5 py-24 md:px-8 md:py-36">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-black md:text-4xl">{p.factorsTitle}</h2>
          <ol className="mt-14 grid gap-x-12 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {p.factors.map((f, i) => (
              <li key={f.title} className="border-t border-gray/25 pt-6">
                <span className="font-mono text-sm text-gray">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 text-xl font-semibold tracking-[-0.015em] text-black">{f.title}</h3>
                <p className="mt-3 text-pretty text-[17px] leading-relaxed text-gray">{f.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-5 py-24 md:px-8 md:py-36">
        <div className="mx-auto grid max-w-[1200px] gap-14 md:grid-cols-2 md:gap-16">
          {[
            [p.paymentTitle, p.paymentText],
            [p.supportTitle, p.supportText],
          ].map(([title, text]) => (
            <div key={title} className="border-t border-gray/20 pt-8">
              <h2 className="text-2xl font-semibold tracking-[-0.02em] text-black md:text-3xl">{title}</h2>
              <p className="mt-4 max-w-md text-pretty text-[17px] leading-relaxed text-gray">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBand
        title={t.about.ctaTitle}
        text={t.about.ctaText}
        primary={{ label: p.cta, href: contact }}
        telegram={{ label: t.hero.telegram, href: telegramLink(t.hero.telegramText) }}
      />
    </main>
  );
}
