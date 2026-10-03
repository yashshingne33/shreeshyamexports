import { useSearchParams } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import RfqForm from "../components/RfqForm.jsx";
import { getProduct } from "../data/products.js";
import { Seo, PageHero, WRAP, SECTION, CARD, ContactLines } from "../components/ui.jsx";

export default function RequestQuote() {
  const [params] = useSearchParams();
  const p = getProduct(params.get("product") || "");
  return (
    <>
      <Seo title="Request an Export Quote" description="Tell us the product, quantity and destination. Add your technical specification for a tailored export quotation." />
      <PageHero title="Request an Export Quote" body="Tell us the product, quantity and destination. Add your technical specification if you have one." />
      <Breadcrumbs trail={[{ label: "Request a Quote" }]} />
      <section className={SECTION}>
        <div className={`${WRAP} grid gap-10 lg:grid-cols-[1.5fr_1fr]`}>
          <div className={`${CARD} p-6 sm:p-9`}>
            <RfqForm key={p?.slug || "none"} prefill={p?.formValue} sourcePage={p ? `product:${p.slug}` : "request-a-quote"} />
          </div>
          <aside className="space-y-5 self-start">
            <div className={`${CARD} p-6`}>
              <h2 className="text-lg font-bold">What happens next</h2>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate">
                <li>Your enquiry is stored and you receive a reference number.</li>
                <li>We review your requirements against available grades.</li>
                <li>We confirm specification, packaging and terms in a quotation.</li>
              </ol>
            </div>
            <ContactLines />
          </aside>
        </div>
      </section>
    </>
  );
}
