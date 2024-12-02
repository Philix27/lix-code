import type { IBlog } from '$lib/types/blogs.js';

export async function load({ fetch }) {
	const res = await fetch('../api/blogs');
	const blogs: IBlog[] = await res.json();
	return { blogs };
}
