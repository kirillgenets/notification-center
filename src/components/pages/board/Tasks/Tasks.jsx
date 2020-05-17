import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Task from '../Task';

const Tasks = (props) => {
	useEffect(() => {
		props.requestTasks(props.currentPage, props.categoryFilter, props.completionStatusFilter);
	}, [props.currentPage, props.categoryFilter, props.completionStatusFilter]);

	const getPrettifiedDate = (date) => moment(date).format('MMM DD, YYYY, HH:mm');

	return (
		<tbody>
			{props.tasks.map((item) => (
				<Task
					key={item.ID}
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
	markTaskAsCompleted: PropTypes.func,
	categoryFilter: PropTypes.string,
	completionStatusFilter: PropTypes.string,
};

export default Tasks;
