import { connect } from 'react-redux';
import requestTaskEdit from './../store/actions/requestTaskEdit';
import TaskForm from '../components/common/TaskForm';

const mapStateToProps = (state, ownProps) => ({
	taskData: ownProps.taskData,
	isEdit: ownProps.isEdit,
	onClose: ownProps.onClose,
});

const mapDispatchToProps = (dispatch) => ({
	requestTaskEdit: (taskData) => dispatch(requestTaskEdit(taskData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
