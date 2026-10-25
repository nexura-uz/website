# Nexura logo kit (v1, 2026-10-24)

**Wordmark:** "nexura", lowercase, Geologica SemiBold 600 with the font's own kerning, text converted to outlines (no font needed).
**Letter mark:** lowercase "n" (Geologica 600) in **white** on primary green: one icon for every theme (the green tile already stands out on light and dark).
**Colors:** primary `#0B5D4B` · white `#FFFFFF` (n) · light `#F4F7F5` (wordmark on dark). Mint `#3DDC97` is a website accent only, not part of the logo.

`svg/` holds the masters. Edit only these; everything in `export/` is generated from them.

## SVG masters (`svg/`)
| File | What | Use |
|---|---|---|
| `nexura-wordmark-light.svg` | Green wordmark, transparent | On white/light backgrounds: site header, documents, proposals |
| `nexura-wordmark-dark.svg` | Light wordmark, transparent | On dark backgrounds: dark sections, dark slides |
| `nexura-lockup-light.svg` / `-dark.svg` | Icon + wordmark | LinkedIn/YouTube banners, email signature, invoices, slides |
| `nexura-icon.svg` | Rounded tile, white n | UI, favicon, app icon |
| `nexura-icon-square.svg` | Full-bleed square, white n | Avatars (platforms crop to a circle), apple-touch, maskable |
| `favicon.svg` | Rounded tile, white n | Website favicon |
| `og-default.svg` | 1200×630, wordmark on green | Default link preview (Telegram, LinkedIn, Facebook) |

## Export to PNG / ICO
```bash
cd brand
npm install
npm run export:logo   # writes everything into logo/export/ (npm run export = logo + LinkedIn banners)
```

## Generated files (`export/`): where each goes
| File | Where to use it |
|---|---|
| `web/favicon.ico` (16/32/48), `web/favicon.svg` | Website favicon |
| `web/favicon-48.png` | Google Search favicon (Google wants a multiple of 48px) |
| `web/apple-touch-icon.png` (180, opaque) | iPhone home screen ("Apple logo") |
| `web/icon-192.png`, `web/icon-512.png`, `web/icon-maskable-512.png`, `web/site.webmanifest` | Android / PWA |
| `web/og-default.png` | Default `og:image` |
| `google/organization-logo-512.png` | schema.org `Organization.logo` (logo in Google results / knowledge panel) |
| `google/business-profile-720.png` | Google Business Profile logo |
| `social/avatar-1080.png` | **Instagram, Telegram, LinkedIn, YouTube, X, Gmail (Google account photo)** |
| `wordmark/*-1200w.png` | Docs, slides, places that don't accept SVG |
| `wordmark/email-signature-lockup-light-400w.png` | Email signature (Gmail doesn't render SVG; show it at 200px wide) |

## Website `<head>`
```html
<link rel="icon" href="/favicon.ico" sizes="48x48">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<meta name="theme-color" content="#0B5D4B">
<meta property="og:image" content="https://www.nexura.uz/og-default.png">
```
Next.js App Router: put `favicon.ico`, `icon.svg` (= favicon.svg), `apple-icon.png` (= apple-touch-icon.png) in `app/` and Next generates the tags. Put the rest in `public/`.

## Rules
- **Clear space:** keep empty space around the logo of at least the height of the "n" in the wordmark.
- **Minimum size:** wordmark 80px wide on screen; icon 16px.
- **Light vs dark:** the wordmark and lockup have `-light` (for light backgrounds) and `-dark` (for dark backgrounds) versions. The icon is the same everywhere: green tile, white n.
- ❌ Don't recolor, stretch, add shadows/gradients/outlines, retype the wordmark in a font, or put the green wordmark on a dark or busy photo.

## Gmail brand logo in the inbox (BIMI): not now
Showing the logo next to emails in Gmail needs a domain email (@nexura.uz), DMARC enforcement, an SVG Tiny PS file and a paid VMC/CMC certificate (VMC requires a registered trademark). Revisit after the company is registered. For now, set `social/avatar-1080.png` as the Google account photo.
