import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import { Seo, WRAP, SECTION, QuoteLink } from "../components/ui.jsx";
import { PageBanner, ClosingCta, Icon, ICONS, BTN_PRIMARY, BTN_GHOST_DARK, FOCUS } from "../components/PageKit.jsx";

/* ------------------------------------------------------------------ *
 * CONTENT — plan: three detailed sections (shisha, BBQ/foodservice,
 * industrial filtration), each led by DIFFERENT data, each linked to
 * eligible products. Benefits are never reused across headings.
 * ------------------------------------------------------------------ */
const APPS = [
  {
    id: "shisha",
    title: "Shisha and Hookah",
    lead: "Shisha buyers judge a cube on its size, its agreed ash and moisture targets, how it holds heat and how well it survives handling and packing. Start with those, and tell us the pack your brand needs.",
    specify: [
      ["Dimensions", "Cube size and tolerance you require"],
      ["Ash and moisture", "Agreed targets for your market"],
      ["Heat performance", "Burn behaviour and test basis"],
      ["Handling strength", "Resistance to breakage in packing and transit"],
      ["Branded packs", "Retail pack and private-label needs"],
    ],
    links: [["Hookah and shisha cubes", "/products/hookah-charcoal-cubes/"], ["Hexagonal briquettes", "/products/hexagonal-charcoal-briquettes/"]],
    product: "hookah-charcoal-cubes",
  },
  {
    id: "bbq",
    title: "BBQ and Foodservice",
    lead: "BBQ and foodservice buyers start with piece geometry, calorific value, the cooking use and how the briquette lights, then packaging and breakage in transit for their sales channel.",
    specify: [
      ["Piece geometry", "Length, width and thickness in mm"],
      ["Calorific value", "Fuel performance you require"],
      ["Cooking use", "Grill, restaurant or retail BBQ"],
      ["Ignition behaviour", "How the briquette lights and sustains"],
      ["Packaging and breakage", "Pack format and protection in transit"],
    ],
    links: [["Pillow briquettes", "/products/pillow-charcoal-briquettes/"], ["Hexagonal briquettes", "/products/hexagonal-charcoal-briquettes/"]],
    product: "pillow-charcoal-briquettes",
  },
  {
    id: "industrial-filtration",
    title: "Industrial Filtration",
    lead: "Activated carbon is chosen for a specified treatment duty, not as a fuel. Start with the liquid or gas being treated, the contaminant to remove and the mesh and adsorption parameters, then any approvals your application needs.",
    specify: [
      ["Liquid or gas duty", "What is being treated, and how"],
      ["Target contaminant", "What the carbon must remove"],
      ["Mesh", "Required particle size range"],
      ["Adsorption parameters", "Values your process specifies"],
      ["Hardness", "Resistance to attrition in service"],
      ["Product approvals", "Any approvals your application requires"],
    ],
    links: [["Coconut shell activated carbon", "/products/coconut-shell-activated-carbon/"]],
    product: "coconut-shell-activated-carbon",
  },
];

export default function Applications() {
  return (
    <>
      <Seo
        title="Applications: Shisha, BBQ and Industrial Filtration"
        description="Choose coconut charcoal or activated carbon by application: shisha, BBQ and foodservice, or industrial filtration."
      />

      <PageBanner
        eyebrow="Applications"
        title="Choose by Application"
        body="Each application is judged on different data. Start with yours."
      >
        {APPS.map((a) => (
          <a key={a.id} href={`#${a.id}`} className={`${BTN_GHOST_DARK} sm:px-5`}>{a.title}</a>
        ))}
      </PageBanner>

      <Breadcrumbs trail={[{ label: "Applications" }]} />

      {APPS.map((a, i) => (
        <section
          key={a.id}
          id={a.id}
          className={`${SECTION} scroll-mt-24 ${i % 2 ? "bg-white" : "bg-ivory"}`}
          aria-labelledby={`${a.id}-title`}
        >
          <div className={`${WRAP} grid items-start gap-10 lg:grid-cols-12 lg:gap-14`}>
            {/* Left: narrative + eligible products */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-brass/60 bg-white font-serif text-base font-bold text-brass shadow-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-brass">Application</span>
              </div>
              <h2 id={`${a.id}-title`} className="mt-4 font-serif text-3xl font-bold leading-tight text-charcoal sm:text-4xl">{a.title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-slate">{a.lead}</p>

              <p className="mt-7 text-xs font-bold uppercase tracking-widest text-charcoal">Eligible products</p>
              <ul className="mt-3 flex flex-wrap gap-3">
                {a.links.map(([label, to]) => (
                  <li key={to}>
                    <Link
                      to={to}
                      className={`inline-flex items-center gap-2 rounded-full border border-charcoal/20 bg-white px-4 py-2 text-sm font-semibold text-charcoal transition-colors hover:border-brass hover:text-brass ${FOCUS}`}
                    >
                      {label} <span aria-hidden="true" className="text-brass">&rarr;</span>
                    </Link>
                  </li>
                ))}
              </ul>

              <QuoteLink product={a.product} className={`${BTN_PRIMARY} mt-8`}>
                Request an Export Quote <span aria-hidden="true">&rarr;</span>
              </QuoteLink>
            </div>

            {/* Right: what to specify */}
            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-2xl border border-charcoal/10 bg-white shadow-sm">
                <div className="border-b-2 border-brass bg-charcoal px-6 py-4 text-white">
                  <h3 className="font-serif text-lg font-bold">What to specify</h3>
                  <p className="mt-1 text-sm text-white/75">The data that decides the right grade for this application.</p>
                </div>
                <ul className="grid gap-px bg-charcoal/10 sm:grid-cols-2">
                  {a.specify.map(([k, v]) => (
                    <li key={k} className="flex items-start gap-3 bg-white p-5">
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brass/15 text-brass">
                        <Icon d={ICONS.check} className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="font-bold text-charcoal">{k}</p>
                        <p className="mt-1 text-sm leading-snug text-slate">{v}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      <ClosingCta
        id="apps-cta"
        title="Tell Us Your Application"
        body="Share the application, specification and destination. We will review an appropriate available grade."
      >
        <Link to="/request-a-quote/" className={`${BTN_PRIMARY} px-8 py-3.5`}>Send Your Requirements <span aria-hidden="true">&rarr;</span></Link>
        <Link to="/products/" className={`${BTN_GHOST_DARK} px-8 py-3.5`}>View Products</Link>
      </ClosingCta>
    </>
  );
}