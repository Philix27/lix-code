<script lang="ts">
	import { formatDate } from '$lib/date.js';
	import MarkDown from '../../../components/Markdown.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<div class="flex min-h-screen w-full justify-center">
	<div class="h-ful flex w-full max-w-[80%] py-5">
		<div class="flex flex-col items-center justify-center w-[200px]">
			<hgroup class="flex flex-col gap-y-4 space-y-4">
				<p class="text-sm">Published at {formatDate(data.meta.date)}</p>
				<div>
					{#each data.meta.categories as category}
						<span class="surface-4 mx-2 rounded-full bg-primary px-2 py-1 text-xs">&num;{category}</span>
					{/each}
				</div>
			</hgroup>
		</div>

		<div class="mx-auto overflow-y-scroll h-screen no-scrollbar w-[70%]">
			<MarkDown>
				<data.content />
			</MarkDown>
		</div>
	</div>
</div>
