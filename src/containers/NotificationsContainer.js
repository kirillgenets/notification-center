import { connect } from 'react-redux';
import receiveNotifications from '../store/actions/receiveNotifications';
import { CategoryFilters, ReadStatusFilters } from '../store/constants/constants';
import Notifications from '../components/Notificatons/Notifications';

const getNotificationsByReadStatus = (notifications, filter) => {
    switch (filter) {
        case ReadStatusFilters.SHOW_ALL:
            return notifications;
        case ReadStatusFilters.SHOW_READ:
            return notifications.filter(notification => notification.isRead);
        case ReadStatusFilters.SHOW_UNREAD:
            return notifications.filter(notification => !notification.isRead);
        default:
            throw new Error(`There is no such filter as ${filter}`);
    }
}

const getNotificationsByCategory = (notifications, filter) => {
    switch (filter) {
        case CategoryFilters.SHOW_ALL:
            return notifications;
        case CategoryFilters.SHOW_SUCCESS:
            return notifications.filter(notification => notification.category === 'SUCCESS');
        case CategoryFilters.SHOW_CRITICAL:
            return notifications.filter(notification => notification.category === 'CRIT');
        case CategoryFilters.SHOW_WARN:
            return notifications.filter(notification => notification.category === 'WARN');
        case CategoryFilters.SHOW_INFO:
            return notifications.filter(notification => notification.category === 'INFO');
        case CategoryFilters.SHOW_ERROR:
            return notifications.filter(notification => notification.category === 'ERROR');
        default:
            throw new Error(`There is no such filter as ${filter}`);
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        notifications: getNotificationsByCategory(
        getNotificationsByReadStatus(state.notifications, state.readStatusFilter), 
        state.categoryFilter)
    }
}

const mapDispatchToProps = dispatch => ({
    receiveNotifications: () => dispatch(receiveNotifications())
})

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);