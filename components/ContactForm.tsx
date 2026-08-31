"use client";

import { useState } from "react";
import { site } from "@/content/site";
import { countries, DEFAULT_COUNTRY } from "@/content/countries";
import { ArrowRightIcon } from "@/components/icons";

type Status = "idle" | "sending" | "sent" | "error";

// Width is kept out of the base so the dial-code select can set its own —
// two competing width utilities in one class list is a coin toss.
const FIELD_BASE =
  "bg-transparent text-[14px] font-medium tracking-[-0.02em] text-offwhite " +
  "placeholder:text-muted/60 border-b border-[var(--hairline)] pb-2 outline-none " +
  "transition-colors duration-200 focus:border-text";

const FIELD = `w-full ${FIELD_BASE}`;

const LABEL = "t-eyebrow text-text";

export function ContactForm() {
  const { contact } = site;
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError(null);

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => null);
        throw new Error(body?.error ?? contact.errorMessage);
      }

      form.reset();
      setStatus("sent");
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : contact.errorMessage);
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-[700px] flex-col gap-5"
    >
      <div className="flex gap-6 max-tab:flex-col">
        <label className="flex flex-1 flex-col gap-2">
          <span className={LABEL}>First Name</span>
          <input name="firstName" required placeholder="Peter" className={FIELD} />
        </label>
        <label className="flex flex-1 flex-col gap-2">
          <span className={LABEL}>Last Name</span>
          <input name="lastName" required placeholder="Parker" className={FIELD} />
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className={LABEL}>Email</span>
        <input
          name="email"
          type="email"
          required
          placeholder="peter@parker.com"
          className={FIELD}
        />
      </label>

      {/* Asked for instead of a website: plenty of prospects don't have one. */}
      <label className="flex flex-col gap-2">
        <span className={LABEL}>Company name</span>
        <input name="company" placeholder="Daily Bugle" className={FIELD} />
      </label>

      <div className="flex flex-col gap-2">
        <span className={LABEL}>Phone</span>
        <div className="flex gap-3">
          {/* Country name rather than a flag: Windows ships no flag glyphs, so
              emoji flags render as bare letters for a large share of visitors. */}
          <select
            name="dialCode"
            defaultValue={DEFAULT_COUNTRY}
            aria-label="Country dialling code"
            className={`${FIELD_BASE} w-[11rem] shrink-0 [&>option]:bg-surface [&>option]:text-offwhite`}
          >
            {countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.name} ({country.dial})
              </option>
            ))}
          </select>
          <input
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="300 123 4567"
            aria-label="Phone number"
            className={FIELD}
          />
        </div>
      </div>

      <label className="flex flex-col gap-2">
        <span className={LABEL}>How can I help you?</span>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Hey David, could you help me with..."
          className={`${FIELD} h-[100px] resize-y p-3`}
        />
      </label>

      {/* Honeypot: invisible to people, irresistible to bots. Named _gotcha
          rather than a real-sounding field, so it can't collide with one and
          browsers never autofill it. */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="pointer-events-none absolute -left-[9999px] size-0 opacity-0"
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className="group mt-2 flex h-10 w-full items-center justify-center gap-2 rounded-xl bg-[rgba(13,13,13,0.5)] backdrop-blur-[10px] elevated transition-colors duration-300 hover:bg-[rgba(30,30,30,0.6)] disabled:cursor-not-allowed disabled:opacity-60"
      >
        <span className="t-button">
          {status === "sending" ? "Sending…" : contact.submitLabel}
        </span>
        <ArrowRightIcon className="size-[18px] shrink-0 text-text transition-transform duration-300 group-hover:translate-x-0.5" />
      </button>

      <p aria-live="polite" className="t-eyebrow min-h-[18px]">
        {status === "sent" ? contact.successMessage : null}
        {status === "error" ? (
          <span className="text-[#ff8f8f]">{error}</span>
        ) : null}
      </p>
    </form>
  );
}
