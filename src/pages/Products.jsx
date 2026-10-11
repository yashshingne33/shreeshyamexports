import { memo, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { PRODUCTS } from "../data/products.js";
import { Seo, WRAP, SECTION, CARD, ProductVisual, QuoteLink } from "../components/ui.jsx";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import { uspsFor } from "../components/ProductHighlights.jsx";
import heroImg from "../assets/hero1.png";

/* ------------------------------------------------------------------ *
 * FILTERS
 * ------------------------------------------------------------------ */
const APPLICATION_FILTERS = [
  ["all", "All applications"],
  ["shisha", "Shisha & Hookah"],
  ["bbq", "BBQ & Foodservice"],
  ["filtration", "Industrial filtration"],
];
const FORM_FILTERS = [
  ["all", "All forms"],
  ["fuel", "Fuel charcoal"],
  ["carbon", "Activated carbon"],
];

const APP_BY_SLUG = {
  "hookah-charcoal-cubes": ["shisha"],
  "pillow-charcoal-briquettes": ["bbq"],
  "hexagonal-charcoal-briquettes": ["shisha", "bbq"],
  "coconut-charcoal-briquettes": ["shisha", "bbq"],
  "coconut-shell-activated-carbon": ["filtration"],
};
const appsFor = (p) => p.appKeys ?? APP_BY_SLUG[p.slug] ?? [];
const validKey = (value, list) => (list.some(([k]) => k === value) ? value : "all");

/* ------------------------------------------------------------------ *
 * SHARED STYLES (same tokens as the homepage hero, header and footer)
 * ------------------------------------------------------------------ */
const EDGE = "w-full px-5 sm:px-10 lg:px-16 xl:px-24";
const FOCUS = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass";
const BTN_PRIMARY =
  "inline-flex items-center justify-center gap-2 rounded-md bg-brass px-6 py-3 text-sm font-bold text-charcoal shadow-sm transition-colors hover:bg-[#9a7e4b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal";
const BTN_GHOST_LIGHT =
  "inline-flex items-center justify-center gap-2 rounded-md border border-charcoal/25 bg-white/60 px-6 py-3 text-sm font-medium text-charcoal transition-colors hover:border-charcoal " + FOCUS;
const BTN_GHOST_DARK =
  "inline-flex items-center justify-center gap-2 rounded-md border border-white/40 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

const LOCAL_IMAGES = Object.fromEntries(
  Object.entries(
    import.meta.glob("../assets/products/*.{jpg,jpeg,png,webp}", { eager: true, import: "default" })
  ).map(([path, src]) => [path.split("/").pop().replace(/\.[^.]+$/, ""), src])
);

// Old short homepage names also work as file names.
const FILE_ALIASES = {
  "hookah-charcoal-cubes": ["shisha-cubes"],
  "hexagonal-charcoal-briquettes": ["hexa-charcoal", "hex-charcoal"],
  "pillow-charcoal-briquettes": ["charcoal-briquette"],
  "coconut-shell-activated-carbon": ["activated-charcoal"],
  "coconut-shell-charcoal": ["coconut-shell-charcoal"],
};

export const PRODUCT_IMG = {
  "coconut-shell-activated-carbon": "https://media.istockphoto.com/id/1180352712/photo/coconut-charcoal-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=UGGQfQRzqgMAHMB6BW-a8WL_VAO9okAm2crOsZ1WXwI=",
  "hookah-charcoal-cubes": "https://media.istockphoto.com/id/951444672/photo/texture-of-coal-for-hookah.jpg?s=612x612&w=0&k=20&c=yvxWHPvRG4zOjilTHhZsvREbi57bYolEKg8EvJhYZ3I=",
  "pillow-charcoal-briquettes": "https://media.istockphoto.com/id/652635166/photo/close-up-of-the-coconut-shell-charcoal-briquette.jpg?s=612x612&w=0&k=20&c=FAPwAnZBJpIaHaGfvE9CclG_9iCtae7fphwwQPqURww=",
  "hexagonal-charcoal-briquettes": "https://media.istockphoto.com/id/1250313037/photo/hardwood-charcoal-isolated-on-white.jpg?s=612x612&w=0&k=20&c=DTWNAyTIoNuU174dU1dhZBCcR_mSC28Z5BOEfLGDoYo=",
  "coconut-charcoal-briquettes": "https://media.istockphoto.com/id/1195570022/photo/coconut-charcoal-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=iuqHrDuv4fwASc_g0NpiCmAMQ73Kd-2me7sulX1rYuI=",
  "coconut-shell-charcoal": "https://media.istockphoto.com/id/1397454073/photo/coconut-shell-charcoal-background.jpg?s=612x612&w=0&k=20&c=oIbYXHV_VFGBzVNMh7tfZBVPvGnSPDbTq2J7epHpc9Y=",
};

export const imageFor = (p) => {
  const names = [p.slug, ...(FILE_ALIASES[p.slug] ?? [])];
  const local = names.map((n) => LOCAL_IMAGES[n]).find(Boolean);
  return local || PRODUCT_IMG[p.slug] || p.image || null;
};

export function ProductPhoto({ product, className = "", imgClass = "", eager = false }) {
  const [failed, setFailed] = useState(false);
  const src = imageFor(product);

  if (!src || failed) return <ProductVisual product={product} className={className} />;

  return (
    <div className={`overflow-hidden bg-ivory ${className}`}>
      <img
        src={src}
        alt={product.name}
        width="800"
        height="600"
        loading={eager ? "eager" : "lazy"}
        fetchpriority={eager ? "high" : undefined}
        decoding="async"
        onError={() => setFailed(true)}
        className={`h-full w-full object-cover ${imgClass}`}
      />
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * SMALL UI PIECES
 * ------------------------------------------------------------------ */
const Icon = ({ d, className = "h-5 w-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
    {[].concat(d).map((x) => <path key={x} strokeLinecap="round" strokeLinejoin="round" d={x} />)}
  </svg>
);

const ICON_CHECK = "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z";
const ICON_LEAF = "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.847a4.5 4.5 0 003.09 3.09L15.75 12l-2.847.813a4.5 4.5 0 00-3.09 3.09z";

const TRUST = [
  { title: "Export ready", body: "Bulk, retail and private-label packing", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
  { title: "Documents", body: "TDS and SDS for approved grades", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
  { title: "Sample review", body: "Quotation and shipment support", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
];

const WHY = [
  { title: "Sustainable Raw Material", body: "Made from coconut shell, a renewable agricultural by-product.", icon: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" },
  { title: "Consistent Quality", body: "Specification-led grades with documents you can review.", icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" },
  { title: "Made for Your Market", body: "OEM and private-label packing for distributors and brands.", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
  { title: "Worldwide Supply", body: "Bulk supply with export documentation and shipment support.", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
];

const STEPS = [
  { title: "Share requirements", body: "Product, quantity, specification and destination." },
  { title: "Review and quote", body: "We confirm a suitable grade, samples and pricing." },
  { title: "Production and packing", body: "Bulk, retail or private-label packs as agreed." },
  { title: "Shipment", body: "Documents and dispatch coordinated to your port." },
];

function Chip({ active, count, children, ...rest }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${FOCUS} ${
        active
          ? "border-charcoal bg-charcoal text-white shadow-sm"
          : "border-brass/40 bg-white text-charcoal hover:border-brass hover:bg-ivory"
      }`}
      {...rest}
    >
      {children}
      {typeof count === "number" && (
        <span className={`rounded-full px-1.5 text-[0.7rem] font-bold leading-5 ${active ? "bg-brass text-charcoal" : "bg-ivory text-slate"}`}>
          {count}
        </span>
      )}
    </button>
  );
}

/* Product card: "100% Natural" seal now shows on EVERY product, including activated carbon */
const ProductCard = memo(function ProductCard({ p, priority }) {
  const highlights = uspsFor(p).filter((u) => u.label !== "100% Natural").slice(0, 3);
  const familyLabel = p.family === "carbon" ? "Activated carbon" : "Fuel charcoal";

  return (
    <article
      className={`${CARD} group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-charcoal/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brass/60 hover:shadow-xl motion-reduce:transform-none`}
    >
      <span className="absolute inset-x-0 top-0 z-20 h-1 origin-left scale-x-0 bg-brass transition-transform duration-300 group-hover:scale-x-100 motion-reduce:transition-none" aria-hidden="true" />

      {/* Image */}
      <Link to={`/products/${p.slug}/`} tabIndex={-1} aria-hidden="true" className="relative block overflow-hidden">
        <ProductPhoto
          product={p}
          eager={priority}
          className="aspect-[4/3]"
          imgClass="transition-transform duration-700 group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none"
        />
        <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-charcoal/35 to-transparent" aria-hidden="true" />
        <span className="absolute left-3 top-3 max-w-[55%] truncate rounded bg-charcoal px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-widest text-brass shadow">
          {p.tag}
        </span>
        <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-brass px-3 py-1 text-[0.62rem] font-bold uppercase tracking-wider text-charcoal shadow-md ring-2 ring-white/70">
          <Icon d={ICON_LEAF} className="h-3.5 w-3.5" /> 100% Natural
        </span>
      </Link>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-widest text-brass">
          <span className="h-1.5 w-1.5 rounded-full bg-brass" aria-hidden="true" /> {familyLabel}
        </p>
        <h3 className="mt-2 font-serif text-xl font-bold leading-snug text-charcoal sm:min-h-[3.5rem]">
          <Link to={`/products/${p.slug}/`} className={`hover:text-brass ${FOCUS}`}>{p.name}</Link>
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate">{p.summary}</p>

        {highlights.length > 0 && (
          <ul className="mt-4 grid gap-1.5" aria-label="Key advantages">
            {highlights.map((u) => (
              <li key={u.label} className="flex items-center gap-2 text-[0.8125rem] font-medium text-charcoal">
                <Icon d={ICON_CHECK} className="h-4 w-4 shrink-0 text-brass" /> {u.label}
              </li>
            ))}
          </ul>
        )}

        {p.applications?.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Applications">
            {p.applications.slice(0, 3).map((a) => (
              <li key={a} className="rounded-full border border-brass/40 bg-ivory px-3 py-1 text-xs font-semibold text-charcoal">{a}</li>
            ))}
          </ul>
        )}

        {/* Actions pinned to the bottom so every card lines up */}
        <div className="mt-auto pt-6">
          <div className="flex flex-col gap-3 border-t border-charcoal/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <Link
              to={`/products/${p.slug}/`}
              className={`inline-flex items-center justify-center gap-2 rounded-md bg-charcoal px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-brass hover:text-charcoal ${FOCUS}`}
            >
              View Specifications <span aria-hidden="true">&rarr;</span>
            </Link>
            <QuoteLink
              product={p.slug}
              className={`text-center text-sm font-semibold text-charcoal underline decoration-brass decoration-2 underline-offset-4 hover:text-brass sm:text-right ${FOCUS}`}
            >
              {p.approvedSpec?.tdsUrl ? "Request Quote" : "Request Grade Details"}
            </QuoteLink>
          </div>
        </div>
      </div>
    </article>
  );
});

/* ------------------------------------------------------------------ *
 * PAGE
 * ------------------------------------------------------------------ */
export default function Products() {
  // Filters live in the URL (?application=bbq&form=fuel) so filtered views can be shared and bookmarked.
  const [params, setParams] = useSearchParams();
  const app = validKey(params.get("application"), APPLICATION_FILTERS);
  const form = validKey(params.get("form"), FORM_FILTERS);

  const setFilter = (name, value) => {
    const next = new URLSearchParams(params);
    if (value === "all") next.delete(name);
    else next.set(name, value);
    setParams(next, { replace: true });
  };
  const reset = () => setParams({}, { replace: true });

  const matches = (p, a, f) => (a === "all" || appsFor(p).includes(a)) && (f === "all" || p.family === f);
  const list = useMemo(() => PRODUCTS.filter((p) => matches(p, app, form)), [app, form]);
  const countApp = (key) => PRODUCTS.filter((p) => matches(p, key, form)).length;
  const countForm = (key) => PRODUCTS.filter((p) => matches(p, app, key)).length;
  const filtered = app !== "all" || form !== "all";

  return (
    <>
      <Seo
        title="Coconut Charcoal and Activated Carbon Products"
        description="Coconut shell activated carbon, hookah cubes, pillow and hexagonal briquettes and coconut shell charcoal for export."
      />

      {/* ============================ HERO ============================ */}
      <section className="relative overflow-hidden bg-charcoal text-white" aria-labelledby="products-title">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img src={heroImg} alt="" fetchpriority="high" decoding="async" className="h-full w-full object-cover object-[75%_center]" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal from-35% via-charcoal/85 via-60% to-charcoal/30" />
        </div>
        <div className={`relative z-10 ${EDGE} py-14 sm:py-16 lg:py-24`}>
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 shrink-0 bg-brass" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-widest text-brass">Products</span>
            </div>
            <h1 id="products-title" className="mt-4 font-serif text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl">
              Coconut Charcoal <span className="font-medium text-brass">&amp;</span> Activated Carbon
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
              Natural, sustainable fuel and filtration products made from coconut shell. Filter by application and form, then review the specification and request a quote.
            </p>

            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Highlights">
              {["100% Natural", "Sustainable Raw Material", "Export Ready"].map((t) => (
                <li key={t} className="inline-flex items-center gap-2 rounded-full border border-brass/60 bg-white/5 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                  <Icon d={ICON_CHECK} className="h-4 w-4 text-brass" /> {t}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a href="#catalogue" className={`${BTN_PRIMARY} w-full px-7 py-3.5 sm:w-auto`}>
                Browse {PRODUCTS.length} Products <span aria-hidden="true">&darr;</span>
              </a>
              <Link to="/request-a-quote/" className={`${BTN_GHOST_DARK} w-full px-7 py-3.5 sm:w-auto`}>Request a Quote</Link>
            </div>
          </div>
        </div>
        <div className="relative z-10 h-0.5 bg-brass" aria-hidden="true" />
      </section>

      {/* Trust strip */}
      <div className="border-b border-charcoal/10 bg-white">
        <ul className={`${EDGE} grid divide-y divide-charcoal/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0`}>
          {TRUST.map((t, i) => (
            <li key={t.title} className={`flex items-center gap-4 py-4 ${i > 0 ? "sm:pl-6 lg:pl-8" : ""} ${i < TRUST.length - 1 ? "sm:pr-6 lg:pr-8" : ""}`}>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brass/60 bg-ivory text-brass">
                <Icon d={t.icon} className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="font-serif text-base font-bold leading-tight text-charcoal">{t.title}</p>
                <p className="mt-0.5 text-[0.8125rem] leading-snug text-slate">{t.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <Breadcrumbs trail={[{ label: "Products" }]} />

      {/* ====================== FILTERS + GRID ====================== */}
      <section id="catalogue" className={`${SECTION} scroll-mt-24 bg-ivory`} aria-labelledby="catalogue-title">
        <div className={WRAP}>
          <h2 id="catalogue-title" className="sr-only">Product catalogue</h2>

          <div className="rounded-2xl border border-charcoal/10 border-t-4 border-t-brass bg-white p-5 shadow-sm sm:p-6">
            <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr] lg:gap-10">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-charcoal">Application</p>
                <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Filter by application">
                  {APPLICATION_FILTERS.map(([key, label]) => (
                    <Chip key={key} active={app === key} count={countApp(key)} onClick={() => setFilter("application", key)}>{label}</Chip>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-charcoal">Product form</p>
                <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Filter by product form">
                  {FORM_FILTERS.map(([key, label]) => (
                    <Chip key={key} active={form === key} count={countForm(key)} onClick={() => setFilter("form", key)}>{label}</Chip>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-charcoal/10 pt-4">
              <p className="text-sm text-slate" role="status" aria-live="polite">
                Showing <strong className="text-charcoal">{list.length}</strong> of {PRODUCTS.length} products
              </p>
              {filtered && (
                <button type="button" onClick={reset} className={`text-sm font-bold text-charcoal underline decoration-brass decoration-2 underline-offset-4 hover:text-brass ${FOCUS}`}>
                  Clear filters
                </button>
              )}
            </div>
          </div>

          {list.length === 0 ? (
            <div className="mt-8 rounded-2xl border border-dashed border-charcoal/25 bg-white p-8 text-center sm:p-10">
              <p className="font-serif text-xl font-bold text-charcoal">No products match these filters</p>
              <p className="mt-2 text-slate">Try a different combination, or tell us what you need and we will review it.</p>
              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <button type="button" onClick={reset} className={BTN_GHOST_LIGHT}>Clear filters</button>
                <Link to="/request-a-quote/" className={BTN_PRIMARY}>Send Your Requirements <span aria-hidden="true">&rarr;</span></Link>
              </div>
            </div>
          ) : (
            <ul className="mt-8 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              {list.map((p, i) => (
                <li key={p.slug} className="flex">
                  <ProductCard p={p} priority={i < 3} />
                </li>
              ))}
            </ul>
          )}

          <div className="mt-12 flex flex-col gap-5 rounded-2xl border border-charcoal/10 border-l-4 border-l-brass bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between lg:p-8">
            <div className="max-w-2xl">
              <p className="font-serif text-xl font-bold text-charcoal">Comparing briquette formats?</p>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                Our briquette guide introduces pillow-shaped, hexagonal and hookah cube formats side by side, so you can choose the right product page.
              </p>
            </div>
            <Link to="/products/coconut-charcoal-briquettes/" className={`${BTN_GHOST_LIGHT} w-full shrink-0 sm:w-auto`}>
              Open the briquette guide <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ====================== WHY BUYERS CHOOSE US ====================== */}
      <section className="bg-charcoal text-white" aria-labelledby="why-title">
        <div className={`${EDGE} py-14 sm:py-16 lg:py-20`}>
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-brass" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-widest text-brass">Sustainable Today, Better Tomorrow</span>
              <span className="h-px w-10 bg-brass" aria-hidden="true" />
            </div>
            <h2 id="why-title" className="mt-4 font-serif text-3xl font-bold leading-tight sm:text-4xl">
              Go Green. <span className="text-brass">Save Forests.</span>
            </h2>
          </div>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WHY.map((w) => (
              <li key={w.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition-colors hover:border-brass/60 hover:bg-white/10">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-brass/70 text-brass">
                  <Icon d={w.icon} className="h-7 w-7" />
                </span>
                <h3 className="mt-5 font-serif text-lg font-bold">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">{w.body}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="h-0.5 bg-brass" aria-hidden="true" />
      </section>

      {/* ====================== HOW TO ORDER ====================== */}
      <section className={`${SECTION} bg-white`} aria-labelledby="steps-title">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 shrink-0 bg-brass" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-widest text-brass">How It Works</span>
            </div>
            <h2 id="steps-title" className="mt-3 font-serif text-2xl font-bold leading-tight text-charcoal sm:text-3xl lg:text-4xl">From Enquiry to Shipment</h2>
          </div>
          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <li key={s.title} className="relative rounded-2xl border border-charcoal/10 bg-ivory p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brass font-serif text-lg font-bold text-charcoal">{i + 1}</span>
                <h3 className="mt-4 font-serif text-lg font-bold text-charcoal">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============================ CLOSING CTA ============================ */}
      <section className="bg-ivory py-14 sm:py-16 lg:py-20" aria-labelledby="products-cta">
        <div className={WRAP}>
          <div className="mx-auto max-w-3xl rounded-3xl bg-charcoal px-6 py-10 text-center text-white shadow-xl sm:px-12 sm:py-14">
            <h2 id="products-cta" className="font-serif text-2xl font-bold leading-tight text-brass sm:text-3xl lg:text-4xl">Not Sure Which Product Fits?</h2>
            <p className="mt-4 text-base text-white/85 sm:text-lg">Tell us the application, specification and destination. Our team will review an appropriate available grade.</p>
            <Link to="/request-a-quote/" className={`${BTN_PRIMARY} mt-8 w-full px-8 py-3.5 sm:w-auto`}>
              Send Your Requirements <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}