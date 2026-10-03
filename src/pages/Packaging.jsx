import Breadcrumbs from "../components/Breadcrumbs.jsx";
import { Seo, PageHero, WRAP, SECTION, BODY, CARD, QuoteLink } from "../components/ui.jsx";

const FLOW = [
  ["Buyer brief", "Your brand, market, pack format and quantities."],
  ["Pack specification and dieline", "We confirm the pack specification and dieline with the supplier."],
  ["Artwork proof", "You supply or approve artwork."],
  ["Packed sample or approved proof", "Reviewed before production."],
  ["Production release", "Production proceeds against the approved pack and artwork."],
];
const MATRIX = [
  ["Coconut shell activated carbon", "Bulk bags, master packs"],
  ["Hookah and shisha cubes", "Retail packs, master cartons, private label"],
  ["Pillow briquettes", "Retail packs, master cartons, private label"],
  ["Hexagonal briquettes", "Retail packs, master cartons, private label"],
  ["Coconut shell charcoal", "Bags, bulk bags"],
];

export default function Packaging() {
  return (
    <>
      <Seo title="Packaging and Private Label" description="Bulk, retail and private-label packing for coconut charcoal and activated carbon, agreed with your quotation." />
      <PageHero title="Packaging and Private Label" body="Discuss bulk and private-label packaging for your selected product. Pack format and minimum quantity are confirmed with the quotation." />
      <Breadcrumbs trail={[{ label: "Packaging" }]} />

      <section className={SECTION}>
        <div className={WRAP}>
          <h2 className="text-2xl font-bold sm:text-3xl">Pack formats we can discuss</h2>
          <p className={`mt-2 max-w-2xl ${BODY}`}>Sizes, materials, net and gross mass, pallet option and print MOQ are confirmed per product and transport route in your quotation. Retail packing and transport packing serve different functions.</p>
          <div className="mt-6 overflow-x-auto rounded-xl border border-charcoal/10 bg-white">
            <table className="w-full min-w-[480px] text-left text-sm">
              <thead className="bg-ivory text-xs uppercase tracking-wide text-slate"><tr><th scope="col" className="px-4 py-3">Product</th><th scope="col" className="px-4 py-3">Formats to discuss</th></tr></thead>
              <tbody>{MATRIX.map(([a, b]) => <tr key={a} className="border-t border-charcoal/10"><th scope="row" className="px-4 py-3 font-semibold">{a}</th><td className="px-4 py-3">{b}</td></tr>)}</tbody>
            </table>
          </div>
        </div>
      </section>

      <section className={`${SECTION} bg-white`}>
        <div className={WRAP}>
          <h2 className="text-2xl font-bold sm:text-3xl">Private-label workflow</h2>
          <ol className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {FLOW.map(([t, d], i) => <li key={t} className={`${CARD} p-5`}><span className="text-sm font-bold text-brass-dim">0{i + 1}</span><h3 className="mt-1 font-bold">{t}</h3><p className="mt-2 text-sm text-slate">{d}</p></li>)}
          </ol>
          <p className={`mt-6 max-w-3xl ${BODY}`}>We agree in advance who supplies barcodes, destination-language copy, warning labels and importer details. Buyer approval and applicable labelling requirements are resolved before printing.</p>
          <QuoteLink product="" className="mt-6 inline-flex rounded-lg bg-brass px-6 py-3 text-sm font-semibold hover:bg-[#c0a56a]">Discuss Packaging</QuoteLink>
        </div>
      </section>
    </>
  );
}
