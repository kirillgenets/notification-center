import { REQUEST_TASKS } from '../constants';

const requestTasks = ({ page, category, isCompleted, teamId }) => ({
	type: REQUEST_TASKS,
	payload: { page, category, isCompleted, teamId },
});

export default requestTasks;
