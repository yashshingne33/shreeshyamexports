import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import { COMPANY } from "../data/site.js";
import { Seo, WRAP, SECTION, QuoteLink } from "../components/ui.jsx";
import {
  PageBanner, TrustStrip, SectionHeader, ClosingCta, Photo, Icon, ICONS, IMAGES, GRID_BG,
  BTN_PRIMARY, BTN_GHOST_DARK,
} from "../components/PageKit.jsx";
import cargoShip from "../assets/cargo-ship.jpg";

/* ------------------------------------------------------------------ *
 * CONTENT (Section 9 of the change document)
 * Keep production lead time separate from freight transit time. Do not
 * promise universal FOB/CIF availability, fixed transit times, payment
 * terms or free samples. Confirm operational accuracy with the business
 * before publication.
 * ------------------------------------------------------------------ */
const TRUST = [
  { title: "Quotation Details", body: "The quotation identifies the product, quantity, packing and named port or place.", icon: ICONS.doc },
  { title: "Shipment Arrangements", body: "Available trade terms and carrier requirements are reviewed for your route.", icon: ICONS.truck },
  { title: "Samples and Lead Time", body: "Sample arrangements and production lead time are confirmed for the proposed supply.", icon: ICONS.clipboard },
  { title: "Freight Review", body: "Freight availability, transit estimates and quotation validity are confirmed when the offer is prepared.", icon: ICONS.globe },
];

const STEPS = [
  { n: "01", title: "Share Your Requirement", body: "Send the product, specification, estimated quantity, pack format and destination." },
  { n: "02", title: "Review the Proposed Grade", body: "Review available product data and agree any sample or inspection requirements." },
  { n: "03", title: "Confirm the Order", body: "Approve the specification, packing, commercial terms and applicable documents." },
  { n: "04", title: "Prepare for Dispatch", body: "Coordinate the agreed inspection, packing, documentation and shipment arrangements." },
];

const DOCS = [
  ["Commercial invoice", ICONS.doc],
  ["Packing list", ICONS.box],
  ["Certificate of origin", ICONS.globe],
  ["Transport documents", ICONS.truck],
  ["Product safety information", ICONS.shield],
];

const RELATED = [
  ["Packaging and Private Label", "How pack format, artwork and MOQ are agreed.", "/packaging-private-label/"],
  ["Quality and Documentation", "What you can review before ordering.", "/quality/"],
  ["Frequently Asked Questions", "Practical answers for international buyers.", "/faq/"],
];

export default function ExportOrdering() {
  return (
    <>
      <Seo title="Export Ordering" description={`How an export order works with ${COMPANY.name}, from enquiry to shipment.`} />

      <PageBanner
        eyebrow="Export Ordering"
        title="From Enquiry to Shipment"
        body="Share your product requirements and destination. We will review the proposed grade, packing, documentation and shipment arrangements before issuing a quotation."
      >
        <QuoteLink className={BTN_PRIMARY}>Request a Quote <span aria-hidden="true">&rarr;</span></QuoteLink>
        <a href="#terms" className={BTN_GHOST_DARK}>Terms and Documents</a>
      </PageBanner>

      <TrustStrip items={TRUST} />
      <Breadcrumbs trail={[{ label: "Export Ordering" }]} />

      {/* Steps */}
      <section className={`${SECTION} bg-ivory`} aria-labelledby="steps-title">
        <div className={WRAP}>
          <SectionHeader eyebrow="The Process" title="How an Export Order Works" id="steps-title" sub="A simple process from enquiry to shipment." center />
          <ol className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="absolute left-[12%] right-[12%] top-8 z-0 hidden border-t-2 border-dashed border-brass/50 lg:block" aria-hidden="true" />
            {STEPS.map((s) => (
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
              Your quotation sets out the proposed grade, agreed specification, quantity, packing, price basis and named port or place. Payment terms, production lead time and offer validity are confirmed in writing.
            </p>
            <p className="mt-4 leading-relaxed text-slate">
              If a sample is required, we review product availability and the proposed shipping route. Sample quantity, charges and dispatch arrangements are confirmed before shipment. Sample approval and any agreed inspection requirements should be recorded before the main order proceeds.
            </p>
            <p className="mt-4 leading-relaxed text-slate">
              Documents are confirmed for the product and destination. These may include the commercial invoice, packing list, certificate of origin and transport documents. Product safety information and any additional shipment documents are reviewed according to the product and carrier requirements.
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
            <Photo src={cargoShip} alt="Cargo ship at sea" ratio="aspect-[16/8]" />
            <span className="block h-0.5 bg-brass" aria-hidden="true" />
            <div className="relative p-7">
              <h3 className="font-serif text-2xl font-bold text-brass">Discuss your destination</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/80">Share your destination port and we will review the documentation, shipping route and carrier requirements for that route.</p>
              <QuoteLink className={`${BTN_PRIMARY} mt-6 w-full`}>Request a Quote <span aria-hidden="true">&rarr;</span></QuoteLink>
            </div>
          </aside>
        </div>
      </section>

      {/* Related */}
      <section className="relative overflow-hidden bg-charcoal py-16 text-white" aria-labelledby="related-title">
        <div className="pointer-events-none absolute inset-0" style={GRID_BG} aria-hidden="true" />
        <div className={`relative z-10 ${WRAP} grid gap-6 md:grid-cols-3`}>
          <h2 id="related-title" className="sr-only">Related pages</h2>
          {RELATED.map(([t, d, to]) => (
            <Link key={to} to={to} className="group rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-brass focus-visible:outline focus-visible:outline-2 focus-visible:outline-brass">
              <h3 className="font-serif text-lg font-bold text-brass">{t}</h3>
              <p className="mt-2 text-sm text-white/75">{d}</p>
              <span className="mt-4 inline-block text-sm font-bold text-white transition-transform group-hover:translate-x-1 motion-reduce:transform-none">Learn more <span aria-hidden="true">&rarr;</span></span>
            </Link>
          ))}
        </div>
      </section>

      <ClosingCta
        id="order-cta"
        image={IMAGES.containers}
        title="Ready to Discuss Your Order?"
        body="Send your product requirement and destination port to begin the quotation review."
      >
        <QuoteLink className={`${BTN_PRIMARY} px-8 py-3.5`}>Send Your Requirements <span aria-hidden="true">&rarr;</span></QuoteLink>
      </ClosingCta>
    </>
  );
}