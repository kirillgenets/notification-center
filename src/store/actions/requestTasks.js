import { REQUEST_TASKS } from '../constants';

const requestTasks = (page, category, isCompleted) => ({
	type: REQUEST_TASKS,
	page,
	category,
	isCompleted,
});

export default requestTasks;
