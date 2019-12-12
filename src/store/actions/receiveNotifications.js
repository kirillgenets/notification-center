import getRandomNotifications from '../../data/generator';
import { RECEIVE_NOTIFICATIONS, NOTIFICATIONS_COUNT } from '../constants/constants';  

const receiveNotifications = () => {
    return {
        type: RECEIVE_NOTIFICATIONS,
        payload: getRandomNotifications(NOTIFICATIONS_COUNT)
    }
}

export default receiveNotifications;