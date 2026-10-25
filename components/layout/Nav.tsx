"use client";

import { ArrowUpRight, ChevronDown, Menu, Send, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import type { Dictionary } from "@/content/dictionaries";
import { locales, type Locale } from "@/lib/i18n";
import { switchLocale } from "@/lib/routes";

type Service = { key: string; title: string; note: string; href: string; price: string | null };

type NavProps = {
  locale: Locale;
  t: Dictionary["nav"];
  services: Service[];
  links: { label: string; href: string }[];
  homeHref: string;
  contactHref: string;
  telegramHref: string;
};

const ease = [0.22, 1, 0.36, 1] as const;

export function Nav({ locale, t, services, links, homeHref, contactHref, telegramHref }: NavProps) {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setMobileOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (!servicesRef.current?.contains(e.target as Node)) setServicesOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  const close = () => {
    setServicesOpen(false);
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-gray/15 bg-white">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center gap-10 px-5 md:h-[72px] md:px-8">
        <Link href={homeHref} onClick={close} className="shrink-0 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4">
          <Logo variant="lockup" className="h-6 w-auto text-primary md:h-7" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          <div
            ref={servicesRef}
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              aria-expanded={servicesOpen}
              aria-controls="services-menu"
              onClick={() => setServicesOpen((v) => !v)}
              className="flex items-center gap-1 rounded-lg px-3 py-2 text-[15px] text-black/80 transition-colors hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {t.services}
              <ChevronDown
                aria-hidden
                className={`size-4 text-gray transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  id="services-menu"
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.18, ease }}
                  className="absolute left-0 top-full pt-3"
                >
                  <ul className="w-[480px] overflow-hidden rounded-2xl border border-gray/15 bg-white p-2 shadow-xl shadow-black/5">
                    {services.map((s) => (
                      <li key={s.key}>
                        <Link
                          href={s.href}
                          onClick={close}
                          className="group flex items-baseline justify-between gap-6 rounded-xl px-4 py-3 transition-colors hover:bg-light-gray focus-visible:bg-light-gray focus-visible:outline-none"
                        >
                          <span>
                            <span className="block text-[15px] font-medium text-black">{s.title}</span>
                            <span className="mt-0.5 block text-sm text-gray">{s.note}</span>
                          </span>
                          {s.price && (
                            <span className="shrink-0 font-mono text-[13px] text-gray group-hover:text-primary">
                              {s.price}
                            </span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={pathname === l.href ? "page" : undefined}
              className="rounded-lg px-3 py-2 text-[15px] text-black/80 transition-colors hover:text-black aria-[current=page]:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-5 lg:flex">
          <LocaleSwitcher locale={locale} pathname={pathname} label={t.language} />
          <Link
            href={contactHref}
            className="inline-flex h-9 items-center rounded-full border border-primary/25 px-4 text-[14px] font-medium text-primary transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            {t.cta}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? t.close : t.menu}
          className="-mr-2 ml-auto grid size-10 place-items-center rounded-xl text-black lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          {mobileOpen ? <X aria-hidden className="size-6" /> : <Menu aria-hidden className="size-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease }}
            className="fixed inset-x-0 bottom-0 top-16 overflow-y-auto bg-white lg:hidden"
          >
            <div className="flex min-h-full flex-col px-5 pb-8 pt-6">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-gray">{t.services}</p>
              <ul className="mt-3 divide-y divide-gray/15 border-y border-gray/15">
                {services.map((s) => (
                  <li key={s.key}>
                    <Link href={s.href} onClick={close} className="flex items-baseline justify-between gap-4 py-4">
                      <span className="text-lg font-medium text-black">{s.title}</span>
                      {s.price && <span className="shrink-0 font-mono text-[13px] text-gray">{s.price}</span>}
                    </Link>
                  </li>
                ))}
              </ul>

              <ul className="mt-6 space-y-1">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} onClick={close} className="block py-2 text-lg text-black">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-10">
                <LocaleSwitcher locale={locale} pathname={pathname} label={t.language} onNavigate={close} />
                <div className="mt-6 grid gap-3">
                  <Link
                    href={contactHref}
                    onClick={close}
                    className="inline-flex h-12 items-center justify-center rounded-xl bg-primary text-base font-medium text-white"
                  >
                    {t.cta}
                  </Link>
                  <a
                    href={telegramHref}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-primary text-base font-medium text-primary"
                  >
                    <Send aria-hidden className="size-[18px]" />
                    Telegram
                    <ArrowUpRight aria-hidden className="size-4 opacity-60" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function LocaleSwitcher({
  locale,
  pathname,
  label,
  onNavigate,
}: {
  locale: Locale;
  pathname: string;
  label: string;
  onNavigate?: () => void;
}) {
  return (
    <ul aria-label={label} className="flex items-center gap-0.5 font-mono text-[13px]">
      {locales.map((l) => (
        <li key={l}>
          <Link
            href={switchLocale(pathname, locale, l)}
            hrefLang={l}
            onClick={onNavigate}
            aria-current={l === locale ? "true" : undefined}
            className="rounded-md px-2 py-1 uppercase text-gray transition-colors hover:text-black aria-[current=true]:text-black aria-[current=true]:underline aria-[current=true]:decoration-accent aria-[current=true]:decoration-2 aria-[current=true]:underline-offset-[6px]"
          >
            {l}
          </Link>
        </li>
      ))}
    </ul>
  );
}
