import { Link, useLocation } from "react-router-dom";
import { COMPANY } from "../data/site.js";

/**
 * Mobile-only bottom bar: Request a Quote + WhatsApp (or Call / Contact).
 * Save as: src/components/MobileActionBar.jsx   (rendered inside Footer)
 * Reads COMPANY.whatsapp, then COMPANY.phone. If neither exists it falls
 * back to the Contact page, so no number is ever invented.
 */
export default function MobileActionBar() {
  const { pathname } = useLocation();
  if (pathname.startsWith("/request-a-quote")) return null; // the form is already on screen

  const raw = COMPANY.whatsapp || COMPANY.phone || "";
  const digits = String(raw).replace(/[^\d]/g, "");
  const href = COMPANY.whatsapp && digits ? `https://wa.me/${digits}` : digits ? `tel:+${digits}` : null;
  const label = COMPANY.whatsapp && digits ? "WhatsApp" : digits ? "Call" : "Contact";

  const base =
    "flex flex-1 items-center justify-center gap-2 px-4 py-3.5 text-sm font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-white";

  return (
    <nav aria-label="Quick actions" className="fixed inset-x-0 bottom-0 z-40 flex border-t-2 border-brass bg-charcoal pb-[env(safe-area-inset-bottom)] shadow-[0_-6px_20px_rgba(0,0,0,0.25)] lg:hidden">
      <Link to="/request-a-quote/" className={`${base} bg-brass text-charcoal hover:bg-[#9a7e4b]`}>Request a Quote</Link>
      {href ? (
        <a href={href} className={`${base} text-white hover:bg-white/10`} {...(label === "WhatsApp" ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
          {label}
        </a>
      ) : (
        <Link to="/contact/" className={`${base} text-white hover:bg-white/10`}>{label}</Link>
      )}
    </nav>
  );
}