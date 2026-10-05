import { useState } from "react";
import { Link } from "react-router-dom";
import { Seo, WRAP, SECTION, CARD } from "../components/ui.jsx";
import heroImg from "../assets/hero1.png";

/* ================================================================== *
 * CONTENT — copy follows the developer plan. Edit here, not in JSX.
 * ================================================================== */

// Final spelling (Sri / Shri / Shree) is pending owner approval.
const BRAND = "Sri Shyam Exports";

// Image sources. Swap each URL for a local file (e.g. "/images/products/pillow.jpg")
// once real product photography is ready. If any image fails to load, a
// branded placeholder is shown instead of a broken icon.
const IMG = {
  shisha: "https://images.unsplash.com/photo-1630175772812-3368aad7982d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9va2FofGVufDB8fDB8fHww",
  bbq: "https://media.istockphoto.com/id/1180835210/photo/wood-briquette-used-for-grilling-meat-pressed-charcoal-for-smoking-in-the-grill-light.jpg?s=612x612&w=0&k=20&c=iTffhDyrBNQSlOnZ5ySqSSRSQsdNb4MHSOYSyYUOo0E=",
  carbon: "https://media.istockphoto.com/id/504863880/photo/charcoal-on-a-wooden-spoon.webp?a=1&b=1&s=612x612&w=0&k=20&c=CefD1kAhay4q1K8hwqQJZQkNKDAhfKcLB6FIeL7V-ds=",
  hex: "https://images.unsplash.com/photo-1697970684485-eea7cccfa61f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGV4YWdvbmFsJTIwY2hhcmNvYWwlMjBicmlxdWV0dGV8ZW58MHx8MHx8fDA%3D",
  shell: "https://images.unsplash.com/photo-1545161254-8e1da4151703?q=80&w=600",
  // company: "https://media.istockphoto.com/id/1440798037/photo/coal.webp?a=1&b=1&s=612x612&w=0&k=20&c=rHubuGdiqgxPcFoPWUEZ7nxF50W0H3Fi3HgHcaXRlIk=",
  // company: "https://media.istockphoto.com/id/1209889361/photo/fraight-green-wagons-full-of-coal.webp?a=1&b=1&s=612x612&w=0&k=20&c=2xw3v1_p3S77jOOjK6mLH2GQKnl_Xp_o4DpRgyl4a7A=",
  company: "https://media.istockphoto.com/id/485339173/photo/factory.webp?a=1&b=1&s=612x612&w=0&k=20&c=pVG0FJ2E2ul2ncQVBx1Mk0JRaLqry3jhxifLX79xO4s=",
  quality: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200",
  packaging: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1600",
  shipment: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hpcG1lbnQlMjBleHBvcnR8ZW58MHx8MHx8fDA%3D",
};

