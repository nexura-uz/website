import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, locales } from "@/lib/i18n";

// Any path without a locale prefix goes to the Uzbek version.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLocale = locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
  if (hasLocale) return;

  request.nextUrl.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(request.nextUrl, 308);
}

export const config = {
  // Skip Next internals, API routes, files with an extension, and the Goodwell app policy.
  matcher: ["/((?!_next|api|goodwell-privacy-policy|.*\\..*).*)"],
};
