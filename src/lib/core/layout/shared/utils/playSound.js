import { browser } from '$app/environment';
function playSound(soundToPlay) {
	if (browser) {
		const audio = new Audio(soundToPlay);
		audio.play();
	}

	//   	const audio = new Audio('/sounds/timer-done.wav');
	// 		audio.play();
	// 		if (JSON.parse(localStorage.getItem('timerSound')) === true) {
	// 			audio.play();
	// 		}
	// 	} else if (soundToPlay === 'lap') {
	// 		const audio = new Audio('/sounds/new-lap.wav');
	// 		audio.play();
	// 		if (JSON.parse(localStorage.getItem('lapSound')) === true) {
	// 			audio.play();
	// 		}
	// }
}

export default playSound;
