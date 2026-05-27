"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scrollLabSteps } from "@/lib/ingredients";
import { useReducedMotion } from "@/lib/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

export function ScrollLab() {
  const root = useRef<HTMLElement>(null);
  const progress = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!root.current || reduced) return;
    if (window.innerWidth < 900) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: root.current,
        start: "top 96px",
        end: "+=1120",
        pin: true,
        scrub: 0.45,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const index = Math.min(scrollLabSteps.length - 1, Math.round(self.progress * (scrollLabSteps.length - 1)));
          setActive(index);
          if (progress.current) {
            progress.current.style.transform = `scaleY(${Math.max(0.04, self.progress)})`;
          }
        },
      });
    }, root);

    return () => ctx.revert();
  }, [reduced]);

  const ActiveIcon = scrollLabSteps[active].icon;

  return (
    <section ref={root} className="scroll-lab-section">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.78fr_1.22fr]">
        <div className="section-heading">
          <p className="eyebrow">Scroll Lab</p>
          <h2>素材エビデンスから市場導入まで動く設計。</h2>
          <p className="section-copy">
            臨床資料、素材選定、処方設計、生産供給、日本側市場展開までをひとつの事業フローとして可視化します。
          </p>
        </div>

        <div className="lab-panel">
          <div className="progress-rail" aria-hidden="true">
            <div ref={progress} />
          </div>
          <div className="lab-steps">
            {scrollLabSteps.map((step, index) => (
              <button className={active === index ? "active" : ""} key={step.title} type="button" onClick={() => setActive(index)}>
                <span>0{index + 1}</span>
                {step.title}
              </button>
            ))}
          </div>
          <div className="lab-detail">
            <div className="lab-orb">
              <ActiveIcon size={34} aria-hidden="true" />
            </div>
            <p>0{active + 1} / 05</p>
            <h3>{scrollLabSteps[active].title}</h3>
            <span>{scrollLabSteps[active].copy}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
