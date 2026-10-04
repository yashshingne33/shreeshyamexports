import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logoImg from "../../assets/logo.png";
import { NAV_PRODUCTS, NAV_COMPANY, COMPANY } from "../../data/site.js";

/* ------------------------------------------------------------------ *
 * NAVIGATION CONTENT
 * Follows the developer plan: Products, Applications, Quality,
 * Packaging, Company + a persistent Request a Quote.
 * Links already defined in data/site.js are kept; any route the plan
 * requires that is missing there is added (no duplicates).
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

const merge = (base = [], extra = []) => {
  const seen = new Set(base.map((l) => l.to));
  return [...base, ...extra.filter((l) => !seen.has(l.to))];
};
const PRODUCT_LINKS = merge(NAV_PRODUCTS, PLAN_PRODUCTS).filter(
  (l) => l.label !== "All products"
);
const COMPANY_LINKS = merge(NAV_COMPANY, PLAN_COMPANY);

/* ------------------------------------------------------------------ *
 * SHARED STYLES (same button shape and focus style as the hero)
 * ------------------------------------------------------------------ */
const FOCUS = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass";

const NAV_BASE =
  `relative inline-flex items-center gap-1.5 py-2 text-[15px] font-medium transition-colors ` +
  `after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-brass ` +
  `after:transition-transform hover:after:scale-x-100 motion-reduce:after:transition-none ${FOCUS}`;

const navState = (active) =>
  `${NAV_BASE} ${active ? "after:scale-x-100" : ""}`;

const BTN_QUOTE =
  "inline-flex items-center justify-center gap-2 rounded-md bg-brass px-6 py-3 text-sm font-bold text-charcoal shadow-sm " +
  "transition-colors hover:bg-[#9a7e4b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal";

// Same horizontal padding as the hero and feature strip so every left edge lines up.
const EDGE = "w-full px-6 sm:px-10 lg:px-16 xl:px-24";

/* ------------------------------------------------------------------ *
 * DESKTOP DROPDOWN
 * ------------------------------------------------------------------ */
