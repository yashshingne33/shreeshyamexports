import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import { COMPANY } from "../data/site.js";
import { Seo, WRAP, SECTION, QuoteLink } from "../components/ui.jsx";
import {
  PhotoBanner, TrustStrip, SectionHeader, ClosingCta, Photo, Icon, ICONS, IMAGES, GRID_BG,
  BTN_PRIMARY, BTN_GHOST_DARK,
} from "../components/PageKit.jsx";

const BLOCKS = [
  ["Our expertise", "Over the past two and a half decades, our team has developed a practical understanding of how product quality, sourcing decisions and customer requirements shape reliable supply. Our background in charcoal, Met Coke and LAM Coke helps us ask the right questions, assess requirements carefully and understand what customers expect from their suppliers.", ICONS.flask],
  ["Why we started", `We established ${COMPANY.name} to build a trusted and respected organisation guided by integrity, transparency, quality, commitment and long-term relationships. These values shape how we work with customers, suppliers and business partners.`, ICONS.shield],
  ["Our approach", "We believe dependable business relationships are built through clear expectations, consistent communication and responsible follow-through. As a merchant exporter, we work to understand each buyer's requirements and coordinate sourcing, specification review, packaging and export arrangements for the agreed supply.", ICONS.clipboard],
  ["Looking ahead", `${COMPANY.name} is a new name carrying established industry knowledge and relationships into a new chapter. We aim to create lasting value for international customers and supply partners through professional conduct, dependable service and partnerships that grow over time.`, ICONS.globe],
];

const VALUES = ["Integrity", "Transparency", "Quality", "Commitment", "Long-term relationships"];

const TRUST = [
  { title: "Industry Understanding", body: "Team experience in charcoal, Met Coke and LAM Coke.", icon: ICONS.flask },
  { title: "Practical Sourcing", body: "Quality, supply and customer expectations.", icon: ICONS.clipboard },
  { title: "Transparent Communication", body: "Clear expectations and consistent follow-through.", icon: ICONS.doc },
  { title: "Long-Term Commitment", body: "Partnerships that grow over time.", icon: ICONS.shield },
];

export default function About() {
  return (
    <>
      <Seo title="About" description={`${COMPANY.name} is a new merchant export company backed by a team with over 25 years of experience in charcoal, Met Coke and LAM Coke.`} />

      <PhotoBanner
        image={IMAGES.logistics}
        eyebrow="About Us"
        title="A new name backed by over 25 years of industry experience"
        body={`${COMPANY.name} is a new merchant export company built on an experienced foundation. Our team brings more than 25 years of experience in the carbon and metallurgical fuel industry, with practical knowledge of charcoal, metallurgical coke (Met Coke) and low ash metallurgical coke (LAM Coke).`}
        aside={
          <div className="text-center">
            <p className="font-serif text-6xl font-bold text-brass">25+</p>
            <p className="mt-2 text-sm font-bold uppercase tracking-widest text-white">Years of team experience</p>
            <p className="mt-1 text-sm text-white/75">in the carbon and metallurgical fuel industry</p>
            <ul className="mt-5 flex flex-wrap justify-center gap-2">
              {["Charcoal", "Met Coke", "LAM Coke"].map((c) => (
                <li key={c} className="rounded-full border border-brass/60 px-3 py-1 text-xs font-semibold text-white">{c}</li>
              ))}
            </ul>
          </div>
        }
      >
        <QuoteLink className={BTN_PRIMARY}>Speak to Our Export Team <span aria-hidden="true">&rarr;</span></QuoteLink>
        <Link to="/quality/" className={BTN_GHOST_DARK}>How We Work</Link>
      </PhotoBanner>

      <TrustStrip items={TRUST} />
      <Breadcrumbs trail={[{ label: "About" }]} />

      {/* Today */}
      <section className={`${SECTION} bg-white`} aria-labelledby="today-title">
        <div className={`${WRAP} grid items-center gap-14 lg:grid-cols-12 lg:gap-16`}>
          <div className="relative lg:col-span-5">
            <Photo src={IMAGES.port} alt="Export shipping at a container port" ratio="aspect-[4/5]" className="rounded-2xl border border-charcoal/10 shadow-xl" />
            <div className="absolute -bottom-6 right-4 rounded-xl border-l-4 border-brass bg-charcoal px-5 py-4 text-white shadow-2xl sm:right-8">
              <p className="font-serif text-lg font-bold">Established experience</p>
              <p className="text-xs text-white/75">A new export company</p>
            </div>
          </div>
          <div className="mt-6 lg:col-span-7 lg:mt-0">
            <SectionHeader eyebrow="Today" title="Experience, Applied to Export" id="today-title" />
            <p className="mt-5 text-lg leading-relaxed text-slate">
              Today, we bring that experience to an export-focused business offering coconut charcoal products and coconut shell activated carbon to international buyers. Our approach combines an understanding of product quality, sourcing and market requirements with a commitment to clear communication and dependable service.
            </p>
            <p className="mt-8 text-xs font-bold uppercase tracking-widest text-charcoal">What guides us</p>
            <ul className="mt-3 flex flex-wrap gap-3">
              {VALUES.map((v) => (
                <li key={v} className="inline-flex items-center gap-2 rounded-full border border-brass/50 bg-brass/10 px-4 py-2 text-sm font-semibold text-charcoal">
                  <Icon d={ICONS.check} className="h-4 w-4 text-brass" /> {v}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Four blocks on dark */}
      <section className="relative overflow-hidden bg-charcoal py-20 text-white lg:py-24" aria-labelledby="story-title">
        <div className="pointer-events-none absolute inset-0" style={GRID_BG} aria-hidden="true" />
        <div className={`relative z-10 ${WRAP}`}>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-brass">Our Story</span>
            <h2 id="story-title" className="mt-3 font-serif text-3xl font-bold leading-tight sm:text-4xl">Expertise, Purpose, Approach and Direction</h2>
          </div>
          <ul className="mt-12 grid gap-6 md:grid-cols-2">
            {BLOCKS.map(([t, d, icon], i) => (
              <li key={t} className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-7 backdrop-blur-sm sm:p-8">
                <span className="pointer-events-none absolute -right-2 -top-4 select-none font-serif text-8xl font-bold text-white/[0.06]" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-brass/70 text-brass"><Icon d={icon} className="h-6 w-6" /></span>
                <h3 className="mt-5 font-serif text-2xl font-bold text-brass">{t}</h3>
                <p className="mt-3 leading-relaxed text-white/80">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ClosingCta id="about-cta" image={IMAGES.ship} title="Our experience is established. Our name is new. Our commitment is long-term.">
        <QuoteLink className={`${BTN_PRIMARY} px-8 py-3.5`}>Speak to Our Export Team <span aria-hidden="true">&rarr;</span></QuoteLink>
        <Link to="/products/" className={`${BTN_GHOST_DARK} px-8 py-3.5`}>View Products</Link>
      </ClosingCta>
    </>
  );
}