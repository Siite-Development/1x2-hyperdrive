import { c as createComponent } from './consts_CFER7-tu.mjs';
import colors from 'piccolore';
import { e as createRenderInstruction, f as addAttribute, r as renderTemplate, m as maybeRenderHead, h as renderComponent, j as renderHead, k as renderSlot, F as Fragment, s as slash } from './entrypoint_CQQkrT73.mjs';
import { e as externalLinks, p as phone, s as siteName, a as socialMedia, b as email, c as address, d as cvr, f as siteSlogan, h as siteLang, t as themeColor, j as getMileage, k as getMileageUnit, g as getPrice, l as getMakeModelSet, m as defaultPaginationSize, n as priceSteps } from './helpers_DGn0S4wr.mjs';
import { g as getFilteredCars } from './carFilters_CaBiR9Q6.mjs';
import 'clsx';
import { $ as $$Image } from './_astro_assets_DQUEGCY1.mjs';
import { c as createSvgComponent, C as CONTENT_LAYER_TYPE, L as LIVE_CONTENT_TYPE, d as defineCollection } from './_astro_content_Cz2KWOqp.mjs';
import * as z from 'zod/v4';
import 'js-yaml';
import 'smol-toml';
import path, { relative } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import '@astrojs/markdown-remark';
import { slug } from 'github-slugger';
import 'xxhash-wasm';
import 'common-ancestor-path';
import { existsSync, promises } from 'node:fs';
import pLimit from 'p-limit';
import picomatch from 'picomatch';
import { glob as glob$1 } from 'tinyglobby';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Users/leonardomiodrag/Siite Astro/1x2 Biler/1x2-hyperdrive/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/leonardomiodrag/Siite Astro/1x2 Biler/1x2-hyperdrive/node_modules/astro/components/ClientRouter.astro", void 0);

const menuMain = [
  {
    id: "home",
    label: "Forside",
    url: "/"
  },
  {
    id: "cars",
    label: "Biler",
    url: "/biler-til-salg"
  },
  {
    id: "finansiering",
    label: "Finansiering",
    url: "/finansiering",
    submenu: [
      { id: "finansiering", label: "Finansiering", url: "/finansiering" },
      { id: "accept-auto", label: "Accept Auto", url: "/accept-auto" },
      { id: "cargarantie", label: "CarGarantie", url: "/cargarantie" }
    ]
  },
  {
    id: "about",
    label: "Om os",
    url: "/om-os"
  },
  {
    id: "contact",
    label: "Kontakt os",
    url: "/kontakt-os"
  }
];
const menuShortcuts = {
  prettyName: "Genveje",
  items: [
    { name: "Biler", url: "/biler-til-salg" },
    { name: "Finansiering", url: "/finansiering" },
    { name: "Om os", url: "/om-os" },
    { name: "Kontakt os", url: "/kontakt-os" },
    { name: "Oscar Biludlejning", url: externalLinks.oscarRentalShort, isExternal: true }
  ]
};
const menuLegal = {
  items: [{ name: "Privatlivspolitik", url: "/privatlivspolitik" }]
};

const Logo = new Proxy({"src":"/_astro/logo.GYZZmPlg.png","width":1000,"height":460,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/leonardomiodrag/Siite Astro/1x2 Biler/1x2-hyperdrive/src/assets/images/brand/logo.png";
							}
							
							return target[name];
						}
					});

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Header;
  const rmTrailingSlash = (path) => {
    return path.endsWith("/") && path.length > 1 ? path.slice(0, path.length - 1) : path;
  };
  const pathname = rmTrailingSlash(Astro2.url.pathname);
  const isActive = (url) => {
    if (!url) return false;
    return pathname === rmTrailingSlash(url);
  };
  return renderTemplate`${maybeRenderHead()}<header class="bg-white border-b border-gray-200"> <div class="container py-4 lg:py-6"> <div class="flex justify-between items-center gap-x-4"> <a href="/"${addAttribute(siteName, "aria-label")}> ${renderComponent($$result, "Image", $$Image, { "src": Logo, "alt": siteName, "class": "h-12 lg:h-16 w-auto", "loading": "eager" })} </a> <nav class="max-lg:hidden" role="navigation" aria-label="Hovedmenu"> <div class="flex lg:gap-x-10 items-center"> ${menuMain.map((item) => {
    const active = isActive(item.url) || (item.submenu?.some((s) => isActive(s.url)) ?? false);
    return renderTemplate`<div class="relative group"> <a${addAttribute(item.url, "href")}${addAttribute(`border-b-2 transition pb-1 ${active ? "border-[var(--color-brand-yellow)] font-bold" : "border-transparent hover:border-gray-800 font-medium"}`, "class")}${addAttribute(item.submenu ? "true" : "false", "aria-haspopup")}${addAttribute(item.submenu ? "false" : void 0, "aria-expanded")}> ${item.label} </a> ${item.submenu && renderTemplate`<div class="absolute top-full -mt-4 pt-4 -left-4 z-50 translate-y-4 w-screen max-w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300" role="menu"> <div class="bg-white rounded-lg ring-1 shadow-md ring-gray-900/5 overflow-hidden" role="menu"${addAttribute(`Undermenu for ${item.label}`, "aria-label")}> ${item.submenu.map((subItem) => renderTemplate`<a${addAttribute(subItem.url, "href")}${addAttribute(`block px-4 py-3 text-base hover:bg-gray-100 ${isActive(subItem.url) ? "font-bold" : "font-medium"}`, "class")} role="menuitem"> ${subItem.label} </a>`)} </div> </div>`} </div>`;
  })} <a${addAttribute(externalLinks.oscarRental, "href")} target="_blank" rel="noopener noreferrer" class="button button-primary ml-6">
Oscars biludlejning
</a> </div> </nav> <a${addAttribute(phone.href, "href")} class="lg:hidden text-base font-semibold text-gray-900"${addAttribute(`Ring til ${siteName}`, "aria-label")}> ${phone.label} </a> </div> </div> </header>`;
}, "/Users/leonardomiodrag/Siite Astro/1x2 Biler/1x2-hyperdrive/src/components/Header.astro", void 0);

const IconFacebook = createSvgComponent({"meta":{"src":"/_astro/facebook.BUiu6hSN.svg","width":24,"height":24,"format":"svg"},"attributes":{"viewBox":"0 0 24 24"},"children":"\n    <path fill=\"currentColor\" d=\"M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02\" />\n"});

const IconInstagram = createSvgComponent({"meta":{"src":"/_astro/instagram.B7WgPWEB.svg","width":24,"height":24,"format":"svg"},"attributes":{"viewBox":"0 0 24 24"},"children":"\n    <path fill=\"currentColor\" d=\"M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3\" />\n"});

