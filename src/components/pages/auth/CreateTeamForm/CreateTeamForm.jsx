import React, { useEffect, useState } from 'react';
import Modal from '../../../common/Modal';
import Form from '../../../common/Form';
import propTypes from './propTypes';

const CreateTeamForm = ({ error, requestTeamCreation, removeCreateTeamError }) => {
	const [isSubmitted, setIsSubmitted] = useState(false);

	useEffect(() => {
		return () => {
			removeCreateTeamError();
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
			name: 'title',
			label: 'Title:',
			placeholder: 'Code Monsters',
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
		const name = userData.get('name');
		const password = userData.get('password');
		const title = userData.get('title');

		requestTeamCreation({ name, title, password });
		setIsSubmitted(true);
	};

	return (
		<React.Fragment>
			<Modal>
				<Form
					onFormSubmit={handleFormSubmit}
					subtitle="Information about your team:"
					fieldsData={fieldsData}
					analogData={analogData}
					error={error}
				/>
			</Modal>
			{isSubmitted && !error ? (
				<Modal boxShadow="0px 0px 24px 0px rgba(0,0,0,0.75)" isClosable={true}>
					Your team is successfully created!
				</Modal>
			) : null}
		</React.Fragment>
	);
};

CreateTeamForm.propTypes = propTypes;

export default CreateTeamForm;
