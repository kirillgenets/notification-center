import initialState from '../initialState';
import {
  RECEIVE_NOTIFICATIONS,
  MARK_ALL_NOTIFICATIONS_AS_READ,
  MARK_NOTIFICATION_AS_READ,
} from '../constants/constants';

const notifications = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_NOTIFICATIONS:
      return action.payload;
    case MARK_ALL_NOTIFICATIONS_AS_READ:
      return state;
    case MARK_NOTIFICATION_AS_READ:
      return state;
    default:
      return state;
  }
};

export default notifications;
