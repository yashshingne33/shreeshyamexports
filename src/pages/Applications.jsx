import Breadcrumbs from "../components/Breadcrumbs.jsx";
import { Link } from "react-router-dom";
import { Seo, PageHero, WRAP, SECTION, BODY, QuoteLink } from "../components/ui.jsx";

const APPS = [
  { id: "shisha", title: "Shisha and Hookah", lead: "Lead with dimensions, agreed ash and moisture targets, heat performance, handling strength and branded pack needs.", links: [["Hookah and shisha cubes", "/products/hookah-charcoal-cubes/"], ["Hexagonal briquettes", "/products/hexagonal-charcoal-briquettes/"]], product: "hookah-charcoal-cubes" },
  { id: "bbq", title: "BBQ and Foodservice", lead: "Lead with piece geometry, calorific value, cooking use, ignition behaviour, packaging and breakage in transit.", links: [["Pillow briquettes", "/products/pillow-charcoal-briquettes/"], ["Hexagonal briquettes", "/products/hexagonal-charcoal-briquettes/"]], product: "pillow-charcoal-briquettes" },
  { id: "industrial-filtration", title: "Industrial Filtration", lead: "Lead with liquid or gas duty, target contaminant, mesh, adsorption parameters, hardness and any product approvals your application requires.", links: [["Coconut shell activated carbon", "/products/coconut-shell-activated-carbon/"]], product: "coconut-shell-activated-carbon" },
];

export default function Applications() {
  return (
    <>
      <Seo title="Applications: Shisha, BBQ and Industrial Filtration" description="Choose coconut charcoal or activated carbon by application: shisha, BBQ and foodservice, or industrial filtration." />
      <PageHero title="Applications" body="Each application is judged on different data. Start with yours." />
      <Breadcrumbs trail={[{ label: "Applications" }]} />
      {APPS.map((a, i) => (
        <section key={a.id} id={a.id} className={`${SECTION} scroll-mt-20 ${i % 2 ? "bg-white" : ""}`}>
          <div className={`${WRAP} max-w-3xl`}>
            <h2 className="text-2xl font-bold sm:text-3xl">{a.title}</h2>
            <p className={`mt-3 ${BODY}`}>{a.lead}</p>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">{a.links.map(([l, to]) => <li key={to}><Link to={to} className="text-sm font-semibold text-brass-dim underline underline-offset-4">{l}</Link></li>)}</ul>
            <QuoteLink product={a.product} className="mt-6 inline-flex rounded-lg bg-brass px-6 py-3 text-sm font-semibold hover:bg-[#c0a56a]">Request an Export Quote</QuoteLink>
          </div>
        </section>
      ))}
    </>
  );
}