const $$SocialMediaIcons = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${Object.values(socialMedia).map((item) => renderTemplate`${maybeRenderHead()}<a${addAttribute(item.url, "href")} target="_blank"${addAttribute(item.label, "aria-label")} rel="noopener noreferrer" class="social-media-icon">${item.icon === "facebook" && renderTemplate`${renderComponent($$result, "IconFacebook", IconFacebook, { "class": "size-8 text-gray-600 hover:text-gray-800 transition p-1 -m-1" })}`}${item.icon === "instagram" && renderTemplate`${renderComponent($$result, "IconInstagram", IconInstagram, { "class": "size-8 text-gray-600 hover:text-gray-800 transition p-1 -m-1" })}`}</a>`)}`;
}, "/Users/leonardomiodrag/Siite Astro/1x2 Biler/1x2-hyperdrive/src/components/SocialMediaIcons.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gray-50"> <div class="container py-16"> <div class="lg:grid lg:grid-cols-3 lg:gap-12"> <div> <a href="/"${addAttribute(siteName, "aria-label")}> ${renderComponent($$result, "Image", $$Image, { "src": Logo, "alt": siteName, "class": "h-16 w-auto", "loading": "lazy" })} </a> <p class="mt-6 text-base text-gray-600 max-w-md">
Hos 1X2 Biler har vi siden 1984 hjulpet kunder med at finde den helt
					rigtige bil. Vi tror på tryghed, ærlig rådgivning og biler, der passer
					til dine behov.
</p> </div> <div class="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:col-span-2 lg:mt-0"> ${menuShortcuts.items.length > 0 && renderTemplate`<div> <span class="text-base font-semibold">${menuShortcuts.prettyName}</span> <ul role="list" class="mt-6 space-y-4"> ${menuShortcuts.items.map((item) => renderTemplate`<li> <a${addAttribute(item.url, "href")}${addAttribute(item.isExternal ? "_blank" : void 0, "target")}${addAttribute(item.isExternal ? "noopener noreferrer" : void 0, "rel")} class="text-base transition text-gray-600 hover:text-gray-800"> ${item.name} </a> </li>`)} </ul> </div>`} <div> <span class="text-base font-semibold">Kontaktinfo</span> <ul role="list" class="mt-6 space-y-4 text-base text-gray-600"> <li> <a${addAttribute(phone.href, "href")} class="transition hover:text-gray-800"> ${phone.label} </a> </li> <li> <a${addAttribute(email.href, "href")} class="transition hover:text-gray-800"> ${email.label} </a> </li> <li class="not-italic"> <address class="not-italic"> ${address.street}<br> ${address.zip} ${address.city} </address> </li> <li>CVR: ${cvr}</li> </ul> </div> </div> </div> <div class="mt-16 border-t border-gray-800/10 pt-8 md:flex md:items-center md:justify-between"> <div class="flex gap-x-6 md:order-2"> ${renderComponent($$result, "SocialMediaIcons", $$SocialMediaIcons, {})} </div> <div class="mt-6 md:mt-0 md:order-1 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm/6 text-gray-600"> <p>&copy; ${year} ${siteName}. Alle rettigheder forbeholdes.</p> ${menuLegal.items.map((item) => renderTemplate`<a${addAttribute(item.url, "href")} class="transition hover:text-gray-800"> ${item.name} </a>`)} </div> </div> </div> </footer>`;
}, "/Users/leonardomiodrag/Siite Astro/1x2 Biler/1x2-hyperdrive/src/components/Footer.astro", void 0);

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const baseUrl = `${Astro2.url.protocol}//${Astro2.url.host}`;
  const defaultDescription = "Find din næste bil hos 1x2 Biler. Vi tilbyder brugte biler og Oscar biludlejning – tryg service, fleksibel finansiering og personlig rådgivning.";
  const {
    pageTitle,
    title,
    description = defaultDescription,
    noindex = false
  } = Astro2.props;
  const resolvedPageTitle = pageTitle ?? (title ? `${title} | ${siteName}` : `${siteName} – ${siteSlogan}`);
  const ogTitle = title ? `${title} | ${siteName}` : `${siteName} – ${siteSlogan}`;
  const ogLocale = siteLang.replace("-", "_");
  return renderTemplate`<html${addAttribute(siteLang, "lang")}> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="theme-color"${addAttribute(themeColor, "content")}><meta name="description"${addAttribute(description, "content")}>${noindex && renderTemplate`<meta name="robots" content="noindex,nofollow">`}<link rel="author" href="/humans.txt"><link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><meta name="apple-mobile-web-app-title"${addAttribute(siteName, "content")}><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:type" content="website"><meta property="og:title"${addAttribute(ogTitle, "content")}><meta property="og:image"${addAttribute(`${baseUrl}/og-image.jpg`, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:site_name"${addAttribute(siteName, "content")}><meta property="og:locale"${addAttribute(ogLocale, "content")}><meta name="twitter:card" content="summary_large_image"><meta name="twitter:url"${addAttribute(Astro2.url, "content")}><meta name="twitter:title"${addAttribute(ogTitle, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:image"${addAttribute(`${baseUrl}/og-image.jpg`, "content")}><title>${resolvedPageTitle}</title>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} ${renderScript($$result, "/Users/leonardomiodrag/Siite Astro/1x2 Biler/1x2-hyperdrive/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")}</body></html>`;
}, "/Users/leonardomiodrag/Siite Astro/1x2 Biler/1x2-hyperdrive/src/layouts/Layout.astro", void 0);

const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Section;
  const { id, class: className = "bg-white" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(className, "class")}> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "/Users/leonardomiodrag/Siite Astro/1x2 Biler/1x2-hyperdrive/src/components/Section.astro", void 0);

const $$Container = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Container;
  const { class: className = "", contain = true } = Astro2.props;
  const classes = `${className} ${contain ? "container py-16 lg:py-24" : ""}`;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(classes, "class")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/leonardomiodrag/Siite Astro/1x2 Biler/1x2-hyperdrive/src/components/Container.astro", void 0);

const $$Heading = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Heading;
  const { class: className } = Astro2.props;
  const wrapperClasses = `max-w-3xl prose mb-16 ${className}`;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(wrapperClasses, "class")}> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["heading-title"])} ` })} ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["heading-content"])} ` })} ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/leonardomiodrag/Siite Astro/1x2 Biler/1x2-hyperdrive/src/components/Heading.astro", void 0);

