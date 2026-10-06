import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import { Seo, WRAP, SECTION, QuoteLink } from "../components/ui.jsx";
import { COMPANY } from "../data/site.js";
import { PageBanner, SectionHeader, ClosingCta, Icon, ICONS, BTN_PRIMARY, BTN_GHOST_DARK, TEXT_LINK } from "../components/PageKit.jsx";

/* ------------------------------------------------------------------ *
 * CONTENT — plan: present responsibilities, documents, substitution
 * approval and issue reporting. Verified scope only: no certification
 * badges, no undefined quality guarantee.
 * ------------------------------------------------------------------ */
const ROLES = [
  { who: "The manufacturer", what: "Supplies accurate specifications and documents for the grade.", icon: ICONS.clipboard },
  { who: COMPANY.name, what: "Checks that the specification aligns with your order and arranges the agreed review.", icon: ICONS.shield },
  { who: "The laboratory or inspector", what: "Reports the work actually performed.", icon: ICONS.flask },
];

const DOCS = [
  ["Technical data sheet", "Public for approved grades. States grade, limits, methods, version and revision date."],
  ["Safety data sheet", "Product-specific, from the current manufacturer record."],
  ["Certificate of analysis", "A redacted sample is available. A batch certificate identifies the batch, sample, date, laboratory and methods."],
  ["Inspection report", "Third-party inspection can be discussed where it can be arranged for your order."],
  ["Shipping documentation", "Invoice, packing list, origin and transport documents prepared for each order."],
];

const ASSURANCE = [
  ["Substitutions need your approval", "A change of grade or supplier needs your approval before shipment."],
  ["Report with evidence", "If a problem arises, report it with the batch details and supporting evidence."],
  ["We review it with you", "We review each report with you. We do not offer an undefined quality guarantee."],
];

