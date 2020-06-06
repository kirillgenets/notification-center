import React from 'react';
import propTypes from './propTypes';
import defaultProps from './defaultProps';
import styles from './ActionButton.css';

const ActionButton = ({ onClick, title }) => {
	return (
		<button className={styles.button} onClick={onClick}>
			{title}
		</button>
	);
};

ActionButton.propTypes = propTypes;
ActionButton.defaultProps = defaultProps;

export default ActionButton;
