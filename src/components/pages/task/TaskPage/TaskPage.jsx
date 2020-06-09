import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import propTypes from './propTypes';
import styles from './TaskPage.css';
import ActionButton from './../../../common/ActionButton';
import Comments from './../Comments';
import TaskForm from './../../../common/TaskForm';
import getTicketName from './../../../../utils/getTicketName';

const TaskPage = ({ teamId, teamName, tasks, userLogin }) => {
	const [isEdit, setIsEdit] = useState(false);

	const history = useHistory();
	const { id } = useParams();
	const taskData = tasks.find((task) => task.id == id);

	const handleEditButtonClick = () => {
		setIsEdit(true);
	};

	const handleEditFormClose = () => {
		setIsEdit(false);
	};

	const handleBackButtonClick = () => {
		history.push('/');
	};

	const renderDetails = () => (
		<div className={styles.details}>
			<h3 className={styles['block-title']}>Details</h3>
			<p className={styles['details-item']}>
				Category: <span className={styles['details-value']}>{taskData.category.toUpperCase()}</span>
			</p>
			<p className={styles['details-item']}>
				Completion status:{' '}
				<span className={styles['details-value']}>
					{taskData.isCompleted ? 'Completed' : 'Not completed'}
				</span>
			</p>
			<p className={styles['details-item']}>
				Assignee: <span className={styles['details-value']}>{userLogin}</span>
			</p>
		</div>
	);

	const renderDescription = () => (
		<div className={styles.description}>
			<h3 className={styles['block-title']}>Description:</h3>
			<p className={styles['description-text']}>{taskData.description}</p>
		</div>
	);

	return (
		<div className={styles['global-wrapper']}>
			{isEdit ? <TaskForm isEdit={true} onClose={handleEditFormClose} taskData={taskData} /> : null}
			<div className={styles.wrapper}>
				<div className={styles['data-wrapper']}>
					<h1 className={styles.title}>
						{getTicketName({ taskId: taskData.id, taskTitle: taskData.title, teamName })}
					</h1>
					<ActionButton title="Edit" onClick={handleEditButtonClick} />
					{renderDetails()}
					{renderDescription()}
				</div>
				<Comments teamId={teamId} taskId={id} />
			</div>
			<ActionButton title="🠈 Back" onClick={handleBackButtonClick} />
		</div>
	);
};

TaskPage.propTypes = propTypes;

export default TaskPage;
