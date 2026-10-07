import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import FaqAccordion from "../components/FaqAccordion.jsx";
import { FAQS } from "../data/site.js";
import { Seo, WRAP, SECTION, QuoteLink } from "../components/ui.jsx";
import {
  PhotoBanner, SectionHeader, ClosingCta, IMAGES, GRID_BG,
  BTN_PRIMARY, BTN_GHOST_DARK,
} from "../components/PageKit.jsx";

export default function FAQ() {
  return (
    <>
      <Seo title="FAQ" description="Answers on products, samples, packaging, documents, MOQ, lead time and trade terms." />

      <PhotoBanner
        image={IMAGES.containers}
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        body="Practical answers for international buyers. Ask us directly for anything order-specific."
      >
        <QuoteLink className={BTN_PRIMARY}>Request an Export Quote <span aria-hidden="true">&rarr;</span></QuoteLink>
        <Link to="/contact/" className={BTN_GHOST_DARK}>Contact Us</Link>
      </PhotoBanner>

      <Breadcrumbs trail={[{ label: "FAQ" }]} />

      <section className={`${SECTION} bg-ivory`} aria-labelledby="faq-title">
        <div className={`${WRAP} grid items-start gap-10 lg:grid-cols-12 lg:gap-14`}>
          <div className="lg:col-span-8">
            <SectionHeader eyebrow="Buyer Questions" title="Answers Before You Ask" id="faq-title" />
            <div className="mt-8 rounded-2xl border border-charcoal/10 border-t-4 border-t-brass bg-white p-3 shadow-sm sm:p-6">
              <FaqAccordion items={FAQS} />
            </div>
          </div>

          <aside className="relative overflow-hidden rounded-2xl bg-charcoal p-7 text-white shadow-xl lg:sticky lg:top-28 lg:col-span-4">
            <div className="pointer-events-none absolute inset-0" style={GRID_BG} aria-hidden="true" />
            <div className="relative">
              <span className="block h-0.5 w-10 bg-brass" aria-hidden="true" />
              <h3 className="mt-4 font-serif text-2xl font-bold text-brass">Still have a question?</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/80">Ask our export desk directly for anything order-specific, such as terms, samples or documents for your grade.</p>
              <QuoteLink className={`${BTN_PRIMARY} mt-6 w-full`}>Request an Export Quote <span aria-hidden="true">&rarr;</span></QuoteLink>
              <Link to="/contact/" className={`${BTN_GHOST_DARK} mt-3 w-full`}>Contact Us</Link>
            </div>
          </aside>
        </div>
      </section>

      <ClosingCta id="faq-cta" image={IMAGES.ship} title="Ready to Discuss Your Requirements?" body="Tell us the product, quantity and destination.">
        <QuoteLink className={`${BTN_PRIMARY} px-8 py-3.5`}>Send Your Requirements <span aria-hidden="true">&rarr;</span></QuoteLink>
      </ClosingCta>
    </>
  );
}