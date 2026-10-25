"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import type { Dictionary } from "@/content/dictionaries";

// "Excel → system": the spreadsheet a business runs on today, and the panel we replace it with
// (same placeholder-UI language as the LinkedIn banner). Decorative; sizes scale with the container (cqw).
const bars = [38, 52, 44, 66, 58, 74, 62, 88];
const ease = [0.22, 1, 0.36, 1] as const;

export function HeroVisual({ t }: { t: Dictionary["sheet"] }) {
  const reduce = useReducedMotion();

  return (
    <div aria-hidden className="@container relative aspect-[5/4] w-full select-none pb-[6%]">
      <Sheet t={t} />

      <motion.div
        initial={reduce ? false : { x: "6%", y: "8%", rotate: 0 }}
        animate={{ x: 0, y: 0, rotate: -4 }}
        transition={{ delay: 0.25, duration: 1.1, ease }}
        style={{ transformOrigin: "100% 100%" }}
        className="absolute bottom-0 right-0 flex aspect-[640/420] w-[72%] overflow-hidden rounded-[2.2cqw] bg-white shadow-2xl shadow-black/15 ring-1 ring-black/5"
      >
        <div className="flex w-[19%] flex-col gap-[2.2cqw] bg-primary px-[2.4cqw] py-[3cqw]">
          <span className="mb-[1.5cqw] size-[4.6cqw] rounded-[1.2cqw] bg-white" />
          <span className="h-[2.6cqw] rounded-[0.8cqw] bg-white/90" />
          {[0, 1, 2, 3, 4].map((i) => (
            <span key={i} className="h-[2.6cqw] rounded-[0.8cqw] bg-white/25" />
          ))}
        </div>

        <div className="flex flex-1 flex-col gap-[2.6cqw] p-[3cqw]">
          <div className="space-y-[1.2cqw]">
            <span className="block h-[2.4cqw] w-[48%] rounded-[0.7cqw] bg-black/85" />
            <span className="block h-[1.6cqw] w-[28%] rounded-[0.6cqw] bg-gray/50" />
          </div>

          <div className="grid grid-cols-3 gap-[2cqw]">
            {[0, 1, 2].map((i) => (
              <div key={i} className="space-y-[1.4cqw] rounded-[1.4cqw] bg-light-gray p-[2cqw]">
                <span className="block h-[1.4cqw] w-[60%] rounded-[0.5cqw] bg-gray/50" />
                <span className="block h-[2.6cqw] w-[80%] rounded-[0.6cqw] bg-black/85" />
                <span className={`block h-[0.8cqw] w-[40%] rounded-full ${i === 0 ? "bg-accent" : "bg-gray/25"}`} />
              </div>
            ))}
          </div>

          <div className="flex flex-1 items-end gap-[1.6cqw] rounded-[1.4cqw] bg-light-gray px-[2.4cqw] pb-[2cqw] pt-[3cqw]">
            {bars.map((h, i) => (
              <motion.span
                key={i}
                initial={reduce ? false : { scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 0.9 + i * 0.06, duration: 0.6, ease }}
                style={{ height: `${h}%`, transformOrigin: "bottom" }}
                className={`flex-1 rounded-t-[0.6cqw] ${i === bars.length - 1 ? "bg-accent" : "bg-primary"}`}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Mobile apps: generic app mockup in the same placeholder style as the panel. */}
      <motion.div
        initial={reduce ? false : { y: "10%", rotate: 0 }}
        animate={{ y: 0, rotate: 3 }}
        transition={{ delay: 0.5, duration: 1.1, ease }}
        className="absolute bottom-0 left-0 z-10 w-[21%] rounded-[3.4cqw] bg-black p-[0.55cqw] shadow-2xl shadow-black/25"
      >
        <Image
          src="/work/mobile-app.svg"
          alt=""
          width={440}
          height={956}
          unoptimized
          className="h-auto w-full rounded-[2.9cqw]"
        />
      </motion.div>
    </div>
  );
}

function Sheet({ t }: { t: Dictionary["sheet"] }) {
  const cols = "grid-cols-[5cqw_1.7fr_1.1fr_0.8fr_1.1fr]";
  const cell = "truncate border-b border-r border-gray/15 px-[1.4cqw] py-[1.1cqw]";

  return (
    <div className="absolute left-0 top-0 w-[84%] overflow-hidden rounded-[2.2cqw] border border-gray/20 bg-white text-[2.3cqw] text-black/75 shadow-lg shadow-black/5">
      <div className="flex items-center gap-[1.4cqw] border-b border-gray/15 bg-light-gray px-[2cqw] py-[1.4cqw]">
        <span className="size-[2.4cqw] rounded-[0.5cqw] bg-gray/40" />
        <span className="font-mono text-[2cqw] text-gray">{t.file}</span>
      </div>

      <div className={`grid ${cols} bg-light-gray/70 text-center font-mono text-[1.8cqw] text-gray`}>
        {["", "A", "B", "C", "D"].map((c, i) => (
          <span key={i} className="border-b border-r border-gray/15 py-[0.6cqw]">
            {c}
          </span>
        ))}
      </div>

      <div className={`grid ${cols}`}>
        <span className={`${cell} text-center font-mono text-[1.8cqw] text-gray`}>1</span>
        {t.columns.map((c) => (
          <span key={c} className={`${cell} font-semibold text-black/85`}>
            {c}
          </span>
        ))}

        {t.rows.map((row, r) => (
          <Row key={r} n={r + 2} row={row} cell={cell} note={r === 1 ? t.note : undefined} />
        ))}
      </div>
    </div>
  );
}

function Row({ n, row, cell, note }: { n: number; row: string[]; cell: string; note?: string }) {
  return (
    <>
      <span className={`${cell} text-center font-mono text-[1.8cqw] text-gray`}>{n}</span>
      {row.map((v, i) => {
        // Spreadsheet mess: unknown or negative stock gets a manual highlight.
        const flagged = i === 2 && (v === "??" || v.startsWith("-"));
        return (
          <span
            key={i}
            className={`${cell} ${i >= 2 ? "text-right font-mono" : ""} ${flagged ? "relative overflow-visible bg-black/[0.07] outline-1 -outline-offset-1 outline-dashed outline-gray/60" : ""}`}
          >
            {v}
            {flagged && note && (
              <span className="absolute bottom-[85%] left-[60%] z-10 whitespace-nowrap rounded-[0.6cqw] border border-gray/30 bg-white px-[1cqw] py-[0.3cqw] text-left font-sans text-[1.8cqw] text-gray shadow-sm">
                {note}
              </span>
            )}
          </span>
        );
      })}
    </>
  );
}
