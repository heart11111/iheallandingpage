import { ArrowRight } from "lucide-react";
import { ContactForm } from "./ContactForm";

export function FinalCTA() {
  return (
    <section id="contact" className="final-cta">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="section-backdrop-image final-backdrop-image" src="images/biolab-global-factory-bg.png" alt="" aria-hidden="true" />
      <div className="final-cta-layout mx-auto grid max-w-7xl gap-10 px-5 sm:px-8">
        <div className="final-cta-copy">
          <p className="eyebrow">Partner Inquiry / 提携相談</p>
          <h2>BIOLAB Japanと次の機能性ヘルスケア商品を構築する。</h2>
          <p>
            エビデンスに基づく韓国機能性素材からODM/OEM生産、日本側B2B販売拡大まで、
            BIOLAB Japanはヘルスケアブランドの統合ビジネスブリッジを提供します。
          </p>
          <div className="hero-actions">
            <a className="btn-primary" href="#contact">
              提携について相談する
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="btn-secondary" href="#pipeline">
              素材パイプラインを見る
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
      <footer>
        <strong>BIOLAB Japan</strong>
        <span>One-stop Solution for Total Healthcare in JAPAN</span>
      </footer>
    </section>
  );
}
