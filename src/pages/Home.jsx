// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { Seo, WRAP, SECTION, CARD } from "../components/ui.jsx";
// import heroImg from "../assets/hero1.png";

// /* ================================================================== *
//  * CONTENT — copy follows the developer plan. Edit here, not in JSX.
//  * ================================================================== */

// // Final spelling (Sri / Shri / Shree) is pending owner approval.
// const BRAND = "Sri Shyam Exports";
// const IMG = {
//   shisha: "https://images.unsplash.com/photo-1630175772812-3368aad7982d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9va2FofGVufDB8fDB8fHww",
//   bbq: "https://media.istockphoto.com/id/1180835210/photo/wood-briquette-used-for-grilling-meat-pressed-charcoal-for-smoking-in-the-grill-light.jpg?s=612x612&w=0&k=20&c=iTffhDyrBNQSlOnZ5ySqSSRSQsdNb4MHSOYSyYUOo0E=",
//   carbon: "https://media.istockphoto.com/id/504863880/photo/charcoal-on-a-wooden-spoon.webp?a=1&b=1&s=612x612&w=0&k=20&c=CefD1kAhay4q1K8hwqQJZQkNKDAhfKcLB6FIeL7V-ds=",
//   hex: "https://images.unsplash.com/photo-1697970684485-eea7cccfa61f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGV4YWdvbmFsJTIwY2hhcmNvYWwlMjBicmlxdWV0dGV8ZW58MHx8MHx8fDA%3D",
//   shell: "https://images.unsplash.com/photo-1545161254-8e1da4151703?q=80&w=600",
//   company: "https://media.istockphoto.com/id/485339173/photo/factory.webp?a=1&b=1&s=612x612&w=0&k=20&c=pVG0FJ2E2ul2ncQVBx1Mk0JRaLqry3jhxifLX79xO4s=",
//   quality: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200",
//   packaging: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1600",
//   shipment: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hpcG1lbnQlMjBleHBvcnR8ZW58MHx8MHx8fDA%3D",
// };

// // Hero strip: team experience is always attributed to the TEAM, never the company.
// const FEATURES = [
//   { title: "25+ Years", body: "Team experience in carbon and metallurgical fuels.", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
//   { title: "Specification-Focused", body: "Products matched to your requirements and application.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
//   { title: "Export Coordination", body: "Documentation, packaging and shipment support.", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" },
//   { title: "Long-Term Relationships", body: "Clear communication from enquiry to dispatch.", icon: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" },
// ];

// // 03 Buyer paths
// const PATHS = [
//   { title: "SHISHA & HOOKAH", body: "Explore cube formats and packing for brands and distributors.", to: "/products/hookah-charcoal-cubes/", img: IMG.shisha },
//   { title: "BBQ & FOODSERVICE", body: "Compare pillow and hexagonal formats for your market.", to: "/products/coconut-charcoal-briquettes/", img: IMG.bbq },
//   { title: "ACTIVATED CARBON", body: "Share your treatment application and required grade.", to: "/products/coconut-shell-activated-carbon/", img: IMG.carbon },
// ];

// // 04 Product families. Set published:false until a product is confirmed as offered.
// const FAMILIES = [
//   { name: "Activated Carbon", use: "Coconut shell activated carbon for specified treatment applications.", slug: "coconut-shell-activated-carbon", img: IMG.carbon, published: true },
//   { name: "Hookah Cubes", use: "Cube formats for shisha brands, distributors and wholesale buyers.", slug: "hookah-charcoal-cubes", img: IMG.shisha, published: true },
//   { name: "Pillow Briquettes", use: "Pillow-shaped briquettes for BBQ and foodservice supply.", slug: "pillow-charcoal-briquettes", img: IMG.bbq, published: true },
//   { name: "Hexagonal Briquettes", use: "Hexagonal formats with a defined shape and heat profile.", slug: "hexagonal-charcoal-briquettes", img: IMG.hex, published: true },
//   { name: "Shell Charcoal", use: "Screened carbonised coconut shell for specified uses.", slug: "coconut-shell-charcoal", img: IMG.shell, published: false },
// ];

// // 06 Quality: what each document states (no invented numbers)
// const DOC_TABS = [
//   {
//     key: "TDS",
//     label: "TDS",
//     caption: "Technical data sheet",
//     rows: [
//       ["Composition", "Shell proportion, binder and any additives"],
//       ["Dimensions", "Size, tolerance and piece mass"],
//       ["Moisture & ash", "Limits with basis and test method"],
//       ["Handling", "Burn test basis and strength result"],
//       ["Revision", "Grade code and revision date"],
//     ],
//   },
//   {
//     key: "SDS",
//     label: "SDS",
//     caption: "Safety data sheet",
//     rows: [
//       ["Identification", "Product and supplier details"],
//       ["Hazards", "Classification and precautions"],
//       ["Handling", "Storage and handling guidance"],
//       ["Transport", "Information for the offered product"],
//       ["Regulatory", "Applicable regulatory information"],
//     ],
//   },
//   {
//     key: "COA",
//     label: "COA",
//     caption: "Certificate of analysis",
//     rows: [
//       ["Batch", "Batch and sample identification"],
//       ["Dates", "Sampling and test dates"],
//       ["Laboratory", "Issuing laboratory"],
//       ["Methods", "Test methods applied"],
//       ["Results", "Measured values against grade limits"],
//     ],
//   },
// ];

// // 07 Packaging
// const PACKS = [
//   { title: "Bulk", body: "Bulk packing for your selected grade." },
//   { title: "Retail", body: "Retail-ready packs for your sales channel." },
//   { title: "Private Label", body: "Your brand on agreed pack formats." },
// ];

