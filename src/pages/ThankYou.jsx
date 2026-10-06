import { Link, Navigate, useLocation } from "react-router-dom";
import { Seo, WRAP } from "../components/ui.jsx";
import { Icon, ICONS, BTN_PRIMARY, BTN_GHOST_LIGHT } from "../components/PageKit.jsx";

export default function ThankYou() {
  const { state } = useLocation();
  if (!state?.reference) return <Navigate to="/request-a-quote/" replace />; // no fake success on direct visits

  const first = state.name ? state.name.split(" ")[0] : "";

  return (
    <section className="bg-ivory py-16 sm:py-20 lg:py-24">
      <Seo title="Enquiry Received" />
      <div className={`${WRAP} max-w-2xl`}>
        <div className="overflow-hidden rounded-2xl border border-charcoal/10 bg-white text-center shadow-lg">
          <div className="h-1.5 bg-brass" aria-hidden="true" />
          <div className="p-8 sm:p-12">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-brass/60 bg-ivory text-brass shadow-sm">
              <Icon d={ICONS.check} className="h-8 w-8" />
            </span>
            <p className="mt-6 text-xs font-bold uppercase tracking-widest text-brass">Enquiry Received</p>
            <h1 className="mt-3 font-serif text-3xl font-bold leading-tight text-charcoal sm:text-4xl">
              We have received your enquiry{first ? `, ${first}` : ""}
            </h1>

            <div className="mt-8 rounded-xl border-2 border-dashed border-brass/50 bg-ivory p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-slate">Your reference</p>
              <p className="mt-1 font-serif text-2xl font-bold tracking-wide text-charcoal">{state.reference}</p>
            </div>

            {state.products?.length > 0 && (
              <p className="mt-5 text-slate"><span className="font-semibold text-charcoal">Product:</span> {state.products.join(", ")}</p>
            )}

            <p className="mx-auto mt-5 max-w-md leading-relaxed text-slate">
              Our export desk will review your requirements and reply by email. Please quote your reference in any follow-up.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link to="/products/" className={BTN_PRIMARY}>Back to products <span aria-hidden="true">&rarr;</span></Link>
              <Link to="/" className={BTN_GHOST_LIGHT}>Return home</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}