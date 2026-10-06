import { WRAP } from "./ui.jsx";
import heroImg from "../assets/hero1.png";

/* ------------------------------------------------------------------ *
 * PAGE KIT — shared building blocks so every inner page uses the same
 * banner, section headers, buttons and closing action as the homepage.
 * Save as: src/components/PageKit.jsx
 * ------------------------------------------------------------------ */

export const EDGE = "w-full px-6 sm:px-10 lg:px-16 xl:px-24";
export const FOCUS = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass";

export const BTN_PRIMARY =
  "inline-flex items-center justify-center gap-2 rounded-md bg-brass px-6 py-3 text-sm font-bold text-charcoal shadow-sm transition-colors hover:bg-[#9a7e4b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";
export const BTN_GHOST_DARK =
  "inline-flex items-center justify-center gap-2 rounded-md border border-white/40 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";
export const BTN_GHOST_LIGHT =
  "inline-flex items-center justify-center gap-2 rounded-md border border-charcoal/25 px-6 py-3 text-sm font-medium text-charcoal transition-colors hover:border-charcoal " + FOCUS;
export const TEXT_LINK =
  "text-sm font-bold text-brass underline decoration-2 underline-offset-4 transition-colors hover:text-charcoal " + FOCUS;

export function Icon({ d, className = "h-5 w-5" }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
  );
}

// Common icon paths
export const ICONS = {
  doc: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  box: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
  shield: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  check: "M5 13l4 4L19 7",
  globe: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  clipboard: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
  flask: "M9 3h6m-5 0v6.5L5.2 17.3A2 2 0 006.9 20.3h10.2a2 2 0 001.7-3L14 9.5V3",
  truck: "M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10m10 0H3m10 0h2m4 0h1v-4.5L18 8h-5m6 8a2 2 0 11-4 0m-8 0a2 2 0 11-4 0",
};

export function SectionHeader({ eyebrow, title, sub, id, center = false, className = "" }) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""} ${className}`}>
      {eyebrow && <span className="text-xs font-bold uppercase tracking-widest text-brass">{eyebrow}</span>}
      <h2 id={id} className={`${eyebrow ? "mt-3" : ""} font-serif text-3xl font-bold leading-tight text-charcoal sm:text-4xl`}>{title}</h2>
      {sub && <p className="mt-4 text-lg leading-relaxed text-slate">{sub}</p>}
    </div>
  );
}

/** Dark page banner with the hero image, brass label and brass base line. */
export function PageBanner({ eyebrow, title, body, children, id = "page-title" }) {
  return (
    <section className="relative overflow-hidden bg-charcoal text-white" aria-labelledby={id}>
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <img src={heroImg} alt="" decoding="async" className="h-full w-full object-cover object-[75%_center]" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal from-35% via-charcoal/85 via-60% to-charcoal/30" />
      </div>
      <div className={`relative z-10 ${EDGE} py-14 sm:py-16 lg:py-20`}>
        <div className="max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-brass" aria-hidden="true" />
            <span className="text-xs font-bold uppercase tracking-widest text-brass">{eyebrow}</span>
          </div>
          <h1 id={id} className="mt-4 font-serif text-4xl font-bold leading-[1.1] sm:text-5xl">{title}</h1>
          {body && <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">{body}</p>}
          {children && <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">{children}</div>}
        </div>
      </div>
      <div className="relative z-10 h-0.5 bg-brass" aria-hidden="true" />
    </section>
  );
}

/** Dark closing action band (same as the homepage final section). */
export function ClosingCta({ id = "closing-cta", title, body, children }) {
  return (
    <section className="bg-charcoal py-16 text-white lg:py-20" aria-labelledby={id}>
      <div className={WRAP}>
        <div className="mx-auto max-w-2xl text-center">
          <h2 id={id} className="font-serif text-3xl font-bold leading-tight text-brass sm:text-4xl">{title}</h2>
          {body && <p className="mt-4 text-lg text-white/85">{body}</p>}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">{children}</div>
        </div>
      </div>
    </section>
  );
}