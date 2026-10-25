import type { Locale } from "@/lib/i18n";
import { en } from "./en";
import { ru } from "./ru";
import { uz, type Dictionary } from "./uz";

const dictionaries: Record<Locale, Dictionary> = { uz, ru, en };

export const getDictionary = (locale: Locale) => dictionaries[locale];
export type { Dictionary };
