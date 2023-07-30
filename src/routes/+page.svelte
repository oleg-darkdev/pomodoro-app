<script>
	import { AppScreen } from '@coreWidgets';
	import { PomodoroScreen, StopwatchScreen, SettingsScreen } from '@coreWidgets';
</script>

<AppScreen>
	<div slot="settings-screen">
		<SettingsScreen />
	</div>
	<div slot="pomodoro-screen">
		<PomodoroScreen />
	</div>
	<div slot="stopwatch-screen">
		<StopwatchScreen />
	</div>
</AppScreen>
