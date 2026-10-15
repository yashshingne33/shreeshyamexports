import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.png";
import { COMPANY, NAV_PRODUCTS, NAV_COMPANY } from "../../data/site.js";
import { ContactLines } from "../ui.jsx";

/* ------------------------------------------------------------------ *
 * LINKS: every list comes from data/site.js so the footer always
 * matches the header and product names stay consistent.
 * ------------------------------------------------------------------ */
const PRODUCT_LINKS = [{ label: "All Products", to: "/products/" }, ...NAV_PRODUCTS.filter((l) => l.to !== "/products/")];
const COMPANY_LINKS = [{ label: "Home", to: "/" }, ...NAV_COMPANY];
const EXPLORE = [
  { label: "Applications", to: "/applications/" },
  { label: "Quality", to: "/quality/" },
  { label: "Packaging", to: "/packaging-private-label/" },
  { label: "Contact", to: "/contact/" },
  { label: "Request a Quote", to: "/request-a-quote/" },
];

/* ------------------------------------------------------------------ *
 * STYLES
 * ------------------------------------------------------------------ */
const EDGE = "w-full px-5 sm:px-10 lg:px-16 xl:px-24";
const FOCUS = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass";
const LINK = `inline-block py-0.5 text-sm leading-snug text-ivory/75 transition-colors hover:text-brass ${FOCUS}`;
const BTN_QUOTE =
  "inline-flex w-full items-center justify-center gap-2 rounded-md bg-brass px-5 py-3 text-center text-sm font-bold text-charcoal shadow-sm " +
  "transition-colors hover:bg-[#9a7e4b] sm:w-auto lg:w-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

function ColumnTitle({ children }) {
  return (
    <div>
      <p className="font-serif text-base font-bold text-ivory">{children}</p>
      <span className="mt-2 block h-0.5 w-8 bg-brass" aria-hidden="true" />
    </div>
  );
}

/* `twoColMobile` lays the links out in 2 columns below `sm` to save height */
function LinkList({ links, twoColMobile = false }) {
  return (
    <ul
      className={`mt-4 grid gap-x-6 gap-y-2 sm:mt-5 sm:gap-y-3 ${
        twoColMobile ? "grid-cols-2 sm:grid-cols-1" : "grid-cols-1"
      }`}
    >
      {links.map((l) => (
        <li key={l.to} className="min-w-0">
          <Link to={l.to} className={LINK}>{l.label}</Link>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  return (
    <footer className="border-t-2 border-brass bg-charcoal text-ivory">
      <div className={`${EDGE} pb-6 pt-10 sm:pb-8 sm:pt-12 lg:pt-16`}>
        <div className="grid grid-cols-2 gap-x-6 gap-y-9 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-3">
            <Link to="/" className={`inline-flex items-center gap-3 ${FOCUS}`} aria-label={`${COMPANY.name} home`}>
              <img src={logoImg} alt="" width={30} height={30} className="h-12 w-12 shrink-0 object-contain sm:h-16 sm:w-16" />
              <span className="flex flex-col leading-none">
                <span className="font-serif text-lg font-bold tracking-tight sm:text-xl">{COMPANY.name}</span>
              </span>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-ivory/75 sm:mt-5 sm:max-w-lg lg:max-w-sm">
              India-based merchant exporter of coconut charcoal products and coconut shell activated carbon for international buyers.
            </p>
            <p className="mt-3 max-w-md border-l-2 border-brass pl-4 text-sm leading-relaxed text-ivory/70 sm:mt-4 sm:max-w-lg lg:max-w-sm">
              A new name backed by over 25 years of industry experience
            </p>
          </div>

          {/* Products (wider column: the full product names need the room) */}
          <nav aria-label="Products" className="col-span-2 sm:col-span-1 lg:col-span-3">
            <ColumnTitle>Products</ColumnTitle>
            <LinkList links={PRODUCT_LINKS} />
          </nav>

          {/* Explore */}
          <nav aria-label="Explore" className="col-span-1 lg:col-span-2">
            <ColumnTitle>Explore</ColumnTitle>
            <LinkList links={EXPLORE} />
          </nav>

          {/* Company */}
          <nav aria-label="Company" className="col-span-1 lg:col-span-2">
            <ColumnTitle>Company</ColumnTitle>
            <LinkList links={COMPANY_LINKS} />
          </nav>

          {/* Contact */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <ColumnTitle>Contact</ColumnTitle>
            <div className="mt-4 flex flex-col gap-5 sm:mt-5 sm:flex-row sm:items-start sm:justify-between sm:gap-8 lg:flex-col lg:justify-start lg:gap-0">
              <ContactLines className="min-w-0 break-words text-ivory/75 [overflow-wrap:anywhere] [&_a]:transition-colors [&_a:hover]:text-brass" />
              <Link to="/request-a-quote/" className={`${BTN_QUOTE} sm:shrink-0 lg:mt-6`}>
                Request a Quote <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-3 border-t border-ivory/15 pt-5 text-xs text-ivory/60 sm:mt-12 sm:flex-row sm:items-center sm:justify-between sm:gap-4 lg:mt-14 lg:pt-6">
          <p>&copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
          <nav aria-label="Legal" className="flex flex-wrap gap-x-6 gap-y-2">
            <Link to="/privacy-policy/" className={`transition-colors hover:text-brass ${FOCUS}`}>Privacy policy</Link>
            <Link to="/terms/" className={`transition-colors hover:text-brass ${FOCUS}`}>Website terms</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}