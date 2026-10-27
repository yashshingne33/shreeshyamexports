// import { Link } from "react-router-dom";
// import { COMPANY } from "../data/site.js";
// import { getProduct, legacyNamesFor } from "../data/products.js";
// import { Seo, WRAP, SECTION, ContactLines, QuoteLink } from "../components/ui.jsx";
// import heroImg from "../assets/hero1.png";
// import AboutImg from "../assets/hero-old.png";
// import {
//   Photo, ProductPhoto, ProcessFlow, SectionHeader, Icon, ICONS, GRID_BG,
//   BTN_PRIMARY, BTN_GHOST_DARK, BTN_GHOST_LIGHT, TEXT_LINK, EDGE,
// } from "../components/PageKit.jsx";

// /* ------------------------------------------------------------------ *
//  * PRODUCT IMAGES
//  * Put your photos in  src/assets/products/  and name each file after
//  * the product slug (.jpg / .jpeg / .png / .webp all work). Old file
//  * names (shisha-cubes, hexa-charcoal, ...) are still found.
//  * If a file is missing, the product falls back to <ProductPhoto>.
//  * ------------------------------------------------------------------ */
// const PRODUCT_IMAGES = Object.fromEntries(
//   Object.entries(
//     import.meta.glob("../assets/products/*.{jpg,jpeg,png,webp}", { eager: true, import: "default" })
//   ).map(([path, src]) => [path.split("/").pop().replace(/\.[^.]+$/, ""), src])
// );

// function ProductImage({ slug, alt, ratio, zoom = false, className = "" }) {
//   const src = [slug, ...legacyNamesFor(slug)].map((n) => PRODUCT_IMAGES[n]).find(Boolean);
//   if (!src) return <ProductPhoto slug={slug} alt={alt} ratio={ratio} zoom={zoom} className={className} />;
//   return (
//     <Photo
//       src={src}
//       alt={alt}
//       ratio={ratio}
//       className={className}
//       /* zoom only on motion-safe, hover-capable devices (no sticky hover on phones) */
//       imgClass={
//         zoom
//           ? "motion-safe:transition-transform motion-safe:duration-500 motion-safe:[@media(hover:hover)]:group-hover:scale-105"
//           : ""
//       }
//     />
//   );
// }

// const FEATURES = [
//   { title: "25+ Years", body: "Team experience in carbon and metallurgical fuels.", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
//   { title: "Specification-Focused", body: "Products matched to your requirements and application.", icon: ICONS.shield },
//   { title: "Export Coordination", body: "Documentation, packaging and shipment support.", icon: ICONS.clipboard },
//   { title: "Long-Term Relationships", body: "Clear communication from enquiry to dispatch.", icon: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" },
// ];

// /* One complete five-product section. Names and descriptions come from
//    data/products.js so the homepage, catalogue and product pages never drift. */
// const PORTFOLIO = [
//   "coconut-shell-charcoal",
//   "hookah-charcoal-cubes",
//   "hexagonal-charcoal-briquettes",
//   "pillow-charcoal-briquettes",
//   "coconut-shell-activated-carbon",
// ].map(getProduct).filter(Boolean);

// const PORTFOLIO_POS = [
//   "",
//   "",
//   "",
//   "lg:col-start-2 xl:col-start-auto",
//   "sm:col-span-2 sm:w-[calc(50%-0.5rem)] sm:justify-self-center lg:col-span-2 lg:w-auto lg:justify-self-auto xl:col-span-1",
// ];

// const VALUES = ["Integrity", "Transparency", "Quality", "Commitment", "Long-term Relationships"];

// const WHY = [
//   ["Specification Review", "We review your application, required parameters and packing needs before preparing an offer."],
//   ["Supplier Coordination", "We coordinate product requirements, packaging and dispatch with the supplier for the agreed order."],
//   ["Product Documentation", "We confirm the technical, safety and quality documents available for the proposed grade."],
//   ["Packaging Options", "Bulk, retail and private-label formats are confirmed against the product and order quantity."],
//   ["Export Coordination", "We coordinate the agreed documentation and shipment arrangements for your destination."],
//   ["Clear Communication", "Product specifications, commercial terms and order requirements are confirmed in writing."],
// ];

// /* Homepage export flow (the shared EXPORT_FLOW in PageKit is used by other pages) */
// const HOME_FLOW = [
//   ["Requirement Review", "Share the product, application, quantity and destination."],
//   ["Specification Confirmation", "Review the proposed grade and confirm the required parameters."],
//   ["Inspection and Packing", "Agree the inspection scope and packaging before dispatch."],
//   ["Documentation", "Confirm the documents required for the product and shipment."],
//   ["Shipment Coordination", "Confirm the route and dispatch arrangements for the agreed order."],
// ];

// const ENQUIRY_ITEMS = [
//   "Product and grade or format you need",
//   "Approximate quantity and packing preference",
//   "Destination country or port",
//   "Technical specification, if you have one",
// ];

// const ENQUIRY_STEPS = [
//   ["Send your requirement", "Product, quantity and destination."],
//   ["We confirm the details", "Specification, packing and commercial terms."],
//   ["Receive your quotation", "Clear terms and applicable documentation."],
// ];

// /* Hover lift only on devices that really hover (no "stuck" hover on iPhone/iPad) */
// const LIFT_SM = "motion-safe:[@media(hover:hover)]:hover:-translate-y-1";

// export default function Home() {
//   return (
//     <>
//       <Seo
//         title={`Indian Supplier & Exporter of Coconut Charcoal and Activated Carbon | ${COMPANY.name}`}
//         description="Indian supplier and exporter of coconut charcoal products and coconut shell activated carbon for international buyers. Request a quote with your specification and destination."
//       />

//       {/* 01 Hero */}
//       <section aria-labelledby="hero-title">
//         <div className="relative flex w-full items-center overflow-hidden bg-charcoal text-white sm:min-h-[26rem] lg:min-h-[clamp(460px,calc(100svh-14rem),620px)]">
//           <div className="absolute inset-0 z-0">
//             <img src={heroImg} alt="" fetchPriority="high" decoding="async" className="h-full w-full object-cover object-[72%_center]" />
//             {/* Overlay: even tint on phones (readable text), left-to-right fade from tablet up */}
//             <div className="absolute inset-0 bg-gradient-to-b from-charcoal/85 via-charcoal/75 to-charcoal/90 sm:bg-gradient-to-r sm:from-charcoal/95 sm:via-charcoal/80 sm:to-charcoal/40 lg:from-charcoal lg:from-30% lg:via-charcoal/70 lg:via-55% lg:to-transparent" />
//             <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-charcoal/50 to-transparent" />
//           </div>

