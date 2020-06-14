import React, { useEffect } from 'react';
import moment from 'moment';
import propTypes from './propTypes';
import Task from '../Task';

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
					title={item.title}
					date={getPrettifiedDate(item.date)}
				/>
			))}
		</tbody>
	);
};

Tasks.propTypes = propTypes;

export default Tasks;