const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Button;
  const { color = "yellow", href = "", newtab = false, As = "a", class: className, ...props } = Astro2.props;
  const buttonClasses = `not-prose button button-${color} ${className}`;
  return renderTemplate`${renderComponent($$result, "As", As, { "class": buttonClasses, "href": href, "target": newtab ? "_blank" : "_self", "rel": newtab ? "noopener noreferrer" : "", ...props }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/Users/leonardomiodrag/Siite Astro/1x2 Biler/1x2-hyperdrive/src/components/Button.astro", void 0);

const IconMilage = createSvgComponent({"meta":{"src":"/_astro/milage.BYJIx3d9.svg","width":24,"height":24,"format":"svg"},"attributes":{"viewBox":"0 0 24 24"},"children":"\n    <path fill=\"currentColor\" d=\"M4 20V4h2v16zm7 0v-4h2v4zm7 0V4h2v16zm-7-6v-4h2v4zm0-6V4h2v4z\"></path>\n"});

const IconTransmission = createSvgComponent({"meta":{"src":"/_astro/transmission.CytIM1CE.svg","width":24,"height":24,"format":"svg"},"attributes":{"viewBox":"0 0 24 24"},"children":"\n    <path fill=\"currentColor\" d=\"M8 5H4V2h4zM4 22h4v-3H4zM14 2h-4v3h4zm-4 20h4v-3h-4zm6-20v3h4V2zm1 9h-4V7h-2v4H7V7H5v10h2v-4h4v4h2v-4h6V7h-2z\" />\n"});

const IconCalendar = createSvgComponent({"meta":{"src":"/_astro/calendar.DjjGcdh_.svg","width":24,"height":24,"format":"svg"},"attributes":{"fill":"none","viewBox":"0 0 24 24","stroke-width":"1.5","stroke":"currentColor"},"children":"\n    <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5\" />\n"});

const IconFuel = createSvgComponent({"meta":{"src":"/_astro/fuel.CQ_zGtLj.svg","width":24,"height":24,"format":"svg"},"attributes":{"viewBox":"0 0 24 24"},"children":"\n      <g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" color=\"currentColor\">\n            <path d=\"m10.463 13l-1.394 1.812a.33.33 0 0 0 .2.526l1.461.31a.33.33 0 0 1 .177.553L9.177 18M4 10h12\" />\n            <path d=\"M4 21V9c0-2.828 0-4.243.879-5.121C5.757 3 7.172 3 10 3s4.243 0 5.121.879C16 4.757 16 6.172 16 9v12zm-2 0h16m-2-7h1.667c.31 0 .465 0 .592.034a1 1 0 0 1 .707.707c.034.127.034.282.034.592V16.5a1.5 1.5 0 0 0 3 0v-6.289c0-.601 0-.902-.086-1.185s-.252-.534-.586-1.034l-.773-1.16A1.87 1.87 0 0 0 19 6\" />\n      </g>\n"});

const IconOdometer = createSvgComponent({"meta":{"src":"/_astro/odometer.6zRqCtuB.svg","width":1024,"height":1024,"format":"svg"},"attributes":{"viewBox":"0 0 1024 1024"},"children":"\n    <path fill=\"currentColor\" d=\"M512 896a384 384 0 1 0 0-768a384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896a448 448 0 0 1 0 896\" />\n    <path fill=\"currentColor\" d=\"M192 512a320 320 0 1 1 640 0a32 32 0 1 1-64 0a256 256 0 1 0-512 0a32 32 0 0 1-64 0\" />\n    <path fill=\"currentColor\" d=\"M570.432 627.84A96 96 0 1 1 509.568 608l60.992-187.776A32 32 0 1 1 631.424 440l-60.992 187.776zM502.08 734.464a32 32 0 1 0 19.84-60.928a32 32 0 0 0-19.84 60.928\" />\n"});

const $$CardHighlights = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$CardHighlights;
  const { data } = Astro2.props;
  const mileage = getMileage(data.history.mileage);
  const mileageUnit = getMileageUnit();
  const pillClasses = "flex items-center gap-x-1 rounded-full bg-gray-100 px-3 py-1 ring-1 ring-gray-200";
  return renderTemplate`${maybeRenderHead()}<ul class="flex gap-x-2 sm:gap-x-4 items-center gap-y-2 mt-auto flex-wrap text-sm lg:text-base"> <li${addAttribute(pillClasses, "class")}> ${renderComponent($$result, "IconMilage", IconMilage, { "class": "size-4 lg:size-5" })} <span> ${`${mileage} ${mileageUnit}`} </span> </li> <li${addAttribute(pillClasses, "class")}> ${renderComponent($$result, "IconTransmission", IconTransmission, { "class": "size-4 lg:size-5" })} <span> ${data.technical.transmission} </span> </li> <li${addAttribute(pillClasses, "class")}> ${renderComponent($$result, "IconCalendar", IconCalendar, { "class": "size-4 lg:size-5 -mt-0.5" })} <span> ${data.history.year} </span> </li> <li${addAttribute(pillClasses, "class")}> ${renderComponent($$result, "IconFuel", IconFuel, { "class": "size-4 lg:size-5 -mt-0.5" })} <span> ${data.efficiency.fuelType} </span> </li> <li${addAttribute(pillClasses, "class")}> ${renderComponent($$result, "IconOdometer", IconOdometer, { "class": "size-4 lg:size-5 -mt-0.5" })} <span> ${data.technical.horsePower} HK (${(data.technical.horsePower * 0.7355).toFixed()} kW)
