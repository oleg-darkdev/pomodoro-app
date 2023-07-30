<script>
	import { tweened } from 'svelte/motion';

	$: timer = tweened(currentTimerCountInSeconds);

	$: minutes = Math.floor($timer / 60);
	$: minname = minutes > 1 ? 'mins' : 'min';
	$: seconds = Math.floor($timer - minutes * 60);

	const interval = setInterval(() => {
		if ($timer > 0) $timer--;
		if ($timer == 0) {
			clearInterval(interval);
		}
	}, 1000);

	export let currentTimerCountInSeconds, paused, textColor;
</script>

<div class:blink={paused} class="flex flex-row flex-wrap items-center justify-center ">
	<span style="font-size: 100px;" class="{textColor} font-mono align-center countdown font-black ">
		<span style="--value:{minutes};" />:<span style="--value:{seconds};" />
	</span>
</div>
