import { Link, Navigate, useLocation } from "react-router-dom";
import { Seo, WRAP, BODY, BTN_BRASS, BTN_LINE } from "../components/ui.jsx";

export default function ThankYou() {
  const { state } = useLocation();
  if (!state?.reference) return <Navigate to="/request-a-quote/" replace />; // no fake success on direct visits
  return (
    <section className="py-20">
      <Seo title="Enquiry Received" />
      <div className={`${WRAP} max-w-xl text-center`}>
        <h1 className="text-3xl font-bold">We have received your enquiry{state.name ? `, ${state.name.split(" ")[0]}` : ""}</h1>
        <p className="mt-4 rounded-lg bg-white p-4 text-lg font-bold">Reference: {state.reference}</p>
        {state.products?.length > 0 && <p className={`mt-4 ${BODY}`}>Product: {state.products.join(", ")}</p>}
        <p className={`mt-3 ${BODY}`}>Our export desk will review your requirements and reply by email. Please quote your reference in any follow-up.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Link to="/products/" className={BTN_BRASS}>Back to products</Link><Link to="/" className={BTN_LINE}>Return home</Link></div>
      </div>
    </section>
  );
}
