<script lang="ts">
	import Home from '$lib/components/home.svelte';
	import Skills from '$lib/components/skills.svelte';
</script>

<svelte:head>
	<title>Lucky Ivanius - Software Engineer</title>
	<meta
		name="description"
		content="Self-taught software engineer specializing in back-end development and building scalable systems."
	/>
</svelte:head>

<main
	class="bg-white bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px] px-5 pt-[88px] dark:bg-[#272933]"
>
	<Home />
	<Skills />
	<div class="h-[100dvh]"></div>
</main>
