export const locales = ["uz", "ru", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "uz";

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

export const htmlLang: Record<Locale, string> = { uz: "uz-Latn", ru: "ru", en: "en" };
