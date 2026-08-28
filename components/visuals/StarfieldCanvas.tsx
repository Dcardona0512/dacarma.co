"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  radius: number;
  baseAlpha: number;
  /** Radians per frame-second; drives the twinkle. */
  twinkleSpeed: number;
  twinklePhase: number;
  drift: number;
};

const DENSITY = 1 / 2600; // stars per CSS pixel²
const MAX_STARS = 160;

export function StarfieldCanvas({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let stars: Star[] = [];
    let width = 0;
    let height = 0;
    let frame = 0;
    let start = performance.now();

    const seed = () => {
      const count = Math.min(MAX_STARS, Math.round(width * height * DENSITY));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 0.9 + 0.3,
        baseAlpha: Math.random() * 0.5 + 0.2,
        twinkleSpeed: Math.random() * 1.4 + 0.4,
        twinklePhase: Math.random() * Math.PI * 2,
        drift: Math.random() * 4 + 1.5,
      }));
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const draw = (now: number) => {
      const elapsed = (now - start) / 1000;
      context.clearRect(0, 0, width, height);

      for (const star of stars) {
        // Twinkle, plus a slow downward drift that wraps at the bottom.
        const alpha = reduceMotion
          ? star.baseAlpha
          : star.baseAlpha *
            (0.55 + 0.45 * Math.sin(elapsed * star.twinkleSpeed + star.twinklePhase));
        const y = reduceMotion
          ? star.y
          : (star.y + (elapsed * star.drift) / 10) % height;

        context.beginPath();
        context.arc(star.x, y, star.radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(255, 255, 255, ${alpha.toFixed(3)})`;
        context.fill();
      }

      if (!reduceMotion) frame = requestAnimationFrame(draw);
    };

    const observer = new ResizeObserver(() => {
      resize();
      if (reduceMotion) draw(performance.now());
    });
    observer.observe(canvas);

    resize();
    start = performance.now();
    frame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className={className} />;
}
