# CLAUDE.md — nexura.uz website (build project)

> Rename this file to `CLAUDE.md` in the website project.
> Source: the **Nexura SMM planning project**. **Last synced: 2026-10-24** (+ founder edit 2026-10-25: mobile & desktop apps service). It has the complete website plan and all the context behind it.
> Brand status: **done** (palette v2 + logo v1 + Geologica). Build status: **Phase A not started.** Start with §11 Phase A, task 1: brand install.
> **The planning project decides; this project builds.** Strategy, pricing, positioning and copy direction change only in the planning project, which then sends an updated version of this file. If building surfaces a problem with the plan, flag it to the founder instead of quietly changing strategy.

---

## 0. How Claude works here

- The founder builds the site, mostly with Claude. The founder is a senior developer, so be technical and direct. Don't over-explain basics.
- **Be brutal and honest**, like the planning project: if something in this plan is wrong once it meets real code or data, say so.
- **Never invent** client results, numbers, testimonials, team size or legal status. Use `TBD` placeholders and list them.
- Ship in the phases in §11. **Phase A ("lead-ready") comes before anything pretty.**
- The site must **not look AI-generated** (§5 and §6). Every page should look designed by a person with taste, for *this* company.
- Build the copy around the drafts in this file. Keep Uzbek natural, Russian native-sounding (not machine-translated), English plain and senior.

---

## 1. The company

| | |
|---|---|
| Name | **NEXURA**, www.nexura.uz (`nexura.uz` 308 → `www`) |
| What | Small **senior** software studio: custom business systems (ERP/POS/warehouse/branches), integrations, e-commerce, websites, Telegram bots, mobile & desktop apps (iOS, Android, Windows, macOS) |
| Team | **5 developers, 3 of them senior (5+ years each)**; **20+ projects delivered** (founder, 2026-10-25). Part-time on Nexura (never claim full-time). One lives in Europe (full-time senior frontend engineer elsewhere). Founder: **Muhammadaziz** (name may be used publicly; no photo yet). Speaks fluent English. Desktop apps: Electron. |
| Location | **Public: Tashkent / Oʻzbekiston only.** Never mention the founder's home town on the site, in copy or in schema (founder, 2026-10-25). **No office.** |
| Phone | +998 93 975 68 83 |
| Legal | ⚠️ **Not a registered legal entity, not an IT Park resident.** Payments go to a personal Visa card. Registration is being discussed with an accountant. |
| Own product | **EasySale**: retail ERP/POS SaaS (easysale.uz), 10+ paying stores. Separate brand and project; on this site it's *proof*. |
| Socials | Instagram @nexura_uz · YouTube @nexura_uz · LinkedIn company/nexura-uz · X @nexura_uz |
| Goal | **~20 custom projects in ≤ 2 years**, clients in Tashkent and abroad (plus Fergana valley) |
| Marketing so far | None. Every client came from personal connections. Zero inbound leads. |

### Positioning
**Nexura automates businesses that have outgrown notebooks, Excel and Telegram groups.**
- Entry offer: **Telegram bots** (orders, records, catalogs). Proof: Ustaxona Jadval.
- Core offer: **custom business systems + integrations**. Proof: Goodwell.
- Trust: **EasySale**, our own system running in 10+ shops.
- Supporting: websites and e-commerce. Proof: Midea, TechVision.
- **AI is a feature inside existing services, not a separate service** (founder, 2026-10-25): e.g. a Telegram bot answering customer questions from the catalog, AI reading documents and sorting messages in business systems. Use plain, concrete wording, never "AI-powered" buzzwords.
- Supporting: **mobile & desktop apps** (iOS, Android, Windows, macOS), usually as part of a system (staff/customer app on the same data). Proof: Goodwell app (screenshots only with consent; the site uses a generic mockup).

One message everywhere:
- **UZ:** Biznesingizni avtomatlashtiramiz.
- **RU:** Автоматизируем ваш бизнес.
- **EN:** Custom software that runs real businesses. (short: We automate businesses with custom software.)

Retire the old taglines ("Kelajak ilovalarini bugun yaratish", "Building tomorrow's web today", "Barcha turdagi tizim va ilovalar").

### Portfolio (ranked by value)
| Project | What | Notes |
|---|---|---|
| **Goodwell shop network** | Custom system managing all of the brand's shops nationwide, **integrated with their internal warehouse system** | ⭐ Flagship. Numbers, screenshots and quote: **TBD (requested from Goodwell)** |
| **EasySale** | Own retail ERP/POS SaaS, 10+ paying stores | ⭐ Links to easysale.uz |
| **Midea Kitchen** | E-commerce for Midea kitchen appliances, midea-kitchen.uz | ⭐ Global brand |
| **Ustaxona Jadval** | Telegram bot replacing a workshop's paper notebook, t.me/jadval_ustaxonabot | Perfect "notebook → bot" story |
| **TechVision** | Electronics e-commerce, tech-vision.uz | |
| **Goodwell Catalog** | Telegram catalog bot, t.me/goodwellcatalog_bot | |
| ENDO technologies | Company site, endo-tech.uz | Weak. Rewrite the blurb or drop it. |

