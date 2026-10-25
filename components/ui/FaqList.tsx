import { Plus } from "lucide-react";
import { JsonLd } from "./JsonLd";

// Native <details>: answers stay in the HTML for search engines, no JS needed. Emits FAQPage schema.
export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="border-t border-gray/20">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: items.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })),
        }}
      />
      {items.map((i) => (
        <details key={i.q} className="group border-b border-gray/20">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-left text-lg font-medium text-black transition-colors hover:text-primary md:py-7 md:text-xl [&::-webkit-details-marker]:hidden">
            <h3>{i.q}</h3>
            <Plus aria-hidden className="mt-1 size-5 shrink-0 text-gray transition-transform duration-200 group-open:rotate-45" />
          </summary>
          <p className="-mt-1 max-w-2xl pb-7 text-pretty text-[17px] leading-relaxed text-gray">{i.a}</p>
        </details>
      ))}
    </div>
  );
}
