// import { Link } from "react-router-dom";
// import Breadcrumbs from "../components/Breadcrumbs.jsx";
// import { Seo, WRAP, SECTION, QuoteLink } from "../components/ui.jsx";
// import {
//   PageBanner, TrustStrip, SectionHeader, ClosingCta, Photo, Icon, ICONS, IMAGES, GRID_BG,
//   BTN_PRIMARY, BTN_GHOST_DARK, TEXT_LINK,
// } from "../components/PageKit.jsx";

// /* ------------------------------------------------------------------ *
//  * CONTENT — plan: a packaging matrix (formats to DISCUSS, never
//  * unvalidated sizes), retail vs transport packing, and the private-label
//  * workflow: brief → pack spec and dieline → artwork proof → packed
//  * sample or approved proof → production release.
//  * ------------------------------------------------------------------ */
// const ROUTES = [
//   { title: "", body: " packing for your selected grade.", icon: ICONS.box, img: IMAGES.warehouse },
//   { title: "Retail", body: "Retail-ready packs for your sales channel.", icon: ICONS.clipboard, img: IMAGES.shisha },
//   { title: "Private Label", body: "Your brand on agreed pack formats.", icon: ICONS.shield, img: IMAGES.paperwork },
// ];

// const TRUST = [
//   { title: "Confirmed per Product", body: "Formats are agreed per product and transport route.", icon: ICONS.box },
//   { title: "Dieline Agreed", body: "Pack specification and dieline confirmed with the supplier.", icon: ICONS.clipboard },
//   { title: "Proof Before Print", body: "Packed sample or approved proof reviewed first.", icon: ICONS.check },
//   { title: "Quotation Terms", body: "Pack format and minimum quantity set with the quotation.", icon: ICONS.doc },
// ];

// const MATRIX = [
//   { product: "Coconut shell activated carbon", formats: ["Bulk bags", "Master packs"], img: IMAGES.carbon },
//   { product: "Hookah and shisha cubes", formats: ["Retail packs", "Master cartons", "Private label"], img: IMAGES.shisha },
//   { product: "Pillow briquettes", formats: ["Retail packs", "Master cartons", "Private label"], img: IMAGES.bbq },
//   { product: "Hexagonal briquettes", formats: ["Retail packs", "Master cartons", "Private label"], img: IMAGES.hex },
//   { product: "Coconut shell charcoal", formats: ["Bags", "Bulk bags"], img: IMAGES.hex },
// ];

// const FLOW = [
//   ["Buyer brief", "Your brand, market, pack format and quantities."],
//   ["Pack specification and dieline", "We confirm the pack specification and dieline with the supplier."],
//   ["Artwork proof", "You supply or approve artwork."],
//   ["Packed sample or approved proof", "Reviewed before production."],
//   ["Production release", "Production proceeds against the approved pack and artwork."],
// ];

// const AGREED = [
//   { t: "Barcodes", icon: ICONS.clipboard },
//   { t: "Destination-language copy", icon: ICONS.globe },
//   { t: "Warning labels", icon: ICONS.shield },
//   { t: "Importer details", icon: ICONS.doc },
// ];

// export default function Packaging() {
//   return (
//     <>
//       <Seo
//         title="Packaging and Private Label"
//         description="Bulk, retail and private-label packing for coconut charcoal and activated carbon, agreed with your quotation."
//       />

//       <PageBanner
//         eyebrow="Packaging"
//         title="Packaging and Private Label"
//         body="Discuss bulk and private-label packaging for your selected product. Pack format and minimum quantity are confirmed with the quotation."
//       >
//         <QuoteLink product="" className={BTN_PRIMARY}>Discuss Packaging <span aria-hidden="true">&rarr;</span></QuoteLink>
//         <a href="#workflow" className={BTN_GHOST_DARK}>Private-Label Workflow</a>
//       </PageBanner>

//       <Breadcrumbs trail={[{ label: "Packaging" }]} />
//       <TrustStrip items={TRUST} />

