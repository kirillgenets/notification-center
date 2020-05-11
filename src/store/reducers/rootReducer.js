import { combineReducers } from 'redux';
import tasks from './tasks';
import readStatusFilter from './readStatusFilter';
import categoryFilter from './categoryFilter';
import currentPage from './currentPage';

const rootReducer = combineReducers({
  tasks,
  readStatusFilter,
  categoryFilter,
  currentPage,
});

export default rootReducer;
