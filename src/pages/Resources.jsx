import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import { Seo, WRAP, SECTION, QuoteLink } from "../components/ui.jsx";
import {
  PageBanner, TrustStrip, SectionHeader, ClosingCta, Photo, ICONS, IMAGES,
  BTN_PRIMARY, BTN_GHOST_DARK, TEXT_LINK,
} from "../components/PageKit.jsx";

/* ------------------------------------------------------------------ *
 * CONTENT (Section 10 of the change document)
 * Every button says what it really does. A Download action appears ONLY
 * when a real file is published: add a `file` to the item, for example
 *   file: { href: "/documents/tds-grade-x.pdf", grade: "Grade X", revised: "March 2027", type: "PDF" }
 * The file's grade, revision date and file type are then shown beside it.
 * Never point a Download button at a general web page. Redact confidential
 * supplier or customer data before publishing any approved sample.
 * ------------------------------------------------------------------ */
const ITEMS = [
  {
    title: "Product catalogue",
    body: "Explore the product families and available formats.",
    img: IMAGES.shisha,
    action: { kind: "link", to: "/products/", label: "View Products" },
    file: null, // add { href, grade, revised, type } once an approved catalogue PDF exists
  },
  {
    title: "Technical data sheets",
    body: "Request the available technical data sheet for your proposed grade.",
    img: IMAGES.paperwork,
    action: { kind: "quote", type: "technical-documents", docs: "tds", label: "Request Technical Data Sheet" },
    file: null,
  },
  {
    title: "Safety data sheets",
    body: "Request product-specific safety information for the proposed supply.",
    img: IMAGES.port,
    action: { kind: "quote", type: "technical-documents", docs: "sds", label: "Request Safety Data Sheet" },
    file: null,
  },
  {
    title: "Analysis records",
    body: "Ask about available analysis records and any batch-specific testing requirements.",
    img: IMAGES.certification,
    action: { kind: "quote", docs: "analysis", label: "Request Analysis Records" },
    file: null,
  },
  {
    title: "Packaging information",
    body: "Review packing formats and the artwork approval process.",
    img: IMAGES.warehouse,
    action: { kind: "link", to: "/packaging-private-label/", label: "View Packaging Options" },
    file: null,
  },
];

const TRUST = [
  { title: "By Grade", body: "Request documents for the grade you are considering.", icon: ICONS.doc },
  { title: "Safety Information", body: "Product-specific safety information for the proposed supply.", icon: ICONS.shield },
  { title: "Analysis Records", body: "Ask about available records and testing requirements.", icon: ICONS.flask },
  { title: "Checked for Your Use", body: "Review each document against your product and application.", icon: ICONS.clipboard },
];

function CardAction({ action }) {
  if (action.kind === "quote") {
    return (
      <QuoteLink type={action.type} docs={action.docs} className={`${BTN_PRIMARY} w-full sm:w-auto`}>
        {action.label} <span aria-hidden="true">&rarr;</span>
      </QuoteLink>
    );
  }
  return (
    <Link to={action.to} className={`${BTN_PRIMARY} w-full sm:w-auto`}>
      {action.label} <span aria-hidden="true">&rarr;</span>
    </Link>
  );
}

export default function Resources() {
  return (
    <>
      <Seo title="Resources" description="Product information and document requests for coconut charcoal and activated carbon: data sheets, safety information and analysis records." />

      <PageBanner
        image={IMAGES.paperwork}
        eyebrow="Resources"
        title="Buyer Resources"
        body="Find product information and request documents for the grade you are considering. Technical data, safety information and analysis records should be reviewed against the specific product and intended application."
      >
        <QuoteLink type="technical-documents" className={BTN_PRIMARY}>Request Documents <span aria-hidden="true">&rarr;</span></QuoteLink>
        <Link to="/products/" className={BTN_GHOST_DARK}>View Products</Link>
      </PageBanner>

      <TrustStrip items={TRUST} />
      <Breadcrumbs trail={[{ label: "Resources" }]} />

      <section className={`${SECTION} bg-ivory`} aria-labelledby="resources-title">
        <div className={WRAP}>
          <SectionHeader eyebrow="Library" title="Find What You Need" id="resources-title" sub="View a page, or request the documents for a specific grade." />

          {/* Equal-size cards; the last row centres itself when the count is uneven */}
          <ul className="mt-12 flex flex-wrap justify-center gap-6">
            {ITEMS.map((it) => (
              <li key={it.title} className="flex w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
                <article className="group flex w-full flex-col overflow-hidden rounded-2xl border border-charcoal/10 bg-white shadow-sm transition-all hover:border-brass/50 hover:shadow-xl">
                  <div className="relative">
                    <Photo src={it.img} alt="" ratio="aspect-[16/8]" zoom />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" aria-hidden="true" />
                    <span className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-brass transition-transform duration-500 group-hover:scale-x-100 motion-reduce:transition-none" aria-hidden="true" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-serif text-xl font-bold text-charcoal">{it.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">{it.body}</p>

                    {it.file && (
                      <p className="mt-4 text-xs text-slate">
                        {it.file.grade} &middot; Revised {it.file.revised} &middot; {it.file.type}
                      </p>
                    )}

                    <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                      <CardAction action={it.action} />
                      {it.file && (
                        <a href={it.file.href} download className={TEXT_LINK}>Download {it.file.type}</a>
                      )}
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ClosingCta id="resources-cta" image={IMAGES.ship} title="Need a Document for a Specific Grade?" body="Tell us the grade and the documents you need.">
        <QuoteLink type="technical-documents" className={`${BTN_PRIMARY} px-8 py-3.5`}>Request Documents <span aria-hidden="true">&rarr;</span></QuoteLink>
      </ClosingCta>
    </>
  );
}