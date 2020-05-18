import React from 'react';
import propTypes from './propTypes';
import defaultProps from './defaultProps';
import styles from './style.css';

const Form = ({ actionURL, fieldsData, method, title, description, subtitle, analogData }) => {
	const renderFields = () =>
		fieldsData.map(({ name, label, type, placeholder }) => (
			<div className={styles['field-wrapper']}>
				<label className={styles.label} htmlFor={name}>
					{label}
				</label>
				<input
					id={name}
					className={styles[type ? `input-${type}` : 'input-text']}
					type={type ? type : 'text'}
				/>
			</div>
		));

	return (
		<form className={styles.form} method={method} action={actionURL}>
			{title ? <h2 className={styles.title}>{title}</h2> : null}
			{description ? <p className={styles.description}>{description}</p> : null}
			{subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
		</form>
	);
};

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;

export default Form;
