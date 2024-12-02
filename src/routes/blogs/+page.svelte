<script lang="ts">
	import type { IBlog, ICategories } from '$lib/types/blogs.js';
	import Sidebar from './Sidebar.svelte';

	// let props = $props<{
	// 	data: IBlog[];
	// }>();

	// let newData = $derived<IBlog[]>(props.data.filter((el: IBlog) =>  el.categories.includes("Golang")))
	export let data;
	const getFilteredData = (name: ICategories): IBlog[] => {
		const r = data.blogs.filter((el: IBlog) => el.categories.includes(name));
		return r;
	};
	const getAllData = (): IBlog[] => {
		return data.blogs;
	};
</script>

<div class="flex h-full w-full items-center justify-center px-4 py-2">
	<div class="mb-2 grid max-w-[80%] grid-cols-4 gap-4">
		{#each getAllData() as item}
			<a href={`blogs/${item.slug}`}>
				<div class="bg-card">
					<img alt={item.title} src={item.banner} />
					<div class="p-2">
						<p class="cursor-pointer text-sm mb-2">{item.title}</p>
						<p class="cursor-pointer text-xs text-muted">{item.description.slice(0, 25)}</p>
					</div>
				</div>
			</a>
		{/each}
	</div>
</div>
