import Breadcrumbs from "../components/Breadcrumbs.jsx";
import { COMPANY } from "../data/site.js";
import { Seo, PageHero, WRAP, SECTION, BODY } from "../components/ui.jsx";

const S = [
  ["Purpose of this site", `This website describes products offered by ${COMPANY.name} and lets you request a quotation. Product information is for enquiry purposes and is not a binding offer or sales contract until confirmed in a written quotation.`],
  ["Product information", "Specifications are confirmed against a dated data sheet for the selected grade and checked against your order before shipment."],
  ["No warranty on website content", "We aim to keep this site accurate and current but provide it without warranty of completeness. Please confirm any detail with us before relying on it commercially."],
];

export default function Terms() {
  return (
    <>
      <Seo title="Website Terms" description={`Terms of use for the ${COMPANY.name} website.`} />
      <PageHero title="Website Terms" />
      <Breadcrumbs trail={[{ label: "Website Terms" }]} />
      <section className={SECTION}>
        <div className={`${WRAP} max-w-3xl`}>
          {S.map(([t, d]) => <div key={t} className="mb-8"><h2 className="text-xl font-bold">{t}</h2><p className={`mt-2 ${BODY}`}>{d}</p></div>)}
        </div>
      </section>
    </>
  );
}
