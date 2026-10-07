import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import { Seo, WRAP, SECTION, QuoteLink } from "../components/ui.jsx";
import {
  PhotoBanner, TrustStrip, SectionHeader, ClosingCta, Photo, ICONS, IMAGES,
  BTN_PRIMARY, BTN_GHOST_DARK,
} from "../components/PageKit.jsx";

const ITEMS = [
  ["Product catalogue", "Overview of the product families and formats.", "/products/", IMAGES.shisha],
  ["Technical data sheets", "Dated sheets for approved grades. Request the grade you need.", "/quality/", IMAGES.paperwork],
  ["Safety data sheets", "Product-specific SDS from the current manufacturer record.", "/quality/", IMAGES.logistics],
  ["Packaging briefing", "How pack format, artwork and MOQ are agreed.", "/packaging-private-label/", IMAGES.warehouse],
];

const TRUST = [
  { title: "Issued Per Grade", body: "Documents are issued for each grade.", icon: ICONS.doc },
  { title: "On Request", body: "Ask for the grade and documents you need.", icon: ICONS.clipboard },
  { title: "Dated", body: "Each document carries its date.", icon: ICONS.check },
  { title: "Scope Stated", body: "Each document states what it covers.", icon: ICONS.shield },
];

export default function Resources() {
  return (
    <>
      <Seo title="Resources" description="Catalogue, technical data sheets, safety data sheets and buying guidance for coconut charcoal and activated carbon." />

      <PhotoBanner
        image={IMAGES.paperwork}
        eyebrow="Resources"
        title="Buyer Resources"
        body="Approved documents are issued for each grade on request, with the date and scope they cover."
      >
        <QuoteLink className={BTN_PRIMARY}>Request Documents <span aria-hidden="true">&rarr;</span></QuoteLink>
        <Link to="/products/" className={BTN_GHOST_DARK}>View Products</Link>
      </PhotoBanner>

      <TrustStrip items={TRUST} />
      <Breadcrumbs trail={[{ label: "Resources" }]} />

      <section className={`${SECTION} bg-ivory`} aria-labelledby="resources-title">
        <div className={WRAP}>
          <SectionHeader eyebrow="Library" title="Find What You Need" id="resources-title" sub="Open a resource, or request the documents for a specific grade." />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2">
            {ITEMS.map(([t, d, to, img]) => (
              <li key={t} className="flex">
                <Link to={to} className="group flex w-full flex-col overflow-hidden rounded-2xl border border-charcoal/10 bg-white shadow-sm transition-all hover:border-brass/50 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass">
                  <div className="relative">
                    <Photo src={img} alt="" ratio="aspect-[16/8]" zoom />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" aria-hidden="true" />
                    <span className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-brass transition-transform duration-500 group-hover:scale-x-100 motion-reduce:transition-none" aria-hidden="true" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-serif text-xl font-bold text-charcoal">{t}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">{d}</p>
                    <span className="mt-4 text-sm font-bold text-brass transition-transform group-hover:translate-x-1 motion-reduce:transform-none">Open <span aria-hidden="true">&rarr;</span></span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ClosingCta id="resources-cta" image={IMAGES.ship} title="Need a Document for a Specific Grade?" body="Tell us the grade and the documents you need.">
        <QuoteLink className={`${BTN_PRIMARY} px-8 py-3.5`}>Request Documents <span aria-hidden="true">&rarr;</span></QuoteLink>
      </ClosingCta>
    </>
  );
}