"use client";

import { useEffect, useRef } from "react";
import { buildChartNode } from "@/lib/evidenceCharts";

type EvidenceChartProps = {
  chartKey: string;
  lang: "ja" | "ko";
};

/**
 * Renders an approved evidence chart from the ported review-file SVG engine.
 * Bars grow and lines draw when the chart first scrolls into view (same
 * `.show` animation as the original review file). Language switches keep the
 * revealed state so the chart does not replay.
 */
export function EvidenceChart({ chartKey, lang }: EvidenceChartProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const revealedRef = useRef(false);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    host.replaceChildren();
    const node = buildChartNode(chartKey, lang);
    if (node) host.appendChild(node);

    if (revealedRef.current || host.classList.contains("show")) {
      revealedRef.current = true;
      host.classList.add("show", "is-settled");
      return;
    }

    let settleTimer: number | undefined;
    const reveal = () => {
      revealedRef.current = true;
      host.classList.add("show");
      settleTimer = window.setTimeout(() => host.classList.add("is-settled"), 1200);
    };

    if (typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      reveal();
      host.classList.add("is-settled");
      return;
    }
    if (typeof IntersectionObserver === "undefined") {
      reveal();
      return;
    }

    let cancelled = false;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          reveal();
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    // Paint the collapsed state first, then observe, so the grow transition runs.
    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!cancelled) observer.observe(host);
      });
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      if (settleTimer) window.clearTimeout(settleTimer);
    };
  }, [chartKey, lang]);

  return <div className="dh-evidence-chart" ref={hostRef} />;
}
