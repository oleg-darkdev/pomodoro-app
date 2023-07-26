import { writable } from 'svelte/store';

function lapStore() {
	const state = [];
	const { subscribe, set, update } = writable(state);

	const timers = {
		modify(data) {
			update((state) => {
				let index = state.findIndex((state) => state.id == data.id);

				if (state[index] == null) {
					state = [data].concat(state);
				} else {
					state[index] = data;
				}
				//localStorage.setItem("tim", JSON.stringify(state));

				return state;
			});
		},
		delete(id) {
			update((state) => {
				state = state.filter((state) => state.id != id);
				//localStorage.setItem("tim", JSON.stringify(state));

				return state;
			});
		},
		reset() {
			update((state) => {
				state = [];
				//localStorage.setItem("tim", JSON.stringify(state));

				return state;
			});
		}
	};

	return {
		subscribe,
		set,
		update,
		...timers
	};
}

const laps = lapStore();

export default laps;
