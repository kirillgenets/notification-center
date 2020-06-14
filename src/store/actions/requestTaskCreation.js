import { REQUEST_TASK_CREATION } from '../constants';

const requestTaskCreation = (task) => ({
	type: REQUEST_TASK_CREATION,
	payload: task,
});

export default requestTaskCreation;
