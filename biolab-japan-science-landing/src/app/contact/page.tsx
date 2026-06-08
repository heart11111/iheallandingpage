import { ContactForm } from "@/components/ContactForm";
import { ContactInfoBlocks, CorporateFooter } from "@/components/CorporateParts";
import { NavBar } from "@/components/NavBar";

export default function ContactPage() {
  return (
    <div className="dh-page">
      <NavBar />
      <main>
        <section className="dh-contact-page">
          <div className="dh-container">
            <p className="dh-detail-primary">CONTACT US</p>
            <h1>How can we help you?</h1>
            <span>機能性素材、ODM/OEM、日本B2B流通、ブランド協業についてお問い合わせください。</span>
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
