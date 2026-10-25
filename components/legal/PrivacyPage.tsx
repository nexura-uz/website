import { getDictionary } from "@/content/dictionaries";
import type { Locale } from "@/lib/i18n";
import { site, telegramLink } from "@/site.config";

export function PrivacyPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const p = t.privacy;

  return (
    <main className="flex-1 px-5 pb-24 pt-14 md:px-8 md:pb-36 md:pt-24">
      <article className="mx-auto max-w-2xl">
        <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-black md:text-5xl">{p.title}</h1>
        <p className="mt-5 font-mono text-[13px] text-gray">{p.updated}</p>
        <p className="mt-10 text-pretty text-lg leading-relaxed text-black/80">{p.intro}</p>

        {p.sections.map((s) => (
          <section key={s.title} className="mt-12 border-t border-gray/15 pt-10">
            <h2 className="text-xl font-semibold tracking-[-0.015em] text-black md:text-2xl">{s.title}</h2>
            {s.body.map((para) => (
              <p key={para} className="mt-4 text-pretty text-[17px] leading-relaxed text-black/80">
                {para}
              </p>
            ))}
            {s.list && (
              <ul className="mt-4 list-disc space-y-2 pl-5 text-[17px] leading-relaxed text-black/80 marker:text-gray">
                {s.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
            {s.after && <p className="mt-4 text-pretty text-[17px] leading-relaxed text-black/80">{s.after}</p>}
          </section>
        ))}

        <section className="mt-12 border-t border-gray/15 pt-10">
          <h2 className="text-xl font-semibold tracking-[-0.015em] text-black md:text-2xl">{p.contactTitle}</h2>
          <ul className="mt-4 space-y-2 text-[17px]">
            <li>
              <a href={telegramLink()} target="_blank" rel="noopener" className="text-primary underline-offset-4 hover:underline">
                Telegram
              </a>
            </li>
            <li>
              <a href={site.phoneHref} className="font-mono text-[15px] text-primary underline-offset-4 hover:underline">
                {site.phone}
              </a>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