</span> </li> </ul>`;
}, "/Users/leonardomiodrag/Siite Astro/1x2 Biler/1x2-hyperdrive/src/components/car/CardHighlights.astro", void 0);

const $$CardPrice = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$CardPrice;
  const { data } = Astro2.props;
  const price = getPrice(data.price);
  const salePrice = data.salePrice ? getPrice(data.salePrice) : null;
  return renderTemplate`${maybeRenderHead()}<div class="xxl:pr-8 shrink-0 max-xxl:flex max-xxl:gap-2 max-xxl:items-center max-xxl:mb-6"> <span${addAttribute(`price ${data.salePrice ? "on-sale" : "font-semibold"}`, "class")}> ${price} </span> ${data.salePrice && renderTemplate`<mark class="price-on-sale block">${salePrice}</mark>`} </div>`;
}, "/Users/leonardomiodrag/Siite Astro/1x2 Biler/1x2-hyperdrive/src/components/car/CardPrice.astro", void 0);

const $$CardCar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$CardCar;
  const { car } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li${addAttribute(car.id, "data-car-id")}${addAttribute(car.data.general.salePrice ? "true" : "false", "data-car-on-sale")}${addAttribute(car.data.general.availability, "data-car-available")} class="card-car bg-white shadow overflow-hidden xxl:transition xxl:border-transparent xxl:border-r-4 hover:lg:border-[var(--color-brand-yellow)]"> <a${addAttribute(`/biler-til-salg/${car.id}`, "href")} class="relative isolate flex flex-col gap-8 xxl:flex-row"> <div class="relative aspect-[4/3] xxl:w-72 lg:shrink-0 ribbon"> ${car.data.image ? renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": car.data.image, "alt": car.data.imageAlt, "class": "absolute inset-0 size-full bg-gray-50 object-cover" })}` : renderTemplate`<div class="absolute inset-0 text-gray-400 size-full bg-gray-100 flex flex-col gap-4 items-center justify-center"> ${renderComponent($$result, "Image", $$Image, { "src": Logo, "alt": "", "class": "h-16 w-auto opacity-60" })} <span class="text-gray-400 font-bold italic">Kommer snart</span> </div>`} </div> <div class="flex flex-col items-start lg:py-4 grow max-xxl:px-4 max-lg:pb-8"> <div class="relative xxl:flex xxl:items-start xxl:gap-4 xxl:justify-between w-full"> <div class="mb-4 lg:mb-6"> <h2 class="h5 line-clamp-2"> ${car.data.title} ${car.data.general.type && renderTemplate`<span class="text-base max-xl:block xl:ml-2 text-gray-800 font-normal align-middle"> ${car.data.general.type} </span>`} </h2> <p class="text-base mt-2 line-clamp-3">${car.data.excerpt}</p> ${car.data.options && car.data.options.length > 0 && renderTemplate`<p class="text-base text-gray-400 mt-3 line-clamp-1"> ${car.data.options.join(", ")} </p>`} </div> ${renderComponent($$result, "CardPrice", $$CardPrice, { "data": car.data.general })} </div> <div class="mt-auto lg:mb-4"> ${renderComponent($$result, "CarHighlights", $$CardHighlights, { "data": car.data })} </div> </div> </a> </li>`;
}, "/Users/leonardomiodrag/Siite Astro/1x2 Biler/1x2-hyperdrive/src/components/car/CardCar.astro", void 0);

const isWindows = typeof process !== "undefined" && process.platform === "win32";
function normalizePath(id) {
  return path.posix.normalize(isWindows ? slash(id) : id);
}

function generateIdDefault({ entry, base, data }, isLegacy) {
  if (data.slug) {
    return data.slug;
  }
  const entryURL = new URL(encodeURI(entry), base);
  if (isLegacy) {
    const { id } = getContentEntryIdAndSlug({
      entry: entryURL,
      contentDir: base,
      collection: ""
    });
    return id;
  }
  const { slug } = getContentEntryIdAndSlug({
    entry: entryURL,
    contentDir: base,
    collection: ""
  });
  return slug;
}
function checkPrefix(pattern, prefix) {
  if (Array.isArray(pattern)) {
    return pattern.some((p) => p.startsWith(prefix));
  }
  return pattern.startsWith(prefix);
}
const secretLegacyFlag = /* @__PURE__ */ Symbol("astro.legacy-glob");
function glob(globOptions) {
  if (checkPrefix(globOptions.pattern, "../")) {
    throw new Error(
      "Glob patterns cannot start with `../`. Set the `base` option to a parent directory instead."
    );
  }
  if (checkPrefix(globOptions.pattern, "/")) {
    throw new Error(
      "Glob patterns cannot start with `/`. Set the `base` option to a parent directory or use a relative path instead."
    );
  }
  const isLegacy = !!globOptions[secretLegacyFlag];
  const generateId = globOptions?.generateId ?? ((opts) => generateIdDefault(opts, isLegacy));
  const fileToIdMap = /* @__PURE__ */ new Map();
  return {
    name: "glob-loader",
    load: async ({
      config,
      collection,
      logger,
      watcher,
      parseData,
      store,
      generateDigest,
      entryTypes
    }) => {
      const renderFunctionByContentType = /* @__PURE__ */ new WeakMap();
      const untouchedEntries = new Set(store.keys());
      async function syncData(entry, base, entryType, oldId) {
        if (!entryType) {
          logger.warn(`No entry type found for ${entry}`);
          return;
        }
        const fileUrl = new URL(encodeURI(entry), base);
        const contents = await promises.readFile(fileUrl, "utf-8").catch((err) => {
          logger.error(`Error reading ${entry}: ${err.message}`);
          return;
        });
        if (!contents && contents !== "") {
          logger.warn(`No contents found for ${entry}`);
          return;
        }
        const { body, data } = await entryType.getEntryInfo({
          contents,
          fileUrl
        });
        const id = generateId({ entry, base, data });
        if (oldId && oldId !== id) {
          store.delete(oldId);
        }
        untouchedEntries.delete(id);
        const existingEntry = store.get(id);
        const digest = generateDigest(contents);
        const filePath2 = fileURLToPath(fileUrl);
        if (existingEntry && existingEntry.digest === digest && existingEntry.filePath) {
          if (existingEntry.deferredRender) {
            store.addModuleImport(existingEntry.filePath);
          }
          if (existingEntry.assetImports?.length) {
            store.addAssetImports(existingEntry.assetImports, existingEntry.filePath);
          }
          fileToIdMap.set(filePath2, id);
          return;
        }
        const relativePath2 = posixRelative(fileURLToPath(config.root), filePath2);
        const parsedData = await parseData({
          id,
          data,
          filePath: filePath2
        });
        if (existingEntry && existingEntry.filePath && existingEntry.filePath !== relativePath2) {
          const oldFilePath = new URL(existingEntry.filePath, config.root);
          if (existsSync(oldFilePath)) {
            logger.warn(
              `Duplicate id "${id}" found in ${filePath2}. Later items with the same id will overwrite earlier ones.`
            );
          }
        }
        if (entryType.getRenderFunction) {
          let render = renderFunctionByContentType.get(entryType);
          if (!render) {
            render = await entryType.getRenderFunction(config);
            renderFunctionByContentType.set(entryType, render);
          }
          let rendered = void 0;
          try {
            rendered = await render?.({
              id,
              data,
              body,
              filePath: filePath2,
              digest
            });
          } catch (error) {
            logger.error(`Error rendering ${entry}: ${error.message}`);
          }
          store.set({
            id,
            data: parsedData,
            body: globOptions.retainBody === false ? void 0 : body,
            filePath: relativePath2,
            digest,
            rendered,
            assetImports: rendered?.metadata?.imagePaths
          });
        } else if ("contentModuleTypes" in entryType) {
          store.set({
            id,
            data: parsedData,
            body: globOptions.retainBody === false ? void 0 : body,
            filePath: relativePath2,
            digest,
            deferredRender: true
          });
        } else {
          store.set({
            id,
            data: parsedData,
            body: globOptions.retainBody === false ? void 0 : body,
            filePath: relativePath2,
            digest
          });
        }
        fileToIdMap.set(filePath2, id);
      }
      let baseDir;
      {
        baseDir = new URL(globOptions.base, config.root) ;
      }
      if (!baseDir.pathname.endsWith("/")) {
        baseDir.pathname = `${baseDir.pathname}/`;
      }
      const filePath = fileURLToPath(baseDir);
      const relativePath = relative(fileURLToPath(config.root), filePath);
      const exists = existsSync(baseDir);
      if (!exists) {
        logger.warn(`The base directory "${fileURLToPath(baseDir)}" does not exist.`);
      }
      const files = await glob$1(globOptions.pattern, {
        cwd: fileURLToPath(baseDir),
        expandDirectories: false
      });
      if (exists && files.length === 0) {
        logger.warn(
          `No files found matching "${globOptions.pattern}" in directory "${relativePath}"`
        );
        return;
      }
      function configForFile(file) {
        const ext = file.split(".").at(-1);
        if (!ext) {
          logger.warn(`No extension found for ${file}`);
          return;
        }
        return entryTypes.get(`.${ext}`);
      }
      const limit = pLimit(10);
      const skippedFiles = [];
      const contentDir = new URL("content/", config.srcDir);
      const configFiles = new Set(
        ["config.js", "config.ts", "config.mjs"].map((file) => new URL(file, contentDir).href)
      );
      function isConfigFile(file) {
        const fileUrl = new URL(file, baseDir);
        return configFiles.has(fileUrl.href);
      }
      await Promise.all(
        files.map((entry) => {
          if (isConfigFile(entry)) {
            return;
          }
          return limit(async () => {
            const entryType = configForFile(entry);
            await syncData(entry, baseDir, entryType);
          });
        })
      );
      const skipCount = skippedFiles.length;
      if (skipCount > 0) {
        const patternList = Array.isArray(globOptions.pattern) ? globOptions.pattern.join(", ") : globOptions.pattern;
        logger.warn(
          `The glob() loader cannot be used for files in ${colors.bold("src/content")} when legacy mode is enabled.`
        );
        if (skipCount > 10) {
          logger.warn(
            `Skipped ${colors.green(skippedFiles.length)} files that matched ${colors.green(patternList)}.`
          );
        } else {
          logger.warn(`Skipped the following files that matched ${colors.green(patternList)}:`);
          skippedFiles.forEach((file) => logger.warn(`\u2022 ${colors.green(file)}`));
        }
      }
      untouchedEntries.forEach((id) => store.delete(id));
      if (!watcher) {
        return;
      }
      watcher.add(filePath);
      const matchesGlob = (entry) => !entry.startsWith("../") && picomatch.isMatch(entry, globOptions.pattern);
      const basePath = fileURLToPath(baseDir);
      async function onChange(changedPath) {
        const entry = posixRelative(basePath, changedPath);
        if (!matchesGlob(entry)) {
          return;
        }
        const entryType = configForFile(changedPath);
        const baseUrl = pathToFileURL(basePath);
        const oldId = fileToIdMap.get(changedPath);
        await syncData(entry, baseUrl, entryType, oldId);
        logger.info(`Reloaded data from ${colors.green(entry)}`);
      }
      watcher.on("change", onChange);
      watcher.on("add", onChange);
      watcher.on("unlink", async (deletedPath) => {
        const entry = posixRelative(basePath, deletedPath);
        if (!matchesGlob(entry)) {
          return;
        }
        const id = fileToIdMap.get(deletedPath);
        if (id) {
          store.delete(id);
          fileToIdMap.delete(deletedPath);
        }
      });
    }
  };
}

const entryTypeSchema = z.object({
  id: z.string({
    error: "Content entry `id` must be a string"
    // Default to empty string so we can validate properly in the loader
  })
}).passthrough();
z.union([
  z.array(entryTypeSchema),
  z.record(
    z.string(),
    z.object({
      id: z.string({
        error: "Content entry `id` must be a string"
      }).optional()
    }).passthrough()
  )
]);
const collectionConfigParser = z.union([
  z.object({
    type: z.literal("content").optional(),
    schema: z.any().optional(),
    loader: z.never().optional()
  }),
  z.object({
    type: z.literal("data").optional(),
    schema: z.any().optional(),
    loader: z.never().optional()
  }),
  z.object({
    type: z.literal(CONTENT_LAYER_TYPE),
    schema: z.any().optional(),
    loader: z.union([
      z.function(),
      z.object({
        name: z.string(),
        load: z.function({
          input: [z.custom()],
          output: z.custom()
        }),
        schema: z.any().transform((v) => {
          if (typeof v === "function") {
            console.warn(
              `Your loader's schema is defined using a function. This is no longer supported and the schema will be ignored. Please update your loader to use the \`createSchema()\` utility instead, or report this to the loader author. In a future major version, this will cause the loader to break entirely.`
            );
            return void 0;
          }
          return v;
        }).superRefine((v, ctx) => {
          if (v !== void 0 && !("_zod" in v)) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: "Invalid Zod schema"
            });
            return z.NEVER;
          }
        }).optional(),
        createSchema: z.function({
          input: [],
          output: z.promise(
            z.object({
              schema: z.custom((v) => "_zod" in v),
              types: z.string()
            })
          )
        }).optional()
      })
    ])
  }),
  z.object({
    type: z.literal(LIVE_CONTENT_TYPE).optional().default(LIVE_CONTENT_TYPE),
    schema: z.any().optional(),
    loader: z.function()
  })
]);
z.object({
  collections: z.record(z.string(), collectionConfigParser)
});
function getContentEntryIdAndSlug({
  entry,
  contentDir,
  collection
}) {
  const relativePath = getRelativeEntryPath(entry, collection, contentDir);
  const withoutFileExt = relativePath.replace(new RegExp(path.extname(relativePath) + "$"), "");
  const rawSlugSegments = withoutFileExt.split(path.sep);
  const slug$1 = rawSlugSegments.map((segment) => slug(segment)).join("/").replace(/\/index$/, "");
  const res = {
    id: normalizePath(relativePath),
    slug: slug$1
  };
  return res;
}
function getRelativeEntryPath(entry, collection, contentDir) {
  const relativeToContent = path.relative(fileURLToPath(contentDir), fileURLToPath(entry));
  const relativeToCollection = path.relative(collection, relativeToContent);
  return relativeToCollection;
}
function posixifyPath(filePath) {
  return filePath.split(path.sep).join("/");
}
function posixRelative(from, to) {
  return posixifyPath(path.relative(from, to));
}

