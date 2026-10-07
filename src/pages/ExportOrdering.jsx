import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import { COMPANY, ORDERING_STEPS } from "../data/site.js";
import { Seo, WRAP, SECTION, QuoteLink } from "../components/ui.jsx";
import {
  PhotoBanner, TrustStrip, SectionHeader, ClosingCta, Photo, Icon, ICONS, IMAGES, GRID_BG,
  BTN_PRIMARY, BTN_GHOST_DARK,
} from "../components/PageKit.jsx";

const TRUST = [
  { title: "Terms Per Offer", body: "Trade terms and named port stated in each quotation.", icon: ICONS.doc },
  { title: "Executable Terms Only", body: "We offer terms only where we can execute them.", icon: ICONS.check },
  { title: "Confirmed Per Offer", body: "Sample feasibility, lead time and payment terms.", icon: ICONS.clipboard },
  { title: "No Universal Prices", body: "We do not publish freight prices or transit times.", icon: ICONS.shield },
];

const DOCS = [
  ["Commercial invoice", ICONS.doc],
  ["Packing list", ICONS.box],
  ["Certificate of origin", ICONS.globe],
  ["Transport documents", ICONS.truck],
  ["Dangerous-goods documentation, where required", ICONS.shield],
];

export default function ExportOrdering() {
  return (
    <>
      <Seo title="Export Ordering" description={`How an export order works with ${COMPANY.name}, from enquiry to shipment.`} />

      <PhotoBanner
        image={IMAGES.port}
        eyebrow="Export Ordering"
        title="From Enquiry to Shipment"
        body="From enquiry to shipment. Terms are discussed per offer, not assumed."
      >
        <QuoteLink className={BTN_PRIMARY}>Request an Export Quote <span aria-hidden="true">&rarr;</span></QuoteLink>
        <a href="#terms" className={BTN_GHOST_DARK}>Terms and Documents</a>
      </PhotoBanner>

      <TrustStrip items={TRUST} />
      <Breadcrumbs trail={[{ label: "Export Ordering" }]} />

      {/* Steps */}
      <section className={`${SECTION} bg-ivory`} aria-labelledby="steps-title">
        <div className={WRAP}>
          <SectionHeader eyebrow="The Process" title="How an Export Order Works" id="steps-title" sub="A simple process from enquiry to shipment." center />
          <ol className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="absolute left-[12%] right-[12%] top-8 z-0 hidden border-t-2 border-dashed border-brass/50 lg:block" aria-hidden="true" />
            {ORDERING_STEPS.map((s) => (
              <li key={s.n} className="relative z-10 flex h-full flex-col rounded-2xl border border-charcoal/10 border-t-4 border-t-brass bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none">
                <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-charcoal font-serif text-lg font-bold text-brass shadow-md">{s.n}</span>
                <h3 className="font-serif text-xl font-bold text-charcoal">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Terms + documents */}
      <section id="terms" className={`${SECTION} scroll-mt-24 bg-white`} aria-labelledby="terms-title">
        <div className={`${WRAP} grid items-start gap-12 lg:grid-cols-12 lg:gap-16`}>
          <div className="lg:col-span-7">
            <SectionHeader eyebrow="Commercial" title="Terms, Samples and Documents" id="terms-title" />
            <p className="mt-5 text-lg leading-relaxed text-slate">
              Trade terms and the named port or place are stated in each quotation. We offer terms only where we can execute them. Sample feasibility, lead time and payment terms are confirmed per offer. We do not publish universal freight prices or transit times.
            </p>
            <p className="mt-4 leading-relaxed text-slate">
              Order-specific documents can include the commercial invoice, packing list, certificate of origin and transport documents. Dangerous-goods documentation is prepared where required for the product and carrier.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {DOCS.map(([t, icon]) => (
                <li key={t} className="flex items-center gap-3 rounded-xl border border-charcoal/10 border-l-4 border-l-brass bg-ivory p-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-charcoal text-brass"><Icon d={icon} className="h-4 w-4" /></span>
                  <span className="text-sm font-semibold text-charcoal">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="relative overflow-hidden rounded-2xl bg-charcoal text-white shadow-xl lg:sticky lg:top-28 lg:col-span-5">
            <Photo src={IMAGES.ship} alt="Cargo ship at sea" ratio="aspect-[16/8]" />
            <span className="block h-0.5 bg-brass" aria-hidden="true" />
            <div className="relative p-7">
              <h3 className="font-serif text-2xl font-bold text-brass">Discuss your destination</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/80">Share your destination port and we will confirm documentation and carrier requirements for that route.</p>
              <QuoteLink className={`${BTN_PRIMARY} mt-6 w-full`}>Request an Export Quote <span aria-hidden="true">&rarr;</span></QuoteLink>
            </div>
          </aside>
        </div>
      </section>

      {/* Related */}
      <section className="relative overflow-hidden bg-charcoal py-16 text-white" aria-labelledby="related-title">
        <div className="pointer-events-none absolute inset-0" style={GRID_BG} aria-hidden="true" />
        <div className={`relative z-10 ${WRAP} grid gap-6 md:grid-cols-3`}>
          <h2 id="related-title" className="sr-only">Related pages</h2>
          {[
            ["Packaging and Private Label", "How pack format, artwork and MOQ are agreed.", "/packaging-private-label/"],
            ["Quality and Documentation", "What you can review before ordering.", "/quality/"],
            ["Frequently Asked Questions", "Practical answers for international buyers.", "/faq/"],
          ].map(([t, d, to]) => (
            <Link key={to} to={to} className="group rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-brass focus-visible:outline focus-visible:outline-2 focus-visible:outline-brass">
              <h3 className="font-serif text-lg font-bold text-brass">{t}</h3>
              <p className="mt-2 text-sm text-white/75">{d}</p>
              <span className="mt-4 inline-block text-sm font-bold text-white transition-transform group-hover:translate-x-1 motion-reduce:transform-none">Open <span aria-hidden="true">&rarr;</span></span>
            </Link>
          ))}
        </div>
      </section>

      <ClosingCta id="order-cta" image={IMAGES.containers} title="Ready to Discuss Your Shipment?" body="Tell us the product, quantity and destination port.">
        <QuoteLink className={`${BTN_PRIMARY} px-8 py-3.5`}>Send Your Requirements <span aria-hidden="true">&rarr;</span></QuoteLink>
      </ClosingCta>
    </>
  );
}