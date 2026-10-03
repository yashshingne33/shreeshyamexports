import { Link, Navigate, useParams } from "react-router-dom";
import { getProduct, PRODUCTS, faqsFor } from "../data/products.js";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import FaqAccordion from "../components/FaqAccordion.jsx";
import { Seo, WRAP, SECTION, BODY, BTN_LINE, CARD, ProductVisual, QuoteLink } from "../components/ui.jsx";

export default function ProductDetail() {
  const { slug } = useParams();
  const p = getProduct(slug);
  if (!p) return <Navigate to="/products/" replace />;
  const spec = p.approvedSpec; // set only when a dated, owner-approved record exists
  const related = PRODUCTS.filter((x) => x.slug !== p.slug).slice(0, 3);

  return (
    <>
      <Seo title={p.name} description={p.intro.slice(0, 155)} />
      <Breadcrumbs trail={[{ label: "Products", to: "/products/" }, { label: p.shortName }]} />

      <section className={SECTION}>
        <div className={`${WRAP} grid items-center gap-10 lg:grid-cols-2 lg:gap-14`}>
          <div className="overflow-hidden rounded-xl border border-charcoal/10"><ProductVisual product={p} className="aspect-[4/3]" /></div>
          <div>
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl">{p.name}</h1>
            <p className={`mt-4 ${BODY}`}>{p.intro}</p>
            <ul className="mt-5 flex flex-wrap gap-2">{p.applications.map((a) => <li key={a} className="rounded-full border border-charcoal/15 bg-white px-3.5 py-1.5 text-xs font-semibold">{a}</li>)}</ul>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <QuoteLink product={p.slug}>Request this Product</QuoteLink>
              {spec?.tdsUrl
                ? <a href={spec.tdsUrl} className={BTN_LINE} download>Download TDS</a>
                : <QuoteLink product={p.slug} className={BTN_LINE}>Request Grade Details</QuoteLink>}
            </div>
          </div>
        </div>
      </section>

      <section id="specifications" className={`${SECTION} scroll-mt-20 bg-white`}>
        <div className={WRAP}>
          <h2 className="text-2xl font-bold sm:text-3xl">Technical Specification</h2>
          {spec ? (
            <>
              <p className={`mt-2 ${BODY}`}>Grade {spec.grade} &middot; Revised {spec.revised}</p>
              <div className="mt-5 overflow-x-auto rounded-xl border border-charcoal/10">
                <table className="w-full min-w-[560px] text-left text-sm">
                  <thead className="bg-ivory text-xs uppercase tracking-wide text-slate"><tr><th scope="col" className="px-4 py-3">Parameter</th><th scope="col" className="px-4 py-3">Limit or typical value</th><th scope="col" className="px-4 py-3">Unit and basis</th><th scope="col" className="px-4 py-3">Method</th></tr></thead>
                  <tbody>{spec.rows.map((r) => (<tr key={r.parameter} className="border-t border-charcoal/10"><th scope="row" className="px-4 py-3 font-semibold">{r.parameter}</th><td className="px-4 py-3">{r.value}</td><td className="px-4 py-3">{r.unit}</td><td className="px-4 py-3">{r.method}</td></tr>))}</tbody>
                </table>
              </div>
            </>
          ) : (
            <>
              <p className={`mt-2 max-w-2xl ${BODY}`}>Share your required values and we will recommend a grade. These are the parameters buyers typically specify.</p>
              <dl className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {p.params.map(([k, v]) => (<div key={k} className="border-t border-charcoal/10 pt-3"><dt className="font-semibold">{k}</dt><dd className="text-sm text-slate">{v}</dd></div>))}
              </dl>
              {p.note && <p className="mt-6 rounded-lg bg-ivory p-4 text-sm text-slate">{p.note}</p>}
              <QuoteLink product={p.slug} className={`${BTN_LINE} mt-6`}>Request Grade Details</QuoteLink>
            </>
          )}
        </div>
      </section>

      <section className={SECTION}>
        <div className={`${WRAP} grid gap-10 lg:grid-cols-2`}>
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Packaging and Commercial Details</h2>
            <p className={`mt-3 ${BODY}`}>Bulk, retail and private-label packing can be discussed for this product. Pack format, MOQ and production lead time are confirmed with the quotation. Lead time is separate from ocean transit.</p>
            <Link to="/packaging-private-label/" className="mt-3 inline-block text-sm font-semibold text-brass-dim underline underline-offset-4">Packaging and private label</Link>
          </div>
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Documents</h2>
            <p className={`mt-3 ${BODY}`}>A technical data sheet and safety data sheet are provided for approved grades, and a certificate of analysis states the batch, date, laboratory and methods it covers. Ask for the documents you need.</p>
            <Link to="/quality/" className="mt-3 inline-block text-sm font-semibold text-brass-dim underline underline-offset-4">Quality and documentation</Link>
          </div>
        </div>
      </section>

      <section className={`${SECTION} bg-white`}>
        <div className={`${WRAP} max-w-3xl`}>
          <h2 className="text-2xl font-bold sm:text-3xl">Product FAQs</h2>
          <div className="mt-6"><FaqAccordion items={faqsFor(p)} /></div>
        </div>
      </section>

      <section className={SECTION}>
        <div className={WRAP}>
          <h2 className="text-2xl font-bold sm:text-3xl">Related Products</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {related.map((r) => (
              <Link key={r.slug} to={`/products/${r.slug}/`} className={`${CARD} overflow-hidden hover:border-brass`}>
                <ProductVisual product={r} className="aspect-[16/10]" />
                <div className="p-4"><h3 className="font-bold">{r.shortName}</h3><p className="mt-1 text-sm text-slate">{r.tag}</p></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
