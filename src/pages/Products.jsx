// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { PRODUCTS } from "../data/products.js";
// import { Seo, WRAP, SECTION, CARD, ProductVisual, QuoteLink } from "../components/ui.jsx";
// import Breadcrumbs from "../components/Breadcrumbs.jsx";
// import heroImg from "../assets/hero1.png";

// /* ------------------------------------------------------------------ *
//  * CONTENT (per developer plan: /products/ filters by application and
//  * product form, shows every approved family with thumbnail, brief use
//  * and a technical-sheet action)
//  * ------------------------------------------------------------------ */
// const APPLICATION_FILTERS = [
//   ["all", "All applications"],
//   ["shisha", "Shisha & Hookah"],
//   ["bbq", "BBQ & Foodservice"],
//   ["filtration", "Industrial filtration"],
// ];
// const FORM_FILTERS = [
//   ["all", "All forms"],
//   ["fuel", "Fuel charcoal"],
//   ["carbon", "Activated carbon"],
// ];

// // Which application(s) each product serves. If a product in data/products.js
// // carries its own `appKeys` array, that wins over this map.
// const APP_BY_SLUG = {
//   "hookah-charcoal-cubes": ["shisha"],
//   "pillow-charcoal-briquettes": ["bbq"],
//   "hexagonal-charcoal-briquettes": ["shisha", "bbq"],
//   "coconut-charcoal-briquettes": ["shisha", "bbq"],
//   "coconut-shell-activated-carbon": ["filtration"],
// };
// const appsFor = (p) => p.appKeys ?? APP_BY_SLUG[p.slug] ?? [];

// /* ------------------------------------------------------------------ *
//  * SHARED STYLES (same tokens as the homepage, header and footer)
//  * ------------------------------------------------------------------ */
// const EDGE = "w-full px-6 sm:px-10 lg:px-16 xl:px-24";
// const FOCUS = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass";
// const BTN_PRIMARY =
//   "inline-flex items-center justify-center gap-2 rounded-md bg-brass px-6 py-3 text-sm font-bold text-charcoal shadow-sm transition-colors hover:bg-[#9a7e4b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";
// const BTN_GHOST_LIGHT =
//   "inline-flex items-center justify-center rounded-md border border-charcoal/25 px-6 py-3 text-sm font-medium text-charcoal transition-colors hover:border-charcoal " + FOCUS;

// /* ------------------------------------------------------------------ *
//  * PRODUCT PHOTOS
//  * Unsplash placeholders per product. Replace each URL with a real photo
//  * (e.g. "/images/products/pillow.jpg"). Use a direct image link
//  * (images.unsplash.com/photo-...), not an unsplash.com/photos/... page link.
//  * If an image fails to load, the original ProductVisual is shown instead.
//  * Also used by ProductDetail.jsx.
//  * ------------------------------------------------------------------ */
// export const PRODUCT_IMG = {
//   "coconut-shell-activated-carbon": "https://media.istockphoto.com/id/1180352712/photo/coconut-charcoal-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=UGGQfQRzqgMAHMB6BW-a8WL_VAO9okAm2crOsZ1WXwI=",
//   "hookah-charcoal-cubes": "https://media.istockphoto.com/id/951444672/photo/texture-of-coal-for-hookah.jpg?s=612x612&w=0&k=20&c=yvxWHPvRG4zOjilTHhZsvREbi57bYolEKg8EvJhYZ3I=",
//   "pillow-charcoal-briquettes": "https://media.istockphoto.com/id/652635166/photo/close-up-of-the-coconut-shell-charcoal-briquette.jpg?s=612x612&w=0&k=20&c=FAPwAnZBJpIaHaGfvE9CclG_9iCtae7fphwwQPqURww=",
//   "hexagonal-charcoal-briquettes": "https://media.istockphoto.com/id/1250313037/photo/hardwood-charcoal-isolated-on-white.jpg?s=612x612&w=0&k=20&c=DTWNAyTIoNuU174dU1dhZBCcR_mSC28Z5BOEfLGDoYo=",
//   "coconut-charcoal-briquettes": "https://media.istockphoto.com/id/1195570022/photo/coconut-charcoal-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=iuqHrDuv4fwASc_g0NpiCmAMQ73Kd-2me7sulX1rYuI=",
//   "coconut-shell-charcoal": "https://media.istockphoto.com/id/1397454073/photo/coconut-shell-charcoal-background.jpg?s=612x612&w=0&k=20&c=oIbYXHV_VFGBzVNMh7tfZBVPvGnSPDbTq2J7epHpc9Y=",
// };

