import { connect } from 'react-redux';
import TaskPage from './../components/pages/task/TaskPage';
import deleteTask from './../store/actions/deleteTask';

const mapStateToProps = (state) => ({
	teamId: state.team.id,
	tasks: state.tasks,
});

const mapDispatchToProps = (dispatch) => ({
	deleteTask: (id) => dispatch(deleteTask(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskPage);