//           <div className="relative z-10 w-full px-5 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-10 xl:px-24">
//             <div className="max-w-2xl">
//               <div className="flex items-center gap-3">
//                 <span className="h-px w-8 shrink-0 bg-brass sm:w-10" aria-hidden="true" />
//                 <span className="text-[0.65rem] font-bold uppercase tracking-widest text-brass min-[400px]:text-[0.7rem] sm:text-xs">Indian Supplier & Exporter</span>
//               </div>

//               <h1
//                 id="hero-title"
//                 className="mt-5 max-w-xl font-serif text-[1.875rem] font-bold leading-[1.1] text-white [text-wrap:balance] min-[400px]:text-4xl sm:text-5xl sm:leading-[1.08] xl:text-[3.5rem]"
//               >
//                 Coconut Charcoal and Activated Carbon <span className="font-medium text-brass">from India</span>
//               </h1>

//               <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/85 sm:mt-6 sm:text-base">
//                 {COMPANY.name} supplies coconut shell charcoal, shisha charcoal cubes, BBQ briquettes and coconut shell activated carbon to international buyers. Share your specification, packaging requirements and destination for a product-specific quotation.
//               </p>

//               <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
//                 <QuoteLink className={`${BTN_PRIMARY} justify-center px-7 py-3.5 text-center`}>Request a Quote <span aria-hidden="true">&rarr;</span></QuoteLink>
//                 <Link to="/products/" className={`${BTN_GHOST_DARK} justify-center px-7 py-3.5 text-center`}>Explore Products</Link>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="border-t-2 border-brass bg-ivory">
//           <div className={`grid grid-cols-1 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-4 lg:gap-x-0 ${EDGE}`}>
//             {FEATURES.map((f, i) => (
//               <div
//                 key={f.title}
//                 className={[
//                   "flex items-center gap-4 py-4 sm:py-5 lg:py-6",
//                   // mobile: stacked rows with dividers | sm: 2x2 (row 2 divided) | lg: 4 columns with vertical dividers
//                   i > 0 ? "border-t border-charcoal/10" : "",
//                   i === 1 ? "sm:border-t-0" : "",
//                   "lg:border-t-0",
//                   i > 0 ? "lg:border-l lg:border-charcoal/10 lg:pl-6 xl:pl-8" : "",
//                   i < FEATURES.length - 1 ? "lg:pr-6 xl:pr-8" : "",
//                 ].join(" ")}
//               >
//                 <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brass/60 bg-white text-brass shadow-sm sm:h-12 sm:w-12">
//                   <Icon d={f.icon} className="h-5 w-5 sm:h-6 sm:w-6" />
//                 </span>
//                 <div className="min-w-0">
//                   <h3 className="font-serif text-base font-bold leading-tight text-charcoal">{f.title}</h3>
//                   <p className="mt-1 text-[0.8125rem] leading-snug text-slate">{f.body}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 02 Experience */}
//       <section className={`${SECTION} bg-ivory`} aria-labelledby="experience-title">
//         <div className={`${WRAP} grid items-center gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-16`}>
//           <div className="lg:col-span-7">
//             <span className="text-xs font-bold uppercase tracking-widest text-brass">Our Experience</span>
//             <h2 id="experience-title" className="mt-3 font-serif text-3xl font-bold leading-tight text-charcoal sm:text-4xl lg:text-5xl">
//               A new name backed by over 25 years of industry experience
//             </h2>
//             <p className="mt-5 max-w-xl text-base leading-relaxed text-slate sm:mt-6 sm:text-lg">
//               Our team brings over 25 years of experience in charcoal, Met Coke and LAM Coke. We apply this industry knowledge to sourcing, specification review, packaging and export coordination for international buyers.
//             </p>
//             <ul className="mt-6 flex flex-wrap gap-2.5 sm:mt-7 sm:gap-3" aria-label="Our values">
//               {VALUES.map((v) => (
//                 <li key={v} className="inline-flex items-center gap-2 rounded-full border border-brass/50 bg-white px-3.5 py-1.5 text-[0.8125rem] font-semibold text-charcoal sm:px-4 sm:py-2 sm:text-sm">
//                   <Icon d={ICONS.check} className="h-4 w-4 shrink-0 text-brass" /> {v}
//                 </li>
//               ))}
//             </ul>
//             <Link to="/about/" className={`${BTN_GHOST_LIGHT} mt-7 sm:mt-8`}>Discover Our Story <span aria-hidden="true">&rarr;</span></Link>
//           </div>

//           {/* pb leaves room for the badge that hangs below the photo */}
//           <div className="mx-auto w-full max-w-xl pb-8 lg:col-span-5 lg:max-w-none lg:pb-6">
//             <div className="relative">
//               <Photo
//                 src={AboutImg}
//                 alt="Coconut shell charcoal products"
//                 ratio="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5]"
//                 imgClass="object-[70%_center]"
//                 className="rounded-2xl border border-charcoal/10 shadow-xl"
//               />
//               <div className="absolute -bottom-6 right-4 max-w-[14rem] rounded-xl border-l-4 border-brass bg-charcoal p-4 text-white shadow-2xl sm:right-8 sm:max-w-[16rem] sm:p-5">
//                 <p className="font-serif text-3xl font-bold text-brass sm:text-4xl">25+</p>
//                 <p className="mt-1 text-xs font-bold uppercase tracking-widest sm:text-sm">Years of team experience</p>
//                 <p className="mt-1 text-xs text-white/70">in carbon and metallurgical fuels</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 03 Product portfolio: the one complete five-product section */}
//       <section className={`${SECTION} overflow-hidden bg-white`} aria-labelledby="portfolio-title">
//         <div className={WRAP}>
//           <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
//             <SectionHeader
//               eyebrow="Product Portfolio"
//               title="Coconut Charcoal and Activated Carbon"
//               id="portfolio-title"
//               sub="Explore coconut shell charcoal, shisha cubes, BBQ briquettes and activated carbon for your application."
//             />
//             <Link to="/products/" className={`${BTN_GHOST_LIGHT} shrink-0 self-start whitespace-nowrap sm:self-auto`}>View all products</Link>
//           </div>

