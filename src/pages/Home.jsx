import { Link } from "react-router-dom";
import { COMPANY } from "../data/site.js";
import { Seo, WRAP, SECTION, ContactLines, QuoteLink } from "../components/ui.jsx";
import heroImg from "../assets/hero1.png";
import AboutImg from "../assets/hero-old.png";
import {
  Photo, ProductPhoto, ProcessFlow, EXPORT_FLOW, SectionHeader, Icon, ICONS, GRID_BG,
  BTN_PRIMARY, BTN_GHOST_DARK, BTN_GHOST_LIGHT, TEXT_LINK, EDGE,
} from "../components/PageKit.jsx";

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
  {
    name: "Shisha / Hookah Charcoal Cubes",
    slug: "hookah-cubes",
    tag: "Shisha",
    body: "Cube formats for shisha brands, distributors and wholesale buyers.",
    confirm: ["Cube size and specification", "Pack format for your brand"],
  },
  {
    name: "BBQ Charcoal / Briquettes",
    slug: "charcoal-briquette",
    tag: "BBQ & Foodservice",
    body: "Compare briquette formats and confirm packing for your market.",
    confirm: ["Briquette format", "Packing for your market"],
  },
  {
    name: "Coconut Shell Activated Carbon",
    slug: "activated-charcoal",
    tag: "Technical",
    body: "Share your application, mesh and parameters so the right grade can be confirmed.",
    confirm: ["Application and mesh size", "Technical parameters"],
  },
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
    <div className="grid items-center gap-x-10 gap-y-10 lg:grid-cols-[1fr_auto_1fr] lg:gap-y-14">

      {/* Center hub */}
      <div className="flex justify-center lg:col-start-2 lg:row-span-3 lg:row-start-1">
        <div className="relative">
          {/* decorative rings */}
          <span className="absolute -inset-4 rounded-full border border-dashed border-brass/60" aria-hidden="true" />
          <span className="absolute -inset-9 hidden rounded-full border border-brass/20 sm:block" aria-hidden="true" />

          <div className="relative flex h-64 w-64 flex-col items-center justify-center rounded-full border-4 border-brass bg-charcoal p-8 text-center text-white shadow-2xl sm:h-72 sm:w-72">
            <span className="h-0.5 w-10 bg-brass" aria-hidden="true" />
            <span className="mt-3 text-[0.7rem] font-bold uppercase tracking-widest text-brass">Why Choose Us</span>
            <h2 id="why-title" className="mt-2 font-serif text-2xl font-bold leading-tight sm:text-[1.7rem]">
              Why <span className="text-brass">{COMPANY.name}</span>
            </h2>
            <p className="mt-3 text-xs leading-snug text-white/75">
              Reasons that matter to an overseas buyer, stated plainly.
            </p>
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
          // middle row pushed outward so the points form an arc
          const arc = row === 1 ? (isLeft ? "lg:mr-10" : "lg:ml-10") : "";
          return (
            <li
              key={t}
              className={`group flex items-start gap-4 ${POS} ${arc} ${isLeft ? "lg:flex-row-reverse lg:text-right" : ""}`}
            >
              <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-brass bg-white font-serif text-xl font-bold text-brass shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-brass group-hover:text-white">
                <span className="absolute -inset-1.5 rounded-full border border-dashed border-brass/50" aria-hidden="true" />
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0 pt-1">
                <h3 className="font-serif text-lg font-bold leading-snug text-charcoal">{t}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate">{d}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>

    <div className="mt-14 flex justify-center">
      <QuoteLink className={BTN_PRIMARY}>Send Your Requirement <span aria-hidden="true">&rarr;</span></QuoteLink>
    </div>
  </div>
</section>

            {/* 05 Featured products */}
      <section
        className="relative overflow-hidden bg-charcoal py-20 text-white [contain-intrinsic-size:auto_900px] [content-visibility:auto] lg:py-28"
        aria-labelledby="featured-title"
      >
        <div className="pointer-events-none absolute inset-0" style={GRID_BG} aria-hidden="true" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brass/10 via-transparent to-transparent" aria-hidden="true" />

        <div className={`relative z-10 ${WRAP}`}>
                    {/* Header */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-brass">Featured Products</span>
              <h2 id="featured-title" className="mt-3 font-serif text-3xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
                Shisha, BBQ and Activated Carbon
              </h2>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/80">
                Go straight to product details, or request a quote for the product you need.
              </p>
            </div>
            <Link to="/products/" className={`${BTN_GHOST_DARK} shrink-0 whitespace-nowrap`}>
              View all products <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>

          {/* Cards */}
          <ul className="mt-14 grid gap-6 lg:grid-cols-3 lg:gap-8">
            {FEATURED.map((f, i) => (
              <li key={f.slug} className="flex">
                <article className="group relative flex w-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] shadow-xl transition duration-300 hover:border-brass/50 hover:shadow-2xl motion-safe:hover:-translate-y-1.5">
                  {/* brass accent line */}
                  <span
                    className="absolute inset-x-0 top-0 z-20 h-0.5 origin-left scale-x-0 bg-brass transition-transform duration-300 group-hover:scale-x-100"
                    aria-hidden="true"
                  />

                  {/* Image */}
                  <Link to={`/products/${f.slug}/`} tabIndex={-1} aria-hidden="true" className="relative block overflow-hidden">
                    <ProductImage slug={f.slug} alt={f.name} ratio="aspect-[4/3]" zoom />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/10 to-transparent" aria-hidden="true" />

                    <span className="absolute left-4 top-4 rounded-full border border-brass/60 bg-charcoal/90 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-brass">
                      {f.tag}
                    </span>
                    <span
                      className="absolute bottom-2 right-4 font-serif text-5xl font-bold leading-none text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.55)]"
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </Link>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-serif text-xl font-bold leading-snug text-white lg:min-h-[2.75em] lg:text-[1.35rem]">
                      <Link
                        to={`/products/${f.slug}/`}
                        className="transition-colors hover:text-brass focus-visible:outline focus-visible:outline-2 focus-visible:outline-brass"
                      >
                        {f.name}
                      </Link>
                    </h3>

                    {/* flex-1 here keeps the boxes and buttons aligned across cards */}
                    <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-white/70">{f.body}</p>

                    <div className="mt-5 rounded-xl border border-white/10 bg-charcoal/50 p-4">
                      <p className="text-[0.65rem] font-bold uppercase tracking-widest text-brass">We'll confirm</p>
                      <ul className="mt-3 space-y-2">
                        {f.confirm.map((c) => (
                          <li key={c} className="flex items-center gap-2.5 text-sm text-white/85">
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brass/20 text-brass">
                              <Icon d={ICONS.check} className="h-3.5 w-3.5" />
                            </span>
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-5 flex flex-col gap-3">
                      <QuoteLink product={f.slug} className={`${BTN_PRIMARY} w-full justify-center whitespace-nowrap py-3 text-center`}>
                        Request a Quote <span aria-hidden="true">&rarr;</span>
                      </QuoteLink>
                      <Link
                        to={`/products/${f.slug}/`}
                        className="inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-white/80 transition-colors hover:text-brass focus-visible:outline focus-visible:outline-2 focus-visible:outline-brass"
                      >
                        Product details <span aria-hidden="true">&rarr;</span>
                      </Link>
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>

          {/* Closing strip */}
          <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 text-center sm:flex-row sm:text-left">
            <p className="text-white/80">
              <span className="font-semibold text-white">Need another format or grade?</span>{" "}
              Send your specification and destination.
            </p>
            <QuoteLink className={`${BTN_GHOST_DARK} shrink-0 whitespace-nowrap px-6 py-2.5`}>
              Send Your Requirement <span aria-hidden="true">&rarr;</span>
            </QuoteLink>
          </div>
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