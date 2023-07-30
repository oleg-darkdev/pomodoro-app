<script>
	export let text,
		activeScreen,
		paused = false,
		running = false;
</script>

<button
	class:running
	style="animation-play-state: {paused ? 'paused' : 'running'};"
	on:click
	class={text === activeScreen ? 'active bg-pink-600' : 'bg-black'}
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="h-5 w-5"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
	>
		<slot />
	</svg>
	<span class="btn-nav-label">{text}</span>
</button>

<style>
	.running::before {
		content: '';
		position: absolute;
		background-color: white;
		bottom: 7px;
		width: 8px;
		height: 8px;
		border-radius: 50%;
		animation: move 1s ease infinite;
		animation-play-state: inherit;
	}

	@keyframes move {
		0% {
			transform: translateX(-6px);
		}
		50% {
			transform: translateX(6px);
		}
		100% {
			transform: translateX(-6px);
		}
	}
</style>
