import { combineReducers } from 'redux';
import notifications from './notifications';
import readStatusFilter from './readStatusFilter';
import categoryFilter from './categoryFilter';

const rootReducer = combineReducers({
  notifications,
  readStatusFilter,
  categoryFilter,
});

export default rootReducer;