export default function Quality() {
  return (
    <>
      <Seo
        title="Quality and Documentation"
        description="What buyers can review before ordering: data sheets, safety data sheets, certificates of analysis and agreed inspection."
      />

      <PageBanner
        eyebrow="Quality"
        title="Quality and Documentation"
        body="Our team's industry experience informs how we review sourcing options and buyer requirements. Product specifications and test reports provide the evidence for each offered grade."
      >
        <QuoteLink className={BTN_PRIMARY}>Request Documents for a Grade <span aria-hidden="true">&rarr;</span></QuoteLink>
        <a href="#documents" className={BTN_GHOST_DARK}>See What You Can Review</a>
      </PageBanner>

      <Breadcrumbs trail={[{ label: "Quality" }]} />

      {/* Responsibilities */}
      <section className={`${SECTION} bg-ivory`} aria-labelledby="roles-title">
        <div className={WRAP}>
          <SectionHeader
            eyebrow="Responsibilities"
            title="Who Is Responsible for What"
            id="roles-title"
            sub="Each party reports on its own part of the chain, so every claim traces back to a record."
          />
          <ol className="relative mt-12 grid gap-6 md:grid-cols-3">
            <div className="absolute left-[16%] right-[16%] top-7 z-0 hidden border-t-2 border-dashed border-brass/40 md:block" aria-hidden="true" />
            {ROLES.map((r, i) => (
              <li key={r.who} className="relative z-10 flex flex-col rounded-2xl border border-charcoal/10 bg-white p-6 shadow-sm">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-ivory text-brass shadow-sm ring-1 ring-charcoal/10">
                  <Icon d={r.icon} className="h-6 w-6" />
                </span>
                <p className="mt-1 text-xs font-bold uppercase tracking-widest text-brass">Step {String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-2 font-serif text-xl font-bold text-charcoal">{r.who}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">{r.what}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Documents */}
      <section id="documents" className={`${SECTION} scroll-mt-24 bg-white`} aria-labelledby="docs-title">
        <div className={WRAP}>
          <SectionHeader
            eyebrow="Documentation"
            title="What You Can Review"
            id="docs-title"
            sub="Review the available product data, safety information and agreed testing requirements before confirming your order."
          />
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DOCS.map(([t, d]) => (
              <li key={t} className="flex flex-col rounded-2xl border border-charcoal/10 border-t-4 border-t-brass bg-ivory p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-brass/60 bg-white text-brass shadow-sm">
                  <Icon d={ICONS.doc} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-serif text-lg font-bold text-charcoal">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{d}</p>
              </li>
            ))}
            <li className="flex flex-col justify-between rounded-2xl bg-charcoal p-6 text-white">
              <div>
                <h3 className="font-serif text-lg font-bold text-brass">Need documents for a specific grade?</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">Ask for the documents you need and we will confirm what is available for that grade.</p>
              </div>
              <QuoteLink className={`${BTN_PRIMARY} mt-6`}>Request Documents <span aria-hidden="true">&rarr;</span></QuoteLink>
            </li>
          </ul>
        </div>
      </section>

      {/* Substitution + issue reporting */}
      <section className={`${SECTION} bg-ivory`} aria-labelledby="assurance-title">
        <div className={`${WRAP} grid items-start gap-10 lg:grid-cols-12 lg:gap-14`}>
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Buyer Assurance"
              title="Changes and Issue Reporting"
              id="assurance-title"
              sub="A clear route when something changes or goes wrong, based on records rather than promises."
            />
          </div>
          <ul className="space-y-4 lg:col-span-7">
            {ASSURANCE.map(([t, d], i) => (
              <li key={t} className="flex items-start gap-5 rounded-2xl border border-charcoal/10 bg-white p-6 shadow-sm">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brass/15 font-serif text-lg font-bold text-brass">{i + 1}</span>
                <div>
                  <h3 className="font-serif text-lg font-bold text-charcoal">{t}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate">{d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Transport + certification */}
      <section className={`${SECTION} bg-white`} aria-labelledby="transport-title">
        <div className={WRAP}>
          <SectionHeader eyebrow="Compliance" title="Transport and Certification" id="transport-title" />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-charcoal/10 bg-ivory p-7">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-brass/60 bg-white text-brass shadow-sm"><Icon d={ICONS.truck} className="h-6 w-6" /></span>
              <h3 className="mt-5 font-serif text-xl font-bold text-charcoal">Transport</h3>
              <p className="mt-3 leading-relaxed text-slate">
                Fuel charcoal and activated carbon are reviewed separately for transport. Classification, packing and documentation are confirmed for the actual product and the selected carrier before quotation or dispatch, under the current IMDG Code requirements.
              </p>
            </div>
            <div className="rounded-2xl border border-charcoal/10 bg-ivory p-7">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-brass/60 bg-white text-brass shadow-sm"><Icon d={ICONS.shield} className="h-6 w-6" /></span>
              <h3 className="mt-5 font-serif text-xl font-bold text-charcoal">Certification</h3>
              <p className="mt-3 leading-relaxed text-slate">
                A certificate is shown on this site only for the exact product and scope it covers. A supplier&rsquo;s certificate does not automatically certify the exporter.
              </p>
            </div>
          </div>
          <p className="mt-8">
            <Link to="/export-ordering/" className={TEXT_LINK}>See how export orders work <span aria-hidden="true">&rarr;</span></Link>
          </p>
        </div>
      </section>

      <ClosingCta
        id="quality-cta"
        title="Review Before You Order"
        body="Tell us the product and grade you are considering and we will confirm the documents available for it."
      >
        <QuoteLink className={`${BTN_PRIMARY} px-8 py-3.5`}>Request Documents for a Grade <span aria-hidden="true">&rarr;</span></QuoteLink>
        <Link to="/products/" className={`${BTN_GHOST_DARK} px-8 py-3.5`}>View Products</Link>
      </ClosingCta>
    </>
  );
}