const bodyTypes = [
  "SUV",
  "Sedan",
  "Hatchback",
  "Coupe",
  "Convertible",
  "Pickup",
  "Stationcar",
  "Personvogn",
  "Mikro"
];
const fuelTypes = ["Benzin", "Diesel", "Hybrid", "El", "Plug-in Hybrid", "CNG"];
const conditions = ["Ny", "Brugt", "Demobil"];
const transmission = ["Automatgear", "Manuelt gear", "CVT", "Dual-Clutch"];
defineCollection({
  loader: glob({ pattern: ["*.mdx", "!example.mdx"], base: "./src/content/cars" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    image: image().optional(),
    imageAlt: z.string().optional().default(""),
    gallery: z.array(z.object({ image: image(), alt: z.string() })).optional(),
    videoTourUrl: z.url().optional(),
    excerpt: z.string().optional(),
    publishDate: z.coerce.date().default(new Date(2025, 0, 1)),
    general: z.object({
      make: z.string(),
      model: z.coerce.string(),
      variant: z.string().optional(),
      type: z.string().optional(),
      price: z.number().positive(),
      salePrice: z.number().positive().optional(),
      newPrice: z.number().positive().optional(),
      bodyType: z.enum(bodyTypes),
      drivetrain: z.enum(["Forhjulstræk", "Baghjulstræk", "Firehjulstræk", "4 hjul"]).optional(),
      doors: z.number().int().positive(),
      seatingCapacity: z.number().int().positive(),
      condition: z.enum(conditions).optional(),
      availability: z.enum(["in-stock", "reserved", "sold", "coming-soon"]).default("in-stock"),
      greenTax: z.number().nonnegative().optional(),
      firstRegistration: z.string().optional(),
      octane: z.string().optional()
    }),
    history: z.object({
      mileage: z.number().nonnegative(),
      year: z.number().int().min(1886),
      previousOwners: z.number().int().nonnegative().optional(),
      accidentHistory: z.enum(["Nej", "Ja - mindre skader", "Ja - større reparation"]).optional()
    }),
    technical: z.object({
      horsePower: z.number().positive(),
      torque: z.number().positive().optional(),
      transmission: z.enum(transmission),
      engineSizeCC: z.number().nonnegative(),
      gears: z.number().int().optional(),
      cilinders: z.number().int().optional(),
      weight: z.number().int().optional(),
      topSpeed: z.number().positive().optional(),
      zeroToHundred: z.number().positive().optional(),
      tankSize: z.number().positive().optional()
    }),
    efficiency: z.object({
      fuelType: z.enum(fuelTypes),
      fuelEfficiencyMPG: z.number().positive().optional(),
      fuelEfficiencyLPer100KM: z.number().positive().optional(),
      fuelEfficiencyKMPerL: z.number().positive().optional(),
      emissionsCO2: z.string().optional(),
      emissionsRating: z.string().optional()
    }),
    options: z.array(z.string()).optional(),
    security: z.object({
      alarm: z.boolean().optional(),
      immobilizer: z.boolean().optional(),
      airbags: z.number().int().positive().optional(),
      abs: z.boolean().optional(),
      esp: z.boolean().optional(),
      tireCondition: z.enum(["Nye", "Gode", "Skal udskiftes"]).optional(),
      safetyRating: z.string().optional()
    }).optional(),
    exterior: z.object({
      color: z.string(),
      paintType: z.enum(["Metallak", "Perlemorslak", "Mat"]).optional(),
      wheelSize: z.number().positive().optional(),
      wheelType: z.enum(["Alufælge", "Stål", "Carbon"]).optional(),
      height: z.number().positive().optional(),
      length: z.number().positive().optional(),
      width: z.number().positive().optional(),
      loadCapacity: z.number().positive().optional()
    }),
    interior: z.object({
      materialSeats: z.string().optional(),
      heatedSeats: z.boolean().optional(),
      ventilatedSeats: z.boolean().optional()
    }).optional(),
    misc: z.object({
      vin: z.string().optional(),
      registrationStatus: z.enum(["Indregistreret", "Uindregistreret", "Indregistrering afventes"]).optional(),
      warranty: z.string().optional(),
      dealerNotes: z.string().optional(),
      hidden: z.boolean().optional().default(false),
      loanWidget: z.boolean().optional().default(false),
      featured: z.boolean().optional().default(false)
    }).optional()
  })
});

const IconReset = createSvgComponent({"meta":{"src":"/_astro/reset.CHWrfnUe.svg","width":16,"height":16,"format":"svg"},"attributes":{"viewBox":"0 0 16 16","fill":"currentColor"},"children":"\n    <path fill-rule=\"evenodd\" d=\"M13.836 2.477a.75.75 0 0 1 .75.75v3.182a.75.75 0 0 1-.75.75h-3.182a.75.75 0 0 1 0-1.5h1.37l-.84-.841a4.5 4.5 0 0 0-7.08.932.75.75 0 0 1-1.3-.75 6 6 0 0 1 9.44-1.242l.842.84V3.227a.75.75 0 0 1 .75-.75Zm-.911 7.5A.75.75 0 0 1 13.199 11a6 6 0 0 1-9.44 1.241l-.84-.84v1.371a.75.75 0 0 1-1.5 0V9.591a.75.75 0 0 1 .75-.75H5.35a.75.75 0 0 1 0 1.5H3.98l.841.841a4.5 4.5 0 0 0 7.08-.932.75.75 0 0 1 1.025-.273Z\" clip-rule=\"evenodd\"></path>\n"});

