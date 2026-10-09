import { Link } from "react-router-dom";
import logoImg from "../../assets/logo-bg.png";
import { COMPANY, NAV_PRODUCTS, NAV_COMPANY } from "../../data/site.js";
import { ContactLines } from "../ui.jsx";

/* ------------------------------------------------------------------ *
 * LINKS — the footer carries every page (per the developer plan).
 * Links from data/site.js are kept; routes the plan requires that are
 * missing there are added, with no duplicates.
 * ------------------------------------------------------------------ */
const PLAN_PRODUCTS = [
  { label: "Activated Carbon", to: "/products/coconut-shell-activated-carbon/" },
  { label: "Hookah & Shisha Cubes", to: "/products/hookah-charcoal-cubes/" },
  { label: "Pillow Briquettes", to: "/products/pillow-charcoal-briquettes/" },
  { label: "Hexagonal Briquettes", to: "/products/hexagonal-charcoal-briquettes/" },
];
const PLAN_COMPANY = [
  { label: "About Us", to: "/about/" },
  { label: "Export Ordering", to: "/export-ordering/" },
  { label: "Resources", to: "/resources/" },
  { label: "FAQ", to: "/faq/" },
  { label: "Contact", to: "/contact/" },
];
const EXPLORE = [
  { label: "Applications", to: "/applications/" },
  { label: "Quality", to: "/quality/" },
  { label: "Packaging & Private Label", to: "/packaging-private-label/" },
  { label: "Request a Quote", to: "/request-a-quote/" },
];

const merge = (base = [], extra = []) => {
  const seen = new Set(base.map((l) => l.to));
  return [...base, ...extra.filter((l) => !seen.has(l.to))];
};

// Products: hub first, then the families.
const PRODUCT_LINKS = [{ label: "All Products", to: "/products/" }, ...merge(NAV_PRODUCTS, PLAN_PRODUCTS).filter((l) => l.to !== "/products/")];
const COMPANY_LINKS = [
  { label: "Home", to: "/" },
  ...merge(NAV_COMPANY, PLAN_COMPANY),
];

/* ------------------------------------------------------------------ *
 * STYLES (shared with the header and hero)
 * ------------------------------------------------------------------ */
const EDGE = "w-full px-6 sm:px-10 lg:px-16 xl:px-24";
const FOCUS = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass";
const LINK = `text-sm text-ivory/75 transition-colors hover:text-brass ${FOCUS}`;
const BTN_QUOTE =
  "inline-flex items-center justify-center gap-2 rounded-md bg-brass px-6 py-3 text-sm font-bold text-charcoal shadow-sm " +
  "transition-colors hover:bg-[#9a7e4b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

function ColumnTitle({ children }) {
  return (
    <div>
      <p className="font-serif text-base font-bold text-ivory">{children}</p>
      <span className="mt-2 block h-0.5 w-8 bg-brass" aria-hidden="true" />
    </div>
  );
}

function LinkList({ links }) {
  return (
    <ul className="mt-5 space-y-3">
      {links.map((l) => (
        <li key={l.to}>
          <Link to={l.to} className={LINK}>{l.label}</Link>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  return (
    <footer className="border-t-2 border-brass bg-charcoal text-ivory">
      <div className={`${EDGE} pb-8 pt-14 lg:pt-16`}>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-4">
            <Link to="/" className={`inline-flex items-center gap-3 ${FOCUS}`} aria-label={`${COMPANY.name} home`}>
              <img src={logoImg} alt="" width={30} height={30} className="h-14 w-14 shrink-0 object-contain" />
              <span className="flex flex-col leading-none">
                <span className="font-serif text-xl font-bold tracking-tight">{COMPANY.name}</span>
                <span className="mt-1.5 text-[0.625rem] font-bold uppercase tracking-[0.2em] text-brass">Merchant Exporter</span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ivory/75">
              India-based merchant exporter of coconut charcoal products and coconut shell activated carbon for international buyers.
            </p>
            <p className="mt-4 max-w-sm border-l-2 border-brass pl-4 text-sm leading-relaxed text-ivory/70">
              A new export company. Over 25 years of team industry experience.
            </p>
          </div>

          {/* Products */}
          <nav aria-label="Products" className="lg:col-span-2">
            <ColumnTitle>Products</ColumnTitle>
            <LinkList links={PRODUCT_LINKS} />
          </nav>

          {/* Explore */}
          <nav aria-label="Explore" className="lg:col-span-2">
            <ColumnTitle>Explore</ColumnTitle>
            <LinkList links={EXPLORE} />
          </nav>

          {/* Company */}
          <nav aria-label="Company" className="lg:col-span-2">
            <ColumnTitle>Company</ColumnTitle>
            <LinkList links={COMPANY_LINKS} />
          </nav>

          {/* Contact */}
          <div className="sm:col-span-2 lg:col-span-2">
            <ColumnTitle>Contact</ColumnTitle>
            <ContactLines className="mt-5 text-ivory/75" />
            <Link to="/request-a-quote/" className={`${BTN_QUOTE} mt-6`}>
              Request an Export Quote <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-ivory/15 pt-6 text-xs text-ivory/60 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
          <nav aria-label="Legal" className="flex gap-6">
            <Link to="/privacy-policy/" className={`transition-colors hover:text-brass ${FOCUS}`}>Privacy policy</Link>
            <Link to="/terms/" className={`transition-colors hover:text-brass ${FOCUS}`}>Website terms</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}