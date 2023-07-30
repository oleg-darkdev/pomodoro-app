<script>
	import { FooterApp } from '@coreEntities';

	let activeScreen = 'Settings';
</script>

<section
	class="content flex min-h-screen flex-1 flex-col items-center justify-center overflow-y-scroll  bg-black pt-10 pb-40"
>
	<div class:hidden={activeScreen == 'Pomodoro' || activeScreen == 'Stopwatch'} class='lg:w-4/12 md:w-6/12 w-full'>
		<slot name="settings-screen" />
	</div>
	<div
		class="flex h-auto flex-col items-center justify-center pb-36 xl:pb-10"
		class:hidden={activeScreen == 'Settings' || activeScreen == 'Stopwatch'}
	>
		<slot name="pomodoro-screen" />
	</div>
	<div
		class="flex h-full flex-col justify-center"
		class:hidden={activeScreen == 'Settings' || activeScreen == 'Pomodoro'}
	>
		<slot name="stopwatch-screen" />
	</div>
</section>

<FooterApp bind:activeScreen />
