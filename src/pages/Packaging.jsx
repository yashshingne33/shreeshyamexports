import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import { Seo, WRAP, SECTION, QuoteLink } from "../components/ui.jsx";
import { PRODUCTS } from "../data/products.js";
import { imageFor } from "./Products.jsx"; // same product photos as the Products and Home pages
import {
  PageBanner, TrustStrip, SectionHeader, ClosingCta, Photo, Icon, ICONS, IMAGES, GRID_BG,
  BTN_PRIMARY, BTN_GHOST_DARK, TEXT_LINK,
} from "../components/PageKit.jsx";

/* ------------------------------------------------------------------ *
 * CONTENT (Section 8 of the change document)
 * ------------------------------------------------------------------ */
const CAPTION = "Illustrative packaging concept";

const ROUTES = [
  { title: "Bulk Packing", body: "Packing for wholesale and industrial supply, with net weight, material and handling requirements agreed for the selected product.", icon: ICONS.box, img: IMAGES.warehouse },
  { title: "Retail Packing", body: "Consumer packs with an agreed pack weight, product information and master-carton configuration.", icon: ICONS.clipboard, img: IMAGES.shisha },
  { title: "Private Label", body: "Branded packaging produced against the approved artwork, pack specification and minimum quantity.", icon: ICONS.shield, img: IMAGES.paperwork },
];

const TRUST = [
  { title: "Confirmed per Product", body: "Formats are agreed per product and transport route.", icon: ICONS.box },
  { title: "Specification Agreed", body: "Pack material, dimensions and dieline confirmed before print.", icon: ICONS.clipboard },
  { title: "Proof Before Print", body: "Print proof or packed sample approved first.", icon: ICONS.check },
  { title: "Quotation Terms", body: "Pack specification and minimum order quantity set in the quotation.", icon: ICONS.doc },
];

/* Packaging matrix: publish ONLY verified options. Add a row per product slug when the
   business confirms it, for example:
   "pillow-charcoal-briquettes": { packType: "...", netWeight: "...", material: "...",
     unitsPerCarton: "...", cartonDimensions: "...", grossWeight: "...", pallet: "...",
     printMoq: "...", leadTime: "..." }
   Leave a field out if it is not confirmed. Products with no entry show the interim text. */
const PACKING_MATRIX = {};

const PACK_FIELDS = [
  ["packType", "Pack type"],
  ["netWeight", "Net weight"],
  ["material", "Pack material"],
  ["unitsPerCarton", "Units per carton"],
  ["cartonDimensions", "Carton dimensions"],
  ["grossWeight", "Gross weight"],
  ["pallet", "Pallet option"],
  ["printMoq", "Print MOQ"],
  ["leadTime", "Production lead time"],
];

const FLOW = [
  ["Buyer brief", "Share your product, target market, brand, pack weight and order quantity."],
  ["Pack specification", "Confirm pack material, dimensions, carton configuration and artwork dieline."],
  ["Artwork approval", "Review the design, product information, barcode and destination-language copy."],
  ["Final proof", "Approve the agreed print proof or packed sample before production release."],
  ["Production release", "Release production against the approved specification and artwork."],
];

