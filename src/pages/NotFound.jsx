import { Link } from "react-router-dom";
import { WRAP } from "../components/ui.jsx";
import { BTN_PRIMARY, BTN_GHOST_DARK, FOCUS } from "../components/PageKit.jsx";

const HELPFUL = [
  ["Products", "/products/"],
  ["Applications", "/applications/"],
  ["Quality", "/quality/"],
  ["Packaging", "/packaging-private-label/"],
];

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-charcoal py-20 text-white">
      <div className="pointer-events-none absolute -right-6 top-1/2 -translate-y-1/2 select-none font-serif text-[14rem] font-bold leading-none text-white/[0.04] sm:text-[20rem]" aria-hidden="true">404</div>
      <div className={`relative z-10 ${WRAP}`}>
        <div className="max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-brass" aria-hidden="true" />
            <span className="text-xs font-bold uppercase tracking-widest text-brass">Error 404</span>
          </div>
          <h1 className="mt-4 font-serif text-4xl font-bold leading-[1.1] sm:text-5xl">We Couldn&rsquo;t Find That Page</h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/85">
            The page you&rsquo;re looking for may have moved. Try the products catalogue or head back home.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Link to="/products/" className={BTN_PRIMARY}>View products <span aria-hidden="true">&rarr;</span></Link>
            <Link to="/" className={BTN_GHOST_DARK}>Return home</Link>
          </div>

          <p className="mt-12 text-xs font-bold uppercase tracking-widest text-white/60">Or go straight to</p>
          <ul className="mt-3 flex flex-wrap gap-3">
            {HELPFUL.map(([l, to]) => (
              <li key={to}>
                <Link to={to} className={`inline-flex rounded-full border border-white/25 px-4 py-2 text-sm font-medium text-white/90 transition-colors hover:border-brass hover:text-brass ${FOCUS}`}>{l}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}