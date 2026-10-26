import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";

// The one dark green section a page gets (CLAUDE.md §5.1): mint button on primary.
export function CtaBand({
  title,
  text,
  primary,
  telegram,
}: {
  title: string;
  text: string;
  primary: { label: string; href: string };
  telegram: { label: string; href: string };
}) {
  return (
    <section data-cta="cta_band" className="bg-primary px-5 py-24 text-white md:px-8 md:py-32">
      <div className="mx-auto max-w-[1200px] text-center">
        <h2 className="text-balance text-3xl font-semibold tracking-[-0.03em] md:text-5xl">{title}</h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-white/70">{text}</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-8">
          <Link
            href={primary.href}
            className="group inline-flex h-12 items-center gap-2 rounded-full bg-accent px-7 text-base font-medium text-black transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
          >
            {primary.label}
            <ArrowRight aria-hidden className="size-[18px] transition-transform group-hover:translate-x-0.5" />
          </Link>
          <a
            href={telegram.href}
            target="_blank"
            rel="noopener"
            className="group inline-flex items-center gap-0.5 text-base text-white/80 hover:text-white hover:underline hover:underline-offset-4"
          >
            {telegram.label}
            <ChevronRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
