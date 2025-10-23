import tailwindcss from "@tailwindcss/vite";
// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon'
import sitemap from '@astrojs/sitemap'
import compress from "@playform/compress";
import vercel from '@astrojs/vercel'

// https://astro.build/config
export default defineConfig({
	// Add your site URL here
	// site: "https://stratus.cosmicthemes.com", 
	integrations: [
		icon({
			include: {
				tabler: [
					"bulb",
					"alert-triangle",
					"flame",
					"info-circle",
					"arrow-narrow-left",
					"arrow-narrow-right",
					"menu-2",
					"x",
					"chevron-down",
					"category",
					"calendar-event",
				]
			}
		}),
		sitemap(),
		compress({
			HTML: true,
			JavaScript: true,
			CSS: false,
			Image: false, // astro:assets handles this. Enabling this can dramatically increase build times
			SVG: false, // astro-icon handles this
		}),
	],
	vite: {
		plugins: [tailwindcss()],
		build: {
			assetsInlineLimit: 0
		},
		server: {
			allowedHosts: "98be4e96fd74.ngrok-free.app"
		}
	},
	adapter: vercel({
		webAnalytics: {
			enabled: true,
		},
		imageService: false
	}),
});
