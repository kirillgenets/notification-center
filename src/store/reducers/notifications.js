import initialState from '../initialState';
import { RECEIVE_NOTIFICATIONS } from '../constants/constants';

const notifications = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_NOTIFICATIONS:
            return [
                ...state,
                ...action.payload
            ];
        default:
            return state;
    }
}

export default notifications;