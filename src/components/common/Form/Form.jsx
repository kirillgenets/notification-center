import React from 'react';
import classNames from 'classnames';
import { NavLink as Link } from 'react-router-dom';
import isObjectEmpty from '../../../utils/isObjectEmpty';
import propTypes from './propTypes';
import defaultProps from './defaultProps';
import styles from './Form.css';

const Form = ({ onFormSubmit, fieldsData, title, description, subtitle, analogData, error }) => {
	const renderFields = () =>
		fieldsData.map(
			({
				name,
				label,
				type,
				placeholder,
				required,
				minLength,
				maxLength,
				defaultValue,
				checked,
			}) => (
				<div key={`${name}_${type}`} className={styles['input-wrapper']}>
					{label ? (
						<label className={styles.label} htmlFor={name}>
							{label}
						</label>
					) : null}
					<input
						className={classNames(
							styles.input,
							styles[type ? `input-type-${type}` : 'input-type-text']
						)}
						type={type ? type : 'text'}
						name={name}
						placeholder={placeholder ? placeholder : ''}
						id={name}
						required={required}
						minLength={minLength}
						maxLength={maxLength}
						defaultValue={defaultValue ? defaultValue : ''}
						defaultChecked={checked}
					/>
				</div>
			)
		);

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
			{error ? <p className={styles.error}>{error}</p> : null}
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
