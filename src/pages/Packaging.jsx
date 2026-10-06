import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import { Seo, WRAP, SECTION, QuoteLink } from "../components/ui.jsx";
import { PageBanner, SectionHeader, ClosingCta, Icon, ICONS, BTN_PRIMARY, BTN_GHOST_DARK, TEXT_LINK } from "../components/PageKit.jsx";

/* ------------------------------------------------------------------ *
 * CONTENT — plan: a packaging matrix (formats to discuss, never
 * unvalidated sizes), retail vs transport packing, and the private-label
 * workflow: brief → pack spec and dieline → artwork proof → packed
 * sample or approved proof → production release.
 * ------------------------------------------------------------------ */
const MATRIX = [
  ["Coconut shell activated carbon", "Bulk bags, master packs"],
  ["Hookah and shisha cubes", "Retail packs, master cartons, private label"],
  ["Pillow briquettes", "Retail packs, master cartons, private label"],
  ["Hexagonal briquettes", "Retail packs, master cartons, private label"],
  ["Coconut shell charcoal", "Bags, bulk bags"],
];

const PACK_TYPES = [
  { title: "Retail packing", body: "Presents your brand and product to the end customer, and carries the labelling for your market.", icon: ICONS.box },
  { title: "Transport packing", body: "Protects the product through handling and shipment. Appearance alone does not establish suitability for transport.", icon: ICONS.truck },
];

const FLOW = [
  ["Buyer brief", "Your brand, market, pack format and quantities."],
  ["Pack specification and dieline", "We confirm the pack specification and dieline with the supplier."],
  ["Artwork proof", "You supply or approve artwork."],
  ["Packed sample or approved proof", "Reviewed before production."],
  ["Production release", "Production proceeds against the approved pack and artwork."],
];

const AGREED = ["Barcodes", "Destination-language copy", "Warning labels", "Importer details"];

export default function Packaging() {
  return (
    <>
      <Seo
        title="Packaging and Private Label"
        description="Bulk, retail and private-label packing for coconut charcoal and activated carbon, agreed with your quotation."
      />

      <PageBanner
        eyebrow="Packaging"
        title="Packaging and Private Label"
        body="Discuss bulk and private-label packaging for your selected product. Pack format and minimum quantity are confirmed with the quotation."
      >
        <QuoteLink product="" className={BTN_PRIMARY}>Discuss Packaging <span aria-hidden="true">&rarr;</span></QuoteLink>
        <a href="#workflow" className={BTN_GHOST_DARK}>Private-Label Workflow</a>
      </PageBanner>

      <Breadcrumbs trail={[{ label: "Packaging" }]} />

      {/* Formats matrix */}
      <section className={`${SECTION} bg-ivory`} aria-labelledby="formats-title">
        <div className={WRAP}>
          <SectionHeader
            eyebrow="Pack Formats"
            title="Pack Formats We Can Discuss"
            id="formats-title"
            sub="Sizes, materials, net and gross mass, pallet option and print MOQ are confirmed per product and transport route in your quotation."
          />

          <div className="mt-10 overflow-x-auto rounded-2xl border border-charcoal/10 bg-white shadow-sm" tabIndex={0} role="region" aria-label="Packaging formats by product">
            <table className="w-full min-w-[520px] text-left text-sm">
              <thead className="border-b-2 border-brass bg-charcoal text-xs font-bold uppercase tracking-wide text-white">
                <tr>
                  <th scope="col" className="px-6 py-4">Product</th>
                  <th scope="col" className="px-6 py-4">Formats to discuss</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-charcoal/10">
                {MATRIX.map(([a, b]) => (
                  <tr key={a} className="odd:bg-white even:bg-ivory/50">
                    <th scope="row" className="px-6 py-4 font-semibold text-charcoal">{a}</th>
                    <td className="px-6 py-4 text-slate">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <ul className="mt-8 grid gap-6 md:grid-cols-2">
            {PACK_TYPES.map((t) => (
              <li key={t.title} className="flex items-start gap-5 rounded-2xl border border-charcoal/10 bg-white p-6 shadow-sm">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-brass/60 bg-ivory text-brass">
                  <Icon d={t.icon} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-serif text-lg font-bold text-charcoal">{t.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate">{t.body}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-slate">Retail packing and transport packing serve different functions, and each is confirmed separately for your order.</p>
        </div>
      </section>

      {/* Private-label workflow */}
      <section id="workflow" className={`${SECTION} scroll-mt-24 bg-white`} aria-labelledby="workflow-title">
        <div className={WRAP}>
          <SectionHeader
            eyebrow="Private Label"
            title="Private-Label Workflow"
            id="workflow-title"
            sub="Five steps from your brief to production release."
            center
          />

          <ol className="relative mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            <div className="absolute left-[10%] right-[10%] top-7 z-0 hidden border-t-2 border-dashed border-brass/40 lg:block" aria-hidden="true" />
            {FLOW.map(([t, d], i) => (
              <li key={t} className="relative z-10 flex h-full flex-col rounded-2xl border border-charcoal/10 bg-ivory p-5 shadow-sm">
                <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-white font-serif text-lg font-bold text-brass shadow-sm ring-1 ring-charcoal/10">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-bold leading-snug text-charcoal">{t}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Agreed in advance */}
      <section className={`${SECTION} bg-ivory`} aria-labelledby="agreed-title">
        <div className={`${WRAP} grid items-center gap-10 lg:grid-cols-12 lg:gap-14`}>
          <div className="lg:col-span-6">
            <SectionHeader
              eyebrow="Before Printing"
              title="Agreed in Advance"
              id="agreed-title"
              sub="We agree in advance who supplies each item below. Buyer approval and applicable labelling requirements are resolved before printing."
            />
            <p className="mt-6">
              <Link to="/export-ordering/" className={TEXT_LINK}>See how export orders work <span aria-hidden="true">&rarr;</span></Link>
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-6">
            {AGREED.map((x) => (
              <li key={x} className="flex items-center gap-4 rounded-xl border border-charcoal/10 border-l-4 border-l-brass bg-white p-5 shadow-sm">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brass/15 text-brass"><Icon d={ICONS.check} className="h-4 w-4" /></span>
                <span className="font-semibold text-charcoal">{x}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ClosingCta
        id="packaging-cta"
        title="Discuss Your Packaging"
        body="Tell us the product, market and pack format you have in mind. Pack format and minimum quantity are confirmed with the quotation."
      >
        <QuoteLink product="" className={`${BTN_PRIMARY} px-8 py-3.5`}>Discuss Packaging <span aria-hidden="true">&rarr;</span></QuoteLink>
        <Link to="/products/" className={`${BTN_GHOST_DARK} px-8 py-3.5`}>View Products</Link>
      </ClosingCta>
    </>
  );
}