const IconChevronDown = createSvgComponent({"meta":{"src":"/_astro/chevron-down-select.5reERZOC.svg","width":16,"height":16,"format":"svg"},"attributes":{"viewBox":"0 0 16 16","fill":"currentColor","aria-hidden":"true","data-slot":"icon"},"children":"\n    <path fill-rule=\"evenodd\" d=\"M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z\" clip-rule=\"evenodd\"></path>\n"});

const IconClose = createSvgComponent({"meta":{"src":"/_astro/close.BvPdGPtU.svg","width":16,"height":16,"format":"svg"},"attributes":{"viewBox":"0 0 16 16","fill":"currentColor"},"children":"\n      <path d=\"M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z\" />\n"});

const $$SidebarFilters = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$SidebarFilters;
  const allMakesModels = await getMakeModelSet();
  const { data } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="sidebar-filter" class="fixed lg:relative max-lg:overflow-y-auto shrink-0 inset-y-0 z-50 lg:flex w-full lg:w-80 lg:flex-col max-lg:bg-white transition duration-300 max-lg:opacity-0 max-lg:pointer-events-none"> <div class="flex lg:sticky lg:top-8 flex-col gap-y-5 bg-white lg:shadow-md px-6 py-4 relative"> <button id="button-modal-filter-close" class="lg:hidden" type="button" aria-label="Luk filter"> <div class="flex justify-end"> ${renderComponent($$result, "IconClose", IconClose, { "class": "size-8 bg-gray-800 rounded-full p-1 text-white" })} </div> </button> <form id="form-filter" method="get" class="grid grid-cols-1 gap-y-6"> <div> <div class="flex items-center gap-x-2"> <label for="make">Bilmærke</label> <button id="clear-input-make" type="button" class="hidden"> ${renderComponent($$result, "IconReset", IconReset, { "class": "size-3 -mt-px" })} </button> </div> <div class="grid grid-cols-1"> <select name="make" id="make" class="appearance-none col-start-1 row-start-1"> <option value="all">Alle</option> ${allMakesModels.map((car) => renderTemplate`<option${addAttribute(car.make, "value")}>${car.make}</option>`)} </select> ${renderComponent($$result, "IconChevronDown", IconChevronDown, { "class": "icon-chevron-down" })} </div> </div> <div> <div class="flex items-center gap-x-2"> <label for="model">Model</label> <button id="clear-input-model" type="button" class="hidden"> ${renderComponent($$result, "IconReset", IconReset, { "class": "size-3 -mt-px" })} </button> </div> <div class="grid grid-cols-1"> <select name="model" id="model" class="appearance-none col-start-1 row-start-1"> <option value="all">Alle</option> </select> ${renderComponent($$result, "IconChevronDown", IconChevronDown, { "class": "icon-chevron-down" })} </div> </div> <div> <div class="flex items-center gap-x-2"> <label for="price">Pris</label> <button id="clear-input-price" type="button" class="hidden"> ${renderComponent($$result, "IconReset", IconReset, { "class": "size-3 -mt-px" })} </button> </div> <div class="grid grid-cols-1"> <select name="price" id="price" class="appearance-none col-start-1 row-start-1"> <option value="all">Alle</option> ${data.priceSteps.map((step, index) => {
    const nextStep = data.priceSteps[index + 1];
    if (index === 0) {
      return renderTemplate`<option${addAttribute(`0-${step}`, "value")}>Under ${getPrice(step)}</option>`;
    } else if (nextStep) {
      return renderTemplate`<option${addAttribute(`${step}-${nextStep}`, "value")}> ${getPrice(step)} – ${getPrice(nextStep)} </option>`;
    } else {
      return renderTemplate`<option${addAttribute(`${step}-`, "value")}>Over ${getPrice(step)}</option>`;
    }
  })} </select> ${renderComponent($$result, "IconChevronDown", IconChevronDown, { "class": "icon-chevron-down" })} </div> </div> <div> <div class="flex items-center gap-x-2"> <label for="color">Farve</label> <button id="clear-input-color" type="button" class="hidden"> ${renderComponent($$result, "IconReset", IconReset, { "class": "size-3 -mt-px" })} </button> </div> <div class="grid grid-cols-1"> <select name="color" id="color" class="appearance-none col-start-1 row-start-1"> <option value="all">Alle</option> ${data.colors.map((color) => renderTemplate`<option${addAttribute(color, "value")}>${color}</option>`)} </select> ${renderComponent($$result, "IconChevronDown", IconChevronDown, { "class": "icon-chevron-down" })} </div> </div> <div> <div class="flex items-center gap-x-2"> <label for="bodyType">Karrosseri</label> <button id="clear-input-bodyType" type="button" class="hidden"> ${renderComponent($$result, "IconReset", IconReset, { "class": "size-3 -mt-px" })} </button> </div> <div class="grid grid-cols-1"> <select name="bodyType" id="bodyType" class="appearance-none col-start-1 row-start-1"> <option value="all">Alle</option> ${bodyTypes.map((bodyType) => renderTemplate`<option${addAttribute(bodyType, "value")}>${bodyType}</option>`)} </select> ${renderComponent($$result, "IconChevronDown", IconChevronDown, { "class": "icon-chevron-down" })} </div> </div> <div> <div class="flex items-center gap-x-2"> <label for="fuelType">Drivmiddel</label> <button id="clear-input-fuelType" type="button" class="hidden"> ${renderComponent($$result, "IconReset", IconReset, { "class": "size-3 -mt-px" })} </button> </div> <div class="grid grid-cols-1"> <select name="fuelType" id="fuelType" class="appearance-none col-start-1 row-start-1"> <option value="all">Alle</option> ${fuelTypes.map((fuelType) => renderTemplate`<option${addAttribute(fuelType, "value")}>${fuelType}</option>`)} </select> ${renderComponent($$result, "IconChevronDown", IconChevronDown, { "class": "icon-chevron-down" })} </div> </div> <div> <div class="flex items-center gap-x-2"> <label for="transmission">Geartype</label> <button id="clear-input-transmission" type="button" class="hidden"> ${renderComponent($$result, "IconReset", IconReset, { "class": "size-3 -mt-px" })} </button> </div> <div class="grid grid-cols-1"> <select name="transmission" id="transmission" class="appearance-none col-start-1 row-start-1"> <option value="all">Alle</option> ${transmission.map((transmission2) => renderTemplate`<option${addAttribute(transmission2, "value")}>${transmission2}</option>`)} </select> ${renderComponent($$result, "IconChevronDown", IconChevronDown, { "class": "icon-chevron-down" })} </div> </div> <div> <div class="flex items-center gap-x-2"> <label for="condition">Stand</label> <button id="clear-input-condition" type="button" class="hidden"> ${renderComponent($$result, "IconReset", IconReset, { "class": "size-3 -mt-px" })} </button> </div> <div class="grid grid-cols-1"> <select name="condition" id="condition" class="appearance-none col-start-1 row-start-1"> <option value="all">Alle</option> ${conditions.map((condition) => renderTemplate`<option${addAttribute(condition, "value")}>${condition}</option>`)} </select> ${renderComponent($$result, "IconChevronDown", IconChevronDown, { "class": "icon-chevron-down" })} </div> </div> <div class="sticky bottom-0"> <button type="submit" class="button button-yellow w-full">
