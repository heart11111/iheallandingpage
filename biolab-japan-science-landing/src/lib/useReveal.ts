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
