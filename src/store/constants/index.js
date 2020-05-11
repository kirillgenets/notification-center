export const TASKS_PER_PAGE = 9;
export const API_URL = 'https://localhost:44357/api/Tasks';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const REQUEST_TASKS = 'REQUEST_TASKS';
export const RECEIVE_TASKS = 'RECEIVE_TASKS';
export const MARK_TASK_AS_READ = 'MARK_TASK_AS_READ';
export const SET_CATEGORY_FILTER = 'SET_CATEGORY_FILTER';
export const SET_READ_STATUS_FILTER = 'SET_READ_STATUS_FILTER';
export const ReadStatusFilters = {
  SHOW_ALL: '',
  SHOW_READ: 'true',
  SHOW_UNREAD: 'false',
};
export const CategoryFilters = {
  SHOW_ALL: '',
  SHOW_CRITICAL: 'CRIT',
  SHOW_WARN: 'WARN',
  SHOW_INFO: 'INFO',
  SHOW_ERROR: 'ERROR',
  SHOW_DEBUG: 'DEBUG',
};
export const FILTER_BY_CATEGORY = 'FILTER_BY_CATEGORY';
export const RESET_FILTERS = 'RESET_FILTERS';
export const SHOW_ANOTHER_PAGE = 'SHOW_ANOTHER_PAGE';
