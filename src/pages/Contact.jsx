import Breadcrumbs from "../components/Breadcrumbs.jsx";
import { COMPANY } from "../data/site.js";
import { Seo, WRAP, SECTION, ContactLines, QuoteLink } from "../components/ui.jsx";
import {
  PhotoBanner, SectionHeader, Icon, ICONS, IMAGES, GRID_BG, BTN_PRIMARY,
} from "../components/PageKit.jsx";

const INCLUDE = [
  ["Product", ICONS.box],
  ["Quantity", ICONS.clipboard],
  ["Destination", ICONS.globe],
  ["Your specification, if you have one", ICONS.doc],
];

const NEXT = [
  ["Enquiry stored", "Your enquiry is stored and given a reference number."],
  ["Export desk review", "Our export desk reviews your requirements."],
  ["Reply by email", "We reply by email. Please quote your reference in any follow-up."],
];

export default function Contact() {
  return (
    <>
      <Seo title="Contact" description={`Contact ${COMPANY.name}, an India-based merchant exporter of coconut charcoal and activated carbon.`} />

      <PhotoBanner
        image={IMAGES.logistics}
        eyebrow="Contact"
        title="Contact Our Export Desk"
        body="The fastest way to reach our export desk is the enquiry form. Your enquiry is stored and given a reference number."
      >
        <QuoteLink className={BTN_PRIMARY}>Send Your Requirements <span aria-hidden="true">&rarr;</span></QuoteLink>
      </PhotoBanner>

      <Breadcrumbs trail={[{ label: "Contact" }]} />

      <section className={`${SECTION} bg-ivory`} aria-labelledby="contact-title">
        <div className={`${WRAP} grid items-start gap-8 lg:grid-cols-12 lg:gap-10`}>
          <div className="rounded-2xl border border-charcoal/10 border-t-4 border-t-brass bg-white p-7 shadow-sm sm:p-9 lg:col-span-7">
            <SectionHeader eyebrow="Enquiry" title="Send Your Requirements" id="contact-title"
              sub={`${COMPANY.name} is based in ${COMPANY.country}. Tell us the product, quantity and destination, and add your specification if you have one.`} />
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {INCLUDE.map(([t, icon]) => (
                <li key={t} className="flex items-center gap-3 rounded-xl border border-charcoal/10 bg-ivory p-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-charcoal text-brass"><Icon d={icon} className="h-4 w-4" /></span>
                  <span className="text-sm font-semibold text-charcoal">{t}</span>
                </li>
              ))}
            </ul>
            <QuoteLink className={`${BTN_PRIMARY} mt-8 px-8 py-3.5`}>Send Your Requirements <span aria-hidden="true">&rarr;</span></QuoteLink>
          </div>

          <aside className="relative overflow-hidden rounded-2xl bg-charcoal p-7 text-white shadow-xl sm:p-9 lg:col-span-5">
            <div className="pointer-events-none absolute inset-0" style={GRID_BG} aria-hidden="true" />
            <div className="relative">
              <span className="block h-0.5 w-10 bg-brass" aria-hidden="true" />
              <h2 className="mt-4 font-serif text-2xl font-bold text-brass">Export Desk</h2>
              <p className="mt-1 text-sm text-white/70">{COMPANY.name} &middot; {COMPANY.country}</p>
              <ContactLines className="mt-6 text-white/85" />
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