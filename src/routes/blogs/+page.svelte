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

<div class="h-full w-full px-4 py-2 flex items-center justify-center">
	<div class="mb-2 grid grid-cols-4 max-w-[80%] gap-4">
		{#each getAllData() as item}
			<a href={`blogs/${item.slug}`}>
				<div class="bg-card">
				<img alt={item.title} src={item.banner} />
				<p class="cursor-pointer text-sm text-gray-400 hover:text-white">{item.title}</p>
				<p class="cursor-pointer text-sm text-gray-400 hover:text-white">{item.description.slice(0, 25)}</p>
			</div>
			</a>
		{/each}
	</div>
</div>
