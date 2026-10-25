# Build plan: nexura.uz (Phase A first)

Decisions from the founder, 2026-10-25. Some differ from CLAUDE.md; they are marked ⚠️ so the planning project can sync them.

| Topic | Decision |
|---|---|
| Hosting | Vercel. Domain registered at **ahost.uz** (DNS stays there, no Cloudflare) |
| Backend | ⚠️ **None.** No VPS API and no DB (CLAUDE.md §9.3 planned a VPS). One Next.js route handler sends the lead to the Telegram group through the bot. The Telegram group *is* the lead store. |
| Secrets | `TELEGRAM_BOT_TOKEN`, `TELEGRAM_GROUP_ID` in `.env.local` / Vercel env. Server-only, never `NEXT_PUBLIC_`. |
| Fonts | Geologica from Google Fonts via `next/font/google` (self-hosted at build) |
| Telegram links | `t.me/<handle>?text=…`, handle in `site.config.ts` (currently a `nexura_team` placeholder) |
| Package manager | npm |
| Stack | Next.js 16.4 App Router (`page.tsx` per route), Tailwind v4 `@theme` tokens, Cache Components on |

⚠️ **Legal note for the planning project:** lead data (name, phone) now goes through Vercel to Telegram, not to a server in Uzbekistan. Ask fewer questions to keep the data small, and route handlers must never log request bodies. If the lawyer says localization applies, the swap is one function (`lib/leads.ts`).

---

## Done (foundation)
- [x] Fresh Next.js 16 + Tailwind v4 scaffold, npm
- [x] Brand install: palette tokens in `app/globals.css`, Geologica (latin, latin-ext, cyrillic, plus a system fallback for ʻ U+02BB)
- [x] `brand/logo/` + `brand/colors.css` moved into place; `components/brand/Logo.tsx` (inline SVG, `wordmark | icon | lockup`)
- [x] Favicon, `icon.svg`, `apple-icon.png`, manifest, PWA icons, `og-default.png`, `logo-512.png`
- [x] Locale routing `app/[locale]` with `uz | ru | en` prerendered; `proxy.ts` sends any unprefixed path to `/uz` (308)
- [x] Redirects: `/portfolio` → `/uz/loyihalar`, `/about-us` → `/uz/biz-haqimizda`
- [x] `/goodwell-privacy-policy` restored in its own root layout `(legacy)` (Goodwell app store policy URL), restyled with brand tokens, `noindex`
- [x] `site.config.ts` (phone, Telegram handle, socials, `telegramLink()`), `content/pricing.ts` (prices as data)
- [x] `.env.local` (from `brand/logo/.env`), `.env.example`

## Next: Phase A
1. **Copy layer:** `content/dictionaries/{uz,ru,en}.ts` with typed keys; all copy lives there (§14). UZ is real copy, RU/EN are placeholders for now.
2. **Layout chrome:** header (lockup → `/{locale}`, locale switcher, CTA), footer (wordmark, contacts, socials), **sticky mobile bar** (Telegram · Qoʻngʻiroq).
3. **Homepage `/uz`** (§8.1): hero → trust bar → problem → services (varied layout, prices from `pricing.ts`) → Goodwell case (placeholder) → EasySale → process → founder (placeholder) → FAQ → final CTA. Design pass per §5; the taste-skill choice happens here.
4. **Lead form**
   - Client: multi-step (service → budget → timeline → contact), +998 mask, consent checkbox, honeypot, hidden UTM/referrer/landing fields.
   - UTM persistence: first-visit UTMs saved to `localStorage` + cookie by a tiny client script.
   - Server: `app/api/lead/route.ts` → zod validation → honeypot / min-time check → `lib/leads.ts` `sendLead()` → Telegram `sendMessage` (HTML) to `TELEGRAM_GROUP_ID` → `{ ok }`. Client then goes to `/uz/rahmat`.
   - Spam: honeypot + "submitted < 3 s after render" check. **Cloudflare Turnstile works without Cloudflare DNS** (it only needs a free site key), so add it if spam shows up.
   - No inline status buttons and no `/stats`: those need a bot backend (a webhook). Without one, the group message is the record. Optional: pin a hashtag (`#lead #biznes_tizim #instagram`) so the group can be searched.
5. **Thank-you pages** `/uz/rahmat`, `/ru/spasibo`, `/en/thank-you` (noindex).
6. **Analytics:** GA4 + Yandex Metrica behind `NEXT_PUBLIC_GA_ID` / `NEXT_PUBLIC_YM_ID` (empty = off); events from §10 (`cta_telegram_click`, `cta_phone_click`, `form_start`, `form_step`, `generate_lead`). No personal data in events.
7. **SEO:** per-locale `generateMetadata` (titles from §10), hreflang + canonicals, `sitemap.ts`, `robots.ts`, `opengraph-image.tsx` (green bg, Geologica title, light wordmark), schema.org `Organization` + `ProfessionalService` + `FAQPage` (no address, no `legalName`).
8. **Privacy page** in uz/ru/en (`maxfiylik` / `konfidencialnost` / `privacy`), stating that leads go to a private Telegram group.
9. **Deploy:** Vercel project + env vars → ahost.uz DNS: `A @ 76.76.21.21`, `CNAME www cname.vercel-dns.com`; in Vercel, set `www.nexura.uz` as primary and redirect `nexura.uz` → www (308).

**Exit test:** phone opens `/?utm_source=instagram&utm_medium=bio` → submits the form → the message is in the Telegram group in < 5 s with the correct UTMs → GA4/Metrica show `generate_lead` → Vercel logs have no name or phone.

## Later
- Phase B: service pages, case pages (Goodwell, EasySale, Midea, Ustaxona, TechVision), pricing page, about, contact, full `/ru`.
- Phase C: `/en` + Cal.com + WhatsApp + cookie consent, price calculator.

## Open (TBD)
Telegram work handle · GA4 / Metrica IDs · final prices + support price · Goodwell numbers/screenshots/quote · founder video · native RU review.
