import PropTypes from 'prop-types';

export default {
	user: PropTypes.object.isRequired,
	taskId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	teamId: PropTypes.number.isRequired,
	onSubmit: PropTypes.func,
};
