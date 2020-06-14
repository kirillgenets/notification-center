import { REQUEST_TASKS } from '../constants';

const requestTasks = (request) => ({
	type: REQUEST_TASKS,
	payload: request,
});

export default requestTasks;
