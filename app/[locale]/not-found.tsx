import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { locale } from "next/root-params";
import { getDictionary } from "@/content/dictionaries";
import { defaultLocale, hasLocale } from "@/lib/i18n";

export default async function NotFound() {
  const l = await locale();
  const current = hasLocale(l) ? l : defaultLocale;
  const t = getDictionary(current).notFound;

  return (
    <main className="flex flex-1 items-center px-5 py-24 md:px-8 md:py-36">
      <div className="mx-auto w-full max-w-[1200px]">
        <p className="font-mono text-sm text-gray">404</p>
        <h1 className="mt-6 max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-black md:text-6xl">
          {t.title}
        </h1>
        <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-gray md:text-xl">{t.text}</p>
        <Link
          href={`/${current}`}
          className="group mt-10 inline-flex h-12 items-center gap-2 rounded-full bg-primary px-7 text-base font-medium text-white transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          {t.cta}
          <ArrowRight aria-hidden className="size-[18px] transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </main>
  );
}
