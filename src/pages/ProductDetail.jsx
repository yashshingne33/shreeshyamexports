import { Link, Navigate, useParams } from "react-router-dom";
import { getProduct, PRODUCTS, faqsFor } from "../data/products.js";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import FaqAccordion from "../components/FaqAccordion.jsx";
import { Seo, WRAP, SECTION, CARD, ProductVisual, QuoteLink } from "../components/ui.jsx";

/* ------------------------------------------------------------------ *
 * SHARED STYLES (same tokens as the homepage, header and footer)
 * ------------------------------------------------------------------ */
const EDGE = "w-full px-6 sm:px-10 lg:px-16 xl:px-24";
const FOCUS = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass";
const BTN_PRIMARY =
  "inline-flex items-center justify-center gap-2 rounded-md bg-brass px-6 py-3 text-sm font-bold text-charcoal shadow-sm transition-colors hover:bg-[#9a7e4b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";
const BTN_GHOST_DARK =
  "inline-flex items-center justify-center gap-2 rounded-md border border-white/40 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";
const BTN_GHOST_LIGHT =
  "inline-flex items-center justify-center gap-2 rounded-md border border-charcoal/25 px-6 py-3 text-sm font-medium text-charcoal transition-colors hover:border-charcoal " + FOCUS;

// Quick-facts strip under the hero (wording from the plan's buyer-assurance sections)
const FACTS = [
  { title: "Documents", body: "Technical and safety data sheets for approved grades.", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
  { title: "Packaging", body: "Bulk, retail and private-label packing can be discussed.", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
  { title: "Export Coordination", body: "Sample review, quotation and shipment support.", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
];

const Icon = ({ d, className = "h-5 w-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d={d} />
  </svg>
);

function SectionHeader({ eyebrow, title, sub, id, className = "" }) {
  return (
    <div className={`max-w-3xl ${className}`}>
      <span className="text-xs font-bold uppercase tracking-widest text-brass">{eyebrow}</span>
      <h2 id={id} className="mt-3 font-serif text-3xl font-bold leading-tight text-charcoal sm:text-4xl">{title}</h2>
      {sub && <p className="mt-4 text-lg leading-relaxed text-slate">{sub}</p>}
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const p = getProduct(slug);
  if (!p) return <Navigate to="/products/" replace />;

  const spec = p.approvedSpec; // set only when a dated, owner-approved record exists
  // Same-family products first, then the rest.
  const related = PRODUCTS.filter((x) => x.slug !== p.slug)
    .sort((a, b) => (b.family === p.family) - (a.family === p.family))
    .slice(0, 3);

  return (
    <>
      <Seo title={p.name} description={p.intro.slice(0, 155)} />
      <Breadcrumbs trail={[{ label: "Products", to: "/products/" }, { label: p.shortName }]} />

      {/* Hero: text left, product right (same language as the homepage hero) */}
      <section className="bg-charcoal text-white" aria-labelledby="product-title">
        <div className={`${EDGE} grid items-center gap-10 py-12 sm:py-14 lg:grid-cols-2 lg:gap-14 lg:py-16`}>
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-brass" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-widest text-brass">{p.tag}</span>
            </div>
            <h1 id="product-title" className="mt-4 font-serif text-3xl font-bold leading-[1.1] sm:text-4xl lg:text-5xl">{p.name}</h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">{p.intro}</p>

            {p.applications?.length > 0 && (
              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Applications">
                {p.applications.map((a) => (
                  <li key={a} className="rounded-full border border-white/25 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-white/90">{a}</li>
                ))}
              </ul>
            )}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <QuoteLink product={p.slug} className={BTN_PRIMARY}>Request this Product <span aria-hidden="true">&rarr;</span></QuoteLink>
              {spec?.tdsUrl ? (
                <a href={spec.tdsUrl} download className={BTN_GHOST_DARK}>Download TDS</a>
              ) : (
                <QuoteLink product={p.slug} className={BTN_GHOST_DARK}>Request Grade Details</QuoteLink>
              )}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl">
              <ProductVisual product={p} className="aspect-[4/3]" />
            </div>
          </div>
        </div>

        {/* Quick facts */}
        <div className="border-t-2 border-brass bg-ivory text-charcoal">
          <ul className={`${EDGE} grid sm:grid-cols-3 sm:divide-x sm:divide-charcoal/10`}>
            {FACTS.map((f, i) => (
              <li key={f.title} className={`flex items-center gap-4 py-5 ${i > 0 ? "sm:pl-8" : ""} ${i < FACTS.length - 1 ? "sm:pr-8" : ""}`}>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brass/60 bg-white text-brass shadow-sm">
                  <Icon d={f.icon} />
                </span>
                <div className="min-w-0">
                  <p className="font-serif text-base font-bold leading-tight">{f.title}</p>
                  <p className="mt-1 text-[0.8125rem] leading-snug text-slate">{f.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Technical specification (approved records only) */}
      <section id="specifications" className={`${SECTION} scroll-mt-24 bg-white`} aria-labelledby="spec-title">
        <div className={WRAP}>
          <SectionHeader
            eyebrow="Technical Specification"
            title="Specifications You Can Review"
            id="spec-title"
            sub={spec ? undefined : "Share your required values and we will recommend a grade. These are the parameters buyers typically specify."}
          />

          {spec ? (
            <>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-brass/50 bg-brass/10 px-4 py-1.5 text-sm font-bold text-charcoal">Grade {spec.grade}</span>
                <span className="text-sm font-medium text-slate">Revised {spec.revised}</span>
                {spec.tdsUrl && (
                  <a href={spec.tdsUrl} download className={`ml-auto text-sm font-bold text-brass underline decoration-2 underline-offset-4 hover:text-charcoal ${FOCUS}`}>
                    Download TDS
                  </a>
                )}
              </div>

              <div className="mt-5 overflow-x-auto rounded-2xl border border-charcoal/10 bg-white shadow-sm" tabIndex={0} role="region" aria-label="Technical specification table">
                <table className="w-full min-w-[600px] text-left text-sm">
                  <thead className="border-b-2 border-brass bg-ivory text-xs font-bold uppercase tracking-wide text-charcoal">
                    <tr>
                      <th scope="col" className="px-5 py-4">Parameter</th>
                      <th scope="col" className="px-5 py-4">Limit or typical value</th>
                      <th scope="col" className="px-5 py-4">Unit and basis</th>
                      <th scope="col" className="px-5 py-4">Method</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-charcoal/10">
                    {spec.rows.map((r) => (
                      <tr key={r.parameter} className="odd:bg-white even:bg-ivory/50">
                        <th scope="row" className="px-5 py-4 font-semibold text-charcoal">{r.parameter}</th>
                        <td className="px-5 py-4 text-charcoal">{r.value}</td>
                        <td className="px-5 py-4 text-slate">{r.unit}</td>
                        <td className="px-5 py-4 text-slate">{r.method}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          ) : (
            <>
              <dl className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {p.params.map(([k, v]) => (
                  <div key={k} className="rounded-xl border border-charcoal/10 border-l-4 border-l-brass bg-ivory p-5">
                    <dt className="font-serif text-base font-bold text-charcoal">{k}</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-slate">{v}</dd>
                  </div>
                ))}
              </dl>
              {p.note && (
                <p className="mt-6 max-w-3xl rounded-xl border border-charcoal/10 bg-ivory p-5 text-sm leading-relaxed text-slate">{p.note}</p>
              )}
              <QuoteLink product={p.slug} className={`${BTN_PRIMARY} mt-8`}>Request Grade Details <span aria-hidden="true">&rarr;</span></QuoteLink>
            </>
          )}

          {/* Optional dimension drawing: renders only when the product record supplies one */}
          {p.dimensionImage && (
            <figure className="mt-10 max-w-3xl overflow-hidden rounded-2xl border border-charcoal/10 bg-white shadow-sm">
              <img src={p.dimensionImage} alt={`${p.shortName} dimensions`} loading="lazy" decoding="async" className="w-full" />
              <figcaption className="border-t border-charcoal/10 bg-ivory px-5 py-3 text-xs text-slate">Dimensional reference for {p.shortName}</figcaption>
            </figure>
          )}
        </div>
      </section>

      {/* Packaging + documents */}
      <section className={`${SECTION} bg-ivory`} aria-labelledby="commercial-title">
        <div className={WRAP}>
          <SectionHeader eyebrow="Commercial Details" title="Packaging and Documents" id="commercial-title" />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="flex flex-col rounded-2xl border border-charcoal/10 bg-white p-7 shadow-sm">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-brass/60 bg-ivory text-brass"><Icon d={FACTS[1].icon} className="h-6 w-6" /></span>
              <h3 className="mt-5 font-serif text-xl font-bold text-charcoal">Packaging and Commercial Details</h3>
              <p className="mt-3 flex-1 leading-relaxed text-slate">
                Bulk, retail and private-label packing can be discussed for this product. Pack format, MOQ and production lead time are confirmed with the quotation. Lead time is separate from ocean transit.
              </p>
              <Link to="/packaging-private-label/" className={`mt-5 text-sm font-bold text-brass underline decoration-2 underline-offset-4 hover:text-charcoal ${FOCUS}`}>
                Packaging and private label <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>

            <div className="flex flex-col rounded-2xl border border-charcoal/10 bg-white p-7 shadow-sm">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-brass/60 bg-ivory text-brass"><Icon d={FACTS[0].icon} className="h-6 w-6" /></span>
              <h3 className="mt-5 font-serif text-xl font-bold text-charcoal">Documents</h3>
              <p className="mt-3 flex-1 leading-relaxed text-slate">
                A technical data sheet and safety data sheet are provided for approved grades, and a certificate of analysis states the batch, date, laboratory and methods it covers. Ask for the documents you need.
              </p>
              <Link to="/quality/" className={`mt-5 text-sm font-bold text-brass underline decoration-2 underline-offset-4 hover:text-charcoal ${FOCUS}`}>
                Quality and documentation <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className={`${SECTION} bg-white`} aria-labelledby="faq-title">
        <div className={`${WRAP} max-w-3xl`}>
          <SectionHeader eyebrow="Buyer Questions" title="Product FAQs" id="faq-title" />
          <div className="mt-8"><FaqAccordion items={faqsFor(p)} /></div>
        </div>
      </section>

      {/* Related products */}
      <section className={`${SECTION} bg-ivory`} aria-labelledby="related-title">
        <div className={WRAP}>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader eyebrow="Explore More" title="Related Products" id="related-title" />
            <Link to="/products/" className={`${BTN_GHOST_LIGHT} shrink-0`}>View all products</Link>
          </div>
          <ul className="mt-10 grid gap-6 sm:grid-cols-3">
            {related.map((r) => (
              <li key={r.slug} className="flex">
                <Link
                  to={`/products/${r.slug}/`}
                  className={`${CARD} group flex w-full flex-col overflow-hidden rounded-xl border border-charcoal/10 bg-white shadow-sm transition-all hover:border-brass/40 hover:shadow-lg ${FOCUS}`}
                >
                  <div className="overflow-hidden">
                    <ProductVisual product={r} className="aspect-[4/3] transition-transform duration-700 group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none" />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-brass">{r.tag}</p>
                    <h3 className="mt-2 font-serif text-lg font-bold text-charcoal">{r.shortName}</h3>
                    <span className="mt-4 text-sm font-bold text-brass transition-all group-hover:translate-x-1 motion-reduce:transform-none">View Specifications <span aria-hidden="true">&rarr;</span></span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Closing action, with this product preselected */}
      <section className="bg-charcoal py-16 text-white lg:py-20" aria-labelledby="product-cta">
        <div className={WRAP}>
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="product-cta" className="font-serif text-3xl font-bold leading-tight text-brass sm:text-4xl">Discuss Your {p.shortName} Requirements</h2>
            <p className="mt-4 text-lg text-white/85">Tell us the quantity, destination and specification. Your selected product stays attached to the enquiry.</p>
            <QuoteLink product={p.slug} className={`${BTN_PRIMARY} mt-8 px-8 py-3.5`}>Send Your Requirements <span aria-hidden="true">&rarr;</span></QuoteLink>
          </div>
        </div>
      </section>
    </>
  );
}