// // 08 Order steps
// const STEPS = [
//   { title: "Share requirements", body: "Tell us the product, application, specification and destination." },
//   { title: "Confirm grade and sample", body: "We review the specification and discuss sample assessment for the selected grade." },
//   { title: "Agree commercial terms", body: "Quantity, packing, trade terms and documents are confirmed in the quotation." },
//   { title: "Prepare and dispatch", body: "Agreed inspection, packing and export documentation are coordinated for shipment." },
// ];

// /* ================================================================== *
//  * SHARED PIECES — one pattern for headers, buttons and images
//  * ================================================================== */

// const BTN_PRIMARY =
//   "inline-flex items-center justify-center rounded-full bg-brass px-8 py-3.5 font-bold text-charcoal shadow-lg transition-colors hover:bg-[#9a7e4b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";
// const BTN_GHOST_DARK =
//   "inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-8 py-3.5 font-medium text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";
// const BTN_GHOST_LIGHT =
//   "inline-flex items-center justify-center rounded-full border border-charcoal/25 px-8 py-3.5 font-medium text-charcoal shadow-sm transition-colors hover:border-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass";

// function Eyebrow({ children, className = "" }) {
//   return <span className={`text-xs font-bold uppercase tracking-widest text-brass ${className}`}>{children}</span>;
// }

// function SectionHeader({ eyebrow, title, sub, dark = false, center = false, id }) {
//   return (
//     <div className={`${center ? "mx-auto text-center" : ""} max-w-3xl`}>
//       {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
//       <h2 id={id} className={`${eyebrow ? "mt-3" : ""} font-serif text-3xl font-bold leading-tight sm:text-4xl ${dark ? "text-white" : "text-charcoal"}`}>
//         {title}
//       </h2>
//       {sub && <p className={`mt-4 text-lg leading-relaxed ${dark ? "text-white/80" : "text-slate"}`}>{sub}</p>}
//     </div>
//   );
// }

// /** Image that fills its box and falls back to a branded panel if it fails to load. */
// function Photo({ src, alt, ratio = "aspect-[4/3]", zoom = false, className = "" }) {
//   const [failed, setFailed] = useState(false);
//   return (
//     <div className={`${ratio} overflow-hidden bg-charcoal ${className}`}>
//       {failed ? (
//         <div role="img" aria-label={alt} className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-charcoal to-[#2b332f] p-4 text-center">
//           <span className="h-px w-8 bg-brass" aria-hidden="true" />
//           <span className="font-serif text-sm font-semibold text-brass">{alt}</span>
//         </div>
//       ) : (
//         <img
//           src={src}
//           alt={alt}
//           loading="lazy"
//           decoding="async"
//           onError={() => setFailed(true)}
//           className={`h-full w-full object-cover ${zoom ? "transition-transform duration-700 group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none" : ""}`}
//         />
//       )}
//     </div>
//   );
// }

// /** Decorative full-bleed background image with a gradient so text stays readable. */
// function BgImage({ src, imgClass = "", overlay }) {
//   const [failed, setFailed] = useState(false);
//   return (
//     <div className="absolute inset-0 z-0" aria-hidden="true">
//       {!failed && (
//         <img src={src} alt="" loading="lazy" decoding="async" onError={() => setFailed(true)} className={`h-full w-full object-cover ${imgClass}`} />
//       )}
//       <div className={`absolute inset-0 ${overlay}`} />
//     </div>
//   );
// }

// /* ================================================================== *
//  * PAGE
//  * ================================================================== */

// export default function Home() {
//   const [tab, setTab] = useState(0);
//   const families = FAMILIES.filter((f) => f.published);
//   const familyCols = families.length > 4 ? "lg:grid-cols-3" : "lg:grid-cols-4";
//   const doc = DOC_TABS[tab];

//   return (
//     <>
//       <Seo
//         title={`Coconut Charcoal and Activated Carbon Exporter | ${BRAND}`}
//         description="India-based merchant exporter of coconut charcoal products and coconut shell activated carbon for international buyers."
//       />

//       {/* 01 Hero: left-aligned banner + premium feature strip */}
//       <section aria-labelledby="hero-title">
//         {/* Banner */}
//         <div className="relative flex w-full items-center overflow-hidden bg-charcoal text-white lg:min-h-[clamp(460px,calc(100svh-14rem),620px)]">
//           <div className="absolute inset-0 z-0">
//             <img
//               src={heroImg}
//               alt=""
//               fetchPriority="high"
//               decoding="async"
//               className="h-full w-full object-cover object-[72%_center]"
//             />
//             <div className="absolute inset-0 bg-gradient-to-r from-charcoal from-30% via-charcoal/70 via-55% to-transparent" />
//             <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-charcoal/50 to-transparent" />
//           </div>

//           {/* Wider, left-hugging padding instead of the centred container */}
//           <div className="relative z-10 w-full px-6 py-14 sm:px-10 lg:px-24 lg:py-10 xl:px-32">
//             <div className="max-w-2xl">
//               <div className="flex items-center gap-3">
//                 <span className="h-px w-10 bg-brass" aria-hidden="true" />
//                 <Eyebrow className="text-[0.7rem] sm:text-xs">Merchant Exporter & Sourcing Partner</Eyebrow>
//               </div>

//               {/* One headline, one typeface, three consistent lines */}
//               <h1 id="hero-title" className="mt-5 font-serif font-bold text-white">
//                 <span className="block text-4xl leading-[1.08] sm:text-5xl xl:text-[3.5rem]">
//                   Coconut Charcoal <span className="font-medium text-brass">&amp;</span>
//                 </span>
//                 <span className="block text-4xl leading-[1.08] sm:text-5xl xl:text-[3.5rem]">Activated Carbon</span>
//                 <span className="mt-3 block text-xl font-medium leading-snug text-white/90 sm:text-2xl xl:text-[1.75rem]">
//                   for International Buyers
//                 </span>
//               </h1>

