import React from 'react';
import Modal from './../Modal';
import Form from './../Form';
import propTypes from './propTypes';
import defaultProps from './defaultProps';

const TaskForm = ({ taskData, isEdit, onClose }) => {
	const fieldsData = isEdit
		? [
				{
					name: 'id',
					type: 'hidden',
					required: true,
					defaultValue: taskData.id,
				},
				{
					name: 'assignee-id',
					type: 'hidden',
					required: true,
					defaultValue: taskData.assigneeId,
				},
				{
					name: 'assignee-login',
					type: 'hidden',
					required: true,
					defaultValue: taskData.assigneeLogin,
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
					name: 'assigneeId',
					type: 'hidden',
					required: true,
					defaultValue: taskData.assigneeId,
				},
				{
					name: 'assigneeLogin',
					type: 'hidden',
					required: true,
					defaultValue: taskData.assigneeLogin,
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
					type: 'text',
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
					label: 'Completion status:',
					type: 'checkbox',
					required: false,
					checked: taskData.isCompleted,
				},
		  ]
		: [
				{
					name: 'assigneeLogin',
					label: 'Assignee:',
					type: 'text',
					required: true,
				},
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
					name: 'completion-status',
					label: 'Completion status:',
					type: 'checkbox',
					required: true,
				},
		  ];

	const handleFormSubmit = () => {};

	return (
		<Modal isClosable={true} onClose={onClose}>
			<Form title="" onFormSubmit={handleFormSubmit} fieldsData={fieldsData} />
		</Modal>
	);
};

TaskForm.propTypes = propTypes;
TaskForm.defaultProps = defaultProps;

export default TaskForm;
