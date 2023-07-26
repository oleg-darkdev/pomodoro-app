<script>
	import '../app.css';
	// import 'aos/dist/aos.css';
	// import AOS from 'aos';
	// import { onMount } from 'svelte';
	// onMount(() => {
	// 	AOS.init();
	// });
</script>

<main class="">
	<slot />
</main>

<style>

	:global(.list-item) {
		border-top: 1px solid var(--separator-color);
		position: relative;
		transition: 0.15s linear;
	}



	/* CSS Mini Reset */


	:root {
		--accent-color: #cb2a37;
		--separator-color: rgba(255, 255, 255, 0.08);
		--grey-color: #808080;
		--text-color: #fff;

		--background-color: #0a0a0a;
	}

	@media (prefers-color-scheme: light) {
		:root {
			--separator-color: rgba(0, 0, 0, 0.2);
			--text-color: #000;
			--background-color: #dfdfdf;
		}
	}


	::-webkit-scrollbar {
		width: 10px;
	}

	::-webkit-scrollbar-track {
		background-color: var(--grey-color);
		opacity: 0.4;
	}

	::-webkit-scrollbar-thumb {
		background-color: var(--background-color);
		opacity: 0.6;
		transition: 0.15s linear;
	}

	::-webkit-scrollbar-thumb:hover,
	::-webkit-scrollbar-thumb:active {
		opacity: 0.8;
	}


	:global(.blink) {
		animation: blinker 2s ease infinite;
	}

	@keyframes blinker {
		50% {
			opacity: 0;
		}
	}

	:global(span) {
		display: contents;
	}
</style>
