function timeAdapter(ms) {
	let hours = Math.floor(ms / 3600000);
	// if (hours > 0) {
	// 	hasHours = true;
	// }

	let minutesMs = Math.floor(ms - 3600000 * hours);
	let minutes = Math.floor(minutesMs / 60000);
	let seconds = ((ms % 60000) / 1000).toFixed(0);
// (!hideHour || hasHours) {
	// 	return (
	// 		hours +
	// 		':' +
	// 		(parseInt(seconds) === 60
	// 			? (minutes + 1 < 10 ? '0' + (minutes + 1) : '' + (minutes + 1)) + ':00'
	// 			: (minutes < 10 ? '0' : '') + minutes + ':' + (parseInt(seconds) < 10 ? '0' : '') + seconds)
	// 	);
	// } else
	// if  {
		return parseInt(seconds) === 60
			? (minutes + 1 < 10 ? '0' + (minutes + 1) : '' + (minutes + 1)) + ':00'
			: (minutes < 10 ? '0' : '') + minutes + ':' + (parseInt(seconds) < 10 ? '0' : '') + seconds;
	// }
}


export default timeAdapter
