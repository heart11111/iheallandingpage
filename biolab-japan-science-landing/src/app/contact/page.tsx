import { ContactForm } from "@/components/ContactForm";
import { CompanyLocationMap, ContactInfoBlocks, CorporateFooter } from "@/components/CorporateParts";
import { LocalizedText } from "@/components/DevLanguageProvider";
import { NavBar } from "@/components/NavBar";

export default function ContactPage() {
  return (
    <div className="dh-page">
      <NavBar />
      <main>
        <section className="dh-contact-page">
          <div className="dh-container">
            <p className="dh-detail-primary">CONTACT US</p>
            <h1>
              <LocalizedText ja="How can we help you?" ko="무엇을 도와드릴까요?" />
            </h1>
            <span>
              <LocalizedText
                ja="機能性素材の調達、ODM/OEM商品開発、日本B2B流通、iHEALブランド協業の開発相談を受け付けます。"
                ko="기능성 식품 원료 사업, ODM/OEM 상품 개발, 일본 B2B 유통, iHEAL 브랜드 사용에 대한 상품 로열티 사업의 개발 상담을 접수합니다."
              />
            </span>
            <div className="dh-contact-page-grid">
              <ContactForm />
              {/* The form is the taller column, so the map fills the space left
                  under the contact details rather than starting a new band. */}
              <div className="dh-contact-aside">
                <ContactInfoBlocks />
                <CompanyLocationMap />
              </div>
            </div>
          </div>
        </section>
      </main>
      <CorporateFooter />
    </div>
  );
}
