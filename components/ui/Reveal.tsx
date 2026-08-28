"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Seconds to wait after load. Matches the original's stagger. */
  delay?: number;
  /** Pixels travelled upward. Text and sections use 40; images use 240. */
  distance?: number;
  /** The light beam uses a much heavier, slower spring than everything else. */
  spring?: Spring;
  className?: string;
  as?: "div" | "section" | "footer";
  id?: string;
};

type Spring = { damping: number; stiffness: number; mass: number };

// Lifted verbatim from the original's appear-animation payload.
const DEFAULT_SPRING: Spring = { damping: 60, stiffness: 320, mass: 1 };
export const SOFT_SPRING: Spring = { damping: 100, stiffness: 100, mass: 10 };

/**
 * These are *appear* animations: they run once on page load, staggered by
 * delay, exactly as the original does. Deliberately not scroll-triggered —
 * an element that starts translated 240px inside an `overflow: hidden` card
 * is barely intersecting, so an in-view trigger can fail to fire and strand
 * the content at opacity 0 forever.
 */
export function Reveal({
  children,
  delay = 0,
  distance = 40,
  spring = DEFAULT_SPRING,
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
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", delay, ...spring }}
      style={{ willChange: "transform" }}
    >
      {children}
    </MotionTag>
  );
}
