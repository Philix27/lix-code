<script lang="ts">
	import Sidebar from './Sidebar.svelte';
	import type { IBlog } from '$lib/types/blogs';

	export let data;
	export const prerender = true;
</script>

<div class="flex">
	<!-- <Sidebar data={data.content as IBlog[]} /> -->
	<slot />
</div>
