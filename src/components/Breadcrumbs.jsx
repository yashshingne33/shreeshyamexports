import { Link } from "react-router-dom";

export default function Breadcrumbs({ trail }) {
  // trail: [{ label, to }] — last item has no `to` (current page)
  return (
    <nav aria-label="Breadcrumb" className="border-b border-charcoal/10 bg-ivory/70">
      <div className="container max-w-content px-6 py-3.5 lg:px-8">
        <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-slate">
          <li>
            <Link to="/" className="hover:text-charcoal">
              Home
            </Link>
          </li>
          {trail.map((item, i) => (
            <li key={item.label} className="flex items-center gap-1.5">
              <span aria-hidden="true" className="text-charcoal/40">
                /
              </span>
              {item.to ? (
                <Link to={item.to} className="hover:text-charcoal">
                  {item.label}
                </Link>
              ) : (
                <span className="text-charcoal" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
