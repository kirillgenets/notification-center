import { REQUEST_TASK_EDIT } from '../constants';

const requestTaskEdit = (task) => ({
	type: REQUEST_TASK_EDIT,
	payload: task,
});

export default requestTaskEdit;
