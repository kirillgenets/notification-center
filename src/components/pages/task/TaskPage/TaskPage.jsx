import React from 'react';
import { useParams } from 'react-router-dom';
import propTypes from './propTypes';
import styles from './TaskPage.css';
import ActionButton from './../../../common/ActionButton';
import getTicketName from './../../../../utils/getTicketName';

const TaskPage = ({ teamName, tasks, userLogin }) => {
	const { id } = useParams();
	const taskData = tasks.find((task) => task.id == id);

	const handleEditButtonClick = () => [];

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
		<div className={styles.wrapper}>
			<div className={styles['data-wrapper']}>
				<h1 className={styles.title}>
					{getTicketName({ taskId: taskData.id, taskTitle: taskData.title, teamName })}
				</h1>
				<ActionButton title="Edit" onClick={handleEditButtonClick} />
				{renderDetails()}
				{renderDescription()}
			</div>
		</div>
	);
};

TaskPage.propTypes = propTypes;

export default TaskPage;
