import { timers } from '../../index';

const defaultEntry = () => {
	return {
		id: Date.now(),
		name: 'New task',
		time: 10,
		completed: false
	};
};

const newEntry = () => {
	timers.modify(defaultEntry());
};

export default newEntry;
