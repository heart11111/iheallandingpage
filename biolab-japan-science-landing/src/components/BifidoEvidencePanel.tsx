"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useDevLanguage } from "@/components/DevLanguageProvider";
import { useReducedMotion } from "@/lib/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  {
    ko: "모유수유한 건강한 아기의 분변에서 분리한 인체 유래 균주입니다.",
    ja: "母乳で育った健康な乳児の便から分離した、ヒト由来菌株です。",
  },
  {
    ko: "미국 FDA GRAS 등재: BGN4 GRN 814, BORI GRN 813, AD011 GRN 952.",
    ja: "米国FDA GRAS登録: BGN4 GRN 814、BORI GRN 813、AD011 GRN 952。",
  },
  {
    ko: "한국 미생물보존센터 기탁: BGN4 KCCM 80046, BORI KCCM 10492, AD011 KCCM 11209.",
    ja: "韓国微生物保存センター寄託: BGN4 KCCM 80046、BORI KCCM 10492、AD011 KCCM 11209。",
  },
  {
    ko: "GenBank 염기서열: BGN4 CP001361, BORI CP031133, AD011 CP001213.",
    ja: "GenBank塩基配列: BGN4 CP001361、BORI CP031133、AD011 CP001213。",
  },
];

const effectGroups = [
  {
    key: "gut",
    title: "GUT",
    items: ["Immune", "Diarrhea", "Ulcerative colitis", "IBS"],
    icon: (
      <svg viewBox="0 0 94 64" aria-hidden="true">
        <path d="M24 8C16 4 10 10 16 16H78C88 16 90 24 80 28H20C10 28 8 36 18 40H76C86 40 88 48 78 52H28C18 52 20 60 32 62" />
      </svg>
    ),
  },
  {
    key: "brain",
    title: "BRAIN",
    items: ["Cognitive function", "State of emotion"],
    icon: (
      <svg viewBox="0 0 94 64" aria-hidden="true">
        <path d="M34 12c-11 3-16 14-13 24 1 5-3 9-8 12 4 9 15 14 28 14 11 0 20-4 26-11 8-2 12-10 10-17-1-8-6-13-8-21-7-9-23-12-35-1z" />
        <path d="M40 22c6 5 8 14 6 24" />
        <path d="M50 20c5 7 6 16 3 26" />
        <path d="M60 26c4 7 3 16-2 24" />
        <path d="M44 32c8 3 13 10 11 20" />
      </svg>
    ),
  },
  {
    key: "kidney",
    title: "KIDNEY",
    items: ["AKI"],
    icon: (
      <svg viewBox="0 0 94 64" aria-hidden="true">
        <path d="M24 12c12-9 26 2 24 18 0 12-8 24-20 30-9 4-14-3-14-12 0-12 4-26 10-36z" />
        <path d="M32 22c5 8 5 20 0 30" />
        <path d="M36 50v12" />
        <path d="M70 12c-12-9-26 2-24 18 0 12 8 24 20 30 9 4 14-3 14-12 0-12-4-26-10-36z" />
        <path d="M62 22c-5 8-5 20 0 30" />
        <path d="M58 50v12" />
      </svg>
    ),
  },
  {
    key: "skin",
    title: "SKIN",
    items: ["Eczema"],
    icon: (
      <svg viewBox="0 0 94 64" aria-hidden="true">
        <path d="M8 12h78" />
        <path d="M8 20h78" />
        <path d="M8 28h78" />
        <path d="M8 38c10 8 18-8 28 0s18-8 28 0 18-8 22-2" />
        <circle cx="20" cy="50" r="1.8" />
        <circle cx="34" cy="50" r="1.8" />
        <circle cx="48" cy="50" r="1.8" />
        <circle cx="62" cy="50" r="1.8" />
        <circle cx="76" cy="50" r="1.8" />
        <circle cx="27" cy="58" r="1.8" />
        <circle cx="41" cy="58" r="1.8" />
        <circle cx="55" cy="58" r="1.8" />
        <circle cx="69" cy="58" r="1.8" />
      </svg>
    ),
  },
];

