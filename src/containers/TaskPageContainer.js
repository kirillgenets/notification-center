import { connect } from 'react-redux';
import TaskPage from './../components/pages/task/TaskPage';

const mapStateToProps = (state) => ({
	teamId: state.team.id,
	teamName: state.team.name,
	tasks: state.tasks,
	userLogin: state.user.login,
});

export default connect(mapStateToProps)(TaskPage);
