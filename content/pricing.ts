// Draft "from" prices in USD (CLAUDE.md §1). Final numbers come from the planning project.
// EN pages show no public prices. null = no public price yet.
export const pricing: Record<string, { fromUsd: number | null }> = {
  telegramBot: { fromUsd: 400 },
  website: { fromUsd: 1000 },
  ecommerce: { fromUsd: 3000 },
  apps: { fromUsd: 5000 },
  businessSystem: { fromUsd: 6000 },
};

export const serviceKeys = ["telegramBot", "website", "ecommerce", "apps", "businessSystem"] as const;
export type ServiceKey = (typeof serviceKeys)[number];

// TBD: monthly support price.
export const supportFromUsd: number | null = null;

// "{price} dan" style label, or null when the price isn't public.
export function fromPrice(key: ServiceKey, template: string) {
  const usd = pricing[key].fromUsd;
  return usd === null ? null : template.replace("{price}", `$${usd.toLocaleString("en-US")}`);
}
