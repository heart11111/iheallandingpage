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
              <p className="eyebrow">Vision &amp; Mission</p>
              <h2>Beyond Functional Healthcare Solutions.</h2>
            </div>
            <div className="vision-copy">
              <p>
                BIOLAB Japanは、日本の機能性ヘルスケア産業でリーディングカンパニーへ飛躍することを目指し、
                韓国の素材開発・製造力と日本のB2B市場をつなぎます。
              </p>
              <div className="vision-points">
                <span>Official supplier of KFDA-certified individually recognized ingredients</span>
                <span>Human clinical trial based material portfolio</span>
                <span>ODM/OEM-ready product development and distribution</span>
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
