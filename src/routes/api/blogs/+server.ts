import type { IBlog } from '$lib/types/blogs';
import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	const posts = await getBlogs();
	return json(posts)
};

async function getBlogs() {
	let blogs: IBlog[] = [];

	const paths = import.meta.glob('/src/blogs/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<IBlog, 'slug'>;

			const post = { ...metadata, slug } satisfies IBlog;

			post.published && blogs.push(post as IBlog);
		}
	}

	blogs = blogs.sort(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	);
	return blogs;
}
