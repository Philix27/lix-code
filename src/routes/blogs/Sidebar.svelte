<script lang="ts">
	import type { IBlog, ICategories } from '$lib/types/blogs.js';

	let props = $props<{
		data: IBlog[];
	}>();

	// let newData = $derived<IBlog[]>(props.data.filter((el: IBlog) =>  el.categories.includes("Golang")))
	const getData = (name: ICategories): IBlog[] => {
		const r = props.data.filter((el: IBlog) => el.categories.includes(name));
		return r;
	};
</script>

<div class="h-screen w-[300px] bg-slate-700">
	<div class="h-full w-[300px] border-r border-slate-700 px-4 py-2">
		<div>
			<div class="mb-2">
				<div class="">
					<h2 class="text-white">Golang</h2>
				</div>
				{#each getData('Golang') as item}
					<div class="ml-2">
						<p class="cursor-pointer text-sm text-gray-400 hover:text-white">{item.title}</p>
					</div>
				{/each}
			</div>
			<div class="mb-2">
				<div class="">
					<h2 class="text-white">Solidity</h2>
				</div>
				{#each getData('Solidity') as item}
					<div class="ml-2">
						<p class="cursor-pointer text-sm text-gray-400 hover:text-white">{item.title}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
