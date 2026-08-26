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
        <path d="M16 13h59c6.4 0 11 4.8 11 10.2S81.4 33.4 75 33.4H28.6c-5.2 0-8.4 3.8-8.4 8s3.4 8 8.4 8H70c5.6 0 9.6 3.8 9.6 8.6S75.6 59 70 59H20" />
      </svg>
    ),
  },
  {
    key: "brain",
    title: "BRAIN",
    items: ["Cognitive function", "State of emotion"],
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M23 15c-7.2 2.8-10.4 11-8.2 18.2 1 4-1.2 8-4.2 10.2 3.2 6 10.2 10 18.4 10 9 0 16.2-3.2 20.2-9.2 5-2 8-8 6.8-13.2-1-6-5-10.2-6.2-16.2C43.6 9.4 33.4 7.6 23 15z" />
        <path d="M29 23c3 3 4 8 3 13M36 21c2 5 2 11 0 16" />
      </svg>
    ),
  },
  {
    key: "kidney",
    title: "KIDNEY",
    items: ["AKI"],
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M20 17c8-6.2 16.2.8 16.2 10 0 8-5 16-12.2 20.2-6 3-10-1-10-8 0-8 2.2-16 6-22.2z" />
        <path d="M44 17c-8-6.2-16.2.8-16.2 10 0 8 5 16 12.2 20.2 6 3 10-1 10-8 0-8-2.2-16-6-22.2z" />
        <path d="M28 49v8M36 49v8" />
      </svg>
    ),
  },
  {
    key: "skin",
    title: "SKIN",
    items: ["Eczema"],
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M10 16h44M10 23h44M10 31c6 6 16-4 22 2s16-4 22 2" />
        <circle cx="18" cy="46" r="2.1" />
        <circle cx="28" cy="46" r="2.1" />
        <circle cx="38" cy="46" r="2.1" />
        <circle cx="48" cy="46" r="2.1" />
        <circle cx="23" cy="54" r="2.1" />
        <circle cx="33" cy="54" r="2.1" />
        <circle cx="43" cy="54" r="2.1" />
      </svg>
    ),
  },
];

const certificates = [
  {
    key: "fda",
    label: "FDA",
    sub: "U.S. Food & Drug Administration",
    src: "/images/bifido/certs/fda-mark.jpg",
    width: 436,
    height: 144,
  },
  {
    key: "halal",
    label: "HALAL",
    sub: "Korea Muslim Federation",
    src: "/images/bifido/certs/halal.jpg",
    width: 240,
    height: 320,
  },
  {
    key: "gras",
    label: "FDA GRAS",
    sub: "GRN 814 / 813 / 952",
    src: "/images/bifido/certs/fda-gras.jpg",
    width: 240,
    height: 320,
  },
  {
    key: "ndi",
    label: "FDA NDI",
    sub: "NDI 1079 / 1082 / 1118",
    src: "/images/bifido/certs/fda-ndi.jpg",
    width: 240,
    height: 320,
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
      const marks = gsap.utils.toArray<SVGGeometryElement>(root.querySelectorAll(".dh-bifido-effect-icon path"));

      gsap.set(cards, { autoAlpha: 0, y: 72 });
      marks.forEach((mark) => {
        const length = mark.getTotalLength();
        gsap.set(mark, { strokeDasharray: length, strokeDashoffset: length });
      });

      const play = () => {
        gsap.to(cards, {
          autoAlpha: 1,
          y: 0,
          duration: 0.95,
          ease: "power4.out",
          stagger: 0.08,
        });
        gsap.to(marks, {
          strokeDashoffset: 0,
          duration: 0.9,
          ease: "power2.out",
          stagger: 0.035,
        });
      };

      ScrollTrigger.create({
        trigger: root.querySelector(".dh-bifido-effects") ?? root,
        start: "top 78%",
        once: true,
        onEnter: play,
      });
    }, root);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      ref={rootRef}
      className="dh-bifido-panel"
      aria-label={isKorean ? "Bifido 특징 및 인증" : "Bifido features and certifications"}
    >
      <ul className="dh-bifido-highlights">
        {highlights.map((item) => (
          <li data-bifido-rise="" key={item.ja}>
            {isKorean ? item.ko : item.ja}
          </li>
        ))}
      </ul>

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

      <div className="dh-bifido-certs">
        <p>Certification marks</p>
        <ul>
          {certificates.map((cert) => (
            <li data-bifido-rise="" key={cert.key}>
              <figure>
                <Image alt={cert.label} height={cert.height} src={cert.src} width={cert.width} />
              </figure>
              <strong>{cert.label}</strong>
              <span>{cert.sub}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
