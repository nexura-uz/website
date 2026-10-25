import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import { getDictionary } from "@/content/dictionaries";
import type { Locale } from "@/lib/i18n";
import { href } from "@/lib/routes";
import { telegramLink } from "@/site.config";
import { HeroVisual } from "./HeroVisual";

export function Hero({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <section className="overflow-x-clip px-5 pb-20 pt-16 md:px-8 md:pb-32 md:pt-28">
      <div className="mx-auto grid max-w-[1200px] items-center gap-16 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <h1 className="text-balance text-[2.125rem] font-semibold leading-[1.03] tracking-[-0.04em] text-black min-[420px]:text-[2.5rem] sm:text-6xl lg:text-[3.5rem] xl:text-[4.25rem]">
            {t.hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-gray md:mt-8 md:text-xl">{t.hero.sub}</p>

          <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8 md:mt-12">
            <Link
              href={href(locale, "contact")!}
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-primary px-7 text-base font-medium text-white transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              {t.hero.primary}
              <ArrowRight aria-hidden className="size-[18px] transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href={telegramLink(t.hero.telegramText)}
              target="_blank"
              rel="noopener"
              className="group inline-flex items-center gap-0.5 text-base text-primary hover:underline hover:underline-offset-4"
            >
              {t.hero.telegram}
              <ChevronRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          <p className="mt-12 font-mono text-[13px] tracking-wide text-gray md:mt-14">{t.hero.platforms}</p>
        </div>

        <div className="lg:col-span-5">
          <HeroVisual t={t.sheet} />
        </div>
      </div>
    </section>
  );
}
