import { writable } from 'svelte/store';

const runningTimerId = writable(0);


export default runningTimerId;