//       {/* Three routes as photo tiles */}
//       <section className={`${SECTION} bg-white`} aria-labelledby="routes-title">
//         <div className={WRAP}>
//           <SectionHeader
//             eyebrow="Pack Formats"
//             title="Pack Formats We Can Discuss"
//             id="routes-title"
//             sub="Sizes, materials, net and gross mass, pallet option and print MOQ are confirmed per product and transport route in your quotation."
//             center
//           />
//           <ul className="mt-12 grid gap-6 md:grid-cols-3">
//             {ROUTES.map((r) => (
//               <li key={r.title} className="group relative isolate overflow-hidden rounded-2xl shadow-lg">
//                 <Photo src={r.img} alt={`${r.title} packing`} ratio="aspect-[4/5]" zoom className="!bg-charcoal" />
//                 <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/10" aria-hidden="true" />
//                 <div className="absolute inset-x-0 bottom-0 p-6">
//                   <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-brass bg-charcoal/80 text-brass backdrop-blur"><Icon d={r.icon} className="h-6 w-6" /></span>
//                   <h3 className="mt-4 font-serif text-2xl font-bold text-white">{r.title}</h3>
//                   <p className="mt-1 text-sm leading-relaxed text-white/80">{r.body}</p>
//                 </div>
//                 <span className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-brass transition-transform duration-500 group-hover:scale-x-100 motion-reduce:transition-none" aria-hidden="true" />
//               </li>
//             ))}
//           </ul>
//         </div>
//       </section>

//       {/* Product matrix as cards */}
//       <section className={`${SECTION} bg-ivory`} aria-labelledby="matrix-title">
//         <div className={WRAP}>
//           <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
//             <SectionHeader
//               eyebrow="By Product"
//               title="Formats to Discuss for Each Product"
//               id="matrix-title"
//               sub="Retail packing and transport packing serve different functions, and each is confirmed separately for your order."
//             />
//             <Link to="/products/" className={TEXT_LINK}>View all products <span aria-hidden="true">&rarr;</span></Link>
//           </div>

//           <ul className="mt-10 grid gap-5 md:grid-cols-2">
//             {MATRIX.map((m, i) => (
//               <li key={m.product} className={`group flex overflow-hidden rounded-2xl border border-charcoal/10 bg-white shadow-sm transition-all hover:border-brass/50 hover:shadow-lg ${i === MATRIX.length - 1 && MATRIX.length % 2 ? "md:col-span-2" : ""}`}>
//                 <div className="w-32 shrink-0 sm:w-44">
//                   <Photo src={m.img} alt="" ratio="h-full min-h-[8.5rem]" zoom />
//                 </div>
//                 <div className="flex flex-1 flex-col justify-center p-5 sm:p-6">
//                   <h3 className="font-serif text-lg font-bold leading-snug text-charcoal">{m.product}</h3>
//                   <ul className="mt-3 flex flex-wrap gap-2" aria-label="Formats to discuss">
//                     {m.formats.map((f) => (
//                       <li key={f} className="rounded-full border border-brass/50 bg-brass/10 px-3 py-1 text-xs font-semibold text-charcoal">{f}</li>
//                     ))}
//                   </ul>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </section>