// export function ProductPhoto({ product, className = "", imgClass = "", eager = false }) {
//   const [failed, setFailed] = useState(false);
//   const src = PRODUCT_IMG[product.slug] || product.image; // the list above wins over any image set in data/products.js

//   if (!src || failed) return <ProductVisual product={product} className={className} />;

//   return (
//     <div className={`overflow-hidden bg-charcoal ${className}`}>
//       <img
//         src={src}
//         alt={product.name}
//         loading={eager ? "eager" : "lazy"}
//         fetchpriority={eager ? "high" : undefined}
//         decoding="async"
//         onError={() => setFailed(true)}
//         className={`h-full w-full object-cover ${imgClass}`}
//       />
//     </div>
//   );
// }

// function Chip({ active, children, ...rest }) {
//   return (
//     <button
//       type="button"
//       aria-pressed={active}
//       className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${FOCUS} ${
//         active ? "border-charcoal bg-charcoal text-ivory" : "border-charcoal/20 bg-white text-charcoal hover:border-brass"
//       }`}
//       {...rest}
//     >
//       {children}
//     </button>
//   );
// }

// export default function Products() {
//   const [app, setApp] = useState("all");
//   const [form, setForm] = useState("all");

//   const list = PRODUCTS.filter(
//     (p) => (app === "all" || appsFor(p).includes(app)) && (form === "all" || p.family === form)
//   );
//   const reset = () => { setApp("all"); setForm("all"); };

//   return (
//     <>
//       <Seo
//         title="Coconut Charcoal and Activated Carbon Products"
//         description="Coconut shell activated carbon, hookah cubes, pillow and hexagonal briquettes and coconut shell charcoal for export."
//       />

//       {/* Banner */}
      // <section className="relative overflow-hidden bg-charcoal text-white" aria-labelledby="products-title">
      //   <div className="absolute inset-0 z-0" aria-hidden="true">
      //     <img src={heroImg} alt="" decoding="async" className="h-full w-full object-cover object-[75%_center]" />
      //     <div className="absolute inset-0 bg-gradient-to-r from-charcoal from-35% via-charcoal/85 via-60% to-charcoal/30" />
      //   </div>
      //   <div className={`relative z-10 ${EDGE} py-14 sm:py-16 lg:py-20`}>
      //     <div className="max-w-2xl">
      //       <div className="flex items-center gap-3">
      //         <span className="h-px w-10 bg-brass" aria-hidden="true" />
      //         <span className="text-xs font-bold uppercase tracking-widest text-brass">Products</span>
      //       </div>
      //       <h1 id="products-title" className="mt-4 font-serif text-4xl font-bold leading-[1.1] sm:text-5xl">
      //         Coconut Charcoal <span className="font-medium text-brass">&amp;</span> Activated Carbon
      //       </h1>
      //       <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
      //         Filter by application and product form, then open a product to review its specification parameters and request a quote.
      //       </p>
      //     </div>
      //   </div>
      //   <div className="relative z-10 h-0.5 bg-brass" aria-hidden="true" />
      // </section>

//       <Breadcrumbs trail={[{ label: "Products" }]} />

//       {/* Filters + grid */}
//       <section className={`${SECTION} bg-ivory`} aria-labelledby="catalogue-title">
//         <div className={WRAP}>
//           <h2 id="catalogue-title" className="sr-only">Product catalogue</h2>

