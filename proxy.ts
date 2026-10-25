import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, locales } from "@/lib/i18n";
import { resolvePath, shipped } from "@/lib/routes";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const locale = locales.find((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));

  // Any path without a locale prefix goes to the Uzbek version.
  if (!locale) {
    request.nextUrl.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
    return NextResponse.redirect(request.nextUrl, 308);
  }

  // notFound() in a page rendered on demand streams with status 200 (soft 404), so unknown or
  // unshipped pages are rewritten to /{locale}/__404: prerendered at build as a real 404,
  // shown by app/[locale]/not-found.tsx inside the locale layout.
  const rest = pathname.slice(locale.length + 2).replace(/\/$/, "");
  const key = resolvePath(locale, rest);
  if (!key || !shipped.includes(key)) return NextResponse.rewrite(new URL(`/${locale}/__404`, request.url));
}

export const config = {
  // Skip Next internals, API routes, files with an extension, and the Goodwell app policy.
  matcher: ["/((?!_next|api|goodwell-privacy-policy|.*\\..*).*)"],
};
