import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AboutPage } from "@/components/about/AboutPage";
import { ContactPage } from "@/components/contact/ContactPage";
import { PrivacyPage } from "@/components/legal/PrivacyPage";
import { PricingPage } from "@/components/pricing/PricingPage";
import { ProjectsPage } from "@/components/projects/ProjectsPage";
import { ServicePage, servicePrice } from "@/components/services/ServicePage";
import { ThanksPage } from "@/components/contact/ThanksPage";
import { serviceKeys } from "@/content/pricing";
import { getDictionary } from "@/content/dictionaries";
import { hasLocale, locales, type Locale } from "@/lib/i18n";
import { alternates, ogImagePath, resolvePath, routes, type RouteKey } from "@/lib/routes";

// Every localized page (/uz/aloqa, /ru/kontakty, …) resolves here through lib/routes.ts.
// Add a key when its page ships.
type Page = {
  render: (locale: Locale) => React.ReactNode;
  meta: (locale: Locale) => { title: string; description: string };
  noindex?: boolean;
};

const services = Object.fromEntries(
  serviceKeys.map((key): [RouteKey, Page] => [
    key,
    {
      render: (locale) => <ServicePage locale={locale} service={key} />,
      meta: (locale) => {
        const s = getDictionary(locale).servicePages[key];
        const price = servicePrice(locale, key) ?? "";
        return { title: s.titleTemplate.replace("{price}", price), description: s.metaDescription.replace("{price}", price) };
      },
    },
  ]),
);

const pages: Partial<Record<RouteKey, Page>> = {
  ...services,
  contact: {
    render: (locale) => <ContactPage locale={locale} />,
    meta: (locale) => {
      const c = getDictionary(locale).contact;
      return { title: c.metaTitle, description: c.metaDescription };
    },
  },
  work: {
    render: (locale) => <ProjectsPage locale={locale} />,
    meta: (locale) => {
      const p = getDictionary(locale).projects;
      return { title: p.metaTitle, description: p.metaDescription };
    },
  },
  about: {
    render: (locale) => <AboutPage locale={locale} />,
    meta: (locale) => {
      const a = getDictionary(locale).about;
      return { title: a.metaTitle, description: a.metaDescription };
    },
  },
  pricing: {
    render: (locale) => <PricingPage locale={locale} />,
    meta: (locale) => {
      const p = getDictionary(locale).pricing!;
      return { title: p.metaTitle, description: p.metaDescription };
    },
  },
  thanks: {
    render: (locale) => <ThanksPage locale={locale} />,
    meta: (locale) => ({ title: getDictionary(locale).thanks.metaTitle, description: getDictionary(locale).contact.form.success.text }),
    noindex: true,
  },
  privacy: {
    render: (locale) => <PrivacyPage locale={locale} />,
    meta: (locale) => {
      const p = getDictionary(locale).privacy;
      return { title: p.metaTitle, description: p.metaDescription };
    },
  },
};

export function generateStaticParams() {
  return locales.flatMap((locale) => [
    ...(Object.keys(pages) as RouteKey[])
      .map((key) => routes[key][locale])
      .filter((p): p is string => Boolean(p))
      .map((p) => ({ locale, path: p.split("/") })),
    // Prerendered 404 that proxy.ts rewrites unknown pages to (real 404 status, localized UI).
    { locale, path: ["__404"] },
  ]);
}

async function resolve(params: PageProps<"/[locale]/[...path]">["params"]) {
  const { locale, path } = await params;
  if (!hasLocale(locale)) return null;
  const key = resolvePath(locale, path.join("/"));
  const page = key && pages[key];
  return page ? { locale, key: key!, page } : null;
}

export async function generateMetadata({ params }: PageProps<"/[locale]/[...path]">): Promise<Metadata> {
  const r = await resolve(params);
  if (!r) return {};
  const { title, description } = r.page.meta(r.locale);
  const alt = alternates(r.key, r.locale);
  return {
    title,
    description,
    alternates: alt,
    openGraph: {
      title,
      description,
      url: alt.canonical,
      siteName: "Nexura",
      images: r.page.noindex ? ["/og-default.png"] : [{ url: ogImagePath(r.locale, r.key)!, width: 1200, height: 630 }],
    },
    ...(r.page.noindex && { robots: { index: false } }),
  };
}

export default async function LocalizedPage({ params }: PageProps<"/[locale]/[...path]">) {
  const r = await resolve(params);
  if (!r) notFound();
  return r.page.render(r.locale);
}
