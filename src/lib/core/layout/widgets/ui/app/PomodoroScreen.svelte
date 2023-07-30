<script>
	import { pomodoroState, pomodoroPaused } from '@coreShared';
	import { ListPomodoro, Pomodoro } from '@coreWidgets';

	import { Button } from '@coreShared';
</script>

<Button grows running={$pomodoroState} paused={$pomodoroState && $pomodoroPaused}
	><span slot="label">POMODORO</span></Button
>

<div class="max-w-2xl justify-center">
	<Pomodoro />

	<ListPomodoro />
</div>

<style>
</style>
