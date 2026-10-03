import Breadcrumbs from "../components/Breadcrumbs.jsx";
import { Link } from "react-router-dom";
import { Seo, PageHero, WRAP, SECTION, CARD, QuoteLink } from "../components/ui.jsx";

const ITEMS = [
  ["Product catalogue", "Overview of the product families and formats.", "/products/"],
  ["Technical data sheets", "Dated sheets for approved grades. Request the grade you need.", "/quality/"],
  ["Safety data sheets", "Product-specific SDS from the current manufacturer record.", "/quality/"],
  ["Packaging briefing", "How pack format, artwork and MOQ are agreed.", "/packaging-private-label/"],
];

export default function Resources() {
  return (
    <>
      <Seo title="Resources" description="Catalogue, technical data sheets, safety data sheets and buying guidance for coconut charcoal and activated carbon." />
      <PageHero title="Resources" body="Approved documents are issued for each grade on request, with the date and scope they cover." />
      <Breadcrumbs trail={[{ label: "Resources" }]} />
      <section className={SECTION}>
        <div className={`${WRAP} grid gap-5 sm:grid-cols-2`}>
          {ITEMS.map(([t, d, to]) => <Link key={t} to={to} className={`${CARD} p-6 hover:border-brass`}><h2 className="text-lg font-bold">{t}</h2><p className="mt-2 text-sm text-slate">{d}</p></Link>)}
        </div>
        <div className={`${WRAP} mt-8`}><QuoteLink>Request Documents</QuoteLink></div>
      </section>
    </>
  );
}
