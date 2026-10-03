import { Link } from "react-router-dom";
import { COMPANY, NAV_PRODUCTS, NAV_COMPANY } from "../../data/site.js";
import { ContactLines, BTN_BRASS } from "../ui.jsx";

const col = "text-xs font-semibold uppercase tracking-widest text-brass";
const lnk = "text-sm text-ivory/75 hover:text-brass";

export default function Footer() {
  const more = [{ label: "Quality", to: "/quality/" }, { label: "Applications", to: "/applications/" }, { label: "Packaging and private label", to: "/packaging-private-label/" }];
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="container mx-auto max-w-content px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-lg font-bold">{COMPANY.name}</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ivory/75">
              India-based merchant exporter of coconut charcoal products and coconut shell activated carbon.
            </p>
            <p className="mt-3 max-w-xs text-sm text-ivory/60">A new export company. Over 25 years of team industry experience.</p>
          </div>
          <div>
            <p className={col}>Products</p>
            <ul className="mt-4 space-y-2.5">{NAV_PRODUCTS.map((l) => <li key={l.to}><Link to={l.to} className={lnk}>{l.label}</Link></li>)}</ul>
          </div>
          <div>
            <p className={col}>Company</p>
            <ul className="mt-4 space-y-2.5">{[...more, ...NAV_COMPANY].map((l) => <li key={l.to}><Link to={l.to} className={lnk}>{l.label}</Link></li>)}</ul>
          </div>
          <div>
            <p className={col}>Contact</p>
            <ContactLines className="mt-4 text-ivory/75" />
            <Link to="/request-a-quote/" className={`${BTN_BRASS} mt-5`}>Request an Export Quote</Link>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-ivory/15 pt-6 text-xs text-ivory/60 sm:flex-row sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy/" className="hover:text-brass">Privacy policy</Link>
            <Link to="/terms/" className="hover:text-brass">Website terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
