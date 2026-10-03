// Single source of company facts. Change the display name here and it updates everywhere.
// Contact fields are intentionally EMPTY until the owner confirms real details: any field left
// blank is hidden by the UI, so no placeholder phone/email/address is ever shown to buyers.
export const COMPANY = {
  name: "Shri Shyam Exports", // owner to confirm final spelling (Sri / Shri / Shree) and legal name
  email: "",     // e.g. "export@yourdomain.com" — monitored export mailbox
  phone: "",     // e.g. "+91 …" with country code
  whatsapp: "",  // digits only incl. country code, e.g. "91XXXXXXXXXX"
  address: "",   // registered business address, once reconciled
  hours: "",     // e.g. "Mon–Sat, 9:00–18:00 IST"
  country: "India",
};

export const EXPERIENCE_LINE = "Over 25 years of team experience in carbon and metallurgical fuels.";

export const NAV_PRODUCTS = [
  { label: "Coconut shell activated carbon", to: "/products/coconut-shell-activated-carbon/" },
  { label: "Hookah & shisha cubes", to: "/products/hookah-charcoal-cubes/" },
  { label: "Pillow briquettes", to: "/products/pillow-charcoal-briquettes/" },
  { label: "Hexagonal briquettes", to: "/products/hexagonal-charcoal-briquettes/" },
  { label: "Coconut shell charcoal", to: "/products/coconut-shell-charcoal/" },
  { label: "All products", to: "/products/" },
];

export const NAV_COMPANY = [
  { label: "About", to: "/about/" },
  { label: "Export ordering", to: "/export-ordering/" },
  { label: "Resources", to: "/resources/" },
  { label: "FAQ", to: "/faq/" },
  { label: "Contact", to: "/contact/" },
];

export const ORDERING_STEPS = [
  { n: "01", title: "Share requirements", body: "Tell us the product, application, quantity and destination. Add your technical specification if you have one." },
  { n: "02", title: "Confirm grade and sample", body: "We review the specification against your use and discuss whether a sample is feasible for your route." },
  { n: "03", title: "Agree commercial terms", body: "Grade, packaging, quantity and trade terms are confirmed in the quotation for your destination." },
  { n: "04", title: "Prepare and dispatch", body: "Sourcing, agreed inspection, packing and export documentation are coordinated ahead of loading." },
];

export const FAQS = [
  { q: "Are you a manufacturer or a merchant exporter?", a: "We are an India-based merchant exporter. We source coconut charcoal products and coconut shell activated carbon from suppliers, align the specification with your order, coordinate agreed inspections and packaging, and handle export documentation. We do not claim factory ownership." },
  { q: "Which products do you offer?", a: "Coconut shell activated carbon, hookah and shisha cubes, pillow briquettes, hexagonal briquettes and coconut shell charcoal. Share your required size or mesh and application, and we will confirm which variants are available." },
  { q: "How are samples assessed?", a: "Sample feasibility depends on the product and your destination. Choose the sample option in the enquiry form and we will confirm what can be arranged, with cost and timing." },
  { q: "Can packaging carry our brand?", a: "Private-label packing can be discussed for your selected product. Pack format, artwork process and minimum quantity are confirmed with the quotation." },
  { q: "Which reports apply to a grade?", a: "Technical data sheets and safety data sheets are provided for approved grades. A certificate of analysis identifies the batch, date, laboratory and methods it covers. Tell us which documents you need in your enquiry." },
  { q: "How are MOQ and lead time determined?", a: "MOQ depends on the product, grade, pack and any printed design. Production lead time is separate from ocean transit. Both are confirmed in your quotation." },
  { q: "Which trade terms do you support?", a: "Terms are confirmed per offer for your destination. Tell us your preferred term, or ask us to advise." },
  { q: "Do you ship worldwide?", a: "We prepare enquiries for importers and brands in the Gulf, Europe, the UK, North America and other markets. Share your destination port and we will confirm documentation and carrier requirements for that route." },
];
