import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { getDictionary } from "@/content/dictionaries";
import { serviceKeys } from "@/content/pricing";
import type { Locale } from "@/lib/i18n";
import { href } from "@/lib/routes";
import { site, telegramLink } from "@/site.config";

const socials = [
  { label: "Instagram", href: site.socials.instagram },
  { label: "YouTube", href: site.socials.youtube },
  { label: "LinkedIn", href: site.socials.linkedin },
  { label: "X", href: site.socials.x },
];

// Fixed at build time; the yearly redeploy updates it.
async function currentYear() {
  "use cache";
  return new Date().getFullYear();
}

export async function Footer({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const year = await currentYear();
  const f = t.footer;

  const company = (["work", "pricing", "about", "contact"] as const)
    .map((key) => ({ label: t.nav[key], href: href(locale, key) }))
    .filter((l): l is { label: string; href: string } => l.href !== null);

  return (
    <footer className="mt-auto bg-light-gray px-5 md:px-8">
      <div className="mx-auto max-w-[1200px] pb-10 pt-16 md:pt-24">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-12 md:gap-8">
          <div className="col-span-2 md:col-span-4">
            <Link href={href(locale, "home")!} aria-label="Nexura" className="inline-block rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-light-gray">
              <Logo variant="wordmark" className="h-6 w-auto text-primary" />
            </Link>
            <p className="mt-6 max-w-xs text-pretty text-[15px] leading-relaxed text-gray">{f.tagline}</p>
          </div>

          <Column title={f.services} className="col-span-2 md:col-span-3">
            {serviceKeys.map((key) => (
              <FooterLink key={key} href={href(locale, key)!}>
                {t.services[key].title}
              </FooterLink>
            ))}
          </Column>

          <Column title={f.company} className="md:col-span-2">
            {company.map((l) => (
              <FooterLink key={l.href} href={l.href}>
                {l.label}
              </FooterLink>
            ))}
          </Column>

          <Column title={f.contact} className="md:col-span-3">
            <li>
              <a href={telegramLink(t.hero.telegramText)} target="_blank" rel="noopener" className={linkCls}>
                Telegram
              </a>
            </li>
            <li>
              <a href={site.phoneHref} className={`${linkCls} font-mono text-[14px]`}>
                {site.phone}
              </a>
            </li>
            <li className="text-[15px] text-gray">{f.hours}</li>
            <li className="text-[15px] text-gray">{f.location}</li>
          </Column>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-gray/20 pt-8 text-sm text-gray md:mt-20 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>© {year} Nexura</span>
            <Link href={href(locale, "privacy")!} className="transition-colors hover:text-black">
              {f.privacy}
            </Link>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener" className="transition-colors hover:text-black">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

const linkCls = "text-[15px] text-black/80 transition-colors hover:text-primary";

function Column({ title, className, children }: { title: string; className?: string; children: React.ReactNode }) {
  return (
    <nav aria-label={title} className={className}>
      <p className="font-mono text-xs uppercase tracking-[0.14em] text-gray">{title}</p>
      <ul className="mt-5 space-y-3">{children}</ul>
    </nav>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className={linkCls}>
        {children}
      </Link>
    </li>
  );
}
