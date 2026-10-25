"use client";

import { useSearchParams } from "next/navigation";
import { leadServices } from "@/lib/lead";
import { LeadForm } from "./LeadForm";

// Reads ?service=… (from the pricing and service pages). Rendered inside <Suspense>,
// whose fallback is the plain form, so the static HTML always has a working form.
export function LeadFormFromUrl(props: Omit<React.ComponentProps<typeof LeadForm>, "preset">) {
  const service = useSearchParams().get("service");
  const preset = (leadServices as readonly string[]).includes(service ?? "") ? service! : undefined;
  return <LeadForm {...props} preset={preset} />;
}
