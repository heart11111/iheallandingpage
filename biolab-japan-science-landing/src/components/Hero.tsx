"use client";

import dynamic from "next/dynamic";
import { ArrowRight, Beaker, Building2, Microscope, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

const BiolabScene = dynamic(() => import("./BiolabScene").then((mod) => mod.BiolabScene), {
  ssr: false,
  loading: () => <div className="scene-shell scene-loading" />,
});

const trustChips = [
  { label: "KFDA個別認定型素材", icon: ShieldCheck },
  { label: "ヒト臨床試験ベース", icon: Microscope },
  { label: "Probiotics & Nature-derived", icon: Beaker },
  { label: "ODM/OEM + Brand Royalty", icon: Building2 },
];

export function Hero() {
  return (
    <section id="top" className="hero-section">
      <div className="hero-bg-grid" aria-hidden="true" />
      <div className="mx-auto grid min-h-[100dvh] max-w-7xl items-center gap-10 px-5 pb-20 pt-32 sm:px-8 lg:grid-cols-[0.96fr_1.04fr] lg:pb-24">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
          <p className="eyebrow">Functional Healthcare Platform in Japan</p>
          <h1>One-stop solution for total healthcare in Japan.</h1>
          <p className="hero-copy">
            BIOLAB Japanは、韓国の機能性素材開発、製造、ODM/OEM生産、ブランドマネジメントと、
            日本側のB2B販売ネットワークをひとつに結ぶエビデンス主導のヘルスケアプラットフォームです。
          </p>
          <div className="hero-actions">
            <a className="btn-primary" href="#pipeline">
              Pipelineを見る
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="btn-secondary" href="#business">
              Business Map
            </a>
          </div>
          <div className="trust-grid">
            {trustChips.map((chip) => (
              <div className="trust-chip" key={chip.label}>
                <chip.icon size={16} aria-hidden="true" />
                {chip.label}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
          <BiolabScene />
          <div className="generated-asset-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="images/clinical-platform-hero.png" alt="臨床R&Dと機能性素材をイメージした抽象ビジュアル" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
