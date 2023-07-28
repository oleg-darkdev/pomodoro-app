<script>
	// clear this``

	// currentView
	// import { theme } from '$lib/stores/settings.js';

	import { Button } from '$lib/shared/';

	import { stopwatchState, stopwatchPaused } from '$lib/shared/';
	import { ListStopwatch, Stopwatch } from '$lib/widgets';
</script>

<Button grows running={$stopwatchState} paused={$stopwatchState && $stopwatchPaused}
	><span slot="label">STOPWATCH</span></Button
>

<div class="max-w-2xl justify-center">
	<Stopwatch />

	<ListStopwatch />
</div>