Client logos (Midea, Goodwell, TechVision): **founder confirmed they can be shown.**

### Pricing (draft; final numbers come from the planning project after a competitor price check)
Local (UZ/RU pages show "…dan boshlab" / "от …"):
| Package | From |
|---|---|
| Telegram bot | $400 |
| Biznes sayt | $1,000 |
| Online do'kon | $3,000 |
| Mobil va desktop ilovalar | $5,000 |
| Biznes tizim / integratsiya | $6,000 |
| Support | $X/month (TBD) |

EN pages: **no public prices**. Use "Book a 20-min call".
Build prices as **config/data**, not hard-coded copy. They will change.

---

## 2. Audit of the current site (2026-10-24)

Next.js on Vercel (edge `hkg1`), `lang="uz"` only. Title `Nexura`, meta description `Dasturiy yechimlar`. No Open Graph image, no schema.org, **no form, no Telegram contact link**, `/contact` 404, `/en` and `/ru` 404, **no analytics at all**, not redeployed in ~5 months. Portfolio = outbound links with no stories; Goodwell system missing. robots.txt and sitemap.xml exist.
Copy bugs: "EasySale" vs "Easy-Sale"; ENDO blurb reads like the client's own text; ":)" on Ustaxona; phone written two ways.
**Verdict:** a business card, not a sales tool.

---

## 3. Goals & KPIs

The site has **one job: turn visitors into qualified conversations.**

| Metric | Target |
|---|---|
| Leads (form + Telegram + calls + bookings) | 3–5/mo in months 1–2 → 8–15/mo by month 6 |
| Visitor → lead | 2–5% (rough B2B benchmark; calibrate with real data) |
| Speed to lead | **< 15 min** 09:00–20:00, < 2 h otherwise |
| Lead → discovery call | ≥ 50% |
| Proposal → won | 20–30% |
| Avg deal | $3–5k local, $8k+ global |

---

## 4. Audiences & flows

| Visitor | From | Wants | Path |
|---|---|---|---|
| **Local owner** (Fergana/Tashkent, **phone**) | Instagram, Telegram, word of mouth | "Can they do it? How much? Can I message them?" | Hero → services with prices → case → **Telegram (1 tap)** |
| **Tashkent company** | Google (often in **Russian**), referral, LinkedIn | Proof, process, a serious team | Service page → case → **form** or call |
| **Global client** (EN, desktop) | Founder's LinkedIn, Clutch, referral | Seniority, English, process, past work | `/en` → case → **book a call** |

**Mobile-first.** Most local traffic comes from Instagram and Telegram on phones.

---

## 5. Design direction (make it look human-designed)

### 5.1 Color palette: the main palette (source of truth = `colors.css`)
Copy `colors.css` from the planning project into the app's global CSS (Tailwind v4 `@theme`). **These five tokens are the only brand colors.** No other hex values in components.
```css
@theme {
  --color-primary: oklch(42.82% 0.079 172.87);     /* #0B5D4B deep green */
  --color-accent: oklch(79.68% 0.164 159.69);      /* #3DDC97 mint */
  --color-black: oklch(22.35% 0.023 176.38);       /* #0F1F1B ink */
  --color-gray: oklch(51.28% 0.021 174.64);        /* #5B6B66 muted */
  --color-light-gray: oklch(97.33% 0.004 157.18);  /* #F4F7F5 surface */
}
```
| Token | Tailwind | Use | Contrast |
|---|---|---|---|
| primary `#0B5D4B` | `bg-primary` `text-primary` | Logo, primary buttons (white text), dark sections, links, focus ring | 7.8:1 with white |
| accent `#3DDC97` | `bg-accent` `text-accent` | Highlights, key numbers, small badges, CTAs **on dark green** (ink text) | 9.6:1 with ink. ❌ Never as text on white (fails contrast) |
| black `#0F1F1B` | `text-black` | Headings and body text | 15.8:1 on light-gray |
| gray `#5B6B66` | `text-gray` | Secondary text, captions, borders (at reduced opacity) | 5.6:1 on white |
| light-gray `#F4F7F5` | `bg-light-gray` | Alternate light sections, cards; also the wordmark on dark | — |
| (white) | `bg-white` | Main page background | — |

**Proportions (roughly 70 / 20 / 10):** ~70% white and light-gray, ~20% primary green (header logo, buttons, 1–2 dark sections per page), **≤10% mint**. Mint is seasoning: if a screen looks "mint", there's too much.

