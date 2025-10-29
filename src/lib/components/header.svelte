<script lang="ts">
	import { page } from '$app/stores';

	import Button from './ui/button.svelte';

	const items = [
		{
			label: 'Home',
			href: '#home'
		},
		{
			label: 'Skills',
			href: '#skills'
		},
		{
			label: 'Experiences',
			href: '#experiences'
		}
	];
</script>

<header class="fixed top-0 right-0 left-0 z-50 mt-4 w-full">
	<div
		class="border-border bg-primary container mx-auto flex h-14 items-center justify-between border-4 px-6 py-10 shadow"
	>
		<a
			class="text-foreground -rotate-1 text-4xl font-black transition-transform hover:rotate-0"
			href="#home">Lucky Ivanius</a
		>
		<nav class="flex items-center space-x-10 font-medium">
			{#each items as item}
				<a
					href={item.href}
					class="text-foreground text-xl font-semibold transition-transform hover:translate-0.5"
					class:text-foreground={$page.url.hash === item.href}
				>
					{item.label}
				</a>
			{/each}
			<div class="flex space-x-4">
				<Button variant="neutral">Get in touch!</Button>
			</div>
		</nav>
	</div>
</header>
