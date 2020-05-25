import React from 'react';
import propTypes from './propTypes';
import defaultProps from './defaultProps';
import styles from './Modal.css';

const Modal = ({ backgroundColor, boxShadow, children }) => {
	return (
		<div
			className={styles.wrapper}
			style={{
				backgroundColor,
				boxShadow,
			}}
		>
			{children}
		</div>
	);
};

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
