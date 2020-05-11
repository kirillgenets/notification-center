import { REQUEST_TASKS } from '../constants';

const requestTasks = (page, category, isRead) => ({
  type: REQUEST_TASKS,
  page,
  category,
  isRead,
});

export default requestTasks;
