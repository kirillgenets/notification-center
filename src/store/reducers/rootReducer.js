import { combineReducers } from 'redux';
import tasks from './tasks';
import completionStatusFilter from './completionStatusFilter';
import categoryFilter from './categoryFilter';
import currentPage from './currentPage';
import pagesCount from './pagesCount';
import user from './user';

const rootReducer = combineReducers({
	tasks,
	completionStatusFilter,
	categoryFilter,
	currentPage,
	pagesCount,
	user,
});

export default rootReducer;
