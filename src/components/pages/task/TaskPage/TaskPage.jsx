import React from 'react';
import { useParams } from 'react-router-dom';
import propTypes from './propTypes';
import styles from './TaskPage.css';
import TaskTitle from './../TaskTitle';
import getTicketName from './../../../../utils/getTicketName';

const TaskPage = ({ teamName, tasks }) => {
	const { id } = useParams();
	const taskData = tasks.find((task) => task.id == id);

	return (
		<div className={styles.wrapper}>
			<TaskTitle
				text={getTicketName({ taskId: taskData.id, taskTitle: taskData.title, teamName })}
			/>
		</div>
	);
};

TaskPage.propTypes = propTypes;

export default TaskPage;
