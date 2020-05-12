import initialState from '../initialState';
import { SET_COMPLETION_STATUS_FILTER } from '../constants';

const completionStatusFilter = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMPLETION_STATUS_FILTER:
      return action.payload;
    default:
      return state;
  }
};

export default completionStatusFilter;
