import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import { Seo, WRAP, SECTION, QuoteLink } from "../components/ui.jsx";
import { PRODUCTS } from "../data/products.js";
import { imageFor } from "./Products.jsx"; // same product photos as the Products and Home pages
import {
  PageBanner, TrustStrip, SectionHeader, ClosingCta, Photo, Icon, ICONS, IMAGES, GRID_BG,
  BTN_PRIMARY, BTN_GHOST_DARK, TEXT_LINK,
} from "../components/PageKit.jsx";
import bulkImg from "../assets/bulk-packing.jpg";
import retailImg from "../assets/retail-packing.jpg";
import privateLabelImg from "../assets/private-label.jpg";
import transportImg from "../assets/transport-packing.jpg";
import privateLabelCCImg from "../assets/private-label-cc.jpg";

/* ------------------------------------------------------------------ *
 * CONTENT (Section 8 of the change document)
 * ------------------------------------------------------------------ */
const CAPTION = "Illustrative packaging concept";

const ROUTES = [
  { title: "Bulk Packing", body: "Packing for wholesale and industrial supply, with net weight, material and handling requirements agreed for the selected product.", icon: ICONS.box, img: bulkImg },
  { title: "Retail Packing", body: "Consumer packs with an agreed pack weight, product information and master-carton configuration.", icon: ICONS.clipboard, img: retailImg },
  { title: "Private Label", body: "Branded packaging produced against the approved artwork, pack specification and minimum quantity.", icon: ICONS.shield, img: privateLabelImg },
];

const TWO_PACKS = [
  { title: "Retail packing", body: "Presents your brand and product to the end customer, and carries the labelling for your market.", icon: ICONS.box, img: retailImg },
  { title: "Transport packing", body: "Protects the product through handling and shipment. Appearance alone does not establish suitability for transport.", icon: ICONS.truck, img: transportImg },
];

const TRUST = [
  { title: "Confirmed per Product", body: "Formats are agreed per product and transport route.", icon: ICONS.box },
  { title: "Specification Agreed", body: "Pack material, dimensions and dieline confirmed before print.", icon: ICONS.clipboard },
  { title: "Proof Before Print", body: "Print proof or packed sample approved first.", icon: ICONS.check },
  { title: "Quotation Terms", body: "Pack specification and minimum order quantity set in the quotation.", icon: ICONS.doc },
];

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

/* ------------------------------------------------------------------ *
 * Full-image card: photo fills the whole card, text sits on a dark
 * gradient so it stays readable on any image and any screen size.
 * Card grows automatically if the text is longer than the min height.
 * ------------------------------------------------------------------ */
