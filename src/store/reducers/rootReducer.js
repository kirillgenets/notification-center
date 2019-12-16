import { combineReducers } from 'redux';
import notifications from './notifications';
import readStatusFilter from './readStatusFilter';
import categoryFilter from './categoryFilter';
import currentPage from './currentPage';

const rootReducer = combineReducers({
  notifications,
  readStatusFilter,
  categoryFilter,
  currentPage,
});

export default rootReducer;
