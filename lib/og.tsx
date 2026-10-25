import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { WORDMARK } from "@/components/brand/Logo";

// Link-preview image (CLAUDE.md §10): primary background, Geologica title, light wordmark, mint accent.
// Satori can't read CSS variables, so the brand hex values are repeated here.
const PRIMARY = "#0B5D4B";
const ACCENT = "#3DDC97";
const LIGHT = "#F4F7F5";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

const fonts = Promise.all([
  readFile(join(process.cwd(), "assets/fonts/Geologica-400.ttf")),
  readFile(join(process.cwd(), "assets/fonts/Geologica-600.ttf")),
]);

// Geologica has no ʻ (U+02BB); ‘ (U+2018) is the documented substitute.
const fix = (s: string) => s.replace(/ʻ/g, "‘");

export async function ogImage({ eyebrow, title, price }: { eyebrow: string; title: string; price?: string | null }) {
  const [regular, semibold] = await fonts;
  const long = title.length > 48;

  return new ImageResponse(
    (
      <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100%", background: PRIMARY, padding: "72px 80px", fontFamily: "Geologica" }}>
        <svg width="183" height="30" viewBox="0 0 611.67 100">
          <path fill={LIGHT} d={WORDMARK} />
        </svg>

        <div style={{ display: "flex", flexDirection: "column", marginTop: "auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 26, color: "rgba(255,255,255,0.65)", fontWeight: 400 }}>
            <div style={{ width: 48, height: 4, borderRadius: 2, background: ACCENT }} />
            {fix(eyebrow)}
          </div>
          <div style={{ marginTop: 28, fontSize: long ? 64 : 80, lineHeight: 1.05, letterSpacing: "-0.035em", color: "#FFFFFF", fontWeight: 600, maxWidth: 1000 }}>
            {fix(title)}
          </div>
          {price && <div style={{ marginTop: 32, fontSize: 40, color: ACCENT, fontWeight: 400 }}>{price}</div>}
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Geologica", data: regular, weight: 400, style: "normal" },
        { name: "Geologica", data: semibold, weight: 600, style: "normal" },
      ],
    },
  );
}
