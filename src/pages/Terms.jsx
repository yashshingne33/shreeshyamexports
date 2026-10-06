import Breadcrumbs from "../components/Breadcrumbs.jsx";
import { COMPANY } from "../data/site.js";
import { Seo } from "../components/ui.jsx";
import { PageBanner, LegalBody } from "../components/PageKit.jsx";

const S = [
  ["Purpose of this site", `This website describes products offered by ${COMPANY.name} and lets you request a quotation. Product information is for enquiry purposes and is not a binding offer or sales contract until confirmed in a written quotation.`],
  ["Product information", "Specifications are confirmed against a dated data sheet for the selected grade and checked against your order before shipment."],
  ["No warranty on website content", "We aim to keep this site accurate and current but provide it without warranty of completeness. Please confirm any detail with us before relying on it commercially."],
];

export default function Terms() {
  return (
    <>
      <Seo title="Website Terms" description={`Terms of use for the ${COMPANY.name} website.`} />
      <PageBanner eyebrow="Legal" title="Website Terms" body="How this website and its product information should be used." />
      <Breadcrumbs trail={[{ label: "Website Terms" }]} />
      <LegalBody sections={S} />
    </>
  );
}