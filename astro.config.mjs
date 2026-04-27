// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import playformInline from "@playform/inline";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	site: "https://1x2biler.dk",
	base: "/",
	integrations: [mdx(), playformInline({ Critters: true })],
	output: "hybrid",
	devToolbar: {
		enabled: false,
	},
	adapter: vercel(),
	vite: {
		plugins: [tailwindcss()],
	},
});
