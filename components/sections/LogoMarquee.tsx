import { site } from "@/content/site";
import { stack } from "@/content/stack";
import { Reveal } from "@/components/ui/Reveal";

// Roughly 28px of track per second — the speed the original marquee ran at.
// If you add or remove entries, re-derive the duration from this so the
// scroll keeps the same pace: duration = (width of one copy) / 27.7.
const MARQUEE_DURATION_S = 71;

// The track holds two identical copies of the list, so translating it
// by exactly -50% lands back on the starting frame — a seamless loop.
export function LogoMarquee() {
  const track = [...stack, ...stack];

  return (
    <Reveal
      as="section"
      delay={0.5}
      className="flex w-full flex-col items-center justify-center gap-4 rounded-[48px] p-6"
    >
      <p className="t-eyebrow max-w-[277px] text-center">
        {site.marquee.eyebrow}
      </p>

      {/* The ticker fades in on its own, on top of the section's 40px rise. */}
      <Reveal
        distance={0}
        delay={0.6}
        className="relative h-[55px] w-full max-w-[700px] overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,#000_25%,#000_75%,transparent_100%)]"
      >
        <ul
          className="absolute top-0 left-0 flex h-full w-max items-center will-change-transform"
          style={{ animation: `marquee ${MARQUEE_DURATION_S}s linear infinite` }}
        >
          {/* The 32px spacing is padding rather than a flex gap: that makes one
              copy exactly half the track width, so -50% loops without a jump. */}
          {track.map((item, i) => {
            const isClone = i >= stack.length;
            return (
              <li
                key={i}
                className="flex shrink-0 items-center gap-2.5 pr-8 text-white"
                aria-hidden={isClone || undefined}
              >
                <svg
                  viewBox={item.viewBox}
                  fill="currentColor"
                  aria-hidden="true"
                  className="size-5 shrink-0"
                >
                  {item.paths.map((d, j) => (
                    <path key={j} d={d} />
                  ))}
                </svg>
                <span className="text-[18px] leading-none font-medium tracking-[-0.02em] whitespace-nowrap">
                  {item.label}
                </span>
              </li>
            );
          })}
        </ul>
      </Reveal>
    </Reveal>
  );
}
