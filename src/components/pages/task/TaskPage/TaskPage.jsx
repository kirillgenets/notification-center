import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import propTypes from './propTypes';
import styles from './TaskPage.css';
import ActionButton from './../../../common/ActionButton';
import Comments from './../Comments';
import TaskFormContainer from './../../../../containers/TaskFormContainer';
import fetchData from './../../../../API/fetchData';
import { API_URL } from '../../../../store/constants';

const TaskPage = ({ teamId, tasks }) => {
	const [isEdit, setIsEdit] = useState(false);
	const [assignee, setAssignee] = useState({});

	const history = useHistory();
	const { id } = useParams();
	const taskData = tasks.find((task) => task.id == id);

	const fetchAssigneeData = async () => {
		const response = await fetchData(`${API_URL}/Users/${taskData.assigneeId}`);
		setAssignee(response.data);
	};

	useEffect(() => {
		fetchAssigneeData();
	}, []);

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
				Assignee: <span className={styles['details-value']}>{assignee.login}</span>
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
			{isEdit ? (
				<TaskFormContainer isEdit={true} onClose={handleEditFormClose} taskData={taskData} />
			) : null}
			<div className={styles.wrapper}>
				<div className={styles['data-wrapper']}>
					<h1 className={styles.title}>{taskData.title}</h1>
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
