import { connect } from 'react-redux';
import AddComment from './../components/pages/task/AddComment';

const mapStateToProps = (state, ownProps) => ({
	user: state.user,
	taskId: ownProps.taskId,
	teamId: ownProps.teamId,
	onSubmit: ownProps.onSubmit,
});

export default connect(mapStateToProps)(AddComment);
