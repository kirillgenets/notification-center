import { connect } from 'react-redux';
import requestNotifications from '../store/actions/requestNotifications';
import markNotificationAsRead from '../store/actions/markNotificationAsRead';
import Notifications from '../components/Notificatons';

const mapStateToProps = (state) => ({
  notifications: state.notifications,
  currentPage: state.currentPage,
  categoryFilter: state.categoryFilter,
  readStatusFilter: state.readStatusFilter,
});

const mapDispatchToProps = (dispatch) => ({
  requestNotifications: (page, category, isRead) => (
    dispatch(requestNotifications(page, category, isRead))
  ),
  markNotificationAsRead: (notification, page, category, isRead) => (
    dispatch(markNotificationAsRead(notification, page, category, isRead))
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