**Components:**
- Primary button: `bg-primary text-white`, hover slightly darker (`bg-primary/90`), focus `ring-2 ring-primary ring-offset-2`
- Button on a dark green section: `bg-accent text-black`
- Secondary button: `border border-primary text-primary bg-transparent`
- Links: `text-primary underline-offset-4 hover:underline`
- Dark section: `bg-primary text-white`; muted text there is `text-white/70`; highlights `text-accent`
- Telegram sticky mobile bar: `bg-primary text-white`
- Browser theme color: `#0B5D4B`

**Retired and forbidden:** navy `#111828` (turns muddy next to the deep green); the old bright green `#10A47A` belongs to **EasySale**, so use it only inside the EasySale case/section to represent that product.

### 5.2 Logo (v1, ready to use)
Copy the **whole `brand/` folder** (`logo/`, `package.json`) from the planning project into the website repo, outside `public/`. Its README has the rules. The old globe `nexura.png` is **retired. Don't use it anywhere.**

**The logo:**
- **Wordmark:** "nexura", lowercase, Geologica SemiBold, outlined SVG (one path)
- **Icon:** a white lowercase "n" on a primary-green rounded tile. **The same icon in light and dark themes.**
- **Lockup:** icon + wordmark side by side
- Only the wordmark changes per theme: **green on light backgrounds, light-gray (`#F4F7F5`) on dark ones**

