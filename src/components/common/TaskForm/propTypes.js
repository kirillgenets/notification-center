import PropTypes from 'prop-types';

export default {
	requestTaskEdit: PropTypes.func.isRequired,
	requestTaskCreation: PropTypes.func.isRequired,
	teamId: PropTypes.number.isRequired,
	taskData: PropTypes.object,
	isEdit: PropTypes.bool,
	onClose: PropTypes.func,
};
