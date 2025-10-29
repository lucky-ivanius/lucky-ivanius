<script lang="ts">
	import Header from '$lib/components/header.svelte';

	let { children } = $props();
	import '../app.css';
</script>

<div class="min-h-screen">
	<Header />
	{@render children()}
</div>
