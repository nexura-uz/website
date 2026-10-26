"use client";

import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { usePathname } from "next/navigation";
import { useActionState, useEffect, useRef, useState } from "react";
import type { Dictionary } from "@/content/dictionaries";
import { submitLead } from "@/lib/actions/lead";
import { LEAD_KEY } from "@/components/analytics/LeadTracker";
import { track } from "@/lib/analytics";
import { readAttribution } from "@/lib/attribution";
import type { Locale } from "@/lib/i18n";
import { leadBudgets, leadTimelines, type LeadState } from "@/lib/lead";

type Props = {
  locale: Locale;
  /** Service picked on another page (?service=…): pre-checked, form opens on step 2. */
  preset?: string;
  t: Dictionary["contact"]["form"];
  services: { key: string; label: string }[];
  telegramHref: string;
};

const STEPS = ["service", "budget", "timeline", "contact"] as const;

// "901234567" -> "90 123 45 67"
const formatUzPhone = (digits: string) =>
  [digits.slice(0, 2), digits.slice(2, 5), digits.slice(5, 7), digits.slice(7, 9)].filter(Boolean).join(" ");

export function LeadForm({ locale, t, services, telegramHref, preset }: Props) {
  const [state, action, pending] = useActionState<LeadState, FormData>(submitLead, { status: "idle" });
  const [step, setStep] = useState(preset ? 1 : 0);
  const startedAt = useRef(0);
  const formRef = useRef<HTMLFormElement>(null);
  const [phone, setPhone] = useState("");
  const pathname = usePathname();
  const isEn = locale === "en";

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  // Attribution and fill time are added at submit time; nothing personal comes from storage.
  const submit = (fd: FormData) => {
    for (const [k, v] of Object.entries(readAttribution())) if (v) fd.set(k, v);
    fd.set("t", String(startedAt.current));
    try {
      const lead = { service: String(fd.get("service")), budget: String(fd.get("budget")), timeline: String(fd.get("timeline")), locale };
      sessionStorage.setItem(LEAD_KEY, JSON.stringify(lead));
    } catch {}
    action(fd);
  };

  const errors = state.status === "error" ? state.errors : {};
  // Going back clears that step's answer, so it's picked fresh.
  const back = () => {
    const prev = Math.max(step - 1, 0);
    formRef.current
      ?.querySelectorAll<HTMLInputElement>(`input[name="${STEPS[prev]}"]`)
      .forEach((input) => (input.checked = false));
    setStep(prev);
  };
  const started = useRef(false);
  const pick = (name: (typeof STEPS)[number]) => () => {
    if (!started.current) {
      started.current = true;
      track("form_start", { locale });
    }
    track("form_step", { step: STEPS.indexOf(name) + 1, step_name: name, locale });
    next();
  };
  const next = () => setTimeout(() => setStep((s) => Math.min(s + 1, STEPS.length - 1)), 160);

  return (
    <form ref={formRef} action={submit} noValidate>
      <input type="hidden" name="locale" value={locale} />
      <input type="hidden" name="page" value={pathname} />
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex items-center gap-4">
        <span className="font-mono text-[13px] text-gray">
          {String(step + 1).padStart(2, "0")} / {String(STEPS.length).padStart(2, "0")}
        </span>
        <div className="flex flex-1 gap-1.5" aria-hidden>
          {STEPS.map((s, i) => (
            <span key={s} className={`h-1 flex-1 rounded-full transition-colors ${i <= step ? "bg-primary" : "bg-gray/20"}`} />
          ))}
        </div>
      </div>

      <Step active={step === 0} title={t.steps.service}>
        <Options name="service" options={services} onPick={pick("service")} defaultValue={preset} />
      </Step>
      <Step active={step === 1} title={t.steps.budget}>
        <Options name="budget" options={leadBudgets.map((k) => ({ key: k, label: t.budgets[k] }))} onPick={pick("budget")} />
      </Step>
      <Step active={step === 2} title={t.steps.timeline}>
        <Options name="timeline" options={leadTimelines.map((k) => ({ key: k, label: t.timelines[k] }))} onPick={pick("timeline")} />
      </Step>

      <Step active={step === 3} title={t.steps.contact}>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label={t.fields.name} error={errors.name && t.errors.name} className="sm:col-span-2">
            <input name="name" required autoComplete="name" maxLength={100} className={inputCls} />
          </Field>

          {isEn ? (
            <>
              <Field label={t.fields.email} error={errors.email && t.errors.email}>
                <input name="email" type="email" required autoComplete="email" maxLength={120} className={inputCls} />
              </Field>
              <Field label={t.fields.phone} optional={t.optional} error={errors.phone && t.errors.phone}>
                <input name="phone" type="tel" autoComplete="tel" maxLength={30} className={inputCls} />
              </Field>
            </>
          ) : (
            <>
              <Field label={t.fields.phone} error={(errors.phone && t.errors.phone) || (errors.contact && t.errors.contact)}>
                <div className="flex items-center rounded-xl border border-gray/25 bg-white focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
                  <span className="pl-4 font-mono text-[15px] text-gray">+998</span>
                  <input
                    name="phone"
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel-national"
                    placeholder="90 123 45 67"
                    value={formatUzPhone(phone)}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").replace(/^998/, "").slice(0, 9))}
                    className="h-12 w-full rounded-xl bg-transparent px-3 font-mono text-[15px] text-black outline-none placeholder:text-gray/50"
                  />
                </div>
              </Field>
              <Field label={t.fields.telegram} error={errors.telegram && t.errors.telegram}>
                <input name="telegram" placeholder="@username" autoComplete="off" maxLength={40} className={inputCls} />
              </Field>
              <p className="-mt-2 text-sm text-gray sm:col-span-2">{t.contactHint}</p>
            </>
          )}

          <Field label={t.fields.company} optional={t.optional} className="sm:col-span-2">
            <input name="company" autoComplete="organization" maxLength={120} className={inputCls} />
          </Field>
          <Field label={t.fields.message} optional={t.optional} className="sm:col-span-2">
            <textarea name="message" rows={3} maxLength={2000} className={`${inputCls} h-auto resize-y py-3`} />
          </Field>

          <div className="sm:col-span-2">
            <label className="flex cursor-pointer items-start gap-3 text-[15px] text-black/80">
              <input name="consent" type="checkbox" required className="mt-0.5 size-5 shrink-0 accent-primary" />
              {t.consent}
            </label>
            {errors.consent && <p className="mt-2 text-sm text-black">{t.errors.consent}</p>}
          </div>
        </div>

        {errors.server && (
          <p role="alert" className="mt-6 rounded-xl bg-white px-4 py-3 text-[15px] text-black ring-1 ring-gray/20">
            {t.errors.server}{" "}
            <a href={telegramHref} target="_blank" rel="noopener" className="font-medium text-primary underline underline-offset-4">
              Telegram
            </a>
          </p>
        )}

        <button
          type="submit"
          disabled={pending}
          className="group mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-8 text-base font-medium text-white transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-60 sm:w-auto"
        >
          {pending ? t.sending : t.submit}
          {!pending && <ArrowRight aria-hidden className="size-[18px] transition-transform group-hover:translate-x-0.5" />}
        </button>
      </Step>

      {step > 0 && (
        <button
          type="button"
          onClick={back}
          className="mt-6 inline-flex items-center gap-1.5 text-[15px] text-gray transition-colors hover:text-black"
        >
          <ArrowLeft aria-hidden className="size-4" />
          {t.back}
        </button>
      )}
    </form>
  );
}

