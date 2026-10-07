import { Link, useSearchParams } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import RfqForm from "../components/RfqForm.jsx";
import { getProduct } from "../data/products.js";
import { Seo, WRAP, SECTION, ContactLines } from "../components/ui.jsx";
import {
  PhotoBanner, TrustStrip, Icon, ICONS, IMAGES, GRID_BG, TEXT_LINK,
} from "../components/PageKit.jsx";

const TRUST = [
  { title: "Reference Number", body: "Every enquiry is stored and referenced.", icon: ICONS.doc },
  { title: "Specification Review", body: "Checked against available grades.", icon: ICONS.clipboard },
  { title: "Tailored Quotation", body: "Specification, packaging and terms confirmed.", icon: ICONS.check },
  { title: "Reply by Email", body: "Our export desk responds to you directly.", icon: ICONS.globe },
];

const NEXT = [
  "Your enquiry is stored and you receive a reference number.",
  "We review your requirements against available grades.",
  "We confirm specification, packaging and terms in a quotation.",
];

export default function RequestQuote() {
  const [params] = useSearchParams();
  const p = getProduct(params.get("product") || "");

  return (
    <>
      <Seo title="Request an Export Quote" description="Tell us the product, quantity and destination. Add your technical specification for a tailored export quotation." />

      <PhotoBanner
        image={IMAGES.port}
        eyebrow="Request a Quote"
        title="Request an Export Quote"
        body="Tell us the product, quantity and destination. Add your technical specification if you have one."
      />

      <TrustStrip items={TRUST} />
      <Breadcrumbs trail={[{ label: "Request a Quote" }]} />

      <section className={`${SECTION} bg-ivory`} aria-labelledby="rfq-title">
        <div className={`${WRAP} grid items-start gap-8 lg:grid-cols-12 lg:gap-10`}>
          {/* Form */}
          <div className="overflow-hidden rounded-2xl border border-charcoal/10 bg-white shadow-lg lg:col-span-8">
            <div className="h-1.5 bg-brass" aria-hidden="true" />
            <div className="p-6 sm:p-9">
              <span className="text-xs font-bold uppercase tracking-widest text-brass">Enquiry Form</span>
              <h2 id="rfq-title" className="mt-2 font-serif text-2xl font-bold text-charcoal sm:text-3xl">Send Your Requirements</h2>

              {p && (
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-brass/50 bg-brass/10 px-4 py-3">
                  <p className="text-sm text-charcoal">
                    <span className="font-bold">Selected product:</span> {p.name}
                  </p>
                  <Link to="/products/" className={TEXT_LINK}>Change product</Link>
                </div>
              )}

              <div className="mt-7">
                <RfqForm key={p?.slug || "none"} prefill={p?.formValue} sourcePage={p ? `product:${p.slug}` : "request-a-quote"} />
              </div>
            </div>
          </div>

          {/* Side column */}
          <aside className="space-y-6 lg:sticky lg:top-28 lg:col-span-4">
            <div className="relative overflow-hidden rounded-2xl bg-charcoal p-7 text-white shadow-xl">
              <div className="pointer-events-none absolute inset-0" style={GRID_BG} aria-hidden="true" />
              <div className="relative">
                <span className="block h-0.5 w-10 bg-brass" aria-hidden="true" />
                <h2 className="mt-4 font-serif text-2xl font-bold text-brass">What happens next</h2>
                <ol className="relative mt-6 space-y-5">
                  <span className="absolute bottom-4 left-[1.1rem] top-4 border-l-2 border-dashed border-brass/50" aria-hidden="true" />
                  {NEXT.map((t, i) => (
                    <li key={t} className="relative flex items-start gap-4">
                      <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-brass bg-charcoal font-serif text-sm font-bold text-brass">{i + 1}</span>
                      <p className="pt-1 text-sm leading-relaxed text-white/85">{t}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="rounded-2xl border border-charcoal/10 bg-white p-7 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-charcoal text-brass"><Icon d={ICONS.globe} className="h-5 w-5" /></span>
                <h2 className="font-serif text-xl font-bold text-charcoal">Contact details</h2>
              </div>
              <ContactLines className="mt-5" />
            </div>

            <div className="rounded-2xl border border-charcoal/10 border-l-4 border-l-brass bg-white p-6 shadow-sm">
              <p className="font-serif text-lg font-bold text-charcoal">Not sure what to ask for?</p>
              <p className="mt-1 text-sm text-slate">Browse the products or read the buyer questions first.</p>
              <p className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                <Link to="/products/" className={TEXT_LINK}>View products <span aria-hidden="true">&rarr;</span></Link>
                <Link to="/faq/" className={TEXT_LINK}>Read the FAQ <span aria-hidden="true">&rarr;</span></Link>
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}