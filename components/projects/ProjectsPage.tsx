import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { CtaBand } from "@/components/ui/CtaBand";
import { getDictionary } from "@/content/dictionaries";
import type { Locale } from "@/lib/i18n";
import { href } from "@/lib/routes";
import { telegramLink } from "@/site.config";

// Only work clients allow us to show. TechVision (live site broken) and ENDO (weak) are left out on purpose.
const shots = [
  { key: "easysale", src: "/work/easysale.jpg" },
  { key: "midea", src: "/work/midea.jpg" },
] as const;
const goodwellParts = ["goodwell", "goodwellApp", "goodwellBot"] as const;
const bots = ["ustaxona"] as const;

const domain = (url: string) => url.replace(/^https:\/\//, "");

export function ProjectsPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const p = t.projects;
  const cases = t.cases;

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

      <section className="px-5 md:px-8">
        <article className="mx-auto grid max-w-[1200px] gap-12 rounded-[28px] bg-primary p-8 text-white sm:p-10 lg:grid-cols-12 lg:p-14">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">{p.featuredEyebrow}</p>
            <h2 className="mt-5 text-balance text-3xl font-semibold leading-[1.08] tracking-[-0.03em] md:text-5xl">{p.featuredTitle}</h2>
            <p className="mt-6 max-w-md text-pretty text-[17px] leading-relaxed text-white/70">{p.featuredText}</p>
          </div>
          <ol className="lg:col-span-6 lg:col-start-7">
            {goodwellParts.map((key, i) => {
              const c = cases[key];
              const url = "url" in c ? c.url : undefined;
              return (
                <li key={key} className="border-t border-white/15 py-6 first:border-t-0 first:pt-0 lg:first:pt-0">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-sm text-white/50">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="text-xl font-semibold tracking-[-0.015em]">{c.type}</h3>
                  </div>
                  <p className="mt-2 pl-9 text-pretty text-[16px] leading-relaxed text-white/70">{c.text}</p>
                  {url && (
                    <a href={url} target="_blank" rel="noopener" className="mt-3 ml-9 inline-flex items-center gap-1 text-[15px] text-accent hover:underline hover:underline-offset-4">
                      {domain(url)}
                      <ArrowUpRight aria-hidden className="size-4" />
                    </a>
                  )}
                </li>
              );
            })}
          </ol>
        </article>
      </section>

      <section className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-black md:text-4xl">{p.webTitle}</h2>
          <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-8">
            {shots.map((s) => {
              const c = cases[s.key];
              return (
                <article key={s.key}>
                  <a href={c.url} target="_blank" rel="noopener" className="group block">
                    <div className="overflow-hidden rounded-2xl border border-gray/15 bg-white shadow-[0_30px_60px_-30px] shadow-black/20 transition-transform duration-300 group-hover:-translate-y-1">
                      <div className="flex h-8 items-center justify-center border-b border-gray/10 bg-light-gray font-mono text-[11px] text-gray">{domain(c.url)}</div>
                      <Image src={s.src} alt={`${c.name}: ${c.text}`} width={2560} height={1440} sizes="(min-width: 1200px) 584px, (min-width: 768px) 50vw, 100vw" className="h-auto w-full" />
                    </div>
                  </a>
                  <div className="mt-6 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-2xl font-semibold tracking-[-0.02em] text-black">{c.name}</h3>
                    <span className="font-mono text-[13px] text-gray">{c.type}</span>
                  </div>
                  <p className="mt-3 text-pretty text-[17px] leading-relaxed text-gray">{c.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-gray/15 px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-black md:text-4xl">{p.botsTitle}</h2>
          <ul className="mt-12 border-t border-gray/20">
            {bots.map((key) => {
              const c = cases[key];
              return (
                <li key={key} className="grid gap-3 border-b border-gray/20 py-8 md:grid-cols-12 md:gap-6 md:py-10">
                  <div className="md:col-span-4">
                    <h3 className="text-2xl font-semibold tracking-[-0.02em] text-black">{c.name}</h3>
                    <p className="mt-2 font-mono text-[13px] text-gray">{c.type}</p>
                  </div>
                  <p className="text-pretty text-[17px] leading-relaxed text-black/80 md:col-span-5">{c.text}</p>
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-1 self-start text-[15px] font-medium text-primary hover:underline hover:underline-offset-4 md:col-span-3 md:justify-self-end"
                  >
                    {domain(c.url)}
                    <ArrowUpRight aria-hidden className="size-4" />
                  </a>
                </li>
              );
            })}
          </ul>
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