function Dropdown({ label, links, active, footer }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onDown = (e) => !ref.current?.contains(e.target) && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDown);
    };
  }, [open]);

  return (
    <div
      className="relative"
      ref={ref}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onBlur={(e) => !e.currentTarget.contains(e.relatedTarget) && setOpen(false)}
    >
      <button type="button" className={navState(active || open)} aria-expanded={open} aria-haspopup="true" onClick={() => setOpen((o) => !o)}>
        {label}
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true" className={`transition-transform motion-reduce:transition-none ${open ? "rotate-180" : ""}`}>
          <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-3">
          <div className="overflow-hidden rounded-xl border border-charcoal/10 bg-white shadow-xl">
            <div className="h-0.5 bg-brass" aria-hidden="true" />
            <ul className="p-2">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="group flex items-center justify-between rounded-lg px-3.5 py-2.5 text-sm font-medium text-slate transition-colors hover:bg-ivory hover:text-charcoal focus-visible:bg-ivory focus-visible:text-charcoal focus-visible:outline-none"
                  >
                    {l.label}
                    <span aria-hidden="true" className="text-brass opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">&rarr;</span>
                  </Link>
                </li>
              ))}
            </ul>
            {footer && (
              <Link
                to={footer.to}
                onClick={() => setOpen(false)}
                className="block border-t border-charcoal/10 bg-ivory px-5 py-3 text-sm font-bold text-charcoal transition-colors hover:text-brass focus-visible:outline-none focus-visible:text-brass"
              >
                {footer.label} &rarr;
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * HEADER
 * ------------------------------------------------------------------ */
export default function Header() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeRef = useRef(null);
  const openBtnRef = useRef(null);
  const dialogRef = useRef(null);

  const inGroup = (links) => links.some((l) => pathname.startsWith(l.to));

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobile menu: scroll lock, Escape to close, focus kept inside the dialog.
  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") return setMenuOpen(false);
      if (e.key !== "Tab" || !dialogRef.current) return;
      const f = dialogRef.current.querySelectorAll("a[href], button:not([disabled])");
      if (!f.length) return;
      const first = f[0];
      const last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      openBtnRef.current?.focus();
    };
  }, [menuOpen]);

  const mobileGroups = [
    { title: "Products", links: [{ label: "All Products", to: "/products/" }, ...PRODUCT_LINKS] },
    {
      title: "Explore",
      links: [
        { label: "Applications", to: "/applications/" },
        { label: "Quality", to: "/quality/" },
        { label: "Packaging & Private Label", to: "/packaging-private-label/" },
      ],
    },
    { title: "Company", links: COMPANY_LINKS },
  ];

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded focus:bg-brass focus:px-4 focus:py-2 focus:text-charcoal">
        Skip to content
      </a>

      <header className={`sticky top-0 z-50 border-b border-brass/30 bg-ivory/95 backdrop-blur transition-shadow motion-reduce:transition-none ${scrolled ? "shadow-md" : ""}`}>
        <div className={`${EDGE} flex items-center justify-between gap-6 py-3.5`}>
          {/* Brand */}
          <Link to="/" className={`flex items-center gap-3 ${FOCUS}`} aria-label={`${COMPANY.name} home`}>
           <img src={logoImg} alt="" className="h-11 w-auto shrink-0 sm:h-12 lg:h-14"/>
            <span className="flex flex-col leading-none">
              <span className="font-serif text-xl font-bold tracking-tight text-charcoal">{COMPANY.name}</span>
              <span className="mt-1.5 hidden text-[0.625rem] font-bold uppercase tracking-[0.2em] text-brass sm:block">Merchant Exporter</span>
            </span>
          </Link>

          {/* Primary navigation (one desktop pattern; hamburger only below lg) */}
          <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
            <Dropdown label="Products" links={PRODUCT_LINKS} active={inGroup(PRODUCT_LINKS)} footer={{ label: "View all products", to: "/products/" }} />
            <NavLink to="/applications/" className={({ isActive }) => navState(isActive)}>Applications</NavLink>
            <NavLink to="/quality/" className={({ isActive }) => navState(isActive)}>Quality</NavLink>
            <NavLink to="/packaging-private-label/" className={({ isActive }) => navState(isActive)}>Packaging</NavLink>
            <Dropdown label="Company" links={COMPANY_LINKS} active={inGroup(COMPANY_LINKS)} />
          </nav>

          {/* Persistent action */}
          <div className="flex items-center gap-3">
            <Link to="/request-a-quote/" className={`${BTN_QUOTE} hidden sm:inline-flex`}>
              Request a Quote <span aria-hidden="true">&rarr;</span>
            </Link>
            <button
              ref={openBtnRef}
              type="button"
              className="flex h-11 w-11 flex-col items-center justify-center rounded-md border border-charcoal/15 bg-white/60 transition-colors hover:border-brass focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
            >
              <span className="block h-0.5 w-5 bg-charcoal" />
              <span className="mt-1.5 block h-0.5 w-5 bg-charcoal" />
              <span className="mt-1.5 block h-0.5 w-5 bg-charcoal" />
            </button>
          </div>
        </div>
      </header>

      {/* Mounted only while open, so closed-menu links are never focusable or announced. */}
      {menuOpen && (
        <div
          id="mobile-menu"
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-charcoal text-ivory lg:hidden"
        >
          <div className="flex items-center justify-between border-b border-brass/40 px-6 py-3.5">
            <span className="flex items-center gap-3">
              <img src={logoImg} alt="" className="h-10 w-auto shrink-0" />
              <span className="font-serif text-xl font-bold">{COMPANY.name}</span>
            </span>
            <button
              ref={closeRef}
              type="button"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="flex h-11 w-11 items-center justify-center rounded-md border border-ivory/25 text-2xl leading-none transition-colors hover:border-brass focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass"
            >
              &times;
            </button>
          </div>

          <nav className="flex flex-1 flex-col px-6 pb-10 pt-6" aria-label="Mobile">
            {mobileGroups.map((g) => (
              <div key={g.title} className="mb-6">
                <p className="mb-1 text-xs font-bold uppercase tracking-widest text-brass">{g.title}</p>
                <ul>
                  {g.links.map((l) => (
                    <li key={l.to}>
                      <Link
                        to={l.to}
                        className="flex items-center justify-between border-b border-ivory/10 py-3.5 text-lg font-medium transition-colors hover:text-brass focus-visible:text-brass focus-visible:outline-none"
                      >
                        {l.label}
                        <span aria-hidden="true" className="text-brass">&rarr;</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <Link to="/request-a-quote/" className={`${BTN_QUOTE} mt-2 w-full py-4 text-base`}>
              Request an Export Quote <span aria-hidden="true">&rarr;</span>
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}