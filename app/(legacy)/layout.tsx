import type { Metadata } from "next";
import { Geologica } from "next/font/google";
import "../globals.css";

// Separate root layout for legacy URLs outside the locale tree.
// /goodwell-privacy-policy is the Goodwell app's store privacy policy: keep this URL.
const geologica = Geologica({
  variable: "--font-geologica",
  subsets: ["latin", "latin-ext", "cyrillic"],
  fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Goodwell - Privacy Policy",
  robots: { index: false },
};

export default function LegacyLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geologica.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
