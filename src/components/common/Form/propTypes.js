import PropTypes from 'prop-types';

export default {
	onFormSubmit: PropTypes.func.isRequired,
	fieldsData: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			label: PropTypes.string,
			type: PropTypes.string,
			placeholder: PropTypes.string,
			required: PropTypes.bool,
			minLength: PropTypes.number,
			maxLength: PropTypes.number,
			defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
			checked: PropTypes.bool,
		})
	).isRequired,
	title: PropTypes.string,
	description: PropTypes.string,
	subtitle: PropTypes.string,
	analogData: PropTypes.shape({
		text: PropTypes.string,
		link: PropTypes.string,
	}),
	error: PropTypes.string,
};
