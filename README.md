# Shri Shyam Exports — website

React + Vite + Tailwind, deployed on Netlify. Implements `Sri_Shyam_Exports_Website_Developer_Plan031026.docx`.

```bash
npm install
npm run dev      # local (the enquiry form POST only works on Netlify)
npm run build    # production build to dist/
```

## Where to edit
- `src/data/site.js` — display name, contact details, nav, order steps, site FAQ. Blank contact fields are hidden on the site.
- `src/data/products.js` — five product families. To publish numeric specs for a grade, add `approvedSpec: { grade, revised, tdsUrl?, rows:[{parameter,value,unit,method}] }`; the product page switches from the "parameters you can specify" list to the dated table automatically.
- `index.html` — static copy of the enquiry form for Netlify Forms detection (field names must match `src/components/RfqForm.jsx`).

## Enquiry form (Netlify Forms)
Submissions are stored by Netlify and show a reference ID only after the server returns success. After first deploy:
1. Netlify dashboard > Forms > `export-enquiry` > Settings > add an email notification to the export desk.
2. Submit one test enquiry (with an attachment) and confirm it arrives. Netlify Forms limit: 8 MB per submission, so the form allows 3 files / 8 MB total.

## Before launch (owner inputs)
Final name spelling + legal name; real email / phone / WhatsApp / address (`site.js`); approved product photos (set `image` in `products.js`); dated TDS/SDS and approved spec rows; confirmed packaging; policy review of Privacy and Terms; replace `shreeshyamexports.netlify.app` in `public/sitemap.xml` and `public/robots.txt` with the final domain.