//           <div className="rounded-2xl border border-charcoal/10 bg-white p-5 shadow-sm sm:p-6">
//             <div className="grid gap-5 lg:grid-cols-2 lg:gap-10">
//               <div>
//                 <p className="mb-3 text-xs font-bold uppercase tracking-widest text-brass">Application</p>
//                 <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by application">
//                   {APPLICATION_FILTERS.map(([k, label]) => (
//                     <Chip key={k} active={app === k} onClick={() => setApp(k)}>{label}</Chip>
//                   ))}
//                 </div>
//               </div>
//               <div>
//                 <p className="mb-3 text-xs font-bold uppercase tracking-widest text-brass">Product form</p>
//                 <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by product form">
//                   {FORM_FILTERS.map(([k, label]) => (
//                     <Chip key={k} active={form === k} onClick={() => setForm(k)}>{label}</Chip>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           <p className="mt-6 text-sm font-medium text-slate" aria-live="polite">
//             Showing {list.length} {list.length === 1 ? "product" : "products"}
//           </p>

//           {list.length === 0 ? (
//             <div className="mt-4 rounded-2xl border border-dashed border-charcoal/25 bg-white p-10 text-center">
//               <p className="font-serif text-xl font-bold text-charcoal">No products match these filters</p>
//               <p className="mt-2 text-slate">Try a different combination, or tell us what you need and we will review it.</p>
//               <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
//                 <button type="button" onClick={reset} className={BTN_GHOST_LIGHT}>Clear filters</button>
//                 <Link to="/request-a-quote/" className={BTN_PRIMARY}>Send Your Requirements <span aria-hidden="true">&rarr;</span></Link>
//               </div>
//             </div>
//           ) : (
//             <ul className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//               {list.map((p) => (
//                 <li key={p.slug} className="flex">
//                   <article className={`${CARD} group flex w-full flex-col overflow-hidden rounded-xl border border-charcoal/10 bg-white shadow-sm transition-all hover:border-brass/40 hover:shadow-lg`}>
//                     <Link to={`/products/${p.slug}/`} tabIndex={-1} aria-hidden="true" className="block overflow-hidden">
//                       <ProductPhoto product={p} className="aspect-[4/3]" imgClass="transition-transform duration-700 group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none" />
//                     </Link>

//                     <div className="flex flex-1 flex-col p-6">
//                       <p className="text-xs font-bold uppercase tracking-widest text-brass">{p.tag}</p>
//                       <h3 className="mt-2 font-serif text-xl font-bold leading-snug text-charcoal">
//                         <Link to={`/products/${p.slug}/`} className={`hover:text-brass ${FOCUS}`}>{p.name}</Link>
//                       </h3>
//                       <p className="mt-2 text-sm leading-relaxed text-slate">{p.summary}</p>

//                       {p.applications?.length > 0 && (
//                         <ul className="mt-4 flex flex-wrap gap-2">
//                           {p.applications.slice(0, 3).map((a) => (
//                             <li key={a} className="rounded-full border border-charcoal/15 bg-ivory px-3 py-1 text-xs font-semibold text-charcoal">{a}</li>
//                           ))}
//                         </ul>
//                       )}

//                       <div className="mt-auto pt-6">
//                       <div className="flex items-center justify-between gap-4 border-t border-charcoal/10 pt-5">
//                         <Link to={`/products/${p.slug}/`} className={`text-sm font-bold text-brass transition-all hover:text-charcoal ${FOCUS}`}>
//                           View Specifications <span aria-hidden="true">&rarr;</span>
//                         </Link>
//                         <QuoteLink product={p.slug} className={`text-sm font-semibold text-charcoal underline decoration-brass decoration-2 underline-offset-4 ${FOCUS}`}>
//                           {p.approvedSpec?.tdsUrl ? "Request Quote" : "Request Grade Details"}
//                         </QuoteLink>
//                       </div>
//                       </div>
//                     </div>
//                   </article>
//                 </li>
//               ))}
//             </ul>
//           )}

