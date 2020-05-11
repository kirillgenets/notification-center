import { connect } from 'react-redux';
import requestTasks from '../store/actions/requestTasks';
import markTaskAsRead from '../store/actions/markTaskAsRead';
import Tasks from '../components/Tasks';

const mapStateToProps = (state) => ({
  tasks: state.tasks,
  currentPage: state.currentPage,
  categoryFilter: state.categoryFilter,
  readStatusFilter: state.readStatusFilter,
});

const mapDispatchToProps = (dispatch) => ({
  requestTasks: (page, category, isRead) => dispatch(requestTasks(page, category, isRead)),
  markTaskAsRead: (task, page, category, isRead) =>
    dispatch(markTaskAsRead(task, page, category, isRead)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
