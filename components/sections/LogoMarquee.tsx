import { site } from "@/content/site";
import { marqueeLogos } from "@/content/logos";
import { Reveal } from "@/components/ui/Reveal";

// The track holds two identical copies of the logo list, so translating it
// by exactly -50% lands back on the starting frame — a seamless loop.
export function LogoMarquee() {
  const track = [...marqueeLogos, ...marqueeLogos];

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
          style={{ animation: "marquee 26s linear infinite" }}
        >
          {/* The 32px spacing is padding rather than a flex gap: that makes one
              copy exactly half the track width, so -50% loops without a jump. */}
          {track.map((logo, i) => (
            <li key={i} className="flex shrink-0 items-center pr-8">
              <svg
                width={logo.width}
                height={logo.height}
                viewBox={logo.viewBox}
                role="img"
                aria-label={i < marqueeLogos.length ? logo.name : undefined}
                aria-hidden={i >= marqueeLogos.length}
                fill="currentColor"
                className="text-white"
              >
                {logo.paths.map((d, j) => (
                  <path key={j} d={d} />
                ))}
              </svg>
            </li>
          ))}
        </ul>
      </Reveal>
    </Reveal>
  );
}
