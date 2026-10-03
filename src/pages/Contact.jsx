import Breadcrumbs from "../components/Breadcrumbs.jsx";
import { COMPANY } from "../data/site.js";
import { Seo, PageHero, WRAP, SECTION, BODY, ContactLines, QuoteLink } from "../components/ui.jsx";

export default function Contact() {
  return (
    <>
      <Seo title="Contact" description={`Contact ${COMPANY.name}, an India-based merchant exporter of coconut charcoal and activated carbon.`} />
      <PageHero title="Contact" body="The fastest way to reach our export desk is the enquiry form. Your enquiry is stored and given a reference number." />
      <Breadcrumbs trail={[{ label: "Contact" }]} />
      <section className={SECTION}>
        <div className={`${WRAP} max-w-3xl`}>
          <p className={BODY}>{COMPANY.name} is based in {COMPANY.country}. Tell us the product, quantity and destination, and add your specification if you have one.</p>
          <QuoteLink className="mt-6 inline-flex rounded-lg bg-brass px-6 py-3 text-sm font-semibold hover:bg-[#c0a56a]">Send Your Requirements</QuoteLink>
          <ContactLines className="mt-8" />
        </div>
      </section>
    </>
  );
}
