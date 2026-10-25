import { getDictionary } from "@/content/dictionaries";
import type { Locale } from "@/lib/i18n";

// Text names until real SVG logos are added (Midea, Goodwell, TechVision cleared for use).
const clients = ["Midea", "Goodwell", "TechVision"];

export function Clients({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).clients;

  return (
    <section className="border-y border-gray/15 px-5 md:px-8">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-5 py-8 md:flex-row md:items-center md:gap-12">
        <p className="shrink-0 text-sm text-gray">{t.label}</p>
        <ul className="flex flex-wrap items-center gap-x-10 gap-y-3">
          {clients.map((c) => (
            <li key={c} className="text-xl font-semibold tracking-[-0.02em] text-black/45">
              {c}
            </li>
          ))}
        </ul>
        <p className="font-mono text-[13px] text-gray md:ml-auto">{t.stores}</p>
      </div>
    </section>
  );
}
