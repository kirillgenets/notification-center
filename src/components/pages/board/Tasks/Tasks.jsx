import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Task from '../Task';

const Tasks = ({
	tasks,
	currentPage,
	categoryFilter,
	completionStatusFilter,
	requestTasks,
	user: { teamId },
}) => {
	useEffect(() => {
		requestTasks({ currentPage, categoryFilter, completionStatusFilter, teamId });
	}, [currentPage, categoryFilter, completionStatusFilter]);

	const getPrettifiedDate = (date) => moment(date).format('MMM DD, YYYY, HH:mm');

	return (
		<tbody>
			{tasks.map((item) => (
				<Task
					key={item.id}
					isCompleted={item.isCompleted}
					category={item.category}
					description={item.description}
					date={getPrettifiedDate(item.createdOn)}
				/>
			))}
		</tbody>
	);
};

Tasks.propTypes = {
	requestTasks: PropTypes.func.isRequired,
	tasks: PropTypes.array.isRequired,
	currentPage: PropTypes.number.isRequired,
	user: PropTypes.object.isRequired,
	markTaskAsCompleted: PropTypes.func,
	categoryFilter: PropTypes.string,
	completionStatusFilter: PropTypes.string,
};

export default Tasks;
