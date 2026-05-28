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
      const routePaths = gsap.utils.toArray<SVGPathElement>(".route-path");
      const dots = gsap.utils.toArray<SVGCircleElement>(".route-dot");
      const cards = gsap.utils.toArray<HTMLElement>(".route-card");

      gsap.set(routePaths, { strokeDasharray: length, strokeDashoffset: length });
      gsap.set(dots, { autoAlpha: 0, scale: 0.35, transformOrigin: "center" });
      cards.forEach((card) => {
        gsap.set(card, { autoAlpha: 0, y: 28, filter: "blur(8px)" });
        gsap.set(card.querySelectorAll("span, h3, p, li"), { autoAlpha: 0, y: 14, filter: "blur(6px)" });
      });

      const timeline = gsap.timeline({
        defaults: { ease: "power2.out" },
        scrollTrigger: {
          trigger: root.current,
          start: "top 78%",
          end: "top 18%",
          scrub: 0.75,
        },
      });

      timeline
        .to(routePaths, { strokeDashoffset: 0, duration: 1.12, ease: "power1.inOut" }, 0)
        .to(dots, { autoAlpha: 1, scale: 1, stagger: 0.12, duration: 0.36, ease: "power3.out" }, 0.16);

      cards.forEach((card, index) => {
        const at = 0.18 + index * 0.22;
        timeline
          .to(card, { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.52 }, at)
          .to(card.querySelectorAll("span, h3, p, li"), { autoAlpha: 1, y: 0, filter: "blur(0px)", stagger: 0.045, duration: 0.34 }, at + 0.06);
      });
    }, root);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section id="business" ref={root} className="business-map-section">
      <div className="route-ribbon" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="section-heading">
          <p className="eyebrow">Business Map / Korea to Japan to Global</p>
          <h2>韓国R&amp;D、日本B2B、そして広域市場へ。</h2>
          <p className="section-copy">
            BIOLAB Japanは、素材開発、製造、ブランド管理、日本側販売ネットワークをつなぎ、
            エビデンスを持つ素材をより広い市場へ展開する事業ブリッジとして機能します。
          </p>
        </div>

        <div className="route-canvas">
          <svg className="route-line" viewBox="0 0 1000 190" aria-hidden="true">
            <path className="route-path route-path-glow" d="M65 112 C 260 38, 348 154, 500 96 S 760 46, 935 112" fill="none" stroke="url(#routeGradient)" strokeWidth="12" strokeLinecap="round" />
            <path ref={line} className="route-path route-path-main" d="M65 112 C 260 38, 348 154, 500 96 S 760 46, 935 112" fill="none" stroke="url(#routeGradient)" strokeWidth="5" strokeLinecap="round" />
            <circle className="route-dot" cx="65" cy="112" r="7" />
            <circle className="route-dot" cx="500" cy="96" r="7" />
            <circle className="route-dot" cx="935" cy="112" r="7" />
            <defs>
              <linearGradient id="routeGradient" x1="0" x2="1">
                <stop offset="0%" stopColor="#c8324a" />
                <stop offset="48%" stopColor="#c5964b" />
                <stop offset="100%" stopColor="#6d8f72" />
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
