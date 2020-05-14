import { MARK_TASK_AS_COMPLETED } from '../constants';

const markTaskAsCompleted = (task, page, category, isCompleted) => ({
	type: MARK_TASK_AS_COMPLETED,
	id: task,
	page,
	category,
	isCompleted,
});

export default markTaskAsCompleted;
