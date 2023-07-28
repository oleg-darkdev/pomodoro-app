<script>
	import {  pomodoroState,  pomodoroPaused } from '$lib/shared/';
	import { ListPomodoro, Pomodoro } from '$lib/widgets';

	import { Button } from '$lib/shared/';
</script>

<Button
	grows
	running={$pomodoroState}
	paused={$pomodoroState && $pomodoroPaused}
	><span slot="label">POMODORO</span></Button
>


<div class="max-w-2xl justify-center">
	<Pomodoro />

	<ListPomodoro />
</div>


<style>
	
</style>