function ImageCard({ img, alt, icon, title, body, heightClass, titleClass = "text-white" }) {
  return (
    <article
      className={`group relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-charcoal shadow-lg ${heightClass}`}
    >
      <img
        src={img}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none"
      />
      {/* readability gradient */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/5"
        aria-hidden="true"
      />
      {/* brass accent bar */}
      <span
        className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-brass transition-transform duration-500 group-hover:scale-x-100 motion-reduce:transition-none max-md:scale-x-100"
        aria-hidden="true"
      />

      <div className="p-4 sm:p-5 lg:p-6">
        <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-brass bg-charcoal/80 text-brass backdrop-blur sm:h-11 sm:w-11">
          <Icon d={icon} className="h-5 w-5" />
        </span>
        <h3 className={`mt-3 font-serif text-xl font-bold leading-tight drop-shadow sm:text-2xl ${titleClass}`}>{title}</h3>
        <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-white/90 drop-shadow sm:text-sm">{body}</p>
        <p className="mt-2.5 text-[0.6rem] font-semibold uppercase tracking-wider text-white/60">{CAPTION}</p>
      </div>
    </article>
  );
}

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

      <TrustStrip items={TRUST} />
      <Breadcrumbs trail={[{ label: "Packaging" }]} />

      {/* Three routes as full-image tiles */}
      <section className={`${SECTION} bg-white`} aria-labelledby="routes-title">
        <div className={WRAP}>
          <SectionHeader
            eyebrow="Pack Types"
            title="Packaging Options by Product"
            id="routes-title"
            sub="Review the available pack formats for your selected product. Pack weight, materials, carton configuration and print requirements are confirmed before production."
            center
          />
          <ul className="mx-auto mt-8 grid max-w-5xl gap-4 sm:mt-10 sm:gap-5 md:grid-cols-3">
            {ROUTES.map((r) => (
              <li key={r.title} className="flex">
                <ImageCard
                  img={r.img}
                  alt={`${r.title} concept`}
                  icon={r.icon}
                  title={r.title}
                  body={r.body}
                  heightClass="w-full min-h-[280px] sm:min-h-[300px] md:min-h-[360px]"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Product matrix: verified options only */}
      <section className={`${SECTION} bg-ivory`} aria-labelledby="matrix-title">
        <div className={WRAP}>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              eyebrow="By Product"
              title="Confirm Packing for Your Product"
              id="matrix-title"
              sub="Send your preferred pack weight, sales channel and destination. We will confirm suitable packaging options with the quotation."
            />
            <Link to="/products/" className={`${TEXT_LINK} shrink-0`}>View all products <span aria-hidden="true">&rarr;</span></Link>
          </div>

          {/* Equal-size compact cards: 2 per row on phones, 3 on desktop; last row centres itself */}
          <ul className="mt-8 flex flex-wrap justify-center gap-3 sm:mt-10 sm:gap-5">
            {PRODUCTS.map((p) => {
              const row = PACKING_MATRIX[p.slug];
              const fields = row ? PACK_FIELDS.filter(([k]) => row[k]) : [];
              return (
                <li
                  key={p.slug}
                  className="flex w-[calc(50%-0.375rem)] sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.85rem)]"
                >
                  <article className="group flex w-full flex-col overflow-hidden rounded-xl border border-charcoal/10 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-brass/50 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none sm:rounded-2xl">
                    <div className="relative">
                      <Photo src={imageFor(p)} alt={p.name} ratio="aspect-[4/3] sm:aspect-[16/10]" zoom className="!bg-white" />
                      <span className="absolute left-0 top-0 h-1 w-full bg-brass" aria-hidden="true" />
                    </div>

                    <div className="flex flex-1 flex-col border-t border-charcoal/10 p-3 sm:p-5">
                      <h3 className="font-serif text-[0.9375rem] font-bold leading-snug text-charcoal sm:min-h-[2.75rem] sm:text-lg">
                        {p.name}
                      </h3>

                      {fields.length > 0 ? (
                        <dl className="mt-2 grid gap-1.5 text-xs sm:mt-3 sm:gap-2 sm:text-sm">
                          {fields.map(([k, label]) => (
                            <div key={k} className="flex justify-between gap-3 border-b border-charcoal/10 pb-1.5 sm:pb-2">
                              <dt className="text-slate">{label}</dt>
                              <dd className="text-right font-semibold text-charcoal">{row[k]}</dd>
                            </div>
                          ))}
                        </dl>
                      ) : (
                        <p className="mt-1.5 text-xs leading-relaxed text-slate sm:mt-2 sm:text-sm">
                          Packaging options for this product are confirmed with your quotation.
                        </p>
                      )}

                      <div className="mt-auto flex flex-col gap-2 pt-3 sm:gap-3 sm:pt-5">
                        <QuoteLink
                          product={p.slug}
                          type="private-label"
                          className={`${TEXT_LINK} text-xs sm:text-[0.8125rem]`}
                        >
                          Ask About Packing <span aria-hidden="true">&rarr;</span>
                        </QuoteLink>
                        <Link
                          to={`/products/${p.slug}/`}
                          className="flex items-center justify-between gap-2 border-t border-charcoal/10 pt-2.5 text-xs font-bold text-brass transition-colors hover:text-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass sm:pt-3 sm:text-sm"
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

      {/* Retail vs transport on dark: full-image cards */}
      <section className="relative overflow-hidden bg-charcoal py-14 text-white sm:py-16 lg:py-20" aria-labelledby="two-packs-title">
        <div className="pointer-events-none absolute inset-0" style={GRID_BG} aria-hidden="true" />
        <div className={`relative z-10 ${WRAP}`}>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-brass">Two Different Jobs</span>
            <h2 id="two-packs-title" className="mt-3 font-serif text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">Retail Packing and Transport Packing</h2>
          </div>
          <div className="relative mx-auto mt-8 grid max-w-5xl gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2">
            <span className="absolute left-1/2 top-1/2 z-20 hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-brass bg-charcoal font-serif text-sm font-bold text-brass md:flex" aria-hidden="true">vs</span>
            {TWO_PACKS.map((c) => (
              <ImageCard
                key={c.title}
                img={c.img}
                alt={`${c.title} example`}
                icon={c.icon}
                title={c.title}
                body={c.body}
                titleClass="text-brass"
                heightClass="min-h-[300px] sm:min-h-[340px] lg:min-h-[380px]"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Private-label workflow: vertical timeline beside an image */}
      <section id="workflow" className={`${SECTION} scroll-mt-24 bg-white`} aria-labelledby="workflow-title">
        <div className={`${WRAP} grid items-start gap-8 lg:grid-cols-12 lg:gap-14`}>
          <div className="lg:sticky lg:top-28 lg:col-span-5">
            <SectionHeader
              eyebrow="Private Label"
              title="Private-Label Workflow"
              id="workflow-title"
              sub="Five steps from your brief to production release."
            />
            <figure className="relative mt-6">
              <Photo src={privateLabelCCImg} alt="Packing documentation and artwork review" ratio="aspect-[16/10]" className="rounded-2xl border border-charcoal/10 shadow-lg" />
              <figcaption className="mt-2 text-xs text-slate">{CAPTION}</figcaption>
            </figure>
            <QuoteLink type="private-label" className={`${BTN_PRIMARY} mt-6`}>Discuss Packaging <span aria-hidden="true">&rarr;</span></QuoteLink>
          </div>

          <ol className="relative space-y-4 lg:col-span-7">
            <span className="absolute bottom-6 left-[22px] top-6 border-l-2 border-dashed border-brass/50 sm:left-7" aria-hidden="true" />
            {FLOW.map(([t, d], i) => (
              <li key={t} className="relative flex gap-3 sm:gap-5">
                <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-4 border-white bg-charcoal font-serif text-sm font-bold text-brass shadow-md sm:h-14 sm:w-14 sm:text-lg">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1 rounded-2xl border border-charcoal/10 bg-ivory p-4 shadow-sm sm:p-5">
                  <h3 className="font-serif text-base font-bold text-charcoal sm:text-lg">{t}</h3>
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
          <ul className="mx-auto mt-8 grid max-w-5xl grid-cols-2 gap-3 sm:mt-10 sm:gap-5 lg:grid-cols-4">
            {AGREED.map((a) => (
              <li key={a.t} className="group rounded-2xl border border-charcoal/10 border-t-4 border-t-brass bg-white p-4 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none sm:p-5">
                <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-charcoal text-brass sm:h-12 sm:w-12"><Icon d={a.icon} className="h-5 w-5 sm:h-6 sm:w-6" /></span>
                <p className="mt-3 break-words font-serif text-sm font-bold leading-snug text-charcoal sm:text-base lg:text-lg">{a.t}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center sm:mt-8">
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
        <QuoteLink type="private-label" className={`${BTN_PRIMARY} px-6 py-3 sm:px-8 sm:py-3.5`}>Discuss Packaging <span aria-hidden="true">&rarr;</span></QuoteLink>
        <Link to="/products/" className={`${BTN_GHOST_DARK} px-6 py-3 sm:px-8 sm:py-3.5`}>View Products</Link>
      </ClosingCta>
    </>
  );
}