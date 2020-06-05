import React from 'react';
import propTypes from './propTypes';
import styles from './TaskTitle.css';

const TaskTitle = ({ text }) => {
	return <h1 className={styles.text}>{text}</h1>;
};

TaskTitle.propTypes = propTypes;

export default TaskTitle;