//           <ul
//             className="-mx-4 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain scroll-px-4 px-4 pb-4 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:mt-10 sm:grid sm:snap-none sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-6 xl:grid-cols-5"
//             aria-label="Product categories"
//           >
//             {PORTFOLIO.map((p, i) => (
//               <li
//                 key={p.slug}
//                 className={`flex w-[78%] max-w-[18rem] shrink-0 snap-start sm:w-auto sm:max-w-none sm:shrink lg:col-span-2 xl:col-span-1 ${PORTFOLIO_POS[i]}`}
//               >
//                 <article className={`group relative flex w-full flex-col overflow-hidden rounded-xl border border-charcoal/10 bg-white shadow-sm transition-[transform,box-shadow,border-color] duration-300 hover:border-brass/50 hover:shadow-lg ${LIFT_SM}`}>
//                   {/* brass accent line, animates in on hover */}
//                   <span
//                     className="absolute inset-x-0 top-0 z-10 h-0.5 origin-left scale-x-0 bg-brass transition-transform duration-300 group-hover:scale-x-100"
//                     aria-hidden="true"
//                   />

//                   <Link to={`/products/${p.slug}/`} tabIndex={-1} aria-hidden="true" className="relative block overflow-hidden">
//                     <ProductImage slug={p.slug} alt={p.name} ratio="aspect-[4/3]" zoom />
//                     {p.family === "carbon" && (
//                       <span className="absolute left-2.5 top-2.5 rounded bg-charcoal px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-widest text-brass">
//                         Technical
//                       </span>
//                     )}
//                   </Link>

//                   <div className="flex flex-1 flex-col p-4">
//                     <h3 className="font-serif text-base font-bold leading-snug text-charcoal">
//                       <Link to={`/products/${p.slug}/`} className="hover:text-brass focus-visible:outline focus-visible:outline-2 focus-visible:outline-brass">
//                         {p.name}
//                       </Link>
//                     </h3>
//                     <p className="mt-1.5 flex-1 text-[0.8125rem] leading-snug text-slate">{p.summary}</p>

//                     <div className="mt-4 flex flex-col gap-1.5 border-t border-charcoal/10 pt-3">
//                       <Link to={`/products/${p.slug}/`} className={`${TEXT_LINK} text-[0.8125rem]`}>
//                         View Product Details <span aria-hidden="true">&rarr;</span>
//                       </Link>
//                       <QuoteLink product={p.slug} className={`${TEXT_LINK} text-[0.8125rem] !text-charcoal hover:!text-brass`}>
//                         Request a Quote
//                       </QuoteLink>
//                     </div>
//                   </div>
//                 </article>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </section>

//       {/* 04 Why */}
//       <section className={`${SECTION} relative overflow-hidden bg-ivory`} aria-labelledby="why-title">
//         <div className="pointer-events-none absolute inset-0 opacity-60" style={GRID_BG} aria-hidden="true" />

//         <div className={`relative ${WRAP}`}>
//           <div className="grid items-center gap-x-8 gap-y-12 lg:grid-cols-[1fr_auto_1fr] lg:gap-y-14 xl:gap-x-12">

//             {/* Center hub */}
//             <div className="flex justify-center py-4 sm:py-6 lg:col-start-2 lg:row-span-3 lg:row-start-1 lg:py-0">
//               <div className="relative">
//                 {/* decorative rings */}
//                 <span className="absolute -inset-3 rounded-full border border-dashed border-brass/60 sm:-inset-4" aria-hidden="true" />
//                 <span className="absolute -inset-9 hidden rounded-full border border-brass/20 sm:block" aria-hidden="true" />

//                 <div className="relative flex h-56 w-56 flex-col items-center justify-center rounded-full border-4 border-brass bg-charcoal p-6 text-center text-white shadow-2xl min-[400px]:h-64 min-[400px]:w-64 min-[400px]:p-8 sm:h-72 sm:w-72">
//                   <span className="h-0.5 w-10 bg-brass" aria-hidden="true" />
//                   <span className="mt-3 text-[0.65rem] font-bold uppercase tracking-widest text-brass min-[400px]:text-[0.7rem]">Why Choose Us</span>
//                   <h2 id="why-title" className="mt-2 font-serif text-xl font-bold leading-tight min-[400px]:text-2xl sm:text-[1.7rem]">
//                     Why <span className="text-brass">{COMPANY.name}</span>
//                   </h2>
//                 </div>
//               </div>
//             </div>

//             {/* Points: 1 column mobile, 2 columns tablet, arc around the hub on desktop */}
//             <ol className="grid gap-6 sm:grid-cols-2 lg:contents">
//               {WHY.map(([t, d], i) => {
//                 const isLeft = i % 2 === 0;       // 0,2,4 left | 1,3,5 right
//                 const row = Math.floor(i / 2);    // 0,1,2
//                 const POS = [
//                   "lg:col-start-1 lg:row-start-1", "lg:col-start-3 lg:row-start-1",
//                   "lg:col-start-1 lg:row-start-2", "lg:col-start-3 lg:row-start-2",
//                   "lg:col-start-1 lg:row-start-3", "lg:col-start-3 lg:row-start-3",
//                 ][i];
//                 // middle row pushed outward so the points form an arc (xl only, keeps 1024px roomy)
//                 const arc = row === 1 ? (isLeft ? "xl:mr-10" : "xl:ml-10") : "";
//                 return (
//                   <li
//                     key={t}
//                     className={`group flex items-start gap-4 ${POS} ${arc} ${isLeft ? "lg:flex-row-reverse lg:text-right" : ""}`}
//                   >
//                     <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-brass bg-white font-serif text-lg font-bold text-brass shadow-md transition-all duration-300 sm:h-14 sm:w-14 sm:text-xl [@media(hover:hover)]:group-hover:scale-110 [@media(hover:hover)]:group-hover:bg-brass [@media(hover:hover)]:group-hover:text-white">
//                       <span className="absolute -inset-1.5 rounded-full border border-dashed border-brass/50" aria-hidden="true" />
//                       {String(i + 1).padStart(2, "0")}
//                     </span>
//                     <div className="min-w-0 pt-1">
//                       <h3 className="font-serif text-base font-bold leading-snug text-charcoal sm:text-lg">{t}</h3>
//                       <p className="mt-1.5 text-sm leading-relaxed text-slate">{d}</p>
//                     </div>
//                   </li>
//                 );
//               })}
//             </ol>
//           </div>

//           <div className="mt-12 flex justify-center sm:mt-14">
//             <QuoteLink className={`${BTN_PRIMARY} w-full justify-center text-center sm:w-auto`}>Send Your Requirement <span aria-hidden="true">&rarr;</span></QuoteLink>
//           </div>
//         </div>
//       </section>

