import { g as getCollection } from './_astro_content_HO2sQOZv.mjs';
import * as z from 'zod/v4';

const prerender = false;
const searchParamsSchema = z.object({
  make: z.string().optional(),
  model: z.string().optional(),
  yearFrom: z.string().regex(/^\d{4}$/).optional(),
  yearTo: z.string().regex(/^\d{4}$/).optional(),
  price: z.string().optional(),
  mileageFrom: z.string().optional(),
  mileageTo: z.string().optional(),
  fuelType: z.string().optional(),
  bodyType: z.string().optional(),
  transmission: z.string().optional(),
  color: z.string().optional(),
  condition: z.string().optional(),
  sort: z.enum([
    "mileage-desc",
    "mileage-asc",
    "price-desc",
    "price-asc",
    "year-desc",
    "year-asc"
  ]).optional(),
  search: z.string().optional()
});
const GET = async ({ request }) => {
  const start = performance.now();
  const url = new URL(request.url);
  const afterUrl = performance.now();
  const searchParams = Object.fromEntries(url.searchParams.entries());
  const afterSearchParams = performance.now();
  const result = searchParamsSchema.safeParse(searchParams);
  const afterValidation = performance.now();
  if (!result.success) {
    return new Response(JSON.stringify({ error: "Invalid search parameters" }), {
      status: 400,
      headers: { "content-type": "application/json" }
    });
  }
  const {
    make,
    model,
    yearFrom,
    yearTo,
    price,
    mileageFrom,
    mileageTo,
    fuelType,
    bodyType,
    transmission,
    color,
    condition,
    sort,
    search
  } = result.data;
  const filters = [];
  const afterParsing = performance.now();
  if (make && make !== "all") {
    filters.push((data) => data.general.make === make);
  }
  const afterMake = performance.now();
  if (model && model !== "all") {
    if (make !== "all") {
      filters.push((data) => data.general.model === model);
    } else {
      return new Response(JSON.stringify({ error: "Please provide a make" }), {
        status: 400,
        headers: { "content-type": "application/json" }
      });
    }
  }
  const afterModel = performance.now();
  if (yearFrom) {
    filters.push((data) => data.history.year >= Number.parseInt(yearFrom));
  }
  if (yearTo) {
    filters.push((data) => data.history.year <= Number.parseInt(yearTo));
  }
  if (price && price !== "all") {
    const [minPrice, maxPrice] = price.split("-").map(Number);
    filters.push((data) => {
      const regularPrice = data.general.price;
      const salePrice = data.general.salePrice;
      if (maxPrice) {
        return regularPrice >= minPrice && regularPrice <= maxPrice || salePrice !== void 0 && salePrice >= minPrice && salePrice <= maxPrice;
      }
      return regularPrice >= minPrice || salePrice !== void 0 && salePrice >= minPrice;
    });
  }
  const afterPrice = performance.now();
  if (mileageFrom) {
    filters.push((data) => data.history.mileage >= Number.parseInt(mileageFrom));
  }
  if (mileageTo) {
    filters.push((data) => data.history.mileage <= Number.parseInt(mileageTo));
  }
  if (fuelType && fuelType !== "all") {
    filters.push((data) => data.efficiency.fuelType === fuelType);
  }
  if (bodyType && bodyType !== "all") {
    filters.push((data) => data.general.bodyType === bodyType);
  }
  if (transmission && transmission !== "all") {
    filters.push((data) => data.technical.transmission === transmission);
  }
  if (color && color !== "all") {
    filters.push((data) => data.exterior.color === color);
  }
  if (condition && condition !== "all") {
    filters.push((data) => data.general.condition === condition);
  }
  const afterFilters = performance.now();
  if (search) {
    const searchQueries = search.toLowerCase().replace(/[^a-zA-Z0-9\s]/g, "").split(" ");
    filters.push((data) => {
      const searchableFields = [
        data.general.make,
        data.general.model,
        data.general.bodyType,
        data.exterior.color,
        data.technical.transmission,
        data.history.year.toString(),
        // Cast year to string for search
        data.general.condition
      ];
      return searchQueries.every(
        (query) => searchableFields.some((field) => field?.toLowerCase().includes(query) ?? false)
      );
    });
  }
  const afterSearch = performance.now();
  const allCars = await getCollection("cars", ({ data }) => {
    return filters.every((filter) => filter(data));
  });
  const afterGetCollection = performance.now();
  if (sort) {
    const order = sort.endsWith("-asc") ? 1 : -1;
    allCars.sort((a, b) => {
      let aValue;
      let bValue;
      switch (sort) {
        case "price-asc":
        case "price-desc":
          aValue = a.data.general.salePrice ? a.data.general.salePrice : a.data.general.price;
          bValue = b.data.general.salePrice ? b.data.general.salePrice : b.data.general.price;
          break;
        case "mileage-asc":
        case "mileage-desc":
          aValue = a.data.history.mileage;
          bValue = b.data.history.mileage;
          break;
        case "year-asc":
        case "year-desc":
          aValue = a.data.history.year;
          bValue = b.data.history.year;
          break;
      }
      if (aValue < bValue) return -1 * order;
      if (aValue > bValue) return 1 * order;
      return 0;
    });
  }
  const afterSort = performance.now();
  if (!allCars || allCars.length === 0) {
    return new Response(JSON.stringify({ error: "No cars found" }), {
      status: 404,
      headers: { "content-type": "application/json" }
    });
  }
  const performanceResults = {
    "Total time": afterSort - start,
    "URL Parsing": afterUrl - start,
    "Search Parameters Parsing": afterSearchParams - afterUrl,
    Validation: afterValidation - afterSearchParams,
    Parsing: afterParsing - afterValidation,
    Make: afterMake - afterParsing,
    Model: afterModel - afterMake,
    Price: afterPrice - afterModel,
    Filters: afterFilters - afterPrice,
    Search: afterSearch - afterFilters,
    "Get Collection": afterGetCollection - afterSearch,
    Sort: afterSort - afterGetCollection
  };
  return new Response(
    JSON.stringify({
      performance: performanceResults,
      allCars
    }),
    {
      status: 200,
      headers: { "content-type": "application/json" }
    }
  );
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
