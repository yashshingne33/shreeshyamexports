import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logoImg from "../../assets/logo.png";
import { NAV_PRODUCTS, NAV_COMPANY, COMPANY } from "../../data/site.js";

/* ------------------------------------------------------------------ *
 * NAVIGATION CONTENT
 * Labels follow the change document: Products, Applications, Quality,
 * Packaging, Company, Contact + a persistent Request a Quote.
 * All links come from data/site.js so header, footer and menus
 * can never drift apart.
 * ------------------------------------------------------------------ */
const PRODUCT_LINKS = NAV_PRODUCTS.filter((l) => l.to !== "/products/");
const COMPANY_LINKS = NAV_COMPANY;

/* ------------------------------------------------------------------ *
 * SHARED STYLES (same button shape and focus style as the hero)
 * ------------------------------------------------------------------ */
const FOCUS = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass";

const NAV_BASE =
  `relative inline-flex items-center gap-1.5 py-2 text-[15px] font-medium transition-colors ` +
  `after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-brass ` +
  `after:transition-transform hover:after:scale-x-100 motion-reduce:after:transition-none ${FOCUS}`;

const navState = (active) => `${NAV_BASE} ${active ? "after:scale-x-100" : ""}`;

const BTN_QUOTE =
  "inline-flex items-center justify-center gap-2 rounded-md bg-brass px-6 py-3 text-sm font-bold text-charcoal shadow-sm " +
  "transition-colors hover:bg-[#9a7e4b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal";

// Same horizontal padding as the hero and feature strip so every left edge lines up.
const EDGE = "w-full px-6 sm:px-10 lg:px-16 xl:px-24";

/* ------------------------------------------------------------------ *
 * DESKTOP DROPDOWN
 * mode: null (closed) | "hover" (opened by a mouse hovering) | "click"
 * (opened by click, touch or keyboard, stays open until dismissed).
 * Hover is a convenience for mouse users only; click, touch and
 * keyboard always work. Escape closes and returns focus to the button.
 * ------------------------------------------------------------------ */
function Dropdown({ label, links, active, footer }) {
  const [mode, setMode] = useState(null);
  const open = mode !== null;
  const ref = useRef(null);
  const btnRef = useRef(null);
  const menuId = `menu-${label.toLowerCase().replace(/\s+/g, "-")}`;

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setMode(null);
        btnRef.current?.focus();
      }
    };
    const onDown = (e) => {
      if (!ref.current?.contains(e.target)) setMode(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onDown);
    };
  }, [open]);

  const onEnter = (e) => {
    if (e.pointerType === "mouse") setMode((m) => m ?? "hover");
  };
  const onLeave = (e) => {
    if (e.pointerType === "mouse") setMode((m) => (m === "hover" ? null : m));
  };

  return (
    <div
      className="relative"
      ref={ref}
      onPointerEnter={onEnter}
      onPointerLeave={onLeave}
      onBlur={(e) => {
        // Close when keyboard focus moves to something outside this menu.
        if (e.relatedTarget && !e.currentTarget.contains(e.relatedTarget)) setMode(null);
      }}
    >
      <button
        ref={btnRef}
        type="button"
        className={navState(active || open)}
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={open ? menuId : undefined}
        onClick={() => setMode((m) => (m === "click" ? null : "click"))}
      >
        {label}
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true" className={`transition-transform motion-reduce:transition-none ${open ? "rotate-180" : ""}`}>
          <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>

      {open && (
        <div id={menuId} className="absolute left-1/2 top-full z-50 w-80 -translate-x-1/2 pt-3">
          <div className="overflow-hidden rounded-xl border border-charcoal/10 bg-white shadow-xl">
            <div className="h-0.5 bg-brass" aria-hidden="true" />
            <ul className="p-2">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    onClick={() => setMode(null)}
                    className="group flex items-center justify-between gap-3 rounded-lg px-3.5 py-2.5 text-sm font-medium text-slate transition-colors hover:bg-ivory hover:text-charcoal focus-visible:bg-ivory focus-visible:text-charcoal focus-visible:outline-none"
                  >
                    {l.label}
                    <span aria-hidden="true" className="shrink-0 text-brass opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">&rarr;</span>
                  </Link>
                </li>
              ))}
            </ul>
            {footer && (
              <Link
                to={footer.to}
                onClick={() => setMode(null)}
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
 * The desktop menu shows from xl (1280px). Below that the hamburger
 * dialog is used, so the seven items never crowd the logo.
 * ------------------------------------------------------------------ */
export default function Header() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeRef = useRef(null);
  const openBtnRef = useRef(null);
  const dialogRef = useRef(null);

  const inGroup = (links, extraPrefix) =>
    (extraPrefix && pathname.startsWith(extraPrefix)) ||
    links.some((l) => (l.to === "/" ? pathname === "/" : pathname.startsWith(l.to)));

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
        { label: "Packaging", to: "/packaging-private-label/" },
      ],
    },
    { title: "Company", links: [...COMPANY_LINKS, { label: "Contact", to: "/contact/" }] },
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
            <img src={logoImg} alt="" className="h-11 w-auto shrink-0 sm:h-12 lg:h-14" />
            <span className="flex flex-col leading-none">
              <span className="font-serif text-xl font-bold tracking-tight text-charcoal">{COMPANY.name}</span>
            </span>
          </Link>

          {/* Primary navigation */}
          <nav className="hidden items-center gap-6 xl:flex 2xl:gap-8" aria-label="Primary">
            <Dropdown
              label="Products"
              links={PRODUCT_LINKS}
              active={inGroup(PRODUCT_LINKS, "/products")}
              footer={{ label: "View all products", to: "/products/" }}
            />
            <NavLink to="/applications/" className={({ isActive }) => navState(isActive)}>Applications</NavLink>
            <NavLink to="/quality/" className={({ isActive }) => navState(isActive)}>Quality</NavLink>
            <NavLink to="/packaging-private-label/" className={({ isActive }) => navState(isActive)}>Packaging</NavLink>
            <Dropdown label="Company" links={COMPANY_LINKS} active={inGroup(COMPANY_LINKS)} />
            <NavLink to="/contact/" className={({ isActive }) => navState(isActive)}>Contact</NavLink>
          </nav>

          {/* Persistent action */}
          <div className="flex items-center gap-3">
            <Link to="/request-a-quote/" className={`${BTN_QUOTE} hidden sm:inline-flex`}>
              Request a Quote <span aria-hidden="true">&rarr;</span>
            </Link>
            <button
              ref={openBtnRef}
              type="button"
              className="flex h-11 w-11 flex-col items-center justify-center rounded-md border border-charcoal/15 bg-white/60 transition-colors hover:border-brass focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass xl:hidden"
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
          className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-charcoal text-ivory xl:hidden"
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
                        className="flex items-center justify-between gap-3 border-b border-ivory/10 py-3.5 text-lg font-medium transition-colors hover:text-brass focus-visible:text-brass focus-visible:outline-none"
                      >
                        {l.label}
                        <span aria-hidden="true" className="shrink-0 text-brass">&rarr;</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <Link to="/request-a-quote/" className={`${BTN_QUOTE} mt-2 w-full py-4 text-base`}>
              Request a Quote <span aria-hidden="true">&rarr;</span>
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}