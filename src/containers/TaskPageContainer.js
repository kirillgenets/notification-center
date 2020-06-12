import { connect } from 'react-redux';
import TaskPage from './../components/pages/task/TaskPage';

const mapStateToProps = (state) => ({
	teamId: state.team.id,
	tasks: state.tasks,
});

export default connect(mapStateToProps)(TaskPage);
