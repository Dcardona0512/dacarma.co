import Image from "next/image";
import { StarfieldCanvas } from "./StarfieldCanvas";
import { ShootingStars } from "./ShootingStars";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/content/site";

// The hero's right-hand card: a night sky built from four stacked layers,
// with the portrait sitting on top and bleeding past the bottom edge.
export function HeroVisual() {
  return (
    <div className="relative isolate h-full overflow-hidden rounded-[48px] bg-surface p-12 max-desk:h-[360px]">
      {/* Layer 0 — twinkling starfield, fading out toward the middle. */}
      <StarfieldCanvas className="absolute inset-x-0 top-0 z-0 h-[287px] w-full [mask-image:linear-gradient(#000_0%,transparent_100%)]" />

      {/* Layer 1 — a heavily blurred triangle acting as a light beam. It fades
          in on load without travelling, matching the original. */}
      <Reveal
        distance={0}
        className="absolute -top-[335px] -right-[51px] z-[1] blur-[64px]"
      >
        <div style={{ animation: "beam-drift 14s ease-in-out infinite" }}>
          <svg
            width={716}
            height={743}
            viewBox="0 0 716 743"
            aria-hidden="true"
            className="opacity-20"
          >
            <path d="M 519 0.5 L 0.5 743 L 715.5 20 Z" fill="rgba(255,255,255,0.85)" />
          </svg>
        </div>
      </Reveal>

      {/* Layer 2 — shooting stars. */}
      <ShootingStars />

      {/* Layer 3 — a hairline border that fades out toward the bottom. */}
      <div className="pointer-events-none absolute inset-0 z-[1] rounded-[48px] border border-[var(--hairline)] [mask-image:linear-gradient(#000_0%,rgba(0,0,0,0.16)_82.8442%)]" />

      {/* Layer 4 — the portrait. Images travel 240px on entry, six times the
          distance the text blocks use; that long rise is the effect that
          reads as the page "settling" on load. */}
      <Reveal
        distance={240}
        className="mask-fade-b absolute bottom-[-54px] left-0 z-10"
      >
        <Image
          src={site.hero.portrait}
          alt={`Portrait of ${site.profile.name}`}
          width={333}
          height={326}
          priority
          className="h-[326px] w-[333px] object-cover"
        />
      </Reveal>
    </div>
  );
}
