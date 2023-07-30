function timeToSeconds(timeString) {
	const [minutes, seconds] = timeString.split(':').map(Number);
	return minutes * 60 + seconds;
}


export default timeToSeconds
