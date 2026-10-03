import { useState } from "react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../data/products.js";
import { Seo, PageHero, WRAP, SECTION, CARD, BODY, ProductVisual, QuoteLink } from "../components/ui.jsx";
import Breadcrumbs from "../components/Breadcrumbs.jsx";

const FILTERS = [["all", "All"], ["fuel", "Fuel charcoal"], ["carbon", "Activated carbon"]];

export default function Products() {
  const [filter, setFilter] = useState("all");
  const list = PRODUCTS.filter((p) => filter === "all" || p.family === filter);
  return (
    <>
      <Seo title="Coconut Charcoal and Activated Carbon Products" description="Coconut shell activated carbon, hookah cubes, pillow and hexagonal briquettes and coconut shell charcoal for export." />
      <PageHero title="Products" body="Filter by product form, then open a family to see the specification parameters and request a quote." />
      <Breadcrumbs trail={[{ label: "Products" }]} />
      <section className={SECTION}>
        <div className={WRAP}>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter products">
            {FILTERS.map(([k, label]) => (
              <button key={k} type="button" aria-pressed={filter === k} onClick={() => setFilter(k)} className={`rounded-full border px-4 py-2 text-sm font-semibold ${filter === k ? "border-charcoal bg-charcoal text-ivory" : "border-charcoal/25 bg-white"}`}>{label}</button>
            ))}
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p) => (
              <article key={p.slug} className={`${CARD} flex flex-col overflow-hidden`}>
                <ProductVisual product={p} className="aspect-[16/10]" />
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-brass-dim">{p.tag}</p>
                  <h2 className="mt-1 text-xl font-bold">{p.name}</h2>
                  <p className="mt-2 flex-1 text-sm text-slate">{p.summary}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <Link to={`/products/${p.slug}/`} className="text-sm font-semibold text-brass-dim underline underline-offset-4">View Specifications</Link>
                    <QuoteLink product={p.slug} className="text-sm font-semibold underline underline-offset-4">Request</QuoteLink>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className={`mt-10 ${BODY}`}>Looking at briquettes in general? See the <Link className="underline underline-offset-2" to="/products/coconut-charcoal-briquettes/">briquette format guide</Link>.</p>
        </div>
      </section>
    </>
  );
}
