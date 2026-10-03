import Breadcrumbs from "../components/Breadcrumbs.jsx";
import { ORDERING_STEPS } from "../data/site.js";
import { Seo, PageHero, WRAP, SECTION, BODY, CARD, QuoteLink } from "../components/ui.jsx";

export default function ExportOrdering() {
  return (
    <>
      <Seo title="Export Ordering" description="How an export order works with Shri Shyam Exports, from enquiry to shipment." />
      <PageHero title="Export Ordering" body="From enquiry to shipment. Terms are discussed per offer, not assumed." />
      <Breadcrumbs trail={[{ label: "Export Ordering" }]} />
      <section className={SECTION}>
        <div className={WRAP}>
          <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ORDERING_STEPS.map((s) => <li key={s.n} className={`${CARD} p-6`}><span className="text-sm font-bold text-brass-dim">{s.n}</span><h2 className="mt-1 text-lg font-bold">{s.title}</h2><p className="mt-2 text-sm text-slate">{s.body}</p></li>)}
          </ol>
        </div>
      </section>
      <section className={`${SECTION} bg-white`}>
        <div className={`${WRAP} grid gap-10 lg:grid-cols-2`}>
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Terms, samples and documents</h2>
            <p className={`mt-3 ${BODY}`}>Trade terms and the named port or place are stated in each quotation. We offer terms only where we can execute them. Sample feasibility, lead time and payment terms are confirmed per offer. We do not publish universal freight prices or transit times.</p>
            <p className={`mt-3 ${BODY}`}>Order-specific documents can include the commercial invoice, packing list, certificate of origin and transport documents. Dangerous-goods documentation is prepared where required for the product and carrier.</p>
          </div>
          <div className={`${CARD} self-start p-6`}>
            <h3 className="text-lg font-bold">Discuss your destination</h3>
            <p className="mt-2 text-sm text-slate">Share your destination port and we will confirm documentation and carrier requirements for that route.</p>
            <QuoteLink className="mt-5 inline-flex rounded-lg bg-brass px-6 py-3 text-sm font-semibold hover:bg-[#c0a56a]">Request an Export Quote</QuoteLink>
          </div>
        </div>
      </section>
    </>
  );
}
