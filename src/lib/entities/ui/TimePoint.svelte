<script>
	import { crossfade } from 'svelte/transition';
	import { flip } from 'svelte/animate';

	const [send, receive] = crossfade({});

	const over = (ev, index) => {
		ev.preventDefault();

		draggingOverIndex = index;
	};

	const drop = (ev, index) => {
		ev.preventDefault();

		timers.sort(draggingIndex, index);
		dragging = false;
		draggingItem.set();

		draggingIndex = null;
	};

	export let draggingOverIndex, dragging, draggingIndex, index;
</script>

<div
	class:dragging={dragging && draggingIndex === index}
	class:hovering={dragging && draggingIndex !== index && draggingOverIndex === index}
	class="list-item"
	data-index={index}
	on:drop={(ev) => {
		drop(ev, index);
	}}
	on:dragover={(ev) => {
		over(ev, index);
	}}
	on:dragexit={(ev) => {
		draggingOverIndex = null;
	}}
	in:receive|local={{ key: index }}
	out:send|local={{ key: index }}
>
	<!-- animate:flip={{
		duration: (d) => Math.sqrt(d * 360)
	}} -->
	<div>
		<slot />
	</div>
</div>

<style>
	.hovering::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 4px;
		border: 2px dotted var(--accent-color);
	}

	.dragging {
		opacity: 0.4;
	}
</style>