Søg <span id="filter-result-found" class="ml-1">(${data.count})</span></button> </div> </form> </div> </div> ${renderScript($$result, "/Users/leonardomiodrag/Siite Astro/1x2 Biler/1x2-hyperdrive/src/components/sidebars/SidebarFilters.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/leonardomiodrag/Siite Astro/1x2 Biler/1x2-hyperdrive/src/components/sidebars/SidebarFilters.astro", void 0);

const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Pagination;
  const { page, totalPages, searchParams } = Astro2.props;
  function generatePaginationRange(currentPage, totalPages2, delta = 2) {
    const range = [];
    for (let i = 1; i <= totalPages2; i++) {
      if (i === 1 || i === totalPages2 || i >= currentPage - delta && i <= currentPage + delta) {
        range.push(i);
      } else if (range[range.length - 1] !== "...") {
        range.push("...");
      }
    }
    return range;
  }
  const paginationRange = generatePaginationRange(page, totalPages);
  function generateUrl(pageNum) {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("page", pageNum.toString());
    return `/biler-til-salg?${newParams.toString()}`;
  }
  return renderTemplate`${maybeRenderHead()}<div class="mt-8 bg-white ring-1 ring-gray-100 py-4"> <nav class="flex items-center justify-between px-8 font-medium text-base"> <div class="flex w-0 flex-1"> ${page > 1 && renderTemplate`<a${addAttribute(generateUrl(page - 1), "href")} class="inline-flex items-center transition hover:lg:-translate-x-1 py-1 -my-1"> <svg class="mr-3 size-6" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon"> <path fill-rule="evenodd" d="M18 10a.75.75 0 0 1-.75.75H4.66l2.1 1.95a.75.75 0 1 1-1.02 1.1l-3.5-3.25a.75.75 0 0 1 0-1.1l3.5-3.25a.75.75 0 1 1 1.02 1.1l-2.1 1.95h12.59A.75.75 0 0 1 18 10Z" clip-rule="evenodd"></path> </svg>
Forrige
</a>`} </div> <div class="hidden md:flex text-lg gap-x-2"> ${paginationRange.map(
    (pageNumber) => pageNumber === "..." ? renderTemplate`<span class="inline-flex items-center px-4 py-1.5 text-gray-500">...</span>` : renderTemplate`<a${addAttribute(generateUrl(pageNumber), "href")}${addAttribute(`inline-flex items-center text-center justify-center size-10 leading-none transition rounded-full ${pageNumber === page ? "bg-[var(--color-brand-yellow)]" : "hover:bg-gray-100"}`, "class")}${addAttribute(pageNumber === page ? "page" : void 0, "aria-current")}> ${pageNumber} </a>`
  )} </div> <div class="flex w-0 flex-1 justify-end"> ${page < totalPages && renderTemplate`<a${addAttribute(generateUrl(page + 1), "href")} class="inline-flex items-center transition hover:lg:translate-x-1 py-1 -my-1">
Næste
<svg class="ml-3 size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon"> <path fill-rule="evenodd" d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z" clip-rule="evenodd"></path> </svg> </a>`} </div> </nav> </div>`;
}, "/Users/leonardomiodrag/Siite Astro/1x2 Biler/1x2-hyperdrive/src/components/Pagination.astro", void 0);

const $$SearchCars = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<form id="form-search"> <div> <label class="sr-only" for="search">Søg</label> <input type="search" name="search" placeholder="Søg…" id="search" class="bg-gray-200 max-lg:mt-0 lg:bg-transparent max-lg:py-3 px-4 lg:px-2 outline-none lg:text-xl lg:border-b-2 border-gray-300 rounded-none placeholder:text-gray-500 focus:outline-none focus-visible:border-gray-500"> </div> </form>`;
}, "/Users/leonardomiodrag/Siite Astro/1x2 Biler/1x2-hyperdrive/src/components/forms/SearchCars.astro", void 0);

const $$SortCars = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<form id="form-sort"> <div class="lg:shrink-0"> <div class="flex items-center gap-x-2"> <label class="sr-only" for="sort">Sortér</label> </div> <div class="grid grid-cols-1 max-lg:w-max ml-auto"> <select name="sort" id="sort" class="appearance-none max-lg:mt-0 col-start-1 bg-transparent max-lg:outline-none outline-gray-300 row-start-1 pr-10"> <option value="all">Sortér efter</option> <option value="mileage-desc">Km: Højest først</option> <option value="mileage-asc">Km: Lavest først</option> <option value="price-desc">Pris: Højest først</option> <option value="price-asc">Pris: Lavest først</option> <option value="year-desc">Årgang: Nyeste først</option> <option value="year-asc">Årgang: Ældste først</option> </select> ${renderComponent($$result, "IconChevronDown", IconChevronDown, { "class": "icon-chevron-down" })} </div> </div> </form>`;
}, "/Users/leonardomiodrag/Siite Astro/1x2 Biler/1x2-hyperdrive/src/components/forms/SortCars.astro", void 0);

const $$SearchSort = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="mb-4 flex flex-col lg:flex-row lg:items-center justify-between gap-x-4 max-lg:gap-y-4"> ${renderComponent($$result, "SearchCars", $$SearchCars, {})} <div class="max-lg:hidden"> ${renderComponent($$result, "SortCars", $$SortCars, {})} </div> </div> ${renderScript($$result, "/Users/leonardomiodrag/Siite Astro/1x2 Biler/1x2-hyperdrive/src/components/SearchSort.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/leonardomiodrag/Siite Astro/1x2 Biler/1x2-hyperdrive/src/components/SearchSort.astro", void 0);

const $$PresetBar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$PresetBar;
  const { params } = Astro2.props;
  if (!params) return;
  const allowedParams = [
    "make",
    "color",
    "price",
    "model",
    "condition",
    "fuelType",
    "transmission",
    "bodyType",
    "mileage",
    "year"
  ];
  const paramLabels = {
    make: "Bilmærke",
    color: "Farve",
    price: "Pris",
    model: "Model",
    condition: "Stand",
    fuelType: "Drivmiddel",
    transmission: "Geartype",
    bodyType: "Karrosseri",
    mileage: "Km",
    year: "Årgang"
  };
  const filteredParams = params.filter(([key]) => allowedParams.includes(key));
  return renderTemplate`${maybeRenderHead()}<div class="my-4 max-lg:overflow-x-scroll" style="scrollbar-width: none;"> <ul class="flex lg:flex-wrap gap-2 flex-nowrap"> ${filteredParams.map(([key, value]) => renderTemplate`<li class="rounded-full bg-white lg:bg-gray-800 text-gray-800 lg:text-white px-2.5 py-1 text-xs lg:text-sm flex items-center gap-x-1 lg:gap-x-2 max-lg:opacity-90"> <button type="button"${addAttribute(`preset-remove-${key}`, "class")}> <span class="sr-only">Fjern filter</span> ${renderComponent($$result, "IconClose", IconClose, { "class": "size-2.5 rounded-full bg-gray-800 lg:bg-white text-white lg:text-gray-800" })} </button> <span>${paramLabels[key] ?? key}:</span> <span class="font-bold">${value}</span> </li>`)} </ul> </div> ${renderScript($$result, "/Users/leonardomiodrag/Siite Astro/1x2 Biler/1x2-hyperdrive/src/components/PresetBar.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/leonardomiodrag/Siite Astro/1x2 Biler/1x2-hyperdrive/src/components/PresetBar.astro", void 0);

const IconSort = createSvgComponent({"meta":{"src":"/_astro/sort.KyE8cJ5K.svg","width":24,"height":24,"format":"svg"},"attributes":{"fill":"none","viewBox":"0 0 24 24","stroke-width":"1.5","stroke":"currentColor"},"children":"\n    <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5\" />\n"});

const $$SortCarsMobile = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<form id="form-sort-mobile" class="max-lg:shrink-0"> <div class="text-gray-800"> <label class="sr-only" for="sort">Sortér</label> <div class="grid grid-cols-1"> <select name="sort" id="sort-mobile" class="appearance-none col-start-1 w-8 focus:outline-none row-start-1 outline-none bg-transparent" aria-label="Sortér biler"> <option value="all">Sortér efter</option> <option value="mileage-desc">Km: Højest først</option> <option value="mileage-asc">Km: Lavest først</option> <option value="price-desc">Pris: Højest først</option> <option value="price-asc">Pris: Lavest først</option> <option value="year-desc">Årgang: Nyeste først</option> <option value="year-asc">Årgang: Ældste først</option> </select> ${renderComponent($$result, "IconSort", IconSort, { "class": "pointer-events-none text-white col-start-1 row-start-1 size-5 self-center justify-self-end" })} </div> </div> </form>`;
}, "/Users/leonardomiodrag/Siite Astro/1x2 Biler/1x2-hyperdrive/src/components/forms/SortCarsMobile.astro", void 0);

