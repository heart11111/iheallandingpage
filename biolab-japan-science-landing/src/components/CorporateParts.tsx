import { Mail, MapPin } from "lucide-react";
import type { Ingredient } from "@/lib/ingredients";

type SubHeroProps = {
  title: string;
  copy: string;
  image?: string;
  align?: "left" | "right" | "center";
};

export function CorporateSubHero({ title, copy, image = "/images/biolab-global-factory-bg.png", align = "left" }: SubHeroProps) {
  return (
    <section className={`dh-sub-hero dh-sub-${align}`}>
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
        <strong>BIOLAB Japan</strong>
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

export function IngredientList({ items }: { items: Ingredient[] }) {
  return (
    <div className="dh-detail-grid">
      {items.map((item) => (
        <article className="dh-detail-card" key={item.id}>
          <p>{item.category}</p>
          <h2>{item.name}</h2>
          <strong>{item.area}</strong>
          <span>{item.intake}</span>
          <ul>
            {(item.strains || item.origin || []).slice(0, 5).map((text) => (
              <li key={text}>{text}</li>
            ))}
          </ul>
          <div>
            {item.evidenceTags.slice(0, 3).map((tag) => (
              <em key={tag}>{tag}</em>
            ))}
          </div>
        </article>
      ))}
    </div>
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
