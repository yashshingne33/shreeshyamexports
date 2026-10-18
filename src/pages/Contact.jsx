import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import { COMPANY } from "../data/site.js";
import { Seo, WRAP, SECTION } from "../components/ui.jsx";
import {
  PhotoBanner, SectionHeader, Icon, ICONS, IMAGES, GRID_BG, BTN_PRIMARY, BTN_GHOST_LIGHT,
} from "../components/PageKit.jsx";

const INCLUDE = [
  ["Product", ICONS.box],
  ["Quantity", ICONS.clipboard],
  ["Destination", ICONS.globe],
  ["Your specification, if you have one", ICONS.doc],
];

const NEXT = [
  ["Enquiry stored", "Your enquiry is stored and given a reference number."],
  ["Export team review", "Our export team reviews your requirements."],
  ["Reply by email", "We reply by email. Please quote your reference in any follow-up."],
];

const BANNER_IMAGE = IMAGES.logistics ?? IMAGES.hero;
const LINK = "underline decoration-brass decoration-2 underline-offset-4 transition-colors hover:text-brass focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass";

/* Public details: a row appears only when its value is confirmed in data/site.js.
   Nothing is ever shown as a placeholder. */
function detailRows() {
  return [
    COMPANY.name && ["Trading name", COMPANY.name],
    COMPANY.legalName && ["Legal entity", COMPANY.legalName],
    COMPANY.address && ["Business address", COMPANY.address],
    COMPANY.email && ["Email", <a key="e" className={LINK} href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>],
    COMPANY.phone && ["Phone", <a key="p" className={LINK} href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}>{COMPANY.phone}</a>],
    COMPANY.whatsapp && ["WhatsApp", <a key="w" className={LINK} href={`https://wa.me/${COMPANY.whatsapp}`} rel="noopener noreferrer">Message us on WhatsApp</a>],
    COMPANY.exportContact && ["Export contact", COMPANY.exportContact],
    COMPANY.hours && ["Business hours", `${COMPANY.hours} IST (UTC+05:30)`],
    COMPANY.registration && ["Registration", COMPANY.registration],
  ].filter(Boolean);
}

export default function Contact() {
  const rows = detailRows();

  return (
    <>
      <Seo
        title="Contact"
        description={`Contact ${COMPANY.name}, an India-based merchant exporter of coconut charcoal and activated carbon.`}
      />

      <PhotoBanner
        image={BANNER_IMAGE}
        eyebrow="Contact"
        title="Contact Our Export Team"
        body="Tell us the product, quantity and destination you have in mind. Our export team will review your requirements and advise the next steps for specification, documentation and quotation."
      >
        <Link to="/request-a-quote/" className={BTN_PRIMARY}>Send an Enquiry <span aria-hidden="true">&rarr;</span></Link>
      </PhotoBanner>

      <Breadcrumbs trail={[{ label: "Contact" }]} />

      <section className={`${SECTION} bg-ivory`} aria-labelledby="contact-title">
        <div className={`${WRAP} grid items-start gap-8 lg:grid-cols-12 lg:gap-10`}>
          <div className="rounded-2xl border border-charcoal/10 border-t-4 border-t-brass bg-white p-7 shadow-sm sm:p-9 lg:col-span-7">
            <SectionHeader
              eyebrow="Enquiry"
              title="Send Your Requirements"
              id="contact-title"
              sub={`${COMPANY.name} is based in ${COMPANY.country}. Tell us the product, quantity and destination, and add your specification if you have one.`}
            />
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {INCLUDE.map(([t, icon]) => (
                <li key={t} className="flex items-center gap-3 rounded-xl border border-charcoal/10 bg-ivory p-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-charcoal text-brass"><Icon d={icon} className="h-4 w-4" /></span>
                  <span className="text-sm font-semibold text-charcoal">{t}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link to="/request-a-quote/" className={`${BTN_PRIMARY} px-8 py-3.5`}>Send an Enquiry <span aria-hidden="true">&rarr;</span></Link>
              {COMPANY.email && (
                <a href={`mailto:${COMPANY.email}`} className={`${BTN_GHOST_LIGHT} px-8 py-3.5`}>Email Our Export Team</a>
              )}
              {COMPANY.whatsapp && (
                <a href={`https://wa.me/${COMPANY.whatsapp}`} rel="noopener noreferrer" className={`${BTN_GHOST_LIGHT} px-8 py-3.5`}>WhatsApp</a>
              )}
            </div>
          </div>

          <aside className="relative overflow-hidden rounded-2xl bg-charcoal p-7 text-white shadow-xl sm:p-9 lg:col-span-5" aria-labelledby="desk-title">
            <div className="pointer-events-none absolute inset-0" style={GRID_BG} aria-hidden="true" />
            <div className="relative">
              <span className="block h-0.5 w-10 bg-brass" aria-hidden="true" />
              <h2 id="desk-title" className="mt-4 font-serif text-2xl font-bold text-brass">Export Desk</h2>
              <p className="mt-1 text-sm text-white/70">{COMPANY.name} &middot; {COMPANY.country}</p>
              <dl className="mt-6 space-y-4 text-sm">
                {rows.map(([k, v]) => (
                  <div key={k} className="grid gap-1 border-t border-white/10 pt-4 first:border-t-0 first:pt-0 sm:grid-cols-[8.5rem_1fr] sm:gap-4">
                    <dt className="text-xs font-bold uppercase tracking-widest text-brass">{k}</dt>
                    <dd className="min-w-0 break-words text-white/90 [overflow-wrap:anywhere]">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </div>
      </section>

      <section className={`${SECTION} bg-white`} aria-labelledby="next-title">
        <div className={WRAP}>
          <SectionHeader eyebrow="After You Send" title="What Happens Next" id="next-title" center />
          <ol className="relative mt-12 grid gap-6 md:grid-cols-3">
            <div className="absolute left-[16%] right-[16%] top-7 z-0 hidden border-t-2 border-dashed border-brass/50 md:block" aria-hidden="true" />
            {NEXT.map(([t, d], i) => (
              <li key={t} className="relative z-10 rounded-2xl border border-charcoal/10 bg-ivory p-6 text-center shadow-sm">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-charcoal font-serif text-lg font-bold text-brass shadow-md">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-serif text-lg font-bold text-charcoal">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}