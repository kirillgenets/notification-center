import React, { useState } from 'react';
import propTypes from './propTypes';
import defaultProps from './defaultProps';
import styles from './Modal.css';
import ActionButton from '../ActionButton';

const Modal = ({ backgroundColor, boxShadow, children, isClosable, onClose }) => {
	const [isClosed, setIsClosed] = useState(false);

	const handleCloseButtonClick = () => {
		onClose();
		setIsClosed(true);
	};

	if (isClosed) return null;

	return (
		<div
			className={styles.wrapper}
			style={{
				backgroundColor,
				boxShadow,
			}}
		>
			{isClosable ? (
				<div className={styles.close}>
					<ActionButton onClick={handleCloseButtonClick} title="⨯" />
				</div>
			) : null}
			{children}
		</div>
	);
};

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
