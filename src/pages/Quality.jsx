import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import { Seo, WRAP, SECTION, QuoteLink } from "../components/ui.jsx";
import { COMPANY } from "../data/site.js";
import {
  PageBanner, TrustStrip, SectionHeader, ClosingCta, Photo, Icon, ICONS, IMAGES, GRID_BG,
  BTN_PRIMARY, BTN_GHOST_DARK, TEXT_LINK,
} from "../components/PageKit.jsx";

/* ------------------------------------------------------------------ *
 * CONTENT — plan: responsibilities, documents, substitution approval,
 * issue reporting. Verified scope only: no certification badges and no
 * undefined quality guarantee.
 * ------------------------------------------------------------------ */
const TRUST = [
  { title: "Dated Data Sheets", body: "Public for approved grades, with version and revision date.", icon: ICONS.doc },
  { title: "Batch Certificates", body: "Identify the batch, sample, date, laboratory and methods.", icon: ICONS.flask },
  { title: "Agreed Review", body: "Checked against your order before shipment.", icon: ICONS.clipboard },
  { title: "Approval for Changes", body: "Grade or supplier changes need your approval.", icon: ICONS.shield },
];

const ROLES = [
  { who: "The manufacturer", what: "Supplies accurate specifications and documents for the grade.", icon: ICONS.clipboard },
  { who: COMPANY.name, what: "Checks that the specification aligns with your order and arranges the agreed review.", icon: ICONS.shield },
  { who: "The laboratory or inspector", what: "Reports the work actually performed.", icon: ICONS.flask },
];

const DOCS = [
  ["Technical data sheet", "Public for approved grades. States grade, limits, methods, version and revision date.", "TDS"],
  ["Safety data sheet", "Product-specific, from the current manufacturer record.", "SDS"],
  ["Certificate of analysis", "A redacted sample is available. A batch certificate identifies the batch, sample, date, laboratory and methods.", "COA"],
  ["Inspection report", "Third-party inspection can be discussed where it can be arranged for your order.", "INSP"],
  ["Shipping documentation", "Invoice, packing list, origin and transport documents prepared for each order.", "SHIP"],
];

const ASSURANCE = [
  ["Substitutions need your approval", "A change of grade or supplier needs your approval before shipment."],
  ["Report with evidence", "If a problem arises, report it with the batch details and supporting evidence."],
  ["We review it with you", "We review each report with you. We do not offer an undefined quality guarantee."],
];

