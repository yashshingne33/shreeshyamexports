import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import { Seo, WRAP, SECTION, QuoteLink } from "../components/ui.jsx";
import {
  PageBanner, TrustStrip, SectionHeader, ClosingCta, Icon, ICONS, IMAGES,
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
 *
 * `icon`  = the badge icon at the top of the card.
 * `deco`  = faint corner artwork (leaf | dots | hex | waves).
 * ------------------------------------------------------------------ */
const ITEMS = [
  {
    title: "Product catalogue",
    body: "Explore the product families and available formats.",
    icon: ICONS.clipboard,
    deco: "leaf",
    action: { kind: "link", to: "/products/", label: "View Products" },
    file: null, // add { href, grade, revised, type } once an approved catalogue PDF exists
  },
  {
    title: "Technical data sheets",
    body: "Request the available technical data sheet for your proposed grade.",
    icon: ICONS.doc,
    deco: "dots",
    action: { kind: "quote", type: "technical-documents", docs: "tds", label: "Request Technical Data Sheet" },
    file: null,
  },
  {
    title: "Safety data sheets",
    body: "Request product-specific safety information for the proposed supply.",
    icon: ICONS.shield,
    deco: "hex",
    action: { kind: "quote", type: "technical-documents", docs: "sds", label: "Request Safety Data Sheet" },
    file: null,
  },
  {
    title: "Analysis records",
    body: "Ask about available analysis records and any batch-specific testing requirements.",
    icon: ICONS.flask,
    deco: "waves",
    action: { kind: "quote", docs: "analysis", label: "Request Analysis Records" },
    file: null,
  },
  {
    title: "Packaging information",
    body: "Review packing formats and the artwork approval process.",
    icon: ICONS.box,
    deco: "leaf",
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

/* Compact button used inside the cards */
const BTN_CARD = `${BTN_PRIMARY} w-full !px-4 !py-2.5 !text-[0.8125rem] sm:w-auto`;

function CardAction({ action }) {
  if (action.kind === "quote") {
    return (
      <QuoteLink type={action.type} docs={action.docs} className={BTN_CARD}>
        {action.label} <span aria-hidden="true">&rarr;</span>
      </QuoteLink>
    );
  }
  return (
    <Link to={action.to} className={BTN_CARD}>
      {action.label} <span aria-hidden="true">&rarr;</span>
    </Link>
  );
}

/* Top-right corner wave: dark on odd cards, soft brass tint on even cards */
function CornerWave({ dark }) {
  return (
    <svg
      className="pointer-events-none absolute right-0 top-0 h-16 w-24 sm:h-20 sm:w-28"
      viewBox="0 0 120 80"
      fill="none"
      aria-hidden="true"
    >
      <g className={dark ? "text-charcoal" : "text-brass/20"}>
        <path d="M0 0H120V80C100 60 70 55 50 30C40 16 20 6 0 0Z" fill="currentColor" />
      </g>
      <g className="text-brass">
        <path d="M0 6C18 12 34 22 44 36C62 60 94 66 120 88" stroke="currentColor" strokeWidth="1" opacity="0.7" />
      </g>
    </svg>
  );
}

/* Bottom-right faint artwork */
function Deco({ kind }) {
  const common = {
    className: "pointer-events-none absolute bottom-3 right-3 h-14 w-14 text-brass/35 sm:h-16 sm:w-16",
    viewBox: "0 0 64 64",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  if (kind === "dots") {
    return (
      <svg {...common} fill="currentColor" stroke="none">
        {[0, 1, 2, 3].flatMap((r) =>
          [0, 1, 2, 3].map((c) => <circle key={`${r}-${c}`} cx={10 + c * 14} cy={10 + r * 14} r="1.5" />)
        )}
      </svg>
    );
  }
  if (kind === "hex") {
    return (
      <svg {...common}>
        <path d="M22 8l12 7v14l-12 7-12-7V15z" />
        <path d="M44 28l12 7v14l-12 7-12-7V35z" />
      </svg>
    );
  }
  if (kind === "waves") {
    return (
      <svg {...common}>
        <path d="M4 48C16 38 28 58 40 48S54 40 62 44" />
        <path d="M4 38C16 28 28 48 40 38S54 30 62 34" />
        <path d="M4 28C16 18 28 38 40 28S54 20 62 24" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M12 58C16 40 28 22 52 8" />
      <path d="M22 42C14 38 12 30 14 24C22 26 26 34 22 42Z" />
      <path d="M33 30C27 24 27 16 31 10C37 14 39 22 33 30Z" />
      <path d="M32 48C40 46 46 40 48 32C40 32 34 38 32 48Z" />
    </svg>
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
          <ul className="mx-auto mt-8 flex max-w-6xl flex-wrap justify-center gap-4 sm:mt-10 sm:gap-5">
            {ITEMS.map((it, i) => (
              <li key={it.title} className="flex w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.85rem)]">
                <article className="group relative isolate flex w-full flex-col overflow-hidden rounded-2xl border border-charcoal/10 bg-gradient-to-br from-white to-ivory shadow-sm transition-all hover:-translate-y-1 hover:border-brass/50 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none">
                  <CornerWave dark={i % 2 === 0} />
                  <Deco kind={it.deco} />

                  <div className="relative z-10 flex flex-1 flex-col p-5 sm:p-6">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brass/15 text-brass sm:h-12 sm:w-12">
                      <Icon d={it.icon} className="h-5 w-5 sm:h-6 sm:w-6" />
                    </span>

                    <h3 className="mt-4 font-serif text-lg font-bold leading-snug text-charcoal sm:text-xl">{it.title}</h3>
                    <span className="mt-2 block h-0.5 w-8 bg-brass" aria-hidden="true" />
                    <p className="mt-3 flex-1 pr-10 text-sm leading-relaxed text-slate sm:pr-8">{it.body}</p>

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
        <QuoteLink type="technical-documents" className={`${BTN_PRIMARY} px-6 py-3 sm:px-8 sm:py-3.5`}>Request Documents <span aria-hidden="true">&rarr;</span></QuoteLink>
      </ClosingCta>
    </>
  );
}