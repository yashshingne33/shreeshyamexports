import Breadcrumbs from "../components/Breadcrumbs.jsx";
import { COMPANY } from "../data/site.js";
import { Seo } from "../components/ui.jsx";
import { PageBanner, LegalBody } from "../components/PageKit.jsx";

/* Website terms (Section 13). The first two sections use the proposed
   replacement wording. The third is retained only after business review. */
const S = [
  [
    "Purpose of this site",
    "This website provides product information and allows you to request a quotation. Website content does not itself confirm product availability, shipment acceptance or an order. The agreed product specification, packing, price, payment and delivery terms are recorded in the written commercial documents accepted by the parties.",
  ],
  [
    "Product information",
    "Product information should be reviewed against the dated specification for the proposed grade. Images may illustrate a product or pack format; any illustrative packaging concept is identified. Confirm the required grade and packing before placing an order.",
  ],
  [
    "No warranty on website content",
    "We aim to keep this site accurate and current but provide it without warranty of completeness. Please confirm any detail with us before relying on it commercially.",
  ],
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