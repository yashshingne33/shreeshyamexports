import { Link } from "react-router-dom";
import { BRIQUETTE_HUB, getProduct } from "../data/products.js";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import { Seo, PageHero, WRAP, SECTION, CARD, ProductVisual, QuoteLink } from "../components/ui.jsx";

export default function BriquetteHub() {
  return (
    <>
      <Seo title="Coconut Charcoal Briquettes for Export" description={BRIQUETTE_HUB.intro.slice(0, 155)} />
      <PageHero title={BRIQUETTE_HUB.name} body={BRIQUETTE_HUB.intro} />
      <Breadcrumbs trail={[{ label: "Products", to: "/products/" }, { label: "Briquettes" }]} />
      <section className={SECTION}>
        <div className={`${WRAP} grid gap-6 md:grid-cols-3`}>
          {BRIQUETTE_HUB.children.map((s) => { const p = getProduct(s); return (
            <Link key={s} to={`/products/${s}/`} className={`${CARD} overflow-hidden hover:border-brass`}>
              <ProductVisual product={p} className="aspect-[16/10]" />
              <div className="p-5"><h2 className="text-lg font-bold">{p.shortName}</h2><p className="mt-2 text-sm text-slate">{p.summary}</p><span className="mt-3 inline-block text-sm font-semibold text-brass-dim">View Specifications &rarr;</span></div>
            </Link>); })}
        </div>
        <div className={`${WRAP} mt-10`}><QuoteLink>Request an Export Quote</QuoteLink></div>
      </section>
    </>
  );
}
