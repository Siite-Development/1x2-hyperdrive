import { g as getCollection } from './_astro_content_BlsUEsru.mjs';

async function getFilteredCars(params) {
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
  } = params;
  const filters = [];
  if (make && make !== "all") {
    filters.push((data) => data.general.make === make);
  }
  if (model && model !== "all") {
    filters.push((data) => data.general.model === model);
  }
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
        data.general.condition
      ];
      return searchQueries.every(
        (query) => searchableFields.some((field) => field?.toLowerCase().includes(query) ?? false)
      );
    });
  }
  const allCars = await getCollection("cars", ({ data }) => {
    return filters.every((filter) => filter(data));
  });
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
  return allCars;
}

export { getFilteredCars as g };
