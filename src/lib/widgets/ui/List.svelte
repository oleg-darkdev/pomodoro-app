<script>
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { TimePoint } from '../../entities';
	import { SummaryTime, getTimeFromTimer } from '../../shared';
	import { timers, laps, draggingItem } from '../../stores/timers';
	import { Timer, Lap } from '../../entities';

	import Button from '../../shared/ui/Button.svelte';

	export let pomodoroList;

	$: items = $timers;
	$: timeMap = $timers?.map((index) => index.time);

	$: getTimeFromTimer(timeMap, totalHours, totalMinutes);
	let totalHours,
		totalMinutes,
		dragging = false,
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
</script>

{#if pomodoroList}
	{#if $timers.length > 0}
		<div class="list-container">
			<div class="list-header">
				<p>NEXT UP</p>

				<p
					style="display: flex;
				align-items: center;"
				>
					<SummaryTime {totalHours} {totalMinutes} />
				</p>
			</div>

			{#each $timers as timer, index (timer.id)}
				<TimePoint bind:draggingOverIndex {dragging} {draggingIndex} {index}>
					<Timer {...timer} {start} {end} />
				</TimePoint>
			{/each}
		</div>
		<!-- {:else}
		<div class="empty-list">
			<p>START ADDING TIMERS</p>
		</div> -->
	{/if}
{:else if $laps.length > 0}
	<div class="list-container">
		<div class="list-header">
			<p>SAVED TIMES</p>
		</div>

		{#each $laps as lap (lap.id)}
			<div class="list-item" transition:slide|local>
				<Lap {...lap} />
			</div>
		{/each}
	</div>
{:else}
	<div class="empty-list">
		<p>START ADDING LAPS</p>
	</div>
{/if}

<style>
	.list-container {
		display: flex;
		flex-direction: column;
	}

	.list-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: var(--grey-color);
		margin-bottom: 16px;
	}

	.empty-list {
		display: flex;
		justify-content: center;
		margin-top: 10vh;
		opacity: 0.5;
	}

	/* .time {
		padding: 2px 3px 0 3px;
		display: inline;
		font-family: 'Monument Extended';
		font-size: 0.8rem;
	} */
</style>
