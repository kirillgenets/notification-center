import React from 'react';
import propTypes from './propTypes';
import defaultProps from './defaultProps';
import Form from '../../../common/Form';
import { API_URL } from '../../../../store/constants';

const SignInForm = ({}) => {
	const fieldsData = [
		{
			name: 'login',
			label: 'Your login:',
			placeholder: 'bestcoder123',
			type: 'text',
		},
		{
			name: 'password',
			label: 'Your password:',
			placeholder: '',
			type: 'password',
		},
		{
			name: 'team-name',
			label: 'Your team name:',
			placeholder: 'codemonsters',
			type: 'text',
		},
	];

	const analogData = {
		text: 'Sign Up!',
		link: '/sign-up',
	};

	const handleFormSubmit = () => {};

	return (
		<Form
			onFormSubmit={handleFormSubmits}
			subtitle="If you already have an account:"
			fieldsData={fieldsData}
			analogData={analogData}
		/>
	);
};

SignInForm.propTypes = propTypes;
SignInForm.defaultProps = defaultProps;

export default SignInForm;