//       {/* 05 Export process (the repeated Featured Products cards were removed:
//           every product stays reachable from the portfolio section above) */}
//       <section className={`${SECTION} bg-white`} aria-labelledby="process-title">
//         <div className={WRAP}>
//           <SectionHeader
//             eyebrow="Quality & Export Process"
//             title="From Supplier to Shipment"
//             id="process-title"
//             center
//             sub="From specification review to dispatch, each order is coordinated against the agreed product, packing and commercial requirements."
//           />
//           <div className="mt-10 sm:mt-14"><ProcessFlow steps={HOME_FLOW} /></div>
//           <p className="mt-8 flex flex-col items-center gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-8">
//             <Link to="/quality/" className={TEXT_LINK}>Quality and documentation <span aria-hidden="true">&rarr;</span></Link>
//             <Link to="/export-ordering/" className={TEXT_LINK}>How export orders work <span aria-hidden="true">&rarr;</span></Link>
//           </p>
//         </div>
//       </section>

//       {/* 06 Packaging / private label */}
//       <section className={`${SECTION} overflow-hidden bg-ivory`} aria-labelledby="pack-title">
//         <div className={`${WRAP} grid items-center gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-16`}>
//           <div className="lg:col-span-6">
//             <SectionHeader
//               eyebrow="Packaging & Private Label"
//               title="Packaging for Your Product and Market"
//               id="pack-title"
//               sub="Explore bulk, retail and private-label packing for your selected product. Pack materials, quantities and artwork requirements are agreed before production."
//             />
//             <ul className="mt-6 space-y-3">
//               {["Bulk packing for your selected grade", "Retail-ready packs for your sales channel", "Private-label packs, subject to MOQ and confirmation"].map((x) => (
//                 <li key={x} className="flex items-center gap-3 text-slate">
//                   <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brass/15 text-brass"><Icon d={ICONS.check} className="h-4 w-4" /></span>
//                   <span className="min-w-0">{x}</span>
//                 </li>
//               ))}
//             </ul>
//             <Link to="/packaging-private-label/" className={`${BTN_GHOST_LIGHT} mt-7 sm:mt-8`}>View Packaging Options <span aria-hidden="true">&rarr;</span></Link>
//           </div>

//           <div className="mx-auto w-full max-w-xl lg:col-span-6 lg:max-w-none">
//             <div className="grid grid-cols-2 gap-3 sm:gap-4">
//               <img
//                 src="https://images.unsplash.com/photo-1781292428336-1be78d2867e0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                 alt="Premium charcoal packaging"
//                 width="687"
//                 height="859"
//                 loading="lazy"
//                 decoding="async"
//                 className="aspect-[4/5] w-full rounded-2xl border border-charcoal/10 object-cover shadow-md"
//               />

//               <img
//                 src="https://media.istockphoto.com/id/587799204/photo/box-of-coconut-shell-charcoal-for-shisha.webp?a=1&b=1&s=612x612&w=0&k=20&c=2_8T27-qGpV4L8aFYk2TY49oPSDOo3XSIQl7nJN_yc4="
//                 alt="Premium product packaging"
//                 width="612"
//                 height="765"
//                 loading="lazy"
//                 decoding="async"
//                 className="mt-6 aspect-[4/5] w-full rounded-2xl border border-charcoal/10 object-cover shadow-md sm:mt-8"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 07 Send your requirement */}
//       <section id="rfq" className={`${SECTION} scroll-mt-20 bg-white sm:scroll-mt-24`} aria-labelledby="rfq-title">
//         <div className={WRAP}>
//           <div className="relative overflow-hidden rounded-2xl bg-charcoal text-white shadow-2xl sm:rounded-3xl">
//             <div className="pointer-events-none absolute inset-0" style={GRID_BG} aria-hidden="true" />
//             {/* blur glow only where there is GPU headroom (keeps phone scrolling smooth) */}
//             <div className="pointer-events-none absolute -right-24 -top-24 hidden h-72 w-72 rounded-full bg-brass/15 blur-3xl md:block" aria-hidden="true" />
//             <div className="h-1.5 bg-brass" aria-hidden="true" />

//             <div className="relative grid gap-8 p-5 min-[400px]:p-6 sm:gap-10 sm:p-10 lg:grid-cols-12 lg:gap-14 lg:p-14 xl:p-16">
//               {/* Left: message + actions */}
//               <div className="lg:col-span-7">
//                 <span className="block h-0.5 w-10 bg-brass" aria-hidden="true" />
//                 <h2 id="rfq-title" className="mt-4 font-serif text-3xl font-bold leading-tight text-brass sm:text-4xl lg:text-5xl">
//                   Send Your Requirement
//                 </h2>
//                 <p className="mt-4 max-w-xl text-base leading-relaxed text-white/85 sm:mt-5 sm:text-lg">
//                   Send your product requirement, estimated quantity and destination port. Attach your specification or packaging brief so our export team can review the details and prepare the next steps.
//                 </p>

//                 <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
//                   <QuoteLink className={`${BTN_PRIMARY} justify-center px-7 py-3.5 text-center`}>Request a Quote <span aria-hidden="true">&rarr;</span></QuoteLink>
//                   <Link to="/contact/" className={`${BTN_GHOST_DARK} justify-center px-7 py-3.5 text-center`}>Contact Our Export Team</Link>
//                 </div>

//                 {COMPANY.email && (
//                   <p className="mt-5 text-sm text-white/80">
//                     Or email us at{" "}
//                     <a
//                       href={`mailto:${COMPANY.email}`}
//                       className="break-all font-semibold text-brass underline decoration-2 underline-offset-4 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass"
//                     >
//                       {COMPANY.email}
//                     </a>
//                   </p>
//                 )}

//                 <ol className="mt-10 grid gap-5 border-t border-white/15 pt-7 sm:mt-12 sm:grid-cols-3 sm:gap-6 sm:pt-8">
//                   {ENQUIRY_STEPS.map(([t, d], i) => (
//                     <li key={t} className="flex gap-3">
//                       <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brass/60 font-serif text-sm font-bold text-brass">{i + 1}</span>
//                       <div className="min-w-0">
//                         <h3 className="text-sm font-bold text-white">{t}</h3>
//                         <p className="mt-1 text-xs leading-relaxed text-white/70">{d}</p>
//                       </div>
//                     </li>
//                   ))}
//                 </ol>
//               </div>

