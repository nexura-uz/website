import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { alternates, href, shipped } from "@/lib/routes";
import { site } from "@/site.config";


export default function sitemap(): MetadataRoute.Sitemap {
  const abs = (path: string) => `${site.url}${path}`;
  return shipped.filter((key) => key !== "thanks").flatMap((key) =>
    locales.flatMap((locale) => {
      const url = href(locale, key);
      if (!url) return [];
      const { languages } = alternates(key, locale);
      return {
        url: abs(url),
        alternates: { languages: Object.fromEntries(Object.entries(languages).map(([l, p]) => [l, abs(p)])) },
      };
    }),
  );
}
