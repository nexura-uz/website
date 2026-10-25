import type { Metadata } from "next";
import { Clients } from "@/components/home/Clients";
import { Faq } from "@/components/home/Faq";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { CtaBand } from "@/components/ui/CtaBand";
import { href } from "@/lib/routes";
import { telegramLink } from "@/site.config";
import { getDictionary } from "@/content/dictionaries";
import { hasLocale, type Locale } from "@/lib/i18n";
import { alternates, ogImagePath } from "@/lib/routes";

const ogLocale: Record<Locale, string> = { uz: "uz_UZ", ru: "ru_RU", en: "en_US" };

export async function generateMetadata({ params }: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  const t = getDictionary(locale).meta;
  const alt = alternates("home", locale);

  return {
    title: t.homeTitle,
    description: t.homeDescription,
    alternates: alt,
    openGraph: {
      title: t.homeTitle,
      description: t.homeDescription,
      url: alt.canonical,
      siteName: "Nexura",
      locale: ogLocale[locale],
      type: "website",
      images: [{ url: ogImagePath(locale, "home")!, width: 1200, height: 630 }],
    },
  };
}

export default async function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!hasLocale(locale)) return null;
  const t = getDictionary(locale);

  return (
    <main className="flex-1">
      <Hero locale={locale} />
      <Clients locale={locale} />
      <Services locale={locale} />
      <Faq locale={locale} />
      <CtaBand
        title={t.about.ctaTitle}
        text={t.about.ctaText}
        primary={{ label: t.hero.primary, href: href(locale, "contact")! }}
        telegram={{ label: t.hero.telegram, href: telegramLink(t.hero.telegramText) }}
      />
    </main>
  );
}
