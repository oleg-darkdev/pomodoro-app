import { writable } from 'svelte/store';
import { browser } from '$app/environment';

let theme = writable('#CB2A37'),
	currentView = writable('pomo'),
	hideHour = writable(false);

if (browser) {
	theme = writable(localStorage.getItem('theme'));

	currentView = writable(localStorage.getItem('view'));

	hideHour = writable(JSON.parse(localStorage.getItem('hideHour')) || false);
}

export { theme, currentView, hideHour };