//       {/* Retail vs transport on dark */}
//       <section className="relative overflow-hidden bg-charcoal py-20 text-white lg:py-24" aria-labelledby="two-packs-title">
//         <div className="pointer-events-none absolute inset-0" style={GRID_BG} aria-hidden="true" />
//         <div className={`relative z-10 ${WRAP}`}>
//           <div className="mx-auto max-w-3xl text-center">
//             <span className="text-xs font-bold uppercase tracking-widest text-brass">Two Different Jobs</span>
//             <h2 id="two-packs-title" className="mt-3 font-serif text-3xl font-bold leading-tight sm:text-4xl">Retail Packing and Transport Packing</h2>
//           </div>
//           <div className="relative mt-12 grid gap-6 md:grid-cols-2">
//             <span className="absolute left-1/2 top-1/2 z-10 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-brass bg-charcoal font-serif text-sm font-bold text-brass md:flex" aria-hidden="true">vs</span>
//             {[
//               { t: "Retail packing", body: "Presents your brand and product to the end customer, and carries the labelling for your market.", icon: ICONS.box, img: IMAGES.shisha },
//               { t: "Transport packing", body: "Protects the product through handling and shipment. Appearance alone does not establish suitability for transport.", icon: ICONS.truck, img: IMAGES.port },
//             ].map((c) => (
//               <article key={c.t} className="group overflow-hidden rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm">
//                 <Photo src={c.img} alt="" ratio="aspect-[16/7]" zoom />
//                 <div className="p-7">
//                   <span className="flex h-12 w-12 items-center justify-center rounded-full border border-brass/70 text-brass"><Icon d={c.icon} className="h-6 w-6" /></span>
//                   <h3 className="mt-4 font-serif text-xl font-bold text-brass">{c.t}</h3>
//                   <p className="mt-2 leading-relaxed text-white/80">{c.body}</p>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Private-label workflow: vertical timeline beside an image */}
//       <section id="workflow" className={`${SECTION} scroll-mt-24 bg-white`} aria-labelledby="workflow-title">
//         <div className={`${WRAP} grid items-start gap-12 lg:grid-cols-12 lg:gap-16`}>
//           <div className="lg:sticky lg:top-28 lg:col-span-5">
//             <SectionHeader
//               eyebrow="Private Label"
//               title="Private-Label Workflow"
//               id="workflow-title"
//               sub="Five steps from your brief to production release."
//             />
//             <div className="relative mt-8">
//               <Photo src={IMAGES.paperwork} alt="Packing documentation and artwork review" ratio="aspect-[4/3]" className="rounded-2xl border border-charcoal/10 shadow-xl" />
//               <div className="absolute -bottom-5 right-4 rounded-xl border-l-4 border-brass bg-charcoal px-5 py-4 text-white shadow-2xl">
//                 <p className="font-serif text-lg font-bold">Brief to release</p>
//                 <p className="text-xs text-white/75">Approved pack and artwork first</p>
//               </div>
//             </div>
//             <QuoteLink product="" className={`${BTN_PRIMARY} mt-10`}>Discuss Packaging <span aria-hidden="true">&rarr;</span></QuoteLink>
//           </div>

//           <ol className="relative space-y-5 lg:col-span-7">
//             <span className="absolute bottom-8 left-7 top-8 border-l-2 border-dashed border-brass/50" aria-hidden="true" />
//             {FLOW.map(([t, d], i) => (
//               <li key={t} className="relative flex gap-5">
//                 <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-4 border-white bg-charcoal font-serif text-lg font-bold text-brass shadow-md">
//                   {String(i + 1).padStart(2, "0")}
//                 </span>
//                 <div className="flex-1 rounded-2xl border border-charcoal/10 bg-ivory p-5 shadow-sm">
//                   <h3 className="font-serif text-lg font-bold text-charcoal">{t}</h3>
//                   <p className="mt-1 text-sm leading-relaxed text-slate">{d}</p>
//                 </div>
//               </li>
//             ))}
//           </ol>
//         </div>
//       </section>

//       {/* Agreed in advance */}
//       <section className={`${SECTION} bg-ivory`} aria-labelledby="agreed-title">
//         <div className={WRAP}>
//           <SectionHeader
//             eyebrow="Before Printing"
//             title="Agreed in Advance"
//             id="agreed-title"
//             sub="We agree in advance who supplies each item below. Buyer approval and applicable labelling requirements are resolved before printing."
//             center
//           />
//           <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
//             {AGREED.map((a) => (
//               <li key={a.t} className="group rounded-2xl border border-charcoal/10 border-t-4 border-t-brass bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none">
//                 <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-charcoal text-brass"><Icon d={a.icon} className="h-6 w-6" /></span>
//                 <p className="mt-4 font-serif text-lg font-bold text-charcoal">{a.t}</p>
//               </li>
//             ))}
//           </ul>
//           <p className="mt-8 text-center">
//             <Link to="/export-ordering/" className={TEXT_LINK}>See how export orders work <span aria-hidden="true">&rarr;</span></Link>
//           </p>
//         </div>
//       </section>

//       <ClosingCta
//         id="packaging-cta"
//         image={IMAGES.ship}
//         title="Discuss Your Packaging"
//         body="Tell us the product, market and pack format you have in mind. Pack format and minimum quantity are confirmed with the quotation."
//       >
//         <QuoteLink product="" className={`${BTN_PRIMARY} px-8 py-3.5`}>Discuss Packaging <span aria-hidden="true">&rarr;</span></QuoteLink>
//         <Link to="/products/" className={`${BTN_GHOST_DARK} px-8 py-3.5`}>View Products</Link>
//       </ClosingCta>
//     </>
//   );
// }










