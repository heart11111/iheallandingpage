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

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    host.replaceChildren();
    const node = buildChartNode(chartKey, lang);
    if (node) host.appendChild(node);

    if (host.classList.contains("show")) return;

    const reveal = () => host.classList.add("show");
    if (typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      reveal();
      return;
    }
    if (typeof IntersectionObserver === "undefined") {
      reveal();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          reveal();
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(host);
    return () => observer.disconnect();
  }, [chartKey, lang]);

  return <div className="dh-evidence-chart" ref={hostRef} />;
}
