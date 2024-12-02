import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		console.log('Before');
		const post = await import(`../../../blogs/${params.slug}.md`);
		console.log('Inner', post);
		return {
			content: post.default,
			meta: post.metadata
		};
	} catch (e) {
		error(404, `Could not find ${params.slug}`);
	}
}
