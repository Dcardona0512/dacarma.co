"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Seconds to wait before starting. */
  delay?: number;
  /** Pixels travelled upward. The original used 40 everywhere except the
   *  work grid, which came up from 240. */
  distance?: number;
  className?: string;
  as?: "div" | "section" | "footer";
  id?: string;
};

// Framer's default "appear" curve. Every entrance on the site runs through
// here, so retiming the whole page is a one-line change.
const EASE = [0.44, 0, 0.56, 1] as const;
const DURATION = 0.8;

export function Reveal({
  children,
  delay = 0,
  distance = 40,
  className,
  as = "div",
  id,
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as];

  if (reduceMotion) {
    const Tag = as;
    return (
      <Tag id={id} className={className}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag
      id={id}
      className={className}
      initial={{ opacity: 0.001, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: DURATION, delay, ease: EASE }}
      style={{ willChange: "transform" }}
    >
      {children}
    </MotionTag>
  );
}