//               <div className="mt-6 max-w-md space-y-1 text-sm leading-relaxed text-white/85 sm:text-base">
//                 {/* <p className="font-medium text-white">Reliable sourcing for international buyers.</p> */}
//                 <p>Sri Shyam Exports is an India-based merchant exporter supplying coconut charcoal products and coconut shell activated carbon for overseas businesses. Share your application, specification and destination for a tailored export quotation.</p>
//               </div>

//               <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
//                 <Link
//                   to="/request-a-quote/"
//                   className="inline-flex items-center justify-center gap-2 rounded-md bg-brass px-7 py-3.5 text-sm font-bold text-charcoal shadow-lg transition-colors hover:bg-[#9a7e4b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
//                 >
//                   Request an Export Quote <span aria-hidden="true">&rarr;</span>
//                 </Link>
//                 <Link
//                   to="/products/"
//                   className="inline-flex items-center justify-center rounded-md border border-white/40 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
//                 >
//                   Explore Products
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Feature strip: same left padding as the banner so everything lines up */}
//         <div className="border-t-2 border-brass bg-ivory">
//           <div className="grid grid-cols-1 px-6 sm:grid-cols-2 sm:px-10 lg:grid-cols-4 lg:px-16 xl:px-24">
//             {FEATURES.map((f, i) => (
//               <div
//                 key={f.title}
//                 className={`flex items-center gap-4 py-5 lg:py-6 ${
//                   i > 0 ? "lg:border-l lg:border-charcoal/10 lg:pl-8" : ""
//                 } ${i < FEATURES.length - 1 ? "lg:pr-8" : ""}`}
//               >
//                 <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-brass/60 bg-white text-brass shadow-sm">
//                   <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
//                     <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
//                   </svg>
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
//       {/* 02 Buyer paths */}
//       <section className={`${SECTION} bg-white`} aria-labelledby="paths-title">
//         <div className={WRAP}>
//           <SectionHeader center id="paths-title" title="What are you sourcing?" sub="Choose your application and explore the right product range for your needs." />

//           <div className="mt-12 grid gap-6 md:grid-cols-3">
//             {PATHS.map((p) => (
//               <Link
//                 key={p.title}
//                 to={p.to}
//                 className={`${CARD} group flex flex-col overflow-hidden rounded-xl border border-charcoal/10 bg-white shadow-sm transition-all hover:border-brass/40 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass`}
//               >
//                 <Photo src={p.img} alt={p.title} zoom />
//                 <div className="flex flex-1 flex-col bg-white p-6">
//                   <h3 className="text-lg font-bold tracking-wide text-charcoal">{p.title}</h3>
//                   <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">{p.body}</p>
//                   <span className="mt-5 flex items-center gap-2 text-sm font-bold text-brass transition-all group-hover:gap-3">Explore Products &rarr;</span>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 03 Product range (dark) */}
//       <section className="bg-charcoal py-20 text-white lg:py-24" aria-labelledby="range-title">
//         <div className={`${WRAP} grid items-center gap-12 lg:grid-cols-12 lg:gap-10`}>
//           <div className="lg:col-span-4">
//             <Eyebrow>Our Product Range</Eyebrow>
//             <h2 id="range-title" className="mt-3 font-serif text-3xl font-bold leading-tight sm:text-4xl">Coconut Charcoal and Activated Carbon Families</h2>
//             <p className="mt-4 text-lg leading-relaxed text-white/80">Organised by application and shape, each with its own specification page.</p>
//             <Link to="/products/" className={`${BTN_PRIMARY} mt-8`}>View All Products &rarr;</Link>
//           </div>

//           <ul className={`grid gap-4 sm:grid-cols-2 lg:col-span-8 ${familyCols}`}>
//             {families.map((f) => (
//               <li key={f.slug} className="flex">
//                 <Link
//                   to={`/products/${f.slug}/`}
//                   className="group flex w-full flex-col overflow-hidden rounded-xl bg-white transition-all hover:ring-2 hover:ring-brass focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass"
//                 >
//                   <div className="bg-ivory p-4">
//                     <Photo src={f.img} alt={f.name} ratio="aspect-square" zoom className="rounded-lg shadow-sm" />
//                   </div>
//                   <div className="flex flex-1 flex-col border-t border-charcoal/10 p-4">
//                     <h3 className="text-sm font-bold text-charcoal">{f.name}</h3>
//                     <p className="mt-1 flex-1 text-xs leading-relaxed text-slate">{f.use}</p>
//                     <span className="mt-3 text-xs font-bold text-brass transition-transform group-hover:translate-x-1 motion-reduce:transform-none">View Specifications &rarr;</span>
//                   </div>
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </section>

//       {/* 04 Company / advantage */}
//       <section className={`${SECTION} relative overflow-hidden bg-ivory`} aria-labelledby="about-title">
//         <div className={`${WRAP} relative z-10 grid items-center gap-12 lg:grid-cols-2 lg:gap-16`}>
//           <div>
//             <Eyebrow>Our Advantage</Eyebrow>
//             <h2 id="about-title" className="mt-3 font-serif text-3xl font-bold leading-tight text-charcoal sm:text-5xl">
//               A New Name.<br />An Experienced Team.
//             </h2>
//             <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate">
//               {BRAND} is a new merchant export company backed by a team with more than 25 years of experience in charcoal, Met Coke and LAM Coke. We bring practical knowledge of product quality, sourcing and customer requirements to our coconut charcoal and activated carbon export business, guided by integrity, transparency and long-term commitment.
//             </p>
//             <Link to="/about/" className={`${BTN_GHOST_LIGHT} mt-8`}>Discover Our Story &rarr;</Link>
//           </div>

