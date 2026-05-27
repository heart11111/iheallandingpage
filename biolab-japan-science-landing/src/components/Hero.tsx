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
  { label: "プロバイオティクス & 自然由来素材", icon: Beaker },
  { label: "ODM/OEM + ブランドロイヤリティ", icon: Building2 },
];

export function Hero() {
  return (
    <section id="top" className="hero-section">
      <div className="hero-bg-grid" aria-hidden="true" />
      <div className="hero-molecular-field" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="mx-auto grid min-h-[100dvh] max-w-7xl items-center gap-10 px-5 pb-20 pt-32 sm:px-8 lg:grid-cols-[0.96fr_1.04fr] lg:pb-24">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
          <p className="eyebrow">日本市場向け機能性ヘルスケアプラットフォーム</p>
          <h1>
            <span>日本のトータル</span>
            <span>ヘルスケアを</span>
            <span>ワンストップで。</span>
          </h1>
          <p className="hero-copy">
            BIOLAB Japanは、韓国の機能性素材開発、製造、ODM/OEM生産、ブランドマネジメントと、
            日本側のB2B販売ネットワークをひとつに結ぶエビデンス主導のヘルスケアプラットフォームです。
          </p>
          <div className="hero-actions">
            <a className="btn-primary" href="#pipeline">
              素材パイプラインを見る
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="btn-secondary" href="#business">
              事業マップを見る
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
        </motion.div>
      </div>
    </section>
  );
}
