import { servicePrice } from "@/components/services/ServicePage";
import { getDictionary } from "@/content/dictionaries";
import { serviceKeys, type ServiceKey } from "@/content/pricing";
import { hasLocale, locales, type Locale } from "@/lib/i18n";
import { ogImage } from "@/lib/og";
import { ogImagePath, resolvePath, shipped, type RouteKey } from "@/lib/routes";

// Link-preview images: /og/{locale}.png (home) and /og/{locale}/{path}.png, prerendered at build.
// (Next doesn't allow opengraph-image.tsx under the [...path] catch-all, so this route does the same job.)
const withImage = shipped.filter((k) => k !== "thanks");

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    withImage.flatMap((key) => {
      const path = ogImagePath(locale, key);
      return path ? [{ slug: path.slice("/og/".length).split("/") }] : [];
    }),
  );
}

function content(locale: Locale, key: RouteKey | undefined) {
  const t = getDictionary(locale);
  if (key && (serviceKeys as readonly string[]).includes(key)) {
    const service = key as ServiceKey;
    return { eyebrow: t.servicePages.common.eyebrow, title: t.servicePages[service].h1, price: servicePrice(locale, service) };
  }
  switch (key) {
    case "work":
      return { eyebrow: t.projects.eyebrow, title: t.projects.title };
    case "about":
      return { eyebrow: t.about.eyebrow, title: t.about.title };
    case "pricing":
      return { eyebrow: t.pricing!.eyebrow, title: t.pricing!.title };
    case "contact":
      return { eyebrow: t.nav.contact, title: t.contact.title };
    case "privacy":
      return { eyebrow: "nexura.uz", title: t.privacy.title };
    case "home":
      return { eyebrow: "nexura.uz", title: t.hero.title };
    default:
      return null;
  }
}

export async function GET(_req: Request, { params }: RouteContext<"/og/[...slug]">) {
  const [locale, ...parts] = (await params).slug.join("/").replace(/\.png$/, "").split("/");
  const c = hasLocale(locale) ? content(locale, resolvePath(locale, parts.join("/"))) : null;
  if (!c) return new Response("Not found", { status: 404 });
  return ogImage(c);
}
