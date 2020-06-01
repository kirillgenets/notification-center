import { connect } from 'react-redux';
import requestTasks from '../store/actions/requestTasks';
import markTaskAsCompleted from '../store/actions/markTaskAsCompleted';
import Tasks from '../components/pages/board/Tasks';

const mapStateToProps = (state) => ({
	tasks: state.tasks,
	currentPage: state.currentPage,
	categoryFilter: state.categoryFilter,
	completionStatusFilter: state.completionStatusFilter,
	user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
	requestTasks: (params) => dispatch(requestTasks(params)),
	markTaskAsCompleted: (task, page, category, isCompleted) =>
		dispatch(markTaskAsCompleted(task, page, category, isCompleted)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
