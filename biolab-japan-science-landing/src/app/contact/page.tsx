import { ContactForm } from "@/components/ContactForm";
import { ContactInfoBlocks, CorporateFooter } from "@/components/CorporateParts";
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
                ja="機能性素材、ODM/OEM、日本B2B流通、ブランド協業についてお問い合わせください。"
                ko="기능성 식품 소재 사업, ODM/OEM, 일본 B2B 유통, Brand Royalty에 대해 문의해 주세요."
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
