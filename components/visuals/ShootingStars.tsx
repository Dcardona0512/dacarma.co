// Four 100×1px streaks rotated 22.6°, each a white gradient tail with a
// glowing 2px head at its leading edge. Offsets and timings are staggered so
// the loop never reads as a cycle.

type Star = {
  top: number;
  left: number;
  delay: number;
  duration: number;
  distance: number;
};

const STARS: Star[] = [
  { top: -40, left: -90, delay: 0, duration: 3.4, distance: 620 },
  { top: 83, left: -100, delay: 1.9, duration: 4.2, distance: 560 },
  { top: 10, left: -120, delay: 3.1, duration: 3.8, distance: 600 },
  { top: 20, left: -111, delay: 5.4, duration: 4.6, distance: 580 },
];

export function ShootingStars() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden">
      {STARS.map((star, i) => (
        <div
          key={i}
          className="absolute h-px w-[100px] origin-left"
          style={{ top: star.top, left: star.left, transform: "rotate(22.6deg)" }}
        >
          <div
            className="relative h-full w-full rounded-[2px]"
            style={{
              background:
                "linear-gradient(270deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 100%)",
              animation: `shoot ${star.duration}s linear ${star.delay}s infinite`,
              ["--shoot-distance" as string]: `${star.distance}px`,
            }}
          >
            <span
              className="absolute inset-y-0 right-0 w-0.5 rounded-[1px]"
              style={{
                backgroundColor: "rgba(255,255,255,0.2)",
                boxShadow: "0 0 6px 1px rgba(255,255,255,0.6)",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
