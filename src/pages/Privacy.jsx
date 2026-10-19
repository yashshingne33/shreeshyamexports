import Breadcrumbs from "../components/Breadcrumbs.jsx";
import { COMPANY } from "../data/site.js";
import { Seo } from "../components/ui.jsx";
import { PageBanner, LegalBody } from "../components/PageKit.jsx";

/* ------------------------------------------------------------------ *
 * PRIVACY POLICY (Section 13 of the change document)
 *
 * Fill a field below ONLY after the business has confirmed it (with legal
 * review). A field left empty is simply not shown, so no square-bracket
 * placeholder can ever reach the live site. Do not invent providers,
 * retention periods or cookie statements.
 * ------------------------------------------------------------------ */
const CONFIRMED = {
  operator: "",        // exact legal operator name
  address: "",         // public address
  effectiveDate: "",   // e.g. "1 November 2026"
  logsAnalytics: "",   // actual server logs, analytics, cookies (or a confirmed statement that none apply)
  providers: "",       // confirmed hosting and form providers
  recipients: "",      // confirmed recipient categories
  crossBorder: "",     // verified cross-border processing details, where applicable
};

const contactLine = COMPANY.email ? ` at ${COMPANY.email}` : " using the enquiry form";

const providerText =
  CONFIRMED.providers && CONFIRMED.recipients
    ? `We use ${CONFIRMED.providers} to operate this website and process enquiries. Information may be shared with ${CONFIRMED.recipients} where necessary to respond to your request.${CONFIRMED.crossBorder ? ` ${CONFIRMED.crossBorder}` : ""}`
    : // Interim wording: names no provider, makes no claim the business has not confirmed.
      "We use website hosting and form-processing services to operate this website and process enquiries. Information may be shared with those services where necessary to respond to your request.";

const S = [
  (CONFIRMED.operator || CONFIRMED.address || CONFIRMED.effectiveDate) && [
    "Who we are",
    [
      CONFIRMED.operator && `This website is operated by ${CONFIRMED.operator}.`,
      CONFIRMED.address && `Address: ${CONFIRMED.address}.`,
      CONFIRMED.effectiveDate && `Effective date: ${CONFIRMED.effectiveDate}.`,
    ].filter(Boolean).join(" "),
  ],
  [
    "What we collect",
    "When you submit an enquiry, we receive the information you provide, including your name, company, email address, destination, product requirements and any attachments. Please avoid including information that is not needed for your business enquiry.",
  ],
  CONFIRMED.logsAnalytics && ["Server logs, analytics and cookies", CONFIRMED.logsAnalytics],
  [
    "How we use it",
    "We use enquiry information to review your requirements, communicate with you and prepare quotations or related business records. If you choose to receive product updates, we use your email address for that purpose. You may ask us to stop those updates at any time.",
  ],
  ["Service providers", providerText],
  [
    "Retention and your rights",
    `We keep enquiry information only as long as needed to respond and for reasonable business records. To request access, correction or deletion, contact us${contactLine}.`,
  ],
].filter(Boolean);

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