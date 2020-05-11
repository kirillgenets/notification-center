import { MARK_TASK_AS_READ } from '../constants';

const markTaskAsRead = (task, page, category, isRead) => ({
  type: MARK_TASK_AS_READ,
  id: task,
  page,
  category,
  isRead,
});

export default markTaskAsRead;
