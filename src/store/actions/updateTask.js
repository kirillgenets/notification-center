import { UPDATE_TASK } from '../constants';

const updateTask = (task) => ({
	type: UPDATE_TASK,
	payload: task,
});

export default updateTask;
