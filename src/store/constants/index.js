export const TASKS_PER_PAGE = 9;
export const API_URL = 'https://localhost:44357/api/Tasks';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const REQUEST_TASKS = 'REQUEST_TASKS';
export const RECEIVE_TASKS = 'RECEIVE_TASKS';
export const MARK_TASK_AS_COMPLETED = 'MARK_TASK_AS_COMPLETED';
export const SET_CATEGORY_FILTER = 'SET_CATEGORY_FILTER';
export const SET_COMPLETION_STATUS_FILTER = 'SET_COMPLETION_STATUS_FILTER';
export const SET_PAGES_COUNT = 'SET_PAGES_COUNT';
export const CompletionStatusFilters = {
  SHOW_ALL: '',
  SHOW_COMPLETE: 'true',
  SHOW_INCOMPLETE: 'false',
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
