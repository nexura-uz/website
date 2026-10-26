import Script from "next/script";
import { CONSENT_KEY, GA_ID } from "@/lib/analytics";
import { ClickTracking } from "./ClickTracking";

// Consent Mode v2: everything denied until the visitor accepts in CookieNotice.
// Denied = no analytics cookies; Google only gets cookieless pings. Ads storage is always denied.
export function GoogleAnalytics() {
  if (!GA_ID) return null;
  return (
    <>
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
var c;try{c=localStorage.getItem("${CONSENT_KEY}")}catch(e){}
gtag("consent","default",{analytics_storage:c==="granted"?"granted":"denied",ad_storage:"denied",ad_user_data:"denied",ad_personalization:"denied"});
gtag("js",new Date());gtag("config","${GA_ID}");`}
      </Script>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <ClickTracking />
    </>
  );
}
