"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "motion/react";
import { useReducedMotion } from "@/lib/useReducedMotion";

type CountUpProps = {
  value: number;
  duration?: number;
};

/**
 * Counts from 0 up to `value` the first time it scrolls into view — used for
 * the evidence metrics (clinical trials / patents / SCI papers). Respects
 * reduced-motion by rendering the final value immediately.
 */
export function CountUp({ value, duration = 1.6 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || reduced) return;
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, reduced, value, duration]);

  // Reduced-motion users get the final value without an animated state update.
  return <span ref={ref}>{reduced ? value : display}</span>;
}
