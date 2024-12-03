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
	<div class="h-ful flex w-full max-w-full py-5 md:max-w-[80%]">
		<div class="hidden w-[200px] flex-col items-center justify-center md:flex">
			<hgroup class="flex flex-col gap-y-4 space-y-4">
				<p class="text-sm">Published at {formatDate(data.meta.date)}</p>
				<div>
					{#each data.meta.categories as category}
						<span class="surface-4 bg-primary mx-2 rounded-full px-2 py-1 text-xs"
							>&num;{category}</span
						>
					{/each}
				</div>
			</hgroup>
		</div>

		<div class="no-scrollbar mx-auto h-screen w-full overflow-x-clip overflow-y-scroll md:w-[70%]">
			<MarkDown>
				<data.content />
			</MarkDown>
		</div>
	</div>
</div>
