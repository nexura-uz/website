import type { Metadata, Viewport } from "next";
import { Geologica } from "next/font/google";
import { notFound } from "next/navigation";
import { Attribution } from "@/components/Attribution";
import { CookieNotice } from "@/components/legal/CookieNotice";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileBar } from "@/components/layout/MobileBar";
import { getDictionary } from "@/content/dictionaries";
import { hasLocale, htmlLang, locales } from "@/lib/i18n";
import { href } from "@/lib/routes";
import { site } from "@/site.config";
import "../globals.css";

// Geologica has no U+02BB (ʻ in oʻ/gʻ); system-ui fallback renders it.
const geologica = Geologica({
  variable: "--font-geologica",
  subsets: ["latin", "latin-ext", "cyrillic"],
  fallback: ["system-ui", "sans-serif"],
});

export const viewport: Viewport = { themeColor: "#0B5D4B" };

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Nexura",
  manifest: "/site.webmanifest",
  // Fallback only: every page has its own generated opengraph-image.
  openGraph: { images: ["/og-default.png"] },
  twitter: { card: "summary_large_image" },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();

  return (
    <html lang={htmlLang[locale]} className={`${geologica.variable} h-full`}>
      <body className="min-h-full flex flex-col pb-[calc(3.5rem+env(safe-area-inset-bottom))] font-sans lg:pb-0">
        <Attribution />
        <Header locale={locale} />
        {children}
        <Footer locale={locale} />
        <MobileBar locale={locale} />
        <CookieNotice t={getDictionary(locale).cookie} privacyHref={href(locale, "privacy")!} />
      </body>
    </html>
  );
}