**`<Logo>` component** (`components/brand/Logo.tsx`):
- Inline the SVG paths from `brand/logo/svg/` (don't use `<img>`), so it renders crisp and with no extra request.
- Wordmark path uses `fill="currentColor"` → color via a class: `text-primary` on light, `text-light-gray` on dark. One path, both themes.
- Icon: `<rect fill="var(--color-primary)">` + the n path `fill="#FFFFFF"`. Never recolor the icon.
- API: `<Logo variant="wordmark" | "icon" | "lockup" className="h-7 w-auto" />` with `aria-label="Nexura"` and `role="img"`. In the header it links to `/{locale}`.
- Header: **lockup**, about 28–32px tall desktop, 24px mobile. Footer: wordmark. Dark sections: wordmark with `text-light-gray`.
- **Clear space:** at least the height of the wordmark's "n" on every side. **Min size:** wordmark 80px wide, icon 16px.

**Where each file goes:**
| From `brand/logo/export/` | To (Next.js App Router) | Purpose |
|---|---|---|
| `web/favicon.ico` | `app/favicon.ico` | Favicon (16/32/48) |
| `web/favicon.svg` | `app/icon.svg` | Modern browsers' favicon |
| `web/apple-touch-icon.png` | `app/apple-icon.png` | iPhone home screen |
| `web/icon-192.png`, `web/icon-512.png`, `web/icon-maskable-512.png` | `public/` | PWA / Android |
| `web/site.webmanifest` | `public/site.webmanifest` (or rewrite it as `app/manifest.ts` with the same values) | Manifest |
| `web/og-default.png` | `public/og-default.png` | Fallback `og:image` (pages get their own OG images, see §10) |
| `google/organization-logo-512.png` | `public/logo-512.png` | schema.org `Organization.logo` (Google results / knowledge panel) |
| `wordmark/*.png` | not on the site | Docs, email signature, decks |
| `social/avatar-1080.png` | not on the site | Upload as the profile picture on IG/Telegram/LinkedIn/YouTube/X/Google |

```ts
// app/[locale]/layout.tsx (excerpt)
export const viewport = { themeColor: '#0B5D4B' };
export const metadata = {
  metadataBase: new URL('https://www.nexura.uz'),
  manifest: '/site.webmanifest',
  openGraph: { images: ['/og-default.png'] },
};
```
schema.org: `"logo": "https://www.nexura.uz/logo-512.png"`.

**If the logo changes:** edit only the SVGs in `brand/logo/svg/`, run `cd brand && npm install && npm run export:logo`, and copy the files again. Never edit PNGs by hand.

❌ **Don't:** recolor the icon, put a mint "n" in the logo, stretch it, add shadows/gradients/outlines, retype "nexura" in a font instead of using the SVG, or put the green wordmark on a dark or busy photo.

### Concept
**"Senior engineers who build real systems."** The visual proof should be **real product UI**: EasySale screens, the Goodwell dashboard (blurred where needed), real Telegram bot conversations. Real work over illustrations. Mostly white and light-gray with deep green as the brand color and mint only as a small accent (§5.1). Lots of whitespace, confident type, precise details (monospace for numbers and metrics, thin rules, careful grid), a subtle rounded-tile motif that echoes the logo icon. Calm and expensive, not flashy.

### Typography
- **Must support Latin (with Uzbek oʻ/gʻ), Cyrillic and English.** Check every font for Cyrillic before picking it.
- **Geologica** (Google Fonts, variable, has Cyrillic) for headlines **and** body, and it's also the base of the new wordmark, so the site and logo are one system. Headlines 600–700, body 400. Self-host the variable font via `next/font`, subset latin + latin-ext + cyrillic. If body text needs more contrast with headlines, use **Onest** for body.
- ⚠️ Geologica has no **ʻ (U+02BB)**. For oʻ/gʻ, either set a fallback font in the stack that has it, or use ‘ (U+2018), which Geologica does have. Test "Oʻzbekiston, gʻalaba" rendering before launch.
- ❌ Don't use Havelock Titling (the old brand-name font) on the site: no Cyrillic, caps only, commercial webfont license.
- Avoid the default AI look: Inter-everywhere, Poppins, Montserrat.
- Uzbek typography: use **ʻ (U+02BB)** in oʻ/gʻ and **’ (U+2019)** for the tutuq belgisi, not a straight `'`. Small detail, big quality signal for native readers.

### Anti-"AI-generated" rules
❌ Don't:
- Purple/blue gradients, glassmorphism, glowing blobs, aurora backgrounds
- Emoji as icons; generic Lucide icon in a rounded square on every card
- Three identical feature cards in a row as the default answer to every section
- Centered-everything layouts; every section the same height and rhythm
- Stock photos of handshakes, people pointing at laptops, or 3D abstract shapes
- Copy like "Unlock", "Elevate", "Seamless", "Cutting-edge", "Empower", "Your vision, our expertise"
- Fake stats, fake testimonials, fake logos, a "trusted by 500+ companies" style claim
- Over-animation: everything fading up on scroll

✅ Do:
- Real screenshots and real numbers, specific and verifiable
- Varied section layouts (asymmetry, a wide case showcase, a dense spec table)
- Short, concrete copy in the customer's own words ("daftar", "Excel", "Telegram guruh")
- Founder video and voice: a human presence
- Motion only where it explains something (e.g., a bot conversation playing out)
- Generous whitespace; a clear hierarchy you can read in 5 seconds

---

## 6. Recommended skills (install in this project)

Verified on GitHub 2026-10-24. **Don't install all of them.** Design skills with different opinions fight each other and produce mush. Use one *taste* skill plus the *quality* skills.

| Skill | Role | Install | Recommendation |
|---|---|---|---|
| **Impeccable** (pbakaus/impeccable) | Design language + process: `/impeccable init` writes `PRODUCT.md`, then `shape`, `craft`, `critique`, `audit`, `polish` | `npx impeccable install` then `/impeccable init` in Claude Code | ⭐ **Primary taste skill (pick A).** Its `init` fits this brief well. Feed it §1–§5. |
| **Taste Skill** (Leonxlnx/taste-skill) | Art direction, reference images, checks its own result in a real browser; has variance/motion/density dials | `/plugin marketplace add Leonxlnx/taste-skill` → `/plugin install taste-skill@taste-skill` (needs Node 22+ and Chrome) | **Alternative taste skill (pick B).** Set motion low and density medium for this audience. |
| **frontend-design** (Anthropic official, anthropics/skills) | Lightweight push away from generic AI aesthetics | `npx skills add anthropics/skills --skill frontend-design` (or the Claude Code `frontend-design` plugin) | Use only if you skip both A and B |
| **web-design-guidelines** (vercel-labs/agent-skills) | Audits UI against web interface guidelines (a11y, forms, UX details) | `npx skills add vercel-labs/agent-skills` (then keep `web-design-guidelines`) | ✅ Install. Run it on every page before shipping. |
| **react-best-practices** (vercel-labs/agent-skills) | Next.js/React performance patterns | same repo | ✅ Install. Keeps LCP and bundle size healthy. |
| **ui-ux-pro-max** (nextlevelbuilder/ui-ux-pro-max-skill) | Big database of styles, palettes and font pairs | `/plugin marketplace add nextlevelbuilder/ui-ux-pro-max-skill` → `/plugin install ui-ux-pro-max@ui-ux-pro-max-skill` | ⚠️ Optional. Brand colors already exist; use it only for font/layout ideas. It can pull you toward generic templates. |

**How to choose A vs B:** build the **homepage hero + one service card section** with Impeccable, then again with Taste Skill, on a branch each. Show both to the founder. Keep the winner and uninstall the other.

**Skills are a floor, not taste.** What makes this site not look AI-made is mostly §5: real screenshots, real numbers, a founder video, specific copy. No skill can invent those.

---

## 7. Site structure

Locales: `/uz` (default, `x-default`), `/ru`, `/en`. Social content is Uzbek only; **Russian exists on the website only**, for Tashkent search.

```
/uz                            /ru                         /en
/uz/xizmatlar/telegram-bot     /ru/uslugi/telegram-bot     /en/services/telegram-bots
/uz/xizmatlar/sayt             /ru/uslugi/sajt             /en/services/web
/uz/xizmatlar/internet-dokon   /ru/uslugi/internet-magazin /en/services/e-commerce
/uz/xizmatlar/ilovalar         /ru/uslugi/prilozheniya     /en/services/apps
/uz/xizmatlar/biznes-tizim     /ru/uslugi/biznes-sistema   /en/services/business-systems
                                                           /en/services/integrations
/uz/loyihalar                  /ru/proekty                 /en/work
/uz/loyihalar/[slug]           /ru/proekty/[slug]          /en/work/[slug]
/uz/narxlar                    /ru/ceny                    (no pricing page)
/uz/biz-haqimizda              /ru/o-nas                   /en/about
/uz/aloqa                      /ru/kontakty                /en/contact (+ booking)
/uz/rahmat (noindex)           /ru/spasibo (noindex)       /en/thank-you (noindex)
/uz/maxfiylik                  /ru/konfidencialnost        /en/privacy
```
- 301: `/portfolio` → `/uz/loyihalar`; `/` → `/uz` (or a locale guess with Uzbek as the fallback).
- Case slugs: `goodwell`, `easysale`, `midea`, `ustaxona`, `techvision`, `goodwell-bot`.
- No blog for now.
- Content as MDX/JSON in the repo: `content/{cases,services}/{uz,ru,en}/slug.mdx`. No CMS.

---

## 8. Page specs

### 8.1 Homepage
| # | Section | Content | CTA |
|---|---|---|---|
| 1 | **Hero** | H1 + sub + trust line; a real product visual (not an illustration) | **Loyihani muhokama qilish** (form) · **Telegram'da yozish** |
| 2 | Trust bar | Midea, Goodwell, TechVision logos + 3 facts: "20+ loyiha", "10+ do'kon EasySale'da", "5 dasturchi, 3 senior (5+ yil)" | — |
| 3 | Problem | "Tanish holatmi?": notebook records, lost stock, can't see branches, orders lost in Telegram chats | — |
| 4 | Services | 4 offers with "…dan boshlab" prices (**not** 4 identical cards; vary the layout) | Batafsil |
| 5 | Featured case | Goodwell: problem → what we built → 3 numbers → screenshot | Loyihani ko'rish |
| 6 | Own product | EasySale: "Oʻzimiz yaratgan va 10+ do'konda ishlayotgan tizim" → easysale.uz | — |
| 7 | Process | Suhbat (bepul) → Taklif va narx → Ishlab chiqish → Ishga tushirish va qo'llab-quvvatlash | — |
| 8 | Founder | 60s video (voice + hands) | — |
| 9 | FAQ | below | — |
| 10 | Final CTA | short inline form + Telegram + phone | Submit |
| — | **Sticky mobile bar** | `Telegram` · `Qo'ng'iroq`, always visible on mobile | — |

**Hero UZ:**
> **H1:** Biznesingizni avtomatlashtiramiz
> **Sub:** Daftar, Excel va Telegram guruhlar o'rniga — bitta qulay tizim. Telegram botdan tortib filiallar va omborni boshqaradigan to'liq tizimgacha.
> **Trust:** Midea, Goodwell va 10+ do'kon bizning dasturlarimiz bilan ishlaydi.

**Hero RU** (draft, native review needed):
> **H1:** Автоматизируем ваш бизнес
> **Sub:** Вместо тетрадей, Excel и Telegram-чатов — одна удобная система. От Telegram-бота до полноценной системы управления филиалами и складом.
> **Trust:** С нашими решениями работают Midea, Goodwell и 10+ магазинов.

**Hero EN:**
> **H1:** Custom software that runs real businesses
> **Sub:** A senior team from Uzbekistan building business systems, integrations and e-commerce, from a Telegram bot to a nationwide retail system.
> **CTA:** Book a 20-min call · Get a quote

**FAQ (UZ):** Narxi qancha? · Qancha vaqtda tayyor bo'ladi? · Ishga tushirgandan keyin qo'llab-quvvatlaysizlarmi? · Kod va ma'lumotlar kimga tegishli? · Mavjud dasturimiz (1C, ombor tizimi) bilan bog'lay olasizlarmi? · Boshqa shahardaman, qanday ishlaymiz? · To'lov qanday bo'ladi (bosqichma-bosqich)?
⚠️ **No "Shartnoma asosida ishlaymiz" or legal-entity claims until Nexura is registered** (§13).

### 8.2 Service page template
H1 with the keyword → who it's for (3 business examples) → deliverables → 1–2 relevant cases → "…dan boshlab" price + what changes it → process + timeline → service FAQ → CTA (form with the service pre-selected + a Telegram link with a pre-filled message).

### 8.3 Case study template
Header `Mijoz · Soha · Muddat · Xizmat` → **Muammo** → **Yechim** (screenshots) → **Natija** (numbers; label estimates as estimates) → **Texnologiyalar** → **Mijoz fikri** (text quote) → CTA "Sizga ham shunday tizim kerakmi?"

### 8.4 Pricing page (UZ/RU)
Package cards from data, "…dan boshlab", what's included, support plan, "Narx nimaga bog'liq?", CTA "Aniq narxni bilish" (form with the package pre-selected).

### 8.5 About
Short founder story, team (3 seniors, years, stack; **no names or photos without consent**; mention Europe only in ways that are true and fine with that dev's employer), how we work, founder video. Never inflate (LinkedIn currently says "11–50 employees". That's wrong and will be fixed to 2–10).

### 8.6 Thank-you page
"Rahmat! 15 daqiqa ichida bog'lanamiz (09:00–20:00)." + Telegram "Tezroq — Telegram'da yozing" + 2 case links. Its page view = the conversion.

---

## 9. Lead capture

### 9.1 Channels
| Channel | Implementation |
|---|---|
| **Telegram chat** (main, UZ/RU) | `https://t.me/<nexura_work_account>?text=<urlencoded>`, pre-filled per page (§9.5) |
| **Form** | Multi-step (§9.2) on contact, homepage footer, service and pricing pages |
| **Phone** | `tel:+998939756883` in the sticky mobile bar |
| **Booking** (EN) | Cal.com 20-min, embedded on `/en/contact` |
| **WhatsApp** (EN) | `wa.me` link |
| **Price calculator** (Phase C, UZ/RU) | Type + features → range → "Aniq narx" requires contact |

**Telegram accounts:** the founder keeps their personal account. A **separate Nexura work account** (new SIM, e.g. `@nexura_team`, handle TBD) is logged in alongside it in the same app. Optional Telegram Premium → Business: greeting, away message, hours, quick replies. Make the handle a **single config value**.

### 9.2 Form (multi-step)
1. **Nima kerak?** Telegram bot · Sayt · Internet do'kon · Mobil / desktop ilova · Biznes tizim / integratsiya · Bilmayman, maslahat kerak
2. **Byudjet:** <$500 · $500–2k · $2–5k · $5–15k · $15k+ · Bilmayman
3. **Qachon?** Shoshilinch (1 oy) · 1–3 oy · Shunchaki o'rganyapman
4. **Kontakt:** Ism* · Telefon* (+998 mask) **or** Telegram username · Kompaniya · Izoh. EN: Email* required.
- Consent checkbox: "Ma'lumotlarim bog'lanish maqsadida ishlatilishiga roziman." (+ RU/EN)
- Hidden: `utm_source, utm_medium, utm_campaign, utm_content, referrer, landing_page, page, locale, first_visit_at`. Persist UTMs from the **first** visit (cookie/localStorage).
- Spam: honeypot + Cloudflare Turnstile + rate limiting.
- Each step is tracked (§10).

### 9.3 Pipeline
```
Form ─► Next.js route handler (zod validation, Turnstile check)
     ─► POST to Nexura's own VPS API (shared-secret header)  ← personal data lives ONLY here
           ├─ save to the leads table
           └─ lead bot (e.g. @nexura_leads_bot) posts to the private "Nexura Leads" group:
                🆕 Biznes tizim · $5–15k · 1–3 oy
                👤 Aziz, +998 90 …, @aziz
                🔗 instagram / bio / goodwell-case
                [✅ Bog'lanildi] [📅 Qo'ng'iroq] [❌ Mos emas]
     ─► redirect to the thank-you page
```
- Inline buttons update the status. `/stats` gives weekly/monthly leads by source and status. `/add` logs leads that came by direct Telegram chat, so **all** leads are in one table.
- Vercel must keep **no personal data**: don't log request bodies.
- Move to a real CRM only when there are >30 open leads/month.

**Leads table:** `id, created_at, name, phone, telegram, email, company, service, budget, timeline, message, locale, utm_source, utm_medium, utm_campaign, utm_content, referrer, landing_page, status (new|contacted|call|proposal|won|lost), lost_reason, value_usd, next_step_at, owner`

### 9.4 Data & legal
- Uzbekistan's personal data law (localization requirement since 2021) requires personal data of Uzbek citizens to be stored on servers **physically in Uzbekistan**. **Verify with a lawyer.** The leads DB is on Nexura's own VPS, which is **physically in Uzbekistan** (confirmed by the founder 2026-10-24), so lead storage meets the rule. Keep **all** personal data there: no copies in Vercel logs, analytics or third-party tools (GA4/Metrica get no names or phone numbers).
- Privacy page in all 3 languages.
- Cookie consent before analytics on `/en` (GDPR for EU visitors).

### 9.5 Pre-filled Telegram messages
| Page | UZ | RU |
|---|---|---|
| Home | Salom! Nexura saytidan yozyapman. Loyiham bo'yicha maslahat olmoqchiman. | Здравствуйте! Пишу с сайта Nexura, хочу проконсультироваться по проекту. |
| Telegram bot | Salom! Biznesim uchun Telegram bot kerak. Narx va muddat haqida bilmoqchiman. | Здравствуйте! Нужен Telegram-бот для бизнеса. Хочу узнать цену и сроки. |
| Sayt | Salom! Kompaniyamiz uchun sayt kerak. Narxi qancha bo'ladi? | Здравствуйте! Нужен сайт для компании. Сколько будет стоить? |
| Internet do'kon | Salom! Internet do'kon ochmoqchiman. Maslahat bera olasizmi? | Здравствуйте! Хочу открыть интернет-магазин. Можете проконсультировать? |
| Ilova | Salom! Biznesimiz uchun mobil/desktop ilova kerak. Narx va muddat haqida bilmoqchiman. | Здравствуйте! Нужно мобильное/десктоп-приложение для бизнеса. Хочу узнать цену и сроки. |
| Biznes tizim | Salom! Biznesimizni avtomatlashtirish (ombor/filiallar/savdo) bo'yicha gaplashmoqchiman. | Здравствуйте! Хотим автоматизировать бизнес (склад/филиалы/продажи). |
| Case page | Salom! {Case} loyihangizni ko'rdim, bizga ham shunga o'xshash tizim kerak. | Здравствуйте! Видел ваш проект {Case}, нам нужно похожее решение. |

---

## 10. Analytics & SEO

### Tracking
GA4 + **Yandex Metrica** (Webvisor) + Google Search Console + Yandex Webmaster.

| Event | When |
|---|---|
| `cta_telegram_click` | any Telegram link (params: location, service) |
| `cta_phone_click` | `tel:` |
| `form_start` / `form_step` / `generate_lead` | form funnel (`generate_lead` = key event) |
| `booking_made` | Cal.com |
| `calc_used` / `calc_lead` | calculator |
| `case_view` | case page (slug) |

**UTMs:** `utm_source` instagram|linkedin|telegram|x|outreach|referral|clutch · `utm_medium` bio|post|story|reel|dm|profile|listing · `utm_campaign` e.g. `goodwell-case-2026-11`.

### Technical SEO
- Unique title and description per page and locale:
  - UZ: `Biznesni avtomatlashtirish, sayt va Telegram bot yaratish | Nexura`
  - RU: `Автоматизация бизнеса, создание сайтов и Telegram-ботов | Nexura`
  - EN: `Custom Software Development Company in Uzbekistan | Nexura`
- `hreflang` uz/ru/en + `x-default` → uz; canonicals; multi-locale sitemap
- An OG image per page, generated with `next/og` (`opengraph-image.tsx`): primary `#0B5D4B` background, page title in Geologica white, the light wordmark (inline SVG path from `nexura-wordmark-dark.svg`) in a corner, an optional small mint accent line. Fallback: `/og-default.png`.
- schema.org: `Organization` (logo, `sameAs` socials), `ProfessionalService` (phone, `areaServed`: Fergana region, Tashkent; **no street address**), `FAQPage`, `BreadcrumbList`. **No `legalName`/tax ID until registered.**
- Core Web Vitals: `next/image`, self-hosted subset fonts, minimal JS; mobile LCP < 2.5 s. Consider `fra1` for functions.

### Keywords (one primary per page)
| Page | UZ | RU | EN |
|---|---|---|---|
| Telegram bot | telegram bot yaratish | разработка телеграм бота, заказать телеграм бот ташкент | telegram bot development |
| Sayt | sayt yaratish, sayt yaratish narxi | создание сайтов ташкент, разработка сайта цена | web development company uzbekistan |
| Internet do'kon | internet do'kon yaratish | создание интернет магазина ташкент, интернет магазин под ключ | e-commerce development |
| Ilova | mobil ilova yaratish | разработка мобильных приложений ташкент | mobile app development uzbekistan |
| Biznes tizim | biznesni avtomatlashtirish, ombor dasturi, CRM tizimi | автоматизация бизнеса, складской учет программа, разработка CRM/ERP | custom ERP development, systems integration |
| Home | dasturlash kompaniyasi, IT kompaniya Farg'ona / Toshkent | IT компания ташкент, разработка ПО узбекистан | software development company uzbekistan |

### Off-site (founder's tasks; listed so the site supports them)
Google Business Profile as a **service-area business** (hidden address), Yandex Business; skip 2GIS (no office). Clutch, GoodFirms, DesignRush for EN. "Developed by Nexura" footer links on client sites.

---

## 11. Build phases

### Phase A: "Lead-ready" (week 1–2, ~5–7 dev-days) ← START HERE
- [ ] Day 1: Telegram work account (founder), lead bot, private "Nexura Leads" group
- [ ] **Brand install:** `colors.css` tokens in global CSS, Geologica via `next/font`, `brand/logo/` copied, `<Logo>` component, favicon/apple/manifest/OG files placed (§5.1–5.2). Delete every use of the old `nexura.png` and the old colors.
- [ ] Locale routing `/uz` `/ru` `/en` (RU/EN can be placeholders), redirects
- [ ] New `/uz` homepage (§8.1) + sticky mobile bar, with design per §5–6
- [ ] Multi-step form → route handler → VPS API → DB → lead bot → thank-you page
- [ ] Pre-filled Telegram links everywhere (handle from config)
- [ ] GA4 + Metrica + events + UTM persistence; Search Console + Yandex Webmaster
- [ ] Titles, metas, OG images, schema, sitemap/hreflang
- [ ] Privacy page + consent
- [ ] Copy fixes (EasySale spelling, ENDO, ":)", one phone format)

**Exit test:** open the site from `?utm_source=instagram&utm_medium=bio` on a phone → submit the form → the lead appears in the Telegram group in < 5 s with the correct UTMs, shows in GA4 + Metrica, and nothing personal is stored on Vercel.

### Phase B: Full UZ + RU (week 3–6, ~8–11 dev-days)
- [ ] 4 service pages
- [ ] Case template + Goodwell, EasySale, Midea (then Ustaxona, TechVision)
- [ ] Pricing page (after final prices)
- [ ] About + founder video, contact page (no map)
- [ ] `/ru` mirror of everything (native review)

**Exit:** every service has a page, a price floor, a case and a CTA, in UZ and RU.

### Phase C: Global + lead magnets (week 6–9, ~6–8 dev-days)
- [ ] `/en` mirror + Cal.com + WhatsApp + cookie consent
- [ ] Price calculator (UZ/RU)

**Exit:** a LinkedIn visitor books a call in English in < 60 s.
⚠️ Global and corporate sales also depend on registration (§13).

### Phase D: Optimize (monthly)
One A/B test per month (headline, primary CTA Telegram vs form, prices shown vs hidden), watch 10 Webvisor sessions/week, add a case per finished project.

---

## 12. Lead handling (process, for the founder)
1. Human reply in **< 15 min** (09:00–20:00), < 2 h otherwise
2. First reply: thanks + 2 qualifying questions + offer a 15–20 min call
3. Proposal within **48 h** of the call
4. Follow up on day 2, 5 and 10, then mark lost **with a reason**

---

## 13. Constraints & open items

| Item | Status | Site impact |
|---|---|---|
| Legal entity / IT Park | **None yet** (accountant consult planned) | No legal-entity claims, no "contract/invoice" promises, no `legalName`/tax ID. Add them when registered. |
| Payments | Personal Visa | Don't show payment methods for companies or foreign clients |
| VPS location | ✅ **In Uzbekistan** (confirmed 2026-10-24) | Leads DB + lead bot API run there |
| Telegram work handle | **TBD** | Config value |
| Final prices | **TBD** (after the competitor check) | Prices as data |
| Goodwell numbers/screenshots/quote | **Requested** | Placeholder case until it arrives |
| Founder video | **TBD** | Placeholder section |
| Fonts | ✅ **Geologica** (§5 Typography) | — |
| Logo & palette | ✅ **v1 logo + palette v2 done** (§5.1–5.2) | Use as-is. A "block N" v2 logo may come later; the `<Logo>` component makes it a drop-in swap. |
| One AI project | ⚠️ **Under NDA** | Never name, describe, screenshot or hint at it anywhere (site, cases, SEO copy, this repo). It only backs our ability to deliver AI features. |
| Taste skill A vs B | Decide after the hero test (§6) | — |

---

## 14. Repo notes
- Next.js on Vercel (existing project). Tailwind v4 with `@theme` tokens from `colors.css` (the only brand colors).
- Brand assets: `brand/logo/` (SVG masters + `export.mjs`), the logo component in `components/brand/Logo.tsx`, generated icons in `app/` and `public/` (§5.2).
- Content: `content/{cases,services}/{uz,ru,en}/*.mdx`; prices in `content/pricing.ts` (or JSON); contacts and handles in one `site.config.ts`.
- Keep the copy in content files, not inside components, so the planning project can hand over text updates easily.
