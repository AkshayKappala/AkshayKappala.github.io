import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	base: "/",
	plugins: [react(), tailwindcss()],
	server: {
		host: "0.0.0.0",
		port: 5173,
	},
	build: {
		rollupOptions: {
			output: {
				manualChunks: (id) => {
					if (id.includes("node_modules")) {
						if (id.includes("react") || id.includes("react-dom")) {
							return "vendor";
						}
						if (
							id.includes("three") ||
							id.includes("@react-three") ||
							id.includes("maath")
						) {
							return "three";
						}
						if (id.includes("motion") || id.includes("framer-motion")) {
							return "motion";
						}
						if (id.includes("cobe")) {
							return "cobe";
						}
						if (id.includes("@emailjs")) {
							return "emailjs";
						}
						return "vendor-other";
					}
				},
			},
		},
		chunkSizeWarningLimit: 1000,
	},
});
