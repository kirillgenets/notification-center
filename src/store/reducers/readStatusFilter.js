import initialState from '../initialState';
import { SET_READ_STATUS_FILTER } from '../constants';

const readStatusFilter = (state = initialState, action) => {
  switch (action.type) {
    case SET_READ_STATUS_FILTER:
      return action.payload;
    default:
      return state;
  }
};

export default readStatusFilter;
