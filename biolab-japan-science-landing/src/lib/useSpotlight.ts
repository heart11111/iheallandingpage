"use client";

import { useEffect } from "react";
import { useReducedMotion } from "./useReducedMotion";

const SPOTLIGHT_SELECTOR =
  ".ingredient-card, .deep-card, .ingredient-sheet, .evidence-card, .service-card";

/**
 * Tracks the pointer across the editorial cards and exposes its horizontal
 * position to CSS as `--spot-x`, so the card's top hairline can "ignite" and
 * follow the cursor (see globals.css). Uses a single delegated listener,
 * rAF-throttled, and is skipped entirely for reduced-motion or touch input.
 */
export function useSpotlight() {
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    if (window.matchMedia("(hover: none)").matches) return;

    let frame = 0;
    let pending: { card: HTMLElement; x: number } | null = null;

    const flush = () => {
      frame = 0;
      if (!pending) return;
      pending.card.style.setProperty("--spot-x", `${pending.x}px`);
      pending = null;
    };

    const onMove = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      const card = target?.closest<HTMLElement>(SPOTLIGHT_SELECTOR);
      if (!card) return;
      pending = { card, x: event.clientX - card.getBoundingClientRect().left };
      if (!frame) frame = requestAnimationFrame(flush);
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      document.removeEventListener("pointermove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [reduced]);
}
