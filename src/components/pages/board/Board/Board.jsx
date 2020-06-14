import React, { useState } from 'react';
import Table from './../Table';
import PaginationContainer from '../../../../containers/PaginationContainer';
import ActionButton from './../../../common/ActionButton';
import styles from './Board.css';
import TaskFormContainer from '../../../../containers/TaskFormContainer';

const Board = () => {
	const [isCreatingTask, setIsCreatingTask] = useState(false);

	const handleAddTaskClick = () => {
		setIsCreatingTask(true);
	};

	const handleAddTaskFormClose = () => {
		setIsCreatingTask(addFallbackNodesSizes);
	};

	return (
		<React.Fragment>
			{isCreatingTask ? <TaskFormContainer onClose={handleAddTaskFormClose} /> : null}
			<Table />
			<div className={styles['add-task']}>
				<ActionButton title="Add task" onClick={handleAddTaskClick} />
			</div>
			<PaginationContainer />
		</React.Fragment>
	);
};

export default Board;