const AGREED = [
  { t: "Barcodes", icon: ICONS.clipboard },
  { t: "Destination-language copy", icon: ICONS.globe },
  { t: "Warning labels", icon: ICONS.shield },
  { t: "Importer details", icon: ICONS.doc },
];

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
        body="Select packing to suit your product, sales channel and destination. Bulk, retail and private-label options are reviewed against the grade, order quantity and artwork requirements. The quotation confirms the agreed pack specification and minimum order quantity."
      >
        <QuoteLink type="private-label" className={BTN_PRIMARY}>Discuss Packaging <span aria-hidden="true">&rarr;</span></QuoteLink>
        <a href="#workflow" className={BTN_GHOST_DARK}>Private-Label Workflow</a>
      </PageBanner>

      <Breadcrumbs trail={[{ label: "Packaging" }]} />
      <TrustStrip items={TRUST} />

      {/* Three routes as photo tiles */}
      <section className={`${SECTION} bg-white`} aria-labelledby="routes-title">
        <div className={WRAP}>
          <SectionHeader
            eyebrow="Pack Types"
            title="Packaging Options by Product"
            id="routes-title"
            sub="Review the available pack formats for your selected product. Pack weight, materials, carton configuration and print requirements are confirmed before production."
            center
          />
          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {ROUTES.map((r) => (
              <li key={r.title} className="group relative isolate overflow-hidden rounded-2xl shadow-lg">
                <Photo src={r.img} alt={`${r.title} concept`} ratio="aspect-[4/5]" zoom className="!bg-charcoal" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/10" aria-hidden="true" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-brass bg-charcoal/80 text-brass backdrop-blur"><Icon d={r.icon} className="h-6 w-6" /></span>
                  <h3 className="mt-4 font-serif text-2xl font-bold text-white">{r.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/85">{r.body}</p>
                  <p className="mt-3 text-[0.65rem] font-semibold uppercase tracking-wider text-white/60">{CAPTION}</p>
                </div>
                <span className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-brass transition-transform duration-500 group-hover:scale-x-100 motion-reduce:transition-none" aria-hidden="true" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Product matrix: verified options only */}
      <section className={`${SECTION} bg-ivory`} aria-labelledby="matrix-title">
        <div className={WRAP}>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              eyebrow="By Product"
              title="Confirm Packing for Your Product"
              id="matrix-title"
              sub="Send your preferred pack weight, sales channel and destination. We will confirm suitable packaging options with the quotation."
            />
            <Link to="/products/" className={TEXT_LINK}>View all products <span aria-hidden="true">&rarr;</span></Link>
          </div>

          {/* Equal-size cards; the last row centres itself when the count is uneven */}
          <ul className="mt-12 flex flex-wrap justify-center gap-6">
            {PRODUCTS.map((p) => {
              const row = PACKING_MATRIX[p.slug];
              const fields = row ? PACK_FIELDS.filter(([k]) => row[k]) : [];
              return (
                <li key={p.slug} className="flex w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
                  <article className="group flex w-full flex-col overflow-hidden rounded-2xl border border-charcoal/10 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-brass/50 hover:shadow-xl motion-reduce:transform-none motion-reduce:transition-none">
                    <div className="relative">
                      <Photo src={imageFor(p)} alt={p.name} ratio="aspect-[4/3]" zoom className="!bg-white" />
                      <span className="absolute left-0 top-0 h-1 w-full bg-brass" aria-hidden="true" />
                    </div>

                    <div className="flex flex-1 flex-col border-t border-charcoal/10 p-6">
                      <h3 className="min-h-[3.25rem] font-serif text-lg font-bold leading-snug text-charcoal">{p.name}</h3>

                      {fields.length > 0 ? (
                        <dl className="mt-3 grid gap-2 text-sm">
                          {fields.map(([k, label]) => (
                            <div key={k} className="flex justify-between gap-4 border-b border-charcoal/10 pb-2">
                              <dt className="text-slate">{label}</dt>
                              <dd className="text-right font-semibold text-charcoal">{row[k]}</dd>
                            </div>
                          ))}
                        </dl>
                      ) : (
                        <p className="mt-3 text-sm leading-relaxed text-slate">
                          Packaging options for this product are confirmed with your quotation.
                        </p>
                      )}

                      <div className="mt-auto flex flex-col gap-3 pt-6">
                        <QuoteLink product={p.slug} type="private-label" className={`${TEXT_LINK} text-[0.8125rem]`}>
                          Ask About Packing <span aria-hidden="true">&rarr;</span>
                        </QuoteLink>
                        <Link
                          to={`/products/${p.slug}/`}
                          className="flex items-center justify-between border-t border-charcoal/10 pt-4 text-sm font-bold text-brass transition-colors hover:text-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass"
                        >
                          View Product Details <span aria-hidden="true">&rarr;</span>
                        </Link>
                      </div>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Retail vs transport on dark */}
      <section className="relative overflow-hidden bg-charcoal py-20 text-white lg:py-24" aria-labelledby="two-packs-title">
        <div className="pointer-events-none absolute inset-0" style={GRID_BG} aria-hidden="true" />
        <div className={`relative z-10 ${WRAP}`}>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-brass">Two Different Jobs</span>
            <h2 id="two-packs-title" className="mt-3 font-serif text-3xl font-bold leading-tight sm:text-4xl">Retail Packing and Transport Packing</h2>
          </div>
          <div className="relative mt-12 grid gap-6 md:grid-cols-2">
            <span className="absolute left-1/2 top-1/2 z-10 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-brass bg-charcoal font-serif text-sm font-bold text-brass md:flex" aria-hidden="true">vs</span>
            {[
              { t: "Retail packing", body: "Presents your brand and product to the end customer, and carries the labelling for your market.", icon: ICONS.box, img: IMAGES.shisha },
              { t: "Transport packing", body: "Protects the product through handling and shipment. Appearance alone does not establish suitability for transport.", icon: ICONS.truck, img: IMAGES.port },
            ].map((c) => (
              <article key={c.t} className="group overflow-hidden rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm">
                <Photo src={c.img} alt="" ratio="aspect-[16/7]" zoom />
                <p className="px-7 pt-2 text-[0.65rem] font-semibold uppercase tracking-wider text-white/55">{CAPTION}</p>
                <div className="p-7 pt-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-brass/70 text-brass"><Icon d={c.icon} className="h-6 w-6" /></span>
                  <h3 className="mt-4 font-serif text-xl font-bold text-brass">{c.t}</h3>
                  <p className="mt-2 leading-relaxed text-white/80">{c.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Private-label workflow: vertical timeline beside an image */}
      <section id="workflow" className={`${SECTION} scroll-mt-24 bg-white`} aria-labelledby="workflow-title">
        <div className={`${WRAP} grid items-start gap-12 lg:grid-cols-12 lg:gap-16`}>
          <div className="lg:sticky lg:top-28 lg:col-span-5">
            <SectionHeader
              eyebrow="Private Label"
              title="Private-Label Workflow"
              id="workflow-title"
              sub="Five steps from your brief to production release."
            />
            <figure className="relative mt-8">
              <Photo src={IMAGES.paperwork} alt="Packing documentation and artwork review" ratio="aspect-[4/3]" className="rounded-2xl border border-charcoal/10 shadow-xl" />
              <figcaption className="mt-2 text-xs text-slate">{CAPTION}</figcaption>
            </figure>
            <QuoteLink type="private-label" className={`${BTN_PRIMARY} mt-8`}>Discuss Packaging <span aria-hidden="true">&rarr;</span></QuoteLink>
          </div>

          <ol className="relative space-y-5 lg:col-span-7">
            <span className="absolute bottom-8 left-7 top-8 border-l-2 border-dashed border-brass/50" aria-hidden="true" />
            {FLOW.map(([t, d], i) => (
              <li key={t} className="relative flex gap-5">
                <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-4 border-white bg-charcoal font-serif text-lg font-bold text-brass shadow-md">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 rounded-2xl border border-charcoal/10 bg-ivory p-5 shadow-sm">
                  <h3 className="font-serif text-lg font-bold text-charcoal">{t}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate">{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Label review */}
      <section className={`${SECTION} bg-ivory`} aria-labelledby="agreed-title">
        <div className={WRAP}>
          <SectionHeader
            eyebrow="Before Printing"
            title="Agreed in Advance"
            id="agreed-title"
            sub="Importer details, barcodes, warning statements and destination-language information must be agreed before printing. Final artwork is approved by the buyer before production release."
            center
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {AGREED.map((a) => (
              <li key={a.t} className="group rounded-2xl border border-charcoal/10 border-t-4 border-t-brass bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-charcoal text-brass"><Icon d={a.icon} className="h-6 w-6" /></span>
                <p className="mt-4 font-serif text-lg font-bold text-charcoal">{a.t}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center">
            <Link to="/export-ordering/" className={TEXT_LINK}>See how export orders work <span aria-hidden="true">&rarr;</span></Link>
          </p>
        </div>
      </section>

      <ClosingCta
        id="packaging-cta"
        image={IMAGES.ship}
        title="Discuss Your Packaging"
        body="Tell us the product, market and pack weight you have in mind. The quotation confirms the agreed pack specification and minimum order quantity."
      >
        <QuoteLink type="private-label" className={`${BTN_PRIMARY} px-8 py-3.5`}>Discuss Packaging <span aria-hidden="true">&rarr;</span></QuoteLink>
        <Link to="/products/" className={`${BTN_GHOST_DARK} px-8 py-3.5`}>View Products</Link>
      </ClosingCta>
    </>
  );
}