import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { CtaBand } from "@/components/ui/CtaBand";
import { getDictionary, type Dictionary } from "@/content/dictionaries";
import type { Locale } from "@/lib/i18n";
import { href } from "@/lib/routes";
import { telegramLink } from "@/site.config";

// Only work clients allow us to show. TechVision (live site broken) and ENDO (weak) are left out on purpose.
const goodwellParts = ["goodwell", "goodwellApp"] as const;

const domain = (url: string) => url.replace(/^https:\/\//, "");

type ProductCopy = Dictionary["projects"]["ustaxona"] | Dictionary["projects"]["easysale"];

function ProductShowcase({
  item,
  copy,
  links,
  desk,
  phone,
  stack,
}: {
  item: { name: string; text: string; url: string };
  copy: ProductCopy;
  links: { label: string; href: string }[];
  desk: { src: string; width: number; height: number; bar: string };
  phone?: { src: string; width: number; height: number };
  stack?: string[];
}) {
  return (
    <section className="border-t border-gray/15 px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-gray">{copy.eyebrow}</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] text-black md:text-5xl">{item.name}</h2>
            <p className="mt-6 text-pretty text-[19px] leading-relaxed text-black">{item.text}</p>
            <p className="mt-5 text-pretty text-[17px] leading-relaxed text-gray">{copy.about}</p>
            <p className="mt-5 border-l-2 border-primary pl-5 text-pretty text-[17px] leading-relaxed text-black/80">{copy.problem}</p>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} target="_blank" rel="noopener" className="inline-flex items-center gap-1 text-[15px] font-medium text-primary hover:underline hover:underline-offset-4">
                    {l.label}
                    <ArrowUpRight aria-hidden className="size-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className={`relative lg:col-span-7 ${phone ? "pb-10 pr-10 sm:pr-16 lg:pb-14" : "lg:pt-10"}`}>
            <div className="overflow-hidden rounded-2xl border border-gray/15 bg-white shadow-[0_30px_60px_-30px] shadow-black/20">
              <div className="flex h-8 items-center justify-center border-b border-gray/10 bg-light-gray font-mono text-[11px] text-gray">{desk.bar}</div>
              <Image src={desk.src} alt={copy.shotAlt} width={desk.width} height={desk.height} sizes="(min-width: 1200px) 640px, (min-width: 1024px) 55vw, 100vw" className="h-auto w-full" />
            </div>
            {phone && (
              <Image
                src={phone.src}
                alt=""
                width={phone.width}
                height={phone.height}
                sizes="(min-width: 640px) 180px, 32vw"
                className="absolute bottom-0 right-0 h-auto w-[32%] max-w-[180px] rounded-[22px] border-4 border-black shadow-[0_30px_60px_-20px] shadow-black/40"
              />
            )}
          </div>
        </div>

        <ol className="mt-20 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
          {copy.features.map((f, i) => (
            <li key={f.title} className="border-t border-gray/20 py-6">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-sm text-gray">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-lg font-semibold tracking-[-0.015em] text-black">{f.title}</h3>
              </div>
              <p className="mt-2 text-pretty text-[16px] leading-relaxed text-gray">{f.text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-6 grid gap-4 border-t border-gray/20 pt-8 md:grid-cols-12 md:gap-8">
          <p className="text-pretty text-[16px] leading-relaxed text-black/80 md:col-span-5">{copy.platforms}</p>
          {stack && "stackTitle" in copy && (
            <p className="font-mono text-[13px] leading-relaxed text-gray md:col-span-7">
              <span className="text-black">{copy.stackTitle}:</span> {stack.join(" · ")}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export function ProjectsPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const p = t.projects;
  const cases = t.cases;
  // The Ustaxona app ships in uz and ru only; English visitors see the Uzbek UI.
  const ustaxonaShots = `/work/ustaxona/${locale === "ru" ? "ru" : "uz"}`;

  return (
    <main className="flex-1">
      <section className="px-5 pb-16 pt-14 md:px-8 md:pb-24 md:pt-28">
        <div className="mx-auto max-w-[1200px]">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-gray">{p.eyebrow}</p>
          <h1 className="mt-5 max-w-4xl text-balance text-[2.5rem] font-semibold leading-[1.03] tracking-[-0.04em] text-black sm:text-6xl lg:text-[4.5rem]">
            {p.title}
          </h1>
          <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-gray md:text-xl">{p.sub}</p>
        </div>
      </section>

      <section className="px-5 pb-24 md:px-8 md:pb-32">
        <article className="mx-auto grid max-w-[1200px] gap-12 rounded-[28px] bg-primary p-8 text-white sm:p-10 lg:grid-cols-12 lg:p-14">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">{p.featuredEyebrow}</p>
            <h2 className="mt-5 text-balance text-3xl font-semibold leading-[1.08] tracking-[-0.03em] md:text-5xl">{p.featuredTitle}</h2>
            <p className="mt-6 max-w-md text-pretty text-[17px] leading-relaxed text-white/70">{p.featuredText}</p>
          </div>
          <ol className="lg:col-span-6 lg:col-start-7">
            {goodwellParts.map((key, i) => {
              const c = cases[key];
              return (
                <li key={key} className="border-t border-white/15 py-6 first:border-t-0 first:pt-0 lg:first:pt-0">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-sm text-white/50">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="text-xl font-semibold tracking-[-0.015em]">{c.type}</h3>
                  </div>
                  <p className="mt-2 pl-9 text-pretty text-[16px] leading-relaxed text-white/70">{c.text}</p>
                </li>
              );
            })}
          </ol>
        </article>
      </section>

      <ProductShowcase
        item={cases.easysale}
        copy={p.easysale}
        links={[{ label: domain(cases.easysale.url), href: cases.easysale.url }]}
        desk={{ src: "/work/easysale.jpg", width: 3200, height: 2000, bar: "easysale.uz" }}
      />

      <ProductShowcase
        item={cases.ustaxona}
        copy={p.ustaxona}
        links={[
          { label: domain(cases.ustaxona.url), href: cases.ustaxona.url },
          { label: p.ustaxona.appLabel, href: "https://app.ustaxona.uz" },
          { label: p.ustaxona.botLabel, href: "https://t.me/ustaxonauz_bot" },
        ]}
        desk={{ src: `${ustaxonaShots}/desk-orders.jpg`, width: 2880, height: 1800, bar: "app.ustaxona.uz" }}
        phone={{ src: `${ustaxonaShots}/phone-orders.jpg`, width: 1170, height: 2532 }}
        stack={["Python", "FastAPI", "PostgreSQL", "aiogram 3", "Telegram Mini App", "React", "TypeScript", "TanStack", "Next.js"]}
      />

      <section className="border-t border-gray/15 px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-black md:text-4xl">{p.webTitle}</h2>
          <article className="mt-12 grid gap-8 md:grid-cols-12">
            <a href={cases.midea.url} target="_blank" rel="noopener" className="group block md:col-span-7">
              <div className="overflow-hidden rounded-2xl border border-gray/15 bg-white shadow-[0_30px_60px_-30px] shadow-black/20 transition-transform duration-300 group-hover:-translate-y-1">
                <div className="flex h-8 items-center justify-center border-b border-gray/10 bg-light-gray font-mono text-[11px] text-gray">{domain(cases.midea.url)}</div>
                <Image src="/work/midea.jpg" alt={`${cases.midea.name}: ${cases.midea.text}`} width={2560} height={1440} sizes="(min-width: 1200px) 680px, (min-width: 768px) 58vw, 100vw" className="h-auto w-full" />
              </div>
            </a>
            <div className="md:col-span-5 md:self-end">
              <h3 className="text-2xl font-semibold tracking-[-0.02em] text-black">{cases.midea.name}</h3>
              <p className="mt-2 font-mono text-[13px] text-gray">{cases.midea.type}</p>
              <p className="mt-4 text-pretty text-[17px] leading-relaxed text-gray">{cases.midea.text}</p>
            </div>
          </article>
        </div>
      </section>

      <CtaBand
        title={t.servicePages.common.ctaTitle}
        text={t.servicePages.common.ctaText}
        primary={{ label: t.hero.primary, href: href(locale, "contact")! }}
        telegram={{ label: t.hero.telegram, href: telegramLink(t.hero.telegramText) }}
      />
    </main>
  );
}
