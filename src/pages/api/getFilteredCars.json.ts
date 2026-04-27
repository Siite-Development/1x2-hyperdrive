export const prerender = false;

import type { APIRoute } from "astro";
import { z } from "astro/zod";
import { getFilteredCars } from "~/utils/carFilters";

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
	sort: z
		.enum([
			"mileage-desc",
			"mileage-asc",
			"price-desc",
			"price-asc",
			"year-desc",
			"year-asc",
		])
		.optional(),
	search: z.string().optional(),
});

export const GET: APIRoute = async ({ request }) => {
	const url = new URL(request.url);
	const searchParams = Object.fromEntries(url.searchParams.entries());

	const result = searchParamsSchema.safeParse(searchParams);

	if (!result.success) {
		return new Response(JSON.stringify({ error: "Invalid search parameters" }), {
			status: 400,
			headers: { "content-type": "application/json" },
		});
	}

	const { make, model, yearFrom, yearTo, price, mileageFrom, mileageTo, fuelType, bodyType, transmission, color, condition, sort, search } = result.data;

	if (model && model !== "all" && (!make || make === "all")) {
		return new Response(JSON.stringify({ error: "Please provide a make" }), {
			status: 400,
			headers: { "content-type": "application/json" },
		});
	}

	const allCars = await getFilteredCars({
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
		search,
	});

	if (!allCars || allCars.length === 0) {
		return new Response(JSON.stringify({ error: "No cars found" }), {
			status: 404,
			headers: { "content-type": "application/json" },
		});
	}

	return new Response(JSON.stringify({ allCars }), {
		status: 200,
		headers: { "content-type": "application/json" },
	});
};
