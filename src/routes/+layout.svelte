<script lang="ts">
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
	let { children } = $props();
</script>

<div>
	<Navbar />
	{@render children()}
</div>
