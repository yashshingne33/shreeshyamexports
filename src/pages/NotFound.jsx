import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-ivory/40 py-20">
      <div className="container mx-auto max-w-content px-6 text-center lg:px-8">
        <p className="text-sm font-medium tracking-wide text-brass-dim">404</p>
        <h1 className="mx-auto mt-3 max-w-lg text-3xl font-medium text-charcoal sm:text-4xl">
          We Couldn&rsquo;t Find That Page
        </h1>
        <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-slate">
          The page you're looking for may have moved. Try the products catalogue or head back home.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/products/"
            className="rounded-full bg-brass px-7 py-3 text-sm font-medium text-charcoal transition-transform hover:scale-[1.02] hover:bg-[#c2a877]"
          >
            View products
          </Link>
          <Link
            to="/"
            className="rounded-full border border-charcoal/15 px-7 py-3 text-sm text-charcoal transition-colors hover:border-charcoal hover:bg-charcoal/5"
          >
            Return home
          </Link>
        </div>
      </div>
    </section>
  );
}
