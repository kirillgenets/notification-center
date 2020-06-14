import React, { useEffect } from 'react';
import Modal from '../../../common/Modal';
import Form from '../../../common/Form';
import propTypes from './propTypes';

const CreateTeamForm = ({ error, requestUserSignIn, removeSignInError }) => {
	useEffect(() => {
		return () => {
			removeSignInError();
		};
	}, []);

	const fieldsData = [
		{
			name: 'name',
			label: 'Name:',
			placeholder: 'codemonsters',
			type: 'text',
			required: true,
		},
		{
			name: 'password',
			label: 'Password:',
			placeholder: '********',
			type: 'password',
			required: true,
			minLength: 8,
			maxLength: 50,
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

CreateTeamForm.propTypes = propTypes;

export default CreateTeamForm;
