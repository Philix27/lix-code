<script lang="ts">
	import Sidebar from './Sidebar.svelte';
	import type { IBlog } from '$lib/types/blogs';

	export let data;
	// export const prerender = true;
</script>

<div class="no-scrollbar relative h-screen min-h-screen overflow-y-scroll">
	<slot />
</div>
