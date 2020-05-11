import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Task from '../Task';

const Tasks = (props) => {
  useEffect(() => {
    props.requestTasks(props.currentPage, props.categoryFilter, props.readStatusFilter);
  }, [props.currentPage, props.categoryFilter, props.readStatusFilter]);

  const onTaskClick = (task) => () => {
    if (task.isRead) return;

    props.markTaskAsRead(task.ID, props.currentPage, props.categoryFilter, props.readStatusFilter);
  };

  const getPrettifiedDate = (date) => moment(date).format('MMM DD, YYYY, HH:mm');

  return (
    <tbody>
      {props.tasks.map((item) => (
        <Task
          key={item.ID}
          isRead={item.isRead}
          category={item.category}
          description={item.description}
          onTaskClick={onTaskClick(item)}
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
  markTaskAsRead: PropTypes.func,
  categoryFilter: PropTypes.string,
  readStatusFilter: PropTypes.string,
};

export default Tasks;
