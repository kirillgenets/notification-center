import PropTypes from 'prop-types';

export default {
	requestTaskEdit: PropTypes.func.isRequired,
	taskData: PropTypes.object,
	isEdit: PropTypes.bool,
	onClose: PropTypes.func,
};
