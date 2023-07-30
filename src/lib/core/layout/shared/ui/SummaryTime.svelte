<script>
	import { timers } from '@coreShared';

	$: timeMap = $timers?.map((index) => index.time);

	let totalHours, totalMinutes;

	function getTime(result) {
		result = result.reduce((a, b) => a + b, 0);

		if (result <= 60) {
			totalHours = 0;
			totalMinutes = result;
		} else if (result > 60) {
			let hours = result / 60;
			let rhours = Math.floor(hours);
			let minutes = (hours - rhours) * 60;
			let rminutes = Math.round(minutes);
			totalHours = rhours;
			totalMinutes = rminutes;
		}
	}

	$: getTime(timeMap);

	// export let totalHours, totalMinutes;
</script>

<div class="mb-2 flex flex-col justify-end">
	<p class="text-2xl font-bold ">Czas całkowity</p>

	<div class="flex flex-wrap justify-end font-semibold ">
		<p class="mr-2 ">
			{#if totalHours !== 0}
				<span class="time mr-2">{totalHours}</span>
				<span class="text-pink-600">({totalHours > 1 ? 'Hours' : 'Hour'})</span>
			{/if}
			:
		</p>

		<div class="mr-2 font-semibold ">
			<span class="time">{totalMinutes}</span>
			<span class="text-pink-600">({totalMinutes > 1 ? 'Minutes' : 'Minute'})</span>
		</div>
	</div>
</div>
