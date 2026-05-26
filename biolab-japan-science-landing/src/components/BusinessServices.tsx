import { businessServices } from "@/lib/ingredients";
import { SectionShell } from "./SectionShell";

export function BusinessServices() {
  return (
    <SectionShell
      id="services"
      eyebrow="Business Services"
      title="日本での機能性ヘルスケア成長を支えるB2Bサービス。"
      copy="素材供給だけでなく、商品化、販売先開拓、ブランドモデルまで統合して支援します。"
    >
      <div className="services-grid">
        {businessServices.map((service) => (
          <article className="service-card" key={service.title}>
            <service.icon size={28} aria-hidden="true" />
            <h3>{service.title}</h3>
            <p>{service.copy}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
