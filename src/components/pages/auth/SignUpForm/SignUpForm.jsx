import React from 'react';
import Modal from '../../../common/Modal';
import Form from '../../../common/Form';
import { API_URL } from '../../../../store/constants';

const SignUpForm = () => {
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
			placeholder: '********',
			type: 'password',
		},
		{
			name: 'team-name',
			label: 'Your team name:',
			placeholder: 'codemonsters',
			type: 'text',
		},

		{
			name: 'team-password',
			label: 'Your team password:',
			placeholder: '',
			type: 'password',
		},
	];

	const analogData = {
		text: 'Sign In!',
		link: '/sign-in',
	};

	const handleFormSubmit = () => {};

	return (
		<Modal>
			<Form
				onFormSubmit={handleFormSubmit}
				subtitle="To start work with our app you have to create an account..."
				fieldsData={fieldsData}
				analogData={analogData}
			/>
		</Modal>
	);
};

export default SignUpForm;