//           {/* Briquette hub pointer */}
//           <div className="mt-12 flex flex-col gap-5 rounded-2xl border border-charcoal/10 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between lg:p-8">
//             <div className="max-w-2xl">
//               <p className="font-serif text-xl font-bold text-charcoal">Comparing briquette formats?</p>
//               <p className="mt-2 text-sm leading-relaxed text-slate">
//                 Our briquette guide introduces pillow-shaped, hexagonal and hookah cube formats side by side, so you can choose the right product page.
//               </p>
//             </div>
//             <Link to="/products/coconut-charcoal-briquettes/" className={`${BTN_GHOST_LIGHT} shrink-0`}>Open the briquette guide</Link>
//           </div>
//         </div>
//       </section>

//       {/* Closing action */}
//       <section className="bg-charcoal py-16 text-white lg:py-20" aria-labelledby="products-cta">
//         <div className={WRAP}>
//           <div className="mx-auto max-w-2xl text-center">
//             <h2 id="products-cta" className="font-serif text-3xl font-bold leading-tight text-brass sm:text-4xl">Not Sure Which Product Fits?</h2>
//             <p className="mt-4 text-lg text-white/85">Tell us the application, specification and destination. Our team will review an appropriate available grade.</p>
//             <Link to="/request-a-quote/" className={`${BTN_PRIMARY} mt-8 px-8 py-3.5`}>Send Your Requirements <span aria-hidden="true">&rarr;</span></Link>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }









import { useState } from "react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../data/products.js";
import { Seo, WRAP, SECTION, CARD, ProductVisual, QuoteLink } from "../components/ui.jsx";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
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

/* ------------------------------------------------------------------ *
 * SHARED STYLES (same tokens as the homepage hero, header and footer)
 * ------------------------------------------------------------------ */
const EDGE = "w-full px-6 sm:px-10 lg:px-16 xl:px-24";
const FOCUS = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass";
const BTN_PRIMARY =
  "inline-flex items-center justify-center gap-2 rounded-md bg-brass px-6 py-3 text-sm font-bold text-charcoal shadow-sm transition-colors hover:bg-[#9a7e4b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal";
const BTN_GHOST_LIGHT =
  "inline-flex items-center justify-center gap-2 rounded-md border border-charcoal/25 bg-white/60 px-6 py-3 text-sm font-medium text-charcoal transition-colors hover:border-charcoal " + FOCUS;
const BTN_GHOST_DARK =
  "inline-flex items-center justify-center gap-2 rounded-md border border-white/40 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

/* ------------------------------------------------------------------ *
 * PRODUCT PHOTOS (same images as the homepage)
 * Put photos in  src/assets/products/  named after the product slug, e.g.
 *   coconut-shell-charcoal.jpg, hookah-charcoal-cubes.jpg,
 *   hexagonal-charcoal-briquettes.jpg, pillow-charcoal-briquettes.jpg,
 *   coconut-shell-activated-carbon.jpg, coconut-charcoal-briquettes.jpg
 * Priority: local file -> online placeholder below -> ProductVisual.
 * Also used by ProductDetail.jsx.
 * ------------------------------------------------------------------ */
const LOCAL_IMAGES = Object.fromEntries(
  Object.entries(
    import.meta.glob("../assets/products/*.{jpg,jpeg,png,webp}", { eager: true, import: "default" })
  ).map(([path, src]) => [path.split("/").pop().replace(/\.[^.]+$/, ""), src])
);

// Old short homepage names also work as file names.
const FILE_ALIAS = {
  "hookah-charcoal-cubes": "hookah-cubes",
  "hexagonal-charcoal-briquettes": "hex-charcoal",
  "pillow-charcoal-briquettes": "charcoal-briquette",
  "coconut-shell-activated-carbon": "activated-charcoal",
};

