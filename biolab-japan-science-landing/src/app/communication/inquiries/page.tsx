import { ContactForm } from "@/components/ContactForm";
import { ContactInfoBlocks, CorporateFooter } from "@/components/CorporateParts";
import { LocalizedText } from "@/components/DevLanguageProvider";
import { NavBar } from "@/components/NavBar";

export default function CustomerInquiriesPage() {
  return (
    <div className="dh-page">
      <NavBar />
      <main>
        <section className="dh-contact-page">
          <div className="dh-container">
            <p className="dh-detail-primary">CUSTOMER INQUIRIES</p>
            <h1>
              <LocalizedText ja="Customer Inquiries" ko="고객 문의" />
            </h1>
            <span>
              <LocalizedText
                ja="機能性素材、ODM/OEM、日本B2B流通、iHEALブランド協業についてお問い合わせください。"
                ko="기능성 식품 소재 사업, ODM/OEM, 일본 B2B 유통, iHEAL 브랜드 사용에 대한 상품 로열티 사업에 대해 문의해 주세요."
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
