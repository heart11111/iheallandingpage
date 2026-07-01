import { Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { IngredientCategoryBadge } from "@/components/IngredientCategoryBadge";
import { ingredientEvidenceVisuals } from "@/lib/ingredientEvidence";
import { ingredientPptDetails } from "@/lib/ingredientPptDetails";
import type { Ingredient } from "@/lib/ingredients";

type SubHeroProps = {
  title: string;
  copy: string;
  image?: string;
  align?: "left" | "right" | "center";
  compact?: boolean;
};

function formatPublicEvidenceNote(note: string) {
  return note
    .replaceAll("PPTXのネイティブチャートXML", "提供資料のチャートデータ")
    .replaceAll("PPTX", "提供資料")
    .replaceAll("PPT", "提供資料")
    .replaceAll("スライド内", "資料内")
    .replaceAll("スライドの", "資料の")
    .replaceAll("スライド構造", "資料構造");
}

export function CorporateSubHero({ title, copy, image = "/images/biolab-global-factory-bg.png", align = "left", compact = false }: SubHeroProps) {
  return (
    <section className={`dh-sub-hero dh-sub-${align}${compact ? " dh-sub-compact" : ""}`}>
      <div className="dh-sub-bg" style={{ backgroundImage: `url(${image})` }} aria-hidden="true" />
      <div className="dh-sub-overlay" aria-hidden="true" />
      <div className="dh-container">
        <h1>{title}</h1>
        <p>{copy}</p>
      </div>
    </section>
  );
}

export function CorporateFooter() {
  return (
    <footer className="dh-footer">
      <div className="dh-container">
        <strong className="dh-footer-logo">
          <Image src="/images/biolab-japan-ci.png" alt="BIOLAB Japan" width={508} height={96} />
        </strong>
        <p>
          <span>BIOLAB Japan</span>
          <br />
          One-stop Solution for Total Healthcare in JAPAN
          <br />
          Korea R&amp;D / Functional Ingredients / ODM-OEM / Japan B2B Distribution
        </p>
      </div>
    </footer>
  );
}

export function IngredientList({ items, linkBase }: { items: Ingredient[]; linkBase?: string }) {
  return (
    <div className={`dh-detail-grid${items.length === 1 ? " dh-detail-grid-single" : ""}`}>
      {items.map((item) => {
        const materials = item.strains || item.origin || [];
        const materialLabel = item.strains ? "菌株構成" : "由来原料";
        const showExtended = !linkBase;
        const evidenceVisual = ingredientEvidenceVisuals[item.id];
        const pptDetail = ingredientPptDetails[item.id];
        const content = (
          <>
            <Image
              alt=""
              aria-hidden="true"
              className="dh-detail-card-image"
              height={320}
              src={item.image}
              width={480}
            />
            <IngredientCategoryBadge category={item.category} line={item.line} />
            <h2>{item.name}</h2>
            <strong>{item.area}</strong>
            <span>{item.intake}</span>

            <section className="dh-detail-summary" aria-label={`${item.name} 概要`}>
              <h3>素材概要</h3>
              <p>{item.summary}</p>
            </section>

            <dl className="dh-detail-specs">
              <div>
                <dt>用途領域</dt>
                <dd>{item.area}</dd>
              </div>
              <div>
                <dt>摂取目安</dt>
                <dd>{item.intake}</dd>
              </div>
              <div>
                <dt>素材ライン</dt>
                <dd>{item.line}</dd>
              </div>
            </dl>

            <section className="dh-detail-materials" aria-label={`${item.name} ${materialLabel}`}>
              <h3>{materialLabel}</h3>
              <ul>
                {materials.map((text) => (
                  <li key={text}>{text}</li>
                ))}
              </ul>
            </section>

            <section className="dh-detail-evidence" aria-label={`${item.name} 根拠情報`}>
              <h3>根拠情報</h3>
              <div>
                {item.evidenceTags.map((tag) => (
                  <em key={tag}>{tag}</em>
                ))}
              </div>
            </section>

            {showExtended && pptDetail && (
              <section className="dh-ppt-evidence" aria-label={`${item.name} evidence detail`}>
                <div className="dh-ppt-evidence-head">
                  <p>Evidence Summary</p>
                  <h3>{pptDetail.productName}</h3>
                </div>

                <div className="dh-ppt-summary-board">
                  <section>
                    <h4>主な訴求</h4>
                    <div className="dh-ppt-summary-list">
                      {pptDetail.healthClaims.map((claim) => (
                        <span key={claim}>{claim}</span>
                      ))}
                    </div>
                  </section>
                  <section>
                    <h4>{pptDetail.originTitle}</h4>
                    <div className="dh-ppt-origin-tags">
                      {pptDetail.originItems.map((origin) => (
                        <span key={origin}>{origin}</span>
                      ))}
                    </div>
                  </section>
                  <section>
                    <h4>評価項目</h4>
                    <div className="dh-ppt-summary-list">
                      {pptDetail.features.map((feature) => (
                        <span key={feature}>{feature}</span>
                      ))}
                    </div>
                  </section>
                </div>

                <div className="dh-ppt-chart-heading">
                  <p>Evidence View</p>
                  <h4>資料内エビデンス画像</h4>
                  <span>提供資料に掲載されている試験データ・グラフをそのまま掲載しています。</span>
                </div>

                <div className="dh-ppt-graph-grid">
                  {pptDetail.evidenceImages.map((evidenceImage) => (
                    <figure className="dh-ppt-chart dh-ppt-chart-figure" key={evidenceImage.src}>
                      <Image alt={evidenceImage.caption} height={480} src={evidenceImage.src} width={720} />
                      <figcaption>
                        <p>{evidenceImage.caption}</p>
                        {evidenceImage.source && <cite>出典: {evidenceImage.source}</cite>}
                      </figcaption>
                    </figure>
                  ))}
                </div>

                <div className="dh-ppt-notes">
                  {pptDetail.graphNotes.map((note) => (
                    <p key={note}>{formatPublicEvidenceNote(note)}</p>
                  ))}
                </div>
              </section>
            )}

            {showExtended && !pptDetail && evidenceVisual && (
              <section className="dh-evidence-visual" aria-label={`${item.name} evidence visual`}>
                <div className="dh-evidence-visual-head">
                  <p>{evidenceVisual.sourceLabel}</p>
                  <h3>{evidenceVisual.title}</h3>
                  <span>{evidenceVisual.summary}</span>
                </div>
                <div className="dh-evidence-bars">
                  {evidenceVisual.metrics.map((metric) => (
                    <div className={`dh-evidence-bar is-${metric.direction || "balanced"}`} key={metric.label}>
                      <div>
                        <strong>{metric.label}</strong>
                        <em>{metric.displayValue || metric.detail}</em>
                      </div>
                      <span aria-hidden="true">
                        <i
                          style={
                            {
                              "--bar-value": `${Math.max(8, Math.min(100, metric.value))}%`,
                            } as CSSProperties
                          }
                        />
                      </span>
                      <small>{metric.detail}</small>
                    </div>
                  ))}
                </div>
                <p>{evidenceVisual.footnote}</p>
              </section>
            )}
          </>
        );

        if (linkBase) {
          return (
            <Link className="dh-detail-card dh-detail-card-link" href={`${linkBase}/${item.id}`} key={item.id}>
              {content}
              <span className="dh-detail-card-cta">DETAIL</span>
            </Link>
          );
        }

        return (
          <article className="dh-detail-card" key={item.id}>
            {content}
          </article>
        );
      })}
    </div>
  );
}

export function IngredientDetailArticle({ item }: { item: Ingredient }) {
  const materials = item.strains || item.origin || [];
  const materialLabel = item.strains ? "菌株構成" : "由来原料";
  const pptDetail = ingredientPptDetails[item.id];
  const evidenceVisual = ingredientEvidenceVisuals[item.id];
  const displayName = pptDetail?.productName || item.name;
  const claims = pptDetail?.healthClaims || [];
  const featureBlocks = pptDetail?.features || [];
  const originItems = pptDetail?.originItems?.length ? pptDetail.originItems : materials;

  return (
    <article className="dh-ingredient-profile">
      <div className="dh-ingredient-profile-hero">
        <div className="dh-ingredient-profile-visual">
          <Image
            alt=""
            aria-hidden="true"
            height={520}
            src={item.image}
            width={780}
          />
        </div>
        <div className="dh-ingredient-profile-summary">
          <IngredientCategoryBadge category={item.category} line={item.line} />
          <p>{item.line}</p>
          <h2>{displayName}</h2>
          <strong>{item.area}</strong>
          <span>{item.summary}</span>
        </div>
      </div>

      <div className="dh-ingredient-spec-panel">
        <h3>基本情報</h3>
        <dl>
          <div>
            <dt>素材名</dt>
            <dd>{displayName}</dd>
          </div>
          <div>
            <dt>機能性内容</dt>
            <dd>{item.area}</dd>
          </div>
          <div>
            <dt>一日摂取目安</dt>
            <dd>{item.intake}</dd>
          </div>
          <div>
            <dt>{materialLabel}</dt>
            <dd>{originItems.join(" / ")}</dd>
          </div>
          <div>
            <dt>用途分類</dt>
            <dd>{item.category}</dd>
          </div>
        </dl>
      </div>

      <div className="dh-ingredient-section-grid">
        <section>
          <p>Function</p>
          <h3>機能性内容</h3>
          <ul>
            {claims.map((claim) => (
              <li key={claim}>{claim}</li>
            ))}
          </ul>
        </section>
        <section>
          <p>Feature</p>
          <h3>特徴</h3>
          <ul>
            {featureBlocks.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </section>
      </div>

      <section className="dh-ingredient-origin-panel">
        <div>
          <p>Raw Material</p>
          <h3>{pptDetail?.originTitle || materialLabel}</h3>
        </div>
        <ul>
          {originItems.map((origin) => (
            <li key={origin}>{origin}</li>
          ))}
        </ul>
      </section>

      <section className="dh-ingredient-evidence-tags" aria-label={`${item.name} 根拠情報`}>
        <p>Evidence & Reference</p>
        <h3>根拠情報</h3>
        <div>
          {item.evidenceTags.map((tag) => (
            <em key={tag}>{tag}</em>
          ))}
        </div>
      </section>

      {pptDetail && (
        <section className="dh-ppt-evidence dh-ingredient-evidence-block" aria-label={`${item.name} evidence detail`}>
          <div className="dh-ppt-chart-heading">
            <p>Evidence View</p>
            <h4>資料内エビデンス画像</h4>
            <span>提供資料に掲載されている試験データ・グラフをそのまま掲載しています。</span>
          </div>

          <div className="dh-ppt-graph-grid">
            {pptDetail.evidenceImages.map((evidenceImage) => (
              <figure className="dh-ppt-chart dh-ppt-chart-figure" key={evidenceImage.src}>
                <Image alt={evidenceImage.caption} height={480} src={evidenceImage.src} width={720} />
                <figcaption>
                  <p>{evidenceImage.caption}</p>
                  {evidenceImage.source && <cite>出典: {evidenceImage.source}</cite>}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="dh-ppt-notes">
            {pptDetail.graphNotes.map((note) => (
              <p key={note}>{formatPublicEvidenceNote(note)}</p>
            ))}
          </div>
        </section>
      )}

      {!pptDetail && evidenceVisual && (
        <section className="dh-evidence-visual dh-ingredient-evidence-block" aria-label={`${item.name} evidence visual`}>
          <div className="dh-evidence-visual-head">
            <p>{evidenceVisual.sourceLabel}</p>
            <h3>{evidenceVisual.title}</h3>
            <span>{evidenceVisual.summary}</span>
          </div>
          <div className="dh-evidence-bars">
            {evidenceVisual.metrics.map((metric) => (
              <div className={`dh-evidence-bar is-${metric.direction || "balanced"}`} key={metric.label}>
                <div>
                  <strong>{metric.label}</strong>
                  <em>{metric.displayValue || metric.detail}</em>
                </div>
                <span aria-hidden="true">
                  <i
                    style={
                      {
                        "--bar-value": `${Math.max(8, Math.min(100, metric.value))}%`,
                      } as CSSProperties
                    }
                  />
                </span>
                <small>{metric.detail}</small>
              </div>
            ))}
          </div>
          <p>{evidenceVisual.footnote}</p>
        </section>
      )}
    </article>
  );
}

export function ContactInfoBlocks() {
  return (
    <div className="dh-contact-info">
      <div>
        <MapPin size={24} aria-hidden="true" />
        <h2>BIOLAB Japan</h2>
        <p>Japan-side B2B healthcare platform connecting Korean functional ingredients and manufacturing.</p>
      </div>
      <div>
        <Mail size={26} aria-hidden="true" />
        <h2>Partnership Inquiry</h2>
        <p>機能性素材、ODM/OEM、日本B2B流通、iHEALブランド協業についてご相談ください。</p>
      </div>
    </div>
  );
}
