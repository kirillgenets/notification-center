import { connect } from 'react-redux';
import requestTaskEdit from './../store/actions/requestTaskEdit';
import TaskForm from '../components/common/TaskForm';
import requestTaskCreation from './../store/actions/requestTaskCreation';

const mapStateToProps = (state, ownProps) => ({
	teamId: state.team.id,
	taskData: ownProps.taskData,
	isEdit: ownProps.isEdit,
	onClose: ownProps.onClose,
});

const mapDispatchToProps = (dispatch) => ({
	requestTaskEdit: (taskData) => dispatch(requestTaskEdit(taskData)),
	requestTaskCreation: (taskData) => dispatch(requestTaskCreation(taskData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
