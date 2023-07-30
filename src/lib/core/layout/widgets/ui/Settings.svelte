<script>
	// import { theme, hideHour } from '../../stores/settings.js';
	import { resetTimers, pomodoroState } from '@coreShared';
	import { showNotification, playSound } from '@coreShared';

	import { Button, Switch } from '@coreShared';

	import { browser } from '$app/environment';
	let timerSoundEnabled, lapSoundEnabled, notificationsEnabled, waitForStart;

	if (browser) {
		(timerSoundEnabled = JSON.parse(localStorage.getItem('timerSound')) || false),
			(lapSoundEnabled = JSON.parse(localStorage.getItem('lapSound')) || false),
			(notificationsEnabled = JSON.parse(localStorage.getItem('notifications')) || false),
			(waitForStart = JSON.parse(localStorage.getItem('waitForStart')) || false);
	}

	let appVersion = '1.1.0';

	const themeOptions = {
		Green: '#69A98B',
		Yellow: '#E5A441',
		Red: '#CB2A37',
		Violet: '#A161E2',
		Blue: '#137195'
	};

	// $: currentTheme = $theme;
	// $: separatorColor = colorLuminance(currentTheme);

	// const colorLuminance = (hex) => {
	//   // validate hex string
	//   hex = String(hex).replace(/[^0-9a-f]/gi, "");
	//   if (hex.length < 6) {
	//     hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
	//   }

	//   // convert to decimal and change luminosity
	//   var rgb = "#",
	//     c,
	//     i;
	//   for (i = 0; i < 3; i++) {
	//     c = parseInt(hex.substr(i * 2, 2), 16);
	//     c = Math.round(Math.min(Math.max(0, c + c * -0.2), 255)).toString(16);
	//     rgb += ("00" + c).substr(c.length);
	//   }

	//   return rgb;
	// };

	const changeTheme = (color) => {
		if (browser) {
			localStorage.setItem('theme', color);
		}
		// $theme = color;
	};

	const toggleTimerSound = (value) => {
		if (value) {
			playSound('done');
		}
		if (browser) {
			localStorage.setItem('timerSound', value);
		}
		timerSoundEnabled = value;
	};

	const toggleLapSound = (value) => {
		if (value) {
			playSound('lap');
		}
		if (browser) {
			localStorage.setItem('lapSound', value);
		}
		lapSoundEnabled = value;
	};

	const toggleNotifications = (value) => {
		if (value) {
			showNotification();
		}
		if (browser) {
			localStorage.setItem('notifications', value);
		}
		notificationsEnabled = value;
	};

	const toggleAutoStart = (value) => {
		if (browser) {
			localStorage.setItem('waitForStart', value);
		}
		waitForStart = value;
	};
</script>

<section class="flex flex-col gap-2 rounded-lg bg-pink-600 py-4 px-8" style="">
	<div>
		<!-- --custom-separator-color: {separatorColor}; -->
		<div class="flex  flex-col">
			<h2 class="mb-6 text-5xl font-black text-black">Settings</h2>

			<!-- <div class="setting">
      <h2>Theme:</h2>

      <div class="theme-options">
        {#each Object.entries(themeOptions) as [name, color]}
          <Button
            selected={currentTheme === color}
            buttonTitle={name + " theme"}
            buttonFunction={() => {
              changeTheme(color);
            }}><span slot="label">{name}</span></Button
          >
        {/each}
      </div>
    </div> -->
		</div>
		{#if browser}
			{#if 'Notification' in window}
				<div class="">
					<h3 class="mb-6 text-3xl font-bold text-black">Alerts</h3>

					<div class="mb-8 flex w-full flex-row justify-between border-b-2 border-black">
						<p class="text-1xl mb-6  text-black">Enable notifications:</p>

						<Switch
							buttonFunction={() => {
								notificationsEnabled = !notificationsEnabled;
								notificationsEnabled ? toggleNotifications(true) : toggleNotifications(false);
							}}
						/>
					</div>
				</div>
			{/if}
		{/if}

		<div class="">
			<h3 class="mb-6 text-3xl font-bold text-black">Pomodoro</h3>

			<div class="mb-8 flex w-full flex-row justify-between border-b-2 border-black">
				<p class="text-1xl mb-6  text-black">Confirm before starting next timer:</p>

				<Switch
					buttonFunction={() => {
						waitForStart = !waitForStart;
						waitForStart ? toggleAutoStart(true) : toggleAutoStart(false);
					}}
				/>
			</div>
			<div class="">
				<h3 class="mb-6 text-3xl font-bold text-black">Sound</h3>

				<div class="mb-8 flex w-full flex-row justify-between border-b-2 border-black">
					<p class="text-1xl mb-6  text-black">Play sound when completed:</p>

					<Switch
						buttonFunction={() => {
							timerSoundEnabled = !timerSoundEnabled;
							timerSoundEnabled ? toggleTimerSound(true) : toggleTimerSound(false);
						}}
					/>
				</div>
			</div>

			<div class="">
				<h3 class="mb-6 text-3xl font-bold text-black">Stopwatch</h3>

				<div class="mb-8 flex w-full flex-row justify-between border-b-2 border-black">
					<p class="text-1xl mb-6  text-black">Play sound on new laps:</p>

					<Switch
						buttonFunction={() => {
							lapSoundEnabled = !lapSoundEnabled;
							lapSoundEnabled ? toggleLapSound(true) : toggleLapSound(false);
						}}
					/>
				</div>
			</div>
		</div>

		<div class="mb-20 flex flex-row flex-wrap justify-between ">
			<h3 class="mb-6 text-3xl font-bold text-black">Reset timers:</h3>

			<button disable={$pomodoroState} class="btn" on:click={() => resetTimers()}>Reset</button>
		</div>

		<div class="information">
			<a href="" target="_blank"
				><img
					src="/img/bmac-button.png"
					alt="Buy Me A Coffee"
					style="height: 40px !important;width: 145px !important;"
				/></a
			>

			<p class="text-black">
				Made by <a rel="noreferrer" class="font-bold underline" target="_blank" href=""
					>Agile.fans &#8599;
				</a>
			</p>
			<p class="max-w-sm text-black" style="line-height: 1.4;">
				If you found a problem or have any suggestion you can send me an email at:
				<span class="font-bold underline">oleg@darkdev.games</span>
			</p>
		</div>
	</div>
</section>

<style>
	.theme-options {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-end;
		gap: 2px;
	}

	.information {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		row-gap: 10px;
		padding-bottom: 4rem;
	}
</style>
