import React from 'react';
import propTypes from './propTypes';
import defaultProps from './defaultProps';
import styles from './Modal.css';

const Modal = ({ backgroundColor, padding, boxShadow, borderRadius, children }) => {
	const getPaddingStyle = () => {
		if (typeof padding === 'string') {
			return { padding };
		}

		return {
			paddingTop: padding.top,
			paddingBottom: padding.bottom,
			paddingLeft: padding.left,
			paddingRight: padding.right,
		};
	};

	return (
		<div
			style={{
				backgroundColor,
				boxShadow,
				borderRadius,
				...getPaddingStyle(),
			}}
		>
			{children}
		</div>
	);
};

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
