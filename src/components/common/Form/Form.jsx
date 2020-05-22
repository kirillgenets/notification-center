import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import isObjectEmpty from '../../../utils/isObjectEmpty';
import propTypes from './propTypes';
import defaultProps from './defaultProps';
import styles from './Form.css';

const Form = ({ onFormSubmit, fieldsData, title, description, subtitle, analogData }) => {
	const renderFields = () =>
		fieldsData.map(({ name, label, type, placeholder }) => (
			<div className={styles['input-wrapper']}>
				<label className={styles.label} htmlFor={name}>
					{label}
				</label>
				<input
					className={styles[type ? `input-type-${type}` : 'input-type-text']}
					type={type ? type : 'text'}
					name={name}
					placeholder={placeholder ? placeholder : ''}
					id={name}
				/>
			</div>
		));

	const renderAnalogLink = () =>
		analogData && !isObjectEmpty(analogData) ? (
			<p className={styles.analog}>
				Or...{' '}
				<Link className={styles['analog-link']} to={analogData.link}>
					{analogData.text}
				</Link>
			</p>
		) : null;

	return (
		<form className={styles.form} onSubmit={onFormSubmit}>
			{title ? <h2 className={styles.title}>{title}</h2> : null}
			{description ? <p className={styles.description}>{description}</p> : null}
			{subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
			<fieldset className={styles.fieldset}>{renderFields()}</fieldset>
			<button className={styles.submit} type="submit">
				Submit
			</button>
			{renderAnalogLink()}
		</form>
	);
};

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;

export default Form;
