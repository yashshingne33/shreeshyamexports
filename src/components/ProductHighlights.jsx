import { SECTION, WRAP } from "./ui.jsx";

const EDGE = "w-full px-6 sm:px-10 lg:px-16 xl:px-24";

const Icon = ({ d, className = "h-5 w-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
    {[].concat(d).map((x) => <path key={x} strokeLinecap="round" strokeLinejoin="round" d={x} />)}
  </svg>
);

const I = {
  fire: ["M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z", "M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1.001A3.75 3.75 0 0012 18z"],
  home: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
  building: "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21",
  users: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z",
  filter: "M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z",
};

/* Application icon lookup by keyword, falls back to flame */
const appIcon = (name) => {
  const n = name.toLowerCase();
  if (/home/.test(n)) return I.home;
  if (/hotel|resort|restaurant/.test(n)) return I.building;
  if (/cater|food|service/.test(n)) return I.users;
  if (/filter|water|air|purif/.test(n)) return I.filter;
  return I.fire;
};

/* ------------------------------------------------------------------ *
 * RAW MATERIAL BAND
 * Replaces the old "Go Green. Save Forests." block, the 100% Natural seal
 * and the generic badge bar (Section 6 of the change document).
 * ------------------------------------------------------------------ */
export function RawMaterialBand() {
  return (
    <section className="bg-charcoal text-white" aria-labelledby="raw-material-title">
      <div className={`${EDGE} py-10 lg:py-12`}>
        <div className="grid items-center gap-5 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 shrink-0 bg-brass" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-widest text-brass">Raw Material</span>
            </div>
            <h2 id="raw-material-title" className="mt-3 font-serif text-2xl font-bold leading-tight sm:text-3xl">
              Coconut Shell as a Raw Material
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-white/80 lg:col-span-7">
            Coconut shell is an agricultural by-product used as the feedstock for these products. Product composition and processing details are confirmed for the proposed grade.
          </p>
        </div>
      </div>
      <div className="h-0.5 bg-brass" aria-hidden="true" />
    </section>
  );
}

/* ------------------------------------------------------------------ *
 * COMPATIBILITY STUBS
 * These names were exported before the claims clean-up. They now render
 * nothing so any page that still imports them keeps building.
 * Once `grep -rn "ProductHighlights" src` shows no other importers,
 * delete everything in this block.
 * ------------------------------------------------------------------ */
export const uspsFor = () => [];
export const UspBar = () => null;
export const NaturalSeal = () => null;
export const GreenBand = RawMaterialBand;

/* Applications tiles */
export function ApplicationTiles({ product }) {
  if (!product.applications?.length) return null;
  return (
    <section className={`${SECTION} bg-ivory`} aria-labelledby="apps-title">
      <div className={WRAP}>
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-brass" aria-hidden="true" />
            <span className="text-xs font-bold uppercase tracking-widest text-brass">Applications</span>
          </div>
          <h2 id="apps-title" className="mt-3 font-serif text-3xl font-bold leading-tight text-charcoal sm:text-4xl">Where It Performs Best</h2>
        </div>
        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {product.applications.map((a) => (
            <li key={a} className="group flex flex-col items-center gap-4 rounded-xl border border-charcoal/10 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brass/50 hover:shadow-lg motion-reduce:transform-none">
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-brass/60 bg-ivory text-brass transition-colors group-hover:bg-brass group-hover:text-charcoal">
                <Icon d={appIcon(a)} className="h-8 w-8" />
              </span>
              <span className="text-xs font-bold uppercase tracking-wide text-charcoal">{a}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}