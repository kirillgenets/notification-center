import { RECEIVE_TASKS } from '../constants';

const receiveTasks = (tasks) => ({
	type: RECEIVE_TASKS,
	payload: tasks,
});

export default receiveTasks;