//           <div className="relative">
//             <Photo src={IMG.company} alt="Export logistics and shipping" className="rounded-2xl border border-charcoal/10 shadow-xl" />
//             <div className="absolute -bottom-5 right-4 max-w-[15rem] rounded-xl border border-white/10 bg-charcoal/95 p-5 text-center text-white shadow-2xl lg:-bottom-6 lg:right-8 lg:max-w-[17rem] lg:p-6">
//               <span className="block font-serif text-4xl font-bold text-brass lg:text-5xl">25+</span>
//               <span className="mt-2 block text-xs font-bold uppercase leading-snug tracking-widest lg:text-sm">Years of Team Experience</span>
//               <span className="mt-1 block text-xs text-white/70">in carbon and metallurgical fuels</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 05 Quality & specifications */}
//       <section className={`${SECTION} bg-white`} aria-labelledby="quality-title">
//         <div className={`${WRAP} grid items-center gap-14 lg:grid-cols-2 lg:gap-16`}>
//           <div className="relative order-2 lg:order-1">
//             <Photo src={IMG.quality} alt="Documentation and quality review" className="rounded-2xl border border-charcoal/5 shadow-lg" />
//             <Link
//               to="/resources/"
//               className="absolute -bottom-6 right-4 flex max-w-[16.5rem] items-start gap-4 rounded-xl border border-charcoal/5 bg-white p-5 shadow-xl transition-shadow hover:shadow-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass lg:-bottom-8 lg:right-8 lg:max-w-[18rem] lg:p-6"
//             >
//               <span className="shrink-0 rounded-full bg-brass/10 p-3 text-brass">
//                 <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
//               </span>
//               <span>
//                 <span className="block text-sm font-bold text-charcoal">Technical Data Sheets</span>
//                 <span className="mt-1 block text-xs leading-snug text-slate">Approved grade documents, dated and versioned</span>
//               </span>
//             </Link>
//           </div>

//           <div className="order-1 min-w-0 lg:order-2">
//             <Eyebrow>Specifications You Can Review</Eyebrow>
//             <h2 id="quality-title" className="mt-3 font-serif text-3xl font-bold leading-tight text-charcoal sm:text-4xl">Transparent. Detailed. Reliable.</h2>
//             <p className="mt-4 text-lg leading-relaxed text-slate">
//               Review the available product data, safety information and agreed testing requirements before confirming your order.
//             </p>

//             <div className="mt-8 rounded-2xl border border-charcoal/10 bg-ivory p-6 lg:p-8">
//               <div role="tablist" aria-label="Product documents" className="mb-5 flex gap-6 border-b border-charcoal/20">
//                 {DOC_TABS.map((t, i) => (
//                   <button
//                     key={t.key}
//                     role="tab"
//                     id={`doc-tab-${t.key}`}
//                     aria-selected={tab === i}
//                     aria-controls="doc-panel"
//                     onClick={() => setTab(i)}
//                     className={`-mb-px border-b-2 pb-3 font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass ${
//                       tab === i ? "border-brass text-charcoal" : "border-transparent font-medium text-slate hover:text-charcoal"
//                     }`}
//                   >
//                     {t.label}
//                   </button>
//                 ))}
//               </div>

//               <div id="doc-panel" role="tabpanel" aria-labelledby={`doc-tab-${doc.key}`}>
//                 <p className="mb-2 text-sm font-semibold text-charcoal">{doc.caption} — what it states</p>
//                 <table className="w-full text-left text-sm text-charcoal">
//                   <thead className="border-b border-charcoal/20 text-xs font-bold uppercase">
//                     <tr>
//                       <th scope="col" className="w-2/5 px-2 py-3">Detail</th>
//                       <th scope="col" className="px-2 py-3">Included</th>
//                     </tr>
//                   </thead>
//                   <tbody className="divide-y divide-charcoal/10">
//                     {doc.rows.map(([k, v]) => (
//                       <tr key={k}>
//                         <th scope="row" className="px-2 py-3 font-semibold">{k}</th>
//                         <td className="px-2 py-3 text-slate">{v}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>

//               <div className="mt-6 flex flex-col gap-3 sm:flex-row">
//                 <Link to="/request-a-quote/" className={`${BTN_PRIMARY} flex-1 py-3`}>Request Grade Details &rarr;</Link>
//                 <Link to="/quality/" className={`${BTN_GHOST_LIGHT} flex-1 py-3`}>Our Quality Process</Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 06 Packaging banner */}
//       <section className="relative overflow-hidden bg-charcoal text-white">
//         <BgImage src={IMG.packaging} imgClass="opacity-30 mix-blend-luminosity" overlay="bg-gradient-to-r from-charcoal via-charcoal/90 to-charcoal/60" />
//         <div className={`relative z-10 ${WRAP} grid items-center gap-10 py-20 lg:grid-cols-12 lg:py-24`}>
//           <div className="lg:col-span-6">
//             <h2 className="font-serif text-3xl font-bold leading-tight sm:text-4xl">Packaging for Your Product and Market</h2>
//             <p className="mt-4 text-lg leading-relaxed text-white/80">
//               Discuss bulk, retail or private-label packing for your selected grade. Pack sizes, artwork and minimum quantities are agreed with the quotation.
//             </p>
//             <Link to="/packaging-private-label/" className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 font-bold text-charcoal transition-colors hover:bg-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass">
//               Explore Packaging &rarr;
//             </Link>
//           </div>
//           <ul className="grid gap-4 sm:grid-cols-3 lg:col-span-6">
//             {PACKS.map((p) => (
//               <li key={p.title} className="rounded-xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm">
//                 <h3 className="font-serif text-lg font-bold text-brass">{p.title}</h3>
//                 <p className="mt-2 text-sm leading-relaxed text-white/80">{p.body}</p>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </section>

