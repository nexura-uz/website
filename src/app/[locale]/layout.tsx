import { ReactNode } from "react";
import BaseLayout from "@/components/base-layout";
import { routing } from "@/i18n/routing";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Head from "next/head";

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props) {
  const locale = (await params).locale;
  const t = await getTranslations({ locale, namespace: "Home" });

  return {
    title: t("title"),
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const locale = (await params).locale;

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <BaseLayout locale={locale}>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Nexura",
              url: "https://nexura.uz",
              logo: "https://nexura.uz/favicon.png",
            }),
          }}
        />
      </Head>
      {children}
      <SpeedInsights />
    </BaseLayout>
  );
}
