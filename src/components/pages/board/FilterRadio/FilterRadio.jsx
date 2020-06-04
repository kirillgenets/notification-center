import React from 'react';
import PropTypes from 'prop-types';
import styles from './FilterRadio.css';

const FilterRadio = (props) => {
	const isChecked =
		props.categoryFilter === props.value || props.completionStatusFilter === props.value;

	return (
		<div className={styles.row}>
			<input
				type="radio"
				className={styles.radio}
				id={props.id}
				name={props.name}
				value={props.value}
				defaultChecked={isChecked}
			/>
			<label className={styles.label} htmlFor={props.id}>
				{props.description}
			</label>
		</div>
	);
};

FilterRadio.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	value: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
	description: PropTypes.string.isRequired,
	categoryFilter: PropTypes.string,
	completionStatusFilter: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

export default FilterRadio;