//       {/* 07 How export orders work */}
//       <section className={`${SECTION} bg-ivory`} aria-labelledby="steps-title">
//         <div className={WRAP}>
//           <SectionHeader center id="steps-title" title="How Export Orders Work" sub="A simple process from enquiry to shipment." />

//           <ol className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
//             <div className="absolute left-[12%] right-[12%] top-8 z-0 hidden border-t-2 border-dashed border-brass/40 lg:block" aria-hidden="true" />
//             {STEPS.map((s, i) => (
//               <li key={s.title} className="relative z-10 flex h-full flex-col rounded-2xl border border-charcoal/5 bg-white p-6 shadow-sm transition-transform hover:-translate-y-1 motion-reduce:transform-none motion-reduce:transition-none">
//                 <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-ivory font-serif text-lg font-bold text-brass shadow-sm ring-1 ring-charcoal/10">
//                   {String(i + 1).padStart(2, "0")}
//                 </span>
//                 <h3 className="text-base font-bold text-charcoal">{s.title}</h3>
//                 <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">{s.body}</p>
//               </li>
//             ))}
//           </ol>

//           <p className="mt-10 text-center">
//             <Link to="/export-ordering/" className="font-bold text-charcoal underline decoration-brass decoration-2 underline-offset-4 hover:text-slate">
//               Read the full export ordering process
//             </Link>
//           </p>
//         </div>
//       </section>

//       {/* 08 Final CTA */}
//       <section className="relative overflow-hidden bg-charcoal py-20 text-white lg:py-24" aria-labelledby="cta-title">
//         <BgImage src={IMG.shipment} imgClass="opacity-40 mix-blend-luminosity object-right" overlay="bg-charcoal/75" />
//         <div className={`relative z-10 ${WRAP}`}>
//           <div className="mx-auto max-w-2xl text-center">
//             <h2 id="cta-title" className="font-serif text-3xl font-bold leading-tight text-brass sm:text-5xl">Discuss Your Next Shipment</h2>
//             <p className="mt-4 text-lg text-white/90">Tell us the product, quantity and destination. Add your technical specification if you have one.</p>
//             <Link to="/request-a-quote/" className={`${BTN_PRIMARY} mt-8 px-10 py-4 text-lg`}>Send Your Requirements &rarr;</Link>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }








import { Link } from "react-router-dom";
import { COMPANY } from "../data/site.js";
import { Seo, WRAP, SECTION, ContactLines, QuoteLink } from "../components/ui.jsx";
import heroImg from "../assets/hero1.png";
import AboutImg from "../assets/hero-old.png";
import {
  Photo, ProductPhoto, ProcessFlow, EXPORT_FLOW, SectionHeader, Icon, ICONS, GRID_BG,
  BTN_PRIMARY, BTN_GHOST_DARK, BTN_GHOST_LIGHT, TEXT_LINK, EDGE,
} from "../components/PageKit.jsx";

/* ------------------------------------------------------------------ *
 * PRODUCT IMAGES
 * Put your photos in  src/assets/products/  and name each file after
 * the product slug, e.g.
 *   coconut-shell-charcoal.jpg
 *   hookah-charcoal-cubes.jpg
 *   hexagonal-charcoal-briquettes.jpg
 *   pillow-charcoal-briquettes.jpg
 *   coconut-shell-activated-carbon.jpg
 * (.jpg / .jpeg / .png / .webp all work.)
 *
 * The same image is reused everywhere a product appears (portfolio,
 * featured, packaging). If a file is missing, that product falls back
 * to the old <ProductPhoto> so nothing breaks.
 * ------------------------------------------------------------------ */
const PRODUCT_IMAGES = Object.fromEntries(
  Object.entries(
    import.meta.glob("../assets/products/*.{jpg,jpeg,png,webp}", { eager: true, import: "default" })
  ).map(([path, src]) => [path.split("/").pop().replace(/\.[^.]+$/, ""), src])
);

function ProductImage({ slug, alt, ratio, zoom = false, className = "" }) {
  const src = PRODUCT_IMAGES[slug];
  if (!src) return <ProductPhoto slug={slug} alt={alt} ratio={ratio} zoom={zoom} className={className} />;
  return (
    <Photo
      src={src}
      alt={alt}
      ratio={ratio}
      className={className}
      imgClass={zoom ? "transition-transform duration-500 group-hover:scale-105" : ""}
    />
  );
}

/* ------------------------------------------------------------------ *
 * CONTENT — follows the revision brief (v1.0, Oct 2026):
 * supplier/exporter positioning, 25 years = the TEAM's experience,
 * no unsupported specs, certifications or capacity claims.
 * ------------------------------------------------------------------ */
