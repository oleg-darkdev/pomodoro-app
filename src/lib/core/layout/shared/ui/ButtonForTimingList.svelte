<script>
	export let disable = false;


	export let running = false;
	export let paused = false;

	export let buttonFunction = (value) => {
		// console.log('Button clicked');
	};
</script>

<button
	title="Delete time"
	class:running
	class="pointer rounded-2xl border-2 border-pink-600  py-2 px-4 text-pink-600 hover:bg-pink-600 hover:text-black"
	style="animation-play-state: {paused ? 'paused' : 'running'};"
	on:click={buttonFunction}
	disabled={disable}
>
	<slot name="icon">
		<svg
			class="fill-pink-600 hover:fill-black "
			width="22"
			height="22"
			viewBox="0 0 22 22"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M18.3412 9.84166C19.2196 10.3565 19.2196 11.6435 18.3412 12.1583L6.97647 18.8188C6.09804 19.3336 5 18.6901 5 17.6605L5 4.33953C5 3.30989 6.09804 2.66637 6.97647 3.18119L18.3412 9.84166Z"
			/>
		</svg>
	</slot>
</button>

<style>

	.running::before {
		content: '';
		position: absolute;
		background-color: currentColor;
		bottom: 7px;
		width: 4px;
		height: 4px;
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
