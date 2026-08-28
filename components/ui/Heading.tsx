import { Fragment } from "react";
import type { HeadingSegment } from "@/content/site";

// Renders a heading from its segments, putting the accent words in
// Instrument Serif italic and honouring the original's hard line break.
export function Heading({
  segments,
  className = "",
}: {
  segments: readonly HeadingSegment[];
  className?: string;
}) {
  return (
    <h1 className={`t-h1 ${className}`}>
      {segments.map((segment, i) => (
        <Fragment key={i}>
          <span className={segment.accent ? "t-accent" : undefined}>
            {segment.text}
          </span>
          {segment.break ? <br /> : null}
        </Fragment>
      ))}
    </h1>
  );
}
