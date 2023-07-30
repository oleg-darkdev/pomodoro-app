<script>
	import { slide } from 'svelte/transition';
	import { SummaryTime } from '@coreShared';
	import { timers, laps } from '@coreShared';
	import { Lap } from '@coreEntities';

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
</script>

<div class="bg-black px-8 py-2">
	{#if $laps.length > 0}
		<div class="flex flex-col">
			<div class=" flex items-end justify-between ">
				<p class="text-2xl font-bold uppercase">Zapisane stopery</p>
			</div>

			{#each $laps as lap (lap.id)}
				<div class="list-item" transition:slide|local>
					<Lap {...lap} />
				</div>
			{/each}
		</div>
	{:else}
		<div class="flex justify-center py-2 px-2 opacity-[0.7]">
			<p
				class="rounded-xl border-2 border-pink-600 py-4 px-2 text-center text-2xl font-black uppercase text-pink-500"
			>
				Rozpocznij rejestrowanie zatrzymań
			</p>
		</div>
	{/if}
</div>

<style>
</style>
