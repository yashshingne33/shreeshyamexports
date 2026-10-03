import Breadcrumbs from "../components/Breadcrumbs.jsx";
import { COMPANY } from "../data/site.js";
import { Seo, PageHero, WRAP, SECTION, BODY, QuoteLink } from "../components/ui.jsx";

const BLOCKS = [
  ["Our expertise", "Over the past two and a half decades, our team has developed a practical understanding of how product quality, sourcing decisions and customer requirements shape reliable supply. Our background in charcoal, Met Coke and LAM Coke helps us ask the right questions, assess requirements carefully and understand what customers expect from their suppliers."],
  ["Why we started", `We established ${COMPANY.name} to build a trusted and respected organisation guided by integrity, transparency, quality, commitment and long-term relationships. These values shape how we work with customers, suppliers and business partners.`],
  ["Our approach", "We believe dependable business relationships are built through clear expectations, consistent communication and responsible follow-through. As a merchant exporter, we work to understand each buyer's requirements and coordinate sourcing, specification review, packaging and export arrangements for the agreed supply."],
  ["Looking ahead", `${COMPANY.name} is a new name carrying established industry knowledge and relationships into a new chapter. We aim to create lasting value for international customers and supply partners through professional conduct, dependable service and partnerships that grow over time.`],
];

export default function About() {
  return (
    <>
      <Seo title="About" description={`${COMPANY.name} is a new merchant export company backed by a team with over 25 years of experience in charcoal, Met Coke and LAM Coke.`} />
      <PageHero title="A new name backed by over 25 years of industry experience" body={`${COMPANY.name} is a new merchant export company built on an experienced foundation. Our team brings more than 25 years of experience in the carbon and metallurgical fuel industry, with practical knowledge of charcoal, metallurgical coke (Met Coke) and low ash metallurgical coke (LAM Coke).`} />
      <Breadcrumbs trail={[{ label: "About" }]} />
      <section className={SECTION}>
        <div className={`${WRAP} max-w-3xl`}>
          <p className={`text-lg ${BODY}`}>Today, we bring that experience to an export-focused business offering coconut charcoal products and coconut shell activated carbon to international buyers. Our approach combines an understanding of product quality, sourcing and market requirements with a commitment to clear communication and dependable service.</p>
          {BLOCKS.map(([t, d]) => <div key={t} className="mt-10"><h2 className="text-2xl font-bold">{t}</h2><p className={`mt-3 ${BODY}`}>{d}</p></div>)}
          <p className="mt-12 text-xl font-bold">Our experience is established. Our name is new. Our commitment is long-term.</p>
          <QuoteLink className="mt-6 inline-flex rounded-lg bg-brass px-6 py-3 text-sm font-semibold hover:bg-[#c0a56a]">Speak to Our Export Team</QuoteLink>
        </div>
      </section>
    </>
  );
}