export const PRODUCT_IMG = {
  "coconut-shell-activated-carbon": "https://media.istockphoto.com/id/1180352712/photo/coconut-charcoal-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=UGGQfQRzqgMAHMB6BW-a8WL_VAO9okAm2crOsZ1WXwI=",
  "hookah-charcoal-cubes": "https://media.istockphoto.com/id/951444672/photo/texture-of-coal-for-hookah.jpg?s=612x612&w=0&k=20&c=yvxWHPvRG4zOjilTHhZsvREbi57bYolEKg8EvJhYZ3I=",
  "pillow-charcoal-briquettes": "https://media.istockphoto.com/id/652635166/photo/close-up-of-the-coconut-shell-charcoal-briquette.jpg?s=612x612&w=0&k=20&c=FAPwAnZBJpIaHaGfvE9CclG_9iCtae7fphwwQPqURww=",
  "hexagonal-charcoal-briquettes": "https://media.istockphoto.com/id/1250313037/photo/hardwood-charcoal-isolated-on-white.jpg?s=612x612&w=0&k=20&c=DTWNAyTIoNuU174dU1dhZBCcR_mSC28Z5BOEfLGDoYo=",
  "coconut-charcoal-briquettes": "https://media.istockphoto.com/id/1195570022/photo/coconut-charcoal-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=iuqHrDuv4fwASc_g0NpiCmAMQ73Kd-2me7sulX1rYuI=",
  "coconut-shell-charcoal": "https://media.istockphoto.com/id/1397454073/photo/coconut-shell-charcoal-background.jpg?s=612x612&w=0&k=20&c=oIbYXHV_VFGBzVNMh7tfZBVPvGnSPDbTq2J7epHpc9Y=",
};

export const imageFor = (p) =>
  LOCAL_IMAGES[p.slug] || LOCAL_IMAGES[FILE_ALIAS[p.slug]] || PRODUCT_IMG[p.slug] || p.image || null;

export function ProductPhoto({ product, className = "", imgClass = "", eager = false }) {
  const [failed, setFailed] = useState(false);
  const src = imageFor(product);

  if (!src || failed) return <ProductVisual product={product} className={className} />;

  return (
    <div className={`overflow-hidden bg-ivory ${className}`}>
      <img
        src={src}
        alt={product.name}
        loading={eager ? "eager" : "lazy"}
        fetchpriority={eager ? "high" : undefined}
        decoding="async"
        onError={() => setFailed(true)}
        className={`h-full w-full object-cover ${imgClass}`}
      />
    </div>
  );
}

