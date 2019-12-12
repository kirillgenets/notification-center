import { connect } from 'react-redux';
import markAllNotificationsAsRead from '../store/actions/markAllNotificationsAsRead';
import ReadAll from '../components/ReadAll/ReadAll';

const mapStateToProps = state => ({
    notifications: state.notifications
})

const mapDispatchToProps = dispatch => ({
    markAllNotificationsAsRead: notifications => dispatch(markAllNotificationsAsRead(notifications))
})

export default connect(mapStateToProps, mapDispatchToProps)(ReadAll);