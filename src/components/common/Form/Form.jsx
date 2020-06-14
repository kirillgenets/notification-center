import React from 'react';
import classNames from 'classnames';
import { NavLink as Link } from 'react-router-dom';
import isObjectEmpty from '../../../utils/isObjectEmpty';
import propTypes from './propTypes';
import defaultProps from './defaultProps';
import styles from './Form.css';
import uuid from 'uuid/dist/v1';

const Form = ({ onFormSubmit, fieldsData, title, description, subtitle, analogData, error }) => {
	const renderInput = (data) => {
		const { name, type, placeholder, required, minLength, maxLength, defaultValue, checked } = data;

		const props = {
			className: classNames(styles.input, styles[type ? `input-type-${type}` : 'input-type-text']),
			type: type ? type : 'text',
			name,
			placeholder: placeholder ? placeholder : '',
			id: name,
			required,
			minLength,
			maxLength,
			defaultChecked: checked,
		};

		if (type !== 'checkbox') {
			props.defaultValue = defaultValue;
		}

		return <input {...props} />;
	};

	const renderSelect = (data) => {
		const { options, required, name } = data;

		return (
			<select required={required} name={name}>
				{options.map(({ value, text, selected }) => (
					<option key={uuid()} value={value} selected={selected}>
						{text}
					</option>
				))}
			</select>
		);
	};

	const renderTextArea = (data) => {
		const { name, placeholder, required, minLength, maxLength, defaultValue } = data;

		return (
			<textarea
				className={classNames(styles.input, styles.textarea)}
				name={name}
				placeholder={placeholder}
				required={required}
				minLength={minLength}
				maxLength={maxLength}
			>
				{defaultValue}
			</textarea>
		);
	};

	const renderCorrectField = (data) => {
		const { type } = data;

		switch (type) {
			case 'select':
				return renderSelect(data);
			case 'textarea':
				return renderTextArea(data);
			default:
				return renderInput(data);
		}
	};

	const renderFields = () =>
		fieldsData.map((data) => (
			<div key={`${data.name}_${data.type}`} className={styles['input-wrapper']}>
				{data.label ? (
					<label className={styles.label} htmlFor={data.name}>
						{data.label}
					</label>
				) : null}
				{renderCorrectField(data)}
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