const FEATURES = [
  { title: "25+ Years", body: "Team experience in carbon and metallurgical fuels.", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
  { title: "Specification-Focused", body: "Products matched to your requirements and application.", icon: ICONS.shield },
  { title: "Export Coordination", body: "Documentation, packaging and shipment support.", icon: ICONS.clipboard },
  { title: "Long-Term Relationships", body: "Clear communication from enquiry to dispatch.", icon: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" },
];

const PORTFOLIO = [
  { name: "Coconut Shell Charcoal", slug: "coconut-shell-charcoal", use: "Carbonised coconut shell for specified uses." },
  { name: "Shisha / Hookah Charcoal Cubes", slug: "hookah-cubes", use: "Cube formats for shisha brands, distributors and wholesale buyers." },
  { name: "Hexagonal Charcoal Briquettes", slug: "hex-charcoal", use: "Hexagonal formats with a defined shape." },
  { name: "BBQ Charcoal / Briquettes", slug: "charcoal-briquette", use: "Pillow-shaped briquettes for BBQ and foodservice supply." },
  { name: "Coconut Shell Activated Carbon", slug: "activated-charcoal", use: "Presented with its own technical data, not as another charcoal shape.", technical: true },
];

const VALUES = ["Integrity", "Transparency", "Quality", "Commitment", "Long-term Relationships"];

const WHY = [
  ["Specification-focused sourcing", "Products matched to your requirement and application."],
  ["Supplier coordination", "Specification, packing and dispatch coordinated with the supplier."],
  ["Quality and documentation support", "Applicable documents provided or arranged per product and destination."],
  ["Packaging flexibility", "Bulk and customised packing, subject to MOQ and confirmation."],
  ["Export execution", "Documentation, packing and shipment coordinated for the agreed order."],
  ["Transparent communication", "Clear discussion of specifications, packaging and commercial terms."],
];

const FEATURED = [
  { name: "Shisha / Hookah Charcoal Cubes", slug: "hookah-cubes", body: "Confirm cube size, specification and pack format for your brand or distribution." },
  { name: "BBQ Charcoal / Briquettes", slug: "charcoal-briquette", body: "Compare briquette formats and confirm packing for your market." },
  { name: "Coconut Shell Activated Carbon", slug: "activated-charcoal", body: "Share your application, mesh and parameters so the right grade can be confirmed." },
];

const ENQUIRY_ITEMS = [ 
  "Product and grade or format you need",
  "Approximate quantity and packing preference",
  "Destination country or port",
  "Technical specification, if you have one",
];

const ENQUIRY_STEPS = [
  ["Send your requirement", "Product, quantity and destination."],
  ["We confirm the details", "Specification, packing and commercial terms."],
  ["Receive your quotation", "Clear terms and applicable documentation."],
];

export default function Home() {
  return (
    <>
      <Seo
        title={`Indian Supplier & Exporter of Coconut Charcoal and Activated Carbon | ${COMPANY.name}`}
        description="Indian supplier and exporter of coconut charcoal products and coconut shell activated carbon for international buyers. Request a quote with your specification and destination."
      />

      {/* 01 Hero */}
      <section aria-labelledby="hero-title">
        <div className="relative flex w-full items-center overflow-hidden bg-charcoal text-white lg:min-h-[clamp(460px,calc(100svh-14rem),620px)]">
          <div className="absolute inset-0 z-0">
            <img src={heroImg} alt="" fetchPriority="high" decoding="async" className="h-full w-full object-cover object-[72%_center]" />
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal from-30% via-charcoal/70 via-55% to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-charcoal/50 to-transparent" />
          </div>

          <div className="relative z-10 w-full px-6 py-14 sm:px-10 lg:px-16 lg:py-10 xl:px-24">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-brass" aria-hidden="true" />
                <span className="text-[0.7rem] font-bold uppercase tracking-widest text-brass sm:text-xs">Indian Supplier & Exporter</span>
              </div>

              <h1 id="hero-title" className="mt-5 font-serif font-bold text-white">
                <span className="block text-4xl leading-[1.08] sm:text-5xl xl:text-[3.5rem]">
                  Coconut Charcoal <span className="font-medium text-brass">&amp;</span>
                </span>
                <span className="block text-4xl leading-[1.08] sm:text-5xl xl:text-[3.5rem]">Activated Carbon</span>
                <span className="mt-3 block text-xl font-medium leading-snug text-white/90 sm:text-2xl xl:text-[1.75rem]">for International Buyers</span>
              </h1>

              <div className="mt-6 max-w-md space-y-1 text-sm leading-relaxed text-white/85 sm:text-base">
                <p className="font-medium text-white">Supplier and exporter of coconut charcoal products and coconut shell activated carbon.</p>
                <p>Clear specifications. Dependable communication. Export-ready support.</p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <QuoteLink className={`${BTN_PRIMARY} px-7 py-3.5`}>Request a Quote <span aria-hidden="true">&rarr;</span></QuoteLink>
                <Link to="/products/" className={`${BTN_GHOST_DARK} px-7 py-3.5`}>View Products</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-brass bg-ivory">
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ${EDGE}`}>
            {FEATURES.map((f, i) => (
              <div key={f.title} className={`flex items-center gap-4 py-5 lg:py-6 ${i > 0 ? "lg:border-l lg:border-charcoal/10 lg:pl-8" : ""} ${i < FEATURES.length - 1 ? "lg:pr-8" : ""}`}>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-brass/60 bg-white text-brass shadow-sm">
                  <Icon d={f.icon} className="h-6 w-6" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-serif text-base font-bold leading-tight text-charcoal">{f.title}</h3>
                  <p className="mt-1 text-[0.8125rem] leading-snug text-slate">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 02 Experience */}
      <section className={`${SECTION} bg-ivory`} aria-labelledby="experience-title">
        <div className={`${WRAP} grid items-center gap-12 lg:grid-cols-12 lg:gap-16`}>
          <div className="lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-widest text-brass">Our Experience</span>
            <h2 id="experience-title" className="mt-3 font-serif text-3xl font-bold leading-tight text-charcoal sm:text-4xl lg:text-5xl">
              A new name, backed by 25 years of industry experience.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate">
              {COMPANY.name} is a new company, but the experience behind it is not. Our team has worked in the carbon and metallurgical fuel industry for more than 25 years, developing practical knowledge of Charcoal, Met Coke and LAM Coke, including product quality, sourcing, market requirements and customer expectations.
            </p>
            <ul className="mt-7 flex flex-wrap gap-3" aria-label="Our values">
              {VALUES.map((v) => (
                <li key={v} className="inline-flex items-center gap-2 rounded-full border border-brass/50 bg-white px-4 py-2 text-sm font-semibold text-charcoal">
                  <Icon d={ICONS.check} className="h-4 w-4 text-brass" /> {v}
                </li>
              ))}
            </ul>
            <Link to="/about/" className={`${BTN_GHOST_LIGHT} mt-8`}>Discover Our Story <span aria-hidden="true">&rarr;</span></Link>
          </div>

          <div className="relative lg:col-span-5">
            <Photo src={AboutImg} alt="Coconut shell charcoal products" ratio="aspect-[4/5]" imgClass="object-[70%_center]" className="rounded-2xl border border-charcoal/10 shadow-xl" />
            <div className="absolute -bottom-6 left-4 right-4 rounded-xl border-l-4 border-brass bg-charcoal p-5 text-white shadow-2xl sm:left-auto sm:right-8 sm:max-w-[16rem]">
              <p className="font-serif text-4xl font-bold text-brass">25+</p>
              <p className="mt-1 text-sm font-bold uppercase tracking-widest">Years of team experience</p>
              <p className="mt-1 text-xs text-white/70">in carbon and metallurgical fuels</p>
            </div>
          </div>
        </div>
      </section>

      {/* 03 Product portfolio: five clear categories */}
      <section className={`${SECTION} bg-white`} aria-labelledby="portfolio-title">
        <div className={WRAP}>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader eyebrow="Product Portfolio" title="Coconut Charcoal and Activated Carbon" id="portfolio-title"
              sub="Five product categories, each with its own specification page." />
            <Link to="/products/" className={`${BTN_GHOST_LIGHT} shrink-0`}>View all products</Link>
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {PORTFOLIO.map((p) => (
              <li key={p.slug} className="flex">
                <article className="group relative flex w-full flex-col overflow-hidden rounded-xl border border-charcoal/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brass/50 hover:shadow-lg">
                  {/* brass accent line, animates in on hover */}
                  <span
                    className="absolute inset-x-0 top-0 z-10 h-0.5 origin-left scale-x-0 bg-brass transition-transform duration-300 group-hover:scale-x-100"
                    aria-hidden="true"
                  />

                  <Link to={`/products/${p.slug}/`} tabIndex={-1} aria-hidden="true" className="relative block overflow-hidden">
                    <ProductImage slug={p.slug} alt={p.name} ratio="aspect-[4/3]" zoom />
                    {p.technical && (
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
                    <p className="mt-1.5 line-clamp-3 flex-1 text-[0.8125rem] leading-snug text-slate">{p.use}</p>

                    <div className="mt-4 flex flex-col gap-1.5 border-t border-charcoal/10 pt-3">
                      <Link to={`/products/${p.slug}/`} className={`${TEXT_LINK} text-[0.8125rem]`}>
                        View Specifications <span aria-hidden="true">&rarr;</span>
                      </Link>
                      <QuoteLink
                        product={p.slug}
                        className="text-[0.8125rem] font-semibold text-charcoal underline decoration-brass decoration-2 underline-offset-4 hover:text-brass"
                      >
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
      <section className={`${SECTION} bg-white`} aria-labelledby="why-title">
        <div className={`${WRAP} grid gap-12 lg:grid-cols-12 lg:gap-16`}>
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <SectionHeader eyebrow="Why Choose Us" title={`Why ${COMPANY.name}`} id="why-title" sub="Reasons that matter to an overseas buyer, stated plainly." />
              <QuoteLink className={`${BTN_PRIMARY} mt-8`}>Send Your Requirement <span aria-hidden="true">&rarr;</span></QuoteLink>
            </div>
          </div>
          <ol className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:col-span-8">
            {WHY.map(([t, d], i) => (
              <li key={t} className="border-t-2 border-brass pt-5">
                <span className="font-serif text-3xl font-bold text-brass/70">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 font-serif text-xl font-bold text-charcoal">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 05 Featured products (same images as the portfolio above) */}
      <section className="relative overflow-hidden bg-charcoal py-20 text-white lg:py-24" aria-labelledby="featured-title">
        <div className="pointer-events-none absolute inset-0" style={GRID_BG} aria-hidden="true" />
        <div className={`relative z-10 ${WRAP}`}>
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brass">Featured Products</span>
            <h2 id="featured-title" className="mt-3 font-serif text-3xl font-bold leading-tight sm:text-4xl">Shisha, BBQ and Activated Carbon</h2>
            <p className="mt-4 text-lg text-white/80">Go straight to product details, or request a quote for the product you need.</p>
          </div>

          <ul className="mt-12 grid gap-6 lg:grid-cols-2">
            {FEATURED.map((f, i) => (
              <li key={f.slug} className={i === 0 ? "lg:row-span-2" : ""}>
                <article className={`group flex h-full overflow-hidden rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm ${i === 0 ? "flex-col" : "flex-col sm:flex-row"}`}>
                  <div className={`overflow-hidden ${i === 0 ? "" : "sm:w-2/5 sm:shrink-0"}`}>
                    <ProductImage slug={f.slug} alt={f.name} ratio={i === 0 ? "aspect-[4/3]" : "aspect-[4/3] sm:h-full sm:aspect-auto"} zoom />
                  </div>
                  <div className="flex flex-1 flex-col justify-center p-6 sm:p-7">
                    <h3 className="font-serif text-2xl font-bold text-brass">{f.name}</h3>
                    <p className="mt-2 leading-relaxed text-white/80">{f.body}</p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <Link to={`/products/${f.slug}/`} className={`${BTN_GHOST_DARK} px-5 py-2.5`}>Product Details</Link>
                      <QuoteLink product={f.slug} className={`${BTN_PRIMARY} px-5 py-2.5`}>Request a Quote <span aria-hidden="true">&rarr;</span></QuoteLink>
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 06 Quality & export process */}
      <section className={`${SECTION} bg-ivory`} aria-labelledby="process-title">
        <div className={WRAP}>
          <SectionHeader eyebrow="Quality & Export Process" title="From Supplier to Shipment" id="process-title" center
            sub="A simple, controlled flow. Applicable documentation can be provided or arranged according to product, destination and buyer requirements." />
          <div className="mt-14"><ProcessFlow steps={EXPORT_FLOW} /></div>
          <p className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3">
            <Link to="/quality/" className={TEXT_LINK}>Quality and documentation <span aria-hidden="true">&rarr;</span></Link>
            <Link to="/export-ordering/" className={TEXT_LINK}>How export orders work <span aria-hidden="true">&rarr;</span></Link>
          </p>
        </div>
      </section>

      {/* 07 Packaging / private label (same images as the portfolio above) */}
      <section className={`${SECTION} bg-white`} aria-labelledby="pack-title">
        <div className={`${WRAP} grid items-center gap-12 lg:grid-cols-12 lg:gap-16`}>
          <div className="lg:col-span-6">
            <SectionHeader eyebrow="Packaging & Private Label" title="Packaging for Your Product and Market" id="pack-title"
              sub="Bulk packing and customised or private-label packaging can be discussed for your selected product, subject to MOQ and confirmation." />
            <ul className="mt-6 space-y-3">
              {["Bulk packing for your selected grade", "Retail-ready packs for your sales channel", "Private-label packs, subject to MOQ and confirmation"].map((x) => (
                <li key={x} className="flex items-center gap-3 text-slate">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brass/15 text-brass"><Icon d={ICONS.check} className="h-4 w-4" /></span>
                  {x}
                </li>
              ))}
            </ul>
            <Link to="/packaging-private-label/" className={`${BTN_GHOST_LIGHT} mt-8`}>Explore Packaging <span aria-hidden="true">&rarr;</span></Link>
          </div>
          <div className="lg:col-span-6">
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1781292428336-1be78d2867e0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Premium charcoal packaging"
              className="aspect-[4/5] w-full rounded-2xl border border-charcoal/10 object-cover shadow-md"
            />

            <img
              src="https://media.istockphoto.com/id/587799204/photo/box-of-coconut-shell-charcoal-for-shisha.webp?a=1&b=1&s=612x612&w=0&k=20&c=2_8T27-qGpV4L8aFYk2TY49oPSDOo3XSIQl7nJN_yc4="
              alt="Premium product packaging"
              className="mt-8 aspect-[4/5] w-full rounded-2xl border border-charcoal/10 object-cover shadow-md"
            />
          </div>
        </div>
        </div>
      </section>

      {/* 08 Send your requirement (form removed, now a contact panel) */}
      <section id="rfq" className={`${SECTION} scroll-mt-24 bg-ivory`} aria-labelledby="rfq-title">
        <div className={WRAP}>
          <div className="relative overflow-hidden rounded-3xl bg-charcoal text-white shadow-2xl">
            <div className="pointer-events-none absolute inset-0" style={GRID_BG} aria-hidden="true" />
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brass/15 blur-3xl" aria-hidden="true" />
            <div className="h-1.5 bg-brass" aria-hidden="true" />

            <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-12 lg:gap-14 lg:p-16">
              {/* Left: message + actions */}
              <div className="lg:col-span-7">
                <span className="block h-0.5 w-10 bg-brass" aria-hidden="true" />
                <h2 id="rfq-title" className="mt-4 font-serif text-3xl font-bold leading-tight text-brass sm:text-4xl lg:text-5xl">
                  Send Your Requirement
                </h2>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">
                  Tell us the product, quantity and destination. Add your technical specification if you have one, and our export desk will reply by email.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
                  <QuoteLink className={`${BTN_PRIMARY} px-7 py-3.5`}>Request a Quote <span aria-hidden="true">&rarr;</span></QuoteLink>
                  <Link to="/export-ordering/" className={`${BTN_GHOST_DARK} px-7 py-3.5`}>How export orders work</Link>
                </div>

                <ol className="mt-12 grid gap-6 border-t border-white/15 pt-8 sm:grid-cols-3">
                  {ENQUIRY_STEPS.map(([t, d], i) => (
                    <li key={t} className="flex gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brass/60 font-serif text-sm font-bold text-brass">{i + 1}</span>
                      <div>
                        <h3 className="text-sm font-bold text-white">{t}</h3>
                        <p className="mt-1 text-xs leading-relaxed text-white/70">{d}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Right: what to include + contact */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
                  <h3 className="font-serif text-xl font-bold text-white">Include in your enquiry</h3>
                  <ul className="mt-5 space-y-3">
                    {ENQUIRY_ITEMS.map((x) => (
                      <li key={x} className="flex items-start gap-3 text-sm leading-relaxed text-white/85">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brass/20 text-brass">
                          <Icon d={ICONS.check} className="h-4 w-4" />
                        </span>
                        {x}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 border-t border-white/15 pt-6">
                    <h3 className="font-serif text-xl font-bold text-brass">Reach our export desk</h3>
                    <ContactLines className="mt-4 text-white/85" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}