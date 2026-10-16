import { Link, Navigate, useParams } from "react-router-dom";
import { getProduct, resolveSlug, PRODUCTS, faqsFor } from "../data/products.js";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import FaqAccordion from "../components/FaqAccordion.jsx";
import { Seo, WRAP, SECTION, CARD, QuoteLink } from "../components/ui.jsx";
import { ProductPhoto } from "./Products.jsx";
import { RawMaterialBand, ApplicationTiles } from "../components/ProductHighlights.jsx";

/* ------------------------------------------------------------------ *
 * SHARED STYLES (same tokens as the homepage hero, header and footer)
 * ------------------------------------------------------------------ */
const EDGE = "w-full px-5 sm:px-10 lg:px-16 xl:px-24";
const FOCUS = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass";
const BTN_PRIMARY =
  "inline-flex items-center justify-center gap-2 rounded-md bg-brass px-6 py-3 text-sm font-bold text-charcoal shadow-sm transition-colors hover:bg-[#9a7e4b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal";
const BTN_GHOST_LIGHT =
  "inline-flex items-center justify-center gap-2 rounded-md border border-charcoal/25 bg-white/60 px-6 py-3 text-sm font-medium text-charcoal transition-colors hover:border-charcoal " + FOCUS;
const TEXT_LINK = `text-sm font-bold text-brass underline decoration-2 underline-offset-4 transition-colors hover:text-charcoal ${FOCUS}`;

