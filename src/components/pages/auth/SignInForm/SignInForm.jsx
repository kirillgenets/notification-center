import React, { useEffect } from 'react';
import Modal from '../../../common/Modal';
import Form from '../../../common/Form';
import propTypes from './propTypes';

const SignInForm = ({ error, requestUserSignIn, removeSignInError }) => {
	useEffect(() => {
		return () => {
			removeSignInError();
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
	];

	const analogData = {
		text: 'Sign Up!',
		link: '/sign-up',
	};

	const handleFormSubmit = (evt) => {
		evt.preventDefault();

		const userData = new FormData(evt.target);
		const login = userData.get('login');
		const password = userData.get('password');
		const teamName = userData.get('team-name');

		requestUserSignIn({ login, password, teamName });
	};

	return (
		<Modal>
			<Form
				onFormSubmit={handleFormSubmit}
				subtitle="If you already have an account:"
				fieldsData={fieldsData}
				analogData={analogData}
				error={error}
			/>
		</Modal>
	);
};

SignInForm.propTypes = propTypes;

export default SignInForm;
