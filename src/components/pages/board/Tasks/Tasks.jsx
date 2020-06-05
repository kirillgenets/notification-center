import React, { useEffect } from 'react';
import moment from 'moment';
import propTypes from './propTypes';
import Task from '../Task';
import getTicketName from './../../../../utils/getTicketName';

const Tasks = ({
	tasks,
	currentPage,
	categoryFilter,
	completionStatusFilter,
	requestTasks,
	team: { id: teamId, name: teamName },
}) => {
	useEffect(() => {
		requestTasks({
			page: currentPage,
			category: categoryFilter,
			isCompleted: completionStatusFilter,
			teamId,
		});
	}, [currentPage, categoryFilter, completionStatusFilter]);

	const getPrettifiedDate = (date) => moment(date).format('MMM DD, YYYY, HH:mm');

	return (
		<tbody>
			{tasks.map((item) => (
				<Task
					key={item.id}
					id={item.id}
					isCompleted={item.isCompleted}
					category={item.category}
					title={getTicketName({ teamName, taskId: item.id, taskTitle: item.title })}
					date={getPrettifiedDate(item.createdOn)}
				/>
			))}
		</tbody>
	);
};

Tasks.propTypes = propTypes;

export default Tasks;