import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import { Seo, WRAP, SECTION, QuoteLink } from "../components/ui.jsx";
import { PRODUCT_IMG } from "./Products.jsx"; // same product photos as the Products page
import {
  PageBanner, TrustStrip, SectionHeader, ClosingCta, Photo, Icon, ICONS, IMAGES, GRID_BG,
  BTN_PRIMARY, BTN_GHOST_DARK, TEXT_LINK,
} from "../components/PageKit.jsx";

/* ------------------------------------------------------------------ *
 * CONTENT — plan: a packaging matrix (formats to DISCUSS, never
 * unvalidated sizes), retail vs transport packing, and the private-label
 * workflow: brief → pack spec and dieline → artwork proof → packed
 * sample or approved proof → production release.
 * ------------------------------------------------------------------ */
const ROUTES = [
  { title: "Bulk", body: "Bulk packing for your selected grade.", icon: ICONS.box, img: IMAGES.warehouse },
  { title: "Retail", body: "Retail-ready packs for your sales channel.", icon: ICONS.clipboard, img: IMAGES.shisha },
  { title: "Private Label", body: "Your brand on agreed pack formats.", icon: ICONS.shield, img: IMAGES.paperwork },
];

const TRUST = [
  { title: "Confirmed per Product", body: "Formats are agreed per product and transport route.", icon: ICONS.box },
  { title: "Dieline Agreed", body: "Pack specification and dieline confirmed with the supplier.", icon: ICONS.clipboard },
  { title: "Proof Before Print", body: "Packed sample or approved proof reviewed first.", icon: ICONS.check },
  { title: "Quotation Terms", body: "Pack format and minimum quantity set with the quotation.", icon: ICONS.doc },
];

const MATRIX = [
  { product: "Coconut shell activated carbon", slug: "coconut-shell-activated-carbon", formats: ["Bulk bags", "Master packs"] },
  { product: "Hookah and shisha cubes", slug: "hookah-charcoal-cubes", formats: ["Retail packs", "Master cartons", "Private label"] },
  { product: "Pillow briquettes", slug: "pillow-charcoal-briquettes", formats: ["Retail packs", "Master cartons", "Private label"] },
  { product: "Hexagonal briquettes", slug: "hexagonal-charcoal-briquettes", formats: ["Retail packs", "Master cartons", "Private label"] },
  { product: "Coconut shell charcoal", slug: "coconut-shell-charcoal", formats: ["Bags", "Bulk bags"] },
];

