import { connect } from 'react-redux';
import requestTasks from '../store/actions/requestTasks';
import markTaskAsCompleted from '../store/actions/markTaskAsCompleted';
import Tasks from '../components/pages/board/Tasks';

const mapStateToProps = (state) => ({
	tasks: state.tasks,
	currentPage: state.currentPage,
	categoryFilter: state.categoryFilter,
	completionStatusFilter: state.completionStatusFilter,
});

const mapDispatchToProps = (dispatch) => ({
	requestTasks: (page, category, isCompleted) =>
		dispatch(requestTasks(page, category, isCompleted)),
	markTaskAsCompleted: (task, page, category, isCompleted) =>
		dispatch(markTaskAsCompleted(task, page, category, isCompleted)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
