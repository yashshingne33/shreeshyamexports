import { SECTION, WRAP } from "./ui.jsx";

const EDGE = "w-full px-6 sm:px-10 lg:px-16 xl:px-24";

const Icon = ({ d, className = "h-5 w-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
    {[].concat(d).map((x) => <path key={x} strokeLinecap="round" strokeLinejoin="round" d={x} />)}
  </svg>
);

const I = {
  recycle: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99",
  fire: ["M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z", "M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1.001A3.75 3.75 0 0012 18z"],
  clock: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
  shield: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
  sparkle: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.847a4.5 4.5 0 003.09 3.09L15.75 12l-2.847.813a4.5 4.5 0 00-3.09 3.09z",
  cloud: "M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z",
  globe: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  home: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
  building: "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21",
  users: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z",
  filter: "M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z",
};

/* USPs (brochure pages 2, 5 and cover) */
const FUEL_USPS = [
  { label: "100% Natural", icon: I.sparkle },
  { label: "Sustainable Raw Material", icon: I.recycle },
  { label: "Low Smoke", icon: I.cloud },
  { label: "Long Burning", icon: I.clock },
  { label: "Premium Quality", icon: I.shield },
  { label: "Global Standards", icon: I.globe },
];
const CARBON_USPS = [
  { label: "100% Natural", icon: I.sparkle },
  { label: "Sustainable Raw Material", icon: I.recycle },
  { label: "Premium Quality", icon: I.shield },
  { label: "Global Standards", icon: I.globe },
];
export const uspsFor = (p) => p.usps ?? (p.family === "carbon" ? CARBON_USPS : FUEL_USPS);

/* "Go Green" band (brochure page 5) */
const GREEN = [
  { label: "Renewable Resource", icon: I.recycle },
  { label: "Low Smoke Emission", icon: I.cloud },
  { label: "High Heat Output", icon: I.fire },
  { label: "Long Burning Time", icon: I.clock },
  { label: "Forest Conservation", icon: I.shield },
];

/* Application icon lookup by keyword, falls back to flame */
const appIcon = (name) => {
  const n = name.toLowerCase();
  if (/home/.test(n)) return I.home;
  if (/hotel|resort|restaurant/.test(n)) return I.building;
  if (/cater|food|service/.test(n)) return I.users;
  if (/filter|water|air|purif/.test(n)) return I.filter;
  return I.fire;
};

/* 1) Hero badges */
export function UspBar({ product }) {
  return (
    <ul className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-3" aria-label="Key advantages">
      {uspsFor(product).slice(0, 6).map((u) => (
        <li key={u.label} className="flex items-center gap-2.5 rounded-lg border border-brass/40 bg-white px-3 py-2.5 shadow-sm">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brass/10 text-brass">
            <Icon d={u.icon} className="h-4 w-4" />
          </span>
          <span className="text-[0.7rem] font-bold uppercase leading-tight tracking-wide text-charcoal">{u.label}</span>
        </li>
      ))}
    </ul>
  );
}

/* 2) Round seal on the product photo */
export function NaturalSeal() {
  return (
    <div className="absolute bottom-4 left-4 z-10 flex h-24 w-24 flex-col items-center justify-center rounded-full border-2 border-brass bg-charcoal/95 text-center shadow-lg ring-4 ring-white/40 sm:h-28 sm:w-28" aria-label="100% natural">
      <span className="font-serif text-2xl font-bold leading-none text-brass sm:text-3xl">100%</span>
      <span className="mt-1 text-[0.6rem] font-bold uppercase tracking-widest text-white">Natural</span>
    </div>
  );
}

/* 3) Go Green band (fuel products only) */
export function GreenBand({ product }) {
  if (product.family === "carbon") return null;
  return (
    <section className="bg-charcoal text-white" aria-labelledby="green-title">
      <div className={`${EDGE} py-10 lg:py-12`}>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-brass" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-widest text-brass">Sustainable Today, Better Tomorrow</span>
            </div>
            <h2 id="green-title" className="mt-3 font-serif text-2xl font-bold sm:text-3xl">
              Go Green. <span className="text-brass">Save Forests.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-white/75">
            Made from coconut shell, a renewable by-product of agriculture, so no trees are cut for fuel.
          </p>
        </div>
        <ul className="mt-8 grid grid-cols-2 gap-y-8 sm:grid-cols-3 lg:grid-cols-5 lg:divide-x lg:divide-white/10">
          {GREEN.map((g) => (
            <li key={g.label} className="flex flex-col items-center gap-3 px-3 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-brass/70 bg-white/5 text-brass">
                <Icon d={g.icon} className="h-7 w-7" />
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-white/90">{g.label}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-0.5 bg-brass" aria-hidden="true" />
    </section>
  );
}

/* 4) Applications tiles (brochure pages 3 and 4) */
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