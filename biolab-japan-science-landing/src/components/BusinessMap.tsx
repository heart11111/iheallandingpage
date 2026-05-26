"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { routeStages } from "@/lib/ingredients";
import { useReducedMotion } from "@/lib/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

export function BusinessMap() {
  const root = useRef<HTMLElement>(null);
  const line = useRef<SVGPathElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!root.current || !line.current || reduced) return;

    const ctx = gsap.context(() => {
      const length = line.current?.getTotalLength() ?? 0;
      gsap.set(line.current, { strokeDasharray: length, strokeDashoffset: length });
      gsap.to(line.current, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top 68%",
          end: "bottom 45%",
          scrub: 0.7,
        },
      });

      gsap.from(".route-card", {
        y: 28,
        opacity: 0,
        stagger: 0.14,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: root.current,
          start: "top 62%",
        },
      });
    }, root);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section id="business" ref={root} className="business-map-section">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="section-heading">
          <p className="eyebrow">Business Map</p>
          <h2>韓国R&amp;Dから日本B2Bヘルスケア流通へ。</h2>
          <p className="section-copy">
            BIOLAB Japanは、素材開発、製造、ブランド管理、日本側販売ネットワークをつなぐ事業ブリッジとして機能します。
          </p>
        </div>

        <div className="route-canvas">
          <svg className="route-line" viewBox="0 0 1000 190" aria-hidden="true">
            <path ref={line} d="M65 112 C 260 38, 348 154, 500 96 S 760 46, 935 112" fill="none" stroke="url(#routeGradient)" strokeWidth="5" strokeLinecap="round" />
            <defs>
              <linearGradient id="routeGradient" x1="0" x2="1">
                <stop offset="0%" stopColor="#2563eb" />
                <stop offset="50%" stopColor="#0f766e" />
                <stop offset="100%" stopColor="#67e8f9" />
              </linearGradient>
            </defs>
          </svg>
          <div className="route-grid">
            {routeStages.map((stage, index) => (
              <article className={`route-card route-card-${index}`} key={stage.title}>
                <span>0{index + 1}</span>
                <h3>{stage.title}</h3>
                <p>{stage.subtitle}</p>
                <ul>
                  {stage.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
