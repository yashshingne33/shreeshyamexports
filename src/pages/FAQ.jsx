import Breadcrumbs from "../components/Breadcrumbs.jsx";
import FaqAccordion from "../components/FaqAccordion.jsx";
import { FAQS } from "../data/site.js";
import { Seo, PageHero, WRAP, SECTION, QuoteLink } from "../components/ui.jsx";

export default function FAQ() {
  return (
    <>
      <Seo title="FAQ" description="Answers on products, samples, packaging, documents, MOQ, lead time and trade terms." />
      <PageHero title="Frequently Asked Questions" body="Practical answers for international buyers. Ask us directly for anything order-specific." />
      <Breadcrumbs trail={[{ label: "FAQ" }]} />
      <section className={SECTION}>
        <div className={`${WRAP} max-w-3xl`}>
          <FaqAccordion items={FAQS} />
          <QuoteLink className="mt-8 inline-flex rounded-lg bg-brass px-6 py-3 text-sm font-semibold hover:bg-[#c0a56a]">Request an Export Quote</QuoteLink>
        </div>
      </section>
    </>
  );
}
