import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { CtaBand } from "@/components/ui/CtaBand";
import { getDictionary } from "@/content/dictionaries";
import type { Locale } from "@/lib/i18n";
import { href } from "@/lib/routes";
import { telegramLink } from "@/site.config";

export function AboutPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const a = t.about;

  return (
    <main className="flex-1">
      <section className="px-5 pb-16 pt-14 md:px-8 md:pb-24 md:pt-28">
        <div className="mx-auto max-w-[1200px]">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-gray">{a.eyebrow}</p>
          <h1 className="mt-5 max-w-4xl text-balance text-[2.5rem] font-semibold leading-[1.03] tracking-[-0.04em] text-black sm:text-6xl lg:text-[4.5rem]">
            {a.title}
          </h1>
          <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-gray md:text-xl">{a.sub}</p>
        </div>
      </section>

      <section className="border-y border-gray/15 px-5 md:px-8">
        <dl className="mx-auto grid max-w-[1200px] grid-cols-2 lg:grid-cols-4">
          {a.facts.map((f, i) => (
            <div
              key={f.label}
              className={`py-8 md:py-12 ${i % 2 ? "pl-6 md:pl-10" : "pr-6"} ${i > 1 ? "border-t border-gray/15 lg:border-t-0" : ""} ${i % 2 ? "border-l border-gray/15" : ""} lg:border-l lg:px-10 lg:first:border-l-0 lg:first:pl-0`}
            >
              <dt className="sr-only">{f.label}</dt>
              <dd className="font-mono text-4xl font-medium tracking-tight text-black md:text-5xl">{f.n}</dd>
              <dd className="mt-3 max-w-[14rem] text-[15px] leading-snug text-gray">{f.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="px-5 py-24 md:px-8 md:py-36">
        <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-12">
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-black md:text-4xl lg:col-span-4">{a.storyTitle}</h2>
          <div className="lg:col-span-7 lg:col-start-6">
            {a.story.map((p) => (
              <p key={p} className="mb-6 text-pretty text-lg leading-relaxed text-black/80 md:text-xl md:leading-relaxed">
                {p}
              </p>
            ))}
            <p className="mt-10 flex items-center gap-3 text-[15px] text-gray">
              <span aria-hidden className="h-px w-8 bg-accent" />
              {a.signature}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-light-gray px-5 py-24 md:px-8 md:py-36">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-black md:text-4xl lg:col-span-6">{a.teamTitle}</h2>
            <p className="max-w-md text-[17px] text-gray lg:col-span-5 lg:col-start-8">{a.teamSub}</p>
          </div>
          <div className="mt-14">
            <table className="w-full border-t border-gray/25 text-left">
              <tbody>
                {a.team.map((row) => (
                  <tr key={row.area} className="border-b border-gray/25">
                    <th scope="row" className="w-2/5 py-6 pr-4 align-top text-lg font-semibold text-black md:w-1/3 md:py-8 md:pr-6 md:align-middle md:text-xl">
                      {row.area}
                    </th>
                    <td className="py-6 font-mono text-[15px] text-primary md:w-1/3 md:py-8 md:pr-6">
                      {row.tools}
                      <span className="mt-1 block font-sans text-sm text-gray md:hidden">{row.note}</span>
                    </td>
                    <td className="hidden py-6 text-[15px] text-gray md:table-cell md:py-8">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-8 md:py-36">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-black md:text-4xl">{a.principlesTitle}</h2>
          <ol className="mt-14 grid gap-x-12 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {a.principles.map((p, i) => (
              <li key={p.title} className="border-t border-gray/20 pt-6">
                <span className="font-mono text-sm text-gray">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 text-xl font-semibold tracking-[-0.015em] text-black">{p.title}</h3>
                <p className="mt-3 text-pretty text-[17px] leading-relaxed text-gray">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-5 pb-24 md:px-8 md:pb-36">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 rounded-[28px] bg-light-gray p-6 sm:p-10 lg:grid-cols-12 lg:p-14">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-gray">{a.productEyebrow}</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-black md:text-4xl">EasySale</h2>
            <p className="mt-5 text-pretty text-[17px] leading-relaxed text-gray">{a.productText}</p>
            <a
              href="https://easysale.uz"
              target="_blank"
              rel="noopener"
              className="mt-8 inline-flex items-center gap-1 text-[17px] font-medium text-primary hover:underline hover:underline-offset-4"
            >
              easysale.uz
              <ArrowUpRight aria-hidden className="size-4" />
            </a>
          </div>
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-2xl border border-gray/15 bg-white shadow-[0_30px_60px_-30px] shadow-black/20">
              <div className="flex h-8 items-center justify-center border-b border-gray/10 bg-light-gray font-mono text-[11px] text-gray">easysale.uz</div>
              <Image
                src="/work/easysale.jpg"
                alt={`EasySale: ${a.productText}`}
                width={2560}
                height={1440}
                sizes="(min-width: 1200px) 640px, (min-width: 1024px) 55vw, 100vw"
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title={a.ctaTitle}
        text={a.ctaText}
        primary={{ label: t.hero.primary, href: href(locale, "contact")! }}
        telegram={{ label: t.hero.telegram, href: telegramLink(t.hero.telegramText) }}
      />
    </main>
  );
}
