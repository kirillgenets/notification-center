import { connect } from 'react-redux';
import markAllNotificationsAsRead from '../store/actions/markAllNotificationsAsRead';
import ReadAll from '../components/ReadAll';

const mapStateToProps = (state) => ({
  notifications: state.notifications,
  currentPage: state.currentPage,
  categoryFilter: state.categoryFilter,
  readStatusFilter: state.readStatusFilter,
});

const mapDispatchToProps = (dispatch) => ({
  markAllNotificationsAsRead: (notifications, page, category, isRead) => (
    dispatch(markAllNotificationsAsRead(notifications, page, category, isRead))
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReadAll);
