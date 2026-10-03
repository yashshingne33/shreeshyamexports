import { useEffect } from "react";
import { Link } from "react-router-dom";
import { COMPANY } from "../data/site.js";

export const SECTION = "py-12 sm:py-16 lg:py-20";
export const WRAP = "container mx-auto max-w-content px-6";
export const BODY = "text-base leading-relaxed text-charcoal/80";
const BTN = "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-colors duration-150";
export const BTN_BRASS = `${BTN} bg-brass text-charcoal hover:bg-[#c0a56a]`;
export const BTN_DARK = `${BTN} bg-charcoal text-ivory hover:bg-slate`;
export const BTN_LINE = `${BTN} border border-charcoal/25 bg-white text-charcoal hover:border-brass hover:bg-brass/10`;
export const CARD = "rounded-xl border border-charcoal/10 bg-white shadow-sm";

/* Per-route <title> and meta description (client-side). */
export function Seo({ title, description }) {
  useEffect(() => {
    document.title = `${title} | ${COMPANY.name}`;
    if (description) {
      let m = document.querySelector('meta[name="description"]');
      if (!m) { m = document.createElement("meta"); m.name = "description"; document.head.appendChild(m); }
      m.content = description;
    }
  }, [title, description]);
  return null;
}

export function PageHero({ title, body, kicker }) {
  return (
    <section className="bg-charcoal py-14 text-ivory sm:py-20">
      <div className={WRAP}>
        {kicker && <p className="text-xs font-semibold uppercase tracking-widest text-brass">{kicker}</p>}
        <h1 className="mt-2 max-w-3xl text-3xl font-bold leading-tight sm:text-5xl">{title}</h1>
        {body && <p className="mt-4 max-w-2xl text-base leading-relaxed text-ivory/80 sm:text-lg">{body}</p>}
      </div>
    </section>
  );
}

export function SectionHeading({ title, body, kicker }) {
  return (
    <div className="max-w-2xl">
      {kicker && <p className="text-xs font-semibold uppercase tracking-widest text-brass-dim">{kicker}</p>}
      <h2 className="mt-2 text-2xl font-bold leading-tight sm:text-4xl">{title}</h2>
      {body && <p className={`mt-3 ${BODY}`}>{body}</p>}
    </div>
  );
}

const SHAPES = {
  carbon: <g fill="currentColor">{[[14,16],[22,12],[28,20],[18,24],[26,28],[12,28],[20,19]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="2.4"/>)}</g>,
  cube: <rect x="9" y="9" width="22" height="22" rx="2" />,
  pillow: <rect x="5" y="13" width="30" height="14" rx="7" />,
  hex: <path d="M20 5 33 12.5v15L20 35 7 27.5v-15L20 5z" />,
  shell: <path d="M20 6c7 2 13 8 13 15s-6 13-13 13S7 28 7 21c0-4 3-9 7-12" />,
};

export function Silhouette({ shape, className = "h-8 w-8" }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      {SHAPES[shape] || SHAPES.cube}
    </svg>
  );
}

/* Product image if one is approved; otherwise a neutral tile with the format outline (never a mismatched photo). */
export function ProductVisual({ product, className = "aspect-[4/3]" }) {
  if (product.image) {
    return <img src={product.image} alt={product.imageAlt || product.name} className={`${className} w-full object-cover`} loading="lazy" />;
  }
  return (
    <div className={`grain-panel ${className} flex w-full items-center justify-center text-brass`} role="img" aria-label={`${product.name} format outline`}>
      <Silhouette shape={product.shape} className="h-20 w-20" />
    </div>
  );
}

/* Contact lines: only details that have been confirmed in COMPANY are rendered. */
export function ContactLines({ className = "" }) {
  const rows = [
    COMPANY.email && { k: "Email", v: <a className="underline underline-offset-2" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> },
    COMPANY.phone && { k: "Phone", v: <a className="underline underline-offset-2" href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}>{COMPANY.phone}</a> },
    COMPANY.whatsapp && { k: "WhatsApp", v: <a className="underline underline-offset-2" href={`https://wa.me/${COMPANY.whatsapp}`} rel="noopener noreferrer">Message us</a> },
    COMPANY.address && { k: "Address", v: COMPANY.address },
    COMPANY.hours && { k: "Hours", v: COMPANY.hours },
  ].filter(Boolean);
  if (rows.length === 0) return null;
  return (
    <ul className={`space-y-2 text-sm ${className}`}>
      {rows.map((r) => (<li key={r.k}><span className="opacity-70">{r.k}: </span>{r.v}</li>))}
    </ul>
  );
}

export function QuoteLink({ product, children = "Request an Export Quote", className = BTN_BRASS }) {
  return <Link to={product ? `/request-a-quote/?product=${product}` : "/request-a-quote/"} className={className}>{children}</Link>;
}
