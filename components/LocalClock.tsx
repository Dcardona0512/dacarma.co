"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";

const FORMATTER = new Intl.DateTimeFormat("en-US", {
  timeZone: site.profile.timeZone,
  month: "long",
  day: "numeric",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

function format(date: Date) {
  const parts = Object.fromEntries(
    FORMATTER.formatToParts(date).map((p) => [p.type, p.value]),
  );
  return `${parts.month} ${parts.day}, ${parts.year} - ${parts.hour}:${parts.minute}`;
}

// Rendered only after mount: the server has no idea what minute it is on the
// client, and rendering it during SSR would guarantee a hydration mismatch.
export function LocalClock() {
  const [now, setNow] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setNow(format(new Date()));
    tick();
    const id = setInterval(tick, 10_000);
    return () => clearInterval(id);
  }, []);

  return (
    <p className="t-eyebrow h-4 text-text" suppressHydrationWarning>
      {now ?? " "}
    </p>
  );
}
