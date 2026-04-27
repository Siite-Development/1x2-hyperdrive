# TODO

## Indhold (skal udfyldes af 1x2 Biler)
- [ ] Erstat placeholder-billeder i `src/assets/images/home/` (`hero.jpg`, `welcome.jpg`, `oscar-rental.webp`) med rigtige fotos af butik/showroom/Oscar-udlejningsbiler.
- [ ] Tilføj resterende biler fra lager (Kia Ceed, Skoda Citigo, Cupra m.fl.) som `.mdx`-filer i `src/content/cars/`.
- [ ] Bekræft eller opdater åbningstider i `src/data/config.ts` (i øjeblikket "Efter aftale").
- [ ] Bekræft rentesats i `src/data/config.ts` (`interestRate = 6.5`).
- [ ] Opdater Google Maps-embed i Footer hvis ønsket (i øjeblikket ingen embed).

## Tekniske forbedringer
- [ ] Aktivér Netlify Forms i Netlify-dashboard og test indsendelse fra `/kontakt-os` og `/biler-til-salg/<slug>`.
- [ ] Opsæt `_redirects` i `public/_redirects` til evt. gamle URL'er fra WordPress-siden.
- [ ] Tilføj sitemap (Astro genererer det automatisk via `@astrojs/sitemap` hvis tilføjet).
- [ ] Cookie-banner (Complianz / Cookiebot / egen løsning) – p.t. ingen banner.
- [ ] Tilføj `Lendo`-side hvis det fortsat er relevant for forretningen.

## Lavt prioriteret
- [ ] Relaterede biler-widget på detaljesiden.
- [ ] Forsikrings-beregner.
- [ ] Trade-in / vurderings-widget.
- [ ] Sprog-toggle (engelsk version).
