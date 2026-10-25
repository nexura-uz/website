import { ArrowRight, ArrowUpRight, Check, ChevronRight } from "lucide-react";
import Link from "next/link";
import { CtaBand } from "@/components/ui/CtaBand";
import { FaqList } from "@/components/ui/FaqList";
import { JsonLd } from "@/components/ui/JsonLd";
import { getDictionary } from "@/content/dictionaries";
import { fromPrice, type ServiceKey } from "@/content/pricing";
import type { Locale } from "@/lib/i18n";
import { href } from "@/lib/routes";
import { site, telegramLink } from "@/site.config";

// One template for all five services (CLAUDE.md §8.2). EN shows no prices.
export function servicePrice(locale: Locale, key: ServiceKey) {
  return locale === "en" ? null : fromPrice(key, getDictionary(locale).nav.from);
}

export function ServicePage({ locale, service }: { locale: Locale; service: ServiceKey }) {
  const t = getDictionary(locale);
  const c = t.servicePages.common;
  const s = t.servicePages[service];
  const price = servicePrice(locale, service);
  const contact = `${href(locale, "contact")}?service=${service}`;
  const telegram = telegramLink(s.telegramText);
  const note = "note" in s ? s.note : undefined;
  const pricingHref = href(locale, "pricing");

  return (
    <main className="flex-1">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Nexura", item: `${site.url}/${locale}` },
            { "@type": "ListItem", position: 2, name: s.h1, item: `${site.url}${href(locale, service)}` },
          ],
        }}
      />

      <section className="px-5 pb-20 pt-14 md:px-8 md:pb-28 md:pt-28">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-gray">{c.eyebrow}</p>
            <h1 className="mt-5 text-balance text-[2.5rem] font-semibold leading-[1.03] tracking-[-0.04em] text-black sm:text-6xl lg:text-[4.25rem]">
              {s.h1}
            </h1>
            <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-gray md:text-xl">{s.sub}</p>
            <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
              <Link
                href={contact}
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-primary px-7 text-base font-medium text-white transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                {t.hero.primary}
                <ArrowRight aria-hidden className="size-[18px] transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href={telegram}
                target="_blank"
                rel="noopener"
                className="group inline-flex items-center gap-0.5 text-base text-primary hover:underline hover:underline-offset-4"
              >
                {t.hero.telegram}
                <ChevronRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

          <dl className="grid grid-cols-2 gap-6 border-t border-gray/20 pt-6 lg:col-span-4 lg:grid-cols-1 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            {price && (
              <div>
                <dt className="text-sm text-gray">{c.priceTitle}</dt>
                <dd className="mt-1 font-mono text-2xl text-black md:text-3xl">{price}</dd>
              </div>
            )}
            <div>
              <dt className="text-sm text-gray">{c.timeline}</dt>
              <dd className="mt-1 font-mono text-2xl text-black md:text-3xl">{s.timeline}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="border-t border-gray/15 px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-black md:text-4xl">{c.forWho}</h2>
          <ol className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-3">
            {s.examples.map((e, i) => (
              <li key={e.title} className="border-t border-gray/20 pt-6">
                <span className="font-mono text-sm text-gray">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 text-xl font-semibold tracking-[-0.015em] text-black">{e.title}</h3>
                <p className="mt-3 text-pretty text-[17px] leading-relaxed text-gray">{e.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-light-gray px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-black md:text-4xl">{c.includes}</h2>
            {note && <p className="mt-6 max-w-xs text-pretty text-[15px] leading-relaxed text-gray">{note}</p>}
          </div>
          <ul className="grid gap-x-10 gap-y-5 sm:grid-cols-2 lg:col-span-8">
            {s.includes.map((item) => (
              <li key={item} className="flex gap-3 border-t border-gray/25 pt-5 text-[17px] leading-snug text-black">
                <Check aria-hidden className="mt-0.5 size-[18px] shrink-0 text-primary" strokeWidth={2.25} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-black md:text-4xl">{c.cases}</h2>
          <ul className="mt-12 border-t border-gray/20">
            {s.cases.map((key) => {
              const k = t.cases[key as keyof typeof t.cases];
              const url = "url" in k ? k.url : undefined;
              return (
                <li key={key} className="grid gap-3 border-b border-gray/20 py-8 md:grid-cols-12 md:gap-6 md:py-10">
                  <div className="md:col-span-4">
                    <h3 className="text-2xl font-semibold tracking-[-0.02em] text-black">{k.name}</h3>
                    <p className="mt-2 font-mono text-[13px] text-gray">{k.type}</p>
                  </div>
                  <p className="text-pretty text-[17px] leading-relaxed text-black/80 md:col-span-6">{k.text}</p>
                  {url && (
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener"
                      className="inline-flex items-center gap-1 self-start text-[15px] font-medium text-primary hover:underline hover:underline-offset-4 md:col-span-2 md:justify-self-end"
                    >
                      {url.replace(/^https:\/\//, "")}
                      <ArrowUpRight aria-hidden className="size-4" />
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="px-5 pb-24 md:px-8 md:pb-32">
        <div className="mx-auto grid max-w-[1200px] gap-8 rounded-[28px] bg-light-gray p-8 md:grid-cols-12 md:p-12">
          <div className="md:col-span-5">
            <h2 className="text-sm text-gray">{c.priceTitle}</h2>
            {price ? (
              <p className="mt-2 font-mono text-4xl text-black md:text-5xl">{price}</p>
            ) : (
              <p className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-black">{t.hero.primary}</p>
            )}
          </div>
          <div className="md:col-span-7">
            <p className="text-pretty text-[17px] leading-relaxed text-gray">{c.priceText}</p>
            {pricingHref && c.priceLink && (
              <Link href={pricingHref} className="mt-5 inline-flex items-center gap-1 text-[15px] font-medium text-primary hover:underline hover:underline-offset-4">
                {c.priceLink}
                <ArrowUpRight aria-hidden className="size-4" />
              </Link>
            )}
          </div>
        </div>
      </section>

      <section className="border-t border-gray/15 px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-black md:text-4xl">{c.processTitle}</h2>
          <ol className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {c.steps.map((step, i) => (
              <li key={step.title} className="border-t-2 border-primary/15 pt-6 first:border-primary">
                <span className="font-mono text-sm text-gray">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 text-xl font-semibold tracking-[-0.015em] text-black">{step.title}</h3>
                <p className="mt-3 text-pretty text-[16px] leading-relaxed text-gray">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-gray/15 px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-12">
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-black md:text-4xl lg:col-span-4">{c.faqTitle}</h2>
          <div className="lg:col-span-8">
            <FaqList items={s.faq.map((f) => ({ q: f.q, a: f.a.replace("{price}", price ?? "") }))} />
          </div>
        </div>
      </section>

      <CtaBand
        title={c.ctaTitle}
        text={c.ctaText}
        primary={{ label: t.hero.primary, href: contact }}
        telegram={{ label: t.hero.telegram, href: telegram }}
      />
    </main>
  );
}
