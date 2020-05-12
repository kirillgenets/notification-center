import initialState from '../initialState';
import { SET_CURRENT_PAGE } from '../constants';

const currentPage = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return action.payload;
    default:
      return state;
  }
};

export default currentPage;