const IconFilter = createSvgComponent({"meta":{"src":"/_astro/filter.Cl707KQK.svg","width":20,"height":20,"format":"svg"},"attributes":{"viewBox":"0 0 20 20","fill":"currentColor"},"children":"\n    <path d=\"M10 3.75a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM17.25 4.5a.75.75 0 0 0 0-1.5h-5.5a.75.75 0 0 0 0 1.5h5.5ZM5 3.75a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 .75.75ZM4.25 17a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5h1.5ZM17.25 17a.75.75 0 0 0 0-1.5h-5.5a.75.75 0 0 0 0 1.5h5.5ZM9 10a.75.75 0 0 1-.75.75h-5.5a.75.75 0 0 1 0-1.5h5.5A.75.75 0 0 1 9 10ZM17.25 10.75a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5h1.5ZM14 10a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM10 16.25a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z\" />\n"});

const $$ButtonFilterMobile = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button id="button-modal-filter-open" type="button" class="-m-1 p-1 max-lg:shrink-0"> <span class="sr-only">Åbn filter</span> <div class="flex space-x-2 items-center"> ${renderComponent($$result, "IconFilter", IconFilter, { "class": "size-5" })} <span>Filter</span> </div> </button>`;
}, "/Users/leonardomiodrag/Siite Astro/1x2 Biler/1x2-hyperdrive/src/components/buttons/ButtonFilterMobile.astro", void 0);

const $$FilterBarMobile = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$FilterBarMobile;
  const { params } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Container", $$Container, { "class:list": "lg:hidden bg-gray-800 pt-0 pb-0" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="text-white w-full flex items-center justify-between py-2 gap-x-4"> ${renderComponent($$result2, "ButtonFilterMobile", $$ButtonFilterMobile, {})} <!-- Presets --> <div id="preset-bar-mobile" class="text-white grow overflow-x-auto text-center whitespace-nowrap relative" style="scrollbar-width: none; -webkit-overflow-scrolling: touch;"> ${renderComponent($$result2, "PresetBar", $$PresetBar, { "params": params })} <div class="absolute pointer-events-none inset-0"> <div class="bg-gradient-to-r from-transparent to-gray-800 w-8 h-full ml-auto"></div> </div> </div> <!-- Sort --> ${renderComponent($$result2, "SortCarsMobile", $$SortCarsMobile, {})} </div> ` })}`;
}, "/Users/leonardomiodrag/Siite Astro/1x2 Biler/1x2-hyperdrive/src/components/FilterBarMobile.astro", void 0);

const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const searchParamsValue = Astro2.url.searchParams;
  const searchParamsArray = Array.from(searchParamsValue);
  const allCars = await getFilteredCars({
    make: searchParamsValue.get("make") ?? void 0,
    model: searchParamsValue.get("model") ?? void 0,
    yearFrom: searchParamsValue.get("yearFrom") ?? void 0,
    yearTo: searchParamsValue.get("yearTo") ?? void 0,
    price: searchParamsValue.get("price") ?? void 0,
    mileageFrom: searchParamsValue.get("mileageFrom") ?? void 0,
    mileageTo: searchParamsValue.get("mileageTo") ?? void 0,
    fuelType: searchParamsValue.get("fuelType") ?? void 0,
    bodyType: searchParamsValue.get("bodyType") ?? void 0,
    transmission: searchParamsValue.get("transmission") ?? void 0,
    color: searchParamsValue.get("color") ?? void 0,
    condition: searchParamsValue.get("condition") ?? void 0,
    sort: searchParamsValue.get("sort") ?? void 0,
    search: searchParamsValue.get("search") ?? void 0
  });
  const makes = [...new Set(allCars.map((car) => car.data.general.make))].sort();
  const colors = [...new Set(allCars.map((car) => car.data.exterior.color))].sort();
  const count = allCars.length;
  const sideBarData = {
    makes,
    colors,
    count,
    priceSteps
  };
  const page = parseInt(searchParamsValue.get("page") || "1");
  const pageSize = defaultPaginationSize;
  const totalPages = Math.ceil(Array.isArray(allCars) ? allCars.length / pageSize : 0);
  const paginatedCars = Array.isArray(allCars) ? allCars.slice((page - 1) * pageSize, page * pageSize) : [];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Biler til salg", "pageTitle": `Biler til salg | ${siteName}`, "description": "Vi har altid et udvalg af brugte biler på lager – og kan skaffe den helt rigtige, hvis du ikke finder den her." }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, {}, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Container", $$Container, {}, { "default": async ($$result4) => renderTemplate` ${renderComponent($$result4, "Heading", $$Heading, { "class:list": "max-w-3xl" }, { "default": async ($$result5) => renderTemplate`   ${renderComponent($$result5, "Button", $$Button, { "href": "/kontakt-os", "class:list": "mt-6" }, { "default": async ($$result6) => renderTemplate`Kontakt os i dag` })} `, "heading-content": async ($$result5) => renderTemplate`${maybeRenderHead()}<p> <em>Vi har altid et udvalg af brugte biler på lager – og kan skaffe den helt
						rigtige, hvis du ikke finder den her.</em> </p>`, "heading-title": async ($$result5) => renderTemplate`<h1>Find din næste bil hos os</h1>` })} ` })} ` })} ${renderComponent($$result2, "Section", $$Section, { "class:list": "bg-gray-50 max-lg:max-w-svw max-lg:overflow-hidden" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Container", $$Container, { "class:list": "pt-0 max-lg:px-0 max-lg:max-w-full" }, { "default": async ($$result4) => renderTemplate` <div class="flex flex-col lg:flex-row"> ${renderComponent($$result4, "FilterBarMobile", $$FilterBarMobile, { "params": searchParamsArray })} ${renderComponent($$result4, "SidebarFilters", $$SidebarFilters, { "data": sideBarData })} <main class="lg:pl-16 grow"> <div class="lg:px-8"> ${renderComponent($$result4, "SearchSort", $$SearchSort, {})} <div class="max-lg:hidden"> ${renderComponent($$result4, "PresetBar", $$PresetBar, { "params": searchParamsArray })} </div> <ul class="grid grid-cols-1 lg:gap-16"> ${paginatedCars.length > 0 ? paginatedCars.map((car) => renderTemplate`${renderComponent($$result4, "CardCar", $$CardCar, { "car": car })}`) : renderTemplate`<li class="text-center text-gray-500">Ingen biler fundet</li>`} </ul> ${paginatedCars.length > 0 && totalPages > 1 && renderTemplate`${renderComponent($$result4, "Pagination", $$Pagination, { "page": page, "totalPages": totalPages, "searchParams": searchParamsValue })}`} </div> </main> </div> ` })} ` })} ` })} ${renderScript($$result, "/Users/leonardomiodrag/Siite Astro/1x2 Biler/1x2-hyperdrive/src/pages/biler-til-salg/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/leonardomiodrag/Siite Astro/1x2 Biler/1x2-hyperdrive/src/pages/biler-til-salg/index.astro", void 0);

const $$file = "/Users/leonardomiodrag/Siite Astro/1x2 Biler/1x2-hyperdrive/src/pages/biler-til-salg/index.astro";
const $$url = "/biler-til-salg";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
