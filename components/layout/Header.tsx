import { getDictionary } from "@/content/dictionaries";
import { fromPrice, serviceKeys } from "@/content/pricing";
import type { Locale } from "@/lib/i18n";
import { href } from "@/lib/routes";
import { telegramLink } from "@/site.config";
import { Nav } from "./Nav";

export function Header({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  const services = serviceKeys.map((key) => ({
    key,
    title: t.services[key].title,
    note: t.services[key].note,
    href: href(locale, key)!,
    price: locale === "en" ? null : fromPrice(key, t.nav.from),
  }));

  const links = (["work", "pricing", "about"] as const)
    .map((key) => ({ label: t.nav[key], href: href(locale, key) }))
    .filter((l): l is { label: string; href: string } => l.href !== null);

  return (
    <Nav
      locale={locale}
      t={t.nav}
      services={services}
      links={links}
      homeHref={href(locale, "home")!}
      contactHref={href(locale, "contact")!}
      telegramHref={telegramLink(t.hero.telegramText)}
    />
  );
}
