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
				manualChunks: {
					vendor: ["react", "react-dom"],
					three: ["three", "@react-three/fiber", "@react-three/drei"],
				},
			},
		},
		chunkSizeWarningLimit: 1000,
	},
});
