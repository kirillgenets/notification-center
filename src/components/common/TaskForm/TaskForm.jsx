import React, { useState, useEffect } from 'react';
import Modal from './../Modal';
import Form from './../Form';
import propTypes from './propTypes';
import defaultProps from './defaultProps';
import fetchData from './../../../API/fetchData';
import { API_URL } from '../../../store/constants';

const TaskForm = ({ taskData, isEdit, onClose, requestTaskEdit, requestTaskCreation, teamId }) => {
	const [users, setUsers] = useState([]);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const fetchUsers = async () => {
		const response = await fetchData(`${API_URL}/Users`, { teamId: taskData.teamId });
		setUsers(response.data);
	};

	useEffect(() => {
		fetchUsers();
	}, []);

	const fieldsData = isEdit
		? [
				{
					name: 'id',
					type: 'hidden',
					required: true,
					defaultValue: taskData.id,
				},
				{
					name: 'team-id',
					type: 'hidden',
					required: true,
					defaultValue: taskData.teamId,
				},
				{
					name: 'team-name',
					type: 'hidden',
					required: true,
					defaultValue: taskData.teamName,
				},
				{
					name: 'date',
					type: 'hidden',
					required: true,
					defaultValue: taskData.date,
				},
				{
					name: 'title',
					label: 'Title:',
					type: 'text',
					required: false,
					defaultValue: taskData.title,
				},
				{
					name: 'description',
					label: 'Description:',
					type: 'textarea',
					required: false,
					defaultValue: taskData.description,
				},
				{
					name: 'category',
					label: 'Category:',
					type: 'text',
					required: false,
					defaultValue: taskData.category,
				},
				{
					name: 'completion-status',
					label: 'Is completed?',
					type: 'checkbox',
					required: false,
					checked: taskData.isCompleted,
				},
				{
					name: 'assignee-id',
					label: 'Assignee:',
					type: 'select',
					required: false,
					defaultValue: taskData.assigneeId,
					options: users.map((user) => ({
						value: user.id,
						text: user.login,
						selected: user.id === taskData.assigneeId,
					})),
				},
		  ]
		: [
				{
					name: 'title',
					label: 'Title:',
					type: 'text',
					required: true,
				},
				{
					name: 'description',
					label: 'Description:',
					type: 'text',
					required: false,
				},
				{
					name: 'category',
					label: 'Category:',
					type: 'text',
					required: true,
				},
				{
					name: 'assignee-id',
					label: 'Assignee:',
					type: 'select',
					required: false,
					defaultValue: taskData.assigneeId,
					options: users.map((user) => ({
						value: user.id,
						text: user.login,
						selected: user.id === taskData.assigneeId,
					})),
				},
		  ];

	const editTask = (taskData) => {
		requestTaskEdit({
			id: Number(taskData.get('id')),
			assigneeId: Number(taskData.get('assignee-id')),
			assigneeLogin: taskData.get('assignee-login'),
			teamId: Number(taskData.get('team-id')),
			teamName: taskData.get('team-name'),
			title: taskData.get('title'),
			description: taskData.get('description'),
			category: taskData.get('category'),
			isCompleted: taskData.get('completion-status') !== null,
		});
	};

	const createTask = (taskData) => {
		requestTaskCreation({
			assigneeId: Number(taskData.get('assignee-id')),
			teamId: teamId,
			title: taskData.get('title'),
			description: taskData.get('description'),
			category: taskData.get('category'),
			isCompleted: false,
		});
	};

	const handleFormSubmit = (evt) => {
		evt.preventDefault();

		const taskData = new FormData(evt.target);
		if (isEdit) {
			editTask(taskData);
		} else {
			createTask(taskData);
		}

		setIsSubmitted(true);
	};

	if (isSubmitted) return null;

	return (
		<Modal isClosable={true} onClose={onClose}>
			<Form title="" onFormSubmit={handleFormSubmit} fieldsData={fieldsData} />
		</Modal>
	);
};

TaskForm.propTypes = propTypes;
TaskForm.defaultProps = defaultProps;

export default TaskForm;
