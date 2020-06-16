import { DELETE_TASK } from '../constants';

const deleteTask = (id) => ({
	type: DELETE_TASK,
	payload: id,
});

export default deleteTask;
