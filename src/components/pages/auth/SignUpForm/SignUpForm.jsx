import React, { useEffect } from 'react';
import Modal from '../../../common/Modal';
import Form from '../../../common/Form';
import propTypes from './propTypes';

const SignUpForm = ({ requestUserRegistration, error, removeSignUpError }) => {
	useEffect(() => {
		return () => {
			removeSignUpError();
		};
	}, []);

	const fieldsData = [
		{
			name: 'login',
			label: 'Your login:',
			placeholder: 'bestcoder123',
			type: 'text',
			required: true,
		},
		{
			name: 'password',
			label: 'Your password:',
			placeholder: '********',
			type: 'password',
			required: true,
			minLength: 8,
			maxLength: 50,
		},
		{
			name: 'team-name',
			label: 'Your team name:',
			placeholder: 'codemonsters',
			type: 'text',
			required: true,
		},

		{
			name: 'team-password',
			label: 'Your team password:',
			placeholder: '********',
			type: 'password',
			required: true,
		},
	];

	const analogData = {
		text: 'Sign In!',
		link: '/sign-in',
	};

	const handleFormSubmit = (evt) => {
		evt.preventDefault();

		const userData = new FormData(evt.target);
		const login = userData.get('login');
		const password = userData.get('password');
		const teamName = userData.get('team-name');
		const teamPassword = userData.get('team-password');

		requestUserRegistration({ login, password, teamName, teamPassword });
	};

	return (
		<Modal>
			<Form
				onFormSubmit={handleFormSubmit}
				subtitle="To start work with our app you have to create an account..."
				fieldsData={fieldsData}
				analogData={analogData}
				error={error}
			/>
		</Modal>
	);
};

SignUpForm.propTypes = propTypes;

export default SignUpForm;