const certificates = [
  {
    key: "fda",
    label: "FDA",
    sub: "U.S. Food & Drug Administration",
    src: "/images/bifido/certs/fda.png",
    width: 646,
    height: 309,
  },
  {
    key: "halal",
    label: "HALAL",
    sub: "Korea Muslim Federation",
    src: "/images/bifido/certs/halal.webp",
    width: 255,
    height: 320,
  },
  {
    key: "gras",
    label: "FDA GRAS",
    sub: "GRN 814 / 813 / 952",
    src: "/images/bifido/certs/fda-gras.jpg",
    width: 250,
    height: 180,
  },
  {
    key: "ndi",
    label: "FDA NDI",
    sub: "NDI 1079 / 1082 / 1118",
    src: "/images/bifido/certs/fda-ndi.webp",
    width: 540,
    height: 360,
  },
] as const;

export function BifidoEvidencePanel() {
  const { language } = useDevLanguage();
  const isKorean = language === "ko";
  const reduced = useReducedMotion();
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || reduced) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(root.querySelectorAll("[data-bifido-rise]"));

      const strokeLength = (node: SVGGeometryElement) => {
        try {
          const length = node.getTotalLength();
          return Number.isFinite(length) && length > 1 ? length : 120;
        } catch {
          return 120;
        }
      };

      cards.forEach((card) => {
        const strokes = gsap.utils.toArray<SVGGeometryElement>(
          card.querySelectorAll(".dh-bifido-effect-icon path, .dh-bifido-effect-icon circle, .dh-bifido-effect-icon line"),
        );
        const dots = gsap.utils.toArray<SVGCircleElement>(card.querySelectorAll(".dh-bifido-effect-icon circle"));

        strokes.forEach((stroke) => {
          const length = strokeLength(stroke);
          gsap.set(stroke, { strokeDasharray: length, strokeDashoffset: length });
        });
        if (dots.length) gsap.set(dots, { fill: "none" });

        ScrollTrigger.create({
          trigger: card,
          start: "top 78%",
          once: true,
          onEnter: () => {
            const draw = gsap.timeline();
            strokes.forEach((stroke, index) => {
              draw.to(
                stroke,
                {
                  strokeDashoffset: 0,
                  duration: index === 0 ? 1.15 : 0.72,
                  ease: "power2.out",
                },
                index === 0 ? 0 : "-=0.48",
              );
            });
            if (dots.length) {
              draw.to(dots, { fill: "currentColor", duration: 0.28, stagger: 0.04 }, "-=0.2");
            }
          },
        });
      });

      requestAnimationFrame(() => ScrollTrigger.refresh());
    }, root);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      ref={rootRef}
      className="dh-bifido-panel"
      aria-label={isKorean ? "Bifido 특징 및 인증" : "Bifido features and certifications"}
    >
      <div className="dh-bifido-certs">
        <p>Certification marks</p>
        <ul>
          {certificates.map((cert) => (
            <li key={cert.key}>
              <figure>
                <Image alt={cert.label} height={cert.height} src={cert.src} width={cert.width} />
              </figure>
              <strong>{cert.label}</strong>
              <span>{cert.sub}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="dh-bifido-effects">
        <p>Bio-functional effects</p>
        <div className="dh-bifido-effect-grid">
          {effectGroups.map((group) => (
            <div className="dh-bifido-effect-rise" data-bifido-rise="" key={group.key}>
              <article>
                <h4>
                  <span className="dh-bifido-effect-icon">{group.icon}</span>
                  {group.title}
                </h4>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </div>
          ))}
        </div>
      </div>

      <ul className="dh-bifido-highlights">
        {highlights.map((item) => (
          <li key={item.ja}>{isKorean ? item.ko : item.ja}</li>
        ))}
      </ul>
    </section>
  );
}
