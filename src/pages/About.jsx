import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import { COMPANY } from "../data/site.js";
import { Seo, WRAP, SECTION } from "../components/ui.jsx";
import {
  PhotoBanner, TrustStrip, SectionHeader, ClosingCta, Photo, Icon, ICONS, IMAGES,
  BTN_PRIMARY, BTN_GHOST_DARK,
} from "../components/PageKit.jsx";

/* ------------------------------------------------------------------ *
 * LEADERSHIP (Section 7)
 * Hidden until the business supplies an approved name, role, biography
 * and a genuine image with permission. Fill all four fields to publish:
 *   const LEADERSHIP = { name: "...", role: "...", bio: "...", image: importedImage };
 * Do not invent names or former employers.
 * ------------------------------------------------------------------ */
const LEADERSHIP = null;

const VALUES = ["Integrity", "Transparency", "Quality", "Commitment", "Long-term relationships"];

const TRUST = [
  { title: "Industry Understanding", body: "Team experience in charcoal, Met Coke and LAM Coke.", icon: ICONS.flask },
  { title: "Practical Sourcing", body: "Quality, supply and customer expectations.", icon: ICONS.clipboard },
  { title: "Transparent Communication", body: "Clear expectations and consistent follow-through.", icon: ICONS.doc },
  { title: "Long-Term Commitment", body: "Partnerships that grow over time.", icon: ICONS.shield },
];

const BANNER_IMAGE = IMAGES.logistics ?? IMAGES.hero;

export default function About() {
  const leader = LEADERSHIP && LEADERSHIP.name && LEADERSHIP.role && LEADERSHIP.bio ? LEADERSHIP : null;

  return (
    <>
      <Seo
        title="About"
        description={`${COMPANY.name} is an India-based merchant exporter of coconut charcoal products and coconut shell activated carbon, backed by a team with over 25 years of industry experience.`}
      />

      <PhotoBanner
        image={BANNER_IMAGE}
        eyebrow="About Us"
        title="A new name backed by over 25 years of industry experience"
        body={`${COMPANY.name} is an India-based merchant exporter of coconut charcoal products and coconut shell activated carbon. Our team brings more than 25 years of experience in the carbon and metallurgical fuel industry, including charcoal, Met Coke and LAM Coke.`}
        aside={
          <div className="text-center">
            <p className="font-serif text-6xl font-bold text-brass">25+</p>
            <p className="mt-2 text-sm font-bold uppercase tracking-widest text-white">Years of team experience</p>
            <p className="mt-1 text-sm text-white/75">in the carbon and metallurgical fuel industry</p>
            <ul className="mt-5 flex flex-wrap justify-center gap-2">
              {["Charcoal", "Met Coke", "LAM Coke"].map((c) => (
                <li key={c} className="rounded-full border border-brass/60 px-3 py-1 text-xs font-semibold text-white">{c}</li>
              ))}
            </ul>
          </div>
        }
      >
        <Link to="/contact/" className={BTN_PRIMARY}>Contact Our Export Team <span aria-hidden="true">&rarr;</span></Link>
        <Link to="/quality/" className={BTN_GHOST_DARK}>How We Work</Link>
      </PhotoBanner>

      <TrustStrip items={TRUST} />
      <Breadcrumbs trail={[{ label: "About" }]} />

      {/* Introduction and approach (replaces the four repeated story blocks) */}
      <section className={`${SECTION} bg-white`} aria-labelledby="today-title">
        <div className={`${WRAP} grid items-center gap-14 lg:grid-cols-12 lg:gap-16`}>
          <div className="relative lg:col-span-5">
            <Photo
              src="https://media.istockphoto.com/id/1163589059/photo/about-us.webp?a=1&b=1&s=612x612&w=0&k=20&c=5RYjVfid3BgQisNqoRk6Sskr8tHK5lRKfOCscPOvEBE="
              alt="Export shipping at a container port"
              ratio="aspect-[4/5]"
              className="rounded-2xl border border-charcoal/10 shadow-xl"
            />
            <div className="absolute -bottom-6 right-4 rounded-xl border-l-4 border-brass bg-charcoal px-5 py-4 text-white shadow-2xl sm:right-8">
              <p className="font-serif text-lg font-bold">Experienced team</p>
              <p className="text-xs text-white/75">A new export business</p>
            </div>
          </div>

          <div className="mt-6 lg:col-span-7 lg:mt-0">
            <SectionHeader eyebrow="How We Work" title="Experience, Applied to Export" id="today-title" />
            <p className="mt-5 text-lg leading-relaxed text-slate">
              We bring this experience to product sourcing, specification review, supplier coordination and export arrangements. We work with buyers to define the required grade, packaging and commercial terms before confirming supply.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate">
              Our approach is guided by integrity, transparency, quality, commitment and long-term relationships. We aim to build dependable trading relationships through clear communication and consistent follow-through.
            </p>
            <p className="mt-8 text-xs font-bold uppercase tracking-widest text-charcoal">What guides us</p>
            <ul className="mt-3 flex flex-wrap gap-3">
              {VALUES.map((v) => (
                <li key={v} className="inline-flex items-center gap-2 rounded-full border border-brass/50 bg-brass/10 px-4 py-2 text-sm font-semibold text-charcoal">
                  <Icon d={ICONS.check} className="h-4 w-4 text-brass" /> {v}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Leadership: appears only when an approved biography is supplied */}
      {leader && (
        <section className={`${SECTION} bg-ivory`} aria-labelledby="leadership-title">
          <div className={`${WRAP} grid items-center gap-10 lg:grid-cols-12 lg:gap-16`}>
            {leader.image && (
              <div className="mx-auto w-full max-w-sm lg:col-span-4 lg:max-w-none">
                <Photo src={leader.image} alt={leader.name} ratio="aspect-[4/5]" className="rounded-2xl border border-charcoal/10 shadow-xl" />
              </div>
            )}
            <div className={leader.image ? "lg:col-span-8" : "lg:col-span-12"}>
              <SectionHeader eyebrow="Leadership" title={`${leader.name}, ${leader.role}`} id="leadership-title" />
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate">{leader.bio}</p>
            </div>
          </div>
        </section>
      )}

      <ClosingCta id="about-cta" image={IMAGES.ship} title="Experienced team. New export business. Long-term commitment.">
        <Link to="/contact/" className={`${BTN_PRIMARY} px-8 py-3.5`}>Contact Our Export Team <span aria-hidden="true">&rarr;</span></Link>
        <Link to="/products/" className={`${BTN_GHOST_DARK} px-8 py-3.5`}>View Products</Link>
      </ClosingCta>
    </>
  );
}