"use client";

import { useEffect } from "react";

/**
 * Fades `[data-reveal]` elements up the first time they scroll into view.
 * Purely additive: elements start visible for non-JS/reduced-motion users
 * because the hiding class is only applied from here, never in the markup.
 */
export function useReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!elements.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    elements.forEach((element) => {
      // Anything already inside the first viewport should not blink out.
      if (element.getBoundingClientRect().top < window.innerHeight * 0.9) return;
      element.classList.add("dh-reveal-pending");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("dh-reveal-in");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

/**
 * Draws highlighter / underline strokes on `[data-ink]` the first time they
 * enter the viewport. Marks stay fully painted for no-JS and reduced-motion.
 */
export function useInkReveal(dep?: unknown) {
  useEffect(() => {
    const marks = Array.from(document.querySelectorAll<HTMLElement>("[data-ink]"));
    if (!marks.length) return;

    const reduce =
      typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      marks.forEach((mark) => mark.classList.add("is-on"));
      return;
    }

    document.documentElement.classList.add("dh-ink-ready");

    let cancelled = false;
    let primed = false;
    const waiting = new Set<HTMLElement>();

    const paint = (element: HTMLElement) => {
      element.classList.add("is-on");
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const target = entry.target as HTMLElement;
          observer.unobserve(target);
          if (primed) paint(target);
          else waiting.add(target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.2 },
    );

    marks.forEach((mark) => observer.observe(mark));

    const prime = () => {
      if (cancelled) return;
      primed = true;
      waiting.forEach((element) => paint(element));
      waiting.clear();
    };

    const frame = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(prime);
    });

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [dep]);
}
