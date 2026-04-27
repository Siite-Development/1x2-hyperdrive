# 1x2 Bilhus

Astro-baseret hjemmeside for [1x2 Biler](https://1x2biler.dk/) – brugte biler i Herlufmagle siden 1984. Bygget på det gratis [HyperDrive](https://github.com/wpinfusion/astro-hyperdrive) Astro-tema og rebrandet til 1x2 Bilhus.

## 🛠️ Teknologistak

- **Astro** – statisk side-generator med understøttelse af serveraktioner.
- **TailwindCSS v4** – brugerflade-styling med brand-tokens (`#FFFF05` gul / `#097BAA` blå).
- **Inter** + **Montserrat** – brødtekst og overskrifter.
- **Embla Carousel** – billed-galleri på bil-detaljesider.
- **GLightbox** – fuldskærms billedvisning.
- **Netlify** + **Netlify Forms** – hosting og indsendelse af kontakt-/forespørgselsformularer.

## 🚀 Kom i gang

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # produktionsbuild i ./dist
```

## 📂 Struktur

```text
/
├── public/                    # statiske filer (favicons, fonts, OG-billede)
├── scripts/
│   └── fetch-assets.sh        # henter brand- og bilbilleder fra 1x2biler.dk
├── src/
│   ├── actions/               # Astro server-actions (lånberegner)
│   ├── assets/images/
│   │   ├── brand/             # logo
│   │   ├── home/              # hero/welcome/oscar billeder
│   │   ├── partners/          # Accept Auto, CarGarantie logoer
│   │   ├── cars/<slug>/       # bil-galleri pr. slug
│   │   └── icons/             # SVG ikoner
│   ├── components/            # Astro UI-komponenter
│   ├── content/cars/          # bil-MDX-filer (én pr. bil)
│   ├── content.config.ts      # Zod-skema for cars-collection
│   ├── data/
│   │   ├── config.ts          # site-navn, kontakt, sociale medier
│   │   └── menus.ts           # navigation
│   ├── layouts/Layout.astro   # global layout (head, header, footer)
│   ├── pages/                 # ruter (.astro)
│   ├── styles/global.css      # Tailwind + brand-tokens + komponentklasser
│   └── utils/                 # helpers + Danish labels
└── astro.config.mjs
```

## 📄 Sider

| Rute | Beskrivelse |
|---|---|
| `/` | Forside med hero, Oscar-intro, velkomst, "Derfor vælger kunder os", featured biler, kontaktformular, biludlejning-CTA |
| `/biler-til-salg` | Listeside med filtre og pagination (SSR) |
| `/biler-til-salg/<slug>` | Bil-detaljeside med galleri, specifikationer, udstyrsliste, lånberegner, forespørgsel |
| `/finansiering` | Generel info om finansieringsløsninger |
| `/accept-auto` | Accept Auto partner-side |
| `/cargarantie` | CarGarantie partner-side |
| `/om-os` | Om virksomheden + 6-tile-grid |
| `/kontakt-os` | Telefon/e-mail + kontaktformular |
| `/privatlivspolitik` | GDPR-tekst |
| `/tak-for-din-henvendelse` | Tak-side efter formular-indsendelse (`noindex`) |
| `/404` | Fejl-side |

## ➕ Tilføj en ny bil

1. Læg billeder i `src/assets/images/cars/<slug>/01.jpeg`, `02.jpeg`, ... (første billede er listebillede + hovedbillede).
2. Opret `src/content/cars/<slug>.mdx` med frontmatter. Brug `src/content/cars/example.mdx` eller en eksisterende fil (`audi-q5.mdx`) som skabelon.
3. Krævede felter: `title`, `general.{make, model, price, bodyType, doors, seatingCapacity}`, `history.{mileage, year}`, `technical.{horsePower, transmission, engineSizeCC}`, `efficiency.fuelType`, `exterior.color`.
4. Sæt `misc.featured: true` for at vise bilen i "Vores biler"-sektionen på forsiden, eller specifikt slug i `index.astro`.
5. Sæt `misc.loanWidget: true` for at vise lånberegneren på detaljesiden.

## 🖼️ Hent kildebilleder

Brand- og bilbilleder kan re-hentes fra `1x2biler.dk` med:

```sh
bash scripts/fetch-assets.sh
```

Scriptet er idempotent – allerede downloadede filer springes over.

## 📝 Formularer

Kontaktformularer er konfigureret til Netlify Forms (`data-netlify="true"` + skjult `form-name` + honeypot). Indsendelser optræder i Netlify-dashboardet og redirecter brugeren til `/tak-for-din-henvendelse`.
