import lumpsImg from "../assets/charcoal-lumps.webp";

/* Fuel-charcoal and activated-carbon parameter sets: what buyers can specify.
   Numeric limits are published here only once a dated, owner-approved record exists
   (set `approvedSpec` on a product: { grade, revised, tdsUrl?, rows:[{parameter,value,unit,method}] }). */
const FUEL_PARAMS = [
  ["Composition", "Coconut shell proportion, binder identity and percentage"],
  ["Geometry", "Dimensions in mm, tolerance, piece mass and hole diameter where relevant"],
  ["Moisture and ash", "Maximum or typical, with basis and test method"],
  ["Fixed carbon and volatile matter", "With calculation basis"],
  ["Calorific value", "kcal/kg or MJ/kg, gross or net"],
  ["Burn performance", "Defined ignition method, sample mass and airflow"],
  ["Physical strength", "Breakage and fines against an agreed method"],
];
const CARBON_PARAMS = [
  ["Form", "Granular (GAC) or other confirmed form"],
  ["Particle size", "Mesh range with oversize and undersize limits"],
  ["Iodine number", "mg/g minimum"],
  ["BET surface area", "m²/g, only where measured for the grade"],
  ["Hardness or abrasion", "% by a named method"],
  ["Moisture and ash", "Basis stated"],
  ["Apparent density and pH", "With test methods"],
];

const common = (name) => [
  { q: "Are you a manufacturer or a merchant exporter?", a: "We are a merchant exporter. We source the product, align the specification with your order, arrange agreed inspection and packaging, and handle export documentation." },
  { q: "Which sizes or mesh are offered?", a: `Share the dimensions or mesh you need for ${name.toLowerCase()} and we will confirm what can be supplied.` },
  { q: "How are samples assessed?", a: "Sample feasibility depends on the product and destination. Tell us in the enquiry and we will confirm what can be arranged." },
  { q: "Can packaging carry our brand?", a: "Private-label packing can be discussed. Pack format and minimum quantity are confirmed with the quotation." },
  { q: "Which reports apply to this grade?", a: "A data sheet and safety data sheet are provided for approved grades. A certificate of analysis states the batch, date, laboratory and methods it covers." },
  { q: "How are MOQ and lead time determined?", a: "They depend on product, grade, pack and any printed design, and are confirmed with the quotation." },
];