const inputCls =
  "h-12 w-full rounded-xl border border-gray/25 bg-white px-4 text-[15px] text-black outline-none transition-colors placeholder:text-gray/50 focus:border-primary focus:ring-2 focus:ring-primary/20";

// Steps stay mounted (hidden) so every answer is submitted with the form.
function Step({ active, title, children }: { active: boolean; title: string; children: React.ReactNode }) {
  return (
    <fieldset hidden={!active} className="step-in mt-8">
      <legend className="text-2xl font-semibold tracking-[-0.02em] text-black md:text-[1.75rem]">{title}</legend>
      <div className="mt-6">{children}</div>
    </fieldset>
  );
}

function Options({
  name,
  options,
  onPick,
  defaultValue,
}: {
  name: string;
  options: { key: string; label: string }[];
  onPick: () => void;
  defaultValue?: string;
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {options.map((o) => (
        <label
          key={o.key}
          className="flex cursor-pointer items-center justify-between gap-3 rounded-2xl border border-gray/20 bg-white px-5 py-4 text-[16px] text-black transition-colors hover:border-primary/60 has-checked:border-primary has-checked:bg-primary/5 has-focus-visible:ring-2 has-focus-visible:ring-primary"
        >
          {o.label}
          <input type="radio" name={name} value={o.key} required defaultChecked={o.key === defaultValue} onClick={onPick} className="peer sr-only" />
          <Check aria-hidden className="size-[18px] shrink-0 text-primary opacity-0 peer-checked:opacity-100" strokeWidth={2.5} />
        </label>
      ))}
    </div>
  );
}

function Field({
  label,
  optional,
  error,
  className = "",
  children,
}: {
  label: string;
  optional?: string;
  error?: string | false;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-sm font-medium text-black">
        {label}
        {optional && <span className="font-normal text-gray"> · {optional}</span>}
      </span>
      {children}
      {error && <span className="mt-2 block text-sm text-black">{error}</span>}
    </label>
  );
}
