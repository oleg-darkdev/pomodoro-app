import { writable } from 'svelte/store';
import { browser } from '$app/environment';

let
	hideHour = writable(false);

if (browser) {
	hideHour = writable(JSON.parse(localStorage.getItem('hideHour')) || false);
}

export {  hideHour };