// Hero strip: team experience is always attributed to the TEAM, never the company.
const FEATURES = [
  { title: "25+ Years", body: "Team experience in carbon and metallurgical fuels.", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
  { title: "Specification-Focused", body: "Products matched to your requirements and application.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
  { title: "Export Coordination", body: "Documentation, packaging and shipment support.", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" },
  { title: "Long-Term Relationships", body: "Clear communication from enquiry to dispatch.", icon: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" },
];

// 03 Buyer paths
const PATHS = [
  { title: "SHISHA & HOOKAH", body: "Explore cube formats and packing for brands and distributors.", to: "/products/hookah-charcoal-cubes/", img: IMG.shisha },
  { title: "BBQ & FOODSERVICE", body: "Compare pillow and hexagonal formats for your market.", to: "/products/coconut-charcoal-briquettes/", img: IMG.bbq },
  { title: "ACTIVATED CARBON", body: "Share your treatment application and required grade.", to: "/products/coconut-shell-activated-carbon/", img: IMG.carbon },
];

// 04 Product families. Set published:false until a product is confirmed as offered.
const FAMILIES = [
  { name: "Activated Carbon", use: "Coconut shell activated carbon for specified treatment applications.", slug: "coconut-shell-activated-carbon", img: IMG.carbon, published: true },
  { name: "Hookah Cubes", use: "Cube formats for shisha brands, distributors and wholesale buyers.", slug: "hookah-charcoal-cubes", img: IMG.shisha, published: true },
  { name: "Pillow Briquettes", use: "Pillow-shaped briquettes for BBQ and foodservice supply.", slug: "pillow-charcoal-briquettes", img: IMG.bbq, published: true },
  { name: "Hexagonal Briquettes", use: "Hexagonal formats with a defined shape and heat profile.", slug: "hexagonal-charcoal-briquettes", img: IMG.hex, published: true },
  { name: "Shell Charcoal", use: "Screened carbonised coconut shell for specified uses.", slug: "coconut-shell-charcoal", img: IMG.shell, published: false },
];

// 06 Quality: what each document states (no invented numbers)
const DOC_TABS = [
  {
    key: "TDS",
    label: "TDS",
    caption: "Technical data sheet",
    rows: [
      ["Composition", "Shell proportion, binder and any additives"],
      ["Dimensions", "Size, tolerance and piece mass"],
      ["Moisture & ash", "Limits with basis and test method"],
      ["Handling", "Burn test basis and strength result"],
      ["Revision", "Grade code and revision date"],
    ],
  },
  {
    key: "SDS",
    label: "SDS",
    caption: "Safety data sheet",
    rows: [
      ["Identification", "Product and supplier details"],
      ["Hazards", "Classification and precautions"],
      ["Handling", "Storage and handling guidance"],
      ["Transport", "Information for the offered product"],
      ["Regulatory", "Applicable regulatory information"],
    ],
  },
  {
    key: "COA",
    label: "COA",
    caption: "Certificate of analysis",
    rows: [
      ["Batch", "Batch and sample identification"],
      ["Dates", "Sampling and test dates"],
      ["Laboratory", "Issuing laboratory"],
      ["Methods", "Test methods applied"],
      ["Results", "Measured values against grade limits"],
    ],
  },
];

// 07 Packaging
const PACKS = [
  { title: "Bulk", body: "Bulk packing for your selected grade." },
  { title: "Retail", body: "Retail-ready packs for your sales channel." },
  { title: "Private Label", body: "Your brand on agreed pack formats." },
];

// 08 Order steps
const STEPS = [
  { title: "Share requirements", body: "Tell us the product, application, specification and destination." },
  { title: "Confirm grade and sample", body: "We review the specification and discuss sample assessment for the selected grade." },
  { title: "Agree commercial terms", body: "Quantity, packing, trade terms and documents are confirmed in the quotation." },
  { title: "Prepare and dispatch", body: "Agreed inspection, packing and export documentation are coordinated for shipment." },
];

/* ================================================================== *
 * SHARED PIECES — one pattern for headers, buttons and images
 * ================================================================== */

const BTN_PRIMARY =
  "inline-flex items-center justify-center rounded-full bg-brass px-8 py-3.5 font-bold text-charcoal shadow-lg transition-colors hover:bg-[#9a7e4b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";
const BTN_GHOST_DARK =
  "inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-8 py-3.5 font-medium text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";
const BTN_GHOST_LIGHT =
  "inline-flex items-center justify-center rounded-full border border-charcoal/25 px-8 py-3.5 font-medium text-charcoal shadow-sm transition-colors hover:border-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass";

function Eyebrow({ children, className = "" }) {
  return <span className={`text-xs font-bold uppercase tracking-widest text-brass ${className}`}>{children}</span>;
}

function SectionHeader({ eyebrow, title, sub, dark = false, center = false, id }) {
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-3xl`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 id={id} className={`${eyebrow ? "mt-3" : ""} font-serif text-3xl font-bold leading-tight sm:text-4xl ${dark ? "text-white" : "text-charcoal"}`}>
        {title}
      </h2>
      {sub && <p className={`mt-4 text-lg leading-relaxed ${dark ? "text-white/80" : "text-slate"}`}>{sub}</p>}
    </div>
  );
}

/** Image that fills its box and falls back to a branded panel if it fails to load. */
function Photo({ src, alt, ratio = "aspect-[4/3]", zoom = false, className = "" }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`${ratio} overflow-hidden bg-charcoal ${className}`}>
      {failed ? (
        <div role="img" aria-label={alt} className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-charcoal to-[#2b332f] p-4 text-center">
          <span className="h-px w-8 bg-brass" aria-hidden="true" />
          <span className="font-serif text-sm font-semibold text-brass">{alt}</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover ${zoom ? "transition-transform duration-700 group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none" : ""}`}
        />
      )}
    </div>
  );
}

