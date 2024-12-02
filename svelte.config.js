import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

import { escapeSvelte } from 'mdsvex';
import { createHighlighter } from 'shiki';
import remarkToc from 'remark-toc';
// import remarkUbwrapImages from 'remark-unwrap-images';
import rehypeSlug from 'rehype-slug';
import remarkEmbedder from '@remark-embedder/core';

const theme = 'github-dark';
const highlighter = await createHighlighter({
	themes: [theme],
	langs: ['javascript', 'typescript', "rust", "sh", "go", "solidity"]
});

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md', '.svx'],
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme }));
			return `{@html \`${html}\` }`;
		}
	},
	remarkPlugins: [[remarkToc, { tight: true }], remarkEmbedder],
	// remarkPlugins: [remarkUbwrapImages, [remarkToc, { tight: true }]],
	rehypePlugins: [rehypeSlug]
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter()
	},

	extensions: ['.svelte', '.svx', '.md']
};

export default config;