export const PRODUCTS = [
  {
    slug: "coconut-shell-activated-carbon",
    formValue: "Coconut shell activated carbon",
    name: "Coconut Shell Activated Carbon",
    shortName: "Activated Carbon",
    family: "carbon",
    shape: "carbon",
    tag: "Industrial adsorbent",
    summary: "Coconut shell activated carbon for a specified treatment application. Share your form, particle size and duty for a grade recommendation.",
    intro: "Discuss coconut shell activated carbon for your specified treatment application. Share the required form, particle size, adsorption parameters and destination so our team can review an appropriate available grade. Technical data and product safety information are provided for the proposed grade; application suitability is confirmed during technical review.",
    applications: ["Water treatment", "Gas-phase purification", "Process liquids"],
    params: CARBON_PARAMS,
    paramsTitle: "Parameters you can specify",
    note: "Activated carbon is an adsorbent and is not interchangeable with fuel charcoal. Application suitability needs technical review.",
    extraFaqs: [{ q: "Which grade suits my application?", a: "Tell us whether the duty is liquid or gas, the target contaminant, required mesh and any iodine or surface-area requirement, and our team will review available grades with you." }],
  },
  {
    slug: "hookah-charcoal-cubes",
    formValue: "Hookah / shisha cubes",
    name: "Hookah and Shisha Charcoal Cubes",
    shortName: "Hookah Cubes",
    family: "fuel",
    shape: "cube",
    tag: "Shisha",
    summary: "Coconut charcoal cubes for overseas shisha brands, distributors and wholesale buyers.",
    intro: "Coconut charcoal cube formats for overseas shisha brands, distributors and wholesale buyers. Specify your required dimensions, performance criteria and packaging. The offered grade, sample requirements and commercial terms are confirmed before order acceptance.",
    applications: ["Shisha brands", "Distributors", "Private label"],
    params: FUEL_PARAMS,
    paramsTitle: "Parameters you can specify",
  },
  {
    slug: "pillow-charcoal-briquettes",
    formValue: "Pillow briquettes",
    name: "Pillow Coconut Charcoal Briquettes",
    shortName: "Pillow Briquettes",
    family: "fuel",
    shape: "pillow",
    tag: "BBQ and foodservice",
    summary: "Pillow-shaped coconut charcoal briquettes for international BBQ and foodservice supply.",
    intro: "Pillow-shaped coconut charcoal briquettes for international BBQ and foodservice supply. Tell us the required piece size, fuel performance and pack format. We will review the product specification and packing requirements for your destination and sales channel.",
    applications: ["BBQ wholesale", "Foodservice", "Retail BBQ"],
    params: [["Shape", "Pillow-shaped; length × width × thickness in mm"], ...FUEL_PARAMS.slice(1)],
    paramsTitle: "Parameters you can specify",
    note: "Pillow describes the shape. It is not a standard size or quality grade.",
  },
  {
    slug: "hexagonal-charcoal-briquettes",
    formValue: "Hexagonal briquettes",
    name: "Hexagonal Coconut Charcoal Briquettes",
    shortName: "Hexagonal Briquettes",
    family: "fuel",
    shape: "hex",
    tag: "BBQ and shisha",
    summary: "Hexagonal coconut charcoal formats for buyers seeking a defined shape and heat profile.",
    intro: "Hexagonal coconut charcoal formats for buyers seeking a defined shape and heat profile. Share the intended application, dimensions and whether a hollow or solid format is required. The quotation identifies the actual formulation, dimensions and available packing for the selected variant.",
    applications: ["BBQ", "Shisha", "Retail packs"],
    params: [["Geometry", "Hexagonal; solid or hollow, length and centre-hole diameter"], ...FUEL_PARAMS.filter((p) => p[0] !== "Geometry")],
    paramsTitle: "Parameters you can specify",
  },
  {
    slug: "coconut-shell-charcoal",
    formValue: "Coconut shell charcoal",
    name: "Coconut Shell Charcoal",
    shortName: "Shell Charcoal",
    family: "fuel",
    shape: "shell",
    image: lumpsImg,
    imageAlt: "Illustrative coconut shell charcoal pieces beside a halved coconut",
    tag: "Screened material",
    summary: "Screened carbonised coconut shell for buyers who specify size distribution and analysis.",
    intro: "Coconut shell charcoal for buyers requiring screened carbonised material. Specify the intended use, size distribution, maximum fines and analysis requirements. Material offered as charcoal feedstock must not be treated as finished activated carbon.",
    applications: ["Screened material", "Industrial use", "Feedstock"],
    params: [["Size distribution", "Screened range in mm and maximum fines"], ["Moisture and ash", "Basis and method stated"], ["Fixed carbon", "With calculation basis"], ["Intended use", "Fuel or processing feedstock"]],
    paramsTitle: "Parameters you can specify",
  },
];

// Category hub: links to the shaped formats instead of repeating their copy.
export const BRIQUETTE_HUB = {
  slug: "coconut-charcoal-briquettes",
  name: "Coconut Charcoal Briquettes",
  intro: "Coconut charcoal briquettes are formed fuel. The shape, dimensions and composition decide the product, so we treat each format separately. Choose the format that matches your market.",
  children: ["hookah-charcoal-cubes", "pillow-charcoal-briquettes", "hexagonal-charcoal-briquettes"],
};

export const getProduct = (slug) => PRODUCTS.find((p) => p.slug === slug);
export const faqsFor = (p) => [...(p.extraFaqs || []), ...common(p.name)];