//               {/* Right: what to include + contact */}
//               <div className="lg:col-span-5">
//                 <div className="rounded-2xl border border-white/15 bg-white/5 p-5 sm:p-8">
//                   <h3 className="font-serif text-xl font-bold text-white">Include in your enquiry</h3>
//                   <ul className="mt-5 space-y-3">
//                     {ENQUIRY_ITEMS.map((x) => (
//                       <li key={x} className="flex items-start gap-3 text-sm leading-relaxed text-white/85">
//                         <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brass/20 text-brass">
//                           <Icon d={ICONS.check} className="h-4 w-4" />
//                         </span>
//                         <span className="min-w-0">{x}</span>
//                       </li>
//                     ))}
//                   </ul>

//                   <div className="mt-6 min-w-0 break-words border-t border-white/15 pt-6 sm:mt-7">
//                     <h3 className="font-serif text-xl font-bold text-brass">Reach our export desk</h3>
//                     <ContactLines className="mt-4 text-white/85" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }











import { Link } from "react-router-dom";
import { COMPANY } from "../data/site.js";
import { getProduct, legacyNamesFor } from "../data/products.js";
import { Seo, WRAP, SECTION, ContactLines, QuoteLink } from "../components/ui.jsx";
import heroImg from "../assets/hero1.png";
import AboutImg from "../assets/hero-old.png";
import {
  Photo, ProductPhoto, ProcessFlow, SectionHeader, Icon, ICONS, GRID_BG,
  BTN_PRIMARY, BTN_GHOST_DARK, BTN_GHOST_LIGHT, TEXT_LINK, EDGE,
} from "../components/PageKit.jsx";

const PRODUCT_IMAGES = Object.fromEntries(
  Object.entries(
    import.meta.glob("../assets/products/*.{jpg,jpeg,png,webp}", { eager: true, import: "default" })
  ).map(([path, src]) => [path.split("/").pop().replace(/\.[^.]+$/, ""), src])
);

function ProductImage({ slug, alt, ratio, zoom = false, className = "" }) {
  const src = [slug, ...legacyNamesFor(slug)].map((n) => PRODUCT_IMAGES[n]).find(Boolean);
  if (!src) return <ProductPhoto slug={slug} alt={alt} ratio={ratio} zoom={zoom} className={className} />;
  return (
    <Photo
      src={src}
      alt={alt}
      ratio={ratio}
      className={className}
      /* zoom only on motion-safe, hover-capable devices (no sticky hover on phones) */
      imgClass={
        zoom
          ? "motion-safe:transition-transform motion-safe:duration-500 motion-safe:[@media(hover:hover)]:group-hover:scale-105"
          : ""
      }
    />
  );
}

