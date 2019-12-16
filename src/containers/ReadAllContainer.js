import { connect } from 'react-redux';
import markAllNotificationsAsRead from '../store/actions/markAllNotificationsAsRead';
import ReadAll from '../components/ReadAll';

const mapStateToProps = (state) => ({
  notifications: state.notifications,
  currentPage: state.currentPage,
});

const mapDispatchToProps = (dispatch) => ({
  markAllNotificationsAsRead: (notifications) => (
    dispatch(markAllNotificationsAsRead(notifications))
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReadAll);
