import { locales, type Locale } from "@/lib/i18n";

// Localized paths per page (CLAUDE.md §7). null = page doesn't exist in that locale.
export const routes = {
  home: { uz: "", ru: "", en: "" },
  telegramBot: { uz: "xizmatlar/telegram-bot", ru: "uslugi/telegram-bot", en: "services/telegram-bots" },
  website: { uz: "xizmatlar/sayt", ru: "uslugi/sajt", en: "services/web" },
  ecommerce: { uz: "xizmatlar/internet-dokon", ru: "uslugi/internet-magazin", en: "services/e-commerce" },
  apps: { uz: "xizmatlar/ilovalar", ru: "uslugi/prilozheniya", en: "services/apps" },
  businessSystem: { uz: "xizmatlar/biznes-tizim", ru: "uslugi/biznes-sistema", en: "services/business-systems" },
  work: { uz: "loyihalar", ru: "proekty", en: "work" },
  pricing: { uz: "narxlar", ru: "ceny", en: null },
  about: { uz: "biz-haqimizda", ru: "o-nas", en: "about" },
  contact: { uz: "aloqa", ru: "kontakty", en: "contact" },
  privacy: { uz: "maxfiylik", ru: "konfidencialnost", en: "privacy" },
  thanks: { uz: "rahmat", ru: "spasibo", en: "thank-you" },
} satisfies Record<string, Record<Locale, string | null>>;

export type RouteKey = keyof typeof routes;

// Pages that exist. Add a key when its page ships: drives the sitemap and real 404s in proxy.ts.
export const shipped: RouteKey[] = [
  "home",
  "telegramBot",
  "website",
  "ecommerce",
  "apps",
  "businessSystem",
  "work",
  "about",
  "pricing",
  "contact",
  "privacy",
  "thanks",
];

export function href(locale: Locale, key: RouteKey) {
  const path = routes[key][locale];
  return path === null ? null : path ? `/${locale}/${path}` : `/${locale}`;
}

// Generated link-preview image for a page (app/og/[...slug]/route.ts).
export function ogImagePath(locale: Locale, key: RouteKey) {
  const path = routes[key][locale];
  if (path === null) return null;
  return path ? `/og/${locale}/${path}.png` : `/og/${locale}.png`;
}

export function resolvePath(locale: Locale, path: string) {
  return (Object.keys(routes) as RouteKey[]).find((k) => routes[k][locale] === path);
}

// Same page in another locale; falls back to that locale's home.
export function switchLocale(pathname: string, from: Locale, to: Locale) {
  const rest = pathname.replace(new RegExp(`^/${from}/?`), "");
  const key = (Object.keys(routes) as RouteKey[]).find((k) => routes[k][from] === rest);
  return (key && href(to, key)) ?? `/${to}`;
}

// hreflang alternates for a page, x-default = uz.
export function alternates(key: RouteKey, locale: Locale) {
  const languages: Record<string, string> = {};
  for (const l of locales) {
    const h = href(l, key);
    if (h) languages[l] = h;
  }
  return { canonical: href(locale, key)!, languages: { ...languages, "x-default": languages.uz } };
}
