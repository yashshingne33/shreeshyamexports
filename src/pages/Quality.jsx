import Breadcrumbs from "../components/Breadcrumbs.jsx";
import { Seo, PageHero, WRAP, SECTION, BODY, CARD, QuoteLink } from "../components/ui.jsx";

const ROLES = [
  ["The manufacturer", "supplies accurate specifications and documents for the grade."],
  ["Shri Shyam Exports", "checks that the specification aligns with your order and arranges the agreed review."],
  ["The laboratory or inspector", "reports the work actually performed."],
];
const DOCS = [
  ["Technical data sheet", "Public for approved grades. States grade, limits, methods, version and revision date."],
  ["Safety data sheet", "Product-specific, from the current manufacturer record."],
  ["Certificate of analysis", "A redacted sample is available. A batch certificate identifies the batch, sample, date, laboratory and methods."],
  ["Inspection report", "Third-party inspection can be discussed where it can be arranged for your order."],
  ["Shipping documentation", "Invoice, packing list, origin and transport documents prepared for each order."],
];

export default function Quality() {
  return (
    <>
      <Seo title="Quality and Documentation" description="What buyers can review before ordering: data sheets, safety data sheets, certificates of analysis and agreed inspection." />
      <PageHero title="Quality and Documentation" body="Our team's industry experience informs how we review sourcing options and buyer requirements. Product specifications and test reports provide the evidence for each offered grade." />
      <Breadcrumbs trail={[{ label: "Quality" }]} />

      <section className={SECTION}>
        <div className={WRAP}>
          <h2 className="text-2xl font-bold sm:text-3xl">Who is responsible for what</h2>
          <ul className="mt-6 grid gap-5 md:grid-cols-3">
            {ROLES.map(([who, what]) => <li key={who} className={`${CARD} p-6`}><p className="font-bold">{who}</p><p className="mt-2 text-sm text-slate">{what}</p></li>)}
          </ul>
          <p className={`mt-6 max-w-3xl ${BODY}`}>A change of grade or supplier needs your approval before shipment. If a problem arises, report it with the batch details and supporting evidence and we will review it with you. We do not offer an undefined quality guarantee.</p>
        </div>
      </section>

      <section className={`${SECTION} bg-white`}>
        <div className={WRAP}>
          <h2 className="text-2xl font-bold sm:text-3xl">What you can review</h2>
          <dl className="mt-6 grid gap-x-10 gap-y-5 md:grid-cols-2">
            {DOCS.map(([t, d]) => <div key={t} className="border-t border-charcoal/10 pt-4"><dt className="font-bold">{t}</dt><dd className="mt-1 text-sm text-slate">{d}</dd></div>)}
          </dl>
          <QuoteLink className="mt-8 inline-flex rounded-lg bg-brass px-6 py-3 text-sm font-semibold hover:bg-[#c0a56a]">Request Documents for a Grade</QuoteLink>
        </div>
      </section>

      <section className={SECTION}>
        <div className={`${WRAP} max-w-3xl`}>
          <h2 className="text-2xl font-bold sm:text-3xl">Transport and certification</h2>
          <p className={`mt-3 ${BODY}`}>Fuel charcoal and activated carbon are reviewed separately for transport. Classification, packing and documentation are confirmed for the actual product and the selected carrier before quotation or dispatch, under the current IMDG Code requirements.</p>
          <p className={`mt-3 ${BODY}`}>A certificate is shown on this site only for the exact product and scope it covers. A supplier&rsquo;s certificate does not automatically certify the exporter.</p>
        </div>
      </section>
    </>
  );
}
