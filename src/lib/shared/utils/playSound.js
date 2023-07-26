const done = '/sounds/timer-done.wav',
	lap = '/sounds/new-lap.wav';

function playSound(soundToPlay) {
	if (soundToPlay === 'done') {
		const audio = new Audio(done);

		if (JSON.parse(localStorage.getItem('timerSound')) === true) {
			audio.play();
		}
	} else if (soundToPlay === 'lap') {
		const audio = new Audio(lap);

		if (JSON.parse(localStorage.getItem('lapSound')) === true) {
			audio.play();
		}
	}
}

export default playSound
