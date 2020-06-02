import PropTypes from 'prop-types';

export default {
	onFormSubmit: PropTypes.func.isRequired,
	fieldsData: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
			type: PropTypes.string,
			placeholder: PropTypes.string,
			required: PropTypes.bool,
			minLength: PropTypes.number,
			maxLength: PropTypes.number,
		})
	).isRequired,
	title: PropTypes.string,
	description: PropTypes.string,
	subtitle: PropTypes.string,
	analogData: PropTypes.shape({
		text: PropTypes.string.isRequired,
		link: PropTypes.string.isRequired,
	}),
	error: PropTypes.string,
};
