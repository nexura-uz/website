// Contacts and handles in one place (CLAUDE.md §14). TBD values are placeholders.
export const site = {
  name: "Nexura",
  url: "https://www.nexura.uz",
  phone: "+998 93 975 68 83",
  phoneHref: "tel:+998939756883",
  // Telegram account for t.me links. Placeholder until the Nexura work account exists.
  telegramHandle: "mirahmadov_m",
  socials: {
    instagram: "https://www.instagram.com/nexura_uz",
    youtube: "https://www.youtube.com/@nexura_uz",
    linkedin: "https://www.linkedin.com/company/nexura-uz",
    x: "https://x.com/nexura_uz",
  },
} as const;

export function telegramLink(text?: string) {
  const base = `https://t.me/${site.telegramHandle}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}
