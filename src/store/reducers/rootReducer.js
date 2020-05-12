import { combineReducers } from 'redux';
import tasks from './tasks';
import completionStatusFilter from './completionStatusFilter';
import categoryFilter from './categoryFilter';
import currentPage from './currentPage';

const rootReducer = combineReducers({
  tasks,
  completionStatusFilter,
  categoryFilter,
  currentPage,
});

export default rootReducer;
