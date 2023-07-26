import { timers } from '../../index';

const resetTimers = () => {
	if (window.confirm("This will replace all timers and can't be undone")) {
		timers.reset();
	}
};
export default resetTimers;
