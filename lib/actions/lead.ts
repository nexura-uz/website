"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import { uz } from "@/content/dictionaries/uz";
import { hasLocale, locales, type Locale } from "@/lib/i18n";
import { attributionKeys, leadBudgets, leadServices, leadTimelines, type LeadState } from "@/lib/lead";
import { href } from "@/lib/routes";

const MIN_FILL_MS = 3000;
const optional = z.string().trim().max(500).optional().default("");

const schema = z.object({
  locale: z.enum(locales),
  service: z.enum(leadServices),
  budget: z.enum(leadBudgets),
  timeline: z.enum(leadTimelines),
  name: z.string().trim().min(1).max(100),
  phone: z.string().trim().max(30).optional().default(""),
  telegram: z.string().trim().max(40).optional().default(""),
  email: z.string().trim().max(120).optional().default(""),
  company: z.string().trim().max(120).optional().default(""),
  message: z.string().trim().max(2000).optional().default(""),
  consent: z.literal("on"),
  page: optional,
  ...Object.fromEntries(attributionKeys.map((k) => [k, optional])),
});

// Leads go only to the private Telegram group. Never log the payload (personal data).
export async function submitLead(_prev: LeadState, formData: FormData): Promise<LeadState> {
  // Bots: honeypot filled or submitted faster than a human could. Pretend success.
  const startedAt = Number(formData.get("t"));
  const rawLocale = String(formData.get("locale"));
  if (formData.get("website") || !startedAt || Date.now() - startedAt < MIN_FILL_MS) thankYou(hasLocale(rawLocale) ? rawLocale : "uz");

  const parsed = schema.safeParse(Object.fromEntries(formData));
  const errors: Extract<LeadState, { status: "error" }>["errors"] = {};

  if (!parsed.success) {
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (key === "name" || key === "consent") errors[key] = true;
      else errors.server = true;
    }
    return { status: "error", errors };
  }

  const d = parsed.data;
  const phoneDigits = d.phone.replace(/\D/g, "");
  const telegram = d.telegram.replace(/^@/, "");

  if (d.locale === "en") {
    if (!z.email().safeParse(d.email).success) errors.email = true;
    if (phoneDigits && (phoneDigits.length < 7 || phoneDigits.length > 15)) errors.phone = true;
  } else {
    if (!phoneDigits && !telegram) errors.contact = true;
    if (phoneDigits && phoneDigits.length !== 9) errors.phone = true;
  }
  if (telegram && !/^[A-Za-z0-9_]{5,32}$/.test(telegram)) errors.telegram = true;
  if (Object.keys(errors).length) return { status: "error", errors };

  const phone = phoneDigits && (d.locale === "en" ? `+${phoneDigits}` : `+998${phoneDigits}`);
  const ok = await sendToTelegram(
    formatLead({ ...d, phone, telegram: telegram && `@${telegram}` } as Record<string, string>),
  );
  if (!ok) return { status: "error", errors: { server: true } };
  thankYou(d.locale);
}

// The thank-you page view is the conversion (CLAUDE.md §8.6). redirect() throws, so it ends the action.
function thankYou(locale: Locale): never {
  redirect(href(locale, "thanks")!);
}

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// The team reads leads in Uzbek, whatever language the visitor used.
function formatLead(d: Record<string, string>) {
  const f = uz.contact.form;
  const service = d.service === "unsure" ? f.unsure : uz.services[d.service as keyof typeof uz.services].title;
  const budget = f.budgets[d.budget as keyof typeof f.budgets];
  const timeline = f.timelines[d.timeline as keyof typeof f.timelines];
  const contact = [d.name, d.phone, d.telegram, d.email].filter(Boolean).map(esc).join(", ");
  const source = [d.utm_source || "direct", d.utm_medium, d.utm_campaign, d.utm_content].filter(Boolean).map(esc).join(" / ");

  return [
    `🆕 <b>${esc(service)}</b> · ${esc(budget)} · ${esc(timeline)}`,
    `👤 ${contact}`,
    d.company && `🏢 ${esc(d.company)}`,
    d.message && `💬 ${esc(d.message)}`,
    `🔗 ${source}`,
    d.referrer && `↩️ ${esc(d.referrer)}`,
    `📄 ${esc(d.page || "-")} · landing ${esc(d.landing_page || "-")} · ${d.locale.toUpperCase()}`,
  ]
    .filter(Boolean)
    .join("\n");
}

async function sendToTelegram(text: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_GROUP_ID;
  if (!token || !chatId) {
    console.error("lead: TELEGRAM_BOT_TOKEN / TELEGRAM_GROUP_ID not set");
    return false;
  }
  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text, parse_mode: "HTML", link_preview_options: { is_disabled: true } }),
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) console.error("lead: telegram responded", res.status);
    return res.ok;
  } catch (e) {
    console.error("lead: telegram request failed", (e as Error).name);
    return false;
  }
}