const FACTS = [
  { title: "Documents", body: "Technical and safety data sheets for approved grades.", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
  { title: "Packaging", body: "Bulk, retail and private-label packing can be discussed.", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
  { title: "Export Coordination", body: "Sample review, quotation and shipment support.", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
];

const INTERIM_SPEC_BODY =
  "Share your application and required parameters. We will review available grades and confirm the proposed specification, packaging and supporting documents with your quotation.";
const FINAL_SPEC_INTRO =
  "The table below describes the stated grade. Typical values are indicative; guaranteed limits and test methods are identified separately. The final supply specification is confirmed in the accepted quotation.";
const COMMERCIAL_COPY =
  "Packing, minimum order quantity and production lead time are confirmed for the selected grade and order quantity. Private-label requirements are reviewed before quotation. Production lead time and freight transit time are stated separately.";

const Icon = ({ d, className = "h-5 w-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d={d} />
  </svg>
);

function SectionHeader({ eyebrow, title, sub, id, className = "" }) {
  return (
    <div className={`max-w-3xl ${className}`}>
      <div className="flex items-center gap-3">
        <span className="h-px w-10 shrink-0 bg-brass" aria-hidden="true" />
        <span className="text-xs font-bold uppercase tracking-widest text-brass">{eyebrow}</span>
      </div>
      <h2 id={id} className="mt-3 font-serif text-2xl font-bold leading-tight text-charcoal sm:text-3xl lg:text-4xl">{title}</h2>
      {sub && <p className="mt-4 text-base leading-relaxed text-slate sm:text-lg">{sub}</p>}
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const canonical = resolveSlug(slug);
  if (canonical !== slug) return <Navigate to={`/products/${canonical}/`} replace />;

  const p = getProduct(slug);
  if (!p) return <Navigate to="/products/" replace />;

  const spec = p.approvedSpec;
  const related = PRODUCTS.filter((x) => x.slug !== p.slug)
    .sort((a, b) => (b.family === p.family) - (a.family === p.family))
    .slice(0, 3);

  return (
    <>
      <Seo title={p.name} description={p.intro.slice(0, 155)} />
      <Breadcrumbs trail={[{ label: "Products", to: "/products/" }, { label: p.shortName }]} />

      {/* ============================ HERO ============================ */}
      <section className="flex flex-col bg-ivory lg:min-h-[max(560px,calc(100svh-11rem))]" aria-labelledby="product-title">
        <div className={`${EDGE} grid flex-1 items-center gap-8 py-8 sm:py-10 lg:grid-cols-2 lg:gap-12 lg:py-10 xl:gap-16`}>
          {/* Text column (below the image on mobile) */}
          <div className="order-2 min-w-0 lg:order-1">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 shrink-0 bg-brass" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-widest text-brass">{p.tag}</span>
            </div>
            <h1 id="product-title" className="mt-4 font-serif text-3xl font-bold leading-[1.1] text-charcoal sm:text-4xl xl:text-5xl [@media(max-height:820px)]:xl:text-4xl">
              {p.name}
            </h1>
            <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-slate sm:text-base">{p.intro}</p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <QuoteLink product={p.slug} className={`${BTN_PRIMARY} w-full px-7 py-3.5 sm:w-auto`}>
                Request a Quote <span aria-hidden="true">&rarr;</span>
              </QuoteLink>
              {spec?.tdsUrl ? (
                <a href={spec.tdsUrl} download className={`${BTN_GHOST_LIGHT} w-full px-7 py-3.5 sm:w-auto`}>Download TDS</a>
              ) : (
                <QuoteLink product={p.slug} type="technical-documents" docs="tds" className={`${BTN_GHOST_LIGHT} w-full px-7 py-3.5 sm:w-auto`}>
                  Request Technical Data Sheet
                </QuoteLink>
              )}
            </div>
          </div>

          {/* Image column */}
          <div className="order-1 min-w-0 lg:order-2">
            <div className="relative overflow-hidden rounded-2xl border border-charcoal/10 bg-white shadow-xl">
              <ProductPhoto
                product={p}
                eager
                className="aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[clamp(300px,50vh,460px)]"
              />
            </div>
          </div>
        </div>

        {/* Quick facts strip */}
        <div className="border-t-2 border-brass bg-ivory text-charcoal">
          <ul className={`${EDGE} grid divide-y divide-charcoal/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0`}>
            {FACTS.map((f, i) => (
              <li key={f.title} className={`flex items-center gap-4 py-4 ${i > 0 ? "sm:pl-6 lg:pl-8" : ""} ${i < FACTS.length - 1 ? "sm:pr-6 lg:pr-8" : ""}`}>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-brass/60 bg-white text-brass shadow-sm">
                  <Icon d={f.icon} className="h-6 w-6" />
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

      {/* ===================== COCONUT SHELL RAW MATERIAL ===================== */}
      <RawMaterialBand />

      {/* ====================== TECHNICAL SPECIFICATION ====================== */}
      <section id="specifications" className={`${SECTION} scroll-mt-24 bg-white`} aria-labelledby="spec-title">
        <div className={WRAP}>
          {spec ? (
            <>
              <SectionHeader eyebrow="Technical Specification" title="Technical Specifications" id="spec-title" sub={FINAL_SPEC_INTRO} />

              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3">
                <span className="rounded-full border border-brass/50 bg-brass/10 px-4 py-1.5 text-sm font-bold text-charcoal">Grade {spec.grade}</span>
                <span className="text-sm font-medium text-slate">Revised {spec.revised}</span>
                {spec.tdsUrl && (
                  <a href={spec.tdsUrl} download className={`sm:ml-auto ${TEXT_LINK}`}>Download TDS</a>
                )}
              </div>

              {/* Mobile: stacked cards, no sideways scrolling */}
              <ul className="mt-5 space-y-3 md:hidden" aria-label="Technical specification">
                {spec.rows.map((r) => (
                  <li key={r.parameter} className="rounded-xl border border-charcoal/10 border-l-4 border-l-brass bg-ivory/60 p-4">
                    <p className="font-serif text-base font-bold text-charcoal">{r.parameter}</p>
                    <p className="mt-1 text-sm font-semibold text-charcoal">{r.value}</p>
                    <p className="mt-2 text-xs leading-relaxed text-slate">
                      {r.unit}
                      {r.method ? <span className="block">Method: {r.method}</span> : null}
                    </p>
                  </li>
                ))}
              </ul>

              {/* Tablet and up: full table */}
              <div className="mt-5 hidden overflow-x-auto rounded-2xl border border-charcoal/10 bg-white shadow-sm md:block" tabIndex={0} role="region" aria-label="Technical specification table">
                <table className="w-full min-w-[640px] text-left text-sm">
                  <thead className="border-b-2 border-brass bg-ivory text-xs font-bold uppercase tracking-wide text-charcoal">
                    <tr>
                      <th scope="col" className="px-5 py-4">Parameter</th>
                      <th scope="col" className="px-5 py-4">Typical value or guaranteed limit</th>
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
              {/* Interim content: no offered values until a dated TDS is approved */}
              <SectionHeader eyebrow="Technical Review" title="Parameters Available for Technical Review" id="spec-title" sub={INTERIM_SPEC_BODY} />

              <QuoteLink product={p.slug} type="technical-documents" docs="tds" className={`${BTN_PRIMARY} mt-7 w-full sm:w-auto`}>
                Request Grade Details <span aria-hidden="true">&rarr;</span>
              </QuoteLink>

              <div className="mt-12 border-t border-charcoal/10 pt-10">
                <h3 className="font-serif text-xl font-bold text-charcoal">Buyer checklist</h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate">
                  These are the parameters buyers typically specify. They are a checklist for your enquiry, not offered values.
                </p>
                <dl className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
              </div>
            </>
          )}

          {p.dimensionImage && (
            <figure className="mt-10 max-w-3xl overflow-hidden rounded-2xl border border-charcoal/10 bg-white shadow-sm">
              <img src={p.dimensionImage} alt={`${p.shortName} dimensions`} loading="lazy" decoding="async" className="h-auto w-full" />
              <figcaption className="border-t border-charcoal/10 bg-ivory px-5 py-3 text-xs text-slate">Dimensional reference for {p.shortName}</figcaption>
            </figure>
          )}
        </div>
      </section>

      {/* ========================== APPLICATIONS ========================== */}
      <ApplicationTiles product={p} />

      {/* ====================== PACKAGING + DOCUMENTS ====================== */}
      <section className={`${SECTION} bg-white`} aria-labelledby="commercial-title">
        <div className={WRAP}>
          <SectionHeader eyebrow="Commercial Details" title="Packaging and Documents" id="commercial-title" />
          <div className="mt-8 grid gap-5 sm:mt-10 sm:gap-6 lg:grid-cols-2">
            <div className="flex flex-col rounded-2xl border border-charcoal/10 border-t-4 border-t-brass bg-ivory p-6 shadow-sm sm:p-7">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-brass/60 bg-white text-brass"><Icon d={FACTS[1].icon} className="h-6 w-6" /></span>
              <h3 className="mt-5 font-serif text-xl font-bold text-charcoal">Packaging and Commercial Details</h3>
              <p className="mt-3 leading-relaxed text-slate">{COMMERCIAL_COPY}</p>
              {(p.packing || p.moq) && (
                <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                  {p.packing && (
                    <div className="rounded-lg border border-charcoal/10 bg-white p-3">
                      <dt className="font-bold text-charcoal">Packing options</dt>
                      <dd className="mt-1 text-slate">{p.packing}</dd>
                    </div>
                  )}
                  {p.moq && (
                    <div className="rounded-lg border border-charcoal/10 bg-white p-3">
                      <dt className="font-bold text-charcoal">Minimum order quantity</dt>
                      <dd className="mt-1 text-slate">{p.moq}</dd>
                    </div>
                  )}
                </dl>
              )}
              <Link to="/packaging-private-label/" className={`mt-5 self-start ${TEXT_LINK}`}>Packaging and private label <span aria-hidden="true">&rarr;</span></Link>
            </div>

            <div className="flex flex-col rounded-2xl border border-charcoal/10 border-t-4 border-t-brass bg-ivory p-6 shadow-sm sm:p-7">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-brass/60 bg-white text-brass"><Icon d={FACTS[0].icon} className="h-6 w-6" /></span>
              <h3 className="mt-5 font-serif text-xl font-bold text-charcoal">Documents</h3>
              <p className="mt-3 flex-1 leading-relaxed text-slate">
                A technical data sheet and safety data sheet are provided for approved grades, and a certificate of analysis states the batch, date, laboratory and methods it covers. Ask for the documents you need.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
                {spec?.tdsUrl ? (
                  <a href={spec.tdsUrl} download className={TEXT_LINK}>Download TDS <span aria-hidden="true">&darr;</span></a>
                ) : (
                  <QuoteLink product={p.slug} type="technical-documents" docs="tds" className={TEXT_LINK}>
                    Request Technical Data Sheet <span aria-hidden="true">&rarr;</span>
                  </QuoteLink>
                )}
                <Link to="/quality/" className={TEXT_LINK}>Quality and documentation <span aria-hidden="true">&rarr;</span></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== FAQ ============================== */}
      <section className={`${SECTION} bg-ivory`} aria-labelledby="faq-title">
        <div className={`${WRAP} max-w-3xl`}>
          <SectionHeader eyebrow="Buyer Questions" title="Product FAQs" id="faq-title" />
          <div className="mt-8"><FaqAccordion items={faqsFor(p)} /></div>
        </div>
      </section>

      {/* ========================= RELATED PRODUCTS ========================= */}
      <section className={`${SECTION} bg-white`} aria-labelledby="related-title">
        <div className={WRAP}>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader eyebrow="Explore More" title="Related Products" id="related-title" />
            <Link to="/products/" className={`${BTN_GHOST_LIGHT} w-full shrink-0 sm:w-auto`}>View all products</Link>
          </div>
          <ul className="mt-8 grid gap-5 sm:mt-10 sm:gap-6 md:grid-cols-3">
            {related.map((r) => (
              <li key={r.slug} className="flex">
                <Link
                  to={`/products/${r.slug}/`}
                  className={`${CARD} group relative flex w-full flex-col overflow-hidden rounded-xl border border-charcoal/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brass/50 hover:shadow-lg motion-reduce:transform-none ${FOCUS}`}
                >
                  <span className="absolute inset-x-0 top-0 z-10 h-0.5 origin-left scale-x-0 bg-brass transition-transform duration-300 group-hover:scale-x-100" aria-hidden="true" />
                  <div className="relative overflow-hidden">
                    <ProductPhoto product={r} className="aspect-[4/3]" imgClass="transition-transform duration-700 group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none" />
                    <span className="absolute left-2.5 top-2.5 rounded bg-charcoal px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-widest text-brass">{r.tag}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-serif text-lg font-bold text-charcoal">{r.shortName}</h3>
                    <span className="mt-auto pt-4 text-sm font-bold text-brass transition-transform group-hover:translate-x-1 motion-reduce:transform-none">View Product Details <span aria-hidden="true">&rarr;</span></span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============================== CTA ============================== */}
      <section className="bg-charcoal py-14 text-white sm:py-16 lg:py-20" aria-labelledby="product-cta">
        <div className={WRAP}>
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="product-cta" className="font-serif text-2xl font-bold leading-tight text-brass sm:text-3xl lg:text-4xl">Discuss Your {p.shortName} Requirements</h2>
            <p className="mt-4 text-base text-white/85 sm:text-lg">Tell us the quantity, destination and specification. Your selected product stays attached to the enquiry.</p>
            <QuoteLink product={p.slug} className={`${BTN_PRIMARY} mt-8 w-full px-8 py-3.5 sm:w-auto`}>
              Send Your Requirements <span aria-hidden="true">&rarr;</span>
            </QuoteLink>
          </div>
        </div>
      </section>
    </>
  );
}