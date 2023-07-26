<script>
	import { slide } from 'svelte/transition';
	import { TimePoint } from '../../entities';
	import { SummaryTime } from '../../shared';
	import { timers, laps, draggingItem } from '../../shared';
	import { Timer, Lap } from '../../entities';

	$: items = $timers;
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

	let dragging = false,
		draggingIndex,
		draggingOverIndex;

	const start = (ev, timerId) => {
		draggingOverIndex = null;
		ev.dataTransfer.setData('source', ev.target.dataset.index);

		draggingIndex = $timers.findIndex((state) => state.id === timerId);

		draggingItem.set($timers[draggingIndex]);
		dragging = true;
	};

	const end = (ev) => {
		dragging = false;
		draggingItem.set();
		draggingIndex = null;
	};

	export let pomodoroList;
</script>

{#if pomodoroList}
	{#if $timers.length > 0}
		<div class="flex flex-col">
			<div class="mb-16 flex items-center justify-between">
				<p>NEXT UP</p>

				<p
					style="display: flex;
				align-items: center;"
				>
					<SummaryTime bind:totalHours bind:totalMinutes />
				</p>
			</div>

			{#each $timers as timer, index (timer.id)}
				<TimePoint bind:draggingOverIndex {dragging} {draggingIndex} {index}>
					<Timer {...timer} {start} {end} />
				</TimePoint>
			{/each}
		</div>
		<!-- {:else}
		<div class="flex justify-center mt-[10vh] opacity-[0.5]">
			<p>START ADDING TIMERS</p>
		</div> -->
	{/if}
{:else if $laps.length > 0}
	<div class="flex flex-col">
		<div class="mb-16 flex items-center justify-between">
			<p>SAVED TIMES</p>
		</div>

		{#each $laps as lap (lap.id)}
			<div class="list-item" transition:slide|local>
				<Lap {...lap} />
			</div>
		{/each}
	</div>
{:else}
	<div class="mt-[10vh] flex justify-center opacity-[0.5]">
		<p>START ADDING LAPS</p>
	</div>
{/if}

<style>
</style>