/** Stylised document sheet with a folded corner (decorative lines only, no data). */
function Sheet({ title, body, tag }) {
  return (
    <li className="group relative flex flex-col rounded-md bg-white p-6 pt-7 shadow-xl transition-transform duration-300 hover:-translate-y-1.5 motion-reduce:transform-none motion-reduce:transition-none">
      <span className="absolute right-0 top-0 border-l-[30px] border-t-[30px] border-l-[#e2d9c3] border-t-charcoal" aria-hidden="true" />
      <span className="absolute left-0 top-0 h-full w-1 bg-brass" aria-hidden="true" />
      <span className="inline-flex w-fit rounded bg-charcoal px-2.5 py-1 text-[0.65rem] font-bold tracking-widest text-brass">{tag}</span>
      <h3 className="mt-4 font-serif text-lg font-bold leading-snug text-charcoal">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">{body}</p>
      <div className="mt-5 space-y-2" aria-hidden="true">
        <span className="block h-1.5 w-full rounded bg-charcoal/10" />
        <span className="block h-1.5 w-5/6 rounded bg-charcoal/10" />
        <span className="block h-1.5 w-2/3 rounded bg-charcoal/10" />
      </div>
    </li>
  );
}

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
      <TrustStrip items={TRUST} />

      {/* Evidence + responsibilities */}
      <section id="responsibilities" className={`${SECTION} scroll-mt-24 bg-white`} aria-labelledby="roles-title">
        <div className={`${WRAP} grid items-center gap-14 lg:grid-cols-12 lg:gap-16`}>
          <div className="relative lg:col-span-5">
            <Photo src={IMAGES.paperwork} alt="Documentation and quality review" ratio="aspect-[4/5]" className="rounded-2xl border border-charcoal/10 shadow-xl" />
            <div className="absolute inset-x-4 -bottom-8 rounded-xl border-l-4 border-brass bg-charcoal p-5 text-white shadow-2xl sm:inset-x-8">
              <p className="font-serif text-lg font-bold leading-snug">Specifications and test reports provide the evidence for each offered grade.</p>
            </div>
          </div>

          <div className="mt-8 lg:col-span-7 lg:mt-0">
            <SectionHeader
              eyebrow="Responsibilities"
              title="Who Is Responsible for What"
              id="roles-title"
              sub="Each party reports on its own part of the chain, so every claim traces back to a record."
            />
            <ol className="relative mt-10 space-y-5 pl-8 sm:pl-10">
              <span className="absolute bottom-6 left-[0.6rem] top-6 border-l-2 border-dashed border-brass/50 sm:left-[0.9rem]" aria-hidden="true" />
              {ROLES.map((r, i) => (
                <li key={r.who} className="relative rounded-2xl border border-charcoal/10 bg-ivory p-6 shadow-sm">
                  <span className="absolute -left-[2.9rem] top-5 flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-charcoal text-brass shadow-md sm:-left-[3.35rem] sm:h-14 sm:w-14">
                    <Icon d={r.icon} className="h-5 w-5 sm:h-6 sm:w-6" />
                  </span>
                  <p className="text-xs font-bold uppercase tracking-widest text-brass">Step {String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-1 font-serif text-xl font-bold text-charcoal">{r.who}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">{r.what}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Documents on dark */}
      <section id="documents" className="relative scroll-mt-24 overflow-hidden bg-charcoal py-20 text-white lg:py-24" aria-labelledby="docs-title">
        <div className="pointer-events-none absolute inset-0" style={GRID_BG} aria-hidden="true" />
        <div className={`relative z-10 ${WRAP}`}>
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brass">Documentation</span>
            <h2 id="docs-title" className="mt-3 font-serif text-3xl font-bold leading-tight sm:text-4xl">What You Can Review</h2>
            <p className="mt-4 text-lg leading-relaxed text-white/80">
              Review the available product data, safety information and agreed testing requirements before confirming your order.
            </p>
          </div>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DOCS.map(([t, d, tag]) => <Sheet key={t} title={t} body={d} tag={tag} />)}
            <li className="flex flex-col justify-between rounded-md border border-brass/50 bg-white/5 p-6 backdrop-blur-sm">
              <div>
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-brass/60 text-brass"><Icon d={ICONS.doc} /></span>
                <h3 className="mt-4 font-serif text-lg font-bold text-brass">Need documents for a specific grade?</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">Ask for the documents you need and we will confirm what is available for that grade.</p>
              </div>
              <QuoteLink className={`${BTN_PRIMARY} mt-6`}>Request Documents <span aria-hidden="true">&rarr;</span></QuoteLink>
            </li>
          </ul>
        </div>
      </section>

      {/* Changes + issue reporting */}
      <section className={`${SECTION} bg-ivory`} aria-labelledby="assurance-title">
        <div className={`${WRAP} grid items-center gap-12 lg:grid-cols-12 lg:gap-16`}>
          <div className="order-2 lg:order-1 lg:col-span-7">
            <SectionHeader
              eyebrow="Buyer Assurance"
              title="Changes and Issue Reporting"
              id="assurance-title"
              sub="A clear route when something changes or goes wrong, based on records rather than promises."
            />
            <ol className="mt-8 space-y-4">
              {ASSURANCE.map(([t, d], i) => (
                <li key={t} className="flex items-start gap-5 rounded-2xl border border-charcoal/10 bg-white p-6 shadow-sm">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-charcoal font-serif text-lg font-bold text-brass">{i + 1}</span>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-charcoal">{t}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="order-1 lg:order-2 lg:col-span-5">
            <Photo src={IMAGES.logistics} alt="Export logistics and shipping" ratio="aspect-[4/5]" className="rounded-2xl border border-charcoal/10 shadow-xl" />
          </div>
        </div>
      </section>

      {/* Transport + certification */}
      <section className={`${SECTION} bg-white`} aria-labelledby="transport-title">
        <div className={WRAP}>
          <SectionHeader eyebrow="Compliance" title="Transport and Certification" id="transport-title" center />
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {[
              { t: "Transport", img: IMAGES.port, alt: "Containers at a port", icon: ICONS.truck, body: "Fuel charcoal and activated carbon are reviewed separately for transport. Classification, packing and documentation are confirmed for the actual product and the selected carrier before quotation or dispatch, under the current IMDG Code requirements." },
              { t: "Certification", img: IMAGES.paperwork, alt: "Certificates and documentation", icon: ICONS.shield, body: "A certificate is shown on this site only for the exact product and scope it covers. A supplier\u2019s certificate does not automatically certify the exporter." },
            ].map((c) => (
              <article key={c.t} className="group overflow-hidden rounded-2xl border border-charcoal/10 bg-ivory shadow-sm transition-shadow hover:shadow-xl">
                <div className="relative">
                  <Photo src={c.img} alt={c.alt} ratio="aspect-[16/8]" zoom />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" aria-hidden="true" />
                  <span className="absolute bottom-4 left-5 flex h-12 w-12 items-center justify-center rounded-full border-2 border-brass bg-charcoal text-brass shadow-lg"><Icon d={c.icon} className="h-6 w-6" /></span>
                </div>
                <div className="p-7">
                  <h3 className="font-serif text-2xl font-bold text-charcoal">{c.t}</h3>
                  <p className="mt-3 leading-relaxed text-slate">{c.body}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-8 text-center">
            <Link to="/export-ordering/" className={TEXT_LINK}>See how export orders work <span aria-hidden="true">&rarr;</span></Link>
          </p>
        </div>
      </section>

      <ClosingCta
        id="quality-cta"
        image={IMAGES.ship}
        title="Review Before You Order"
        body="Tell us the product and grade you are considering and we will confirm the documents available for it."
      >
        <QuoteLink className={`${BTN_PRIMARY} px-8 py-3.5`}>Request Documents for a Grade <span aria-hidden="true">&rarr;</span></QuoteLink>
        <Link to="/products/" className={`${BTN_GHOST_DARK} px-8 py-3.5`}>View Products</Link>
      </ClosingCta>
    </>
  );
}