import { CREATE_TASK } from '../constants';

const createTask = (task) => ({
	type: CREATE_TASK,
	payload: task,
});

export default createTask;
