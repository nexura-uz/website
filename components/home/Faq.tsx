import { ArrowUpRight } from "lucide-react";
import { FaqList } from "@/components/ui/FaqList";
import { getDictionary } from "@/content/dictionaries";
import { fromPrice, serviceKeys } from "@/content/pricing";
import type { Locale } from "@/lib/i18n";
import { telegramLink } from "@/site.config";

export function Faq({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const f = t.faq;

  // Price answer comes from pricing.ts so it never drifts from the services list.
  const prices = serviceKeys
    .map((key) => {
      const price = fromPrice(key, t.nav.from);
      return price && `${t.services[key].title} — ${price}`;
    })
    .filter(Boolean)
    .join("; ");

  return (
    <section data-cta="faq" className="border-t border-gray/15 px-5 py-24 md:px-8 md:py-40">
      <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-gray">{f.eyebrow}</p>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-[1.08] tracking-[-0.03em] text-black md:text-5xl">{f.title}</h2>
            <p className="mt-8 text-[15px] text-gray">{f.more}</p>
            <a
              href={telegramLink(t.hero.telegramText)}
              target="_blank"
              rel="noopener"
              className="mt-2 inline-flex items-center gap-1 text-[17px] font-medium text-primary hover:underline hover:underline-offset-4"
            >
              {f.ask}
              <ArrowUpRight aria-hidden className="size-4" />
            </a>
          </div>
        </div>
        <div className="lg:col-span-8">
          <FaqList items={f.items.map((i) => ({ q: i.q, a: i.a.replace("{prices}", prices) }))} />
        </div>
      </div>
    </section>
  );
}
