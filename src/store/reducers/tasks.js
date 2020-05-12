import initialState from '../initialState';
import { RECEIVE_TASKS, MARK_TASK_AS_COMPLETED } from '../constants';

const tasks = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_TASKS:
      return action.payload;
    case MARK_TASK_AS_COMPLETED:
      return state;
    default:
      return state;
  }
};

export default tasks;
