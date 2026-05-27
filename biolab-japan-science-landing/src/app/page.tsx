"use client";

import { BusinessMap } from "@/components/BusinessMap";
import { BusinessServices } from "@/components/BusinessServices";
import { EvidenceDashboard } from "@/components/EvidenceDashboard";
import { FinalCTA } from "@/components/FinalCTA";
import { Hero } from "@/components/Hero";
import { NatureIngredientsSection } from "@/components/NatureIngredientsSection";
import { NavBar } from "@/components/NavBar";
import { PipelineOverview } from "@/components/PipelineOverview";
import { ProbioticsSection } from "@/components/ProbioticsSection";
import { ScrollLab } from "@/components/ScrollLab";
import { useLenis } from "@/lib/useLenis";

export default function Home() {
  useLenis();

  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <section id="vision" className="vision-section">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.86fr_1.14fr]">
            <div>
              <p className="eyebrow">Credibility to Global Scale</p>
              <h2>公信力のある素材情報を、国境を越える事業設計へ。</h2>
            </div>
            <div className="vision-copy">
              <p>
                BIOLAB Japanは、韓国の素材開発・製造力と日本のB2B市場をつなぎながら、
                臨床・論文・特許・認証に基づく情報設計で、次の市場展開まで見据えたヘルスケア事業を構築します。
              </p>
              <div className="vision-points">
                <span>Human clinical trial / SCI paper / patent referenced portfolio</span>
                <span>Korea R&amp;D and manufacturing bridge for Japan B2B</span>
                <span>Global-ready ODM/OEM, supply, and brand expansion planning</span>
              </div>
            </div>
          </div>
        </section>
        <BusinessMap />
        <PipelineOverview />
        <ProbioticsSection />
        <NatureIngredientsSection />
        <EvidenceDashboard />
        <ScrollLab />
        <BusinessServices />
        <FinalCTA />
      </main>
    </>
  );
}