function Chip({ active, children, ...rest }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${FOCUS} ${
        active ? "border-brass bg-brass text-charcoal shadow-sm" : "border-brass/40 bg-white text-charcoal hover:border-brass hover:bg-ivory"
      }`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default function Products() {
  const [app, setApp] = useState("all");
  const [form, setForm] = useState("all");

  const list = PRODUCTS.filter(
    (p) => (app === "all" || appsFor(p).includes(app)) && (form === "all" || p.family === form)
  );
  const reset = () => { setApp("all"); setForm("all"); };

  return (
    <>
      <Seo
        title="Coconut Charcoal and Activated Carbon Products"
        description="Coconut shell activated carbon, hookah cubes, pillow and hexagonal briquettes and coconut shell charcoal for export."
      />

      <section className="relative overflow-hidden bg-charcoal text-white" aria-labelledby="products-title">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img src={heroImg} alt="" decoding="async" className="h-full w-full object-cover object-[75%_center]" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal from-35% via-charcoal/85 via-60% to-charcoal/30" />
        </div>
        <div className={`relative z-10 ${EDGE} py-14 sm:py-16 lg:py-20`}>
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-brass" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-widest text-brass">Products</span>
            </div>
            <h1 id="products-title" className="mt-4 font-serif text-4xl font-bold leading-[1.1] sm:text-5xl">
              Coconut Charcoal <span className="font-medium text-brass">&amp;</span> Activated Carbon
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
              Filter by application and product form, then open a product to review its specification parameters and request a quote.
            </p>
          </div>
        </div>
        <div className="relative z-10 h-0.5 bg-brass" aria-hidden="true" />
      </section>

      <Breadcrumbs trail={[{ label: "Products" }]} />

      {/* Filters + grid */}
      <section id="catalogue" className={`${SECTION} scroll-mt-24 bg-ivory`} aria-labelledby="catalogue-title">
        <div className={WRAP}>
          <h2 id="catalogue-title" className="sr-only">Product catalogue</h2>

          {list.length === 0 ? (
            <div className="mt-4 rounded-2xl border border-dashed border-charcoal/25 bg-white p-10 text-center">
              <p className="font-serif text-xl font-bold text-charcoal">No products match these filters</p>
              <p className="mt-2 text-slate">Try a different combination, or tell us what you need and we will review it.</p>
              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <button type="button" onClick={reset} className={BTN_GHOST_LIGHT}>Clear filters</button>
                <Link to="/request-a-quote/" className={BTN_PRIMARY}>Send Your Requirements <span aria-hidden="true">&rarr;</span></Link>
              </div>
            </div>
          ) : (
            <ul className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((p) => (
                <li key={p.slug} className="flex">
                  <article className={`${CARD} group relative flex w-full flex-col overflow-hidden rounded-xl border border-charcoal/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brass/50 hover:shadow-lg motion-reduce:transform-none`}>
                    <span className="absolute inset-x-0 top-0 z-10 h-0.5 origin-left scale-x-0 bg-brass transition-transform duration-300 group-hover:scale-x-100" aria-hidden="true" />
                    <Link to={`/products/${p.slug}/`} tabIndex={-1} aria-hidden="true" className="relative block overflow-hidden">
                      <ProductPhoto product={p} className="aspect-[4/3]" imgClass="transition-transform duration-700 group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none" />
                      <span className="absolute left-2.5 top-2.5 rounded bg-charcoal px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-widest text-brass">{p.tag}</span>
                    </Link>

                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-serif text-xl font-bold leading-snug text-charcoal">
                        <Link to={`/products/${p.slug}/`} className={`hover:text-brass ${FOCUS}`}>{p.name}</Link>
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate">{p.summary}</p>

                      {p.applications?.length > 0 && (
                        <ul className="mt-4 flex flex-wrap gap-2">
                          {p.applications.slice(0, 3).map((a) => (
                            <li key={a} className="rounded-full border border-brass/40 bg-ivory px-3 py-1 text-xs font-semibold text-charcoal">{a}</li>
                          ))}
                        </ul>
                      )}

                      <div className="mt-auto pt-6">
                        <div className="flex items-center justify-between gap-4 border-t border-charcoal/10 pt-5">
                          <Link to={`/products/${p.slug}/`} className={`text-sm font-bold text-brass transition-colors hover:text-charcoal ${FOCUS}`}>
                            View Specifications <span aria-hidden="true">&rarr;</span>
                          </Link>
                          <QuoteLink product={p.slug} className={`text-sm font-semibold text-charcoal underline decoration-brass decoration-2 underline-offset-4 hover:text-brass ${FOCUS}`}>
                            {p.approvedSpec?.tdsUrl ? "Request Quote" : "Request Grade Details"}
                          </QuoteLink>
                        </div>
                      </div>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-12 flex flex-col gap-5 rounded-2xl border border-charcoal/10 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between lg:p-8">
            <div className="max-w-2xl">
              <p className="font-serif text-xl font-bold text-charcoal">Comparing briquette formats?</p>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                Our briquette guide introduces pillow-shaped, hexagonal and hookah cube formats side by side, so you can choose the right product page.
              </p>
            </div>
            <Link to="/products/coconut-charcoal-briquettes/" className={`${BTN_GHOST_LIGHT} shrink-0`}>Open the briquette guide</Link>
          </div>
        </div>
      </section>

      {/* Closing action */}
      <section className="bg-charcoal py-16 text-white lg:py-20" aria-labelledby="products-cta">
        <div className={WRAP}>
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="products-cta" className="font-serif text-3xl font-bold leading-tight text-brass sm:text-4xl">Not Sure Which Product Fits?</h2>
            <p className="mt-4 text-lg text-white/85">Tell us the application, specification and destination. Our team will review an appropriate available grade.</p>
            <Link to="/request-a-quote/" className={`${BTN_PRIMARY} mt-8 px-8 py-3.5`}>Send Your Requirements <span aria-hidden="true">&rarr;</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}