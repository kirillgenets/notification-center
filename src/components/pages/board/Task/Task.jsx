import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import classNames from 'classnames';
import propTypes from './propTypes';
import defaultProps from './defaultProps';
import styles from './Task.css';

const Task = ({ id, category, title, isCompleted, date }) => {
	const completionStatus = isCompleted ? 'complete' : 'incomplete';
	return (
		<tr className={classNames(styles.task, styles[completionStatus])}>
			<td className={classNames(styles.category, styles[category.toLowerCase()])}>
				{category.toUpperCase()}
			</td>
			<td className={styles.text}>
				<Link className={styles.link} to={`/task/${id}`}>
					{title}
				</Link>
			</td>
			<td className={styles.date}>{date}</td>
		</tr>
	);
};

Task.propTypes = propTypes;
Task.defaultProps = defaultProps;

export default Task;
