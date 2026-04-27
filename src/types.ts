import type { CollectionEntry } from "astro:content";
import type { colorClasses } from "./components/CardGridAlt.astro";
import type { pillColors } from "./components/Pill.astro";

export type Car = CollectionEntry<"cars">;

// Components
export interface ClassNameProps {
	class?: string;
}

export interface ButtonProps extends ClassNameProps {
	color?: string;
	href?: string;
	newtab?: boolean;
	As?: "a" | "button";
	type?: "button" | "submit" | "reset";
}

export interface CardGridAltProps {
	title: string;
	description: string;
	icon: string;
	href?: string;
	color: keyof typeof colorClasses;
}

export interface ContainerProps extends ClassNameProps {
	contain?: boolean;
}

export interface FilterBarMobileProps {
	params: [string, string][];
}

export interface HeroProps {
	invert?: boolean;
}

export interface PaginationProps {
	page: number;
	totalPages: number;
	searchParams: URLSearchParams;
}

export interface PillProps {
	color?: keyof typeof pillColors;
	title: string;
}

export interface PresetBarProps {
	params: [string, string][];
}

export interface SectionProps extends ClassNameProps {
	id?: string;
}

export interface ShowCarsProps {
	recent?: boolean;
	featured?: boolean;
	slugs?: string[];
	ui?: "list" | "grid";
}

export interface LoanCalculatorProps {
	price: number;
}

export interface CardPriceProps {
	data: {
		price: number;
		salePrice?: number;
	};
}

export interface PriceProps {
	properties: {
		price: number;
		salePrice?: number;
	};
}

export interface SliderProps {
	image: ImageMetadata;
	alt: string;
	gallery: { image: ImageMetadata; alt: string }[];
	videoTour?: string;
}

export interface WidgetLoanProps {
	price: number;
}

// Menus
export interface MainMenuItem {
	id: string;
	label: string;
	url?: string;
	submenu?: MainMenuItem[];
	isExternal?: boolean;
	icon?: string;
}

export interface MenuNavigation {
	prettyName: string;
	items: {
		name: string;
		url: string;
		isExternal?: boolean;
	}[];
}
