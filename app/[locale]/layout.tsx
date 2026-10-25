import type { Metadata, Viewport } from "next";
import { Geologica } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, htmlLang, locales } from "@/lib/i18n";
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
  openGraph: { images: ["/og-default.png"] },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();

  return (
    <html lang={htmlLang[locale]} className={`${geologica.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
