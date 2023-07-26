function getTime(result, totalHours, totalMinutes) {
	result = result.reduce((a, b) => a + b, 0);
	if (result <= 60) {
		return () => {
			totalHours = 0;
			totalMinutes = result;
		};
	} else if (result > 60) {
		let hours = result / 60;
		let rhours = Math.floor(hours);
		let minutes = (hours - rhours) * 60;
		let rminutes = Math.round(minutes);
		return () => {
			totalHours = rhours;
			totalMinutes = rminutes;
		};
	}
}


export default getTime;
