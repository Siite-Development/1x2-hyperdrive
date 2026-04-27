import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

// Body types include both English and Danish-specific categories used by 1x2 Biler.
export const bodyTypes = [
	"SUV",
	"Sedan",
	"Hatchback",
	"Coupe",
	"Convertible",
	"Pickup",
	"Stationcar",
	"Personvogn",
	"Mikro",
] as const;

export const fuelTypes = ["Benzin", "Diesel", "Hybrid", "El", "Plug-in Hybrid", "CNG"] as const;

export const conditions = ["Ny", "Brugt", "Demobil"] as const;

export const transmission = ["Automatgear", "Manuelt gear", "CVT", "Dual-Clutch"] as const;

const cars = defineCollection({
	loader: glob({ pattern: ["*.mdx", "!example.mdx"], base: "./src/content/cars" }),
	schema: ({ image }) =>
		z.object({
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
				drivetrain: z
					.enum(["Forhjulstræk", "Baghjulstræk", "Firehjulstræk", "4 hjul"])
					.optional(),
				doors: z.number().int().positive(),
				seatingCapacity: z.number().int().positive(),
				condition: z.enum(conditions).optional(),
				availability: z.enum(["in-stock", "reserved", "sold", "coming-soon"]).default("in-stock"),
				greenTax: z.number().nonnegative().optional(),
				firstRegistration: z.string().optional(),
				octane: z.string().optional(),
			}),
			history: z.object({
				mileage: z.number().nonnegative(),
				year: z.number().int().min(1886),
				previousOwners: z.number().int().nonnegative().optional(),
				accidentHistory: z.enum(["Nej", "Ja - mindre skader", "Ja - større reparation"]).optional(),
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
				tankSize: z.number().positive().optional(),
			}),
			efficiency: z.object({
				fuelType: z.enum(fuelTypes),
				fuelEfficiencyMPG: z.number().positive().optional(),
				fuelEfficiencyLPer100KM: z.number().positive().optional(),
				fuelEfficiencyKMPerL: z.number().positive().optional(),
				emissionsCO2: z.string().optional(),
				emissionsRating: z.string().optional(),
			}),
			options: z.array(z.string()).optional(),
			security: z
				.object({
					alarm: z.boolean().optional(),
					immobilizer: z.boolean().optional(),
					airbags: z.number().int().positive().optional(),
					abs: z.boolean().optional(),
					esp: z.boolean().optional(),
					tireCondition: z.enum(["Nye", "Gode", "Skal udskiftes"]).optional(),
					safetyRating: z.string().optional(),
				})
				.optional(),
			exterior: z.object({
				color: z.string(),
				paintType: z.enum(["Metallak", "Perlemorslak", "Mat"]).optional(),
				wheelSize: z.number().positive().optional(),
				wheelType: z.enum(["Alufælge", "Stål", "Carbon"]).optional(),
				height: z.number().positive().optional(),
				length: z.number().positive().optional(),
				width: z.number().positive().optional(),
				loadCapacity: z.number().positive().optional(),
			}),
			interior: z
				.object({
					materialSeats: z.string().optional(),
					heatedSeats: z.boolean().optional(),
					ventilatedSeats: z.boolean().optional(),
				})
				.optional(),
			misc: z
				.object({
					vin: z.string().optional(),
					registrationStatus: z
						.enum(["Indregistreret", "Uindregistreret", "Indregistrering afventes"])
						.optional(),
					warranty: z.string().optional(),
					dealerNotes: z.string().optional(),
					hidden: z.boolean().optional().default(false),
					loanWidget: z.boolean().optional().default(false),
					featured: z.boolean().optional().default(false),
				})
				.optional(),
		}),
});

export const collections = { cars };
