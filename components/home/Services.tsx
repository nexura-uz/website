import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { getDictionary } from "@/content/dictionaries";
import { fromPrice, serviceKeys } from "@/content/pricing";
import type { Locale } from "@/lib/i18n";
import { href } from "@/lib/routes";

export function Services({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const s = t.servicesSection;

  return (
    <section className="px-5 py-24 md:px-8 md:py-40">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-gray">{s.eyebrow}</p>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-[1.08] tracking-[-0.03em] text-black md:text-5xl">
              {s.title}
            </h2>
          </div>
          <p className="max-w-md text-pretty text-[17px] leading-relaxed text-gray lg:col-span-5 lg:justify-self-end">
            {s.sub}
          </p>
        </div>

        <ol className="mt-14 border-t border-gray/20 md:mt-20">
          {serviceKeys.map((key, i) => {
            const item = t.services[key];
            return (
              <li key={key} className="border-b border-gray/20">
                <Link
                  href={href(locale, key)!}
                  className="group grid gap-3 py-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary md:grid-cols-12 md:gap-6 md:py-11"
                >
                  <span className="font-mono text-sm text-gray md:col-span-1 md:pt-2">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="text-2xl font-semibold tracking-[-0.02em] text-black transition-colors group-hover:text-primary md:col-span-4 md:text-[1.75rem]">
                    {item.title}
                  </h3>
                  <div className="md:col-span-5 md:pt-1">
                    <p className="text-[17px] font-medium text-black">{item.problem}</p>
                    <p className="mt-2 text-pretty text-[17px] leading-relaxed text-gray">{item.line}</p>
                  </div>
                  <div className="mt-2 flex items-center justify-between gap-4 md:col-span-2 md:mt-0 md:flex-col md:items-end md:justify-start md:pt-2">
                    {locale !== "en" && fromPrice(key, t.nav.from) && (
                      <span className="font-mono text-sm text-black">{fromPrice(key, t.nav.from)}</span>
                    )}
                    <span className="inline-flex items-center gap-1 text-sm text-primary md:mt-auto">
                      {s.more}
                      <ArrowUpRight aria-hidden className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
