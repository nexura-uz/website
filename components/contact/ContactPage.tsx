import { Phone, Send } from "lucide-react";
import { Suspense } from "react";
import { getDictionary } from "@/content/dictionaries";
import { serviceKeys } from "@/content/pricing";
import type { Locale } from "@/lib/i18n";
import { site, telegramLink } from "@/site.config";
import { LeadForm } from "./LeadForm";
import { LeadFormFromUrl } from "./LeadFormFromUrl";

export function ContactPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const c = t.contact;
  const telegramHref = telegramLink(t.hero.telegramText);
  const services = [
    ...serviceKeys.map((key) => ({ key, label: t.services[key].title })),
    { key: "unsure", label: c.form.unsure },
  ];

  return (
    <main className="flex-1 px-5 pb-24 pt-14 md:px-8 md:pb-36 md:pt-24">
      {/* Mobile order: intro → form → direct contacts. Desktop: intro and contacts left, form right. */}
      <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-12 lg:gap-x-16 lg:gap-y-0">
        <div className="lg:col-span-5">
          <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-black md:text-[3.5rem]">
            {c.title}
          </h1>
          <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-gray">{c.sub}</p>
          <p className="mt-6 flex items-center gap-3 text-[15px] text-black/80 md:mt-8">
            <span aria-hidden className="size-2 rounded-full bg-accent" />
            {c.response}
          </p>
        </div>

        <div className="relative rounded-[28px] bg-light-gray p-6 sm:p-8 md:p-10 lg:col-span-7 lg:row-span-2">
          <Suspense fallback={<LeadForm locale={locale} t={c.form} services={services} telegramHref={telegramHref} />}>
            <LeadFormFromUrl locale={locale} t={c.form} services={services} telegramHref={telegramHref} />
          </Suspense>
        </div>

        <div className="lg:col-span-5">
          <div className="border-t border-gray/15 pt-8 lg:mt-12">
            <p className="text-sm text-gray">{c.or}</p>
            <ul className="mt-4 space-y-3 text-[17px]">
              <li>
                <a href={telegramHref} target="_blank" rel="noopener" className="inline-flex items-center gap-3 text-primary hover:underline hover:underline-offset-4">
                  <Send aria-hidden className="size-[18px]" />
                  {c.telegram}
                </a>
              </li>
              <li>
                <a href={site.phoneHref} className="inline-flex items-center gap-3 text-primary hover:underline hover:underline-offset-4">
                  <Phone aria-hidden className="size-[18px]" />
                  <span className="font-mono text-[15px]">{site.phone}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
