<script>
	import { TimePoint } from '../../entities';
	import { SummaryTime } from '../../shared';
	import { timers, draggingItem, pomodoroState } from '../../shared';
	import { Timer } from '../../entities';

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
</script>

<div class="bg-black px-8 py-2">
	{#if $timers.length > 0}
		<div class="flex flex-col">
			<div class=" flex items-end justify-between ">
				<p class="text-2xl font-bold uppercase">{$pomodoroState ? 'Przebieg realizacji': 'Ustawienia Pomodoro'} </p>

				<SummaryTime />
			</div>

			{#each $timers as timer, index (timer.id)}
				<TimePoint bind:draggingOverIndex {dragging} {draggingIndex} {index}>
					<Timer {...timer} {start} {end} />
				</TimePoint>
			{/each}
		</div>
	{:else}
		<div class="flex justify-center py-2 px-2 opacity-[0.7]">
			<p
				class="rounded-xl border-2 border-pink-600 py-4 px-2 text-center text-2xl font-black uppercase text-pink-500"
			>
				Zacznij robić pomidory
			</p>
		</div>
	{/if}
</div>

<style>
</style>
