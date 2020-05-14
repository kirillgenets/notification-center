import initialState from '../initialState';
import { SET_CATEGORY_FILTER } from '../constants';

const categoryFilter = (state = initialState, action) => {
	switch (action.type) {
		case SET_CATEGORY_FILTER:
			return action.payload;
		default:
			return state;
	}
};

export default categoryFilter;
