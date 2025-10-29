<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import { cva, type VariantProps } from 'class-variance-authority';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	const buttonVariants = cva(
		'inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-semibold ring-offset-background cursor-pointer transition-all gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
		{
			variants: {
				variant: {
					default:
						'bg-primary text-primary-foreground border-2 border-border hover:translate-x-[var(--box-shadow-x)] hover:translate-y-[var(--box-shadow-y)] shadow hover:shadow-none',
					noShadow: 'bg-primary text-primary-foreground border-2 border-border',
					neutral:
						'bg-background text-foreground border-2 border-border hover:translate-x-[var(--box-shadow-x)] hover:translate-y-[var(--box-shadow-y)] shadow hover:shadow-none',
					reverse:
						'bg-primary text-primary-foreground border-2 border-border hover:translate-x-[var(--reverse-box-shadow-x)] hover:translate-y-[var(--reverse-box-shadow-y)] hover:shadow'
				},
				size: {
					default: 'h-12 px-4 py-2',
					sm: 'h-9 px-3',
					lg: 'h-14 px-8 text-lg',
					icon: 'h-12 w-12'
				}
			},
			defaultVariants: {
				variant: 'default',
				size: 'default'
			}
		}
	);

	type Props = HTMLButtonAttributes & VariantProps<typeof buttonVariants>;

	let { children, size, variant, class: classes, ...props }: Props = $props();
</script>

<button class={cn(buttonVariants({ variant, size, class: classes }))} {...props}>
	{@render children?.()}
</button>
