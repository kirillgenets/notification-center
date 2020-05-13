import initialState from '../initialState';
import { SET_PAGES_COUNT } from '../constants';

const pagesCount = (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGES_COUNT:
      return action.payload;
    default:
      return state;
  }
};

export default pagesCount;