/** Decorative full-bleed background image with a gradient so text stays readable. */
function BgImage({ src, imgClass = "", overlay }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="absolute inset-0 z-0" aria-hidden="true">
      {!failed && (
        <img src={src} alt="" loading="lazy" decoding="async" onError={() => setFailed(true)} className={`h-full w-full object-cover ${imgClass}`} />
      )}
      <div className={`absolute inset-0 ${overlay}`} />
    </div>
  );
}

/* ================================================================== *
 * PAGE
 * ================================================================== */

export default function Home() {
  const [tab, setTab] = useState(0);
  const families = FAMILIES.filter((f) => f.published);
  const familyCols = families.length > 4 ? "lg:grid-cols-3" : "lg:grid-cols-4";
  const doc = DOC_TABS[tab];

  return (
    <>
      <Seo
        title={`Coconut Charcoal and Activated Carbon Exporter | ${BRAND}`}
        description="India-based merchant exporter of coconut charcoal products and coconut shell activated carbon for international buyers."
      />

      {/* 01 Hero: left-aligned banner + premium feature strip */}
      <section aria-labelledby="hero-title">
        {/* Banner */}
        <div className="relative flex w-full items-center overflow-hidden bg-charcoal text-white lg:min-h-[clamp(460px,calc(100svh-14rem),620px)]">
          <div className="absolute inset-0 z-0">
            <img
              src={heroImg}
              alt=""
              fetchPriority="high"
              decoding="async"
              className="h-full w-full object-cover object-[72%_center]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal from-30% via-charcoal/70 via-55% to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-charcoal/50 to-transparent" />
          </div>

          {/* Wider, left-hugging padding instead of the centred container */}
          <div className="relative z-10 w-full px-6 py-14 sm:px-10 lg:px-24 lg:py-10 xl:px-32">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-brass" aria-hidden="true" />
                <Eyebrow className="text-[0.7rem] sm:text-xs">Merchant Exporter & Sourcing Partner</Eyebrow>
              </div>

              {/* One headline, one typeface, three consistent lines */}
              <h1 id="hero-title" className="mt-5 font-serif font-bold text-white">
                <span className="block text-4xl leading-[1.08] sm:text-5xl xl:text-[3.5rem]">
                  Coconut Charcoal <span className="font-medium text-brass">&amp;</span>
                </span>
                <span className="block text-4xl leading-[1.08] sm:text-5xl xl:text-[3.5rem]">Activated Carbon</span>
                <span className="mt-3 block text-xl font-medium leading-snug text-white/90 sm:text-2xl xl:text-[1.75rem]">
                  for International Buyers
                </span>
              </h1>

              <div className="mt-6 max-w-md space-y-1 text-sm leading-relaxed text-white/85 sm:text-base">
                {/* <p className="font-medium text-white">Reliable sourcing for international buyers.</p> */}
                <p>Sri Shyam Exports is an India-based merchant exporter supplying coconut charcoal products and coconut shell activated carbon for overseas businesses. Share your application, specification and destination for a tailored export quotation.</p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Link
                  to="/request-a-quote/"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-brass px-7 py-3.5 text-sm font-bold text-charcoal shadow-lg transition-colors hover:bg-[#9a7e4b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Request an Export Quote <span aria-hidden="true">&rarr;</span>
                </Link>
                <Link
                  to="/products/"
                  className="inline-flex items-center justify-center rounded-md border border-white/40 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Explore Products
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Feature strip: same left padding as the banner so everything lines up */}
        <div className="border-t-2 border-brass bg-ivory">
          <div className="grid grid-cols-1 px-6 sm:grid-cols-2 sm:px-10 lg:grid-cols-4 lg:px-16 xl:px-24">
            {FEATURES.map((f, i) => (
              <div
                key={f.title}
                className={`flex items-center gap-4 py-5 lg:py-6 ${
                  i > 0 ? "lg:border-l lg:border-charcoal/10 lg:pl-8" : ""
                } ${i < FEATURES.length - 1 ? "lg:pr-8" : ""}`}
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-brass/60 bg-white text-brass shadow-sm">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                  </svg>
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
      {/* 02 Buyer paths */}
      <section className={`${SECTION} bg-white`} aria-labelledby="paths-title">
        <div className={WRAP}>
          <SectionHeader center id="paths-title" title="What are you sourcing?" sub="Choose your application and explore the right product range for your needs." />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PATHS.map((p) => (
              <Link
                key={p.title}
                to={p.to}
                className={`${CARD} group flex flex-col overflow-hidden rounded-xl border border-charcoal/10 bg-white shadow-sm transition-all hover:border-brass/40 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass`}
              >
                <Photo src={p.img} alt={p.title} zoom />
                <div className="flex flex-1 flex-col bg-white p-6">
                  <h3 className="text-lg font-bold tracking-wide text-charcoal">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">{p.body}</p>
                  <span className="mt-5 flex items-center gap-2 text-sm font-bold text-brass transition-all group-hover:gap-3">Explore Products &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 03 Product range (dark) */}
      <section className="bg-charcoal py-20 text-white lg:py-24" aria-labelledby="range-title">
        <div className={`${WRAP} grid items-center gap-12 lg:grid-cols-12 lg:gap-10`}>
          <div className="lg:col-span-4">
            <Eyebrow>Our Product Range</Eyebrow>
            <h2 id="range-title" className="mt-3 font-serif text-3xl font-bold leading-tight sm:text-4xl">Coconut Charcoal and Activated Carbon Families</h2>
            <p className="mt-4 text-lg leading-relaxed text-white/80">Organised by application and shape, each with its own specification page.</p>
            <Link to="/products/" className={`${BTN_PRIMARY} mt-8`}>View All Products &rarr;</Link>
          </div>

          <ul className={`grid gap-4 sm:grid-cols-2 lg:col-span-8 ${familyCols}`}>
            {families.map((f) => (
              <li key={f.slug} className="flex">
                <Link
                  to={`/products/${f.slug}/`}
                  className="group flex w-full flex-col overflow-hidden rounded-xl bg-white transition-all hover:ring-2 hover:ring-brass focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass"
                >
                  <div className="bg-ivory p-4">
                    <Photo src={f.img} alt={f.name} ratio="aspect-square" zoom className="rounded-lg shadow-sm" />
                  </div>
                  <div className="flex flex-1 flex-col border-t border-charcoal/10 p-4">
                    <h3 className="text-sm font-bold text-charcoal">{f.name}</h3>
                    <p className="mt-1 flex-1 text-xs leading-relaxed text-slate">{f.use}</p>
                    <span className="mt-3 text-xs font-bold text-brass transition-transform group-hover:translate-x-1 motion-reduce:transform-none">View Specifications &rarr;</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 04 Company / advantage */}
      <section className={`${SECTION} relative overflow-hidden bg-ivory`} aria-labelledby="about-title">
        <div className={`${WRAP} relative z-10 grid items-center gap-12 lg:grid-cols-2 lg:gap-16`}>
          <div>
            <Eyebrow>Our Advantage</Eyebrow>
            <h2 id="about-title" className="mt-3 font-serif text-3xl font-bold leading-tight text-charcoal sm:text-5xl">
              A New Name.<br />An Experienced Team.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate">
              {BRAND} is a new merchant export company backed by a team with more than 25 years of experience in charcoal, Met Coke and LAM Coke. We bring practical knowledge of product quality, sourcing and customer requirements to our coconut charcoal and activated carbon export business, guided by integrity, transparency and long-term commitment.
            </p>
            <Link to="/about/" className={`${BTN_GHOST_LIGHT} mt-8`}>Discover Our Story &rarr;</Link>
          </div>

          <div className="relative">
            <Photo src={IMG.company} alt="Export logistics and shipping" className="rounded-2xl border border-charcoal/10 shadow-xl" />
            <div className="absolute -bottom-5 right-4 max-w-[15rem] rounded-xl border border-white/10 bg-charcoal/95 p-5 text-center text-white shadow-2xl lg:-bottom-6 lg:right-8 lg:max-w-[17rem] lg:p-6">
              <span className="block font-serif text-4xl font-bold text-brass lg:text-5xl">25+</span>
              <span className="mt-2 block text-xs font-bold uppercase leading-snug tracking-widest lg:text-sm">Years of Team Experience</span>
              <span className="mt-1 block text-xs text-white/70">in carbon and metallurgical fuels</span>
            </div>
          </div>
        </div>
      </section>

      {/* 05 Quality & specifications */}
      <section className={`${SECTION} bg-white`} aria-labelledby="quality-title">
        <div className={`${WRAP} grid items-center gap-14 lg:grid-cols-2 lg:gap-16`}>
          <div className="relative order-2 lg:order-1">
            <Photo src={IMG.quality} alt="Documentation and quality review" className="rounded-2xl border border-charcoal/5 shadow-lg" />
            <Link
              to="/resources/"
              className="absolute -bottom-6 right-4 flex max-w-[16.5rem] items-start gap-4 rounded-xl border border-charcoal/5 bg-white p-5 shadow-xl transition-shadow hover:shadow-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass lg:-bottom-8 lg:right-8 lg:max-w-[18rem] lg:p-6"
            >
              <span className="shrink-0 rounded-full bg-brass/10 p-3 text-brass">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              </span>
              <span>
                <span className="block text-sm font-bold text-charcoal">Technical Data Sheets</span>
                <span className="mt-1 block text-xs leading-snug text-slate">Approved grade documents, dated and versioned</span>
              </span>
            </Link>
          </div>

          <div className="order-1 min-w-0 lg:order-2">
            <Eyebrow>Specifications You Can Review</Eyebrow>
            <h2 id="quality-title" className="mt-3 font-serif text-3xl font-bold leading-tight text-charcoal sm:text-4xl">Transparent. Detailed. Reliable.</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate">
              Review the available product data, safety information and agreed testing requirements before confirming your order.
            </p>

            <div className="mt-8 rounded-2xl border border-charcoal/10 bg-ivory p-6 lg:p-8">
              <div role="tablist" aria-label="Product documents" className="mb-5 flex gap-6 border-b border-charcoal/20">
                {DOC_TABS.map((t, i) => (
                  <button
                    key={t.key}
                    role="tab"
                    id={`doc-tab-${t.key}`}
                    aria-selected={tab === i}
                    aria-controls="doc-panel"
                    onClick={() => setTab(i)}
                    className={`-mb-px border-b-2 pb-3 font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass ${
                      tab === i ? "border-brass text-charcoal" : "border-transparent font-medium text-slate hover:text-charcoal"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              <div id="doc-panel" role="tabpanel" aria-labelledby={`doc-tab-${doc.key}`}>
                <p className="mb-2 text-sm font-semibold text-charcoal">{doc.caption} — what it states</p>
                <table className="w-full text-left text-sm text-charcoal">
                  <thead className="border-b border-charcoal/20 text-xs font-bold uppercase">
                    <tr>
                      <th scope="col" className="w-2/5 px-2 py-3">Detail</th>
                      <th scope="col" className="px-2 py-3">Included</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-charcoal/10">
                    {doc.rows.map(([k, v]) => (
                      <tr key={k}>
                        <th scope="row" className="px-2 py-3 font-semibold">{k}</th>
                        <td className="px-2 py-3 text-slate">{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link to="/request-a-quote/" className={`${BTN_PRIMARY} flex-1 py-3`}>Request Grade Details &rarr;</Link>
                <Link to="/quality/" className={`${BTN_GHOST_LIGHT} flex-1 py-3`}>Our Quality Process</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06 Packaging banner */}
      <section className="relative overflow-hidden bg-charcoal text-white">
        <BgImage src={IMG.packaging} imgClass="opacity-30 mix-blend-luminosity" overlay="bg-gradient-to-r from-charcoal via-charcoal/90 to-charcoal/60" />
        <div className={`relative z-10 ${WRAP} grid items-center gap-10 py-20 lg:grid-cols-12 lg:py-24`}>
          <div className="lg:col-span-6">
            <h2 className="font-serif text-3xl font-bold leading-tight sm:text-4xl">Packaging for Your Product and Market</h2>
            <p className="mt-4 text-lg leading-relaxed text-white/80">
              Discuss bulk, retail or private-label packing for your selected grade. Pack sizes, artwork and minimum quantities are agreed with the quotation.
            </p>
            <Link to="/packaging-private-label/" className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 font-bold text-charcoal transition-colors hover:bg-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass">
              Explore Packaging &rarr;
            </Link>
          </div>
          <ul className="grid gap-4 sm:grid-cols-3 lg:col-span-6">
            {PACKS.map((p) => (
              <li key={p.title} className="rounded-xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm">
                <h3 className="font-serif text-lg font-bold text-brass">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 07 How export orders work */}
      <section className={`${SECTION} bg-ivory`} aria-labelledby="steps-title">
        <div className={WRAP}>
          <SectionHeader center id="steps-title" title="How Export Orders Work" sub="A simple process from enquiry to shipment." />

          <ol className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="absolute left-[12%] right-[12%] top-8 z-0 hidden border-t-2 border-dashed border-brass/40 lg:block" aria-hidden="true" />
            {STEPS.map((s, i) => (
              <li key={s.title} className="relative z-10 flex h-full flex-col rounded-2xl border border-charcoal/5 bg-white p-6 shadow-sm transition-transform hover:-translate-y-1 motion-reduce:transform-none motion-reduce:transition-none">
                <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-ivory font-serif text-lg font-bold text-brass shadow-sm ring-1 ring-charcoal/10">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-base font-bold text-charcoal">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">{s.body}</p>
              </li>
            ))}
          </ol>

          <p className="mt-10 text-center">
            <Link to="/export-ordering/" className="font-bold text-charcoal underline decoration-brass decoration-2 underline-offset-4 hover:text-slate">
              Read the full export ordering process
            </Link>
          </p>
        </div>
      </section>

      {/* 08 Final CTA */}
      <section className="relative overflow-hidden bg-charcoal py-20 text-white lg:py-24" aria-labelledby="cta-title">
        <BgImage src={IMG.shipment} imgClass="opacity-40 mix-blend-luminosity object-right" overlay="bg-charcoal/75" />
        <div className={`relative z-10 ${WRAP}`}>
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="cta-title" className="font-serif text-3xl font-bold leading-tight text-brass sm:text-5xl">Discuss Your Next Shipment</h2>
            <p className="mt-4 text-lg text-white/90">Tell us the product, quantity and destination. Add your technical specification if you have one.</p>
            <Link to="/request-a-quote/" className={`${BTN_PRIMARY} mt-8 px-10 py-4 text-lg`}>Send Your Requirements &rarr;</Link>
          </div>
        </div>
      </section>
    </>
  );
}