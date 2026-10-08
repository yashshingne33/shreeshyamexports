import Breadcrumbs from "../components/Breadcrumbs.jsx";
import { COMPANY } from "../data/site.js";
import { Seo } from "../components/ui.jsx";
import { PageBanner, LegalBody } from "../components/PageKit.jsx";

// Draft wording built from the revision brief's claims controls.
// Have the owner (and counsel, if required) review before launch.
const S = [
  ["General information", `The content of this website is general information about products offered by ${COMPANY.name}. It is not a binding offer or sales contract until confirmed in a written quotation.`],
  ["Specifications", "Specifications can be offered according to buyer requirements and confirmed against the applicable batch COA. Website content alone does not guarantee any specification value."],
  ["Documents", "Applicable documentation can be provided or arranged according to product, destination and buyer requirements. Not every document or certificate applies to every product."],
  ["Certifications and approvals", "No certification, approval or test result is implied unless it is stated for the exact product and scope it covers and is supported by a valid document."],
  ["Third-party testing and inspection", "Third-party inspection or testing can be arranged subject to buyer requirements and commercial terms."],
  ["Images", "Product images are illustrative. Actual form, size and packing are confirmed for each order."],
];

export default function Disclaimer() {
  return (
    <>
      <Seo title="Disclaimer" description={`Disclaimer for the ${COMPANY.name} website: product information, specifications, documents and certifications.`} />
      <PageBanner eyebrow="Legal" title="Disclaimer" body="How to read the product information, specifications and documents shown on this website." />
      <Breadcrumbs trail={[{ label: "Disclaimer" }]} />
      <LegalBody sections={S} />
    </>
  );
}