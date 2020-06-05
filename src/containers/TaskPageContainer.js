import { connect } from 'react-redux';
import TaskPage from './../components/pages/task/TaskPage';

const mapStateToProps = (state, ownProps) => ({
	teamName: state.team.name,
	tasks: state.tasks,
	id: ownProps.id,
});

export default connect(mapStateToProps)(TaskPage);
