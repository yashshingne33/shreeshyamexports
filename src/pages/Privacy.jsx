import Breadcrumbs from "../components/Breadcrumbs.jsx";
import { COMPANY } from "../data/site.js";
import { Seo } from "../components/ui.jsx";
import { PageBanner, LegalBody } from "../components/PageKit.jsx";

const S = [
  ["What we collect", "When you submit the enquiry form we collect what you enter: your name, company, email, country, product, quantity and message details, plus any files you attach. We do not collect personal data through any other form on this site."],
  ["How we use it", "We use enquiry information to respond to your request: to confirm specifications, prepare a quotation or answer your question. We do not sell your information. Marketing emails are sent only if you tick the separate optional box."],
  ["Service providers", "Enquiries and attachments are stored by our website hosting and form provider and delivered to our export desk. They act on our behalf for that purpose only."],
  ["Retention and your rights", `We keep enquiry information only as long as needed to respond and for reasonable business records. To request access, correction or deletion, contact us${COMPANY.email ? ` at ${COMPANY.email}` : " using the enquiry form"}.`],
];

export default function Privacy() {
  return (
    <>
      <Seo title="Privacy Policy" description={`How ${COMPANY.name} handles enquiry information.`} />
      <PageBanner eyebrow="Legal" title="Privacy Policy" body="What we collect through the enquiry form, how we use it and how to reach us about it." />
      <Breadcrumbs trail={[{ label: "Privacy Policy" }]} />
      <LegalBody sections={S} />
    </>
  );
}