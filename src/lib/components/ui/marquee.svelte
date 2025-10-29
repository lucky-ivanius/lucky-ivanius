<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet<[]> } = $props();
</script>

<div
	class="border-border text-foreground relative flex w-full overflow-x-hidden border-t-2 border-b-2 bg-white"
>
	<div class="marquee py-8 whitespace-nowrap">
		{@render children?.()}
	</div>

	<div class="marquee2 absolute top-0 py-8 whitespace-nowrap">
		{@render children?.()}
	</div>
</div>

<style>
	.marquee {
		animation: marquee 30s linear infinite;
	}

	.marquee2 {
		animation: marquee2 30s linear infinite;
	}

	@keyframes marquee {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-100%);
		}
	}

	@keyframes marquee2 {
		0% {
			transform: translateX(100%);
		}
		100% {
			transform: translateX(0);
		}
	}
</style>
