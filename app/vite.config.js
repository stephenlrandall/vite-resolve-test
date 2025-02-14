import path from 'path';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default defineConfig({
	plugins: [
		sveltekit(),
		nodeResolve({ modulePaths: [path.resolve('./node_modules')] })
	],
	resolve: {
		alias: {
			"$external": path.resolve("../external")
		}
	}
});
