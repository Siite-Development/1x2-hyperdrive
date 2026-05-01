import { g as getCollection } from './_astro_content_BFC59NXG.mjs';

const siteLang = "da-DK";
const siteCurrency = "DKK";
const siteName = "1x2 Bilhus";
const siteSlogan = "Biler for enhver smag siden 1984";
const themeColor = "#FFFF05";
const interestRate = 6.5;
const defaultPaginationSize = 12;
const priceSteps = [5e4, 1e5, 15e4, 2e5, 25e4, 3e5];
const phone = {
  href: "tel:+4557674717",
  label: "+45 57 67 47 17"
};
const email = {
  href: "mailto:info@1x2biler.dk",
  label: "info@1x2biler.dk"
};
const address = {
  street: "Industrivej 16",
  city: "Herlufmagle",
  zip: "4160"};
const cvr = "35649980";
const socialMedia = {
  facebook: {
    url: "https://www.facebook.com/1x2Biler",
    label: "Facebook",
    icon: "facebook"
  },
  instagram: {
    url: "https://www.instagram.com/1x2biler/",
    label: "Instagram",
    icon: "instagram"
  }
};
const externalLinks = {
  oscarRental: "https://hejoscar.dk/afdelinger/biludlejning-herlufmagle",
  oscarRentalShort: "https://hejoscar.dk/afdelinger/herlufmagle"
};

function getMileage(mileage) {
  return mileage.toLocaleString(siteLang, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
}
function getMileageUnit() {
  return "km";
}
function getPrice(price) {
  return new Intl.NumberFormat(siteLang, {
    style: "currency",
    currency: siteCurrency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
}
async function getMakeModelSet() {
  const allCars = await getCollection("cars", ({ data }) => {
    return data.misc?.hidden !== true;
  });
  const makesWithModels = allCars.reduce((acc, car) => {
    const make = car.data.general.make;
    const model = car.data.general.model;
    if (!acc[make]) {
      acc[make] = /* @__PURE__ */ new Set();
    }
    acc[make].add(model);
    return acc;
  }, {});
  const result = Object.entries(makesWithModels).map(([make, models]) => ({
    make,
    models: Array.from(models)
  }));
  return result;
}

export { socialMedia as a, email as b, address as c, cvr as d, externalLinks as e, siteSlogan as f, getPrice as g, siteLang as h, interestRate as i, getMileage as j, getMileageUnit as k, getMakeModelSet as l, defaultPaginationSize as m, priceSteps as n, phone as p, siteName as s, themeColor as t };
