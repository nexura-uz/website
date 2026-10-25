// Draft "from" prices in USD (CLAUDE.md §1). Final numbers come from the planning project.
// EN pages show no public prices.
export type PackageId = "telegram-bot" | "website" | "e-commerce" | "business-system";

export const pricing: Record<PackageId, { fromUsd: number }> = {
  "telegram-bot": { fromUsd: 400 },
  website: { fromUsd: 1000 },
  "e-commerce": { fromUsd: 3000 },
  "business-system": { fromUsd: 6000 },
};

// TBD: monthly support price.
export const supportFromUsd: number | null = null;
