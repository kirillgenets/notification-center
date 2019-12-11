import { LOAD_NOTIFICATIONS } from '../constants/constants';  

const loadNotifications = notifications => {
    return {
        type: LOAD_NOTIFICATIONS,
        payload: notifications
    }
}

export default loadNotifications;