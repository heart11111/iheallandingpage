import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section id="contact" className="final-cta">
      <div className="final-cta-layout mx-auto grid max-w-7xl gap-10 px-5 sm:px-8">
        <div className="final-cta-copy">
          <p className="eyebrow">Partner Inquiry / 提携相談</p>
          <h2>BIOLAB Japanと次の機能性ヘルスケア商品を構築する。</h2>
          <p>
            エビデンスに基づく韓国機能性素材からODM/OEM生産、日本側B2B販売拡大まで、
            BIOLAB Japanはヘルスケアブランドの統合ビジネスブリッジを提供します。
          </p>
          <div className="hero-actions">
            <a className="btn-primary" href="mailto:contact@biolabjp.com">
              提携について相談する
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="btn-secondary" href="#pipeline">
              素材パイプラインを見る
            </a>
          </div>
        </div>
        <form className="contact-form">
          <label>
            お名前
            <input type="text" name="name" placeholder="山田 太郎" />
          </label>
          <label>
            会社名
            <input type="text" name="company" placeholder="会社名 / ブランド名" />
          </label>
          <label>
            メール
            <input type="email" name="email" placeholder="name@company.jp" />
          </label>
          <label>
            相談領域
            <select name="interest">
              <option>機能性素材の調達</option>
              <option>ODM/OEM商品開発</option>
              <option>日本B2B流通</option>
              <option>iHEALブランド協業</option>
            </select>
          </label>
          <label className="wide">
            メッセージ
            <textarea name="message" rows={5} placeholder="検討中のカテゴリー、素材、発売時期などをご記入ください。" />
          </label>
          <button type="button">お問い合わせ内容を確認</button>
        </form>
      </div>
      <footer>
        <strong>BIOLAB Japan</strong>
        <span>One-stop Solution for Total Healthcare in JAPAN</span>
      </footer>
    </section>
  );
}