const FEATURES = [
  { title: "25+ Years", body: "Team experience in carbon and metallurgical fuels.", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
  { title: "Specification-Focused", body: "Products matched to your requirements and application.", icon: ICONS.shield },
  { title: "Export Coordination", body: "Documentation, packaging and shipment support.", icon: ICONS.clipboard },
  { title: "Long-Term Relationships", body: "Clear communication from enquiry to dispatch.", icon: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" },
];

/* One complete five-product section. Names and descriptions come from
   data/products.js so the homepage, catalogue and product pages never drift. */
const PORTFOLIO = [
  "coconut-shell-charcoal",
  "hookah-charcoal-cubes",
  "hexagonal-charcoal-briquettes",
  "pillow-charcoal-briquettes",
  "coconut-shell-activated-carbon",
].map(getProduct).filter(Boolean);

const PORTFOLIO_POS = [
  "",
  "",
  "",
  "lg:col-start-2 xl:col-start-auto",
  "sm:col-span-2 sm:w-[calc(50%-0.5rem)] sm:justify-self-center lg:col-span-2 lg:w-auto lg:justify-self-auto xl:col-span-1",
];

const VALUES = ["Integrity", "Transparency", "Quality", "Commitment", "Long-term Relationships"];

const WHY = [
  ["Specification Review", "We review your application, required parameters and packing needs before preparing an offer."],
  ["Supplier Coordination", "We coordinate product requirements, packaging and dispatch with the supplier for the agreed order."],
  ["Product Documentation", "We confirm the technical, safety and quality documents available for the proposed grade."],
  ["Packaging Options", "Bulk, retail and private-label formats are confirmed against the product and order quantity."],
  ["Export Coordination", "We coordinate the agreed documentation and shipment arrangements for your destination."],
  ["Clear Communication", "Product specifications, commercial terms and order requirements are confirmed in writing."],
];

/* Homepage export flow (the shared EXPORT_FLOW in PageKit is used by other pages) */
const HOME_FLOW = [
  ["Requirement Review", "Share the product, application, quantity and destination."],
  ["Specification Confirmation", "Review the proposed grade and confirm the required parameters."],
  ["Inspection and Packing", "Agree the inspection scope and packaging before dispatch."],
  ["Documentation", "Confirm the documents required for the product and shipment."],
  ["Shipment Coordination", "Confirm the route and dispatch arrangements for the agreed order."],
];

// const ENQUIRY_ITEMS = [
//   "Product and grade or format you need",
//   "Approximate quantity and packing preference",
//   "Destination country or port",
//   "Technical specification, if you have one",
// ];

const ENQUIRY_STEPS = [
  ["Send your requirement", "Product, quantity and destination."],
  ["We confirm the details", "Specification, packing and commercial terms."],
  ["Receive your quotation", "Clear terms and applicable documentation."],
];

/* Hover lift only on devices that really hover (no "stuck" hover on iPhone/iPad) */
const LIFT_SM = "motion-safe:[@media(hover:hover)]:hover:-translate-y-1";

export default function Home() {
  return (
    <>
      <Seo
        title={`Indian Supplier & Exporter of Coconut Charcoal and Activated Carbon | ${COMPANY.name}`}
        description="Indian supplier and exporter of coconut charcoal products and coconut shell activated carbon for international buyers. Request a quote with your specification and destination."
      />

      {/* 01 Hero */}
      <section aria-labelledby="hero-title">
        <div className="relative flex w-full items-center overflow-hidden bg-ivory text-charcoal sm:min-h-[26rem] lg:min-h-[clamp(460px,calc(100svh-14rem),620px)]">

          {/* Image: always a background behind the content */}
          <div className="absolute inset-0 z-0">
            <img
              src={heroImg}
              alt=""
              fetchPriority="high"
              decoding="async"
              className="h-full w-full object-cover object-[72%_bottom] lg:[mask-image:linear-gradient(to_right,transparent_0%,transparent_30%,#000_42%)]"
            />
            {/* Phone: light even veil so the text stays readable, with the image visible below it */}
            <div className="absolute inset-0 bg-gradient-to-b from-ivory/70 via-ivory/35 to-ivory/10 sm:hidden" aria-hidden="true" />
            {/* Tablet only: left-to-right fade behind the text (desktop uses the image mask instead) */}
            <div className="absolute inset-0 hidden bg-gradient-to-r from-ivory via-ivory/70 to-transparent sm:block lg:hidden" aria-hidden="true" />
          </div>

          {/* Soft brass glow behind the text (desktop) */}
          <div className="pointer-events-none absolute -left-24 top-1/4 z-0 hidden h-96 w-96 rounded-full bg-brass/10 blur-3xl lg:block" aria-hidden="true" />

          <div className="relative z-10 w-full px-5 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-10 xl:px-24">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-3 rounded-full border border-brass/40 bg-white/70 py-1.5 pl-3 pr-4 shadow-sm backdrop-blur">
                <span className="h-2 w-2 shrink-0 rounded-full bg-brass" aria-hidden="true" />
                <span className="text-[0.65rem] font-bold uppercase tracking-widest text-brass min-[400px]:text-[0.7rem] sm:text-xs">Indian Supplier & Exporter</span>
              </div>

              <h1
                id="hero-title"
                className="mt-5 max-w-xl font-serif text-[1.875rem] font-bold leading-[1.1] text-charcoal [text-shadow:0_1px_12px_rgba(255,255,255,0.9)] [text-wrap:balance] min-[400px]:text-4xl sm:text-5xl sm:leading-[1.08] sm:[text-shadow:none] xl:text-[3.5rem]"
              >
                Coconut Charcoal and Activated Carbon{" "}
                <span className="font-extrabold text-[#7A5A18] [text-shadow:0_1px_10px_rgba(255,255,255,0.95)] sm:font-bold sm:text-transparent sm:[text-shadow:none] sm:bg-gradient-to-r sm:from-brass sm:to-brass/70 sm:bg-clip-text">from India</span>
              </h1>

              <p className="mt-5 max-w-lg rounded-xl border border-l-4 border-brass/30 border-l-brass bg-ivory/95 py-3 pl-4 pr-3 text-sm font-medium leading-relaxed text-charcoal shadow-md backdrop-blur-sm sm:mt-6 sm:rounded-none sm:border-0 sm:border-l-2 sm:border-l-brass/50 sm:bg-transparent sm:py-0 sm:pr-0 sm:text-base sm:font-normal sm:text-charcoal/80 sm:shadow-none sm:backdrop-blur-none">
                {COMPANY.name} supplies coconut shell charcoal, shisha charcoal cubes, BBQ briquettes and coconut shell activated carbon to international buyers. Share your specification, packaging requirements and destination for a product-specific quotation.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
                <QuoteLink className={`${BTN_PRIMARY} justify-center px-7 py-3.5 text-center font-bold shadow-xl shadow-charcoal/25 ring-1 ring-[#8A6A22]/40 transition-transform sm:font-semibold sm:shadow-lg sm:shadow-brass/30 sm:ring-0 ${LIFT_SM}`}>Request a Quote <span aria-hidden="true">&rarr;</span></QuoteLink>
                <Link to="/products/" className={`${BTN_GHOST_LIGHT} justify-center bg-white px-7 py-3.5 text-center shadow-sm transition-transform sm:bg-white/70 sm:backdrop-blur ${LIFT_SM}`}>Explore Products</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Floating feature card overlapping the hero */}
        <div className="relative z-20 bg-ivory pb-6 sm:pb-8">
          <div className={EDGE}>
            <div className="mt-6 grid grid-cols-1 rounded-2xl border border-brass/30 bg-white px-5 shadow-xl shadow-charcoal/10 sm:mt-3 sm:grid-cols-2 sm:gap-x-6 sm:px-8 lg:grid-cols-4 lg:gap-x-0 lg:px-0">
              {FEATURES.map((f, i) => (
                <div
                  key={f.title}
                  className={[
                    "flex items-center gap-4 py-4 sm:py-5 lg:py-6",
                    i > 0 ? "border-t border-charcoal/10" : "",
                    i === 1 ? "sm:border-t-0" : "",
                    "lg:border-t-0",
                    i === 0 ? "lg:pl-8" : "",
                    i > 0 ? "lg:border-l lg:border-charcoal/10 lg:pl-6 xl:pl-8" : "",
                    i < FEATURES.length - 1 ? "lg:pr-6 xl:pr-8" : "lg:pr-8",
                  ].join(" ")}
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brass/60 bg-white text-brass shadow-sm sm:h-12 sm:w-12">
                    <Icon d={f.icon} className="h-5 w-5 sm:h-6 sm:w-6" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-serif text-base font-bold leading-tight text-charcoal">{f.title}</h3>
                    <p className="mt-1 text-[0.8125rem] leading-snug text-slate">{f.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 02 Experience */}
      <section className={`${SECTION} bg-ivory`} aria-labelledby="experience-title">
        <div className={`${WRAP} grid items-center gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-16`}>
          <div className="lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-widest text-brass">Our Experience</span>
            <h2 id="experience-title" className="mt-3 font-serif text-3xl font-bold leading-tight text-charcoal sm:text-4xl lg:text-5xl">
              A new name backed by over 25 years of industry experience
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate sm:mt-6 sm:text-lg">
              Our team brings over 25 years of experience in charcoal, Met Coke and LAM Coke. We apply this industry knowledge to sourcing, specification review, packaging and export coordination for international buyers.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2.5 sm:mt-7 sm:gap-3" aria-label="Our values">
              {VALUES.map((v) => (
                <li key={v} className="inline-flex items-center gap-2 rounded-full border border-brass/50 bg-white px-3.5 py-1.5 text-[0.8125rem] font-semibold text-charcoal sm:px-4 sm:py-2 sm:text-sm">
                  <Icon d={ICONS.check} className="h-4 w-4 shrink-0 text-brass" /> {v}
                </li>
              ))}
            </ul>
            <Link to="/about/" className={`${BTN_GHOST_LIGHT} mt-7 sm:mt-8`}>Discover Our Story <span aria-hidden="true">&rarr;</span></Link>
          </div>

          {/* pb leaves room for the badge that hangs below the photo */}
          <div className="mx-auto w-full max-w-xl pb-8 lg:col-span-5 lg:max-w-none lg:pb-6">
            <div className="relative">
              <Photo
                src={AboutImg}
                alt="Coconut shell charcoal products"
                ratio="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5]"
                imgClass="object-[70%_center]"
                className="rounded-2xl border border-charcoal/10 shadow-xl"
              />
              <div className="absolute -bottom-6 right-4 max-w-[14rem] rounded-xl border-l-4 border-brass bg-charcoal p-4 text-white shadow-2xl sm:right-8 sm:max-w-[16rem] sm:p-5">
                <p className="font-serif text-3xl font-bold text-brass sm:text-4xl">25+</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-widest sm:text-sm">Years of team experience</p>
                <p className="mt-1 text-xs text-white/70">in carbon and metallurgical fuels</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 Product portfolio: the one complete five-product section */}
      <section className={`${SECTION} overflow-hidden bg-white`} aria-labelledby="portfolio-title">
        <div className={WRAP}>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              eyebrow="Product Portfolio"
              title="Coconut Charcoal and Activated Carbon"
              id="portfolio-title"
              sub="Explore coconut shell charcoal, shisha cubes, BBQ briquettes and activated carbon for your application."
            />
            <Link to="/products/" className={`${BTN_GHOST_LIGHT} shrink-0 self-start whitespace-nowrap sm:self-auto`}>View all products</Link>
          </div>

          <ul
            className="-mx-4 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain scroll-px-4 px-4 pb-4 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:mt-10 sm:grid sm:snap-none sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-6 xl:grid-cols-5"
            aria-label="Product categories"
          >
            {PORTFOLIO.map((p, i) => (
              <li
                key={p.slug}
                className={`flex w-[78%] max-w-[18rem] shrink-0 snap-start sm:w-auto sm:max-w-none sm:shrink lg:col-span-2 xl:col-span-1 ${PORTFOLIO_POS[i]}`}
              >
                <article className={`group relative flex w-full flex-col overflow-hidden rounded-xl border border-charcoal/10 bg-white shadow-sm transition-[transform,box-shadow,border-color] duration-300 hover:border-brass/50 hover:shadow-lg ${LIFT_SM}`}>
                  {/* brass accent line, animates in on hover */}
                  <span
                    className="absolute inset-x-0 top-0 z-10 h-0.5 origin-left scale-x-0 bg-brass transition-transform duration-300 group-hover:scale-x-100"
                    aria-hidden="true"
                  />

                  <Link to={`/products/${p.slug}/`} tabIndex={-1} aria-hidden="true" className="relative block overflow-hidden">
                    <ProductImage slug={p.slug} alt={p.name} ratio="aspect-[4/3]" zoom />
                    {p.family === "carbon" && (
                      <span className="absolute left-2.5 top-2.5 rounded bg-charcoal px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-widest text-brass">
                        Technical
                      </span>
                    )}
                  </Link>

                  <div className="flex flex-1 flex-col p-4">
                    <h3 className="font-serif text-base font-bold leading-snug text-charcoal">
                      <Link to={`/products/${p.slug}/`} className="hover:text-brass focus-visible:outline focus-visible:outline-2 focus-visible:outline-brass">
                        {p.name}
                      </Link>
                    </h3>
                    <p className="mt-1.5 flex-1 text-[0.8125rem] leading-snug text-slate">{p.summary}</p>

                    <div className="mt-4 flex flex-col gap-1.5 border-t border-charcoal/10 pt-3">
                      <Link to={`/products/${p.slug}/`} className={`${TEXT_LINK} text-[0.8125rem]`}>
                        View Product Details <span aria-hidden="true">&rarr;</span>
                      </Link>
                      <QuoteLink product={p.slug} className={`${TEXT_LINK} text-[0.8125rem] !text-charcoal hover:!text-brass`}>
                        Request a Quote
                      </QuoteLink>
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 04 Why */}
      <section className={`${SECTION} relative overflow-hidden bg-ivory`} aria-labelledby="why-title">
        <div className="pointer-events-none absolute inset-0 opacity-60" style={GRID_BG} aria-hidden="true" />

        <div className={`relative ${WRAP}`}>
          <div className="grid items-center gap-x-8 gap-y-12 lg:grid-cols-[1fr_auto_1fr] lg:gap-y-14 xl:gap-x-12">

            {/* Center hub */}
            <div className="flex justify-center py-4 sm:py-6 lg:col-start-2 lg:row-span-3 lg:row-start-1 lg:py-0">
              <div className="relative">
                {/* decorative rings */}
                <span className="absolute -inset-3 rounded-full border border-dashed border-brass/60 sm:-inset-4" aria-hidden="true" />
                <span className="absolute -inset-9 hidden rounded-full border border-brass/20 sm:block" aria-hidden="true" />

                <div className="relative flex h-56 w-56 flex-col items-center justify-center rounded-full border-4 border-brass bg-charcoal p-6 text-center text-white shadow-2xl min-[400px]:h-64 min-[400px]:w-64 min-[400px]:p-8 sm:h-72 sm:w-72">
                  <span className="h-0.5 w-10 bg-brass" aria-hidden="true" />
                  <span className="mt-3 text-[0.65rem] font-bold uppercase tracking-widest text-brass min-[400px]:text-[0.7rem]">Why Choose Us</span>
                  <h2 id="why-title" className="mt-2 font-serif text-xl font-bold leading-tight min-[400px]:text-2xl sm:text-[1.7rem]">
                    Why <span className="text-brass">{COMPANY.name}</span>
                  </h2>
                </div>
              </div>
            </div>

            {/* Points: 1 column mobile, 2 columns tablet, arc around the hub on desktop */}
            <ol className="grid gap-6 sm:grid-cols-2 lg:contents">
              {WHY.map(([t, d], i) => {
                const isLeft = i % 2 === 0;       // 0,2,4 left | 1,3,5 right
                const row = Math.floor(i / 2);    // 0,1,2
                const POS = [
                  "lg:col-start-1 lg:row-start-1", "lg:col-start-3 lg:row-start-1",
                  "lg:col-start-1 lg:row-start-2", "lg:col-start-3 lg:row-start-2",
                  "lg:col-start-1 lg:row-start-3", "lg:col-start-3 lg:row-start-3",
                ][i];
                // middle row pushed outward so the points form an arc (xl only, keeps 1024px roomy)
                const arc = row === 1 ? (isLeft ? "xl:mr-10" : "xl:ml-10") : "";
                return (
                  <li
                    key={t}
                    className={`group flex items-start gap-4 ${POS} ${arc} ${isLeft ? "lg:flex-row-reverse lg:text-right" : ""}`}
                  >
                    <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-brass bg-white font-serif text-lg font-bold text-brass shadow-md transition-all duration-300 sm:h-14 sm:w-14 sm:text-xl [@media(hover:hover)]:group-hover:scale-110 [@media(hover:hover)]:group-hover:bg-brass [@media(hover:hover)]:group-hover:text-white">
                      <span className="absolute -inset-1.5 rounded-full border border-dashed border-brass/50" aria-hidden="true" />
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0 pt-1">
                      <h3 className="font-serif text-base font-bold leading-snug text-charcoal sm:text-lg">{t}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate">{d}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>

          <div className="mt-12 flex justify-center sm:mt-14">
            <QuoteLink className={`${BTN_PRIMARY} w-full justify-center text-center sm:w-auto`}>Send Your Requirement <span aria-hidden="true">&rarr;</span></QuoteLink>
          </div>
        </div>
      </section>

      {/* 05 Export process (the repeated Featured Products cards were removed:
          every product stays reachable from the portfolio section above) */}
      <section className={`${SECTION} bg-white`} aria-labelledby="process-title">
        <div className={WRAP}>
          <SectionHeader
            eyebrow="Quality & Export Process"
            title="From Supplier to Shipment"
            id="process-title"
            center
            sub="From specification review to dispatch, each order is coordinated against the agreed product, packing and commercial requirements."
          />
          <div className="mt-10 sm:mt-14"><ProcessFlow steps={HOME_FLOW} /></div>
          <p className="mt-8 flex flex-col items-center gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-8">
            <Link to="/quality/" className={TEXT_LINK}>Quality and documentation <span aria-hidden="true">&rarr;</span></Link>
            <Link to="/export-ordering/" className={TEXT_LINK}>How export orders work <span aria-hidden="true">&rarr;</span></Link>
          </p>
        </div>
      </section>

      {/* 06 Packaging / private label */}
      <section className={`${SECTION} overflow-hidden bg-ivory`} aria-labelledby="pack-title">
        <div className={`${WRAP} grid items-center gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-16`}>
          <div className="lg:col-span-6">
            <SectionHeader
              eyebrow="Packaging & Private Label"
              title="Packaging for Your Product and Market"
              id="pack-title"
              sub="Explore bulk, retail and private-label packing for your selected product. Pack materials, quantities and artwork requirements are agreed before production."
            />
            <ul className="mt-6 space-y-3">
              {["Bulk packing for your selected grade", "Retail-ready packs for your sales channel", "Private-label packs, subject to MOQ and confirmation"].map((x) => (
                <li key={x} className="flex items-center gap-3 text-slate">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brass/15 text-brass"><Icon d={ICONS.check} className="h-4 w-4" /></span>
                  <span className="min-w-0">{x}</span>
                </li>
              ))}
            </ul>
            <Link to="/packaging-private-label/" className={`${BTN_GHOST_LIGHT} mt-7 sm:mt-8`}>View Packaging Options <span aria-hidden="true">&rarr;</span></Link>
          </div>

          <div className="mx-auto w-full max-w-xl lg:col-span-6 lg:max-w-none">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <img
                src="https://images.unsplash.com/photo-1781292428336-1be78d2867e0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Premium charcoal packaging"
                width="687"
                height="859"
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full rounded-2xl border border-charcoal/10 object-cover shadow-md"
              />

              <img
                src="https://media.istockphoto.com/id/587799204/photo/box-of-coconut-shell-charcoal-for-shisha.webp?a=1&b=1&s=612x612&w=0&k=20&c=2_8T27-qGpV4L8aFYk2TY49oPSDOo3XSIQl7nJN_yc4="
                alt="Premium product packaging"
                width="612"
                height="765"
                loading="lazy"
                decoding="async"
                className="mt-6 aspect-[4/5] w-full rounded-2xl border border-charcoal/10 object-cover shadow-md sm:mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 07 Send your requirement */}
<section id="rfq" className={`${SECTION} scroll-mt-20 bg-white sm:scroll-mt-24`} aria-labelledby="rfq-title">
  <div className={WRAP}>
    <div className="relative overflow-hidden rounded-2xl bg-charcoal text-white shadow-2xl sm:rounded-3xl">

      {/* faint product image, ties the CTA to the hero */}
      <img
        src={heroImg}
        alt=""
        loading="lazy"
        decoding="async"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[72%_center] opacity-[0.14]"
        aria-hidden="true"
      />
      {/* dark overlay so text always stays readable */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/70 to-charcoal/95" aria-hidden="true" />
      {/* brass spotlight behind the heading */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 60% 55% at 50% 30%, rgba(176,141,69,0.22), transparent 70%)" }}
        aria-hidden="true"
      />
      {/* decorative rings (desktop) */}
      {/* <span className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brass/15 md:block" aria-hidden="true" />
      <span className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[48rem] w-[48rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-brass/10 md:block" aria-hidden="true" /> */}

      <div className="h-1.5 bg-brass" aria-hidden="true" />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-14 text-center sm:px-10 sm:py-16 lg:py-20">
        <div className="inline-flex items-center gap-3 rounded-full border border-brass/40 bg-white/5 py-1.5 pl-3 pr-4">
          <span className="h-2 w-2 shrink-0 rounded-full bg-brass" aria-hidden="true" />
          <span className="text-[0.65rem] font-bold uppercase tracking-widest text-brass sm:text-xs">Get a Quotation</span>
        </div>

        <h2 id="rfq-title" className="mt-5 font-serif text-3xl font-bold leading-tight text-white [text-wrap:balance] sm:text-4xl lg:text-5xl">
          Send Your <span className="text-brass">Requirement</span>
        </h2>

        {/* small brass divider */}
        <div className="mt-5 flex items-center gap-3" aria-hidden="true">
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-brass/70" />
          <span className="h-1.5 w-1.5 rotate-45 bg-brass" />
          <span className="h-px w-10 bg-gradient-to-l from-transparent to-brass/70" />
        </div>

        <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
          Share your product, quantity and destination port. Our export team will review your specification and reply with a quotation.
        </p>

        <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
          <QuoteLink className={`${BTN_PRIMARY} justify-center px-8 py-3.5 text-center font-bold shadow-lg shadow-brass/25 transition-transform sm:min-w-[12rem] ${LIFT_SM}`}>
            Request a Quote <span aria-hidden="true">&rarr;</span>
          </QuoteLink>
          <Link to="/contact/" className={`${BTN_GHOST_DARK} justify-center px-8 py-3.5 text-center transition-transform sm:min-w-[12rem] ${LIFT_SM}`}>
            Contact Us
          </Link>
        </div>

      </div>
    </div>
  </div>
</section>
    </>
  );
}