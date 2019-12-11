import initialState from '../initialState';
import { LOAD_NOTIFICATIONS } from '../constants/constants';

const notifications = (state = initialState.notifications, action) => {
    switch (action.type) {
        case LOAD_NOTIFICATIONS:
            return [
                ...state,
                ...action.payload
            ];
        default:
            return state;
    }
}

export default notifications;