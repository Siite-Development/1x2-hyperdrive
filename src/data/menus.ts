import type { MainMenuItem, MenuNavigation } from "~/types";
import { externalLinks } from "~/data/config";

export const menuMain: MainMenuItem[] = [
	{
		id: "home",
		label: "Forside",
		url: "/",
	},
	{
		id: "cars",
		label: "Biler",
		url: "/biler-til-salg",
	},
	{
		id: "finansiering",
		label: "Finansiering",
		url: "/finansiering",
		submenu: [
			{ id: "finansiering", label: "Finansiering", url: "/finansiering" },
			{ id: "accept-auto", label: "Accept Auto", url: "/accept-auto" },
			{ id: "cargarantie", label: "CarGarantie", url: "/cargarantie" },
		],
	},
	{
		id: "about",
		label: "Om os",
		url: "/om-os",
	},
	{
		id: "contact",
		label: "Kontakt os",
		url: "/kontakt-os",
	},
];

// Footer "Genveje" (shortcuts) column
export const menuShortcuts: MenuNavigation = {
	prettyName: "Genveje",
	items: [
		{ name: "Biler", url: "/biler-til-salg" },
		{ name: "Finansiering", url: "/finansiering" },
		{ name: "Om os", url: "/om-os" },
		{ name: "Kontakt os", url: "/kontakt-os" },
		{ name: "Oscar Biludlejning", url: externalLinks.oscarRentalShort, isExternal: true },
	],
};

// Footer "Kontaktinfo" column is rendered inline from config (phone/email/address),
// so we don't model it as a menu.

export const menuLegal: MenuNavigation = {
	prettyName: "",
	items: [{ name: "Privatlivspolitik", url: "/privatlivspolitik" }],
};
