import { useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { COMPANY } from "../data/site.js";
import { PRODUCTS } from "../data/products.js";
import { BTN_BRASS } from "./ui.jsx";

/* Field names must match the static form in index.html (Netlify Forms detection). */
const CARBON = "Coconut shell activated carbon";
const PRODUCT_OPTIONS = [...PRODUCTS.map((p) => p.formValue), "Not sure"];
const TERMS = ["FOB", "CFR", "CIF", "Please advise"];
const COUNTRIES = ["United Arab Emirates", "Saudi Arabia", "Kuwait", "Qatar", "Oman", "Bahrain", "United Kingdom", "Germany", "France", "Netherlands", "Spain", "Italy", "Turkey", "United States", "Canada", "Brazil", "Mexico", "Australia", "South Africa", "Egypt", "Nigeria", "Kenya", "Malaysia", "Indonesia", "Singapore", "Japan", "South Korea", "Other / not listed"];
const MAX_FILES = 3, MAX_TOTAL_MB = 8; // Netlify Forms accepts 8 MB per submission
const OK_EXT = [".pdf", ".docx", ".xlsx", ".jpg", ".jpeg", ".png"];

const input = "w-full rounded-lg border border-charcoal/25 bg-white px-3.5 py-2.5 text-base text-charcoal focus:border-brass focus:outline-none focus:ring-2 focus:ring-brass/30";
const bad = "border-red-600";

const blank = {
  name: "", company: "", email: "", phone: "", country: "", products: [],
  qty: "", unit: "kg", qtyUnsure: false,
  destination_port: "", frequency: "", shipment_window: "", trade_term: "", packaging: "",
  fuel_shape_dimensions: "", fuel_ash_moisture: "", fuel_use: "",
  carbon_form: "", carbon_mesh: "", carbon_application: "", carbon_iodine_bet: "", carbon_certification: "",
  message: "", consent: false, marketing_consent: false, "bot-field": "",
};

const newRef = () => `SSE-${new Date().toISOString().slice(2, 10).replace(/-/g, "")}-${Math.random().toString(36).slice(2, 7).toUpperCase()}`;

function Field({ id, label, required, error, hint, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold">
        {label}{required && <span className="ml-1 text-brass-dim" aria-hidden="true">*</span>}
      </label>
      {children}
      {hint && !error && <p className="mt-1 text-xs text-slate">{hint}</p>}
      {error && <p id={`${id}-error`} className="mt-1.5 text-sm text-red-700">{error}</p>}
    </div>
  );
}

export default function RfqForm({ prefill, sourcePage = "request-a-quote" }) {
  const navigate = useNavigate();
  const [f, setF] = useState({ ...blank, products: prefill ? [prefill] : [] });
  const [files, setFiles] = useState([]);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | failed
  const reference = useRef(newRef()); // one reference per enquiry; reused on retry so a retry is not a second enquiry
  const set = (k, v) => setF((s) => ({ ...s, [k]: v }));

  const hasCarbon = f.products.includes(CARBON);
  const hasFuel = f.products.some((p) => p !== CARBON && p !== "Not sure");
  const enquiryType = hasCarbon && hasFuel ? "Fuel charcoal and activated carbon" : hasCarbon ? "Activated carbon" : hasFuel ? "Fuel charcoal" : "General";
  const toggle = (p) => set("products", f.products.includes(p) ? f.products.filter((x) => x !== p) : [...f.products, p]);

  const totalMb = useMemo(() => files.reduce((n, x) => n + x.size, 0) / 1048576, [files]);

  function onFiles(e) {
    const picked = Array.from(e.target.files || []);
    const e2 = { ...errors }; delete e2.files;
    const badType = picked.find((x) => !OK_EXT.some((ext) => x.name.toLowerCase().endsWith(ext)));
    if (picked.length > MAX_FILES) e2.files = `Attach up to ${MAX_FILES} files.`;
    else if (badType) e2.files = `${badType.name}: use PDF, DOCX, XLSX, JPG or PNG.`;
    else if (picked.reduce((n, x) => n + x.size, 0) / 1048576 > MAX_TOTAL_MB) e2.files = `Total attachment size must be under ${MAX_TOTAL_MB} MB. You can also email larger files after we reply.`;
    setErrors(e2);
    setFiles(e2.files ? [] : picked);
    if (e2.files) e.target.value = "";
  }

  function validate() {
    const e = {};
    if (f.name.trim().length < 2) e.name = "Enter your full name.";
    if (f.company.trim().length < 2) e.company = "Enter your company name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) e.email = "Enter a valid email address.";
    if (!f.country.trim()) e.country = "Enter your destination country.";
    if (f.products.length === 0) e.products = "Select at least one product, or Not sure.";
    if (!f.qtyUnsure && !(Number(f.qty) > 0)) e.qty = "Enter an estimated quantity, or tick Not sure.";
    if (!f.consent) e.consent = "Please confirm you have read the Privacy Policy.";
    if (errors.files) e.files = errors.files;
    return e;
  }

  async function submit(evt) {
    evt.preventDefault();
    if (status === "submitting") return; // double-submit guard
    const e = validate();
    setErrors(e);
    const first = Object.keys(e)[0];
    if (first) { document.getElementById(first === "files" ? "attachments" : first)?.focus(); return; }

    setStatus("submitting");
    const fd = new FormData();
    fd.append("form-name", "export-enquiry");
    fd.append("bot-field", f["bot-field"]);
    fd.append("reference", reference.current);
    fd.append("source_page", sourcePage);
    fd.append("enquiry_type", enquiryType);
    fd.append("products", f.products.join(", "));
    fd.append("quantity", f.qtyUnsure ? "Not sure" : `${f.qty} ${f.unit}`);
    ["name", "company", "email", "phone", "country", "destination_port", "frequency", "shipment_window", "trade_term", "packaging", "message",
      "fuel_shape_dimensions", "fuel_ash_moisture", "fuel_use", "carbon_form", "carbon_mesh", "carbon_application", "carbon_iodine_bet", "carbon_certification"]
      .forEach((k) => fd.append(k, f[k]));
    fd.append("consent", f.consent ? "yes" : "no");
    fd.append("marketing_consent", f.marketing_consent ? "yes" : "no");
    files.forEach((file, i) => fd.append(`attachment_${i + 1}`, file));

    try {
      const res = await fetch("/", { method: "POST", body: fd });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      navigate("/thank-you/", { state: { reference: reference.current, name: f.name, products: f.products } });
    } catch {
      setStatus("failed"); // data is kept in state; nothing is lost and no success is shown
    }
  }

  const err = (k) => (errors[k] ? { "aria-invalid": true, "aria-describedby": `${k}-error` } : {});

  return (
    <form noValidate onSubmit={submit} className="space-y-8" aria-label="Export enquiry">
      <div className="hidden" aria-hidden="true"><label>Leave empty<input tabIndex={-1} autoComplete="off" value={f["bot-field"]} onChange={(e) => set("bot-field", e.target.value)} /></label></div>

      {status === "failed" && (
        <div role="alert" className="rounded-lg border border-red-300 bg-red-50 p-4 text-sm text-red-900">
          <p className="font-semibold">Your enquiry was not sent.</p>
          <p className="mt-1">Nothing has been lost: your details are still in the form. Please try again{COMPANY.email ? <>, or email <a className="underline" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></> : null}.</p>
        </div>
      )}
      {Object.keys(errors).length > 0 && status !== "failed" && (
        <p role="alert" className="rounded-lg border border-red-300 bg-red-50 p-3 text-sm text-red-900">Please correct the highlighted fields.</p>
      )}

      <fieldset className="grid gap-5 sm:grid-cols-2">
        <legend className="mb-3 text-lg font-bold">Your details</legend>
        <Field id="name" label="Full name" required error={errors.name}><input id="name" autoComplete="name" maxLength={100} value={f.name} onChange={(e) => set("name", e.target.value)} className={`${input} ${errors.name ? bad : ""}`} {...err("name")} /></Field>
        <Field id="company" label="Company" required error={errors.company}><input id="company" autoComplete="organization" maxLength={150} value={f.company} onChange={(e) => set("company", e.target.value)} className={`${input} ${errors.company ? bad : ""}`} {...err("company")} /></Field>
        <Field id="email" label="Email" required error={errors.email}><input id="email" type="email" autoComplete="email" value={f.email} onChange={(e) => set("email", e.target.value)} className={`${input} ${errors.email ? bad : ""}`} {...err("email")} /></Field>
        <Field id="phone" label="Phone or WhatsApp (optional)"><input id="phone" type="tel" autoComplete="tel" placeholder="+971 …" value={f.phone} onChange={(e) => set("phone", e.target.value)} className={input} /></Field>
        <div className="sm:col-span-2">
          <Field id="country" label="Destination country" required error={errors.country}>
            <input id="country" list="countries" autoComplete="country-name" value={f.country} onChange={(e) => set("country", e.target.value)} className={`${input} ${errors.country ? bad : ""}`} {...err("country")} />
            <datalist id="countries">{COUNTRIES.map((c) => <option key={c} value={c} />)}</datalist>
          </Field>
        </div>
      </fieldset>

      <fieldset>
        <legend className="mb-3 text-lg font-bold">What you need</legend>
        <p id="products" tabIndex={-1} className="mb-2 text-sm font-semibold">Product family <span className="text-brass-dim" aria-hidden="true">*</span></p>
        <div className="flex flex-wrap gap-2.5" role="group" aria-labelledby="products">
          {PRODUCT_OPTIONS.map((p) => {
            const on = f.products.includes(p);
            return (
              <label key={p} className={`cursor-pointer rounded-full border px-4 py-2 text-sm focus-within:ring-2 focus-within:ring-brass ${on ? "border-brass bg-brass/20 font-semibold" : "border-charcoal/25 bg-white"}`}>
                <input type="checkbox" className="sr-only" checked={on} onChange={() => toggle(p)} />{p}
              </label>
            );
          })}
        </div>
        {errors.products && <p className="mt-1.5 text-sm text-red-700">{errors.products}</p>}

        <div className="mt-5">
          <label htmlFor="qty" className="mb-1.5 block text-sm font-semibold">Estimated quantity <span className="text-brass-dim" aria-hidden="true">*</span></label>
          <div className="flex flex-wrap items-center gap-3">
            <input id="qty" type="number" min="0" step="any" disabled={f.qtyUnsure} value={f.qty} onChange={(e) => set("qty", e.target.value)} className={`${input} w-36 disabled:opacity-40 ${errors.qty ? bad : ""}`} {...err("qty")} />
            <select aria-label="Unit" disabled={f.qtyUnsure} value={f.unit} onChange={(e) => set("unit", e.target.value)} className={`${input} w-44 disabled:opacity-40`}>
              <option>kg</option><option>metric tonnes</option><option>20ft containers</option><option>40ft containers</option>
            </select>
            <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={f.qtyUnsure} onChange={(e) => set("qtyUnsure", e.target.checked)} className="h-4 w-4" />Not sure</label>
          </div>
          {errors.qty && <p id="qty-error" className="mt-1.5 text-sm text-red-700">{errors.qty}</p>}
        </div>

        {hasFuel && (
          <div className="mt-6 grid gap-5 rounded-xl bg-white p-5 sm:grid-cols-2">
            <p className="text-sm font-bold sm:col-span-2">Fuel charcoal details (optional)</p>
            <Field id="fuel_shape_dimensions" label="Shape and dimensions"><input id="fuel_shape_dimensions" placeholder="e.g. cube, 25 mm" value={f.fuel_shape_dimensions} onChange={(e) => set("fuel_shape_dimensions", e.target.value)} className={input} /></Field>
            <Field id="fuel_use" label="Intended use"><select id="fuel_use" value={f.fuel_use} onChange={(e) => set("fuel_use", e.target.value)} className={input}><option value="">Select</option><option>Shisha</option><option>BBQ</option><option>Foodservice</option><option>Other</option></select></Field>
            <div className="sm:col-span-2"><Field id="fuel_ash_moisture" label="Ash and moisture targets"><input id="fuel_ash_moisture" value={f.fuel_ash_moisture} onChange={(e) => set("fuel_ash_moisture", e.target.value)} className={input} /></Field></div>
          </div>
        )}
        {hasCarbon && (
          <div className="mt-6 grid gap-5 rounded-xl bg-white p-5 sm:grid-cols-2">
            <p className="text-sm font-bold sm:col-span-2">Activated carbon details (optional)</p>
            <Field id="carbon_form" label="Form"><select id="carbon_form" value={f.carbon_form} onChange={(e) => set("carbon_form", e.target.value)} className={input}><option value="">Select</option><option>Granular (GAC)</option><option>Powder</option><option>Pellet</option><option>Not sure</option></select></Field>
            <Field id="carbon_mesh" label="Required mesh"><input id="carbon_mesh" placeholder="e.g. 4×8" value={f.carbon_mesh} onChange={(e) => set("carbon_mesh", e.target.value)} className={input} /></Field>
            <Field id="carbon_application" label="Treatment application"><input id="carbon_application" placeholder="e.g. water, gas, contaminant" value={f.carbon_application} onChange={(e) => set("carbon_application", e.target.value)} className={input} /></Field>
            <Field id="carbon_iodine_bet" label="Iodine or BET requirement"><input id="carbon_iodine_bet" value={f.carbon_iodine_bet} onChange={(e) => set("carbon_iodine_bet", e.target.value)} className={input} /></Field>
            <div className="sm:col-span-2"><Field id="carbon_certification" label="Certification needs"><input id="carbon_certification" value={f.carbon_certification} onChange={(e) => set("carbon_certification", e.target.value)} className={input} /></Field></div>
          </div>
        )}
      </fieldset>

      <fieldset className="grid gap-5 sm:grid-cols-2">
        <legend className="mb-3 text-lg font-bold">Shipment and packing (optional)</legend>
        <Field id="destination_port" label="Destination port"><input id="destination_port" value={f.destination_port} onChange={(e) => set("destination_port", e.target.value)} className={input} /></Field>
        <Field id="frequency" label="Order pattern"><select id="frequency" value={f.frequency} onChange={(e) => set("frequency", e.target.value)} className={input}><option value="">Select</option><option>One-time</option><option>Monthly</option><option>Not sure</option></select></Field>
        <Field id="shipment_window" label="Target shipment window"><input id="shipment_window" placeholder="e.g. December 2026" value={f.shipment_window} onChange={(e) => set("shipment_window", e.target.value)} className={input} /></Field>
        <Field id="trade_term" label="Preferred term"><select id="trade_term" value={f.trade_term} onChange={(e) => set("trade_term", e.target.value)} className={input}><option value="">Select</option>{TERMS.map((t) => <option key={t}>{t}</option>)}</select></Field>
        <div className="sm:col-span-2"><Field id="packaging" label="Packaging and private label"><select id="packaging" value={f.packaging} onChange={(e) => set("packaging", e.target.value)} className={input}><option value="">Select</option><option>Bulk</option><option>Retail</option><option>Private label</option><option>Not sure</option></select></Field></div>
      </fieldset>

      <div className="space-y-5">
        <Field id="message" label="Requirements or message (optional)"><textarea id="message" rows={4} maxLength={3000} value={f.message} onChange={(e) => set("message", e.target.value)} className={input} /></Field>
        <Field id="attachments" label="Attach your specification (optional)" error={errors.files} hint={`PDF, DOCX, XLSX, JPG or PNG. Up to ${MAX_FILES} files, ${MAX_TOTAL_MB} MB in total.${files.length ? ` Selected: ${totalMb.toFixed(1)} MB.` : ""}`}>
          <input id="attachments" type="file" multiple accept={OK_EXT.join(",")} onChange={onFiles} className="block w-full text-sm file:mr-4 file:rounded-lg file:border-0 file:bg-charcoal file:px-4 file:py-2.5 file:text-sm file:font-semibold file:text-ivory" {...err("files")} />
        </Field>
      </div>

      <div className="space-y-3 border-t border-charcoal/10 pt-6">
        <label className="flex items-start gap-3 text-sm">
          <input id="consent" type="checkbox" checked={f.consent} onChange={(e) => set("consent", e.target.checked)} className="mt-1 h-4 w-4 shrink-0" {...err("consent")} />
          <span>We will use your details to respond to this enquiry. See our <Link to="/privacy-policy/" className="underline underline-offset-2">Privacy Policy</Link>.<span className="ml-1 text-brass-dim" aria-hidden="true">*</span></span>
        </label>
        {errors.consent && <p id="consent-error" className="text-sm text-red-700">{errors.consent}</p>}
        <label className="flex items-start gap-3 text-sm"><input type="checkbox" checked={f.marketing_consent} onChange={(e) => set("marketing_consent", e.target.checked)} className="mt-1 h-4 w-4 shrink-0" /><span>Optional: send me occasional product updates.</span></label>
        <button type="submit" disabled={status === "submitting"} className={`${BTN_BRASS} w-full px-8 py-3.5 disabled:opacity-60 sm:w-auto`}>
          {status === "submitting" ? "Sending your enquiry…" : status === "failed" ? "Try again" : "Send Your Requirements"}
        </button>
      </div>
    </form>
  );
}
