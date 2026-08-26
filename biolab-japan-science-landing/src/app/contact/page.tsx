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
              <LocalizedText ja="お問い合わせ" ko="문의하기" />
            </h1>
            <span>
              <LocalizedText
                ja="機能性素材、ODM/OEM、日本B2B流通、iHEALブランド協業の相談を受けています。"
                ko="기능성 식품 원료, ODM/OEM, 일본 B2B 유통, iHEAL 브랜드 상품 로열티 상담을 받습니다."
              />
            </span>
            <div className="dh-contact-page-grid">
              <ContactForm />
              {/* Directions first, then phone, then the inquiry note. */}
              <div className="dh-contact-aside">
                <CompanyLocationMap />
                <ContactInfoBlocks />
              </div>
            </div>
          </div>
        </section>
      </main>
      <CorporateFooter />
    </div>
  );
}
