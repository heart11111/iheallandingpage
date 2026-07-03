import { ContactForm } from "@/components/ContactForm";
import { ContactInfoBlocks, CorporateFooter } from "@/components/CorporateParts";
import { LocalizedText } from "@/components/DevLanguageProvider";
import { NavBar } from "@/components/NavBar";

export default function DevelopmentInquiriesPage() {
  return (
    <div className="dh-page">
      <NavBar />
      <main>
        <section className="dh-contact-page">
          <div className="dh-container">
            <p className="dh-detail-primary">DEVELOPMENT INQUIRIES</p>
            <h1>
              <LocalizedText ja="Development Inquiries" ko="개발 문의" />
            </h1>
            <span>
              <LocalizedText
                ja="機能性素材、ODM/OEM、日本B2B流通、iHEALブランド協業の開発相談についてお問い合わせください。"
                ko="기능성 원료, ODM/OEM, 일본 B2B 유통, iHEAL 브랜드 사용에 대한 상품 로열티 사업의 개발 상담을 문의해 주세요."
              />
            </span>
            <div className="dh-contact-page-grid">
              <ContactForm />
              <ContactInfoBlocks />
            </div>
          </div>
        </section>
      </main>
      <CorporateFooter />
    </div>
  );
}