const FLOW = [
  ["Buyer brief", "Your brand, market, pack format and quantities."],
  ["Pack specification and dieline", "We confirm the pack specification and dieline with the supplier."],
  ["Artwork proof", "You supply or approve artwork."],
  ["Packed sample or approved proof", "Reviewed before production."],
  ["Production release", "Production proceeds against the approved pack and artwork."],
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
        body="Discuss bulk and private-label packaging for your selected product. Pack format and minimum quantity are confirmed with the quotation."
      >
        <QuoteLink product="" className={BTN_PRIMARY}>Discuss Packaging <span aria-hidden="true">&rarr;</span></QuoteLink>
        <a href="#workflow" className={BTN_GHOST_DARK}>Private-Label Workflow</a>
      </PageBanner>

      <Breadcrumbs trail={[{ label: "Packaging" }]} />
      <TrustStrip items={TRUST} />

      {/* Three routes as photo tiles */}
      <section className={`${SECTION} bg-white`} aria-labelledby="routes-title">
        <div className={WRAP}>
          <SectionHeader
            eyebrow="Pack Formats"
            title="Pack Formats We Can Discuss"
            id="routes-title"
            sub="Sizes, materials, net and gross mass, pallet option and print MOQ are confirmed per product and transport route in your quotation."
            center
          />
          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {ROUTES.map((r) => (
              <li key={r.title} className="group relative isolate overflow-hidden rounded-2xl shadow-lg">
                <Photo src={r.img} alt={`${r.title} packing`} ratio="aspect-[4/5]" zoom className="!bg-charcoal" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/10" aria-hidden="true" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-brass bg-charcoal/80 text-brass backdrop-blur"><Icon d={r.icon} className="h-6 w-6" /></span>
                  <h3 className="mt-4 font-serif text-2xl font-bold text-white">{r.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/80">{r.body}</p>
                </div>
                <span className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-brass transition-transform duration-500 group-hover:scale-x-100 motion-reduce:transition-none" aria-hidden="true" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Product matrix as cards */}
      <section className={`${SECTION} bg-ivory`} aria-labelledby="matrix-title">
        <div className={WRAP}>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              eyebrow="By Product"
              title="Formats to Discuss for Each Product"
              id="matrix-title"
              sub="Retail packing and transport packing serve different functions, and each is confirmed separately for your order."
            />
            <Link to="/products/" className={TEXT_LINK}>View all products <span aria-hidden="true">&rarr;</span></Link>
          </div>

          {/* Equal-size cards; the last row centres itself when the count is uneven */}
          <ul className="mt-12 flex flex-wrap justify-center gap-6">
            {MATRIX.map((m) => (
              <li key={m.slug} className="flex w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
                <article className="group flex w-full flex-col overflow-hidden rounded-2xl border border-charcoal/10 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-brass/50 hover:shadow-xl motion-reduce:transform-none motion-reduce:transition-none">
                  <div className="relative">
                    <Photo
                      src={PRODUCT_IMG[m.slug]}
                      alt={m.product}
                      ratio="aspect-[4/3]"
                      zoom
                      className="!bg-white"
                    />
                    <span className="absolute left-0 top-0 h-1 w-full bg-brass" aria-hidden="true" />
                  </div>

                  <div className="flex flex-1 flex-col border-t border-charcoal/10 p-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-brass">Formats to discuss</p>
                    <h3 className="mt-2 min-h-[3.25rem] font-serif text-lg font-bold leading-snug text-charcoal">{m.product}</h3>

                    <ul className="mt-3 flex flex-wrap gap-2" aria-label={`Formats to discuss for ${m.product}`}>
                      {m.formats.map((f) => (
                        <li key={f} className="rounded-full border border-brass/50 bg-brass/10 px-3 py-1 text-xs font-semibold text-charcoal">{f}</li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-6">
                      <Link
                        to={`/products/${m.slug}/`}
                        className="flex items-center justify-between border-t border-charcoal/10 pt-4 text-sm font-bold text-brass transition-colors hover:text-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass"
                      >
                        View Specifications <span aria-hidden="true">&rarr;</span>
                      </Link>
                    </div>
                  </div>
                </article>
              </li>
            ))}
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
                <div className="p-7">
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
            <div className="relative mt-8">
              <Photo src={IMAGES.paperwork} alt="Packing documentation and artwork review" ratio="aspect-[4/3]" className="rounded-2xl border border-charcoal/10 shadow-xl" />
              <div className="absolute -bottom-5 right-4 rounded-xl border-l-4 border-brass bg-charcoal px-5 py-4 text-white shadow-2xl">
                <p className="font-serif text-lg font-bold">Brief to release</p>
                <p className="text-xs text-white/75">Approved pack and artwork first</p>
              </div>
            </div>
            <QuoteLink product="" className={`${BTN_PRIMARY} mt-10`}>Discuss Packaging <span aria-hidden="true">&rarr;</span></QuoteLink>
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

      {/* Agreed in advance */}
      <section className={`${SECTION} bg-ivory`} aria-labelledby="agreed-title">
        <div className={WRAP}>
          <SectionHeader
            eyebrow="Before Printing"
            title="Agreed in Advance"
            id="agreed-title"
            sub="We agree in advance who supplies each item below. Buyer approval and applicable labelling requirements are resolved before printing."
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
        body="Tell us the product, market and pack format you have in mind. Pack format and minimum quantity are confirmed with the quotation."
      >
        <QuoteLink product="" className={`${BTN_PRIMARY} px-8 py-3.5`}>Discuss Packaging <span aria-hidden="true">&rarr;</span></QuoteLink>
        <Link to="/products/" className={`${BTN_GHOST_DARK} px-8 py-3.5`}>View Products</Link>
      </ClosingCta>
    </>
  );
}